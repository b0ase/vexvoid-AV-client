// Authors the SKETCHBOOK's starter sketches (game/sketches/*.json) as stroke data, the same shape as the game's stroke
// log: metres from the sketch's bottom left (x right, y up) and seconds from each stroke's start. Our own letterforms
// (VEXVOID, V3X, VOID, NPG) and abstract forms, drawn here from skeletons: tags follow the skeleton with a thin cap,
// throw-ups and pieces are the skeleton swelled into bubble shapes (a distance field), filled with zig-zag passes of a
// fat cap and outlined along the shape's contour.
//
//   node game/sketches/make.mjs [preview-dir]     writes the JSON files (and an SVG + PNG of each to preview-dir)
import { writeFileSync, mkdirSync } from 'fs'
import { execFileSync } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const HERE = dirname(fileURLToPath(import.meta.url)), PREVIEW = process.argv[2] || ''
const WHITE = '#f4f4f4', GREY = '#9a9a9e', BLACK = '#0c0c0e', CHROME = '#c9ccd2'

// ---- geometry ----
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
// a smooth curve through control points (Catmull-Rom), n points per span
const smooth = (p, n = 8) => {
  if (p.length < 3) return p
  const out = [p[0]]
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[Math.max(0, i - 1)], b = p[i], c = p[i + 1], d = p[Math.min(p.length - 1, i + 2)]
    for (let k = 1; k <= n; k++) {
      const t = k / n, t2 = t * t, t3 = t2 * t
      out.push([0, 1].map(j => 0.5 * (2 * b[j] + (-a[j] + c[j]) * t + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * t2 + (-a[j] + 3 * b[j] - 3 * c[j] + d[j]) * t3)))
    }
  }
  return out
}
const arc = (cx, cy, rx, ry, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry] })
const len = p => p.slice(1).reduce((s, q, i) => s + Math.hypot(q[0] - p[i][0], q[1] - p[i][1]), 0)
// points every `step` metres along a polyline
const resample = (p, step = 0.025) => {
  const out = [p[0]]; let acc = 0
  for (let i = 1; i < p.length; i++) {
    let a = p[i - 1]; const b = p[i]; let d = Math.hypot(b[0] - a[0], b[1] - a[1])
    while (acc + d >= step) { const t = (step - acc) / d; a = lerp(a, b, t); out.push(a); d = Math.hypot(b[0] - a[0], b[1] - a[1]); acc = 0 }
    acc += d
  }
  const e = p[p.length - 1], l = out[out.length - 1]; if (Math.hypot(e[0] - l[0], e[1] - l[1]) > 0.004) out.push(e)
  return out
}
const map = (p, f) => p.map(f)

// ---- our letters: skeletons in a box 1 high, x from 0 to the letter's width ----
const O = (w = 0.8) => [arc(w / 2, 0.5, w / 2, 0.5, Math.PI / 2, Math.PI / 2 + Math.PI * 2, 36)]
const GLYPH = {
  V: { w: 0.8, s: [[[0, 1], [0.4, 0], [0.8, 1]]] },
  E: { w: 0.62, s: [[[0.62, 1], [0, 1], [0, 0], [0.62, 0]], [[0, 0.52], [0.48, 0.52]]] },
  X: { w: 0.76, s: [[[0, 1], [0.76, 0]], [[0.76, 1], [0, 0]]] },
  O: { w: 0.8, s: O(0.8) },
  I: { w: 0.12, pad: 0.12, s: [[[0.06, 1], [0.06, 0]]] },
  D: { w: 0.72, s: [[[0, 0], [0, 1], [0.3, 1], ...smooth([[0.3, 1], [0.62, 0.86], [0.72, 0.5], [0.62, 0.14], [0.3, 0]]).slice(1), [0, 0]]] },
  3: { w: 0.62, s: [smooth([[0.02, 0.9], [0.28, 1], [0.56, 0.9], [0.56, 0.68], [0.26, 0.54]]), smooth([[0.26, 0.54], [0.6, 0.42], [0.6, 0.14], [0.3, 0], [0.02, 0.1]])] },
  N: { w: 0.72, s: [[[0, 0], [0, 1], [0.72, 0], [0.72, 1]]] },
  P: { w: 0.7, s: [[[0, 0], [0, 1], [0.34, 1], ...smooth([[0.34, 1], [0.66, 0.9], [0.7, 0.68], [0.58, 0.46], [0.32, 0.4]]).slice(1), [0, 0.4]]] },
  G: { w: 0.76, s: [[...arc(0.4, 0.5, 0.4, 0.5, 0.35 * Math.PI, 1.9 * Math.PI, 30), [0.76, 0.46], [0.42, 0.46]]] },
}
// a word laid out: letters at height h, spacing gap (in letter units), slant (x per y), each letter nudged by `bounce`
const word = (text, { h = 1, gap = 0.12, slant = 0, bounce = [], scaleX = 1 } = {}) => {
  const out = []; let x = 0
  ;[...text].forEach((ch, i) => {
    const g = GLYPH[ch]; const dy = bounce[i] || 0; x += g.pad || 0
    out.push(g.s.map(s => s.map(([u, v]) => [(x + u * scaleX + v * slant) * h, (v + dy) * h])))
    x += g.w * scaleX + gap + (g.pad || 0)
  })
  return out   // per letter, its strokes
}

