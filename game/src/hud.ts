/**
 * The painting HUD: what the can is set to, drawn rather than written. A dock at the bottom left while painting: the
 * cap (a can and its spray cone, as wide as the cap), the colour (a ring of the four with the one in the can filled in),
 * the can's distance off the wall (a gauge), the buff can, undo (with how many presses it can take back), the
 * sketchbook and help, each with its key on a keycap. Next to the reticle, a keycap and a verb only when there is
 * something to do (SPRAY before the first press, STEP ALONG when the aim is past arm's reach ...). H opens a compact
 * card with every control. Black and white, glass panels, no wall of text.
 *
 *   const hud = makeHud(host); hud.dock({ ... }); hud.near(html, x, y); hud.help(true); hud.dispose()
 */
/** What a click on the dock does (the same as the keys): set by the game once its controls exist. */
export type DockActions = { cap: (c: 1 | 2 | 3) => void; colour: (i: number) => void; colourNext: () => void; dist: (m: number) => void; buff: () => void; undo: () => void; book: () => void; help: () => void; focus: () => void };
export type DockState = { on: boolean; cap: 1 | 2 | 3; colour: number; colours: string[]; names: string[]; dist: number; line: string; buff: boolean; undo: number; book: boolean; help: boolean };

const CSS = `
.vxh{--s:1;position:absolute;inset:0;pointer-events:none;font-family:"SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif;color:#fff;-webkit-font-smoothing:antialiased}
.vxh-dock{position:absolute;left:16px;bottom:16px;display:flex;gap:6px;padding:8px;background:rgba(8,8,10,.62);border:1px solid rgba(255,255,255,.16);border-radius:12px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,.45);transform:scale(var(--s));transform-origin:0 100%;opacity:0;translate:0 8px;transition:opacity .18s ease,translate .18s ease}
.vxh-dock.on{opacity:1;translate:0 0;pointer-events:auto}
.vxh-dock.on .vxh-t{cursor:pointer}
.vxh-dock.on .vxh-t:hover{background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.28)}
.vxh-dock.on .vxh-t.act:hover{background:#fff}
.vxh-dock .vxh-kc[data-cap]{cursor:pointer;position:relative}
.vxh-dock .vxh-kc[data-cap]::after{content:"";position:absolute;inset:-7px -3px}
.vxh-dock .vxh-kc[data-cap]:hover{background:rgba(255,255,255,.3)}
.vxh-dock .seg{cursor:pointer}
.vxh-dock .seg:hover+.segv{stroke-width:6}
.vxh-t[data-k=dist]{cursor:ew-resize!important;touch-action:none}
.vxh-t{position:relative;width:66px;height:92px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:6px;box-sizing:border-box;border-radius:8px;background:rgba(255,255,255,.035);transition:background .15s ease,color .15s ease}
.vxh-t.act{background:#f2f2f2;color:#0a0a0b}
.vxh-t.act .vxh-kc{border-color:rgba(0,0,0,.55);color:#0a0a0b;background:rgba(0,0,0,.06)}
.vxh-t.pop{animation:vxhpop .28s ease}
@keyframes vxhpop{0%{background:rgba(255,255,255,.28)}100%{}}
.vxh-t svg{width:40px;height:40px;display:block;overflow:visible}
.vxh-l{margin-top:3px;font-size:10px;font-weight:700;letter-spacing:.14em;line-height:12px;white-space:nowrap;opacity:.92}
.vxh-k{margin-top:4px;display:flex;gap:3px;align-items:center;height:18px}
.vxh-kc{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;box-sizing:border-box;border:1px solid rgba(255,255,255,.62);border-bottom-width:2px;border-radius:4px;font-size:9.5px;font-weight:700;line-height:1;letter-spacing:.03em;color:#fff;background:rgba(255,255,255,.07);white-space:nowrap}
.vxh-kc.on{background:#fff;color:#0a0a0b;border-color:#fff}
.vxh-kc.dim{opacity:.4}
.vxh-kc svg{width:11px;height:13px}
.vxh-badge{position:absolute;top:4px;right:5px;min-width:15px;height:15px;padding:0 3px;box-sizing:border-box;border-radius:8px;background:#fff;color:#0a0a0b;font-size:9px;font-weight:800;line-height:15px;text-align:center}
.vxh-near{position:absolute;left:0;top:0;display:none;align-items:center;gap:7px;padding:5px 9px 5px 6px;background:rgba(8,8,10,.66);border:1px solid rgba(255,255,255,.22);border-radius:8px;font-size:10.5px;font-weight:700;letter-spacing:.18em;line-height:1;white-space:nowrap;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transform:scale(var(--s));transform-origin:0 0}
.vxh-near .vxh-kc{height:18px;min-width:18px;font-size:10px}
.vxh-near .sep{width:1px;height:12px;background:rgba(255,255,255,.3);margin:0 2px}
.vxh-help{position:absolute;left:16px;bottom:calc(16px + 118px * var(--s));display:none;padding:14px 16px 12px;background:rgba(8,8,10,.8);border:1px solid rgba(255,255,255,.18);border-radius:12px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0,0,0,.5);transform:scale(var(--s));transform-origin:0 100%}
.vxh-help.on{display:block}
.vxh-help h4{margin:0 0 10px;font-size:10px;font-weight:800;letter-spacing:.3em;opacity:.7}
.vxh-help .g{display:grid;grid-template-columns:auto auto;column-gap:22px;row-gap:7px}
.vxh-help .r{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:700;letter-spacing:.14em;white-space:nowrap}
.vxh-help .r .ks{display:flex;gap:3px;min-width:58px}
`;

