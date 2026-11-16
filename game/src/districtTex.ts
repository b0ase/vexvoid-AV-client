/**
 * VexVoid district surfaces, all drawn in code (no downloads, nothing copied): brick and concrete facades with
 * windows (some broken, boarded, lit), shop-floor shutters, corrugated sheds, board-marked concrete, cobbles,
 * chain-link, containers; a normal map is made from each picture's height. Plus the grime layer (a shader patch:
 * soot from the ground, water stains under every ledge, rust runs on metal, blotches, wet sheen) and the decal atlas of
 * OLD GRAFFITI (tags, throw-ups, scratched tags, buffed patches) in our own letterforms, posters and stickers.
 * The game is graded black and white, so everything here is about tone, texture and wear, not colour.
 */
import * as THREE from 'three';

export const rngOf = (seed: number) => () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const cv = (w: number, h: number) => { const c = document.createElement('canvas'); c.width = Math.max(2, Math.round(w)); c.height = Math.max(2, Math.round(h)); return c; };
const g2 = (c: HTMLCanvasElement) => c.getContext('2d', { willReadFrequently: true })!;
export const texOf = (c: HTMLCanvasElement, srgb = true, repeat = true) => {
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; return t;
};
/** A normal map from a height picture (white high), Sobel, wrapped at the edges. */
function normalFrom(h: HTMLCanvasElement, k = 2.2) {
  const W = h.width, H = h.height, d = g2(h).getImageData(0, 0, W, H).data, out = cv(W, H), og = g2(out), im = og.createImageData(W, H), o = im.data;
  const at = (x: number, y: number) => d[(((y + H) % H) * W + ((x + W) % W)) * 4] / 255;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const dx = (at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1));
    const dy = (at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1));
    let nx = -dx * k, ny = dy * k, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const i = (y * W + x) * 4; o[i] = (nx * 0.5 + 0.5) * 255; o[i + 1] = (ny * 0.5 + 0.5) * 255; o[i + 2] = (nz * 0.5 + 0.5) * 255; o[i + 3] = 255;
  }
  og.putImageData(im, 0, 0); return out;
}
/** Speckle and blotch noise over a canvas (multiply-ish), for wear. */
function wear(g: CanvasRenderingContext2D, W: number, H: number, r: () => number, n: number, a: number, dark = true) {
  for (let i = 0; i < n; i++) {
    const x = r() * W, y = r() * H, s = 2 + r() * r() * 40;
    g.fillStyle = dark ? `rgba(0,0,0,${a * r()})` : `rgba(255,255,255,${a * r()})`;
    g.beginPath(); g.ellipse(x, y, s, s * (0.4 + r()), r() * 3, 0, Math.PI * 2); g.fill();
  }
}
const grey = (v: number, a = 1) => `rgba(${v | 0},${v | 0},${v | 0},${a})`;

export type Mat4 = { map: THREE.Texture; normal: THREE.Texture; em?: THREE.Texture; rough?: THREE.Texture; tw: number; th: number };

/** Bricks (stretcher bond) into colour and height canvases, px per metre `ppm`. */
function bricks(c: CanvasRenderingContext2D, hgt: CanvasRenderingContext2D, x0: number, y0: number, w: number, h: number, ppm: number, r: () => number, tone: number, spread: number) {
  const bw = 0.215 * ppm, bh = 0.065 * ppm, m = 0.012 * ppm, row = bh + m;
  c.fillStyle = grey(tone * 0.55); c.fillRect(x0, y0, w, h); hgt.fillStyle = grey(70); hgt.fillRect(x0, y0, w, h);
  for (let yy = y0, k = 0; yy < y0 + h; yy += row, k++) {
    for (let xx = x0 - (k % 2 ? bw / 2 : 0); xx < x0 + w; xx += bw + m) {
      const v = tone + (r() - 0.5) * spread, burnt = r() < 0.08 ? -25 : 0;
      c.fillStyle = grey(v + burnt); c.fillRect(xx, yy, bw, bh);
      if (r() < 0.25) { c.fillStyle = grey(v + burnt - 12, 0.6); c.fillRect(xx + r() * bw * 0.6, yy, bw * 0.3, bh); }
      hgt.fillStyle = grey(170 + r() * 50); hgt.fillRect(xx + 0.5, yy + 0.5, bw - 1, bh - 1);
      if (r() < 0.06) { hgt.fillStyle = grey(110); hgt.fillRect(xx + r() * bw * 0.7, yy, bw * 0.25, bh * 0.6); } // a chipped corner
    }
  }
}

