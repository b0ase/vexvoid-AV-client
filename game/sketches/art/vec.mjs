// A flat picture of vector layers (no spray): each layer's field drawn back to front, filled and outlined, for looking
// at letterforms quickly, and the base for the later pencil / ink renderers.
//   draw(F, layers) layers: [{ f, fill: [r,g,b] | null, line: [r,g,b] | null, w: metres }]
import { png } from './preview.mjs'
export function draw(F, layers, { bg = [0.36, 0.365, 0.38], step = 1 } = {}) {
  const W = Math.floor(F.nx / step), H = Math.floor(F.ny / step), rgb = new Uint8Array(W * H * 3)
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (F.ny - 1 - y * step) * F.nx + x * step; let c = bg
    for (const L of layers) {
      const d = L.f[i]
      if (L.fill && d < 0) c = L.fill
      if (L.line && Math.abs(d) < (L.w ?? 0.01)) c = L.line
    }
    const o = (y * W + x) * 3; rgb[o] = c[0] * 255; rgb[o + 1] = c[1] * 255; rgb[o + 2] = c[2] * 255
  }
  return png({ w: W, h: H, rgb })
}
