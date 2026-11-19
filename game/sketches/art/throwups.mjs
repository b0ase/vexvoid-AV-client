// THROW-UPS, pass 3: built the way writers build them (see the graffiti skill): two colours, fast, bold.
//   bubble   each letter a skeleton (centre lines) INFLATED to a fat round body, counters squeezed to slits; letters
//            overlap each other in order, bounce a little, the first one a touch bigger
//   block    the straight letters (alpha.mjs) swelled and rounded at the corners: a rounded-square throw
// Painted in a writer's order: (an optional drop shadow) -> a quick fat-cap fill whose speed shows -> one confident
// outline, even all round, each letter going under the one in front -> a keyline or not -> a shine on every letter
// (a short arc and a dot, top left) -> one or two drips at most -> the V mark.
import { WHITE, BLACK, CHROME, GREY, rand, jitter } from './can.mjs'
import { fillPass, edgePass, lines, bottoms, drips, stroke, dot, sketch } from './paint.mjs'
import { frame, fill as fillMask, sub, or, sdf, at, contours, resample, visibleRuns, len } from './raster.mjs'
import { bar } from './skel.mjs'
import { STRAIGHT, layWord } from './alpha.mjs'
import { vmarkStrokes } from './vmark.mjs'
import { footprint } from './preview.mjs'
import { concentric } from './piece2.mjs'

// Catmull-Rom through points (curves in the skeletons)
const smooth = (p, n = 8) => { const out = [p[0]]; for (let i = 0; i < p.length - 1; i++) { const a = p[Math.max(0, i - 1)], b = p[i], c = p[i + 1], d = p[Math.min(p.length - 1, i + 2)]; for (let k = 1; k <= n; k++) { const t = k / n, t2 = t * t, t3 = t2 * t; out.push([0, 1].map((j) => 0.5 * (2 * b[j] + (-a[j] + c[j]) * t + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * t2 + (-a[j] + 3 * b[j] - 3 * c[j] + d[j]) * t3))) } } return out }
const loop = (cx, cy, rx, ry, n = 40) => Array.from({ length: n + 1 }, (_, i) => [cx + Math.cos(i / n * 6.2832 + 1.57) * rx, cy + Math.sin(i / n * 6.2832 + 1.57) * ry])
// a bubble letter: s = skeleton lines (c: true = smooth through them), slits = thin cuts after inflating
const BUBBLE = {
  V: { w: 0.84, s: [{ p: [[0.18, 0.8], [0.42, 0.2], [0.66, 0.8]] }], slits: [[[0.42, 1.12], [0.42, 0.52]]] },
  E: { w: 0.74, s: [{ p: [[0.54, 0.82], [0.2, 0.8], [0.2, 0.2], [0.56, 0.18]] }, { p: [[0.2, 0.5], [0.48, 0.51]] }], slits: [[[0.86, 0.35], [0.34, 0.35]], [[0.86, 0.66], [0.34, 0.66]]] },
  X: { w: 0.82, s: [{ p: [[0.18, 0.8], [0.64, 0.2]] }, { p: [[0.18, 0.2], [0.64, 0.8]] }], slits: [[[0.41, 1.12], [0.41, 0.6]], [[0.41, -0.12], [0.41, 0.4]], [[-0.1, 0.5], [0.24, 0.5]], [[0.92, 0.5], [0.58, 0.5]]] },
  O: { w: 0.8, s: [{ p: loop(0.4, 0.5, 0.2, 0.3), c: true }], slits: [[[0.4, 0.36], [0.4, 0.64]]] },
  I: { w: 0.42, s: [{ p: [[0.21, 0.2], [0.21, 0.8]] }] },
  D: { w: 0.8, s: [{ p: [[0.2, 0.2], [0.2, 0.8]] }, { p: [[0.2, 0.8], [0.44, 0.78], [0.6, 0.6], [0.6, 0.4], [0.44, 0.22], [0.2, 0.2]], c: true }], slits: [[[0.34, 0.37], [0.34, 0.63]]] },
  3: { w: 0.78, s: [{ p: [[0.2, 0.8], [0.48, 0.82], [0.6, 0.67], [0.42, 0.5], [0.6, 0.33], [0.48, 0.18], [0.2, 0.2]], c: true }], slits: [[[-0.12, 0.35], [0.38, 0.37]], [[-0.12, 0.65], [0.38, 0.63]]] },
  N: { w: 0.82, s: [{ p: [[0.2, 0.2], [0.2, 0.8], [0.62, 0.2], [0.62, 0.8]] }], slits: [[[0.52, 1.12], [0.5, 0.5]], [[0.31, -0.12], [0.33, 0.5]]] },
  P: { w: 0.76, s: [{ p: [[0.2, 0.2], [0.2, 0.8]] }, { p: [[0.2, 0.8], [0.46, 0.8], [0.58, 0.66], [0.46, 0.52], [0.2, 0.52]], c: true }], slits: [[[0.34, 0.6], [0.36, 0.72]], [[0.9, 0.3], [0.36, 0.32]]] },
  G: { w: 0.82, s: [{ p: [[0.62, 0.72], [0.42, 0.82], [0.2, 0.62], [0.2, 0.38], [0.42, 0.18], [0.62, 0.3], [0.62, 0.46], [0.44, 0.46]], c: true }], slits: [[[0.92, 0.6], [0.42, 0.58]]] },
}

