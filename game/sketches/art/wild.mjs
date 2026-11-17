// The PIECE alphabet: our own technical wildstyle for the hall-of-fame VEXVOID family (targets piece-A..E).
// Built the way technical writers build letters, in PARTS: a readable skeleton (the letter's bodies: blades of one
// weight, every terminal sliced at the piece's one cutting angle), then extensions off it (sabres swept out to a point,
// flags, barbs, arrowheads), then connections between letters (arrows that go over one letter and under the next).
// Every part keeps its own depth, so where one passes over another it gets its own outline and casts a shadow: the
// interlocking look. Each part also carries its axis (for the inner detail and the splits along construction lines)
// and its tips (where the shard bursts come from). Cap height 1, y up, baseline 0.
import { tblade, arrowHead, sabre } from './shapes.mjs'

const W = 0.25                 // body weight
const CUT = { cut: [1, 0.42] } // the cutting angle: every sliced terminal follows it
const pt = (l) => ({ point: l })
const unit = (d) => { const L = Math.hypot(d[0], d[1]) || 1; return [d[0] / L, d[1] / L] }

// ---- parts: { polys, cuts, axis, w, tips: [{ p, dir, w }], z, kind } ----
/** a straight body: a blade from a to b, w wide (or [at a, at b]: tapered); ends sliced (CUT), pointed (pt(len)) or square */
const bl = (a, b, ww, ea = null, eb = null, o = {}) => {
  const [wa, wb] = Array.isArray(ww) ? ww : [ww, ww], w = (wa + wb) / 2
  const u = unit([b[0] - a[0], b[1] - a[1]]), tips = []
  if (ea && ea.point) tips.push({ p: [a[0] - u[0] * ea.point, a[1] - u[1] * ea.point], dir: [-u[0], -u[1]], w })
  if (eb && eb.point) tips.push({ p: [b[0] + u[0] * eb.point, b[1] + u[1] * eb.point], dir: u, w })
  return { polys: [tblade(a, b, wa, wb, ea, eb)], axis: [a, b], w, tips, z: 0, kind: 'body', ...o }
}
/** a sabre: a curved blade swept to a point (widths along it; the last 0 = a point) */
const sb = (ctrl, ws, o = {}) => {
  const s = sabre(ctrl, ws), n = s.axis.length - 1, tips = []
  if (ws[ws.length - 1] < 0.01) tips.push({ p: s.axis[n], dir: unit([s.axis[n][0] - s.axis[n - 2][0], s.axis[n][1] - s.axis[n - 2][1]]), w: Math.max(...ws) })
  if (ws[0] < 0.01) tips.push({ p: s.axis[0], dir: unit([s.axis[0][0] - s.axis[2][0], s.axis[0][1] - s.axis[2][1]]), w: Math.max(...ws) })
  return { polys: [s.poly], axis: s.axis, w: Math.max(...ws) * 0.8, tips, z: 0, kind: 'ext', ...o }
}
/** an arrowhead, tip at `tip`, pointing along dir */
const ah = (tip, dir, len, wide, o = {}) => ({ polys: [arrowHead(tip, dir, len, wide, 0.32)], axis: null, w: 0, tips: [{ p: tip, dir: unit(dir), w: wide }], z: 0, kind: 'ext', ...o })
/** a body given as one polygon (with counters as cuts) and an axis for its detail */
const poly = (P, cuts, axis, w, o = {}) => ({ polys: [P], cuts, axis, w, tips: [], z: 0, kind: 'body', ...o })
/** a cut: a thin wedge into a part from outside it, `at` its mouth (just outside the edge), along dir */
const wedge = (at, dir, len, w) => { const u = unit(dir), n = [-u[1] * w / 2, u[0] * w / 2]; return [[at[0] + n[0], at[1] + n[1]], [at[0] + u[0] * len, at[1] + u[1] * len], [at[0] - n[0], at[1] - n[1]]] }
const Z = (p, z) => ({ ...p, z })
const C = (p, ...cuts) => ({ ...p, cuts: (p.cuts || []).concat(cuts) })

