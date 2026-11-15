/* The EDIT tab's timeline: the project model and every edit made to it, kept apart from the UI so the agent, the
 * mouse and the keyboard all make the same edits (and scripts/test-timeline.js can check them).
 *
 *   project  { tracks: [track], markers: [{ id, t, label }] }
 *   track    { id, kind: 'text'|'video'|'audio', name, hidden, locked, muted, items: [item] }   (tracks[0] is the top layer)
 *   item     { id, src, name, start, in, dur }   seconds: where it sits, where in the source it starts, how long it runs
 *            a title on the text track has no src; it carries its TITLES settings instead (text, font, style, mode ...),
 *            and its in is how far into the title's animation it starts
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

  function newProject() {
    return { tracks: [
      { id: 't1', kind: 'text', name: 'T1', hidden: false, locked: false, muted: false, items: [] },
      { id: 'v2', kind: 'video', name: 'V2', hidden: false, locked: false, muted: false, items: [] },
      { id: 'v1', kind: 'video', name: 'V1', hidden: false, locked: false, muted: false, items: [] },
      { id: 'a1', kind: 'audio', name: 'A1', hidden: false, locked: true, muted: false, items: [] }
    ], markers: [] };
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
      if (it.start < a - EPS) out.push(Object.assign({}, it, { dur: r3(a - it.start) }));
      if (end(it) > b + EPS) out.push(Object.assign({}, it, { id: it.start < a - EPS ? id() : it.id, start: r3(b), in: r3(it.in + (b - it.start)), dur: r3(end(it) - b) }));
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
  // cut items at a time; returns the ids of the new right-hand halves
  function split(p, time, ids) {
    var made = [];
    p.tracks.forEach(function (t) {
      if (t.locked || t.kind === 'audio') return;
      t.items.slice().forEach(function (it) {
        if (ids && ids.indexOf(it.id) < 0) return;
        if (time <= it.start + 1 / FPS || time >= end(it) - 1 / FPS) return;
        var right = Object.assign({}, it, { id: id(), start: r3(time), in: r3(it.in + (time - it.start)), dur: r3(end(it) - time) });
        it.dur = r3(time - it.start);
        t.items.push(right); made.push(right.id);
      });
      t.items.sort(function (a, b) { return a.start - b.start; });
    });
    return made;
  }
  // drag an edge: 'in' moves the start and the source in-point together, 'out' changes the length
  function trim(t, iid, edge, time) {
    var it = t.items.filter(function (x) { return x.id === iid; })[0];
    if (!it) return null;
    var min = 1 / FPS;
    if (edge === 'in') {
      var s = Math.min(Math.max(time, it.start - it.in, 0), end(it) - min);
      it.in = r3(it.in + (s - it.start)); it.dur = r3(end(it) - s); it.start = r3(s);
    } else it.dur = r3(Math.max(min, time - it.start));
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
    if (o.playhead != null) pts.push({ t: o.playhead, kind: 'playhead' });
    pts.push({ t: 0, kind: 'edge' });
    if (o.bpm) { var beat = 60 / o.bpm, b0 = o.bar0 || 0, until = o.until || length(p) + 60; for (var x = b0 % beat, k = Math.round((x - b0) / beat); x < until; x += beat, k++) pts.push({ t: r3(x), kind: k % 4 === 0 ? 'bar' : 'beat' }); }
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

  root.VXTL = { FPS: FPS, id: id, newProject: newProject, track: track, sorted: sorted, find: find, length: length, itemAt: itemAt, item: item,
    fromShots: fromShots, clear: clear, place: place, split: split, trim: trim, remove: remove, edits: edits,
    snapPoints: snapPoints, snap: snap, snapSpan: snapSpan, ruler: ruler, timecode: timecode, History: History };
  if (typeof module !== 'undefined') module.exports = root.VXTL;
})(typeof window !== 'undefined' ? window : this);
