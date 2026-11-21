// Shared helpers for the repo's pack play-check (tools/packs/pack-check.mjs): a headless, muted Chromium on CDP
// (127.0.0.1 only) running the WEB game bundle (vx/game/vexvoid-game.js) from this checkout, served on 127.0.0.1.
// Works on Linux (the Mandala builder VM: chrome-headless-shell, software WebGL through SwiftShader) and on macOS
// (the same software WebGL: what the VM sees).
//
// Environment:
//   CHROME=<path>          the browser binary (default: chrome-headless-shell found in the Playwright cache, the
//                          builder's ~/vexvoid-builder/tools/ms-playwright, or $PLAYWRIGHT_BROWSERS_PATH)
//   PACK_GL=swiftshader|gpu software WebGL (the default) or the machine's GPU
//   PACK_CDP=<port>        the DevTools port (default: a free one); always bound to 127.0.0.1
import http from 'node:http'
import net from 'node:net'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

export const REPO = process.env.PACKS_REPO || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
// headless Chromium renders WebGL in software on both the VM and a Mac (chrome-headless-shell has no GPU there), so
// SwiftShader is the default everywhere; PACK_GL=gpu asks for the GPU (big view, full quality) where a browser has one
export const GL = process.env.PACK_GL || 'swiftshader'

/** The CDP connection to one page (as the devkit's cdplib.mjs, plus a page match by URL). */
export async function connect(port, match = '') {
  const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
  const t = list.find((x) => x.type === 'page' && (x.title.includes(match) || x.url.includes(match)))
  if (!t) throw new Error('no page on CDP ' + port)
  const ws = new WebSocket(t.webSocketDebuggerUrl); let id = 0; const w = {}; const errs = []
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j })
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data); if (m.id && w[m.id]) { w[m.id](m.result ?? { error: m.error }); delete w[m.id] }
    if (m.method === 'Runtime.exceptionThrown') errs.push('EXC ' + (m.params.exceptionDetails.exception?.description ?? m.params.exceptionDetails.text).split('\n').slice(0, 3).join(' ').slice(0, 300))
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errs.push('ERR ' + m.params.args.map((a) => a.value ?? a.description).join(' ').slice(0, 300))
  }
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; w[i] = r; ws.send(JSON.stringify({ id: i, method, params })) })
  await send('Runtime.enable'); await send('Page.enable')
  const ev = async (x) => { const r = await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true }); return r.exceptionDetails ? 'THREW ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text) : r.result?.value }
  return { send, ev, errs, close: () => ws.close() }
}

/** A free TCP port on 127.0.0.1. */
export const freePort = () => new Promise((res, rej) => { const s = net.createServer(); s.on('error', rej); s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)) }) })

/** chrome-headless-shell (or CHROME). */
export function findChrome() {
  if (process.env.CHROME) return process.env.CHROME
  const roots = [process.env.PLAYWRIGHT_BROWSERS_PATH, path.join(os.homedir(), 'vexvoid-builder', 'tools', 'ms-playwright'),
    path.join(os.homedir(), '.cache', 'ms-playwright'), path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright')].filter(Boolean)
  for (const root of roots) {
    if (!fs.existsSync(root)) continue
    for (const d of fs.readdirSync(root).filter((x) => x.startsWith('chromium_headless_shell-')).sort().reverse()) {
      for (const sub of fs.readdirSync(path.join(root, d))) {
        for (const exe of ['chrome-headless-shell', 'headless_shell']) { const f = path.join(root, d, sub, exe); if (fs.existsSync(f)) return f }
      }
    }
  }
  throw new Error('no chrome-headless-shell found: run tools/builder/setup.sh, or set CHROME')
}

/** The browser, headless and muted, DevTools on 127.0.0.1 only, its own fresh profile. */
export async function startChrome({ port, profile }) {
  fs.rmSync(profile, { recursive: true, force: true }); fs.mkdirSync(profile, { recursive: true })
  const args = ['--mute-audio', '--remote-debugging-address=127.0.0.1', '--remote-debugging-port=' + port, '--user-data-dir=' + profile,
    '--no-first-run', '--no-default-browser-check', '--autoplay-policy=user-gesture-required', '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding', '--disable-backgrounding-occluded-windows', '--disable-extensions', '--disable-sync',
    '--window-size=1440,900']
  if (GL === 'swiftshader') args.push('--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl')
  else args.push('--ignore-gpu-blocklist', '--enable-webgl')
  // the VM: Ubuntu's AppArmor blocks the user namespaces Chromium's sandbox needs; the page is only our own 127.0.0.1 files
  if (process.platform === 'linux') args.push('--no-sandbox')
  const ch = spawn(findChrome(), [...args, 'about:blank'], { stdio: 'ignore' })
  for (let i = 0; i < 80; i++) { try { await fetch(`http://127.0.0.1:${port}/json/version`); return ch } catch { await sleep(250) } }
  try { ch.kill() } catch {} throw new Error('the browser did not start on CDP ' + port)
}

const TYPES = { '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.glb': 'model/gltf-binary', '.mp4': 'video/mp4', '.json': 'application/json', '.webp': 'image/webp', '.ktx2': 'image/ktx2', '.ttf': 'font/ttf', '.woff2': 'font/woff2' }
/** The check page: the web bundle mounted in #gmView (the id the desktop client uses, so the same selectors work),
 *  vx/packs.js beside it (the pack rules the agent's pack tool runs). Served from this checkout on 127.0.0.1. */
export function serve(repo, { high }) {
  const GAME = path.join(repo, 'vx', 'game'), RULES = path.join(repo, 'vx', 'packs.js')
  const PAGE = `<!doctype html><html><head><meta charset="utf-8"><title>VexVoid pack check</title><style>html,body{margin:0;height:100%;background:#000;overflow:hidden}#gmView{position:absolute;inset:0}</style></head>
<body><div id="gmView"></div><script src="/vx/packs.js"></script><script src="/game/vexvoid-game.js"></script>
<script>localStorage.setItem('vx-game-music', 'off'); VXGAME.mount(document.getElementById('gmView'), { base: '/game/', high: ${high ? 'true' : 'false'}, music: false }).then((g) => { window.vxGameNow = g }, (e) => { window.vxGameError = String(e && e.message || e) })</script></body></html>`
  const srv = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x')
    if (u.pathname === '/') { res.writeHead(200, { 'content-type': 'text/html' }); return res.end(PAGE) }
    if (u.pathname === '/vx/packs.js') { res.writeHead(200, { 'content-type': 'text/javascript' }); return fs.createReadStream(RULES).pipe(res) }
    const f = u.pathname.startsWith('/game/') ? path.join(GAME, decodeURIComponent(u.pathname.slice(6))) : null
    if (!f || !f.startsWith(GAME + path.sep) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end() }
    res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res)
  })
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r({ srv, url: `http://127.0.0.1:${srv.address().port}/` })))
}
