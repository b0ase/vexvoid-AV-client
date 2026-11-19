// Authors the SKETCHBOOK's starter sketches (game/sketches/*.json) as stroke data, the same shape as the game's stroke
// log: metres from the sketch's bottom left (x right, y up) and seconds from each stroke's start.
//
// Every sketch is built the way a writer builds one: vector layers first (letter bodies, shard extensions, cuts, the
// 3D block, highlights, drips; game/sketches/art/), then the passes a writer makes for them in a writer's order
// (fog/backdrop -> fills -> 3D -> outline -> highlights -> drips -> chips and speckle), with real caps, distances,
// pressures and hand speeds. Our own letterforms (VEXVOID, V3X, VOID, NPG and the V mark), in the house palette
// (white, grey, black, chrome), one colour per layer role so the sketchbook's recolour slots map cleanly.
//
//   node game/sketches/make.mjs                       writes the JSON files and index.ts
//   node game/sketches/make.mjs --preview DIR [ids]   also paints each (as the game's can would) to DIR/<id>.png
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { reseed, randSeed } from './art/can.mjs'
import { paint, onWall, png, secsOf } from './art/preview.mjs'
import { THROWUPS } from './art/throwups.mjs'
import { TAGS } from './art/tags.mjs'
import { PIECES3 as PIECES } from './art/piece2.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2), pv = args.indexOf('--preview'), PREVIEW = pv >= 0 ? args[pv + 1] : ''
const only = args.filter((a, i) => !a.startsWith('--') && (pv < 0 || i !== pv + 1))

// the sketchbook's order: tags, throw-ups, pieces (each list in the order its tab shows them)
const MAKERS = [...TAGS, ...THROWUPS, ...PIECES]
const S = []
for (const [i, mk] of MAKERS.entries()) {
  reseed(7919 + i * 101); randSeed(1 + i * 7)
  if (only.length && !only.includes(mk.id)) { S.push({ id: mk.id }); continue }
  const t0 = Date.now(), s = mk.make()
  S.push(s)
  const pts = s.strokes.reduce((n, x) => n + x.pts.length, 0), cols = [...new Set(s.strokes.filter((x) => !x.buff).map((x) => x.colour))]
  console.log(`${s.id.padEnd(22)} ${s.kind.padEnd(9)} ${s.w.toFixed(2)} x ${s.h.toFixed(2)} m ${String(s.strokes.length).padStart(4)} strokes ${String(pts).padStart(6)} pts ${secsOf(s).toFixed(0).padStart(4)} s  [${cols.join(' ')}]  ${Date.now() - t0} ms`)
  writeFileSync(join(HERE, s.id + '.json'), JSON.stringify(s))
  if (PREVIEW) {
    mkdirSync(PREVIEW, { recursive: true })
    const px = Math.max(200, Math.min(400, 2400 / s.w))
    const im = paint(s, { px })
    writeFileSync(join(PREVIEW, `${s.id}.png`), png(onWall(im, 'night')))
    writeFileSync(join(PREVIEW, `${s.id}-grey.png`), png(onWall(im, 'grey')))
  }
}
// the list the game bundles (esbuild inlines the JSON)
if (!only.length) writeFileSync(join(HERE, 'index.ts'), '// written by make.mjs: the starter sketches, in the order the SKETCHBOOK shows them\n' +
  S.map((s, i) => `import s${i} from './${s.id}.json';`).join('\n') + `\nexport default [${S.map((_, i) => 's' + i).join(', ')}];\n`)
