#!/usr/bin/env node
// vexvoid-mcp: an MCP server (stdio) that lets an AI assistant play the V3XV0ID mixer live.
// It talks to the running app through the local control API (~/.v3xv0id/api.json).
//
//   claude mcp add vexvoid -- node /path/to/vexvoid-AV-client-vx/bin/vexvoid-mcp.js
//
// No dependencies: newline-delimited JSON-RPC 2.0 over stdin/stdout, as the MCP stdio transport defines.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');

function conf() {
  return JSON.parse(fs.readFileSync(path.join(os.homedir(), '.v3xv0id', 'api.json'), 'utf8'));
}
function call(method, route, body, raw) {
  let c;
  try { c = conf(); } catch (e) { return Promise.reject(new Error('The V3XV0ID mixer is not running (no ~/.v3xv0id/api.json). Ask the user to start it.')); }
  return new Promise((resolve, reject) => {
    const req = http.request(new URL(route, c.url), { method, headers: { authorization: 'Bearer ' + c.token, 'content-type': 'application/json' } }, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (raw && res.statusCode === 200) return resolve(buf);
        try { resolve(JSON.parse(buf.toString())); } catch (e) { reject(new Error(buf.toString() || 'empty reply')); }
      });
    });
    req.on('error', e => reject(new Error(e.code === 'ECONNREFUSED' ? 'The V3XV0ID mixer is not running. Ask the user to start it.' : e.message)));
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}
const cmd = (name, args) => call('POST', '/api/cmd', { cmd: name, args: args || {} });

const deck = { type: 'string', enum: ['A', 'B'], description: 'Deck A or B' };
const TOOLS = [
  { name: 'mixer_state', description: 'What the mixer is doing now: crossfader, layers on each deck, the running sketch and its knobs, tempo, music, VX engine settings.',
    inputSchema: { type: 'object', properties: {} }, run: () => cmd('state') },
  { name: 'mixer_snapshot', description: 'A picture of the output window (what the audience sees).',
    inputSchema: { type: 'object', properties: { width: { type: 'number', description: 'Pixel width, default 960' } } },
    run: async a => ({ image: await call('GET', '/api/snapshot?width=' + (a.width || 960), null, true) }) },
  { name: 'crossfade', description: 'Move the A/B crossfader: 0 is all deck A, 100 is all deck B, 50 an even mix.',
    inputSchema: { type: 'object', properties: { value: { type: 'number', minimum: 0, maximum: 100 } }, required: ['value'] }, run: a => cmd('fade', a) },
  { name: 'list_sketches', description: 'The generative sketch library (names, tags, what the four knobs do).',
    inputSchema: { type: 'object', properties: {} }, run: () => cmd('sketches') },
  { name: 'send_sketch', description: 'Run a generative p5 sketch and send it to a deck as a new layer. Give a library name, or your own p5.js code (setup()/draw(), createCanvas(windowWidth, windowHeight[, WEBGL]), monochrome white on black, may read the live vx object: vx.t, vx.beat, vx.bar, vx.bpm, vx.level, vx.bass, vx.mid, vx.high, vx.kick, vx.pulse, vx.a..vx.d knobs 0-1).',
    inputSchema: { type: 'object', properties: { name: { type: 'string' }, code: { type: 'string' }, knobs: { type: 'array', items: { type: 'string' }, description: 'Names for knobs a-d when sending code' }, deck,
      blend: { type: 'string', enum: ['normal', 'screen', 'difference', 'multiply'], description: 'screen lays the white lines over the layers below; normal covers them' } } },
    run: a => cmd('sketch', { ...a, send: true }) },
  { name: 'set_knobs', description: 'Turn the four knobs (0-1) of the current sketch; also moves the last sketch sent to the output.',
    inputSchema: { type: 'object', properties: { a: { type: 'number' }, b: { type: 'number' }, c: { type: 'number' }, d: { type: 'number' } } }, run: a => cmd('knobs', a) },
  { name: 'mutate', description: 'Give the current sketch a new random seed.', inputSchema: { type: 'object', properties: {} }, run: () => cmd('mutate') },
  { name: 'evolve', description: 'Turn auto-evolve on or off (new seed and drifting knobs every 4 bars).',
    inputSchema: { type: 'object', properties: { on: { type: 'boolean' } }, required: ['on'] }, run: a => cmd('evolve', a) },
  { name: 'list_media', description: 'Catalogue clips and images that can be loaded.',
    inputSchema: { type: 'object', properties: { kind: { type: 'string', enum: ['clips', 'images'] } }, required: ['kind'] }, run: a => cmd(a.kind) },
  { name: 'load_media', description: 'Open a catalogue clip or image (or a local path) as a new layer on a deck.',
    inputSchema: { type: 'object', properties: { clip: { type: 'string' }, image: { type: 'string' }, path: { type: 'string' }, deck } }, run: a => cmd('load', a) },
  { name: 'layer', description: 'Change or remove a layer: opacity 0-100, visible, blend (normal, screen, multiply, difference, overlay...), or remove: true.',
    inputSchema: { type: 'object', properties: { id: { type: 'number' }, opacity: { type: 'number' }, visible: { type: 'boolean' }, blend: { type: 'string' }, remove: { type: 'boolean' } }, required: ['id'] },
    run: a => (a.remove ? cmd('remove', { id: a.id }) : cmd('layer', a)) },
  { name: 'clear_deck', description: 'Remove every layer on a deck (or both decks if none given).',
    inputSchema: { type: 'object', properties: { deck } }, run: a => cmd('clear', a) },
  { name: 'music', description: 'Control the music player: list tracks, play (optionally a track number or title words), pause, next, prev.',
    inputSchema: { type: 'object', properties: { action: { type: 'string', enum: ['list', 'play', 'pause', 'next', 'prev'] }, track: { type: 'string' } }, required: ['action'] },
    run: a => cmd(a.action === 'list' ? 'tracks' : a.action, a.track != null ? { track: a.track } : {}) },
  { name: 'tempo', description: 'Set the BPM the sketches follow, or choose what they listen to (clock, music, input).',
    inputSchema: { type: 'object', properties: { bpm: { type: 'number' }, listen: { type: 'string', enum: ['clock', 'music', 'input'] } } },
    run: async a => { const out = {}; if (a.bpm) out.bpm = (await cmd('bpm', { value: a.bpm })).result; if (a.listen) out.listen = (await cmd('audio', { source: a.listen })).result; return { ok: true, result: out }; } },
  { name: 'vx_engine', description: 'The background VX engine: action next (clip), clean, blackout (toggle), reset, or set {key, value} for video, mercury, field, formula, flecks, grain, decals, chaos, title, voidChance, cleanChance.',
    inputSchema: { type: 'object', properties: { action: { type: 'string', enum: ['next', 'clean', 'blackout', 'reset', 'set'] }, key: { type: 'string' }, value: {} }, required: ['action'] },
    run: a => cmd({ next: 'vx-next', clean: 'vx-clean', blackout: 'blackout', reset: 'vx-reset', set: 'vx' }[a.action], { key: a.key, value: a.value }) }
];