// a mouse with the left, right or neither button lit, and with the wheel lit
const mouse = (b: 'l' | 'r' | 'w') => `<svg viewBox="0 0 12 16"><rect x="1" y="1" width="10" height="14" rx="5" fill="none" stroke="currentColor" stroke-width="1.3"/>${b === 'l' ? '<path d="M6 1.4 A4.6 4.6 0 0 0 1.4 6 V7 H6 Z" fill="currentColor"/>' : b === 'r' ? '<path d="M6 1.4 A4.6 4.6 0 0 1 10.6 6 V7 H6 Z" fill="currentColor"/>' : '<rect x="5" y="3.2" width="2" height="4" rx="1" fill="currentColor"/>'}<line x1="1.5" y1="7" x2="10.5" y2="7" stroke="currentColor" stroke-width="1" opacity=".6"/></svg>`;
const KEYS: Record<string, string> = { LMB: mouse('l'), RMB: mouse('r'), WHEEL: mouse('w'), UP: '↑', DOWN: '↓', LEFT: '←', RIGHT: '→' };
/** A keycap: `kc('Z')`, a mouse button `kc('LMB')`. */
export const kc = (k: string, cls = '') => `<span class="vxh-kc ${cls}">${KEYS[k] || k}</span>`;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
/** Text with keys in square brackets turned into keycaps: "[F] PAINT THIS WALL". */
export const keyed = (s: string) => esc(s).replace(/\[([A-Z0-9↑↓←→\-+ ]{1,6})\]/g, (_, k: string) => kc(k));