/** Bubble letters for a word, laid out: [{ ch, li, skel: polys, slits: polys }] in metres (h: cap height). */
function bubbleWord(text, { h = 1, R = 0.2, kern = [], lift = [], scale = [], tilt = [], slant = 0.06 } = {}) {
  let x = 0; const out = []
  ;[...text].forEach((ch, i) => {
    const g = BUBBLE[ch], s = scale[i] || 1, dy = lift[i] || 0, a = tilt[i] || 0, c = Math.cos(a), sn = Math.sin(a), cx = g.w / 2
    x += kern[i] || 0
    const X = x
    const tf = ([u, v]) => { const lu = (u - cx) * s, lv = (v - 0.5) * s, ru = lu * c - lv * sn, rv = lu * sn + lv * c, vv = rv + 0.5 * s + dy; return [(X + cx * s + ru + vv * slant) * h, vv * h] }
    const skel = g.s.flatMap((st) => { const P = (st.c ? smooth(st.p) : st.p).map(tf); return bar(P, 0.03 * h, { a: { round: true }, b: { round: true }, miter: 8 }) })
    const slits = (g.slits || []).map((sl) => bar(sl.map(tf), 0.034 * h)[0])
    out.push({ ch, li: i, skel, slits, R: R * h * s })
    x += g.w * s
  })
  return out
}
const maskLT = (F, f, d) => { const m = F.mask(); for (let i = 0; i < m.length; i++) m[i] = f[i] < d ? 1 : 0; return m }

/**
 * Paints a throw-up from letter bodies (each { m } a mask in frame F, back to front). o.colours: fill, line, key, shine,
 * shadow; o.key: keyline width (m, 0 none); o.shadow: drop shadow vector (m) or null; o.drips: how many.
 */
