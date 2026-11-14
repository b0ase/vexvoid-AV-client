/* The EDIT tab's engine: a music video as a list of shots cut to a track. Pure logic; the page does the UI.
 *
 *   VXEDIT.envelope(bytes) -> { rms: Float32Array (one value per STEP seconds, 0..1), step, seconds }
 *   VXEDIT.autoCut({ seconds, env, bpm, pool, pace }) -> shots [{ src, name, in, dur }]
 *   VXEDIT.layout(shots) -> shots with start times;   VXEDIT.at(shots, t) -> { i, shot, offset }
 *   VXEDIT.ffmpegArgs({ shots (local files), track (local file), out, w, h, fps }) -> argv for ffmpeg
 *   VXEDIT.energyMap(env, bpm) -> one digit 0-9 per bar, so the structure of a track can be read at a glance
 *   VXEDIT.finishPlan({ shots, env, seconds }) -> { idents: [{ t, name, corner }], mattes: [{ t0, t1 }] }
 *   VXEDIT.matteArgs({ base, mask, t0, t1, out }) / VXEDIT.finishArgs({ base, mattes, idents, out }) -> argv for ffmpeg
 *
 * Cutting follows the VexVoid studio rules (scripts/video/studio_cut.py on vexvoid.com): cuts land on bars, the
 * loudest passages get the shortest shots, quiet passages hold longer, a shot never repeats one of the last few, and
 * a long clip starts at a different point each time it is used. When clips carry notes (energy 0..1, phase rough |
 * bridge | smooth, caution), the most moving shots go on the loudest bars, the video travels rough -> bridge -> smooth
 * over the track, a caution shot is used at most once and never first, and the biggest drop gets the most intense shot.
 *
 * The finish is the one the owner approved on 13 Nov (Shadow Steps v1): faint V3X idents in the corners every ~19 s,
 * and on the two biggest hits a technical matte flash that shows another moment of the same video through a shape.
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
    var shots = [], recent = [], t = 0, seed = 1, cautionUsed = false;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    var noted = pool.some(function (p) { return p.energy != null || p.phase; });
    // with notes: score each candidate by how well its energy fits the bar and its phase fits the point in the track
    function choose(list, e, at) {
      if (!noted) return list[Math.floor(rnd() * list.length)];
      var want = at < 0.4 ? 'rough' : at < 0.65 ? 'bridge' : 'smooth';
      var scored = list.map(function (p) {
        var s = p.energy != null ? 1 - Math.abs(p.energy - e) : 0.5;
        if (p.phase) s += p.phase === want ? 0.5 : p.phase === 'bridge' || want === 'bridge' ? 0.15 : 0;
        if (p.favourite) s += 0.3;
        if (p.filler) s -= 0.4;
        return { p: p, s: s + rnd() * 0.35 };
      }).sort(function (a, b) { return b.s - a.s; });
      return scored[0].p;
    }
    // the biggest drop: where the loudness jumps most from one bar to the next
    var peak = -1, peakPick = null;
    if (o.env) {
      var best = 0;
      for (var x = bar * 4; x < o.seconds - bar * 4; x += bar) { var rise = energy(o.env, x, x + bar * 2) - energy(o.env, x - bar * 2, x); if (rise > best) { best = rise; peak = x; } }
      peakPick = pool.filter(function (p) { return !p.caution; }).sort(function (a, b) { return (b.peak ? 2 : 0) + (b.energy || 0) - ((a.peak ? 2 : 0) + (a.energy || 0)); })[0] || null;
      if (!noted) peakPick = null;
    }
    while (t < o.seconds - 0.05) {
      var e = o.env ? energy(o.env, t, t + bar * 2) : 0.5;
      var bars = e > 0.66 ? pace[0] : e > 0.33 ? pace[1] : pace[2];
      // a big rise inside the shot (a drop) gets its own cut, on the bar
      if (o.env) for (var b = 1; b < bars; b++) { if (energy(o.env, t + b * bar, t + (b + 1) * bar) - energy(o.env, t + (b - 1) * bar, t + b * bar) > 0.3) { bars = b; break; } }
      if (peak > t + 0.01 && peak < t + bars * bar - 0.01) bars = Math.max(1, Math.round((peak - t) / bar)); // the drop always gets a cut
      var dur = Math.min(bars * bar, o.seconds - t);
      var choices = pool.filter(function (p) { return recent.indexOf(p.src) < 0 && (!p.dur || p.dur >= Math.min(dur, 3)) && !(p.caution && (cautionUsed || !shots.length)); });
      if (!choices.length) choices = pool.filter(function (p) { return recent[recent.length - 1] !== p.src && !(p.caution && (cautionUsed || !shots.length)); });
      if (!choices.length) choices = pool;
      var pick = peakPick && Math.abs(t - peak) < bar * 0.5 ? peakPick : choose(choices, e, t / o.seconds);
      if (pick.caution) cautionUsed = true;
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

  function energyMap(env, bpm) {
    var bar = 240 / (bpm || 120), out = '';
    for (var t = 0; t < env.seconds; t += bar) out += Math.min(9, Math.round(energy(env, t, t + bar) * 9));
    return out;
  }

  var IDENT_NAMES = ['01-ring', '07-dots', '05-orbit', '10-scan', '04-frame', '09-burst', '02-chevron', '08-slash', '03-split', '06-stack'];
  var CORNERS = ['tr', 'bl', 'tr', 'br', 'tl', 'bl', 'br', 'tl'];
  function finishPlan(o) {
    var idents = [], t = 15, i = 0;
    while (t + 8 < o.seconds - 12) { idents.push({ t: t, name: IDENT_NAMES[i % IDENT_NAMES.length], corner: CORNERS[i % CORNERS.length] }); t += 19; i++; }
    // the two biggest hits: cuts where the loudness jumps most, at least 20 s apart, away from the ends
    var cuts = layout(o.shots).filter(function (s) { return s.start > 12 && s.start < o.seconds - 15; }).map(function (s) {
      return { t: s.start, hit: o.env ? energy(o.env, s.start, s.start + 2) * 0.5 + (energy(o.env, s.start, s.start + 1.5) - energy(o.env, s.start - 1.5, s.start)) : s.dur };
    }).sort(function (a, b) { return b.hit - a.hit; });
    var mattes = [];
    cuts.forEach(function (c) {
      if (mattes.length < 2 && mattes.every(function (m) { return Math.abs(m.t0 - c.t) > 20; }))
        mattes.push({ t0: Math.max(0, c.t - 0.4), t1: (c.t + 60) % Math.max(1, o.seconds - 20) + 5 });
    });
    return { idents: idents, mattes: mattes };
  }
  // one matte flash: 8 s of the video at t0, with t1 showing through a moving technical shape
  function matteArgs(o) {
    return ['-v', 'error', '-y', '-ss', o.t0.toFixed(2), '-t', '8', '-i', o.base, '-ss', o.t1.toFixed(2), '-t', '8', '-i', o.base, '-i', o.mask,
      '-filter_complex', '[0:v]setpts=PTS-STARTPTS,format=yuv420p[a];[1:v]setpts=PTS-STARTPTS,format=yuv420p[b];[2:v]format=gray,scale=1920:1080,format=yuv420p[m];[a][b][m]maskedmerge=planes=1[v]',
      '-map', '[v]', '-an', '-c:v', 'libx264', '-crf', '14', o.out];
  }
  // the mattes and faint corner idents laid over the base cut; the sound is copied untouched
  function finishArgs(o) {
    var W = 1920, H = 1080, IW = 400, M = 56;
    var pos = { tl: [M, M], tr: [W - IW - M, M], bl: [M, H - Math.floor(IW * 9 / 16) - M], br: [W - IW - M, H - Math.floor(IW * 9 / 16) - M] };
    var args = ['-v', 'error', '-y', '-i', o.base], chain = [], last = '0:v', k = 1;
    o.mattes.forEach(function (m, i) {
      args.push('-itsoffset', m.t0.toFixed(2), '-i', m.file);
      chain.push('[' + last + '][' + k + ':v]overlay=eof_action=pass[m' + i + ']'); last = 'm' + i; k++;
    });
    o.idents.forEach(function (d, i) {
      args.push('-itsoffset', d.t.toFixed(2), '-i', d.file);
      var p = pos[d.corner] || pos.tr;
      // alpha from brightness, with the black floor cut away so no box shows on bright shots
      chain.push('[' + k + ':v]scale=' + IW + ':-2,format=gray,split[w' + i + '][l' + i + '];[w' + i + ']lutyuv=y=255[ww' + i + '];[l' + i + "]lut=y='max(val-24\\,0)*0.55'[la" + i + '];' +
        '[ww' + i + '][la' + i + ']alphamerge[id' + i + '];[' + last + '][id' + i + ']overlay=' + p[0] + ':' + p[1] + ':eof_action=pass[o' + i + ']');
      last = 'o' + i; k++;
    });
    chain.push('[' + last + ']format=yuv420p[v]');
    return args.concat(['-filter_complex', chain.join(';'), '-map', '[v]', '-map', '0:a', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18',
      '-maxrate', '14M', '-bufsize', '28M', '-c:a', 'copy', '-movflags', '+faststart', o.out]);
  }

  root.VXEDIT = { STEP: STEP, envelope: envelope, autoCut: autoCut, layout: layout, at: at, ffmpegArgs: ffmpegArgs, PACE: PACE,
    energyMap: energyMap, finishPlan: finishPlan, matteArgs: matteArgs, finishArgs: finishArgs, IDENT_NAMES: IDENT_NAMES };
})(typeof window !== 'undefined' ? window : this);
