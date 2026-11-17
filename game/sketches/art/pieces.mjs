// PIECES: the hall-of-fame VEXVOID family (targets piece-A..E), technical wildstyle built from PARTS (wild.mjs).
// The writer's order, layer by layer:
//   glow    a wide fat-cap fog in a light value behind where the letters go (the album covers' halo)
//   burst   black shards fanned out behind the letters from their own tips (each fan follows its tip's sweep), and a
//           row of hanging shards under them
//   3D      the block, extruded down and to the right, in a mid value
//   fill    the letters, two coats (rings round each part, then passes across), sharp edges cut in close
//   fade    a light dusting of the mid value up from the bottoms
//   detail  in the dark value, inside the letters: the shadow each part casts on the parts behind it, a facet down the
//           shadow side of each body, notches cut in from its edge, splits along the construction lines
//   outline every part in a skinny cap, going under the parts in front: bold round the outside, finer where parts
//           overlap; the 3D's outline and its corner lines
//   shine   a bevel on the edges turned from the light; splinters of light along the big shards; stars
//   drips   long thin runs off the bottoms;  chips  the paint knocked back near the edges (the buff can)
//   tag     the V mark and a small NPG dedication
// Colour roles (so the recolour slots map cleanly): LIGHT glow/shine, DARK burst/detail/outlines, MID 3D/fade, FILL.
import { WHITE, BLACK, CHROME, GREY, rand, jitter, stroke, dot } from './can.mjs'
import { fillPass, edgePass, lines, block, highlights, bottoms, drips, scatter, sketch, grad } from './paint.mjs'
import { frame, fill as fillMask, sub, sdf, at, contours, resample, visibleRuns, len } from './raster.mjs'
import { wildWord } from './wild.mjs'
import { tblade, sabre } from './shapes.mjs'
import { vmarkStrokes } from './vmark.mjs'
import { smallTag } from './tags.mjs'

const LIGHT = [-0.55, 0.83]   // where the light comes from (up and left)

/** Masks and fields of a piece's parts (back to front): a global frame with the union and a depth buffer (which part
 *  is on top in each cell), and each part's own field in a small frame of its own (cells aligned with the global). */
