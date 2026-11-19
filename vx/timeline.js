/* The EDIT tab's timeline: the project model and every edit made to it, kept apart from the UI so the agent, the
 * mouse and the keyboard all make the same edits (and scripts/test-timeline.js can check them).
 *
 *   project  { tracks: [track], markers: [{ id, t, label }], sections: [{ id, a, b, kind, label }] }  (MUSIC, further down)
 *   track    { id, kind: 'text'|'video'|'audio', name, hidden, locked, muted, items: [item] }   (tracks[0] is the top layer)
 *   item     { id, src, name, start, in, dur }   seconds: where it sits, where in the source it starts, how long it runs
 *            a title on the text track has no src; it carries its TITLES settings instead (text, font, style, mode ...),
 *            and its in is how far into the title's animation it starts
 *            speed: 1 by default, 0.25-4 slower or faster, negative plays it backwards; in counts source seconds
 *            through the clip as it plays (so a cut or trim moves in by the time that passed times the speed)
 *            tr { kind: 'cross'|'black'|'white', dur }: the transition into this clip from the one before it on the track.
 *            A crossfade starts at the cut (the outgoing clip runs on and fades out over this one), so nothing moves
 *            off the beat; a dip to black or white is centred on the cut.
 *
 * Text and video tracks overwrite: an item dropped onto others trims, splits or removes what it covers, as in an NLE.
 * The design (items with start/trim/duration, pixel snap threshold, ruler intervals) follows OpenCut classic's
 * timeline (MIT, github.com/OpenCut-app/OpenCut), rewritten here in plain JS.
 */
