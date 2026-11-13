// Links this mixer to the claude.ai relay (relay/server.js) so the performer can drive it from claude.ai.
// Off until the performer clicks CLAUDE.AI in the controls window; after that it reconnects whenever the
// app runs. The relay only ever sends commands from REMOTE_COMMANDS, and this side checks again.
const fs = require('fs');
const path = require('path');
const { app, ipcMain } = require('electron');
const { REMOTE_COMMANDS } = require('./mcp/tools');

const RELAY = (process.env.VX_RELAY_URL || 'https://mixer.vexvoid.com').replace(/\/$/, '');

function start({ run, getOutputWindow, getControlWindow }) {
  const file = path.join(app.getPath('userData'), 'relay.json');
  let conf = {};
  try { conf = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {}
  if (conf.relay && conf.relay !== RELAY) conf = {}; // a different relay means a different registration
  const status = { online: false, error: null };
  let abort = null, retry = 2000, stopped = !conf.enabled;

  const saveConf = () => fs.writeFileSync(file, JSON.stringify({ ...conf, relay: RELAY }, null, 2), { mode: 0o600 });
  const auth = () => ({ authorization: 'Bearer ' + conf.secret, 'x-device-id': conf.deviceId });

  // One registration at a time: the link loop and a pairing request both call this on first use, and two
  // registrations would pair one device id while the link runs as the other.
  let registering = null;
  function register() {
    if (conf.deviceId && conf.secret) return Promise.resolve();
    if (!registering) {
      registering = (async () => {
        const r = await fetch(RELAY + '/device/register', { method: 'POST' });
        if (!r.ok) throw new Error('relay registration failed (' + r.status + ')');
        Object.assign(conf, await r.json());
        saveConf();
      })().finally(() => { registering = null; });
    }
    return registering;
  }

  async function execute(cmd, args) {
    if (!REMOTE_COMMANDS.includes(cmd)) return { ok: false, error: 'not allowed remotely' };
    if (cmd === 'snapshot') {
      const win = getOutputWindow();
      if (!win || win.isDestroyed()) return { ok: false, error: 'output window is not open' };
      const img = await win.webContents.capturePage();
      const w = Math.min(1600, Math.max(160, Number(args.width) || 960));
      return { ok: true, result: { jpeg: img.resize({ width: w }).toJPEG(78).toString('base64') } };
    }
    if (cmd === 'load') args = { clip: args.clip, image: args.image, deck: args.deck }; // catalogue only
    return run(cmd, args);
  }

  async function answer(id, r) {
    try {
      await fetch(RELAY + '/device/result', { method: 'POST', headers: { ...auth(), 'content-type': 'application/json' }, body: JSON.stringify({ id, ...r }) });
    } catch (e) {}
  }

  async function link() {
    while (!stopped) {
      try {
        await register();
        abort = new AbortController();
        const r = await fetch(RELAY + '/device/link', { headers: { ...auth(), accept: 'text/event-stream' }, signal: abort.signal });
        if (r.status === 401) { conf.deviceId = conf.secret = undefined; saveConf(); throw new Error('relay forgot this mixer; registering again'); }
        if (!r.ok || !r.body) throw new Error('relay link failed (' + r.status + ')');
        status.online = true; status.error = null; retry = 2000;
        const reader = r.body.getReader(), dec = new TextDecoder();
        let buf = '';
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf('\n\n')) >= 0) {
            const block = buf.slice(0, i); buf = buf.slice(i + 2);
            const ev = (block.match(/^event: (.*)$/m) || [])[1], data = (block.match(/^data: (.*)$/m) || [])[1];
            if (ev === 'ticket' && data) { // a viewer paid for a show: the controls window records it in the wallet
              const w = getControlWindow && getControlWindow();
              if (w && !w.isDestroyed()) w.webContents.send('relay-ticket', JSON.parse(data));
            }
            if (ev === 'cmd' && data) {
              const m = JSON.parse(data);
              execute(m.cmd, m.args || {}).then(res => answer(m.id, res), e => answer(m.id, { ok: false, error: e.message }));
            }
          }
        }
      } catch (e) {
        if (stopped) break;
        status.error = e.message;
      }
      status.online = false;
      if (stopped) break;
      await new Promise(res => setTimeout(res, retry));
      retry = Math.min(30000, retry * 2);
    }
  }

  ipcMain.handle('relay-pair', async () => {
    conf.enabled = true; saveConf();
    if (stopped) { stopped = false; link(); }
    await register();
    const r = await fetch(RELAY + '/device/pair', { method: 'POST', headers: auth() });
    if (!r.ok) throw new Error('could not get a pairing code (' + r.status + ')');
    return r.json();
  });
  ipcMain.handle('relay-status', async () => {
    const out = { enabled: !!conf.enabled, online: status.online, error: status.error, relay: RELAY, grants: [] };
    if (conf.enabled && conf.deviceId) {
      try { const r = await fetch(RELAY + '/device/status', { headers: auth() }); if (r.ok) Object.assign(out, await r.json(), { online: status.online }); } catch (e) {}
    }
    return out;
  });
  // Livestreams (pay per view): the performer's mixer starts and stops shows and collects ticket payments
  async function deviceCall(route, body) {
    conf.enabled = true; saveConf();
    if (stopped) { stopped = false; link(); }
    await register();
    const r = await fetch(RELAY + route, { method: body ? 'POST' : 'GET', headers: { ...auth(), 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || ('relay ' + r.status));
    return j;
  }
  ipcMain.handle('relay-live-start', (e, show) => deviceCall('/device/live/start', show));
  ipcMain.handle('relay-live-stop', (e, showId) => deviceCall('/device/live/stop', { showId }));
  ipcMain.handle('relay-live-payments', () => deviceCall('/device/live/payments'));
  ipcMain.handle('relay-live-ack', (e, txid) => deviceCall('/device/live/ack', { txid }));

  ipcMain.handle('relay-disconnect', async () => {
    try { if (conf.deviceId) await fetch(RELAY + '/device/unpair', { method: 'POST', headers: auth() }); } catch (e) {}
    conf.enabled = false; saveConf();
    stopped = true;
    if (abort) abort.abort();
    return { enabled: false };
  });

  if (!stopped) link();
}

module.exports = { start };
