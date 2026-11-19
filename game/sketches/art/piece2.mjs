// PIECES, pass 3: a piece painted in a writer's order from letter PARTS (alpha.mjs / wild3.mjs), with the rules in
// the graffiti skill (~/.claude/skills/graffiti): one light (from the top left), one 3D vector, one outline weight,
// restraint with drips and glow.
//   cloud    a background cloud behind everything: a bubbly slab in GREY, a few loose bubbles off its edge
//   fill     the letter faces in the FILL colour (two fat-cap coats, edges cut in)
//   fades    WHITE misted down from the top of every letter, GREY up from the bottom (each letter its own fade)
//   3D       the block: the union swept down-right; faces turned to the side in GREY, faces turned down in BLACK,
//            each misted darker away from the letter
//   overlap  where a part passes in front of another, the shadow it casts on the one behind (BLACK)
//   keyline  the second outline: a WHITE band right round letters + 3D, between them and the cloud
//   outline  BLACK, one weight: every part, going under the parts in front of it; the 3D's outline and corner lines
//   cuts     (wild) splits along the bars in BLACK; cutbacks of the fill into the outline at sharp tips
//   shine    WHITE highlights just inside the edges that face the light, broken into dashes; two or three glints
//   tag      the V mark and a small NPG dedication
// Colour roles: FILL (CHROME), LIGHT (WHITE: fade, keyline, shine), MID (GREY: cloud, low fade, 3D side), DARK (BLACK).
import { WHITE, BLACK, CHROME, GREY, rand, jitter, stroke, dot } from './can.mjs'
import { fillPass, edgePass, lines, block, highlights, bottoms, drips, sketch, grad } from './paint.mjs'
import { frame, fill as fillMask, sub, or, sdf, at, contours, resample, visibleRuns, len, hatch } from './raster.mjs'
import { vmarkStrokes } from './vmark.mjs'
import { smallTag } from './tags.mjs'
import { footprint } from './preview.mjs'

// a solid fill of a narrow shape: concentric passes in from its edge (each cell once; any shape, no short rows dropped)
export const concentric = (F, f, can, o = {}) => { const fp = footprint({ cap: can.cap, dist: can.dist }), step = o.step ?? fp.width * fp.hard * 0.7, out = []
  for (let lv = o.inset ?? step * 0.6; lv < 0.5; lv += step) { const ls = lines(F, f, can, { level: -lv, speed: o.speed ?? 1.4, min: o.min ?? 0.012 }); if (!ls.length) break; out.push(...ls) } return out }
// a solid fill: rows close enough that the can's solid cores meet (no stripes between passes)
export const solid = (F, f, can, o = {}) => { const fp = footprint({ cap: can.cap, dist: can.dist }); return fillPass(F, f, can, { ...o, gap: o.gap ?? fp.width * fp.hard * (o.k ?? 0.8) }) }

export const LIGHT = [-0.55, 0.83]   // the light comes from the top left
const runsWhere = (p, ok, min = 0.02) => { const out = []; let r = []; for (const q of p) { if (ok(q[0], q[1])) r.push(q); else { if (r.length > 1 && len(r) > min) out.push(r); r = [] } } if (r.length > 1 && len(r) > min) out.push(r); return out }
const bboxOf = (polys) => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const P of polys) for (const [x, y] of P) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) } return { x0, y0, x1, y1 } }
const maskFrom = (F, f, lvl = 0) => { const m = F.mask(); for (let i = 0; i < m.length; i++) m[i] = f[i] < lvl ? 1 : 0; return m }

