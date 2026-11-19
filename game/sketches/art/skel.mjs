// Letter SKELETONS (pass 3): letters built the way writers build them, from BARS of one weight. A bar is a centre line
// swelled to a width, with each end finished one way: square, sliced at the piece's one cutting angle, brought to a
// point, rounded, or grown into an arrow (the arrow continues the bar's own direction and width before its head).
// Shapes are polygons in letter units (cap height 1, y up); masks, unions and counters happen on the raster
// (raster.mjs), so overlapping bars simply merge.
//
//   bar(pts, w, { a, b })      a thick polyline, mitred joins; a / b: how each end is finished (see end())
//   clipHalf(poly, p, d)       a polygon cut by the line through p along d (keeps the left side)
//   chamfer(x0, y0, x1, y1, c) a rectangle with its corners cut at 45 degrees (c: one size or [bl, br, tr, tl])
//   arrowHead(...)             the piece's one arrow shape
import { bez } from './shapes.mjs'

export const unit = (d) => { const L = Math.hypot(d[0], d[1]) || 1; return [d[0] / L, d[1] / L] }
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k]
const perp = (u) => [-u[1], u[0]]
const cross = (a, b) => a[0] * b[1] - a[1] * b[0]
const meet = (p, d, q, e) => { const den = cross(d, e); if (Math.abs(den) < 1e-9) return null; const t = cross([q[0] - p[0], q[1] - p[1]], e) / den; return [p[0] + d[0] * t, p[1] + d[1] * t] }

/** The polygon cut by the line through p along d: keeps what is on the LEFT of d (Sutherland-Hodgman). */
export const clipHalf = (P, p, d) => {
  const side = (q) => cross(d, [q[0] - p[0], q[1] - p[1]]), out = []
  for (let i = 0; i < P.length; i++) {
    const a = P[i], b = P[(i + 1) % P.length], sa = side(a), sb = side(b)
    if (sa >= 0) out.push(a)
    if ((sa >= 0) !== (sb >= 0)) { const t = sa / (sa - sb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]) }
  }
  return out
}
/** A rectangle with its corners chamfered (bottom-left, bottom-right, top-right, top-left). */
export const chamfer = (x0, y0, x1, y1, c = 0) => {
  const [a, b, cc, d] = Array.isArray(c) ? c : [c, c, c, c], out = []
  const pt = (x, y) => out.push([x, y])
  if (a) { pt(x0, y0 + a); pt(x0 + a, y0) } else pt(x0, y0)
  if (b) { pt(x1 - b, y0); pt(x1, y0 + b) } else pt(x1, y0)
  if (cc) { pt(x1, y1 - cc); pt(x1 - cc, y1) } else pt(x1, y1)
  if (d) { pt(x0 + d, y1); pt(x0, y1 - d) } else pt(x0, y1)
  return out
}
export const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]

/**
 * The piece's arrow: tip at `tip`, pointing along u, `len` long, `wide` across the barbs; its back edges swept back
 * (`sweep` 0 = a flat back, 0.35 = barbs swept back past the notch). Every arrow in a piece uses the same proportions.
 */
export const arrowHead = (tip, u, len, wide, sweep = 0.28) => {
  const n = perp(u), back = add(tip, u, -len), notch = add(tip, u, -len * (1 - sweep))
  return [tip, add(add(back, n, wide / 2), u, -len * sweep * 0.6), notch, add(add(back, n, -wide / 2), u, -len * sweep * 0.6)]
}

/**
 * A bar: the polyline pts swelled to w (a number, or one width per point), mitred at the joins. Each end:
 *   null            square
 *   { cut: [dx,dy] } sliced along that direction (through the end point)
 *   { point: len }  brought to a point len past the end
 *   { round: true } a half circle
 *   { arrow: { len, wide, shaft } } the bar runs on `shaft` further, then an arrowhead
 * Returns polygons (one for the body, plus any heads / round ends).
 */
