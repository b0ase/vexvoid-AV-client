// Checks the content packs: the rules (vx/packs.js) against the game's own references (scripts/pack-validate.mjs reads
// them from the source), the loader the game merges packs with (game/src/phone/packs.ts), and the CLI's exit codes.
//   node scripts/test-packs.mjs
import assert from 'node:assert'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'
import { gameRefs } from './pack-validate.mjs'   // (registers the hooks that let node run the game's TypeScript)

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const P = createRequire(import.meta.url)('../vx/packs.js')
const { installPack, removePack, mergePacks } = await import(pathToFileURL(join(ROOT, 'game/src/phone/packs.ts')).href)
const { STARTERS, CONTACTS } = await import(pathToFileURL(join(ROOT, 'game/src/phone/missions.ts')).href)
const refs = await gameRefs()
let n = 0
function check(name, fn) { fn(); n++; console.log('ok', name) }

const HOUSE = JSON.parse(readFileSync(join(ROOT, 'game/content/packs/p-house-sleeve.json'), 'utf8'))
const clone = (o) => JSON.parse(JSON.stringify(o))
// a small good pack to break one thing at a time
const good = () => ({ v: 1, id: 'p-t1', credit: { name: 'Ana K', show: true }, missions: [{
  id: 'p-t1-one', title: 'ONE', from: 'nix', summary: 'Nix wants a tag by the canal steps.', after: [], delay: 5,
  intro: [['nix', 'one more']], done: [['nix', 'seen']],
  objectives: [
    { type: 'reach', place: 'canal', r: 9, text: 'GET DOWN TO THE CANAL' },
    { type: 'paint', walls: ['canal-n3'], kind: 'tag', sketch: 'tag-void', text: 'TAG THE WALL' },
    { type: 'photo', walls: ['canal-n3'], painted: true, dist: 16, text: 'GET A FLICK' },
    { type: 'hide', secs: 4, text: 'LIE LOW' },
  ] }] })
const errs = (pack, opts) => P.validate(pack, refs, opts).errors.join('\n')
const fails = (pack, re, opts) => { const r = P.validate(pack, refs, opts); assert.ok(!r.ok, 'should fail: ' + re); assert.match(r.errors.join('\n'), re) }

