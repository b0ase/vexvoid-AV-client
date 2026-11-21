// PACK-CHECK (play), the repo copy: one content pack played end to end in the WEB game bundle (vx/game/vexvoid-game.js
// from this checkout) in a headless, muted Chromium on 127.0.0.1. It is the devkit's pack-check.mjs (which drives the
// hidden desktop client) made to run on a machine with no desktop app and no GPU: the Mandala builder VM, Linux,
// chrome-headless-shell, software WebGL (SwiftShader). Nothing here pays, posts, signs in or touches a wallet.
//
// For the pack, the same steps as the devkit copy:
//   - the pack checked against the RUNNING game with the pack rules (vx/packs.js, as the agent's pack tool does), then
//     loaded into it without a rebuild (g.packs), and a pack that tries to replace a starter refused;
//   - every mission brought in now and played to the end automatically (reach: teleport / goto; paint: blast a starter
//     of the right kind; buff: the buff can over the setup; photo: framed until the lens says IN FRAME, then the
//     shutter; escape: the alarm and a getaway; hide: crouched and still);
//   - its intro, tips and reply arrive from the right contacts, the credit is on the phone card, a marker is on the map;
//   - progress survives a reload;
//   - fps at every objective against the same spots without the pack (skipped with PACK_FPS=off; the default under
//     software WebGL, where fps says nothing about players' machines: it runs at review on a real GPU).
// Pictures to OUT: a street view at every objective (the photo the player took for a photo objective), the phone card,
// the phone map, the overhead map, street + wide views at the pack's places, and a short clip (clip.mp4) of the play.
// Prints ok / FAIL lines, writes OUT/check.json and OUT/places.txt; exit 1 on any failure.
//
//   node tools/packs/pack-check.mjs PACK.json OUT      (tools/packs/pack-check.sh runs it with the static check first)
//
// Differences from the devkit copy (vexvoid-devkit/pack-check.mjs): the web bundle instead of the desktop client, so
// no MCP pack tool round trip (pack-mcp.mjs stays a devkit check) and the clip is recorded from the game canvas
// (MediaRecorder) instead of the desktop's record tool; under SwiftShader the view is small (PACK_VIEW, default
// 640x400) and the rendering knobs are off, while pictures are taken at 1280 wide; waits stretch with the frame rate.
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { connect, freePort, startChrome, serve, sleep, GL, REPO } from './lib.mjs'

const [FILE, OUT] = process.argv.slice(2)
if (!FILE || !OUT) { console.log('usage: node tools/packs/pack-check.mjs PACK.json OUT'); process.exit(2) }
const PACK = JSON.parse(fs.readFileSync(FILE, 'utf8'))
fs.mkdirSync(OUT, { recursive: true })
const FPS_DROP = 0.10
const FPS_ON = process.env.PACK_FPS ? process.env.PACK_FPS !== 'off' : GL !== 'swiftshader'
const SOFT = GL === 'swiftshader'
const [VW, VH] = (process.env.PACK_VIEW || (SOFT ? '640x400' : '1440x900')).split('x').map(Number)
const PIC = 1280
const fails = [], ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fails.push(m) }
const result = { pack: PACK.id, gl: GL, missions: [], fps: [], pictures: [], clip: null }

// ---- the browser and the page (a fresh profile every run: this is the only place the story is reset) ----
const port = Number(process.env.PACK_CDP) || await freePort()
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'vexvoid-pack-check-'))
const web = await serve(REPO, { high: !SOFT })
const chrome = await startChrome({ port, profile })
const quit = (code) => { try { chrome.kill() } catch {} web.srv.close(); fs.rmSync(profile, { recursive: true, force: true }); process.exit(code) }
process.on('SIGINT', () => quit(130)); process.on('SIGTERM', () => quit(143))
const watchdog = setTimeout(() => { console.log('FAIL the play-check ran over ' + (process.env.PACK_TIMEOUT || 2400) + ' s'); quit(1) }, 1000 * Number(process.env.PACK_TIMEOUT || 2400))

