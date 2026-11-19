// HANDSTYLES, pass 3 (our own hands; see the graffiti skill): a tag is a few fast strokes with the pen leaving the wall
// only at planned points. What makes it read as a hand and not a font:
//   one slant for the whole word; one x-height (the letters' tops line up), a rhythm of repeated forms (both Vs the same
//   gesture, the O and the D the same bowl); connections where the hand runs on into the next letter; a signature
//   (the hooked entry into the first V, the long underline that kicks up at the end); speed you can see: each stroke
//   starts held (paint pools), runs fast on the straights, slows into sharp turns, and FLICKS off (it speeds up at the
//   end and the paint thins out; a spray flick also widens and fades as the can leaves the wall).
// Paths: points in cap-height units, [x, y] or [x, y, 1] = a sharp corner (else the hand rounds through it).
import { stroke, rand, jitter, dot } from './can.mjs'
import { drips, sketch } from './paint.mjs'
import { resample } from './raster.mjs'

const cr = (a, b, c, d, t) => { const t2 = t * t, t3 = t2 * t; return [0, 1].map((j) => 0.5 * (2 * b[j] + (-a[j] + c[j]) * t + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * t2 + (-a[j] + 3 * b[j] - 3 * c[j] + d[j]) * t3)) }
/** A path through points: rounded through ordinary points, sharp at corners ([x, y, 1]). */
export const path = (P, n = 8) => {
  const runs = []; let run = [P[0]]
  for (let i = 1; i < P.length; i++) { run.push(P[i]); if (P[i][2] && i < P.length - 1) { runs.push(run); run = [P[i]] } }
  runs.push(run)
  const out = [[P[0][0], P[0][1]]]
  for (const r of runs) for (let i = 0; i < r.length - 1; i++) { const a = r[Math.max(0, i - 1)], b = r[i], c = r[i + 1], d = r[Math.min(r.length - 1, i + 2)]; for (let k = 1; k <= n; k++) out.push(cr(a, b, c, d, k / n)) }
  return out
}
/**
 * One stroke of the hand: held at the start (it pools), quick on the straights, slower into the turns, flicked off
 * (the last `flick` metres speed up and are painted again a touch further off the wall, fainter: the can leaving).
 */
export function handStroke(P, can, { speed = 2.2, hold0 = 0.06, flick = 0.06, corner = 0.75 } = {}) {
  const p = resample(P, 0.006), L = p.reduce((s, q, i) => s + (i ? Math.hypot(q[0] - p[i - 1][0], q[1] - p[i - 1][1]) : 0), 0)
  const out = [[p[0][0], p[0][1], 0]]; let t = 0, along = 0
  if (hold0) { t += hold0; out.push([p[0][0], p[0][1], t]) }
  for (let i = 1; i < p.length; i++) {
    const d = Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); along += d
    let turn = 0
    if (i < p.length - 1) { const ax = p[i][0] - p[i - 1][0], ay = p[i][1] - p[i - 1][1], bx = p[i + 1][0] - p[i][0], by = p[i + 1][1] - p[i][1]; turn = Math.acos(Math.max(-1, Math.min(1, (ax * bx + ay * by) / ((Math.hypot(ax, ay) * Math.hypot(bx, by)) || 1)))) / Math.PI }
    let v = speed * (1 - corner * Math.min(1, turn * 5) * 0.75)
    v *= 0.5 + 0.5 * Math.min(1, along / 0.05)                         // gets going
    if (L - along < flick) v *= 1 + 1.2 * (1 - (L - along) / flick)      // flicks off
    t += d / Math.max(0.05, v); out.push([p[i][0], p[i][1], t])
  }
  const s = stroke([[0, 0]], can); s.pts = out.map(([x, y, tt]) => [Math.round(x * 1e4) / 1e4, Math.round(y * 1e4) / 1e4, +tt.toFixed(3)])
  const res = [s]
  if (flick > 0 && L > flick * 2) {
    // the tail again, off the wall: wider, softer, fainter, carried on a little past the end
    const tail = p.slice(Math.max(0, p.length - Math.round(flick / 0.006))), e = tail[tail.length - 1], b = tail[Math.max(0, tail.length - 4)]
    const u = [e[0] - b[0], e[1] - b[1]], ul = Math.hypot(...u) || 1
    tail.push([e[0] + u[0] / ul * flick * 0.5, e[1] + u[1] / ul * flick * 0.5])
    res.push(stroke(tail, { ...can, dist: can.dist * 1.9, pressure: 0.45 }, { speed: speed * 2.2, corner: 0, step: 0.01 }))
  }
  return res
}