/** Masks of the parts (back to front) in one frame: each part's mask and field, the union, the depth buffer. */
export function partMasks(parts, { margin = 0.9, res = 300 } = {}) {
  const b = bboxOf(parts.flatMap((p) => p.polys))
  const F = frame(b.x0 - margin, b.y0 - margin, b.x1 + margin, b.y1 + margin, res)
  const top = new Int16Array(F.nx * F.ny).fill(-1), U = F.mask()
  parts.forEach((p, i) => {
    let m = fillMask(F, p.polys); if (p.cuts && p.cuts.length) m = sub(m, fillMask(F, p.cuts)); if (p.adds && p.adds.length) m = or(m, fillMask(F, p.adds))
    for (let c = 0; c < m.length; c++) if (m[c]) { top[c] = i; U[c] = 1 }
    p.m = m; p.i = i; p.box = bboxOf(p.polys)
  })
  // each part's field is of what SHOWS of it plus what is hidden (its whole shape): outlines need the whole shape
  for (const p of parts) p.f = sdf(F, p.m)
  const topAt = (x, y) => { const i = Math.floor((x - F.x0) * F.res), j = Math.floor((y - F.y0) * F.res); return i < 0 || j < 0 || i >= F.nx || j >= F.ny ? -1 : top[j * F.nx + i] }
  return { F, U, Uf: sdf(F, U), top, topAt, box: b }
}

