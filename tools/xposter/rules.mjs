// THE X AUTOPILOT'S RULES (tools/xposter): the house checks every @v3xvoid post must pass, the 12:00/18:00 London
// slots, and the prompt the writer gets. Pure functions, no I/O, no dependencies: xposter.mjs runs them, the tests
// call them directly. The rules are code, not just prompt: a post the model writes is only sent if check() is empty.
export const MODEL = 'claude-sonnet-5-5'
export const TZ = 'Europe/London'
export const SLOTS = [12, 18]              // London hours
export const CATCH_UP_MS = 3 * 3600e3      // a slot missed by less than this (machine asleep or off) still posts
export const MAX_PER_DAY = 2
export const MAX_TRIES = 3                 // model writes per run before the slot is skipped
export const MAX_RUNS_PER_SLOT = 3         // runs that may fail before anything was sent (network down) per slot
export const LINK_EVERY = 7                // at most 1 link post in any 7 posts (links cost ~20c, plain ~1.5c)
export const NO_REPEAT_IMAGE = 4           // a picture (or its twin) is not reused within this many posts
export const HISTORY = 30                  // posts the writer sees and the duplicate check compares against
export const PRICE = { 'claude-sonnet-5-5': { in: 2, out: 10 }, 'claude-opus-5-5': { in: 4, out: 20 } }   // $ per 1M tokens
export const X_COST = { plain: 0.015, link: 0.20 }                                                          // $ per post (X pay-per-use, est.)

export const LINKS = [
  'https://www.vexvoid.com/game', 'https://www.vexvoid.com/music', 'https://www.vexvoid.com/album',
  'https://www.vexvoid.com/store', 'https://www.vexvoid.com/feed',
  'https://youtu.be/xUGDRq5l4FQ', 'https://youtu.be/RanrtZji4QU', 'https://youtu.be/NJdCFoTs2e0',
]
// words and phrases that never go out (case-insensitive). Prefix matches catch plurals: token(s), invest(or|ing), face(s|less).
const BANNED = [
  [/\bnpg/i, 'npg'], [/ninja\s*punk/i, 'ninja punk'], [/\bltd\b/i, 'ltd'], [/limited\s+company/i, 'limited company'],
  [/\bcorporation/i, 'corporation'], [/\binvest/i, 'invest'], [/\btoken/i, 'token'], [/\bprice/i, 'price'],
  [/\bprofit/i, 'profit'], [/\breturns\b/i, 'returns'], [/\bdividend/i, 'dividend'], [/\bcrypto/i, 'crypto'],
  [/\bbitcoin/i, 'bitcoin'], [/\bbsv\b/i, 'bsv'], [/\bairdrop/i, 'airdrop'], [/free\s+money/i, 'free money'],
  [/\bgiveaway/i, 'giveaway'], [/\bface/i, 'face'], [/coming\s+soon/i, 'coming soon'],
]
const URL_RE = /\bhttps?:\/\/[^\s]+/gi
const BARE_DOMAIN_RE = /\b(?:[a-z0-9-]+\.)+(?:com|net|org|io|xyz|website|lol|app|co|uk|me|tv|gg|ly|be|link|to|ai|dev|site|online|store|space|fm)\b(?:\/\S*)?/i