let T, SLOW = 1
const metrics = (w, h) => T.send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: false })
async function open() {
  const c = await connect(port)
  await c.send('Emulation.setDeviceMetricsOverride', { width: VW, height: VH, deviceScaleFactor: 1, mobile: false })
  await c.send('Page.navigate', { url: web.url })
  for (let i = 0; i < 600; i++) { await sleep(500); if (await c.ev(`!!window.vxGameNow || !!window.vxGameError`)) break }
  if (!(await c.ev(`!!window.vxGameNow`))) { console.log('FAIL the web game did not mount: ' + (await c.ev(`window.vxGameError || 'timed out'`))); quit(1) }
  const g = (x) => c.ev(`(() => { const g = window.vxGameNow; return ${x} })()`)
  const gj = (x) => c.ev(`(() => { const g = window.vxGameNow; return JSON.stringify(${x}) })()`).then((s) => { try { return JSON.parse(s) } catch { throw new Error(String(s).slice(0, 300)) } })
  const key = async (k, code, vk, hold = 0) => { await c.send('Input.dispatchKeyEvent', { type: 'keyDown', key: k, code, windowsVirtualKeyCode: vk }); if (hold) await sleep(hold); await c.send('Input.dispatchKeyEvent', { type: 'keyUp', key: k, code, windowsVirtualKeyCode: vk }); await sleep(120) }
  T = { ...c, g, gj, key }
  await g(`(g.music({ on: false }), g.cops(false), g.sketchbook({ open: false }), g.phone({ open: false }), g.photoMode(false), 1)`)
  if (SOFT && process.env.PACK_QUALITY !== 'full') await g(`(g.quality({ ao: false, bloom: false, lights: 0, refl: false }), 1)`)
  await c.ev(`(document.querySelector('#gmView canvas').focus(), 1)`)
}
const fpsNow = (ms = 5000) => T.ev(`new Promise((res) => { const ts = []; const t0 = performance.now(); const f = (t) => { ts.push(t); if (t - t0 < ${ms}) requestAnimationFrame(f); else res(+(1000 * (ts.length - 1) / (ts[ts.length - 1] - ts[0])).toFixed(1)) }; requestAnimationFrame(f) })`)

await open()
// the guard the desktop copy has (the packs test profile): here, the page must be this run's own 127.0.0.1 server
if (!String(await T.ev(`location.href`)).startsWith(web.url)) { console.log('FAIL not the check page: refusing to reset the story there'); quit(1) }
{ // the game steps time by at most 50 ms a frame: under ~20 fps it runs slow, so every wait is stretched to match
  await fpsNow(2500); const f = await fpsNow(3000); SLOW =   // (the first frames compile shaders: not counted)
    Math.min(14, Math.max(1, 1 / Math.min(1, 0.05 * Math.max(0.5, f))))
  result.view = `${VW}x${VH}`; result.fpsStart = f; result.slow = +SLOW.toFixed(2)
  console.log(`     (${GL} WebGL, ${VW}x${VH}, ${f} fps: waits x${SLOW.toFixed(1)})`)
}

const g = (x) => T.g(x), gj = (x) => T.gj(x)
const mis = async (id) => (await gj(`g.missions()`)).list.find((m) => m.id === id)
const waitFor = async (what, f, secs = 20) => { const n = Math.ceil(secs * SLOW * 4); for (let i = 0; i < n; i++) { const v = await f(); if (v) return v; await sleep(250) } console.log('     (timed out waiting for ' + what + ')'); return null }
const thread = async (c) => ((await gj(`g.messages({ contact: '${c}' })`)).thread || []).map((m) => m.photo ? '[photo]' : m.text)
const said = (c, text, secs = 15) => waitFor(`${c}: "${text}"`, async () => (await thread(c)).includes(text), secs)
const save = (name, ext, dataUrl) => { const f = `${OUT}/${name}.${ext}`; fs.writeFileSync(f, Buffer.from(String(dataUrl).split(',')[1] || '', 'base64')); result.pictures.push(f); return f }
// pictures at PIC wide: the view made big for the moment (the small view is for speed under software WebGL)
const big = async (fn) => { if (VW >= PIC) return fn(); await metrics(PIC, Math.round(PIC * VH / VW)); await sleep(900 * Math.min(SLOW, 4)); try { return await fn() } finally { await metrics(VW, VH); await sleep(300) } }
const snap = (name) => big(async () => save(name, 'jpg', await g(`g.snap(${PIC})`)))
const view = (name) => big(async () => { const R = await T.ev(`(() => { const c = document.querySelector('#gmView').getBoundingClientRect(); return { x: c.left, y: c.top, width: c.width, height: c.height } })()`); const r = await T.send('Page.captureScreenshot', { format: 'png', clip: { ...R, scale: 1 } }); return save(name, 'png', 'data:,' + r.data) })