export function piece3(id, name, parts, o = {}) {
  const C = { fill: CHROME, light: WHITE, mid: GREY, dark: BLACK, ...(o.colours || {}) }
  const b0 = bboxOf(parts.flatMap((p) => p.polys))
  const k = o.capH ?? (b0.y1 - b0.y0) * 0.75   // a unit for sizes: the cap height (details follow the letters' size)
  const M = partMasks(parts, { margin: o.margin ?? ((o.cloud ?? 0.26) * 1.25 + 0.3) * k + 0.12, res: o.res ?? 300 }), { F, U, Uf, top, topAt, box } = M
  const out = {}

  // ---- the 3D block, and which way each of its faces is turned ----
  const d3 = (o.depth ?? [0.075, -0.1]).map((v) => v * k)
  const Bm = sub((() => { const sw = block(F, U, d3); return or(sw.m, U) })(), U), Bf = sdf(F, Bm)
  const n3 = Math.ceil(Math.hypot(...d3) * F.res), side = F.mask(), down = F.mask()
  for (let j = 0; j < F.ny; j++) for (let i = 0; i < F.nx; i++) {
    const c = j * F.nx + i; if (!Bm[c]) continue
    // walk back along the extrusion to the letter's edge; the edge's normal says which face this is
    let x = F.x0 + (i + 0.5) / F.res, y = F.y0 + (j + 0.5) / F.res, nx = 0, ny = -1
    for (let s = 0; s <= n3; s++) {
      const xx = x - d3[0] * s / n3, yy = y - d3[1] * s / n3
      if (at(F, Uf, xx, yy) < 0.004) { const g = grad(F, Uf, xx + d3[0] * 0.05, yy + d3[1] * 0.05, 0.022); nx = g[0]; ny = g[1]; break }
    }
    if (nx > -ny * 0.85) side[c] = 1; else down[c] = 1
  }
  const sideF = sdf(F, side), downF = sdf(F, down)

  // ---- the silhouette (letters + 3D), the keyline round it and the cloud behind ----
  const S = or(U, Bm), Sf = sdf(F, S)
  const key = (o.key ?? 0.07) * k
  const cloudR = (o.cloud ?? 0.26) * k
  if (o.cloud !== 0) {
    // a slab round the silhouette, its edge made of bubbles of a few sizes, closed so it reads as one cloud
    const base = maskFrom(F, Sf, cloudR * 0.55), bf = sdf(F, base), bubbles = []
    for (const loop of contours(F, bf, 0, 0.004)) {
      const p = resample(loop.concat([loop[0]]), 0.12 * k)
      p.forEach((q, n) => { const r = (0.1 + 0.16 * Math.abs(Math.sin(n * 2.399 + q[0] * 3.1))) * k; bubbles.push([q[0], q[1], r]) })
    }
    const cm = base.slice()
    for (const [cx, cy, r] of bubbles) { const i0 = Math.max(0, Math.floor((cx - r - F.x0) * F.res)), i1 = Math.min(F.nx - 1, Math.ceil((cx + r - F.x0) * F.res)), j0 = Math.max(0, Math.floor((cy - r - F.y0) * F.res)), j1 = Math.min(F.ny - 1, Math.ceil((cy + r - F.y0) * F.res))
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const x = F.x0 + (i + 0.5) / F.res, y = F.y0 + (j + 0.5) / F.res; if ((x - cx) ** 2 + (y - cy) ** 2 < r * r) cm[j * F.nx + i] = 1 } }
    // close it (fills the dents between bubbles a little) and keep it off the very edge of the frame
    const cf0 = sdf(F, cm), cm2 = maskFrom(F, cf0, 0.03 * k), cf = sdf(F, maskFrom(F, sdf(F, cm2), -0.03 * k))
    const cloudKeep = (x, y) => at(F, Sf, x, y) > key * 0.6
    out.cloud = [...fillPass(F, cf, { cap: 3, dist: 0.16, colour: C.mid }, { gap: 0.055, inset: 0.05, ang: 0.35, speed: 2.2, keep: cloudKeep }),
      ...fillPass(F, cf, { cap: 3, dist: 0.2, colour: C.mid, pressure: 0.7 }, { gap: 0.06, inset: 0.06, ang: -0.7, speed: 2.4, keep: cloudKeep }),
      ...edgePass(F, cf, 0.022, { cap: 2, dist: 0.09, colour: C.mid }, { speed: 1.3, min: 0.05 })]
    // a few loose bubbles off the cloud's edge, and a darker mist low in the cloud (it sits behind, in shade)
    const loose = []
    for (const loop of contours(F, cf, 0.06 * k, 0.004)) { const p = resample(loop.concat([loop[0]]), 0.55 * k); p.forEach((q, n) => { if (n % 3 === 1 && loose.length < (o.loose ?? 7)) loose.push([q[0], q[1], (0.035 + 0.03 * ((n * 7) % 3)) * k]) }) }
    for (const [x, y, r] of loose) out.cloud.push(dot(x, y, { cap: 3, dist: Math.max(0.05, Math.min(0.2, r * 1.6)), colour: C.mid }, 0.35))
  }

  // ---- the fill: two coats, each part's edge cut in ----
  out.fill = [
    // light coats (a fill that pools runs: the paint must stay under the drip point even when it has no time to set)
    ...solid(F, Uf, { cap: 3, dist: o.fillDist ?? 0.16, colour: C.fill }, { inset: 0.06, ang: 0.08, speed: 2.0, k: 0.85 }),
    ...fillPass(F, Uf, { cap: 3, dist: 0.18, colour: C.fill, pressure: 0.6 }, { gap: 0.07, inset: 0.06, ang: 1.3, speed: 2.4 }),
    // each part's edge cut in, only where that part shows (a ring under a part in front would show through it)
    ...parts.flatMap((p, i) => contours(F, p.f, -0.022, 0.002).flatMap((lp) => runsWhere(resample(lp.concat([lp[0]]), 0.008), (x, y) => topAt(x, y) === i, 0.05))
      .map((r) => stroke(r, { cap: 2, dist: 0.08, colour: C.fill, pressure: 0.5 }, { speed: 1.5, corner: 0.7, step: 0.01 }))),
  ]
  // ---- fades, letter by letter: light down from the top, mid up from the bottom, in three passes each so they blend ----
  out.fade = []
  const fadeTop = o.fadeTop ?? [0.62, 0.74, 0.86], fadeLow = o.fadeLow ?? [0.34, 0.22, 0.1]
  const glyphBox = {}
  for (const p of parts) { if (p.li < 0 || p.kind !== 'body') continue; const g = glyphBox[p.li] || (glyphBox[p.li] = { y0: Infinity, y1: -Infinity }); g.y0 = Math.min(g.y0, p.box.y0); g.y1 = Math.max(g.y1, p.box.y1) }
  const vOf = (x, y) => { const i = topAt(x, y); if (i < 0) return 0.5; const p = parts[i], g = glyphBox[p.li] || p.box; return (y - g.y0) / Math.max(0.01, g.y1 - g.y0) }
  fadeTop.forEach((t, n) => out.fade.push(...fillPass(F, Uf, { cap: 3, dist: 0.24, colour: C.light, pressure: 0.32 }, { gap: 0.05, inset: 0.035, ang: 0.0, speed: 2.1, keep: (x, y) => vOf(x, y) > t + jitter(0.025) })))
  fadeLow.forEach((t, n) => out.fade.push(...fillPass(F, Uf, { cap: 3, dist: 0.24, colour: C.mid, pressure: 0.3 }, { gap: 0.05, inset: 0.035, ang: 0.0, speed: 2.1, keep: (x, y) => vOf(x, y) < t + jitter(0.025) })))

  // ---- a fill effect (optional): bubbles rising in the lower half of the faces, each with a glint ----
  out.fx = []
  if (o.bubbles) {
    const placed = []
    for (let n = 0, tries = 0; n < o.bubbles && tries < o.bubbles * 60; tries++) {
      const x = box.x0 + rand() * (box.x1 - box.x0), y = box.y0 + rand() * (box.y1 - box.y0), v = vOf(x, y), r = (0.028 + 0.05 * Math.pow(rand(), 1.6) * (1 - v)) * k
      if (v > 0.55 || at(F, Uf, x, y) > -(r + 0.035 * k) || placed.some(([a, b, rr]) => Math.hypot(a - x, b - y) < r + rr + 0.03 * k)) continue
      const i = topAt(x, y); if (i < 0 || at(F, parts[i].f, x, y) > -(r + 0.03 * k)) continue
      placed.push([x, y, r]); n++
      out.fx.push(dot(x, y, r > 0.034 ? { cap: 3, dist: 0.05, colour: C.mid } : { cap: 2, dist: Math.max(0.05, Math.min(0.2, r * 2.4)), colour: C.mid }, 0.3))
      out.fx.push(dot(x - r * 0.35, y + r * 0.35, { cap: 1, dist: 0.05, colour: C.light }, 0.04))
    }
  }

  // ---- the 3D: side faces mid, faces turned down dark; each misted dark away from the letter ----
  const farOf = (x, y) => -at(F, Uf, x - d3[0], y - d3[1])   // > 0: the point d3 back is still inside the letter
  out.block = [
    ...concentric(F, sideF, { cap: 2, dist: 0.1, colour: C.mid, pressure: 0.85 }, { speed: 1.7 }),
    ...edgePass(F, sideF, 0.008, { cap: 1, dist: 0.06, colour: C.mid }, { speed: 1.2, min: 0.03 }),
    ...concentric(F, downF, { cap: 2, dist: 0.1, colour: C.dark, pressure: 0.85 }, { speed: 1.7 }),
    ...edgePass(F, downF, 0.008, { cap: 1, dist: 0.06, colour: C.dark }, { speed: 1.2, min: 0.03 }),
    // the shaded end of the side faces: a dark mist where the face runs away from the letter
    // the shade: a soft dark mist over the far side of the 3D (it falls on the cloud too: the piece's cast shadow)
    ...fillPass(F, Bf, { cap: 3, dist: 0.26, colour: C.dark, pressure: 0.22 }, { gap: 0.04, inset: 0.0, ang: -0.95, speed: 2.2, keep: (x, y) => farOf(x, y) < -(0.55 + jitter(0.06)) * Math.hypot(...d3) }),
  ]

  // ---- overlaps: the shadow a part in front casts on the part behind it ----
  const sh = (o.overlapShadow ?? [0.035, -0.05]).map((v) => v * k), di = Math.round(sh[0] * F.res), dj = Math.round(sh[1] * F.res), shM = F.mask()
  for (let j = 0; j < F.ny; j++) for (let i = 0; i < F.nx; i++) {
    const c = j * F.nx + i, me = top[c]; if (me < 0) continue
    const si = i - di, sj = j - dj; if (si < 0 || sj < 0 || si >= F.nx || sj >= F.ny) continue
    const t = top[sj * F.nx + si]; if (t > me && parts[t].depth > parts[me].depth + 0.5) shM[c] = 1
  }
  const shF = sdf(F, shM)
  // concentric passes (each cell painted once: a dense hatch here pools and runs)
  out.overlap = []
  for (let lv = 0.007; lv < 0.2; lv += 0.016) { const ls = lines(F, shF, { cap: 1, dist: 0.09, colour: C.dark, pressure: 0.8 }, { level: -lv, speed: 1.5, min: 0.015 }); if (!ls.length) break; out.overlap.push(...ls) }

  // ---- detail inside the faces (wild): splits along the bars, in the dark ----
  out.detail = []
  for (const s of o.splits || []) { for (const r of runsWhere(resample(s, 0.006), (x, y) => at(F, Uf, x, y) < -0.03 * k)) out.detail.push(stroke(r, { cap: 1, dist: 0.045, colour: C.dark }, { speed: 1.2, corner: 0.6, step: 0.006, ease: 0.03 })) }

  // ---- the keyline: a light band right round letters + 3D ----
  out.key = []
  if (key > 0) {
    const kc = { cap: 2, dist: Math.max(0.05, Math.min(0.12, key * 1.8)), colour: C.light, pressure: 0.75 }
    out.key.push(...lines(F, Sf, kc, { level: key * 0.35, speed: 0.9, min: 0.04 }))
    out.key.push(...lines(F, Sf, kc, { level: key * 0.65, speed: 0.9, min: 0.04 }))
  }

  // ---- outlines: one weight; each part under the parts in front; the 3D's outline and corner lines ----
  const lineCan = { cap: 1, dist: o.lineDist ?? 0.17, colour: C.dark }, fineCan = { cap: 1, dist: 0.07, colour: C.dark }
  out.outline = [...lines(F, Bf, fineCan, { level: 0.003, keep: (x, y) => at(F, Uf, x, y) > 0.01, speed: 0.8 })]
  parts.forEach((p, i) => {
    const vis = (x, y) => { for (const [dx, dy] of [[0, 0], [0.005, 0], [-0.005, 0], [0, 0.005], [0, -0.005]]) if (topAt(x + dx, y + dy) > i) return false; return true }
    for (const loop of contours(F, p.f, 0.003, 0.0015)) for (const r of visibleRuns(loop, vis)) {
      const rr = resample(r, 0.006)
      for (const q of runsWhere(rr, (x, y) => at(F, Uf, x, y) > -0.002)) out.outline.push(stroke(q, lineCan, { speed: 0.65, corner: 0.75, step: 0.008 }))
      for (const q of runsWhere(rr, (x, y) => at(F, Uf, x, y) <= -0.002)) out.outline.push(stroke(q, fineCan, { speed: 0.7, corner: 0.75, step: 0.008 }))
    }
  })
  // corner lines: from each sharp corner of the silhouette, along the extrusion, where it shows
  for (const loop of contours(F, Uf, 0.003, 0.006)) for (let i = 0; i < loop.length; i++) {
    const a = loop[(i + loop.length - 1) % loop.length], b = loop[i], c = loop[(i + 1) % loop.length]
    const v1 = [b[0] - a[0], b[1] - a[1]], v2 = [c[0] - b[0], c[1] - b[1]], l1 = Math.hypot(...v1), l2 = Math.hypot(...v2)
    if (l1 < 0.025 || l2 < 0.025) continue
    if (Math.acos(Math.max(-1, Math.min(1, (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2)))) < 0.45) continue
    const m = [b[0] + d3[0] * 0.5, b[1] + d3[1] * 0.5]
    if (at(F, Uf, m[0], m[1]) < 0.012 || at(F, Bf, m[0], m[1]) > -0.004) continue
    out.outline.push(stroke([[b[0] + d3[0] * 0.08, b[1] + d3[1] * 0.08], [b[0] + d3[0] * 0.98, b[1] + d3[1] * 0.98]], fineCan, { speed: 0.6, step: 0.006 }))
  }

  // ---- shine: highlights inside the lit edges (outer edges only, not counters), the longest one or two per part, each
  // broken once and ended with a dot; a few glints ----
  const hiCan = { cap: 1, dist: 0.045, colour: C.light }
  // the open wall round the piece (not the counters): flooded in from the frame's edge
  const ext = new Uint8Array(U.length); { const st = []; for (let i = 0; i < F.nx; i++) st.push(i, (F.ny - 1) * F.nx + i); for (let j = 0; j < F.ny; j++) st.push(j * F.nx, j * F.nx + F.nx - 1)
    while (st.length) { const c = st.pop(); if (ext[c] || U[c]) continue; ext[c] = 1; const i = c % F.nx, j = (c - i) / F.nx; if (i > 0) st.push(c - 1); if (i < F.nx - 1) st.push(c + 1); if (j > 0) st.push(c - F.nx); if (j < F.ny - 1) st.push(c + F.nx) } }
  const extAt = (x, y) => { const i = Math.floor((x - F.x0) * F.res), j = Math.floor((y - F.y0) * F.res); return i >= 0 && j >= 0 && i < F.nx && j < F.ny && ext[j * F.nx + i] === 1 }
  out.shine = []
  parts.forEach((p, i) => {
    if (p.kind === 'bit') return
    const reach = 0.03 * k + 0.035
    const keep = (x, y) => topAt(x, y) === i && at(F, Uf, x, y) < -0.02 && (o.hiCounters || extAt(x + LIGHT[0] * reach, y + LIGHT[1] * reach) || topAt(x + LIGHT[0] * reach, y + LIGHT[1] * reach) > i)
    const hs = highlights(F, p.f, hiCan, { inset: 0.03 * k, light: LIGHT, facing: o.hiFacing ?? 0.55, min: 0.08 * k, max: 0.55 * k, speed: 0.7, keep })
      .sort((a, b) => len(b.pts) - len(a.pts)).slice(0, o.hiPer ?? 2)
    for (const h of hs) {
      const pts = h.pts.map(([x, y]) => [x, y]), L = len(pts)
      if (L < 0.2 * k) { out.shine.push(h); continue }
      const cut1 = 0.66 + jitter(0.06), gapL = 0.04 * k
      const a = [], b = []; let acc = 0
      for (let q = 0; q < pts.length; q++) { if (q) acc += Math.hypot(pts[q][0] - pts[q - 1][0], pts[q][1] - pts[q - 1][1]); if (acc < L * cut1) a.push(pts[q]); else if (acc > L * cut1 + gapL) b.push(pts[q]) }
      if (a.length > 1) out.shine.push(stroke(a, hiCan, { speed: 0.7, corner: 0.5, step: 0.008, ease: 0.03 }))
      if (b.length > 2) { const e = b[Math.floor(b.length / 2)]; out.shine.push(dot(e[0], e[1], hiCan, 0.05)) }
    }
  })
  const glint = (x, y, s) => [stroke([[x, y - s], [x, y + s]], hiCan, { speed: 1.4, ease: s * 0.5 }), stroke([[x - s * 0.75, y], [x + s * 0.75, y]], hiCan, { speed: 1.4, ease: s * 0.5 }), dot(x, y, { cap: 2, dist: 0.06, colour: C.light }, 0.08)]
  for (const g of o.glints || []) {
    // a glint on the lit corner of a letter: [letter index, u, v] in that letter's box (0..1)
    const ps = parts.filter((p) => p.li === g[0]); if (!ps.length) continue
    const bb = bboxOf(ps.flatMap((p) => p.polys)), x = bb.x0 + (bb.x1 - bb.x0) * g[1], y = bb.y0 + (bb.y1 - bb.y0) * g[2]
    out.shine.push(...glint(x, y, (g[3] ?? 0.09) * k))
  }

  // ---- drips: off a couple of bottoms at most (pieces are controlled) ----
  out.drips = []
  if (o.drips) {
    const runs = [], used = []
    for (const p of bottoms(F, Uf, { step: 0.02, facing: 0.85 }).sort(() => rand() - 0.5)) {
      if (runs.length >= o.drips) break
      if (used.some((u) => Math.abs(u - p[0]) < 0.4)) continue
      let l = (0.08 + rand() * 0.14) * k; for (let s = 0.03; s < l; s += 0.01) if (at(F, Uf, p[0], p[1] - s) < 0.02) { l = s - 0.03; break }
      if (l < 0.05) continue; used.push(p[0]); runs.push([p[0], p[1] + 0.02, l])
    }
    out.drips = drips(runs, { cap: 1, dist: 0.05, colour: C.fill }, { speed: 0.9, hold: 0.12, hold0: 0.1 })
  }

  // ---- the V mark and the dedication, small, bottom right, on the cloud ----
  out.tag = []
  const bx = box
  if (o.mark !== false) out.tag.push(...vmarkStrokes(bx.x1 + 0.1 * k, bx.y0 - 0.18 * k, 0.2 * k, { colour: C.light }))
  if (o.dedication !== false) out.tag.push(...smallTag(o.dedication || 'NPG', bx.x0 + 0.05 * k, bx.y0 - 0.26 * k, 0.13 * k, { cap: 1, dist: 0.05, colour: C.light }))

  const order = ['cloud', 'block', 'fill', 'fade', 'fx', 'overlap', 'detail', 'key', 'outline', 'shine', 'drips', 'tag']
  if (o.log) console.log('   ' + order.map((n) => `${n} ${(out[n] || []).length}`).join('  '))
  return sketch(id, name, 'piece', order.filter((n) => !o.only || o.only.includes(n)).flatMap((n) => out[n] || []), o.about)
}

