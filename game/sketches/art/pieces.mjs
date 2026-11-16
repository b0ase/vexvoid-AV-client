// PIECES: the hall-of-fame VEXVOID family (targets piece-A..E). The writer's order, layer by layer:
//   glow    a wide fat-cap fog in a light value behind where the letters go (the album covers' halo)
//   burst   black shards bursting out from behind the letters (dark against the glow)
//   3D      the block, extruded down and to the right, in a mid value
//   fill    the letters, two coats (rings round each letter, then passes across), sharp edges cut in close
//   fade    a light dusting of the mid value up from the bottoms
//   cracks  a pattern in the fill: shattered-glass cracks and slivers in the dark value
//   outline the letters in a skinny cap close in, each going under the one in front; the 3D's outline and its corner lines
//   shine   highlights on the edges facing the light; splinters of light out over the burst; stars
//   drips   long thin runs off the bottoms;  chips  the paint knocked back near the edges (the buff can)
//   tag     the V mark and a small NPG dedication
// Colour roles (so the recolour slots map cleanly): LIGHT glow/shine, DARK burst/cracks/outlines, MID 3D/fade, FILL.
import { WHITE, BLACK, CHROME, GREY, rand, jitter, stroke, dot } from './can.mjs'
import { prepare, fillPass, edgePass, outlines, lines, block, highlights, bottoms, drips, scatter, sketch, grad } from './paint.mjs'
import { at, fill as fillMask, sub, sdf, contours, resample } from './raster.mjs'
import { wildWord } from './wild.mjs'
import { vmarkStrokes } from './vmark.mjs'
import { smallTag } from './tags.mjs'

