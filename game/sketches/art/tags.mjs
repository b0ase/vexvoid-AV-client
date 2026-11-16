// TAGS: hands, not fonts. Each hand is a set of letter skeletons (the path the can takes, stroke by stroke, in the order
// a writer makes them), written with a lean and a bounce, at a hand's speed that slows into corners and curves, with
// the can held a beat where the stroke starts (paint pools there and may run) and flicked off at the end.
//   drip hand (targets tag-A/B/C): tall, quick, a medium cap close in, drips.
//   brush hand (targets tag-D/E): heavy, angular, arrow-tipped, a fat cap close in, drips and splatter.
//   blade hand: skinny, sharp, fast: V3X with a crown and sparks.   round hand: VOID run together.   NPG with an arrow.
import { WHITE, BLACK, CHROME, rand, jitter, stroke, dot } from './can.mjs'
import { sketch, drips, prepare, fillPass, edgePass, bottoms, scatter } from './paint.mjs'
import { at } from './raster.mjs'
import { vmarkStrokes } from './vmark.mjs'

// Catmull-Rom through control points
const smooth = (p, n = 6) => {
  if (p.length < 3) return p
  const out = [p[0]]
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[Math.max(0, i - 1)], b = p[i], c = p[i + 1], d = p[Math.min(p.length - 1, i + 2)]
    for (let k = 1; k <= n; k++) { const t = k / n, t2 = t * t, t3 = t2 * t; out.push([0, 1].map((j) => 0.5 * (2 * b[j] + (-a[j] + c[j]) * t + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * t2 + (-a[j] + 3 * b[j] - 3 * c[j] + d[j]) * t3))) }
  }
  return out
}
// a skeleton stroke: points, smooth (curve) or not (sharp corners)
const S = (pts, o = {}) => ({ pts, ...o })
const C = (pts, o = {}) => ({ pts, curve: true, ...o })

/** Lays out a word in a hand. glyphs: ch -> { w, s: [strokes] } (unit height). Returns strokes in metres plus where each
 *  letter's bottom ends are (for drips). */
function write(text, hand, o) {
  const h = o.h, lean = o.lean ?? 0.2, out = [], foot = []
  let x = 0
  ;[...text].forEach((ch, i) => {
    const g = hand[ch], dy = (o.bounce ? o.bounce[i] || 0 : 0) + jitter(o.wob ?? 0.02), sx = o.squash ? o.squash[i] || 1 : 1
    const T = ([u, v]) => [(x + u * sx + v * lean) * h, (v + dy) * h]
    for (const st of g.s) out.push({ pts: (st.curve ? smooth(st.pts, 7) : st.pts).map(T), st, letter: i })
    for (const f of g.foot || []) foot.push(T(f))
    x += g.w * sx + (o.gap ?? 0.14)
  })
  return { strokes: out, foot }
}
const paintHand = (laid, can, o) => laid.strokes.map(({ pts, st }) => stroke(pts, { ...can, ...(st.can || {}) }, {
  speed: (o.speed ?? 2.2) * (st.speed ?? 1), corner: o.corner ?? 0.75, step: 0.008, hold0: st.hold0 ?? o.hold0 ?? 0.06, hold1: st.hold1 ?? 0, ease: o.ease ?? 0.04,
}))

