// Vector layers as masks: polygons filled onto a fine grid (RES px per metre), unions and cuts, a signed distance field,
// clean outlines (marching squares on the field, then Douglas-Peucker so straight edges stay straight and corners sharp)
// and fill passes. Everything in metres, y up, like a wall.
export const RES = 400   // 2.5 mm a cell: well under the finest line the can makes (about 1.6 cm)

// a frame: the box every mask of one sketch shares
export const frame = (x0, y0, x1, y1, res = RES) => {
  const nx = Math.ceil((x1 - x0) * res) + 1, ny = Math.ceil((y1 - y0) * res) + 1
  return { x0, y0, x1, y1, res, nx, ny, mask: () => new Uint8Array(nx * ny) }
}

// polygons (each a list of [x, y]) filled even-odd per polygon, ORed into the mask
export const fill = (F, polys, m = F.mask(), val = 1) => {
  for (const P of polys) {
    if (!P || P.length < 3) continue
    let ya = Infinity, yb = -Infinity; for (const p of P) { ya = Math.min(ya, p[1]); yb = Math.max(yb, p[1]) }
    const j0 = Math.max(0, Math.floor((ya - F.y0) * F.res)), j1 = Math.min(F.ny - 1, Math.ceil((yb - F.y0) * F.res))
    const xs = []
    for (let j = j0; j <= j1; j++) {
      const y = F.y0 + (j + 0.5) / F.res; xs.length = 0
      for (let i = 0, k = P.length - 1; i < P.length; k = i++) {
        const a = P[k], b = P[i]
        if ((a[1] > y) !== (b[1] > y)) xs.push(a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]))
      }
      xs.sort((p, q) => p - q)
      for (let k = 0; k + 1 < xs.length; k += 2) {
        const i0 = Math.max(0, Math.ceil((xs[k] - F.x0) * F.res - 0.5)), i1 = Math.min(F.nx - 1, Math.floor((xs[k + 1] - F.x0) * F.res - 0.5))
        for (let i = i0; i <= i1; i++) m[j * F.nx + i] = val
      }
    }
  }
  return m
}
export const or = (...ms) => { const o = ms[0].slice(); for (const m of ms.slice(1)) for (let i = 0; i < o.length; i++) o[i] |= m[i]; return o }
export const and = (a, b) => { const o = a.slice(); for (let i = 0; i < o.length; i++) o[i] &= b[i]; return o }
export const sub = (a, b) => { const o = a.slice(); for (let i = 0; i < o.length; i++) if (b[i]) o[i] = 0; return o }
export const any = (m) => { for (let i = 0; i < m.length; i++) if (m[i]) return true; return false }
// the mask moved by dx dy metres
export const shift = (F, m, dx, dy) => {
  const o = F.mask(), di = Math.round(dx * F.res), dj = Math.round(dy * F.res)
  for (let j = 0; j < F.ny; j++) { const sj = j - dj; if (sj < 0 || sj >= F.ny) continue
    for (let i = 0; i < F.nx; i++) { const si = i - di; if (si >= 0 && si < F.nx && m[sj * F.nx + si]) o[j * F.nx + i] = 1 } }
  return o
}
// swept along a vector (the 3D block of a piece): every shift from 0 to d
export const sweep = (F, m, dx, dy) => {
  const n = Math.max(1, Math.ceil(Math.hypot(dx, dy) * F.res)); let o = m.slice()
  for (let k = 1; k <= n; k++) o = or(o, shift(F, m, dx * k / n, dy * k / n))
  return o
}