export function prepareParts(parts, { margin = 0.75 } = {}) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const p of parts) for (const P of p.polys) for (const [x, y] of P) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) }
  const F = frame(x0 - margin, y0 - margin, x1 + margin, y1 + margin)
  const top = new Int16Array(F.nx * F.ny).fill(-1), U = F.mask()
  parts.forEach((p, i) => {
    let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity
    for (const P of p.polys) for (const [x, y] of P) { a = Math.min(a, x); b = Math.min(b, y); c = Math.max(c, x); d = Math.max(d, y) }
    const oi = Math.floor((a - 0.08 - F.x0) * F.res), oj = Math.floor((b - 0.08 - F.y0) * F.res)
    const Fi = frame(F.x0 + oi / F.res, F.y0 + oj / F.res, c + 0.08, d + 0.08)
    let m = fillMask(Fi, p.polys); if (p.cuts && p.cuts.length) m = sub(m, fillMask(Fi, p.cuts))
    for (let j = 0; j < Fi.ny; j++) for (let k = 0; k < Fi.nx; k++) if (m[j * Fi.nx + k]) { const g = (j + oj) * F.nx + k + oi; if (g >= 0 && g < top.length) { top[g] = i; U[g] = 1 } }
    p.F = Fi; p.f = sdf(Fi, m); p.i = i
  })
  const Uf = sdf(F, U)
  const topAt = (x, y) => { const i = Math.floor((x - F.x0) * F.res), j = Math.floor((y - F.y0) * F.res); return i < 0 || j < 0 || i >= F.nx || j >= F.ny ? -1 : top[j * F.nx + i] }
  return { F, U, Uf, top, topAt, parts }
}
// a polyline split into the runs where ok(x, y) holds
const runsWhere = (p, ok, min = 0.02) => { const out = []; let r = []; for (const q of p) { if (ok(q[0], q[1])) r.push(q); else { if (r.length > 1 && len(r) > min) out.push(r); r = [] } } if (r.length > 1 && len(r) > min) out.push(r); return out }
// a mask of polygons, each kept only in the cells where keep(cell index, polygon index)
const maskOf = (F, polys, keep) => { const m = F.mask(); polys.forEach((P, k) => { const t = fillMask(F, [P]); for (let i = 0; i < t.length; i++) if (t[i] && keep(i, k)) m[i] = 1 }); return m }
const along = (axis, step = 0.01) => { const p = resample(axis, step), cum = [0]; for (let i = 1; i < p.length; i++) cum.push(cum[i - 1] + Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1])); return { p, cum, L: cum[cum.length - 1] } }
const normalAt = (p, i) => { const a = p[Math.max(0, i - 1)], b = p[Math.min(p.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [-dy / l, dx / l] }

export function piece(id, name, parts, o = {}) {
  const C = { light: CHROME, dark: BLACK, mid: GREY, fill: WHITE, ...(o.colours || {}) }
  const P = prepareParts(parts, { margin: o.margin ?? 0.75 }), { F, U, Uf, top, topAt } = P
  const out = {}
  const bx = (() => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const l of parts) for (const p of l.polys) for (const [x, y] of p) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) } return { x0, y0, x1, y1 } })()
  const H = bx.y1 - bx.y0
  const S = o.scale ?? 1   // detail sizes follow the letters' size
  const darkCan = { cap: 1, dist: 0.05, colour: C.dark }

  // 1. glow: a wide soft fog round the letters, far from the wall, light on the button
  const glowR = o.glow ?? 0.15
  if (glowR > 0) out.glow = fillPass(F, Uf, { cap: 3, dist: 0.38, colour: C.light, pressure: 0.3 }, { gap: 0.15, inset: -glowR, ang: 0.18, speed: 2.4 })

  // 2. the burst: fans of shards out of the letters' tips (behind them), and shards hanging under the bottoms
  const shards = [], rays = []
  const shard = (base, a, l, w) => { const tx = -Math.sin(a), ty = Math.cos(a); shards.push([[base[0] + tx * w / 2, base[1] + ty * w / 2], [base[0] + Math.cos(a) * l, base[1] + Math.sin(a) * l], [base[0] - tx * w / 2, base[1] - ty * w / 2]]); return [base, [base[0] + Math.cos(a) * l * 0.62, base[1] + Math.sin(a) * l * 0.62]] }
  const BL = (o.burstLen ?? 1) * S
  if (o.burst !== false) {
    let k = 0
    for (const p of parts) for (const t of p.tips) {
      if (p.kind === 'body' && t.dir[1] < -0.5) continue   // the points below are where the drips go
      const a0 = Math.atan2(t.dir[1], t.dir[0]), big = t.w > 0.2 * S
      const fan = big ? [-0.5, 0.36, -0.14] : [(k % 2 ? 1 : -1) * 0.42, (k % 2 ? -1 : 1) * 0.2]
      for (const da of fan) {
        const l = (0.2 + 0.16 * ((k * 7) % 5) / 4) * BL * (big ? 1.25 : 1), a = a0 + da
        const base = [t.p[0] - t.dir[0] * 0.18 * S, t.p[1] - t.dir[1] * 0.18 * S]
        const r = shard(base, a, l + 0.18 * S, (0.05 + 0.03 * (k % 3)) * S); if (big && Math.abs(da) > 0.4) rays.push(r)
        k++
      }
    }
    // hanging shards under the letters, every so often, alternately raked left and right
    const hang = bottoms(F, Uf, { step: 0.02, facing: 0.8 }).sort((a, b) => a[0] - b[0]); let lastX = -Infinity, n = 0
    for (const q of hang) {
      if (q[0] - lastX < (o.hangGap ?? 0.24) * S) continue
      lastX = q[0]; const a = -Math.PI / 2 + (n % 2 ? 0.32 : -0.28), l = (0.14 + 0.1 * ((n * 3) % 4) / 3) * BL
      shard([q[0], q[1] + 0.05], a, l + 0.05, 0.06 * S); n++
    }
    for (const r of o.rays || []) {   // set bursts: radial spikes from a point behind the letters
      const [fx, fy, nr, lr, a0 = 0] = r, c = [bx.x0 + fx * (bx.x1 - bx.x0), bx.y0 + fy * H]
      for (let i = 0; i < nr; i++) { const a = a0 + i / nr * Math.PI * 2, l = lr * (0.7 + 0.3 * ((i * 5) % 3) / 2) * S; const rr = shard(c, a, l, 0.08 * S); if (i % 2 === 0) rays.push(rr) }
    }
    // the backing: black right round the letters, closing the gaps between them and the narrow counters
    const r1 = (o.close ?? 0.16) * S, r0 = (o.back ?? 0.05) * S, D = F.mask(); for (let i = 0; i < D.length; i++) D[i] = Uf[i] < r1 ? 1 : 0
    const Df = sdf(F, D), burstM = fillMask(F, shards); for (let i = 0; i < D.length; i++) if (Df[i] < -(r1 - r0) && o.backing !== false) burstM[i] = 1
    // holes the backing closes round (a counter too wide to close) are filled too: flood the open wall from the edge
    { const seen = new Uint8Array(D.length), st = []; for (let i = 0; i < F.nx; i++) st.push(i, (F.ny - 1) * F.nx + i); for (let j = 0; j < F.ny; j++) st.push(j * F.nx, j * F.nx + F.nx - 1)
      while (st.length) { const c = st.pop(); if (seen[c] || burstM[c] || U[c]) continue; seen[c] = 1; const i = c % F.nx, j = (c - i) / F.nx; if (i > 0) st.push(c - 1); if (i < F.nx - 1) st.push(c + 1); if (j > 0) st.push(c - F.nx); if (j < F.ny - 1) st.push(c + F.nx) }
      if (o.backing !== false) for (let c = 0; c < D.length; c++) if (!seen[c]) burstM[c] = 1 }
    for (let i = 0; i < D.length; i++) if (U[i]) burstM[i] = 0
    const bf = sdf(F, burstM)
    out.burst = [...fillPass(F, bf, { cap: 2, dist: 0.1, colour: C.dark }, { gap: 0.034, inset: 0.012, ang: 0.6, speed: 1.8 }),
      ...edgePass(F, bf, 0.008, { cap: 1, dist: 0.06, colour: C.dark }, { speed: 1.2, min: 0.04 })]
  }

  // 3. the 3D block
  const d3 = (o.depth ?? [0.045, -0.06]).map((v) => v * S)
  const B = block(F, U, d3)
  out.block = [...fillPass(F, B.f, { cap: 2, dist: 0.09, colour: C.mid }, { gap: 0.03, inset: 0.012, ang: -0.9, speed: 1.5 }),
    ...edgePass(F, B.f, 0.01, { cap: 1, dist: 0.06, colour: C.mid }, { speed: 1.1, min: 0.04 })]

  // 4. the fill: rings round each part close to its edge, then passes across the middle, then a second coat
  out.fill = [
    ...parts.flatMap((l) => edgePass(l.F, l.f, 0.06, { cap: 3, dist: 0.085, colour: C.fill }, { speed: 1.7, corner: 0.4 })),
    ...fillPass(F, Uf, { cap: 3, dist: 0.09, colour: C.fill }, { gap: 0.06, inset: 0.1, ang: 0.08, speed: 1.7 }),
    ...fillPass(F, Uf, { cap: 3, dist: 0.1, colour: C.fill }, { gap: 0.065, inset: 0.05, ang: 1.25, speed: 1.9 }),
    ...parts.flatMap((l) => edgePass(l.F, l.f, 0.021, { cap: 2, dist: 0.075, colour: C.fill }, { speed: 1.2, corner: 0.7 })),
  ]
  // 5. the fade: a dusting of the mid value up from the bottom of each letter
  const fadeTo = bx.y0 + H * (o.fade ?? 0.38)
  out.fade = fillPass(F, Uf, { cap: 3, dist: 0.28, colour: C.mid, pressure: o.fadeP ?? 0.45 }, { gap: 0.07, inset: 0.07, ang: 0.0, speed: 1.9, keep: (x, y) => y < fadeTo + jitter(0.03) })

  // 6. detail, in the dark value, inside the letters
  // the shadow each part casts on the parts behind it (down and right of its edge)
  const sd = (o.shadow ?? [0.05, -0.07]).map((v) => v * S), di = Math.round(sd[0] * F.res), dj = Math.round(sd[1] * F.res)
  const shM = F.mask()
  for (let j = 0; j < F.ny; j++) for (let i = 0; i < F.nx; i++) {
    const c = j * F.nx + i, me = top[c]; if (me < 0) continue
    const si = i - di, sj = j - dj; if (si < 0 || sj < 0 || si >= F.nx || sj >= F.ny) continue
    if (top[sj * F.nx + si] > me) shM[c] = 1
  }
  // facets down the shadow side of each body, notches in from its edge (black teeth), splits along its construction line
  const facetPolys = [], facetOwner = [], splits = []
  const inside = (i, x, y, m = 0.02) => topAt(x, y) === i && at(F, Uf, x, y) < -m * 0.6 && at(parts[i].F, parts[i].f, x, y) < -m
  parts.forEach((p, i) => {
    if (!p.axis || p.w < 0.1 * S) return
    const { p: A, cum, L } = along(p.axis); if (L < 0.2 * S) return
    // which side is the shadow side: the normal turned from the light, on average
    let s = 0; A.forEach((_, k) => { const n = normalAt(A, k); s += n[0] * LIGHT[0] + n[1] * LIGHT[1] }); const side = s > 0 ? -1 : 1
    const W = p.w, at01 = (t) => { const k = Math.max(0, Math.min(A.length - 1, cum.findIndex((c) => c >= t * L))); return k }
    const facet = (t0, t1, off, hw) => {
      const left = [], right = []
      for (let t = t0; t <= t1 + 1e-6; t += (t1 - t0) / 16) {
        const k = at01(t), n = normalAt(A, k), u = (t - t0) / (t1 - t0), h = hw * Math.min(1, u * 5) * Math.pow(1 - u, 0.9)
        const c = [A[k][0] + n[0] * off * side, A[k][1] + n[1] * off * side]
        left.push([c[0] + n[0] * h, c[1] + n[1] * h]); right.push([c[0] - n[0] * h, c[1] - n[1] * h])
      }
      facetPolys.push([...left, ...right.reverse()]); facetOwner.push(i)
    }
    if (p.kind === 'body') {
      facet(0.08, 0.84, W * 0.16, W * 0.2)
      // notches: teeth cut in from the shadow edge, raked along the cutting angle
      for (const t of i % 2 ? [0.36] : [0.3, 0.62]) {
        const k = at01(t), n = normalAt(A, k), e = [A[k][0] + n[0] * side * W * 0.55, A[k][1] + n[1] * side * W * 0.55]
        const dx = A[Math.min(A.length - 1, k + 3)][0] - A[k][0], dy = A[Math.min(A.length - 1, k + 3)][1] - A[k][1], dl = Math.hypot(dx, dy) || 1
        const tip = [e[0] - n[0] * side * W * 0.42 + dx / dl * W * 0.22, e[1] - n[1] * side * W * 0.42 + dy / dl * W * 0.22]
        facetPolys.push([[e[0] - dx / dl * W * 0.1, e[1] - dy / dl * W * 0.1], tip, [e[0] + dx / dl * W * 0.1, e[1] + dy / dl * W * 0.1]]); facetOwner.push(i)
      }
    } else if (p.kind === 'link' || W > 0.15 * S) facet(0.04, 0.72, W * 0.14, W * 0.17)
    // a split along the construction line, on the lit side, forked at its end
    if (p.kind !== 'body' || i % 3 === 0) {
      const t0 = p.kind === 'body' ? 0.5 : 0.08, t1 = p.kind === 'body' ? 0.88 : 0.62, line = []
      for (let t = t0; t <= t1; t += 0.02) { const k = at01(t), n = normalAt(A, k); line.push([A[k][0] - n[0] * side * W * 0.16, A[k][1] - n[1] * side * W * 0.16]) }
      const e = line[line.length - 1], b = line[line.length - 3] || line[0], a = Math.atan2(e[1] - b[1], e[0] - b[0]), fl = 0.05 * S
      splits.push({ i, pts: line }); void a; void fl
    }
  })
  const fcM = maskOf(F, facetPolys, (c, k) => top[c] === facetOwner[k] && Uf[c] < -0.016)
  for (let c = 0; c < shM.length; c++) if (fcM[c]) shM[c] = 1
  const shF = sdf(F, shM)
  out.detail = [...fillPass(F, shF, darkCan, { gap: 0.008, inset: 0.004, ang: -0.9, speed: 1.3 }),
    ...edgePass(F, shF, 0.006, darkCan, { speed: 0.9, corner: 0.7, min: 0.03 })]
  for (const s of splits) for (const r of runsWhere(resample(s.pts, 0.006), (x, y) => inside(s.i, x, y, 0.025))) out.detail.push(stroke(r, { cap: 1, dist: 0.045, colour: C.dark }, { speed: 1.2, corner: 0.6, step: 0.006, ease: 0.02 }))

  // 7. outlines: the 3D's outline where it shows; every part, going under the parts in front, bold round the outside
  // of the piece and finer where parts overlap; the 3D's corner lines
  const bold = { cap: 1, dist: o.lineDist ?? 0.085, colour: C.dark }, fine = { cap: 1, dist: 0.055, colour: C.dark }
  out.outline = [...lines(F, B.f, { cap: 1, dist: 0.07, colour: C.dark }, { level: 0.004, keep: (x, y) => at(F, Uf, x, y) > 0.012, speed: 0.75 })]
  parts.forEach((p, i) => {
    const vis = (x, y) => { for (const [dx, dy] of [[0, 0], [0.006, 0], [-0.006, 0], [0, 0.006], [0, -0.006]]) if (topAt(x + dx, y + dy) > i) return false; return true }
    for (const loop of contours(p.F, p.f, 0.004, 0.0015)) for (const r of visibleRuns(loop, vis)) {
      const rr = resample(r, 0.006)
      for (const q of runsWhere(rr, (x, y) => at(F, Uf, x, y) > 0)) out.outline.push(stroke(q, bold, { speed: 0.6, corner: 0.7, step: 0.008 }))
      for (const q of runsWhere(rr, (x, y) => at(F, Uf, x, y) <= 0)) out.outline.push(stroke(q, fine, { speed: 0.7, corner: 0.7, step: 0.008 }))
    }
  })
  for (const loop of contours(F, Uf, 0.004, 0.01)) {
    for (let i = 0; i < loop.length; i++) {
      const a = loop[(i + loop.length - 1) % loop.length], b = loop[i], cN = loop[(i + 1) % loop.length]
      const v1 = [b[0] - a[0], b[1] - a[1]], v2 = [cN[0] - b[0], cN[1] - b[1]], l1 = Math.hypot(...v1), l2 = Math.hypot(...v2)
      if (l1 < 0.03 || l2 < 0.03) continue
      if (Math.acos(Math.max(-1, Math.min(1, (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2)))) < 0.5) continue
      const m = [b[0] + d3[0] * 0.5, b[1] + d3[1] * 0.5]
      if (at(F, Uf, m[0], m[1]) < 0.01 || at(F, B.f, m[0], m[1]) > 0) continue
      out.outline.push(stroke([[b[0] + d3[0] * 0.12, b[1] + d3[1] * 0.12], [b[0] + d3[0], b[1] + d3[1]]], { cap: 1, dist: 0.07, colour: C.dark }, { speed: 0.5, step: 0.006 }))
    }
  }

  // 8. shine: a bevel on the edges turned from the light (the letters stand up off the wall), highlights on the lit
  // edges when the fill is not the light colour, splinters of light along the big shards, stars
  const hiCan = { cap: 1, dist: 0.05, colour: C.light }
  out.shine = []
  if (o.highlights) out.shine.push(...highlights(F, Uf, hiCan, { inset: 0.032, light: LIGHT, facing: 0.6, min: 0.06, max: 0.32, speed: 0.6, keep: () => rand() < 0.985 }))
  for (const [a, b] of rays) {
    const path = runsWhere(resample([a, b], 0.01), (x, y) => at(F, Uf, x, y) > 0.03)
    for (const r of path) if (len(r) > 0.08) out.shine.push(stroke(r, { cap: 1, dist: 0.06, colour: C.light }, { speed: 2.4, step: 0.01, ease: 0.05 }))
  }
  const star = (x, y, k) => [stroke([[x, y - k], [x, y + k]], hiCan, { speed: 0.9 }), stroke([[x - k * 0.65, y], [x + k * 0.65, y]], hiCan, { speed: 0.9 }), dot(x, y, hiCan, 0.1)]
  for (const [x, y, k] of o.stars || []) out.shine.push(...star(bx.x0 + x * (bx.x1 - bx.x0), bx.y0 + y * H, k))

  // 9. drips off the bottoms, in the fill
  const runs = [], used = []
  for (const p of bottoms(F, Uf, { step: 0.02, facing: 0.7 }).sort(() => rand() - 0.5)) {
    if (runs.length >= (o.drips ?? 22)) break
    if (used.some((u) => Math.abs(u - p[0]) < 0.06)) continue
    const r = rand(); let l = Math.min(0.42, H * (r < 0.15 ? 0.3 + rand() * 0.12 : 0.05 + rand() * 0.16))
    for (let s = 0.03; s < l; s += 0.01) if (at(F, Uf, p[0], p[1] - s) < 0.02) { l = s - 0.03; break }
    if (l < 0.06) continue
    used.push(p[0]); runs.push([p[0], p[1] + 0.02, l])
  }
  out.drips = drips(runs.sort((a, b) => a[0] - b[0]), { cap: 1, dist: 0.055, colour: C.fill }, { speed: 0.9, hold: 0.14, hold0: 0.12 })

  // 10. chips: knocked back near the edges with the buff can
  out.chips = scatter(F, o.chips ?? 10, (x, y) => { const d = at(F, Uf, x, y); return d < -0.004 && d > -0.05 }, (x, y) => {
    const can = { cap: 1, dist: 0.05, buff: true, colour: '#000000' }
    if (rand() < 0.3) { const a = rand() * 6.28, l = 0.01 + rand() * 0.02; return stroke([[x, y], [x + Math.cos(a) * l, y + Math.sin(a) * l]], can, { speed: 1.5 }) }
    return stroke([[x, y], [x + jitter(0.012), y + jitter(0.012)]], can, { speed: 2 })
  })

  // 11. the V mark and the dedication
  out.tag = []
  if (o.mark !== false) out.tag.push(...vmarkStrokes(bx.x1 + 0.05, bx.y0 - 0.02, 0.22, { colour: C.light }))
  if (o.dedication !== false) {
    const free = (x, y) => { for (let u = -0.05; u <= 0.5; u += 0.05) for (let v = -0.05; v <= 0.25; v += 0.05) if (at(F, Uf, x + u, y + v) < 0.06) return false; return true }
    let spot = null
    for (const [fx, fy] of [[0.86, 0.02], [0.8, 0.08], [0.9, 0.12], [0.02, 0.86], [0.1, 0.9], [0.5, 0.02], [0.3, 0.0], [0.0, -0.08], [0.06, -0.12], [0.85, -0.1], [0.5, -0.12]]) { const x = bx.x0 + fx * (bx.x1 - bx.x0), y = bx.y0 + fy * H; if (free(x, y)) { spot = [x, y]; break } }
    if (spot) out.tag.push(...smallTag(o.dedication || 'NPG', spot[0], spot[1], 0.16, { cap: 1, dist: 0.05, colour: C.light }))
  }

  const order = ['glow', 'burst', 'block', 'fill', 'fade', 'detail', 'outline', 'shine', 'drips', 'chips', 'tag']
  if (o.log) console.log('   ' + order.map((k) => `${k} ${(out[k] || []).length}/${(out[k] || []).reduce((s, x) => s + x.pts[x.pts.length - 1][2] + 0.18, 0).toFixed(0)}s`).join('  '))
  return sketch(id, name, 'piece', order.flatMap((k) => out[k] || []), o.about)
}