export const WILD = {
  // the lead V: a heavy left arm crowned with a flag swept up and back, a lighter right arm that spikes on up, a barb
  // off the left arm into the notch, a shard swept down off its outside, a point below
  V: () => ({ w: 0.86, parts: [
    Z(sb([[0.17, 0.86], [0.02, 1.1], [-0.3, 1.3]], [0.24, 0.15, 0]), -1),
    Z(sb([[0.2, 0.36], [0.06, 0.14], [-0.16, -0.18]], [0.13, 0.08, 0]), -1),
    C(bl([0.04, 1.0], [0.42, -0.04], [W * 1.38, W * 0.78], CUT, pt(0.22)), wedge([0.075, 1.06], [0.37, -1], 0.4, 0.05)),
    Z(sb([[0.27, 0.56], [0.44, 0.66], [0.6, 0.68]], [0.11, 0.07, 0]), 0.5),
    Z(bl([0.4, 0.02], [0.84, 1.0], [W * 0.58, W * 1.02], null, CUT), 1),
    Z(sb([[0.78, 0.86], [0.92, 1.08], [1.04, 1.4]], [0.14, 0.09, 0]), 2),
  ] }),
  // E: a leaning spine; the top and bottom arms swept out to points (the bottom one down and away), the middle arm an
  // arrow; a thorn off the spine's top
  E: () => ({ w: 0.74, parts: [
    Z(sb([[0.1, 0.9], [0.02, 1.14], [-0.1, 1.32]], [0.13, 0.08, 0]), -1),
    C(bl([0.02, -0.02], [0.12, 1.02], [W * 0.85, W * 1.15], CUT, CUT), wedge([0.0, 0.3], [1, -0.42], 0.12, 0.04)),
    Z(sb([[0.06, 0.92], [0.5, 0.98], [0.98, 1.22]], [0.21, 0.17, 0]), 1),
    Z(bl([0.08, 0.54], [0.5, 0.6], [W * 0.8, W * 0.55]), 1),
    Z(ah([0.8, 0.66], [1, 0.16], 0.34, 0.38), 1.1),
    Z(sb([[0.04, 0.1], [0.5, 0.04], [0.98, -0.22]], [0.22, 0.17, 0]), 1),
  ] }),
  // X: a heavy blade top-left to bottom-right, a lighter one over it that spikes on up; shards off the other ends
  X: () => ({ w: 0.84, parts: [
    Z(sb([[0.08, 0.92], [-0.06, 1.1], [-0.14, 1.3]], [0.12, 0.07, 0]), -1),
    Z(sb([[0.68, 0.1], [0.86, -0.06], [1.08, -0.3]], [0.15, 0.09, 0]), -1),
    C(bl([0.0, 1.02], [0.78, -0.02], [W * 1.32, W * 0.84], CUT, CUT), wedge([0.62, 0.32], [-1, 0.42], 0.12, 0.04)),
    Z(bl([0.02, -0.04], [0.8, 1.02], [W * 0.62, W * 1.0], pt(0.16), CUT), 1),
    Z(sb([[0.74, 0.92], [0.9, 1.14], [1.0, 1.44]], [0.14, 0.08, 0]), 2),
  ] }),
  // the second V: the right arm the heavy one, flagged up and out; a barb off it into the notch; a thorn on the left
  V2: () => ({ w: 0.84, parts: [
    Z(sb([[0.06, 0.9], [-0.02, 1.12], [-0.08, 1.3]], [0.12, 0.07, 0]), -1),
    Z(bl([0.0, 1.0], [0.38, -0.02], [W * 1.0, W * 0.6], CUT, null), 0),
    Z(bl([0.36, -0.04], [0.8, 1.0], [W * 0.78, W * 1.38], pt(0.22), CUT), 1),
    Z(sb([[0.68, 0.86], [0.86, 1.1], [1.16, 1.28]], [0.24, 0.15, 0]), 0.5),
    Z(sb([[0.54, 0.52], [0.4, 0.64], [0.26, 0.7]], [0.11, 0.07, 0]), 1.5),
  ] }),
  // O: two crescents swept round from a point at the top to a point below, overlapping; a lens counter between them
  O: () => ({ w: 0.8, parts: [
    Z(sb([[0.4, 1.08], [0.5, 1.26], [0.64, 1.44]], [0.11, 0.06, 0]), -1),
    Z(sb([[0.44, 1.22], [-0.18, 0.52], [0.34, -0.22]], [0.0, 0.32, 0.0]), 0),
    Z(sb([[0.3, 1.16], [1.0, 0.5], [0.38, -0.14]], [0.0, 0.29, 0.0]), 1),
    Z(sb([[0.34, -0.04], [0.2, -0.2], [0.02, -0.34]], [0.11, 0.06, 0]), -1),
  ] }),
  // I: a blade to a point below, a flag off the top, a barb off its side
  I: () => ({ w: 0.42, parts: [
    Z(sb([[0.14, 0.92], [0.0, 1.1], [-0.12, 1.22]], [0.15, 0.09, 0]), -1),
    C(bl([0.1, -0.04], [0.18, 1.0], [W * 0.75, W * 1.2], pt(0.22), CUT), wedge([0.24, 0.42], [-1, 0.42], 0.11, 0.04)),
    Z(sb([[0.22, 0.56], [0.36, 0.6], [0.5, 0.72]], [0.09, 0.05, 0]), 1),
  ] }),
  // D: the spine; the bowl pushed out to a point and on into a big arrow
  D: () => ({ w: 1.06, parts: [
    Z(sb([[0.08, 0.9], [0.0, 1.12], [-0.08, 1.32]], [0.13, 0.08, 0]), -1),
    C(bl([0.02, -0.04], [0.08, 1.04], [W * 0.9, W * 1.12], CUT, CUT), wedge([0.0, 0.62], [1, -0.42], 0.12, 0.04)),
    Z(poly([[0.04, 1.04], [0.5, 1.04], [0.94, 0.5], [0.5, -0.04], [0.04, -0.04], [0.04, 0.16], [0.42, 0.16], [0.68, 0.5], [0.42, 0.84], [0.04, 0.84]], [],
      [[0.3, 0.94], [0.6, 0.86], [0.82, 0.5], [0.6, 0.12], [0.3, 0.06]], 0.2), 1),
    Z(bl([0.7, 0.5], [1.0, 0.5], W * 0.62), 0.5),
    Z(ah([1.32, 0.5], [1, 0], 0.44, 0.52), 1.2),
  ] }),
  // 3: a sliced top bar, a diagonal down into the middle, an arrow out of the middle, the bottom swept round to a point
  3: () => ({ w: 0.8, parts: [
    Z(sb([[0.06, 0.9], [-0.04, 1.12], [-0.12, 1.3]], [0.12, 0.07, 0]), -1),
    Z(bl([0.0, 0.94], [0.66, 1.0], [W * 1.05, W * 0.8], CUT, null), 0),
    Z(bl([0.7, 1.08], [0.3, 0.56], [W * 0.95, W * 0.75]), 0.5),
    Z(sb([[0.2, 0.6], [0.92, 0.66], [0.8, 0.06], [0.3, -0.06], [-0.16, 0.12]], [0.18, 0.28, 0.26, 0.16, 0]), 0.8),
    Z(ah([1.02, 0.86], [1, 0.62], 0.3, 0.34), 1.1),
    Z(bl([0.6, 0.5], [0.88, 0.72], W * 0.55), 1.05),
  ] }),
}

