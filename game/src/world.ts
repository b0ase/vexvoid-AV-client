/**
 * The district's solid world, without any graphics: what you stand on and what you cannot walk through, at several
 * levels (the street, a canal towpath under a bridge, a raised deck, later the roofs).
 *
 *   Surf: a flat or stepped area you can stand on (y, or a stair from y0 to y1 along one axis).
 *   Box:  something solid (x/z extents and a y range). A body is stopped by a box when the box overlaps its height:
 *         feet below the box's top less a step (STEP), and head above the box's bottom. So a bridge deck is a ceiling
 *         to the towpath below and the ground to the street above, and a 0.75 m dock stops a walker but not a jump.
 *   Holes: places where the street level (y 0) is not there (the canal cutting, the road carriageway is a surface).
 *
 *   groundAt(x, z, feet): the highest surface here no higher than feet + STEP (NaN: nothing to stand on: blocked).
 *
 * The officers find their way with nav(): a grid of cells (0.5 m) with a node per level, and A* over it.
 */
export const STEP = 0.5;
export const BODY_H = 1.75;

export type Box = { x0: number; x1: number; z0: number; z1: number; y0?: number; y1?: number; low?: boolean; tag?: string };
export type Surf = { x0: number; x1: number; z0: number; z1: number; y: number; tag?: string;
  /** a stair or ramp: from y (at the start of `axis`) to y1 (at its end), in `steps` (0: a smooth ramp) */
  y1?: number; axis?: 'x' | 'z' | '-x' | '-z'; steps?: number };
export type Rect = { x0: number; x1: number; z0: number; z1: number };

const LO = -1e9, HI = 1e9;
const yb0 = (b: Box) => (b.y0 ?? LO), yb1 = (b: Box) => (b.y1 ?? HI);

export function surfY(s: Surf, x: number, z: number) {
  if (s.y1 == null || !s.axis) return s.y;
  const a = s.axis;
  let u = a === 'x' ? (x - s.x0) / (s.x1 - s.x0) : a === '-x' ? (s.x1 - x) / (s.x1 - s.x0) : a === 'z' ? (z - s.z0) / (s.z1 - s.z0) : (s.z1 - z) / (s.z1 - s.z0);
  u = Math.max(0, Math.min(1, u));
  if (s.steps) u = Math.min(s.steps - 1, Math.floor(u * s.steps)) / (s.steps - 1);
  return s.y + (s.y1 - s.y) * u;
}

export type World = ReturnType<typeof makeWorld>;

