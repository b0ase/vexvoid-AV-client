/**
 * Spray paint on the city's walls (city.spots). Each wall gets a paint layer: a canvas at 1 px per cm, on a plane just
 * in front of the wall, lit like the wall. Paint goes on in soft dabs along the stroke: the can's distance from the wall
 * sets the width and softness (close = a sharp skinny line, far = a wide soft fade with overspray), the cap sets the
 * flow, and paint that piles up in one place runs as drips.
 *
 *   const s = makeSpray(scene, city.spots); s.hit(raycaster); s.spray(id, u, v, dt, opts); s.update(dt)
 *   s.path(id, [[u, v], ...], opts)   paints a whole stroke at once (the agent's tool, tests)
 *
 * Walls keep their paint between sessions: each wall's canvas is saved as a PNG in IndexedDB (vexvoid-game / walls)
 * a moment after the paint on it settles, and loaded back when the city is built.
 */
import * as THREE from 'three';
import type { Spot } from './city';

export type Can = { colour: string; cap: 1 | 2 | 3; dist: number };   // dist: can to wall, metres (0.05 .. 0.6)
export const COLOURS = ['#f4f4f4', '#9a9a9e', '#0c0c0e', '#c9ccd2'];   // white, grey, black, chrome
export const COLOUR_NAMES = ['WHITE', 'GREY', 'BLACK', 'CHROME'];
const PX_PER_M = 100;

type Layer = { spot: Spot; cv: HTMLCanvasElement; g: CanvasRenderingContext2D; tex: THREE.CanvasTexture; mesh: THREE.Mesh; W: number; H: number;
  wet: Float32Array; cell: number; cols: number; dirty: boolean; unsaved: number };
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
 *  e.g. a player's account on a server, so their walls follow them. save(id, null) forgets a wall. */
export type WallStore = { load: (id: string) => Promise<Blob | null>; save: (id: string, png: Blob | null) => Promise<void> };
const local: WallStore = {
  load: async (id) => { const v = await tx<Saved>('readonly', (st) => st.get(id)); return v ? v.png : null; },
  save: async (id, png) => { await tx('readwrite', (st) => (png ? st.put({ w: 0, h: 0, png } as Saved, id) : st.delete(id))); },
};

type Drip = { L: Layer; x: number; y: number; w: number; left: number; colour: string; speed: number };