/**
 * A word in the piece alphabet, laid out in metres. keys: letters; h: cap height (m); kern: per-letter shift (letter
 * units, negative bites into the one before); lift: per-letter raise; slant; arch: { rise, bend } puts the word on an
 * arch (rise: the middle's lift, bend: how much the letters turn with it); order: back-to-front letter order;
 * links: connections between letters [{ from: [i, u, v], via?: [i, u, v], to: [i, u, v], ws, z, arrow? }] in letter
 * units (z: depth in letter ranks, e.g. 2.5 = over the third letter in `order`, under the fourth).
 * Returns the parts back to front: [{ ch, li, polys, cuts, axis, w, tips }] in metres.
 */
export const wildWord = (keys, { h = 1, kern = [], lift = [], slant = 0.1, x0 = 0, order = null, arch = null, links = [], drop = [], teeth = 0 } = {}) => {
  const G = keys.map((k) => WILD[k]())
  const xs = []; let x = x0
  G.forEach((g, i) => { x += kern[i] || 0; xs.push(x); x += g.w })
  const total = x - x0, mid = x0 + total / 2
  const tfs = G.map((g, i) => {
    let dy = lift[i] || 0, rot = 0
    const cx = xs[i] + g.w / 2
    if (arch) { const s = (cx - mid) / (total / 2); dy += arch.rise * (1 - s * s); rot = Math.atan(-2 * arch.rise * s / (total / 2)) * (arch.bend ?? 0.8) }
    const c = Math.cos(rot), sn = Math.sin(rot), X = xs[i]
    return ([u, v]) => {
      const lx = u - g.w / 2, ly = v
      const ru = lx * c - ly * sn + g.w / 2, rv = lx * sn + ly * c
      return [(X + ru + (rv + dy) * slant) * h, (rv + dy) * h]
    }
  })
  const rank = order ? order.map((_, r) => r) : keys.map((_, i) => i)
  const rankOf = keys.map((_, i) => (order ? order.indexOf(i) : i))
  const out = []
  const place = (p, tf, z, li) => {
    const tip = (t) => { const a = tf(t.p), b = tf([t.p[0] + t.dir[0] * 0.01, t.p[1] + t.dir[1] * 0.01]); return { p: a, dir: unit([b[0] - a[0], b[1] - a[1]]), w: t.w * h } }
    out.push({ ch: keys[li] ?? 'link', li, kind: p.kind, depth: z, polys: p.polys.map((P) => P.map(tf)), cuts: (p.cuts || []).map((P) => P.map(tf)),
      axis: p.axis ? p.axis.map(tf) : null, w: p.w * h, tips: p.tips.map(tip) })
  }
  G.forEach((g, i) => g.parts.forEach((p, k) => { if (!(drop[i] || []).includes(k)) place(p, tfs[i], rankOf[i] * 10 + p.z + k * 0.001, i) }))
  // teeth (the tunnel style): a blade swept down to a point under every letter, raked alternately, and a spike up
  if (teeth) G.forEach((g, i) => {
    const sd = i % 2 ? 1 : -1, w = g.w
    place(sb([[w * 0.5, 0.26], [w * 0.48 + sd * 0.04, -0.06], [w * 0.5 + sd * 0.16, -0.44 * teeth]], [0.2, 0.12, 0]), tfs[i], rankOf[i] * 10 - 0.6, i)
    place(sb([[w * 0.42, 0.8], [w * 0.4 - sd * 0.04, 1.08], [w * 0.36 - sd * 0.14, 1.36 + 0.1 * teeth]], [0.15, 0.09, 0]), tfs[i], rankOf[i] * 10 - 0.7, i)
  })
  // connections: points given in a letter's own units, through that letter's placement
  for (const L of links) {
    const P = (q) => { const [i, u, v] = q, m = tfs[i]([u, v]); return [m[0] / h, m[1] / h] }
    const ctrl = [P(L.from), ...(L.via ? [P(L.via)] : []), P(L.to)]
    const p = L.arrow ? ah(ctrl[ctrl.length - 1], [ctrl[ctrl.length - 1][0] - ctrl[ctrl.length - 2][0], ctrl[ctrl.length - 1][1] - ctrl[ctrl.length - 2][1]], L.arrow[0], L.arrow[1]) : sb(ctrl, L.ws || [0.12, 0.09, 0])
    place({ ...p, kind: 'link' }, (q) => [q[0] * h, q[1] * h], L.z * 10, -1)
  }
  void rank
  return out.sort((a, b) => a.depth - b.depth)
}
export { CUT }