(function (root) {
  'use strict';

  var FPS = 30, EPS = 1e-4;
  var uid = 0;
  function id(p) { return (p || 'i') + Date.now().toString(36) + (uid++).toString(36); }
  function r3(t) { return Math.round(t * 1000) / 1000; }
  function end(it) { return it.start + it.dur; }
  function sp(it) { return Math.abs(it.speed || 1); }

  function newProject() {
    return { tracks: [
      { id: 't1', kind: 'text', name: 'T1', hidden: false, locked: false, muted: false, items: [] },
      { id: 'v2', kind: 'video', name: 'V2', hidden: false, locked: false, muted: false, items: [] },
      { id: 'v1', kind: 'video', name: 'V1', hidden: false, locked: false, muted: false, items: [] },
      { id: 'a1', kind: 'audio', name: 'A1', hidden: false, locked: false, muted: false, items: [] }
    ], markers: [], sections: [] };
  }
  function track(p, tid) { return p.tracks.filter(function (t) { return t.id === tid; })[0] || null; }
  function sorted(t) { return t.items.slice().sort(function (a, b) { return a.start - b.start; }); }
  function find(p, iid) {
    for (var i = 0; i < p.tracks.length; i++) for (var j = 0; j < p.tracks[i].items.length; j++)
      if (p.tracks[i].items[j].id === iid) return { track: p.tracks[i], item: p.tracks[i].items[j] };
    return null;
  }
  function length(p) {
    var e = 0;
    p.tracks.forEach(function (t) { if (t.kind !== 'audio') t.items.forEach(function (it) { e = Math.max(e, end(it)); }); });
    return e;
  }
  function itemAt(t, time) {
    for (var i = 0; i < t.items.length; i++) { var it = t.items[i]; if (time >= it.start - EPS && time < end(it) - EPS) return it; }
    return null;
  }
  // an item's other fields (a title's settings) travel with it
  function item(o) { return Object.assign({}, o, { id: o.id || id(), src: o.src, name: o.name || (o.text != null ? String(o.text) : String(o.src).split('/').pop()), start: r3(Math.max(0, o.start || 0)), in: r3(Math.max(0, o.in || 0)), dur: r3(Math.max(1 / FPS, o.dur)) }); }

  // a sequence of shots (the auto-cutter's output) laid end to end
  function fromShots(shots) { var t = 0; return shots.map(function (s) { var it = item({ src: s.src, name: s.name, start: s.start != null ? s.start : t, in: s.in, dur: s.dur }); t = end(it); return it; }); }

  // clear [a, b) on a track: trim, split or remove whatever is there (except the item being placed)
  function clear(t, a, b, keep) {
    var out = [];
    t.items.forEach(function (it) {
      if (it.id === keep || end(it) <= a + EPS || it.start >= b - EPS) { out.push(it); return; }
      if (it.start < a - EPS) out.push(Object.assign({}, it, { dur: r3(a - it.start), fadeOut: undefined }));
      if (end(it) > b + EPS) out.push(Object.assign({}, it, { id: it.start < a - EPS ? id() : it.id, start: r3(b), in: r3(it.in + (b - it.start) * sp(it)), dur: r3(end(it) - b), tr: undefined, fadeIn: undefined }));
    });
    t.items = out;
  }
  // put an item on a track, overwriting what it covers
  function place(t, it) {
    it = item(it);
    clear(t, it.start, end(it), it.id);
    t.items = t.items.filter(function (x) { return x.id !== it.id; }).concat([it]);
    t.items.sort(function (a, b) { return a.start - b.start; });
    return it;
  }
  // cut one item in two at a time; the right half is new (a fade-in stays on the left, a fade-out goes right)
  function cut(t, it, time) {
    var right = Object.assign({}, it, { id: id(), start: r3(time), in: r3(it.in + (time - it.start) * sp(it)), dur: r3(end(it) - time), tr: undefined, fadeIn: undefined });
    it.dur = r3(time - it.start); it.fadeOut = undefined;
    t.items.push(right); t.items.sort(function (a, b) { return a.start - b.start; });
    return right;
  }
  // cut items at a time; returns the ids of the new right-hand halves. Music (audio tracks) is cut only when its items
  // are named in ids or o.audio is set, so the S key still cuts just the pictures unless a music item is selected.
  function split(p, time, ids, o) {
    var made = [];
    p.tracks.forEach(function (t) {
      if (t.locked || (t.kind === 'audio' && !ids && !(o && o.audio))) return;
      t.items.slice().forEach(function (it) {
        if (ids && ids.indexOf(it.id) < 0) return;
        if (time <= it.start + 1 / FPS || time >= end(it) - 1 / FPS) return;
        made.push(cut(t, it, time).id);
      });
    });
    return made;
  }
  // drag an edge: 'in' moves the start and the source in-point together, 'out' changes the length
  function trim(t, iid, edge, time) {
    var it = t.items.filter(function (x) { return x.id === iid; })[0];
    if (!it) return null;
    var min = 1 / FPS;
    if (edge === 'in') {
      var s = Math.min(Math.max(time, it.start - it.in / sp(it), 0), end(it) - min);
      it.in = r3(Math.max(0, it.in + (s - it.start) * sp(it))); it.dur = r3(end(it) - s); it.start = r3(s);
    } else it.dur = r3(Math.max(min, time - it.start));
    // music cannot run past the end of its file (pictures loop instead)
    if (t.kind === 'audio' && it.srcDur) it.dur = r3(Math.max(min, Math.min(it.dur, (it.srcDur - it.in) / sp(it))));
    return place(t, it);
  }
  function remove(p, ids, ripple) {
    p.tracks.forEach(function (t) {
      if (t.locked) return;
      sorted(t).forEach(function (it) {
        if (ids.indexOf(it.id) < 0) return;
        t.items = t.items.filter(function (x) { return x.id !== it.id; });
        if (ripple) t.items.forEach(function (x) { if (x.start >= end(it) - EPS) x.start = r3(x.start - it.dur); });
      });
    });
  }
  // the transitions that apply on a track: each into a clip that butts against the one before it (a crossfade needs that
  // outgoing clip; a dip just needs a cut). Durations are clamped so neighbouring transitions never overlap.
  function transitions(t) {
    var L = sorted(t), out = [];
    L.forEach(function (it, i) {
      if (!it.tr || !it.tr.kind || it.tr.kind === 'cut' || i === 0) return;
      var prev = L[i - 1]; if (Math.abs(end(prev) - it.start) > 0.02) return;
      var d = Math.min(it.tr.dur || 0.5, it.dur * (it.tr.kind === 'cross' ? 0.9 : 1.8), it.tr.kind === 'cross' ? Infinity : prev.dur * 1.8);
      var a = it.tr.kind === 'cross' ? it.start : it.start - d / 2, b = a + d, last = out[out.length - 1];
      if (last && a < last.b) return;
      out.push({ kind: it.tr.kind, a: r3(a), b: r3(b), cut: it.start, from: prev, to: it });
    });
    return out;
  }
  // what a transition shows at time x: p 0..1 through it; for a crossfade the outgoing clip's opacity, for a dip the colour's
  function transitionAt(list, x) {
    for (var i = 0; i < list.length; i++) { var T = list[i]; if (x >= T.a && x < T.b) { var p = (x - T.a) / (T.b - T.a); return { T: T, p: p, alpha: T.kind === 'cross' ? 1 - p : 1 - Math.abs(p * 2 - 1) }; } }
    return null;
  }

  // every edit point, sorted (cuts on visible video tracks, plus 0 and the end)
  function edits(p) {
    var s = { 0: 0 };
    p.tracks.forEach(function (t) { if (t.kind !== 'audio' && !t.hidden) t.items.forEach(function (it) { s[r3(it.start)] = r3(it.start); s[r3(end(it))] = r3(end(it)); }); });
    return Object.keys(s).map(function (k) { return s[k]; }).sort(function (a, b) { return a - b; });
  }

  // snapping: candidate times, then the closest within a pixel threshold (converted to seconds by the zoom)
  function snapPoints(p, o) {
    o = o || {};
    var pts = [];
    p.tracks.forEach(function (t) { t.items.forEach(function (it) { if ((o.exclude || []).indexOf(it.id) < 0) pts.push({ t: it.start, kind: 'edge' }, { t: end(it), kind: 'edge' }); }); });
    p.markers.forEach(function (m) { pts.push({ t: m.t, kind: 'marker' }); });
    (p.sections || []).forEach(function (s) { pts.push({ t: s.a, kind: 'edge' }, { t: s.b, kind: 'edge' }); });
    if (o.playhead != null) pts.push({ t: o.playhead, kind: 'playhead' });
    pts.push({ t: 0, kind: 'edge' });
    // the beat grid: o.grid 'beat' (bars and beats, the default), 'bar' (bars only) or 'off'
    if (o.bpm && o.grid !== 'off') { var beat = 60 / o.bpm, b0 = o.bar0 || 0, until = o.until || span(p) + 60; for (var x = b0 % beat, k = Math.round((x - b0) / beat); x < until; x += beat, k++) { var isBar = ((k % 4) + 4) % 4 === 0; if (isBar || o.grid !== 'bar') pts.push({ t: r3(x), kind: isBar ? 'bar' : 'beat' }); } }
    return pts;
  }
  function snap(time, pts, maxDist) {
    var best = null, d = Infinity;
    pts.forEach(function (q) {
      // edges, markers and the playhead win over the beat grid at the same distance
      var dist = Math.abs(time - q.t) + (q.kind === 'beat' ? maxDist * 0.3 : q.kind === 'bar' ? maxDist * 0.15 : 0);
      if (Math.abs(time - q.t) <= maxDist && dist < d) { d = dist; best = q; }
    });
    return best ? { t: best.t, point: best } : { t: time, point: null };
  }
  // the best snap for an item being moved: either of its edges may catch
  function snapSpan(start, dur, pts, maxDist) {
    var a = snap(start, pts, maxDist), b = snap(start + dur, pts, maxDist);
    if (a.point && (!b.point || Math.abs(a.t - start) <= Math.abs(b.t - start - dur))) return { start: a.t, point: a.point };
    if (b.point) return { start: b.t - dur, point: b.point };
    return { start: start, point: null };
  }

  // the ruler: label and tick intervals that keep labels about 90 px apart and ticks about 12 px apart
  var STEPS = [1 / FPS, 2 / FPS, 5 / FPS, 10 / FPS, 15 / FPS, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600];
  function ruler(pps) {
    var lab = STEPS.filter(function (s) { return s * pps >= 90; })[0] || 600, tick = STEPS.filter(function (s) { return s * pps >= 12; })[0] || 60;
    return { label: lab, tick: Math.min(tick, lab) };
  }
  function timecode(t) {
    t = Math.max(0, t); var f = Math.round(t * FPS), s = Math.floor(f / FPS), m = Math.floor(s / 60);
    return String(m).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0') + ':' + String(f % FPS).padStart(2, '0');
  }

  // undo: snapshots of the project, newest last
  function History(limit) { this.past = []; this.future = []; this.limit = limit || 120; }
  History.prototype.push = function (p) { this.past.push(JSON.stringify(p)); if (this.past.length > this.limit) this.past.shift(); this.future = []; };
  History.prototype.undo = function (cur) { if (!this.past.length) return null; this.future.push(JSON.stringify(cur)); return JSON.parse(this.past.pop()); };
  History.prototype.redo = function (cur) { if (!this.future.length) return null; this.past.push(JSON.stringify(cur)); return JSON.parse(this.future.pop()); };

  // ===== MUSIC: edits to the audio tracks. An audio item is { src, name, start, in, dur } like any other, plus
  //   speed    the time-stretch (0.5-2; 1 = as recorded). It changes the tempo, not the pitch: the export uses ffmpeg's
  //            atempo, the preview an approximate playbackRate with the pitch kept by the browser
  //   gain     linear (1 = as recorded, 0-4); fadeIn / fadeOut seconds on the timeline
  //   tr       { kind: 'cross', dur }: an equal-power crossfade from the item before it on the same track (they must butt)
  //   bpm, bar0  the source's own tempo and first downbeat (source seconds), from the tempo detector, so the item carries
  //            its bar grid through trims, stretches and loops; srcDur the source's length
  //   group, stem  stems imported or split together share a group and sit on parallel tracks
  // Sections (p.sections: { id, a, b, kind, label }) name stretches of the song: intro, build, drop, break, outro.
  // Moving or duplicating a section moves everything in that time range on every unlocked track, so the video follows.
  var SECTION_KINDS = ['intro', 'build', 'drop', 'break', 'outro'];
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function r4(t) { return Math.round(t * 10000) / 10000; }
  function audioTracks(p) { return p.tracks.filter(function (t) { return t.kind === 'audio'; }); }
  function addAudioTrack(p, name) {
    var n = 1; while (track(p, 'a' + n)) n++;
    var t = { id: 'a' + n, kind: 'audio', name: String(name || 'A' + n).toUpperCase().slice(0, 12), hidden: false, locked: false, muted: false, items: [] };
    p.tracks.push(t); return t;
  }
  // extra audio tracks go when they are empty (A1 always stays)
  function pruneAudio(p) { p.tracks = p.tracks.filter(function (t) { return t.kind !== 'audio' || t.id === 'a1' || t.items.length; }); }
  function audioLength(p) { var e = 0; audioTracks(p).forEach(function (t) { t.items.forEach(function (it) { e = Math.max(e, end(it)); }); }); return e; }
  function span(p) { return Math.max(length(p), audioLength(p)); }
  function audioItem(p, iid) { var f = find(p, iid); return f && f.track.kind === 'audio' && !f.track.locked ? f : null; }

  // the bar grid an audio item carries on the timeline: its source's tempo through its in-point and stretch
  function itemGrid(it) {
    if (!it || !it.bpm) return null;
    var s = sp(it), bpm = it.bpm * s, bar = 240 / bpm, b0 = it.start + ((it.bar0 || 0) - it.in) / s;
    b0 = it.start + (((b0 - it.start) % bar) + bar) % bar; // the first downbeat at or after the item's start
    return { bpm: Math.round(bpm * 100) / 100, bar0: r3(b0), beat: 60 / bpm };
  }
  // its beats from start to end: [{ t, bar }]
  function beatsIn(it) {
    var g = itemGrid(it), out = []; if (!g) return out;
    var k0 = Math.ceil((it.start - g.bar0) / g.beat - 1e-6);
    for (var k = k0; g.bar0 + k * g.beat < end(it) - EPS; k++) out.push({ t: r3(g.bar0 + k * g.beat), bar: ((k % 4) + 4) % 4 === 0 });
    return out;
  }
  // the project's grid: the earliest item on a sounding audio track that knows its tempo leads
  function grid(p) {
    var best = null;
    audioTracks(p).forEach(function (t) { if (t.muted) return; t.items.forEach(function (it) { if (it.bpm && (!best || it.start < best.start - EPS || (Math.abs(it.start - best.start) < EPS && it.dur > best.dur))) best = it; }); });
    var g = itemGrid(best); if (!g) return null;
    var bar = 240 / g.bpm; return { bpm: g.bpm, bar0: r3(((g.bar0 % bar) + bar) % bar), lead: best.id };
  }

  // shift everything on a track that starts at or after a time
  function shiftFrom(t, at, d, not) { t.items.forEach(function (x) { if (x !== not && x.start >= at - EPS) x.start = r3(Math.max(0, x.start + d)); }); }

  // play an item `times` times in a row (the copies follow it); insert (default) pushes what comes after it on that track
  // later, so the rest of the song stays; otherwise the copies overwrite. Returns the copies' ids.
  function loop(p, iid, times, o) {
    var f = find(p, iid); if (!f || f.track.locked) return [];
    var t = f.track, it = f.item, n = clamp(Math.round(times || 2), 1, 64) - 1, d = it.dur, fo = it.fadeOut, made = [];
    if (!n) return made;
    if (!o || o.insert !== false) shiftFrom(t, end(it), n * d, it);
    for (var k = 1; k <= n; k++) made.push(place(t, Object.assign({}, it, { id: id(), start: r3(it.start + k * d), fadeIn: undefined, fadeOut: k === n ? fo : undefined, tr: undefined })).id);
    it.fadeOut = undefined;
    return made;
  }
  // fades in and out (seconds; 0 removes); together they never exceed the item
  function fade(p, iid, fin, fout) {
    var f = find(p, iid); if (!f || f.track.locked) return null; var it = f.item;
    if (fin != null) it.fadeIn = +fin > 0 ? r3(clamp(+fin, 0, it.dur)) : undefined;
    if (fout != null) it.fadeOut = +fout > 0 ? r3(clamp(+fout, 0, it.dur)) : undefined;
    if ((it.fadeIn || 0) + (it.fadeOut || 0) > it.dur) { if (fout != null) it.fadeIn = it.fadeIn && r3(it.dur - it.fadeOut); else it.fadeOut = it.fadeOut && r3(it.dur - it.fadeIn); }
    return it;
  }
  // a crossfade into an audio item from the one before it (seconds; 0 removes)
  function crossfade(p, iid, dur) { var f = audioItem(p, iid); if (!f) return null; f.item.tr = +dur > 0 ? { kind: 'cross', dur: r3(+dur) } : undefined; return f.item; }
  function gain(p, iid, g) { var f = audioItem(p, iid); if (!f) return null; var v = clamp(+g, 0, 4); f.item.gain = Math.abs(v - 1) < 1e-3 ? undefined : r4(v); return f.item; }
  function toDb(g) { return g > 0 ? Math.round(20 * Math.log10(g) * 10) / 10 : -Infinity; }
  function fromDb(d) { return d <= -60 ? 0 : Math.pow(10, d / 20); }
  // stretch an audio item to a tempo: the same music in more or less time. What follows on its track moves with its end
  // (ripple, default) so the rest stays butted.
  function stretch(p, iid, bpm, o) {
    var f = audioItem(p, iid); if (!f || !f.item.bpm || !(+bpm > 0)) return null;
    var t = f.track, it = f.item, s = clamp(+bpm / it.bpm, 0.5, 2), nd = r3(it.dur * sp(it) / s), d = nd - it.dur, e0 = end(it);
    if (!o || o.ripple !== false) shiftFrom(t, e0, d, it);
    it.speed = Math.abs(s - 1) < 1e-4 ? undefined : Math.round(s * 1e6) / 1e6; it.dur = nd;
    if (it.fadeIn) it.fadeIn = r3(Math.min(it.fadeIn, nd)); if (it.fadeOut) it.fadeOut = r3(Math.min(it.fadeOut, nd));
    return place(t, it);
  }

  // crossfades on a track: a window around each cut where the incoming item rises as the outgoing one falls. The window is
  // centred on the cut when both sides have material to spare (the incoming item's source before its in-point, the
  // outgoing one's after its out-point), and leans to whichever side has it otherwise.
  function audioXfades(t) {
    var L = sorted(t), out = [];
    for (var i = 1; i < L.length; i++) {
      var it = L[i], prev = L[i - 1];
      if (!it.tr || !(it.tr.dur > 0) || Math.abs(end(prev) - it.start) > 0.02) continue;
      var d = Math.min(it.tr.dur, it.dur, prev.dur), head = Math.min(it.in / sp(it), it.start);
      var tail = prev.srcDur ? Math.max(0, (prev.srcDur - prev.in - prev.dur * sp(prev)) / sp(prev)) : Infinity;
      var post = Math.min(d / 2, tail), pre = Math.min(d - post, head); post = Math.min(d - pre, tail);
      if (pre + post < 0.005) continue;
      out.push({ a: r3(it.start - pre), b: r3(it.start + post), cut: it.start, from: prev, to: it });
    }
    return out;
  }
  // what the music is, as segments to play or render: each sounding audio item with its crossfade run-on, gain and fades
  function audioPlan(p) {
    var segs = [];
    audioTracks(p).forEach(function (t) {
      if (t.muted) return;
      var xin = {}, xout = {};
      audioXfades(t).forEach(function (x) { xin[x.to.id] = x; xout[x.from.id] = x; });
      t.items.forEach(function (it) {
        var s = sp(it), a = it.start, b = end(it), fi = it.fadeIn || 0, fo = it.fadeOut || 0, X = xin[it.id], Y = xout[it.id];
        if (X) { a = X.a; fi = X.b - X.a; }
        if (Y) { b = Y.b; fo = Y.b - Y.a; }
        segs.push({ id: it.id, track: t.id, src: it.src, at: r3(a), len: r3(b - a), from: r3(Math.max(0, it.in - (it.start - a) * s)), speed: s,
          gain: it.gain == null ? 1 : it.gain, fadeIn: r3(fi), fadeOut: r3(fo), curveIn: X ? 'qsin' : 'tri', curveOut: Y ? 'qsin' : 'tri' });
      });
    });
    return segs.sort(function (x, y) { return x.at - y.at; });
  }
  function fadeCurve(u, c) { u = clamp(u, 0, 1); return c === 'qsin' ? Math.sin(u * Math.PI / 2) : u; }
  // a segment's level at a timeline time (0 outside it), and where in its file it is
  function segGain(s, t) {
    var x = t - s.at; if (x < 0 || x >= s.len) return 0;
    var g = s.gain;
    if (s.fadeIn > 0 && x < s.fadeIn) g *= fadeCurve(x / s.fadeIn, s.curveIn);
    if (s.fadeOut > 0 && x > s.len - s.fadeOut) g *= fadeCurve((s.len - x) / s.fadeOut, s.curveOut);
    return g;
  }
  function segPos(s, t) { return s.from + (t - s.at) * s.speed; }
  // loudness of the edited mix, from each source's envelope (envs[src] = { rms, step }): what AUTO-CUT and the section
  // finder read once the music has been edited
  function mixEnvelope(plan, envs, step, seconds) {
    step = step || 0.25; var n = Math.ceil((seconds || plan.reduce(function (m, s) { return Math.max(m, s.at + s.len); }, 0)) / step), rms = new Float32Array(n);
    for (var i = 0; i < n; i++) {
      var t = (i + 0.5) * step, e = 0;
      plan.forEach(function (s) { var env = envs[s.src], g = segGain(s, t); if (!env || !g) return; var v = env.rms[Math.floor(segPos(s, t) / env.step)] || 0; e += v * v * g * g; });
      rms[i] = Math.min(1, Math.sqrt(e));
    }
    return { rms: rms, step: step, seconds: n * step };
  }
  // ffmpeg arguments that render the plan to a WAV of exactly `total` seconds (silence pads the end); each segment's file
  // is in s.file. Time-stretch is atempo (pitch kept), fades are afade (qsin for crossfades: equal power).
  function atempoChain(s) { var out = []; while (s > 2.0001) { out.push(2); s /= 2; } while (s < 0.4999) { out.push(0.5); s /= 0.5; } if (Math.abs(s - 1) > 1e-4) out.push(r4(s)); return out; }
  function mixArgs(o) {
    var rate = o.rate || 48000, args = ['-v', 'error', '-y', '-hide_banner'], f = [], labels = [], total = r3(o.total);
    o.segs.forEach(function (s, i) {
      args.push('-ss', String(s.from), '-t', String(r3(s.len * s.speed + 0.1)), '-i', s.file);
      var ch = ['[' + i + ':a]aresample=' + rate, 'aformat=sample_fmts=fltp:channel_layouts=stereo'];
      atempoChain(s.speed).forEach(function (x) { ch.push('atempo=' + x); });
      ch.push('atrim=0:' + s.len, 'asetpts=PTS-STARTPTS');
      if (s.gain !== 1) ch.push('volume=' + s.gain);
      if (s.fadeIn > 0) ch.push('afade=t=in:st=0:d=' + s.fadeIn + ':curve=' + s.curveIn);
      if (s.fadeOut > 0) ch.push('afade=t=out:st=' + r3(Math.max(0, s.len - s.fadeOut)) + ':d=' + s.fadeOut + ':curve=' + s.curveOut);
      if (s.at > 0) ch.push('adelay=' + Math.round(s.at * rate) + 'S:all=1');
      f.push(ch.join(',') + '[s' + i + ']'); labels.push('[s' + i + ']');
    });
    if (!labels.length) { args.push('-f', 'lavfi', '-i', 'anullsrc=r=' + rate + ':cl=stereo'); labels.push('[0:a]'); }
    // apad pads to the exact length (whole_dur): a bare apad (endless) behind aresample + a gap never ends in ffmpeg 9
    f.push(labels.join('') + (labels.length > 1 ? 'amix=inputs=' + labels.length + ':normalize=0:dropout_transition=0,' : 'anull,') + 'apad=whole_dur=' + total + ',atrim=0:' + total + '[out]');
    return args.concat(['-filter_complex', f.join(';'), '-map', '[out]', '-ac', '2', '-ar', String(rate), '-c:a', 'pcm_s16le', o.out]);
  }

  // ----- ranges and sections: every unlocked track at once, so the pictures follow the music
  function insertGap(p, at, len) {
    p.tracks.forEach(function (t) {
      if (t.locked) return;
      t.items.slice().forEach(function (it) { if (it.start < at - EPS && end(it) > at + EPS) cut(t, it, at); });
      shiftFrom(t, at, len);
    });
    p.markers.forEach(function (m) { if (m.t >= at - EPS) m.t = r3(m.t + len); });
    (p.sections || []).forEach(function (s) { if (s.a >= at - EPS) { s.a = r3(s.a + len); s.b = r3(s.b + len); } else if (s.b > at + EPS) s.b = r3(s.b + len); });
  }
  // take [a, b) out of every unlocked track; ripple closes the gap
  function cutRange(p, a, b, ripple) {
    var d = b - a; if (!(d > EPS)) return;
    p.tracks.forEach(function (t) { if (t.locked) return; clear(t, a, b); if (ripple) shiftFrom(t, b, -d); });
    p.markers = p.markers.filter(function (m) { return m.t < a - EPS || m.t >= b - EPS; });
    if (ripple) p.markers.forEach(function (m) { if (m.t >= b - EPS) m.t = r3(m.t - d); });
    p.sections = (p.sections || []).filter(function (s) { return !(s.a >= a - EPS && s.b <= b + EPS); });
    p.sections.forEach(function (s) {
      if (s.b > a && s.a < b) { if (s.a < a) s.b = r3(Math.max(a, s.b > b ? s.b - (ripple ? d : 0) : a)); else { s.a = r3(ripple ? a : b); s.b = r3(s.b - (ripple ? d : 0)); } }
      else if (ripple && s.a >= b - EPS) { s.a = r3(s.a - d); s.b = r3(s.b - d); }
    });
  }
  // a copy of [a, b) on every unlocked track (items clipped to it, times from 0), its markers and sections
  function copyRange(p, a, b) {
    var out = { len: r3(b - a), tracks: {}, markers: [], sections: [] };
    p.tracks.forEach(function (t) {
      if (t.locked) return;
      out.tracks[t.id] = t.items.filter(function (it) { return end(it) > a + EPS && it.start < b - EPS; }).map(function (it) {
        var s = Math.max(it.start, a), e = Math.min(end(it), b), c = Object.assign({}, it, { id: id(), start: r3(s - a), in: r3(it.in + (s - it.start) * sp(it)), dur: r3(e - s) });
        if (s > it.start + EPS) { c.fadeIn = undefined; c.tr = undefined; }
        if (e < end(it) - EPS) c.fadeOut = undefined;
        return c;
      });
    });
    p.markers.forEach(function (m) { if (m.t >= a - EPS && m.t < b - EPS) out.markers.push({ label: m.label, t: r3(m.t - a) }); });
    (p.sections || []).forEach(function (s) { if (s.b > a + EPS && s.a < b - EPS) out.sections.push({ kind: s.kind, label: s.label, a: r3(Math.max(s.a, a) - a), b: r3(Math.min(s.b, b) - a) }); });
    return out;
  }
  // insert a copied range at a time (everything from there moves later); returns the new section ids
  function pasteRange(p, clip, at) {
    at = r3(Math.max(0, at)); insertGap(p, at, clip.len);
    Object.keys(clip.tracks).forEach(function (tid) { var t = track(p, tid); if (!t || t.locked) return; clip.tracks[tid].forEach(function (c) { place(t, Object.assign({}, c, { id: id(), start: r3(c.start + at) })); }); });
    clip.markers.forEach(function (m) { p.markers.push({ id: id('m'), t: r3(m.t + at), label: m.label }); });
    var made = [];
    clip.sections.forEach(function (s) { var n = { id: id('s'), kind: s.kind, label: s.label, a: r3(s.a + at), b: r3(s.b + at) }; (p.sections = p.sections || []).push(n); made.push(n.id); });
    p.sections.sort(function (x, y) { return x.a - y.a; });
    return made;
  }
  // the range [a, b) played again right after itself (or at `to`)
  function duplicateRange(p, a, b, to) { return pasteRange(p, copyRange(p, a, b), to == null ? b : to); }
  // move [a, b) to start before whatever is at `to` now (times as they are before the move); the song keeps its length
  function moveRange(p, a, b, to) {
    if (to > a - EPS && to < b + EPS) return null;
    var clip = copyRange(p, a, b), dest = to > b ? to - (b - a) : to;
    cutRange(p, a, b, true);
    pasteRange(p, clip, dest);
    return r3(dest);
  }
  // mark a section; sections never overlap, so a new one trims the ones it covers
  function addSection(p, a, b, kind, label) {
    a = r3(Math.max(0, Math.min(a, b))); b = r3(Math.max(a, b)); if (b - a < EPS) return null;
    var keep = [];
    (p.sections || []).forEach(function (s) {
      if (s.b <= a + EPS || s.a >= b - EPS) return keep.push(s);
      if (s.a < a - EPS) keep.push(Object.assign({}, s, { b: a }));
      if (s.b > b + EPS) keep.push(Object.assign({}, s, { id: s.a < a - EPS ? id('s') : s.id, a: b }));
    });
    var n = { id: id('s'), kind: SECTION_KINDS.indexOf(kind) >= 0 ? kind : 'build', label: String(label || '').slice(0, 24) || undefined, a: a, b: b };
    p.sections = keep.concat([n]).sort(function (x, y) { return x.a - y.a; });
    return n;
  }
  function section(p, sid) { return (p.sections || []).filter(function (s) { return s.id === sid; })[0] || null; }
  function moveSection(p, sid, to) { var s = section(p, sid); if (!s) return null; return moveRange(p, s.a, s.b, to); }
  function duplicateSection(p, sid, to) { var s = section(p, sid); if (!s) return []; return duplicateRange(p, s.a, s.b, to); }
  // sections read from the loudness map (one digit 0-9 per bar from bar0, VXEDIT.energyMap), in phrases of 4 bars: the
  // loudest phrases are drops; before the first drop quiet is the intro and what rises out of it the build; between drops
  // quiet is a break and the phrase that rises into the next drop a build; after the last drop, the outro.
  function sectionsFromEnergy(map, bpm, bar0, o) {
    o = o || {}; var bar = 240 / (bpm || 120), P = o.phrase || 4, d = String(map || '').split('').map(Number), ph = [];
    for (var i = 0; i < d.length; i += P) { var q = d.slice(i, i + P); ph.push(q.reduce(function (x, y) { return x + y; }, 0) / q.length); }
    if (!ph.length) return [];
    var lo = Math.min.apply(null, ph), hi = Math.max.apply(null, ph), r = hi - lo;
    var lv = ph.map(function (e) { return r < 1 ? 2 : (e - lo) / r >= 0.7 ? 2 : (e - lo) / r <= 0.35 ? 0 : 1; });
    var first = lv.indexOf(2), last = lv.lastIndexOf(2), quiet = -1;
    for (i = 0; i < first; i++) if (lv[i] === 0) quiet = i;
    var kinds = lv.map(function (l, j) {
      if (l === 2) return 'drop';
      if (j < first) return j <= quiet || (quiet < 0 && j === 0 && first > 1) ? 'intro' : 'build';
      if (j > last) return 'outro';
      return l === 1 && lv[j + 1] === 2 && lv[j - 1] !== 2 ? 'build' : 'break';
    });
    var out = [], end0 = o.seconds || bar0 + d.length * bar;
    kinds.forEach(function (k, j) {
      var a = j === 0 ? 0 : r3(bar0 + j * P * bar), b = r3(Math.min(end0, bar0 + (j + 1) * P * bar));
      if (j === kinds.length - 1) b = r3(end0);
      if (out.length && out[out.length - 1].kind === k) out[out.length - 1].b = b; else if (b > a) out.push({ kind: k, a: a, b: b });
    });
    return out;
  }
  function setSections(p, list) { p.sections = []; list.forEach(function (s) { addSection(p, s.a, s.b, s.kind, s.label); }); return p.sections; }

  // stem names from file names: Suno and most splitters write "Song (Vocals).wav", "song_drums.wav", "bass.wav" ...
  var STEMS = ['vocals', 'drums', 'bass', 'other', 'instrumental', 'backing', 'melody', 'piano', 'guitar', 'synth', 'fx', 'keys', 'strings', 'lead', 'pad'];
  function stemName(file) {
    var b = String(file).split('/').pop().replace(/\.[^.]+$/, '').toLowerCase();
    for (var i = 0; i < STEMS.length; i++) if (new RegExp('(^|[^a-z])' + STEMS[i] + '([^a-z]|$)').test(b)) return STEMS[i];
    return null;
  }
  // several files dropped together become one stem group on parallel audio tracks, all from `at`, each on the first empty
  // track below A1's music (new tracks are added as needed). One file goes on track tid (or the first free audio track).
  function importAudio(p, files, at, tid) {
    at = r3(Math.max(0, at || 0)); var made = [], group = files.length > 1 ? id('g') : undefined;
    files.forEach(function (f, i) {
      var t = null;
      if (files.length === 1 && tid) t = track(p, tid);
      if (!t || t.kind !== 'audio' || t.locked) t = audioTracks(p).filter(function (x) { return !x.locked && !x.items.some(function (it) { return end(it) > at + EPS && it.start < at + (f.dur || 1) - EPS; }); })[0] || null;
      if (!t) t = addAudioTrack(p, f.stem || stemName(f.src) || null);
      var it = place(t, { src: f.src, name: f.name || String(f.src).split('/').pop(), start: at, in: 0, dur: f.dur || 1, srcDur: f.dur || undefined, bpm: f.bpm || undefined, bar0: f.bar0, group: group, stem: f.stem || stemName(f.src) || undefined });
      made.push({ track: t.id, id: it.id });
    });
    return made;
  }
  // an item split into stems (files of the same length as its source): each stem takes the item's place, timing, stretch,
  // gain and fades on its own parallel track, as one group; the original item goes (undo brings it back)
  function replaceWithStems(p, iid, stems) {
    var f = find(p, iid); if (!f || f.track.locked || f.track.kind !== 'audio') return [];
    var it = f.item, group = id('g'), made = [];
    f.track.items = f.track.items.filter(function (x) { return x.id !== iid; });
    stems.forEach(function (s) {
      var t = audioTracks(p).filter(function (x) { return !x.locked && !x.items.some(function (o) { return end(o) > it.start + EPS && o.start < end(it) - EPS; }); })[0] || addAudioTrack(p, s.stem);
      made.push({ track: t.id, id: place(t, Object.assign({}, it, { id: id(), src: s.src, name: (String(it.name).replace(/ · [A-Z]+$/, '') + ' · ' + s.stem).toUpperCase(), group: group, stem: s.stem })).id });
    });
    return made;
  }

  root.VXTL = { FPS: FPS, id: id, newProject: newProject, track: track, sorted: sorted, find: find, length: length, itemAt: itemAt, item: item,
    fromShots: fromShots, clear: clear, place: place, split: split, trim: trim, remove: remove, edits: edits, transitions: transitions, transitionAt: transitionAt,
    snapPoints: snapPoints, snap: snap, snapSpan: snapSpan, ruler: ruler, timecode: timecode, History: History, cut: cut,
    SECTION_KINDS: SECTION_KINDS, audioTracks: audioTracks, addAudioTrack: addAudioTrack, pruneAudio: pruneAudio, audioLength: audioLength, span: span,
    itemGrid: itemGrid, beatsIn: beatsIn, grid: grid, loop: loop, fade: fade, crossfade: crossfade, gain: gain, toDb: toDb, fromDb: fromDb, stretch: stretch,
    audioXfades: audioXfades, audioPlan: audioPlan, segGain: segGain, segPos: segPos, mixEnvelope: mixEnvelope, atempoChain: atempoChain, mixArgs: mixArgs,
    insertGap: insertGap, cutRange: cutRange, copyRange: copyRange, pasteRange: pasteRange, duplicateRange: duplicateRange, moveRange: moveRange,
    addSection: addSection, section: section, moveSection: moveSection, duplicateSection: duplicateSection, sectionsFromEnergy: sectionsFromEnergy, setSections: setSections,
    stemName: stemName, importAudio: importAudio, replaceWithStems: replaceWithStems };
  if (typeof module !== 'undefined') module.exports = root.VXTL;
})(typeof window !== 'undefined' ? window : this);
