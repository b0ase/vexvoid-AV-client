/* The EDIT tab's music, mixed in the browser (Studio 2 on vexvoid.com/studio), so the web studio exports the edited
 * music without ffmpeg. It renders the same plan the desktop hands to ffmpeg (VXTL.audioPlan / VXTL.mixArgs): every
 * sounding segment read from `from`, time-stretched with the pitch kept, its gain and fades applied (linear, and the
 * equal-power quarter sine on crossfades: ffmpeg's afade curve=qsin), laid at `at`, summed (no normalising, like
 * amix normalize=0), then padded with silence or cut to exactly `total` seconds.
 *
 *   VXMIX.stretch(chans, speed, rate) -> chans   WSOLA time-stretch (speed 2 = twice as fast, half as long; pitch kept)
 *   VXMIX.render(segs, sources, { rate, total, gain }) -> [L, R] Float32Array
 *            sources[src] = { chans: [Float32Array, ...], rate }   (decoded at `rate`; others are resampled linearly)
 *   VXMIX.wav(chans, rate) -> Uint8Array   16-bit PCM WAV
 *   VXMIX.decode(bytes, rate) -> Promise<{ chans, rate, seconds }>   (browser: Web Audio decodeAudioData)
 *   VXMIX.mix(segs, getBytes, { rate, total }) -> Promise<{ chans, rate, seconds, ms }>   (browser: decode + render)
 *
 * The stretch: WSOLA (waveform-similarity overlap-add): 2048-sample Hann frames at 50% overlap, each taken from where the
 * waveform best continues the last one (searched within ±512 samples on a 4x decimated mono guide, refined at full rate).
 * It is the same family of method as ffmpeg's atempo; on big changes (beyond about 0.8-1.25x) both smear transients.
 */
