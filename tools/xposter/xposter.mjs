// THE X AUTOPILOT for @v3xvoid (RB, 21 Nov 2026: "give the vexvoid-builder the job of making new tweets too"). Runs on
// the builder VM as its own Linux user, vexvoid-x, from a root-owned copy in /opt/vexvoid-x (install.sh). Every 15
// minutes a timer runs `tick`; it does nothing unless a 12:00 or 18:00 London slot is due (or was missed by under 3
// hours while the machine slept) and has not been used. Then it posts ONE thing with ONE picture:
//   1. the oldest hand-approved post in ~/queue (the Mac queue, copied in once), else
//   2. a new post written by Claude (one Messages API call, no tools, structured output), checked by rules.mjs in
//      code; a post that fails the checks is rewritten, at most 3 times, else the slot is skipped.
// Kill switch: the file /home/vexvoid-x/STOP. Log: ~/posts.jsonl (one JSON line per event) and ~/xposter.log (plain).
// Never more than 2 posts a London day; never twice in a slot (a 'sending' line is written before the post call).
//
//   node xposter.mjs tick          the timer's entry point (quiet when nothing is due)
//   node xposter.mjs dry           write one post and check it; print it; send nothing (one Claude call)
//   node xposter.mjs status        last 10 posts, next slot, STOP, today's count, the queue (anyone may run it)
//   node xposter.mjs check FILE    run the house checks on a post file {text, image, alt} against the history
//   node xposter.mjs add FILE|-    check a hand-written post and put it at the end of the queue
//   node xposter.mjs seed-done ID… mark queued posts as already posted (by the Mac queue): moved to queue/done
// Keys: ~/.config/vexvoid-x/env (mode 600, owner vexvoid-x): VEXVOID_X_API_KEY, VEXVOID_X_API_SECRET,
// VEXVOID_X_ACCESS_TOKEN, VEXVOID_X_ACCESS_SECRET, ANTHROPIC_API_KEY. Read when used; never printed or logged.
// Test knobs: VEXVOID_X_HOME (default /home/vexvoid-x), VEXVOID_X_IMAGES (default <this folder>/images), and
// VEXVOID_X_TEST_X_BASE / VEXVOID_X_TEST_ANTHROPIC_BASE (fake servers: only http://127.0.0.1:PORT is accepted).
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as R from './rules.mjs'
import { xClient } from './x-api.mjs'

const CODE = path.dirname(fileURLToPath(import.meta.url))
export const paths = () => {
  const home = process.env.VEXVOID_X_HOME || '/home/vexvoid-x'
  return {
    home, log: path.join(home, 'posts.jsonl'), text: path.join(home, 'xposter.log'), dry: path.join(home, 'dry.jsonl'),
    queue: path.join(home, 'queue'), stop: path.join(home, 'STOP'), lock: path.join(home, '.lock'),
    env: path.join(home, '.config', 'vexvoid-x', 'env'),
    images: process.env.VEXVOID_X_IMAGES || path.join(CODE, 'images'),
  }
}
export const KEY_NAMES = ['VEXVOID_X_API_KEY', 'VEXVOID_X_API_SECRET', 'VEXVOID_X_ACCESS_TOKEN', 'VEXVOID_X_ACCESS_SECRET', 'ANTHROPIC_API_KEY']

// ------------------------------------------------------------------ files
export function readLog(P = paths()) {
  if (!fs.existsSync(P.log)) return []
  return fs.readFileSync(P.log, 'utf8').split('\n').filter(Boolean).flatMap((l) => { try { return [JSON.parse(l)] } catch { return [] } })
}
let SECRETS = []
const scrub = (s) => { let t = String(s); for (const k of SECRETS) if (k && k.length >= 8) t = t.split(k).join('[key]'); return t.replace(/sk-ant-[A-Za-z0-9_-]+/g, '[key]') }
function append(P, rec) { fs.appendFileSync(P.log, scrub(JSON.stringify(rec)) + '\n', { mode: 0o644 }) }
const stamp = (ms) => { const l = R.london(ms); return `${l.date} ${String(l.H).padStart(2, '0')}:${String(l.M).padStart(2, '0')}` }
function say(P, now, line) { const t = scrub(`${stamp(now)} ${line}`); fs.appendFileSync(P.text, t + '\n', { mode: 0o644 }); console.log(t) }

