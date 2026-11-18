/**
 * Vex's PHONE: the PHOTOS store and the PNG writer (./camera.ts takes them, ./gallery.ts shows them). Q takes a picture of the game, clean (no HUD, dock, reticle or prompts: those are not in the 3D picture, and
 * the few that are, the reticle, the aim dot, the straight-line preview and the sketch ghost, are hidden for the shot),
 * at twice the view's size up to 3840 px wide. It is kept as a PNG; the game is black and white, so it is written as an
 * 8-bit grey PNG here (a third of an RGB one: a 4K frame stays well under 16 MB) with the browser's own deflate.
 *
 * Where photos are kept (a PhotoStore): this browser by default (IndexedDB, beside the walls); the desktop client
 * passes its own (files in the app's "VexVoid Photos" folder); the web game signed in passes a PhotoCloud too, and the
 * photos go to the player's account as well as this browser (merged(): the gallery lists both). Never capped.
 *
 *   const store = merged(localPhotos, cloud)   ·   encodePng(canvas)   ·   thumbOf(canvas)   ·   shutter(bus)
 */
import { localKeep } from '../spray';

/** One photo: id, when (ms), size in px, bytes of the PNG, where the writer was. */
export type PhotoMeta = { id: string; t: number; w: number; h: number; bytes: number; place?: string };
/** A photo as a store lists it: where it is kept ('browser', 'account', 'disk') and, on disk, its file. */
export type Photo = PhotoMeta & { where: string[]; path?: string };
/** Where the player's photos are kept. src() gives an <img> source (the thumbnail, or the photo itself); blob() the PNG
 *  (or its thumbnail). */
export type PhotoStore = {
  /** Where they go, in words for the player ("THIS BROWSER", "VEXVOID PHOTOS FOLDER"). */
  label: string;
  /** Keep a photo. A store may give it its own id (a file name). */
  save: (m: PhotoMeta, png: Blob, thumb: Blob) => Promise<{ id?: string; where: string[]; path?: string; note?: string }>;
  /** Every photo, newest first. */
  list: () => Promise<Photo[]>;
  src: (id: string, big?: boolean) => Promise<string | null>;
  blob: (id: string, thumb?: boolean) => Promise<Blob | null>;
  remove: (id: string) => Promise<boolean>;
  /** Optional: save a copy where the player keeps downloads (the desktop client: no browser download there). Returns where. */
  download?: (id: string) => Promise<string>;
  /** Optional: show the file in the computer's file browser. */
  reveal?: (id: string) => void;
  /** Optional: put the picture on the clipboard (the desktop client does it natively). */
  copy?: (id: string) => Promise<void>;
};
/** The player's account on a server (the web game signed in). A failed call throws an Error with a `status` (401: not
 *  signed in; 503: the store is away): the photos then stay in this browser, as the walls do. */
export type PhotoCloud = {
  list: () => Promise<{ id: string; url: string; thumb?: string; bytes?: number; t?: number }[]>;
  save: (id: string, png: Blob, thumb: Blob) => Promise<void>;
  remove: (id: string) => Promise<void>;
};

// ---------- PNG ----------
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc = (b: Uint8Array, c = 0xffffffff) => { for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 255] ^ (c >>> 8); return c; };
const chunk = (type: string, data: Uint8Array) => {
  const o = new Uint8Array(12 + data.length), v = new DataView(o.buffer);
  v.setUint32(0, data.length); for (let i = 0; i < 4; i++) o[4 + i] = type.charCodeAt(i);
  o.set(data, 8); v.setUint32(8 + data.length, (crc(o.subarray(4, 8 + data.length)) ^ 0xffffffff) >>> 0); return o;
};
const latin1 = (s: string) => Uint8Array.from(s, (ch) => ch.charCodeAt(0) & 255);
const tick = () => new Promise<void>((r) => setTimeout(r, 0));
const viaCanvas = (c: HTMLCanvasElement) => new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('the picture could not be made'))), 'image/png'));

/** A canvas as a PNG. Grey pictures (every pixel R = G = B, give or take 2) become an 8-bit grey PNG, each row filtered
 *  the way that packs best (libpng's rule: the smallest sum of differences), in slices so the game keeps running. */
