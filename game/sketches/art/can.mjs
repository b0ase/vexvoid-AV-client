// Strokes the way a writer moves the can: points over time, slower into corners and tight curves, quicker on the
// straights, a held can at the start or end where the paint should pool (and maybe run). The colours are the can's.
import { resample } from './raster.mjs'

export const WHITE = '#f4f4f4', GREY = '#9a9a9e', BLACK = '#0c0c0e', CHROME = '#c9ccd2'

let seed = 7919
export const reseed = (s) => { seed = s }
const nextSeed = () => (seed = (seed * 48271) % 2147483647)
// a small steady random for the art (not the can's own, which comes from each stroke's seed)
let rs = 1
export const rand = () => { rs = (rs * 16807) % 2147483647; return (rs - 1) / 2147483646 }
export const randSeed = (s) => { rs = s }
export const jitter = (a) => (rand() * 2 - 1) * a

/**
 * One stroke. pts: [x, y] metres. can: { cap, dist, colour, pressure, buff }. o.speed: m/s on a straight; o.corner: how
 * much the can slows into a corner (0 none .. 1 a lot); o.hold0 / o.hold1: seconds held still at the start / end;
 * o.step: the spacing of the points kept; o.ease: speed up from the start and slow to the end (a pull) over this many m.
 */
export function stroke(pts, can, o = {}) {
  const speed = o.speed ?? 1, corner = o.corner ?? 0.5, step = o.step ?? 0.012
  const p = pts.length > 1 ? resample(pts, step) : [pts[0], [pts[0][0] + 0.002, pts[0][1]]]
  const out = []; let t = 0
  const r3 = (n) => Math.round(n * 1e4) / 1e4
  out.push([r3(p[0][0]), r3(p[0][1]), 0])
  if (o.hold0) { t += o.hold0; out.push([r3(p[0][0]), r3(p[0][1]), +t.toFixed(3)]) }
  const L = p.reduce((s, q, i) => s + (i ? Math.hypot(q[0] - p[i - 1][0], q[1] - p[i - 1][1]) : 0), 0)
  let along = 0
  for (let i = 1; i < p.length; i++) {
    const d = Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); along += d
    // the turn at this point: slower where the line bends
    let turn = 0
    if (i < p.length - 1) {
      const ax = p[i][0] - p[i - 1][0], ay = p[i][1] - p[i - 1][1], bx = p[i + 1][0] - p[i][0], by = p[i + 1][1] - p[i][1]
      const la = Math.hypot(ax, ay) || 1, lb = Math.hypot(bx, by) || 1
      turn = Math.acos(Math.max(-1, Math.min(1, (ax * bx + ay * by) / (la * lb)))) / Math.PI
    }
    let v = speed * (1 - corner * Math.min(1, turn * 4) * 0.7)
    if (o.ease) { const e = Math.min(1, along / o.ease, (L - along) / o.ease + 0.25); v *= 0.45 + 0.55 * Math.max(0, e) }
    t += d / Math.max(0.05, v)
    out.push([r3(p[i][0]), r3(p[i][1]), +t.toFixed(3)])
  }
  if (o.hold1) { const q = out[out.length - 1]; t += o.hold1; out.push([q[0], q[1], +t.toFixed(3)]) }
  const s = { cap: can.cap, dist: can.dist ?? 0.2, colour: can.colour, pressure: can.pressure ?? 1, seed: nextSeed(), pts: out }
  if (can.buff) s.buff = true
  return s
}
/** A dot: the can pressed for a moment. */
export const dot = (x, y, can, hold = 0.06) => stroke([[x, y], [x + 0.001, y]], can, { speed: 0.5, hold1: hold })