// ---- a bubble shape: everything within r of the skeleton ----
const segDist = (px, py, a, b) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy
  const t = l2 ? Math.max(0, Math.min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / l2)) : 0
  return Math.hypot(px - a[0] - dx * t, py - a[1] - dy * t)
}
const shape = (lines, r, shift = null) => {
  const segs = []; for (const l of lines) for (let i = 1; i < l.length; i++) segs.push([l[i - 1], l[i]])
  const shifts = shift ? Array.from({ length: 7 }, (_, k) => [shift[0] * k / 6, shift[1] * k / 6]) : [[0, 0]]
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const [a, b] of segs) for (const [sx, sy] of shifts) for (const p of [a, b]) { x0 = Math.min(x0, p[0] + sx); y0 = Math.min(y0, p[1] + sy); x1 = Math.max(x1, p[0] + sx); y1 = Math.max(y1, p[1] + sy) }
  const G = 0.01, m = r + 0.05; x0 -= m; y0 -= m; x1 += m; y1 += m
  const nx = Math.ceil((x1 - x0) / G) + 1, ny = Math.ceil((y1 - y0) / G) + 1, f = new Float32Array(nx * ny)
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const px = x0 + i * G, py = y0 + j * G; let d = Infinity
    for (const [sx, sy] of shifts) for (const [a, b] of segs) { const q = segDist(px - sx, py - sy, a, b); if (q < d) d = q }
    f[j * nx + i] = r - d
  }
  const at = (x, y) => { const i = Math.round((x - x0) / G), j = Math.round((y - y0) / G); return i < 0 || j < 0 || i >= nx || j >= ny ? -1 : f[j * nx + i] }
  return { f, nx, ny, x0, y0, G, at }
}
// the outline(s) of a shape, offset by `inset` (inside), as closed loops, each starting at its top left
const contours = (S, inset = 0) => {
  const { f, nx, ny, x0, y0, G } = S, v = (i, j) => f[j * nx + i] - inset
  const edges = new Map(), pt = new Map()
  const E = (k, p) => { pt.set(k, p) ; return k }
  const ePt = (i, j, horiz) => {
    const k = (horiz ? 'h' : 'v') + i + ',' + j
    if (!pt.has(k)) { const a = v(i, j), b = horiz ? v(i + 1, j) : v(i, j + 1), t = a / (a - b); pt.set(k, horiz ? [x0 + (i + t) * G, y0 + j * G] : [x0 + i * G, y0 + (j + t) * G]) }
    return k
  }
  const link = (a, b) => { (edges.get(a) || edges.set(a, []).get(a)).push(b); (edges.get(b) || edges.set(b, []).get(b)).push(a) }
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const c = (v(i, j) > 0 ? 1 : 0) | (v(i + 1, j) > 0 ? 2 : 0) | (v(i + 1, j + 1) > 0 ? 4 : 0) | (v(i, j + 1) > 0 ? 8 : 0)
    if (c === 0 || c === 15) continue
    const B = () => ePt(i, j, true), R = () => ePt(i + 1, j, false), T = () => ePt(i, j + 1, true), L = () => ePt(i, j, false)
    const mid = (v(i, j) + v(i + 1, j) + v(i + 1, j + 1) + v(i, j + 1)) / 4 > 0
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
  for (const k0 of edges.keys()) {
    if (seen.has(k0)) continue
    const loop = []; let prev = null, k = k0
    while (k && !seen.has(k)) { seen.add(k); loop.push(pt.get(k)); const nb = edges.get(k).filter(x => x !== prev); prev = k; k = nb.find(x => !seen.has(x)) }
    if (loop.length > 8) loops.push(loop)
  }
  return loops.map(l => {
    l = l.concat([l[0]])
    // a touch of smoothing (the grid's steps), then start at the top left, as a writer would
    for (let it = 0; it < 2; it++) l = l.map((p, i) => i === 0 || i === l.length - 1 ? p : [(l[i - 1][0] + 2 * p[0] + l[i + 1][0]) / 4, (l[i - 1][1] + 2 * p[1] + l[i + 1][1]) / 4])
    l.pop(); let best = 0; l.forEach((p, i) => { if (p[1] - p[0] * 0.6 > l[best][1] - l[best][0] * 0.6) best = i })
    l = l.slice(best).concat(l.slice(0, best)); l.push(l[0]); return l
  }).sort((a, b) => len(b) - len(a))
}
// fill: zig-zag passes across the shape, row by row from the top, each pass one stroke while the rows overlap
const hatch = (S, { dy = 0.07, inset = 0.035, y0 = -Infinity, y1 = Infinity } = {}) => {
  const { nx, ny, x0, y0: gy0, G } = S, top = gy0 + (ny - 1) * G, rows = []
  for (let y = Math.min(top, y1) - dy / 2; y > Math.max(gy0, y0); y -= dy) {
    const iv = []; let a = null
    for (let i = 0; i < nx; i++) { const x = x0 + i * G, inside = S.at(x, y) > inset; if (inside && a == null) a = x; if (!inside && a != null) { if (x - a > 0.03) iv.push([a, x - G]); a = null } }
    rows.push({ y, iv })
  }
  const chains = []
  for (const { y, iv } of rows) {
    const used = new Set()
    for (const [a, b] of iv) {
      const c = chains.find(c => c.open && !used.has(c) && c.last[0] < b && c.last[1] > a && y > c.y - dy * 1.5)
      if (c) { const p = c.pts[c.pts.length - 1], l2r = Math.abs(p[0] - a) < Math.abs(p[0] - b); c.pts.push(l2r ? [a, y] : [b, y], l2r ? [b, y] : [a, y]); c.last = [a, b]; c.y = y; used.add(c) }
      else { const n = { pts: [[a, y], [b, y]], last: [a, b], y, open: true }; chains.push(n); used.add(n) }
    }
    for (const c of chains) if (!used.has(c)) c.open = false
  }
  return chains.map(c => c.pts)
}