// ---- the starter pieces, one per style level (all our own letters) ----
import { layWord, STRAIGHT, SEMI } from './alpha.mjs'
import { WILD } from './wild3.mjs'
const VXV = ['V', 'E', 'X', 'V2', 'O', 'I', 'D']
export const PIECES3 = [
  { id: 'piece-vexvoid', make: () => piece3('piece-vexvoid', 'VEXVOID', layWord(VXV, WILD, { h: 1.0, slant: 0.16, kern: [0, 0.0, -0.1, -0.1, -0.08, -0.04, -0.04], lift: [-0.06, 0.03, -0.03, 0.03, 0, 0.04, -0.02], scale: [1.14, 1, 1, 1, 1, 1, 1.06] }),
    { capH: 1, log: true, glints: [[0, 0.18, 0.92], [4, 0.2, 0.9]], about: 'wildstyle VEXVOID: interlocked parts, arrows grown out of the letters, chrome fade, 3D, keyline, cloud' }) },
  { id: 'piece-vexvoid-semi', make: () => piece3('piece-vexvoid-semi', 'VEXVOID SEMI', layWord(VXV, SEMI, { h: 1.0, kern: [0, -0.12, -0.1, -0.08, -0.07, -0.05, -0.05], lift: [-0.08, 0.02, -0.02, 0.02, 0, 0.03, -0.01], scale: [1.14, 1, 1, 1, 1, 1, 1.06] }),
    { capH: 1, log: true, bubbles: 26, glints: [[0, 0.18, 0.92], [4, 0.2, 0.9]], about: 'semi-wild VEXVOID: straight letters with arrows, kicks and cuts grown out of them' }) },
  { id: 'piece-vexvoid-straight', make: () => piece3('piece-vexvoid-straight', 'VEXVOID STRAIGHT', layWord(['V', 'E', 'X', 'V', 'O', 'I', 'D'], STRAIGHT, { h: 1.0, kern: [0, -0.1, -0.08, -0.08, -0.07, -0.05, -0.05], lift: [-0.08, 0.02, -0.02, 0.02, 0, 0.03, -0.01], scale: [1.14, 1, 1, 1, 1, 1, 1.06] }),
    { capH: 1, log: true, glints: [[0, 0.18, 0.95], [5, 0.3, 0.98]], about: 'straight letters: readable block VEXVOID, chrome fade, 3D, keyline, cloud' }) },
  { id: 'piece-v3x', make: () => piece3('piece-v3x', 'V3X', layWord(['V', '3', 'X'], STRAIGHT, { h: 1.15, slant: 0.1, kern: [0, -0.06, -0.06], lift: [0, 0.02, -0.02], scale: [1.1, 1, 1.05] }),
    { capH: 1.15, log: true, depth: [0.12, -0.16], colours: { fill: WHITE, light: CHROME }, fadeTop: [], glints: [[0, 0.16, 0.94]], about: '3D blockbuster V3X: heavy square letters, a deep two-tone 3D, white face' }) },
  { id: 'piece-void', make: () => piece3('piece-void', 'VOID', layWord(['V', 'O', 'I', 'D'], SEMI, { h: 1.05, kern: [0, -0.08, -0.04, -0.04], lift: [-0.04, 0, 0.03, -0.01], scale: [1.1, 1, 1, 1.06] }),
    { capH: 1.05, log: true, bubbles: 16, glints: [[0, 0.18, 0.92]], about: 'semi-wild VOID: chrome fade, 3D, keyline, cloud' }) },
]
