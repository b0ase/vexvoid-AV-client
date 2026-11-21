// Tests for the X autopilot (tools/xposter) with a FAKE Anthropic API and a FAKE X API on 127.0.0.1: no key, no spend,
// nothing posted. The real SDK and the real OAuth signing run against the fakes, which check what they are sent.
//   node tools/xposter/test-xposter.mjs          (setup.sh --self-test runs it, from the repo and from /opt/vexvoid-x)
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import http from 'node:http'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import * as R from './rules.mjs'
import { authHeader, verifyHeader } from './x-api.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const print = console.log, fails = [], ok = (c, m) => { print((c ? 'ok   ' : 'FAIL ') + m); if (!c) fails.push(m) }
const T = (iso) => Date.parse(iso)

// ------------------------------------------------------------------ 1. the rules
{
  const imgs = [{ id: 'a', about: 'x' }, { id: 'b', about: 'y', twin: 'c' }, { id: 'c', about: 'z', twin: 'b' }, { id: 'd' }, { id: 'e' }, { id: 'f' }]
  const good = { text: 'Learn the patrol. Then paint.', image: 'a', alt: 'A tunnel at night.' }
  const c = (p, h = [], o = { needImage: true }) => R.check({ ...good, ...p }, h, imgs, o)
  ok(c({}).length === 0, 'a plain post with an allowed picture passes')
  ok(c({ text: 'Get $VEX now' }).some((x) => /cashtag/.test(x)), 'cashtag ($ + letter) rejected')
  ok(c({ text: 'Tees from $25 at the store' }).some((x) => /money/.test(x)), 'a money amount rejected')
  ok(c({ text: 'x'.repeat(281) }).some((x) => /too long/.test(x)) && c({ text: 'x'.repeat(280) }).length === 0, 'weighted length: 280 ok, 281 rejected')
  ok(R.weightedLength('Play: https://www.vexvoid.com/game') === 6 + 23 && R.weightedLength('夜') === 2, 'a link counts 23, CJK counts 2')
  for (const w of ['NPG', 'Ninja Punk', 'Ninja Punk Girls Ltd', 'limited company', 'Corporation', 'investors', 'tokens', 'priceless', 'profit', 'returns', 'dividends', 'Crypto', 'bitcoin', 'BSV', 'airdrop', 'free money', 'giveaway', 'faceless', 'Coming soon']) {
    ok(c({ text: `The night ${w} wall.` }).some((x) => /banned word/.test(x)), `banned: ${w}`)
  }
  ok(c({ alt: 'A face in the dark.' }).some((x) => /banned word: face/.test(x)), 'banned words in the alt text too')
  ok(c({ text: 'Rain. Returning trains.' }).length === 0 && c({ text: 'The surface of the wall.' }).length === 0, 'no false hits: returning, surface')
  ok(c({ text: 'Big up @someone' }).some((x) => /mention/.test(x)), '@mention rejected')
  ok(c({ text: 'Night #a #b #c' }).some((x) => /hashtags/.test(x)) && c({ text: 'Night. #vexvoid #music' }).length === 0, 'at most 2 hashtags')
  ok(c({ text: 'Play now https://www.vexvoid.com/game' }).length === 0, 'an allowed link passes')
  ok(c({ text: 'Teaser: https://youtu.be/NJdCFoTs2e0.' }).length === 0, 'an allowed link with a full stop after it passes')
  ok(c({ text: 'Play https://www.vexvoid.com/admin' }).some((x) => /not allowed/.test(x)), 'a vexvoid.com page off the list rejected')
  ok(c({ text: 'See https://evil.example/x' }).some((x) => /not allowed/.test(x)), 'another site rejected')
  ok(c({ text: 'Play at vexvoid.com tonight' }).some((x) => /bare web address/.test(x)), 'a bare domain rejected')
  ok(c({ text: 'https://www.vexvoid.com/game https://www.vexvoid.com/store' }).some((x) => /more than one link/.test(x)), 'two links rejected')
  const linkH = [{ state: 'posted', text: 'Play https://www.vexvoid.com/game', image: null }, ...[1, 2, 3, 4, 5].map((i) => ({ state: 'posted', text: `night line ${'abcdefghij'[i]} rain`, image: 'f' }))]
  ok(c({ text: 'Album https://www.vexvoid.com/album' }, linkH).some((x) => /link post within 7/.test(x)), 'a link within 7 posts of the last link rejected')
  ok(c({ text: 'Album https://www.vexvoid.com/album' }, [...linkH, { state: 'posted', text: 'one more quiet wall', image: 'f' }]).length === 0, 'a link 7 posts after the last one passes')
  ok(c({ image: 'zz' }).some((x) => /not on the allowlist/.test(x)), 'a picture off the allowlist rejected')
  ok(c({ image: null }).some((x) => /no picture/.test(x)), 'a written post needs a picture')
  ok(c({ alt: '' }).some((x) => /no alt/.test(x)), 'a picture needs alt text')
  ok(c({ image: 'b' }, [{ state: 'posted', text: 'other words here', image: 'c' }]).some((x) => /used in the last/.test(x)), 'a twin of a recent picture counts as a repeat')
  ok(c({ image: 'b' }, [{ state: 'posted', text: 'other words here', image: 'c' }], { seed: true }).length === 0, 'queued (hand-approved) posts may reuse a picture')
  ok(c({ text: 'Learn the patrol, then paint.' }, [{ state: 'posted', text: 'Learn the patrol. Then paint.', image: 'f' }]).some((x) => /too close/.test(x)), 'a near-duplicate of a recent post rejected')
  ok(c({ text: 'Learn the patrol, then paint.' }, [{ state: 'failed', text: 'Learn the patrol. Then paint.', image: 'f' }]).length === 0, 'a failed post is not history')
  ok(R.similarity('Headphones on. Hood up. Go.', 'Every wall is a page.') < 0.3, 'different posts are not similar')
}