// the outlines of overlapping forms, each later one in front: a form's outline is only drawn where no form in front of
// it covers it, so the letters read one over the next. Returns open or closed polylines.
const stacked = (shapes, hide = []) => {
  const out = []
  shapes.forEach((Sh, i) => {
    const front = shapes.slice(i + 1).concat(hide)
    for (const loop of contours(Sh, 0)) {
      const p = resample(loop, 0.02), seen = p.map(q => front.every(F => F.at(q[0], q[1]) < -0.012))
      if (seen.every(Boolean)) { out.push(p); continue }
      const h = seen.indexOf(false), P = p.slice(h).concat(p.slice(0, h)), V = seen.slice(h).concat(seen.slice(0, h))
      let run = []
      P.forEach((q, k) => { if (V[k]) run.push(q); else { if (run.length > 2 && len(run) > 0.05) out.push(run); run = [] } })
      if (run.length > 2 && len(run) > 0.05) out.push(run)
    }
  })
  return out
}

// ---- strokes ----
let seed = 1009
const stroke = (pts, can, speed) => {
  const p = resample(pts); let t = 0
  return { cap: can.cap, dist: can.dist ?? 0.2, colour: can.colour, pressure: can.pressure ?? 1, seed: (seed = (seed * 48271) % 2147483647), pts: p.map((q, i) => { if (i) t += Math.hypot(q[0] - p[i - 1][0], q[1] - p[i - 1][1]) / speed; return [q[0], q[1], +t.toFixed(3)] }) }
}
// a sketch: its strokes moved so the paint's bottom left is 0,0 (room is left for the line's width)
const sketch = (id, name, kind, strokes, about) => {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const s of strokes) for (const [x, y] of s.pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) }
  const m = 0.05
  for (const s of strokes) s.pts = s.pts.map(([x, y, t]) => [+(x - x0 + m).toFixed(3), +(y - y0 + m).toFixed(3), t])
  return { id, name, kind, about, w: +(x1 - x0 + 2 * m).toFixed(3), h: +(y1 - y0 + 2 * m).toFixed(3), strokes }
}
const flat = a => a.flat()

