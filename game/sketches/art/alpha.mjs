// Our LETTERS for pass 3 (original VexVoid letterforms, never traced from anyone's piece), in levels:
//   STRAIGHT  block capitals built from bars of one weight, chamfered corners (the VexVoid shape language: cut, not
//             round), one cutting angle on every sliced terminal; readable at a glance
//   SEMI      the same skeletons plus style: arrows grown out of the terminals that point with the flow, kicked feet,
//             a connection or two, letters overlapping
//   WILD      the skeletons taken apart: bars broken into parts at their own depths, connections through letters,
//             arrows and blades branching out of terminals, all following the word's one sweep (see wildWord)
// Letter units: cap height 1, y up, baseline 0. A letter: { w, parts: [{ polys, cuts, z, kind, axis, tips }] }.
import { bar, clipHalf, chamfer, rect, unit, curveBar } from './skel.mjs'

export const W = 0.25          // bar weight (stems)
export const WH = 0.22         // arms run a touch lighter than stems
export const CUT = [0.42, 1]   // the one cutting angle: every sliced terminal leans this way (top edge longer)

// ---- helpers ----
const band = (polys, y0 = 0, y1 = 1) => polys.map((P) => clipHalf(clipHalf(P, [0, y0], [1, 0]), [0, y1], [-1, 0])).filter((P) => P.length > 2)
/** an arm: the bar a->b at w, run on past both ends and clipped to the cap band (flat tops and bottoms) */
const arm = (a, b, w = W, y0 = 0, y1 = 1) => { const u = unit([b[0] - a[0], b[1] - a[1]]); return band(bar([[a[0] - u[0] * 0.5, a[1] - u[1] * 0.5], [b[0] + u[0] * 0.5, b[1] + u[1] * 0.5]], w), y0, y1) }
/** the right end of a horizontal-ish polygon sliced at the cutting angle through (x, y) */
const sliceR = (P, x, y, d = CUT) => clipHalf(P, [x, y], d)
/** the top of an upright polygon sliced rising to the right through (x, y) */
const sliceT = (P, x, y, k = 0.32) => clipHalf(P, [x, y], [-1, -k])
/** a convex polygon (counter-clockwise) shrunk by d: its counter */
export const inset = (P, d) => { let Q = P; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], u = unit([b[0] - a[0], b[1] - a[1]]); Q = clipHalf(Q, [a[0] - u[1] * d, a[1] + u[0] * d], u); if (Q.length < 3) break } return Q }
const part = (polys, o = {}) => ({ polys, cuts: [], z: 0, kind: 'body', axis: null, tips: [], ...o })

// ---- STRAIGHT ----
export const STRAIGHT = {
  V: () => ({ w: 0.8, parts: [part([...arm([0.13, 1], [0.4, 0]), ...arm([0.4, 0], [0.67, 1])])] }),
  E: () => ({ w: 0.66, parts: [part([rect(0, 0, W, 1), sliceR(rect(0, 1 - WH, 0.66, 1), 0.6, 1 - WH / 2), sliceR(rect(0, 0.5 - WH / 2, 0.55, 0.5 + WH / 2), 0.5, 0.5), sliceR(rect(0, 0, 0.68, WH), 0.62, WH / 2)])] }),
  X: () => ({ w: 0.8, parts: [part([...arm([0.12, 1], [0.68, 0]), ...arm([0.12, 0], [0.68, 1], W * 0.92)])] }),
  O: () => { const o = chamfer(0, 0, 0.74, 1, [0.2, 0.1, 0.2, 0.1]); return { w: 0.74, parts: [part([o], { cuts: [inset(o, W)] })] } },
  I: () => ({ w: W * 1.06, parts: [part([sliceT(rect(0, 0, W * 1.06, 1.06), 0, 0.98, 0.1)])] }),
  D: () => { const o = [[0, 0], [0.5, 0], [0.8, 0.3], [0.8, 0.72], [0.52, 1], [0, 1]]; return { w: 0.8, parts: [part([o], { cuts: [inset(o, W)] })] } },
  3: () => { const ch = (P) => clipHalf(clipHalf(P, [0.7, 0.82], [-0.18, 0.18]), [0.52, 0], [0.18, 0.18]); return { w: 0.7, parts: [part([rect(0, 1 - WH, 0.7, 1), rect(0.18, 0.5 - WH / 2, 0.7, 0.5 + WH / 2), rect(0, 0, 0.7, WH), rect(0.7 - W, 0, 0.7, 1)].map(ch))] } },
  N: () => ({ w: 0.8, parts: [part([rect(0, 0, W, 1), rect(0.8 - W, 0, 0.8, 1), ...arm([W * 0.5, 1], [0.8 - W * 0.5, 0], W * 0.95)])] }),
  P: () => { const o = chamfer(0, 0.34, 0.74, 1, [0, 0.18, 0.2, 0]); return { w: 0.74, parts: [part([rect(0, 0, W, 1), o], { cuts: [inset(o, W * 0.88)] })] } },
  G: () => { const o = chamfer(0, 0, 0.76, 1, [0.2, 0.1, 0.2, 0.1]); return { w: 0.76, parts: [part([o], { cuts: [inset(o, W), rect(0.44, 0.5, 0.8, 1 - WH)], adds: [rect(0.38, 0.5 - WH, 0.76, 0.5)] })] } },
}

