/* The EDIT tab's render engine: an edit written as an MLT project (the engine inside Shotcut and Kdenlive), rendered
 * with melt, and openable in Shotcut so any VexVoid edit can be finished by hand.
 *
 *   VXMLT.project({ title, w, h, fps, seconds, track, shots, flashes, idents, mattes, mask, letterbox, grade }) -> XML
 *   VXMLT.renderArgs(mltFile, outFile, { crf }) -> argv for melt
 *
 *   shots   [{ file, name, in, dur, start, speed, srcDur }]  the cut on V1 (seconds); without start, shots run end to
 *                                         end; gaps are black; short clips loop rather than leave a gap; speed (negative
 *                                         = backwards) uses MLT's timewarp, which needs srcDur (the file's length) to loop
 *   overlay [{ file, name, in, dur, start, x, y, scale, opacity }]  V2 over V1 where it has items: full frame, or
 *                                         scaled (scale 1 = full frame), moved (x, y: centre offset as a fraction of the
 *                                         frame) and faded (opacity 0-1), held for each item
 *   titles  [{ file, start, dur }]           rendered titles (video with alpha, e.g. QuickTime RLE), over everything
 *   trans   [{ kind, a, b, file, in }]       transitions on V1 cuts, a..b in seconds: 'cross' plays file (the outgoing
 *                                         shot, from its source time in) over V1 and fades it out, under V2; 'black' and
 *                                         'white' dip the whole picture (over V2 and the mattes, under idents and titles)
 *   flashes [seconds]                     a two-frame white flash frame on each of these cuts
 *   idents  [{ t, file, dur, corner }]     faint corner idents (tl tr bl br), screen-blended at 55%
 *   mattes  [{ t0, t1 }]                   8 s at t0 showing the edit's own moment t1 through the moving mask
 *   letterbox  aspect ratio, e.g. 2.39 (0 = none)
 *   grade   { contrast, brightness, saturation, gamma, lut, vignette }   (avfilter eq / lut3d / vignette)
 *
 * Tracks, in Shotcut's order: 0 black background, 1 shots, 2 crossfades, 3 overlay, 4 mattes, 5 dips, 6 idents,
 * 7 titles, 8 music. Video tracks composite onto
 * track 0 with qtblend; the music joins with mix. Times are frames (MLT's out points are inclusive).
 */