// ---- TAGS: one hand, thin cap, fast ----
const tagOf = (letters, can, speed = 1.9) => letters.map(l => l.map(s => stroke(smooth(s, 5), can, speed))).flat()
const swoosh = (x0, x1, y, can, up = 0.12) => stroke(smooth([[x0, y], [(x0 + x1) / 2, y - 0.04], [x1, y + up * 0.3], [x1 + 0.06, y + up]], 8), can, 2.2)
const dots = (pts, can) => pts.map(([x, y]) => ({ ...stroke([[x, y], [x + 0.003, y]], can, 0.1) }))

const S = []
{ // VEXVOID: tall, slanted, the X kicked up, an underline that flicks up at the end
  const can = { cap: 1, dist: 0.14, colour: WHITE }
  const L = word('VEXVOID', { h: 0.36, gap: 0.08, slant: 0.28, bounce: [0, 0.06, -0.08, 0.05, 0, 0.04, -0.02], scaleX: 0.78 })
  const right = Math.max(...L.flat(2).map(p => p[0]))
  S.push(sketch('tag-vexvoid', 'VEXVOID', 'tag', [...tagOf(L, can), swoosh(-0.02, right, -0.07, can), ...dots([[right + 0.1, 0.06], [right + 0.16, 0.06]], { ...can, cap: 2 })], 'white skinny tag with a flick'))
}
{ // V3X: a medium cap, black, bold and quick, a spark over it and a line under
  const can = { cap: 2, dist: 0.12, colour: BLACK }
  const L = word('V3X', { h: 0.42, gap: 0.12, slant: 0.22, bounce: [0, 0.08, 0], scaleX: 0.9 })
  const spark = [stroke([[0.98, 0.5], [1.02, 0.66]], { ...can, cap: 1 }, 1.2), stroke([[0.93, 0.6], [1.08, 0.57]], { ...can, cap: 1 }, 1.2)]
  S.push(sketch('tag-v3x', 'V3X', 'tag', [...tagOf(L, can, 1.6), ...spark, swoosh(0, 0.95, -0.06, { ...can, cap: 1 }, 0.06)], 'black medium tag with a spark'))
}
{ // VOID: rounded, white, letters run together
  const can = { cap: 2, dist: 0.16, colour: WHITE }
  const L = word('VOID', { h: 0.4, gap: 0.04, slant: 0.18, bounce: [0.05, 0, -0.04, 0.03], scaleX: 0.85 })
  S.push(sketch('tag-void', 'VOID', 'tag', [...tagOf(L, can, 1.7), ...dots([[0.62, 0.53]], { ...can, cap: 3 })], 'white medium tag'))
}
{ // NPG: chrome, skinny, wide, an arrow underneath
  const can = { cap: 1, dist: 0.12, colour: CHROME }
  const L = word('NPG', { h: 0.38, gap: 0.14, slant: 0.2, bounce: [0, 0.05, -0.03], scaleX: 0.9 })
  const right = Math.max(...L.flat(2).map(p => p[0]))
  S.push(sketch('tag-npg', 'NPG', 'tag', [...tagOf(L, can), stroke([[0, -0.08], [right + 0.12, -0.05]], can, 2.2), stroke([[right + 0.02, 0.0], [right + 0.12, -0.05], [right + 0.03, -0.12]], can, 1.5)], 'chrome skinny tag with an arrow'))
}