// ------------------------------------------------------------------ 2. slots and the log
{
  const iso = (s) => s && new Date(s.at).toISOString()
  ok(iso(R.dueSlot(T('2026-11-22T12:00:00Z'))) === '2026-11-22T12:00:00.000Z', 'winter: the 12:00 slot is 12:00 UTC')
  ok(iso(R.dueSlot(T('2026-07-01T11:00:00Z'))) === '2026-07-01T11:00:00.000Z' && R.dueSlot(T('2026-07-01T10:59:00Z')) === null, 'summer: 12:00 London is 11:00 UTC, not before')
  ok(R.dueSlot(T('2026-03-29T17:30:00Z')).id === '2026-03-29@18' && iso(R.dueSlot(T('2026-03-29T17:30:00Z'))) === '2026-03-29T17:00:00.000Z', 'the clocks-forward day (29 Mar)')
  ok(iso(R.dueSlot(T('2026-10-25T12:30:00Z'))) === '2026-10-25T12:00:00.000Z', 'the clocks-back day (25 Oct)')
  ok(R.dueSlot(T('2026-11-22T14:59:00Z')).id === '2026-11-22@12' && R.dueSlot(T('2026-11-22T15:00:00Z')) === null, 'catch-up: under 3 hours late posts, 3 hours late does not')
  ok(R.dueSlot(T('2026-11-22T20:59:00Z')).id === '2026-11-22@18' && R.dueSlot(T('2026-11-23T00:30:00Z')) === null, 'the 18:00 catch-up ends before midnight')
  ok(R.nextSlot(T('2026-11-22T18:00:01Z')).id === '2026-11-23@12', 'the next slot after 18:00 is tomorrow 12:00')
  const L = [{ slot: '2026-11-22@12', state: 'sending', at: '2026-11-22T12:00:00Z' }, { slot: '2026-11-22@12', state: 'posted', at: '2026-11-22T12:00:05Z', text: 'a' }]
  ok(R.sentOn(L, '2026-11-22') === 1 && R.history(L).length === 1 && R.history(L)[0].state === 'posted', 'a sent slot counts once, as its posted line')
  ok(R.slotDone(L, '2026-11-22@12') && !R.slotDone(L, '2026-11-22@18'), 'slot done after a send; the next slot is not')
  const F = [{ slot: 's@12', state: 'sending', text: 'a' }, { slot: 's@12', state: 'failed', text: 'a' }]
  ok(R.history(F).length === 0 && R.slotDone(F, 's@12'), 'a failed send: not history, but the slot is used (never twice)')
  ok(R.history([{ slot: 's@12', state: 'sending', text: 'a' }, { slot: 's@12', state: 'unknown', text: 'a' }]).length === 1, 'an unknown send counts as sent')
  ok(!R.slotDone([{ slot: 'x', state: 'error' }, { slot: 'x', state: 'error' }], 'x') && R.slotDone([1, 2, 3].map(() => ({ slot: 'x', state: 'error' })), 'x'), 'errors before sending: retried, at most 3 runs per slot')
  ok(R.sentOn([{ slot: '2026-11-22@12', state: 'sending' }, { slot: '2026-11-22@18', state: 'posted' }], '2026-11-22') === 2, 'the daily count')
}