/**
 * A tag from a hand: word = { s: [{ p, speed?, hold0?, flick? }], feet?: [[x, y]] } in cap units. o: h (m), slant,
 * colour, cap, dist, speed, drips (how many of the feet run), extra(T, can).
 */
export function handTag(id, name, word, o) {
  const h = o.h, k = o.slant ?? 0.2, sx = o.sx ?? 1, T = ([u, v]) => [(u * sx + v * k) * h, v * h]   // sx < 1: a compressed, taller-looking hand
  const can = { cap: o.cap ?? 1, dist: o.dist ?? 0.06, colour: o.colour }
  const out = []
  for (const st of word.s) out.push(...handStroke(path(st.p).map(T), { ...can, ...(st.can || {}) }, { speed: (o.speed ?? 2.4) * (st.speed ?? 1), hold0: st.hold0 ?? 0.07, flick: (st.flick ?? 0.12) * h, corner: o.corner ?? 0.75 }))
  for (const d of word.dots || []) { const [x, y] = T(d); out.push(dot(x, y, { ...can, dist: can.dist * 1.2 }, 0.08)) }
  const runs = (word.feet || []).slice(0, o.drips ?? 1).map(([u, v], i) => { const [x, y] = T([u, v]); return [x + jitter(0.004), y + 0.008, h * (0.1 + 0.16 * ((i * 7) % 3) / 2)] })
  out.push(...drips(runs, { cap: 1, dist: 0.05, colour: can.colour }, { speed: 0.9, hold: 0.1, up: 0.0 }))
  if (o.extra) out.push(...o.extra(T, can))
  return sketch(id, name, 'tag', out, o.about)
}

// ---- the VexVoid hand: tall, compressed, sharp at the bottoms of the Vs, round in the bowls ----
// VEXVOID in four pen lifts: (1) hooked entry, V, on into a looped E; (2) X's long fall to a descender, the second
// diagonal; (3) V on into O, on into I; (4) D, its bowl carried on into the underline that runs back and kicks up.
export const VEXVOID = { s: [
  { p: [[-0.14, 0.88], [-0.07, 1.06], [0.02, 1.0, 1], [0.24, 0.0, 1], [0.48, 1.02, 1], [0.8, 1.03], [0.64, 0.9], [0.6, 0.66], [0.74, 0.54, 1], [0.6, 0.48], [0.56, 0.2], [0.66, 0.02], [0.9, 0.05]], hold0: 0.1, flick: 0.1 },
  { p: [[1.0, 1.02, 1], [1.44, -0.02], [1.52, -0.24]], hold0: 0.06, flick: 0.14 },
  { p: [[1.44, 1.04, 1], [1.0, 0.0]], hold0: 0.04, flick: 0.1 },
  { p: [[1.58, 1.02, 1], [1.78, 0.0, 1], [1.98, 1.0, 1], [2.18, 1.03], [2.06, 0.7], [2.06, 0.16], [2.18, 0.0], [2.34, 0.3], [2.34, 0.78], [2.24, 1.02], [2.1, 0.97]], hold0: 0.08, flick: 0.06 },
  { p: [[2.5, 1.04, 1], [2.48, 0.0]], hold0: 0.05, flick: 0.06 },
  { p: [[2.66, 1.04, 1], [2.64, 0.02, 1], [2.65, 1.0, 1], [2.88, 1.02], [3.06, 0.7], [3.04, 0.22], [2.86, 0.02], [2.6, 0.0], [1.8, -0.26], [0.6, -0.3], [-0.06, -0.24], [-0.2, -0.04]], hold0: 0.08, flick: 0.18, speed: 1.15 },
  { p: [[2.46, 1.2, 1], [2.6, 1.3]], hold0: 0.03, flick: 0.04, speed: 0.7 },
], feet: [[0.24, 0.0]] }