export function makeWorld(o: { boxes: Box[]; surfs: Surf[]; holes: Rect[]; bounds: Rect; base?: number }) {
  const { boxes, surfs, holes, bounds } = o;
  const base = o.base ?? 0;
  // a coarse index (8 m cells) of boxes and surfaces, so a query looks at a handful
  const C = 8, nx = Math.ceil((bounds.x1 - bounds.x0) / C) + 1, nz = Math.ceil((bounds.z1 - bounds.z0) / C) + 1;
  const cellOf = (x: number, z: number) => { const i = Math.max(0, Math.min(nx - 1, Math.floor((x - bounds.x0) / C))), k = Math.max(0, Math.min(nz - 1, Math.floor((z - bounds.z0) / C))); return k * nx + i; };
  const index = <T extends Rect>(list: T[], pad: number) => {
    const g: T[][] = Array.from({ length: nx * nz }, () => []);
    for (const r of list) {
      const i0 = Math.max(0, Math.floor((r.x0 - pad - bounds.x0) / C)), i1 = Math.min(nx - 1, Math.floor((r.x1 + pad - bounds.x0) / C));
      const k0 = Math.max(0, Math.floor((r.z0 - pad - bounds.z0) / C)), k1 = Math.min(nz - 1, Math.floor((r.z1 + pad - bounds.z0) / C));
      for (let k = k0; k <= k1; k++) for (let i = i0; i <= i1; i++) g[k * nx + i].push(r);
    }
    return g;
  };
  const PAD = 1.0;
  let bIdx = index(boxes, PAD);
  const sIdx = index(surfs, 0), hIdx = index(holes, 0);
  const inR = (r: Rect, x: number, z: number) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1;
  const inHole = (x: number, z: number) => { for (const h of hIdx[cellOf(x, z)]) if (inR(h, x, z)) return true; return false; };

  /** Every level you could stand on here, low to high. */
  const levels = (x: number, z: number) => {
    const out: number[] = [];
    if (!inHole(x, z)) out.push(base);
    for (const s of sIdx[cellOf(x, z)]) if (inR(s, x, z)) out.push(surfY(s, x, z));
    return out.sort((a, b) => a - b);
  };
  const groundAt = (x: number, z: number, feet: number) => {
    let best = NaN;
    if (!inHole(x, z) && base <= feet + STEP) best = base;
    for (const s of sIdx[cellOf(x, z)]) {
      if (!inR(s, x, z)) continue;
      const y = surfY(s, x, z);
      if (y <= feet + STEP && !(y <= best)) best = y;
    }
    return best;
  };
  /** Does box b stop a body whose feet are at `feet`? */
  const stops = (b: Box, feet: number) => feet < yb1(b) - STEP && feet + BODY_H > yb0(b);
  /** Push a body (radius r, feet at `feet`) out of every box that stops it; returns true if it moved. */
  const pushOut = (p: { x: number; z: number }, r: number, feet: number) => {
    let moved = false;
    for (let pass = 0; pass < 2; pass++)
      for (const b of bIdx[cellOf(p.x, p.z)]) {
        if (!stops(b, feet)) continue;
        const x0 = b.x0 - r, x1 = b.x1 + r, z0 = b.z0 - r, z1 = b.z1 + r;
        if (p.x > x0 && p.x < x1 && p.z > z0 && p.z < z1) {
          const d = [p.x - x0, x1 - p.x, p.z - z0, z1 - p.z], m = Math.min(d[0], d[1], d[2], d[3]);
          if (m === d[0]) p.x = x0; else if (m === d[1]) p.x = x1; else if (m === d[2]) p.z = z0; else p.z = z1;
          moved = true;
        }
      }
    p.x = Math.max(bounds.x0 + r, Math.min(bounds.x1 - r, p.x)); p.z = Math.max(bounds.z0 + r, Math.min(bounds.z1 - r, p.z));
    return moved;
  };
  /** Is a body at (x, z, feet) free of boxes (radius r)? */
  const free = (x: number, z: number, r: number, feet: number) => {
    if (x < bounds.x0 + r || x > bounds.x1 - r || z < bounds.z0 + r || z > bounds.z1 - r) return false;
    for (const b of bIdx[cellOf(x, z)]) if (stops(b, feet) && x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r) return false;
    return true;
  };
  /** The boxes near a point (for code that walks them itself). */
  const near = (x: number, z: number) => bIdx[cellOf(x, z)];
  /** First hit (0..1) of the segment a -> b against the boxes (each grown by pad), or 1. skip: a box to ignore. */
  const ray = (ax: number, ay: number, az: number, bx: number, by: number, bz: number, pad = 0, skip?: (b: Box) => boolean) => {
    let best = 1;
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const seen = new Set<Box>();
    const len = Math.hypot(dx, dz), n = Math.max(1, Math.ceil(len / (C * 0.5)));
    for (let s = 0; s <= n; s++) {
      const cx = ax + dx * (s / n), cz = az + dz * (s / n);
      for (const b of bIdx[cellOf(cx, cz)]) {
        if (seen.has(b)) continue; seen.add(b);
        if (skip && skip(b)) continue;
        let t0 = 0, t1 = best;
        const lo = [b.x0 - pad, yb0(b) - pad, b.z0 - pad], hi = [b.x1 + pad, yb1(b) + pad, b.z1 + pad], p = [ax, ay, az], d = [dx, dy, dz];
        let ok = true;
        for (let k = 0; k < 3 && ok; k++) {
          if (Math.abs(d[k]) < 1e-9) { if (p[k] < lo[k] || p[k] > hi[k]) ok = false; continue; }
          let u = (lo[k] - p[k]) / d[k], v = (hi[k] - p[k]) / d[k]; if (u > v) [u, v] = [v, u];
          t0 = Math.max(t0, u); t1 = Math.min(t1, v); if (t0 > t1) ok = false;
        }
        if (ok && t0 < best) best = t0;
      }
    }
    return best;
  };
  const clear = (ax: number, ay: number, az: number, bx: number, by: number, bz: number) => ray(ax, ay, az, bx, by, bz) >= 1;
  const add = (b: Box) => { boxes.push(b); bIdx = index(boxes, PAD); };
  /** Several boxes at once (one re-index). */
  const addAll = (list: Box[]) => { if (!list.length) return; boxes.push(...list); bIdx = index(boxes, PAD); };
  /** The surface groundAt stands on here (null: the street level, or nothing). */
  const surfAt = (x: number, z: number, feet: number): Surf | null => {
    let best = !inHole(x, z) && base <= feet + STEP ? base : NaN, out: Surf | null = null;
    for (const s of sIdx[cellOf(x, z)]) {
      if (!inR(s, x, z)) continue;
      const y = surfY(s, x, z);
      if (y <= feet + STEP && !(y <= best)) { best = y; out = s; }
    }
    return out;
  };
  /** The top of what is solid in a column here, starting from y and stepping up through boxes that sit on each other. */
  const topAt = (x: number, z: number, y: number) => {
    let t = y;
    for (let k = 0; k < 6; k++) {
      let up = t;
      for (const b of bIdx[cellOf(x, z)]) if (x > b.x0 && x < b.x1 && z > b.z0 && z < b.z1 && yb0(b) <= t + 0.05 && yb1(b) > up) up = yb1(b);
      if (up <= t) break; t = up;
    }
    return t;
  };
  return { boxes, surfs, holes, bounds, base, levels, groundAt, stops, pushOut, free, near, ray, clear, add, addAll, inHole, surfAt, topAt };
}