// ---- the drip hand: tall, narrow, a bit of lean, each stroke a quick pull ----
const DRIP = {
  V: { w: 0.46, s: [S([[0, 1.02], [0.2, 0], [0.47, 1.08]])], foot: [[0.2, 0]] },
  E: { w: 0.4, s: [S([[0.42, 1.0], [0.02, 0.99], [0, 0.5], [-0.01, 0.01], [0.44, 0.0]]), S([[0.03, 0.53], [0.33, 0.55]], { hold0: 0.03 })], foot: [[0.05, 0], [0.38, 0]] },
  X: { w: 0.44, s: [S([[0, 1.02], [0.45, 0]]), S([[0.47, 1.04], [-0.03, -0.02]])], foot: [[0.44, 0], [-0.02, 0]] },
  O: { w: 0.44, s: [C([[0.24, 1.0], [0.04, 0.84], [0, 0.45], [0.12, 0.06], [0.3, 0.02], [0.44, 0.3], [0.44, 0.72], [0.34, 0.96], [0.16, 0.99]])], foot: [[0.2, 0.02]] },
  I: { w: 0.04, s: [S([[0.03, 1.03], [0, 0]])], foot: [[0, 0]] },
  D: { w: 0.42, s: [S([[0, 1.02], [0, 0]]), C([[-0.03, 1.0], [0.22, 0.98], [0.4, 0.78], [0.44, 0.38], [0.3, 0.07], [0.02, 0.0]], { hold0: 0.03 })], foot: [[0.02, 0], [0.3, 0.07]] },
  3: { w: 0.4, s: [C([[0.02, 0.92], [0.2, 1.01], [0.38, 0.88], [0.34, 0.64], [0.14, 0.54], [0.36, 0.44], [0.42, 0.18], [0.24, 0.0], [0.0, 0.06]])], foot: [[0.2, 0]] },
  N: { w: 0.44, s: [S([[0, 0], [0.01, 1.02], [0.42, 0.0], [0.44, 1.05]])], foot: [[0, 0], [0.42, 0]] },
  P: { w: 0.4, s: [S([[0, 0], [0, 1.02]]), C([[-0.02, 1.0], [0.24, 0.98], [0.4, 0.8], [0.32, 0.56], [0.02, 0.5]])], foot: [[0, 0]] },
  G: { w: 0.44, s: [C([[0.42, 0.88], [0.28, 1.0], [0.06, 0.86], [0, 0.45], [0.12, 0.05], [0.34, 0.02], [0.44, 0.24], [0.44, 0.44], [0.24, 0.45]])], foot: [[0.2, 0.02]] },
}

// ---- the brush hand: heavy, angular, arrow-tipped (a fat cap close in) ----
const arrow = (tip, dir, s) => { const a = Math.atan2(dir[1], dir[0]); return S([[tip[0] + Math.cos(a + 2.6) * s, tip[1] + Math.sin(a + 2.6) * s], tip, [tip[0] + Math.cos(a - 2.6) * s, tip[1] + Math.sin(a - 2.6) * s]], { hold0: 0.02, speed: 0.8 }) }
const BRUSH = {
  V: { w: 0.62, s: [S([[0.04, 1.05], [0.28, -0.02], [0.66, 1.18]]), arrow([0.03, 1.13], [-0.25, 1], 0.17)], foot: [[0.27, 0]] },
  E: { w: 0.48, s: [S([[0.06, 1.0], [0.0, 0.0], [0.5, 0.05]]), S([[0.04, 0.98], [0.52, 1.14]]), arrow([0.56, 1.16], [1, 0.32], 0.15), S([[0.04, 0.52], [0.4, 0.6]]), arrow([0.44, 0.61], [1, 0.25], 0.12)], foot: [[0.02, 0], [0.48, 0.05]] },
  X: { w: 0.58, s: [S([[0.0, 1.0], [0.6, -0.06]]), S([[0.04, -0.04], [0.66, 1.2]]), arrow([0.68, 1.24], [0.45, 1], 0.17)], foot: [[0.6, -0.05], [0.04, -0.04]] },
  O: { w: 0.54, s: [S([[0.28, 1.12], [0.02, 0.5], [0.26, -0.1], [0.54, 0.5], [0.28, 1.12]], { hold1: 0.04 }), S([[0.36, 0.86], [0.2, 0.12]], { hold0: 0.02 })], foot: [[0.26, -0.1]] },
  I: { w: 0.1, s: [S([[0.06, 0.86], [0.02, 0]]), S([[0.08, 1.08], [0.09, 1.12]], { hold1: 0.12 })], foot: [[0.02, 0]] },
  D: { w: 0.66, s: [S([[0.04, 1.02], [0.0, -0.02]]), S([[0.0, 1.02], [0.36, 0.96], [0.72, 0.5], [0.3, 0.02], [0.0, -0.02]]), arrow([0.8, 0.5], [1, 0], 0.17)], foot: [[0.02, 0], [0.3, 0.02]] },
}

