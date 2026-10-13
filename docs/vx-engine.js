/*
 * V3XV0ID VX engine: the layered visual + sound engine from the approved VexVoid mono study.
 * Plain browser JS, no build step. Used by the Electron output window (index.html) and by the
 * GitHub Pages site (docs/vx-engine.js is a copy: run `pnpm run sync-docs` after editing).
 *
 * Layers (bottom to top): video clip deck, WebGL mercury pool, point field, decal livery (mid + near),
 * V3XV0ID title, grain + Fairlight fleck chains. Plus a Web Audio beep-boop engine on a look-ahead clock.
 *
 * Point fields are mutated from @yuruyurau's tweet-length Processing pieces (credit: @yuruyurau).
 *
 * API:  var vx = VX.mount(element, { audio: false, compact: false });
 *       vx.set(key, value)   keys: see DEFAULTS
 *       vx.get(key), vx.state, vx.blackout(on?), vx.cleanNow(), vx.nextClip(), vx.toggleAudio(), vx.onchange(fn)
 */
(function (root) {
  'use strict';
  var BASE = 'https://api.b0ase.com/storage/v1/object/public/videos/vexvoid/';
  var GROK = ['04564bba-7dcb-408a-b55d-f0c534e21924', '2a6f83fd-fdd0-4163-9623-d3411db8ffe0', '2cfeb327-ce2c-4894-b8c7-9504b569ebd0',
    '386cc03a-f8fd-45de-a595-7482101e1b76', '3a7f609d-86a9-4197-afa7-fb829395588b', '46bad974-2eff-4086-97c4-4762211c7ad7',
    '4cb6923f-a290-4de4-a335-e393c759b647', '6129e4c0-e95e-4820-bf01-683fae5850f2', '66236bcb-12bb-4eec-9a7c-8eed664f24e8',
    '6804e639-597a-4cab-bb01-c7174b86b1dd', '6a8ddd42-50c4-419c-b68b-475cd45939dc', '6b81d911-56e0-4183-8d45-fd5ba773f4c9',
    '717b17f1-bb38-4cc7-b610-9b1969329f8e', '81b474d1-baa8-474c-84e0-123edff70ee6', '981923fa-e09c-46b8-b6fa-6fbb5cd5c395',
    '9cea24f7-7633-4e2e-b9ef-dc9d6053defe', 'b3e71bbb-fecf-46b1-bcf7-443521891425', 'badbe081-ff4d-4560-a0ef-2a28baea1de4',
    'bbfc0a42-19c7-4f1a-871e-86fcb7c0b31c', 'c2e33941-fd24-4343-8b83-a393f9d5b085', 'c69b0110-47e7-403c-9e95-b34e1478b4fa',
    'c80d8df8-4e5f-450f-8ea1-1df28bf64927', 'd69ad4f2-a35c-4765-b249-c138b4997774', 'da5a2df0-d676-4e3a-b1a4-210d409e93ce',
    'eab71f30-3719-4577-8f7c-f79feeb72660'].map(function (id) { return BASE + 'grok-video-' + id + '.mp4'; });
  var JAM = ['01', '02', '03', '04', '05', '08', '10', '11', '19', '20', '22'].map(function (n) { return BASE + 'jam/jam-' + n + '.mp4'; });
  // clips with lettering (the Grok V3X idents, the VEXVOID tag in jam-02) are never mirrored
  var LETTERED = {}; GROK.forEach(function (s) { LETTERED[s] = 1; }); LETTERED[BASE + 'jam/jam-02.mp4'] = 1;

  var DEFAULTS = {
    video: true, voidChance: 0.45, cleanChance: 0.35, smooth: true, rough: true,
    mercury: true, field: true, formula: 'auto', flecks: true, grain: true,
    decals: true, chaos: 0.6, title: true,
    audio: false, bpm: 100, volume: 0.8, blackout: false
  };
  var FORMULAS = ['eye', 'bloom', 'vortex', 'hybrid', 'ribbon'];

  var CSS = [
    '.vx{position:absolute;inset:0;overflow:hidden;background:#000;isolation:isolate;color:#f4f4f2}',
    '.vx>*{position:absolute;inset:0}',
    '.vx canvas,.vx svg,.vx video{position:absolute;inset:0;width:100%;height:100%;display:block}',
    '.vx-l{transition:opacity 1.2s ease}',
    '.vx.clean .vx-fx{opacity:0!important}',
    '.vx-off{opacity:0!important;visibility:hidden}',
    '.vx-vids video{object-fit:cover;opacity:0;filter:contrast(1.1) brightness(.85)}',
    '.vx-vids video.on{opacity:.9}',
    '.vx.clean .vx-vids video.on{opacity:1;filter:none}',
    '.vx-vids video.glitch{translate:var(--vx,8px) 0;clip-path:inset(var(--vt,30%) 0 var(--vb,30%) 0);opacity:.9}',
    '.vx-far{mix-blend-mode:screen}',
    '.vx-far::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 90% at 50% 45%,transparent 35%,rgba(0,0,0,.85) 100%)}',
    '.vx-field{mix-blend-mode:screen}',
    '.vx-near{filter:blur(3.2px);opacity:.85}',
    '.vx-copy{inset:auto auto clamp(20px,6vh,64px) clamp(16px,4vw,56px);display:grid;gap:10px;max-width:92%;pointer-events:none}',
    '.vx-kicker{font:10px/1.4 "IBM Plex Mono",ui-monospace,Menlo,monospace;letter-spacing:.32em;text-transform:uppercase;color:#9a9a98;display:flex;gap:18px;flex-wrap:wrap}',
    '.vx-wm{position:relative;margin:0;font-family:Michroma,Eurostile,"Arial Black",sans-serif;font-weight:400;font-size:clamp(30px,7.4vw,104px);letter-spacing:.06em;line-height:1;white-space:nowrap;color:transparent;-webkit-text-stroke:1px rgba(244,244,242,.95)}',
    '.vx.compact .vx-wm{font-size:clamp(26px,7vw,64px)}',
    '.vx-wm.w-solid{color:rgba(244,244,242,.92);-webkit-text-stroke:0}',
    '.vx-wm.w-wide{font-size:clamp(22px,5.2vw,72px);letter-spacing:.32em;color:rgba(244,244,242,.92);-webkit-text-stroke:0}',
    '.vx-wm.w-glitch{transform:translate(var(--gx,3px),0);clip-path:inset(var(--gt,20%) 0 var(--gb,40%) 0)}',
    '.vx-wm::after{content:attr(data-text);position:absolute;left:0;top:0;color:transparent;-webkit-text-stroke:.5px rgba(255,255,255,.35);transform:translate(2px,-1px)}',
    '.vx-grain{mix-blend-mode:screen;opacity:.7;pointer-events:none}',
    '.vx-black{background:#000;opacity:0;transition:opacity .35s ease;pointer-events:none}',
    '.vx.blackout .vx-black{opacity:1}'
  ].join('\n');

  var NS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
  function div(cls, parent, html) { var d = document.createElement('div'); d.className = cls; if (html) d.innerHTML = html; parent.appendChild(d); return d; }
  function shuffle(arr) { for (var q = arr.length - 1; q > 0; q--) { var r = (Math.random() * (q + 1)) | 0, tmp = arr[q]; arr[q] = arr[r]; arr[r] = tmp; } return arr; }

  function mount(host, opts) {
    opts = opts || {};
    if (!document.getElementById('vx-style')) { var st = document.createElement('style'); st.id = 'vx-style'; st.textContent = CSS; document.head.appendChild(st); }
    var S = {}; for (var k in DEFAULTS) S[k] = DEFAULTS[k];
    if (opts.state) for (var k2 in opts.state) if (k2 in DEFAULTS) S[k2] = opts.state[k2];
    var reduce = !!(root.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) && !opts.ignoreReducedMotion;
    var listeners = [];
    var alive = true, timers = [];
    function later(fn, ms) { var id = setTimeout(function () { if (alive) fn(); }, ms); timers.push(id); if (timers.length > 200) timers.splice(0, 100); return id; }

    var vx = div('vx' + (opts.compact ? ' compact' : ''), host);
    var vidsL = div('vx-l vx-vids', vx);
    var farL = div('vx-l vx-fx vx-far', vx);
    var fieldL = div('vx-l vx-fx vx-field', vx);
    var midL = div('vx-l vx-fx vx-mid', vx);
    var nearL = div('vx-l vx-fx vx-near', vx);
    var copyL = div('vx-l vx-copy', vx, '<div class="vx-kicker"><span>VX/LBL-07</span><span>Mono velocity</span><span>' + (opts.kicker || 'Live AV') + '</span></div><h1 class="vx-wm w-line" data-text="V3XV0ID">V3XV0ID</h1>');
    var grainL = div('vx-l vx-fx vx-grain', vx);
    div('vx-black', vx);
    var wm = copyL.querySelector('.vx-wm');

    // ---------------- audio ----------------
    var AV = makeAudio(S);

    // ---------------- decal livery ----------------
    var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    function txt(parent, x, y, s, size, extra) { var a = { x: x, y: y, fill: '#fff', 'font-family': 'IBM Plex Mono, monospace', 'font-size': size, 'letter-spacing': size * 0.18 }; if (extra) for (var q in extra) a[q] = extra[q]; var t = svgEl('text', a, parent); t.textContent = s; return t; }
    function barcode(g, x, y, w, h) { var cx = x; while (cx < x + w) { var bw = 0.5 + Math.floor(rnd() * 4) * 0.6; if (rnd() > 0.35) svgEl('rect', { x: cx, y: y, width: bw, height: h, fill: '#fff' }, g); cx += bw + 0.6 + rnd() * 1.2; } }
    function reg(g, x, y, r) { svgEl('circle', { cx: x, cy: y, r: r, fill: 'none', stroke: '#fff', 'stroke-width': 0.35 }, g); svgEl('line', { x1: x - r * 1.6, y1: y, x2: x + r * 1.6, y2: y, stroke: '#fff', 'stroke-width': 0.35 }, g); svgEl('line', { x1: x, y1: y - r * 1.6, x2: x, y2: y + r * 1.6, stroke: '#fff', 'stroke-width': 0.35 }, g); }
    function chev(g, x, y, n, s) { for (var i = 0; i < n; i++) svgEl('path', { d: 'M' + (x + i * s * 0.9) + ' ' + y + ' l' + s * 0.5 + ' ' + s * 0.5 + ' l-' + s * 0.5 + ' ' + s * 0.5, fill: 'none', stroke: '#fff', 'stroke-width': 0.6 }, g); }
    function block(g, x, y, w, h, label) {
      svgEl('rect', { x: x, y: y, width: w, height: h, fill: 'none', stroke: '#fff', 'stroke-width': 0.35 }, g);
      svgEl('rect', { x: x, y: y, width: w * 0.28, height: h, fill: '#fff' }, g);
      txt(g, x + 2, y + h - 2.2, label, 4.2, { fill: '#000' });
      for (var i = 0; i < 4; i++) txt(g, x + w * 0.32, y + 4.6 + i * 4.2, ['VX', 'LBL', 'REF', 'SER'][i] + '-' + String(Math.floor(rnd() * 9000 + 1000)), 3, { 'fill-opacity': 0.8 });
    }
    var clipN = 0;
    function hazard(g, x, y, w, h) { var cl = 'vxc' + (clipN++) + '-' + Math.floor(rnd() * 1e6); var cp = svgEl('clipPath', { id: cl }, g); svgEl('rect', { x: x, y: y, width: w, height: h }, cp); var gg = svgEl('g', { 'clip-path': 'url(#' + cl + ')' }, g); for (var i = -h; i < w + h; i += h * 0.9) svgEl('path', { d: 'M' + (x + i) + ' ' + (y + h) + ' l' + h + ' -' + h + ' h' + h * 0.45 + ' l-' + h + ' ' + h + 'z', fill: '#fff' }, gg); svgEl('rect', { x: x, y: y, width: w, height: h, fill: 'none', stroke: '#fff', 'stroke-width': 0.35 }, g); }
    function livery(svg, dense) {
      var g = svgEl('g', {}, svg);
      for (var i = 0; i < (dense ? 26 : 10); i++) { var x = rnd() * 1600, y = rnd() * 900, w = 60 + rnd() * 260; svgEl('line', { x1: x, y1: y, x2: x + w, y2: y, stroke: '#fff', 'stroke-width': 0.35, 'stroke-opacity': 0.7 }, g); txt(g, x, y - 2, (rnd() * 360).toFixed(2) + '° · ' + String(Math.floor(rnd() * 99)).padStart(2, '0'), 5.2, { 'fill-opacity': 0.75 }); }
      for (var j = 0; j < (dense ? 14 : 6); j++) reg(g, rnd() * 1600, rnd() * 900, 3 + rnd() * 7);
      for (var k = 0; k < (dense ? 9 : 4); k++) barcode(g, rnd() * 1450, rnd() * 860, 40 + rnd() * 80, 6 + rnd() * 10);
      for (var m = 0; m < (dense ? 8 : 3); m++) block(g, rnd() * 1480, rnd() * 860, 70 + rnd() * 40, 22, ['V3X', 'VOID', 'Ø7', 'MONO', 'AG-SYS'][m % 5]);
      for (var n = 0; n < (dense ? 6 : 3); n++) chev(g, rnd() * 1500, rnd() * 860, 3 + Math.floor(rnd() * 4), 8 + rnd() * 10);
      if (dense) { hazard(g, 1180, 120, 300, 10); hazard(g, 90, 760, 220, 8); }
      svgEl('path', { d: 'M 1520 70 L 1380 70 L 1300 150', fill: 'none', stroke: '#fff', 'stroke-width': 0.5 }, g);
      txt(g, 1388, 64, 'SURFACE: LIQUID CHROME / Ra 0.02µm', 5.4);
    }
    var midSvg = svgEl('svg', { viewBox: '0 0 1600 900', preserveAspectRatio: 'xMidYMid slice' }, midL);
    var nearSvg = svgEl('svg', { viewBox: '0 0 1600 900', preserveAspectRatio: 'xMidYMid slice' }, nearL);
    livery(midSvg, true); livery(nearSvg, false);

    var live = { texts: [], regs: [], codes: [] };
    midSvg.querySelectorAll('text').forEach(function (t) { if (/[0-9]/.test(t.textContent)) live.texts.push({ el: t, base: t.textContent }); });
    midSvg.querySelectorAll('circle').forEach(function (c) { var g = document.createElementNS(NS, 'g'); var cx = +c.getAttribute('cx'), cy = +c.getAttribute('cy'); c.parentNode.insertBefore(g, c); var nx = c.nextSibling, n2 = nx && nx.nextSibling; g.appendChild(c); if (nx) g.appendChild(nx); if (n2) g.appendChild(n2); live.regs.push({ g: g, cx: cx, cy: cy, sp: (rnd() - .5) * 40, ang: 0 }); });
    var rows = {}; midSvg.querySelectorAll('rect').forEach(function (r) { var w = +r.getAttribute('width'); if (w < 4 && r.getAttribute('fill') === '#fff') { var key = r.getAttribute('y'); (rows[key] = rows[key] || []).push(r); } });
    Object.keys(rows).forEach(function (key) { live.codes.push(rows[key]); });
    live.scan = svgEl('line', { x1: 0, y1: 0, x2: 1600, y2: 0, stroke: '#fff', 'stroke-width': 0.6, 'stroke-opacity': 0.5 }, midSvg);
    live.scanTxt = txt(midSvg, 8, 0, '', 5, { 'fill-opacity': 0.8 });
    var midAll = Array.prototype.slice.call(midSvg.querySelectorAll('line,text,rect,path'));
    var GL = '0123456789ABCDEF#%/:ØΔµ', flashes = [], scans = [];
    for (var si = 0; si < 3; si++) scans.push({ el: svgEl('line', { x1: 0, x2: 1600, stroke: '#fff', 'stroke-width': 0.4 + rnd() * 1.4, 'stroke-opacity': 0.25 + rnd() * .5 }, midSvg), sp: 120 + rnd() * 900, ph: rnd() * 900 });

    function chaos(s) {
      var amt = S.chaos; // 0..1 scales how many elements get struck per tick
      var hits = Math.round(70 * amt);
      for (var i = 0; i < hits; i++) {
        var e = midAll[(Math.random() * midAll.length) | 0], r = Math.random();
        if (r < 0.45) e.setAttribute('transform', 'translate(' + ((Math.random() - .5) * 14 * (0.4 + amt)).toFixed(1) + ' ' + ((Math.random() - .5) * 6).toFixed(1) + ')');
        else if (r < 0.75) e.setAttribute('opacity', Math.random() < .35 ? '0' : (0.3 + Math.random() * .7).toFixed(2));
        else { e.removeAttribute('transform'); e.removeAttribute('opacity'); }
      }
      live.texts.forEach(function (o) { if (Math.random() < 0.3 * amt) { var a = o.el.textContent.split(''); for (var j = 0; j < 1 + Math.random() * 4; j++) a[(Math.random() * a.length) | 0] = GL[(Math.random() * GL.length) | 0]; o.el.textContent = a.join(''); } });
      if (Math.random() < 0.9 * amt) { AV.flash(); var w = 20 + Math.random() * 220, h = 2 + Math.random() * (Math.random() < .2 ? 60 : 12); flashes.push({ el: svgEl('rect', { x: Math.random() * 1600, y: Math.random() * 900, width: w, height: h, fill: '#fff', 'fill-opacity': (0.15 + Math.random() * .7).toFixed(2) }, midSvg), life: 1 + (Math.random() * 3 | 0) }); }
      for (var f = flashes.length - 1; f >= 0; f--) if (--flashes[f].life <= 0) { flashes[f].el.remove(); flashes.splice(f, 1); }
      scans.forEach(function (sc) { var y = Math.abs(((s * sc.sp + sc.ph) % 1800) - 900); sc.el.setAttribute('y1', y); sc.el.setAttribute('y2', y); });
    }
    function liveTick(s) {
      chaos(s);
      live.texts.forEach(function (o, i) {
        if (Math.random() > 0.7) return;
        o.el.textContent = o.base.replace(/[0-9]+(\.[0-9]+)?/g, function (m) {
          var v = parseFloat(m), dec = (m.split('.')[1] || '').length;
          var nv = v + Math.sin(s * (0.7 + (i % 5) * 0.31) + i) * Math.max(1, v * 0.04) + (Math.random() - .5) * Math.max(.5, v * .01);
          return dec ? Math.abs(nv).toFixed(dec) : String(Math.abs(Math.round(nv))).padStart(m.length, '0');
        });
      });
      live.regs.forEach(function (r) { if (Math.random() < .04) r.sp = -r.sp * (1 + Math.random() * 3); if (Math.abs(r.sp) > 400) r.sp *= .1; r.ang += r.sp * 0.08; r.g.setAttribute('transform', 'rotate(' + r.ang.toFixed(1) + ' ' + r.cx + ' ' + r.cy + ') translate(' + ((Math.random() - .5) * 3).toFixed(1) + ' 0)'); });
      live.codes.forEach(function (row) { if (Math.random() < 0.8) row.forEach(function (b) { b.setAttribute('fill-opacity', Math.random() < 0.4 ? '0' : (0.4 + Math.random() * .6).toFixed(2)); }); });
      var y = (s * 140) % 900; live.scan.setAttribute('y1', y); live.scan.setAttribute('y2', y);
      live.scanTxt.setAttribute('y', y - 3); live.scanTxt.textContent = 'SCAN ' + String(Math.floor(y)).padStart(3, '0') + ' / 900 · ' + (Math.random() * 99.9).toFixed(1) + '%';
    }

    // ---------------- title: solid / wide / hairline with glitch cuts ----------------
    var looks = ['w-line', 'w-solid', 'w-wide'], lookI = 0;
    function titleCut() {
      if (!S.title || S.blackout) { later(titleCut, 3000); return; }
      var n = 0;
      (function flick() {
        wm.style.setProperty('--gx', ((Math.random() - .5) * 18).toFixed(0) + 'px');
        wm.style.setProperty('--gt', (Math.random() * 60).toFixed(0) + '%');
        wm.style.setProperty('--gb', (Math.random() * 40).toFixed(0) + '%');
        wm.classList.toggle('w-glitch', n % 2 === 0);
        if (n === 0) AV.cut();
        if (n === 2) { wm.classList.remove(looks[lookI]); lookI = (lookI + 1) % looks.length; wm.classList.add(looks[lookI]); }
        if (++n < 6) later(flick, 70 + Math.random() * 70); else wm.classList.remove('w-glitch');
      })();
      later(titleCut, 6500 + Math.random() * 3500);
    }
    if (!reduce) later(titleCut, 5000);

    // ---------------- video clip deck ----------------
    var deck = { list: [], pos: 0 };
    function buildDeck() { var l = []; if (S.smooth) l = l.concat(GROK); if (S.rough) l = l.concat(JAM); if (!l.length) l = JAM.slice(); deck.list = shuffle(l); deck.pos = 0; }
    function nextSrc() {
      deck.pos++;
      if (deck.pos >= deck.list.length) { var last = deck.list[deck.list.length - 1]; shuffle(deck.list); if (deck.list[0] === last) deck.list.push(deck.list.shift()); deck.pos = 0; }
      return deck.list[deck.pos];
    }
    function vary(v) {
      var src = v.getAttribute('src') || '';
      var flip = !LETTERED[src] && Math.random() < .5 ? -1 : 1, z = 1 + Math.random() * .45, ox = (Math.random() - .5) * 18, oy = (Math.random() - .5) * 12;
      v.style.transformOrigin = (50 + ox) + '% ' + (50 + oy) + '%';
      v.style.transform = 'scale(' + (flip * z).toFixed(3) + ',' + z.toFixed(3) + ')';
      v.playbackRate = [0.5, 0.65, 0.8, 1, 1, 1.15][(Math.random() * 6) | 0];
      var seek = function () { if (v.duration && isFinite(v.duration)) v.currentTime = Math.random() * Math.max(0, v.duration - 1.5); };
      if (v.readyState >= 1) seek(); else v.addEventListener('loadedmetadata', seek, { once: true });
      v.loop = true;
    }
    function mkVideo() { var v = document.createElement('video'); v.muted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.preload = 'auto'; v.crossOrigin = 'anonymous'; v.addEventListener('error', function () { if (v === nxt) { load(nxt, nextSrc()); } }); vidsL.appendChild(v); return v; }
    var vA = mkVideo(), vB = mkVideo(), cur = vA, nxt = vB, dark = false, cutTimer = null, deckStarted = false;
    function load(v, src) { v.src = src; v.load(); }
    function setClean(on) { vx.classList.toggle('clean', on); emit(); }
    function startDeck() {
      if (deckStarted) return; deckStarted = true; buildDeck();
      load(cur, deck.list[0]); vary(cur); load(nxt, nextSrc()); vary(nxt);
      cur.addEventListener('canplay', function once() { cur.removeEventListener('canplay', once); if (S.video && !dark) { cur.classList.add('on'); cur.play().catch(function () {}); } });
      if (!reduce) cutTimer = later(clipCut, 5000);
    }
    function schedule(ms) { clearTimeout(cutTimer); cutTimer = later(clipCut, ms); }
    function maybeClean() { if (Math.random() < S.cleanChance) later(function () { setClean(true); }, 400); }
    function clipCut(force) {
      if (!S.video) { schedule(3000); return; }
      setClean(false);
      if (!dark && !force && Math.random() < S.voidChance) { // drop to the void: just mercury + graphics for a while
        dark = true; var k = 0;
        (function out() { cur.classList.toggle('on', k % 2 === 1); if (++k < 4) later(out, 60 + Math.random() * 60); else { cur.classList.remove('on'); cur.pause(); AV.cut(); } })();
        schedule(6000 + Math.random() * 9000); return;
      }
      if (dark) {
        dark = false; cur = nxt; nxt = cur === vA ? vB : vA; vary(cur); cur.play().catch(function () {});
        var j = 0; (function inn() { cur.classList.toggle('on', j % 2 === 0); if (++j < 5) later(inn, 60 + Math.random() * 60); else { cur.classList.add('on'); AV.cut(); maybeClean(); } })();
        load(nxt, nextSrc()); vary(nxt); schedule(4500 + Math.random() * 3500); return;
      }
      var n = 0; vary(nxt); nxt.play().catch(function () {});
      (function flick() {
        var v = n % 2 ? cur : nxt;
        v.style.setProperty('--vx', ((Math.random() - .5) * 40).toFixed(0) + 'px'); v.style.setProperty('--vt', (Math.random() * 60).toFixed(0) + '%'); v.style.setProperty('--vb', (Math.random() * 30).toFixed(0) + '%');
        v.classList.add('glitch'); later(function () { v.classList.remove('glitch'); }, 60);
        if (n === 3) { cur.classList.remove('on'); nxt.classList.add('on'); var old = cur; cur = nxt; nxt = old; old.pause(); load(nxt, nextSrc()); vary(nxt); AV.cut(); maybeClean(); }
        if (++n < 6) later(flick, 70 + Math.random() * 60);
      })();
      schedule(4500 + Math.random() * 2500);
    }
    function applyVideo() {
      vidsL.classList.toggle('vx-off', !S.video);
      if (S.video) { startDeck(); if (!dark && cur.src) { cur.classList.add('on'); cur.play().catch(function () {}); } }
      else { vA.pause(); vB.pause(); setClean(false); }
    }

    // ---------------- mercury pool (WebGL raymarch) ----------------
    var merc = (function () {
      var cv = document.createElement('canvas'); farL.appendChild(cv);
      var gl = cv.getContext('webgl', { antialias: false, premultipliedAlpha: false });
      if (!gl) { cv.remove(); return null; }
      var vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      var fs = [
        'precision highp float;', 'uniform vec2 R;uniform float T;uniform vec2 M;',
        'float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
        'float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}',
        'float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*vn(p);p*=2.03;a*=.5;}return s;}',
        'float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}',
        'float blob(vec3 p,vec3 c,float r){vec3 q=p-c;q.y*=2.6;return (length(q)-r)/2.6;}',
        'float pool(vec3 p){float t=T*.22;',
        ' float d=blob(p,vec3(0.,0.,0.),.62);',
        ' d=smin(d,blob(p,vec3(.75*sin(t*.9),0.,.38*cos(t*.7)),.42),.42);',
        ' d=smin(d,blob(p,vec3(-.7*cos(t*.6),0.,.3*sin(t*1.1)+.1),.38),.40);',
        ' d=smin(d,blob(p,vec3(.35*sin(t*1.3+1.),0.,-.42*cos(t*.8)),.30),.36);',
        ' d=smin(d,blob(p,vec3(1.15*sin(t*.5+2.),0.,.55*sin(t*.45)),.17),.30);',
        ' d+=.006*sin(10.*p.x+T*1.3)*sin(9.*p.z-T*1.1);', ' return d;}',
        'vec3 nrm(vec3 p){vec2 e=vec2(.0015,0.);return normalize(vec3(pool(p+e.xyy)-pool(p-e.xyy),pool(p+e.yxy)-pool(p-e.yxy),pool(p+e.yyx)-pool(p-e.yyx)));}',
        'float env(vec3 r){float g=.02+.05*max(r.y,0.);',
        ' g+=1.6*smoothstep(.86,.97,r.y)*smoothstep(.55,.35,abs(r.x));',
        ' g+=.9*smoothstep(.06,.0,abs(r.y-.35))*smoothstep(.9,.2,abs(r.z+.2));',
        ' g+=.35*smoothstep(.5,.9,r.x)*smoothstep(-.1,.4,r.y);', ' return g;}',
        'void main(){vec2 uv=(gl_FragCoord.xy-.5*R)/R.y;',
        ' vec3 ro=vec3(.0+M.x*.25,1.05+M.y*.15,-2.25),ta=vec3(0.,0.,.05);',
        ' vec3 f=normalize(ta-ro),r=normalize(cross(vec3(0,1,0),f)),u=cross(f,r);',
        ' vec3 rd=normalize(f*1.6+uv.x*r+uv.y*u);',
        ' float t=0.,d;bool hitPool=false;',
        ' for(int i=0;i<110;i++){vec3 p=ro+rd*t;float dp=pool(p),df=p.y+.02;d=min(dp,df);if(d<.0007){hitPool=dp<df;break;}t+=d*.8;if(t>8.)break;}',
        ' vec3 p=ro+rd*t;float col;',
        ' if(t<8.&&hitPool){vec3 n=nrm(p);vec3 rf=reflect(rd,n);',
        '  float fr=.62+.38*pow(1.-max(dot(-rd,n),0.),4.);', '  col=env(rf)*fr;',
        '  col+=pow(max(dot(rf,normalize(vec3(.15,1.,.1))),0.),120.)*2.2;', '  col*=.85+.15*fbm(p.xz*40.);',
        ' }else if(t<8.){',
        '  float g=fbm(p.xz*7.)*.6+fbm(p.xz*38.)*.4;', '  float ao=smoothstep(0.,.28,pool(vec3(p.x,.02,p.z)));',
        '  float pit=step(.78,fbm(p.xz*22.));', '  col=(.025+.07*g)*(.35+.65*ao)*(1.-.6*pit);',
        '  float pool2d=pool(vec3(p.x,.02,p.z));col+=.08*exp(-pool2d*14.)*(1.-ao);',
        '  float spot=exp(-dot(p.xz,p.xz)*.35);col*=.4+1.2*spot;', ' }else col=0.;',
        ' float dist=length(p-ro);col*=mix(1.,.55,smoothstep(2.6,5.5,dist));',
        ' col=max(col-.012,0.);col=col/(1.+col*.55);col=pow(col,.95);', ' gl_FragColor=vec4(vec3(col),1.);}'
      ].join('\n');
      function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn('[vx] shader', gl.getShaderInfoLog(s)); return null; } return s; }
      var v = sh(gl.VERTEX_SHADER, vs), f = sh(gl.FRAGMENT_SHADER, fs);
      if (!v || !f) { cv.remove(); return null; }
      var pr = gl.createProgram(); gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
      if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.remove(); return null; }
      gl.useProgram(pr);
      var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      var uR = gl.getUniformLocation(pr, 'R'), uT = gl.getUniformLocation(pr, 'T'), uM = gl.getUniformLocation(pr, 'M');
      var scale = opts.mercuryScale || 0.6, mx = 0, my = 0;
      function fit() { var r = vx.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 1.5); cv.width = Math.max(2, r.width * scale * d | 0); cv.height = Math.max(2, r.height * scale * d | 0); gl.viewport(0, 0, cv.width, cv.height); }
      fit();
      return {
        fit: fit,
        draw: function (now, tmx, tmy) { mx += (tmx - mx) * .04; my += (tmy - my) * .04; gl.uniform2f(uR, cv.width, cv.height); gl.uniform1f(uT, reduce ? 6 : now / 1000); gl.uniform2f(uM, mx, my); gl.drawArrays(gl.TRIANGLES, 0, 3); }
      };
    })();

    // ---------------- point field (after @yuruyurau) ----------------
    var field = (function () {
      var cv = document.createElement('canvas'); fieldL.appendChild(cv); var g = cv.getContext('2d');
      var W2, H2, cx, cy, sc, t = 0, cur = 0, nxt = 1, tr = 0;
      var Sn = Math.sin, Cs = Math.cos, At = Math.atan2, Q = Math.sqrt, ab = Math.abs;
      var mag = function (x, y) { return Q(x * x + y * y); };
      var m1 = 1, m2 = 1, m3 = 1, m4 = 1;
      function lfo() { m1 = 1 + .35 * Sn(t * .071); m2 = 1 + .25 * Sn(t * .113 + 1); m3 = 1 + .5 * Sn(t * .047 + 2) * Sn(t * .19); m4 = 1 + .2 * Cs(t * .089 + 3); }
      var anims = [
        { n: 15000, dv: 120, f: function (x, y) { var k = (4 + Sn(y * 2 * m4 - t) * 3) * Cs(x / (29 * m1)), e = y / 8 - 13, d = mag(k, e); var q = 3 * Sn(k * 2 * m2) + 0.3 / k + Sn(y / 25) * k * (9 + 4 * Sn(e * 9 * m3 - d * 3 + t * 2)); var c = d - t; return [q + 30 * Cs(c), q * Sn(c) + d * 39 * m4 - 220]; } },
        { n: 12000, dv: 35, f: function (x, y) { var k = 9 * Cs(x / (8 * m1)), e = y / 8 - 12.5, d = mag(k, e) * mag(k, e) / 99 + Sn(t) / 6 + .5; var q = 99 - e * Sn(At(k, e) * (7 * m2 | 0 || 7)) / d + k * (3 + Cs(d * d * m3 - t) * 2); var c = d / 2 + e / 69 - t / 16; return [q * Sn(c), (q + 19 * d) * Cs(c)]; } },
        { n: 22000, dv: 200, mirror: true, f: function (x, y) { var k = x / 12 - 12.5, d = 2 * ab(Cs(k / (2 * m1)) + Sn(y / 4 * m3) + Cs(k / 8)); var q = x / 4 + 90 + d * k * Cs(d - t * 2 + y / 24); var c = y / 79 - t / 8 + d / 8 * m2; return [q * .7 * Cs(c) + q / 8 * Sn(c * 4 * m4), q * .7 * Sn(c)]; } },
        { n: 18000, dv: 60, f: function (x, y) { var k = 5 * Cs(x / (14 * m1)) * (1 + Sn(y / 9 - t)), e = y / 6 - 25, d = mag(k, e) / 4; var q = 70 + k * 6 * Sn(d * m2 - t * 1.5) + e * Cs(At(k, e) * 5 * m3); var c = d / 3 - t / 10 + x / 300 * 6.283; return [q * Cs(c) * m4, q * Sn(c) * .8]; } },
        { n: 14000, dv: 100, f: function (x, y) { var u = x / 300 * 6.283, v = y / 140; var r = 120 + 60 * Sn(u * 3 * m2 + t) * Cs(v * 6.283 * m3 - t * .7); var sh = 40 * Sn(v * 20 + t * 3) * (Sn(t * .3) > .6 ? 1 : .1); return [r * Cs(u + v * m1) + sh, (v - .5) * 360 * m4 + 30 * Sn(u * 5 - t)]; } }
      ];
      var baseN = anims.map(function (a) { return a.n; });
      function fit() {
        var r = vx.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2); W2 = cv.width = Math.max(2, r.width * d | 0); H2 = cv.height = Math.max(2, r.height * d | 0); cx = W2 * .5; cy = H2 * .5; sc = Math.min(W2, H2) / 560;
        var budget = Math.min(1, (r.width * r.height) / (1440 * 900)); anims.forEach(function (a, i) { a.n = Math.round(baseN[i] * Math.max(0.45, budget)); });
      }
      fit();
      function drawOne(a, alpha) {
        if (alpha <= 0.01) return;
        g.fillStyle = 'rgba(255,255,255,' + (0.42 * alpha).toFixed(3) + ')';
        for (var i = a.n; i--;) {
          var p = a.f(i % 300, (i / a.dv) | 0);
          if (p[0] !== p[0] || p[1] !== p[1]) continue;
          var hsh = Math.sin(i * 12.9898 + t * 78.233) * 43758.5453; hsh -= Math.floor(hsh);
          var jx = (hsh - .5) * 0.9, jy = (((hsh * 7.31) % 1) - .5) * 0.9;
          if (hsh > 0.9985) { jx *= 40; jy *= 40; }
          g.fillRect(cx + p[0] * sc + jx, cy + p[1] * sc + jy, 1, 1);
          if (a.mirror) g.fillRect(cx - p[0] * sc - jx, cy + p[1] * sc + jy, 1, 1);
        }
      }
      var tmp = document.createElement('canvas'), tg = tmp.getContext('2d');
      function shear() {
        var bands = Math.random() < 0.03 ? 2 + (Math.random() * 4 | 0) : (Math.random() < 0.12 ? 1 : 0);
        if (bands) AV.glitch(bands);
        for (var b = 0; b < bands; b++) {
          var bh = (2 + Math.random() * 18) * (devicePixelRatio || 1) | 0, by = Math.random() * (H2 - bh) | 0;
          if (tmp.width !== W2 || tmp.height !== bh) { tmp.width = W2; tmp.height = bh; }
          tg.clearRect(0, 0, W2, bh); tg.drawImage(cv, 0, by, W2, bh, 0, 0, W2, bh);
          g.clearRect(0, by, W2, bh); g.drawImage(tmp, ((Math.random() - .5) * 60) | 0, by);
        }
      }
      function pick() { var f = S.formula; if (f === 'auto') return null; var i = typeof f === 'number' ? f : FORMULAS.indexOf(f); return i >= 0 && i < anims.length ? i : null; }
      return {
        fit: fit,
        clear: function () { g.clearRect(0, 0, W2, H2); },
        still: function () { t = 2; drawOne(anims[0], 1); },
        draw: function (dt) {
          g.globalCompositeOperation = 'destination-out'; g.fillStyle = 'rgba(0,0,0,0.32)'; g.fillRect(0, 0, W2, H2); g.globalCompositeOperation = 'source-over';
          t += Math.PI / 240 * dt; tr += 0.004 * dt; lfo();
          var fixed = pick();
          if (fixed !== null && cur !== fixed && nxt !== fixed) { nxt = fixed; if (tr > .5) tr = .5; }
          if (tr >= 1) {
            tr = 0; cur = nxt;
            if (fixed !== null) { nxt = fixed; tr = cur === fixed ? 0 : tr; }
            else { nxt = (Math.random() * anims.length) | 0; if (nxt === cur) nxt = (cur + 1) % anims.length; }
            AV.shape();
          }
          if (fixed !== null && cur === fixed && nxt === fixed) { tr = 0; drawOne(anims[cur], 1); }
          else { drawOne(anims[cur], 1 - tr); drawOne(anims[nxt], tr); }
          shear();
          return Math.abs(m3 - 1) * 2;
        },
        current: function () { return FORMULAS[cur]; }
      };
    })();

    // ---------------- grain + Fairlight fleck chains ----------------
    var grain = (function () {
      var c = document.createElement('canvas'); grainL.appendChild(c); var ctx = c.getContext('2d');
      var dpr = Math.min(devicePixelRatio || 1, 2), W = 0, H = 0, N = 0, flecks = [], bob = null;
      function fit() { var r = vx.getBoundingClientRect(); W = c.width = Math.max(2, Math.round(r.width * dpr)); H = c.height = Math.max(2, Math.round(r.height * dpr)); N = Math.round(W * H / 2600); }
      fit();
      function spawn() { var w = Math.random() < 0.8 ? 1 : 2, h = (3 + Math.random() * 22) * dpr | 0; flecks.push({ x: Math.random() * W | 0, y: Math.random() * H | 0, w: w, h: h, life: 1 + (Math.random() * 3 | 0), dens: 0.18 + Math.random() * 0.35, img: ctx.createImageData(w, h) }); }
      function speckle() {
        for (var i = 0; i < N * 0.2; i++) { var a = Math.random(); ctx.fillStyle = 'rgba(255,255,255,' + (0.05 + a * a * 0.3).toFixed(3) + ')'; ctx.fillRect((Math.random() * W) | 0, (Math.random() * H) | 0, 1, 1); }
        var want = Math.max(4, (W * H / 120000) | 0);
        while (flecks.length < want) spawn();
        for (var f = flecks.length - 1; f >= 0; f--) {
          var k = flecks[f], d = k.img.data;
          for (var p = 0; p < d.length; p += 4) { var on = Math.random() < k.dens, v = on ? 140 + Math.random() * 115 : 0; d[p] = d[p + 1] = d[p + 2] = v; d[p + 3] = on ? 90 + Math.random() * 165 : 0; }
          ctx.putImageData(k.img, k.x, k.y); // flecks flicker in place: never falling, not rain
          if (--k.life <= 0) flecks.splice(f, 1);
        }
      }
      var chains = [
        { n: 34, ax: 0.42, ay: 0.30, fx: 0.23, fy: 0.37, sp: 0.55, gap: 0.085, ph: 0.0, cy: 0.46 },
        { n: 26, ax: 0.36, ay: 0.18, fx: 0.31, fy: 0.62, sp: -0.4, gap: 0.11, ph: 2.1, cy: 0.52 },
        { n: 48, ax: 0.48, ay: 0.06, fx: 0.5, fy: 1.7, sp: 0.8, gap: 0.05, ph: 4.0, cy: 0.78 }
      ];
      function demo(t) {
        var s = t / 1000, bw = Math.max(1, dpr | 0), bh = (10 * dpr) | 0;
        if (!bob || bob.width !== bw || bob.height !== bh) bob = ctx.createImageData(bw, bh);
        chains.forEach(function (ch) {
          for (var i = 0; i < ch.n; i++) {
            var u = s * ch.sp - i * ch.gap + ch.ph;
            var wob = 1 + 0.08 * Math.sin(s * 0.37 + ch.ph) + 0.05 * Math.sin(s * 1.13 + i * 0.7);
            var x = W * (0.5 + ch.ax * Math.sin(u * ch.fx * wob * 6.283 + i * 0.02) + 0.012 * Math.sin(i * 1.7 + s * 3.1));
            var y = H * (ch.cy + ch.ay * Math.sin(u * ch.fy * wob * 6.283) + 0.01 * Math.cos(i * 2.3 - s * 2.7));
            x += (Math.random() - 0.5) * 5 * dpr; y += (Math.random() - 0.5) * 5 * dpr;
            if (Math.random() < 0.015) { x += (Math.random() - 0.5) * 60 * dpr; y += (Math.random() - 0.5) * 40 * dpr; }
            var fade = 1 - i / ch.n, d = bob.data;
            for (var p = 0; p < d.length; p += 4) { var on = Math.random() < 0.55 * fade + 0.1; d[p] = d[p + 1] = d[p + 2] = on ? 200 + Math.random() * 55 : 0; d[p + 3] = on ? (60 + Math.random() * 195) * fade : 0; }
            ctx.putImageData(bob, x | 0, y | 0);
          }
        });
      }
      return { fit: fit, draw: function (t) { ctx.clearRect(0, 0, W, H); if (S.grain) speckle(); if (S.flecks) demo(t); } };
    })();

    // ---------------- render loop ----------------
    var tmx = 0, tmy = 0;
    vx.addEventListener('pointermove', function (e) { var r = vx.getBoundingClientRect(); tmx = (e.clientX - r.left) / r.width - .5; tmy = .5 - (e.clientY - r.top) / r.height; });
    var visible = true;
    if (root.IntersectionObserver) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(vx);
    function fitAll() { if (merc) merc.fit(); field.fit(); grain.fit(); }
    if (root.ResizeObserver) new ResizeObserver(fitAll).observe(vx); else addEventListener('resize', fitAll);
    var prevT = 0, lastLive = 0, raf = 0;
    function loop(now) {
      raf = requestAnimationFrame(loop);
      if (!visible || S.blackout) { prevT = now; return; }
      var dt = prevT ? Math.min((now - prevT) / 16.67, 3) : 1; prevT = now;
      if (merc && S.mercury) merc.draw(now, tmx, tmy);
      var energy = 0;
      if (S.field) energy = field.draw(dt);
      AV.tick(now / 1000, energy);
      if (S.grain || S.flecks) grain.draw(now); else grain.draw(-1);
      if (S.decals && now - lastLive > 45) { lastLive = now; liveTick(now / 1000); }
    }
    if (reduce) { if (merc) merc.draw(6000, 0, 0); field.still(); } else raf = requestAnimationFrame(loop);

    // ---------------- state ----------------
    function apply() {
      applyVideo();
      farL.classList.toggle('vx-off', !S.mercury || !merc);
      fieldL.classList.toggle('vx-off', !S.field); if (!S.field) field.clear();
      midL.classList.toggle('vx-off', !S.decals); nearL.classList.toggle('vx-off', !S.decals);
      copyL.classList.toggle('vx-off', !S.title);
      grainL.classList.toggle('vx-off', !S.grain && !S.flecks);
      vx.classList.toggle('blackout', !!S.blackout);
      if (S.blackout) { vA.pause(); vB.pause(); } else if (S.video && !dark && cur.src) cur.play().catch(function () {});
      AV.setVolume(S.volume); AV.setBpm(S.bpm);
      if (S.audio !== AV.on) AV.setOn(S.audio).then(null, function () { S.audio = false; emit(); });
      emit();
    }
    function emit() { var snap = api.snapshot(); listeners.forEach(function (fn) { try { fn(snap); } catch (e) { console.warn(e); } }); }
    var api = {
      state: S, formulas: FORMULAS.slice(), defaults: DEFAULTS,
      get: function (k) { return S[k]; },
      set: function (k, v) {
        if (typeof k === 'object') { for (var kk in k) if (kk in DEFAULTS) S[kk] = k[kk]; }
        else if (k in DEFAULTS) S[k] = v;
        if (k === 'smooth' || k === 'rough' || (typeof k === 'object' && ('smooth' in k || 'rough' in k))) { if (deckStarted) buildDeck(); }
        apply();
      },
      blackout: function (on) { S.blackout = on === undefined ? !S.blackout : !!on; apply(); },
      cleanNow: function () { if (!S.video) { S.video = true; apply(); } if (dark) clipCut(true); later(function () { setClean(true); }, dark ? 500 : 0); },
      nextClip: function () { if (!S.video) return; clipCut(true); },
      toggleAudio: function () { S.audio = !S.audio; apply(); },
      onchange: function (fn) { listeners.push(fn); },
      snapshot: function () { var o = {}; for (var k in S) o[k] = S[k]; o.clean = vx.classList.contains('clean'); o.void = dark; o.shape = field.current(); o.audioRunning = AV.on; return o; },
      destroy: function () { alive = false; cancelAnimationFrame(raf); timers.forEach(clearTimeout); AV.setOn(false); vA.pause(); vB.pause(); vx.remove(); }
    };
    apply();
    return api;
  }

  // ---------------- Web Audio beep-boop engine (look-ahead scheduler on the audio clock) ----------------
  function makeAudio(S) {
    var AV = { on: false, tick: function () {}, glitch: function () {}, cut: function () {}, shape: function () {}, flash: function () {}, setVolume: function () {}, setBpm: function () {} };
    var ac = null, master, verb, dryBus, padF, padGain, chordIdx = 0, nb, volume = S.volume;
    var chords = [[0, 7, 12, 15, 19], [-4, 3, 8, 12, 15], [-2, 5, 10, 14, 17], [-7, 0, 5, 8, 12], [3, 10, 15, 19, 22]];
    var scale = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 22, 24];
    var hz = function (st, base) { return (base || 110) * Math.pow(2, st / 12); };
    var padOsc = [], bassOsc, bassG;
    var BPM = S.bpm, STEP = 60 / BPM / 2, step = 0, nextT = 0, energyNow = 0, pendingChord = false, seqTimer = null;
    var burstLeft = 0, burstBase = 24, burstWave = 'square';
    function beep(st, t, dur, vol, wave) { var o = ac.createOscillator(), g = ac.createGain(), p = ac.createStereoPanner ? ac.createStereoPanner() : null; o.type = wave || 'square'; o.frequency.value = hz(st, 110); var v = vol * (wave === 'square' ? .5 : 1); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .002); g.gain.setValueAtTime(v, t + dur * .7); g.gain.linearRampToValueAtTime(0, t + dur); o.connect(g); if (p) { p.pan.value = Math.random() * 1.6 - .8; g.connect(p); p.connect(dryBus); } else g.connect(dryBus); o.start(t); o.stop(t + dur + .01); }
    function boop(st, t) { var o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; var f = hz(st, 110); o.frequency.setValueAtTime(f * 1.5, t); o.frequency.exponentialRampToValueAtTime(f * .7, t + .22); g.gain.setValueAtTime(.16, t); g.gain.exponentialRampToValueAtTime(.0001, t + .28); o.connect(g); g.connect(dryBus); o.start(t); o.stop(t + .3); }
    function impulse(sec, decay) { var n = ac.sampleRate * sec, b = ac.createBuffer(2, n, ac.sampleRate); for (var c = 0; c < 2; c++) { var d = b.getChannelData(c); for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); } return b; }
    function noiseBuf() { var n = ac.sampleRate, b = ac.createBuffer(1, n, ac.sampleRate), d = b.getChannelData(0); for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; return b; }
    function start() {
      ac = new (root.AudioContext || root.webkitAudioContext)();
      master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
      var comp = ac.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3; comp.connect(master);
      verb = ac.createConvolver(); verb.buffer = impulse(1.6, 4); var wet = ac.createGain(); wet.gain.value = .1; var vlp = ac.createBiquadFilter(); vlp.type = 'lowpass'; vlp.frequency.value = 3500; verb.connect(vlp); vlp.connect(wet); wet.connect(comp);
      dryBus = ac.createGain(); dryBus.gain.value = .8; dryBus.connect(comp); dryBus.connect(verb);
      nb = noiseBuf();
      padF = ac.createBiquadFilter(); padF.type = 'lowpass'; padF.frequency.value = 1200; padF.Q.value = 0.9;
      padGain = ac.createGain(); padGain.gain.value = .14; padF.connect(padGain); padGain.connect(dryBus);
      chords[0].forEach(function (st) { ['triangle', 'sine'].forEach(function (ty, k) { var o = ac.createOscillator(); o.type = ty; o.frequency.value = hz(st); o.detune.value = k ? 4 : -4; var g = ac.createGain(); g.gain.value = .16; o.connect(g); g.connect(padF); o.start(); padOsc.push(o); }); });
      bassOsc = ac.createOscillator(); bassOsc.type = 'sine'; bassOsc.frequency.value = hz(chords[0][0], 55); bassG = ac.createGain(); bassG.gain.value = 0; bassOsc.connect(bassG); bassG.connect(comp); bassOsc.start();
    }
    function bell(st, vel, when) {
      if (!ac) return; var t0 = when || ac.currentTime, f = hz(st, 220);
      var car = ac.createOscillator(), mod = ac.createOscillator(), mg = ac.createGain(), g = ac.createGain(), pan = ac.createStereoPanner ? ac.createStereoPanner() : null;
      car.frequency.value = f; mod.frequency.value = f * 3.51; mg.gain.setValueAtTime(f * 2.2, t0); mg.gain.exponentialRampToValueAtTime(1, t0 + 2.5);
      mod.connect(mg); mg.connect(car.frequency);
      g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(.14 * vel, t0 + .005); g.gain.exponentialRampToValueAtTime(.0001, t0 + 3.5);
      car.connect(g); if (pan) { pan.pan.value = Math.random() * 1.6 - .8; g.connect(pan); pan.connect(dryBus); } else g.connect(dryBus);
      car.start(t0); mod.start(t0); car.stop(t0 + 3.6); mod.stop(t0 + 3.6);
    }
    function burst(dur, freq, q, vol) { if (!ac) return; var s = ac.createBufferSource(); s.buffer = nb; var f = ac.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q; var g = ac.createGain(), t0 = ac.currentTime; g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur); s.connect(f); f.connect(g); g.connect(dryBus); s.start(t0, Math.random() * .5); s.stop(t0 + dur + .02); }
    function blip(f, dur, vol) { if (!ac) return; var o = ac.createOscillator(), g = ac.createGain(), t0 = ac.currentTime; o.type = 'square'; o.frequency.value = f; g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur); o.connect(g); g.connect(dryBus); o.start(t0); o.stop(t0 + dur + .01); }
    function playStep(t) {
      var ch = chords[chordIdx], bar = step % 16;
      if (bar === 0 && pendingChord) { pendingChord = false; chordIdx = (chordIdx + 1 + (Math.random() * 2 | 0)) % chords.length; ch = chords[chordIdx]; padOsc.forEach(function (o, i) { o.frequency.setTargetAtTime(hz(ch[(i / 2) | 0]), t, 1.2); }); bassOsc.frequency.setTargetAtTime(hz(ch[0], 55), t, .05); bell(ch[0] + 12, .9, t); }
      if (bar === 0 && (step / 16) % 4 === 3) pendingChord = true;
      bassG.gain.setTargetAtTime(0, t, .5);
      for (var h = 0; h < 2; h++) {
        var tt = t + h * STEP / 2;
        if (burstLeft > 0) { beep(burstBase + scale[(burstLeft * 3) % scale.length], tt, .045, .05, burstWave); burstLeft--; continue; }
        if (Math.random() < .3 + energyNow * .2) beep(ch[(Math.random() * ch.length) | 0] + 24 + (Math.random() < .3 ? 12 : 0), tt, .03 + Math.random() * .05, .055, Math.random() < .5 ? 'square' : 'sine');
        if (Math.random() < .035) { burstLeft = 4 + (Math.random() * 5 | 0); burstBase = ch[0] + 24 + (Math.random() < .5 ? 12 : 0); burstWave = Math.random() < .6 ? 'square' : 'triangle'; }
        if (Math.random() < .04) boop(ch[0] + (Math.random() < .5 ? 0 : 7), tt);
      }
      var pr = (bar % 4 === 0 ? .32 : .12) + energyNow * .12;
      if (Math.random() < pr) { var st = Math.random() < .6 ? ch[(Math.random() * ch.length) | 0] + 12 : scale[(Math.random() * scale.length) | 0]; bell(st, .5 + Math.random() * .5, t); if (Math.random() < .2) bell(st + 7, .3, t + STEP); }
    }
    function scheduler() { while (nextT < ac.currentTime + 0.25) { playStep(nextT); nextT += STEP; step++; } }
    function startSeq() { if (seqTimer) return; nextT = ac.currentTime + 0.1; seqTimer = setInterval(scheduler, 50); }
    function stopSeq() { clearInterval(seqTimer); seqTimer = null; }
    AV.tick = function (s, energy) { if (!AV.on || !ac) return; energyNow = Math.min(1, energy); padF.frequency.setTargetAtTime(900 + 500 * (0.5 + 0.5 * Math.sin(s * 0.05)) + energy * 300, ac.currentTime, 2); };
    AV.glitch = function (n) { if (AV.on && Math.random() < .7) burst(.03 + n * .01, 2000 + Math.random() * 6000, 8, .05); };
    AV.flash = function () { if (AV.on && ac && Math.random() < .45) beep(36 + scale[(Math.random() * scale.length) | 0], ac.currentTime + .01, .02 + Math.random() * .03, .03, Math.random() < .5 ? 'sine' : 'square'); };
    AV.cut = function () { if (!AV.on) return; burst(.12, 300 + Math.random() * 600, 2, .07); blip(110 * (1 + (Math.random() * 3 | 0)), .06, .02); };
    AV.shape = function () { if (AV.on) pendingChord = true; };
    AV.setVolume = function (v) { volume = Math.max(0, Math.min(1, +v)); if (ac && AV.on) master.gain.setTargetAtTime(volume, ac.currentTime, .1); };
    AV.setBpm = function (b) { b = Math.max(40, Math.min(200, +b || 100)); BPM = b; STEP = 60 / BPM / 2; };
    AV.setOn = function (on) {
      return new Promise(function (res, rej) {
        try {
          if (!on && !ac) { AV.on = false; return res(); }
          if (!ac) start();
          var go = function () {
            AV.on = !!on;
            master.gain.cancelScheduledValues(ac.currentTime);
            if (AV.on) { master.gain.setTargetAtTime(volume, ac.currentTime, .6); bell(12, 1); bell(19, .7, ac.currentTime + STEP); startSeq(); }
            else { master.gain.setTargetAtTime(0, ac.currentTime, .25); stopSeq(); }
            res();
          };
          if (on && ac.state !== 'running') ac.resume().then(go, rej); else go();
        } catch (e) { console.warn('[vx] audio', e); rej(e); }
      });
    };
    return AV;
  }

  root.VX = { mount: mount, defaults: DEFAULTS, formulas: FORMULAS, clips: { smooth: GROK, rough: JAM } };
})(typeof window !== 'undefined' ? window : this);