export function piece(id, name, letters, o = {}) {
  const C = { light: CHROME, dark: BLACK, mid: GREY, fill: WHITE, ...(o.colours || {}) }
  const { F, L, U, Uf } = prepare(letters, { margin: o.margin ?? 0.75 })
  const out = {}
  const bx = (() => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const l of letters) for (const p of l.polys) for (const [x, y] of p) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y) } return { x0, y0, x1, y1 } })()
  const H = bx.y1 - bx.y0
  const pick = (ok, tries = 80) => { for (let t = 0; t < tries; t++) { const x = F.x0 + rand() * (F.x1 - F.x0), y = F.y0 + rand() * (F.y1 - F.y0); if (ok(x, y, at(F, Uf, x, y))) return [x, y] } return null }

  // 1. glow: a wide soft fog round the letters, far from the wall, light on the button
  const glowR = o.glow ?? 0.15
  if (glowR > 0) out.glow = fillPass(F, Uf, { cap: 3, dist: 0.38, colour: C.light, pressure: 0.3 }, { gap: 0.15, inset: -glowR, ang: 0.18, speed: 2.4 })

  // 2. the burst: shards out from behind the letters (their bases on the letters' outline, pointing away)
  let burstM = null
  if (o.burst !== false) {
    const tris = []
    for (const loop of contours(F, Uf, 0.0, 0.004)) {
      const p = resample(loop.concat([loop[0]]), 0.05)
      for (let i = 0; i < p.length; i++) {
        if (rand() > (o.burstDensity ?? 0.3)) continue
        const [nx, ny] = grad(F, Uf, p[i][0], p[i][1]); if (ny < -0.2 && rand() < 0.6) continue   // fewer under (that is where the drips go)
        const a = Math.atan2(ny, nx) + jitter(0.5), l = (0.1 + rand() * rand() * 0.5) * (o.burstLen ?? 1), w = 0.05 + rand() * 0.12
        const base = [p[i][0] - nx * 0.04, p[i][1] - ny * 0.04], tx = -Math.sin(a), ty = Math.cos(a)
        tris.push([[base[0] + tx * w / 2, base[1] + ty * w / 2], [base[0] + Math.cos(a) * l, base[1] + Math.sin(a) * l], [base[0] - tx * w / 2, base[1] - ty * w / 2]])
      }
    }
    burstM = sub(fillMask(F, tris), U)
    const bf = sdf(F, burstM)
    out.burst = [...fillPass(F, bf, { cap: 2, dist: 0.1, colour: C.dark }, { gap: 0.034, inset: 0.012, ang: 0.6, speed: 1.8 }),
      ...edgePass(F, bf, 0.008, { cap: 1, dist: 0.06, colour: C.dark }, { speed: 1.2, min: 0.04 })]
  }

  // 3. the 3D block
  const d3 = o.depth ?? [0.07, -0.09]
  const B = block(F, U, d3)
  out.block = [...fillPass(F, B.f, { cap: 2, dist: 0.09, colour: C.mid }, { gap: 0.03, inset: 0.012, ang: -0.9, speed: 1.5 }),
    ...edgePass(F, B.f, 0.01, { cap: 1, dist: 0.06, colour: C.mid }, { speed: 1.1, min: 0.04 })]

  // 4. the fill: rings round each letter close to its edge, then passes across the middle, then a second coat
  out.fill = [
    ...L.flatMap((l) => edgePass(F, l.f, 0.06, { cap: 3, dist: 0.085, colour: C.fill }, { speed: 1.7, corner: 0.4 })),
    ...fillPass(F, Uf, { cap: 3, dist: 0.09, colour: C.fill }, { gap: 0.06, inset: 0.1, ang: 0.08, speed: 1.7 }),
    ...fillPass(F, Uf, { cap: 3, dist: 0.1, colour: C.fill }, { gap: 0.065, inset: 0.05, ang: 1.25, speed: 1.9 }),
    ...L.flatMap((l) => edgePass(F, l.f, 0.021, { cap: 2, dist: 0.075, colour: C.fill }, { speed: 1.2, corner: 0.7 })),
  ]
  // 5. the fade: a dusting of the mid value up from the bottom of each letter
  const fadeTo = bx.y0 + H * (o.fade ?? 0.38)
  out.fade = fillPass(F, Uf, { cap: 3, dist: 0.28, colour: C.mid, pressure: o.fadeP ?? 0.45 }, { gap: 0.07, inset: 0.07, ang: 0.0, speed: 1.9, keep: (x, y) => y < fadeTo + jitter(0.03) })

  // 6. cracks: shattered glass in the fill, in the dark value: splits in from the edges, and slivers
  const crk = [], crackCan = { cap: 1, dist: 0.05, colour: C.dark }
  const deep = (x, y) => at(F, Uf, x, y) < -0.025
  for (let k = 0; k < (o.cracks ?? L.length * 2); k++) {
    const p = pick((x, y, d) => d < -0.02 && d > -0.05); if (!p) continue
    const [gx, gy] = grad(F, Uf, p[0], p[1]), a = Math.atan2(-gy, -gx) + jitter(0.6)
    for (let b = 0, nb = 1 + Math.floor(rand() * 3); b < nb; b++) {
      const path = [[p[0] + gx * 0.03, p[1] + gy * 0.03], p.slice()]; let q = p.slice(), aa = a + jitter(0.7)
      for (let s = 0, ns = 2 + Math.floor(rand() * 3); s < ns; s++) {
        const l = 0.04 + rand() * 0.12, nq = [q[0] + Math.cos(aa) * l, q[1] + Math.sin(aa) * l]
        if (!deep(nq[0], nq[1])) break
        path.push(nq); q = nq; aa += jitter(0.6)
      }
      if (path.length > 2) crk.push(stroke(path, crackCan, { speed: 1.4, corner: 0.6, step: 0.006, ease: 0.02 }))
    }
  }
  out.cracks = crk

  // 7. outlines: the 3D's outline where it shows, the letters back to front, the 3D's corner lines
  const lineCan = { cap: 1, dist: 0.07, colour: C.dark }
  out.outline = [
    ...lines(F, B.f, lineCan, { level: 0.004, keep: (x, y) => at(F, Uf, x, y) > 0.012, speed: 0.75 }),
    ...outlines(F, L, lineCan, { level: 0.004, speed: 0.6 }),
  ]
  for (const loop of contours(F, Uf, 0.004, 0.01)) {
    for (let i = 0; i < loop.length; i++) {
      const a = loop[(i + loop.length - 1) % loop.length], b = loop[i], cN = loop[(i + 1) % loop.length]
      const v1 = [b[0] - a[0], b[1] - a[1]], v2 = [cN[0] - b[0], cN[1] - b[1]], l1 = Math.hypot(...v1), l2 = Math.hypot(...v2)
      if (l1 < 0.03 || l2 < 0.03) continue
      if (Math.acos(Math.max(-1, Math.min(1, (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2)))) < 0.5) continue
      const m = [b[0] + d3[0] * 0.5, b[1] + d3[1] * 0.5]
      if (at(F, Uf, m[0], m[1]) < 0.01 || at(F, B.f, m[0], m[1]) > 0) continue
      out.outline.push(stroke([[b[0] + d3[0] * 0.12, b[1] + d3[1] * 0.12], [b[0] + d3[0], b[1] + d3[1]]], lineCan, { speed: 0.5, step: 0.006 }))
    }
  }

  // 8. shine: highlights on the edges facing up and left; splinters of light out over the burst; stars
  const hiCan = { cap: 1, dist: 0.05, colour: C.light }
  // a bevel: the edges turned from the light get a mid-value line just inside (the letters stand up off the wall)
  out.shine = highlights(F, Uf, { cap: 1, dist: 0.055, colour: C.mid }, { inset: 0.04, light: [0.55, -0.83], facing: 0.5, min: 0.08, max: 0.6, speed: 0.6 })
  // splinters of light out over the burst: straight from the outline, away from the letters, never across one
  if (burstM) for (let k = 0; k < (o.splinters ?? 16); k++) {
    const p = pick((x, y, d) => d > 0.02 && d < 0.05); if (!p) continue
    const [nx, ny] = grad(F, Uf, p[0], p[1]); if (ny < -0.3) continue
    const a = Math.atan2(ny, nx) + jitter(0.3), l = 0.1 + rand() * 0.32, path = [p]
    for (let s = 0.02; s <= l; s += 0.02) { const q = [p[0] + Math.cos(a) * s, p[1] + Math.sin(a) * s]; if (at(F, Uf, q[0], q[1]) < 0.03) break; path.push(q) }
    if (path.length > 4) out.shine.push(stroke(path, { cap: 1, dist: 0.06, colour: C.light }, { speed: 2.4, step: 0.01, ease: 0.05 }))
  }
  const star = (x, y, k) => [stroke([[x, y - k], [x, y + k]], hiCan, { speed: 0.9 }), stroke([[x - k * 0.65, y], [x + k * 0.65, y]], hiCan, { speed: 0.9 }), dot(x, y, hiCan, 0.1)]
  for (const [x, y, k] of o.stars || []) out.shine.push(...star(bx.x0 + x * (bx.x1 - bx.x0), bx.y0 + y * H, k))

  // 9. drips off the bottoms, in the fill
  const runs = [], used = []
  for (const p of bottoms(F, Uf, { step: 0.02, facing: 0.7 }).sort(() => rand() - 0.5)) {
    if (runs.length >= (o.drips ?? 22)) break
    if (used.some((u) => Math.abs(u - p[0]) < 0.06)) continue
    const r = rand(); let l = Math.min(0.42, H * (r < 0.15 ? 0.3 + rand() * 0.12 : 0.05 + rand() * 0.16))
    // a run stops short of any letter below it
    for (let s = 0.03; s < l; s += 0.01) if (at(F, Uf, p[0], p[1] - s) < 0.02) { l = s - 0.03; break }
    if (l < 0.06) continue
    used.push(p[0]); runs.push([p[0], p[1] + 0.02, l])
  }
  out.drips = drips(runs.sort((a, b) => a[0] - b[0]), { cap: 1, dist: 0.055, colour: C.fill }, { speed: 0.9, hold: 0.14, hold0: 0.12 })

  // 10. chips: knocked back near the edges with the buff can
  out.chips = scatter(F, o.chips ?? 60, (x, y) => { const d = at(F, Uf, x, y); return d < -0.004 && d > -0.05 }, (x, y) => {
    const can = { cap: 1, dist: 0.05, buff: true, colour: '#000000' }
    if (rand() < 0.3) { const a = rand() * 6.28, l = 0.01 + rand() * 0.02; return stroke([[x, y], [x + Math.cos(a) * l, y + Math.sin(a) * l]], can, { speed: 1.5 }) }
    return dot(x, y, can, 0.004)
  })

  // 11. the V mark and the dedication
  out.tag = []
  if (o.mark !== false) out.tag.push(...vmarkStrokes(bx.x1 + 0.05, bx.y0 - 0.02, 0.22, { colour: C.light }))
  if (o.dedication !== false) {
    // a clear spot for it, low down near the right, else up at the left
    const free = (x, y) => { for (let u = -0.05; u <= 0.5; u += 0.05) for (let v = -0.05; v <= 0.25; v += 0.05) if (at(F, Uf, x + u, y + v) < 0.06) return false; return true }
    let spot = null
    for (const [fx, fy] of [[0.86, 0.02], [0.8, 0.08], [0.9, 0.12], [0.02, 0.86], [0.1, 0.9], [0.5, 0.02], [0.3, 0.0], [0.0, -0.08], [0.06, -0.12], [0.85, -0.1], [0.5, -0.12]]) { const x = bx.x0 + fx * (bx.x1 - bx.x0), y = bx.y0 + fy * H; if (free(x, y)) { spot = [x, y]; break } }
    if (spot) out.tag.push(...smallTag(o.dedication || 'NPG', spot[0], spot[1], 0.16, { cap: 1, dist: 0.05, colour: C.light }))
  }
  if (o.extra) out.tag.push(...o.extra({ F, L, U, Uf, bx, C }))

  const order = ['glow', 'burst', 'block', 'fill', 'fade', 'cracks', 'outline', 'shine', 'drips', 'chips', 'tag']
  if (o.log) console.log('   ' + order.map((k) => `${k} ${(out[k] || []).length}/${(out[k] || []).reduce((s, x) => s + x.pts[x.pts.length - 1][2] + 0.18, 0).toFixed(0)}s`).join('  '))
  return sketch(id, name, 'piece', order.flatMap((k) => out[k] || []), o.about)
}

