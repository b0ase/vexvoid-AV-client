// The JOB SPEC check (tools/builder/job-spec.schema.json), with no dependencies: a small JSON Schema validator for the
// keywords that schema uses, plus the house word rules (vx/packs.js BANNED) on every text field. reader.mjs runs it on
// what the model returns; run-job.sh runs it on every spec it takes from the inbox (a hand-written spec too).
//
//   node tools/builder/spec.mjs FILE.json        prints "ok <id>" or the problems; exit 1 on problems
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
export const SCHEMA = JSON.parse(fs.readFileSync(path.join(HERE, 'job-spec.schema.json'), 'utf8'))
const VXPACKS = createRequire(import.meta.url)('../../vx/packs.js')

/** Problems with `v` against `s` (a subset of JSON Schema 2020-12: what job-spec.schema.json uses). */
export function check(v, s = SCHEMA, at = '') {
  const out = [], where = at || '(spec)'
  const type = (x) => Array.isArray(x) ? 'array' : x === null ? 'null' : Number.isInteger(x) ? 'integer' : typeof x
  if ('const' in s && v !== s.const) out.push(`${where}: must be ${JSON.stringify(s.const)}`)
  if (s.enum && !s.enum.includes(v)) out.push(`${where}: must be one of ${s.enum.join(', ')}`)
  if (s.type) {
    const t = type(v), ok = s.type === t || (s.type === 'number' && t === 'integer')
    if (!ok) { out.push(`${where}: must be ${s.type === 'array' ? 'a list' : s.type === 'object' ? 'an object' : 'a ' + s.type}`); return out }
  }
  if (typeof v === 'string') {
    if (s.minLength != null && v.length < s.minLength) out.push(`${where}: too short (at least ${s.minLength})`)
    if (s.maxLength != null && v.length > s.maxLength) out.push(`${where}: too long (${v.length}, at most ${s.maxLength})`)
    if (s.pattern && !new RegExp(s.pattern).test(v)) out.push(`${where}: not in the allowed form (${s.pattern})`)
  }
  if (typeof v === 'number') {
    if (s.minimum != null && v < s.minimum) out.push(`${where}: at least ${s.minimum}`)
    if (s.maximum != null && v > s.maximum) out.push(`${where}: at most ${s.maximum}`)
    if (s.exclusiveMinimum != null && v <= s.exclusiveMinimum) out.push(`${where}: more than ${s.exclusiveMinimum}`)
  }
  if (Array.isArray(v)) {
    if (s.minItems != null && v.length < s.minItems) out.push(`${where}: at least ${s.minItems} item(s)`)
    if (s.maxItems != null && v.length > s.maxItems) out.push(`${where}: at most ${s.maxItems} item(s)`)
    if (s.uniqueItems && new Set(v.map((x) => JSON.stringify(x))).size !== v.length) out.push(`${where}: items repeat`)
    if (s.items) v.forEach((x, i) => out.push(...check(x, s.items, `${where}[${i}]`)))
  }
  if (type(v) === 'object') {
    for (const k of s.required || []) if (!(k in v)) out.push(`${at ? at + '.' : ''}${k}: missing`)
    for (const [k, x] of Object.entries(v)) {
      if (s.properties && s.properties[k]) out.push(...check(x, s.properties[k], at ? `${at}.${k}` : k))
      else if (s.additionalProperties === false) out.push(`${at ? at + '.' : ''}${k}: not a spec field`)
    }
  }
  return out
}

/** The house word rules (no links, @handles, $TICKERS, token or money talk, faces, markup, non-ASCII) on the texts. */
export function words(spec) {
  const out = [], probe = { v: 1, id: 'p-spec', missions: [] }
  const texts = [['title', spec.title], ['brief', spec.brief], ['credit.name', spec.credit && spec.credit.name]]
  for (const [k, s] of texts) {
    if (typeof s !== 'string') continue
    // vx/packs.js checks a mission's summary with the same rules; borrow it on a stand-in mission
    const r = VXPACKS.validate({ ...probe, missions: [{ id: 'p-spec-x', title: 'X', from: 'x', summary: s, after: [], delay: 0, intro: [['x', 'x']], objectives: [{ type: 'reach', at: [0, 0, 0], text: 'X' }], done: [['x', 'x']] }] }, {}, {})
    for (const e of r.errors) if (/summary/.test(e) && /no |plain text/.test(e)) out.push(`${k}: ${e.replace(/^.*summary: /, '')}`)
  }
  return out
}

/** Everything wrong with a spec (empty: fine). */
export const problems = (spec) => [...check(spec), ...(spec && typeof spec === 'object' ? words(spec) : [])]

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const f = process.argv[2]; if (!f) { console.log('usage: node tools/builder/spec.mjs SPEC.json'); process.exit(2) }
  let spec; try { spec = JSON.parse(fs.readFileSync(f, 'utf8')) } catch (e) { console.log('not JSON: ' + e.message); process.exit(1) }
  const p = problems(spec)
  if (p.length) { console.log(p.join('\n')); process.exit(1) }
  console.log('ok ' + spec.id)
}
