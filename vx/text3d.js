/* 3D titles for the TITLES tab: words as extruded letters (three.js, vx/lib/three.global.js), lit and reflecting a studio,
 * animated with the same moves as the 2D text layers plus 3D ones. A 3D title is still a VX GEN sketch: its p5 canvas is
 * 2D and each frame the 3D render is copied onto it, so it goes on a deck, records and VexVoid can make one.
 * All 3D titles in a window share one WebGL renderer (browsers cap WebGL contexts), rendering one after another.
 *
 *   VXTEXT3D.code({ text, font, style, upper, material, spin, bevel }) -> sketch source (knobs SIZE, SPEED, INTENSITY, DEPTH)
 *   VXTEXT3D.layer(T) -> { frame(vx, ctx2d, w, h) }      (used by that sketch)
 *   VXTEXT3D.MATERIALS, VXTEXT3D.SPINS
 */
(function (root) {
  'use strict';
  var TTF = { michroma: 'michroma', geist: 'geist-600', geistmono: 'geistmono-500', intertight: 'intertight-800', spacegrotesk: 'spacegrotesk-600', bigshoulders: 'bigshouldersstencildisplay-800', sairastencil: 'sairastencilone-400', doto: 'doto-800', chakra: 'chakrapetch-600', rajdhani: 'rajdhani-600', oxanium: 'oxanium-600', syne: 'syne-700', antonio: 'antonio-700', redhatmono: 'redhatmono-500', unica: 'unicaone-400' };
  var MATERIALS = [{ id: 'chrome', label: 'CHROME' }, { id: 'black', label: 'BLACK CHROME' }, { id: 'matte', label: 'MATTE' }, { id: 'wire', label: 'WIRE' }];
  var SPINS = [{ id: 'none', label: 'NONE' }, { id: 'sway', label: 'SWAY' }, { id: 'orbit', label: 'ORBIT' }, { id: 'tumble', label: 'TUMBLE' }];

  // where the vx folder is, from this script's own address (works in the app windows and the web replay)
  var BASE = (function () {
    try { var s = document.querySelector('script[src*="text3d.js"]'); if (s) return s.src.replace(/text3d\.js.*$/, ''); } catch (e) {}
    return './vx/';
  })();

  var shared = null, fonts = {}, live = [], building = 0; // building: layers still waiting for their font
  function renderer() {
    if (shared) return shared;
    var T3 = root.THREE, r = new T3.WebGLRenderer({ alpha: true, antialias: true });
    r.setPixelRatio(1); r.toneMapping = T3.ACESFilmicToneMapping; r.toneMappingExposure = 1.05; r.localClippingEnabled = true;
    var pm = new T3.PMREMGenerator(r), env = pm.fromScene(new T3.RoomEnvironment(), 0.04).texture;
    shared = { r: r, env: env };
    // layers that stop drawing (removed from a deck) give their GPU memory back
    setInterval(function () {
      var now = performance.now();
      live = live.filter(function (L) { if (now - L.seen < 8000) return true; L.dispose(); return false; });
    }, 4000);
    return shared;
  }
  function font(id) {
    var url = BASE + 'fonts/ttf/' + (TTF[id] || TTF.michroma) + '.ttf';
    // in the app windows read the file from disk (Chromium's fetch refuses file:// addresses); on the web, load it
    if (!fonts[url]) fonts[url] = new Promise(function (res, rej) {
      var loader = new root.THREE.TTFLoader();
      if (/^file:/.test(url) && typeof root.require === 'function') {
        try { var buf = root.require('fs').readFileSync(decodeURIComponent(new URL(url).pathname)); res(new root.THREE.Font(loader.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)))); } catch (e) { rej(e); }
      } else loader.load(url, function (json) { res(new root.THREE.Font(json)); }, undefined, rej);
    });
    return fonts[url];
  }
  function rnd(seed) { var s = seed % 2147483647 || 1; return function () { s = (s * 16807) % 2147483647; return s / 2147483647; }; }

  function material(id, env) {
    var T3 = root.THREE;
    if (id === 'wire') return new T3.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    if (id === 'matte') return new T3.MeshStandardMaterial({ color: 0xe8e8e8, metalness: 0, roughness: 0.55, envMap: env, envMapIntensity: 0.6 });
    if (id === 'black') return new T3.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 1, roughness: 0.18, envMap: env, envMapIntensity: 1.4 });
    return new T3.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.08, envMap: env, envMapIntensity: 1.3 });
  }

  function layer(T) {
    var T3 = root.THREE, sh = renderer(), scene = new T3.Scene(), cam = new T3.PerspectiveCamera(32, 16 / 9, 0.1, 200);
    var group = new T3.Group(), letters = [], mat = material(T.material, sh.env), clip = new T3.Plane(new T3.Vector3(0, -1, 0), 100);
    mat.clippingPlanes = T.style === 'scan' ? [clip] : null;
    scene.add(group);
    var key = new T3.DirectionalLight(0xffffff, 2.2); key.position.set(-3, 4, 6); scene.add(key);
    var rim = new T3.DirectionalLight(0xffffff, 1.6); rim.position.set(5, -2, -4); scene.add(rim);
    scene.add(new T3.AmbientLight(0xffffff, 0.15));
    var R = rnd(T.seed || 7), dirs = [], cutPose = null, bars = 0, lastBar = 0, built = false, width = 1, height = 1, t0 = -1;

    building++;
    font(T.font).then(function (f) {
      var lines = T.text.split('\n'), lh = 1.35, res = f.data.resolution || 1000, maxW = 1;
      lines.forEach(function (line, li) {
        var x = 0, row = [];
        for (var i = 0; i < line.length; i++) {
          var ch = line[i], gl = f.data.glyphs[ch] || f.data.glyphs['?'], adv = gl ? gl.ha / res : 0.5;
          if (ch !== ' ') {
            var geo = new T3.TextGeometry(ch, { font: f, size: 1, depth: 0.35, curveSegments: 6, bevelEnabled: !!T.bevel, bevelThickness: 0.04, bevelSize: 0.025, bevelSegments: 3 });
            geo.computeBoundingBox();
            var m = new T3.Mesh(geo, mat); m.userData.x = x; m.userData.y = -li * lh; m.userData.adv = adv;
            row.push(m); group.add(m);
          }
          x += adv;
        }
        maxW = Math.max(maxW, x);
        row.forEach(function (m) { m.userData.x -= x / 2; m.userData.line = li; });
        letters = letters.concat(row);
      });
      var lift = (lines.length - 1) * lh / 2 - 0.36;
      letters.forEach(function (m) { m.userData.y += lift; m.position.set(m.userData.x, m.userData.y, 0); dirs.push(new T3.Vector3(R() - 0.5, R() - 0.5, R() - 0.5).normalize()); });
      group.userData.w = maxW;
      var yb = new T3.Box3().setFromObject(group); group.userData.y0 = yb.min.y; group.userData.y1 = yb.max.y;
      built = true; building--;
    }, function () { building--; });

    var L = {
      seen: performance.now(),
      dispose: function () { letters.forEach(function (m) { m.geometry.dispose(); }); mat.dispose(); },
      frame: function (vx, ctx, w, h) {
        L.seen = performance.now();
        if (t0 < 0) t0 = vx.manual ? 0 : vx.t;
        if (vx.bar < lastBar) bars++;
        lastBar = vx.bar;
        if (vx.barN != null) bars = vx.barN;
        if (!built) return;
        var I = vx.c, sp = 0.3 + vx.b * 2.4, t = vx.t, life = t - t0, st = T.style, n = letters.length;
        // frame the words across the width: SIZE 1 nearly fills it, 0 leaves them small in the middle
        var fit = Math.max(2, group.userData.w || 6) * (1.05 + (1 - vx.a) * 1.5);
        cam.aspect = w / h; cam.fov = 32; cam.updateProjectionMatrix();
        var camR = Math.max(fit / (2 * Math.tan(cam.fov * Math.PI / 360) * cam.aspect), 1.4 * fit / (2 * Math.tan(cam.fov * Math.PI / 360)) * 0.35), yaw = 0, pitch = 0;
        // spin: the 3D control the 2D layers do not have
        if (T.spin === 'sway') { yaw = Math.sin(t * sp * 0.4) * 0.45; pitch = Math.sin(t * sp * 0.27) * 0.12; }
        else if (T.spin === 'orbit') { yaw = t * sp * 0.35; pitch = 0.18; }
        else if (T.spin === 'tumble') { group.rotation.set(t * sp * 0.31, t * sp * 0.43, t * sp * 0.17); }
        if (T.spin !== 'tumble') group.rotation.set(0, 0, 0);
        var depth = 0.08 + vx.d * 2.2, gx = 0, gy = 0, vis = true;
        letters.forEach(function (m, i) { m.visible = true; m.position.set(m.userData.x, m.userData.y, 0); m.rotation.set(0, 0, 0); m.scale.set(1, 1, depth); });
        if (st === 'glitch') {
          if (vx.kick || R() < 0.1 + I * 0.4) letters.forEach(function (m) { if (R() < 0.3 + I * 0.5) { m.position.x += (R() - 0.5) * I * 0.8 * (1 + vx.pulse); m.position.y += (R() - 0.5) * I * 0.3; m.scale.z = depth * (R() * 3); } });
        } else if (st === 'broken') {
          var k = Math.pow(1 - vx.pulse, 2) * (0.6 + I * 3);
          letters.forEach(function (m, i) { var d = dirs[i]; m.position.x += d.x * k; m.position.y += d.y * k; m.position.z += d.z * k * 2; m.rotation.set(d.y * k, d.x * k, d.z * k * 0.5); });
        } else if (st === 'strobe') {
          var div = [1, 2, 4, 8][Math.min(3, Math.floor(vx.b * 4))]; vis = Math.floor(vx.beat * div * 2) % 2 === 0 || (I > 0.5 && vx.pulse > 0.85);
        } else if (st === 'drift') {
          var span = fit * 2.2; gx = span / 2 - ((t * sp * 0.6 + span / 2) % span); // starts centred, slides left, wraps gy = Math.sin(t * sp * 0.5) * 0.2 * I;
        } else if (st === 'zoom') {
          var per = 4 / Math.max(0.25, sp), ph = (t / per) % 1; camR *= 1.6 - Math.pow(ph, 2.2) * 1.62 + 0.04; camR *= 1 - vx.pulse * 0.06 * (0.3 + I);
        } else if (st === 'cut') {
          var slot = Math.floor((bars * 4 + vx.bar * 4) * (sp > 1.5 ? 2 : 1));
          // a hidden beat is never the first one shown, nor two in a row, so the words always read
          if (!cutPose || cutPose.slot !== slot) { var was = cutPose && cutPose.hide; cutPose = { slot: slot, yaw: (R() - 0.5) * 1.6, pitch: (R() - 0.5) * 0.8, dist: 0.7 + R() * 0.8, hide: !!cutPose && !was && R() < 0.2 + I * 0.3 }; }
          yaw += cutPose.yaw; pitch += cutPose.pitch; camR *= cutPose.dist; vis = !cutPose.hide;
        } else if (st === 'typeon') {
          var per2 = Math.max(1, Math.round(2 / sp)), ph2 = ((bars % per2) + vx.bar) / per2, shown = Math.ceil(Math.min(1, ph2 * 2.2) * n);
          letters.forEach(function (m, i) { m.visible = i < shown; if (i === shown - 1) m.position.z += (1 - (ph2 * 2.2 * n % 1)) * 1.5; });
        } else if (st === 'scan') {
          var y0 = group.userData.y0, y1 = group.userData.y1; // reveal from the bottom of the letters to the top each bar
          clip.constant = y0 - 0.05 + Math.min(1, vx.bar * (1 + sp * 0.5)) * (y1 - y0 + 0.1);
        } else if (st === 'track') {
          var spread = 1 + (0.5 - 0.5 * Math.cos(vx.bar * Math.PI * 2)) * (0.3 + I * 1.4);
          letters.forEach(function (m) { m.position.x = m.userData.x * spread; });
        } else {
          letters.forEach(function (m, i) { m.position.y += Math.sin(t * sp + i * 0.4) * 0.03; });
        }
        group.position.set(gx, gy, 0);
        group.visible = vis && life > 0.05;
        cam.position.set(Math.sin(yaw) * Math.cos(pitch) * camR, Math.sin(pitch) * camR, Math.cos(yaw) * Math.cos(pitch) * camR);
        cam.lookAt(0, 0, 0);
        var sz = sh.r.getSize(new root.THREE.Vector2());
        if (sz.x !== w || sz.y !== h) sh.r.setSize(w, h, false);
        sh.r.setClearColor(0x000000, 0);
        sh.r.render(scene, cam);
        ctx.globalAlpha = Math.min(1, life * 2);
        ctx.drawImage(sh.r.domElement, 0, 0, w, h);
        ctx.globalAlpha = 1;
      }
    };
    live.push(L);
    return L;
  }

  function code(o) {
    o = o || {};
    var X = root.VXTEXT || { FONTS: [], STYLES: [] };
    var f = (X.FONTS.filter(function (x) { return x.id === o.font; })[0]) || { id: 'michroma', family: 'Michroma' };
    var st = (X.STYLES.filter(function (x) { return x.id === o.style; })[0]) || { id: 'static', label: 'STATIC', about: '' };
    var text = String(o.text == null ? 'V3XV0ID' : o.text).replace(/\r/g, '').slice(0, 80);
    var cfg = { text: o.upper === false ? text : text.toUpperCase(), font: f.id, style: st.id, material: o.material || 'chrome', spin: o.spin || 'sway', bevel: o.bevel !== false, seed: o.seed != null ? o.seed : Math.floor(Math.random() * 1e6) };
    return '// 3D TITLE (TITLES tab): ' + st.label + ' in ' + f.family + ', ' + cfg.material + ', spin ' + cfg.spin + '.\n' +
      '// Knobs: SIZE, SPEED, INTENSITY, DEPTH (how far the letters extrude). Edit T to change the words or the look.\n' +
      'const T = ' + JSON.stringify(cfg) + ';\nlet L;\n' +
      'function setup() { createCanvas(windowWidth, windowHeight); L = VXTEXT3D.layer(T); }\n' +
      'function draw() { clear(); L.frame(vx, drawingContext, width, height); }\n';
  }

  root.VXTEXT3D = { layer: layer, busy: function () { return building; }, code: code, MATERIALS: MATERIALS, SPINS: SPINS, KNOBS: ['SIZE', 'SPEED', 'INTENSITY', 'DEPTH'] };
})(typeof window !== 'undefined' ? window : this);