// the pack rules against the running game, as the desktop's pack tool does (controls.html packCheck / packSay)
const packTool = (action, pack) => T.ev(`(() => { const g = window.vxGameNow, pack = ${JSON.stringify(pack)};
  const info = g.packs(), own = new Set(((info.packs.find((p) => p.id === pack.id) || {}).missions) || []);
  const r = VXPACKS.validate(pack, Object.assign({}, info.refs, { missions: info.refs.missions.filter((id) => !own.has(id)) }), { file: pack.id + '.json' });
  const say = r.ok ? 'ALL OK' + (r.missions.length ? ': ' + r.missions.join(', ') : '') : r.errors.length + ' problem(s): ' + r.errors.join(' | ');
  if ('${action}' === 'validate' || !r.ok) return say;
  const L = g.packs({ load: pack });
  return 'Loaded ' + pack.id + ': ' + (L.added.join(', ') || 'nothing') + (L.skipped.length ? '; left out: ' + L.skipped.join('; ') : '');
})()`)

// the clip: the game canvas recorded in the page (MediaRecorder, VP8 WebM), at most 60 s of it
const recStart = () => T.ev(`(() => { try { const s = window.vxGameNow.canvas.captureStream(15); const r = new MediaRecorder(s, { mimeType: 'video/webm;codecs=vp8', videoBitsPerSecond: 1500000 }); window.vxRec = { r, chunks: [] }; r.ondataavailable = (e) => e.data.size && window.vxRec.chunks.push(e.data); r.start(1000); setTimeout(() => r.state === 'recording' && r.stop(), 60000); return 'ok' } catch (e) { return 'ERROR ' + e.message } })()`)
const recStop = () => T.ev(`new Promise((res) => { const v = window.vxRec; if (!v) return res(''); const done = () => { const b = new Blob(v.chunks, { type: 'video/webm' }); const f = new FileReader(); f.onload = () => res(String(f.result)); f.readAsDataURL(b) }; if (v.r.state === 'recording') { v.r.onstop = done; v.r.stop() } else done() })`)

const walls = await gj(`g.walls()`), wallOf = (id) => walls.find((w) => w.id === id)
const places = await gj(`g.places()`)
const sketches = await gj(`g.sketches()`)

// where each objective is played from: a named place, a point, or in front of its first wall (facing it)
const spotOf = (o) => {
  if (o.type === 'reach') { const id = o.place || (o.places || [])[0]; if (id) { const p = places.find((q) => q.id === id); return p && { key: id, x: p.x, z: p.z, y: p.y, yaw: p.yaw } } return { key: o.at.join(','), x: o.at[0], z: o.at[2], y: o.at[1], yaw: 0 } }
  if (o.walls && o.walls.length) { const w = wallOf(o.walls[0]); if (!w) return null; const d = o.type === 'photo' ? Math.max(5, Math.min((o.dist ?? 20) - 7, 12, w.w * 0.75)) : 2.2; return { key: w.id + (o.type === 'photo' ? '-photo' : ''), wall: w, x: w.x + w.nx * d, z: w.z + w.nz * d, y: undefined, yaw: Math.atan2(w.nx, w.nz), d } }
  return null
}
const go = (s, pitch = 0.12) => g(`(g.goto(${s.x}, ${s.z}, ${s.yaw}, ${pitch}${s.y != null ? ', ' + s.y : ''}), 1)`)
const spots = []
for (const m of PACK.missions || []) for (const o of m.objectives || []) { const s = spotOf(o); if (s && !spots.some((x) => x.key === s.key)) spots.push(s) }
// a photo spot stays on the wall's own ground, with room for the camera behind the writer
const roomy = async (w) => { const me = await gj(`g.where()`), c = (await gj(`g.parkour()`)).cam; return Math.abs(me.y - (w.y - w.h / 2)) < 1.2 && Math.hypot(c.x - me.x, c.z - me.z) > 3 }
const onGround = async (w, d) => { await g(`(g.goto(${w.x + w.nx * d}, ${w.z + w.nz * d}, ${Math.atan2(w.nx, w.nz)}, 0.12), 1)`); await sleep(600 * Math.min(SLOW, 4)); return roomy(w) }
for (const s of spots) if (s.wall && s.d > 2.2) { for (const d of [s.d, 10, 8, 6, 4.5].filter((k) => k <= s.d)) if (await onGround(s.wall, d)) { s.d = d; s.x = s.wall.x + s.wall.nx * d; s.z = s.wall.z + s.wall.nz * d; break } }

