// THROW-UPS: the print-like VEXVOID (targets throwup-A/B): heavy condensed block capitals, a quick fat-cap fill in a
// few loose passes, the edges cut crisp, a hard thin outline, the paint knocked back in chips (a worn screen print),
// a straight row of long thin drips off the baseline, a little splatter, and a small V mark.
import { WHITE, BLACK, CHROME, GREY, rand, jitter } from './can.mjs'
import { blockWord } from './block.mjs'
import { prepare, fillPass, edgePass, outlines, bottoms, drips, scatter, stroke, dot, sketch, grad } from './paint.mjs'
import { at } from './raster.mjs'
import { vmarkStrokes } from './vmark.mjs'

function throwUp(id, name, text, o) {
  const h = o.h ?? 0.7
  const letters = o.letters ? o.letters(h) : blockWord(text, { h, gap: o.gap ?? 0.05, wob: () => jitter(0.015) })
  const { F, L, U, Uf } = prepare(letters, { margin: 0.3 })
  const fillC = o.fill ?? WHITE, lineC = o.line ?? BLACK
  const inside = (x, y) => at(F, Uf, x, y) < -0.012
  // 1. the fill: a fat cap in loose zig-zags, a little off level (fast hands)
  const fill = [...L.flatMap((l) => edgePass(F, l.f, 0.06, { cap: 3, dist: 0.085, colour: fillC }, { speed: 1.8, corner: 0.4 })),
    ...fillPass(F, Uf, { cap: 3, dist: 0.085, colour: fillC }, { gap: 0.06, inset: 0.1, ang: jitter(0.04), speed: 1.8 }),
    // a second coat across the first, so the white is solid
    ...fillPass(F, Uf, { cap: 3, dist: 0.1, colour: fillC }, { gap: 0.065, inset: 0.05, ang: 1.3 + jitter(0.05), speed: 2 })]
  // 2. the edges cut crisp: a medium cap close in, just inside the edge, letter by letter
  const edge = L.flatMap((l) => edgePass(F, l.f, 0.021, { cap: 2, dist: 0.075, colour: fillC }, { speed: 1.4, corner: 0.7 }))
  // 3. the outline: a skinny cap, even weight, hugging the edge
  const line = outlines(F, L, { cap: 1, dist: 0.085, colour: lineC }, { level: 0.006, speed: 1.3 })
  // 4. worn print: chips knocked out of the paint with the buff can, thicker near the edges
  // (wear clusters: a few scuffs knocked out together near an edge, and single pits)
  const nChips = o.chips ?? 40
  const chips = scatter(F, nChips, (x, y) => { const d = at(F, Uf, x, y); return d < 0.006 && (d > -0.035 || rand() < 0.3) }, (x, y) => {
    const r = rand(), can = { cap: 1, dist: 0.05, buff: true, colour: '#000000' }
    if (r < 0.25) { const a = rand() * 6.28, pts = [[x, y]]; for (let k = 0; k < 2 + Math.floor(rand() * 3); k++) { const b = a + jitter(1.4), l = 0.008 + rand() * 0.014, q = pts[pts.length - 1]; pts.push([q[0] + Math.cos(b) * l, q[1] + Math.sin(b) * l]) } return stroke(pts, can, { speed: 1.6, corner: 0 }) }
    return dot(x, y, can, 0.004)
  })
  // 5. a straight row of long thin drips off the bottoms of the letters
  const foot = bottoms(F, Uf, { step: 0.02, facing: 0.8 })
  const minY = Math.min(...foot.map((p) => p[1]))
  const runs = [], used = []
  for (const p of foot.sort(() => rand() - 0.5)) {
    if (runs.length >= (o.drips ?? 18)) break
    if (p[1] > minY + 0.06 || used.some((u) => Math.abs(u - p[0]) < 0.035)) continue
    used.push(p[0]); const r = rand(), l = h * (r < 0.15 ? 0.95 + rand() * 0.35 : r < 0.5 ? 0.5 + rand() * 0.4 : 0.12 + rand() * 0.35)
    runs.push([p[0], p[1] + 0.012, l])
  }
  const dripS = drips(runs.sort((a, b) => a[0] - b[0]), { cap: 1, dist: 0.055, colour: fillC }, { speed: 1.0, hold: 0.12, hold0: 0.18 })
  // 6. splatter where the drops land, and a few flecks off the edges
  const splat = []
  for (const [x, y, l] of runs) if (rand() < 0.3) for (let k = 0; k < 2; k++) splat.push(dot(x + jitter(0.05), y - l + jitter(0.03), { cap: 1, dist: 0.05 + rand() * 0.05, colour: fillC }, 0.02))
  const fleck = scatter(F, o.flecks ?? 14, (x, y) => { const d = at(F, Uf, x, y); return d > 0.03 && d < 0.14 }, (x, y) => dot(x, y, { cap: 1, dist: 0.05 + rand() * 0.04, colour: fillC }, 0.015))
  // 7. the V mark, small, down to the right
  const right = F.x1 - 0.3, mark = o.mark === false ? [] : vmarkStrokes(right + 0.08, minY + 0.02, h * 0.28, { colour: o.markC ?? fillC })
  return sketch(id, name, 'throw-up', [...fill, ...edge, ...line, ...chips, ...dripS, ...splat, ...fleck, ...mark], o.about)
}

export const THROWUPS = [
  { id: 'throw-vexvoid', make: () => throwUp('throw-vexvoid', 'VEXVOID', 'VEXVOID', { h: 0.62, about: 'print-like block VEXVOID, worn chips, a row of long drips' }) },
  { id: 'throw-v3x', make: () => throwUp('throw-v3x', 'V3X', 'V3X', { h: 0.85, drips: 12, chips: 45, about: 'block V3X, white, black outline, drips' }) },
  { id: 'throw-void', make: () => throwUp('throw-void', 'VOID', 'VOID', { h: 0.8, drips: 14, chips: 50, about: 'block VOID, white, black outline, drips' }) },
  { id: 'throw-npg', make: () => throwUp('throw-npg', 'NPG', 'NPG', { h: 0.85, fill: BLACK, line: WHITE, markC: WHITE, drips: 12, chips: 40, about: 'block NPG, black, white outline, drips' }) },
]