// ---- the blade hand: skinny, sharp, fast ----
const BLADE = {
  V: { w: 0.5, s: [S([[-0.08, 1.12], [0.04, 1.0], [0.22, 0.0], [0.6, 1.2]])] },
  3: { w: 0.42, s: [S([[0.0, 0.98], [0.38, 1.0], [0.12, 0.56], [0.42, 0.48], [0.38, 0.1], [0.0, 0.02]])] },
  X: { w: 0.5, s: [S([[0.0, 1.04], [0.5, 0.0], [0.86, -0.08]]), S([[0.52, 1.06], [0.02, -0.02]])] },
}
// ---- whole words in one flow (the pen leaves the wall only where a writer's would) ----
const FLOW = {
  // V3X: the V runs straight on into the 3; the X's second blade kicks out low; a crown of three thorns over the V
  v3x: { w: 1.9, s: [
    S([[-0.1, 1.12], [0.0, 1.02], [0.2, 0.0], [0.52, 1.08], [0.9, 1.08], [0.62, 0.6], [0.95, 0.48], [0.86, 0.06], [0.48, -0.02]]),
    S([[1.06, 1.06], [1.46, 0.02], [1.84, -0.12]]), S([[1.5, 1.1], [1.0, -0.04]], { hold0: 0.03 }),
    S([[0.0, 1.22], [-0.08, 1.46]], { hold0: 0.02, speed: 1.3 }), S([[0.13, 1.2], [0.15, 1.56]], { hold0: 0.02, speed: 1.3 }), S([[0.27, 1.2], [0.38, 1.44]], { hold0: 0.02, speed: 1.3 }),
  ] },
  // VOID: V into O into I in one pull, the D on its own, a dot over the I
  void: { w: 1.3, s: [
    C([[-0.04, 1.04], [0.07, 0.5], [0.17, 0.0], [0.27, 0.5], [0.38, 0.9], [0.5, 1.0], [0.63, 0.84], [0.66, 0.4], [0.56, 0.03], [0.44, 0.05], [0.39, 0.42], [0.45, 0.8], [0.62, 0.97], [0.76, 0.86], [0.79, 0.4], [0.77, 0.0]]),
    S([[0.93, 1.0], [0.9, 0.0]]), C([[0.88, 1.02], [1.1, 0.95], [1.24, 0.55], [1.15, 0.12], [0.92, 0.0], [0.78, 0.06]], { hold0: 0.02 }),
    S([[0.82, 1.2], [0.83, 1.22]], { hold1: 0.12 }),
  ] },
}

// ---- the round hand: VOID run together, a loop into the next letter ----
const ROUND = {
  V: { w: 0.42, s: [C([[-0.04, 1.02], [0.06, 0.6], [0.2, 0.0], [0.3, 0.5], [0.46, 1.0], [0.6, 0.92]])] },
  O: { w: 0.46, s: [C([[0.18, 0.94], [0.0, 0.62], [0.06, 0.1], [0.3, 0.0], [0.46, 0.36], [0.4, 0.86], [0.18, 0.98], [0.02, 0.8]])] },
  I: { w: 0.06, s: [C([[0.0, 0.0], [0.04, 0.5], [0.05, 0.84]]), S([[0.06, 1.06], [0.065, 1.08]], { hold1: 0.1 })] },
  D: { w: 0.46, s: [C([[0.02, 0.86], [0.0, 0.4], [0.02, 0.0]]), C([[0.0, 0.98], [0.3, 0.96], [0.48, 0.6], [0.4, 0.14], [0.1, 0.0], [-0.08, 0.06]])] },
}

/** A small quick tag (a dedication on a piece): text in the drip hand at (x, y), h high. */
export const smallTag = (text, x, y, h, can) => write(text, DRIP, { h, lean: 0.2, gap: 0.12 }).strokes.map(({ pts }) => stroke(pts.map(([u, v]) => [u + x, v + y]), can, { speed: 1.8, corner: 0.7, step: 0.006, hold0: 0.03 }))

