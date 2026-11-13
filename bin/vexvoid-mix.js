#!/usr/bin/env node
// vexvoid-mix: drive a running V3XV0ID AV Client from the terminal.
//
//   vexvoid-mix help                       every command
//   vexvoid-mix state                      what the mixer is doing
//   vexvoid-mix watch                      follow state changes live
//   vexvoid-mix fade 50                    crossfader to the middle
//   vexvoid-mix cut b                      cut to deck B
//   vexvoid-mix sketch "flow field" deck=b send a library sketch to deck B
//   vexvoid-mix knobs a=0.8 c=0.2          turn knobs
//   vexvoid-mix load clip="jam 05" deck=a  open a catalogue clip as a layer
//   vexvoid-mix play "shadow steps"        play a track
//   vexvoid-mix vx key=grain value=false   set a VX engine setting
//
// The first bare word after a command fills that command's main argument; key=value pairs fill the rest.
// Reads the address and token from ~/.v3xv0id/api.json, which the app writes when it starts.
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');

const MAIN = { fade: 'value', cut: 'deck', sketch: 'name', play: 'track', bpm: 'value', write: 'prompt', remove: 'id', layer: 'id', clear: 'deck', audio: 'source', evolve: 'on', load: 'clip' };

function conf() {
  try { return JSON.parse(fs.readFileSync(path.join(os.homedir(), '.v3xv0id', 'api.json'), 'utf8')); }
  catch (e) { fail('The mixer is not running (no ~/.v3xv0id/api.json). Start V3XV0ID AV Client first.'); }
}
function fail(msg) { console.error(msg); process.exit(1); }
function value(v) {
  if (v === 'true' || v === 'on') return true;
  if (v === 'false' || v === 'off') return false;
  return v !== '' && !isNaN(Number(v)) ? Number(v) : v;
}

function request(method, route, body) {
  const { url, token } = conf();
  const u = new URL(route, url);
  return new Promise((resolve, reject) => {
    const req = http.request(u, { method, headers: { authorization: 'Bearer ' + token, 'content-type': 'application/json' } }, res => {
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { reject(new Error(data || 'empty reply')); } });
    });
    req.on('error', e => reject(new Error(e.code === 'ECONNREFUSED' ? 'The mixer is not running.' : e.message)));
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function print(r) {
  if (!r.ok) fail('error: ' + r.error);
  const x = r.result;
  if (Array.isArray(x)) x.forEach(l => console.log(typeof l === 'string' ? l : JSON.stringify(l)));
  else console.log(typeof x === 'string' ? x : JSON.stringify(x, null, 2));
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  if (!cmd || cmd === '-h' || cmd === '--help') return print(await request('GET', '/api/help'));
  if (cmd === 'watch') {
    const { url, token } = conf();
    http.get(new URL('/api/events?token=' + token, url), res => {
      let buf = '';
      res.on('data', c => {
        buf += c;
        let i;
        while ((i = buf.indexOf('\n\n')) >= 0) {
          const block = buf.slice(0, i); buf = buf.slice(i + 2);
          const data = block.split('\n').find(l => l.startsWith('data: '));
          if (!data) continue;
          const s = JSON.parse(data.slice(6));
          console.log(`[${new Date().toLocaleTimeString()}] fader ${s.crossfader} · layers ${(s.layers || []).length} · sketch ${s.sketch && s.sketch.name} · ${s.tempo && s.tempo.bpm} bpm · ${s.music && s.music.track ? (s.music.playing ? '▶ ' : '❚❚ ') + s.music.track : 'no track'}`);
        }
      });
    }).on('error', e => fail(e.message));
    return;
  }
  const args = {};
  const words = [];
  for (const r of rest) {
    const m = r.match(/^([a-zA-Z]+)=(.*)$/);
    if (m) args[m[1]] = value(m[2]); else words.push(r);
  }
  if (words.length) {
    if (cmd === 'knobs') ['a', 'b', 'c', 'd'].forEach((k, i) => { if (words[i] != null) args[k] = value(words[i]); });
    else args[MAIN[cmd] || 'value'] = value(words.join(' '));
  }
  if (cmd === 'sketch' && args.send == null) args.send = true;
  print(await request('POST', '/api/cmd', { cmd, args }));
}

main().catch(e => fail(e.message));