(function (root) {
  'use strict';
  var TL = root.VXTL || (typeof require === 'function' ? require('./timeline.js') : null);

  // ---------------------------------------------------------------- WSOLA ------------------------------------------
  var N = 2048, HS = N / 2, TOL = 512, DEC = 4;
  var HANN = (function () { var w = new Float32Array(N); for (var i = 0; i < N; i++) w[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / N); return w; })();
  function stretch(chans, speed) {
    speed = +speed || 1;
    if (Math.abs(speed - 1) < 1e-4 || !chans.length) return chans;
    var len = chans[0].length, outLen = Math.max(1, Math.round(len / speed)), nc = chans.length, ha = HS * speed;
    var out = chans.map(function () { return new Float32Array(outLen + N); });
    // the guide: mono, decimated, for the similarity search
    var gl = Math.ceil(len / DEC), guide = new Float32Array(gl);
    for (var g = 0; g < gl; g++) { var s = 0, j = g * DEC; for (var c = 0; c < nc; c++) s += chans[c][j] || 0; guide[g] = s / nc; }
    var prev = 0; // where in the input the last frame was taken from
    for (var m = 0; m * HS < outLen; m++) {
      var ideal = Math.round(m * ha), pos = ideal;
      if (m > 0) {
        // the natural continuation of the last frame starts HS after it; find the input position near `ideal` whose
        // first half looks most like that continuation
        var nat = prev + HS, best = -Infinity, bestD = 0, lo = Math.max(-TOL, -ideal), hi = TOL;
        if (ideal + hi + N > len) hi = Math.max(lo, len - N - ideal);
        var gn = (nat / DEC) | 0, half = (HS / DEC) | 0;
        for (var d = lo; d <= hi; d += DEC) {
          var gp = ((ideal + d) / DEC) | 0, acc = 0, e1 = 0;
          for (var q = 0; q < half; q++) { var a = guide[gp + q] || 0; acc += a * (guide[gn + q] || 0); e1 += a * a; }
          var score = acc / Math.sqrt(e1 + 1e-9);
          if (score > best) { best = score; bestD = d; }
        }
        // refine at full rate around the coarse best
        var fine = bestD, fb = -Infinity;
        for (var d2 = Math.max(lo, bestD - DEC); d2 <= Math.min(hi, bestD + DEC); d2++) {
          var p2 = ideal + d2, acc2 = 0, e2 = 0;
          for (var q2 = 0; q2 < HS; q2 += 2) { var v = 0, w = 0; for (c = 0; c < nc; c++) { v += chans[c][p2 + q2] || 0; w += chans[c][nat + q2] || 0; } acc2 += v * w; e2 += v * v; }
          var sc2 = acc2 / Math.sqrt(e2 + 1e-9);
          if (sc2 > fb) { fb = sc2; fine = d2; }
        }
        pos = ideal + fine;
      }
      pos = Math.max(0, Math.min(pos, Math.max(0, len - 1)));
      var o = m * HS;
      for (c = 0; c < nc; c++) { var src = chans[c], dst = out[c]; for (var k = 0; k < N; k++) { var x = src[pos + k]; if (x !== undefined) dst[o + k] += x * HANN[k]; } }
      prev = pos;
    }
    // the first half frame only had one window over it: lift it back to full level
    for (c = 0; c < nc; c++) { var d0 = out[c]; for (var k2 = 0; k2 < HS && k2 < outLen; k2++) { var wv = HANN[k2]; if (wv > 0.05) d0[k2] /= wv; } }
    return out.map(function (x) { return x.subarray(0, outLen); });
  }

  // ---------------------------------------------------------------- the mix ----------------------------------------
  function resample(ch, from, to) {
    if (from === to) return ch;
    var n = Math.round(ch.length * to / from), out = new Float32Array(n), r = from / to;
    for (var i = 0; i < n; i++) { var x = i * r, k = x | 0, f = x - k; out[i] = (ch[k] || 0) * (1 - f) + (ch[k + 1] || 0) * f; }
    return out;
  }
  function render(segs, sources, o) {
    o = o || {};
    var rate = o.rate || 48000, total = +o.total || segs.reduce(function (m, s) { return Math.max(m, s.at + s.len); }, 0);
    var n = Math.max(1, Math.round(total * rate)), L = new Float32Array(n), R = new Float32Array(n), missing = [];
    segs.forEach(function (s) {
      var src = sources[s.src]; if (!src || !src.chans || !src.chans.length) { missing.push(s.src); return; }
      var chans = src.rate && src.rate !== rate ? src.chans.map(function (c) { return resample(c, src.rate, rate); }) : src.chans;
      var sp = Math.abs(s.speed || 1), i0 = Math.max(0, Math.round(s.from * rate)), need = Math.round(s.len * sp * rate) + N;
      var slice = chans.map(function (c) { return c.subarray(Math.min(i0, c.length), Math.min(c.length, i0 + need)); });
      if (Math.abs(sp - 1) > 1e-4) slice = stretch(slice, sp);
      var o0 = Math.round(s.at * rate), cnt = Math.min(Math.round(s.len * rate), slice[0].length), l = slice[0], r = slice[1] || slice[0];
      for (var k = 0; k < cnt; k++) {
        var idx = o0 + k; if (idx < 0) continue; if (idx >= n) break;
        var g = TL.segGain(s, s.at + k / rate); if (!g) continue;
        L[idx] += l[k] * g; R[idx] += r[k] * g;
      }
    });
    var out = [L, R]; out.missing = missing; return out;
  }
  function wav(chans, rate) {
    var nc = chans.length, n = chans[0].length, bytes = 44 + n * nc * 2, buf = new ArrayBuffer(bytes), dv = new DataView(buf);
    function str(o, s) { for (var i = 0; i < s.length; i++) dv.setUint8(o + i, s.charCodeAt(i)); }
    str(0, 'RIFF'); dv.setUint32(4, bytes - 8, true); str(8, 'WAVE'); str(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true);
    dv.setUint16(22, nc, true); dv.setUint32(24, rate, true); dv.setUint32(28, rate * nc * 2, true); dv.setUint16(32, nc * 2, true); dv.setUint16(34, 16, true);
    str(36, 'data'); dv.setUint32(40, n * nc * 2, true);
    var o = 44;
    for (var i = 0; i < n; i++) for (var c = 0; c < nc; c++) { var v = chans[c][i]; v = v > 1 ? 1 : v < -1 ? -1 : v; dv.setInt16(o, v < 0 ? v * 0x8000 : v * 0x7fff, true); o += 2; }
    return new Uint8Array(buf);
  }

  // ---------------------------------------------------------------- browser: decode + render ------------------------
  function decode(bytes, rate) {
    rate = rate || 48000;
    var Ctx = root.OfflineAudioContext || root.webkitOfflineAudioContext;
    var ab = bytes instanceof ArrayBuffer ? bytes.slice(0) : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    return new Ctx(2, 1, rate).decodeAudioData(ab).then(function (b) {
      var chans = []; for (var c = 0; c < b.numberOfChannels; c++) chans.push(b.getChannelData(c));
      return { chans: chans, rate: b.sampleRate, seconds: b.duration };
    });
  }
  // getBytes(src) -> Promise<ArrayBuffer | Uint8Array>; each source is decoded once
  function mix(segs, getBytes, o) {
    o = o || {}; var rate = o.rate || 48000, t0 = Date.now(), sources = {}, srcs = [];
    segs.forEach(function (s) { if (srcs.indexOf(s.src) < 0) srcs.push(s.src); });
    return srcs.reduce(function (p, src) {
      return p.then(function () { if (o.progress) o.progress('decode', src); return Promise.resolve(getBytes(src)).then(function (b) { return decode(b, rate); }).then(function (d) { sources[src] = d; }); });
    }, Promise.resolve()).then(function () {
      if (o.progress) o.progress('mix');
      var chans = render(segs, sources, { rate: rate, total: o.total });
      return { chans: chans, rate: rate, seconds: chans[0].length / rate, ms: Date.now() - t0, missing: chans.missing };
    });
  }

  root.VXMIX = { N: N, stretch: stretch, render: render, wav: wav, decode: decode, mix: mix, resample: resample,
    METHOD: 'WSOLA time-stretch in the browser (pitch kept)' };
  if (typeof module !== 'undefined') module.exports = root.VXMIX;
})(typeof window !== 'undefined' ? window : this);
