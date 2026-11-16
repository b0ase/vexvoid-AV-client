// From vector layers to a writer's passes: masks and fields for each layer, then the strokes a writer would make for
// them (fog, fill passes, crisp edges, outlines that go under what is in front, the 3D block, highlights, drips, chips).
import { frame, fill, or, sub, sdf, at, contours, hatch, visibleRuns, sweep, len, resample, area } from './raster.mjs'
import { stroke, dot, rand, jitter } from './can.mjs'
import { box } from './shapes.mjs'

/** Masks and fields of a set of letters (back to front). Each letter: { polys, cuts? } (cuts are taken out of it). */
export function prepare(letters, { margin = 0.4, extra = [] } = {}) {
  const b = box(letters.flatMap((l) => l.polys).concat(extra))
  const F = frame(b.x0 - margin, b.y0 - margin, b.x1 + margin, b.y1 + margin)
  const L = letters.map((l) => { let m = fill(F, l.polys); if (l.cuts && l.cuts.length) m = sub(m, fill(F, l.cuts)); return { ...l, m } })
  const U = or(...L.map((l) => l.m))
  for (const l of L) l.f = sdf(F, l.m)
  const Uf = sdf(F, U)
  // what is in front of each letter
  for (let i = 0; i < L.length; i++) { const fr = L.slice(i + 1).map((l) => l.m); L[i].front = fr.length ? sdf(F, or(...fr)) : null }
  return { F, L, U, Uf }
}
export const field = (F, m) => sdf(F, m)

/** The outward direction of a field at a point (its gradient, unit length). */
export const grad = (F, f, x, y, h = 0.006) => { const gx = at(F, f, x + h, y) - at(F, f, x - h, y), gy = at(F, f, x, y + h) - at(F, f, x, y - h), L = Math.hypot(gx, gy) || 1; return [gx / L, gy / L] }
// a loop started at its top left (where a writer starts an outline), going round the way it is drawn
const fromTopLeft = (loop) => {
  let best = 0; loop.forEach((p, i) => { if (p[1] - p[0] * 0.5 > loop[best][1] - loop[best][0] * 0.5) best = i })
  const l = loop.slice(best).concat(loop.slice(0, best)); l.push(l[0]); return l
}

/** Fill passes over a field (zig-zags of a fat cap). */
export const fillPass = (F, f, can, o = {}) => hatch(F, f, { gap: o.gap ?? 0.09, inset: o.inset ?? 0.06, ang: o.ang ?? 0, keep: o.keep })
  .map((p) => stroke(p, can, { speed: o.speed ?? 1.5, corner: 0.2, step: 0.03 }))
/** The edge of a field cut crisp, `inset` inside it, in the fill colour (closed loops). */
export const edgePass = (F, f, inset, can, o = {}) => contours(F, f, -inset, 0.002).filter((l) => len(l.concat([l[0]])) > (o.min ?? 0.06))
  .map((l) => stroke(fromTopLeft(l), can, { speed: o.speed ?? 0.9, corner: o.corner ?? 0.6, step: 0.01 }))
/** Outlines of the letters, each going under the letters in front of it. */
export const outlines = (F, L, can, o = {}) => {
  const out = [], gap = o.gap ?? 0.004
  for (const l of L) {
    for (const loop of contours(F, l.f, o.level ?? 0, 0.0015)) {
      const runs = l.front ? visibleRuns(loop, (x, y) => at(F, l.front, x, y) > gap) : [fromTopLeft(loop)]
      for (const r of runs) if (len(r) > 0.02) out.push(stroke(r, can, { speed: o.speed ?? 0.6, corner: 0.7, step: 0.008 }))
    }
  }
  return out
}
/** Any loops of a field, as outline strokes, kept where keep(x, y). */
export const lines = (F, f, can, o = {}) => {
  const out = []
  for (const loop of contours(F, f, o.level ?? 0, 0.0015)) {
    const runs = o.keep ? visibleRuns(loop, o.keep) : [fromTopLeft(loop)]
    for (const r of runs) if (len(r) > (o.min ?? 0.02)) out.push(stroke(r, can, { speed: o.speed ?? 0.6, corner: 0.7, step: 0.008 }))
  }
  return out
}
/** The 3D block: the union swept along d, less the union. Returns its mask and field. */
export const block = (F, U, d) => { const B = sub(sweep(F, U, d[0], d[1]), U); return { m: B, f: sdf(F, B) } }

