/**
 * The district drawn flat from the plan's data (./plan.ts), in black and white lines: the roads, the canal in its cutting
 * with the bridges, the viaduct and its foot tunnel, the buildings (shells open inside), the paintable walls (a tick on
 * each, a solid bar along it once it has paint), and on top the patrol car with its searchlight, the writer and the
 * mission markers. One drawing for both maps: the phone's MAP app (north up, the whole district, place names) and the
 * mini-map (round, local, turning with the writer).
 *
 * The caller sets the canvas transform so that world x / z are canvas x / y (z is south, so north is up) at k px per
 * metre; widths here are given in px and divided by k.
 */
import { CLIMBABLE, type Plan } from '../plan';
import type { Wall } from '../city';
import type { LawState } from '../cops';
import type { Marker } from './missions';

type V = { x0: number; x1: number; z0: number; z1: number };
const hit = (a: V, b: V) => a.x0 < b.x1 && a.x1 > b.x0 && a.z0 < b.z1 && a.z1 > b.z0;

export type MapOpts = {
  /** px per metre (including any zoom). */
  k: number;
  /** What is in view (world), for skipping what is not. */
  view: V;
  /** mini: fewer details, thicker ticks for a small map. */
  mini?: boolean;
  painted: (id: string) => boolean;
};

/** The ground layer: roads, canal, viaduct, yards, buildings. */
export function drawGround(g: CanvasRenderingContext2D, P: Plan, o: MapOpts) {
  const px = (n: number) => n / o.k, V = o.view;
  const rect = (r: V, fill: string | null, stroke: string | null, lw = 1) => {
    if (!hit(r, V)) return;
    if (fill) { g.fillStyle = fill; g.fillRect(r.x0, r.z0, r.x1 - r.x0, r.z1 - r.z0); }
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = px(lw); g.strokeRect(r.x0, r.z0, r.x1 - r.x0, r.z1 - r.z0); }
  };
  const line = (x0: number, z0: number, x1: number, z1: number, stroke: string, lw = 1, dash: number[] | null = null) => {
    g.strokeStyle = stroke; g.lineWidth = px(lw); g.setLineDash(dash ? dash.map(px) : []); g.beginPath(); g.moveTo(x0, z0); g.lineTo(x1, z1); g.stroke(); g.setLineDash([]);
  };
  // roads: a pale band with a dashed centre line
  for (const r of P.roads) {
    rect(r, 'rgba(255,255,255,0.075)', null);
    if (!o.mini && hit(r, V)) { const along = r.x1 - r.x0 > r.z1 - r.z0; if (along) line(r.x0, (r.z0 + r.z1) / 2, r.x1, (r.z0 + r.z1) / 2, 'rgba(255,255,255,0.16)', 1, [6, 6]); else line((r.x0 + r.x1) / 2, r.z0, (r.x0 + r.x1) / 2, r.z1, 'rgba(255,255,255,0.16)', 1, [6, 6]); }
  }
  // the canal: water between the towpaths, fine ripple lines, the cutting's walls
  const C = P.canal, B = P.bounds, water: V = { x0: B.x0, x1: B.x1, z0: C.z0 + 2, z1: C.z1 - 2 };
  if (hit({ ...water, z0: C.z0, z1: C.z1 }, V)) {
    rect(water, 'rgba(255,255,255,0.1)', null);
    g.save(); g.beginPath(); g.rect(water.x0, water.z0, water.x1 - water.x0, water.z1 - water.z0); g.clip();
    const step = Math.max(px(5), 0.9);
    for (let z = water.z0 + step / 2; z < water.z1; z += step) line(Math.max(V.x0, water.x0), z, Math.min(V.x1, water.x1), z, 'rgba(255,255,255,0.22)', 0.8, [3, 5]);
    g.restore();
    rect({ x0: B.x0, x1: B.x1, z0: C.z0, z1: C.z0 + 2 }, 'rgba(255,255,255,0.03)', null); rect({ x0: B.x0, x1: B.x1, z0: C.z1 - 2, z1: C.z1 }, 'rgba(255,255,255,0.03)', null);
    line(Math.max(V.x0, B.x0), C.z0, Math.min(V.x1, B.x1), C.z0, 'rgba(255,255,255,0.42)', 1.1);
    line(Math.max(V.x0, B.x0), C.z1, Math.min(V.x1, B.x1), C.z1, 'rgba(255,255,255,0.42)', 1.1);
    line(Math.max(V.x0, B.x0), water.z0, Math.min(V.x1, B.x1), water.z0, 'rgba(255,255,255,0.2)', 0.8);
    line(Math.max(V.x0, B.x0), water.z1, Math.min(V.x1, B.x1), water.z1, 'rgba(255,255,255,0.2)', 0.8);
    for (const b of [...C.bridges, ...C.foot]) rect(b, 'rgba(14,14,16,0.92)', 'rgba(255,255,255,0.45)', 1);
    for (const s of P.stairs) rect(s, 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.3)', 0.8);
  }
  // the viaduct: its band, the piers, a dashed rail line; the wide part; the foot tunnel open through it
  const VI = P.viaduct, band: V = { x0: B.x0, x1: B.x1, z0: VI.z0, z1: VI.z1 };
  if (hit({ ...band, z0: VI.wide.z0 }, V)) {
    rect(band, 'rgba(255,255,255,0.11)', 'rgba(255,255,255,0.32)', 1);
    rect(VI.wide, 'rgba(255,255,255,0.11)', 'rgba(255,255,255,0.32)', 1);
    if (!o.mini) for (const b of VI.bays) if (b.kind === 'open' || b.kind === 'shop') rect({ x0: b.x0, x1: b.x1, z0: VI.z0 + 1.2, z1: VI.z1 }, 'rgba(0,0,0,0.35)', 'rgba(255,255,255,0.2)', 0.7);
    line(Math.max(V.x0, B.x0), (VI.z0 + VI.z1) / 2 - 1, Math.min(V.x1, B.x1), (VI.z0 + VI.z1) / 2 - 1, 'rgba(255,255,255,0.28)', 1, [2, 4]);
    line(Math.max(V.x0, B.x0), (VI.z0 + VI.z1) / 2 + 1, Math.min(V.x1, B.x1), (VI.z0 + VI.z1) / 2 + 1, 'rgba(255,255,255,0.28)', 1, [2, 4]);
    rect(VI.tunnel, 'rgba(6,6,8,0.95)', 'rgba(255,255,255,0.4)', 1);
  }
  // yards: the hidden yard (the hall of fame's), the goods yard, the deck, the loading dock
  rect(P.pit, null, 'rgba(255,255,255,0.22)', 0.8);
  rect(P.yard, 'rgba(255,255,255,0.025)', 'rgba(255,255,255,0.14)', 0.8);
  rect(P.deck, 'rgba(255,255,255,0.08)', 'rgba(255,255,255,0.35)', 0.9);
  rect(P.dock, 'rgba(255,255,255,0.08)', 'rgba(255,255,255,0.3)', 0.8);
  // buildings: solid blocks, the two shells (the studio, the warehouse) open inside
  for (const b of P.blds) {
    if (!hit(b, V)) continue;
    if (b.shell) { rect(b, 'rgba(255,255,255,0.05)', 'rgba(255,255,255,0.55)', 1.6); continue; }
    rect(b, 'rgba(255,255,255,0.15)', 'rgba(255,255,255,0.42)', 1);
  }
  for (const c of P.containers) rect(c, 'rgba(255,255,255,0.2)', null);
  drawClimbs(g, P, o);
}