check('the references come from the game: 4 contacts, 6 starters, the 20 places, the walls, 15 sketches, the bounds', () => {
  assert.deepStrictEqual(refs.contacts, ['dez', 'nix', 'mo', 'rift'])
  assert.deepStrictEqual(refs.missions, ['get-up', 'flick-it', 'paid-wall', 'crossed-out', 'lose-them', 'heaven'])
  assert.ok(refs.places.length >= 20 && refs.places.some((p) => p.id === 'square'))
  assert.ok(refs.walls.length > 300 && ['arch14', 'canal-n5', 's3-n', 'heaven-nw1-e'].every((w) => refs.walls.includes(w)))
  assert.strictEqual(refs.sketches.length, 15); assert.deepStrictEqual(refs.bounds, { x0: -96, x1: 96, z0: -112, z1: 64 })
  assert.deepStrictEqual(refs.setups, { toys: 'arch16', crossed: 'canal-n5' })
})
check('the house pack (p-house-sleeve) passes', () => { const r = P.validate(HOUSE, refs, { file: 'p-house-sleeve.json' }); assert.ok(r.ok, r.errors.join('\n')); assert.deepStrictEqual(r.missions, ['p-house-sleeve-cover']) })
check('the starters pass the same text rules (the caps fit the house voice)', () => {
  const ms = clone(STARTERS).map((m) => ({ ...m, id: 'p-s-' + m.id, after: m.after.map((a) => 'p-s-' + a) }))
  const r = P.validate({ v: 1, id: 'p-s', missions: ms.slice(0, 5) }, refs); assert.ok(r.ok, r.errors.join('\n'))
  const r2 = P.validate({ v: 1, id: 'p-s', missions: ms.slice(5) }, { ...refs, missions: refs.missions.concat(ms.slice(0, 5).map((m) => m.id)) }); assert.ok(r2.ok, r2.errors.join('\n'))
})
check('a good pack passes', () => assert.strictEqual(errs(good()), ''))
check('unknown place, contact, wall and sketch ids fail, by name', () => {
  let p = good(); p.missions[0].objectives[0].place = 'nowhere'; fails(p, /unknown place "nowhere"/)
  p = good(); p.missions[0].objectives[0] = { type: 'reach', places: ['canal', 'moon'], text: 'GO' }; fails(p, /unknown place "moon"/)
  p = good(); p.missions[0].from = 'kev'; fails(p, /from: unknown contact "kev"/)
  p = good(); p.missions[0].intro.push(['kev', 'hi']); fails(p, /intro\[1\]: unknown contact "kev"/)
  p = good(); p.missions[0].objectives[1].walls = ['canal-n99']; fails(p, /unknown wall "canal-n99"/)
  p = good(); p.missions[0].objectives[1].sketch = 'tag-bob'; fails(p, /unknown sketch "tag-bob"/)
  p = good(); p.missions[0].objectives[1].sketch = 'piece-void'; fails(p, /piece-void is a piece, the objective wants a tag/)
})
check('coordinates: outside the map bounds fail, inside a solid building fails, inside a shell (the warehouse) is fine', () => {
  let p = good(); p.missions[0].objectives[0] = { type: 'reach', at: [120, 0, 0], text: 'GO EAST' }; fails(p, /outside the map \(x -96\.\.96, z -112\.\.64\)/)
  p = good(); p.missions[0].objectives[0] = { type: 'reach', at: [0, 0, -130], text: 'GO NORTH' }; fails(p, /outside the map/)
  p = good(); p.missions[0].objectives[0] = { type: 'reach', at: [10, 0], text: 'GO' }; fails(p, /\[x, y, z\]/)
  const solid = refs.blds.find((b) => !b.open && b.x1 - b.x0 > 4 && b.z1 - b.z0 > 4)
  p = good(); p.missions[0].objectives[0] = { type: 'reach', at: [(solid.x0 + solid.x1) / 2, 0, (solid.z0 + solid.z1) / 2], text: 'GO' }; fails(p, new RegExp('inside building ' + solid.id))
  p = good(); p.missions[0].objectives[0] = { type: 'reach', at: [31, 0, -40], text: 'INTO THE WAREHOUSE' }; assert.strictEqual(errs(p), '')
  p = good(); p.missions[0].objectives[0] = { type: 'reach', at: [-9, 0, 9], r: 40, text: 'GO' }; fails(p, /r \(metres\) must be a number from 2 to 30/)
})
check('duplicate ids fail: a starter id, twice in a pack, an earlier pack, and ids must start with the pack id', () => {
  let p = good(); p.missions[0].id = 'get-up'; fails(p, /must start with the pack id: p-t1-/); fails(p, /duplicate id/)
  p = good(); p.missions.push(clone(p.missions[0])); fails(p, /p-t1-one: duplicate id/)
  p = good(); assert.match(P.validate(p, { ...refs, missions: refs.missions.concat('p-t1-one') }).errors.join(' '), /p-t1-one: duplicate id/)
  p = good(); p.missions[0].id = 'p-t2-one'; fails(p, /must start with the pack id/)
})
check('missing fields fail, each named', () => {
  for (const k of ['title', 'from', 'summary', 'after', 'delay', 'intro', 'objectives', 'done']) { const p = good(); delete p.missions[0][k]; fails(p, new RegExp('missing ' + k)) }
  let p = good(); p.missions[0].objectives = []; fails(p, /at least one objective/)
  p = good(); p.missions = []; fails(p, /at least one mission/)
  p = good(); delete p.v; fails(p, /v: must be 1/)
  p = good(); p.missions[0].objectives[0] = { type: 'reach', text: 'GO' }; fails(p, /needs place, places or at/)
  p = good(); p.missions[0].objectives[2].walls = []; fails(p, /walls: a list of wall ids/)
  p = good(); p.missions[0].objectives[0].text = ''; fails(p, /missing text/)
})
check('text: length caps, capitals for titles and objectives, the banned words', () => {
  let p = good(); p.missions[0].objectives[0].text = 'GET DOWN TO THE CANAL '.repeat(4); fails(p, /too long \(\d+ characters, at most 64\)/)
  p = good(); p.missions[0].objectives[0].text = 'get down to the canal'; fails(p, /must be in capitals/)
  p = good(); p.missions[0].title = 'one'; fails(p, /title: must be in capitals/)
  p = good(); p.missions[0].title = 'THE LONGEST TITLE ANYONE EVER WROTE'; fails(p, /at most 24/)
  p = good(); p.missions[0].intro[0][1] = 'x'.repeat(161); fails(p, /at most 160/)
  p = good(); p.missions[0].summary = 's'.repeat(141); fails(p, /at most 140/)
  for (const [t, re] of [['go to https://x.y', /no links/], ['ask @bob', /no @handles/], ['buy $V3X', /no \$TICKERS/], ['hold the token', /no token or money talk/], ['take a selfie', /no faces/], ['<b>hi</b>', /no markup/], ['nice 🔥', /plain text only/]]) { p = good(); p.missions[0].done[0][1] = t; fails(p, re) }
  p = good(); p.credit.name = 'Ana <3'; fails(p, /credit\.name/)
  p = good(); p.credit.name = 'A'.repeat(33); fails(p, /at most 32/)
})
check('shape: unknown fields fail, fields for another objective type fail, loader fields and later phases fail', () => {
  let p = good(); p.missions[0].colour = 'red'; fails(p, /colour: unknown field/)
  p = good(); p.missions[0].credit = 'ME'; fails(p, /set by the loader/)
  p = good(); p.missions[0].objectives[1].place = 'canal'; fails(p, /place: does nothing on a paint objective/)
  p = good(); p.missions[0].objectives[1].type = 'dance'; fails(p, /type: one of reach, paint/)
  p = good(); p.blds = [{ op: 'add', id: 'x' }]; fails(p, /blds: not in packs yet/)
  p = good(); p.contacts = {}; assert.strictEqual(errs(p), '')   // empty later-phase fields are tolerated
  p = good(); p.missions[0].setup = 'graffiti'; fails(p, /setup: one of toys, crossed/)
  p = good(); p.missions[0].objectives[1].kind = 'mural'; fails(p, /kind: one of tag, throw-up, piece/)
})
check('after: unknown missions and itself fail; starters, earlier in the pack and earlier packs resolve', () => {
  let p = good(); p.missions[0].after = ['nope']; fails(p, /unknown mission "nope"/)
  p = good(); p.missions[0].after = ['p-t1-one']; fails(p, /after itself/)
  p = good(); p.missions[0].after = ['heaven']; assert.strictEqual(errs(p), '')
  p = good(); const m2 = clone(p.missions[0]); m2.id = 'p-t1-two'; m2.after = ['p-t1-one']; p.missions.push(m2); assert.strictEqual(errs(p), '')
  p = good(); p.missions[0].after = ['p-house-sleeve-cover']; fails(p, /unknown mission/); assert.ok(P.validate(p, { ...refs, missions: refs.missions.concat('p-house-sleeve-cover') }).ok)
})
check('over needs the setup, on the setup\'s wall', () => {
  let p = good(); p.missions[0].objectives[1].over = true; fails(p, /over needs the mission to have a setup/)
  p = good(); p.missions[0].setup = 'crossed'; p.missions[0].objectives[1].over = true; fails(p, /the crossed setup is on canal-n5/)
  p = good(); p.missions[0].setup = 'crossed'; p.missions[0].objectives[1] = { type: 'paint', walls: ['canal-n5'], kind: 'throw-up', over: true, text: 'GO OVER IT' }; assert.strictEqual(errs(p), '')
})
check('pack id and file name', () => {
  let p = good(); p.id = 'P_T1'; fails(p, /a pack id is p-<job>/)
  fails(good(), /the file must be named p-t1\.json/, { file: 'game/content/packs/other.json' })
  assert.ok(P.validate(good(), refs, { file: 'p-t1.json' }).ok)
  p = good(); p.missions = Array.from({ length: 6 }, (_, i) => ({ ...clone(good().missions[0]), id: 'p-t1-m' + i })); fails(p, /at most 5 missions/)
})