(function (root) {
  'use strict';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function prop(name, value) { return '<property name="' + esc(name) + '">' + esc(value) + '</property>'; }

  function project(o) {
    var w = o.w || 1920, h = o.h || 1080, fps = o.fps || 30, F = function (t) { return Math.round(t * fps); };
    var total = F(o.seconds), out = [], producers = {}, pid = 0;
    function producer(file, loop, speed) {
      speed = speed || 1;
      var key = file + (loop ? '#loop' : '') + (speed !== 1 ? '@' + speed : '');
      if (producers[key]) return producers[key];
      var id = 'clip' + (pid++);
      // shots fill the frame (scale up, crop the overflow) rather than sit in black bars like MLT's default fit
      var fill = loop ? '<filter mlt_service="crop">' + prop('center', 1) + prop('use_profile', 1) + '</filter>' : '';
      if (speed !== 1) { out.push('<producer id="' + id + '">' + prop('resource', speed + ':' + file) + prop('mlt_service', 'timewarp') + prop('shotcut:caption', file.split('/').pop() + ' ' + speed + 'x') + fill + '</producer>'); producers[key] = id; return id; }
      out.push('<producer id="' + id + '">' + prop('resource', file) + prop('mlt_service', 'avformat') +
        (loop ? prop('eof', 'loop') + prop('length', 1e7) : '') + prop('shotcut:caption', file.split('/').pop()) + fill + '</producer>');
      producers[key] = id;
      return id;
    }

    out.push('<profile description="HD ' + h + 'p ' + fps + ' fps" width="' + w + '" height="' + h + '" progressive="1" sample_aspect_num="1" sample_aspect_den="1" display_aspect_num="' + w + '" display_aspect_den="' + h + '" frame_rate_num="' + fps + '" frame_rate_den="1" colorspace="709"/>');
    out.push('<playlist id="main_bin">' + prop('xml_retain', 1) + '</playlist>');
    out.push('<producer id="black" in="0" out="' + (total - 1) + '">' + prop('length', total) + prop('eof', 'pause') + prop('resource', '0') + prop('mlt_service', 'color') + prop('mlt_image_format', 'rgba') + prop('set.test_audio', 0) + '</producer>');
    out.push('<producer id="flash">' + prop('length', 1e7) + prop('resource', '#ffffff') + prop('mlt_service', 'color') + '</producer>');
    out.push('<producer id="dip">' + prop('length', 1e7) + prop('resource', '#000000') + prop('mlt_service', 'color') + '</producer>');

    // the cut, laid out on frames from cumulative times so rounding never drifts
    function lay(list) { var t = 0; return (list || []).map(function (s) { var st = s.start != null ? s.start : t; t = st + s.dur; return { s: s, start: st }; }).sort(function (a, b) { return a.start - b.start; }); }
    var layout = lay(o.shots);
    var flashAt = {}; (o.flashes || []).forEach(function (x) { flashAt[F(x)] = true; });
    // n frames of a clip from in-point inF: one entry, or for a sped-up clip (timewarp does not loop) entries that wrap
    // round its length, counted in its own sped-up frames
    function clipEntries(s, inF, n) {
      var speed = s.speed || 1, id = producer(s.file, true, speed);
      if (speed === 1 || !s.srcDur) return ['<entry producer="' + id + '" in="' + inF + '" out="' + (inF + n - 1) + '"/>'];
      var Lw = Math.max(1, Math.floor(s.srcDur * fps / Math.abs(speed))), pl = [], k = inF % Lw;
      while (n > 0) { var m = Math.min(n, Lw - k); pl.push('<entry producer="' + id + '" in="' + k + '" out="' + (k + m - 1) + '"/>'); n -= m; k = 0; }
      return pl;
    }
    function inFrames(s, sec) { return F(sec / Math.abs(s.speed || 1)); }
    // a video track as a playlist: blanks for the gaps, every entry on frames from its own start so rounding never drifts
    function entries(list, flashes) {
      var pl = [], at = 0;
      list.forEach(function (L) {
        var f0 = Math.max(F(L.start), at), f1 = F(L.start + L.s.dur), n = f1 - f0, inF = inFrames(L.s, L.s.in || 0) + (f0 - F(L.start));
        if (n <= 0) return;
        if (f0 > at) pl.push('<blank length="' + (f0 - at) + '"/>');
        if (flashes && flashAt[f0] && n > 4) { pl.push('<entry producer="flash" in="0" out="1"/>'); n -= 2; inF += 2; }
        pl.push.apply(pl, clipEntries(L.s, inF, n));
        at = f1;
      });
      return pl;
    }
    var v1 = entries(layout, true), ov = entries(lay(o.overlay), false);
    // V2 placement: one discrete keyframe per item on the overlay track's blend
    var ovKeys = [], ovMoved = (o.overlay || []).some(function (s) { return (s.scale != null && s.scale !== 1) || s.x || s.y || (s.opacity != null && s.opacity !== 1); });
    if (ovMoved) lay(o.overlay).forEach(function (L) {
      var s = L.s, sc = s.scale == null ? 1 : s.scale, ww = Math.round(w * sc), hh = Math.round(h * sc);
      ovKeys.push(F(L.start) + '|=' + Math.round(w / 2 + (s.x || 0) * w - ww / 2) + ' ' + Math.round(h / 2 + (s.y || 0) * h - hh / 2) + ' ' + ww + ' ' + hh + ' ' + (s.opacity == null ? 1 : s.opacity));
    });
    // transitions: crossfades on one track over V1, dips on another over everything but idents and titles; each track's
    // opacity is keyframed (linear) through its transitions
    function transTrack(list) {
      var pl = [], at = 0, keys = [], R = '0 0 ' + w + ' ' + h + ' ';
      list.slice().sort(function (p, q) { return p.a - q.a; }).forEach(function (T) {
        var f0 = Math.max(F(T.a), at), n = F(T.b) - f0;
        if (n < 2) return;
        if (f0 > at) pl.push('<blank length="' + (f0 - at) + '"/>');
        if (T.kind === 'cross') { pl.push.apply(pl, clipEntries({ file: T.file, speed: T.speed, srcDur: T.srcDur }, inFrames(T, T.in || 0), n)); keys.push(f0 + '=' + R + '1', (f0 + n - 1) + '=' + R + '0'); }
        else { pl.push('<entry producer="' + (T.kind === 'white' ? 'flash' : 'dip') + '" in="0" out="' + (n - 1) + '"/>'); keys.push(f0 + '=' + R + '0', (f0 + Math.floor(n / 2)) + '=' + R + '1', (f0 + n - 1) + '=' + R + '0'); }
        at = f0 + n;
      });
      return { pl: pl, keys: keys };
    }
    var TX = transTrack((o.trans || []).filter(function (T) { return T.kind === 'cross'; })), DP = transTrack((o.trans || []).filter(function (T) { return T.kind !== 'cross'; }));
    // titles: each its own file, already the right length, never looped or cropped
    var tt = [], att = 0;
    lay(o.titles).forEach(function (L) {
      var f0 = Math.max(F(L.start), att), f1 = F(L.start + L.s.dur), n = f1 - f0;
      if (n <= 0) return;
      if (f0 > att) tt.push('<blank length="' + (f0 - att) + '"/>');
      tt.push('<entry producer="' + producer(L.s.file, false) + '" in="' + (f0 - F(L.start)) + '" out="' + (f0 - F(L.start) + n - 1) + '"/>');
      att = f1;
    });

    // mattes: each is a playlist of the edit's own slice t1..t1+8 with the mask's luma as its alpha
    var mattePl = [], v2 = [], at = 0;
    (o.mattes || []).forEach(function (m, k) {
      var ents = [], a = m.t1, b = m.t1 + 8, c = F(a);
      layout.forEach(function (L) {
        var s0 = L.start, s1 = L.start + L.s.dur, lo = Math.max(a, s0), hi = Math.min(b, s1);
        if (hi - lo < 1 / fps) return;
        var inF = inFrames(L.s, (L.s.in || 0) + (lo - s0) * Math.abs(L.s.speed || 1)), n = F(hi) - F(lo);
        if (F(lo) > c) ents.push('<blank length="' + (F(lo) - c) + '"/>');
        if (n > 0) { ents.push.apply(ents, clipEntries(L.s, inF, n)); c = F(hi); }
      });
      if (!ents.length || !o.mask) return;
      var id = 'matte' + k;
      mattePl.push('<playlist id="' + id + '">' + prop('shotcut:caption', 'matte flash ' + (k + 1)) + ents.join('') +
        '<filter mlt_service="shape">' + prop('resource', o.mask) + prop('use_luminance', 1) + prop('use_mix', 0) + prop('invert_mask', 0) + '</filter></playlist>');
      var f0 = F(m.t0);
      if (f0 > at) v2.push('<blank length="' + (f0 - at) + '"/>');
      v2.push('<entry producer="' + id + '" in="0" out="' + (F(8) - 1) + '"/>');
      at = f0 + F(8);
    });

    // idents: faint, screen-blended, one corner each (the corner moves with keyframes on the one transition)
    var v3 = [], at3 = 0, rect = [], IW = 400, IH = Math.round(IW * 9 / 16), M = 56;
    var pos = { tl: [M, M], tr: [w - IW - M, M], bl: [M, h - IH - M], br: [w - IW - M, h - IH - M] };
    (o.idents || []).forEach(function (d) {
      var f0 = F(d.t), n = F(d.dur || 4);
      if (f0 < at3) return;
      if (f0 > at3) v3.push('<blank length="' + (f0 - at3) + '"/>');
      v3.push('<entry producer="' + producer(d.file, false) + '" in="0" out="' + (n - 1) + '">' +
        '<filter mlt_service="avfilter.lutyuv">' + prop('av.y', 'max(val-24,0)') + '</filter></entry>');
      var p = pos[d.corner] || pos.tr;
      rect.push(f0 + '|=' + p[0] + ' ' + p[1] + ' ' + IW + ' ' + IH + ' 0.55');
      at3 = f0 + n;
    });

    var music = o.track ? producer(o.track, false) : null;
    out.push.apply(out, mattePl);
    out.push('<playlist id="background">' + prop('shotcut:video', 1) + '<entry producer="black" in="0" out="' + (total - 1) + '"/></playlist>');
    out.push('<playlist id="v1">' + prop('shotcut:video', 1) + prop('shotcut:name', 'V1 shots') + v1.join('') + '</playlist>');
    out.push('<playlist id="tx">' + prop('shotcut:video', 1) + prop('shotcut:name', 'V1 crossfades') + TX.pl.join('') + '</playlist>');
    out.push('<playlist id="dp">' + prop('shotcut:video', 1) + prop('shotcut:name', 'dips') + DP.pl.join('') + '</playlist>');
    out.push('<playlist id="ov">' + prop('shotcut:video', 1) + prop('shotcut:name', 'V2 overlay') + ov.join('') + '</playlist>');
    out.push('<playlist id="v2">' + prop('shotcut:video', 1) + prop('shotcut:name', 'V3 mattes') + v2.join('') + '</playlist>');
    out.push('<playlist id="v3">' + prop('shotcut:video', 1) + prop('shotcut:name', 'V4 idents') + v3.join('') + '</playlist>');
    out.push('<playlist id="tt">' + prop('shotcut:video', 1) + prop('shotcut:name', 'V5 titles') + tt.join('') + '</playlist>');
    out.push('<playlist id="a1">' + prop('shotcut:audio', 1) + prop('shotcut:name', 'A1 music') + (music ? '<entry producer="' + music + '" in="0" out="' + (total - 1) + '"/>' : '') + '</playlist>');

    // the whole picture: grade, then letterbox
    var filters = [], g = o.grade || {};
    if (g.contrast != null || g.brightness != null || g.saturation != null || g.gamma != null)
      filters.push('<filter mlt_service="avfilter.eq">' + (g.contrast != null ? prop('av.contrast', g.contrast) : '') + (g.brightness != null ? prop('av.brightness', g.brightness) : '') +
        (g.saturation != null ? prop('av.saturation', g.saturation) : '') + (g.gamma != null ? prop('av.gamma', g.gamma) : '') + '</filter>');
    if (g.lut) filters.push('<filter mlt_service="avfilter.lut3d">' + prop('av.file', g.lut) + '</filter>');
    if (g.vignette) filters.push('<filter mlt_service="avfilter.vignette">' + prop('av.angle', g.vignette) + '</filter>');
    if (o.letterbox && o.letterbox > w / h) {
      var bar = Math.round((h - w / o.letterbox) / 2);
      ['0', String(h - bar)].forEach(function (y) {
        filters.push('<filter mlt_service="avfilter.drawbox">' + prop('av.x', 0) + prop('av.y', y) + prop('av.w', w) + prop('av.h', bar) + prop('av.color', 'black') + prop('av.t', 'fill') + '</filter>');
      });
    }

    out.push('<tractor id="tractor0" title="' + esc(o.title || 'V3XV0ID edit') + '">' + prop('shotcut', 1) +
      '<track producer="background"/><track producer="v1" hide="audio"/><track producer="tx" hide="audio"/><track producer="ov" hide="audio"/><track producer="v2" hide="audio"/><track producer="dp" hide="audio"/><track producer="v3" hide="audio"/><track producer="tt" hide="audio"/><track producer="a1" hide="video"/>' +
      '<transition mlt_service="mix">' + prop('a_track', 0) + prop('b_track', 8) + prop('always_active', 1) + prop('sum', 1) + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 1) + prop('compositing', 0) + prop('distort', 0) + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 2) + prop('compositing', 0) + prop('distort', 0) + (TX.keys.length ? prop('rect', TX.keys.join(';')) : '') + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 3) + prop('compositing', 0) + prop('distort', 0) + (ovKeys.length ? prop('rect', ovKeys.join(';')) : '') + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 4) + prop('compositing', 0) + prop('distort', 0) + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 5) + prop('compositing', 0) + prop('distort', 0) + (DP.keys.length ? prop('rect', DP.keys.join(';')) : '') + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 6) + prop('compositing', 14) + prop('distort', 0) + (rect.length ? prop('rect', rect.join(';')) : '') + '</transition>' +
      '<transition mlt_service="qtblend">' + prop('a_track', 0) + prop('b_track', 7) + prop('compositing', 0) + prop('distort', 0) + '</transition>' +
      filters.join('') + '</tractor>');

    return '<?xml version="1.0" standalone="no"?>\n<mlt LC_NUMERIC="C" version="7.42.0" title="' + esc(o.title || 'V3XV0ID edit') + '" producer="main_bin">\n' + out.join('\n') + '\n</mlt>\n';
  }

  function renderArgs(mlt, file, opt) {
    opt = opt || {};
    return [mlt, '-progress', '-consumer', 'avformat:' + file, 'vcodec=libx264', 'crf=' + (opt.crf || 20), 'preset=medium', 'pix_fmt=yuv420p',
      'acodec=aac', 'ab=256k', 'movflags=+faststart', 'real_time=-4'];
  }

  root.VXMLT = { project: project, renderArgs: renderArgs };
})(typeof window !== 'undefined' ? window : this);