const VEXVOID = ['V', 'E', 'X', 'V2', 'O', 'I', 'D']
export const PIECES = [
  { id: 'piece-vexvoid', make: () => piece('piece-vexvoid', 'VEXVOID', wildWord(VEXVOID, { h: 1.05, kern: [0, -0.14, -0.06, -0.12, -0.1, -0.1, 0.02], lift: [0, 0.02, -0.03, 0.03, 0, 0.02, -0.02], slant: 0.1, order: [0, 2, 1, 3, 4, 5, 6],
    links: [{ from: [6, 0.4, 0.04], via: [4, 0.4, -0.36], to: [3, -0.1, -0.12], ws: [0.15, 0.13, 0.09], z: 3.5 }, { from: [6, 0.4, 0.04], via: [4, 0.4, -0.36], to: [3, -0.1, -0.12], arrow: [0.38, 0.44], z: 3.5 }] }), {
    log: true, stars: [[0.02, 1.05, 0.09], [0.62, 1.12, 0.07], [1.02, 0.86, 0.11]], about: 'hall-of-fame VEXVOID: technical wildstyle in interlocking parts, shard fans, black detail, glow, grey 3D, drips' }) },
  { id: 'piece-vexvoid-arch', make: () => piece('piece-vexvoid-arch', 'VEXVOID ARCH', wildWord(VEXVOID, { h: 0.82, kern: [0, -0.16, -0.1, -0.14, -0.12, -0.1, -0.02], slant: 0.12, arch: { rise: 0.75, bend: 1.0 }, teeth: 1, order: [0, 2, 1, 4, 3, 6, 5] }), {
    log: true, colours: { fill: WHITE, mid: GREY, light: CHROME }, glow: 0, burstLen: 1.4, depth: [0.06, -0.08], fade: 0.3, fadeP: 0.22, stars: [[0.5, 1.12, 0.1]],
    about: 'VEXVOID on an arch: tunnel wildstyle, white face, black detail, long shards' }) },
  { id: 'piece-v3x', make: () => piece('piece-v3x', 'V3X', wildWord(['V', '3', 'X'], { h: 1.08, kern: [0, -0.06, 0.02], lift: [0, 0.04, -0.02], slant: 0.1 }), {
    log: true, burstLen: 1.4, rays: [[0.5, 0.55, 14, 1.0, 0.1]], stars: [[1.0, 1.0, 0.1], [0.04, 1.1, 0.07]], about: 'chunky V3X with shards bursting off it' }) },
  { id: 'piece-void', make: () => piece('piece-void', 'VOID', wildWord(['V2', 'O', 'I', 'D'], { h: 1.05, kern: [0, -0.1, -0.12, -0.08], lift: [0.02, 0, 0.03, -0.02], slant: 0.08 }), {
    log: true, glow: 0.34, burstLen: 0.8, drips: 30, fade: 0.5, stars: [[0.05, 1.08, 0.1], [0.97, 1.0, 0.08]], about: 'VOID in the album glow, long drips' }) },
  { id: 'piece-vcrown', make: () => piece('piece-vcrown', 'V CROWN', crownV(1.18), {
    log: true, glow: 0.3, burstLen: 1.3, rays: [[0.5, 0.42, 12, 0.9, 0.26]], drips: 12, mark: false, about: 'the crown V: the V mark as a piece, a crown of thorns, glow, shards' }) },
]