/** PARKOUR on the maps: every way up as a small ladder against its wall (drainpipes, fire escapes, scaffold and
 *  canal ladders), the heavens as an open triangle (a high spot) at their wall. */
export function drawClimbs(g: CanvasRenderingContext2D, P: Plan, o: MapOpts) {
  const px = (n: number) => n / o.k, V = o.view, s = o.mini ? 1.15 : 1;
  g.lineCap = 'butt';
  for (const c of P.climbs) {
    if (!CLIMBABLE.includes(c.kind) || !c.n) continue;
    if (c.x < V.x0 - 4 || c.x > V.x1 + 4 || c.z < V.z0 - 4 || c.z > V.z1 + 4) continue;
    const [nx, nz] = c.n, tx = -nz, tz = nx, L = px(7 * s), wd = px(2.2 * s), x = c.x + nx * px(1.5), z = c.z + nz * px(1.5);
    g.strokeStyle = c.kind === 'canal-ladder' ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.62)'; g.lineWidth = px(0.9);
    g.beginPath();
    for (const sd of [-1, 1]) { g.moveTo(x + tx * wd * sd, z + tz * wd * sd); g.lineTo(x + tx * wd * sd + nx * L, z + tz * wd * sd + nz * L); }
    for (let k = 1; k <= 3; k++) { const f = (k / 4) * L; g.moveTo(x - tx * wd + nx * f, z - tz * wd + nz * f); g.lineTo(x + tx * wd + nx * f, z + tz * wd + nz * f); }
    g.stroke();
  }
  for (const h of P.heavens) {
    const w = P.walls.find((q) => q.id === h.wall); if (!w) continue;
    const x = w.c[0] + w.n[0] * px(6), z = w.c[2] + w.n[1] * px(6), r = px(6 * s);
    if (x < V.x0 - 6 || x > V.x1 + 6 || z < V.z0 - 6 || z > V.z1 + 6) continue;
    g.strokeStyle = '#ffffff'; g.lineWidth = px(1.3); g.beginPath(); g.moveTo(x, z - r); g.lineTo(x + r * 0.9, z + r * 0.6); g.lineTo(x - r * 0.9, z + r * 0.6); g.closePath(); g.stroke();
  }
}