function reply(id, result) { process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, result }) + '\n'); }
function replyError(id, code, message) { process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, error: { code, message } }) + '\n'); }

async function handle(msg) {
  const { id, method, params } = msg;
  if (method === 'initialize') {
    return reply(id, { protocolVersion: (params && params.protocolVersion) || '2025-06-18', capabilities: { tools: {} },
      serverInfo: { name: 'vexvoid-mixer', version: '3.1.0' },
      instructions: 'Controls the V3XV0ID VJ mixer live. Check mixer_state first; use mixer_snapshot to see the output. The look is strictly monochrome (white on black).' });
  }
  if (method === 'ping') return reply(id, {});
  if (method === 'tools/list') return reply(id, { tools: TOOLS.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) });
  if (method === 'tools/call') {
    const tool = TOOLS.find(t => t.name === params.name);
    if (!tool) return replyError(id, -32602, 'unknown tool ' + params.name);
    try {
      const r = await tool.run(params.arguments || {});
      if (r && r.image) return reply(id, { content: [{ type: 'image', data: r.image.toString('base64'), mimeType: 'image/jpeg' }] });
      const text = r.ok ? JSON.stringify(r.result, null, 2) : 'Error: ' + r.error;
      return reply(id, { content: [{ type: 'text', text }], isError: !r.ok });
    } catch (e) {
      return reply(id, { content: [{ type: 'text', text: 'Error: ' + e.message }], isError: true });
    }
  }
  if (id !== undefined) replyError(id, -32601, 'method not found: ' + method);
}

let buf = '';
process.stdin.on('data', d => {
  buf += d;
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
    if (!line) continue;
    let msg;
    try { msg = JSON.parse(line); } catch (e) { replyError(null, -32700, 'parse error'); continue; }
    handle(msg);
  }
});
