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

  add('V3X CONSTRUCTION', 'type · grid · bar', ['SIZE', 'GRID', 'PACE', 'FILL'], `
// The V3X mark drawn up like a type specimen: each letter built from modular blocks on a hairline grid, one per
// bar (PACE stretches it), then the whole mark. Outlines trace in, panels fill, guides run off the edges, a spec
// sheet sits beside it. Kicks pulse the registration cross. Dark greys, not pure white.
// Letters on a 4 x 6 module grid, y down: rect [x, y, w, h] or polygon [[x, y], ...]
const L = {
  V: [[0, 0, 1, 1], [3, 0, 1, 1], [[0, 1], [1, 1], [2, 4.4], [3, 1], [4, 1], [2.55, 6], [1.45, 6]]],
  '3': [[0, 0, 4, 1], [[2.7, 1], [4, 1], [2.9, 2.5], [1.6, 2.5]], [1.6, 2.5, 2.4, 1], [3, 3.5, 1, 1.5], [0, 5, 4, 1]],
  X: [[[0, 0], [1.15, 0], [4, 6], [2.85, 6]], [[2.85, 0], [4, 0], [1.15, 6], [0, 6]]]
};
const SEQ = ['V', '3', 'X', 'MARK'];
let bars = 0, lastBar = 0, reg;
function setup() { createCanvas(windowWidth, windowHeight); reg = 'V3X-' + nf(vx.seed % 10000, 4) + '-' + nf(floor(vx.seed / 7) % 10000, 4); }
function pts(b) { return Array.isArray(b[0]) ? b : [[b[0], b[1]], [b[0] + b[2], b[1]], [b[0] + b[2], b[1] + b[3]], [b[0], b[1] + b[3]]]; }
function ease(x) { x = constrain(x, 0, 1); return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2; }
// an outline traced to fraction f of its perimeter
function trace(P, f) {
  let total = 0; const seg = [];
  for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], l = dist(a[0], a[1], b[0], b[1]); seg.push(l); total += l; }
  let rem = total * f; beginShape(); vertex(P[0][0], P[0][1]);
  for (let i = 0; i < P.length && rem > 0; i++) { const a = P[i], b = P[(i + 1) % P.length], k = min(1, rem / seg[i]); vertex(lerp(a[0], b[0], k), lerp(a[1], b[1], k)); rem -= seg[i]; }
  endShape();
}
function letter(ch, x0, y0, m, u, fillA) {
  const blocks = L[ch], n = blocks.length;
  blocks.forEach((b, i) => {
    const P = pts(b).map(p => [x0 + p[0] * m, y0 + p[1] * m]);
    const s = i / n * 0.45, out = ease((u - s) / 0.22), fil = ease((u - s - 0.18) / 0.25);
    if (out <= 0) return;
    // construction guides: every edge extended across the frame, faint
    stroke(255, 22 * out); strokeWeight(1);
    P.forEach((p, k) => { const q = P[(k + 1) % P.length], dx = q[0] - p[0], dy = q[1] - p[1], l = max(1, sqrt(dx * dx + dy * dy));
      line(p[0] - dx / l * 4000, p[1] - dy / l * 4000, q[0] + dx / l * 4000, q[1] + dy / l * 4000); });
    noStroke(); fill(255, fillA * fil); beginShape(); P.forEach(p => vertex(p[0], p[1])); endShape(CLOSE);
    noFill(); stroke(235, 200 * out); strokeWeight(1.2); trace(P, out);
  });
}
function draw() {
  if (vx.bar < lastBar) bars++;
  lastBar = vx.bar;
  background(16);
  const per = [1, 2, 4][min(2, floor(vx.c * 3))], step = floor(bars / per), u = ((bars % per) + vx.bar) / per;
  const ch = SEQ[step % SEQ.length];
  // the hairline grid
  const sub = 6 + floor(vx.b * 12), g = height / sub;
  stroke(255, 10); strokeWeight(1);
  for (let x = width % g / 2; x < width; x += g) line(x, 0, x, height);
  for (let y = 0; y < height; y += g) line(0, y, width, y);
  // the letter, or the whole mark
  const fillA = 18 + vx.d * 120 + vx.bass * 25, H = min(height * (0.5 + vx.a * 0.35), width * 0.45);
  if (ch === 'MARK') {
    const m = min(H / 6 * 0.55, width * 0.72 / 14), gap = m * 1.1, w = m * 12 + gap * 2;
    ['V', '3', 'X'].forEach((c, i) => letter(c, width / 2 - w / 2 + i * (m * 4 + gap), height / 2 - m * 3, m, u * 1.3 - i * 0.12, fillA + 40));
  } else { const m = H / 6; letter(ch, width / 2 - m * 2, height / 2 - m * 3, m, u, fillA); }
  // registration cross, pulsed by the kick
  const c = 10 + vx.pulse * 14;
  stroke(255, 120 + vx.pulse * 135); strokeWeight(1);
  line(width / 2 - c, height / 2, width / 2 + c, height / 2); line(width / 2, height / 2 - c, width / 2, height / 2 + c);
  // the spec sheet
  const t = max(9, height / 80), x = 28, y = 30;
  noStroke(); fill(230); textFont('Michroma'); textSize(t * 1.9); text('V3X', x, y + t * 1.8);
  textFont('IBM Plex Mono'); textSize(t * 1.35); text('Construction', x + t * 6.2, y + t * 1.6); textSize(t * 0.85); fill(150);
  text('[ ' + (ch === 'MARK' ? 'V3X / MARK' : 'GLYPH ' + ch) + ' ]', x + t * 6.2, y + t * 3.2);
  const rows = [['MODULE', floor(g) + 'PX'], ['SUB-DIVISIONS', sub], ['REG. NO.', reg], ['DIVISION', '03 / SIGNAL'], ['CHANNEL', nf(vx.bpm, 3, 0) + ' BPM'], ['BAR', nf(bars + 1, 4)]];
  rows.forEach((r, i) => { fill(110); text(r[0], width - t * 30, y + t * 1.2 * (i + 1)); fill(190); text(r[1], width - t * 18, y + t * 1.2 * (i + 1)); });
  fill(110); text('+V-' + nf(step % 99 + 1, 2), x, height / 2 - 6); textAlign(RIGHT); text('V3XV0ID STUDIO', width - x, height / 2 - 6); textAlign(LEFT);
  stroke(255, 26); line(0, height / 2, width, height / 2);
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

  add('WIRE TUNNEL', '3d · shader · speed', ['SIDES', 'TWIST', 'SPEED', 'SWAY'], `
// A polygon tunnel on the GPU: lit wire edges and rings rushing past, bending as it flies.
// The bass pushes the speed, kicks send a ring of light down the tunnel. (A fragment shader.)
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uZ, uRot, uBass, uPulse, uA, uB, uD;
#define PI 3.14159265
float hash(float n) { return fract(sin(n * 91.345) * 47453.21); }
vec2 bend(float z) { return vec2(sin(z * 0.16) + sin(z * 0.067) * 0.7, cos(z * 0.13) * 0.8) * 3.2 * uD; }
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  float n = floor(3.0 + uA * 9.0), seg = 2.0 * PI / n, inr = cos(PI / n);
  vec2 cam = bend(uZ);
  float z = 1.0 / max(length(uv), 0.001), a = 0.0, r = 1.0;
  vec2 q = uv;
  for (int i = 0; i < 6; i++) {
    q = uv * z - (bend(uZ + z) - cam);
    a = atan(q.y, q.x) + uRot + (uZ + z) * (uB - 0.5) * 0.35;
    r = inr / cos(mod(a, seg) - seg * 0.5);
    z = clamp(z * r / max(length(q), 0.0001), 0.05, 80.0);
  }
  float along = uZ + z, around = a / seg, px = 2.0 / uRes.y;
  float pa = px * z * z / r * 1.6 + 0.004, pr = px * z * 1.6;
  float dr = abs(fract(along * 0.75 + 0.5) - 0.5) / 0.75;          // a ring every 1.33 units
  float de = abs(fract(around + 0.5) - 0.5) * 2.0 * sin(PI / n) * 2.0; // the polygon's corner edges
  float dp = abs(fract(around * 3.0 + 0.5) - 0.5) / 3.0 * sin(PI / n) * 2.0; // faint panel seams
  float ring = 1.0 - smoothstep(0.012, 0.012 + pa, dr);
  float edge = 1.0 - smoothstep(0.008, 0.008 + pr, de);
  float seam = (1.0 - smoothstep(0.003, 0.003 + pr, dp)) * 0.18;
  float face = floor(mod(around, n));
  float lit = exp(-z * 0.22);                                       // a headlight on the walls near us
  float col = (0.03 + 0.07 * hash(face)) * (0.4 + lit * 2.0) + 0.05 * (1.0 - smoothstep(0.0, 0.4, de));
  col += ring * (0.5 + uBass * 0.6) + edge * 1.0 + seam;
  col += exp(-dr / (pa * 3.0 + 0.04)) * 0.12 + exp(-de / (pr * 4.0 + 0.03)) * 0.18; // soft halo
  float ahead = (1.0 - uPulse) * 34.0;                              // the kick's light ring
  col += exp(-abs(z - ahead) * 1.4) * uPulse * 1.6;
  float miss = abs(length(q) - r);                                   // where the bend hides the far end, fade it
  col *= exp(-z * 0.05) * smoothstep(45.0, 20.0, z) * smoothstep(0.25, 0.02, miss);
  gl_FragColor = vec4(vec3(col), 1.0);
}\`;
let sh, z = 0, rot = 0, bass = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  const dt = min(deltaTime, 50) / 1000;
  bass += (vx.bass - bass) * 0.2;
  z += dt * (2 + vx.c * 22 + bass * 10);
  rot += dt * (vx.b - 0.5) * 0.6;
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uZ', z); sh.setUniform('uRot', rot);
  sh.setUniform('uBass', bass); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
  rect(0, 0, width, height);
}`);

  add('TERRAIN', '3d · shader · bass', ['HEIGHT', 'DETAIL', 'SPEED', 'TILT'], `
// Flying low over ridged mountains on the GPU: backlit rock traced with contour lines, a low sun in the haze.
// The bass lifts the peaks, kicks flash the contours. (A ray-marched fragment shader.)
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uT, uZ, uBass, uPulse, uA, uB, uD;
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float amp() { return 0.6 + uA * 1.6 + uBass * 0.5; }
float height(vec2 p, int oct) {
  p *= 0.22 * (0.5 + uB * 1.2);
  float h = 0.0, w = 0.5, s = 1.0;
  for (int i = 0; i < 7; i++) {
    if (i >= oct) break;
    float n = 1.0 - abs(noise(p) * 2.0 - 1.0);   // ridged: sharp crests
    h += n * n * w;
    p = mat2(1.6, 1.2, -1.2, 1.6) * p; w *= 0.5;
  }
  return h * amp();
}
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 ro = vec3(sin(uZ * 0.05) * 3.0, 0.0, uZ);
  ro.y = height(ro.xz + vec2(0.0, 2.0), 3) + 0.7 + amp() * 0.35;
  float pitch = -0.1 - uD * 0.45;
  vec3 fw = normalize(vec3(cos(uZ * 0.05) * 0.15, pitch, 1.0)), rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw)), up = cross(fw, rt);
  vec3 rd = normalize(fw * 1.5 + rt * uv.x + up * uv.y);
  vec3 sun = normalize(vec3(0.35, 0.06, 1.0));
  float t = 0.05, hit = 0.0;
  for (int i = 0; i < 110; i++) {
    vec3 p = ro + rd * t;
    float d = p.y - height(p.xz, 4);
    if (d < 0.002 * t) { hit = 1.0; break; }
    t += d * 0.45;
    if (t > 60.0) break;
  }
  // sky: near black overhead, haze on the horizon, a small hard sun with a wide glow
  float sd = max(dot(rd, sun), 0.0);
  float sky = 0.012 + 0.22 * pow(1.0 - max(rd.y, 0.0), 12.0);
  sky += smoothstep(0.9993, 0.9996, sd) * 1.2 + pow(sd, 60.0) * 0.35 + pow(sd, 6.0) * 0.08;
  float col = sky;
  if (hit > 0.5) {
    vec3 p = ro + rd * t;
    vec2 e = vec2(0.01, 0.0);
    vec3 n = normalize(vec3(height(p.xz - e.xy, 5) - height(p.xz + e.xy, 5), 2.0 * e.x, height(p.xz - e.yx, 5) - height(p.xz + e.yx, 5)));
    float dif = max(dot(n, sun), 0.0), rim = pow(1.0 - max(dot(n, -rd), 0.0), 3.0) * smoothstep(-0.2, 0.6, dot(rd, sun));
    float rock = 0.03 + dif * 0.32 + rim * 0.45;
    // contour lines every 0.12 in height, kept a steady width on screen by the slope
    // (traced on the broad shape of the land, not its grit, so the lines run smooth)
    float hs = height(p.xz, 3), k = 1.0 / 0.12;
    vec2 gr = vec2(height(p.xz + e.xy, 3) - hs, height(p.xz + e.yx, 3) - hs) / e.x;
    float dist = abs(fract(hs * k + 0.5) - 0.5) / (k * max(length(gr), 0.05));
    float px = t * 2.0 / uRes.y;
    float contour = (1.0 - smoothstep(px * 0.5, px * 1.3, dist)) * (0.5 + uPulse * 0.8) * exp(-t * 0.035);
    col = mix(sky, rock + contour, exp(-t * 0.04));
  }
  col *= 1.0 - 0.35 * dot(uv * 0.5, uv * 0.5);                    // vignette
  gl_FragColor = vec4(vec3(col), 1.0);
}\`;
let sh, z = 0, bass = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  const dt = min(deltaTime, 50) / 1000;
  bass += (vx.bass - bass) * 0.08;
  z += dt * (0.8 + vx.c * 9 + bass * 2);
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uT', vx.t); sh.setUniform('uZ', z);
  sh.setUniform('uBass', bass); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
  rect(0, 0, width, height);
}`);

  add('ORBIT HUD', 'telemetry · shader', ['SIZE', 'ARC', 'SPIN', 'TILT'], `
// Telemetry rings drawn on the GPU: razor arcs, tick scales and dashes with a soft glow, tilted into space.
// Kicks kick the rings round, the bass thickens them. The readout is drawn on top in 2D.
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uSpin, uPulse, uBass, uLevel, uSeed, uA, uB, uD;
#define TAU 6.2831853
float hash(float n) { return fract(sin(n * 12.9898 + uSeed) * 43758.5453); }
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  // tilt: the rings lie on a plane leaning back from the screen
  float tl = uD * uD * 1.25, ct = cos(tl), st = sin(tl);
  vec3 rd = vec3(uv, 2.2), n = vec3(0.0, -st, ct), c = vec3(0.0, 0.0, 2.2);
  float k = dot(c, n) / dot(rd, n);                              // where the ray meets the plane
  vec3 h = rd * k - c;
  vec2 p = vec2(h.x, dot(h, vec3(0.0, ct, st)));
  float px = 2.0 / uRes.y * k / max(abs(dot(normalize(rd), n)), 0.25);
  float R = (0.45 + uA * 0.4) * min(uRes.x, uRes.y) / uRes.y * 2.0;
  float len = length(p), ang = atan(p.y, p.x), col = 0.0, glow = 0.0;
  for (int i = 0; i < 16; i++) {
    float fi = float(i), h1 = hash(fi), h2 = hash(fi + 31.7), h3 = hash(fi + 77.1), h4 = hash(fi + 5.3);
    float rad = (0.06 + fi * 0.052) * R * (1.0 + uPulse * 0.05 * (mod(fi, 2.0) * 2.0 - 1.0));
    float dr = len - rad;
    if (abs(dr) > px * 30.0) continue;
    float spd = h1 * 2.0 - 1.0;
    float rot = h2 * TAU + uSpin * spd + uPulse * spd * 0.5;
    float rel = mod(ang - rot, TAU);
    float bright = 0.45 + 0.55 * mod(fi, 3.0) / 2.0;
    if (h3 < 0.28) {                                               // a tick scale, long every fifth
      float span = (0.6 + h4 * 3.0) * (0.4 + uB * 1.2);
      float f = rel / (TAU / 90.0), idx = floor(f + 0.5);
      float across = abs(f - idx) * (TAU / 90.0) * rad;
      float l = mod(idx, 5.0) < 0.5 ? 0.035 : 0.014;
      float on = step(rel, span) * step(0.0, dr) * step(dr, l * R);
      col += on * (1.0 - smoothstep(0.0, px * 0.9, across - px * 0.4)) * bright;
    } else {
      float wpx = (h4 < 0.4 ? 1.0 : h4 < 0.7 ? 2.0 : h4 < 0.9 ? 3.5 : 7.0) * (1.0 + uBass * 1.5);
      float span = (0.3 + h1 * 1.5) * (0.4 + uB * 1.2) + uLevel;
      float dashes = h3 > 0.8 ? step(0.45, fract(rel * rad / (px * 14.0))) : 1.0;
      float endd = max(rel - span, 0.0) * rad;                        // past the arc's end, in plane units
      if (rel > span + 0.5 * (TAU - span)) endd = (TAU - rel) * rad;  // ...or before its start
      float d = max(abs(dr) - wpx * px * 0.5, endd);
      col += (1.0 - smoothstep(0.0, px, d)) * bright * dashes;
      glow += exp(-max(d, 0.0) / (px * 9.0)) * bright * 0.06;
    }
    col += (1.0 - smoothstep(0.0, px, abs(dr))) * 0.05;             // a faint full guide circle
  }
  col += glow * (0.7 + uBass);
  col *= smoothstep(4.5, 1.5, length(p) / R * 2.0);
  gl_FragColor = vec4(vec3(min(col, 1.2)), 1.0);
}\`;
let g, sh, spin = 0;
function setup() { createCanvas(windowWidth, windowHeight); textFont('monospace'); }
function draw() {
  if (!g || g.width !== width || g.height !== height) {
    if (g) g.remove();
    g = createGraphics(width, height, WEBGL); g.pixelDensity(1); g.noStroke(); sh = g.createShader(V, F);
  }
  spin += min(deltaTime, 50) / 1000 * (0.2 + vx.c * 1.5);
  g.shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uSpin', spin); sh.setUniform('uSeed', vx.seed % 1000);
  sh.setUniform('uPulse', vx.pulse); sh.setUniform('uBass', vx.bass); sh.setUniform('uLevel', vx.level);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
  g.rect(0, 0, width, height);
  image(g, 0, 0, width, height);
  noStroke(); fill(255); textSize(11);
  text('V3X / ORBIT  ' + nf(vx.bpm, 3, 0) + ' BPM  LVL ' + nf(floor(vx.level * 100), 2), 24, height - 24);
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

  add('INK', 'fluid · shader · bass', ['SCALE', 'WARP', 'SPEED', 'CONTRAST'], `
// Ink in water on the GPU: noise folded through itself three times, so it curls like smoke.
// The bass stirs it, kicks push a bloom through it. (A fragment shader.)
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uT, uBass, uPulse, uA, uB, uD;
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, w = 0.5;
  for (int i = 0; i < 4; i++) { v += noise(p) * w; p = mat2(1.6, 1.2, -1.2, 1.6) * p + 7.1; w *= 0.5; }
  return v;
}
void main() {
  vec2 sv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y, uv = sv * (0.5 + uA * 1.6);
  float t = uT, warp = 2.0 + uB * 5.0 + uBass * 1.5;
  vec2 q = vec2(fbm(uv + vec2(0.0, t * 0.12)), fbm(uv + vec2(5.2, 1.3) - t * 0.1));
  vec2 r = vec2(fbm(uv + warp * q + vec2(1.7, 9.2) + t * 0.15), fbm(uv + warp * q + vec2(8.3, 2.8) - t * 0.13));
  float f = fbm(uv + warp * r);
  float c = smoothstep(0.2, 0.9, f * f * 1.6 + length(q) * 0.25 + uPulse * 0.12 * length(r));
  c = pow(c, 0.6 + uD * 2.4);                                         // CONTRAST: soft wash to hard ink
  c += smoothstep(0.012, 0.0, abs(f - 0.55)) * 0.25;                  // a fine bright filament
  gl_FragColor = vec4(vec3(c * (1.0 - 0.18 * dot(sv, sv))), 1.0);
}\`;
let sh, t = 0, bass = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  bass += (vx.bass - bass) * 0.1;
  t += min(deltaTime, 50) / 1000 * (0.1 + vx.c * 1.4 + bass * 0.4);
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uT', t); sh.setUniform('uBass', bass); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
  rect(0, 0, width, height);
}`);

  add('GYROID', '3d · shader · speed', ['SCALE', 'THICK', 'SPEED', 'GLOSS'], `
// Flying through an endless chrome lattice: a gyroid surface, ray-marched, lit by the light we carry.
// The camera rides a line the walls never cross, so it never clips.
// The bass thickens the walls, kicks flash a ring of light through them. (A fragment shader.)
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uZ, uT, uBass, uPulse, uA, uB, uD;
float sc() { return 1.2 + uA * 2.4; }
float map(vec3 p) {
  vec3 q = p * sc();
  float g = dot(sin(q), cos(q.yzx));
  return (abs(g) - (0.05 + uB * 0.4 + uBass * 0.2)) / sc() * 0.6;
}
vec3 nrm(vec3 p) { vec2 e = vec2(0.002, 0.0); return normalize(vec3(map(p + e.xyy) - map(p - e.xyy), map(p + e.yxy) - map(p - e.yxy), map(p + e.yyx) - map(p - e.yyx))); }
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 ro = vec3(1.5707963 / sc(), 0.0, uZ);
  float a = uT * 0.07, ca = cos(a), sa = sin(a);
  vec3 rd = normalize(vec3(uv * mat2(ca, -sa, sa, ca), 1.3));
  float t = 0.0, hit = 0.0, steps = 0.0;
  for (int i = 0; i < 100; i++) {
    float d = map(ro + rd * t);
    if (d < 0.0008 * (1.0 + t)) { hit = 1.0; break; }
    t += d; steps += 1.0;
    if (t > 14.0) break;
  }
  float col = 0.0;
  if (hit > 0.5) {
    vec3 p = ro + rd * t, n = nrm(p), r = reflect(rd, n);
    float fres = pow(1.0 - max(dot(n, -rd), 0.0), 4.0);
    float head = pow(max(dot(n, -rd), 0.0), 2.0) / (1.0 + t * t * 0.15); // the light we carry
    float a = atan(r.y, r.x);                                           // chrome: strip lights wrapped round the flight
    float env = pow(max(0.0, sin(a * 4.0 + p.z * 0.6)), 40.0) * smoothstep(-0.3, 0.6, r.z) * 1.4 + pow(max(r.z, 0.0), 12.0) * 0.5;
    col = head * (0.45 - uD * 0.25) + env * (0.2 + uD * 0.8) + fres * 0.25;
    col *= 1.0 - steps / 140.0;                                       // crevices go dark
    col += exp(-abs(fract((p.z - uZ) * 0.25 - uPulse) - 0.5) * 30.0) * uPulse * 0.8;
  }
  col = mix(col, 0.0, smoothstep(1.5, 9.0, t));
  gl_FragColor = vec4(vec3(col), 1.0);
}\`;
let sh, z = 0, bass = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  bass += (vx.bass - bass) * 0.12;
  z += min(deltaTime, 50) / 1000 * (0.2 + vx.c * 2.5 + bass * 0.6);
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uZ', z); sh.setUniform('uT', vx.t); sh.setUniform('uBass', bass); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
  rect(0, 0, width, height);
}`);

  add('CATHEDRAL', '3d · shader · slow', ['FOLD', 'SCALE', 'SPEED', 'GLOW'], `
// Gliding down the nave of a cathedral that folds into itself forever: a Menger fractal, repeated
// and ray-marched. FOLD twists the deeper stone, the bass breathes it, kicks light the arches.
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uT, uZ, uBass, uPulse, uA, uB, uD;
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float map(vec3 p) {
  p = mod(p + 1.0, 2.0) - 1.0;                                     // the whole space is tiled with it
  float k = 2.6 + uB * 0.8, s = 1.0;
  mat2 tw = rot(uA * 0.5 + uBass * 0.04);
  for (int i = 0; i < 5; i++) {
    p = abs(p);
    if (p.x < p.y) p.xy = p.yx;
    if (p.x < p.z) p.xz = p.zx;
    if (p.y < p.z) p.yz = p.zy;
    p = p * k - (k - 1.0);
    if (p.z < -0.5 * (k - 1.0)) p.z += k - 1.0;
    if (i > 1) p.xy *= tw;                                           // twist only the deeper levels: the nave stays open
    s *= k;
  }
  vec3 q = abs(p) - 1.0;
  return (length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0)) / s;
}
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 ro = vec3(0.0, 0.0, uZ);
  vec3 rd = normalize(vec3(uv * rot(sin(uT * 0.05) * 0.4), 1.4));
  rd.xz *= rot(sin(uT * 0.07) * 0.25); rd.yz *= rot(sin(uT * 0.05) * 0.15);
  float t = 0.0, hit = 0.0, glow = 0.0, steps = 0.0;
  for (int i = 0; i < 110; i++) {
    float d = map(ro + rd * t);
    glow += exp(-d * 60.0) * 0.012;
    if (d < 0.0004 * (1.0 + t)) { hit = 1.0; break; }
    t += d; steps += 1.0;
    if (t > 20.0) break;
  }
  float col = glow * (0.2 + uD * 1.2) * (0.6 + uPulse * 0.8);
  if (hit > 0.5) {
    vec3 p = ro + rd * t; vec2 e = vec2(0.0005 * (1.0 + t), 0.0);
    vec3 n = normalize(vec3(map(p + e.xyy) - map(p - e.xyy), map(p + e.yxy) - map(p - e.yxy), map(p + e.yyx) - map(p - e.yyx)));
    float ao = pow(1.0 - steps / 110.0, 2.0);
    float key = max(dot(n, normalize(vec3(0.3, 0.8, -0.5))), 0.0), fill = 0.5 + 0.5 * n.y;
    col += (key * 0.75 + fill * 0.15 + pow(1.0 - max(dot(n, -rd), 0.0), 5.0) * 0.3) * ao;
    col *= exp(-t * 0.16);
  }
  gl_FragColor = vec4(vec3(col), 1.0);
}\`;
let sh, z = 0, bass = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  bass += (vx.bass - bass) * 0.06;
  z += min(deltaTime, 50) / 1000 * (0.03 + vx.c * 0.6);
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uT', vx.t); sh.setUniform('uZ', z); sh.setUniform('uBass', bass); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
  rect(0, 0, width, height);
}`);

  add('CAUSTICS', 'light · shader · mid', ['SCALE', 'SHARP', 'SPEED', 'DEPTH'], `
// Sunlight through moving water, thrown on the floor of a pool: a net of light that never settles.
// The mids brighten it, kicks send a ripple out from the centre. (A fragment shader.)
const V = 'precision highp float; attribute vec3 aPosition; void main() { vec4 p = vec4(aPosition, 1.0); p.xy = p.xy * 2.0 - 1.0; gl_Position = p; }';
const F = \`precision highp float;
uniform vec2 uRes; uniform float uT, uMid, uPulse, uA, uB, uD;
float caustic(vec2 uv, float t) {
  vec2 p = mod(uv * 6.2831853, 6.2831853) - 250.0, i = p;
  float c = 1.0, inten = 0.005 * (0.4 + uB * 1.2);
  for (int n = 0; n < 5; n++) {
    float tt = t * (1.0 - 3.5 / float(n + 1));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 5.0;
  c = 1.17 - pow(c, 1.4);
  return pow(abs(c), 8.0);
}
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  // a floor seen at an angle: DEPTH tips it away from us
  float tilt = uD * 0.9;
  vec2 f = vec2(uv.x, uv.y + 0.9) / (1.0 - uv.y * tilt * 0.6 + 0.0001);
  float rip = sin(length(uv) * 18.0 - (1.0 - uPulse) * 14.0) * uPulse * 0.015;
  vec2 q = f * (0.35 + uA * 0.8) + rip;
  float c = caustic(q, uT) * 0.7 + caustic(q * 1.7 + 3.1, uT * 1.3) * 0.3;
  c = c * (1.4 + uMid * 1.0) + 0.02;
  c *= smoothstep(1.0, -0.3, uv.y * tilt) * (1.0 - 0.25 * dot(uv, uv));
  gl_FragColor = vec4(vec3(min(c, 1.0)), 1.0);
}\`;
let sh, t = 0;
function setup() { createCanvas(windowWidth, windowHeight, WEBGL); sh = createShader(V, F); noStroke(); }
function draw() {
  t += min(deltaTime, 50) / 1000 * (0.15 + vx.c * 1.2);
  shader(sh);
  sh.setUniform('uRes', [width, height]); sh.setUniform('uT', t + 23.0); sh.setUniform('uMid', vx.mid); sh.setUniform('uPulse', vx.pulse);
  sh.setUniform('uA', vx.a); sh.setUniform('uB', vx.b); sh.setUniform('uD', vx.d);
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
