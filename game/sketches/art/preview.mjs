// A sketch painted the way the game's can paints it (game/src/spray.ts: soft dabs a set distance apart, overspray specks
// from a distance, wet paint that runs), in plain JS, so a sketch can be looked at big before it goes in the game.
//
//   import { paint, png } from './preview.mjs'
//   const im = paint(sketch, { px: 200, wall: 'night' }); writeFileSync('x.png', png(im))
import { deflateSync } from 'zlib'

const LINE = [0, 0.025, 0.06, 0.14], COAT = [0, 0.97, 0.93, 0.82], PASS = [0, 0.07, 0.11, 0.16], HOLD = [0, 1.2, 0.9, 0.7]
const CELL = 16, DRY = 4, GAP = 0.18
export const footprint = (can) => {
  const d = Math.max(0.05, Math.min(0.6, can.dist))
  const width = LINE[can.cap] * (0.45 + 0.55 * Math.pow(d / 0.2, 0.8)) * (can.buff ? 1.6 : 1)
  const hard = Math.max(0.1, Math.min(0.85, 0.92 - d * 1.3 - (can.cap - 1) * 0.12))
  return { width, hard, r: width / (1 + hard) }
}
const close = (d) => 1 / Math.pow(0.35 + 0.65 * Math.max(0.05, Math.min(0.6, d)) / 0.2, 1.5)
const rngOf = (seed) => () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
const rgbOf = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 3 - 1), 16) / 255)

// the stamp's strength at a fraction f of its radius (the game's radial gradient: solid to `hard`, then a smooth fall)
const prof = (f, hard) => {
  if (f <= hard) return 1; if (f >= 1) return 0
  const stops = [[hard, 1], ...[0.25, 0.5, 0.75].map((k) => [hard + (1 - hard) * k, 1 - k * k * (3 - 2 * k)]), [1, 0]]
  for (let i = 1; i < stops.length; i++) if (f <= stops[i][0]) { const [a, va] = stops[i - 1], [b, vb] = stops[i]; return va + (vb - va) * (f - a) / (b - a) }
  return 0
}

/** Paints a sketch. px: pixels per metre (the game paints at 200). Returns { w, h, rgba: Float32Array premultiplied }. */
export function paint(sk, o = {}) {
  const PX = o.px || 200, k = PX / 200, W = Math.ceil(sk.w * PX), H = Math.ceil(sk.h * PX)
  const buf = new Float32Array(W * H * 4), wcols = Math.ceil(W / (CELL * k)), wet = new Float32Array(wcols * Math.ceil(H / (CELL * k)) + 1), wetAt = new Float32Array(wet.length)
  const drips = []
  let now = 0
  const put = (x, y, a, col) => {
    if (x < 0 || y < 0 || x >= W || y >= H || a <= 0) return
    const i = (y * W + x) * 4, b = 1 - a
    buf[i] = buf[i] * b + col[0] * a; buf[i + 1] = buf[i + 1] * b + col[1] * a; buf[i + 2] = buf[i + 2] * b + col[2] * a; buf[i + 3] = buf[i + 3] * b + a
  }
  const erase = (x, y, a) => { if (x < 0 || y < 0 || x >= W || y >= H) return; const i = (y * W + x) * 4, b = 1 - a; for (let c = 0; c < 4; c++) buf[i + c] *= b }
  for (const s of sk.strokes) {
    if (!s.pts.length) continue
    const R = rngOf(s.seed | 0), f = footprint(s), r = Math.max(1, f.r * 200) * k, col = rgbOf(s.colour)
    const step = Math.max(0.6, r / k * 0.25) * k, coat = s.buff ? 0.97 : COAT[s.cap] * (s.pressure < 1 ? s.pressure * 0.9 : 1)
    const A = 1 - Math.pow(1 - coat, step / (r * (1 + f.hard)))
    const T0 = now
    const dab = (x, y, a, grow = 1) => {
      const rr = r * grow, x0 = Math.floor(x - rr), x1 = Math.ceil(x + rr), y0 = Math.floor(y - rr), y1 = Math.ceil(y + rr), al = Math.min(1, a)
      for (let yy = y0; yy <= y1; yy++) for (let xx = x0; xx <= x1; xx++) {
        const d = Math.hypot(xx + 0.5 - x, yy + 0.5 - y) / rr; if (d >= 1) continue
        const p = prof(d, f.hard) * al; if (s.buff) erase(xx, yy, p); else put(xx, yy, p, col)
      }
      if (s.buff) return
      const sp = Math.min(6, Math.max(0, s.dist - 0.12) * 0.6 * s.cap * s.pressure * (step / k)), n = Math.floor(sp + R())
      for (let j = 0; j < n; j++) {
        const t = R() * Math.PI * 2, d = rr * (0.9 + R() * 1.3), px = x + Math.cos(t) * d, py = y + Math.sin(t) * d, sz = (1 + R()) * k, a2 = 0.35 + R() * 0.4
        for (let yy = Math.floor(py); yy < py + sz; yy++) for (let xx = Math.floor(px); xx < px + sz; xx++) put(xx, yy, a2, col)
      }
    }
    const drip = (x, y) => {
      let w = Math.max(1.4, Math.min(5, r / k * 0.3)), sp = (0.16 + R() * 0.22) * 200, left = (0.1 + R() * 0.5) * (0.6 + s.cap * 0.2) * 200, yy = 0
      const seg = []
      while (left > 0 && sp > 0.02 * 200 && seg.length < 900) { const dy = sp / 60; yy += dy; left -= dy; seg.push([yy, w]); w = Math.max(1.1, w * (1 - 0.25 / 60)); sp *= 1 - 0.35 / 60 }
      drips.push({ x: x + (R() - 0.5) * r * 0.8, y: y + r * 0.45, seg, col })
    }
    const wetter = (x, y, add, T) => {
      if (s.buff || x < 0 || y < 0 || x >= W || y >= H) return 0
      const i = Math.floor(y / (CELL * k)) * wcols + Math.floor(x / (CELL * k)), w = wet[i] * Math.exp(-Math.max(0, T - wetAt[i]) / DRY) + add
      wetAt[i] = Math.max(T, wetAt[i]); wet[i] = w
      for (let q = 0; wet[i] >= 1 && q < 3 && drips.length < 4000; q++) { wet[i] -= 0.55; drip(x, y) }
      return Math.min(1, w)
    }
    let acc = 0
    const stretch = (a, q, b) => {
      const L = Math.hypot(q.x - a.x, q.y - a.y) + Math.hypot(b.x - q.x, b.y - q.y), dt = Math.max(0, b.t - a.t), v = L / PX / Math.max(dt, 1e-3)
      const n = Math.ceil(L / step), fast = Math.max(0.6, Math.min(1, 1.2 - v * 0.18)), wetK = PASS[s.cap] * close(s.dist) * s.pressure * (step / k) / CELL
      let lx = a.x, ly = a.y
      for (let i = 1; i <= n; i++) {
        const u = i / n, w = 1 - u, x = w * w * a.x + 2 * w * u * q.x + u * u * b.x, y = w * w * a.y + 2 * w * u * q.y + u * u * b.y
        const d = Math.hypot(x - lx, y - ly); let rem = d
        while (acc + rem >= step) { rem -= step - acc; acc = 0; const ff = 1 - rem / d, dx = lx + (x - lx) * ff, dy = ly + (y - ly) * ff; dab(dx, dy, A * fast); wetter(dx, dy, wetK, T0 + a.t + dt * u) }
        acc += rem; lx = x; ly = y
      }
      const still = Math.max(0, 1 - v / 0.12)
      if (still > 0 && dt > 0) { const w = wetter(b.x, b.y, dt * still * s.pressure / (HOLD[s.cap] / close(s.dist)), T0 + b.t); dab(b.x, b.y, 1 - Math.exp(-dt * 12 * s.pressure * still), 1 + 0.35 * w) }
    }
    let m = null, p = null
    for (const [xm, ym, t] of s.pts) {
      const P = { x: xm * PX, y: H - ym * PX, t }
      if (!p) { p = m = P; dab(P.x, P.y, Math.min(1, A * 2)); continue }
      const mid = { x: (p.x + P.x) / 2, y: (p.y + P.y) / 2, t: (p.t + P.t) / 2 }
      stretch(m, p, mid); p = P; m = mid
    }
    if (m && p && (m.x !== p.x || m.y !== p.y)) stretch(m, p, p)
    now += s.pts[s.pts.length - 1][2] + GAP
  }
  // the runs, run all the way down
  for (const d of drips) {
    let prev = 0
    for (const [yy, w] of d.seg) { const ww = w * k; for (let y = Math.floor(d.y + prev * k); y <= d.y + yy * k; y++) for (let x = Math.floor(d.x - ww / 2); x < d.x + ww / 2; x++) put(x, y, 0.9, d.col); prev = yy }
    const last = d.seg[d.seg.length - 1]; if (last) { const rr = last[1] * 0.9 * k, cy = d.y + last[0] * k; for (let y = Math.floor(cy - rr); y <= cy + rr; y++) for (let x = Math.floor(d.x - rr); x <= d.x + rr; x++) if (Math.hypot(x - d.x, y - cy) <= rr) put(x, y, 0.9, d.col) }
  }
  return { w: W, h: H, rgba: buf, drips: drips.length }
}