function paintThrow(id, name, F, L, o) {
  const C = { fill: CHROME, line: BLACK, key: WHITE, shine: WHITE, shadow: GREY, ...(o.colours || {}) }
  const U = or(...L.map((l) => l.m)), Uf = sdf(F, U), h = o.h
  for (let i = 0; i < L.length; i++) { L[i].f = sdf(F, L[i].m); const fr = L.slice(i + 1).map((l) => l.m); L[i].front = fr.length ? sdf(F, or(...fr)) : null }
  const out = []
  // a drop shadow: the silhouette moved down-right, under everything
  if (o.shadow) {
    const sh = F.mask(), di = Math.round(o.shadow[0] * F.res), dj = Math.round(o.shadow[1] * F.res)
    for (let j = 0; j < F.ny; j++) for (let i = 0; i < F.nx; i++) { const si = i - di, sj = j - dj; if (si >= 0 && sj >= 0 && si < F.nx && sj < F.ny && U[sj * F.nx + si] && !U[j * F.nx + i]) sh[j * F.nx + i] = 1 }
    const sf = sdf(F, sh)
    out.push(...concentric(F, sf, { cap: 2, dist: 0.1, colour: C.shadow, pressure: 0.85 }, { speed: 1.9 }))
  }
  // the fill: fast diagonal zig-zags of a fat cap (they show), then the edge run round close in
  // (light enough that it does not pool and run even with no time to set between strokes)
  const fp = footprint({ cap: 3, dist: 0.13 })
  out.push(...fillPass(F, Uf, { cap: 3, dist: 0.13, colour: C.fill, pressure: 0.85 }, { gap: fp.width * fp.hard * 0.85, inset: 0.05, ang: -0.75, speed: 2.8 }))
  out.push(...L.flatMap((l) => edgePass(F, l.f, 0.028, { cap: 2, dist: 0.09, colour: C.fill, pressure: 0.6 }, { speed: 1.9, corner: 0.5 })))
  // a second tone low in the fill, quick (optional)
  if (o.low) { const y0 = Math.min(...L.map((l) => l.y0)), keep = (x, y) => y < y0 + h * 0.3 + jitter(0.02); out.push(...fillPass(F, Uf, { cap: 3, dist: 0.22, colour: o.low, pressure: 0.45 }, { gap: 0.05, inset: 0.04, ang: 0, speed: 2.4, keep })) }
  // the keyline: a light band right round the silhouette, before the outline cuts its inside edge
  if (o.key) { const kc = { cap: 2, dist: 0.07, colour: C.key, pressure: 0.75 }; for (const lv of [0.3, 0.75]) out.push(...lines(F, Uf, kc, { level: o.key * lv, speed: 1.4, min: 0.04 })) }
  // the outline: one cap, one distance, even all round; each letter goes under the ones in front
  const lc = { cap: o.lineCap ?? 2, dist: o.lineDist ?? 0.05, colour: C.line }
  for (const l of L) for (const lp of contours(F, l.f, 0.004, 0.0015)) {
    const runs = l.front ? visibleRuns(lp, (x, y) => at(F, l.front, x, y) > 0.004) : [lp.concat([lp[0]])]
    for (const r of runs) if (len(r) > 0.03) out.push(stroke(r, lc, { speed: 1.05, corner: 0.7, step: 0.008 }))
  }
  // a shine on every letter: a short arc just inside its top left, and a dot after it
  const sc = { cap: 1, dist: 0.06, colour: C.shine }
  L.forEach((l) => {
    const vis = (x, y) => !l.front || at(F, l.front, x, y) > 0.03
    let best = null
    for (const lp of contours(F, l.f, -l.shineIn, 0.002)) { const p = resample(lp.concat([lp[0]]), 0.01); p.forEach((q, k) => { const s = q[1] - q[0] * 0.75; if (vis(q[0], q[1]) && (!best || s > best.s)) best = { s, k, p } }) }
    if (!best) return
    const n = Math.round(h * 0.16 / 0.01), a = best.p.slice(Math.max(0, best.k - n), best.k + 2)
    if (a.length > 2) { out.push(stroke(a, sc, { speed: 0.9, ease: 0.03 })); const e = best.p[Math.min(best.p.length - 1, best.k + Math.round(n * 0.55))]; if (vis(e[0], e[1])) out.push(dot(e[0], e[1], { ...sc, cap: 2, dist: 0.05 }, 0.05)) }
  })
  // one or two drips, in the fill, off the lowest bottoms
  if (o.drips) {
    const foot = bottoms(F, Uf, { step: 0.02, facing: 0.88 }).sort((a, b) => a[1] - b[1]), runs = []
    for (const p of foot) { if (runs.length >= o.drips) break; if (runs.some((r) => Math.abs(r[0] - p[0]) < h * 0.6)) continue; runs.push([p[0], p[1] + 0.012, h * (0.12 + rand() * 0.22)]) }
    out.push(...drips(runs, { cap: 1, dist: 0.05, colour: C.fill }, { speed: 1.0, hold: 0.12, hold0: 0.16 }))
  }
  // the V mark, small, down to the right
  if (o.mark !== false) { const bx = { x1: -Infinity, y0: Infinity }; for (const lp of contours(F, Uf, 0, 0.004)) for (const [x, y] of lp) { bx.x1 = Math.max(bx.x1, x); bx.y0 = Math.min(bx.y0, y) } out.push(...vmarkStrokes(bx.x1 + 0.06, bx.y0, h * 0.24, { colour: o.markC ?? C.key })) }
  return sketch(id, name, 'throw-up', out, o.about)
}