// ------------------------------------------------------------------ 3. the allowlist, the seed queue, the prompt
const allow = JSON.parse(fs.readFileSync(path.join(HERE, 'images.json'), 'utf8')).images
{
  const banned = ['jam-01', 'jam-03', 'jam-05', 'jam-07', 'jam-10', 'jam-11', 'jam-16', 'jam-17', 'jam-18']
  ok(allow.length === 25 && new Set(allow.map((i) => i.id)).size === allow.length, `images.json: ${allow.length} pictures, ids unique`)
  ok(!allow.some((i) => banned.includes(i.id) || banned.includes(i.file.replace('.jpg', ''))), 'no banned picture (faces: jam-01, 03, 05, 10, 11, 16, 17, 18; jam-07)')
  ok(allow.every((i) => /^[0-9a-f]{64}$/.test(i.sha256) && i.about && /^VexVoid_(Jam|Landscape)$/.test(i.set) && /^[a-z0-9-]+\.jpg$/.test(i.file)), 'every picture has a sha256, a description, a known set')
  ok(allow.filter((i) => i.twin).every((i) => (allow.find((j) => j.id === i.twin) || {}).twin === i.id), 'twins point at each other')
  const seedDir = path.join(HERE, 'seed'), files = fs.readdirSync(seedDir).filter((f) => f.endsWith('.json')).sort()
  let hist = fs.readFileSync(path.join(seedDir, 'history.jsonl'), 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l))
  ok(files.length === 9 && files[0] === '01-x-03.json' && files[8] === '09-x-L2.json', 'the seed queue: x-03..x-10 and x-L2, in order')
  for (const f of files) {
    const s = JSON.parse(fs.readFileSync(path.join(seedDir, f), 'utf8'))
    const p = R.check({ text: s.text, image: s.image ?? null, alt: s.alt || '' }, hist, allow, { seed: true })
    ok(p.length === 0, `seed ${s.id} passes the checks in queue order${p.length ? ': ' + p.join('; ') : ''}`)
    hist = [...hist, { state: 'posted', text: s.text, image: s.image || null }]
  }
  ok(JSON.parse(fs.readFileSync(path.join(seedDir, '07-x-09.json'))).image === 'jam-13', 'x-09 uses jam-13 (its alt text; jam-05 shows a face in profile)')
  ok(R.SYSTEM.includes('never a $ sign') && R.SYSTEM.includes('never a person with a face') && R.SYSTEM.includes('https://youtu.be/NJdCFoTs2e0'), 'the system prompt holds the voice, the rules and the links')
  ok(R.answerSchema(allow).properties.image.enum.length === 25, 'the answer schema limits the picture to the allowlist')
  const um = R.userMessage({ releases: ['Shadow Steps'], images: allow, hist, linkOk: false, angle: 'the music', slotLabel: '12:00' })
  ok(/NOT allowed/.test(um) && /Shadow Steps/.test(um) && /jam-22: .*used recently/.test(um), 'the message: link not allowed, releases, recently used pictures marked')
  ok(R.releaseTitles({ tracks: [{ release: 'a', title: 'A' }, { release: 'a', title: 'A' }, { release: 'c', title: 'chadCN-2' }] }).join() === 'A', 'release titles: one each, the mis-filed test tracks dropped')
}

// ------------------------------------------------------------------ 4. OAuth 1.0a
{
  const k = { apiKey: 'ck', apiSecret: 'cs', accessToken: 'at', accessSecret: 'as' }
  const h = authHeader('POST', 'https://api.x.com/2/tweets', k, 'n0nce', '1700000000')
  // HMAC-SHA1 over the base string, computed here by hand
  const base = 'POST&https%3A%2F%2Fapi.x.com%2F2%2Ftweets&' + encodeURIComponent('oauth_consumer_key=ck&oauth_nonce=n0nce&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1700000000&oauth_token=at&oauth_version=1.0')
  const sig = crypto.createHmac('sha1', 'cs&as').update(base).digest('base64')
  ok(h.includes(`oauth_signature="${encodeURIComponent(sig)}"`), 'OAuth 1.0a signature matches a hand-computed HMAC-SHA1')
  ok(verifyHeader('POST', 'https://api.x.com/2/tweets', h, k) && !verifyHeader('POST', 'https://api.x.com/2/tweets', h, { ...k, apiSecret: 'other' }), 'the fake server can verify it (and refuses a wrong secret)')
}