// ---- THROW-UPS: bubble letters, a quick fill and one outline ----
const throwUp = (id, name, text, o) => {
  const L = word(text, { h: o.h, gap: o.gap, slant: o.slant || 0, bounce: o.bounce || [], scaleX: o.scaleX || 1 })
  const sk = L.flat().map(s => smooth(s, 4)), Sh = shape(sk, o.r), each = L.map(l => shape(l.map(s => smooth(s, 4)), o.r))
  const fill = hatch(Sh, { dy: 0.075, inset: 0.06 }).map(p => stroke(p, { cap: 3, dist: 0.22, colour: o.fill }, 1.5))
  const line = stacked(each).map(p => stroke(p, { cap: 2, dist: 0.1, colour: o.line }, 0.9))
  const extra = (o.extra || []).map(([p, can, sp]) => stroke(p, can, sp))
  return sketch(id, name, 'throw-up', [...fill, ...line, ...extra], o.about)
}
S.push(throwUp('throw-void', 'VOID', 'VOID', { h: 0.52, gap: 0.0, r: 0.11, slant: 0.1, bounce: [0.04, -0.03, 0.05, 0], scaleX: 0.95, fill: WHITE, line: BLACK, about: 'white bubble letters, black outline' }))
S.push(throwUp('throw-v3x', 'V3X', 'V3X', { h: 0.56, gap: -0.02, r: 0.12, slant: 0.08, bounce: [0, 0.05, -0.02], fill: CHROME, line: BLACK, about: 'chrome bubble letters, black outline',
  extra: [[[[1.0, 0.75], [1.0, 0.95]], { cap: 1, dist: 0.1, colour: WHITE }, 1], [[[0.9, 0.85], [1.1, 0.85]], { cap: 1, dist: 0.1, colour: WHITE }, 1]] }))
S.push(throwUp('throw-npg', 'NPG', 'NPG', { h: 0.6, gap: 0.16, r: 0.1, slant: 0.06, bounce: [0.03, -0.02, 0.02], fill: BLACK, line: WHITE, about: 'black bubble letters, white outline' }))

// ---- PIECES: a 3D block, a fill with a fade, outlines, highlights, sparkles ----
const sparkle = (x, y, k, colour) => [stroke([[x, y - k], [x, y + k]], { cap: 1, dist: 0.08, colour }, 0.8), stroke([[x - k * 0.6, y], [x + k * 0.6, y]], { cap: 1, dist: 0.08, colour }, 0.8)]
const piece = (id, name, forms, o) => {
  const sk = forms.flat(), Sh = shape(sk, o.r), Sx = shape(sk, o.r, o.depth), each = forms.map(f => shape(f, o.r))
  const block = hatch(Sx, { dy: 0.075, inset: 0.065 }).map(p => stroke(p, { cap: 3, dist: 0.24, colour: o.block }, 1.5))
  const fill = hatch(Sh, { dy: 0.07, inset: 0.065 }).map(p => stroke(p, { cap: 3, dist: 0.2, colour: o.fill }, 1.4))
  const ys = Sh.y0, ye = Sh.y0 + Sh.ny * Sh.G, fadeTop = ys + (ye - ys) * 0.48
  const fade = hatch(Sh, { dy: 0.06, inset: 0.07, y1: fadeTop }).map(p => stroke(p, { cap: 3, dist: 0.32, colour: o.fade, pressure: 0.5 }, 1.6))
  const blockLine = stacked([Sx], [Sh]).map(p => stroke(p, { cap: 1, dist: 0.1, colour: o.line }, 1.0))
  const line = stacked(each).map(p => stroke(p, { cap: 2, dist: 0.1, colour: o.line }, 0.85))
  // highlights: short white flicks just inside the top left of each form
  const hl = flat(contours(Sh, o.r * 0.55).map(l => { const p = resample(l, 0.02); const n = Math.min(p.length, Math.round(0.16 / 0.02)); return [stroke(p.slice(0, n), { cap: 1, dist: 0.08, colour: o.hi }, 0.9)] }))
  const extra = flat((o.sparkles || []).map(([x, y, k]) => sparkle(x, y, k, o.spark || CHROME)))
  return sketch(id, name, 'piece', [...block, ...fill, ...fade, ...blockLine, ...line, ...hl, ...extra], o.about)
}
{
  const L = word('VEXVOID', { h: 0.8, gap: 0.02, slant: 0.12, bounce: [0.02, -0.03, 0.06, -0.02, 0.03, -0.03, 0.02], scaleX: 0.78 })
  const forms = L.map(l => l.map(s => smooth(s, 4))), right = Math.max(...forms.flat(2).map(p => p[0]))
  S.push(piece('piece-vexvoid', 'VEXVOID', forms, { r: 0.1, depth: [0.09, -0.09], block: GREY, fill: WHITE, fade: GREY, line: BLACK, hi: WHITE, spark: CHROME, about: 'white face, grey fade and 3D block, black outlines, sparkles',
    sparkles: [[-0.12, 0.95, 0.09], [right + 0.2, 0.9, 0.12], [right * 0.55, 1.08, 0.07]] }))
}
{
  const L = word('V3X', { h: 0.95, gap: 0.0, slant: 0.1, bounce: [0, 0.05, -0.03] })
  const forms = L.map(l => l.map(s => smooth(s, 4))), right = Math.max(...forms.flat(2).map(p => p[0]))
  S.push(piece('piece-v3x', 'V3X', forms, { r: 0.12, depth: [-0.1, -0.1], block: BLACK, fill: CHROME, fade: WHITE, line: BLACK, hi: WHITE, spark: WHITE, about: 'chrome face, white fade, black 3D block',
    sparkles: [[right + 0.18, 1.05, 0.12], [0.05, -0.12, 0.08]] }))
}
{ // abstract: a swoosh that ends in an arrow, two rings and a bar, swelled into one form
  const sw = smooth([[0, 0.25], [0.35, 0.6], [0.8, 0.35], [1.25, 0.7], [1.7, 0.5]], 10)
  const head = [[1.5, 0.78], [1.78, 0.48], [1.48, 0.26]]
  const forms = [[[[0.05, -0.05], [0.65, -0.05]]], [arc(1.15, 0.12, 0.12, 0.12, 0, Math.PI * 2, 24)], [sw, head], [arc(0.45, 0.95, 0.16, 0.16, 0, Math.PI * 2, 28)]]
  S.push(piece('piece-void-arrows', 'VOID ARROWS', forms, { r: 0.09, depth: [0.07, -0.07], block: BLACK, fill: GREY, fade: CHROME, line: WHITE, hi: WHITE, spark: WHITE, about: 'abstract: a swoosh into an arrow, rings, a bar',
    sparkles: [[1.95, 0.95, 0.1], [-0.15, 0.7, 0.07]] }))
}