// squared Euclidean distance transform (Felzenszwalb), in cells, to the nearest cell where on[i] is set
const INF = 1e20
const edt1 = (f, n, d, v, z) => {
  let k = 0; v[0] = 0; z[0] = -INF; z[1] = INF
  for (let q = 1; q < n; q++) {
    let s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k])
    while (s <= z[k]) { k--; s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]) }
    k++; v[k] = q; z[k] = s; z[k + 1] = INF
  }
  k = 0
  for (let q = 0; q < n; q++) { while (z[k + 1] < q) k++; d[q] = (q - v[k]) * (q - v[k]) + f[v[k]] }
}
const edt = (F, on) => {
  const { nx, ny } = F, g = new Float64Array(nx * ny), n = Math.max(nx, ny)
  const f = new Float64Array(n), d = new Float64Array(n), v = new Int32Array(n), z = new Float64Array(n + 1)
  for (let i = 0; i < nx * ny; i++) g[i] = on[i] ? 0 : INF
  for (let i = 0; i < nx; i++) { for (let j = 0; j < ny; j++) f[j] = g[j * nx + i]; edt1(f, ny, d, v, z); for (let j = 0; j < ny; j++) g[j * nx + i] = d[j] }
  for (let j = 0; j < ny; j++) { for (let i = 0; i < nx; i++) f[i] = g[j * nx + i]; edt1(f, nx, d, v, z); for (let i = 0; i < nx; i++) g[j * nx + i] = d[i] }
  return g
}
// signed distance in metres: negative inside the mask, positive outside
export const sdf = (F, m) => {
  const out = edt(F, m), inv = new Uint8Array(m.length); for (let i = 0; i < m.length; i++) inv[i] = m[i] ? 0 : 1
  const inn = edt(F, inv), s = new Float32Array(m.length)
  for (let i = 0; i < m.length; i++) s[i] = (m[i] ? -(Math.sqrt(inn[i]) - 0.5) : Math.sqrt(out[i]) - 0.5) / F.res
  return s
}
export const at = (F, field, x, y) => {
  const fx = (x - F.x0) * F.res - 0.5, fy = (y - F.y0) * F.res - 0.5, i = Math.floor(fx), j = Math.floor(fy)
  if (i < 0 || j < 0 || i >= F.nx - 1 || j >= F.ny - 1) return 1
  const u = fx - i, v = fy - j, n = F.nx
  return (field[j * n + i] * (1 - u) + field[j * n + i + 1] * u) * (1 - v) + (field[(j + 1) * n + i] * (1 - u) + field[(j + 1) * n + i + 1] * u) * v
}
// a mask grown (d > 0) or shrunk (d < 0) by d metres, from its field
export const offset = (F, field, d) => { const o = F.mask(); for (let i = 0; i < o.length; i++) o[i] = field[i] < d ? 1 : 0; return o }

// closed iso-lines of a field at `level` (0: the mask's edge, -d: d inside it), as loops in metres, cleaned
export const contours = (F, field, level = 0, tol = 0.0015) => {
  const { nx, ny } = F, v = (i, j) => field[j * nx + i] - level
  const pts = new Map(), nb = new Map()
  const key = (i, j, h) => (h ? 'h' : 'v') + i + ',' + j
  const P = (i, j, h) => {
    const k = key(i, j, h)
    if (!pts.has(k)) { const a = v(i, j), b = h ? v(i + 1, j) : v(i, j + 1), t = a / (a - b); pts.set(k, h ? [F.x0 + (i + t + 0.5) / F.res, F.y0 + (j + 0.5) / F.res] : [F.x0 + (i + 0.5) / F.res, F.y0 + (j + t + 0.5) / F.res]) }
    return k
  }
  const link = (a, b) => { (nb.get(a) || nb.set(a, []).get(a)).push(b); (nb.get(b) || nb.set(b, []).get(b)).push(a) }
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const c = (v(i, j) < 0 ? 1 : 0) | (v(i + 1, j) < 0 ? 2 : 0) | (v(i + 1, j + 1) < 0 ? 4 : 0) | (v(i, j + 1) < 0 ? 8 : 0)
    if (c === 0 || c === 15) continue
    const B = () => P(i, j, true), R = () => P(i + 1, j, false), T = () => P(i, j + 1, true), L = () => P(i, j, false)
    const mid = (v(i, j) + v(i + 1, j) + v(i + 1, j + 1) + v(i, j + 1)) / 4 < 0
    switch (c) {
      case 1: case 14: link(L(), B()); break
      case 2: case 13: link(B(), R()); break
      case 3: case 12: link(L(), R()); break
      case 4: case 11: link(R(), T()); break
      case 6: case 9: link(B(), T()); break
      case 7: case 8: link(L(), T()); break
      case 5: if (mid) { link(L(), T()); link(B(), R()) } else { link(L(), B()); link(R(), T()) } break
      case 10: if (mid) { link(L(), B()); link(R(), T()) } else { link(L(), T()); link(B(), R()) } break
    }
  }
  const seen = new Set(), loops = []
  for (const k0 of nb.keys()) {
    if (seen.has(k0)) continue
    const loop = []; let prev = null, k = k0
    while (k && !seen.has(k)) { seen.add(k); loop.push(pts.get(k)); const n = nb.get(k).filter((x) => x !== prev); prev = k; k = n.find((x) => !seen.has(x)) }
    if (loop.length > 6) loops.push(simplifyLoop(loop, tol))
  }
  return loops.filter((l) => l.length > 2 && Math.abs(area(l)) > 4e-4)
}
export const area = (l) => { let s = 0; for (let i = 0, k = l.length - 1; i < l.length; k = i++) s += (l[k][0] - l[i][0]) * (l[k][1] + l[i][1]); return s / 2 }
// Douglas-Peucker on an open line
export const simplify = (p, tol) => {
  if (p.length < 3) return p
  const keep = new Uint8Array(p.length); keep[0] = keep[p.length - 1] = 1
  const st = [[0, p.length - 1]]
  while (st.length) {
    const [a, b] = st.pop(); let best = -1, bd = tol
    const ax = p[a][0], ay = p[a][1], dx = p[b][0] - ax, dy = p[b][1] - ay, L = Math.hypot(dx, dy) || 1e-9
    for (let i = a + 1; i < b; i++) { const d = Math.abs((p[i][0] - ax) * dy - (p[i][1] - ay) * dx) / L; if (d > bd) { bd = d; best = i } }
    if (best > 0) { keep[best] = 1; st.push([a, best], [best, b]) }
  }
  return p.filter((_, i) => keep[i])
}
const simplifyLoop = (l, tol) => {
  // split at the point furthest from the first, simplify both halves
  let far = 0, fd = -1; for (let i = 0; i < l.length; i++) { const d = Math.hypot(l[i][0] - l[0][0], l[i][1] - l[0][1]); if (d > fd) { fd = d; far = i } }
  const a = simplify(l.slice(0, far + 1), tol), b = simplify(l.slice(far).concat([l[0]]), tol)
  return a.concat(b.slice(1, -1))
}

