#!/usr/bin/env node
// vexvoid-mcp: a local MCP server (stdio) for Claude Desktop and Claude Code, talking to the running
// app through the local control API (~/.v3xv0id/api.json). claude.ai on the web and phone uses the
// relay instead (relay/server.js), because it can't reach a server on this computer.
//
//   claude mcp add vexvoid -- node /path/to/vexvoid-AV-client-vx/bin/vexvoid-mcp.js
//
// No dependencies: newline-delimited JSON-RPC 2.0 over stdin/stdout, as the MCP stdio transport defines.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { tools, handleRpc } = require('../mcp/tools');

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

const io = {
  cmd: (name, args) => call('POST', '/api/cmd', { cmd: name, args: args || {} }),
  snapshot: width => call('GET', '/api/snapshot?width=' + width, null, true)
};
const TOOLS = tools({ remote: false });
const INFO = { name: 'vexvoid-mixer', version: '3.1.0' };

let buf = '';
process.stdin.on('data', d => {
  buf += d;
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
    if (!line) continue;
    let msg;
    try { msg = JSON.parse(line); } catch (e) { process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'parse error' } }) + '\n'); continue; }
    handleRpc(msg, TOOLS, io, INFO).then(r => { if (r) process.stdout.write(JSON.stringify(r) + '\n'); });
  }
});
