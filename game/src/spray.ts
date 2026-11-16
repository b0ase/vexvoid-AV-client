/**
 * Spray paint on the city's walls (city.walls: every wall the writer can walk up to). A wall's paint is a layer at
 * 2 px per cm just in front of it, lit like the wall, made of tiles that only exist where there is paint, so an
 * untouched wall costs nothing and a wall can be any size.
 *
 * The can: paint goes down in soft dabs a set distance apart along the stroke, so a steady pass is an even line at any
 * hand speed (a very fast pass is a little thinner). Lingering adds paint with time: the spot fills, swells, and past
 * a point it runs. The cap sets the line (skinny, medium, fat), the can's distance from the wall trades sharpness for
 * width, softness and overspray, pressure thins the coat, and the buff can takes paint off.
 *
 * Every stroke is kept as data (Stroke: metres on the wall, seconds from its start), which is what undo, the saved
 * log and replaying a piece somewhere else are made of.
 *
 *   const s = makeSpray(scene, city.walls); const h = s.hit(raycaster, ids)
 *   s.begin(id, can); s.to(x, y, t); s.end()      one stroke by hand, a point per frame
 *   s.path(id, [[u, v], ...], can)                a whole stroke at once, steady (the agent's tool, tests)
 *   s.replay(strokes, { wall, at, scale })        strokes from the log, at once;  s.undo([id])
 *
 * Walls keep their paint between sessions: each wall is saved as one PNG (and its stroke log, where the store takes
 * one) a moment after the paint on it settles, and comes back when the city is built.
 */
import * as THREE from 'three';
import type { Wall } from './city';

/** dist: can to wall, metres (0.05 .. 0.6). pressure: 1 full, 0.5 a light dusting. buff: takes paint off. */
export type Can = { colour: string; cap: 1 | 2 | 3; dist: number; pressure?: number; buff?: boolean };
/** One stroke on a wall. pts: [x, y, t]: metres from the wall's bottom left corner (x right, y up), seconds from the
 *  stroke's start. seed fixes its overspray and drips, so a replay looks the same. */
export type Stroke = { wall: string; cap: 1 | 2 | 3; dist: number; colour: string; pressure: number; buff: boolean; seed: number; pts: [number, number, number][] };
export const COLOURS = ['#f4f4f4', '#9a9a9e', '#0c0c0e', '#c9ccd2'];   // white, grey, black, chrome
export const COLOUR_NAMES = ['WHITE', 'GREY', 'BLACK', 'CHROME'];
const PX = 200, TILE = 512, CELL = 16;   // px per metre; a tile of paint (2.56 m); a cell of wetness (8 cm)
const MAX_TILES = 120, MAX_SNAPS = 64, MAX_UNDO = 40, MAX_LOG = 3000;
const LINE = [0, 0.025, 0.06, 0.14];     // the line each cap makes from 20 cm, metres
const COAT = [0, 0.97, 0.93, 0.82];      // how solid one steady pass is
const PASS = [0, 0.07, 0.11, 0.16];      // how wet one pass leaves the wall (1 runs)
const HOLD = [0, 1.2, 0.9, 0.7];         // seconds held still at 20 cm before it runs
const DRY = 4;                           // seconds for wet paint to mostly set

/** The mark a can makes: width (metres, where the line is at least half strength), the soft disc's full radius r,
 *  and how much of it is solid (hard, 0..1). */
export const footprint = (can: Can) => {
  const d = Math.max(0.05, Math.min(0.6, can.dist));
  const width = LINE[can.cap] * (0.45 + 0.55 * Math.pow(d / 0.2, 0.8)) * (can.buff ? 1.6 : 1);
  const hard = Math.max(0.1, Math.min(0.85, 0.92 - d * 1.3 - (can.cap - 1) * 0.12));
  return { width, hard, r: width / (1 + hard) };
};
// how concentrated the paint lands: close floods, far mists
const close = (d: number) => 1 / Math.pow(0.35 + 0.65 * Math.max(0.05, Math.min(0.6, d)) / 0.2, 1.5);

type Tile = { cv: HTMLCanvasElement; g: CanvasRenderingContext2D; tex: THREE.CanvasTexture; mesh: THREE.Mesh; dirty: boolean };
type Layer = { wall: Wall; W: number; H: number; cols: number; rows: number; tiles: Map<number, Tile>; wet: Float32Array | null; wetAt: Float32Array | null; wcols: number;
  strokes: Stroke[]; unsaved: number; blob: Blob | null; away: Blob | null; waking: Promise<void> | null };
