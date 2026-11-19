/**
 * THE MINI-MAP (GAME-DESIGN 2b): a small round map top left. Local only: about 70 m round the writer, wider at a run
 * (85 m), tighter while painting (45 m). It turns with the writer's heading (the way they face is up) and a small N on
 * the rim shows north. On it: the streets, buildings and canal from the plan, the paintable walls (a tick each, a solid
 * bar once painted), the patrol car and its searchlight when they are near, and the markers of the missions in play
 * (a marker off the map sits on the rim, pointing the way). Monochrome, translucent, a thin white rim; it fades back
 * while painting. K toggles it (kept per viewer). Under it, one quiet line: the objective in play and how far.
 *
 *   const mm = makeMinimap(host, { plan, walls, painted, me, law, markers, objective }); mm.update(dt, t); mm.toggle()
 */
import type { Plan } from './plan';
import type { Wall } from './city';
import type { LawState } from './cops';
import type { Marker } from './phone/missions';
import { drawGround, drawWalls, drawLaw, drawYou } from './phone/mapdraw';
import { hudScale } from './hud';

const KEY = 'vx-game-minimap';
const pref = () => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
const keep = (on: boolean) => { try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch { /* this session only */ } };
/** The local radius (m): walking, at a run, painting. */
export const RADIUS = { walk: 70, run: 85, paint: 45 };
const UI = '"SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif';

type Me = { x: number; z: number; heading: number; speed: number; painting: boolean };
export type MinimapState = { on: boolean; shown: boolean; radius: number; rotation: number; heading: number; size: number; x: number; y: number; opacity: number; car: boolean; markers: number; edge: number; objective: string };