// ---- out ----
for (const s of S) {
  writeFileSync(join(HERE, s.id + '.json'), JSON.stringify(s))
  const pts = s.strokes.reduce((n, x) => n + x.pts.length, 0), secs = s.strokes.reduce((n, x) => n + x.pts[x.pts.length - 1][2], 0)
  console.log(`${s.id.padEnd(20)} ${s.kind.padEnd(9)} ${s.w.toFixed(2)} x ${s.h.toFixed(2)} m  ${String(s.strokes.length).padStart(3)} strokes ${String(pts).padStart(5)} pts ${secs.toFixed(1)} s`)
  if (PREVIEW) {
    mkdirSync(PREVIEW, { recursive: true })
    const W = (c) => [0, 0.025, 0.06, 0.14][c.cap] * (0.45 + 0.55 * Math.pow(c.dist / 0.2, 0.8))
    const body = s.strokes.map(x => `<polyline fill="none" stroke="${x.colour}" stroke-opacity="${x.pressure < 1 ? 0.45 : 0.95}" stroke-width="${W(x)}" stroke-linecap="round" stroke-linejoin="round" points="${x.pts.map(p => `${p[0]},${s.h - p[1]}`).join(' ')}"/>`).join('')
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(s.w * 300)}" height="${Math.round(s.h * 300)}" viewBox="0 0 ${s.w} ${s.h}"><rect width="100%" height="100%" fill="#5a5d63"/>${body}</svg>`
    writeFileSync(join(PREVIEW, `sketch-src-${s.id}.svg`), svg)
    execFileSync('rsvg-convert', ['-o', join(PREVIEW, `sketch-src-${s.id}.png`), join(PREVIEW, `sketch-src-${s.id}.svg`)])
  }
}
// the list the game bundles (esbuild inlines the JSON)
writeFileSync(join(HERE, 'index.ts'), '// written by make.mjs: the starter sketches, in the order the SKETCHBOOK shows them\n' +
  S.map((s, i) => `import s${i} from './${s.id}.json';`).join('\n') + `\nexport default [${S.map((_, i) => 's' + i).join(', ')}];\n`)