// ------------------------------------------------------------------ 5. end to end against fake servers
const KEYS = { VEXVOID_X_API_KEY: 'TESTck-' + 'A'.repeat(20), VEXVOID_X_API_SECRET: 'TESTcs-' + 'B'.repeat(40), VEXVOID_X_ACCESS_TOKEN: 'TESTat-' + 'C'.repeat(40), VEXVOID_X_ACCESS_SECRET: 'TESTas-' + 'D'.repeat(40), ANTHROPIC_API_KEY: 'sk-ant-TEST-' + 'E'.repeat(40) }
const xk = { apiKey: KEYS.VEXVOID_X_API_KEY, apiSecret: KEYS.VEXVOID_X_API_SECRET, accessToken: KEYS.VEXVOID_X_ACCESS_TOKEN, accessSecret: KEYS.VEXVOID_X_ACCESS_SECRET }
const body = (req) => new Promise((r) => { const b = []; req.on('data', (d) => b.push(d)); req.on('end', () => r(Buffer.concat(b))) })
const listen = (h) => new Promise((r) => { const s = http.createServer(h); s.listen(0, '127.0.0.1', () => r(s)) })

const A = { calls: [], answers: [], n: 0 }
const DEFAULTS = [['Rain on the deck. The patrol turns left at two.', 'jam-02'], ['Bass under the bridge. Paint still wet.', 'land-05'], ['Climb first. Ask later.', 'jam-20'],
  ['Echoes in the Dust, headphones, a long walk home.', 'jam-22'], ['Every lamp in the yard hums in a different key.', 'land-10'], ['Out past the depot the tracks go quiet.', 'jam-19']]
  .map(([text, image]) => ({ text, image, alt: 'A black and white night scene.' }))
const anth = await listen(async (req, res) => {
  const b = JSON.parse((await body(req)).toString())
  A.calls.push({ path: req.url.split('?')[0], key: req.headers['x-api-key'] || String(req.headers.authorization || '').replace(/^Bearer /, ''), b })
  const a = A.answers.length ? A.answers.shift() : DEFAULTS[A.n++ % DEFAULTS.length]
  if (a.status) { res.writeHead(a.status, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ type: 'error', error: { type: 'invalid_request_error', message: 'bad' } })) }
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({ id: 'msg_1', type: 'message', role: 'assistant', model: b.model, stop_reason: a.stop || 'end_turn', content: [{ type: 'text', text: typeof a === 'string' ? a : JSON.stringify(a) }], usage: { input_tokens: 3000, output_tokens: 200 } }))
})
const X = { calls: [], tweetMode: 'ok', n: 0 }
const xs = await listen(async (req, res) => {
  const b = await body(req), url = `http://127.0.0.1:${xs.address().port}${req.url}`
  const signed = verifyHeader(req.method, url, req.headers.authorization, xk)
  X.calls.push({ path: req.url, signed, body: b, ct: req.headers['content-type'] || '' })
  if (!signed) { res.writeHead(401); return res.end('{"title":"Unauthorized"}') }
  if (req.url === '/2/media/upload') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ data: { id: 'media-' + (++X.n) } })) }
  if (req.url === '/2/media/metadata') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end('{}') }
  if (req.url === '/2/tweets') {
    if (X.tweetMode === '402') { res.writeHead(402, { 'content-type': 'application/json' }); return res.end('{"title":"CreditsDepleted"}') }
    if (X.tweetMode === 'drop') return req.socket.destroy()
    res.writeHead(201, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ data: { id: String(9000 + X.n), text: JSON.parse(b).text } }))
  }
  res.writeHead(404); res.end('{}')
})

