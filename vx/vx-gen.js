/* V3XV0ID VX GEN: generative p5 sketches for the controls preview and the output layers.
 *
 * A sketch is ordinary p5 "global mode" code (setup(), draw(), background(), noise() ...) with one
 * extra object, `vx`, refreshed every frame:
 *
 *   vx.t      seconds since the sketch started      vx.frame  frame number
 *   vx.w/h    canvas size (also width/height)       vx.seed   this run's seed (random/noise are seeded)
 *   vx.a..d   the four knobs, 0..1                  vx.bpm    tempo
 *   vx.beat   phase within the beat, 0..1           vx.bar    phase within the bar (4 beats), 0..1
 *   vx.level  overall loudness, 0..1                vx.bass/mid/high  bands, 0..1
 *   vx.kick   true on the frame a kick/beat lands   vx.pulse  1 on a kick, decaying to 0
 *   vx.ink    255 (white), vx.void 0 (black): VexVoid is monochrome
 *
 * createCanvas(w, h[, WEBGL]) always fills the host, whatever w and h say, so library sketches and
 * pasted 400x400 sketches both fill the screen.
 *
 *   var g = VXGEN.mount(el, code, { seed, params: {a,b,c,d}, scale: 0.75, onError, onFps })
 *   g.stop(); g.setParams({a:.3}); g.reseed(); g.fps
 *   VXGEN.signals  shared audio/clock state (set by VXGEN.listen or by IPC from the controls window)
 */