/**
 * A word laid out in metres. alpha: an alphabet ({ ch: () => letter }); h: cap height (m); slant; kern: per-letter
 * shift in letter units (negative bites into the one before); lift: per-letter raise; over: 'left' (each letter over
 * the one to its right) | 'right' | an explicit back-to-front order; extra(tf): more parts in word units (connections).
 * Returns parts back to front, each { ch, li, polys, cuts, depth, kind, axis, tips } in metres.
 */
export function layWord(keys, alpha, { h = 1, slant = 0.14, kern = [], lift = [], scale = [], over = 'left', extra = null } = {}) {
  const G = keys.map((k) => alpha[k]())
  const xs = []; let x = 0
  G.forEach((g, i) => { x += kern[i] || 0; xs.push(x); x += g.w * (scale[i] || 1) })
  const tfOf = (i) => { const s = scale[i] || 1, dy = lift[i] || 0; return ([u, v]) => { const vv = v * s + dy; return [(xs[i] + u * s + vv * slant) * h, vv * h] } }
  const word = ([u, v]) => [(u + v * slant) * h, v * h]
  const rank = Array.isArray(over) ? keys.map((_, i) => over.indexOf(i)) : keys.map((_, i) => (over === 'left' ? keys.length - i : i))
  const out = []
  const place = (p, tf, depth, li, ch) => out.push({ ch, li, kind: p.kind, depth, polys: p.polys.map((P) => P.map(tf)), cuts: (p.cuts || []).map((P) => P.map(tf)), adds: (p.adds || []).map((P) => P.map(tf)),
    axis: p.axis ? p.axis.map(tf) : null, w: (p.w ?? W) * h, tips: (p.tips || []).map((t) => { const a = tf(t.p), b = tf([t.p[0] + t.dir[0] * 0.01, t.p[1] + t.dir[1] * 0.01]); return { p: a, dir: unit([b[0] - a[0], b[1] - a[1]]), w: (t.w ?? W) * h } }) })
  G.forEach((g, i) => g.parts.forEach((p, k) => place(p, tfOf(i), rank[i] * 10 + (p.z || 0) + k * 0.001, i, keys[i])))
  if (extra) for (const p of extra({ at: (i, q) => { const m = tfOf(i)(q); return [m[0] / h - m[1] / h * slant, m[1] / h] }, xs, G })) place(p, word, p.depth ?? 0, -1, 'link')
  return out.sort((a, b) => a.depth - b.depth)
}
export { part, arm, band, sliceR, sliceT, bar, curveBar, chamfer, rect, clipHalf }

