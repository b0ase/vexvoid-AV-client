#!/usr/bin/env node
// V3XV0ID mixer relay: lets claude.ai (web, phone, desktop connectors) drive a performer's mixer.
//
// claude.ai only talks to public MCP servers, and a mixer sits behind a home or venue router. So the
// app connects OUT to this relay and holds the connection open; claude.ai calls the relay; the relay passes
// each tool call down that connection and returns the answer.
//
//   app    POST /device/register            -> {deviceId, secret}   (once; the app keeps them)
//          GET  /device/link   (SSE)         commands arrive here    Authorization: Bearer <secret>
//          POST /device/result               answers go back here
//          POST /device/pair                 -> {code}  6 characters shown in the app for 10 minutes
//          POST /device/unpair               revoke every claude.ai grant for this mixer
//   claude.ai  MCP over HTTP at POST /mcp, with OAuth 2.1: discovery under /.well-known, dynamic client
//          registration at /register, /authorize (the performer types the code their mixer shows), /token (PKCE).
//
// No dependencies. State lives in DATA_DIR/state.json; secrets and tokens are stored only as SHA-256 hashes.
//   PUBLIC_URL=https://mixer.vexvoid.com PORT=8787 DATA_DIR=./data node relay/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { tools, handleRpc, REMOTE_COMMANDS } = require('../mcp/tools');

const PORT = Number(process.env.PORT) || 8787;
const HOST = process.env.HOST || '127.0.0.1';
const BASE = (process.env.PUBLIC_URL || `http://127.0.0.1:${PORT}`).replace(/\/$/, '');
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const STATE_FILE = path.join(DATA_DIR, 'state.json');
const ACCESS_TTL = 3600 * 1000;
const REFRESH_TTL = 90 * 24 * 3600 * 1000;
const INFO = { name: 'vexvoid-mixer-relay', version: '3.1.0' };
const TOOLS = tools({ remote: true });

// Redirect URIs a registered client may use: claude.ai / claude.com connectors, and loopback for native clients.
const REDIRECT_OK = [/^https:\/\/claude\.ai\/api\/mcp\/auth_callback$/, /^https:\/\/claude\.com\/api\/mcp\/auth_callback$/, /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/[^\s]*$/];

const sha = s => crypto.createHash('sha256').update(String(s)).digest('hex');
const rand = (n = 32) => crypto.randomBytes(n).toString('base64url');
const now = () => Date.now();

// ---- persistent state ----
let state = { devices: {}, clients: {}, tokens: {} };
try { state = Object.assign(state, JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))); } catch (e) {}
let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
    fs.writeFileSync(STATE_FILE + '.tmp', JSON.stringify(state), { mode: 0o600 });
    fs.renameSync(STATE_FILE + '.tmp', STATE_FILE);
  }, 200);
}
function prune() { // expired tokens; client registrations never used within a day; devices idle 60 days with no grants
  let n = 0;
  for (const [h, t] of Object.entries(state.tokens)) if (t.exp < now()) { delete state.tokens[h]; n++; }
  const live = Object.values(state.tokens);
  for (const [id, c] of Object.entries(state.clients)) if (c.created < now() - 864e5 && !live.some(t => t.clientId === id)) { delete state.clients[id]; n++; }
  for (const [id, d] of Object.entries(state.devices)) if ((d.lastSeen || d.created) < now() - 60 * 864e5 && !live.some(t => t.deviceId === id)) { delete state.devices[id]; n++; }
  if (n) save();
}
prune();
setInterval(prune, 10 * 60 * 1000).unref();

// ---- short-lived, in memory ----
const links = new Map();    // deviceId -> { res, pending: Map(id -> {resolve, timer}) }
const pairCodes = new Map(); // code -> { deviceId, exp }
const authCodes = new Map(); // code -> { clientId, deviceId, redirectUri, challenge, resource, exp }
const buckets = new Map();   // ip:route -> { n, reset }