// ---- the loader the game uses (game/src/phone/packs.ts) ----
const base = () => clone(STARTERS)
check('loader: pack missions go on the end, chained after the last mission so far, with the credit', () => {
  const { list, report } = mergePacks(base(), [HOUSE, good()], CONTACTS)
  assert.deepStrictEqual(list.map((m) => m.id).slice(-2), ['p-house-sleeve-cover', 'p-t1-one'])
  assert.deepStrictEqual(list[6].after, ['heaven']); assert.deepStrictEqual(list[7].after, ['p-house-sleeve-cover'])
  assert.strictEqual(list[6].credit, 'VEXVOID'); assert.strictEqual(list[7].credit, 'ANA K'); assert.strictEqual(list[7].pack, 'p-t1')
  assert.deepStrictEqual(report.map((r) => r.skipped.length), [0, 0]); assert.strictEqual(list.slice(0, 6).every((m) => !m.pack && !m.credit), true)
})
check('loader: a pack can not change or remove a starter; bad missions are left out with why', () => {
  const list = base(), p = good(); p.missions.push({ ...clone(p.missions[0]), id: 'get-up', title: 'HIJACK' }, { ...clone(p.missions[0]), id: 'p-t1-x', from: 'kev' }, { ...clone(p.missions[0]), id: 'p-t1-y', objectives: [{ type: 'fly', text: 'FLY' }] })
  const r = installPack(list, p, CONTACTS)
  assert.deepStrictEqual(r.added, ['p-t1-one']); assert.strictEqual(r.skipped.length, 3)
  assert.match(r.skipped.join(' '), /get-up: a pack's mission ids start with "p-t1-"/); assert.match(r.skipped.join(' '), /no contact "kev"/)
  assert.strictEqual(list.find((m) => m.id === 'get-up').title, 'GET UP'); assert.strictEqual(list.length, 7)
  assert.strictEqual(removePack(list, 'get-up'), 0); assert.strictEqual(removePack(list, ''), 0); assert.strictEqual(list.length, 7)
  assert.deepStrictEqual(installPack(list, { v: 2, id: 'x', missions: [] }, CONTACTS).skipped, ['not a v1 pack with an id (p-...) and missions'])
})
check('loader: loading a pack again replaces only what it added; unloading takes only it out; show false hides the credit', () => {
  const list = base(); installPack(list, HOUSE, CONTACTS); installPack(list, good(), CONTACTS)
  const p = good(); p.missions[0].title = 'ONE AGAIN'; p.credit.show = false
  const r = installPack(list, p, CONTACTS); assert.deepStrictEqual(r.added, ['p-t1-one'])
  assert.strictEqual(list.length, 8); assert.strictEqual(list[7].title, 'ONE AGAIN'); assert.strictEqual(list[7].credit, undefined)
  assert.strictEqual(removePack(list, 'p-house-sleeve'), 1); assert.deepStrictEqual(list.map((m) => m.id).slice(6), ['p-t1-one'])
})
check('loader: a missing or bad delay is made safe; explicit after is kept', () => {
  const list = base(), p = good(); p.missions[0].delay = 999; p.missions[0].after = ['flick-it']
  installPack(list, p, CONTACTS); assert.strictEqual(list[6].delay, 60); assert.deepStrictEqual(list[6].after, ['flick-it'])
})

// ---- the CLI ----
const cli = (...a) => spawnSync(process.execPath, [join(ROOT, 'scripts/pack-validate.mjs'), ...a], { encoding: 'utf8' })
check('CLI: the installed packs pass with exit 0 and ALL OK', () => { const r = cli(); assert.strictEqual(r.status, 0, r.stdout + r.stderr); assert.match(r.stdout, /ALL OK/); assert.match(r.stdout, /ok {3}p-house-sleeve\.json/) })
check('CLI: a bad pack exits 1 with its problems listed, one a line', () => {
  const d = mkdtempSync(join(tmpdir(), 'packs-')), p = good(); p.missions[0].objectives[0].place = 'nowhere'; p.missions[0].from = 'kev'
  writeFileSync(join(d, 'p-t1.json'), JSON.stringify(p)); writeFileSync(join(d, 'p-bad.json'), '{ not json')
  const r = cli(join(d, 'p-t1.json'), join(d, 'p-bad.json'))
  assert.strictEqual(r.status, 1); assert.match(r.stdout, /FAIL p-t1\.json/); assert.match(r.stdout, /unknown place "nowhere"/); assert.match(r.stdout, /unknown contact "kev"/); assert.match(r.stdout, /p-bad\.json: not JSON/); assert.match(r.stdout, /\d+ problems/)
  const j = cli('--json', join(d, 'p-t1.json')); assert.strictEqual(j.status, 1); assert.strictEqual(JSON.parse(j.stdout).results[0].ok, false)
})
console.log(`\n${n} checks passed`)