// ---- the brush hand as shapes: each stroke a tapered blade (pressed on at the start, flicked off to a point) ----
const taper = (pts, w0, w1) => {
  const P = smooth(pts, 5), cum = [0]; for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]))
  const Lt = cum[cum.length - 1], left = [], rightS = []
  P.forEach((p, i) => {
    const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1
    const t = cum[i] / Lt, k = t < 0.5 ? 0 : (t - 0.5) / 0.5, w = Math.max(0.004, w0 + (w1 - w0) * k * k * (3 - 2 * k)) / 2, nx = -dy / l * w, ny = dx / l * w
    left.push([p[0] + nx, p[1] + ny]); rightS.push([p[0] - nx, p[1] - ny])
  })
  return [...left, ...rightS.reverse()]
}
const B2 = {   // [path, start width, end width] in letter units; a dot is [[x, y]], r
  V: { w: 0.66, s: [[[[0.0, 1.06], [0.14, 0.5], [0.27, -0.02]], 0.17, 0.11], [[[0.27, -0.02], [0.46, 0.55], [0.68, 1.22]], 0.12, 0.0], [[[0.06, 0.92], [-0.08, 1.22]], 0.1, 0.0]] },
  E: { w: 0.56, s: [[[[0.05, 1.02], [0.02, 0.5], [0.0, -0.02]], 0.15, 0.12], [[[0.02, 0.98], [0.3, 1.05], [0.6, 1.16]], 0.13, 0.0], [[[0.02, 0.52], [0.24, 0.56], [0.46, 0.62]], 0.11, 0.0], [[[0.0, 0.05], [0.3, 0.03], [0.6, -0.04]], 0.13, 0.0]] },
  X: { w: 0.64, s: [[[[0.0, 1.03], [0.3, 0.5], [0.62, -0.06]], 0.16, 0.05], [[[0.0, -0.06], [0.36, 0.56], [0.74, 1.24]], 0.13, 0.0]] },
  O: { w: 0.6, s: [[[[0.32, 1.14], [0.04, 0.5], [0.28, -0.1]], 0.15, 0.09], [[[0.28, -0.1], [0.58, 0.5], [0.36, 1.12]], 0.1, 0.0], [[[0.44, 0.92], [0.3, 0.5], [0.16, 0.08]], 0.06, 0.0]] },
  I: { w: 0.18, s: [[[[0.08, 0.84], [0.05, 0.4], [0.02, -0.02]], 0.14, 0.07], [[[0.1, 1.04], [0.11, 1.14]], 0.11, 0.07]] },
  D: { w: 0.86, s: [[[[0.05, 1.04], [0.02, 0.5], [0.0, -0.03]], 0.15, 0.12], [[[0.0, 1.03], [0.42, 0.98], [0.7, 0.72], [0.82, 0.5]], 0.13, 0.08], [[[0.82, 0.5], [0.6, 0.2], [0.3, 0.02], [0.0, -0.02]], 0.12, 0.04], [[[0.62, 0.62], [0.94, 0.5], [0.62, 0.34]], 0.07, 0.0]] },
}
function brushTag(id, name, text, o) {
  const h = o.h, lean = o.lean ?? 0.08, strokes = []
  let x = 0
  ;[...text].forEach((ch, i) => {
    const g = B2[ch], dy = (o.bounce ? o.bounce[i] || 0 : 0)
    const T = ([u, v]) => [(x + u + v * lean) * h, (v + dy) * h]
    for (const [path, w0, w1] of g.s) strokes.push({ polys: [taper(path.map(T), w0 * h * 1.3, w1 * h * 1.3)] })
    x += g.w + (o.gap ?? 0.06)
  })
  const { F, L, Uf } = prepare(strokes, { margin: 0.2 })
  const can = { cap: 2, dist: 0.06, colour: o.colour ?? WHITE }
  // each blade: a few quick passes down its middle, then its edge cut clean (the point flicked off last)
  const out = [...L.flatMap((l) => [...fillPass(F, l.f, can, { gap: 0.02, inset: 0.014, ang: 0.9, speed: 2.4 }), ...edgePass(F, l.f, 0.009, { ...can, cap: 1, dist: 0.05 }, { speed: 1.8, corner: 0.8 })])]
  // drips off the bottoms, and splatter
  const foot = bottoms(F, Uf, { step: 0.03, facing: 0.75 }), runs = [], used = []
  for (const p of foot.sort(() => rand() - 0.5)) { if (runs.length >= (o.drips ?? 16) || used.some((u) => Math.abs(u - p[0]) < 0.05)) continue; let l = 0.06 + rand() * rand() * 0.5; for (let q = 0.03; q < l; q += 0.01) if (at(F, Uf, p[0], p[1] - q) < 0.015) { l = q - 0.03; break } if (l < 0.05) continue; used.push(p[0]); runs.push([p[0], p[1] + 0.015, l]) }
  out.push(...drips(runs, { cap: 1, dist: 0.055, colour: can.colour }, { speed: 1.0, hold: 0.1, hold0: 0.1 }))
  out.push(...scatter(F, o.splat ?? 22, (x, y) => { const d = at(F, Uf, x, y); return d > 0.02 && d < 0.16 }, (x, y) => dot(x, y, { cap: 1, dist: 0.05 + rand() * 0.07, colour: can.colour }, 0.01 + rand() * 0.04)))
  return sketch(id, name, 'tag', out, o.about)
}

function tag(id, name, text, hand, o) {
  const laid = write(text, hand, o)
  const can = { cap: o.cap ?? 2, dist: o.dist ?? 0.07, colour: o.colour ?? WHITE }
  const out = paintHand(laid, can, o)
  if (o.extra) out.push(...o.extra(laid, can))
  return sketch(id, name, 'tag', out, o.about)
}
const right = (laid) => Math.max(...laid.strokes.flatMap((s) => s.pts.map((p) => p[0])))
const top = (laid) => Math.max(...laid.strokes.flatMap((s) => s.pts.map((p) => p[1])))