export async function encodePng(c: HTMLCanvasElement, text: Record<string, string> = {}): Promise<Blob> {
  const w = c.width, h = c.height;
  if (typeof CompressionStream === 'undefined') return viaCanvas(c);
  const d = c.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, w, h).data;
  for (let i = 0; i < d.length; i += 4) if (Math.abs(d[i] - d[i + 1]) > 2 || Math.abs(d[i + 1] - d[i + 2]) > 2) return viaCanvas(c);
  const raw = new Uint8Array((w + 1) * h), prev = new Uint8Array(w), cur = new Uint8Array(w);
  const f = [new Uint8Array(w), new Uint8Array(w), new Uint8Array(w), new Uint8Array(w), new Uint8Array(w)];
  for (let y = 0; y < h; y++) {
    for (let x = 0, i = y * w * 4 + 1; x < w; x++, i += 4) cur[x] = d[i];
    const s = [0, 0, 0, 0, 0];
    for (let x = 0; x < w; x++) {
      const a = x ? cur[x - 1] : 0, b = prev[x], cc = x ? prev[x - 1] : 0, v = cur[x];
      const p = a + b - cc, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - cc), pr = pa <= pb && pa <= pc ? a : pb <= pc ? b : cc;
      const r0 = v, r1 = (v - a) & 255, r2 = (v - b) & 255, r3 = (v - ((a + b) >> 1)) & 255, r4 = (v - pr) & 255;
      f[0][x] = r0; f[1][x] = r1; f[2][x] = r2; f[3][x] = r3; f[4][x] = r4;
      s[0] += r0 < 128 ? r0 : 256 - r0; s[1] += r1 < 128 ? r1 : 256 - r1; s[2] += r2 < 128 ? r2 : 256 - r2; s[3] += r3 < 128 ? r3 : 256 - r3; s[4] += r4 < 128 ? r4 : 256 - r4;
    }
    let best = 0; for (let k = 1; k < 5; k++) if (s[k] < s[best]) best = k;
    raw[y * (w + 1)] = best; raw.set(f[best], y * (w + 1) + 1); prev.set(cur);
    if ((y & 255) === 255) await tick();
  }
  const z = new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer());
  const ihdr = new Uint8Array(13), v = new DataView(ihdr.buffer); v.setUint32(0, w); v.setUint32(4, h); ihdr[8] = 8; ihdr[9] = 0;   // 8-bit grey
  const texts = Object.entries(text).map(([k, s]) => chunk('tEXt', latin1(`${k}\0${s}`)));
  return new Blob([new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), ...texts, chunk('IDAT', z), chunk('IEND', new Uint8Array(0))], { type: 'image/png' });
}

/** A small copy for the gallery's grid (480 px wide). */
export function thumbOf(c: HTMLCanvasElement, width = 480) {
  const t = document.createElement('canvas'); t.width = width; t.height = Math.max(1, Math.round(width * c.height / c.width));
  const g = t.getContext('2d')!; g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; g.drawImage(c, 0, 0, t.width, t.height);
  return t;
}

// ---------- the shutter ----------
/** A soft shutter through the game's sound bus (so REC has it, and a muted game or app stays quiet): two short filtered
 *  clicks, the blades and the mirror, made from noise, nothing to download. */
export function shutter(bus: { ctx: AudioContext; out: AudioNode } | null) {
  if (!bus) return;
  try {
    const ctx = bus.ctx; if (ctx.state !== 'running') void ctx.resume().catch(() => {});
    const n = Math.round(ctx.sampleRate * 0.05), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.006));
    const at = ctx.currentTime + 0.005;
    for (const [dt, f, g] of [[0, 2600, 0.22], [0.075, 1700, 0.14]] as const) {
      const s = ctx.createBufferSource(); s.buffer = buf;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = 0.9;
      const gn = ctx.createGain(); gn.gain.value = g;
      s.connect(bp).connect(gn).connect(bus.out); s.start(at + dt); s.onended = () => { try { gn.disconnect(); } catch { /* gone */ } };
    }
  } catch { /* no sound here: the flash still says it */ }
}

// ---------- this browser ----------
type Kept = { png: Blob; thumb: Blob };
let chain: Promise<unknown> = Promise.resolve();
const serial = <T>(f: () => Promise<T>) => { const p = chain.then(f, f); chain = p.catch(() => {}); return p; };
const index = async () => ((await localKeep.get<PhotoMeta[]>('#photos')) || []).filter((m) => m && typeof m.id === 'string');
const urls = new Map<string, string>();
const urlOf = (key: string, b: Blob | null | undefined) => { if (!b) return null; let u = urls.get(key); if (!u) { u = URL.createObjectURL(b); urls.set(key, u); } return u; };
const forget = (id: string) => { for (const k of [id + '|t', id + '|b']) { const u = urls.get(k); if (u) { URL.revokeObjectURL(u); urls.delete(k); } } };

