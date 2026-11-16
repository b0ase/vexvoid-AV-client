// A first INK render of a piece from the same vector layers the spray pass uses (the later pencil / ink / flash
// phase): fine-liner outlines of even weight, the 3D in solid black, the burst in hatching, on paper.
//   node game/sketches/art/ink.mjs out.png
import { writeFileSync } from 'fs'
import { prepare, block } from './paint.mjs'
import { wildWord } from './wild.mjs'
import { png } from './preview.mjs'

export function ink(letters, { depth = [0.07, -0.09], line = 0.006, step = 1 } = {}) {
  const { F, L, U, Uf } = prepare(letters, { margin: 0.25 })
  const B = block(F, U, depth)
  const W = Math.floor(F.nx / step), H = Math.floor(F.ny / step), rgb = new Uint8Array(W * H * 3)
  const paper = [0.94, 0.93, 0.9], blackC = [0.06, 0.06, 0.07]
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (F.ny - 1 - y * step) * F.nx + x * step, X = F.x0 + x * step / F.res, Y = F.y0 + (F.ny - 1 - y * step) / F.res
    let c = paper
    const ub = Uf[i]
    // a halo of hatching round the letters (the burst, drawn), fading out
    if (ub > 0 && ub < 0.12 && ((X * 1.0 + Y) * 90 % 1 + 1) % 1 < 0.22 * (1 - ub / 0.12)) c = blackC
    if (B.f[i] < 0) c = blackC
    if (B.f[i] > -line * 0.5 && B.f[i] < line * 0.5) c = blackC
    for (const l of L) { if (l.f[i] < 0) c = paper; if (Math.abs(l.f[i]) < line * 0.5) c = blackC }
    // inline: a thin second line just inside each letter's edge
    if (ub < -0.03 && ub > -0.03 - line * 0.4) c = blackC
    const o = (y * W + x) * 3; rgb[o] = c[0] * 255; rgb[o + 1] = c[1] * 255; rgb[o + 2] = c[2] * 255
  }
  return png({ w: W, h: H, rgb })
}
if (process.argv[1] && process.argv[1].endsWith('ink.mjs')) {
  const letters = wildWord(['V', 'E', 'X', 'V2', 'O', 'I', 'D'], { h: 1.05, kern: [0, -0.12, -0.04, -0.1, -0.08, -0.1, -0.06], lift: [0, 0.02, -0.03, 0.03, 0, 0.02, -0.02], slant: 0.1, order: [0, 2, 1, 3, 4, 5, 6] })
  writeFileSync(process.argv[2] || 'ink.png', ink(letters, { step: 2 }))
}
