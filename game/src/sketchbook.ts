/**
 * The SKETCHBOOK: pieces kept as stroke data (the same shape as a wall's stroke log), picked from a panel at the side of
 * the game and put up by the writer, animated ("blast"), beside painting by hand. Starters are data files made in-house
 * (game/sketches, written by make.mjs); what you paint on a wall can be saved as a new sketch, kept like the walls are.
 *
 *   const book = makeBook(host, { onBlast, onSave, onDelete, onChange, focus })
 *   book.all() · book.pick() · book.state · book.setOpen(true) · book.add(sketch)
 *   sketchOf(strokes, name, kind) · fit(sketch, wall, aim, size, top) · drawSketch(canvas, sketch)
 */
import { kc } from './hud';
import { footprint, localKeep, type Stroke } from './spray';
import STARTERS from '../sketches/index';

export type SketchKind = 'tag' | 'throw-up' | 'piece';
export const KINDS: { id: SketchKind; label: string }[] = [{ id: 'tag', label: 'TAGS' }, { id: 'throw-up', label: 'THROW-UPS' }, { id: 'piece', label: 'PIECES' }];
/** A stroke of a sketch: a wall's stroke without its wall. pts: metres from the sketch's bottom left, seconds. */
export type SketchStroke = { cap: 1 | 2 | 3; dist: number; colour: string; pressure: number; buff?: boolean; seed: number; pts: [number, number, number][] };
/** w h: the sketch's size in metres at 100%. mine: saved by the player (starters are not). */
export type Sketch = { id: string; name: string; kind: SketchKind; about?: string; w: number; h: number; strokes: SketchStroke[]; mine?: boolean; made?: number };
/** Where the player's own sketches are kept (the starters come with the game). Default: this browser. */
export type SketchStore = { load: () => Promise<Sketch[] | null>; save: (mine: Sketch[]) => Promise<void> };
export const localSketches: SketchStore = {
  load: () => localKeep.get<Sketch[]>('#sketchbook'),
  save: (mine) => localKeep.put('#sketchbook', mine.length ? mine : null),
};
export const SPEEDS = [1, 2, 4] as const;
const GAP = 0.18;   // the writer's pause between two strokes, at 1x

/** Seconds the writer takes to put a sketch up at 1x. */
export const secsOf = (s: Sketch) => s.strokes.reduce((n, x) => n + (x.pts.length ? x.pts[x.pts.length - 1][2] : 0) + GAP, 0);

