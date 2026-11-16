/**
 * THE LOADING SCREEN: while the city builds, two of VexVoid's own clips play (the dripping VEXVOID ident, then the
 * hall of fame under its floodlight), crossfading slowly, muted (the soundtrack plays under them once sound is allowed),
 * with the progress line on top. When the game is ready it fades into the first frame. Reduced motion: the posters
 * only. The clips ship in the game package (vx/game/loading/), so the client, vexvoid.com/game and bGamesX share them.
 *
 *   const ld = makeLoading(host, base + 'loading/'); ld.say('Building the city…'); ...; ld.done()
 */
const CLIPS = ['ident', 'hall'];
const CSS = `
.vxl{position:absolute;inset:0;z-index:30;background:#000;overflow:hidden;transition:opacity .9s ease;pointer-events:none}
.vxl.out{opacity:0}
.vxl video,.vxl img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.6s ease;filter:grayscale(1) contrast(1.05)}
.vxl .on{opacity:1}
.vxl::after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 55%,transparent 45%,rgba(0,0,0,.65) 100%)}
.vxl-bar{position:absolute;left:50%;bottom:9%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:10px;width:min(420px,70%)}
.vxl-say{font:700 11px/1 "SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif;letter-spacing:.32em;color:#fff;text-shadow:0 1px 8px #000;white-space:nowrap}
.vxl-line{position:relative;width:100%;height:2px;background:rgba(255,255,255,.18);overflow:hidden}
.vxl-line i{position:absolute;left:0;top:0;bottom:0;width:0;background:#fff;transition:width .5s ease}
`;

export function makeLoading(host: HTMLElement, base: string) {
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  if (!document.getElementById('vxl-css')) { const st = document.createElement('style'); st.id = 'vxl-css'; st.textContent = CSS; document.head.appendChild(st); }
  const el = document.createElement('div'); el.className = 'vxl'; el.dataset.vxLoading = '1';
  const still = (() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; } })();
  const media: (HTMLVideoElement | HTMLImageElement)[] = CLIPS.map((n) => {
    if (still) { const im = new Image(); im.src = base + n + '.jpg'; im.alt = ''; return im; }
    const v = document.createElement('video'); v.src = base + n + '.mp4'; v.poster = base + n + '.jpg';
    v.muted = true; v.defaultMuted = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    return v;
  });
  const bar = document.createElement('div'); bar.className = 'vxl-bar'; bar.innerHTML = '<div class="vxl-say"></div><div class="vxl-line"><i></i></div>';
  el.append(...media, bar); host.appendChild(el);
  const sayEl = bar.firstChild as HTMLElement, fill = bar.querySelector('i') as HTMLElement;
  // one clip, then the other, each crossfading into the next over 1.6 s (looping until the game is ready)
  let cur = 0, gone = false, steps = 0;
  const show = (i: number) => {
    media.forEach((m, k) => m.classList.toggle('on', k === i));
    const m = media[i]; if (m instanceof HTMLVideoElement) { m.currentTime = 0; void m.play().catch(() => { /* the poster shows */ }); }
  };
  show(0);
  if (!still) media.forEach((m, k) => (m as HTMLVideoElement).addEventListener('timeupdate', () => {
    const v = m as HTMLVideoElement; if (gone || k !== cur || !v.duration) return;
    if (v.currentTime > v.duration - 1.7) { cur = (cur + 1) % media.length; show(cur); }
  }));
  if (still) { let i = 0; const tm = setInterval(() => { if (gone) { clearInterval(tm); return; } i = (i + 1) % media.length; cur = i; show(i); }, 6000); }
  return {
    el,
    /** The progress line: what is happening now; each new step moves the bar on. */
    say: (s: string) => { sayEl.textContent = s.toUpperCase(); steps++; fill.style.width = `${Math.min(92, 18 + steps * 22)}%`; },
    /** The game is ready: fill the line, fade into the game, then go. */
    done: () => {
      if (gone) return; gone = true; fill.style.width = '100%';
      setTimeout(() => { el.classList.add('out'); setTimeout(() => { media.forEach((m) => { if (m instanceof HTMLVideoElement) { m.pause(); m.removeAttribute('src'); m.load(); } }); el.remove(); }, 950); }, 250);
    },
  };
}
