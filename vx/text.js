/* Text layers for the TITLES tab: a line or two of type in a VexVoid font, animated, as an ordinary VX GEN sketch, so
 * it goes on a deck, records, and VexVoid can make one, like any pattern. The text is drawn once into an offscreen
 * buffer (redrawn only when its size, font or tracking changes) and animated by slicing and moving that buffer, so
 * heavy glitching stays cheap. The background is transparent: the text sits over whatever is below it on the deck.
 *
 *   VXTEXT.FONTS  [{ id, family, weight, italic, label }]      VXTEXT.STYLES  [{ id, label, about }]
 *   VXTEXT.code({ text, font, style, upper, tracking }) -> sketch source (knobs: SIZE, SPEED, INTENSITY, HEIGHT)
 */
(function (root) {
  'use strict';

  var FONTS = [
    { id: 'michroma', family: 'Michroma', weight: 400, label: 'MICHROMA · wide, the V3XV0ID face' },
    { id: 'syncopate', family: 'Syncopate', weight: 700, label: 'SYNCOPATE · wide caps' },
    { id: 'unbounded', family: 'Unbounded', weight: 800, label: 'UNBOUNDED · heavy, round' },
    { id: 'barlow', family: 'Barlow Condensed', weight: 800, label: 'BARLOW CONDENSED · tall, tight' },
    { id: 'bebas', family: 'Bebas Neue', weight: 400, label: 'BEBAS NEUE · poster' },
    { id: 'plex', family: 'IBM Plex Mono', weight: 500, label: 'PLEX MONO · technical' },
    { id: 'majormono', family: 'Major Mono Display', weight: 400, label: 'MAJOR MONO · stylised mono' },
    { id: 'instrument', family: 'Instrument Serif', weight: 400, italic: true, label: 'INSTRUMENT SERIF · italic' }
  ];
  var STYLES = [
    { id: 'static', label: 'STATIC', about: 'holds still, fades in' },
    { id: 'glitch', label: 'GLITCH', about: 'slices jump sideways, ghosts and dropouts; kicks spike it' },
    { id: 'broken', label: 'BROKEN', about: 'shattered into vertical shards that drift apart and snap back on the kick' },
    { id: 'strobe', label: 'STROBE', about: 'on and off on the beat; at high intensity the kick flashes it as a knockout' },
    { id: 'drift', label: 'DRIFT', about: 'slides across the frame in an endless line' },
    { id: 'zoom', label: 'ZOOM', about: 'flies through the camera every few bars and punches on the kick' },
    { id: 'cut', label: 'CUT', about: 'cuts in and out, jumping position and size on the beat' },
    { id: 'typeon', label: 'TYPE-ON', about: 'types itself in each bar behind a block cursor' },
    { id: 'scan', label: 'SCAN', about: 'a scanline reveals it each bar, with tearing behind the line' },
    { id: 'track', label: 'TRACK', about: 'letter spacing breathes from tight to very wide over the bar' }
  ];

  var BODY = `
let g = null, gKey = '', bars = 0, lastBar = 0, t0 = -1, cutPos = [0.5, 0.5, 1];
function setup() { createCanvas(windowWidth, windowHeight); }
function fontSpec(sz) { return (T.italic ? 'italic ' : '') + T.weight + ' ' + Math.round(sz) + 'px "' + T.family + '"'; }
// the text, drawn into an offscreen buffer; redrawn only when size, font readiness or tracking change
function buffer(sz, tracking) {
  const lines = T.text.split('\\n'), spec = fontSpec(sz);
  const ready = !document.fonts || document.fonts.check(spec);
  if (!ready) document.fonts.load(spec);
  const key = [T.text, Math.round(sz), Math.round(tracking), ready, T.family].join('|');
  if (key === gKey && g) return g;
  gKey = key;
  const m = drawingContext; m.save(); m.font = spec; m.letterSpacing = tracking + 'px';
  const w = Math.ceil(Math.max.apply(null, lines.map(l => m.measureText(l).width))) + Math.ceil(sz * 0.6), lh = sz * 1.08;
  m.restore();
  if (g) g.remove();
  g = createGraphics(Math.max(4, w), Math.max(4, Math.ceil(lh * lines.length + sz * 0.4)));
  g.pixelDensity(1);
  const c = g.drawingContext;
  c.font = spec; c.letterSpacing = tracking + 'px'; c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle';
  lines.forEach((l, i) => c.fillText(l, g.width / 2, sz * 0.2 + lh * (i + 0.5)));
  return g;
}
function blit(b, sx, sy, sw, sh, dx, dy, dw, dh) { if (sw > 0 && sh > 0) drawingContext.drawImage(b.elt, sx, sy, sw, sh, dx, dy, dw ?? sw, dh ?? sh); }
function draw() {
  clear();
  if (t0 < 0) t0 = vx.t;
  if (vx.bar < lastBar) bars++;
  lastBar = vx.bar;
  const I = vx.c, sp = 0.3 + vx.b * 2.4, life = vx.t - t0;
  const sz = Math.min(height * (0.05 + vx.a * 0.32), width * 0.9 / Math.max(3, T.text.split('\\n').reduce((n, l) => Math.max(n, l.length), 0) * 0.62));
  const track = T.style === 'track' ? sz * (0.02 + (0.5 - 0.5 * Math.cos(vx.bar * TWO_PI)) * (0.2 + I * 0.8)) : sz * T.tracking;
  const b = buffer(sz, track), W = b.width, H = b.height;
  const cx = width / 2, cy = height * (0.12 + vx.d * 0.76);
  let x = cx - W / 2, y = cy - H / 2;
  drawingContext.globalAlpha = Math.min(1, life * 3);
  const st = T.style;
  if (st === 'glitch') {
    const n = 6 + Math.floor(I * 26), hit = vx.kick || random() < 0.12 + I * 0.4;
    let yy = 0;
    while (yy < H) {
      const h = Math.max(2, random(H / n * 0.4, H / n * 1.8)), off = hit && random() < 0.5 + I * 0.4 ? random(-1, 1) * W * (0.03 + I * 0.18) * (1 + vx.pulse) : 0;
      blit(b, 0, yy, W, h, x + off, y + yy);
      yy += h;
    }
    if (hit && random() < 0.4 + I * 0.4) { drawingContext.globalAlpha = 0.35; blit(b, 0, 0, W, H, x + random(-1, 1) * W * 0.05, y + random(-1, 1) * H * 0.2); }
    if (random() < I * 0.5) for (let k = 0; k < 1 + I * 6; k++) drawingContext.clearRect(x + random(W), y + random(H), random(W * 0.25), random(2, H * 0.12));
  } else if (st === 'broken') {
    const n = 5 + Math.floor(I * 11), sw = W / n, snap = Math.pow(1 - vx.pulse, 2);
    for (let i = 0; i < n; i++) {
      const dy = (noise(i * 3.1, vx.t * sp * 0.5) - 0.5) * H * (0.3 + I * 1.4) * snap, dx = (noise(i * 7.3, vx.t * sp * 0.3) - 0.5) * sw * 0.6 * snap;
      blit(b, i * sw, 0, sw - 1, H, x + i * sw + dx, y + dy);
    }
  } else if (st === 'strobe') {
    const div = [1, 2, 4, 8][Math.min(3, Math.floor(vx.b * 4))], on = Math.floor(vx.beat * div * 2) % 2 === 0;
    if (I > 0.5 && vx.pulse > 0.85) { drawingContext.fillStyle = '#fff'; drawingContext.fillRect(0, 0, width, height); drawingContext.globalCompositeOperation = 'destination-out'; blit(b, 0, 0, W, H, x, y); drawingContext.globalCompositeOperation = 'source-over'; }
    else if (on) blit(b, 0, 0, W, H, x, y);
  } else if (st === 'drift') {
    const gap = W + width * 0.2, off = (vx.t * sp * width * 0.08) % gap;
    for (let xx = -gap + (width - off) % gap - gap; xx < width + gap; xx += gap) blit(b, 0, 0, W, H, xx, y + Math.sin(vx.t * sp + xx * 0.002) * H * 0.15 * I);
  } else if (st === 'zoom') {
    const per = 4 / Math.max(0.25, sp), ph = ((vx.t / per) % 1), s = (0.5 + Math.pow(ph, 3) * (3 + I * 9)) * (1 + vx.pulse * 0.15 * (0.3 + I));
    drawingContext.globalAlpha = Math.min(1, life * 3) * (ph > 0.85 ? (1 - ph) / 0.15 : 1);
    blit(b, 0, 0, W, H, cx - W * s / 2, cy - H * s / 2, W * s, H * s);
  } else if (st === 'cut') {
    const div = sp > 1.5 ? 2 : 1, slot = Math.floor((bars * 4 + vx.bar * 4) * div);
    if (slot !== cutPos[3]) { cutPos = [random(0.2, 0.8), random(0.2, 0.8), random(0.6, 1.5), slot, random() < 0.25 + I * 0.4]; }
    if (!cutPos[4]) { const s = cutPos[2]; blit(b, 0, 0, W, H, width * cutPos[0] - W * s / 2, height * cutPos[1] - H * s / 2, W * s, H * s); }
  } else if (st === 'typeon') {
    const per = Math.max(1, Math.round(2 / sp)), ph = ((bars % per) + vx.bar) / per, show = Math.min(1, ph * 2.2), wv = W * show;
    blit(b, 0, 0, wv, H, x, y);
    if (show < 1 || Math.floor(vx.t * 3) % 2) { drawingContext.fillStyle = '#fff'; drawingContext.fillRect(x + wv, y + H * 0.15, Math.max(3, sz * 0.5), H * 0.7); }
  } else if (st === 'scan') {
    const ph = Math.min(1, vx.bar * (1 + sp * 0.5)), line = H * ph;
    blit(b, 0, 0, W, line, x, y);
    for (let k = 0; k < 3 + I * 8; k++) { const yy = line - random(H * 0.25); blit(b, 0, yy, W, 2, x + random(-1, 1) * W * 0.04 * I * 3, y + yy); }
    if (ph < 1) { drawingContext.fillStyle = '#fff'; drawingContext.fillRect(x - W * 0.05, y + line, W * 1.1, Math.max(1, sz * 0.03)); }
  } else {
    blit(b, 0, 0, W, H, x, y);
  }
  drawingContext.globalAlpha = 1;
}`;

  function code(o) {
    o = o || {};
    var f = FONTS.filter(function (x) { return x.id === o.font; })[0] || FONTS[0];
    var st = STYLES.filter(function (x) { return x.id === o.style; })[0] || STYLES[0];
    var text = String(o.text == null ? 'V3XV0ID' : o.text).replace(/\r/g, '').slice(0, 200);
    var cfg = { text: o.upper === false ? text : text.toUpperCase(), family: f.family, weight: f.weight, italic: !!f.italic, style: st.id, tracking: o.tracking != null ? +o.tracking : 0.04 };
    return '// TEXT LAYER (TITLES tab): ' + st.label + ' in ' + f.family + '. ' + st.about + '.\n' +
      '// Knobs: SIZE, SPEED, INTENSITY, HEIGHT (where it sits, top to bottom). Edit T to change the words or the look.\n' +
      'const T = ' + JSON.stringify(cfg) + ';' + BODY + '\n';
  }

  root.VXTEXT = { FONTS: FONTS, STYLES: STYLES, code: code, KNOBS: ['SIZE', 'SPEED', 'INTENSITY', 'HEIGHT'] };
})(typeof window !== 'undefined' ? window : this);