/** The paintable walls: a short tick out from each panel; a solid white bar along it once it has paint. */
export function drawWalls(g: CanvasRenderingContext2D, walls: Wall[], o: MapOpts) {
  const px = (n: number) => n / o.k, V = o.view, tick = o.mini ? 1.9 : 2;
  g.lineCap = 'butt';
  for (const w of walls) {
    const cx = w.center.x, cz = w.center.z; if (cx < V.x0 - 10 || cx > V.x1 + 10 || cz < V.z0 - 10 || cz > V.z1 + 10) continue;
    const nx = w.normal.x, nz = w.normal.z, tx = nz, tz = -nx, half = w.w / 2;
    if (o.painted(w.id)) {
      g.strokeStyle = '#ffffff'; g.lineWidth = px(o.mini ? 2.6 : 2.4);
      const off = px(o.mini ? 1.6 : 1.4);
      g.beginPath(); g.moveTo(cx - tx * half + nx * off, cz - tz * half + nz * off); g.lineTo(cx + tx * half + nx * off, cz + tz * half + nz * off); g.stroke();
    } else {
      g.strokeStyle = o.mini ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.45)'; g.lineWidth = px(1);
      g.beginPath(); g.moveTo(cx + nx * px(1), cz + nz * px(1)); g.lineTo(cx + nx * px(1 + tick * 1.6), cz + nz * px(1 + tick * 1.6)); g.stroke();
    }
  }
}

/** The patrol car (a small box along its heading) and its searchlight as a soft wedge on the ground. */
export function drawLaw(g: CanvasRenderingContext2D, L: LawState, o: MapOpts & { alpha?: number }) {
  const px = (n: number) => n / o.k, c = L.car; if (!L.on) return;
  const s = c.search;
  if (c.onStreet && s && s.on) {
    const dx = s.x1 - s.x0, dz = s.z1 - s.z0, len = Math.max(6, Math.hypot(dx, dz) + 4), a = Math.atan2(dz, dx), half = 0.3;
    const gr = g.createRadialGradient(s.x0, s.z0, 0, s.x0, s.z0, len);
    gr.addColorStop(0, 'rgba(255,255,255,0.42)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.beginPath(); g.moveTo(s.x0, s.z0); g.arc(s.x0, s.z0, len, a - half, a + half); g.closePath(); g.fill();
  }
  if (c.onStreet) {
    g.save(); g.translate(c.x, c.z); g.rotate(-c.heading);
    const w = Math.max(2.1, px(7)), l = Math.max(4.8, px(13));
    g.fillStyle = '#ffffff'; g.strokeStyle = '#000000'; g.lineWidth = px(1.2);
    g.beginPath(); g.roundRect(-w / 2, -l / 2, w, l, Math.min(w, l) * 0.25); g.fill(); g.stroke();
    g.fillStyle = '#000000'; g.fillRect(-w / 2 + px(1.5), l / 2 - l * 0.32, w - px(3), l * 0.14);   // the windscreen, its front
    g.restore();
  }
  for (const cp of L.cops) if (cp.out) { g.fillStyle = '#ffffff'; g.strokeStyle = '#000'; g.lineWidth = px(1); g.beginPath(); g.arc(cp.x, cp.z, Math.max(0.8, px(3.2)), 0, Math.PI * 2); g.fill(); g.stroke(); }
}

/** A mission marker: a diamond with a ring that breathes. */
export function drawMarker(g: CanvasRenderingContext2D, x: number, z: number, k: number, t: number, size = 7) {
  const s = size / k, ring = (size + 4 + 3 * (0.5 + 0.5 * Math.sin(t * 3))) / k;
  g.strokeStyle = 'rgba(255,255,255,0.6)'; g.lineWidth = 1.2 / k; g.beginPath(); g.arc(x, z, ring, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#ffffff'; g.strokeStyle = '#000'; g.lineWidth = 1.6 / k;
  g.beginPath(); g.moveTo(x, z - s); g.lineTo(x + s, z); g.lineTo(x, z + s); g.lineTo(x - s, z); g.closePath(); g.fill(); g.stroke();
}

/** The writer: a white arrow pointing the way they face (heading: radians, 0 = south, as the game's). */
export function drawYou(g: CanvasRenderingContext2D, x: number, z: number, heading: number, k: number, size = 9) {
  g.save(); g.translate(x, z); g.rotate(-heading + Math.PI); g.scale(1 / k, 1 / k);
  g.fillStyle = '#ffffff'; g.strokeStyle = '#000000'; g.lineWidth = 2; g.lineJoin = 'round';
  g.beginPath(); g.moveTo(0, -size * 1.15); g.lineTo(size * 0.8, size * 0.8); g.lineTo(0, size * 0.35); g.lineTo(-size * 0.8, size * 0.8); g.closePath(); g.stroke(); g.fill();
  g.restore();
}

export const isMarker = (m: Marker | null | undefined): m is Marker => !!m;