// the icons, drawn on a 40 x 40 grid in white lines
const can = (x: number, buff = false) => `<g transform="translate(${x} 0)" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 15 Q3 11 9 11 Q15 11 15 15 V34 Q15 36 13 36 H5 Q3 36 3 34 Z"/><rect x="7" y="7" width="4" height="4" rx="1"/>${buff ? '<path d="M3 21 H15 M3 27 H15" stroke-width="1.2" opacity=".6"/>' : '<path d="M3 20 H15" stroke-width="1.1" opacity=".55"/>'}</g>`;
const capIcon = (cap: number) => {
  const h = [0, 1.4, 4, 8.5][cap], o = [0, 0.95, 0.75, 0.55][cap];
  return `<svg viewBox="0 0 40 40">${can(0)}<path d="M13 9 L38 ${9 - h} L38 ${9 + h} Z" fill="currentColor" opacity="${o}"/><circle cx="12.6" cy="9" r="1.3" fill="currentColor"/></svg>`;
};
const ringIcon = (cols: string[], cur: number) => {
  const n = cols.length, R = 14, out: string[] = [];
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2 - Math.PI / 2 + 0.09, a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - 0.09, r = i === cur ? R + 1.5 : R;
    const p = (a: number) => `${(20 + Math.cos(a) * r).toFixed(2)} ${(20 + Math.sin(a) * r).toFixed(2)}`;
    // a fat invisible arc over each segment is its click target (the drawn arc is too thin to hit)
    out.push(`<path class="seg" data-c="${i}" d="M${p(a0)} A${r} ${r} 0 0 1 ${p(a1)}" fill="none" stroke="rgba(0,0,0,0)" stroke-width="11" pointer-events="stroke"/>`);
    out.push(`<path class="segv" d="M${p(a0)} A${r} ${r} 0 0 1 ${p(a1)}" fill="none" stroke="${cols[i]}" stroke-width="${i === cur ? 6 : 3.5}" stroke-linecap="round" pointer-events="none"/>`);
    if (i === cur) out.push(`<path d="M${p(a0)} A${r} ${r} 0 0 1 ${p(a1)}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="8.5" stroke-linecap="round" opacity=".35"/>`);
  }
  return `<svg viewBox="0 0 40 40">${out.join('')}<circle cx="20" cy="20" r="7.5" fill="${cols[cur]}" stroke="rgba(255,255,255,.75)" stroke-width="1.2"/></svg>`;
};
// the can's distance: a gauge from close (5 cm) to far (60 cm), filled to where it is
const gaugeIcon = (dist: number) => {
  const f = Math.max(0, Math.min(1, (dist - 0.05) / 0.55)), a0 = Math.PI * 0.8, sweep = Math.PI * 1.4, R = 15;
  const p = (a: number, r = R) => `${(20 + Math.cos(a) * r).toFixed(2)} ${(23 + Math.sin(a) * r).toFixed(2)}`, a1 = a0 + sweep * f;
  return `<svg viewBox="0 0 40 40"><path d="M${p(a0)} A${R} ${R} 0 1 1 ${p(a0 + sweep)}" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="3" stroke-linecap="round"/>${f > 0.01 ? `<path d="M${p(a0)} A${R} ${R} 0 ${sweep * f > Math.PI ? 1 : 0} 1 ${p(a1)}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>` : ''}<line x1="20" y1="23" x2="${p(a1, R - 5).split(' ')[0]}" y2="${p(a1, R - 5).split(' ')[1]}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="20" cy="23" r="2.2" fill="currentColor"/></svg>`;
};
const buffIcon = () => `<svg viewBox="0 0 40 40">${can(4, true)}<path d="M24 30 L35 19 M27 33 L36 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`;
const undoIcon = () => `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15 H25 A8 8 0 0 1 25 31 H15"/><path d="M17 10 L12 15 L17 20"/></svg>`;
const bookIcon = () => `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M20 12 Q14 8.5 6 10 V31 Q14 29.5 20 33 Q26 29.5 34 31 V10 Q26 8.5 20 12 Z"/><path d="M20 12 V33"/><path d="M9.5 15 Q13 14.5 16.5 16 M9.5 20 Q13 19.5 16.5 21 M23.5 16 Q27 14.5 30.5 15 M23.5 21 Q27 19.5 30.5 20" stroke-width="1.1" opacity=".6"/></svg>`;
const helpIcon = () => `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M15.8 16.5 A4.3 4.3 0 1 1 21.5 20.6 Q20 21.3 20 23.3 V24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="20" cy="28.6" r="1.5" fill="currentColor"/></svg>`;

const HELP: [string, string][] = [
  ['LMB', 'SPRAY'], ['RMB', 'LIGHT COAT'], ['SHIFT', 'STRAIGHT LINE'], ['WHEEL', 'CAN DISTANCE'],
  ['1 2 3', 'CAP'], ['TAB', 'COLOUR'], ['X', 'BUFF CAN'], ['Z', 'UNDO'],
  ['A D', 'STEP ALONG'], ['W S', 'VIEW IN / OUT'], ['← →', 'LOOK'], ['B', 'SKETCHBOOK'], ['F', 'DONE'], ['M', 'MUSIC ON / OFF'], ['H', 'CLOSE HELP'],
  ['LMB', 'CLICK THE DOCK: EVERY TILE'],
];

/** How big the panels are drawn for a view this size (never below 0.8: the labels must stay readable). */
export const hudScale = (w: number, h: number) => Math.max(0.8, Math.min(1, w / 1180, h / 640));

export function makeHud(host: HTMLElement) {
  const root = document.createElement('div'); root.className = 'vxh';
  const style = document.createElement('style'); style.textContent = CSS; root.appendChild(style);
  const dockEl = document.createElement('div'); dockEl.className = 'vxh-dock'; dockEl.dataset.vxHud = 'dock';
  const tile = (k: string) => { const t = document.createElement('div'); t.className = 'vxh-t'; t.dataset.k = k; t.innerHTML = '<div class="vxh-i"></div><div class="vxh-l"></div><div class="vxh-k"></div>'; dockEl.appendChild(t); return { t, i: t.children[0] as HTMLElement, l: t.children[1] as HTMLElement, k: t.children[2] as HTMLElement }; };
  const T = { cap: tile('cap'), colour: tile('colour'), dist: tile('dist'), buff: tile('buff'), undo: tile('undo'), book: tile('book'), help: tile('help') };
  const badge = document.createElement('div'); badge.className = 'vxh-badge'; T.undo.t.appendChild(badge);
  T.buff.i.innerHTML = buffIcon(); T.buff.l.textContent = 'BUFF'; T.buff.k.innerHTML = kc('X');
  T.undo.i.innerHTML = undoIcon(); T.undo.l.textContent = 'UNDO'; T.undo.k.innerHTML = kc('Z');
  T.book.i.innerHTML = bookIcon(); T.book.l.textContent = 'SKETCH'; T.book.k.innerHTML = kc('B');
  T.help.i.innerHTML = helpIcon(); T.help.l.textContent = 'HELP'; T.help.k.innerHTML = kc('H');
  T.dist.k.innerHTML = kc('WHEEL');
  const nearEl = document.createElement('div'); nearEl.className = 'vxh-near'; nearEl.dataset.vxPrompt = 'near';
  const helpEl = document.createElement('div'); helpEl.className = 'vxh-help';
  helpEl.innerHTML = `<h4>CAN CONTROLS</h4><div class="g">${HELP.map(([k, v]) => `<div class="r"><span class="ks">${k.split(' ').map((x) => kc(x)).join('')}</span>${v}</div>`).join('')}</div>`;
  root.append(dockEl, helpEl, nearEl);
  host.appendChild(root);
  let last: Partial<DockState> = {}, nearNow = '';
  // THE MOUSE ON THE DOCK: the cursor is never locked (it aims the can on the wall), so the dock is simply clickable
  // while painting; the dock sits over the picture, so a click there never reaches the wall (no spray, no camera turn)
  // and the keyboard stays with the game
  let act: DockActions | null = null, distDrag = false;
  const gaugeAt = (e: PointerEvent) => {   // the gauge's angle under the pointer -> the can's distance (5-60 cm)
    const svg = T.dist.i.querySelector('svg'); if (!svg || !act) return;
    const b = svg.getBoundingClientRect(), x = (e.clientX - b.left) / b.width * 40 - 20, y = (e.clientY - b.top) / b.height * 40 - 23;
    let a = Math.atan2(y, x) - Math.PI * 0.8; while (a < 0) a += Math.PI * 2; while (a > Math.PI * 2) a -= Math.PI * 2;
    const f = a > Math.PI * 1.7 ? 0 : Math.min(1, a / (Math.PI * 1.4));   // past the far end, nearer the start: close
    act.dist(Math.round((0.05 + f * 0.55) * 200) / 200);
  };
  dockEl.addEventListener('pointerdown', (e) => {
    e.preventDefault(); e.stopPropagation(); if (!act || !last.on) return;
    const el = e.target as Element, tile = el.closest('.vxh-t') as HTMLElement | null; if (!tile) return;
    const k = tile.dataset.k, capK = el.closest('[data-cap]') as HTMLElement | null, seg = el.closest('.seg') as SVGElement | null;
    if (k === 'cap') act.cap(capK ? (Number(capK.dataset.cap) as 1 | 2 | 3) : ((((last.cap || 2) % 3) + 1) as 1 | 2 | 3));
    else if (k === 'colour') { if (seg) act.colour(Number(seg.dataset.c)); else act.colourNext(); }
    else if (k === 'dist') { distDrag = true; dockEl.setPointerCapture(e.pointerId); gaugeAt(e); }
    else if (k === 'buff') act.buff(); else if (k === 'undo') act.undo(); else if (k === 'book') act.book(); else if (k === 'help') act.help();
    act.focus();
  });
  dockEl.addEventListener('pointermove', (e) => { if (distDrag) gaugeAt(e); });
  const endDist = (e: PointerEvent) => { if (distDrag) { distDrag = false; try { dockEl.releasePointerCapture(e.pointerId); } catch { /* gone */ } } };
  dockEl.addEventListener('pointerup', endDist); dockEl.addEventListener('pointercancel', endDist);
  dockEl.addEventListener('contextmenu', (e) => e.preventDefault());
  // the wheel over the dock still sets the distance (the picture under it does not get the wheel)
  dockEl.addEventListener('wheel', (e) => { e.preventDefault(); if (act && last.on && last.dist != null) act.dist(Math.round(Math.max(0.05, Math.min(0.6, last.dist + e.deltaY * 0.0005)) * 200) / 200); }, { passive: false });
  for (const [k, t] of [['cap', 'CAP: CLICK TO CHANGE · 1 2 3'], ['colour', 'COLOUR: CLICK ONE · TAB'], ['dist', 'DISTANCE: DRAG OR CLICK THE GAUGE · WHEEL'], ['buff', 'BUFF CAN · X'], ['undo', 'UNDO · Z'], ['book', 'SKETCHBOOK · B'], ['help', 'HELP · H']] as const) T[k].t.title = t;
  const pop = (t: HTMLElement) => { t.classList.remove('pop'); void t.offsetWidth; t.classList.add('pop'); };
  return {
    el: root,
    /** Make the dock clickable: what each tile does. */
    bind: (a: DockActions) => { act = a; },
    /** Scale the panels to the view (small windows get smaller panels, never clipped ones). */
    resize: (w: number, h: number) => root.style.setProperty('--s', String(hudScale(w, h).toFixed(3))),
    dock: (s: DockState) => {
      if (s.on !== last.on) dockEl.classList.toggle('on', s.on);
      if (s.cap !== last.cap) { T.cap.i.innerHTML = capIcon(s.cap); T.cap.l.textContent = ['', 'SKINNY', 'MEDIUM', 'FAT'][s.cap]; T.cap.k.innerHTML = [1, 2, 3].map((c) => kc(String(c), c === s.cap ? 'on' : '').replace('<span ', `<span data-cap="${c}" title="${['', 'SKINNY', 'MEDIUM', 'FAT'][c]} CAP" `)).join(''); if (last.cap) pop(T.cap.t); }
      if (s.colour !== last.colour || s.buff !== last.buff) { T.colour.i.innerHTML = ringIcon(s.colours, s.colour); T.colour.l.textContent = s.names[s.colour]; T.colour.k.innerHTML = kc('TAB', s.buff ? 'dim' : ''); T.colour.t.style.opacity = s.buff ? '.45' : ''; if (last.colour != null && s.colour !== last.colour) pop(T.colour.t); }
      if (s.dist !== last.dist || s.line !== last.line) { T.dist.i.innerHTML = gaugeIcon(s.dist); T.dist.l.textContent = `${Math.round(s.dist * 100)} CM`; T.dist.t.dataset.line = s.line; }
      if (s.buff !== last.buff) { T.buff.t.classList.toggle('act', s.buff); if (last.buff != null) pop(T.buff.t); }
      if (s.undo !== last.undo) { badge.textContent = String(s.undo); badge.style.display = s.undo > 0 ? '' : 'none'; T.undo.t.style.opacity = s.undo > 0 ? '' : '.45'; }
      if (s.book !== last.book) T.book.t.classList.toggle('act', s.book);
      if (s.help !== last.help || s.on !== last.on) { T.help.t.classList.toggle('act', s.help); helpEl.classList.toggle('on', s.help && s.on); }
      last = { ...s };
    },
    /** A keycap and a verb next to the reticle (screen px in the view), or nothing. */
    near: (html: string, x = 0, y = 0) => {
      if (html !== nearNow) { nearNow = html; nearEl.innerHTML = html; nearEl.style.display = html ? 'flex' : 'none'; }
      if (html) { const b = host.getBoundingClientRect(), r = nearEl.getBoundingClientRect(); nearEl.style.left = `${Math.max(8, Math.min(b.width - r.width - 8, x + 22))}px`; nearEl.style.top = `${Math.max(8, Math.min(b.height - r.height - 8, y + 16))}px`; }
    },
    dispose: () => root.remove(),
  };
}