// fill passes: parallel lines at angle `ang` (radians, 0 = horizontal), `gap` apart, where the field is under -inset,
// chained into zig-zag strokes (a pass goes on into the next row while the rows overlap)
export const hatch = (F, field, { gap = 0.07, inset = 0.03, ang = 0, keep = null, step = 1 / RES } = {}) => {
  const c = Math.cos(ang), s = Math.sin(ang), nxv = -s, nyv = c
  const corners = [[F.x0, F.y0], [F.x1, F.y0], [F.x0, F.y1], [F.x1, F.y1]]
  const us = corners.map(([x, y]) => x * c + y * s), vs = corners.map(([x, y]) => x * nxv + y * nyv)
  const u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs)
  const rows = []
  for (let v = v1 - gap / 2; v > v0; v -= gap) {
    const iv = []; let a = null
    for (let u = u0; u <= u1 + step; u += step * 2) {
      const x = u * c + v * nxv, y = u * s + v * nyv
      const inside = at(F, field, x, y) < -inset && (!keep || keep(x, y))
      if (inside && a == null) a = u
      if (!inside && a != null) { if (u - a > 0.03) iv.push([a, u - step * 2]); a = null }
    }
    rows.push({ v, iv })
  }
  const chains = []
  for (const { v, iv } of rows) {
    const used = new Set()
    for (const [a, b] of iv) {
      const ch = chains.find((ch) => ch.open && !used.has(ch) && ch.last[0] < b && ch.last[1] > a && v > ch.v - gap * 1.5)
      const P = (u) => [u * c + v * nxv, u * s + v * nyv]
      if (ch) { const p = ch.pts[ch.pts.length - 1], pu = p[0] * c + p[1] * s, l2r = Math.abs(pu - a) < Math.abs(pu - b); ch.pts.push(l2r ? P(a) : P(b), l2r ? P(b) : P(a)); ch.last = [a, b]; ch.v = v; used.add(ch) }
      else { const n = { pts: [P(a), P(b)], last: [a, b], v, open: true }; chains.push(n); used.add(n) }
    }
    for (const ch of chains) if (!used.has(ch)) ch.open = false
  }
  return chains.map((ch) => ch.pts)
}

// polyline helpers
export const len = (p) => { let s = 0; for (let i = 1; i < p.length; i++) s += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); return s }
export const resample = (p, step) => {
  if (p.length < 2) return p.slice()
  const out = [p[0].slice()]; let acc = 0
  for (let i = 1; i < p.length; i++) {
    let a = p[i - 1]; const b = p[i]; let d = Math.hypot(b[0] - a[0], b[1] - a[1])
    while (acc + d >= step) { const t = (step - acc) / d; a = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; out.push(a); d = Math.hypot(b[0] - a[0], b[1] - a[1]); acc = 0 }
    acc += d
  }
  const e = p[p.length - 1], l = out[out.length - 1]; if (Math.hypot(e[0] - l[0], e[1] - l[1]) > step * 0.2) out.push(e.slice())
  return out
}
// the runs of a closed loop where keep(x, y) holds, as open lines (the parts of an outline not hidden by what is in front)
export const visibleRuns = (loop, keep, step = 0.006, min = 0.02) => {
  const p = resample(loop.concat([loop[0]]), step), V = p.map((q) => keep(q[0], q[1]))
  if (V.every(Boolean)) return [p]
  const h = V.indexOf(false), Q = p.slice(h).concat(p.slice(0, h)), W = V.slice(h).concat(V.slice(0, h)), out = []
  let run = []
  Q.forEach((q, k) => { if (W[k]) run.push(q); else { if (run.length > 1 && len(run) > min) out.push(run); run = [] } })
  if (run.length > 1 && len(run) > min) out.push(run)
  return out
}