export const PIECES = [
  { id: 'piece-vexvoid', make: () => piece('piece-vexvoid', 'VEXVOID', wildWord(['V', 'E', 'X', 'V2', 'O', 'I', 'D'], { h: 1.05, kern: [0, -0.12, -0.04, -0.1, -0.08, -0.1, -0.06], lift: [0, 0.02, -0.03, 0.03, 0, 0.02, -0.02], slant: 0.1, order: [0, 2, 1, 3, 4, 5, 6] }), {
    log: true, stars: [[0.02, 1.05, 0.09], [0.62, 1.12, 0.07], [1.02, 0.86, 0.11]], about: 'hall-of-fame VEXVOID: shard wildstyle, glow, black burst, grey 3D, cracks, drips' }) },
  { id: 'piece-vexvoid-arch', make: () => piece('piece-vexvoid-arch', 'VEXVOID ARCH', wildWord(['V', 'E', 'X', 'V2', 'O', 'I', 'D'], { h: 0.95, kern: [0, -0.14, -0.06, -0.12, -0.1, -0.12, -0.08], lift: [-0.12, 0.02, 0.12, 0.17, 0.13, 0.04, -0.1], slant: 0.16, order: [0, 2, 1, 4, 3, 6, 5] }), {
    log: true, colours: { fill: CHROME, mid: BLACK, light: WHITE }, burstLen: 1.5, burstDensity: 0.36, depth: [0.08, -0.08], fade: 0.42, fadeP: 0.22, stars: [[0.5, 1.12, 0.1]],
    about: 'VEXVOID on an arch, chrome face, black 3D, long shards' }) },
  { id: 'piece-v3x', make: () => piece('piece-v3x', 'V3X', wildWord(['V', '3', 'X'], { h: 1.08, kern: [0, -0.08, -0.06], lift: [0, 0.04, -0.02], slant: 0.1 }), {
    log: true, burstLen: 1.4, burstDensity: 0.5, splinters: 22, stars: [[1.0, 1.0, 0.1], [0.04, 1.1, 0.07]], about: 'chunky V3X with shards bursting off it' }) },
  { id: 'piece-void', make: () => piece('piece-void', 'VOID', wildWord(['V2', 'O', 'I', 'D'], { h: 1.05, kern: [0, -0.08, -0.1, -0.06], lift: [0.02, 0, 0.03, -0.02], slant: 0.08 }), {
    log: true, glow: 0.34, burstDensity: 0.18, drips: 30, fade: 0.5, stars: [[0.05, 1.08, 0.1], [0.97, 1.0, 0.08]], about: 'VOID in the album glow, long drips' }) },
  { id: 'piece-vcrown', make: () => piece('piece-vcrown', 'V CROWN', [{ ch: 'V', polys: crownV(1.18), cuts: [] }], {
    log: true, glow: 0.3, burstDensity: 0.6, burstLen: 1.3, splinters: 18, drips: 12, mark: false, about: 'the crown V: the V mark as a piece, thorns, glow, shards' }) },
]

// the crown V: the blade V with a crown of thorns radiating up off both arms (unit height, scaled to h)
function crownV(h) {
  const P = [
    [[0.0, 1.0], [0.3, 1.0], [0.5, 0.33], [0.8, 1.17], [0.92, 1.02], [0.5, -0.12]],
    [[0.02, 0.98], [-0.14, 1.36], [0.14, 0.98]], [[0.13, 0.99], [0.12, 1.5], [0.24, 0.99]], [[0.22, 0.99], [0.36, 1.32], [0.3, 0.86]],
    [[0.62, 0.66], [0.6, 1.06], [0.7, 0.86]], [[0.86, 1.0], [1.12, 1.3], [0.9, 0.84]], [[0.8, 0.7], [1.08, 0.92], [0.76, 0.56]],
  ]
  return P.map((p) => p.map(([x, y]) => [x * h, y * h]))
}