try {
  // ---- a clean start (a fresh profile): the story reset, the pack's walls cleared, the patrol off, the writer home ----
  await g(`(g.missions({ reset: true }), g.cops(false), g.torch(false), g.teleport('studio'), 1)`)
  for (const id of new Set((PACK.missions || []).flatMap((m) => (m.objectives || []).flatMap((o) => o.walls || [])))) await g(`(g.clearPaint('${id}'), 1)`)
  await sleep(400)

  // ---- the starters untouched, and a pack can not replace one (as pack-web.mjs checks) ----
  const STARTERS = ['get-up', 'flick-it', 'paid-wall', 'crossed-out', 'lose-them', 'heaven']
  let L = await gj(`g.missions().list.map((m) => ({ id: m.id, pack: m.pack || '' }))`)
  ok(STARTERS.every((id, i) => L[i] && L[i].id === id && !L[i].pack), `the six starters first, untouched: ${L.slice(0, 6).map((m) => m.id).join(', ')}`)
  const hijack = await gj(`g.packs({ load: { v: 1, id: 'p-evil', missions: [{ id: 'get-up', title: 'X', from: 'dez', summary: '', after: [], delay: 1, intro: [], done: [], objectives: [{ type: 'reach', place: 'studio', text: 'X' }] }] } })`)
  L = await gj(`g.missions().list.map((m) => ({ id: m.id, title: m.title }))`)
  ok(!hijack.added.length && hijack.skipped.length === 1 && L.find((m) => m.id === 'get-up').title === 'GET UP', `a pack can not replace a starter: ${hijack.skipped[0]}`)

  // ---- in the game the way an agent puts it there: checked against the running game, then loaded, no rebuild ----
  if ((await gj(`g.packs()`)).packs.some((p) => p.id === PACK.id)) await g(`(g.packs({ unload: '${PACK.id}' }), 1)`)   // a bundled copy out first: the file is what is checked
  const v = await packTool('validate', PACK); ok(/^ALL OK/.test(v), `pack rules against the running game: ${String(v).slice(0, 300)}`)
  const ld = await packTool('load', PACK); ok(/^Loaded /.test(ld) && !/left out/.test(ld), `loaded into the running game: ${String(ld).slice(0, 200)}`)
  const listed = (await gj(`g.packs()`)).packs.find((p) => p.id === PACK.id); ok(listed && PACK.missions.every((m) => listed.missions.includes(m.id)), `in the game: ${listed ? listed.missions.join(', ') : 'no'}`)
  if (!listed) throw new Error('the pack is not in the game')
  const credit = PACK.credit && PACK.credit.show !== false ? String(PACK.credit.name).trim().toUpperCase() : ''

  const rec = await recStart(); ok(rec === 'ok', `recording the game canvas: ${rec}`)

  for (const [mi, m] of PACK.missions.entries()) {
    const R = { id: m.id, title: m.title, objectives: [], ok: true }; result.missions.push(R)
    const bad = (msg) => { R.ok = false; ok(false, `${m.id}: ${msg}`) }
    await g(`(g.missions({ start: '${m.id}' }), 1)`)
    const act = await waitFor(m.id + ' active', async () => { const x = await mis(m.id); return x && x.status === 'active' ? x : null }, 10 + (m.delay || 0))
    if (!act) { bad('never came in'); continue }
    ok(true, `${m.title} arrives from ${m.from.toUpperCase()}`)
    const lastIntro = m.intro[m.intro.length - 1]
    if (await said(lastIntro[0], lastIntro[1], 6 + m.intro.length * 2)) ok(true, `intro: ${m.intro.length} line(s), the last "${lastIntro[1]}"`); else bad('the intro never arrived')
    await g(`g.phone({ app: 'messages', thread: '${m.from}' })`); await sleep(900 * Math.min(SLOW, 4))
    const card = await T.ev(`(() => { const c = document.querySelector('#gmView .vxp-card'); return c ? c.textContent : '' })()`)
    if (credit) { if (card.includes('BUILT BY ' + credit)) ok(true, `the phone card says BUILT BY ${credit}: "${card.slice(0, 90)}"`); else bad(`no credit on the phone card ("${card.slice(0, 90)}")`) }
    else ok(!/BUILT BY/.test(card), 'no credit asked for, none shown')
    await view(`${mi}-phone-card`); await g(`g.phone({ open: false })`)
    save(`${mi}-phone-map`, 'png', await g(`g.phoneMap(1200)`))
    const mk = (await gj(`g.missions()`)).markers.filter((k) => k.mission === m.id); ok(mk.length > 0, `marker on the map: ${mk.map((k) => `${k.text} at x ${k.x.toFixed(1)} z ${k.z.toFixed(1)}`).join('; ')}`)

    for (const [oi, o] of m.objectives.entries()) {
      const t0 = Date.now(), s0 = spotOf(o), s = s0 && spots.find((x) => x.key === s0.key), O = { type: o.type, text: o.text, ok: false, secs: 0 }; R.objectives.push(O)
      if (o.hint) { if (!(await said(o.hint[o.hint.length - 1][0], o.hint[o.hint.length - 1][1], 8))) bad(`objective ${oi + 1}: its tip never arrived`) }
      if (o.type === 'reach') {
        const id = o.place || (o.places || [])[0]
        if (id) await g(`(g.teleport('${id}'), 1)`); else await go(s)
      } else if (o.type === 'paint') {
        const w = s.wall, x = await mis(m.id), kind = o.kind || 'tag'
        const sk = o.sketch || (sketches.find((k) => k.kind === kind && !k.mine) || {}).id
        const at = o.over && x.region ? [(x.region[0] + x.region[2]) / 2, (x.region[1] + x.region[3]) / 2] : [w.w / 2, Math.min(w.h / 2, 1.9)]
        await go(s); await sleep(500)
        const secs = (sketches.find((k) => k.id === sk) || {}).secs || 0
        // under software WebGL the blast goes up at once (animated, it would take minutes of slow frames)
        await T.ev(`window.vxGameNow.blast('${sk}', { wall: '${w.id}', at: [${at[0].toFixed(2)}, ${at[1].toFixed(2)}], speed: ${SOFT ? 0 : secs / 4 < 20 ? 4 : 0} }).then(() => 1)`)
        O.sketch = sk
      } else if (o.type === 'buff') {
        const w = s.wall, x = await mis(m.id), Rg = o.over && x.region ? x.region : [0.5, 0.3, Math.min(w.w - 0.5, 3), 1.6]
        await go(s); await sleep(400)
        await g(`(() => { for (let y = ${Rg[1] - 0.15}; y <= ${Rg[3] + 0.15}; y += 0.12) g.paint('${w.id}', [[${(Rg[0] - 0.2) / w.w}, y / ${w.h}], [${(Rg[2] + 0.2) / w.w}, y / ${w.h}]], { cap: 3, buff: true }); return 1 })()`)
      } else if (o.type === 'photo') {
        const w = s.wall, ds = [...new Set([s.d, 8, 6, 4.5, 10, 12, 15].map((d) => +d.toFixed(1)))].filter((d) => d < (o.dist ?? 20) - 1)
        await g(`g.phone({ app: 'camera' })`); await sleep(700 * Math.min(SLOW, 4))
        let framed = ''
        for (const d of ds) { for (const p of [0.12, 0, -0.15]) {
          await g(`(g.goto(${w.x + w.nx * d}, ${w.z + w.nz * d}, ${s.yaw}, ${p}), 1)`); await sleep(700 * Math.min(SLOW, 4))
          if (!(await roomy(w))) break
          const aim = await T.ev(`(() => { const e = document.querySelector('#gmView .vxp-aim'); return e && e.style.display !== 'none' ? e.textContent : '' })()`)
          if (/IN FRAME/.test(aim)) { framed = `${d} m back, tilt ${p}`; break }
        } if (framed) break }
        await T.ev(`window.vxGameNow.photo({ width: 960 }).then(() => 1, () => 0)`); await sleep(600 * Math.min(SLOW, 4))
        await g(`g.phone({ open: false })`)
        O.framed = framed || 'never in frame'
      } else if (o.type === 'escape') {
        await g(`(g.cops(false), 1)`); await sleep(300); await g(`(g.cops(true), g.goto(-50, 46.3, ${-Math.PI / 2}, 0.12), 1)`); await sleep(400)
        await g(`(g.alarm(), g.goto(-43.5, 46.3, ${-Math.PI / 2}, 0.12), 1)`)
        await waitFor('a chase', async () => (await gj(`g.law()`)).chase === 'chase', 10)
        await g(`(g.goto(31, -40, 0, 0.12), 1)`)
        await waitFor('escaped', async () => { const x = await mis(m.id); return x.step > oi || x.status === 'done' }, 45)
      } else if (o.type === 'hide') {
        await T.key('c', 'KeyC', 67); await sleep(((o.secs ?? 5) * 1000 + 1500) * SLOW)
      }
      const after = await waitFor(`${m.id} objective ${oi + 1}`, async () => { const x = await mis(m.id); return x.step > oi || x.status === 'done' ? x : null }, o.type === 'hide' ? 12 : 10)
      if (o.type === 'hide') await T.key('c', 'KeyC', 67)
      if (o.type === 'escape') await g(`(g.cops(false), 1)`)
      O.secs = +((Date.now() - t0) / 1000).toFixed(1)
      if (after) { O.ok = true; ok(true, `${oi + 1}. ${o.type}: ${o.text} (${O.secs} s${O.sketch ? ', blasted ' + O.sketch : ''}${O.framed ? ', framed ' + O.framed : ''})`) }
      else { bad(`objective ${oi + 1} (${o.type}: ${o.text}) did not complete${O.framed === 'never in frame' ? ' (the lens never said IN FRAME from in front of ' + o.walls.join(' / ') + ')' : ''}`); if (s) await snap(`${mi}-${oi}-${o.type}`); R.stuck = true; break }
      if (o.type === 'photo' && after) save(`${mi}-${oi}-photo`, 'png', await T.ev(`window.vxGameNow.photos().then((l) => window.vxGameNow.photoData(l[0].id))`))
      else if (s) await snap(`${mi}-${oi}-${o.type}`)
    }
    if (R.stuck) { ok(false, `${m.id}: the rest of it not played (objectives come one at a time)`); continue }
    const fin = await waitFor(m.id + ' done', async () => { const x = await mis(m.id); return x.status === 'done' ? x : null }, 6)
    if (fin) ok(true, `${m.title} done`); else bad('not done after its last objective')
    const lastDone = m.done[m.done.length - 1]
    if (await said(lastDone[0], lastDone[1], 6 + m.done.length * 2)) ok(true, `the reply: "${lastDone[1]}"`); else bad('the done lines never arrived')
    if (m.objectives.some((o) => o.type === 'photo')) { const th = await thread(m.from); ok(th.includes('[photo]'), `the photo went in ${m.from.toUpperCase()}'s thread`) }
  }

  // the clip: a short H.264 copy beside the pictures, and a frame of it for the contact sheet
  const webm = await recStop()
  if (webm && webm.length > 2000) {
    const raw = `${OUT}/clip.webm`; fs.writeFileSync(raw, Buffer.from(webm.split(',')[1], 'base64'))
    try {
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', raw, '-t', '45', '-vf', 'scale=960:-2', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '26', '-an', `${OUT}/clip.mp4`])
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '2', '-i', `${OUT}/clip.mp4`, '-frames:v', '1', `${OUT}/clip-frame.jpg`])
      fs.rmSync(raw); result.clip = `${OUT}/clip.mp4`; result.pictures.push(`${OUT}/clip-frame.jpg`)
      ok(true, `clip: ${result.clip} (${(fs.statSync(result.clip).size / 1e6).toFixed(1)} MB)`)
    } catch (e) { ok(false, 'clip: ffmpeg ' + String(e.message).split('\n')[0]) }
  } else ok(false, 'clip: nothing was recorded')
  save('map-overhead', 'png', await g(`g.map(1400)`))

  // ---- progress survives a reload (the pack loaded again: the bundle has the files from before this pack) ----
  await sleep(2500); T.close()
  await open()   // navigating again is the reload
  if (!(await gj(`g.packs()`)).packs.some((p) => p.id === PACK.id)) await packTool('load', PACK)
  await sleep(800 * Math.min(SLOW, 4))
  const afterReload = (await gj(`g.missions()`)).list.filter((x) => PACK.missions.some((m) => m.id === x.id))
  ok(afterReload.length === PACK.missions.length && afterReload.every((x) => x.status === 'done'), `after a reload: ${afterReload.map((x) => x.id + ' ' + x.status).join(', ')}`)

  // ---- fps: every objective spot without the pack, then with all its missions in play, best of a re-measure ----
  const all = spots.map((s) => s.key)
  if (FPS_ON) {
    const without = async () => { await g(`(g.packs({ unload: '${PACK.id}' }), 1)`); await sleep(600) }
    const within = async () => { await g(`(g.packs({ load: ${JSON.stringify(PACK)} }), ${JSON.stringify(PACK.missions.map((m) => m.id))}.forEach((id) => g.missions({ start: id })), 1)`); await sleep(2500 + Math.max(...PACK.missions.map((m) => m.intro.length)) * 1400) }
    const pass = async (keys) => { const r = {}; for (const s of spots.filter((x) => keys.includes(x.key))) { await go(s); await sleep(1500); r[s.key] = await fpsNow() } return r }
    await without(); await pass(all)
    const base = await pass(all)
    await within(); const now = await pass(all)
    for (let k = 0; k < 2; k++) {
      const slow = all.filter((key) => now[key] < base[key] * (1 - FPS_DROP)); if (!slow.length) break
      await without(); const b2 = await pass(slow); await within(); const n2 = await pass(slow)
      for (const key of slow) { base[key] = Math.max(base[key], b2[key]); now[key] = Math.max(now[key], n2[key]) }
    }
    for (const key of all) {
      const drop = +(1 - now[key] / base[key]).toFixed(3); result.fps.push({ key, base: base[key], now: now[key], drop })
      ok(drop <= FPS_DROP, `fps at ${key}: ${now[key]} with the pack's missions in play, ${base[key]} without (${drop > 0 ? '-' : '+'}${Math.abs(drop * 100).toFixed(1)}%, at most -${FPS_DROP * 100}%)`)
    }
  } else ok(true, `fps gate skipped (${process.env.PACK_FPS === 'off' ? 'PACK_FPS=off' : GL + ' WebGL'}): it runs at review on a real GPU`)

  // ---- street and wide views at the pack's places (as the devkit's place-shots.mjs) ----
  const near = (w) => places.reduce((b, p) => { const d = Math.hypot(p.x - w.x, p.z - w.z); return d < b.d ? { id: p.id, d } : b }, { id: '', d: 40 }).id
  result.places = [...new Set(PACK.missions.flatMap((m) => m.objectives.flatMap((o) => o.type === 'reach' ? (o.place ? [o.place] : o.places || []) : (o.walls || []).slice(0, 1).map((id) => wallOf(id) ? near(wallOf(id)) : ''))).filter(Boolean))]
  fs.writeFileSync(`${OUT}/places.txt`, result.places.join(' ') + '\n')
  await g(`(g.phone({ open: false }), g.cops(false), g.torch(false), 1)`)
  for (const p of result.places) {
    await g(`(g.teleport('${p}'), 1)`); await sleep(1600 * Math.min(SLOW, 3)); await snap(`district-${p}-street`)
    await g(`(g.inspect({ dist: 7, pitch: 0.42 }), 1)`); await sleep(800 * Math.min(SLOW, 3)); await snap(`district-${p}-wide`); await g(`(g.inspect({}), 1)`)
  }
  await g(`(g.teleport('studio'), 1)`)
} catch (e) { ok(false, 'pack-check stopped: ' + String(e && e.message || e).slice(0, 300)) }

result.ok = !fails.length; result.fails = fails.slice()
fs.writeFileSync(`${OUT}/check.json`, JSON.stringify(result, null, 1))
const errs = (T ? T.errs : []).filter((e) => !/WebGL|GL_|Shader|warning|favicon|GPU stall|404/i.test(e)); if (errs.length) console.log('page errors:', errs.slice(0, 8))
console.log(fails.length ? `\n${fails.length} FAILED:\n` + fails.join('\n') : '\nALL OK')
clearTimeout(watchdog); quit(fails.length ? 1 : 0)