// the paint over a wall: 'night' (dark concrete), 'grey' (a lit grey wall), or a colour
export function onWall(im, wall = 'night', seed = 7) {
  const R = rngOf(seed), out = new Uint8Array(im.w * im.h * 3)
  const base = wall === 'grey' ? [0.36, 0.365, 0.38] : wall === 'night' ? [0.11, 0.112, 0.12] : rgbOf(wall)
  for (let y = 0; y < im.h; y++) for (let x = 0; x < im.w; x++) {
    const i = y * im.w + x, n = (R() - 0.5) * 0.035
    for (let c = 0; c < 3; c++) { const v = (base[c] + n) * (1 - im.rgba[i * 4 + 3]) + im.rgba[i * 4 + c]; out[i * 3 + c] = Math.max(0, Math.min(255, Math.round(Math.pow(Math.max(0, v), 1) * 255))) }
  }
  return { w: im.w, h: im.h, rgb: out }
}

const crcT = new Uint32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0 })
const crc = (b) => { let c = 0xffffffff; for (const x of b) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0 }
const chunk = (type, data) => { const l = Buffer.alloc(4); l.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]) }
/** An RGB image ({ w, h, rgb }) as PNG bytes. */
export function png({ w, h, rgb }) {
  const raw = Buffer.alloc((w * 3 + 1) * h)
  for (let y = 0; y < h; y++) { raw[y * (w * 3 + 1)] = 0; Buffer.from(rgb.buffer, rgb.byteOffset + y * w * 3, w * 3).copy(raw, y * (w * 3 + 1) + 1) }
  const hd = Buffer.alloc(13); hd.writeUInt32BE(w, 0); hd.writeUInt32BE(h, 4); hd[8] = 8; hd[9] = 2; hd[10] = hd[11] = hd[12] = 0
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', hd), chunk('IDAT', deflateSync(raw, { level: 6 })), chunk('IEND', Buffer.alloc(0))])
}
export const secsOf = (sk) => sk.strokes.reduce((n, x) => n + (x.pts.length ? x.pts[x.pts.length - 1][2] : 0) + GAP, 0)