function limited(req, route, max, perMs) {
  // behind our proxy the last X-Forwarded-For entry is the one it added; earlier entries are whatever the client sent
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',').pop().trim();
  const k = ip + ':' + route, b = buckets.get(k);
  if (!b || b.reset < now()) { buckets.set(k, { n: 1, reset: now() + perMs }); return false; }
  b.n++;
  return b.n > max;
}
setInterval(() => { for (const [k, b] of buckets) if (b.reset < now()) buckets.delete(k); for (const [k, c] of pairCodes) if (c.exp < now()) pairCodes.delete(k); for (const [k, c] of authCodes) if (c.exp < now()) authCodes.delete(k); }, 60000).unref();

// ---- helpers ----
function json(res, code, body, headers) {
  res.writeHead(code, { 'content-type': 'application/json', 'cache-control': 'no-store', ...(headers || {}) });
  res.end(JSON.stringify(body));
}
function html(res, code, body) {
  res.writeHead(code, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-frame-options': 'DENY',
    'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self' https://claude.ai https://claude.com http://localhost:* http://127.0.0.1:*" });
  res.end(body);
}
function readBody(req, limit = 4e6) {
  return new Promise((resolve, reject) => {
    let b = '';
    req.on('data', c => { b += c; if (b.length > limit) { reject(new Error('too large')); req.destroy(); } });
    req.on('end', () => resolve(b));
    req.on('error', reject);
  });
}
function parseBody(req, raw) {
  if (!raw) return {};
  if ((req.headers['content-type'] || '').includes('application/json')) return JSON.parse(raw);
  return Object.fromEntries(new URLSearchParams(raw));
}
function bearer(req) { return (req.headers.authorization || '').replace(/^Bearer\s+/i, '').trim(); }
function deviceFromSecret(req) {
  const id = req.headers['x-device-id'];
  const d = id && state.devices[id];
  if (!d) return null;
  const a = Buffer.from(sha(bearer(req))), b = Buffer.from(d.secretHash);
  return a.length === b.length && crypto.timingSafeEqual(a, b) ? id : null;
}
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---- talking to a mixer ----
function sendToDevice(deviceId, cmd, args, timeoutMs = 30000) {
  const link = links.get(deviceId);
  if (!link) return Promise.resolve({ ok: false, error: 'The mixer is offline. Open V3XV0ID AV Client on the performance computer (it reconnects by itself).' });
  if (!REMOTE_COMMANDS.includes(cmd)) return Promise.resolve({ ok: false, error: 'command not allowed remotely: ' + cmd });
  const id = rand(9);
  return new Promise(resolve => {
    const timer = setTimeout(() => { link.pending.delete(id); resolve({ ok: false, error: 'the mixer did not answer in time' }); }, timeoutMs);
    link.pending.set(id, { resolve, timer });
    link.res.write(`event: cmd\ndata: ${JSON.stringify({ id, cmd, args: args || {} })}\n\n`);
  });
}
function ioFor(deviceId) {
  return {
    cmd: (name, args) => sendToDevice(deviceId, name, args),
    snapshot: async width => {
      const r = await sendToDevice(deviceId, 'snapshot', { width });
      if (!r.ok) throw new Error(r.error);
      return Buffer.from(r.result.jpeg, 'base64');
    }
  };
}

// ---- OAuth ----
function asMetadata() {
  return {
    issuer: BASE,
    authorization_endpoint: BASE + '/authorize',
    token_endpoint: BASE + '/token',
    registration_endpoint: BASE + '/register',
    revocation_endpoint: BASE + '/revoke',
    response_types_supported: ['code'],
    grant_types_supported: ['authorization_code', 'refresh_token'],
    code_challenge_methods_supported: ['S256'],
    token_endpoint_auth_methods_supported: ['none'],
    scopes_supported: ['mixer']
  };
}
function prMetadata() {
  return { resource: BASE + '/mcp', authorization_servers: [BASE], bearer_methods_supported: ['header'], scopes_supported: ['mixer'], resource_name: 'V3XV0ID mixer' };
}
function issueTokens(clientId, deviceId) {
  const access = 'vxa_' + rand(), refresh = 'vxr_' + rand();
  state.tokens[sha(access)] = { kind: 'access', clientId, deviceId, exp: now() + ACCESS_TTL };
  state.tokens[sha(refresh)] = { kind: 'refresh', clientId, deviceId, exp: now() + REFRESH_TTL };
  save();
  return { access_token: access, token_type: 'Bearer', expires_in: ACCESS_TTL / 1000, refresh_token: refresh, scope: 'mixer' };
}
function authorizePage(q, error) {
  const client = state.clients[q.client_id];
  const hidden = ['response_type', 'client_id', 'redirect_uri', 'code_challenge', 'code_challenge_method', 'state', 'scope', 'resource']
    .map(k => q[k] != null ? `<input type="hidden" name="${k}" value="${esc(q[k])}">` : '').join('');
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Connect your V3XV0ID mixer</title>
<style>body{background:#000;color:#eee;font:14px/1.5 'Courier New',monospace;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:16px}
main{max-width:420px;width:100%;border:1px solid #444;padding:28px}h1{font-size:15px;letter-spacing:.35em;margin:0 0 18px}p{color:#aaa;font-size:12px}
input[name=pair]{width:100%;box-sizing:border-box;background:#000;color:#fff;border:1px solid #666;font:28px/1 'Courier New',monospace;letter-spacing:.4em;text-transform:uppercase;padding:12px;text-align:center}
button{margin-top:14px;width:100%;background:#fff;color:#000;border:0;padding:12px;font:13px 'Courier New',monospace;letter-spacing:.3em;cursor:pointer}.err{color:#000;background:#fff;padding:6px 8px;font-size:12px}</style></head>
<body><main><h1>V3XV0ID MIXER</h1>
<p>${esc(client ? client.name : 'An app')} wants to control your mixer: crossfade, send sketches, load catalogue media, play music and see the output.</p>
<p>In V3XV0ID AV Client, click <b>CLAUDE.AI</b> in the header and type the code it shows.</p>
${error ? `<p class="err">${esc(error)}</p>` : ''}
<form method="post" action="/authorize">${hidden}<input name="pair" autocomplete="off" autofocus maxlength="6" placeholder="······" required><button type="submit">CONNECT</button></form>
</main></body></html>`;
}
function checkAuthorizeParams(q) {
  const client = state.clients[q.client_id];
  if (!client) return 'Unknown app (client_id). Remove the connector in claude.ai and add it again.';
  if (q.response_type !== 'code') return 'Only response_type=code is supported.';
  if (!client.redirect_uris.includes(q.redirect_uri)) return 'That redirect address is not registered for this app.';
  if (!q.code_challenge || q.code_challenge_method !== 'S256') return 'PKCE (S256) is required.';
  return null;
}

// ---- server ----
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, BASE);
  const p = url.pathname;
  try {
    if (req.method === 'OPTIONS') { res.writeHead(204, { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET, POST, DELETE', 'access-control-allow-headers': 'authorization, content-type, mcp-session-id, mcp-protocol-version' }); return res.end(); }

    if (p === '/' && req.method === 'GET') return html(res, 200, `<!doctype html><meta charset="utf-8"><title>V3XV0ID mixer relay</title><body style="background:#000;color:#ddd;font:14px 'Courier New',monospace;padding:40px"><h1 style="letter-spacing:.3em;font-size:15px">V3XV0ID MIXER RELAY</h1><p>Add <b>${esc(BASE)}/mcp</b> as a custom connector in claude.ai to control your mixer.</p>`);
    if (p === '/healthz') return json(res, 200, { ok: true, devicesOnline: links.size });

    // discovery
    if (p === '/.well-known/oauth-protected-resource' || p === '/.well-known/oauth-protected-resource/mcp') return json(res, 200, prMetadata(), { 'access-control-allow-origin': '*' });
    if (p === '/.well-known/oauth-authorization-server' || p === '/.well-known/oauth-authorization-server/mcp' || p === '/.well-known/openid-configuration') return json(res, 200, asMetadata(), { 'access-control-allow-origin': '*' });

    // dynamic client registration (RFC 7591)
    if (p === '/register' && req.method === 'POST') {
      if (limited(req, 'register', 20, 3600e3)) return json(res, 429, { error: 'slow_down' });
      const b = parseBody(req, await readBody(req, 1e5));
      const uris = Array.isArray(b.redirect_uris) ? b.redirect_uris.map(String) : [];
      if (!uris.length || !uris.every(u => REDIRECT_OK.some(re => re.test(u)))) return json(res, 400, { error: 'invalid_redirect_uri', error_description: 'redirect_uris must be the claude.ai callback or a loopback address' });
      const clientId = 'vxc_' + rand(16);
      state.clients[clientId] = { name: String(b.client_name || 'MCP client').slice(0, 80), redirect_uris: uris, created: now() };
      save();
      return json(res, 201, { client_id: clientId, client_id_issued_at: Math.floor(now() / 1000), client_name: state.clients[clientId].name, redirect_uris: uris,
        token_endpoint_auth_method: 'none', grant_types: ['authorization_code', 'refresh_token'], response_types: ['code'] });
    }

    // authorization: the performer proves they are at the mixer by typing its pairing code
    if (p === '/authorize' && req.method === 'GET') {
      const q = Object.fromEntries(url.searchParams);
      const bad = checkAuthorizeParams(q);
      if (bad) return html(res, 400, authorizePage({}, bad));
      return html(res, 200, authorizePage(q));
    }
    if (p === '/authorize' && req.method === 'POST') {
      const q = parseBody(req, await readBody(req, 1e5));
      const bad = checkAuthorizeParams(q);
      if (bad) return html(res, 400, authorizePage({}, bad));
      if (limited(req, 'pair', 10, 600e3)) return html(res, 429, authorizePage(q, 'Too many tries. Wait a few minutes.'));
      const code = String(q.pair || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      const pc = pairCodes.get(code);
      if (!pc || pc.exp < now()) return html(res, 400, authorizePage(q, 'That code is wrong or has expired. Get a fresh one from the mixer.'));
      pairCodes.delete(code);
      const authCode = 'vxk_' + rand();
      authCodes.set(authCode, { clientId: q.client_id, deviceId: pc.deviceId, redirectUri: q.redirect_uri, challenge: q.code_challenge, exp: now() + 5 * 60 * 1000 });
      const back = new URL(q.redirect_uri);
      back.searchParams.set('code', authCode);
      if (q.state) back.searchParams.set('state', q.state);
      res.writeHead(302, { location: back.toString(), 'cache-control': 'no-store' });
      return res.end();
    }

    if (p === '/token' && req.method === 'POST') {
      const b = parseBody(req, await readBody(req, 1e5));
      if (b.grant_type === 'authorization_code') {
        const c = authCodes.get(b.code);
        authCodes.delete(b.code); // single use
        if (!c || c.exp < now()) return json(res, 400, { error: 'invalid_grant', error_description: 'code expired or already used' });
        if (c.clientId !== b.client_id || c.redirectUri !== b.redirect_uri) return json(res, 400, { error: 'invalid_grant', error_description: 'client or redirect does not match' });
        const challenge = crypto.createHash('sha256').update(String(b.code_verifier || '')).digest('base64url');
        if (challenge !== c.challenge) return json(res, 400, { error: 'invalid_grant', error_description: 'PKCE verification failed' });
        return json(res, 200, issueTokens(c.clientId, c.deviceId));
      }
      if (b.grant_type === 'refresh_token') {
        const t = state.tokens[sha(b.refresh_token)];
        if (!t || t.kind !== 'refresh' || t.exp < now() || (b.client_id && b.client_id !== t.clientId)) return json(res, 400, { error: 'invalid_grant' });
        delete state.tokens[sha(b.refresh_token)]; // rotate
        return json(res, 200, issueTokens(t.clientId, t.deviceId));
      }
      return json(res, 400, { error: 'unsupported_grant_type' });
    }
    if (p === '/revoke' && req.method === 'POST') {
      const b = parseBody(req, await readBody(req, 1e5));
      if (b.token && state.tokens[sha(b.token)]) { delete state.tokens[sha(b.token)]; save(); }
      return json(res, 200, {});
    }

    // MCP (Streamable HTTP; every reply is a single JSON response)
    if (p === '/mcp') {
      const t = state.tokens[sha(bearer(req))];
      if (!t || t.kind !== 'access' || t.exp < now()) {
        return json(res, 401, { error: 'invalid_token' }, { 'www-authenticate': `Bearer resource_metadata="${BASE}/.well-known/oauth-protected-resource", scope="mixer"` });
      }
      if (req.method === 'GET') { res.writeHead(405, { allow: 'POST, DELETE' }); return res.end(); }
      if (req.method === 'DELETE') { res.writeHead(204); return res.end(); }
      if (req.method !== 'POST') { res.writeHead(405, { allow: 'POST, DELETE' }); return res.end(); }
      if (limited(req, 'mcp:' + t.deviceId, 600, 60e3)) return json(res, 429, { jsonrpc: '2.0', id: null, error: { code: -32000, message: 'too many requests' } });
      let msg;
      try { msg = JSON.parse(await readBody(req)); } catch (e) { return json(res, 400, { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'parse error' } }); }
      const io = ioFor(t.deviceId);
      const headers = {};
      const one = async m => { if (m && m.method === 'initialize') headers['mcp-session-id'] = rand(12); return handleRpc(m, TOOLS, io, INFO); };
      const out = Array.isArray(msg) ? (await Promise.all(msg.map(one))).filter(Boolean) : await one(msg);
      if (out == null || (Array.isArray(out) && !out.length)) { res.writeHead(202, headers); return res.end(); }
      return json(res, 200, out, headers);
    }

    // the app's side
    if (p === '/device/register' && req.method === 'POST') {
      if (limited(req, 'device-register', 10, 3600e3)) return json(res, 429, { error: 'slow_down' });
      const deviceId = 'vxd_' + rand(12), secret = 'vxs_' + rand();
      state.devices[deviceId] = { secretHash: sha(secret), created: now() };
      save();
      return json(res, 201, { deviceId, secret });
    }
    if (p.startsWith('/device/')) {
      const deviceId = deviceFromSecret(req);
      if (!deviceId) return json(res, 401, { error: 'unknown device' });
      if (p === '/device/link' && req.method === 'GET') {
        const old = links.get(deviceId);
        if (old) old.res.end();
        res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive', 'x-accel-buffering': 'no' });
        res.write(`event: hello\ndata: ${JSON.stringify({ deviceId, paired: Object.values(state.tokens).some(t => t.deviceId === deviceId && t.exp > now()) })}\n\n`);
        const link = { res, pending: new Map() };
        links.set(deviceId, link);
        state.devices[deviceId].lastSeen = now(); save();
        const ping = setInterval(() => res.write(': ping\n\n'), 20000);
        res.on('close', () => { // the connection really closed (req 'close' fires once a GET has been read)
          clearInterval(ping);
          if (links.get(deviceId) === link) links.delete(deviceId);
          for (const [, w] of link.pending) { clearTimeout(w.timer); w.resolve({ ok: false, error: 'the mixer disconnected' }); }
        });
        return;
      }
      if (p === '/device/result' && req.method === 'POST') {
        const b = JSON.parse(await readBody(req, 8e6));
        const link = links.get(deviceId), w = link && link.pending.get(b.id);
        if (w) { link.pending.delete(b.id); clearTimeout(w.timer); w.resolve({ ok: !!b.ok, result: b.result, error: b.error }); }
        return json(res, 200, { ok: true });
      }
      if (p === '/device/pair' && req.method === 'POST') {
        for (const [k, c] of pairCodes) if (c.deviceId === deviceId) pairCodes.delete(k);
        const ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (const byte of crypto.randomBytes(6)) code += ABC[byte % ABC.length];
        pairCodes.set(code, { deviceId, exp: now() + 10 * 60 * 1000 });
        return json(res, 200, { code, expiresIn: 600, connectorUrl: BASE + '/mcp' });
      }
      if (p === '/device/unpair' && req.method === 'POST') {
        let n = 0;
        for (const [h, t] of Object.entries(state.tokens)) if (t.deviceId === deviceId) { delete state.tokens[h]; n++; }
        save();
        return json(res, 200, { revoked: n });
      }
      if (p === '/device/status' && req.method === 'GET') {
        const grants = Object.values(state.tokens).filter(t => t.deviceId === deviceId && t.kind === 'refresh' && t.exp > now()).map(t => state.clients[t.clientId] ? state.clients[t.clientId].name : 'app');
        return json(res, 200, { online: links.has(deviceId), grants, connectorUrl: BASE + '/mcp' });
      }
    }

    json(res, 404, { error: 'not found' });
  } catch (e) {
    if (!res.headersSent) json(res, 500, { error: 'server_error', error_description: e.message });
  }
});

server.listen(PORT, HOST, () => console.log(`V3XV0ID mixer relay on ${HOST}:${PORT} (public ${BASE})`));