// ---- SEMI-WILD: the straight skeletons plus style grown out of them ----
export const AR = { len: 0.34, wide: 0.56, shaft: 0.05, sweep: 0.3 }   // the piece's one arrow
const notch = (p, d, l, w) => { const u = unit(d), n = [-u[1] * w / 2, u[0] * w / 2]; return [[p[0] + n[0], p[1] + n[1]], [p[0] + u[0] * l, p[1] + u[1] * l], [p[0] - n[0], p[1] - n[1]]] }
const plus = (base, add, o = {}) => () => { const g = base(); const p = g.parts[0]; return { w: o.w ?? g.w, parts: [{ ...p, polys: [...p.polys, ...add.flatMap((a) => a)], cuts: [...(p.cuts || []), ...(o.cuts || [])], adds: [...(p.adds || []), ...(o.adds || [])] }] } }
export const SEMI = {
  // V: a flag swept up off the left arm, the right arm grown on into an arrow
  V: plus(STRAIGHT.V, [bar([[0.08, 0.86], [-0.12, 1.16]], W * 0.78, { b: { cut: [1, 0.3] } }), bar([[0.62, 0.84], [0.7, 1.06]], W * 0.92, { b: { arrow: AR } })], { cuts: [notch([-0.02, 0.62], [1, -0.2], 0.16, 0.05)] }),
  // E: the middle arm runs out into an arrow (over the X), the foot kicks out under the next letter
  E: plus(STRAIGHT.E, [bar([[0.1, 0.5], [0.64, 0.53]], WH, { b: { arrow: { ...AR, len: 0.3, wide: 0.5 } } }), bar([[0.3, WH / 2], [0.86, WH / 2 - 0.01], [1.02, -0.12]], WH, { b: { cut: [1, 0.25] } })]),
  // X: the top right leg sliced long up and out; the bottom left leg kicks back
  X: plus(STRAIGHT.X, [bar([[0.6, 0.88], [0.86, 1.18]], W * 0.88, { b: { cut: [1, 0.15] } })], { cuts: [notch([0.82, 0.3], [-1, 0.25], 0.16, 0.05)] }),
  V2: plus(STRAIGHT.V, [bar([[0.08, 0.86], [-0.06, 1.1]], W * 0.7, { b: { cut: [1, 0.3] } })], { cuts: [notch([0.8, 0.6], [-1, -0.2], 0.15, 0.05)] }),
  // O: an arrow off the top right corner, up and out with the flow
  O: plus(STRAIGHT.O, [], { cuts: [notch([0.76, 0.7], [-1, -0.25], 0.14, 0.05)] }),
  // I: a cut through it, the top broken off as a bit
  I: () => ({ w: W * 1.06, parts: [part([sliceT(rect(0, 0, W * 1.06, 0.8), 0, 0.78, 0.1)], { cuts: [notch([-0.02, 0.36], [1, -0.25], 0.15, 0.05)] }), part([clipHalf(sliceT(rect(0.02, 0.86, W * 1.08, 1.12), 0.02, 1.09, 0.1), [0, 0.86], [1, 0.12])], { z: 0.2, kind: 'bit' })] }),
  // D: the bowl's point grown into the closing arrow
  D: plus(STRAIGHT.D, [bar([[0.62, 0.5], [0.98, 0.5]], WH, { b: { arrow: { ...AR, len: 0.4, wide: 0.6 } } })], { w: 0.8, cuts: [notch([-0.02, 0.3], [1, -0.25], 0.14, 0.05)] }),
  3: plus(STRAIGHT[3], [bar([[0.3, 0.5], [0.94, 0.56]], WH, { b: { arrow: { ...AR, len: 0.3, wide: 0.5 } } })]),
  N: plus(STRAIGHT.N, [bar([[0.68, 0.84], [0.8, 1.14]], W * 0.9, { b: { arrow: AR } })]),
  P: plus(STRAIGHT.P, [bar([[0.5, 0.7], [0.96, 0.78]], WH, { b: { arrow: { ...AR, len: 0.3, wide: 0.5 } } })]),
  G: plus(STRAIGHT.G, [bar([[0.6, 0.86], [0.9, 1.12]], W * 0.82, { b: { cut: [1, 0.15] } })]),
}