/** Highlights: short skinny strokes just inside the edges that face the light (normal toward `light`). */
export const highlights = (F, f, can, o = {}) => {
  const inset = o.inset ?? 0.03, light = o.light ?? [-0.6, 0.8], minLen = o.min ?? 0.05, maxLen = o.max ?? 0.4, out = []
  for (const loop of contours(F, f, -inset, 0.002)) {
    const p = resample(loop.concat([loop[0]]), 0.01), facing = []
    for (const q of p) { const [nx, ny] = grad(F, f, q[0], q[1]); facing.push(nx * light[0] + ny * light[1] > (o.facing ?? 0.55)) }
    let run = []
    const flush = () => { if (run.length > 2 && len(run) >= minLen) { let r = run; if (len(r) > maxLen) { const k = Math.floor(rand() * 0.3 * r.length); r = r.slice(k, k + Math.round(maxLen / 0.01)) } out.push(stroke(r, can, { speed: o.speed ?? 0.5, corner: 0.5, step: 0.008, ease: 0.04 })) } run = [] }
    p.forEach((q, i) => { if (facing[i] && (!o.keep || o.keep(q[0], q[1]))) run.push(q); else flush() })
    flush()
  }
  return out
}

/** Bottom edges of a field: where its outline faces down, as [x, y] points every `step` metres. */
export const bottoms = (F, f, { step = 0.03, facing = 0.75, keep = null } = {}) => {
  const out = []
  for (const loop of contours(F, f, 0, 0.002)) {
    const p = resample(loop.concat([loop[0]]), step)
    for (let i = 0; i < p.length - 1; i++) { const ny = grad(F, f, p[i][0], p[i][1])[1]; if (ny < -facing && (!keep || keep(p[i][0], p[i][1]))) out.push(p[i]) }
  }
  return out
}
/** Drips: thin runs down from points, each ending in a held drop. */
export const drips = (pts, can, o = {}) => pts.map(([x, y, l]) => {
  const n = Math.max(2, Math.round(l / 0.04)), path = []
  for (let i = 0; i <= n; i++) path.push([x + Math.sin(i * 0.9 + x * 30) * 0.002, y - l * i / n])
  return stroke([[x, y + (o.up ?? 0.03)], ...path], can, { speed: o.speed ?? 0.7, corner: 0, step: 0.02, hold0: o.hold0 ?? 0, hold1: o.hold ?? 0.3 })
})
/** Chips: little holes knocked into the paint (the buff can), or specks in a colour, scattered where keep holds. */
export const scatter = (F, n, keep, mk, tries = 40) => {
  const out = []
  for (let k = 0; k < n; k++) for (let t = 0; t < tries; t++) {
    const x = F.x0 + rand() * (F.x1 - F.x0), y = F.y0 + rand() * (F.y1 - F.y0)
    if (keep(x, y)) { out.push(mk(x, y, k)); break }
  }
  return out
}
export { stroke, dot, rand, jitter }

// fewer points where the line runs straight at a steady pace (Douglas-Peucker on x, y and time), always keeping the
// held-still points and the ends
const thin = (p, tol = 0.0012) => {
  if (p.length < 4) return p
  const keep = new Uint8Array(p.length); keep[0] = keep[p.length - 1] = 1
  for (let i = 1; i < p.length; i++) if (p[i][0] === p[i - 1][0] && p[i][1] === p[i - 1][1]) keep[i] = keep[i - 1] = 1
  const st = [[0, p.length - 1]]
  while (st.length) {
    const [a, b] = st.pop(); if (b - a < 2) continue
    let best = -1, bd = tol
    const T = p[b][2] - p[a][2] || 1e-6
    for (let i = a + 1; i < b; i++) {
      const u = (p[i][2] - p[a][2]) / T, ex = p[a][0] + (p[b][0] - p[a][0]) * u, ey = p[a][1] + (p[b][1] - p[a][1]) * u
      const d = Math.hypot(p[i][0] - ex, p[i][1] - ey); if (d > bd) { bd = d; best = i }
    }
    if (best > 0) { keep[best] = 1; st.push([a, best], [best, b]) }
  }
  // split at every kept point so the held ones stay
  return p.filter((_, i) => keep[i])
}
/** A sketch: strokes moved so the paint's bottom left is at 0,0, with room for the widest line. */
export const sketch = (id, name, kind, strokes, about) => {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const s of strokes) for (const [x, y] of s.pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) }
  const m = 0.08
  for (const s of strokes) s.pts = thin(s.pts).map(([x, y, t]) => [+(x - x0 + m).toFixed(3), +(y - y0 + m).toFixed(3), +t.toFixed(2)])
  return { id, name, kind, about, w: +(x1 - x0 + 2 * m).toFixed(3), h: +(y1 - y0 + 2 * m).toFixed(3), strokes }
}
