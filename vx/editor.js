/* The EDIT tab's engine: a music video as a list of shots cut to a track. Pure logic; the page does the UI.
 *
 *   VXEDIT.envelope(bytes) -> { rms: Float32Array (one value per STEP seconds, 0..1), step, seconds, bpm, bar0, tempoConf }
 *   VXEDIT.tempo(channels, sampleRate) -> { bpm, beat0, bar0, conf }: the track's tempo and where its bars start
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
    var tp = tempo(chans, sr);
    return { rms: rms, step: STEP, seconds: ab.duration, bpm: tp.bpm, bar0: tp.bar0, tempoConf: tp.conf };
  }

  // Tempo from the audio: an onset curve (rises in loudness: full band, a kick band and a snare/hat band), every
  // candidate tempo from 70 to 190 BPM scored by how hard its best beat grid lands on hits, refined to 0.05 BPM.
  // Then the beat phase and the downbeat: of the four beats in a bar, the one with the most kick.
  function tempo(chans, sr) {
    var hop = 512, len = chans[0].length, n = Math.floor(len / hop), fps = sr / hop;
    var full = new Float32Array(n), low = new Float32Array(n), high = new Float32Array(n), highLin = new Float32Array(n), lp = 0, lp2 = 0, nc = chans.length;
    var a = 1 - Math.exp(-2 * Math.PI * 150 / sr), a2 = 1 - Math.exp(-2 * Math.PI * 1500 / sr);
    for (var i = 0; i < n; i++) {
      var ef = 0, el = 0, eh = 0;
      for (var j = i * hop; j < (i + 1) * hop; j++) {
        var v = 0; for (var c = 0; c < nc; c++) v += chans[c][j]; v /= nc;
        lp += a * (v - lp); lp2 += a2 * (v - lp2); ef += v * v; el += lp * lp; eh += (v - lp2) * (v - lp2);
      }
      full[i] = Math.log(1 + 1000 * ef); low[i] = Math.log(1 + 1000 * el); high[i] = Math.log(1 + 1000 * eh); highLin[i] = Math.sqrt(eh / hop);
    }
    var o = new Float32Array(n);
    for (i = 1; i < n; i++) o[i] = Math.max(0, full[i] - full[i - 1]) + Math.max(0, low[i] - low[i - 1]) + 0.7 * Math.max(0, high[i] - high[i - 1]);
    // take away the local average so sustained loud passages do not swamp the beat
    var w = Math.round(fps * 0.4), acc = 0, avg = new Float32Array(n);
    for (i = 0; i < n; i++) { acc += o[i]; if (i >= w) acc -= o[i - w]; avg[i] = acc / Math.min(i + 1, w); }
    var tot = 0;
    for (i = 0; i < n; i++) { o[i] = Math.max(0, o[i] - avg[i]); tot += o[i]; }
    var meanO = tot / n || 1;
    // the grid at this tempo that lands on the most onset strength, and its phase
    function fit(bpmTry) { var Pp = 60 * fps / bpmTry, bs = -1, bp = 0, cnt = 1; for (var p = 0; p < Pp; p += 0.5) { var s2 = 0, k = 0; for (var t = p; t < n; t += Pp) { var r = Math.round(t); s2 += Math.max(o[r] || 0, o[r - 1] || 0, o[r + 1] || 0); k++; } if (s2 > bs) { bs = s2; bp = p; cnt = k; } } return { s: bs, p: bp, mean: bs / cnt }; }
    // choose the tempo: autocorrelation of the onset curve with a comb over 1, 2 and 4 beats (binary metre; a 3-beat
    // term turned syncopated kicks into two-thirds errors) and a mild preference for 85-175 BPM
    function ac(L) { var s4 = 0, k4 = 0, fl = Math.floor(L), fr4 = L - fl; for (var x = 0; x + fl + 1 < n; x++) { s4 += o[x] * (o[x + fl] * (1 - fr4) + o[x + fl + 1] * fr4); k4++; } return k4 ? s4 / k4 : 0; }
    var best = -1, bestL = fps / 2, scores = [];
    for (var L = fps * 60 / 200; L <= fps; L += 0.25) {
      var bpmL = 60 * fps / L, comb = ac(L) + 0.6 * ac(2 * L) + 0.5 * ac(4 * L);
      var pr = Math.log2(bpmL / 125) / 0.8, sc = comb * Math.exp(-0.5 * pr * pr);
      scores.push(sc);
      if (sc > best) { best = sc; bestL = L; }
    }
    var bpmOut = 60 * fps / bestL;
    while (bpmOut < 80) bpmOut *= 2;
    while (bpmOut > 180) bpmOut /= 2;
    var mean = scores.reduce(function (p, q) { return p + q; }, 0) / scores.length;
    // refine to 0.05 BPM by total fit (a 0.5 BPM error drifts a whole beat in two minutes); DAW tracks sit on whole
    // numbers, so snap when close
    function refine(c) {
      var bf = fit(c), bt = c;
      for (var tb = c - 1; tb <= c + 1; tb += 0.05) { var fr = fit(tb); if (fr.s > bf.s) { bf = fr; bt = tb; } }
      bt = Math.abs(bt - Math.round(bt)) < 0.2 ? Math.round(bt) : Math.round(bt * 10) / 10;
      return { bpm: bt, mean: fit(bt).mean };
    }
    var rd = refine(bpmOut); bpmOut = rd.bpm;
    var P = 60 * fps / bpmOut, bestP = fit(bpmOut).p, t;
    var rise = function (arr, at) { var r = Math.round(at), m = 0; for (var d = -1; d <= 1; d++) m = Math.max(m, (arr[r + d] || 0) - (arr[r + d - 2] || 0)); return Math.max(0, m); };
    // check against the backbeat. In almost all modern music the snare repeats every two beats, so its period gives
    // the true tempo. Autocorrelation can lock onto half the tempo (87 for 174 drum and bass) or a three-to-two
    // relative (116 for 174, 120 for 90 boom-bap); when the backbeat says one of those, take its tempo instead.
    var ho = new Float32Array(n), ha = 0;
    for (i = 1; i < n; i++) ho[i] = Math.max(0, highLin[i] - highLin[i - 1]); // linear: loud snares outweigh quiet hats, as to the ear
    for (i = 0; i < n; i++) { ha += ho[i]; if (i >= w) ha -= ho[i - w]; avg[i] = ha / Math.min(i + 1, w); }
    for (i = 0; i < n; i++) ho[i] = Math.max(0, ho[i] - avg[i]);
    var hac = function (L) { var s3 = 0, k3 = 0; for (var x = 0; x + L < n; x++) { s3 += ho[x] * ho[x + L]; k3++; } return k3 ? s3 / k3 : 0; };
    // the backbeat repeats every two beats and also every bar (four), so take the shortest strong repeat: the first
    // peak within 75% of the strongest, not the strongest itself
    var L0 = Math.round(0.6 * fps), L1 = Math.round(1.75 * fps), hv = [], bestH = 0, bestHL = 0; // 2 beats at 200 down to 69 BPM
    for (var Lh = L0 - 1; Lh <= L1 + 1; Lh++) hv.push(hac(Lh));
    for (Lh = 1; Lh < hv.length - 1; Lh++) bestH = Math.max(bestH, hv[Lh]);
    for (Lh = 1; Lh < hv.length - 1; Lh++) if (hv[Lh] >= hv[Lh - 1] && hv[Lh] >= hv[Lh + 1] && hv[Lh] >= 0.75 * bestH) { bestHL = L0 - 1 + Lh; break; }
    // only a real backbeat counts: snares alternate, so the two-beat repeat must clearly beat the one-beat repeat
    // (hats ticking every beat repeat just as strongly at both, and say nothing about the tempo)
    var backbeat = bestHL && hac(bestHL) > 1.5 * hac(Math.round(bestHL / 2));
    var implied = backbeat ? 120 * fps / bestHL : 0, ratio = implied / bpmOut;
    var ri = implied ? refine(implied) : null;
    if (typeof globalThis !== 'undefined' && globalThis.VXEDIT_DEBUG) console.log('  backbeat', (bestHL / fps).toFixed(3), 's -> implies', implied.toFixed(1), 'BPM; detected', bpmOut, ri ? 'fit ratio ' + (ri.mean / rd.mean).toFixed(3) : '');
    var rels = bpmOut < 100 ? [2, 1.5, 4 / 3, 0.75, 2 / 3] : [1.5, 4 / 3, 0.75, 2 / 3];
    // and the backbeat's tempo has to fit all the other hits (kicks and the rest) about as well as the detected one:
    // a real backbeat always does, a phantom one (odd repeats of kick clicks and hats) does not
    if (implied >= 70 && implied <= 190 && rels.some(function (r) { return Math.abs(ratio / r - 1) < 0.04; }) && ri.mean >= 0.9 * rd.mean) {
      bpmOut = ri.bpm; P = 60 * fps / bpmOut; bestP = fit(bpmOut).p;
    } else {
      // no backbeat to ask: settle a three-to-two slip by the grid itself. At the true tempo every beat lands on a
      // hit; at two thirds (or three halves) every other beat lands on a gap or a hat. Only that pair: across half,
      // double or 3:4 the sparser grid always looks stronger.
      var swap = null;
      [1.5, 2 / 3].forEach(function (r) {
        var c3 = bpmOut * r; if (c3 < 80 || c3 > 190) return;
        var rc = refine(c3); if (rc.mean > 1.2 * rd.mean && (!swap || rc.mean > swap.mean)) swap = rc;
      });
      if (swap) { bpmOut = swap.bpm; P = 60 * fps / bpmOut; bestP = fit(bpmOut).p; }
    }
    // the downbeat: of the four beats in a bar, the one with the most kick, the least snare (snares live on 2 and 4),
    // and where the music's sections change (big jumps in loudness start on bar 1 of a phrase)
    var bestB = 0, bestK = -Infinity, bars = Math.max(1, Math.round(n / (4 * P)));
    for (var b = 0; b < 4; b++) {
      var k2 = 0;
      for (t = bestP + b * P; t < n; t += 4 * P) {
        var r = Math.round(t), before = 0, after = 0;
        for (var q = 1; q <= Math.round(2 * P); q++) { before += full[r - q] || 0; after += full[r + q] || 0; }
        k2 += rise(low, t) - 0.5 * rise(high, t) + 0.5 * Math.max(0, (after - before) / Math.round(2 * P));
      }
      if (k2 / bars > bestK) { bestK = k2 / bars; bestB = b; }
    }
    var barLen = 240 / bpmOut, bar0 = ((bestP + bestB * P) / fps) % barLen;
    if (bar0 > barLen - 0.15) bar0 = 0; // a downbeat a hair under a bar in is really bar 1 at the start
    return { bpm: bpmOut, beat0: bestP / fps, bar0: Math.round(bar0 * 1000) / 1000, conf: Math.round(Math.min(1, (best / (mean || 1) - 1) / 2) * 100) / 100 };
  }
  function energy(env, from, to) {
    var a = Math.floor(from / env.step), b = Math.max(a + 1, Math.ceil(to / env.step)), s = 0, k = 0;
    for (var i = a; i < b && i < env.rms.length; i++) { s += env.rms[i]; k++; }
    return k ? s / k : 0;
  }

  // pace: how many bars a shot holds at full, mid and low energy (half a bar = two beats, still on the beat)
  var PACE = { fast: [0.5, 1, 2], medium: [1, 2, 4], slow: [2, 4, 8] };
  function autoCut(o) {
    var bar = 240 / (o.bpm || 120), off = o.offset || 0, pace = PACE[o.pace] || PACE.medium, pool = (o.pool || []).filter(function (p) { return p && p.src; });
    if (!pool.length) throw new Error('no clips to cut with');
    var shots = [], recent = [], t = 0, seed = 1, cautionUsed = false;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    var noted = pool.some(function (p) { return p.energy != null || p.phase; });
    // a clip's scene: its name without the take number (FAST FOUR TON SHADOW B01 3 -> ...B01); studio rule: consecutive
    // shots come from different scenes where possible
    function scene(p) { return String(p.name || p.src).replace(/\s+\d+$/, ''); }
    var lastScenes = [];
    // with notes: score each candidate by how well its energy fits the bar and its phase fits the point in the track
    function choose(list, e, at) {
      if (!noted) return list[Math.floor(rnd() * list.length)];
      var want = at < 0.4 ? 'rough' : at < 0.65 ? 'bridge' : 'smooth';
      var scored = list.map(function (p) {
        var s = p.energy != null ? 1 - Math.abs(p.energy - e) : 0.5;
        if (p.phase) s += p.phase === want ? 0.5 : p.phase === 'bridge' || want === 'bridge' ? 0.15 : 0;
        if (p.favourite) s += 0.3;
        if (p.filler) s -= 0.4;
        var sc = scene(p);
        if (lastScenes[lastScenes.length - 1] === sc) s -= 0.9; else if (lastScenes.indexOf(sc) >= 0) s -= 0.35;
        return { p: p, s: s + rnd() * 0.35 };
      }).sort(function (a, b) { return b.s - a.s; });
      return scored[0].p;
    }
    // the biggest drop: where the loudness jumps most from one bar to the next
    var peak = -1, peakPick = null;
    if (o.env) {
      var best = 0;
      for (var x = off + bar * 4; x < o.seconds - bar * 4; x += bar) { var rise = energy(o.env, x, x + bar * 2) - energy(o.env, x - bar * 2, x); if (rise > best) { best = rise; peak = x; } }
      peakPick = pool.filter(function (p) { return !p.caution; }).sort(function (a, b) { return (b.peak ? 2 : 0) + (b.energy || 0) - ((a.peak ? 2 : 0) + (a.energy || 0)); })[0] || null;
      if (!noted) peakPick = null;
    }
    while (t < o.seconds - 0.05) {
      var e = o.env ? energy(o.env, t, t + bar * 2) : 0.5;
      var bars = e > 0.66 ? pace[0] : e > 0.33 ? pace[1] : pace[2];
      // a big rise inside the shot (a drop) gets its own cut, on the bar
      if (o.env) for (var b = 1; b < bars; b++) { if (energy(o.env, t + b * bar, t + (b + 1) * bar) - energy(o.env, t + (b - 1) * bar, t + b * bar) > 0.3) { bars = b; break; } }
      if (peak > t + 0.01 && peak < t + bars * bar - 0.01) bars = Math.max(1, Math.round((peak - t) / bar)); // the drop always gets a cut
      var dur = Math.min(bars * bar + (shots.length ? 0 : off), o.seconds - t); // the first shot absorbs any pickup before bar 1
      var choices = pool.filter(function (p) { return recent.indexOf(p.src) < 0 && (!p.dur || p.dur >= Math.min(dur, 3)) && !(p.caution && (cautionUsed || !shots.length)); });
      if (!choices.length) choices = pool.filter(function (p) { return recent[recent.length - 1] !== p.src && !(p.caution && (cautionUsed || !shots.length)); });
      if (!choices.length) choices = pool;
      var pick = peakPick && Math.abs(t - peak) < bar * 0.5 ? peakPick : choose(choices, e, t / o.seconds);
      if (pick.caution) cautionUsed = true;
      lastScenes.push(scene(pick)); if (lastScenes.length > 3) lastScenes.shift();
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

  function energyMap(env, bpm, offset) {
    var bar = 240 / (bpm || 120), out = '';
    for (var t = offset || 0; t < env.seconds; t += bar) out += Math.min(9, Math.round(energy(env, t, t + bar) * 9));
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
    energyMap: energyMap, tempo: tempo, finishPlan: finishPlan, matteArgs: matteArgs, finishArgs: finishArgs, IDENT_NAMES: IDENT_NAMES };
})(typeof window !== 'undefined' ? window : this);