/** Photos kept in this browser (IndexedDB, the game's own database): an index and each photo with its thumbnail. */
export const localPhotos: PhotoStore = {
  label: 'THIS BROWSER',
  save: (m, png, thumb) => serial(async () => {
    await localKeep.put('#photo:' + m.id, { png, thumb } as Kept);
    const all = await index(); all.push(m); await localKeep.put('#photos', all);
    if (!(await localKeep.get<Kept>('#photo:' + m.id))) throw new Error('this browser would not keep the photo (storage full or blocked)');
    return { where: ['browser'] };
  }),
  list: async () => (await index()).sort((a, b) => b.t - a.t).map((m) => ({ ...m, where: ['browser'] })),
  src: async (id, big) => { const k = await localKeep.get<Kept>('#photo:' + id); return k ? urlOf(id + (big ? '|b' : '|t'), big ? k.png : k.thumb) : null; },
  blob: async (id, thumb) => { const k = await localKeep.get<Kept>('#photo:' + id); return (k && (thumb ? k.thumb : k.png)) || null; },
  remove: (id) => serial(async () => {
    const all = await index(), i = all.findIndex((m) => m.id === id); if (i < 0) return false;
    all.splice(i, 1); await localKeep.put('#photos', all); await localKeep.put('#photo:' + id, null); forget(id); return true;
  }),
};

// ---------- this browser + the player's account ----------
const statusOf = (e: unknown) => (e && typeof e === 'object' && 'status' in e ? Number((e as { status: unknown }).status) : 0);

/** The browser's photos and the account's, as one store: saved to both, listed as one (by id), deleted from both. A 401
 *  stops using the account for this session; a 503 (or no network) leaves the photo in this browser and tries next time. */
export function merged(local: PhotoStore, cloud: PhotoCloud): PhotoStore & { cloud: () => { on: boolean; last: string } } {
  let off = false, last = '';
  let known = new Map<string, { url: string; thumb?: string; bytes?: number; t?: number }>();
  const fail = (e: unknown, what: string) => { const s = statusOf(e); if (s === 401) off = true; last = s === 401 ? 'SIGNED OUT' : s === 503 ? 'ACCOUNT AWAY' : `ACCOUNT ${what} FAILED`; return s; };
  const store = {
    label: 'THIS BROWSER + YOUR ACCOUNT',
    cloud: () => ({ on: !off, last }),
    save: async (m: PhotoMeta, png: Blob, thumb: Blob) => {
      const r = await local.save(m, png, thumb), where = [...r.where];
      if (off) return { ...r, where, note: 'IN THIS BROWSER' };
      try { await cloud.save(m.id, png, thumb); where.push('account'); last = ''; return { ...r, where }; } catch (e) { fail(e, 'SAVE'); return { ...r, where, note: 'IN THIS BROWSER · ' + (last || 'ACCOUNT AWAY') }; }
    },
    list: async () => {
      const mine = await local.list(), byId = new Map(mine.map((p) => [p.id, p]));
      if (!off) {
        try {
          const up = await cloud.list(); known = new Map(up.map((u) => [u.id, u])); last = '';
          for (const u of up) {
            const p = byId.get(u.id);
            if (p) { if (!p.where.includes('account')) p.where.push('account'); continue; }
            const t = u.t || Number(u.id) || 0;
            byId.set(u.id, { id: u.id, t, w: 0, h: 0, bytes: u.bytes || 0, where: ['account'] });
          }
        } catch (e) { fail(e, 'LIST'); }
      }
      return [...byId.values()].sort((a, b) => b.t - a.t);
    },
    src: async (id: string, big?: boolean) => { const s = await local.src(id, big); if (s) return s; const k = known.get(id); return k ? (big ? k.url : k.thumb || k.url) : null; },
    blob: async (id: string, thumb?: boolean) => {
      const b = await local.blob(id, thumb); if (b) return b;
      const k = known.get(id); if (!k) return null;
      try { const r = await fetch(thumb ? k.thumb || k.url : k.url); return r.ok ? await r.blob() : null; } catch { return null; }
    },
    remove: async (id: string) => {
      const a = await local.remove(id); let b = false;
      if (!off) { try { await cloud.remove(id); b = true; known.delete(id); } catch (e) { fail(e, 'DELETE'); } }
      return a || b;
    },
  };
  return store;
}
