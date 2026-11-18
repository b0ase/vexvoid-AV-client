/**
 * Vex's PHONE, part 2: the GALLERY. Every photo the player has taken (./photo.ts), newest first, as a grid of thumbnails over the game; one
 * opened big with DOWNLOAD, COPY / SHARE where the platform allows, SHOW IN FOLDER (desktop) and DELETE (asked first).
 * L or the dock tile opens it. Keys while it is open: arrows pick, Enter opens, Esc goes back, S saves the PNG, C copies,
 * Delete deletes (Enter yes, Esc no), L closes. The mouse does all of it too. No limit on how many (never cap users).
 *
 * It fills whatever it is mounted in (the game view now; the phone's screen later) and lays itself out for that box: wide
 * (a grid of 16:9 cards, the big view with arrows at its sides), small (a phone held sideways: compact) or tall (a phone
 * held upright: two columns, the big view's arrows and details under the picture).
 *
 *   const gal = makeGallery(host, { store, focus, note }); gal.open(true); gal.key('ArrowRight'); gal.state()
 */
import { kc } from '../hud';
import type { Photo, PhotoStore } from './photos';

const CSS = `
.vxg{position:absolute;inset:0;display:none;z-index:4;background:rgba(0,0,0,.5);font-family:"SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif;color:#fff;-webkit-font-smoothing:antialiased;user-select:none}
.vxg.on{display:block}
.vxg *{box-sizing:border-box}
.vxg-p{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(1240px,calc(100% - 48px));height:calc(100% - 48px);display:flex;flex-direction:column;background:rgba(6,6,8,.9);border:1px solid rgba(255,255,255,.2);border-radius:12px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 20px 60px rgba(0,0,0,.6);overflow:hidden}
.vxg-hd{display:flex;align-items:center;gap:14px;padding:14px 18px 12px;border-bottom:1px solid rgba(255,255,255,.12);min-height:50px}
.vxg-hd b{font-size:13px;font-weight:800;letter-spacing:.34em;white-space:nowrap}
.vxg-hd .c{font:600 10px/1 ui-monospace,Menlo,monospace;letter-spacing:.18em;color:rgba(255,255,255,.55)}
.vxg-hd .sp{flex:1}
.vxg-hd .w{font:600 10px/1 ui-monospace,Menlo,monospace;letter-spacing:.14em;color:rgba(255,255,255,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.vxg-x{display:flex;align-items:center;gap:6px;background:none;border:1px solid rgba(255,255,255,.28);border-radius:7px;color:#fff;font-family:inherit;font-size:10px;font-weight:700;line-height:1;letter-spacing:.2em;padding:6px 8px 6px 10px;cursor:pointer;white-space:nowrap}
.vxg-x:hover{background:#fff;color:#0a0a0b}
.vxg-x:hover .vxh-kc{border-color:rgba(0,0,0,.55);color:#0a0a0b}
.vxg-grid{flex:1;overflow-y:auto;padding:14px 16px 18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;align-content:start}
.vxg-grid::-webkit-scrollbar{width:5px}.vxg-grid::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:3px}
.vxg-card{position:relative;border-radius:8px;overflow:hidden;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);cursor:pointer;transition:border-color .12s ease,transform .12s ease}
.vxg-card:hover{border-color:rgba(255,255,255,.5)}
.vxg-card.on{border-color:#fff;box-shadow:0 0 0 1px #fff}
.vxg-card .im{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#0b0b0d}
.vxg-card .cap{display:flex;justify-content:space-between;gap:8px;padding:7px 9px 8px;font:600 9.5px/1.2 ui-monospace,Menlo,monospace;letter-spacing:.14em;color:rgba(255,255,255,.62)}
.vxg-card .cap b{color:#fff;font-weight:700}
.vxg-card .cap span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vxg-empty{grid-column:1/-1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:12vh 10px;color:rgba(255,255,255,.55);font-size:11px;font-weight:700;letter-spacing:.24em;text-align:center}
.vxg-empty svg{width:54px;height:54px;opacity:.55}
.vxg-ft{display:flex;flex-wrap:wrap;gap:6px 16px;align-items:center;padding:10px 18px 12px;border-top:1px solid rgba(255,255,255,.12);font-size:9.5px;font-weight:700;letter-spacing:.16em;color:rgba(255,255,255,.7)}
.vxg-ft .k{display:flex;align-items:center;gap:6px;white-space:nowrap}
.vxg-ft .k .vxh-kc{gap:0}
.vxg-v{position:absolute;inset:0;display:none;flex-direction:column;background:rgba(4,4,6,.97)}
.vxg.view .vxg-v{display:flex}
.vxg.view>.vxg-p>.vxg-grid,.vxg.view>.vxg-p>.vxg-ft,.vxg.view>.vxg-p>.vxg-hd{visibility:hidden}
.vxg-v .stage{position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:10px 56px}
.vxg-v .stage img{max-width:100%;max-height:100%;object-fit:contain;display:block;box-shadow:0 12px 40px rgba(0,0,0,.7)}
.vxg-nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:64px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.18);border-radius:8px;color:#fff;cursor:pointer;font-size:20px}
.vxg-nav:hover{background:#fff;color:#000}
.vxg-nav.l{left:8px}.vxg-nav.r{right:8px}
.vxg-nav[disabled]{opacity:.2;pointer-events:none}
.vxg-acts{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;padding:10px 16px 14px;border-top:1px solid rgba(255,255,255,.12)}
.vxg-b{display:flex;align-items:center;gap:8px;height:34px;padding:0 12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.28);border-radius:8px;color:#fff;font-family:inherit;font-size:10.5px;font-weight:700;letter-spacing:.2em;cursor:pointer;white-space:nowrap}
.vxg-b:hover{background:#fff;color:#0a0a0b}
.vxg-b:hover .vxh-kc{border-color:rgba(0,0,0,.55);color:#0a0a0b}
.vxg-b.warn{border-color:rgba(255,255,255,.5)}
.vxg-b[hidden]{display:none}
.vxg-ask{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);display:none;align-items:center;gap:12px;padding:10px 12px 10px 16px;background:#f2f2f2;color:#0a0a0b;border-radius:10px;font-size:10.5px;font-weight:800;letter-spacing:.2em;box-shadow:0 12px 30px rgba(0,0,0,.6);white-space:nowrap;max-width:calc(100% - 24px)}
.vxg.ask .vxg-ask{display:flex}
.vxg-ask .vxg-b{color:#0a0a0b;border-color:rgba(0,0,0,.35);background:rgba(0,0,0,.04);height:30px}
.vxg-ask .vxg-b:hover{background:#0a0a0b;color:#fff}
.vxg-ask .vxh-kc{border-color:rgba(0,0,0,.55);color:#0a0a0b;background:rgba(0,0,0,.06)}
.vxg-ask .vxg-b:hover .vxh-kc{border-color:rgba(255,255,255,.7);color:#fff}
.vxg.sm .vxg-p{width:calc(100% - 16px);height:calc(100% - 16px);border-radius:10px}
.vxg.sm .vxg-hd{padding:8px 10px 7px;min-height:38px;gap:10px}
.vxg.sm .vxg-hd .w{display:none}
.vxg.sm .vxg-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;padding:8px 10px 10px}
.vxg.sm .vxg-ft{display:none}
.vxg.sm .vxg-v .stage{padding:6px 46px}
.vxg.sm .vxg-acts{padding:6px 8px 8px;gap:6px}
.vxg.sm .vxg-b{height:28px;padding:0 9px;font-size:9.5px;letter-spacing:.16em}
.vxg.sm .vxg-b .vxh-kc{display:none}
.vxg.sm .vxg-ask{bottom:48px}
.vxg-mt{display:none;padding:4px 14px 0;font:600 9px/1.5 ui-monospace,Menlo,monospace;letter-spacing:.12em;color:rgba(255,255,255,.55);text-align:center}
.vxg.tall .vxg-p{width:calc(100% - 16px);height:calc(100% - 16px)}
.vxg.tall .vxg-hd .w{display:none}
.vxg.tall .vxg-hd{gap:8px;padding:10px}
.vxg.tall .vxg-hd b{font-size:11px;letter-spacing:.2em}
.vxg.tall .vxg-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding:10px}
.vxg.tall .vxg-card .cap{flex-direction:column;gap:3px}
.vxg.tall .vxg-ft{display:none}
.vxg.tall .vxg-v .stage{padding:8px 8px 60px}
.vxg.tall .vxg-nav{top:auto;bottom:8px;transform:none;height:40px;width:56px}
.vxg.tall .vxg-mt{display:block}
.vxg.tall .vxg-b{height:30px;padding:0 10px;font-size:9.5px;letter-spacing:.16em}
.vxg.tall .vxg-b .vxh-kc{display:none}
.vxg.tall .vxg-ask{bottom:56px;flex-wrap:wrap;justify-content:center;white-space:normal}
`;
const camIcon = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M5 13 H13 L16 9 H24 L27 13 H35 V31 H5 Z"/><circle cx="20" cy="21.5" r="6"/></svg>`;
const WHERE: Record<string, string> = { browser: 'THIS BROWSER', account: 'YOUR ACCOUNT', disk: 'THIS COMPUTER' };
const MON = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const p2 = (n: number) => String(n).padStart(2, '0');
export const when = (t: number) => { const d = new Date(t); return `${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()} · ${p2(d.getHours())}:${p2(d.getMinutes())}:${p2(d.getSeconds())}`; };
/** A file name for a photo: VEXVOID-PHOTO-20261118-231502.png (local time). */
export const fileName = (t: number) => { const d = new Date(t); return `VEXVOID-PHOTO-${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}${p2(d.getSeconds())}.png`; };
const mb = (b: number) => (b >= 1e6 ? (b / 1e6).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1e3)) + ' KB');