/** A window in a facade: frame, glass (dark, broken, boarded, bricked or lit). Height canvas gets the reveal depth. */
function windowAt(c: CanvasRenderingContext2D, hg: CanvasRenderingContext2D, em: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: () => number, kind: 'dark' | 'broken' | 'boarded' | 'lit' | 'bricked' | 'void', ppm: number, tone: number) {
  // sill and lintel
  c.fillStyle = grey(tone + 18); c.fillRect(x - ppm * 0.06, y + h, w + ppm * 0.12, ppm * 0.1); c.fillRect(x - ppm * 0.03, y - ppm * 0.14, w + ppm * 0.06, ppm * 0.14);
  hg.fillStyle = grey(235); hg.fillRect(x - ppm * 0.06, y + h, w + ppm * 0.12, ppm * 0.1); hg.fillStyle = grey(205); hg.fillRect(x - ppm * 0.03, y - ppm * 0.14, w + ppm * 0.06, ppm * 0.14);
  // the reveal: deep
  hg.fillStyle = grey(20); hg.fillRect(x, y, w, h);
  if (kind === 'bricked') { bricks(c, hg, x + 2, y + 2, w - 4, h - 4, ppm, r, tone - 8, 26); return; }
  if (kind === 'boarded') {
    c.fillStyle = grey(92); c.fillRect(x + 3, y + 3, w - 6, h - 6);
    for (let i = 0; i < 4; i++) { c.fillStyle = grey(70 + r() * 30); c.fillRect(x + 3, y + 3 + i * (h - 6) / 4, w - 6, 2); }
    hg.fillStyle = grey(120); hg.fillRect(x + 3, y + 3, w - 6, h - 6);
    wear(c, w, h, r, 0, 0);
    return;
  }
  const fw = Math.max(2, ppm * 0.05);
  c.fillStyle = grey(tone + 30); c.fillRect(x, y, w, h); // frame paint
  const panes: [number, number, number, number][] = [];
  const cols = w > ppm * 1.2 ? 2 : 1, rows = 2;
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) panes.push([x + fw + i * (w - fw) / cols, y + fw + j * (h - fw) / rows, (w - fw) / cols - fw, (h - fw) / rows - fw]);
  for (const [px, py, pw, ph] of panes) {
    const broken = kind === 'broken' && r() < 0.7, gone = kind === 'void' || (broken && r() < 0.4);
    if (gone) { c.fillStyle = '#050505'; c.fillRect(px, py, pw, ph); continue; }
    const gr = c.createLinearGradient(px, py, px + pw, py + ph); gr.addColorStop(0, grey(48)); gr.addColorStop(0.5, grey(22)); gr.addColorStop(1, grey(34));
    c.fillStyle = gr; c.fillRect(px, py, pw, ph);
    if (kind === 'lit') { em.fillStyle = grey(150 + r() * 90); em.fillRect(px, py, pw, ph); c.fillStyle = grey(200); c.fillRect(px, py, pw, ph); if (r() < 0.6) { c.fillStyle = grey(120); c.fillRect(px, py, pw, ph * (0.3 + r() * 0.5)); em.fillStyle = grey(60); em.fillRect(px, py, pw, ph * 0.4); } }
    if (broken) {
      // a hole with shards round it
      const cx = px + pw * (0.3 + r() * 0.4), cy = py + ph * (0.3 + r() * 0.4);
      c.fillStyle = '#030303'; c.beginPath();
      for (let k = 0; k < 9; k++) { const a = (k / 9) * Math.PI * 2, rr = Math.min(pw, ph) * (0.15 + r() * 0.3); c.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); }
      c.fill();
      c.strokeStyle = grey(110, 0.7); c.lineWidth = 1;
      for (let k = 0; k < 6; k++) { c.beginPath(); c.moveTo(cx, cy); const a = r() * Math.PI * 2; c.lineTo(cx + Math.cos(a) * pw, cy + Math.sin(a) * ph); c.stroke(); }
    }
    // grime on the glass
    c.fillStyle = grey(0, 0.25); c.fillRect(px, py + ph * 0.75, pw, ph * 0.25);
  }
}

export type FacadeKind = 'brick' | 'soot' | 'block' | 'render' | 'shed';
/** Upper floors: 4 bays x 2 floors (16 x 7 m), repeating. */
export function facadeTex(kind: FacadeKind, seed: number, S = 1): Mat4 {
  const ppm = Math.round(80 * S), TW = 16, TH = 7, W = TW * ppm, H = TH * ppm, r = rngOf(seed);
  const c = cv(W, H), h = cv(W, H), e = cv(W, H), cg = g2(c), hg = g2(h), eg = g2(e);
  eg.fillStyle = '#000'; eg.fillRect(0, 0, W, H);
  const tone = kind === 'brick' ? 118 : kind === 'soot' ? 70 : kind === 'block' ? 132 : kind === 'render' ? 150 : 110;
  if (kind === 'brick' || kind === 'soot') bricks(cg, hg, 0, 0, W, H, ppm, r, tone, kind === 'soot' ? 22 : 34);
  else if (kind === 'block') {
    // precast panels with board marks, joints every 2 m x 3.5 m
    cg.fillStyle = grey(tone); cg.fillRect(0, 0, W, H); hg.fillStyle = grey(150); hg.fillRect(0, 0, W, H);
    for (let y = 0; y < H; y += 3) { cg.fillStyle = grey(tone + (r() - 0.5) * 10, 0.5); cg.fillRect(0, y, W, 2); }
    for (let x = 0; x <= W; x += 2 * ppm) { cg.fillStyle = grey(50); cg.fillRect(x - 1, 0, 3, H); hg.fillStyle = grey(40); hg.fillRect(x - 2, 0, 4, H); }
    for (let y = 0; y <= H; y += 3.5 * ppm) { cg.fillStyle = grey(50); cg.fillRect(0, y - 1, W, 3); hg.fillStyle = grey(40); hg.fillRect(0, y - 2, W, 4); }
    wear(cg, W, H, r, 300, 0.12);
  } else if (kind === 'render') {
    cg.fillStyle = grey(tone); cg.fillRect(0, 0, W, H); hg.fillStyle = grey(150); hg.fillRect(0, 0, W, H);
    wear(cg, W, H, r, 400, 0.1); wear(cg, W, H, r, 120, 0.06, false);
    // render fallen off in patches, bricks behind
    for (let i = 0; i < 9; i++) { const x = r() * W, y = r() * H, w = ppm * (0.4 + r() * 1.6), hh = ppm * (0.3 + r() * 1); cg.save(); cg.beginPath(); cg.ellipse(x, y, w, hh, r(), 0, 6.3); cg.clip(); bricks(cg, hg, x - w, y - hh, w * 2, hh * 2, ppm, r, 100, 30); cg.restore(); hg.strokeStyle = grey(60); hg.lineWidth = 2; hg.beginPath(); hg.ellipse(x, y, w, hh, 0, 0, 6.3); hg.stroke(); }
    for (let i = 0; i < 30; i++) { cg.strokeStyle = grey(60, 0.5); cg.lineWidth = 1; cg.beginPath(); let x = r() * W, y = r() * H; cg.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 30; y += r() * 20; cg.lineTo(x, y); } cg.stroke(); } // cracks
  } else {
    // corrugated cladding, vertical, sheets 1 m wide; a band of clerestory windows high up
    for (let x = 0; x < W; x++) { const v = Math.sin((x / ppm) * Math.PI * 2 / 0.076); cg.fillStyle = grey(tone + v * 14); cg.fillRect(x, 0, 1, H); hg.fillStyle = grey(128 + v * 110); hg.fillRect(x, 0, 1, H); }
    for (let x = 0; x < W; x += ppm) { cg.fillStyle = grey(tone - 30, 0.6); cg.fillRect(x, 0, 2, H); }
    for (let i = 0; i < 40; i++) { const x = r() * W; cg.fillStyle = grey(40, 0.35); cg.fillRect(x, H * 0.3, 2 + r() * 5, H * (0.3 + r() * 0.7)); } // rust runs
    wear(cg, W, H, r, 200, 0.18);
  }
  if (kind !== 'shed') {
    // 4 bays x 2 floors of windows
    const states = ['dark', 'dark', 'dark', 'broken', 'broken', 'boarded', 'lit', 'bricked', 'void'] as const;
    for (let f = 0; f < 2; f++) for (let b = 0; b < 4; b++) {
      const ww = (kind === 'block' ? 2.6 : 1.3) * ppm, wh = (kind === 'block' ? 1.4 : 1.9) * ppm;
      const x = b * 4 * ppm + (4 * ppm - ww) / 2, y = H - (f * 3.5 + 1.0) * ppm - wh;
      windowAt(cg, hg, eg, x, y, ww, wh, r, states[Math.floor(r() * states.length)], ppm, tone);
    }
    // string course at each floor
    for (let f = 0; f <= 2; f++) { const y = H - f * 3.5 * ppm; cg.fillStyle = grey(tone + 25); cg.fillRect(0, y - ppm * 0.12, W, ppm * 0.12); hg.fillStyle = grey(240); hg.fillRect(0, y - ppm * 0.12, W, ppm * 0.12); }
  } else {
    // clerestory band 6.2..7 m (the tile is 7 m high: the band at the top of each 7 m)
    const y = 0.15 * ppm, wh = 0.8 * ppm;
    for (let x = 0.2 * ppm; x < W; x += 1.6 * ppm) windowAt(cg, hg, eg, x, y, 1.4 * ppm, wh, r, r() < 0.6 ? 'broken' : r() < 0.5 ? 'void' : 'dark', ppm, tone);
  }
  wear(cg, W, H, r, 260, 0.1);
  return { map: texOf(c), normal: texOf(normalFrom(h, kind === 'shed' ? 1.4 : 2.4), false), em: texOf(e), tw: TW, th: TH };
}