export const TAGS = [
  { id: 'tag-vexvoid', make: () => tag('tag-vexvoid', 'VEXVOID', 'VEXVOID', DRIP, {
    h: 0.5, lean: 0.16, gap: 0.13, cap: 2, dist: 0.065, speed: 2.1, hold0: 0.1, bounce: [0, 0.03, -0.02, 0.02, 0, 0.04, 0], about: 'drip hand: quick tall VEXVOID, drips',
    extra: (laid, can) => {
      // the paint pooled at the bottoms runs: drips off some of the letters' feet
      const runs = laid.foot.filter(() => rand() < 0.6).map(([x, y]) => [x + jitter(0.01), y + 0.01, 0.08 + rand() * 0.32])
      return drips(runs, { cap: 1, dist: 0.05, colour: can.colour }, { speed: 0.9, hold: 0.1, up: 0.0 })
    } }) },
  { id: 'tag-vexvoid-brush', make: () => brushTag('tag-vexvoid-brush', 'VEXVOID BRUSH', 'VEXVOID', { h: 0.75, bounce: [0, -0.02, 0.03, 0, -0.03, 0.02, 0.02], about: 'brush hand: heavy angular VEXVOID, strokes pressed on and flicked off to points, drips and splatter' }) },
  { id: 'tag-v3x', make: () => tag('tag-v3x', 'V3X', '#', { '#': FLOW.v3x }, {
    h: 0.45, lean: 0.24, cap: 1, dist: 0.085, colour: BLACK, speed: 2.6, hold0: 0.04, wob: 0, squash: [1.15], about: 'blade hand: sharp black V3X in one pull, a crown of thorns, white sparks',
    extra: (laid) => {
      const r = right(laid), t = top(laid), W = { cap: 1, dist: 0.06, colour: WHITE }
      const spark = (x, y, k) => [stroke([[x, y - k], [x, y + k]], W, { speed: 1.2 }), stroke([[x - k * 0.7, y], [x + k * 0.7, y]], W, { speed: 1.2 }), dot(x, y, W, 0.08)]
      return [...spark(r + 0.06, t - 0.12, 0.07), ...spark(0.16, t - 0.05, 0.045), ...spark(r * 0.55, -0.1, 0.035)]
    } }) },
  { id: 'tag-void', make: () => tag('tag-void', 'VOID', '#', { '#': FLOW.void }, {
    h: 0.5, lean: 0.26, cap: 2, dist: 0.07, speed: 2.4, hold0: 0.06, corner: 0.45, wob: 0, squash: [1.35], about: 'round hand: VOID in one flowing pull, a halo, an underline that flicks up',
    extra: (laid, can) => {
      const r = right(laid), t = top(laid), thin = { ...can, cap: 1, dist: 0.055 }
      const halo = Array.from({ length: 25 }, (_, i) => { const a = -0.4 + i / 24 * Math.PI * 2.1; return [0.62 + Math.cos(a) * 0.15 + Math.sin(a) * 0.02, t + 0.06 + Math.sin(a) * 0.045] })
      return [stroke(halo, thin, { speed: 1.6 }),
        stroke(smooth([[-0.02, -0.07], [r * 0.45, -0.12], [r * 0.9, -0.08], [r + 0.08, 0.06]], 8), thin, { speed: 2.6, corner: 0.2, ease: 0.1 })]
    } }) },
  { id: 'tag-npg', make: () => tag('tag-npg', 'NPG', 'NPG', DRIP, {
    h: 0.42, lean: 0.3, gap: 0.08, cap: 1, dist: 0.09, colour: CHROME, speed: 2.4, hold0: 0.04, bounce: [0, 0.05, -0.03], squash: [0.85, 0.85, 0.85], about: 'chrome skinny NPG with an arrow under it',
    extra: (laid, can) => {
      const r = right(laid)
      return [stroke([[-0.04, -0.07], [r + 0.14, -0.04]], can, { speed: 2.6 }), stroke([[r + 0.04, 0.03], [r + 0.15, -0.04], [r + 0.05, -0.11]], can, { speed: 1.6, corner: 0.9 })]
    } }) },
  { id: 'tag-vmark', make: () => sketch('tag-vmark', 'V MARK', 'tag', vmarkStrokes(0, 0, 0.5, { colour: WHITE, dist: 0.06 }), 'the V mark: a blade V with a crown, filled quick') },
]