// a scratch home with test keys, and a copy of the code whose images.json matches stand-in picture files (the real
// pictures are not in the repo; the code checks every file's sha256 against images.json before offering it)
const H = fs.mkdtempSync(path.join(os.tmpdir(), 'vexvoid-x-test-'))
const IMG = path.join(H, 'images')
const CODE2 = path.join(H, 'code'); fs.mkdirSync(CODE2)
for (const f of ['xposter.mjs', 'rules.mjs', 'x-api.mjs']) fs.copyFileSync(path.join(HERE, f), path.join(CODE2, f))
if (fs.existsSync(path.join(HERE, 'catalogue.json'))) fs.copyFileSync(path.join(HERE, 'catalogue.json'), path.join(CODE2, 'catalogue.json'))
else fs.copyFileSync(path.join(HERE, '..', '..', 'vx', 'catalogue.json'), path.join(CODE2, 'catalogue.json'))
const testAllow = allow.map((i) => { const bytes = Buffer.from(`stand-in ${i.id}`); fs.mkdirSync(path.join(IMG, i.set), { recursive: true }); fs.writeFileSync(path.join(IMG, i.set, i.file), bytes); return { ...i, sha256: crypto.createHash('sha256').update(bytes).digest('hex') } })
testAllow.find((i) => i.id === 'land-17').sha256 = '0'.repeat(64)   // one picture whose file does not match: never offered
fs.writeFileSync(path.join(CODE2, 'images.json'), JSON.stringify({ images: testAllow }))
// the SDK: the copy beside the code (/opt/vexvoid-x/node_modules), else tools/builder's
const sdkFrom = [path.join(HERE, 'node_modules'), path.join(HERE, '..', 'builder', 'node_modules')].find((d) => fs.existsSync(path.join(d, '@anthropic-ai', 'sdk')))
ok(!!sdkFrom, `the Anthropic SDK is installed (${sdkFrom || 'not found: run setup'})`)
if (sdkFrom) fs.symlinkSync(sdkFrom, path.join(CODE2, 'node_modules'))