/** Strokes (from a wall's log) as a sketch: moved so the paint's bottom left is at 0,0, with room for the line. */
export function sketchOf(strokes: Stroke[], name: string, kind: SketchKind): Sketch | null {
  const list = strokes.filter((s) => s.pts.length);
  if (!list.length) return null;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, m = 0.03;
  for (const s of list) { m = Math.max(m, footprint(s).width / 2); for (const [x, y] of s.pts) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); } }
  const r3 = (n: number) => Math.round(n * 1e3) / 1e3;
  return {
    id: 'mine-' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36), name: cleanName(name) || 'UNTITLED', kind, mine: true, made: Date.now(),
    w: r3(x1 - x0 + 2 * m), h: r3(y1 - y0 + 2 * m),
    strokes: list.map((s) => ({ cap: s.cap, dist: s.dist, colour: s.colour, pressure: s.pressure, buff: s.buff || undefined, seed: s.seed, pts: s.pts.map(([x, y, t]) => [r3(x - x0 + m), r3(y - y0 + m), t] as [number, number, number]) })),
  };
}
export const cleanName = (s: string) => String(s || '').toUpperCase().replace(/[^A-Z0-9 .\-_!?#&+]/g, '').replace(/\s+/g, ' ').trim().slice(0, 24);

/** Where a sketch goes on a wall: centred on aim (metres from the wall's bottom left), size times its own size, made
 *  smaller if it would not fit the wall or reach above `top` (how high the writer reaches on this wall), kept inside. */
export function fit(sk: Sketch, wall: { w: number; h: number }, aim: { x: number; y: number }, size: number, top: number) {
  const hi = Math.max(0.3, Math.min(wall.h, top)), room = 0.06;
  let scale = Math.max(0.05, size);
  const most = Math.min((wall.w - 2 * room) / sk.w, (hi - 2 * room) / sk.h), fitted = scale > most;
  if (fitted) scale = Math.max(0.05, most);
  const w = sk.w * scale, h = sk.h * scale;
  const x = Math.max(room, Math.min(wall.w - room - w, aim.x - w / 2)), y = Math.max(room, Math.min(hi - room - h, aim.y - h / 2));
  return { at: [x, y] as [number, number], scale, fitted, w, h };
}

/** A picture of a sketch (its strokes as lines as wide as the can makes them) on a canvas: on a concrete grey, or clear. */
export function drawSketch(cv: HTMLCanvasElement, sk: Sketch, o: { bg?: string | null; pad?: number } = {}) {
  const W = cv.width, H = cv.height, pad = o.pad ?? 6, k = Math.min((W - 2 * pad) / sk.w, (H - 2 * pad) / sk.h);
  const ox = (W - sk.w * k) / 2, oy = (H - sk.h * k) / 2;
  const layer = document.createElement('canvas'); layer.width = W; layer.height = H;
  const g = layer.getContext('2d')!;
  g.lineCap = 'round'; g.lineJoin = 'round';
  for (const s of sk.strokes) {
    if (s.pts.length < 1) continue;
    g.globalCompositeOperation = s.buff ? 'destination-out' : 'source-over';
    g.globalAlpha = s.buff ? 1 : s.pressure < 1 ? 0.45 : 0.95;
    g.strokeStyle = s.colour; g.lineWidth = Math.max(0.8, footprint(s).width * k);
    g.beginPath();
    s.pts.forEach(([x, y], i) => { const px = ox + x * k, py = H - (oy + y * k); if (i) g.lineTo(px, py); else g.moveTo(px, py); });
    if (s.pts.length === 1) g.lineTo(ox + s.pts[0][0] * k + 0.1, H - (oy + s.pts[0][1] * k));
    g.stroke();
  }
  const c = cv.getContext('2d')!;
  c.clearRect(0, 0, W, H);
  if (o.bg !== null) { c.fillStyle = o.bg || '#46484d'; c.fillRect(0, 0, W, H); }
  c.drawImage(layer, 0, 0);
}

const CSS = `
.vxsb{position:absolute;right:12px;top:12px;bottom:12px;width:272px;display:none;flex-direction:column;background:rgba(6,6,8,.84);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.24);color:#fff;font:500 10px/1.5 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;user-select:none;z-index:3;box-sizing:border-box}
.vxsb *{box-sizing:border-box}
.vxsb.on{display:flex}
.vxsb-hd{display:flex;align-items:baseline;justify-content:space-between;padding:12px 14px 8px}
.vxsb-hd b{font:700 12px/1 ui-monospace,Menlo,monospace;letter-spacing:.32em}
.vxsb-hd span{color:rgba(255,255,255,.5)}
.vxsb-tabs{display:flex;border-bottom:1px solid rgba(255,255,255,.16);padding:0 8px}
.vxsb-tabs button{flex:1;background:none;border:0;border-bottom:2px solid transparent;color:rgba(255,255,255,.55);font:inherit;letter-spacing:.16em;padding:8px 2px 7px;cursor:pointer}
.vxsb-tabs button.on{color:#fff;border-bottom-color:#fff}
.vxsb-tabs button:hover{color:#fff}
.vxsb-list{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:6px;min-height:60px}
.vxsb-list::-webkit-scrollbar{width:4px}.vxsb-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.3)}
.vxsb-card{position:relative;border:1px solid rgba(255,255,255,.14);padding:5px;cursor:pointer;background:rgba(255,255,255,.02)}
.vxsb-card:hover{border-color:rgba(255,255,255,.45)}
.vxsb-card.on{border-color:#fff;background:rgba(255,255,255,.09)}
.vxsb-card canvas{display:block;width:100%;height:auto}
.vxsb-card .n{display:flex;justify-content:space-between;margin-top:4px;font-weight:700;letter-spacing:.2em}
.vxsb-card .m{color:rgba(255,255,255,.5);font-size:9px}
.vxsb-card .x{position:absolute;right:6px;top:6px;width:18px;height:18px;border:1px solid rgba(255,255,255,.4);background:rgba(0,0,0,.6);color:#fff;font:600 11px/15px ui-monospace,Menlo,monospace;text-align:center;letter-spacing:0;cursor:pointer;padding:0}
.vxsb-card .x:hover{background:#fff;color:#000}
.vxsb-empty{color:rgba(255,255,255,.45);padding:14px 6px;line-height:1.8}
.vxsb-ctl{border-top:1px solid rgba(255,255,255,.16);padding:10px 14px;display:flex;flex-direction:column;gap:9px}
.vxsb-row{display:flex;align-items:center;gap:8px}
.vxsb-row>label{width:44px;color:rgba(255,255,255,.55)}
.vxsb-seg{display:flex;flex:1}
.vxsb-seg button{flex:1;background:none;border:1px solid rgba(255,255,255,.3);color:rgba(255,255,255,.7);font:inherit;padding:5px 0;cursor:pointer;margin-left:-1px}
.vxsb-seg button.on{background:#fff;color:#000;border-color:#fff}
.vxsb input[type=range]{flex:1;accent-color:#fff;height:14px}
.vxsb-row output{width:38px;text-align:right}
.vxsb-go{background:#fff;color:#000;border:0;font:700 11px/1 ui-monospace,Menlo,monospace;letter-spacing:.3em;padding:10px 0;cursor:pointer;width:100%}
.vxsb-go:disabled{background:rgba(255,255,255,.2);color:rgba(255,255,255,.5);cursor:default}
.vxsb-save{display:flex;gap:6px}
.vxsb-save input{flex:1;min-width:0;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.3);color:#fff;font:inherit;padding:6px 7px;outline:none}
.vxsb-save input:focus{border-color:#fff}
.vxsb-save button{background:none;border:1px solid rgba(255,255,255,.55);color:#fff;font:inherit;padding:6px 8px;cursor:pointer;white-space:nowrap}
.vxsb-save button:hover:not(:disabled){background:#fff;color:#000}
.vxsb-save button:disabled{opacity:.4;cursor:default}
.vxsb-keys{display:flex;flex-wrap:wrap;gap:6px 12px;padding:2px 14px 12px;color:rgba(255,255,255,.72);font:700 9.5px/1 "SF Pro Text",-apple-system,system-ui,sans-serif;letter-spacing:.14em}
.vxsb-k{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.vxsb-k .vxh-kc{margin-right:-2px}
`;

export type BookState = { open: boolean; kind: SketchKind; pick: string; speed: 1 | 2 | 4; size: number };
type Cb = { onPick?: () => void; onBlast: () => void; onSave: (name: string, kind: SketchKind) => void; onDelete: (id: string) => void; onChange: () => void; focus: () => void; canSave: () => boolean };

export function makeBook(host: HTMLElement, cb: Cb, store: SketchStore = localSketches) {
  const starters = (STARTERS as unknown as Sketch[]).map((s) => ({ ...s, mine: false }));
  let mine: Sketch[] = [];
  const state: BookState = { open: false, kind: 'tag', pick: starters[0] ? starters[0].id : '', speed: 2, size: 1 };
  const loaded = store.load().then((v) => { if (Array.isArray(v)) mine = v.filter((s) => s && Array.isArray(s.strokes) && s.w > 0 && s.h > 0).map((s) => ({ ...s, mine: true })); render(); }).catch(() => {});
  const all = () => [...starters, ...mine];
  const byId = (id: string) => all().find((s) => s.id === id) || null;
  const pick = () => byId(state.pick);

  if (!document.getElementById('vxsb-css')) { const st = document.createElement('style'); st.id = 'vxsb-css'; st.textContent = CSS; document.head.appendChild(st); }
  const el = document.createElement('div'); el.className = 'vxsb';
  el.innerHTML = `<div class="vxsb-hd"><b>SKETCHBOOK</b><span>B CLOSE</span></div>
    <div class="vxsb-tabs">${KINDS.map((k) => `<button data-k="${k.id}">${k.label}</button>`).join('')}</div>
    <div class="vxsb-list"></div>
    <div class="vxsb-ctl">
      <div class="vxsb-row"><label>SPEED</label><div class="vxsb-seg">${SPEEDS.map((s) => `<button data-s="${s}">${s}×</button>`).join('')}</div></div>
      <div class="vxsb-row"><label>SIZE</label><input type="range" min="25" max="200" step="5" value="100"><output>100%</output></div>
      <button class="vxsb-go">BLAST</button>
      <div class="vxsb-save"><input maxlength="24" placeholder="NAME" spellcheck="false"><button>SAVE WALL</button></div>
    </div>
    <div class="vxsb-keys">${([[["[", "]"], "PICK"], [["V"], "SPEED"], [["-", "="], "SIZE"], [["G"], "BLAST"], [["N"], "SAVE"], [["Z"], "UNDO"]] as [string[], string][]).map(([k, v]) => `<span class="vxsb-k">${k.map((x) => kc(x)).join("")}${v}</span>`).join("")}</div>`;
  host.appendChild(el);
  const $ = <T extends Element>(q: string) => el.querySelector(q) as T;
  const list = $<HTMLDivElement>('.vxsb-list'), range = $<HTMLInputElement>('input[type=range]'), out = $<HTMLOutputElement>('output');
  const go = $<HTMLButtonElement>('.vxsb-go'), nameIn = $<HTMLInputElement>('.vxsb-save input'), saveB = $<HTMLButtonElement>('.vxsb-save button');
  // nothing in the panel reaches the game underneath; keys typed in the name box stay there
  for (const ev of ['pointerdown', 'wheel', 'contextmenu'] as const) el.addEventListener(ev, (e) => e.stopPropagation());
  el.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.target === nameIn) { if (e.key === 'Enter') { e.preventDefault(); save(); cb.focus(); } if (e.key === 'Escape') cb.focus(); } });

  const thumbs = new Map<string, HTMLCanvasElement>();
  const thumb = (s: Sketch) => {
    let c = thumbs.get(s.id);
    if (!c) { c = document.createElement('canvas'); c.width = 488; c.height = Math.round(Math.max(70, Math.min(150, 488 * s.h / s.w))); drawSketch(c, s, { pad: 10 }); thumbs.set(s.id, c); }
    return c;
  };
  const changed = () => { render(); cb.onChange(); };
  function render() {
    el.classList.toggle('on', state.open);
    el.querySelectorAll<HTMLButtonElement>('.vxsb-tabs button').forEach((b) => b.classList.toggle('on', b.dataset.k === state.kind));
    el.querySelectorAll<HTMLButtonElement>('.vxsb-seg button').forEach((b) => b.classList.toggle('on', Number(b.dataset.s) === state.speed));
    range.value = String(Math.round(state.size * 100)); out.textContent = Math.round(state.size * 100) + '%';
    const p = pick(); go.disabled = !p; go.textContent = p ? `BLAST ${p.name}` : 'PICK A SKETCH';
    saveB.disabled = !cb.canSave(); saveB.title = saveB.disabled ? 'Paint a wall first (F at a wall)' : 'Keep what is on this wall as a sketch';
    if (!state.open) return;
    const shown = all().filter((s) => s.kind === state.kind);
    list.replaceChildren(...shown.map((s) => {
      const card = document.createElement('div'); card.className = 'vxsb-card' + (s.id === state.pick ? ' on' : ''); card.dataset.id = s.id;
      const n = document.createElement('div'); n.className = 'n'; n.innerHTML = '<span></span><span class="m"></span>';
      (n.firstChild as HTMLElement).textContent = s.name; (n.lastChild as HTMLElement).textContent = s.mine ? 'MINE' : '';
      const m = document.createElement('div'); m.className = 'm'; m.textContent = `${s.w.toFixed(1)} × ${s.h.toFixed(1)} M · ${s.strokes.length} STROKES · ${Math.round(secsOf(s))} S`;
      card.append(thumb(s), n, m);
      if (s.mine) { const x = document.createElement('button'); x.className = 'x'; x.textContent = '×'; x.title = 'Delete this sketch'; x.addEventListener('click', (e) => { e.stopPropagation(); cb.onDelete(s.id); }); card.appendChild(x); }
      card.addEventListener('click', () => { state.pick = s.id; cb.onPick?.(); changed(); cb.focus(); });
      return card;
    }));
    if (!shown.length) { const d = document.createElement('div'); d.className = 'vxsb-empty'; d.textContent = 'NOTHING HERE YET. PAINT A WALL, NAME IT BELOW AND SAVE WALL.'; list.appendChild(d); }
    const on = list.querySelector('.on') as HTMLElement | null; if (on) on.scrollIntoView({ block: 'nearest' });
  }
  el.querySelectorAll<HTMLButtonElement>('.vxsb-tabs button').forEach((b) => b.addEventListener('click', () => { setKind(b.dataset.k as SketchKind); cb.focus(); }));
  el.querySelectorAll<HTMLButtonElement>('.vxsb-seg button').forEach((b) => b.addEventListener('click', () => { state.speed = Number(b.dataset.s) as 1 | 2 | 4; changed(); cb.focus(); }));
  range.addEventListener('input', () => { state.size = Number(range.value) / 100; out.textContent = range.value + '%'; cb.onChange(); });
  range.addEventListener('change', () => cb.focus());
  go.addEventListener('click', () => { cb.focus(); cb.onBlast(); });
  const save = () => cb.onSave(nameIn.value, state.kind);
  saveB.addEventListener('click', () => { save(); cb.focus(); });

  const setKind = (k: SketchKind) => {
    state.kind = k;
    const cur = pick(); if (!cur || cur.kind !== k) { const f = all().find((s) => s.kind === k); state.pick = f ? f.id : ''; }
    changed();
  };
  return {
    el, state, loaded, all, byId, pick,
    setOpen: (on: boolean) => { state.open = on; changed(); },
    setKind,
    /** The next or previous sketch, on into the next tab at the end of one. */
    step: (d: number) => {
      const order = KINDS.flatMap((k) => all().filter((s) => s.kind === k.id)); if (!order.length) return;
      let i = order.findIndex((s) => s.id === state.pick); i = ((i < 0 ? 0 : i + d) + order.length) % order.length;
      state.pick = order[i].id; state.kind = order[i].kind; cb.onPick?.(); changed();
    },
    choose: (id: string) => { const s = byId(id); if (!s) return false; state.pick = s.id; state.kind = s.kind; cb.onPick?.(); changed(); return true; },
    speed: (v?: number) => { if (v != null) { state.speed = (SPEEDS as readonly number[]).includes(v) ? v as 1 | 2 | 4 : SPEEDS[(SPEEDS.indexOf(state.speed) + 1) % SPEEDS.length]; changed(); } return state.speed; },
    size: (v: number) => { state.size = Math.max(0.25, Math.min(2, Math.round(v * 20) / 20)); changed(); },
    /** A new sketch of the player's, kept in the store. */
    add: async (s: Sketch) => { mine.push(s); thumbs.delete(s.id); state.pick = s.id; state.kind = s.kind; nameIn.value = ''; changed(); await store.save(mine.map(({ mine: _m, ...x }) => x as Sketch)); },
    remove: async (id: string) => {
      const i = mine.findIndex((s) => s.id === id); if (i < 0) return false;
      mine.splice(i, 1); thumbs.delete(id); if (state.pick === id) { const f = all().find((s) => s.kind === state.kind); state.pick = f ? f.id : ''; }
      changed(); await store.save(mine.map(({ mine: _m, ...x }) => x as Sketch)); return true;
    },
    refresh: render,
    nameField: () => nameIn,
    dispose: () => { el.remove(); },
  };
}