// V3X: the V's right arm runs straight on into the 3 (two sharp bowls), the X's fall carried on into a long kick; a
// crown of three thorns over the V
export const V3X = { s: [
  { p: [[-0.1, 1.08], [0.0, 1.0, 1], [0.24, 0.0, 1], [0.48, 1.02, 1], [0.86, 1.02, 1], [0.62, 0.58, 1], [0.9, 0.48], [0.9, 0.14], [0.68, 0.0], [0.46, 0.08]], hold0: 0.1, flick: 0.1 },
  { p: [[1.04, 1.04, 1], [1.46, -0.02], [1.68, -0.2]], hold0: 0.05, flick: 0.18 },
  { p: [[1.48, 1.04, 1], [1.0, 0.0]], hold0: 0.05, flick: 0.1 },
  { p: [[0.06, 1.22, 1], [-0.04, 1.44]], hold0: 0.03, flick: 0.06, speed: 0.8 }, { p: [[0.2, 1.22, 1], [0.22, 1.52]], hold0: 0.03, flick: 0.06, speed: 0.8 }, { p: [[0.34, 1.22, 1], [0.44, 1.44]], hold0: 0.03, flick: 0.06, speed: 0.8 },
], feet: [[0.24, 0.0]] }

// VOID: one pull V into O, across the top into I; the D on its own, its bowl swung on into an underline that flicks up
export const VOIDW = { s: [
  { p: [[-0.12, 0.9], [-0.05, 1.06], [0.03, 1.0, 1], [0.24, 0.0, 1], [0.46, 1.0, 1], [0.66, 1.03], [0.54, 0.66], [0.54, 0.14], [0.66, 0.0], [0.82, 0.3], [0.82, 0.78], [0.72, 1.02], [0.58, 0.97, 1], [1.0, 1.04, 1], [0.98, 0.0]], hold0: 0.1, flick: 0.06 },
  { p: [[1.16, 1.04, 1], [1.14, 0.02, 1], [1.15, 1.0, 1], [1.38, 1.02], [1.56, 0.7], [1.54, 0.22], [1.36, 0.02], [1.1, 0.0], [0.5, -0.24], [-0.04, -0.22], [-0.16, -0.02]], hold0: 0.08, flick: 0.16, speed: 1.1 },
], feet: [[0.24, 0.0]] }

// NPG: N straight on into P, the G closed with a spike, an arrow under it
export const NPG = { s: [
  { p: [[0.0, 0.0, 1], [0.02, 1.02, 1], [0.42, 0.0, 1], [0.46, 1.04, 1], [0.62, 1.04, 1], [0.62, 0.0, 1], [0.63, 1.0, 1], [0.88, 1.0], [0.96, 0.76], [0.86, 0.54], [0.64, 0.5]], hold0: 0.1, flick: 0.06 },
  { p: [[1.42, 0.86], [1.26, 1.02], [1.08, 0.84], [1.06, 0.2], [1.22, 0.0], [1.4, 0.12], [1.42, 0.44, 1], [1.24, 0.46, 1], [1.62, 0.46]], hold0: 0.08, flick: 0.12 },
  { p: [[-0.1, -0.2], [0.8, -0.18], [1.52, -0.14, 1], [1.42, -0.04, 1], [1.66, -0.16, 1], [1.44, -0.28]], hold0: 0.05, flick: 0.06, speed: 1.2 },
], feet: [[0.0, 0.0]] }
