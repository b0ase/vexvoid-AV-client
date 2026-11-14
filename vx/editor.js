/* The EDIT tab's engine: a music video as a list of shots cut to a track. Pure logic; the page does the UI.
 *
 *   VXEDIT.envelope(bytes) -> { rms: Float32Array (one value per STEP seconds, 0..1), step, seconds }
 *   VXEDIT.autoCut({ seconds, env, bpm, pool, pace }) -> shots [{ src, name, in, dur }]
 *   VXEDIT.layout(shots) -> shots with start times;   VXEDIT.at(shots, t) -> { i, shot, offset }
 *   VXEDIT.ffmpegArgs({ shots (local files), track (local file), out, w, h, fps }) -> argv for ffmpeg
 *
 * Cutting follows the VexVoid studio rules (scripts/video/studio_cut.py on vexvoid.com): cuts land on bars, the
 * loudest passages get the shortest shots, quiet passages hold longer, a shot never repeats one of the last few, and
 * a long clip starts at a different point each time it is used.
 */
(function (root) {
  'use strict';
  var STEP = 0.25;

  // loudness over time from encoded audio (mp3, wav, …), normalised to the track's own range
  async function envelope(bytes) {
    var Ctx = root.OfflineAudioContext || root.webkitOfflineAudioContext;
    var ctx = new Ctx(1, 2, 44100);
    var ab = await ctx.decodeAudioData(bytes.buffer ? bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) : bytes);
    var sr = ab.sampleRate, n = Math.ceil(ab.duration / STEP), rms = new Float32Array(n), hop = Math.round(sr * STEP);
    var chans = []; for (var c = 0; c < ab.numberOfChannels; c++) chans.push(ab.getChannelData(c));
    for (var i = 0; i < n; i++) {
      var s = 0, k = 0;
      for (var j = i * hop; j < Math.min((i + 1) * hop, ab.length); j += 4) { var v = 0; for (c = 0; c < chans.length; c++) v += chans[c][j]; v /= chans.length; s += v * v; k++; }
      rms[i] = k ? Math.sqrt(s / k) : 0;
    }
    var sorted = Array.from(rms).sort(function (a, b) { return a - b; }), lo = sorted[Math.floor(n * 0.05)] || 0, hi = sorted[Math.floor(n * 0.97)] || 1;
    for (i = 0; i < n; i++) rms[i] = Math.max(0, Math.min(1, (rms[i] - lo) / ((hi - lo) || 1)));
    return { rms: rms, step: STEP, seconds: ab.duration };
  }
  function energy(env, from, to) {
    var a = Math.floor(from / env.step), b = Math.max(a + 1, Math.ceil(to / env.step)), s = 0, k = 0;
    for (var i = a; i < b && i < env.rms.length; i++) { s += env.rms[i]; k++; }
    return k ? s / k : 0;
  }

  // pace: how many bars a shot holds at full, mid and low energy
  var PACE = { fast: [1, 2, 4], medium: [2, 4, 8], slow: [4, 8, 16] };
  function autoCut(o) {
    var bar = 240 / (o.bpm || 120), pace = PACE[o.pace] || PACE.medium, pool = (o.pool || []).filter(function (p) { return p && p.src; });
    if (!pool.length) throw new Error('no clips to cut with');
    var shots = [], recent = [], t = 0, seed = 1;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    while (t < o.seconds - 0.05) {
      var e = o.env ? energy(o.env, t, t + bar * 2) : 0.5;
      var bars = e > 0.66 ? pace[0] : e > 0.33 ? pace[1] : pace[2];
      // a big rise inside the shot (a drop) gets its own cut, on the bar
      if (o.env) for (var b = 1; b < bars; b++) { if (energy(o.env, t + b * bar, t + (b + 1) * bar) - energy(o.env, t + (b - 1) * bar, t + b * bar) > 0.3) { bars = b; break; } }
      var dur = Math.min(bars * bar, o.seconds - t);
      var choices = pool.filter(function (p) { return recent.indexOf(p.src) < 0 && (!p.dur || p.dur >= Math.min(dur, 3)); });
      if (!choices.length) choices = pool.filter(function (p) { return recent[recent.length - 1] !== p.src; });
      if (!choices.length) choices = pool;
      var pick = choices[Math.floor(rnd() * choices.length)];
      var room = pick.dur ? Math.max(0, pick.dur - dur) : 0;
      shots.push({ src: pick.src, name: pick.name, in: Math.round(room * rnd() * 100) / 100, dur: Math.round(dur * 1000) / 1000 });
      recent.push(pick.src); if (recent.length > Math.min(4, pool.length - 1)) recent.shift();
      t += dur;
    }
    return shots;
  }
  function layout(shots) { var t = 0; return shots.map(function (s) { var r = Object.assign({}, s, { start: t }); t += s.dur; return r; }); }
  function at(shots, t) {
    var start = 0;
    for (var i = 0; i < shots.length; i++) { if (t < start + shots[i].dur) return { i: i, shot: shots[i], offset: t - start, start: start }; start += shots[i].dur; }
    return null;
  }

  function ffmpegArgs(o) {
    var w = o.w || 1920, h = o.h || 1080, fps = o.fps || 30, args = ['-y', '-hide_banner'], f = [];
    // a clip shorter than its shot loops rather than leaving the cut short
    o.shots.forEach(function (s) { args.push('-stream_loop', '-1', '-ss', String(s.in || 0), '-t', String(s.dur), '-i', s.file); });
    args.push('-i', o.track);
    o.shots.forEach(function (s, i) { f.push('[' + i + ':v]scale=' + w + ':' + h + ':force_original_aspect_ratio=increase,crop=' + w + ':' + h + ',fps=' + fps + ',setsar=1,format=yuv420p,setpts=PTS-STARTPTS,trim=duration=' + s.dur + '[v' + i + ']'); });
    f.push(o.shots.map(function (s, i) { return '[v' + i + ']'; }).join('') + 'concat=n=' + o.shots.length + ':v=1:a=0[v]');
    args.push('-filter_complex', f.join(';'), '-map', '[v]', '-map', o.shots.length + ':a',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-c:a', 'aac', '-b:a', '256k', '-shortest', '-movflags', '+faststart', o.out);
    return args;
  }

  root.VXEDIT = { STEP: STEP, envelope: envelope, autoCut: autoCut, layout: layout, at: at, ffmpegArgs: ffmpegArgs, PACE: PACE };
})(typeof window !== 'undefined' ? window : this);