export function makeSpray(scene: THREE.Scene, spots: Spot[], store: WallStore = local) {
  const layers = new Map<string, Layer>();
  const drips: Drip[] = [];
  const frames: THREE.LineLoop[] = [];
  for (const spot of spots) {
    const W = Math.round(spot.w * PX_PER_M), H = Math.round(spot.h * PX_PER_M);
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const g = cv.getContext('2d')!;
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.62, metalness: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(spot.w, spot.h), mat);
    mesh.position.copy(spot.center).addScaledVector(spot.normal, 0.012);
    mesh.quaternion.copy(spot.mesh.quaternion);
    mesh.receiveShadow = true; mesh.userData.spot = spot.id; mesh.userData.noAO = true;
    scene.add(mesh);
    // a thin white frame marks the wall as one you can paint (most of the city's walls are not)
    const hw = spot.w / 2, hh = spot.h / 2;
    const frame = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-hw, -hh, 0), new THREE.Vector3(hw, -hh, 0), new THREE.Vector3(hw, hh, 0), new THREE.Vector3(-hw, hh, 0)]),
      new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.55 }));
    frame.position.copy(spot.center).addScaledVector(spot.normal, 0.03); frame.quaternion.copy(mesh.quaternion); frame.userData.noAO = true;
    scene.add(frame); frames.push(frame);
    const cell = 24, cols = Math.ceil(W / cell);
    layers.set(spot.id, { spot, cv, g, tex, mesh, W, H, wet: new Float32Array(cols * Math.ceil(H / cell)), cell, cols, dirty: false, unsaved: 0 });
  }

  // what was painted last time comes back (a wall whose size changed starts clean)
  const loaded = Promise.all([...layers.values()].map(async (L) => {
    try {
      const png = await store.load(L.spot.id); if (!png) return;
      const im = await createImageBitmap(png);
      if (im.width === L.W && im.height === L.H) { L.g.drawImage(im, 0, 0); L.dirty = true; }
      im.close();
    } catch { /* a broken save, or the store is away: start clean */ }
  }));
  const save = (L: Layer) => new Promise<void>((res) => L.cv.toBlob(async (b) => {
    try { if (b) await store.save(L.spot.id, b); } catch { /* the store is away: the paint stays on the wall this session */ }
    res();
  }, 'image/png'));

  // one dab of paint: a soft disc, plus overspray speckle the further the can is from the wall
  const dab = (L: Layer, x: number, y: number, can: Can, flow: number) => {
    const r = (0.6 + can.cap * 0.9 + can.dist * 26) * (PX_PER_M / 100) * 1.6;    // radius in px (cm)
    const hard = Math.max(0.05, 0.75 - can.dist * 1.6);                           // close = hard edge
    const a = Math.min(1, flow * (0.5 + can.cap * 0.35) / (1 + can.dist * 5));
    const gr = L.g.createRadialGradient(x, y, 0, x, y, r);
    const c = new THREE.Color(can.colour), rgb = `${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)}`;
    gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(hard, `rgba(${rgb},${a * 0.85})`); gr.addColorStop(1, `rgba(${rgb},0)`);
    L.g.fillStyle = gr; L.g.beginPath(); L.g.arc(x, y, r, 0, Math.PI * 2); L.g.fill();
    const specks = Math.round(can.dist * 40 * flow + 1);
    L.g.fillStyle = `rgba(${rgb},${Math.min(0.9, a * 1.4)})`;
    for (let k = 0; k < specks; k++) { const t = Math.random() * Math.PI * 2, d = r * (0.8 + Math.random() * 1.6); L.g.fillRect(x + Math.cos(t) * d, y + Math.sin(t) * d, 1, 1); }
    // paint piles up where the can lingers; past a point it runs
    const ci = Math.floor(y / L.cell) * L.cols + Math.floor(x / L.cell);
    if (ci >= 0 && ci < L.wet.length) {
      L.wet[ci] += a * (1.2 - can.dist);
      if (L.wet[ci] > 6 && drips.length < 400) { L.wet[ci] = 2; drips.push({ L, x: x + (Math.random() - 0.5) * r, y: y + r * 0.6, w: Math.max(1, r * 0.22), left: 20 + Math.random() * 70, colour: rgb, speed: 18 + Math.random() * 24 }); }
    }
    L.dirty = true; L.unsaved = 1.5;
  };
  let last: { id: string; x: number; y: number } | null = null;

  return {
    /** The paint layer under a ray, as the wall's id and a point on it (u right, v up, 0..1). */
    hit(ray: THREE.Raycaster) {
      const hits = ray.intersectObjects([...layers.values()].map((L) => L.mesh), false);
      if (!hits.length || !hits[0].uv) return null;
      return { id: hits[0].object.userData.spot as string, u: hits[0].uv.x, v: hits[0].uv.y, point: hits[0].point, dist: hits[0].distance };
    },
    /** Spray at (u, v) for dt seconds; strokes join up with the last point on the same wall. */
    spray(id: string, u: number, v: number, dt: number, can: Can) {
      const L = layers.get(id); if (!L) return;
      const x = u * L.W, y = (1 - v) * L.H;
      const r = 1.2 + can.cap + can.dist * 26, step = Math.max(1, r * 0.35);
      if (last && last.id === id) {
        const d = Math.hypot(x - last.x, y - last.y), n = Math.min(80, Math.ceil(d / step));
        for (let k = 1; k <= n; k++) dab(L, last.x + (x - last.x) * k / n, last.y + (y - last.y) * k / n, can, (dt * 9) / n + 0.08);
      } else dab(L, x, y, can, dt * 9 + 0.08);
      last = { id, x, y };
    },
    lift() { last = null; },
    /** A whole stroke at once: points (u, v) on the wall, painted as if sprayed steadily. */
    path(id: string, pts: [number, number][], can: Can) {
      if (!layers.has(id)) throw new Error('no wall ' + id);
      last = null;
      for (const [u, v] of pts) this.spray(id, u, v, 1 / 30, can);
      last = null;
    },
    clear(id?: string) {
      for (const L of layers.values()) if (!id || L.spot.id === id) {
        L.g.clearRect(0, 0, L.W, L.H); L.wet.fill(0); L.dirty = true; L.unsaved = 0;
        for (let i = drips.length - 1; i >= 0; i--) if (drips[i].L === L) drips.splice(i, 1);
        void store.save(L.spot.id, null).catch(() => {});
      }
    },
    /** Resolves once last session's paint is back on the walls. */
    loaded,
    /** Save every wall with paint not yet saved (also done by itself, a moment after the paint settles). */
    async flush() { await Promise.all([...layers.values()].filter((L) => L.unsaved > 0).map((L) => { L.unsaved = 0; return save(L); })); },
    /** Drips run down, thinning, and the changed walls go to the GPU. */
    update(dt: number) {
      for (let i = drips.length - 1; i >= 0; i--) {
        const d = drips[i], dy = d.speed * dt;
        d.L.g.fillStyle = `rgba(${d.colour},0.9)`; d.L.g.fillRect(d.x - d.w / 2, d.y, d.w, dy + 1);
        d.y += dy; d.left -= dy; d.w = Math.max(0.6, d.w * (1 - dt * 0.25)); d.speed *= 1 - dt * 0.35; d.L.dirty = true;
        if (d.left <= 0 || d.speed < 2 || d.y > d.L.H) { d.L.g.beginPath(); d.L.g.arc(d.x, d.y, d.w * 0.9, 0, Math.PI * 2); d.L.g.fill(); drips.splice(i, 1); }
      }
      for (const L of layers.values()) {
        if (L.dirty) { L.tex.needsUpdate = true; L.dirty = false; }
        // saved once the wall has had no new paint for a moment and nothing is still running down it
        if (L.unsaved > 0 && (L.unsaved -= dt) <= 0) {
          if (drips.some((d) => d.L === L)) L.unsaved = 0.5; else { L.unsaved = 0; void save(L); }
        }
      }
    },
    /** A wall's paint as a PNG data URL (to keep or post a piece). */
    png(id: string) { const L = layers.get(id); return L ? L.cv.toDataURL('image/png') : ''; },
    layers,
    dispose() {
      for (const L of layers.values()) if (L.unsaved > 0) void save(L);   // the canvases outlive the textures
      for (const L of layers.values()) { scene.remove(L.mesh); L.mesh.geometry.dispose(); (L.mesh.material as THREE.Material).dispose(); L.tex.dispose(); }
      for (const f of frames) { scene.remove(f); f.geometry.dispose(); (f.material as THREE.Material).dispose(); } },
  };
}
