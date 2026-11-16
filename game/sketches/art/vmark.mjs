// VexVoid's signature V mark: a sharp blade V (the left arm heavy, the right a thin spike) with thorns up off the left
// arm (the crown). VMARK is its shape at unit height; vmarkStrokes paints a small one quickly with a skinny cap
// (filled in tight zig-zags, then one outline), for the corner of a throw-up or piece.
import { prepare, fillPass, outlines } from './paint.mjs'
import { move, scale } from './shapes.mjs'

export const VMARK = [
  [[0, 1], [0.3, 1], [0.5, 0.33], [0.8, 1.17], [0.92, 1.02], [0.5, -0.07]],
  [[0.03, 0.99], [-0.07, 1.27], [0.15, 0.99]],
  [[0.16, 0.99], [0.23, 1.33], [0.29, 0.99]],
]
export function vmarkStrokes(x, y, s, o = {}) {
  const polys = move(scale(VMARK, s, s), x, y)
  const { F, L, Uf } = prepare([{ polys }], { margin: 0.05 })
  const can = { cap: 1, dist: o.dist ?? 0.05, colour: o.colour }
  return [
    ...fillPass(F, Uf, can, { gap: 0.011, inset: 0.006, ang: 1.1, speed: 1.6 }),
    ...outlines(F, L, can, { level: -0.004, speed: 0.9 }),
  ]
}