/**
 * The officers' map: cells of 0.5 m over the bounds, a node per level a body can stand on there, joined to the
 * neighbouring cells' nodes no more than a step up or down. path() runs A* and returns points to walk through.
 */
export function makeNav(w: World, r = 0.35, cell = 0.5) {
  const { bounds } = w;
  const NX = Math.ceil((bounds.x1 - bounds.x0) / cell), NZ = Math.ceil((bounds.z1 - bounds.z0) / cell), L = 3, N = NX * NZ;
  const ys = new Float32Array(N * L).fill(NaN);
  for (let k = 0; k < NZ; k++)
    for (let i = 0; i < NX; i++) {
      const x = bounds.x0 + (i + 0.5) * cell, z = bounds.z0 + (k + 0.5) * cell;
      const lv = w.levels(x, z);
      let n = 0;
      for (const y of lv) { if (n >= L) break; if (w.free(x, z, r, y)) ys[(k * NX + i) * L + n++] = y; }
    }
  const cellIdx = (x: number, z: number) => { const i = Math.floor((x - bounds.x0) / cell), k = Math.floor((z - bounds.z0) / cell); return i < 0 || k < 0 || i >= NX || k >= NZ ? -1 : k * NX + i; };
  /** The node for a body at (x, z, feet): its level, or the nearest free cell's within 2 m. */
  const nodeOf = (x: number, z: number, feet: number) => {
    const c0 = cellIdx(x, z); if (c0 < 0) return -1;
    const ci = c0 % NX, ck = Math.floor(c0 / NX);
    for (let rad = 0; rad <= 4; rad++)
      for (let dk = -rad; dk <= rad; dk++)
        for (let di = -rad; di <= rad; di++) {
          if (Math.max(Math.abs(di), Math.abs(dk)) !== rad) continue;
          const i = ci + di, k = ck + dk; if (i < 0 || k < 0 || i >= NX || k >= NZ) continue;
          const c = k * NX + i;
          let best = -1, bd = 1e9;
          for (let l = 0; l < L; l++) { const y = ys[c * L + l]; if (Number.isNaN(y)) continue; const d = Math.abs(y - feet); if (d < bd && d < 1.2) { bd = d; best = c * L + l; } }
          if (best >= 0) return best;
        }
    return -1;
  };
  const posOf = (n: number) => { const c = Math.floor(n / L), i = c % NX, k = Math.floor(c / NX); return { x: bounds.x0 + (i + 0.5) * cell, z: bounds.z0 + (k + 0.5) * cell, y: ys[n] }; };
  // A* with a binary heap; reused buffers
  const g = new Float32Array(N * L), from = new Int32Array(N * L), stamp = new Uint32Array(N * L), closed = new Uint32Array(N * L);
  let gen = 1;
  const heap: number[] = [], hf: number[] = [];
  const push = (n: number, f: number) => { heap.push(n); hf.push(f); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (hf[p] <= hf[i]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; [hf[p], hf[i]] = [hf[i], hf[p]]; i = p; } };
  const pop = () => { const top = heap[0]; const ln = heap.pop()!, lf = hf.pop()!; if (heap.length) { heap[0] = ln; hf[0] = lf; let i = 0; for (;;) { const a = 2 * i + 1, b = a + 1; let m = i; if (a < heap.length && hf[a] < hf[m]) m = a; if (b < heap.length && hf[b] < hf[m]) m = b; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; [hf[m], hf[i]] = [hf[i], hf[m]]; i = m; } } return top; };
  const DIRS = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.4142], [1, -1, 1.4142], [-1, 1, 1.4142], [-1, -1, 1.4142]];
  const levelNear = (c: number, y: number) => { let best = -1, bd = STEP + 1e-6; for (let l = 0; l < L; l++) { const v = ys[c * L + l]; if (Number.isNaN(v)) continue; const d = Math.abs(v - y); if (d <= bd) { bd = d; best = c * L + l; } } return best; };
  /** Points (x, z, y) from a to b, or null if there is no way within maxNodes. */
  const path = (ax: number, az: number, ay: number, bx: number, bz: number, by: number, maxNodes = 60000) => {
    const s = nodeOf(ax, az, ay), t = nodeOf(bx, bz, by);
    if (s < 0 || t < 0) return null;
    gen++; heap.length = 0; hf.length = 0;
    const tp = posOf(t);
    const h = (n: number) => { const p = posOf(n), dx = Math.abs(p.x - tp.x), dz = Math.abs(p.z - tp.z); return (Math.max(dx, dz) + 0.4142 * Math.min(dx, dz)) / cell; };
    g[s] = 0; stamp[s] = gen; from[s] = -1; push(s, h(s));
    let n = 0, found = -1, bestN = s, bestH = h(s);
    while (heap.length && n++ < maxNodes) {
      const u = pop(); if (closed[u] === gen) continue; closed[u] = gen;
      if (u === t) { found = u; break; }
      const hu = h(u); if (hu < bestH) { bestH = hu; bestN = u; }
      const c = Math.floor(u / L), i = c % NX, k = Math.floor(c / NX), y = ys[u];
      for (const [di, dk, cost] of DIRS) {
        const ii = i + di, kk = k + dk; if (ii < 0 || kk < 0 || ii >= NX || kk >= NZ) continue;
        const v = levelNear(kk * NX + ii, y); if (v < 0) continue;
        if (di && dk && (levelNear(k * NX + ii, y) < 0 || levelNear(kk * NX + i, y) < 0)) continue;   // no cutting corners
        const gv = g[u] + cost;
        if (stamp[v] === gen && gv >= g[v]) continue;
        stamp[v] = gen; g[v] = gv; from[v] = u; push(v, gv + h(v));
      }
    }
    const end = found >= 0 ? found : bestN;
    const pts: { x: number; z: number; y: number }[] = [];
    for (let v = end; v >= 0; v = from[v]) { pts.push(posOf(v)); if (v === s) break; if (pts.length > 4000) break; }
    pts.reverse();
    return { pts, reached: found >= 0 };
  };
  return { path, nodeOf, posOf, NX, NZ, cell, free: (x: number, z: number, y: number) => { const c = cellIdx(x, z); return c >= 0 && levelNear(c, y) >= 0; } };
}
