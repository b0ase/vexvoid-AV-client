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

  // ---- lit 3D: solid geometry under real lights (p5 WEBGL), still monochrome ----
  add('MONOLITHS', '3d · lit · bass', ['GRID', 'HEIGHT', 'ORBIT', 'TILT'], `
// A city of lit monoliths. Heights ride slow noise and the bass; every kick sends a bright ring out from the centre.
let waves = [];
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  background(0);
  const n = floor(10 + vx.a * 20), cell = min(width, height) * 1.5 / n, span = cell * n;
  if (vx.kick) waves.push(0);
  waves = waves.map(w => w + 0.25 + vx.c * 0.4).filter(w => w < n);
  const ang = vx.t * (0.04 + vx.c * 0.25);
  camera(cos(ang) * span * 1.1, -span * (0.45 + vx.d * 0.6), sin(ang) * span * 1.1, 0, -span * 0.08, 0, 0, 1, 0);
  ambientLight(26);
  directionalLight(255, 255, 255, -0.4, 0.9, -0.3);
  directionalLight(90, 90, 90, 0.6, 0.3, 0.8);
  noStroke();
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const r = dist(i, j, (n - 1) / 2, (n - 1) / 2);
    let h = noise(i * 0.17, j * 0.17, vx.t * 0.12) * (0.5 + vx.bass * 1.5), glow = 0;
    for (const w of waves) { const k = max(0, 1 - abs(r - w)); h += k * 0.3; glow = max(glow, k); }
    h = cell * (0.25 + h * (1.5 + vx.b * 9));
    push(); translate((i - n / 2 + 0.5) * cell, -h / 2, (j - n / 2 + 0.5) * cell);
    emissiveMaterial(glow * 170); fill(70 + glow * 120); specularMaterial(220); shininess(25);
    box(cell * 0.8, h, cell * 0.8); pop();
  }
}`);

  add('LIQUID CHROME', '3d · shader · bass', ['BLOBS', 'MELT', 'FLOW', 'GLOSS'], `
// Liquid chrome on the GPU: ray-marched metaballs melting into each other, reflecting a studio of strip lights.
// The bass swells it, kicks ripple the surface. (A fragment shader: smooth at full resolution.)
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uT, uBass, uPulse, uA, uB, uC, uD;
float smin(float a, float b, float k) { float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0); return mix(b, a, h) - k * h * (1.0 - h); }
float map(vec3 p) {
  float t = uT * (0.25 + uC * 1.1);
  float d = length(p) - (0.85 + uBass * 0.3 + uPulse * 0.08);
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    if (fi > 1.0 + uA * 5.0) break;
    vec3 c = vec3(sin(t * 0.7 + fi * 1.7), cos(t * 0.9 + fi * 2.3), sin(t * 0.5 + fi * 3.1)) * (0.7 + uA * 0.7);
    d = smin(d, length(p - c) - (0.32 + 0.12 * sin(fi * 1.3 + t)), 0.35 + uB * 0.7);
  }
  return d + sin(p.x * 7.0 + uT * 3.0) * sin(p.y * 7.0) * sin(p.z * 7.0) * 0.025 * uPulse;
}
vec3 nrm(vec3 p) { vec2 e = vec2(0.0015, 0.0); return normalize(vec3(map(p + e.xyy) - map(p - e.xyy), map(p + e.yxy) - map(p - e.yxy), map(p + e.yyx) - map(p - e.yyx))); }
float env(vec3 r) {
  float v = 0.07 + 0.75 * smoothstep(-0.25, 1.0, r.y);
  float a = atan(r.z, r.x);
  v += pow(max(0.0, sin(a * 3.0 + uT * 0.15)), 60.0) * smoothstep(-0.2, 0.5, r.y) * 1.6;
  v += smoothstep(0.96, 1.0, r.y) * 1.2;
  v *= 1.0 - 0.55 * smoothstep(0.0, -0.6, r.y);
  v += 0.12 * smoothstep(-0.2, -0.05, r.y) * (1.0 - smoothstep(-0.05, 0.1, r.y)); // horizon line
  return v;
}
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  float ca = cos(uT * 0.12), sa = sin(uT * 0.12);
  vec3 ro = vec3(4.0 * sa, 0.4, 4.0 * ca), fw = normalize(-ro), rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw)), up = cross(fw, rt);
  vec3 rd = normalize(fw * 1.9 + rt * uv.x + up * uv.y);
  float t = 0.0, hit = 0.0;
  for (int i = 0; i < 90; i++) { float d = map(ro + rd * t); if (d < 0.001) { hit = 1.0; break; } t += d * 0.9; if (t > 9.0) break; }
  float col = 0.0;
  if (hit > 0.5) {
    vec3 p = ro + rd * t, n = nrm(p), r = reflect(rd, n);
    float fres = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
    col = env(r) * (0.55 + 0.45 * uD) + fres * 0.35 + max(dot(n, normalize(vec3(-0.5, 0.8, 0.4))), 0.0) * 0.08 * (1.0 - uD);
  } else col = 0.02 * (1.0 - length(uv) * 0.4);
  gl_FragColor = vec4(vec3(col), 1.0);
}\`;
let sh, bass = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  bass += (vx.bass - bass) * 0.15;
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uT', vx.t); sh.setUniform('uBass', bass); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uC', vx.c); sh.setUniform('uD', vx.d);
  rect(0, 0, width, height);
}`);

  add('SHARD STORM', '3d · lit · kick', ['COUNT', 'SPREAD', 'SPEED', 'ROLL'], `
// Lit glass shards rushing at you out of the dark. Kicks blow the storm apart and speed it up.
let shards = [];
function make(far) { return { x: random(-1, 1), y: random(-1, 1), z: far ? random(-1, 0.1) : -1, rx: random(TWO_PI), ry: random(TWO_PI), s: random(0.3, 1), vr: random(-1, 1) }; }
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  const n = floor(80 + vx.a * 520);
  while (shards.length < n) shards.push(make(true));
  shards.length = n;
  background(0);
  const D = max(width, height) * 2, sp = 0.002 + vx.c * 0.02 + vx.level * 0.015;
  ambientLight(30);
  directionalLight(255, 255, 255, 0.3, 0.6, -1);
  pointLight(255, 255, 255, 0, 0, 300);
  noStroke(); fill(190); specularMaterial(255); shininess(90);
  rotateZ(vx.t * (vx.d - 0.5) * 0.6);
  for (const s of shards) {
    s.z += sp * (1 + vx.pulse * 3); s.rx += 0.02 * s.vr; s.ry += 0.03 * s.vr;
    if (vx.kick) { s.x *= 1.06; s.y *= 1.06; }
    if (s.z > 0.2 || abs(s.x) > 3 || abs(s.y) > 3) Object.assign(s, make(false));
    push(); translate(s.x * width * 0.6 * (0.5 + vx.b), s.y * height * 0.6 * (0.5 + vx.b), s.z * D);
    rotateX(s.rx); rotateY(s.ry);
    const k = min(width, height) * 0.05 * s.s;
    beginShape(TRIANGLES); normal(0, 0, 1); vertex(-k, -k * 0.6, 0); vertex(k, -k * 0.2, 0); vertex(0, k, 0); endShape();
    pop();
  }
}`);

  add('V3X MONUMENT', '3d · lit · type', ['SIZE', 'BLAST', 'SWING', 'GLOSS'], `
// The V3X mark as a lit stone monument, turning slowly. Every kick knocks the pieces apart; they fall back into place.
const GL = { V: [[[0, 1], [0.5, 0], [1, 1]]], '3': [[[0, 1], [1, 1], [0.42, 0.56], [1, 0.5], [1, 0], [0, 0]]], X: [[[0, 0], [1, 1]], [[1, 0], [0, 1]]] };
let segs = null, blast = 0;
function build() {
  segs = [];
  ['V', '3', 'X'].forEach((ch, i) => GL[ch].forEach(line => { for (let k = 1; k < line.length; k++) {
    const [u0, v0] = line[k - 1], [u1, v1] = line[k];
    segs.push({ x0: i * 0.86 + u0 * 0.62, y0: v0, x1: i * 0.86 + u1 * 0.62, y1: v1, d: [random(-1, 1), random(-1, 1), random(-1, 1)] });
  } }));
}
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  if (!segs) build();
  background(0);
  if (vx.kick) blast = 1;
  blast *= 0.9;
  const H = min(width / 3.4, height * 0.5) * (0.6 + vx.a * 0.6), th = H * 0.11;
  rotateY(sin(vx.t * (0.1 + vx.c * 0.6)) * 0.8); rotateX(-0.12 + sin(vx.t * 0.07) * 0.1);
  ambientLight(22);
  directionalLight(255, 255, 255, -0.6, 0.5, -0.7);
  pointLight(255, 255, 255, H * 2, -H * 2, H * 2);
  pointLight(80, 80, 80, -H * 2, H, H);
  noStroke(); fill(165); specularMaterial(255); shininess(8 + vx.d * 150);
  const b = blast * (0.2 + vx.b * 1.2);
  for (const s of segs) {
    const len = dist(s.x0, s.y0, s.x1, s.y1), a = atan2(s.y1 - s.y0, s.x1 - s.x0);
    push();
    translate(((s.x0 + s.x1) / 2 - 1.17) * H + s.d[0] * b * H, -((s.y0 + s.y1) / 2 - 0.5) * H + s.d[1] * b * H, s.d[2] * b * H);
    rotateX(s.d[0] * b * 3); rotateZ(-a);
    box(len * H + th, th, th * (1.6 + vx.bass * 1.5));
    pop();
  }
}`);

  // ---- preset pack (14 Nov): more variety for the VEXVOID gallery ----
  add('CODE RAIN', 'type · high', ['DENSITY', 'SIZE', 'SPEED', 'TRAIL'], `
// Columns of glyphs falling; the hats and the level push the speed, kicks flash a column white.
let cols = [], last = 0;
const G = '01アイウエオカキクケコサシスセソ<>/\\\\|=+-*V3X';
function setup() { createCanvas(windowWidth, windowHeight); textFont('monospace'); }
function draw() {
  const s = 10 + vx.b * 22, n = floor(width / s * (0.4 + vx.a * 0.6));
  if (cols.length !== n) cols = Array.from({ length: n }, () => ({ y: random(-height, 0), v: random(0.5, 1.5), hot: 0 }));
  background(0, 255 * (0.12 + (1 - vx.d) * 0.6));
  textSize(s); textAlign(CENTER, TOP); noStroke();
  cols.forEach((c, i) => {
    if (vx.kick && random() < 0.08) c.hot = 1;
    c.y += c.v * s * (0.15 + vx.c * 0.8 + vx.high * 0.8);
    if (c.y > height + s * 10) { c.y = random(-height * 0.5, 0); c.v = random(0.5, 1.5); }
    for (let k = 0; k < 12; k++) {
      fill(255, (k === 0 ? 255 : 160 - k * 12) * (c.hot ? 1 : 0.8));
      text(G[floor(random(G.length))], (i + 0.5) * width / n, c.y - k * s);
    }
    c.hot *= 0.9;
  });
}`);

  add('STATIC STORM', 'noise · kick', ['BLOCKS', 'SIZE', 'BANDS', 'DECAY'], `
// Blocks of static that thicken with the level; a kick tears a band across the screen.
let band = 0, by = 0;
function setup() { createCanvas(windowWidth, windowHeight); noStroke(); }
function draw() {
  background(0, 60 + vx.d * 195);
  const n = floor(80 + vx.a * 900 * (0.3 + vx.level)), s = 2 + vx.b * 24;
  for (let i = 0; i < n; i++) { fill(random(255), random(40, 220)); rect(random(width), random(height), s * random(0.5, 4), s * random(0.3, 1)); }
  if (vx.kick) { band = 1; by = random(height); }
  if (band > 0.05) {
    const h = height * (0.04 + vx.c * 0.3) * band;
    for (let x = 0; x < width; x += s * 2) { fill(255 * random(0.4, 1)); rect(x, by - h / 2 + random(-4, 4), s * 2, h); }
    band *= 0.82;
  }
}`);

  add('PLASMA LINES', 'waves · bass', ['LINES', 'FOLD', 'SPEED', 'GLOW'], `
// Stacked contour lines of a moving field; the bass deepens the folds.
function setup() { createCanvas(windowWidth, windowHeight); noFill(); }
function draw() {
  background(0);
  const rows = floor(20 + vx.a * 60), t = vx.t * (0.2 + vx.c), amp = height * (0.02 + vx.b * 0.12) * (1 + vx.bass * 2);
  for (let r = 0; r < rows; r++) {
    const y0 = (r + 0.5) * height / rows;
    stroke(255, 60 + 195 * vx.d * (r % 4 === 0 ? 1 : 0.4)); strokeWeight(r % 4 === 0 ? 1.6 : 0.8);
    beginShape();
    for (let x = 0; x <= width; x += 8) {
      const v = sin(x * 0.006 + t + r * 0.3) + sin(x * 0.011 - t * 1.3 + r * 0.17) + noise(x * 0.003, r * 0.1, t * 0.3) * 2;
      vertex(x, y0 + v * amp);
    }
    endShape();
  }
}`);

  add('NEURAL NET', 'nodes · mid', ['NODES', 'REACH', 'SPEED', 'PULSES'], `
// Drifting nodes linked by distance; signals run along the links on every kick.
let N = [], P = [];
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  const n = floor(30 + vx.a * 170);
  while (N.length < n) N.push({ x: random(width), y: random(height), a: random(TWO_PI) });
  N.length = n;
  background(0);
  const reach = min(width, height) * (0.06 + vx.b * 0.2), sp = 0.3 + vx.c * 2 + vx.mid * 2;
  N.forEach(p => { p.a += noise(p.x * 0.002, p.y * 0.002, vx.t * 0.1) - 0.5; p.x = (p.x + cos(p.a) * sp + width) % width; p.y = (p.y + sin(p.a) * sp + height) % height; });
  strokeWeight(1);
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    const d = dist(N[i].x, N[i].y, N[j].x, N[j].y);
    if (d < reach) {
      stroke(255, 160 * (1 - d / reach)); line(N[i].x, N[i].y, N[j].x, N[j].y);
      if (vx.kick && random() < 0.02 + vx.d * 0.1) P.push({ a: N[i], b: N[j], t: 0 });
    }
  }
  noStroke(); fill(255);
  N.forEach(p => circle(p.x, p.y, 2.5));
  P = P.filter(q => (q.t += 0.05) < 1);
  P.forEach(q => circle(lerp(q.a.x, q.b.x, q.t), lerp(q.a.y, q.b.y, q.t), 6));
}`);

  add('FLOOR GRID', '3d · speed', ['DENSITY', 'HEIGHT', 'SPEED', 'ROLL'], `
// An endless technical floor grid rushing under the camera; the bass lifts ridges out of it.
let z = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  background(0);
  const n = floor(16 + vx.a * 40), cell = max(width, height) * 2 / n;
  z = (z + cell * (0.02 + vx.c * 0.25) * (1 + vx.pulse)) % cell;
  rotateX(PI / 2.6); rotateZ(sin(vx.t * 0.2) * vx.d * 0.5);
  translate(0, -cell * n / 2 + z, -height * 0.25);
  noFill();
  for (let j = 0; j < n; j++) {
    stroke(255, 255 * (j / n)); strokeWeight(1);
    beginShape();
    for (let i = 0; i <= n; i++) {
      const x = (i - n / 2) * cell, y = j * cell;
      const h = noise(i * 0.2, (j - z / cell) * 0.2, vx.t * 0.2) * cell * (vx.b * 3) * (0.4 + vx.bass * 2);
      vertex(x, y, h);
    }
    endShape();
  }
}`);

  add('SPECTRUM', 'audio · bars', ['BARS', 'GAIN', 'FALL', 'MIRROR'], `
// A spectrum analyser look: bars across the floor, low end on the left, peaks that hang and fall.
let pk = [];
function setup() { createCanvas(windowWidth, windowHeight); noStroke(); }
function draw() {
  background(0);
  const n = floor(16 + vx.a * 112), w = width / n;
  if (pk.length !== n) pk = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const f = i / n, band = f < 0.33 ? vx.bass : f < 0.66 ? vx.mid : vx.high;
    const v = constrain(band * (0.6 + vx.b * 2) * (0.7 + noise(i * 0.3, vx.t * 3) * 0.6) + vx.pulse * 0.15, 0, 1);
    pk[i] = max(pk[i] - (0.005 + vx.c * 0.03), v);
    const h = v * height * 0.85;
    fill(255, 220);
    if (vx.d > 0.5) { rect(i * w + 1, height / 2 - h / 2, w - 2, h); fill(255); rect(i * w + 1, height / 2 - pk[i] * height * 0.425 - 2, w - 2, 2); }
    else { rect(i * w + 1, height - h, w - 2, h); fill(255); rect(i * w + 1, height - pk[i] * height * 0.85 - 3, w - 2, 2); }
  }
}`);

  add('OSCILLOSCOPE', 'audio · lines', ['TRACES', 'GAIN', 'SPEED', 'PERSIST'], `
// Oscilloscope traces: stacked waves that bite with the level and split apart on the kick.
function setup() { createCanvas(windowWidth, windowHeight); noFill(); }
function draw() {
  background(0, 30 + (1 - vx.d) * 225);
  const traces = 1 + floor(vx.a * 5), amp = height * (0.05 + vx.b * 0.3) * (0.3 + vx.level * 1.4), t = vx.t * (1 + vx.c * 8);
  for (let k = 0; k < traces; k++) {
    stroke(255, 255 - k * 30); strokeWeight(k ? 1 : 2);
    const off = (k - (traces - 1) / 2) * height * 0.12 * (1 + vx.pulse * 2);
    beginShape();
    for (let x = 0; x <= width; x += 3) {
      const u = x / width * TWO_PI * (2 + k);
      vertex(x, height / 2 + off + (sin(u + t) * 0.6 + sin(u * 3.1 - t * 1.7) * 0.3 * vx.high + sin(u * 0.5 + t * 0.3) * vx.bass) * amp);
    }
    endShape();
  }
}`);

  add('RADAR', 'telemetry · kick', ['RINGS', 'SWEEP', 'SPEED', 'BLIPS'], `
// A radar scope: rings, a sweeping beam with a fading wake, contacts that appear on the kicks.
let blips = [];
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0);
  translate(width / 2, height / 2);
  const R = min(width, height) * 0.46, a = vx.t * (0.5 + vx.c * 3), rings = 2 + floor(vx.a * 8);
  noFill(); stroke(255, 70); strokeWeight(1);
  for (let i = 1; i <= rings; i++) circle(0, 0, 2 * R * i / rings);
  line(-R, 0, R, 0); line(0, -R, 0, R);
  const wake = 0.3 + vx.b * 1.2;
  for (let k = 0; k < 40; k++) { stroke(255, 200 * (1 - k / 40)); const b = a - k * wake / 40; line(0, 0, cos(b) * R, sin(b) * R); }
  if (vx.kick) for (let i = 0; i < 1 + floor(vx.d * 6); i++) blips.push({ a: a - random(0.05), r: random(0.15, 0.95) * R, life: 1 });
  noStroke();
  blips = blips.filter(p => (p.life -= 0.006) > 0);
  blips.forEach(p => { fill(255, 255 * p.life); circle(cos(p.a) * p.r, sin(p.a) * p.r, 8); noFill(); stroke(255, 120 * p.life); circle(cos(p.a) * p.r, sin(p.a) * p.r, 30 * (1 - p.life) + 8); noStroke(); });
}`);

  add('STARFIELD', '3d · speed', ['STARS', 'STREAK', 'SPEED', 'SPIN'], `
// Flying through stars; the level is the throttle, kicks jump to light speed for a moment.
let S = [];
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  const n = floor(200 + vx.a * 2300);
  while (S.length < n) S.push({ x: random(-1, 1), y: random(-1, 1), z: random(0.05, 1) });
  S.length = n;
  background(0, 255 * (0.25 + (1 - vx.b) * 0.75));
  translate(width / 2, height / 2); rotate(vx.t * (vx.d - 0.5) * 0.4);
  const sp = 0.002 + vx.c * 0.02 + vx.level * 0.01 + vx.pulse * 0.03, k = max(width, height) * 0.5;
  S.forEach(s => {
    const pz = s.z; s.z -= sp;
    if (s.z <= 0.02) { s.x = random(-1, 1); s.y = random(-1, 1); s.z = 1; return; }
    stroke(255, 255 * (1 - s.z)); strokeWeight(max(0.5, 2.5 * (1 - s.z)));
    line(s.x / pz * k, s.y / pz * k, s.x / s.z * k, s.y / s.z * k);
  });
}`);

  add('KALEIDO', 'symmetry · mid', ['SEGMENTS', 'ZOOM', 'SPIN', 'DETAIL'], `
// A kaleidoscope of thin strokes: one wedge drawn from noise, mirrored round the centre.
function setup() { createCanvas(windowWidth, windowHeight); noFill(); }
function draw() {
  background(0);
  translate(width / 2, height / 2);
  const seg = 2 * (3 + floor(vx.a * 9)), R = min(width, height) * 0.5 * (0.6 + vx.b * 0.8), lines = 6 + floor(vx.d * 24);
  rotate(vx.t * (vx.c - 0.5) * 0.6);
  for (let s = 0; s < seg; s++) {
    push(); rotate(TWO_PI * s / seg); if (s % 2) scale(1, -1);
    for (let l = 0; l < lines; l++) {
      stroke(255, 60 + 195 * (l / lines)); strokeWeight(l % 5 ? 0.8 : 1.8);
      beginShape();
      for (let r = 0; r < R; r += R / 40) {
        const a = (noise(l * 0.3, r * 0.004, vx.t * 0.3) - 0.5) * PI / seg * 2 * (1 + vx.mid);
        vertex(cos(a) * r, sin(a) * r);
      }
      endShape();
    }
    pop();
  }
}`);

  add('HEX GRID', 'grid · kick', ['CELLS', 'WAVE', 'SPEED', 'FILL'], `
// A honeycomb that lights in rings from the centre on every kick.
let waves = [];
function hex(x, y, r) { beginShape(); for (let i = 0; i < 6; i++) vertex(x + r * cos(PI / 3 * i + PI / 6), y + r * sin(PI / 3 * i + PI / 6)); endShape(CLOSE); }
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0);
  const r = min(width, height) / (8 + vx.a * 40), w = sqrt(3) * r, h = 1.5 * r;
  if (vx.kick) waves.push(0);
  waves = waves.map(v => v + (4 + vx.c * 20)).filter(v => v < max(width, height));
  for (let y = 0, row = 0; y < height + h; y += h, row++) for (let x = (row % 2) * w / 2; x < width + w; x += w) {
    const d = dist(x, y, width / 2, height / 2);
    let g = 0; waves.forEach(v => { g = max(g, 1 - abs(d - v) / (r * (1 + vx.b * 6))); });
    g = max(g, noise(x * 0.004, y * 0.004, vx.t * 0.2) * vx.level * 0.6);
    stroke(255, 40 + 200 * g); strokeWeight(1);
    if (g > 0.3 && vx.d > 0.2) fill(255, 255 * g * vx.d); else noFill();
    hex(x, y, r * 0.92);
  }
}`);

  add('LIGHT BEAMS', 'stage · bass', ['BEAMS', 'WIDTH', 'SWING', 'HAZE'], `
// Stage beams from the floor cutting through haze, swinging on the music; the kick snaps them up.
function setup() { createCanvas(windowWidth, windowHeight); noStroke(); blendMode(ADD); }
function draw() {
  blendMode(BLEND); background(0); blendMode(ADD);
  const n = 2 + floor(vx.a * 14), wid = 0.02 + vx.b * 0.12;
  for (let i = 0; i < n; i++) {
    const bx = (i + 0.5) * width / n, sw = sin(vx.t * (0.3 + vx.c * 2) + i * 1.3) * 0.6 * (0.5 + vx.bass), a = -HALF_PI + sw + (vx.pulse * (i % 2 ? 0.2 : -0.2));
    for (let k = 0; k < 6; k++) {
      fill(255, (12 + vx.d * 18) * (1 - k / 6) * (0.6 + vx.level));
      const L = height * 1.6, half = wid * (1 + k * 0.6);
      triangle(bx, height, bx + cos(a - half) * L, height + sin(a - half) * L, bx + cos(a + half) * L, height + sin(a + half) * L);
    }
  }
}`);

  add('TYPE SLAM', 'type · kick', ['SIZE', 'WORDS', 'HOLD', 'SPLIT'], `
// One word slams onto the screen on each kick and shudders out; the words are the VexVoid vocabulary.
const W = ['V3XV0ID', 'VOID', 'SIGNAL', 'NOISE', 'NIGHT', 'CONCRETE', 'STATIC', 'NO FACE', 'LIVE', 'OUTPUT'];
let w = 'V3XV0ID', hit = 0, i = 0;
function setup() { createCanvas(windowWidth, windowHeight); textAlign(CENTER, CENTER); textStyle(BOLD); }
function draw() {
  background(0);
  if (vx.kick) { hit = 1; i = (i + 1) % max(1, floor(1 + vx.b * (W.length - 1))); w = W[i]; }
  const s = min(width / max(4, w.length) * 1.5, height * 0.5) * (0.5 + vx.a * 0.6) * (1 + hit * 0.25);
  textSize(s); noStroke();
  const split = vx.d * 40 * hit;
  fill(255, 90); text(w, width / 2 - split, height / 2); text(w, width / 2 + split, height / 2);
  fill(255, 255 * max(0.15, hit)); text(w, width / 2 + random(-6, 6) * hit, height / 2 + random(-4, 4) * hit);
  hit *= 0.86 + vx.c * 0.12;
}`);

  root.VXGEN_LIBRARY = L;
})(typeof window !== 'undefined' ? window : this);