/** A bubble throw-up. */
function bubbleThrow(id, name, text, o) {
  const h = o.h ?? 0.8, W = bubbleWord(text, { h, ...o.lay })
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const l of W) for (const P of l.skel) for (const [x, y] of P) { x0 = Math.min(x0, x - l.R); y0 = Math.min(y0, y - l.R); x1 = Math.max(x1, x + l.R); y1 = Math.max(y1, y + l.R) }
  const F = frame(x0 - 0.3, y0 - 0.3, x1 + 0.3, y1 + 0.3, 300)
  const L = W.map((l) => {
    // inflate the skeleton, close (squeezes the gaps into one body), then cut the slits
    let m = maskLT(F, sdf(F, fillMask(F, l.skel)), l.R)
    const c = 0.07 * h; m = maskLT(F, sdf(F, maskLT(F, sdf(F, m), c)), -c)
    if (l.slits.length) m = sub(m, fillMask(F, l.slits))
    let yy = Infinity; for (const P of l.skel) for (const q of P) yy = Math.min(yy, q[1] - l.R)
    return { m, y0: yy, shineIn: 0.06 * h }
  })
  return paintThrow(id, name, F, L, { h, ...o })
}
/** A block throw-up: the straight letters swelled and rounded. */
function blockThrow(id, name, keys, o) {
  const h = o.h ?? 0.7, parts = layWord(keys, STRAIGHT, { h, slant: 0.1, ...o.lay })
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const p of parts) for (const P of p.polys) for (const [x, y] of P) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) }
  const F = frame(x0 - 0.35, y0 - 0.35, x1 + 0.35, y1 + 0.35, 300), sw = (o.swell ?? 0.012) * h, r = (o.round ?? 0.045) * h
  const L = parts.map((p) => {
    let m = fillMask(F, p.polys); if (p.cuts.length) m = sub(m, fillMask(F, p.cuts)); if (p.adds && p.adds.length) m = or(m, fillMask(F, p.adds))
    // swell, then round: grow by r + sw, shrink by r (rounds the inside corners), shrink by r, grow by r (the outside ones)
    m = maskLT(F, sdf(F, maskLT(F, sdf(F, m), sw + r)), -r)
    m = maskLT(F, sdf(F, maskLT(F, sdf(F, m), -r)), r)
    return { m, y0: p.polys.reduce((a, P) => Math.min(a, ...P.map((q) => q[1])), Infinity), shineIn: 0.05 * h }
  })
  return paintThrow(id, name, F, L, { h, ...o })
}

export const THROWUPS = [
  { id: 'throw-vexvoid', make: () => blockThrow('throw-vexvoid', 'VEXVOID', ['V', 'E', 'X', 'V', 'O', 'I', 'D'], { h: 0.62, lay: { kern: [0, -0.06, -0.06, -0.06, -0.05, -0.04, -0.04], lift: [0, 0.03, -0.02, 0.03, 0, 0.03, -0.01] }, key: 0.045, drips: 2,
    about: 'block throw-up: rounded-square VEXVOID, chrome fill, black outline, white keyline and shines' }) },
  { id: 'throw-v3x', make: () => bubbleThrow('throw-v3x', 'V3X', 'V3X', { h: 0.85, lay: { kern: [0, -0.16, -0.14], lift: [0.04, -0.02, 0.03], scale: [1.12, 1, 1.02], tilt: [0.06, -0.04, 0.05] }, colours: { fill: WHITE, shine: CHROME }, shadow: [0.05, -0.065], drips: 1,
    about: 'bubble V3X: white fill, black outline, grey drop shadow, shines' }) },
  { id: 'throw-void', make: () => bubbleThrow('throw-void', 'VOID', 'VOID', { h: 0.8, lay: { kern: [0, -0.14, -0.12, -0.12], lift: [0.03, -0.02, 0.04, -0.01], scale: [1.12, 1, 1, 1.04], tilt: [0.05, -0.05, 0.03, -0.03] }, key: 0.04, low: GREY, drips: 2,
    about: 'bubble VOID: chrome fill with a grey bottom, black outline, white keyline and shines' }) },
  { id: 'throw-npg', make: () => bubbleThrow('throw-npg', 'NPG', 'NPG', { h: 0.85, lay: { kern: [0, -0.15, -0.13], lift: [0.03, -0.02, 0.03], scale: [1.1, 1, 1.04], tilt: [-0.04, 0.05, -0.03] }, colours: { fill: BLACK, line: WHITE, shine: CHROME, key: CHROME }, markC: WHITE, drips: 1,
    about: 'bubble NPG reversed: black fill, white outline, chrome shines' }) },
]
