// The PIECE alphabet: our own semi-wild / wildstyle letters for the hall-of-fame VEXVOID family (targets piece-A..E).
// Built the way technical writers build letters: the skeleton first (blades of one weight, every terminal sliced at the
// piece's one cutting angle), then extensions off it (spikes, arrow tips, thorns), then cuts (thin wedges in from an
// edge). Cap height 1, y up, baseline 0. polys are ORed; cuts are taken out (counters and cuts).
import { blade, arrowHead } from './shapes.mjs'

// a cut: a thin wedge in from the nearest edge behind `at` (a point inside the letter), along dir, len deep
const wedge = (at, dir, len, w) => ({ at, dir, len, w })
const inPoly = (P, x, y) => { let c = false; for (let i = 0, k = P.length - 1; i < P.length; k = i++) { const a = P[k], b = P[i]; if ((a[1] > y) !== (b[1] > y) && x < a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1])) c = !c } return c }
const resolveCut = (polys, cut) => {
  if (Array.isArray(cut)) return cut
  const L = Math.hypot(cut.dir[0], cut.dir[1]), u = [cut.dir[0] / L, cut.dir[1] / L], n = [-u[1] * cut.w / 2, u[0] * cut.w / 2]
  let p = cut.at.slice(), k = 0
  while (polys.some((P) => inPoly(P, p[0], p[1])) && k++ < 200) p = [p[0] - u[0] * 0.005, p[1] - u[1] * 0.005]
  const m = [p[0] - u[0] * 0.04, p[1] - u[1] * 0.04], tip = [p[0] + u[0] * cut.len, p[1] + u[1] * cut.len]
  return [[m[0] + n[0], m[1] + n[1]], tip, [m[0] - n[0], m[1] - n[1]]]
}

const W = 0.23                 // stroke weight
const CUT = [1, 0.42]          // the cutting angle: every sliced terminal follows it
const c = { cut: CUT }
const pt = (l) => ({ point: l })
const tri = (a, b, t) => [a, t, b]

export const WILD = {
  // the lead V: a heavy left blade crowned with two thorns, a lighter right blade that spikes up, a point below
  V: () => ({ w: 0.84, polys: [
    blade([0.0, 1.0], [0.37, -0.02], W * 1.12, pt(0.34), pt(0.22)),
    blade([0.37, -0.02], [0.8, 1.02], W * 0.9, pt(0.2), pt(0.3)),
    tri([0.08, 0.9], [0.17, 0.96], [0.26, 1.22]),              // a thorn off the left blade's inside
  ], cuts: [wedge([0.2, 0.62], [1, -0.42], 0.1, 0.04), wedge([0.62, 0.62], [-1, 0.1], 0.09, 0.035)] }),
  // E: a leaning spine, three arms rising slightly, the outer two ending in arrowheads
  E: () => ({ w: 0.72, polys: [
    blade([0.0, -0.04], [0.07, 1.04], W, c, c),
    blade([0.04, 0.94], [0.5, 1.0], W * 0.86), arrowHead([0.78, 1.04], [1, 0.14], 0.3, 0.4),
    blade([0.04, 0.53], [0.42, 0.56], W * 0.76, null, pt(0.14)),
    blade([0.02, 0.07], [0.52, 0.06], W * 0.86), arrowHead([0.8, -0.02], [1, -0.26], 0.3, 0.38),
  ], cuts: [wedge([0.06, 0.3], [1, -0.42], 0.1, 0.035)] }),
  // X: a heavy blade top-left to bottom-right, a lighter one across it spiking out both ways
  X: () => ({ w: 0.78, polys: [
    blade([0.0, 1.02], [0.72, -0.02], W * 1.08, c, c),
    blade([0.0, -0.02], [0.76, 1.04], W * 0.86, pt(0.24), pt(0.32)),
  ], cuts: [wedge([0.6, 0.14], [-1, 0.42], 0.09, 0.035)] }),
  // second V: the right blade the heavy one, ending in a tall crown spike, a thorn off its outside
  V2: () => ({ w: 0.8, polys: [
    blade([0.0, 1.0], [0.35, -0.02], W * 0.9, c, pt(0.2)),
    blade([0.35, -0.02], [0.76, 1.02], W * 1.12, pt(0.2), pt(0.36)),
    tri([0.64, 0.58], [0.72, 0.72], [0.98, 0.84]),
  ], cuts: [wedge([0.18, 0.5], [1, -0.42], 0.09, 0.035)] }),
  // O: an almond, pointed top and bottom, a lens counter, broken by a cut
  O: () => ({ w: 0.74, polys: [[[0.36, 1.26], [0.64, 0.88], [0.73, 0.5], [0.62, 0.12], [0.36, -0.2], [0.1, 0.12], [-0.01, 0.5], [0.08, 0.88]]],
    cuts: [[[0.36, 0.82], [0.48, 0.5], [0.36, 0.17], [0.24, 0.5]], wedge([0.58, 0.67], [-1, -0.42], 0.14, 0.04)] }),
  // I: a blade, a spike up, a point down
  I: () => ({ w: 0.3, polys: [blade([0.06, -0.04], [0.11, 1.0], W, pt(0.18), pt(0.26))],
    cuts: [wedge([0.12, 0.46], [-1, 0.42], 0.09, 0.035)] }),
  // D: the spine, the bowl pushed out into a big arrowhead
  D: () => ({ w: 1.0, polys: [
    blade([0.02, -0.04], [0.06, 1.04], W, c, c),
    [[0.06, 1.04], [0.44, 1.04], [0.64, 0.8], [0.7, 0.94], [1.04, 0.48], [0.66, 0.04], [0.62, 0.15], [0.42, -0.04], [0.02, -0.04]],
  ], cuts: [[[0.24, 0.81], [0.42, 0.81], [0.6, 0.48], [0.42, 0.19], [0.24, 0.19]]] }),
  // 3: two sliced bowls on a spine, the bottom one kicking out into an arrow
  3: () => ({ w: 0.66, polys: [
    blade([0.0, 1.0], [0.5, 1.02], W * 0.9, c), blade([0.5, 1.02], [0.24, 0.55], W * 0.95, null, null),
    blade([0.2, 0.55], [0.56, 0.5], W * 0.9), blade([0.56, 0.5], [0.46, 0.02], W, null, null),
    blade([0.5, 0.02], [-0.06, 0.02], W * 0.9, null, pt(0.18)), arrowHead([0.86, 0.82], [1, 0.42], 0.26, 0.32),
    blade([0.5, 1.0], [0.66, 0.9], W * 0.6),
  ], cuts: [] }),
}
/** A word in the piece alphabet: letters h high, each moved by `kern` (letter units) so they bite into each other, a
 *  slant, and a per-letter lift. Returns [{ ch, polys, cuts }] in metres, back to front (the order given). */
export const wildWord = (keys, { h = 1, kern = [], lift = [], slant = 0.1, x0 = 0, order = null } = {}) => {
  const out = []; let x = x0
  keys.forEach((k, i) => {
    const g = WILD[k](); x += kern[i] || 0
    g.cuts = (g.cuts || []).map((cu) => resolveCut(g.polys, cu))
    const dy = lift[i] || 0, X = x
    const tf = (p) => p.map(([u, v]) => [(X + u + (v + dy) * slant) * h, (v + dy) * h])
    out.push({ ch: k, polys: g.polys.map(tf), cuts: (g.cuts || []).map(tf) })
    x += g.w
  })
  return order ? order.map((i) => out[i]) : out
}
