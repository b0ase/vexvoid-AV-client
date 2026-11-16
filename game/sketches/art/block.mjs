// The THROW-UP alphabet: heavy condensed block capitals (our own), cap height 1, stems T wide. Each letter is
// { w, polys, cuts }: polygons ORed, cuts taken out (counters, notches).
import { rrect } from './shapes.mjs'

const T = 0.27   // stem weight
const R = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]
export const BLOCK = {
  V: { w: 0.64, polys: [[[0, 1], [T, 1], [0.32, 0.37], [0.64 - T, 1], [0.64, 1], [0.44, 0], [0.2, 0]]] },
  E: { w: 0.5, polys: [[[0, 0], [0.5, 0], [0.5, 0.215], [T, 0.215], [T, 0.4], [0.455, 0.4], [0.455, 0.6], [T, 0.6], [T, 0.785], [0.5, 0.785], [0.5, 1], [0, 1]]] },
  X: { w: 0.62, polys: [[[0, 1], [T, 1], [0.62, 0], [0.62 - T, 0]], [[0.62 - T, 1], [0.62, 1], [T, 0], [0, 0]]] },
  O: { w: 0.58, polys: [rrect(0, 0, 0.58, 1, 0.19)], cuts: [rrect(T, T - 0.01, 0.58 - T, 1 - T + 0.01, 0.045)] },
  I: { w: T, polys: [R(0, 0, T, 1)] },
  D: { w: 0.58, polys: [rrect(0, 0, 0.58, 1, [0, 0.2, 0.2, 0])], cuts: [rrect(T, 0.215, 0.58 - T + 0.005, 0.785, [0, 0.05, 0.05, 0])] },
  3: { w: 0.54, polys: [rrect(0, 0, 0.54, 1, [0.05, 0.16, 0.16, 0.05])], cuts: [R(-0.01, 0.215, 0.54 - T, 0.42), R(-0.01, 0.58, 0.54 - T, 0.785), R(-0.01, 0.42, 0.12, 0.58)] },
  N: { w: 0.62, polys: [R(0, 0, T, 1), R(0.62 - T, 0, 0.62, 1), [[0, 1], [T + 0.02, 1], [0.62, 0], [0.62 - T - 0.02, 0]]] },
  P: { w: 0.56, polys: [R(0, 0, T, 1), rrect(0, 0.36, 0.56, 1, [0, 0.16, 0.18, 0])], cuts: [rrect(T, 0.56, 0.56 - T + 0.01, 0.8, [0, 0.045, 0.045, 0])] },
  G: { w: 0.58, polys: [rrect(0, 0, 0.58, 1, 0.19)], cuts: [rrect(T, T - 0.01, 0.58 - T, 1 - T + 0.01, 0.045), R(0.3, 0.5, 0.6, 1 - T + 0.01)] },
}
/** A word in the block alphabet: letters h high, `gap` apart (in letter units); each letter as { polys, cuts } in metres. */
export const blockWord = (text, { h = 1, gap = 0.05, wob = null } = {}) => {
  const out = []; let x = 0
  for (const ch of text) {
    const g = BLOCK[ch], dy = wob ? wob() : 0
    const tf = (p) => p.map(([u, v]) => [(x + u) * h, (v + dy) * h])
    out.push({ ch, polys: g.polys.map(tf), cuts: (g.cuts || []).map(tf) })
    x += g.w + gap
  }
  return out
}