/** Ground floor 16 x 4 m: roller shutters, steel doors, boarded shop windows, a vent. */
export function plinthTex(seed: number, S = 1): Mat4 {
  const ppm = Math.round(80 * S), TW = 16, TH = 4, W = TW * ppm, H = TH * ppm, r = rngOf(seed);
  const c = cv(W, H), h = cv(W, H), e = cv(W, H), cg = g2(c), hg = g2(h), eg = g2(e);
  eg.fillStyle = '#000'; eg.fillRect(0, 0, W, H);
  bricks(cg, hg, 0, 0, W, H, ppm, r, 92, 24);
  for (let b = 0; b < 4; b++) {
    const x = b * 4 * ppm, k = r();
    if (k < 0.45) {
      // a roller shutter in a steel frame, a box above
      const sx = x + 0.4 * ppm, sw = 3.2 * ppm, top = 0.55 * ppm;
      cg.fillStyle = grey(30); cg.fillRect(sx - 6, top - 0.35 * ppm, sw + 12, 0.35 * ppm); hg.fillStyle = grey(230); hg.fillRect(sx - 6, top - 0.35 * ppm, sw + 12, 0.35 * ppm);
      const half = r() < 0.2;
      const bot = half ? H * 0.68 : H;
      for (let y = top; y < bot; y += 0.09 * ppm) { const v = 120 + r() * 10; cg.fillStyle = grey(v); cg.fillRect(sx, y, sw, 0.06 * ppm); cg.fillStyle = grey(v - 40); cg.fillRect(sx, y + 0.06 * ppm, sw, 0.03 * ppm); hg.fillStyle = grey(190); hg.fillRect(sx, y, sw, 0.06 * ppm); hg.fillStyle = grey(110); hg.fillRect(sx, y + 0.06 * ppm, sw, 0.03 * ppm); }
      if (half) { cg.fillStyle = '#0a0a0a'; cg.fillRect(sx, bot, sw, H - bot); eg.fillStyle = grey(90); eg.fillRect(sx, H - 0.3 * ppm, sw, 0.3 * ppm); hg.fillStyle = grey(10); hg.fillRect(sx, bot, sw, H - bot); }
      for (let i = 0; i < 12; i++) { cg.fillStyle = grey(60, 0.4); cg.fillRect(sx + r() * sw, top, 2 + r() * 4, (bot - top) * r()); }
    } else if (k < 0.7) {
      // a steel door and a boarded window beside it
      const dx = x + 0.6 * ppm, dw = 1.1 * ppm, dt = H - 2.2 * ppm;
      hg.fillStyle = grey(30); hg.fillRect(dx - 4, dt - 4, dw + 8, H - dt + 4); cg.fillStyle = grey(52); cg.fillRect(dx, dt, dw, H - dt); hg.fillStyle = grey(120); hg.fillRect(dx, dt, dw, H - dt);
      cg.strokeStyle = grey(85); cg.lineWidth = 2; cg.strokeRect(dx + 6, dt + 8, dw - 12, (H - dt) * 0.4); cg.strokeRect(dx + 6, dt + (H - dt) * 0.5, dw - 12, (H - dt) * 0.42);
      cg.fillStyle = grey(180); cg.fillRect(dx + dw - 14, dt + (H - dt) * 0.5, 8, 4);
      windowAt(cg, hg, eg, x + 2 * ppm, H - 3.0 * ppm, 1.6 * ppm, 1.7 * ppm, r, r() < 0.6 ? 'boarded' : 'broken', ppm, 92);
      // a caged bulb over the door
      eg.fillStyle = grey(255); eg.fillRect(dx + dw / 2 - 5, dt - 0.25 * ppm, 10, 8); cg.fillStyle = grey(240); cg.fillRect(dx + dw / 2 - 5, dt - 0.25 * ppm, 10, 8);
    } else {
      // an old shop window, whitewashed or boarded, a fascia board above
      cg.fillStyle = grey(40); cg.fillRect(x + 0.2 * ppm, 0.3 * ppm, 3.6 * ppm, 0.6 * ppm); hg.fillStyle = grey(210); hg.fillRect(x + 0.2 * ppm, 0.3 * ppm, 3.6 * ppm, 0.6 * ppm);
      windowAt(cg, hg, eg, x + 0.4 * ppm, 1.1 * ppm, 3.2 * ppm, 2.3 * ppm, r, r() < 0.5 ? 'boarded' : r() < 0.5 ? 'dark' : 'broken', ppm, 92);
      if (r() < 0.5) { cg.fillStyle = grey(200, 0.55); cg.fillRect(x + 0.5 * ppm, 1.2 * ppm, 3.0 * ppm, 2.1 * ppm); for (let i = 0; i < 40; i++) { cg.fillStyle = grey(240, 0.3); cg.fillRect(x + 0.5 * ppm + r() * 3 * ppm, 1.2 * ppm + r() * 2 * ppm, 20, 3); } }
    }
  }
  wear(cg, W, H, r, 300, 0.14);
  return { map: texOf(c), normal: texOf(normalFrom(h, 2.4), false), em: texOf(e), tw: TW, th: TH };
}

