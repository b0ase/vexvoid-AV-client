// PACK-VALIDATE: the static check on content packs (game/content/packs/*.json; Pay to Develop). Every pack against the
// rules in vx/packs.js, with the game's own references: the district from makePlan() (places, walls, the bounds, the
// buildings), the starter missions and contacts (game/src/phone/missions.ts) and the starter sketches, all read from
// the source in Node (TypeScript run as is; three.js is not needed for any of it). Packs are checked in merge order, so
// a pack may come `after` an earlier pack's mission. The generated index must list exactly the packs in the folder.
//
//   node scripts/pack-validate.mjs                     every pack in game/content/packs
//   node scripts/pack-validate.mjs FILE...             these (each after the installed packs before it)
//   node scripts/pack-validate.mjs --json [FILE...]    the result as JSON (for the checks and the runner)
//   node scripts/pack-validate.mjs --refs              print the references the packs are checked against
// Exit 0: ALL OK. Exit 1: the problems are listed, one a line.
import { registerHooks, createRequire } from 'node:module'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve, basename } from 'node:path'
import { PACKS_DIR, packFiles, indexText } from './pack-index.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..'), GAME = pathToFileURL(join(ROOT, 'game')).href + '/'
const VXPACKS = createRequire(import.meta.url)('../vx/packs.js')

// the game's TypeScript, as the bundler sees it: extensionless imports, JSON imports, three.js stubbed (plan.ts and
// missions.ts only touch it inside functions the check never calls), and the packs index empty (the packs are read here)
registerHooks({
  resolve(spec, ctx, next) {
    if (spec === 'three' || spec.startsWith('three/')) return { url: 'data:text/javascript,export default {}', shortCircuit: true }
    if (/content\/packs\/index$/.test(spec)) return { url: 'data:text/javascript,export default []', shortCircuit: true }
    if (/^\.\.?\//.test(spec) && ctx.parentURL && ctx.parentURL.startsWith(GAME) && !/\.(ts|json|js|mjs)$/.test(spec)) {
      const u = new URL(spec + '.ts', ctx.parentURL); if (existsSync(fileURLToPath(u))) return next(u.href, ctx)
    }
    return next(spec, ctx)
  },
  load(url, ctx, next) {
    if (url.startsWith(GAME) && url.endsWith('.json')) return { format: 'module', source: 'export default ' + readFileSync(fileURLToPath(url), 'utf8'), shortCircuit: true }
    if (url.startsWith(GAME) && url.endsWith('.ts')) return { format: 'module-typescript', source: readFileSync(fileURLToPath(url), 'utf8'), shortCircuit: true }
    return next(url, ctx)
  },
})

/** What a pack may refer to, from the game's source. */
export async function gameRefs() {
  const { makePlan } = await import(GAME + 'src/plan.ts')
  const { STARTERS, CONTACTS, SETUP_WALLS } = await import(GAME + 'src/phone/missions.ts')
  const P = makePlan(), SK = join(ROOT, 'game', 'sketches')
  const sketches = readdirSync(SK).filter((f) => f.endsWith('.json')).sort().map((f) => { const s = JSON.parse(readFileSync(join(SK, f), 'utf8')); return { id: s.id, kind: s.kind } })
  return {
    contacts: Object.keys(CONTACTS), missions: STARTERS.map((m) => m.id), places: P.places.map((p) => ({ id: p.id, x: p.x, y: p.y, z: p.z })),
    walls: P.walls.map((w) => w.id), sketches, setups: { ...SETUP_WALLS }, bounds: { ...P.bounds },
    blds: P.blds.map((b) => ({ id: b.id, x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y: b.y || 0, h: b.h, open: !!b.shell })),
  }
}

/** Check packs in merge order: the installed ones (or `files`), each against the references plus the packs before it. */
export async function validateAll(files, refs) {
  refs = refs || await gameRefs()
  const installed = packFiles().map((f) => join(PACKS_DIR, f))
  const list = files && files.length ? files.map((f) => resolve(f)) : installed
  const results = [], seen = refs.missions.slice(), packIds = []
  // a named file is checked after the installed packs that sort before it (as the game would merge it)
  for (const f of installed) if (list.length && !list.includes(f) && basename(f) < basename(list[0])) { try { const p = JSON.parse(readFileSync(f, 'utf8')); for (const m of p.missions || []) if (m && m.id) seen.push(m.id) } catch { /* its own run says why */ } }
  for (const file of list) {
    let pack
    try { pack = JSON.parse(readFileSync(file, 'utf8')) } catch (e) { results.push({ file, ok: false, errors: [`${basename(file)}: not JSON (${e.message})`], warnings: [], missions: [] }); continue }
    const r = VXPACKS.validate(pack, { ...refs, missions: seen.slice() }, { file: basename(file) })
    if (pack && typeof pack.id === 'string') { if (packIds.includes(pack.id)) { r.errors.push(`${basename(file)}: id: two packs are ${pack.id}`); r.ok = false } packIds.push(pack.id) }
    seen.push(...r.missions)
    results.push({ file, id: pack && pack.id, ...r })
  }
  // the index the bundle takes the packs from
  const idx = join(PACKS_DIR, 'index.ts'), want = indexText(packFiles())
  const index = existsSync(idx) && readFileSync(idx, 'utf8') === want ? null : 'game/content/packs/index.ts is out of date: run node scripts/pack-index.mjs'
  return { ok: results.every((r) => r.ok) && !index, results, index, refs }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2), files = args.filter((a) => !a.startsWith('--'))
  const refs = await gameRefs()
  if (args.includes('--refs')) { console.log(JSON.stringify(refs, null, 1)); process.exit(0) }
  const out = await validateAll(files, refs)
  if (args.includes('--json')) { const { refs: _, ...rest } = out; console.log(JSON.stringify(rest, null, 1)); process.exit(out.ok ? 0 : 1) }
  if (!out.results.length) console.log('no packs in game/content/packs')
  for (const r of out.results) {
    console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${basename(r.file)}${r.missions.length ? ': ' + r.missions.join(', ') : ''}`)
    for (const e of r.errors) console.log('     ' + e)
    for (const w of r.warnings) console.log('     (note) ' + w)
  }
  if (out.index) console.log('FAIL ' + out.index)
  const n = out.results.reduce((k, r) => k + r.errors.length, 0) + (out.index ? 1 : 0)
  console.log(out.ok ? '\nALL OK' : `\n${n} problem${n === 1 ? '' : 's'}`)
  process.exit(out.ok ? 0 : 1)
}
