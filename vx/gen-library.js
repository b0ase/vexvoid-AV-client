/* V3XV0ID VX GEN library: monochrome generative sketches. Each is plain p5 code run by vx-gen.js,
 * so it loads into the code editor as-is and can be edited live. `knobs` names vx.a..vx.d. */
(function (root) {
  'use strict';
  var L = [];
  function add(name, tags, knobs, code) { L.push({ name: name, tags: tags, knobs: knobs, code: code.replace(/^\n/, '') }); }

  add('V3X TRACE', 'type · bar', ['SIZE', 'ECHOES', 'DRIFT', 'WOBBLE'], `
// The V3X mark drawn as trim paths: it writes itself over the first half of every bar.
// Glyph points are 0..1 with y up.
const GL = {
  V: [[[0, 1], [0.5, 0], [1, 1]]],
  '3': [[[0, 1], [1, 1], [0.42, 0.56], [1, 0.5], [1, 0], [0, 0]]],
  X: [[[0, 0], [1, 1]], [[1, 0], [0, 1]]]
};
function easeOut(x) { return 1 - pow(1 - x, 3); }
function trace(pts, f) {
  let total = 0; const seg = [];
  for (let i = 1; i < pts.length; i++) { const l = dist(pts[i-1][0], pts[i-1][1], pts[i][0], pts[i][1]); seg.push(l); total += l; }
  let rem = total * f;
  beginShape(); vertex(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length && rem > 0; i++) {
    const k = min(1, rem / seg[i-1]);
    vertex(lerp(pts[i-1][0], pts[i][0], k), lerp(pts[i-1][1], pts[i][1], k));
    rem -= seg[i-1];
  }
  endShape();
}
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0); noFill(); strokeCap(SQUARE); strokeJoin(MITER);
  // fit the three letters (2.34 heights wide) inside 80% of the width, whatever the canvas shape
  const H = min(height * 0.3 * (0.6 + vx.a * 0.9), width * 0.8 / 2.34), W = H * 0.62, gap = H * 0.24, total = W * 3 + gap * 2;
  const f = vx.bar < 0.5 ? easeOut(vx.bar * 2) : 1;
  const echoes = 1 + floor(vx.b * 6);
  for (let e = echoes - 1; e >= 0; e--) {
    stroke(255, e === 0 ? 255 : 70 / e);
    strokeWeight(max(1, H * (e === 0 ? 0.07 : 0.02)));
    const ox = width / 2 - total / 2 + e * H * 0.06 * (vx.c - 0.5) * 4;
    const oy = height / 2 - H / 2 + e * H * 0.05 + (e ? sin(vx.t * 2 + e) * H * 0.06 * vx.d : 0);
    ['V', '3', 'X'].forEach((ch, i) => GL[ch].forEach(line => {
      const pts = line.map(([u, v]) => [ox + i * (W + gap) + u * W, oy + (1 - v) * H]);
      trace(pts, constrain(f * 1.4 - i * 0.2, 0, 1));
    }));
  }
  if (vx.pulse > 0.85) { noStroke(); fill(255, 30); rect(0, 0, width, height); }
}`);

  add('FLOW FIELD', 'particles · noise', ['DENSITY', 'SCALE', 'SPEED', 'TRAIL'], `
let pts = [], z = 0;
function count() { return floor(400 + vx.a * 3600); }
function reset() { pts = []; for (let i = 0; i < count(); i++) pts.push(createVector(random(width), random(height))); }
function setup() { createCanvas(windowWidth, windowHeight); background(0); reset(); }
function draw() {
  noStroke(); fill(0, 6 + (1 - vx.d) * 40); rect(0, 0, width, height);
  if (pts.length !== count()) reset();
  const sc = 0.0008 + vx.b * 0.006;
  z += 0.002 + vx.bass * 0.02 + vx.pulse * 0.03;
  stroke(255, 140 + vx.level * 115); strokeWeight(1 + vx.pulse * 1.5);
  const sp = 1 + vx.c * 5 + vx.bass * 6;
  for (const q of pts) {
    const ang = noise(q.x * sc, q.y * sc, z) * TAU * 2;
    const nx = q.x + cos(ang) * sp, ny = q.y + sin(ang) * sp;
    line(q.x, q.y, nx, ny); q.x = nx; q.y = ny;
    if (q.x < 0 || q.x > width || q.y < 0 || q.y > height) { q.x = random(width); q.y = random(height); }
  }
}`);

  add('RIDGES', 'lines · bass', ['ROWS', 'DETAIL', 'SPEED', 'HEIGHT'], `
// Stacked ridge lines; each row hides the one behind it.
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0); stroke(255); strokeWeight(1.3); fill(0);
  const rows = floor(24 + vx.a * 60), top = height * 0.14, gap = height * 0.76 / rows;
  const x0 = width * 0.12, x1 = width * 0.88, half = (x1 - x0) / 2;
  for (let r = 0; r < rows; r++) {
    const y0 = top + r * gap;
    beginShape(); vertex(x0, y0);
    for (let x = x0; x <= x1; x += 5) {
      const env = pow(max(1 - abs((x - (x0 + half)) / half), 0), 2.4);
      const n = noise(x * 0.01 * (0.4 + vx.b * 1.6), r * 0.25, vx.t * (0.15 + vx.c));
      vertex(x, y0 - env * n * gap * (3 + vx.bass * 14 + vx.pulse * 6) * (0.4 + vx.d));
    }
    vertex(x1, y0); endShape();
  }
}`);

  add('GLYPH GRID', 'grid · kick', ['CELLS', 'FLIPS', 'BRIGHT', '—'], `
let cells = [], cols = 0, rows = 0, s = 0;
function size() { return floor(lerp(150, 28, vx.a)); }
function build() {
  s = size(); cols = ceil(width / s); rows = ceil(height / s); cells = [];
  for (let i = 0; i < cols * rows; i++) cells.push({ g: floor(random(8)), r: floor(random(4)), on: random() < 0.2 });
}
function glyph(g, h) {
  switch (g) {
    case 0: line(-h, -h, 0, h); line(0, h, h, -h); break;
    case 1: line(-h, -h, h, h); line(-h, h, h, -h); break;
    case 2: arc(0, -h / 2, h * 1.3, h, -HALF_PI - 0.7, HALF_PI); arc(0, h / 2, h * 1.3, h, -HALF_PI, HALF_PI + 0.7); break;
    case 3: ellipse(0, 0, h * 1.3, h * 2); line(-h * 0.5, h * 0.8, h * 0.5, -h * 0.8); break;
    case 4: for (let i = -2; i <= 2; i++) line(i * h * 0.4, -h, i * h * 0.4, h); break;
    case 5: rect(-h * 0.8, -h * 0.8, h * 1.6, h * 1.6); line(-h * 0.8, 0, h * 0.8, 0); break;
    case 6: line(-h, 0, h, 0); line(0, -h, 0, h); ellipse(0, 0, h, h); break;
    default: triangle(-h, h, h, h, 0, -h);
  }
}
function setup() { createCanvas(windowWidth, windowHeight); build(); }
function windowResized() { build(); }
function draw() {
  background(0);
  if (abs(s - size()) > 2) build();
  if (vx.kick) {
    for (let i = 0; i < cells.length * (0.04 + vx.b * 0.5); i++) {
      const c = random(cells); c.g = floor(random(8)); c.r = floor(random(4)); c.on = random() < 0.15 + vx.level * 0.6;
    }
  }
  strokeWeight(max(1, s * 0.05)); noFill();
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const c = cells[j * cols + i]; if (!c) continue;
    push(); translate(i * s + s / 2, j * s + s / 2); rotate(c.r * HALF_PI);
    if (c.on) { noStroke(); fill(255); rect(-s * 0.46, -s * 0.46, s * 0.92, s * 0.92); stroke(0); noFill(); }
    else stroke(255, 70 + 185 * vx.c);
    glyph(c.g, s * 0.34); pop();
  }
}`);

  add('WIRE TUNNEL', '3d · speed', ['SIDES', 'TWIST', 'SPEED', 'SWAY'], `
let z = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  background(0); noFill();
  z += 4 + vx.c * 30 + vx.bass * 40;
  const rings = 44, gap = 120, sides = floor(3 + vx.a * 9);
  rotateZ(vx.t * (vx.b - 0.5) * 0.8);
  for (let i = 0; i < rings; i++) {
    const k = i + floor(z / gap), depth = i * gap - (z % gap);
    const r = 320 + sin(k * 0.4 + vx.t) * 70 * vx.d + vx.pulse * 90;
    push();
    translate(sin(k * 0.15) * 140 * vx.d, cos(k * 0.11) * 90 * vx.d, 300 - depth);
    rotateZ(k * 0.06 * (vx.b * 2));
    stroke(255, map(i, 0, rings, 255, 0)); strokeWeight(i < 3 ? 2.5 : 1.4);
    beginShape();
    for (let s = 0; s <= sides; s++) { const a = s / sides * TAU; vertex(cos(a) * r, sin(a) * r, 0); }
    endShape();
    pop();
  }
}`);

  add('TERRAIN', '3d · bass', ['HEIGHT', 'DETAIL', 'SPEED', 'TILT'], `
// A wireframe landscape flown over: the mesh is projected by hand and drawn as 2D lines (fast at 1080p).
let fly = 0;
const COLS = 60, ROWS = 46;
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0); noFill();
  fly += 0.02 + vx.c * 0.12 + vx.bass * 0.08;
  const amp = 0.25 + vx.a * 0.9 + vx.bass * 0.7, det = 0.08 * (0.4 + vx.b * 1.4);
  const horizon = height * (0.18 + vx.d * 0.3), cx = width / 2, eye = 1.6;
  const pts = [];
  for (let r = 0; r < ROWS; r++) {
    const z = 1 + (ROWS - 1 - r) * 0.42, row = [];
    for (let c = 0; c < COLS; c++) {
      const x = (c / (COLS - 1) - 0.5) * 26;
      const n = noise(c * det * 3, (r * 0.42 - fly) * det * 3);
      const h = n * n * amp * 4;
      row.push([cx + x / z * width * 0.18, horizon + (eye - h) / z * height * 0.55]);
    }
    pts.push(row);
  }
  for (let r = 0; r < ROWS; r++) {
    stroke(255, map(r, 0, ROWS, 30, 255)); strokeWeight(r > ROWS - 6 ? 1.4 : 1);
    beginShape(); for (const p of pts[r]) vertex(p[0], p[1]); endShape();
  }
  stroke(255, 70); strokeWeight(1);
  for (let c = 0; c < COLS; c += 2) { beginShape(); for (let r = 0; r < ROWS; r++) vertex(pts[r][c][0], pts[r][c][1]); endShape(); }
}`);

  add('ORBIT HUD', 'telemetry', ['SIZE', 'ARC', 'SPIN', '—'], `
let rings = [];
function setup() {
  createCanvas(windowWidth, windowHeight); textFont('monospace');
  for (let i = 0; i < 14; i++) rings.push({ r: 0.08 + i * 0.055, s: random(-1, 1), a0: random(TAU), len: random(0.3, 1.8), w: random([1, 1, 2, 3, 6]), ticks: random() < 0.3 });
}
function draw() {
  background(0); translate(width / 2, height / 2); noFill();
  const R = min(width, height) * (0.45 + vx.a * 0.4);
  rings.forEach((g, i) => {
    const rot = g.a0 + vx.t * g.s * (0.2 + vx.c * 1.5) + vx.pulse * g.s * 0.5;
    const d = g.r * R * 2 * (1 + vx.pulse * 0.05 * (i % 2 ? 1 : -1));
    stroke(255, 110 + 145 * ((i % 3) / 2));
    if (g.ticks) {
      strokeWeight(1);
      for (let k = 0; k < 120 * g.len / TAU; k++) {
        const a = rot + k / 60 * TAU, l = k % 5 ? 4 : 11;
        line(cos(a) * d / 2, sin(a) * d / 2, cos(a) * (d / 2 + l), sin(a) * (d / 2 + l));
      }
    } else {
      strokeWeight(g.w * (1 + vx.bass * 1.5));
      arc(0, 0, d, d, rot, rot + g.len * (0.4 + vx.b * 1.2) + vx.level);
    }
  });
  noStroke(); fill(255); textSize(11);
  text('V3X / ORBIT  ' + nf(vx.bpm, 3, 0) + ' BPM  LVL ' + nf(floor(vx.level * 100), 2), -width / 2 + 24, height / 2 - 24);
}`);

  add('ATTRACTOR', 'chaos · slow', ['SHAPE A', 'SHAPE B', 'SHAPE C', 'TRAIL'], `
// Clifford attractor; the knobs bend its constants, the bass pushes it around.
let x = 0.1, y = 0.1;
function setup() { createCanvas(windowWidth, windowHeight); background(0); }
function draw() {
  noStroke(); fill(0, 8 + (1 - vx.d) * 40); rect(0, 0, width, height);
  const A = -1.8 + vx.a * 0.7 + sin(vx.t * 0.05) * 0.3, B = 1.2 + vx.b * 0.7;
  const C = -0.2 + vx.c * 1.3 + vx.bass * 0.3, D = -1.2 + cos(vx.t * 0.07) * 0.4;
  stroke(255, 35 + vx.level * 90); strokeWeight(1);
  const s = min(width, height) * 0.21;
  beginShape(POINTS);
  for (let i = 0; i < 4000; i++) {
    const nx = sin(A * y) + C * cos(A * x), ny = sin(B * x) + D * cos(B * y);
    x = nx; y = ny; vertex(width / 2 + x * s, height / 2 + y * s);
  }
  endShape();
}`);

  add('SCAN BARS', 'bars · level', ['THICK', 'GAP', 'SPEED', 'SHIFT'], `
function setup() { createCanvas(windowWidth, windowHeight); noStroke(); }
function draw() {
  background(0); fill(255);
  let y = 0, i = 0;
  while (y < height) {
    const h = 2 + pow(noise(i * 0.3, vx.t * 0.3 * (0.2 + vx.c)), 3) * height * 0.16 * (0.3 + vx.a);
    if (noise(i * 0.7, vx.t * (0.4 + vx.c * 3)) > 0.56 - vx.level * 0.4 - vx.pulse * 0.2) {
      const w = width * noise(i * 1.3, vx.t * 0.7), x = (noise(i * 2.1, vx.t) * 2 - 0.5) * width * vx.d;
      rect(x, y, w, h);
      if (vx.pulse > 0.6) rect(0, y, width, max(1, h * 0.15));
    }
    y += h + 1 + vx.b * 8; i++;
  }
}`);

  add('DATA RAIN', 'type · high', ['SIZE', '—', 'SPEED', 'FADE'], `
let cols = [], fs = 16;
const CH = '0123456789ABCDEFV3X0ID/|-+=<>';
function size() { return floor(lerp(30, 10, vx.a)); }
function init() { fs = size(); cols = []; for (let i = 0; i < width / fs; i++) cols.push({ y: random(-height, 0), sp: random(0.5, 1.5) }); }
function setup() { createCanvas(windowWidth, windowHeight); textFont('monospace'); init(); }
function windowResized() { init(); }
function draw() {
  noStroke(); fill(0, 30 + vx.d * 140); rect(0, 0, width, height);
  if (abs(fs - size()) > 1) init();
  textSize(fs);
  cols.forEach((c, i) => {
    fill(255, 140 + random(115)); text(CH.charAt(floor(random(CH.length))), i * fs, c.y);
    if (random() < 0.01 + vx.high * 0.5) { fill(255); rect(i * fs, c.y - fs, fs * 0.8, fs * 0.9); }
    c.y += fs * c.sp * (0.3 + vx.c * 1.5 + vx.bass * 2 + vx.pulse);
    if (c.y > height + random(200)) c.y = random(-200, 0);
  });
}`);

  add('MOIRE', 'lines · optical', ['WEIGHT', 'SPACING', 'SPIN', 'SKEW'], `
function grid(a, g) {
  push(); translate(width / 2, height / 2); rotate(a);
  const R = dist(0, 0, width, height);
  for (let x = -R; x < R; x += g) line(x, -R, x, R);
  pop();
}
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0); stroke(255); strokeWeight(1 + vx.a * 3);
  const g = 6 + vx.b * 22;
  grid(vx.t * 0.03 * (vx.c - 0.5) * 4, g);
  grid(sin(vx.t * 0.1) * 0.05 * (1 + vx.d * 4) + vx.pulse * 0.03 + vx.bass * 0.05, g * (1 + vx.level * 0.08));
}`);

  add('HARMONOGRAPH', 'curves', ['RATIO X', 'RATIO Y', 'PHASE', 'DECAY'], `
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0, 70); translate(width / 2, height / 2); noFill(); stroke(255, 210); strokeWeight(1.2);
  const R = min(width, height) * 0.42 * (1 + vx.pulse * 0.06);
  const f1 = 2 + floor(vx.a * 5), f2 = 3 + floor(vx.b * 5), ph = vx.t * 0.3 * (0.2 + vx.c);
  beginShape();
  for (let i = 0; i < 2400; i++) {
    const t = i * 0.02, d = exp(-t * 0.02 * (0.3 + vx.d));
    vertex(R * d * sin(f1 * t + ph) * (1 + vx.bass * 0.2), R * d * sin(f2 * t));
  }
  endShape();
}`);

  add('AUTOMATA', 'cells · rule', ['CELL', 'RULE', 'SEEDING', '—'], `
const RULES = [30, 90, 110, 45, 73, 150, 105, 22];
let row = [], rule = 30, cs = 6;
function init() {
  cs = floor(lerp(12, 3, vx.a)); rule = RULES[floor(vx.b * 7.99)];
  row = new Array(ceil(width / cs)).fill(0); row[floor(row.length / 2)] = 1;
  background(0);
}
function setup() { createCanvas(windowWidth, windowHeight); noStroke(); init(); }
function windowResized() { init(); }
function draw() {
  if (RULES[floor(vx.b * 7.99)] !== rule || floor(lerp(12, 3, vx.a)) !== cs) init();
  copy(0, cs, width, height - cs, 0, 0, width, height - cs);
  fill(0); rect(0, height - cs, width, cs); fill(255);
  row.forEach((v, i) => { if (v) rect(i * cs, height - cs, cs, cs); });
  const n = row.length;
  row = row.map((v, i) => (rule >> (row[(i - 1 + n) % n] * 4 + v * 2 + row[(i + 1) % n])) & 1);
  if (vx.kick && random() < 0.3 + vx.c * 0.7) for (let k = 0; k < 3; k++) row[floor(random(n))] = 1;
}`);

  add('PULSE RINGS', 'shapes · kick', ['WEIGHT', 'SQUARES', 'SPEED', 'TRAIL'], `
let rings = [];
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0, 30 + (1 - vx.d) * 160); noFill(); translate(width / 2, height / 2);
  if (vx.kick) rings.push({ r: 0, sq: random() < vx.b, w: 1 + vx.bass * 12, rot: random(TAU) });
  const far = dist(0, 0, width, height) * 1.05; // gone once it has cleared the corners
  rings = rings.filter(g => g.r < far).slice(-24);
  for (const g of rings) {
    g.r += 6 + vx.c * 30 + vx.level * 20;
    stroke(255, map(g.r, 0, far, 255, 20)); strokeWeight(min(8, g.w * (0.5 + vx.a)));
    push(); rotate(g.rot + vx.t * 0.2);
    if (g.sq) rect(-g.r / 2, -g.r / 2, g.r, g.r); else ellipse(0, 0, g.r, g.r);
    pop();
  }
}`);

  add('WIRE GLOBE', '3d · orbit', ['DETAIL', 'RING', 'SPIN', 'RING W'], `
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  background(0); noFill(); stroke(255); strokeWeight(1);
  const R = min(width, height) * 0.3 * (1 + vx.pulse * 0.08 + vx.bass * 0.15);
  rotateY(vx.t * (0.1 + vx.c * 0.8)); rotateX(vx.t * 0.13);
  const d = floor(6 + vx.a * 24);
  sphere(R, d, floor(d * 0.7));
  rotateZ(vx.t * 0.3); stroke(255, 130);
  torus(R * 1.4 * (1 + vx.b * 0.5), 1 + vx.d * 20, 48, 4);
}`);

  root.VXGEN_LIBRARY = L;
})(typeof window !== 'undefined' ? window : this);