const HOME = path.join(H, 'home'); fs.mkdirSync(path.join(HOME, '.config', 'vexvoid-x'), { recursive: true }); fs.mkdirSync(path.join(HOME, 'queue'))
const ENVF = path.join(HOME, '.config', 'vexvoid-x', 'env')
fs.writeFileSync(ENVF, Object.entries(KEYS).map(([k, v]) => `${k}=${v}`).join('\n') + '\n', { mode: 0o600 })
Object.assign(process.env, { VEXVOID_X_HOME: HOME, VEXVOID_X_IMAGES: IMG, VEXVOID_X_TEST_X_BASE: `http://127.0.0.1:${xs.address().port}`, VEXVOID_X_TEST_ANTHROPIC_BASE: `http://127.0.0.1:${anth.address().port}` })
const out = []; const log0 = console.log; console.log = (...a) => out.push(a.join(' '))
const X2 = await import(path.join(CODE2, 'xposter.mjs'))
const readLog = () => X2.readLog()
const q = (name, o) => fs.writeFileSync(path.join(HOME, 'queue', name), JSON.stringify(o))
const reset = () => { A.calls = []; X.calls = []; A.answers = [] }
let r
try {
  // nothing due at 10:00
  r = await X2.tick({ now: T('2026-11-23T10:00:00Z') })
  ok(r.action === 'idle' && readLog().length === 0 && X.calls.length === 0 && A.calls.length === 0, 'tick at 10:00: nothing due, nothing logged, no calls')

  // 12:00: the queue goes first, oldest file first
  q('01-x-03.json', { id: 'x-03', text: 'Black and white only. The colour is in the sound.', image: 'jam-14', alt: 'A dripping white V on a black wall.' })
  q('02-x-04.json', { id: 'x-04', text: 'Four Ton Shadow. 88 BPM. Snare on two and four.', image: 'jam-04', alt: 'A hooded figure, side on, on a platform.' })
  r = await X2.tick({ now: T('2026-11-23T12:00:30Z') })
  const tw = X.calls.find((c) => c.path === '/2/tweets')
  ok(r.action === 'posted' && A.calls.length === 0, 'tick at 12:00: posts the queued x-03, no Claude call')
  ok(X.calls.length === 3 && X.calls.every((c) => c.signed), 'X got upload + alt text + post, every call correctly OAuth-signed')
  ok(/multipart\/form-data/.test(X.calls[0].ct) && X.calls[0].body.includes('stand-in jam-14') && X.calls[0].body.includes('tweet_image'), 'the picture bytes are uploaded as tweet_image')
  ok(JSON.parse(X.calls[1].body).metadata.alt_text.text === 'A dripping white V on a black wall.', 'alt text sent')
  ok(tw && JSON.parse(tw.body).text.startsWith('Black and white only') && JSON.parse(tw.body).media.media_ids[0] === 'media-1', 'the post carries the text and the media id')
  ok(fs.existsSync(path.join(HOME, 'queue', 'done', '01-x-03.json')) && fs.existsSync(path.join(HOME, 'queue', '02-x-04.json')), 'x-03 moved to queue/done; x-04 waits')
  const L1 = readLog()
  ok(L1.map((l) => l.state).join() === 'sending,posted' && L1[1].url === 'https://x.com/v3xvoid/status/9001' && L1[1].seed === 'x-03' && L1[1].x_usd === 0.015, 'posts.jsonl: sending then posted, with url, seed id, est. X cost')

  // the same slot again: never twice
  reset(); r = await X2.tick({ now: T('2026-11-23T12:15:00Z') })
  ok(r.action === 'idle' && X.calls.length === 0, 'tick at 12:15: the slot is used, nothing sent')

  // 18:00, empty queue: Claude writes; the first answer breaks a rule, the second passes
  fs.renameSync(path.join(HOME, 'queue', '02-x-04.json'), path.join(H, 'x-04.json'))
  reset(); A.answers = [{ text: 'Grab $VEX tonight', image: 'jam-02', alt: 'Letters.' }, { text: 'Wet rails. One lamp. Nobody watching the yard.', image: 'jam-09', alt: 'An empty rail yard at night under floodlights.' }]
  r = await X2.tick({ now: T('2026-11-23T18:01:00Z'), deps: { random: () => 0 } })
  const req = A.calls[0] && A.calls[0].b
  ok(r.action === 'posted' && A.calls.length === 2, 'tick at 18:00: written by Claude; a rejected answer is rewritten (2 calls)')
  ok(A.calls.every((c) => c.key === KEYS.ANTHROPIC_API_KEY && c.path === '/v1/messages'), 'the real SDK sends the key to /v1/messages')
  ok(req && req.model === 'claude-sonnet-5-5' && !('tools' in req) && req.max_tokens <= 2000 && req.output_config.format.type === 'json_schema' && req.output_config.effort === 'low', 'one Messages call: Sonnet 5.5, no tools, small max_tokens, structured output, effort low')
  ok(req && req.output_config.format.schema.properties.image.enum.length === 24 && !req.output_config.format.schema.properties.image.enum.includes('land-17'), 'the model may only pick pictures on disk with the right hash')
  ok(req && /Black and white only/.test(req.messages[0].content) && /Echoes in the Abyss/.test(req.messages[0].content), 'the message carries the recent posts and the releases')
  ok(/cashtag/.test(A.calls[1].b.messages[0].content), 'the retry tells the model what was wrong')
  const L2 = readLog().pop()
  ok(L2.state === 'posted' && L2.written && L2.tries === 2 && L2.tokens.input_tokens === 6000 && Math.abs(L2.model_usd - 0.016) < 1e-9, 'logged: written, 2 tries, tokens, est. Claude cost ($0.016)')

  // the next day: STOP
  fs.writeFileSync(path.join(HOME, 'STOP'), '')
  reset(); r = await X2.tick({ now: T('2026-11-24T12:00:00Z') })
  ok(r.action === 'stopped' && X.calls.length === 0 && A.calls.length === 0 && readLog().pop().state === 'stopped', 'STOP file: logged, nothing written or sent')
  fs.rmSync(path.join(HOME, 'STOP'))

  // a slot missed by under 3 hours (machine asleep): caught up; missed by more: not
  reset(); r = await X2.tick({ now: T('2026-11-24T20:58:00Z') })
  ok(r.action === 'posted', 'the 18:00 slot caught up at 20:58')
  reset(); r = await X2.tick({ now: T('2026-11-25T15:01:00Z') })
  ok(r.action === 'idle' && A.calls.length === 0, 'the 12:00 slot missed by 3 hours: skipped quietly')

  // every answer breaks a rule: 3 tries, then the slot is skipped (and closed)
  reset(); A.answers = [{ text: 'Buy the token', image: 'jam-02', alt: 'x' }, { text: 'Invest now', image: 'jam-02', alt: 'x' }, { text: 'Ninja Punk', image: 'jam-02', alt: 'x' }]
  r = await X2.tick({ now: T('2026-11-25T18:00:00Z') })
  ok(r.action === 'skipped' && A.calls.length === 3 && X.calls.length === 0 && readLog().pop().problems.length === 3, 'three bad answers: skipped, nothing sent')
  reset(); r = await X2.tick({ now: T('2026-11-25T18:20:00Z') })
  ok(r.action === 'idle' && A.calls.length === 0, 'a skipped slot is not retried (no extra spend)')

  // X refuses (out of credits): failed, slot closed, not history
  reset(); X.tweetMode = '402'; r = await X2.tick({ now: T('2026-11-26T12:00:00Z') })
  ok(r.action === 'failed' && /out of credits/.test(readLog().pop().note), 'X 402: logged as failed with "out of credits"')
  reset(); r = await X2.tick({ now: T('2026-11-26T12:30:00Z') })
  ok(r.action === 'idle' && X.calls.length === 0, 'after a refused post the slot is not retried')

  // X drops the connection after the post call: unknown, counts as sent, never retried
  reset(); X.tweetMode = 'drop'; r = await X2.tick({ now: T('2026-11-26T18:00:00Z') })
  ok(r.action === 'unknown' && readLog().pop().state === 'unknown', 'no answer from X: logged as unknown (maybe posted)')
  reset(); r = await X2.tick({ now: T('2026-11-26T18:30:00Z') })
  ok(r.action === 'idle' && X.calls.length === 0, 'an unknown send is never retried (no double post)')
  X.tweetMode = 'ok'

  // Claude errors (400, no SDK retry): the run is retried on later ticks, at most 3 runs per slot
  reset(); A.answers = [{ status: 400 }, { status: 400 }, { status: 400 }]
  for (const m of ['00', '15', '30', '45']) r = await X2.tick({ now: T(`2026-11-27T12:${m}:00Z`) })
  ok(A.calls.length === 3 && readLog().filter((l) => l.slot === '2026-11-27@12' && l.state === 'error').length === 3 && r.action === 'idle', 'API errors: 3 runs, then the slot is left')

  // a link post: allowed when no link in the last 6
  reset(); A.answers = [{ text: 'Four Ton Shadow, the teaser. https://youtu.be/xUGDRq5l4FQ', image: 'jam-08', alt: 'A painted locomotive in the rain.' }]
  r = await X2.tick({ now: T('2026-11-27T18:00:00Z') })
  ok(r.action === 'posted' && /Links: allowed/.test(A.calls[0].b.messages[0].content) && readLog().pop().x_usd === 0.2, 'a link post when allowed (est. X cost $0.20)')
  reset(); A.answers = [{ text: 'The album. https://www.vexvoid.com/album', image: 'jam-13', alt: 'Letters.' }, { text: 'Night shift on the deck. Paint dries slow in the rain.', image: 'jam-13', alt: 'Cracked white letters on a wet wall.' }]
  r = await X2.tick({ now: T('2026-11-28T12:00:00Z') })
  ok(r.action === 'posted' && /Links: NOT allowed/.test(A.calls[0].b.messages[0].content) && A.calls.length === 2 && !/https/.test(readLog().pop().text), 'right after a link post: told no link; a link answer is rewritten')

  // no keys
  fs.renameSync(ENVF, ENVF + '.off'); reset()
  r = await X2.tick({ now: T('2026-11-28T18:00:00Z') })
  ok(r.action === 'error' && /run vexvoid-x-keys/.test(readLog().pop().note) && A.calls.length + X.calls.length === 0, 'no key file: logged "run vexvoid-x-keys", no calls')
  fs.renameSync(ENVF + '.off', ENVF)

  // a held queue post: one that breaks a rule is moved aside, the run goes on
  q('03-bad.json', { id: 'bad', text: 'Ninja Punk Girls Ltd presents', image: 'jam-02', alt: 'x' })
  reset(); r = await X2.tick({ now: T('2026-11-28T18:20:00Z') })
  ok(fs.existsSync(path.join(HOME, 'queue', 'held', '03-bad.json')) && r.action === 'posted' && A.calls.length === 1, 'a queued post that breaks a rule goes to queue/held; Claude writes instead')

  // the lock: a second tick while one runs does nothing
  fs.writeFileSync(path.join(HOME, '.lock'), '1')
  reset(); r = await X2.tick({ now: T('2026-11-29T12:00:00Z') })
  ok(r.action === 'busy' && A.calls.length + X.calls.length === 0, 'another run holds the lock: nothing done')
  fs.rmSync(path.join(HOME, '.lock'))

  // dry: writes and checks, sends nothing, logs nothing in posts.jsonl
  const before = readLog().length; reset()
  r = await X2.dry({ now: T('2026-11-29T09:00:00Z') })
  ok(r.ok && A.calls.length === 1 && X.calls.length === 0 && readLog().length === before && fs.existsSync(path.join(HOME, 'dry.jsonl')), 'dry: one Claude call, nothing sent, posts.jsonl untouched, dry.jsonl written')

  // seed-done, add, status
  q('04-x-05.json', { id: 'x-05', text: 'Building a city you can climb, paint and run from.', image: 'jam-20', alt: 'A tunnel.' })
  X2.seedDone(['x-05.json', 'x-99'])
  ok(fs.existsSync(path.join(HOME, 'queue', 'done', '04-x-05.json')) && readLog().pop().state === 'imported', 'seed-done: moved to done, added to the history')
  ok(X2.add(path.join(H, 'x-04.json')) && fs.readdirSync(path.join(HOME, 'queue')).some((f) => /-x-04\.json$/.test(f)), 'add: a good hand-written post joins the queue')
  fs.writeFileSync(path.join(H, 'bad.json'), JSON.stringify({ text: 'Buy $V3X', image: 'jam-02', alt: 'x' }))
  ok(!X2.add(path.join(H, 'bad.json')) && out.some((l) => /NOT ADDED: .*cashtag/.test(l)), 'add refuses a post that breaks a rule')
  out.length = 0; X2.status({ now: T('2026-11-29T13:00:00Z') })
  const st = out.join('\n')
  for (const [re, what] of [[/state: +running/, 'running'], [/next slot: 2026-11-29 18:00 London/, 'next slot'], [/keys: +all 5 present/, 'keys'], [/pictures: +24 of 25/, 'pictures'], [/queue: +1 hand-written post waiting.*1 held/, 'queue'], [/last 10:\n(.*\n){10}/, 'last 10 lines'], [/this month: \d+ posts, X ~\$/, 'cost']]) ok(re.test(st), `status shows ${what}`)

  // secrets never written or printed
  const all = [fs.readFileSync(path.join(HOME, 'posts.jsonl'), 'utf8'), fs.readFileSync(path.join(HOME, 'xposter.log'), 'utf8'), fs.readFileSync(path.join(HOME, 'dry.jsonl'), 'utf8'), out.join('\n')].join('\n')
  ok(Object.values(KEYS).every((v) => !all.includes(v)) && !/sk-ant-/.test(all), 'no key appears in posts.jsonl, xposter.log, dry.jsonl or the output')
  ok((fs.statSync(path.join(HOME, 'posts.jsonl')).mode & 0o777) === 0o644, 'posts.jsonl is readable by others (no secrets in it): the owner reads it without sudo')
  // the test knobs only accept a local fake server
  process.env.VEXVOID_X_TEST_X_BASE = 'https://evil.example'
  reset(); r = await X2.tick({ now: T('2026-11-29T18:00:00Z') })
  ok(r.action === 'error' && /127\.0\.0\.1/.test(readLog().pop().note) && X.calls.length === 0, 'a test knob pointing anywhere but 127.0.0.1 is refused (logged, nothing sent)')
  process.env.VEXVOID_X_TEST_X_BASE = `http://127.0.0.1:${xs.address().port}`
  // dry needs only the Anthropic key; with it missing it stops before any call
  const envBody = fs.readFileSync(ENVF, 'utf8'); fs.writeFileSync(ENVF, envBody.replace(/^ANTHROPIC_API_KEY=.*$/m, ''))
  reset(); r = await X2.dry({ now: T('2026-11-29T19:00:00Z') })
  ok(!r.ok && A.calls.length === 0 && out.some((l) => /no Anthropic key/.test(l)), 'dry without the Anthropic key: says so, no call')
  fs.writeFileSync(ENVF, envBody.replace(/^VEXVOID_X_API_KEY=.*$/m, ''))
  reset(); r = await X2.dry({ now: T('2026-11-29T19:05:00Z') })
  ok(r.ok && A.calls.length === 1 && X.calls.length === 0, 'dry with only the Anthropic key: works (dry never needs the X keys)')
  reset(); r = await X2.tick({ now: T('2026-11-30T12:00:00Z') })
  ok(r.action === 'error' && /VEXVOID_X_API_KEY/.test(readLog().pop().note) && A.calls.length + X.calls.length === 0, 'tick with an X key missing: logged, no calls')
  fs.writeFileSync(ENVF, envBody)
} finally {
  console.log = log0
  anth.close(); xs.close(); fs.rmSync(H, { recursive: true, force: true })
}
print(fails.length ? `\n${fails.length} FAILED:\n` + fails.join('\n') : '\nALL OK')
process.exit(fails.length ? 1 : 0)