/** The keys from the env file, or { missing } (values never leave this process except in the API calls). */
export function readKeys(P = paths()) {
  let raw = ''
  try { raw = fs.readFileSync(P.env, 'utf8') } catch (e) { return { missing: KEY_NAMES, why: e.code === 'EACCES' ? 'not readable by this user' : 'no key file' } }
  const k = {}
  for (const line of raw.split('\n')) { const m = line.match(/^\s*(?:export\s+)?([A-Z0-9_]+)\s*=\s*["']?([^"'\s]+)["']?\s*$/); if (m) k[m[1]] = m[2] }
  const missing = KEY_NAMES.filter((n) => !k[n])
  SECRETS = KEY_NAMES.map((n) => k[n]).filter(Boolean)
  return { ...(missing.length ? { missing, why: 'missing from the key file' } : {}), anthropic: k.ANTHROPIC_API_KEY,
    x: { apiKey: k.VEXVOID_X_API_KEY, apiSecret: k.VEXVOID_X_API_SECRET, accessToken: k.VEXVOID_X_ACCESS_TOKEN, accessSecret: k.VEXVOID_X_ACCESS_SECRET } }
}

/** The allowlist (images.json), and the pictures on disk whose sha256 matches. */
export function loadImages(P = paths()) {
  const all = JSON.parse(fs.readFileSync(path.join(CODE, 'images.json'), 'utf8')).images
  const ready = all.filter((i) => {
    const f = path.join(P.images, i.set, i.file)
    try { return crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex') === i.sha256 } catch { return false }
  })
  return { all, ready }
}
function releases() {
  const f = [path.join(CODE, 'catalogue.json'), path.join(CODE, '..', '..', 'vx', 'catalogue.json')].find((x) => fs.existsSync(x))
  return f ? R.releaseTitles(JSON.parse(fs.readFileSync(f, 'utf8'))) : []
}
function queueFiles(P) { try { return fs.readdirSync(P.queue).filter((f) => f.endsWith('.json')).sort() } catch { return [] } }
function moveQueued(P, f, sub) { fs.mkdirSync(path.join(P.queue, sub), { recursive: true }); fs.renameSync(path.join(P.queue, f), path.join(P.queue, sub, f)) }

// one run at a time; a lock older than 20 minutes (a crashed run) is taken over. Real time, not the slot clock.
function lock(P) {
  try { const fd = fs.openSync(P.lock, 'wx'); fs.writeSync(fd, String(process.pid)); fs.closeSync(fd); return true } catch {}
  try { if (Date.now() - fs.statSync(P.lock).mtimeMs > 20 * 60e3) { fs.rmSync(P.lock); return lock(P) } } catch {}
  return false
}

// ------------------------------------------------------------------ the clients (real ones are made only when needed)
function testBase(name) {
  const v = process.env[name]; if (!v) return null
  if (!/^http:\/\/127\.0\.0\.1:\d+$/.test(v)) throw new Error(`${name} must be http://127.0.0.1:PORT (a local fake server)`)
  return v
}
export async function anthropicClient(apiKey) {
  let mod
  // the root-owned copy in /opt/vexvoid-x/node_modules (install.sh); from a repo checkout, tools/builder's pinned copy
  try { mod = await import('@anthropic-ai/sdk') } catch {
    const req = createRequire(path.join(CODE, '..', 'builder', 'package.json'))
    mod = await import(pathToFileURL(req.resolve('@anthropic-ai/sdk')).href)
  }
  const Anthropic = mod.default
  return new Anthropic({ apiKey, baseURL: testBase('VEXVOID_X_TEST_ANTHROPIC_BASE') || 'https://api.anthropic.com', maxRetries: 2, timeout: 120e3 })
}
const realX = (keys) => xClient(keys, { base: testBase('VEXVOID_X_TEST_X_BASE') || undefined })

// ------------------------------------------------------------------ choosing the post
/** One written post: up to MAX_TRIES calls; returns { post, usage, tries, problems }. */
export async function write({ client, images, hist, rel, linkOk, slotLabel, random = Math.random }) {
  const usage = { input_tokens: 0, output_tokens: 0 }, problems = []
  let retryNote = ''
  for (let t = 1; t <= R.MAX_TRIES; t++) {
    const angle = R.ANGLES[Math.floor(random() * R.ANGLES.length)]
    const res = await client.messages.create({
      model: R.MODEL, max_tokens: 1500, system: R.SYSTEM,
      output_config: { effort: 'low', format: { type: 'json_schema', schema: R.answerSchema(images) } },
      messages: [{ role: 'user', content: R.userMessage({ releases: rel, images, hist, linkOk, angle, slotLabel, retryNote }) }],
    })
    usage.input_tokens += (res.usage && res.usage.input_tokens) || 0
    usage.output_tokens += (res.usage && res.usage.output_tokens) || 0
    let why
    if (res.stop_reason === 'refusal') why = 'the model declined'
    else if (res.stop_reason === 'max_tokens') why = 'the answer was cut off'
    let post
    if (!why) {
      const txt = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('')
      try { const a = JSON.parse(txt); post = { text: String(a.text || '').trim(), image: a.image, alt: String(a.alt || '').trim() } } catch { why = 'the answer was not JSON' }
    }
    if (post) {
      const p = R.check(post, hist, images, { needImage: true })
      if (!p.length) return { post, usage, tries: t, problems }
      why = p.join('; ')
    }
    problems.push(`try ${t}: ${why}`); retryNote = why
  }
  return { post: null, usage, tries: R.MAX_TRIES, problems }
}

/** The next queued post that passes the checks; bad ones go to queue/held (a link post waits for its turn). */
function nextSeed(P, hist, images, now) {
  for (const f of queueFiles(P)) {
    let s
    try { s = JSON.parse(fs.readFileSync(path.join(P.queue, f), 'utf8')) } catch { moveQueued(P, f, 'held'); say(P, now, `queue: ${f} is not valid JSON: moved to queue/held`); continue }
    const post = { text: String(s.text || ''), image: s.image ?? null, alt: s.alt || '' }
    const p = R.check(post, hist, images, { seed: true })
    if (p.length && p.every((x) => /^a link post within/.test(x))) continue
    if (p.length) { moveQueued(P, f, 'held'); say(P, now, `queue: ${f} held (${p.join('; ')})`); continue }
    return { file: f, id: s.id || f.replace(/\.json$/, ''), post }
  }
  return null
}

// ------------------------------------------------------------------ tick: one timer run
export async function tick({ now = Date.now(), deps = {} } = {}) {
  const P = paths()
  const slot = R.dueSlot(now)
  if (!slot || R.slotDone(readLog(P), slot.id)) return { action: 'idle' }
  if (!lock(P)) return { action: 'busy' }
  try { return await run(P, slot, now, deps) } finally { try { fs.rmSync(P.lock) } catch {} }
}

async function run(P, slot, now, deps) {
  const log = readLog(P)
  if (R.slotDone(log, slot.id)) return { action: 'idle' }
  const at = new Date(now).toISOString(), base = { at, slot: slot.id }
  if (fs.existsSync(P.stop)) { append(P, { ...base, state: 'stopped' }); say(P, now, `slot ${slot.id}: STOP file present, nothing posted`); return { action: 'stopped' } }
  if (R.sentOn(log, slot.id.slice(0, 10)) >= R.MAX_PER_DAY) { append(P, { ...base, state: 'capped' }); say(P, now, `slot ${slot.id}: already ${R.MAX_PER_DAY} posts today, nothing posted`); return { action: 'capped' } }
  const keys = readKeys(P)
  if (keys.missing) { append(P, { ...base, state: 'error', note: `keys: ${keys.why} (${keys.missing.join(', ')}); run vexvoid-x-keys` }); say(P, now, `slot ${slot.id}: no keys (${keys.why}); run vexvoid-x-keys`); return { action: 'error' } }
  const { ready: images } = loadImages(P)
  if (!images.length) { append(P, { ...base, state: 'error', note: 'no pictures on disk (rerun setup)' }); say(P, now, `slot ${slot.id}: no pictures on disk`); return { action: 'error' } }
  const hist = R.history(log)

  let pick, usage = null, tries = 0, source
  try {
    const seed = nextSeed(P, hist, images, now)
    if (seed) { pick = seed.post; source = { seed: seed.id, file: seed.file } }
    else {
      const client = deps.anthropic || await anthropicClient(keys.anthropic)
      const linkOk = !hist.slice(-(R.LINK_EVERY - 1)).some(R.isLinkPost)
      const w = await write({ client, images, hist, rel: releases(), linkOk, slotLabel: `${slot.id.slice(11)}:00 London, ${R.london(slot.at).date}`, random: deps.random })
      usage = w.usage; tries = w.tries; source = { written: true }
      const cost = R.modelCost(R.MODEL, usage)
      if (!w.post) { append(P, { ...base, state: 'skipped', tries, problems: w.problems, tokens: usage, model_usd: +cost.toFixed(5) }); say(P, now, `slot ${slot.id}: skipped, ${tries} writes failed the checks (${w.problems.slice(-1)[0]})`); return { action: 'skipped' } }
      pick = w.post
    }
  } catch (e) { append(P, { ...base, state: 'error', note: 'writing: ' + String(e.message || e).slice(0, 400), tokens: usage }); say(P, now, `slot ${slot.id}: error while writing: ${String(e.message || e).slice(0, 200)}`); return { action: 'error' } }

  const model_usd = +R.modelCost(R.MODEL, usage).toFixed(5)
  const x_usd = R.isLinkPost(pick) ? R.X_COST.link : R.X_COST.plain
  const rec = { ...base, text: pick.text, image: pick.image || null, alt: pick.alt || '', ...source, tries, tokens: usage, model_usd, x_usd }
  let x, mediaId = null
  try {
    x = deps.x || realX(keys.x)
    if (pick.image) {
      const img = images.find((i) => i.id === pick.image)
      mediaId = await x.upload(fs.readFileSync(path.join(P.images, img.set, img.file)), img.file, pick.alt)
    }
  } catch (e) { append(P, { ...rec, state: 'error', note: 'picture upload: ' + String(e.message || e).slice(0, 400) }); say(P, now, `slot ${slot.id}: picture upload failed: ${String(e.message || e).slice(0, 200)}`); return { action: 'error' } }

  // from here the slot is used: a crash or an unclear answer never leads to a second post in this slot
  if (source.file) moveQueued(P, source.file, 'done')
  append(P, { ...rec, state: 'sending' })
  try {
    const id = await x.post(pick.text, mediaId)
    const url = `https://x.com/v3xvoid/status/${id}`
    append(P, { ...rec, state: 'posted', posted_at: new Date().toISOString(), tweet_id: id, url })
    say(P, now, `slot ${slot.id}: posted${source.seed ? ' (queue ' + source.seed + ')' : ''} ${url} "${pick.text.replace(/\s+/g, ' ').slice(0, 80)}" (Claude ~$${model_usd.toFixed(3)}, X ~$${x_usd.toFixed(3)})`)
    return { action: 'posted', id, url }
  } catch (e) {
    const definite = !!e.status   // X answered with an error: nothing was posted
    if (definite && source.file) fs.renameSync(path.join(P.queue, 'done', source.file), path.join(P.queue, source.file))
    append(P, { ...rec, state: definite ? 'failed' : 'unknown', note: String(e.message || e).slice(0, 400) })
    say(P, now, `slot ${slot.id}: ${definite ? 'X refused the post' : 'no answer from X (it may or may not have posted; check the account)'}: ${String(e.message || e).slice(0, 200)}`)
    return { action: definite ? 'failed' : 'unknown' }
  }
}

// ------------------------------------------------------------------ dry: write and check, send nothing
export async function dry({ now = Date.now(), deps = {} } = {}) {
  const P = paths(), log = readLog(P), hist = R.history(log)
  const { ready: images, all } = loadImages(P)
  console.log(`pictures: ${images.length} of ${all.length} on disk and checked`)
  const q = queueFiles(P)
  if (q.length) {
    const s = JSON.parse(fs.readFileSync(path.join(P.queue, q[0]), 'utf8'))
    const p = R.check({ text: s.text, image: s.image ?? null, alt: s.alt || '' }, hist, images, { seed: true })
    console.log(`\nthe queue has ${q.length}; the next slot posts ${q[0]}:\n  ${s.text.replace(/\n/g, '\n  ')}\n  [${s.image || 'no picture'}]  checks: ${p.length ? p.join('; ') : 'ok'}`)
  }
  let client = deps.anthropic
  if (!client) { const k = readKeys(P); if (!k.anthropic) { console.log(`\nno Anthropic key (${k.why}): run as vexvoid-x (sudo vexvoid-x dry) after vexvoid-x-keys`); return { ok: false } } client = await anthropicClient(k.anthropic) }
  const linkOk = !hist.slice(-(R.LINK_EVERY - 1)).some(R.isLinkPost)
  const w = await write({ client, images, hist, rel: releases(), linkOk, slotLabel: 'a dry run', random: deps.random })
  const cost = R.modelCost(R.MODEL, w.usage)
  for (const p of w.problems) console.log(`  rejected, ${p}`)
  if (w.post) console.log(`\nwritten (${w.tries} ${w.tries === 1 ? 'try' : 'tries'}, ${R.weightedLength(w.post.text)}/280, link ${linkOk ? 'allowed' : 'not allowed'} now):\n  ${w.post.text.replace(/\n/g, '\n  ')}\n  [${w.post.image}] alt: ${w.post.alt}\n  checks: ok`)
  else console.log('\nno post passed the checks: the slot would be skipped')
  console.log(`Claude: ${w.usage.input_tokens} in, ${w.usage.output_tokens} out, ~$${cost.toFixed(4)}. Nothing was sent.`)
  try { fs.appendFileSync(P.dry, scrub(JSON.stringify({ at: new Date(now).toISOString(), post: w.post, problems: w.problems, tokens: w.usage, model_usd: +cost.toFixed(5) })) + '\n', { mode: 0o644 }) } catch {}
  return { ok: !!w.post, post: w.post, problems: w.problems }
}

// ------------------------------------------------------------------ status
export function status({ now = Date.now() } = {}) {
  const P = paths(), log = readLog(P), out = []
  const stop = fs.existsSync(P.stop), next = R.nextSlot(now), due = R.dueSlot(now)
  const mins = Math.round((next.at - now) / 60e3)
  out.push('VexVoid X autopilot (@v3xvoid)')
  out.push(`  state:     ${stop ? `STOPPED (${P.stop} exists; sudo rm it to start again)` : 'running'}`)
  out.push(`  today:     ${R.sentOn(log, R.london(now).date)} of ${R.MAX_PER_DAY} posts (London ${R.london(now).date})`)
  if (due && !R.slotDone(log, due.id)) out.push(`  due now:   ${due.id} (the timer takes it within 15 minutes)`)
  out.push(`  next slot: ${stamp(next.at)} London (in ${Math.floor(mins / 60)}h ${mins % 60}m)`)
  const q = queueFiles(P), held = (() => { try { return fs.readdirSync(path.join(P.queue, 'held')).length } catch { return 0 } })()
  out.push(`  queue:     ${q.length} hand-written post${q.length === 1 ? '' : 's'} waiting${q.length ? ' (next: ' + q[0] + ')' : ''}${held ? `; ${held} held in queue/held (failed the checks)` : ''}`)
  let keys
  try { fs.accessSync(P.env, fs.constants.R_OK); const k = readKeys(P); SECRETS = []; keys = k.missing ? `MISSING ${k.missing.join(', ')}` : 'all 5 present' }
  catch (e) { keys = e.code === 'ENOENT' ? 'NOT INSTALLED (run vexvoid-x-keys)' : 'hidden from you, as they should be (sudo vexvoid-x status checks them)' }
  out.push(`  keys:      ${keys}`)
  const { ready, all } = loadImages(P)
  out.push(`  pictures:  ${ready.length} of ${all.length} on disk and checked`)
  const events = log.filter((r) => r.state !== 'imported')
  const lastErr = [...events].reverse().find((r) => ['error', 'failed', 'unknown'].includes(r.state))
  if (lastErr) out.push(`  last problem: ${stamp(Date.parse(lastErr.at))} ${lastErr.state}: ${String(lastErr.note || '').slice(0, 160)}`)
  out.push('  last 10:')
  const shown = events.filter((r) => r.state !== 'sending' || !events.some((o) => o.slot === r.slot && o !== r && ['posted', 'failed', 'unknown'].includes(o.state))).slice(-10)
  if (!shown.length) out.push('    (nothing yet)')
  for (const r of shown) out.push(`    ${stamp(Date.parse(r.at))}  ${r.state.padEnd(8)} ${r.text ? '"' + r.text.replace(/\s+/g, ' ').slice(0, 70) + '"' : (r.note || (r.problems || []).slice(-1)[0] || '').slice(0, 90)}${r.url ? '  ' + r.url : ''}`)
  const month = R.london(now).date.slice(0, 7), mine = events.filter((r) => r.at && R.london(Date.parse(r.at)).date.startsWith(month))
  const posted = mine.filter((r) => r.state === 'posted'), xs = posted.reduce((a, r) => a + (r.x_usd || 0), 0)
  const ms = mine.filter((r) => ['posted', 'skipped', 'failed', 'unknown'].includes(r.state) || (r.state === 'error' && r.tokens)).reduce((a, r) => a + (r.model_usd || 0), 0)
  out.push(`  this month: ${posted.length} posts, X ~$${xs.toFixed(2)}, Claude ~$${ms.toFixed(2)}`)
  out.push(`  logs: ${P.text} (plain), ${P.log} (one JSON line per event)`)
  console.log(out.join('\n'))
}

// ------------------------------------------------------------------ the queue: add, seed-done, check
export function checkFile(file, { seed = true } = {}) {
  const P = paths(), s = JSON.parse(file === '-' ? fs.readFileSync(0, 'utf8') : fs.readFileSync(file, 'utf8'))
  const post = { text: String(s.text || ''), image: s.image ?? null, alt: s.alt || '' }
  return { s, post, problems: R.check(post, R.history(readLog(P)), loadImages(P).all, { seed }) }
}
export function add(file) {
  const P = paths(), { s, post, problems } = checkFile(file)
  if (problems.length) { console.log('NOT ADDED: ' + problems.join('; ')); return false }
  const n = queueFiles(P).length
  const id = String(s.id || 'x-' + crypto.randomBytes(3).toString('hex')).replace(/[^A-Za-z0-9_-]/g, '').slice(0, 24)
  const name = `${Date.now()}-${id}.json`   // sorts after the seed files (01-..09-) and earlier additions
  fs.writeFileSync(path.join(P.queue, name), JSON.stringify({ id, ...post }, null, 1) + '\n', { mode: 0o644 })
  console.log(`added ${name}: it posts after the ${n} already waiting`)
  return true
}
export function seedDone(ids) {
  const P = paths(), want = new Set(ids.map((i) => String(i).replace(/\.json$/, '')))
  const known = new Set(readLog(P).filter((r) => r.seed).map((r) => r.seed))
  for (const f of queueFiles(P)) {
    const s = JSON.parse(fs.readFileSync(path.join(P.queue, f), 'utf8'))
    if (!want.has(s.id)) continue
    moveQueued(P, f, 'done'); want.delete(s.id)
    if (!known.has(s.id)) append(P, { state: 'imported', seed: s.id, text: s.text, image: s.image || null, note: 'posted elsewhere (seed-done)' })
    console.log(`${s.id}: marked as posted (queue/done)`)
  }
  for (const id of want) console.log(`${id}: not in the queue (already done, or never queued)`)
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fs.realpathSync(fileURLToPath(import.meta.url))) {
  const [cmd = 'status', ...rest] = process.argv.slice(2)
  try {
    if (cmd === 'tick') { const r = await tick(); process.exit(r.action === 'error' || r.action === 'failed' ? 1 : 0) }
    else if (cmd === 'dry') { const r = await dry(); process.exit(r.ok ? 0 : 1) }
    else if (cmd === 'status') status()
    else if (cmd === 'check' && rest[0]) { const { post, problems } = checkFile(rest[0]); console.log(`${R.weightedLength(post.text)}/280, link ${R.isLinkPost(post) ? 'yes' : 'no'}: ${problems.length ? 'PROBLEMS: ' + problems.join('; ') : 'ok'}`); process.exit(problems.length ? 1 : 0) }
    else if (cmd === 'add' && rest[0]) process.exit(add(rest[0]) ? 0 : 1)
    else if (cmd === 'seed-done' && rest.length) seedDone(rest)
    else { console.log('usage: vexvoid-x status | dry | check FILE | add FILE | seed-done ID... | tick'); process.exit(2) }
  } catch (e) { console.log('vexvoid-x error: ' + scrub(String(e && e.message || e))); process.exit(1) }
}