(function (root) {
  'use strict';
  // In the Electron windows (nodeIntegration) p5's UMD wrapper exports to `module`, not window, so
  // require it from the page's folder; in a plain browser page a <script> tag sets window.p5.
  var P5 = root.p5 || (typeof require === 'function' ? (function () {
    try { return require(require('path').join(__dirname, 'vx', 'lib', 'p5.min.js')); } catch (e) { return null; }
  })() : null);

  var signals = { bpm: 120, level: 0, bass: 0, mid: 0, high: 0, kick: false, kickAt: 0, beat0: performance.now(), external: false };

  var HANDLERS = ['setup', 'draw', 'windowResized', 'mousePressed', 'mouseMoved', 'mouseDragged', 'mouseReleased', 'keyPressed'];

  /** Turn sketch source into a factory, or throw a SyntaxError with a readable message. */
  function compile(code) {
    var ret = 'return {' + HANDLERS.map(function (h) { return h + ': typeof ' + h + " === 'function' ? " + h + ' : undefined'; }).join(', ') + '};';
    // with(p) gives the p5 API; the inner with(o) overrides the few names that must follow the host size
    return new Function('p', 'vx', 'o', 'with (p) { with (o) {\n' + code + '\n;' + ret + '\n} }');
  }

  function check(code) {
    try { compile(code); return null; } catch (e) { return e.message; }
  }

  function mount(host, code, opts) {
    opts = opts || {};
    if (!P5) throw new Error('p5 is not loaded');
    var factory = compile(code);
    var scale = opts.scale || 1;
    var seed = opts.seed != null ? opts.seed : Math.floor(Math.random() * 1e9);
    var params = Object.assign({ a: 0.5, b: 0.5, c: 0.5, d: 0.5 }, opts.params || {});
    var api = { fps: 0, error: null, seed: seed, stopped: false };
    var vx = { t: 0, frame: 0, w: 1, h: 1, seed: seed, a: params.a, b: params.b, c: params.c, d: params.d,
      bpm: 120, beat: 0, bar: 0, level: 0, bass: 0, mid: 0, high: 0, kick: false, pulse: 0, ink: 255, void: 0 };
    var lastBeat = -1, t0 = 0, inst = null, handlers = null, mode = null, ro = null;

    function size() {
      var r = host.getBoundingClientRect();
      return { w: Math.max(2, Math.round((r.width || host.clientWidth || 640) * scale)), h: Math.max(2, Math.round((r.height || host.clientHeight || 360) * scale)) };
    }
    function fail(e) {
      api.error = (e && e.message) || String(e);
      if (inst) inst.noLoop();
      if (opts.onError) opts.onError(api.error);
    }
    function styleCanvas() {
      var c = host.querySelector('canvas');
      if (c) { c.style.width = '100%'; c.style.height = '100%'; c.style.display = 'block'; }
    }

    inst = new P5(function (p) {
      var o = {
        createCanvas: function (w, h, m) { var s = size(); mode = m; var c = p.createCanvas(s.w, s.h, m); styleCanvas(); return c; },
        resizeCanvas: function () { var s = size(); p.resizeCanvas(s.w, s.h); styleCanvas(); }
      };
      Object.defineProperty(o, 'windowWidth', { get: function () { return size().w; } });
      Object.defineProperty(o, 'windowHeight', { get: function () { return size().h; } });
      try { handlers = factory(p, vx, o); } catch (e) { handlers = {}; setTimeout(function () { fail(e); }, 0); }

      p.setup = function () {
        p.randomSeed(seed); p.noiseSeed(seed);
        p.pixelDensity(1);
        try {
          if (handlers.setup) handlers.setup();
          if (!p._renderer || !host.querySelector('canvas')) o.createCanvas(0, 0);
          var s = size();
          if (p.width !== s.w || p.height !== s.h) { p.resizeCanvas(s.w, s.h); }
          styleCanvas();
        } catch (e) { fail(e); }
        vx.w = p.width; vx.h = p.height;
        t0 = p.millis();
      };
      p.draw = function () {
        var now = performance.now();
        vx.t = (p.millis() - t0) / 1000; vx.frame = p.frameCount; vx.w = p.width; vx.h = p.height;
        vx.a = params.a; vx.b = params.b; vx.c = params.c; vx.d = params.d;
        vx.bpm = signals.bpm || 120;
        var beats = (now - signals.beat0) / 60000 * vx.bpm;
        vx.beat = beats - Math.floor(beats);
        vx.bar = (beats / 4) - Math.floor(beats / 4);
        vx.level = signals.level; vx.bass = signals.bass; vx.mid = signals.mid; vx.high = signals.high;
        // a kick is an audio onset when audio is live, otherwise the clock's own beat
        var b = Math.floor(beats);
        var clockKick = b !== lastBeat; lastBeat = b;
        var audioKick = signals.kickAt > now - 1000 / 30 && signals.kickAt !== vx._kickSeen;
        if (audioKick) vx._kickSeen = signals.kickAt;
        vx.kick = signals.external ? audioKick : clockKick;
        vx.pulse = vx.kick ? 1 : vx.pulse * 0.9;
        try { if (handlers.draw) handlers.draw(); } catch (e) { fail(e); }
        api.fps = api.fps ? api.fps * 0.95 + (1000 / Math.max(1, p.deltaTime)) * 0.05 : p.frameRate(); // smoothed; p5's own figure jumps
        if (opts.onFps && p.frameCount % 30 === 0) opts.onFps(Math.round(api.fps));
      };
      HANDLERS.slice(2).forEach(function (h) {
        p[h] = function () { try { if (handlers && handlers[h]) handlers[h](); } catch (e) { fail(e); } };
      });
    }, host);

    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(function () {
        if (!inst || api.stopped || !inst._setupDone) return;
        var s = size();
        if (s.w !== inst.width || s.h !== inst.height) {
          inst.resizeCanvas(s.w, s.h); styleCanvas();
          try { if (handlers.windowResized) handlers.windowResized(); } catch (e) { fail(e); }
        }
      });
      ro.observe(host);
    }

    api.stop = function () { api.stopped = true; if (ro) ro.disconnect(); if (inst) inst.remove(); inst = null; };
    api.setParams = function (q) { Object.assign(params, q); };
    api.params = params;
    api.reseed = function (s) { seed = s != null ? s : Math.floor(Math.random() * 1e9); vx.seed = api.seed = seed; if (inst) { inst.randomSeed(seed); inst.noiseSeed(seed); } return seed; };
    api.canvas = function () { return host.querySelector('canvas'); };
    return api;
  }

  /* ---- audio: analyse a media element or the default input into VXGEN.signals ---- */
  var audio = { ctx: null, an: null, src: null, data: null, raf: 0, avg: 0, stream: null, el: null };
  function analyse() {
    var an = audio.an; if (!an) return;
    an.getByteFrequencyData(audio.data);
    var d = audio.data, n = d.length, hz = audio.ctx.sampleRate / 2 / n;
    function band(lo, hi) { var a = Math.floor(lo / hz), b = Math.min(n - 1, Math.ceil(hi / hz)), s = 0; for (var i = a; i <= b; i++) s += d[i]; return s / ((b - a + 1) * 255); }
    var bass = band(30, 150), mid = band(150, 2000), high = band(2000, 12000);
    var ease = function (old, v) { return v > old ? v : old * 0.85 + v * 0.15; };
    signals.bass = ease(signals.bass, bass); signals.mid = ease(signals.mid, mid); signals.high = ease(signals.high, high);
    signals.level = ease(signals.level, bass * 0.5 + mid * 0.35 + high * 0.15);
    audio.avg = audio.avg * 0.95 + bass * 0.05;
    var now = performance.now();
    if (bass > 0.25 && bass > audio.avg * 1.35 && now - signals.kickAt > 220) signals.kickAt = now;
    audio.raf = requestAnimationFrame(analyse);
  }
  function ensureCtx() {
    if (!audio.ctx) audio.ctx = new (root.AudioContext || root.webkitAudioContext)();
    if (audio.ctx.state === 'suspended') audio.ctx.resume();
    return audio.ctx;
  }
  function unlisten() {
    cancelAnimationFrame(audio.raf);
    if (audio.src) {
      try { audio.src.disconnect(); } catch (e) {}
      // a media element routed into Web Audio only sounds through the graph, so keep it audible
      if (audio.src instanceof MediaElementAudioSourceNode) audio.src.connect(audio.ctx.destination);
    }
    if (audio.stream) audio.stream.getTracks().forEach(function (t) { t.stop(); });
    audio.src = audio.stream = null; audio.an = null;
    signals.external = false; signals.level = signals.bass = signals.mid = signals.high = 0;
  }
  function start(src, toSpeakers) {
    var ctx = ensureCtx();
    audio.an = ctx.createAnalyser(); audio.an.fftSize = 1024; audio.an.smoothingTimeConstant = 0.6;
    audio.data = new Uint8Array(audio.an.frequencyBinCount);
    audio.src = src; src.connect(audio.an);
    if (toSpeakers) audio.an.connect(ctx.destination);
    signals.external = true;
    analyse();
  }
  // A media element can only ever have one MediaElementSource, so keep it on the element.
  function listen(target) {
    unlisten();
    if (!target) return Promise.resolve(false);
    if (target === 'input') {
      return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } }).then(function (stream) {
        audio.stream = stream; start(ensureCtx().createMediaStreamSource(stream), false); return true;
      });
    }
    var ctx = ensureCtx();
    if (!target._vxSource) target._vxSource = ctx.createMediaElementSource(target);
    start(target._vxSource, true);
    return Promise.resolve(true);
  }

  root.VXGEN = { mount: mount, check: check, compile: compile, signals: signals, listen: listen, unlisten: unlisten,
    tap: function () { var now = performance.now(), t = root.VXGEN._taps = (root.VXGEN._taps || []).filter(function (x) { return now - x < 3000; }); t.push(now);
      if (t.length > 1) { var dt = (t[t.length - 1] - t[0]) / (t.length - 1); signals.bpm = Math.round(60000 / dt); } signals.beat0 = now; return signals.bpm; },
    analyser: function () { return audio.an; },
    ready: !!P5 };
})(typeof window !== 'undefined' ? window : this);