type Cb = { store: () => PhotoStore; focus: () => void; note: (s: string, secs?: number) => void; onChange?: () => void };
export type GalleryState = { open: boolean; view: string | null; count: number; sel: string | null; confirm: boolean; loading: boolean };

export function makeGallery(host: HTMLElement, cb: Cb) {
  if (!document.getElementById('vxg-css')) { const st = document.createElement('style'); st.id = 'vxg-css'; st.textContent = CSS; document.head.appendChild(st); }
  const el = document.createElement('div'); el.className = 'vxg'; el.dataset.vxHud = 'gallery';
  el.innerHTML = `<div class="vxg-p">
    <div class="vxg-hd"><b>PHOTOS</b><span class="c"></span><span class="sp"></span><span class="w"></span><button class="vxg-x" data-a="close">CLOSE ${kc('L')}</button></div>
    <div class="vxg-grid"></div>
    <div class="vxg-ft"><span class="k">${kc('←')}${kc('→')}${kc('↑')}${kc('↓')} PICK</span><span class="k">${kc('ENTER')} VIEW</span><span class="k">${kc('DEL')} DELETE</span><span class="k">${kc('Q')} TAKE A PHOTO</span><span class="k">${kc('L')}${kc('ESC')} CLOSE</span></div>
    <div class="vxg-v">
      <div class="vxg-hd"><button class="vxg-x" data-a="back">← ALL PHOTOS</button><b class="n"></b><span class="sp"></span><span class="w m"></span><button class="vxg-x" data-a="close">CLOSE ${kc('L')}</button></div>
      <div class="stage"><img alt="" draggable="false"><button class="vxg-nav l" data-a="prev" title="Previous (←)">‹</button><button class="vxg-nav r" data-a="next" title="Next (→)">›</button></div>
      <div class="vxg-mt"></div>
      <div class="vxg-acts">
        <button class="vxg-b" data-a="download">DOWNLOAD PNG ${kc('S')}</button>
        <button class="vxg-b" data-a="copy" hidden>COPY ${kc('C')}</button>
        <button class="vxg-b" data-a="share" hidden>SHARE</button>
        <button class="vxg-b" data-a="reveal" hidden>SHOW IN FOLDER</button>
        <button class="vxg-b warn" data-a="delete">DELETE ${kc('DEL')}</button>
      </div>
      <div class="vxg-ask"><span>DELETE THIS PHOTO?</span><button class="vxg-b" data-a="yes">DELETE ${kc('ENTER')}</button><button class="vxg-b" data-a="no">KEEP ${kc('ESC')}</button></div>
    </div>
  </div>`;
  host.appendChild(el);
  const $ = <T extends Element>(q: string) => el.querySelector(q) as T;
  const grid = $<HTMLDivElement>('.vxg-grid'), count = $<HTMLSpanElement>('.vxg-hd .c'), whereEl = $<HTMLSpanElement>('.vxg-hd .w');
  const big = $<HTMLImageElement>('.vxg-v img'), title = $<HTMLElement>('.vxg-v .n'), meta = $<HTMLSpanElement>('.vxg-v .m');
  const btn = (a: string) => $<HTMLButtonElement>(`[data-a="${a}"]`);
  // nothing here reaches the game underneath (no spray, no camera turn, no zoom); a click on the dark around it closes it
  for (const ev of ['pointerdown', 'wheel', 'contextmenu', 'dblclick'] as const) el.addEventListener(ev, (e) => { e.stopPropagation(); if (ev === 'contextmenu') e.preventDefault(); }, { passive: ev !== 'contextmenu' });

  let items: Photo[] = [], isOpen = false, view: string | null = null, sel = 0, confirm = false, loading = false, gen = 0;
  const canClip = () => !!(cb.store().copy || (navigator.clipboard && 'write' in navigator.clipboard && typeof ClipboardItem !== 'undefined'));
  const canShare = (() => { try { return typeof navigator.canShare === 'function' && navigator.canShare({ files: [new File([new Uint8Array(1)], 'x.png', { type: 'image/png' })] }); } catch { return false; } })();
  const size = () => { const b = host.getBoundingClientRect(), tall = b.height > b.width * 1.05; el.classList.toggle('tall', tall); el.classList.toggle('sm', !tall && (b.width < 900 || b.height < 560)); };
  const ro = new ResizeObserver(size); ro.observe(host);
  // thumbnails load as they scroll into sight (a big gallery never loads every picture at once)
  const io = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) { const im = e.target as HTMLImageElement; io.unobserve(im); void cb.store().src(im.dataset.id!).then((u) => { if (u) im.src = u; }); } }, { root: grid, rootMargin: '300px' });

  const cols = () => Math.max(1, getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length);
  const markSel = () => { grid.querySelectorAll('.vxg-card').forEach((c, i) => c.classList.toggle('on', i === sel)); const c = grid.children[sel] as HTMLElement | undefined; if (c && c.classList.contains('vxg-card')) c.scrollIntoView({ block: 'nearest' }); };
  function renderGrid() {
    count.textContent = items.length ? String(items.length) : '';
    const s = cb.store(); whereEl.textContent = 'KEPT IN ' + s.label;
    io.disconnect();
    if (!items.length) {
      grid.innerHTML = `<div class="vxg-empty">${camIcon}<span>${loading ? 'LOOKING FOR YOUR PHOTOS…' : `NO PHOTOS YET · PRESS ${kc('Q')} IN THE GAME`}</span></div>`;
      return;
    }
    grid.replaceChildren(...items.map((p, i) => {
      const c = document.createElement('div'); c.className = 'vxg-card'; c.dataset.id = p.id;
      const im = document.createElement('img'); im.className = 'im'; im.alt = ''; im.draggable = false; im.dataset.id = p.id; io.observe(im);
      const cap = document.createElement('div'); cap.className = 'cap';
      const a = document.createElement('span'); a.innerHTML = '<b></b>'; (a.firstChild as HTMLElement).textContent = when(p.t).split(' · ')[0] + ' · ' + when(p.t).split(' · ')[1].slice(0, 5);
      const b = document.createElement('span'); b.textContent = (p.place || '').toUpperCase().replace(/-/g, ' ');
      cap.append(a, b); c.append(im, cap);
      c.addEventListener('click', () => { sel = i; markSel(); show(p.id); cb.focus(); });
      return c;
    }));
    sel = Math.max(0, Math.min(items.length - 1, sel)); markSel();
  }
  async function refresh() {
    const g = ++gen; loading = true; if (!items.length) renderGrid();
    try { const all = await cb.store().list(); if (g !== gen) return; items = all; } catch (e) { cb.note('PHOTOS: ' + String((e as Error).message || e).toUpperCase(), 2.5); }
    loading = false; renderGrid(); if (view && !items.some((p) => p.id === view)) back(); else if (view) show(view); cb.onChange?.();
  }
  let bigFor = '';
  function show(id: string) {
    const i = items.findIndex((p) => p.id === id); if (i < 0) return;
    view = id; sel = i; confirm = false; el.classList.remove('ask'); el.classList.add('view');
    const p = items[i], s = cb.store();
    title.textContent = `PHOTO ${i + 1} OF ${items.length}`;
    meta.textContent = $<HTMLDivElement>('.vxg-mt').textContent = [when(p.t), p.w ? `${p.w} × ${p.h}` : '', p.bytes ? mb(p.bytes) : '', (p.place || '').toUpperCase().replace(/-/g, ' '), p.where.map((w) => WHERE[w] || w.toUpperCase()).join(' + ')].filter(Boolean).join(' · ');
    btn('prev').disabled = i <= 0; btn('next').disabled = i >= items.length - 1;
    btn('copy').hidden = !canClip(); btn('share').hidden = !canShare; btn('reveal').hidden = !s.reveal;
    if (bigFor !== id) { bigFor = id; big.removeAttribute('src'); void s.src(id, true).then((u) => { if (u && view === id) big.src = u; }); }
    markSel(); cb.onChange?.();
  }
  function back() { view = null; bigFor = ''; confirm = false; el.classList.remove('view', 'ask'); big.removeAttribute('src'); markSel(); cb.onChange?.(); }
  function open(on: boolean, id?: string | null) {
    isOpen = on; el.classList.toggle('on', on);
    if (on) { size(); void refresh().then(() => { if (id) show(id); }); if (id) view = id; }
    else { back(); }
    cb.onChange?.(); cb.focus();
  }
  const step = (d: number) => { if (!items.length) return; sel = Math.max(0, Math.min(items.length - 1, sel + d)); if (view) show(items[sel].id); else markSel(); };
  const cur = () => (view ? items.find((p) => p.id === view) : items[sel]) || null;
  async function download() {
    const p = cur(); if (!p) return; const s = cb.store();
    try {
      if (s.download) { const where = await s.download(p.id), parts = where.split(/[\\/]/); cb.note(`SAVED TO ${(parts.at(-2) || '').toUpperCase()} · ${parts.at(-1)}`, 3.5); return; }
      const b = await s.blob(p.id); if (!b) throw new Error('the photo is not here');
      const u = URL.createObjectURL(b), a = document.createElement('a'); a.href = u; a.download = fileName(p.t); document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 60000); cb.note('DOWNLOADING ' + fileName(p.t), 2.5);
    } catch (e) { cb.note('NOT SAVED: ' + String((e as Error).message || e).toUpperCase(), 3); }
  }
  async function copy() {
    const p = cur(); if (!p || !canClip()) return; const s = cb.store();
    try {
      if (s.copy) await s.copy(p.id);
      else { const b = await s.blob(p.id); if (!b) throw new Error('the photo is not here'); await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })]); }
      cb.note('COPIED · PASTE IT ANYWHERE', 2.5);
    } catch (e) { cb.note('NOT COPIED: ' + String((e as Error).message || e).toUpperCase(), 3); }
  }
  async function share() {
    const p = cur(); if (!p || !canShare) return;
    try { const b = await cb.store().blob(p.id); if (!b) throw new Error('the photo is not here'); await navigator.share({ files: [new File([b], fileName(p.t), { type: 'image/png' })], title: 'VexVoid the Game' }); }
    catch (e) { if ((e as Error).name !== 'AbortError') cb.note('NOT SHARED: ' + String((e as Error).message || e).toUpperCase(), 3); }
  }
  const ask = (on: boolean) => { if (on && !view) { const p = cur(); if (!p) return; show(p.id); } confirm = on; el.classList.toggle('ask', on); cb.onChange?.(); };
  async function remove(id?: string) {
    const p = id ? items.find((x) => x.id === id) : cur(); if (!p) return false;
    const i = items.indexOf(p), ok = await cb.store().remove(p.id);
    if (ok) { items.splice(i, 1); cb.note('PHOTO DELETED', 2); sel = Math.min(i, items.length - 1); renderGrid(); if (view === p.id) { if (items.length) show(items[Math.max(0, sel)].id); else back(); } }
    else cb.note('COULD NOT DELETE THAT PHOTO', 2.5);
    confirm = false; el.classList.remove('ask'); cb.onChange?.(); return ok;
  }
  // (on click, not pointerdown: the focus goes back to the game after the browser has moved it for the press)
  el.addEventListener('click', (e) => {
    const a = (e.target as Element).closest('[data-a]') as HTMLElement | null, k = a ? a.dataset.a : e.target === el ? 'close' : '';
    if (!k) { cb.focus(); return; }
    if (k === 'close') open(false); else if (k === 'back') back(); else if (k === 'prev') step(-1); else if (k === 'next') step(1);
    else if (k === 'download') void download(); else if (k === 'copy') void copy(); else if (k === 'share') void share();
    else if (k === 'reveal') { const p = cur(); if (p) cb.store().reveal?.(p.id); }
    else if (k === 'delete') ask(true); else if (k === 'yes') void remove(); else if (k === 'no') ask(false);
    cb.focus();
  });

  /** A key while the gallery is open (k: e.key, letters lower case). True if the gallery used it. */
  const key = (k: string) => {
    if (!isOpen) return false;
    if (confirm) { if (k === 'Enter' || k === 'y') void remove(); else if (k === 'Escape' || k === 'n' || k === 'Backspace') ask(false); return true; }
    if (k === 'l') { open(false); return true; }
    if (k === 'Escape') { if (view) back(); else open(false); return true; }
    if (k === 'ArrowLeft' || k === 'a') { step(-1); return true; }
    if (k === 'ArrowRight' || k === 'd') { step(1); return true; }
    if (k === 'ArrowUp' || k === 'w') { if (!view) step(-cols()); return true; }
    if (k === 'ArrowDown' || k === 's' && !view) { if (!view) step(cols()); return true; }
    if (k === 'Home') { sel = 0; if (view && items.length) show(items[0].id); else markSel(); return true; }
    if (k === 'End') { sel = items.length - 1; if (view && items.length) show(items[sel].id); else markSel(); return true; }
    if (k === 'Enter' || k === ' ') { const p = cur(); if (p && !view) show(p.id); return true; }
    if (k === 'Delete' || k === 'Backspace' || k === 'x') { ask(true); return true; }
    if (k === 's') { void download(); return true; }
    if (k === 'c') { void copy(); return true; }
    return true;   // everything else is held while the gallery is open (the writer does not walk off)
  };
  return {
    el, key, open, refresh, remove,
    isOpen: () => isOpen,
    /** A photo just taken: on the front of the grid if it is showing. */
    added: () => { if (isOpen) void refresh(); else cb.onChange?.(); },
    view: (id: string | null) => { if (!isOpen) open(true, id); else if (id) show(id); else back(); },
    state: (): GalleryState => ({ open: isOpen, view, count: items.length, sel: items[sel]?.id ?? null, confirm, loading }),
    items: () => items.slice(),
    dispose: () => { ro.disconnect(); io.disconnect(); el.remove(); },
  };
}