type Drip = { e: Entry; x: number; y: number; ys: Float32Array; ws: Float32Array; n: number; i: number; rgb: string };
/** One step of undo: the strokes it takes back, and each tile as it was before them. */
type Entry = { L: Layer; strokes: Stroke[]; snaps: Map<number, HTMLCanvasElement | null>; drips: Drip[]; group: string };
type Pt = { x: number; y: number; t: number };
type Cur = { e: Entry; L: Layer; s: Stroke; rng: () => number; stamp: HTMLCanvasElement; r: number; a: number; step: number; rgb: string; T0: number; acc: number; m: Pt | null; p: Pt | null };

type Saved = { w: number; h: number; png: Blob };
const DB = 'vexvoid-game', STORE = 'walls';
let dbP: Promise<IDBDatabase | null> | null = null;
const db = () => dbP || (dbP = new Promise((res) => {
  try {
    const q = indexedDB.open(DB, 1);
    q.onupgradeneeded = () => q.result.createObjectStore(STORE);
    q.onsuccess = () => res(q.result); q.onerror = () => res(null);
  } catch { res(null); }
}));
const tx = async <T>(mode: IDBTransactionMode, f: (st: IDBObjectStore) => IDBRequest<T>) => {
  const d = await db(); if (!d) return undefined;
  return new Promise<T | undefined>((res) => { try { const q = f(d.transaction(STORE, mode).objectStore(STORE)); q.onsuccess = () => res(q.result); q.onerror = () => res(undefined); } catch { res(undefined); } });
};

/** Where the walls' paint is kept between sessions. The default is this browser (IndexedDB); a host can pass its own,
 *  e.g. a player's account on a server, so their walls follow them. save(id, null) forgets a wall. A store may also
 *  keep each wall's stroke log (loadStrokes, saveStrokes); one that does not just loses the log between sessions. */
export type WallStore = { load: (id: string) => Promise<Blob | null>; save: (id: string, png: Blob | null) => Promise<void>;
  loadStrokes?: (id: string) => Promise<Stroke[] | null>; saveStrokes?: (id: string, strokes: Stroke[] | null) => Promise<void> };
const local: WallStore = {
  load: async (id) => { const v = await tx<Saved>('readonly', (st) => st.get(id)); return v ? v.png : null; },
  save: async (id, png) => { await tx('readwrite', (st) => (png ? st.put({ w: 0, h: 0, png } as Saved, id) : st.delete(id)) as IDBRequest<unknown>); },
  loadStrokes: async (id) => (await tx<Stroke[]>('readonly', (st) => st.get(id + '#strokes'))) || null,
  saveStrokes: async (id, strokes) => { await tx('readwrite', (st) => (strokes && strokes.length ? st.put(strokes, id + '#strokes') : st.delete(id + '#strokes')) as IDBRequest<unknown>); },
};

const rng = (seed: number) => () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const canvasOf = (w: number, h: number) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