export function makeMinimap(host: HTMLElement, o: { plan: Plan; walls: Wall[]; painted: (id: string) => boolean; me: () => Me; law: () => LawState; markers: () => Marker[]; objective: () => { title: string; text: string; marker: Marker | null } | null }) {
  const el = document.createElement('div'); el.dataset.vxHud = 'minimap';
  el.style.cssText = 'position:absolute;left:16px;top:16px;pointer-events:none;z-index:2;transition:opacity .35s ease';
  const cv = document.createElement('canvas'); cv.style.cssText = 'display:block;border-radius:50%';
  const line = document.createElement('div'); line.dataset.vxHud = 'objective';
  line.style.cssText = `margin-top:8px;display:none;align-items:center;gap:7px;max-width:240px;padding:5px 9px 5px 7px;background:rgba(8,8,10,.55);border:1px solid rgba(255,255,255,.18);border-radius:8px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);color:#fff;font:700 9.5px/1.25 ${UI};letter-spacing:.14em;box-sizing:border-box`;
  el.append(cv, line); host.appendChild(el);
  const g = cv.getContext('2d')!;
  let on = pref(), size = 150, dpr = 1, radius = RADIUS.walk, opacity = 1, hidden = false, lastDraw = -1, lastLine = '';
  let st: MinimapState = { on, shown: on, radius, rotation: 0, heading: 0, size, x: 16, y: 16, opacity: 1, car: false, markers: 0, edge: 0, objective: '' };
  const layout = (w: number, h: number) => {
    size = Math.round(150 * hudScale(w, h)); dpr = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    cv.width = cv.height = Math.round(size * dpr); cv.style.width = cv.style.height = size + 'px'; line.style.maxWidth = Math.max(size, Math.min(260, w - 32)) + 'px'; lastDraw = -1;
  };
  { const b = host.getBoundingClientRect(); layout(b.width || 1440, b.height || 900); }
  const show = () => { const vis = on && !hidden; el.style.display = vis ? '' : 'none'; };
  show();

  const draw = (t: number) => {
    const me = o.me(), L = o.law(), R = size / 2, k = R / radius;
    // the way the writer faces is up: rotate the world so that heading points to the top of the map
    const rot = -Math.PI / 2 - Math.atan2(Math.cos(me.heading), Math.sin(me.heading));
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, size, size);
    g.save(); g.beginPath(); g.arc(R, R, R - 0.5, 0, Math.PI * 2); g.clip();
    const bg = g.createRadialGradient(R, R, R * 0.2, R, R, R); bg.addColorStop(0, 'rgba(10,10,12,0.66)'); bg.addColorStop(1, 'rgba(6,6,8,0.5)'); g.fillStyle = bg; g.fillRect(0, 0, size, size);
    g.translate(R, R); g.rotate(rot); g.scale(k, k); g.translate(-me.x, -me.z);
    const view = { x0: me.x - radius * 1.05, x1: me.x + radius * 1.05, z0: me.z - radius * 1.05, z1: me.z + radius * 1.05 };
    const mo = { k, view, mini: true, painted: o.painted };
    drawGround(g, o.plan, mo); drawWalls(g, o.walls, mo);
    // the law only when it is near (inside the map, with a margin for the beam)
    const c = L.car, near = L.on && c.onStreet && Math.hypot(c.x - me.x, c.z - me.z) < radius + 8;
    if (L.on) drawLaw(g, { ...L, car: { ...c, onStreet: near }, cops: L.cops.filter((cp) => Math.hypot(cp.x - me.x, cp.z - me.z) < radius) }, mo);
    g.restore();
    // markers: inside, a diamond; outside, a pointer on the rim
    const ms = o.markers(); let edge = 0;
    for (const m of ms) {
      const dx = m.x - me.x, dz = m.z - me.z, sx = (dx * Math.cos(rot) - dz * Math.sin(rot)) * k, sy = (dx * Math.sin(rot) + dz * Math.cos(rot)) * k, d = Math.hypot(sx, sy);
      if (d < R - 9) {
        g.save(); g.translate(R + sx, R + sy); const s = 6, ring = 9 + 2.5 * (0.5 + 0.5 * Math.sin(t * 3));
        g.strokeStyle = 'rgba(255,255,255,.65)'; g.lineWidth = 1.1; g.beginPath(); g.arc(0, 0, ring, 0, Math.PI * 2); g.stroke();
        g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, -s); g.lineTo(s, 0); g.lineTo(0, s); g.lineTo(-s, 0); g.closePath(); g.fill(); g.stroke(); g.restore();
      } else {
        edge++; const a = Math.atan2(sy, sx), rr = R - 8;
        g.save(); g.translate(R + Math.cos(a) * rr, R + Math.sin(a) * rr); g.rotate(a);
        g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 1.4; g.beginPath(); g.moveTo(6, 0); g.lineTo(-4, -5); g.lineTo(-2, 0); g.lineTo(-4, 5); g.closePath(); g.fill(); g.stroke(); g.restore();
      }
    }
    // the writer in the middle, always pointing up
    g.save(); g.translate(R, R); drawYou(g, 0, 0, Math.PI, 1, 7.5); g.restore();
    // the rim and the north tick
    g.strokeStyle = 'rgba(255,255,255,0.82)'; g.lineWidth = 1.2; g.beginPath(); g.arc(R, R, R - 0.8, 0, Math.PI * 2); g.stroke();
    const na = rot - Math.PI / 2, nx = R + Math.cos(na) * (R - 1), ny = R + Math.sin(na) * (R - 1);
    g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.moveTo(nx, ny); g.lineTo(R + Math.cos(na) * (R - 9), R + Math.sin(na) * (R - 9)); g.stroke();
    g.fillStyle = '#fff'; g.font = `800 9px ${UI}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.save(); g.translate(R + Math.cos(na) * (R - 17), R + Math.sin(na) * (R - 17)); g.fillStyle = 'rgba(0,0,0,.6)'; g.beginPath(); g.arc(0, 0, 6.5, 0, Math.PI * 2); g.fill(); g.fillStyle = '#fff'; g.fillText('N', 0, 0.5); g.restore();
    st = { on, shown: on && !hidden, radius: +radius.toFixed(1), rotation: +rot.toFixed(3), heading: +me.heading.toFixed(3), size, x: 16, y: 16, opacity: +opacity.toFixed(2), car: near, markers: ms.length, edge, objective: lastLine };
  };
  return {
    el,
    /** Every frame: the radius eases to walking / running / painting, it fades while painting, drawn at ~30 fps. */
    update: (dt: number, t: number) => {
      if (!on || hidden) return;
      const me = o.me(), want = me.painting ? RADIUS.paint : me.speed > 5.2 ? RADIUS.run : RADIUS.walk;
      radius += (want - radius) * Math.min(1, dt * 3);
      const op = me.painting ? 0.32 : 1; if (Math.abs(op - opacity) > 0.01) { opacity = op; el.style.opacity = String(op); }
      if (t - lastDraw >= 1 / 30 || lastDraw < 0) { lastDraw = t; draw(t); }
      // the objective in play, and how far
      const ob = o.objective(); let s = '';
      if (ob) { const mk = ob.marker, d = mk ? Math.hypot(mk.x - me.x, mk.z - me.z) : -1; s = `${ob.text}${d >= 0 ? ` · ${d < 1000 ? Math.round(d) + ' M' : (d / 1000).toFixed(1) + ' KM'}` : ''}`; }
      if (s !== lastLine) { lastLine = s; line.style.display = s ? 'flex' : 'none'; line.innerHTML = s ? '<span style="flex:none;width:7px;height:7px;transform:rotate(45deg);background:#fff;border:1px solid #000;margin-right:2px"></span><span></span>' : ''; if (s) (line.lastChild as HTMLElement).textContent = s; }
    },
    toggle: () => { on = !on; keep(on); show(); lastDraw = -1; return on; },
    set: (v: boolean) => { if (v !== on) { on = v; keep(v); show(); lastDraw = -1; } return on; },
    /** Out of the way for a while (photo mode, the phone open, busted). */
    hide: (v: boolean) => { if (v !== hidden) { hidden = v; show(); lastDraw = -1; } },
    isOn: () => on,
    resize: (w: number, h: number) => layout(w, h),
    /** Where it sits and how big (CSS px in the game view), for whatever else wants the top left. */
    box: () => ({ x: 16, y: 16, size: on && !hidden ? size : 0, below: on && !hidden && lastLine ? line.getBoundingClientRect().height + 8 : 0 }),
    state: () => ({ ...st, on, shown: on && !hidden, opacity: +opacity.toFixed(2), size }),
    dispose: () => el.remove(),
  };
}
