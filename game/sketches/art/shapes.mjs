// Shape primitives for letterforms: polygons in metres (y up). A letter is a list of polygons ORed together.
export const P = (...pts) => pts
export const move = (polys, dx, dy) => polys.map((p) => p.map(([x, y]) => [x + dx, y + dy]))
export const scale = (polys, sx, sy = sx, ox = 0, oy = 0) => polys.map((p) => p.map(([x, y]) => [ox + (x - ox) * sx, oy + (y - oy) * sy]))
export const slant = (polys, k, y0 = 0) => polys.map((p) => p.map(([x, y]) => [x + (y - y0) * k, y]))
export const rotate = (polys, a, cx = 0, cy = 0) => { const c = Math.cos(a), s = Math.sin(a); return polys.map((p) => p.map(([x, y]) => [cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c])) }
export const mapPts = (polys, f) => polys.map((p) => p.map(f))
export const box = (polys) => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const p of polys) for (const [x, y] of p) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) } return { x0, y0, x1, y1 } }

export const arcPts = (cx, cy, rx, ry, a0, a1, n = 12) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry] })
/** A rectangle with round corners: r one radius, or [bottom-left, bottom-right, top-right, top-left]. */
export const rrect = (x0, y0, x1, y1, r = 0, n = 10) => {
  const [a, b, c, d] = Array.isArray(r) ? r : [r, r, r, r], H = Math.PI / 2, out = []
  const corner = (cx, cy, rr, from) => { if (rr <= 0) { out.push([cx, cy]); return } out.push(...arcPts(cx + (from === 0 ? rr : from === 1 ? -rr : from === 2 ? -rr : rr), cy + (from < 2 ? rr : -rr), rr, rr, [2 * H, 3 * H, 0, H][from], [3 * H, 4 * H, H, 2 * H][from], n)) }
  corner(x0, y0, a, 0); corner(x1, y0, b, 1); corner(x1, y1, c, 2); corner(x0, y1, d, 3)
  return out
}
export const ellipse = (cx, cy, rx, ry, n = 48) => arcPts(cx, cy, rx, ry, 0, Math.PI * 2, n).slice(0, -1)
/** A bar from a to b, w wide. Each end: a number = how far a point sticks out past it (0 square), or {cut: angle}. */
export const bar = (a, b, w, ea = 0, eb = 0) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, nx = -uy * w / 2, ny = ux * w / 2
  const end = (p, e, sgn) => {
    const l = [p[0] + nx, p[1] + ny], r = [p[0] - nx, p[1] - ny]
    if (typeof e === 'number' && e > 0) return sgn > 0 ? [l, [p[0] + ux * e, p[1] + uy * e], r] : [r, [p[0] - ux * e, p[1] - uy * e], l]
    if (e && e.cut != null) { const k = Math.tan(e.cut) * w / 2, L2 = [l[0] + ux * k * sgn, l[1] + uy * k * sgn], R2 = [r[0] - ux * k * sgn, r[1] - uy * k * sgn]; return sgn > 0 ? [L2, R2] : [R2, L2] }
    return sgn > 0 ? [l, r] : [r, l]
  }
  return [...end(a, ea, -1), ...end(b, eb, 1)]
}
/** A tapering spike from a base (two points) to a tip. */
export const spike = (b0, b1, tip) => [b0, tip, b1]
/** A thick polyline (a skeleton swelled to w), its ends cut square, as one polygon per segment plus round joints. */
export const thick = (pts, w, n = 10) => {
  const out = []
  for (let i = 1; i < pts.length; i++) out.push(bar(pts[i - 1], pts[i], w))
  for (let i = 1; i < pts.length - 1; i++) out.push(ellipse(pts[i][0], pts[i][1], w / 2, w / 2, n))
  return out
}

// where the line p + t*d meets the line q + s*e
const meet = (p, d, q, e) => { const den = d[0] * e[1] - d[1] * e[0]; if (Math.abs(den) < 1e-9) return null; const t = ((q[0] - p[0]) * e[1] - (q[1] - p[1]) * e[0]) / den; return [p[0] + d[0] * t, p[1] + d[1] * t] }
/**
 * A blade: a bar from a to b, w wide, its ends cut along a set direction (the piece's one cutting angle, so every
 * terminal is sliced the same way), or brought to a point. end: { cut: [dx, dy] } | { point: length } | null (square).
 */
export const blade = (a, b, w, ea = null, eb = null) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), u = [dx / L, dy / L], n = [-u[1] * w / 2, u[0] * w / 2]
  const sideL = [a[0] + n[0], a[1] + n[1]], sideR = [a[0] - n[0], a[1] - n[1]]
  const ends = (p, e, sgn) => {
    if (e && e.point) return [[p[0] + n[0], p[1] + n[1]], [p[0] + u[0] * e.point * sgn, p[1] + u[1] * e.point * sgn], [p[0] - n[0], p[1] - n[1]]]
    if (e && e.cut) { const l = meet(sideL, u, p, e.cut) || [p[0] + n[0], p[1] + n[1]], r = meet(sideR, u, p, e.cut) || [p[0] - n[0], p[1] - n[1]]; return [l, r] }
    return [[p[0] + n[0], p[1] + n[1]], [p[0] - n[0], p[1] - n[1]]]
  }
  const A = ends(a, ea, -1), B = ends(b, eb, 1)
  // a's points run left side to right side; b's too: the polygon goes a(right..left) then b(left..right)
  return [...A.slice().reverse(), ...B]
}
/** A cut: a thin wedge from just outside an edge at p, in along dir, len long, w wide at its mouth. */
export const wedge = (p, dir, len, w) => { const L = Math.hypot(dir[0], dir[1]), u = [dir[0] / L, dir[1] / L], n = [-u[1] * w / 2, u[0] * w / 2], m = [p[0] - u[0] * 0.06, p[1] - u[1] * 0.06]; return [[m[0] + n[0], m[1] + n[1]], [p[0] + u[0] * len, p[1] + u[1] * len], [m[0] - n[0], m[1] - n[1]]] }
/** An arrowhead with its tip at `tip`, pointing along dir, `len` long and `wide` across its barbs, notched behind. */
export const arrowHead = (tip, dir, len, wide, notch = 0.35) => { const L = Math.hypot(dir[0], dir[1]), u = [dir[0] / L, dir[1] / L], n = [-u[1], u[0]], b = [tip[0] - u[0] * len, tip[1] - u[1] * len], c = [tip[0] - u[0] * len * (1 - notch), tip[1] - u[1] * len * (1 - notch)]; return [tip, [b[0] + n[0] * wide / 2, b[1] + n[1] * wide / 2], c, [b[0] - n[0] * wide / 2, b[1] - n[1] * wide / 2]] }