export function makeSpray(scene: THREE.Scene, walls: Wall[], store: WallStore = local) {
  const byId = new Map(walls.map((w) => [w.id, w]));
  const layers = new Map<string, Layer>();
  const drips: Drip[] = [];
  const undos: Entry[] = [];
  let cur: Cur | null = null, now = 0, tick = 0, groupN = 0;
  const geos = new Map<string, THREE.PlaneGeometry>();

  const layerOf = (id: string) => {
    let L = layers.get(id); if (L) return L;
    const wall = byId.get(id); if (!wall) return null;
    const W = Math.round(wall.w * PX), H = Math.round(wall.h * PX);
    L = { wall, W, H, cols: Math.ceil(W / TILE), rows: Math.ceil(H / TILE), tiles: new Map(), wet: null, wetAt: null, wcols: Math.ceil(W / CELL), strokes: [], unsaved: 0, blob: null, away: null, waking: null };
    layers.set(id, L); return L;
  };
  const tileOf = (L: Layer, i: number) => {
    let T = L.tiles.get(i); if (T) return T;
    const ox = (i % L.cols) * TILE, oy = Math.floor(i / L.cols) * TILE, tw = Math.min(TILE, L.W - ox), th = Math.min(TILE, L.H - oy), n = L.wall.normal;
    const cv = canvasOf(tw, th), g = cv.getContext('2d')!; g.setTransform(1, 0, 0, 1, -ox, -oy);   // drawn in the wall's own px
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.62, metalness: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const key = tw + 'x' + th; let geo = geos.get(key); if (!geo) geos.set(key, geo = new THREE.PlaneGeometry(tw / PX, th / PX));
    const mesh = new THREE.Mesh(geo, mat), ax = (ox + tw / 2) / PX - L.wall.w / 2;
    mesh.position.copy(L.wall.center).addScaledVector(n, 0.012); mesh.position.x += n.z * ax; mesh.position.z -= n.x * ax; mesh.position.y += L.wall.h / 2 - (oy + th / 2) / PX;
    mesh.rotation.y = Math.atan2(n.x, n.z); mesh.receiveShadow = true; mesh.userData.spot = L.wall.id; mesh.userData.noAO = true;
    scene.add(mesh);
    T = { cv, g, tex, mesh, dirty: true }; L.tiles.set(i, T); return T;
  };
  const dropTile = (L: Layer, i: number) => { const T = L.tiles.get(i); if (!T) return; scene.remove(T.mesh); (T.mesh.material as THREE.Material).dispose(); T.tex.dispose(); L.tiles.delete(i); };
  /** Every tile under a box of the wall (made if need be), each kept as it was first for the stroke that is changing it. */
  const over = (L: Layer, x0: number, y0: number, x1: number, y1: number, e: Entry | null, f: (g: CanvasRenderingContext2D) => void) => {
    const a = Math.max(0, Math.floor(x0 / TILE)), b = Math.min(L.cols - 1, Math.floor(x1 / TILE)), c = Math.max(0, Math.floor(y0 / TILE)), d = Math.min(L.rows - 1, Math.floor(y1 / TILE));
    for (let cy = c; cy <= d; cy++) for (let cx = a; cx <= b; cx++) {
      const i = cy * L.cols + cx, had = L.tiles.get(i);
      if (e && !e.snaps.has(i)) { let s: HTMLCanvasElement | null = null; if (had) { s = canvasOf(had.cv.width, had.cv.height); s.getContext('2d')!.drawImage(had.cv, 0, 0); } e.snaps.set(i, s); }
      const T = had || tileOf(L, i); f(T.g); T.dirty = true;
    }
    L.unsaved = 1.5;
  };

  // a saved wall's picture goes back on its tiles (only where there is paint); under: beneath what is there already
  const blit = (L: Layer, im: ImageBitmap, under = false) => {
    if (Math.abs(im.width / im.height - L.W / L.H) > 0.02 * L.W / L.H) return false;   // the wall changed shape: start clean
    const k = 32, pw = Math.ceil(L.W / k), ph = Math.ceil(L.H / k), probe = canvasOf(pw, ph), pg = probe.getContext('2d', { willReadFrequently: true })!;
    pg.drawImage(im, 0, 0, L.W / k, L.H / k);
    const d = pg.getImageData(0, 0, pw, ph).data, sx = im.width / L.W, sy = im.height / L.H;
    for (let i = 0; i < L.cols * L.rows; i++) {
      const ox = (i % L.cols) * TILE, oy = Math.floor(i / L.cols) * TILE, tw = Math.min(TILE, L.W - ox), th = Math.min(TILE, L.H - oy);
      let any = false;
      for (let y = Math.max(0, Math.floor(oy / k) - 1); y <= Math.min(ph - 1, Math.ceil((oy + th) / k)) && !any; y++)
        for (let x = Math.max(0, Math.floor(ox / k) - 1); x <= Math.min(pw - 1, Math.ceil((ox + tw) / k)); x++) if (d[(y * pw + x) * 4 + 3]) { any = true; break; }
      if (!any) continue;
      const g = tileOf(L, i).g; g.globalAlpha = 1; g.globalCompositeOperation = under ? 'destination-over' : 'source-over';
      g.drawImage(im, ox * sx, oy * sy, tw * sx, th * sy, ox, oy, tw, th); g.globalCompositeOperation = 'source-over'; L.tiles.get(i)!.dirty = true;
    }
    return true;
  };
  // what was painted last time comes back
  // (a wall cleared before its old paint is back stays clear)
  const wiped = new Set<string>();
  const loaded = Promise.all(walls.map(async (wall) => {
    try {
      const png = await store.load(wall.id); if (!png || wiped.has(wall.id)) return;
      const im = await createImageBitmap(png), L = layerOf(wall.id)!;
      if (!wiped.has(wall.id) && blit(L, im, true)) { L.blob = png; if (store.loadStrokes) { const log = await store.loadStrokes(wall.id); if (log && Array.isArray(log) && !wiped.has(wall.id)) L.strokes.unshift(...log); } }
      im.close();
    } catch { /* a broken save, or the store is away: start clean */ }
  }));
  const whole = (L: Layer) => { const c = canvasOf(L.W, L.H), g = c.getContext('2d')!; for (const [i, T] of L.tiles) g.drawImage(T.cv, (i % L.cols) * TILE, Math.floor(i / L.cols) * TILE); return c; };
  const save = async (L: Layer) => {
    try {
      if (L.waking) await L.waking;
      const b = L.tiles.size ? await new Promise<Blob | null>((res) => whole(L).toBlob(res, 'image/png')) : null;
      L.blob = L.unsaved > 0 ? null : b;   // only a picture of the wall as it stands can stand in for it later
      await store.save(L.wall.id, b);
      if (store.saveStrokes) await store.saveStrokes(L.wall.id, b ? L.strokes : null);
    } catch { /* the store is away: the paint stays on the wall this session */ }
  };
  // far walls give up their tiles when there are too many (their saved picture stands in), and get them back near by
  const forget = (L: Layer) => { for (let i = undos.length - 1; i >= 0; i--) if (undos[i].L === L) undos.splice(i, 1); };
  const wake = (L: Layer) => {
    if (!L.away || L.waking) return;
    const png = L.away;
    L.waking = createImageBitmap(png).then((im) => { blit(L, im, true); im.close(); }).catch(() => {}).then(() => { L.away = null; L.waking = null; });
  };
  const tiles = () => { let n = 0; for (const L of layers.values()) n += L.tiles.size; return n; };
  const house = (at: { x: number; z: number }) => {
    const far = (L: Layer) => Math.hypot(L.wall.center.x - at.x, L.wall.center.z - at.z) - L.wall.w / 2;
    for (const L of layers.values()) if (L.away && far(L) < 26) wake(L);
    let n = tiles(); if (n <= MAX_TILES) return;
    const out = [...layers.values()].filter((L) => L.tiles.size && L.blob && !L.unsaved && !L.waking && (!cur || cur.L !== L) && far(L) > 32 && !drips.some((d) => d.e.L === L)).sort((a, b) => far(b) - far(a));
    for (const L of out) { if (n <= MAX_TILES * 0.8) break; n -= L.tiles.size; for (const i of [...L.tiles.keys()]) dropTile(L, i); L.away = L.blob; forget(L); }
  };

  // the soft disc a can stamps, drawn once per can setting
  const stamps = new Map<string, HTMLCanvasElement>();
  const stampOf = (r: number, hard: number, rgb: string) => {
    const key = r.toFixed(2) + '|' + hard.toFixed(2) + '|' + rgb; let s = stamps.get(key); if (s) return s;
    if (stamps.size > 80) stamps.clear();
    const n = Math.ceil(r) * 2 + 2; s = canvasOf(n, n); const g = s.getContext('2d')!, gr = g.createRadialGradient(n / 2, n / 2, 0, n / 2, n / 2, r);
    gr.addColorStop(0, `rgba(${rgb},1)`); gr.addColorStop(hard, `rgba(${rgb},1)`);
    for (const f of [0.25, 0.5, 0.75]) gr.addColorStop(hard + (1 - hard) * f, `rgba(${rgb},${1 - f * f * (3 - 2 * f)})`);
    gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr; g.fillRect(0, 0, n, n); stamps.set(key, s); return s;
  };
  // paint that has built up in one place runs: its whole path is worked out as it starts, then it runs down in time
  const drip = (c: Cur, x: number, y: number) => {
    const R = c.rng; let w = Math.max(1.4, Math.min(5, c.r * 0.3)), sp = (0.16 + R() * 0.22) * PX, left = (0.1 + R() * 0.5) * (0.6 + c.s.cap * 0.2) * PX, yy = 0;
    const ys: number[] = [], ws: number[] = [];
    while (left > 0 && sp > 0.02 * PX && ys.length < 900) { const dy = sp / 60; yy += dy; left -= dy; ys.push(yy); ws.push(w); w = Math.max(1.1, w * (1 - 0.25 / 60)); sp *= 1 - 0.35 / 60; }
    const d: Drip = { e: c.e, x: x + (R() - 0.5) * c.r * 0.8, y: y + c.r * 0.45, ys: Float32Array.from(ys), ws: Float32Array.from(ws), n: ys.length, i: 0, rgb: c.rgb };
    // the tiles it will cross are kept now, while its stroke is the one being painted
    over(c.L, d.x - 4, d.y, d.x + 4, d.y + yy + 6, c.e, () => {});
    drips.push(d); c.e.drips.push(d);
  };
  const runDrip = (d: Drip, from: number, to: number) => {
    const L = d.e.L, a = Math.floor(from), b = Math.min(d.n, Math.floor(to)); if (b <= a && to < d.n) return;
    const y0 = d.y + (a ? d.ys[a - 1] : 0), y1 = d.y + (b ? d.ys[b - 1] : 0), end = to >= d.n;
    over(L, d.x - 5, y0 - 1, d.x + 5, y1 + 6, null, (g) => {
      g.globalAlpha = 1; g.globalCompositeOperation = 'source-over'; g.fillStyle = `rgba(${d.rgb},0.9)`;
      for (let k = a; k < b; k++) { const w = d.ws[k], y = d.y + (k ? d.ys[k - 1] : 0); g.fillRect(d.x - w / 2, y, w, d.ys[k] - (k ? d.ys[k - 1] : 0) + 1); }
      if (end && d.n) { g.beginPath(); g.arc(d.x, y1, d.ws[d.n - 1] * 0.9, 0, Math.PI * 2); g.fill(); }
    });
  };
  // paint piles up where the can lingers and sets with time
  const wetter = (c: Cur, x: number, y: number, add: number, T: number) => {
    const L = c.L; if (c.s.buff || x < 0 || y < 0 || x >= L.W || y >= L.H) return 0;
    if (!L.wet) { const n = L.wcols * Math.ceil(L.H / CELL); L.wet = new Float32Array(n); L.wetAt = new Float32Array(n); }
    const i = Math.floor(y / CELL) * L.wcols + Math.floor(x / CELL), w = L.wet[i] * Math.exp(-Math.max(0, T - L.wetAt![i]) / DRY) + add;
    L.wetAt![i] = Math.max(T, L.wetAt![i]); L.wet[i] = w;
    for (let k = 0; L.wet[i] >= 1 && k < 3 && drips.length < 300; k++) { L.wet[i] -= 0.55; drip(c, x, y); }
    return Math.min(1, w);
  };
  // one dab: the stamp, and overspray specks the further the can is from the wall
  const dab = (c: Cur, x: number, y: number, a: number, grow = 1) => {
    const S = c.stamp, n = S.width * grow, r = c.r * grow, op = c.s.buff ? 'destination-out' : 'source-over';
    over(c.L, x - r - 1, y - r - 1, x + r + 1, y + r + 1, c.e, (g) => { g.globalCompositeOperation = op; g.globalAlpha = Math.min(1, a); g.drawImage(S, x - n / 2, y - n / 2, n, n); });
    if (c.s.buff) return;
    const sp = Math.min(6, Math.max(0, c.s.dist - 0.12) * 0.6 * c.s.cap * c.s.pressure * c.step), k = Math.floor(sp + c.rng());
    for (let j = 0; j < k; j++) {
      const t = c.rng() * Math.PI * 2, d = r * (0.9 + c.rng() * 1.3), px = x + Math.cos(t) * d, py = y + Math.sin(t) * d, sz = 1 + c.rng();
      over(c.L, px, py, px + sz, py + sz, c.e, (g) => { g.globalCompositeOperation = 'source-over'; g.globalAlpha = 0.35 + c.rng() * 0.4; g.fillStyle = `rgb(${c.rgb})`; g.fillRect(px, py, sz, sz); });
    }
  };
  // a stretch of the stroke: from a to b, bending toward q. Dabs go down by distance; time only counts when the can is
  // all but still (under 12 cm/s), where it builds the spot up and wets the wall
  const stretch = (c: Cur, a: Pt, q: Pt, b: Pt) => {
    const len = Math.hypot(q.x - a.x, q.y - a.y) + Math.hypot(b.x - q.x, b.y - q.y), dt = Math.max(0, b.t - a.t), v = len / PX / Math.max(dt, 1e-3);
    const n = Math.ceil(len / c.step), fast = Math.max(0.6, Math.min(1, 1.2 - v * 0.18)), wetK = PASS[c.s.cap] * close(c.s.dist) * c.s.pressure * c.step / CELL;
    let lx = a.x, ly = a.y;
    for (let i = 1; i <= n; i++) {
      const u = i / n, w = 1 - u, x = w * w * a.x + 2 * w * u * q.x + u * u * b.x, y = w * w * a.y + 2 * w * u * q.y + u * u * b.y;
      const d = Math.hypot(x - lx, y - ly); let rem = d;
      while (c.acc + rem >= c.step) {
        rem -= c.step - c.acc; c.acc = 0;
        const f = 1 - rem / d, dx = lx + (x - lx) * f, dy = ly + (y - ly) * f;
        dab(c, dx, dy, c.a * fast); wetter(c, dx, dy, wetK, c.T0 + a.t + dt * u);
      }
      c.acc += rem; lx = x; ly = y;
    }
    const still = Math.max(0, 1 - v / 0.12);
    if (still > 0 && dt > 0) {
      const w = wetter(c, b.x, b.y, dt * still * c.s.pressure / (HOLD[c.s.cap] / close(c.s.dist)), c.T0 + b.t);
      dab(c, b.x, b.y, 1 - Math.exp(-dt * 12 * c.s.pressure * still), 1 + 0.35 * w);
    }
  };
  const finish = () => {
    const c = cur; if (!c) return;
    if (c.m && c.p && (c.m.x !== c.p.x || c.m.y !== c.p.y)) stretch(c, c.m, c.p, c.p);
    cur = null;
    while (undos.length > MAX_UNDO || undos.reduce((n, e) => n + e.snaps.size, 0) > MAX_SNAPS) { if (undos.length < 2) break; undos.shift(); }
  };
  const start = (id: string, can: Can, o: { seed?: number; group?: string } = {}) => {
    finish();
    const L = layerOf(id); if (!L) return false;
    wake(L);
    const s: Stroke = { wall: id, cap: can.cap, dist: Math.max(0.05, Math.min(0.6, can.dist)), colour: can.colour, pressure: can.pressure ?? 1, buff: !!can.buff, seed: o.seed ?? ((Math.random() * 0x7fffffff) | 0), pts: [] };
    const f = footprint({ ...can, dist: s.dist }), r = Math.max(1, f.r * PX), col = new THREE.Color(s.colour), rgb = `${Math.round(col.r * 255)},${Math.round(col.g * 255)},${Math.round(col.b * 255)}`;
    const step = Math.max(0.6, r * 0.25), coat = s.buff ? 0.97 : COAT[s.cap] * (s.pressure < 1 ? s.pressure * 0.9 : 1);
    const lastE = undos[undos.length - 1];
    let e: Entry;
    if (o.group && lastE && lastE.group === o.group && lastE.L === L) e = lastE; else undos.push(e = { L, strokes: [], snaps: new Map(), drips: [], group: o.group || '' });
    e.strokes.push(s); L.strokes.push(s); if (L.strokes.length > MAX_LOG) L.strokes.splice(0, L.strokes.length - MAX_LOG);
    // the strength of one dab, so that the dabs of a steady pass add up to the coat
    cur = { e, L, s, rng: rng(s.seed), stamp: stampOf(r, f.hard, rgb), r, a: 1 - Math.pow(1 - coat, step / (r * (1 + f.hard))), step, rgb, T0: now, acc: 0, m: null, p: null };
    return true;
  };
  const r4 = (n: number) => Math.round(n * 1e4) / 1e4;
  const feed = (xm: number, ym: number, t: number) => {
    const c = cur; if (!c) return;
    const P: Pt = { x: xm * PX, y: c.L.H - ym * PX, t }, pts = c.s.pts, n = pts.length, q: [number, number, number] = [r4(xm), r4(ym), Math.round(t * 1e3) / 1e3];
    // the log keeps a held-still can as two points, not one a frame
    if (n > 1 && pts[n - 1][0] === q[0] && pts[n - 1][1] === q[1] && pts[n - 2][0] === q[0] && pts[n - 2][1] === q[1]) pts[n - 1][2] = q[2]; else pts.push(q);
    if (!c.p) { c.p = c.m = P; dab(c, P.x, P.y, Math.min(1, c.a * 2)); return; }
    const mid: Pt = { x: (c.p.x + P.x) / 2, y: (c.p.y + P.y) / 2, t: (c.p.t + P.t) / 2 };
    stretch(c, c.m!, c.p, mid);
    c.p = P; c.m = mid;
  };
  const right = new THREE.Vector3(), v3 = new THREE.Vector3();

  return {
    /** Where a ray meets a wall's face: the wall, the point in metres from its bottom left (x right, y up), u v 0..1.
     *  ids: only these walls (the nearest one hit wins); none: any wall. */
    hit(ray: THREE.Raycaster, ids?: string[]) {
      let best: { id: string; wall: Wall; x: number; y: number; u: number; v: number; point: THREE.Vector3; dist: number } | null = null;
      const o = ray.ray.origin, dir = ray.ray.direction;
      for (const wall of ids ? ids.map((id) => byId.get(id)!) : walls) {
        if (!wall) continue;
        const n = wall.normal, den = dir.dot(n); if (den > -1e-4) continue;
        const d = (v3.copy(wall.center).addScaledVector(n, 0.012).sub(o).dot(n)) / den; if (d <= 0 || (best && d >= best.dist)) continue;
        const p = v3.copy(o).addScaledVector(dir, d), x = (p.x - wall.center.x) * n.z - (p.z - wall.center.z) * n.x + wall.w / 2, y = p.y - wall.center.y + wall.h / 2;
        if (x < 0 || x > wall.w || y < 0 || y > wall.h) continue;
        best = { id: wall.id, wall, x, y, u: x / wall.w, v: y / wall.h, point: p.clone(), dist: d };
      }
      return best;
    },
    /** A point on a wall (metres from its bottom left) in the world. */
    point(id: string, x: number, y: number, out: THREE.Vector3) {
      const w = byId.get(id); if (!w) return out;
      right.set(w.normal.z, 0, -w.normal.x);
      return out.copy(w.center).addScaledVector(right, x - w.w / 2).addScaledVector(w.normal, 0.012).setY(w.center.y - w.h / 2 + y);
    },
    /** Start a stroke on a wall with this can. group: strokes begun with the same group undo together. */
    begin: start,
    /** The can is now at (x, y) metres on the wall, t seconds into the stroke. */
    to: feed,
    end: finish,
    /** The stroke being painted, if any. */
    stroke: () => (cur ? cur.s : null),
    /** A whole stroke at once: points (u, v) 0..1 on the wall, painted as one steady pass at 1 m/s. */
    path(id: string, pts: [number, number][], can: Can) {
      const w = byId.get(id); if (!w) throw new Error('no wall ' + id);
      start(id, can);
      let t = 0, lx = 0, ly = 0;
      pts.forEach(([u, v], i) => { const x = u * w.w, y = v * w.h; if (i) t += Math.hypot(x - lx, y - ly); lx = x; ly = y; feed(x, y, t); });
      if (pts.length === 1) feed(lx, ly, 0.15);   // a single point is a short press
      finish();
    },
    /** Strokes from a log put up at once: on their own walls, or all on `wall`, moved by `at` metres and scaled.
     *  They undo together. */
    replay(strokes: Stroke[], o: { wall?: string; at?: [number, number]; scale?: number } = {}) {
      const group = 'r' + ++groupN, k = o.scale ?? 1, [ax, ay] = o.at || [0, 0];
      for (const s of strokes) {
        if (!start(o.wall || s.wall, s, { seed: s.seed, group })) throw new Error('no wall ' + (o.wall || s.wall));
        for (const [x, y, t] of s.pts) feed(ax + x * k, ay + y * k, t);
        finish();
      }
    },
    /** A wall's strokes, oldest first (those of this session, and earlier ones where the store keeps the log). */
    strokes: (id: string) => { const L = layers.get(id); return L ? L.strokes : []; },
    /** Take back the last stroke (or group of strokes) on any of these walls. A group goes back whole, whatever walls
     *  it crossed (one press of the button that ran from one wall onto the next). Returns what was taken back. */
    undo(ids: string[]) {
      if (cur && ids.includes(cur.L.wall.id)) finish();
      let k = -1; for (let i = undos.length - 1; i >= 0; i--) if (ids.includes(undos[i].L.wall.id)) { k = i; break; }
      if (k < 0) return null;
      const grp = undos[k].group, gone: Stroke[] = [];
      // newest first, so each tile ends as it was before the first of them
      for (let j = undos.length - 1; j >= 0; j--) {
        if (j !== k && (!grp || undos[j].group !== grp)) continue;
        const e = undos.splice(j, 1)[0], L = e.L;
        for (let i = drips.length - 1; i >= 0; i--) if (drips[i].e === e) drips.splice(i, 1);
        for (const [i, snap] of e.snaps) {
          if (!snap) { dropTile(L, i); continue; }
          const T = tileOf(L, i), g = T.g; g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1; g.globalCompositeOperation = 'copy'; g.drawImage(snap, 0, 0); g.restore(); T.dirty = true;
        }
        L.strokes = L.strokes.filter((s) => !e.strokes.includes(s));
        // older runs that were still going when those tiles were kept are drawn again as far as they have got
        for (const o of undos) if (o.L === L) for (const d of o.drips) runDrip(d, 0, d.i);
        L.unsaved = 1; gone.unshift(...e.strokes);
      }
      return gone;
    },
    /** How many steps of undo these walls have (a group that crossed walls is one step). */
    undoable: (ids: string[]) => new Set(undos.filter((e) => ids.includes(e.L.wall.id)).map((e, i) => e.group || '#' + i)).size,
    clear(id?: string) {
      for (const wall of walls) if (!id || wall.id === id) {
        wiped.add(wall.id);
        const L = layers.get(wall.id); if (!L) continue;
        if (cur && cur.L === L) cur = null;
        for (const i of [...L.tiles.keys()]) dropTile(L, i);
        L.wet = L.wetAt = null; L.strokes = []; L.unsaved = 0; L.blob = L.away = null; forget(L);
        for (let i = drips.length - 1; i >= 0; i--) if (drips[i].e.L === L) drips.splice(i, 1);
        void store.save(wall.id, null).catch(() => {});
        if (store.saveStrokes) void store.saveStrokes(wall.id, null).catch(() => {});
      }
    },
    /** Resolves once last session's paint is back on the walls. */
    loaded,
    /** Save every wall with paint not yet saved (also done by itself, a moment after the paint settles). */
    async flush() { await Promise.all([...layers.values()].filter((L) => L.unsaved > 0).map((L) => { L.unsaved = 0; return save(L); })); },
    /** Drips run down and the changed tiles go to the GPU. at: where the writer is, so far walls can rest. */
    update(dt: number, at?: { x: number; z: number }) {
      now += dt;
      for (let i = drips.length - 1; i >= 0; i--) { const d = drips[i], to = Math.min(d.n, d.i + dt * 60); runDrip(d, d.i, to); d.i = to; if (to >= d.n) drips.splice(i, 1); }
      for (const L of layers.values()) {
        for (const T of L.tiles.values()) if (T.dirty) { T.tex.needsUpdate = true; T.dirty = false; }
        // saved once the wall has had no new paint for a moment and nothing is still running down it
        if (L.unsaved > 0 && (L.unsaved -= dt) <= 0) {
          if ((cur && cur.L === L) || drips.some((d) => d.e.L === L)) L.unsaved = 0.5; else { L.unsaved = 0; void save(L); }
        }
      }
      if (at && (tick += dt) > 1) { tick = 0; house(at); }
    },
    /** A wall's paint as a PNG data URL (to keep or post a piece); '' for a wall with none. */
    png(id: string) { const L = layers.get(id); return L && L.tiles.size ? whole(L).toDataURL('image/png') : ''; },
    /** Whether a wall has paint on it. */
    painted: (id: string) => { const L = layers.get(id); return !!L && (L.tiles.size > 0 || !!L.away); },
    /** What the paint costs: walls with paint, tiles alive (each up to 1 MB of canvas, as much again on the GPU). */
    stats() {
      let n = 0, px = 0, away = 0, painted = 0;
      for (const L of layers.values()) { if (L.away) away++; if (L.tiles.size || L.away) painted++; for (const T of L.tiles.values()) { n++; px += T.cv.width * T.cv.height; } }
      const snaps = undos.reduce((s, e) => s + e.snaps.size, 0);
      return { walls: walls.length, painted, tiles: n, mb: Math.round(px * 4 / 1e5) / 10, resting: away, undo: undos.length, undoTiles: snaps, drips: drips.length };
    },
    dispose() {
      finish();
      for (const L of layers.values()) if (L.unsaved > 0) void save(L);   // the canvases outlive the textures
      for (const L of layers.values()) for (const T of L.tiles.values()) { scene.remove(T.mesh); (T.mesh.material as THREE.Material).dispose(); T.tex.dispose(); }
      for (const g of geos.values()) g.dispose();
    },
  };
}