/** The URLs in a post, trailing punctuation dropped (X does not link it either). */
export function urls(text) { return (String(text).match(URL_RE) || []).map((u) => u.replace(/[.,;:!?)\]'"]+$/, '')) }

/** X's weighted length: most Latin/punctuation counts 1, everything else (CJK, emoji) 2, every link 23. */
export function weightedLength(text) {
  const t = String(text).normalize('NFC').replace(URL_RE, '')
  let n = urls(text).length * 23
  for (const ch of t) {
    const c = ch.codePointAt(0)
    n += (c <= 4351 || (c >= 8192 && c <= 8205) || (c >= 8208 && c <= 8223) || (c >= 8242 && c <= 8247)) ? 1 : 2
  }
  return n
}

const norm = (s) => String(s).toLowerCase().replace(URL_RE, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
const grams = (s) => { const t = ` ${norm(s)} `, g = new Map(); for (let i = 0; i + 3 <= t.length; i++) { const k = t.slice(i, i + 3); g.set(k, (g.get(k) || 0) + 1) } return g }
/** Dice similarity of character trigrams (0..1) on lower-cased words without links: 1 = the same words. */
export function similarity(a, b) {
  const A = grams(a), B = grams(b); let both = 0, na = 0, nb = 0
  for (const v of A.values()) na += v
  for (const v of B.values()) nb += v
  for (const [k, v] of A) both += Math.min(v, B.get(k) || 0)
  return na + nb ? (2 * both) / (na + nb) : 0
}
export const SIMILAR = 0.6

export const isLinkPost = (p) => urls(p.text || '').length > 0
const twinOf = (images, id) => (images.find((i) => i.id === id) || {}).twin

/**
 * Problems with a post (empty = it may go out).
 *   post:    { text, image?, alt? }
 *   history: earlier posts, oldest first ({ text, image, state }); only sent or imported ones count
 *   images:  the allowlist (images.json .images)
 *   opts:    { needImage: true for written posts, seed: true for hand-approved queue posts (picture reuse allowed) }
 */
export function check(post, history, images, opts = {}) {
  const p = []
  const text = String(post.text ?? ''), alt = String(post.alt ?? '')
  const sent = history.filter((h) => SENT.includes(h.state))
  if (!text.trim()) p.push('no text')
  if (text !== text.trim()) p.push('leading or trailing spaces')
  if (/\$[A-Za-z]/.test(text + ' ' + alt)) p.push('a cashtag ($ followed by a letter): X pins another coin to it')
  if (/[$£€]\s?\d/.test(text + ' ' + alt)) p.push('a money amount (no prices)')
  const w = weightedLength(text)
  if (w > 280) p.push(`too long: ${w}/280`)
  for (const [re, word] of BANNED) { if (re.test(text.replace(URL_RE, ' ')) || re.test(alt)) p.push(`banned word: ${word}`) }
  if (/(^|[^A-Za-z0-9_])@[A-Za-z0-9_]/.test(text + ' ' + alt)) p.push('an @mention or email')
  const tags = (text.match(/(^|\s)#[A-Za-z0-9_]+/g) || []).length
  if (tags > 2) p.push(`${tags} hashtags (at most 2)`)
  const us = urls(text)
  for (const u of us) if (!LINKS.includes(u)) p.push(`a link that is not allowed: ${u.slice(0, 80)}`)
  if (us.length > 1) p.push('more than one link')
  if (BARE_DOMAIN_RE.test(text.replace(URL_RE, ' ')) || BARE_DOMAIN_RE.test(alt)) p.push('a bare web address (write the full allowed https link, or none)')
  if (/https?:|www\./i.test(alt)) p.push('a link in the alt text')
  if (us.length && sent.slice(-(LINK_EVERY - 1)).some(isLinkPost)) p.push(`a link post within ${LINK_EVERY} posts of the last one`)
  if (post.image != null) {
    const img = images.find((i) => i.id === post.image)
    if (!img) p.push(`a picture that is not on the allowlist: ${String(post.image).slice(0, 40)}`)
    else if (!opts.seed) {
      const recent = sent.slice(-NO_REPEAT_IMAGE).map((h) => h.image)
      if (recent.includes(img.id) || (img.twin && recent.includes(img.twin))) p.push(`the picture ${img.id} was used in the last ${NO_REPEAT_IMAGE} posts`)
    }
    if (!alt.trim()) p.push('no alt text for the picture')
  } else if (opts.needImage) p.push('no picture')
  if (alt.length > 1000) p.push('alt text over 1000 characters')
  for (const h of sent.slice(-HISTORY)) {
    const s = similarity(text, h.text || '')
    if (s >= SIMILAR) { p.push(`too close to an earlier post (${Math.round(s * 100)}%): "${String(h.text).slice(0, 60)}"`); break }
  }
  return p
}

// ------------------------------------------------------------------ time: the London slots
const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
/** London wall-clock parts of an instant. */
export function london(ms) {
  const o = {}; for (const { type, value } of fmt.formatToParts(new Date(ms))) o[type] = value
  return { y: +o.year, m: +o.month, d: +o.day, H: +o.hour, M: +o.minute, date: `${o.year}-${o.month}-${o.day}` }
}
/** The instant of London wall-clock y-m-d H:00 (DST-safe: the offset is checked at the result). */
export function londonInstant(y, m, d, H) {
  let t = Date.UTC(y, m - 1, d, H)
  for (let i = 0; i < 2; i++) { const l = london(t); t += (Date.UTC(y, m - 1, d, H) - Date.UTC(l.y, l.m - 1, l.d, l.H, l.M)) }
  return t
}
/** The slots around `now`, oldest first: { id: 'YYYY-MM-DD@12', at: ms }. */
function slotsNear(now) {
  const out = []
  for (const dd of [-1, 0, 1]) {
    const l = london(now + dd * 86400e3)
    for (const H of SLOTS) { const at = londonInstant(l.y, l.m, l.d, H); out.push({ id: `${london(at).date}@${String(H).padStart(2, '0')}`, at }) }
  }
  return out.sort((a, b) => a.at - b.at)
}
/** The slot due now (started at most CATCH_UP_MS ago), or null. */
export function dueSlot(now) { return slotsNear(now).filter((s) => s.at <= now && now - s.at < CATCH_UP_MS).pop() || null }
/** The next slot after now. */
export function nextSlot(now) { return slotsNear(now).find((s) => s.at > now) }

// A send writes 'sending' first, then one of: 'posted', 'failed' (X answered with an error: nothing went out) or
// 'unknown' (no answer: it may have gone out, so it counts as sent).
const SEND = ['sending', 'posted', 'failed', 'unknown']
export const SENT = ['sending', 'posted', 'unknown', 'imported']
/** Whether a slot is finished: a send started, it was skipped, stopped or capped, or too many runs failed before sending. */
export function slotDone(log, slotId) {
  const mine = log.filter((r) => r.slot === slotId)
  if (mine.some((r) => [...SEND, 'skipped', 'stopped', 'capped'].includes(r.state))) return true
  return mine.filter((r) => r.state === 'error').length >= MAX_RUNS_PER_SLOT
}
/** Each slot's last send line. */
function finals(log) { const m = new Map(); for (const r of log) if (r.slot && SEND.includes(r.state)) m.set(r.slot, r); return m }
/** Posts sent (or maybe sent) in slots of a London date. */
export function sentOn(log, date) { let n = 0; for (const [slot, f] of finals(log)) if (f.state !== 'failed' && slot.startsWith(date + '@')) n++; return n }
/** The history the checks and the writer see, oldest first: imported posts, and one line per slot that sent (its final line). */
export function history(log) {
  const fin = finals(log), out = []
  for (const r of log) {
    if (r.state === 'imported') out.push(r)
    else if (r.state === 'sending' && fin.get(r.slot).state !== 'failed') out.push(fin.get(r.slot))
  }
  return out
}

/** Est. cost of one model call in $ (input + output tokens). */
export function modelCost(model, usage) {
  const pr = PRICE[model] || PRICE[MODEL]; if (!usage) return 0
  return ((usage.input_tokens || 0) * pr.in + (usage.output_tokens || 0) * pr.out) / 1e6
}

// ------------------------------------------------------------------ the writer's prompt
export const SYSTEM = `You write one post for the X account @v3xvoid (VEXVOID, also written V3XV0ID).

WHO: VexVoid is a black and white night city: music, visuals and a browser game. The music is made by the producer b0ase; VexVoid is the VJ alter ego behind the visuals. VexVoid is a name and a world, never a person with a face: never describe or claim a face, a body, a photo of "me", an age, a gender or a real-life identity.

VOICE: short, terse, night-city, black and white, music first. Plain words, present tense, no exclamation marks, no emoji, no hype, no questions to the reader, no calls like "check it out" or "don't miss". One to three short sentences. Most posts are 30 to 140 characters. It reads like a line from the city, not an advert.

ONLY LIVE THINGS. You may mention only what exists now:
- the game: VEXVOID, playable in the browser at https://www.vexvoid.com/game (climb a night city, paint walls, take photos, dodge the patrol, run);
- the music: the tracks and releases listed in the message (the album Echoes in the Abyss is out now at https://www.vexvoid.com/album; the music page is https://www.vexvoid.com/music);
- three YouTube teasers, each cut to its track: Four Ton Shadow https://youtu.be/xUGDRq5l4FQ, Echoes in the Dust https://youtu.be/RanrtZji4QU, Shadow Steps https://youtu.be/NJdCFoTs2e0;
- the store at https://www.vexvoid.com/store (tees and record art);
- the feed at https://www.vexvoid.com/feed.
Never promise or hint at anything unreleased (no new levels, features, drops, dates, collaborations, "soon", "coming", "next week"). Never invent facts. The only numbers known about the music: Echoes in the Abyss is twelve tracks; Four Ton Shadow is 88 BPM. No other BPMs, track counts, durations or dates.

HARD RULES (a post that breaks one is thrown away):
- never a $ sign, a price, a money amount, sales talk or anything about value;
- never these words: NPG, Ninja Punk, Ltd, limited company, corporation, invest, token, price, profit, returns, dividend, crypto, bitcoin, BSV, airdrop, free money, giveaway, face, coming soon;
- no @mentions, no emails, at most 2 hashtags (usually none);
- links: only the exact https links above, written in full, at most one, and only when the message says a link is allowed. Never a bare domain like vexvoid.com;
- at most 280 characters (a link counts as 23);
- not a repeat or a near-repeat of a recent post (the message lists them): new words, new angle;
- the picture must be one id from the list in the message, and different from the recently used ones. Fit the words to the picture.

ALT TEXT: one plain factual sentence describing the picture for blind readers, based on its description. No opinion, no links.

TONE EXAMPLES (already posted or queued; do not reuse them):
- The trackside at 3am. Wet ballast, one lamp, nobody watching.
- Every wall is a page. Every train is a page that leaves.
- Black and white only. The colour is in the sound.
- Four Ton Shadow. 88 BPM. Snare on two and four.
- Building a city you can climb, paint and run from.
- Echoes in the Abyss. Twelve tracks, made in the dark.
- Headphones on. Hood up. Go.
- Learn the patrol. Then paint.
- Shadow Steps. Out on YouTube as a teaser.
- Some nights the city paints you back.
- VEXVOID. A black and white night city. Climb it, paint it, run from it. Play in your browser: https://www.vexvoid.com/game
- Shadow Steps, the teaser. Black and white, cut to the beat. https://youtu.be/NJdCFoTs2e0

Answer with JSON only: {"text": the post, "image": a picture id, "alt": the alt text}.`

export const ANGLES = ['the music', 'a track by name', 'the game: climbing', 'the game: painting a wall', 'the game: the patrol', 'the city at night', 'rain and trains', 'the record art in the picture', 'the store', 'a teaser', 'the album']

/** The answer's JSON schema (structured output): the picture is limited to the allowlist. */
export function answerSchema(images) {
  return { type: 'object', additionalProperties: false, required: ['text', 'image', 'alt'],
    properties: { text: { type: 'string' }, image: { type: 'string', enum: images.map((i) => i.id) }, alt: { type: 'string' } } }
}

/** The user message: the releases, the pictures, the recent posts, whether a link is allowed, and an angle. */
export function userMessage({ releases, images, hist, linkOk, angle, slotLabel, retryNote }) {
  const recent = hist.slice(-HISTORY)
  const usedImgs = new Set(hist.slice(-NO_REPEAT_IMAGE).flatMap((h) => { const i = images.find((x) => x.id === h.image); return i ? [i.id, i.twin].filter(Boolean) : [] }))
  return [
    `Slot: ${slotLabel}. Suggested angle (optional): ${angle}.`,
    `Links: ${linkOk ? 'allowed in this post (optional; most posts have none)' : 'NOT allowed in this post'}.`,
    '', 'Releases (titles only; no other facts about them are known): ' + releases.join('; ') + '.',
    '', 'Pictures (id: description):',
    ...images.map((i) => `- ${i.id}: ${i.about}${usedImgs.has(i.id) ? '  [used recently: do not pick]' : ''}`),
    '', `Recent posts, oldest first (${recent.length}):`,
    ...(recent.length ? recent.map((h) => `- ${String(h.text).replace(/\s+/g, ' ')}${h.image ? `  [picture ${h.image}]` : ''}`) : ['- (none yet)']),
    ...(retryNote ? ['', `Your last answer was thrown away: ${retryNote}. Write a different post.`] : []),
  ].join('\n')
}

/** Release titles for the prompt, from vx/catalogue.json: one per release, the mis-filed test tracks left out. */
export function releaseTitles(catalogue) {
  const seen = new Set(), out = []
  for (const t of catalogue.tracks || []) {
    if (seen.has(t.release) || /cn-\d/i.test(t.title)) continue
    seen.add(t.release); out.push(t.title)
  }
  return out
}