/** Plain brick, 4 x 4 m (the viaduct, side walls, the canal). */
export function brickTex(seed: number, tone = 100, S = 1): Mat4 {
  const ppm = Math.round(96 * S), W = 4 * ppm, r = rngOf(seed), c = cv(W, W), h = cv(W, W);
  bricks(g2(c), g2(h), 0, 0, W, W, ppm, r, tone, 30); wear(g2(c), W, W, r, 200, 0.12);
  return { map: texOf(c), normal: texOf(normalFrom(h, 2.6), false), tw: 4, th: 4 };
}
/** Board-marked concrete, 4 x 4 m. */
export function concreteTex(seed: number, tone = 120, S = 1): Mat4 {
  const ppm = Math.round(64 * S), W = 4 * ppm, r = rngOf(seed), c = cv(W, W), h = cv(W, W), cg = g2(c), hg = g2(h);
  cg.fillStyle = grey(tone); cg.fillRect(0, 0, W, W); hg.fillStyle = grey(128); hg.fillRect(0, 0, W, W);
  for (let y = 0; y < W; y += 0.15 * ppm) { const v = (r() - 0.5) * 14; cg.fillStyle = grey(tone + v); cg.fillRect(0, y, W, 0.15 * ppm - 1); hg.fillStyle = grey(128 + v * 3); hg.fillRect(0, y, W, 0.15 * ppm - 1); hg.fillStyle = grey(90); hg.fillRect(0, y + 0.15 * ppm - 1, W, 1); }
  for (let i = 0; i < 60; i++) { hg.fillStyle = grey(60); const x = r() * W, y = r() * W; hg.beginPath(); hg.arc(x, y, 1 + r() * 2.5, 0, 6.3); hg.fill(); } // blowholes
  wear(cg, W, W, r, 260, 0.12); wear(cg, W, W, r, 80, 0.06, false);
  return { map: texOf(c), normal: texOf(normalFrom(h, 1.6), false), tw: 4, th: 4 };
}
/** Granite setts (the goods yard), 4 x 4 m. */
export function cobbleTex(seed: number, S = 1): Mat4 {
  const ppm = Math.round(96 * S), W = 4 * ppm, r = rngOf(seed), c = cv(W, W), h = cv(W, W), cg = g2(c), hg = g2(h);
  cg.fillStyle = grey(30); cg.fillRect(0, 0, W, W); hg.fillStyle = grey(30); hg.fillRect(0, 0, W, W);
  const sw = 0.2 * ppm, sh = 0.1 * ppm;
  for (let y = 0, k = 0; y < W; y += sh + 2, k++) for (let x = -(k % 2) * sw / 2; x < W; x += sw + 2) {
    const v = 80 + r() * 50; cg.fillStyle = grey(v); cg.beginPath(); cg.roundRect(x, y, sw, sh, 3); cg.fill();
    const gr = hg.createRadialGradient(x + sw / 2, y + sh / 2, 1, x + sw / 2, y + sh / 2, sw / 1.7); gr.addColorStop(0, grey(230)); gr.addColorStop(1, grey(110)); hg.fillStyle = gr; hg.beginPath(); hg.roundRect(x, y, sw, sh, 3); hg.fill();
  }
  wear(cg, W, W, r, 160, 0.2);
  return { map: texOf(c), normal: texOf(normalFrom(h, 2.0), false), tw: 4, th: 4 };
}
/** Corrugated steel container sides, 6 x 2.6 m (doors drawn at one end for the end faces). */
export function containerTex(seed: number, S = 1): Mat4 {
  const ppm = Math.round(64 * S), W = 6 * ppm, H = Math.round(2.6 * ppm), r = rngOf(seed), c = cv(W, H), h = cv(W, H), cg = g2(c), hg = g2(h);
  for (let x = 0; x < W; x++) { const u = (x / ppm) % 0.28, v = u < 0.1 ? 1 : u < 0.14 ? 0.5 : u < 0.24 ? 0 : 0.5; cg.fillStyle = grey(90 + v * 30); cg.fillRect(x, 0, 1, H); hg.fillStyle = grey(60 + v * 160); hg.fillRect(x, 0, 1, H); }
  cg.fillStyle = grey(60); cg.fillRect(0, 0, W, 0.12 * ppm); cg.fillRect(0, H - 0.15 * ppm, W, 0.15 * ppm);
  for (let i = 0; i < 50; i++) { const x = r() * W; cg.fillStyle = grey(30, 0.4); cg.fillRect(x, 0.1 * ppm, 2 + r() * 6, H * r()); }
  wear(cg, W, H, r, 200, 0.2);
  return { map: texOf(c), normal: texOf(normalFrom(h, 1.8), false), tw: 6, th: 2.6 };
}
/** Roofing felt and gravel. */
export function roofTex(seed: number, S = 1): Mat4 {
  const ppm = Math.round(48 * S), W = 6 * ppm, r = rngOf(seed), c = cv(W, W), h = cv(W, W), cg = g2(c), hg = g2(h);
  cg.fillStyle = grey(46); cg.fillRect(0, 0, W, W); hg.fillStyle = grey(120); hg.fillRect(0, 0, W, W);
  for (let i = 0; i < 9000; i++) { const x = r() * W, y = r() * W, v = r(); cg.fillStyle = grey(30 + v * 60); cg.fillRect(x, y, 2, 2); hg.fillStyle = grey(80 + v * 120); hg.fillRect(x, y, 2, 2); }
  wear(cg, W, W, r, 60, 0.3);
  return { map: texOf(c), normal: texOf(normalFrom(h, 1.2), false), tw: 6, th: 6 };
}
/** Chain-link mesh (alpha), 2 x 2 m. */
export function chainTex(S = 1) {
  const W = Math.round(256 * S), c = cv(W, W), g = g2(c), n = 32, s = W / n;
  g.clearRect(0, 0, W, W); g.strokeStyle = 'rgba(200,200,200,1)'; g.lineWidth = Math.max(1, W / 220);
  for (let i = -n; i < n * 2; i++) { g.beginPath(); g.moveTo(i * s, 0); g.lineTo(i * s + W, W); g.stroke(); g.beginPath(); g.moveTo(i * s, W); g.lineTo(i * s + W, 0); g.stroke(); }
  const t = texOf(c); return t;
}