// the crown V: a blade V, a crown of thorns swept up off both arms (unit height, scaled to h), as parts
function crownV(h) {
  const T = (ctrl, ws, z) => { const s = sabre(ctrl, ws), n = s.axis.length - 1; return { kind: 'ext', depth: z, polys: [s.poly], cuts: [], axis: s.axis, w: Math.max(...ws) * 0.8, tips: [{ p: s.axis[n], dir: (() => { const a = s.axis[n], b = s.axis[n - 2], l = Math.hypot(a[0] - b[0], a[1] - b[1]); return [(a[0] - b[0]) / l, (a[1] - b[1]) / l] })(), w: Math.max(...ws) }] } }
  const B = (a, b, w, z, tip) => ({ kind: 'body', depth: z, polys: [tblade(a, b, w[0], w[1], { cut: [1, 0.42] }, tip ? { point: 0.16 } : null)], cuts: [], axis: [a, b], w: (w[0] + w[1]) / 2, tips: [] })
  const parts = [
    T([[0.06, 0.92], [-0.06, 1.14], [-0.2, 1.38]], [0.15, 0.09, 0], -1), T([[0.15, 0.94], [0.12, 1.24], [0.14, 1.56]], [0.14, 0.08, 0], -1),
    T([[0.24, 0.9], [0.32, 1.14], [0.42, 1.36]], [0.12, 0.07, 0], -1), T([[0.84, 0.92], [0.98, 1.14], [1.16, 1.32]], [0.14, 0.08, 0], -1),
    T([[0.72, 0.8], [0.7, 1.02], [0.64, 1.18]], [0.1, 0.06, 0], -1),
    B([0.46, 0.06], [0.92, 1.04], [0.1, 0.26], 0, false), B([0.0, 1.0], [0.47, -0.08], [0.36, 0.14], 1, true),
    T([[0.3, 0.5], [0.46, 0.6], [0.66, 0.64]], [0.12, 0.07, 0], 1.5),
  ]
  return parts.map((p) => ({ ...p, polys: p.polys.map((P) => P.map(([x, y]) => [x * h, y * h])), axis: p.axis.map(([x, y]) => [x * h, y * h]), w: p.w * h,
    tips: p.tips.map((t) => ({ ...t, p: [t.p[0] * h, t.p[1] * h], w: t.w * h })) })).sort((a, b) => a.depth - b.depth)
}