export function bar(pts, w, { a = null, b = null, miter = 3 } = {}) {
  const n = pts.length, ws = Array.isArray(w) ? w : pts.map(() => w), polys = []
  const P = pts.map((p) => p.slice())
  // an arrow end: extend the bar along its last direction, then put a head on it
  const heads = []
  const arrowEnd = (i0, i1, e, setEnd) => {
    const u = unit([P[i1][0] - P[i0][0], P[i1][1] - P[i0][1]]), { len = 0.4, wide = 0.6, shaft = 0.12, sweep = 0.28 } = e.arrow
    const s = add(P[i1], u, shaft); setEnd(s)
    heads.push(arrowHead(add(s, u, len), u, len + 0.02, wide, sweep))
  }
  if (b && b.arrow) arrowEnd(n - 2, n - 1, b, (s) => { P[n - 1] = s })
  if (a && a.arrow) arrowEnd(1, 0, a, (s) => { P[0] = s })
  const L = [], R = []
  for (let i = 0; i < n; i++) {
    const hw = ws[i] / 2
    const din = i > 0 ? unit([P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]]) : null
    const dout = i < n - 1 ? unit([P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1]]) : null
    if (!din || !dout) { const u = din || dout, nn = perp(u); L.push(add(P[i], nn, hw)); R.push(add(P[i], nn, -hw)); continue }
    const n1 = perp(din), n2 = perp(dout)
    const l = meet(add(P[i], n1, hw), din, add(P[i], n2, hw), dout), r = meet(add(P[i], n1, -hw), din, add(P[i], n2, -hw), dout)
    const ok = (q) => q && Math.hypot(q[0] - P[i][0], q[1] - P[i][1]) < hw * miter
    if (ok(l) && ok(r)) { L.push(l); R.push(r) }
    else { // too sharp a turn for a mitre: a bevel on the outside
      L.push(add(P[i], n1, hw), add(P[i], n2, hw)); R.push(add(P[i], n1, -hw), add(P[i], n2, -hw))
    }
  }
  let body = [...L, ...R.slice().reverse()]
  const finish = (e, at, u) => {   // u: pointing out of the bar at this end
    if (!e || e.arrow) return
    if (e.cut) {
      // slice: extend first so the slice crosses the whole width, then cut along e.cut through the end point
      const d = unit(e.cut), keep = cross(d, u) > 0 ? -1 : 1
      body = clipHalf(body, at, keep > 0 ? d : [-d[0], -d[1]])
    } else if (e.point) {
      const hw = (at === P[0] ? ws[0] : ws[n - 1]) / 2, nn = perp(u)
      polys.push([add(at, nn, hw), add(at, u, e.point), add(at, nn, -hw)])
    } else if (e.round) {
      const hw = (at === P[0] ? ws[0] : ws[n - 1]) / 2, c = []
      for (let k = 0; k <= 16; k++) { const t = -Math.PI / 2 + Math.PI * k / 16, nn = perp(u); c.push(add(add(at, u, Math.cos(t) * hw), nn, Math.sin(t) * hw)) }
      polys.push(c)
    }
  }
  // extend the ends that get sliced, so the slice is clean whichever way it leans
  if (a && a.cut) { const u = unit([P[0][0] - P[1][0], P[0][1] - P[1][1]]), w0 = ws[0]; body = extendEnd(body, 0, n, u, w0) }
  if (b && b.cut) { const u = unit([P[n - 1][0] - P[n - 2][0], P[n - 1][1] - P[n - 2][1]]), w1 = ws[n - 1]; body = extendEnd(body, 1, n, u, w1) }
  finish(a, P[0], unit([P[0][0] - P[1][0], P[0][1] - P[1][1]]))
  finish(b, P[n - 1], unit([P[n - 1][0] - P[n - 2][0], P[n - 1][1] - P[n - 2][1]]))
  return [body, ...polys, ...heads]
}
// the body's end points (first / last L and R) pushed out along u by w (before slicing)
function extendEnd(body, which, n, u, w) {
  const out = body.map((p) => p.slice()), m = out.length
  // the body is L[0..] then R reversed: L[0] = out[0], R[0] = out[m-1]; L[last] = out[k], R[last] = out[k+1]
  const k = m / 2 - 1
  if (which === 0) { out[0] = add(out[0], u, w); out[m - 1] = add(out[m - 1], u, w) }
  else { out[k] = add(out[k], u, w); out[k + 1] = add(out[k + 1], u, w) }
  return out
}

/** A curved bar along the Bezier through ctrl (sampled), widths ws spread along it; ends as bar(). */
export const curveBar = (ctrl, ws, ends = {}, n = 28) => {
  const pts = Array.from({ length: n + 1 }, (_, i) => bez(ctrl, i / n))
  const w = Array.isArray(ws) ? pts.map((_, i) => { const f = i / n * (ws.length - 1), j = Math.min(ws.length - 2, Math.floor(f)), u = f - j; return ws[j] + (ws[j + 1] - ws[j]) * u }) : ws
  return bar(pts, w, { ...ends, miter: 6 })
}
/** Points along a Bezier (for skeleton guides). */
export const bezPts = (ctrl, n = 24) => Array.from({ length: n + 1 }, (_, i) => bez(ctrl, i / n))