// ── the grime layer: a patch for any MeshStandardMaterial, all in world space so it never repeats ──
export type GrimeOpts = { soot?: number; streak?: number; blotch?: number; rust?: number; wet?: number; floor?: number };
export function grime(mat: THREE.MeshStandardMaterial, o: GrimeOpts = {}) {
  const u = { gSoot: { value: o.soot ?? 1 }, gStreak: { value: o.streak ?? 1 }, gBlotch: { value: o.blotch ?? 1 }, gRust: { value: o.rust ?? 0 }, gWet: { value: o.wet ?? 1 }, gFloor: { value: o.floor ?? 3.5 } };
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    prev.call(mat, sh, r);
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vGw; varying vec3 vGn;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 gwp = modelMatrix * instanceMatrix * vec4(transformed, 1.0); vGn = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
        #else
          vec4 gwp = modelMatrix * vec4(transformed, 1.0); vGn = normalize(mat3(modelMatrix) * objectNormal);
        #endif
        vGw = gwp.xyz;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vGw; varying vec3 vGn; uniform float gSoot, gStreak, gBlotch, gRust, gWet, gFloor;
        float gH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float gN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gH(i), gH(i + vec2(1, 0)), f.x), mix(gH(i + vec2(0, 1)), gH(i + vec2(1, 1)), f.x), f.y); }
        float gF(vec2 p){ return gN(p) * 0.5 + gN(p * 2.07 + 3.1) * 0.3 + gN(p * 4.3 + 7.7) * 0.2; }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        {
          vec3 n = normalize(vGn);
          float wall = 1.0 - abs(n.y);
          float along = abs(n.x) > abs(n.z) ? vGw.z : vGw.x;
          vec2 wp = vec2(along, vGw.y);
          float y = vGw.y;
          // soot and splash from the ground up, heaviest in the first half metre
          float soot = (1.0 - smoothstep(0.0, 1.6, y - floor(y / 40.0) * 0.0)) * gSoot * wall;
          soot *= 0.55 + 0.45 * gN(vec2(along * 1.7, 0.0));
          // water stains: streaks that start under each floor line (ledges, sills) and fade down
          float band = fract(y / gFloor);
          float col = gN(vec2(along * 3.1, floor(y / gFloor) * 7.0));
          float st = smoothstep(0.55, 0.9, col) * pow(band, 1.6) * (0.6 + 0.4 * gN(vec2(along * 19.0, y * 0.6)));
          float runs = smoothstep(0.7, 1.0, gN(vec2(along * 9.0, 3.0))) * smoothstep(0.0, 6.0, y) * (0.5 + 0.5 * gN(vec2(along * 31.0, y * 0.3)));
          float streak = clamp(st + runs * 0.6, 0.0, 1.0) * gStreak * wall;
          // big damp blotches and dirt
          float bl = smoothstep(0.52, 0.85, gF(wp * 0.35 + vec2(n.x, n.z) * 5.0)) * gBlotch;
          // rust on metal: orange-brown in life, here darker mottling and rougher
          float ru = smoothstep(0.45, 0.8, gF(wp * 1.3 + 2.0)) * gRust;
          float dirt = clamp(soot * 0.55 + streak * 0.45 + bl * 0.35 + ru * 0.5, 0.0, 0.85);
          diffuseColor.rgb *= 1.0 - dirt;
          // wet: the lower wall and the stains are damp and shinier; the tops of things catch rain
          float wet = clamp(soot * 0.8 + streak * 0.7 + (1.0 - wall) * 0.5, 0.0, 1.0) * gWet;
          roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.45, wet) + ru * 0.2;
          diffuseColor.rgb *= 1.0 - wet * 0.12;
        }`);
  };
  const key = mat.customProgramCacheKey ? mat.customProgramCacheKey.bind(mat) : () => '';
  mat.customProgramCacheKey = () => key() + '|grime';
  return mat;
}

/** Wet ground: puddles (mirror-smooth, darker), and on High a planar reflection (the street at y 0). */
export type WetU = { tReflect: { value: THREE.Texture | null }; uReflMat: { value: THREE.Matrix4 }; uReflOn: { value: number }; uT: { value: number } };
export function wetGround(mat: THREE.MeshStandardMaterial, u: WetU, puddles = 1, refl = true) {
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u, { uPud: { value: puddles }, uUseRefl: { value: refl ? 1 : 0 } });
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWp; varying vec4 vRc; uniform mat4 uReflMat;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvec4 wpp = modelMatrix * vec4(transformed, 1.0); vWp = wpp.xyz; vRc = uReflMat * wpp;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWp; varying vec4 vRc; uniform sampler2D tReflect; uniform float uReflOn, uT, uPud, uUseRefl;
        float wh(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float wn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(wh(i),wh(i+vec2(1,0)),f.x), mix(wh(i+vec2(0,1)),wh(i+vec2(1,1)),f.x), f.y); }
        float wf(vec2 p){ return wn(p)*0.55 + wn(p*2.1+3.7)*0.3 + wn(p*4.7+1.3)*0.15; }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        float puddle = smoothstep(0.5, 0.6, wf(vWp.xz * 0.19 + 4.0)) * uPud;
        float damp = smoothstep(0.3, 0.55, wf(vWp.xz * 0.11 + 9.0));
        roughnessFactor = mix(roughnessFactor * mix(1.0, 0.55, damp), 0.03, puddle);
        diffuseColor.rgb *= mix(1.0, 0.42, puddle) * mix(1.0, 0.8, damp);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        normal = normalize(mix(normal, nonPerturbedNormal, puddle));`)
      .replace('#include <opaque_fragment>', `
        if (uReflOn > 0.5 && uUseRefl > 0.5) {
          vec3 vd = normalize(vViewPosition);
          float fres = 0.04 + 0.96 * pow(1.0 - clamp(dot(normal, vd), 0.0, 1.0), 5.0);
          vec2 ruv = vRc.xy / vRc.w;
          ruv += (vec2(wn(vWp.xz * 3.1 + uT * 0.6), wn(vWp.xz * 3.1 + 9.0 - uT * 0.5)) - 0.5) * (0.004 + puddle * 0.003);
          float blur = mix(0.012, 0.0015, puddle);
          vec3 rr = texture2D(tReflect, ruv).rgb * 0.36 + texture2D(tReflect, ruv + vec2(blur, 0.0)).rgb * 0.16 + texture2D(tReflect, ruv - vec2(blur, 0.0)).rgb * 0.16 + texture2D(tReflect, ruv + vec2(0.0, blur * 1.6)).rgb * 0.16 + texture2D(tReflect, ruv - vec2(0.0, blur * 1.6)).rgb * 0.16;
          float amt = clamp(fres * (0.35 + 0.35 * damp) + puddle * 0.55, 0.0, 0.85);
          outgoingLight = mix(outgoingLight, rr * (1.0 + puddle * 0.3), amt);
        }
        #include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => 'vxwet' + (refl ? 1 : 0) + puddles;
}

// ── OLD GRAFFITI and paper: one atlas, cells laid out in a grid ──
// our own letter skeletons (box 1 high), for tags and throw-ups that were here before Vex
const GL: Record<string, number[][][]> = {
  A: [[[0, 0], [0.35, 1], [0.7, 0]], [[0.15, 0.4], [0.55, 0.4]]], B: [[[0, 0], [0, 1], [0.45, 0.95], [0.5, 0.75], [0.1, 0.52], [0.55, 0.4], [0.55, 0.1], [0, 0]]],
  C: [[[0.6, 0.85], [0.35, 1], [0.05, 0.75], [0.05, 0.25], [0.35, 0], [0.62, 0.15]]], D: [[[0, 0], [0, 1], [0.45, 0.85], [0.6, 0.5], [0.45, 0.12], [0, 0]]],
  E: [[[0.55, 1], [0, 1], [0, 0], [0.55, 0]], [[0, 0.52], [0.42, 0.52]]], F: [[[0.55, 1], [0, 1], [0, 0]], [[0, 0.52], [0.42, 0.52]]],
  G: [[[0.6, 0.85], [0.3, 1], [0.03, 0.6], [0.15, 0.08], [0.6, 0.05], [0.62, 0.4], [0.35, 0.4]]], H: [[[0, 1], [0, 0]], [[0.6, 1], [0.6, 0]], [[0, 0.5], [0.6, 0.5]]],
  I: [[[0.05, 1], [0.05, 0]]], K: [[[0, 1], [0, 0]], [[0.55, 1], [0.05, 0.45], [0.6, 0]]], L: [[[0, 1], [0, 0], [0.5, 0]]],
  M: [[[0, 0], [0.05, 1], [0.4, 0.4], [0.75, 1], [0.8, 0]]], N: [[[0, 0], [0, 1], [0.6, 0], [0.6, 1]]], O: [[[0.32, 1], [0.02, 0.6], [0.1, 0.1], [0.45, 0], [0.66, 0.45], [0.55, 0.9], [0.32, 1]]],
  P: [[[0, 0], [0, 1], [0.5, 0.9], [0.5, 0.55], [0, 0.45]]], R: [[[0, 0], [0, 1], [0.5, 0.9], [0.5, 0.58], [0.05, 0.48], [0.55, 0]]],
  S: [[[0.58, 0.88], [0.3, 1], [0.03, 0.78], [0.3, 0.5], [0.58, 0.25], [0.3, 0], [0.02, 0.12]]], T: [[[0, 1], [0.7, 1]], [[0.35, 1], [0.35, 0]]],
  U: [[[0, 1], [0.05, 0.15], [0.3, 0], [0.55, 0.15], [0.6, 1]]], V: [[[0, 1], [0.35, 0], [0.7, 1]]], W: [[[0, 1], [0.2, 0], [0.4, 0.6], [0.6, 0], [0.8, 1]]],
  X: [[[0, 1], [0.6, 0]], [[0.6, 1], [0, 0]]], Y: [[[0, 1], [0.32, 0.5], [0.64, 1]], [[0.32, 0.5], [0.32, 0]]], Z: [[[0, 1], [0.6, 1], [0, 0], [0.62, 0]]],
  '3': [[[0.02, 0.9], [0.3, 1], [0.55, 0.78], [0.25, 0.52], [0.6, 0.3], [0.3, 0], [0.02, 0.1]]], '9': [[[0.55, 0.6], [0.3, 0.45], [0.05, 0.7], [0.3, 1], [0.58, 0.8], [0.5, 0]]],
  '1': [[[0.05, 0.8], [0.25, 1], [0.25, 0]]], '7': [[[0, 1], [0.6, 1], [0.2, 0]]],
};
// made-up names for the old crews and writers (nobody real)
const NAMES = ['KREM', 'SOKE', 'DUST', 'NERV', 'VOID', 'RAKE', 'SMEK', 'TWIST', 'GRIM', 'OKAY', 'FUME', 'SKUZ', 'HAZE', 'LURK', 'VEX', 'MOTH', 'DREG', 'KILN', 'STAY', 'WORM', 'NPG', 'V3X', 'OMNI', 'ZERO', 'CRUX', 'FROG', 'HUSK', 'RUST', 'TOMB', 'GUNK', 'SLY', 'MAKE'];
const CREWS = ['DTS', 'KWS', 'NPG', 'VXC', 'TFM', 'OKC', 'BRK', 'HMC'];
type Cell = { x: number; y: number; w: number; h: number; mw: number; mh: number; kind: 'tag' | 'throw' | 'scratch' | 'buff' | 'poster' | 'sticker' | 'stain' | 'piece' | 'stencil' };
export type Atlas = { tex: THREE.Texture; cells: Cell[]; rect: (i: number) => [number, number, number, number] };
const wordStrokes = (w: string, slant: number, r: () => number) => {
  const out: number[][][] = []; let x = 0;
  for (const ch of w) { const g = GL[ch]; if (!g) { x += 0.4; continue; } const bounce = (r() - 0.5) * 0.18, sc = 0.8 + r() * 0.4; for (const s of g) out.push(s.map(([u, v]) => [x + u * sc + v * slant, v * (1 + bounce) + bounce * 0.3])); x += 0.6 * sc + 0.12 + (ch === 'I' || ch === '1' ? -0.3 : 0); }
  return { strokes: out, w: x + slant };
};
export function graffitiAtlas(S = 1): Atlas {
  const W = Math.round(2048 * S), c = cv(W, W), g = g2(c), r = rngOf(4242), cells: Cell[] = [];
  g.clearRect(0, 0, W, W);
  const grid: [number, number, Cell['kind'], number, number][] = []; // cols, rows of the region, kind, metres w h
  // regions: 12 tag cells (256x96), 6 throw-ups (512x256), 8 scratch (256x64), 6 buff (256x192), 8 posters (128x192), 16 stickers (64x64), 4 stains (256x256), 2 pieces (512x192), 4 stencils (128x128)
  let y = 0;
  const put = (cw: number, ch: number, n: number, kind: Cell['kind'], mw: number, mh: number) => {
    const cpx = Math.round(cw * S), chx = Math.round(ch * S); let x = 0;
    for (let i = 0; i < n; i++) { if (x + cpx > W) { x = 0; y += chx; } cells.push({ x, y, w: cpx, h: chx, mw, mh, kind }); x += cpx; }
    y += chx;
  };
  put(256, 96, 16, 'tag', 1.4, 0.52); put(512, 256, 8, 'throw', 2.6, 1.3); put(256, 64, 8, 'scratch', 0.7, 0.18); put(256, 192, 8, 'buff', 2.0, 1.5);
  put(128, 192, 16, 'poster', 0.6, 0.9); put(64, 64, 32, 'sticker', 0.09, 0.09); put(256, 256, 8, 'stain', 2.5, 2.5); put(512, 192, 4, 'piece', 4.2, 1.6); put(128, 128, 8, 'stencil', 0.6, 0.6);
  void grid;
  const pen = (pts: number[][], ox: number, oy: number, k: number, lw: number, col: string, drip = 0) => {
    g.strokeStyle = col; g.lineWidth = lw; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath();
    pts.forEach(([u, v], i) => { const X = ox + u * k, Y = oy - v * k; if (i) g.lineTo(X, Y); else g.moveTo(X, Y); }); g.stroke();
    if (drip) for (const [u, v] of pts) if (r() < drip) { g.lineWidth = Math.max(1, lw * 0.4); g.beginPath(); g.moveTo(ox + u * k, oy - v * k); g.lineTo(ox + u * k, oy - v * k + lw * (2 + r() * 8)); g.stroke(); }
  };
  for (const cell of cells) {
    const { x, y: cy, w, h, kind } = cell;
    g.save(); g.beginPath(); g.rect(x + 1, cy + 1, w - 2, h - 2); g.clip();
    const name = NAMES[Math.floor(r() * NAMES.length)], fade = 0.45 + r() * 0.5;
    if (kind === 'tag' || kind === 'scratch') {
      const ws = wordStrokes(name + (r() < 0.3 ? ' ' + CREWS[Math.floor(r() * CREWS.length)] : ''), 0.15 + r() * 0.3, r);
      const k = Math.min((w - 16) / ws.w, (h - 14) / 1.25), ox = x + (w - ws.w * k) / 2, oy = cy + h - 8;
      const col = kind === 'scratch' ? `rgba(225,225,225,${0.55 * fade})` : r() < 0.5 ? `rgba(15,15,15,${fade})` : `rgba(235,235,235,${fade})`;
      const lw = kind === 'scratch' ? Math.max(1, 1.2 * S) : (2 + r() * 4) * S;
      for (const s of ws.strokes) pen(s.map(([u, v]) => [u + (kind === 'scratch' ? (r() - 0.5) * 0.02 : 0), v]), ox, oy, k, lw, col, kind === 'tag' ? 0.08 : 0);
      if (kind === 'tag' && r() < 0.5) pen([[0, -0.15], [ws.w * 0.6, -0.1], [ws.w, 0.1]], ox, oy, k, lw * 0.8, col);   // underline flick
    } else if (kind === 'throw' || kind === 'piece') {
      const ws = wordStrokes(kind === 'piece' ? name : name.slice(0, 4), 0.1, r);
      const k = Math.min((w - 40) / ws.w, (h - 40) / 1.3), ox = x + (w - ws.w * k) / 2, oy = cy + h - 26, fat = k * (kind === 'piece' ? 0.42 : 0.36);
      const light = r() < 0.6;
      // outline (fat stroke), fill (slightly thinner), a 3D drop for pieces, highlights
      if (kind === 'piece') for (const s of ws.strokes) pen(s, ox + fat * 0.35, oy + fat * 0.3, k, fat + 10, `rgba(10,10,10,${fade})`);
      for (const s of ws.strokes) pen(s, ox, oy, k, fat + 8, light ? `rgba(12,12,12,${fade})` : `rgba(230,230,230,${fade})`);
      for (const s of ws.strokes) pen(s, ox, oy, k, fat, light ? `rgba(225,225,225,${fade})` : `rgba(40,40,40,${fade})`, 0.05);
      if (kind === 'piece') { g.globalAlpha = 0.5 * fade; for (const s of ws.strokes) pen(s.map(([u, v]) => [u, v + 0.08]), ox, oy, k, fat * 0.25, 'rgba(255,255,255,1)'); g.globalAlpha = 1; }
      // partly buffed or tagged over: old pieces never survive whole
      if (r() < 0.6) { g.fillStyle = `rgba(${90 + r() * 60 | 0},${90 + r() * 60 | 0},${95 + r() * 60 | 0},0.85)`; g.fillRect(x + r() * w * 0.7, cy + r() * h * 0.5, w * (0.15 + r() * 0.3), h * (0.3 + r() * 0.5)); }
    } else if (kind === 'buff') {
      // a rectangle of mismatched paint rolled over old tags, the tags showing through at the edges
      const v = 70 + r() * 90; g.fillStyle = grey(v, 0.9); g.beginPath(); g.moveTo(x + 6 + r() * 10, cy + 8); g.lineTo(x + w - 8, cy + 6 + r() * 12); g.lineTo(x + w - 10 - r() * 10, cy + h - 8); g.lineTo(x + 8, cy + h - 6 - r() * 12); g.fill();
      for (let i = 0; i < 18; i++) { g.fillStyle = grey(v + (r() - 0.5) * 30, 0.3); g.fillRect(x + 8 + r() * (w - 20), cy + 8, 3 + r() * 10, h - 16); }   // roller marks
      if (r() < 0.6) { const ws = wordStrokes(name, 0.2, r), k = (w - 30) / ws.w * 0.5; for (const s of ws.strokes) pen(s, x + 20, cy + h * 0.7, k, 2 * S, 'rgba(10,10,10,0.7)', 0.1); }
    } else if (kind === 'poster') {
      // a wheatpasted gig or club poster (invented), torn and weathered
      const tone = 170 + r() * 60; g.fillStyle = grey(tone); g.fillRect(x + 4, cy + 4, w - 8, h - 8);
      g.fillStyle = '#111'; g.font = `900 ${Math.round(26 * S)}px Impact, "Arial Black", sans-serif`; g.textAlign = 'center';
      const lines = [['VOID', 'SOUND', 'SYSTEM'], ['V3X', 'LIVE', 'FRI'], ['NO', 'SLEEP', 'TILL'], ['WAREHOUSE', 'ALL', 'NIGHT'], ['VEXVOID', 'NEW', 'DUB'], ['LOST', 'CAT', '?'], ['RAVE', 'BACK', 'ROOM'], ['NPG', 'RED', 'NIGHT']][Math.floor(r() * 8)];
      lines.forEach((t, i) => { g.font = `900 ${Math.round((i ? 18 : 28) * S)}px Impact, "Arial Black", sans-serif`; g.fillText(t, x + w / 2, cy + (34 + i * 30) * S, w - 14); });
      g.fillStyle = '#222'; g.fillRect(x + 14, cy + h - 50 * S, w - 28, 3); for (let i = 0; i < 4; i++) g.fillRect(x + 14, cy + h - (40 - i * 8) * S, (w - 28) * (0.4 + r() * 0.6), 2);
      if (r() < 0.6) { g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.moveTo(x + w * r(), cy + h); for (let k = 0; k < 6; k++) g.lineTo(x + w * r(), cy + h * (0.4 + r() * 0.6)); g.lineTo(x + w, cy + h); g.fill(); g.globalCompositeOperation = 'source-over'; }
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x + 4, cy + h * 0.6, w - 8, h * 0.4);
    } else if (kind === 'sticker') {
      const round = r() < 0.4, v = r() < 0.5 ? 235 : 25; g.fillStyle = grey(v); if (round) { g.beginPath(); g.arc(x + w / 2, cy + h / 2, w / 2 - 4, 0, 6.3); g.fill(); } else g.fillRect(x + 4, cy + 10, w - 8, h - 20);
      g.fillStyle = grey(255 - v); g.font = `900 ${Math.round(14 * S)}px Impact, sans-serif`; g.textAlign = 'center'; g.fillText(['V3X', 'NPG', 'VOID', 'HELLO', 'KWS', 'OK', '?', 'VX'][Math.floor(r() * 8)], x + w / 2, cy + h / 2 + 5 * S, w - 10);
    } else if (kind === 'stain') {
      const gr = g.createRadialGradient(x + w / 2, cy + h / 2, 4, x + w / 2, cy + h / 2, w / 2); gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(0.7, 'rgba(0,0,0,0.2)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x, cy, w, h);
      for (let i = 0; i < 20; i++) { g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(x + w * (0.2 + r() * 0.6), cy + h * 0.4, 2 + r() * 5, h * 0.6 * r()); }
    } else if (kind === 'stencil') {
      g.fillStyle = 'rgba(15,15,15,0.85)'; g.font = `900 ${Math.round(40 * S)}px Impact, sans-serif`; g.textAlign = 'center';
      const t = ['VOID', '→', 'V3X', 'NPG'][Math.floor(r() * 4)]; g.fillText(t, x + w / 2, cy + h / 2 + 14 * S, w - 12);
      g.globalCompositeOperation = 'destination-out'; g.fillRect(x + w * 0.3, cy, 3, h); g.fillRect(x + w * 0.62, cy, 3, h); g.globalCompositeOperation = 'source-over'; // stencil bridges
    }
    g.restore();
  }
  const tex = texOf(c, true, false); tex.generateMipmaps = true;
  return { tex, cells, rect: (i) => { const q = cells[i]; return [q.x / W, 1 - (q.y + q.h) / W, q.w / W, q.h / W]; } };
}

/** A lightbox or painted sign: text on a board (white on black or black on white), with an emissive copy. */
export function signTex(text: string, sub: string, o: { w?: number; h?: number; dark?: boolean } = {}) {
  const W = o.w || 1024, H = o.h || 256, c = cv(W, H), g = g2(c);
  g.fillStyle = o.dark ? '#0b0b0b' : '#e9e9e9'; g.fillRect(0, 0, W, H);
  g.strokeStyle = o.dark ? '#d8d8d8' : '#111'; g.lineWidth = 8; g.strokeRect(14, 14, W - 28, H - 28);
  g.fillStyle = o.dark ? '#f2f2f2' : '#101010'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `900 ${Math.round(H * 0.5)}px Impact, "Arial Black", sans-serif`; g.fillText(text, W / 2, H * (sub ? 0.42 : 0.52), W - 60);
  if (sub) { g.font = `700 ${Math.round(H * 0.14)}px "Helvetica Neue", Arial, sans-serif`; g.fillText(sub, W / 2, H * 0.8, W - 60); }
  return texOf(c, true, false);
}
/** Street name plates and small notices. */
export function plateTex(text: string) {
  const W = 512, H = 128, c = cv(W, H), g = g2(c);
  g.fillStyle = '#ececec'; g.fillRect(0, 0, W, H); g.strokeStyle = '#111'; g.lineWidth = 6; g.strokeRect(8, 8, W - 16, H - 16);
  g.fillStyle = '#111'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = '700 58px "Helvetica Neue", Arial, sans-serif'; g.fillText(text, W / 2, H / 2 + 2, W - 40);
  const r = rngOf(text.length * 31); g.fillStyle = 'rgba(0,0,0,0.25)'; for (let i = 0; i < 30; i++) g.fillRect(r() * W, r() * H, 3 + r() * 20, 2 + r() * 8);
  return texOf(c, true, false);
}
/** Sketches pinned on the studio wall: paper with pencil letters (our own), drawn from the starter sketches. */
export function paperTex(draw: (cv: HTMLCanvasElement) => void, seed: number) {
  const W = 256, H = 180, c = cv(W, H), g = g2(c), r = rngOf(seed);
  g.fillStyle = grey(225 + r() * 20); g.fillRect(0, 0, W, H);
  for (let i = 0; i < 9; i++) { g.fillStyle = 'rgba(0,0,0,0.04)'; g.fillRect(0, 20 + i * 18, W, 1); }
  const inner = cv(W - 24, H - 30); draw(inner); g.globalAlpha = 0.9; g.drawImage(inner, 12, 14); g.globalAlpha = 1;
  g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(0, H - 10, W, 10);
  return texOf(c, true, false);
}
