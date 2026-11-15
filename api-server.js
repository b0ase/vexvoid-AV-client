// V3XV0ID control API: lets the CLI, the MCP server and other local tools drive the mixer.
//
//   GET  /api/state   current state (layers, crossfader, VX engine, sketch, music)
//   GET  /api/events  server-sent events: a 'state' event whenever it changes
//   GET  /api/help    the command list
//   GET  /api/snapshot?width=960   JPEG of the output window
//   POST /api/cmd     {"cmd": "fade", "args": {"value": 50}}
//
// Listens on 127.0.0.1 only. Every request needs the token from ~/.v3xv0id/api.json
// (Authorization: Bearer <token>; /api/events also takes ?token=), and anything sent by a
// web page (an Origin header) is refused, so a website open in a browser can't reach it.
// Commands run in the controls window, which owns all the mixer logic.
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { ipcMain } = require('electron');

// VX_API_FILE lets a second (test) instance keep its own address and token instead of overwriting the real one
const DISCOVERY = process.env.VX_API_FILE || path.join(os.homedir(), '.v3xv0id', 'api.json');

function start({ getControlWindow, getOutputWindow, port = Number(process.env.VX_API_PORT) || 4747 }) {
  let token;
  try { token = JSON.parse(fs.readFileSync(DISCOVERY, 'utf8')).token; } catch (e) {}
  if (!token || token.length < 32) token = crypto.randomBytes(24).toString('hex');

  let state = {};
  const clients = new Set();
  const pending = new Map();
  let seq = 0;

  ipcMain.on('api-result', (event, { id, ok, result, error }) => {
    const p = pending.get(id);
    if (!p) return;
    pending.delete(id);
    clearTimeout(p.timer);
    p.resolve({ ok, result, error });
  });
  ipcMain.on('api-state', (event, s) => {
    state = s;
    const line = `event: state\ndata: ${JSON.stringify(s)}\n\n`;
    for (const res of clients) res.write(line);
  });

  function run(cmd, args) {
    const win = getControlWindow();
    if (!win || win.isDestroyed()) return Promise.resolve({ ok: false, error: 'controls window is not open' });
    const id = ++seq;
    return new Promise(resolve => {
      // agent tools can take minutes (an auto-cut measures every clip, an export renders the video, a recording runs the track)
      const timer = setTimeout(() => { pending.delete(id); resolve({ ok: false, error: 'timed out' }); }, cmd === 'agent' ? 30 * 60000 : 60000);
      pending.set(id, { resolve, timer });
      win.webContents.send('api-command', { id, cmd, args: args || {} });
    });
  }

  function authorised(req, url) {
    if (req.headers.origin) return false;
    const given = (req.headers.authorization || '').replace(/^Bearer\s+/i, '') || url.searchParams.get('token') || '';
    const a = Buffer.from(given), b = Buffer.from(token);
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  }

  function send(res, code, body) {
    res.writeHead(code, { 'content-type': 'application/json' });
    res.end(JSON.stringify(body));
  }

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    if (!authorised(req, url)) return send(res, 401, { ok: false, error: 'missing or wrong token (see ~/.v3xv0id/api.json)' });

    if (req.method === 'GET' && url.pathname === '/api/state') return send(res, 200, { ok: true, result: state });
    if (req.method === 'GET' && url.pathname === '/api/help') return run('help').then(r => send(res, 200, r));
    if (req.method === 'GET' && url.pathname === '/api/snapshot') {
      const win = getOutputWindow && getOutputWindow();
      if (!win || win.isDestroyed()) return send(res, 400, { ok: false, error: 'output window is not open' });
      win.webContents.capturePage().then(img => {
        const w = Math.min(1920, Math.max(160, Number(url.searchParams.get('width')) || 960));
        const jpeg = img.resize({ width: w }).toJPEG(80);
        res.writeHead(200, { 'content-type': 'image/jpeg' });
        res.end(jpeg);
      }).catch(e => send(res, 500, { ok: false, error: e.message }));
      return;
    }
    if (req.method === 'GET' && url.pathname === '/api/events') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' });
      res.write(`event: state\ndata: ${JSON.stringify(state)}\n\n`);
      clients.add(res);
      const ping = setInterval(() => res.write(': ping\n\n'), 15000);
      res.on('close', () => { clearInterval(ping); clients.delete(res); }); // not req: that fires once a GET is read
      return;
    }
    if (req.method === 'POST' && url.pathname === '/api/cmd') {
      let body = '';
      req.on('data', c => { body += c; if (body.length > 1e6) req.destroy(); });
      req.on('end', async () => {
        let msg;
        try { msg = JSON.parse(body || '{}'); } catch (e) { return send(res, 400, { ok: false, error: 'body must be JSON' }); }
        if (!msg.cmd) return send(res, 400, { ok: false, error: 'missing "cmd"' });
        const r = await run(String(msg.cmd), msg.args);
        send(res, r.ok ? 200 : 400, r);
      });
      return;
    }
    send(res, 404, { ok: false, error: 'not found' });
  });

  // If the port is taken (another mixer is running) this instance has no API and leaves the discovery file alone
  server.on('error', e => console.error('VX API not started:', e.code === 'EADDRINUSE' ? `port ${port} is in use by another mixer` : e.message));
  server.listen(port, '127.0.0.1', () => {
    fs.mkdirSync(path.dirname(DISCOVERY), { recursive: true, mode: 0o700 });
    fs.writeFileSync(DISCOVERY, JSON.stringify({ url: `http://127.0.0.1:${port}`, token, pid: process.pid }, null, 2), { mode: 0o600 });
    console.log(`VX API on http://127.0.0.1:${port}`);
  });
  return { server, run };
}

module.exports = { start, DISCOVERY };
