// Checks the EDIT timeline model (vx/timeline.js): overwrite placement, split, trim, ripple delete, snapping, undo.
const assert = require('assert');
const T = require('../vx/timeline.js');
let n = 0;
function check(name, fn) { fn(); n++; console.log('ok', name); }
const v1 = p => T.track(p, 'v1');
const spans = t => T.sorted(t).map(i => [i.start, i.in, i.dur].map(x => +x.toFixed(3)));

check('fromShots lays shots end to end', () => {
  const p = T.newProject(); v1(p).items = T.fromShots([{ src: 'a', dur: 2 }, { src: 'b', in: 1, dur: 3 }]);
  assert.deepStrictEqual(spans(v1(p)), [[0, 0, 2], [2, 1, 3]]); assert.strictEqual(T.length(p), 5);
});
check('place overwrites the middle of an item (splits it)', () => {
  const p = T.newProject(); T.place(v1(p), { src: 'a', start: 0, dur: 10 });
  T.place(v1(p), { src: 'b', start: 4, dur: 2 });
  assert.deepStrictEqual(spans(v1(p)), [[0, 0, 4], [4, 0, 2], [6, 6, 4]]);
});
check('place trims both neighbours and removes covered items', () => {
  const p = T.newProject(); v1(p).items = T.fromShots([{ src: 'a', dur: 2 }, { src: 'b', dur: 2 }, { src: 'c', dur: 2 }]);
  T.place(v1(p), { src: 'x', start: 1, dur: 4 });
  assert.deepStrictEqual(T.sorted(v1(p)).map(i => i.src), ['a', 'x', 'c']);
  assert.deepStrictEqual(spans(v1(p)), [[0, 0, 1], [1, 0, 4], [5, 1, 1]]);
});
check('moving an item onto its own old spot keeps one copy', () => {
  const p = T.newProject(); const a = T.place(v1(p), { src: 'a', start: 0, dur: 3 });
  T.place(v1(p), Object.assign({}, a, { start: 1 }));
  assert.strictEqual(v1(p).items.length, 1); assert.strictEqual(v1(p).items[0].start, 1);
});
check('split at a time cuts every unlocked video item there', () => {
  const p = T.newProject(); T.place(v1(p), { src: 'a', start: 0, dur: 4 }); T.place(T.track(p, 'v2'), { src: 'b', start: 1, dur: 4 });
  const made = T.split(p, 2); assert.strictEqual(made.length, 2);
  assert.deepStrictEqual(spans(v1(p)), [[0, 0, 2], [2, 2, 2]]);
  assert.deepStrictEqual(spans(T.track(p, 'v2')), [[1, 0, 1], [2, 1, 3]]);
});
check('split only the selected item', () => {
  const p = T.newProject(); const a = T.place(v1(p), { src: 'a', start: 0, dur: 4 }); T.place(T.track(p, 'v2'), { src: 'b', start: 0, dur: 4 });
  T.split(p, 1, [a.id]); assert.strictEqual(v1(p).items.length, 2); assert.strictEqual(T.track(p, 'v2').items.length, 1);
});
check('trim in moves the source in-point, never before the source start', () => {
  const p = T.newProject(); const a = T.place(v1(p), { src: 'a', start: 5, in: 1, dur: 4 });
  T.trim(v1(p), a.id, 'in', 6); assert.deepStrictEqual(spans(v1(p)), [[6, 2, 3]]);
  T.trim(v1(p), a.id, 'in', 0); assert.deepStrictEqual(spans(v1(p)), [[4, 0, 5]]);
});
check('trim out lengthens and overwrites the next item', () => {
  const p = T.newProject(); v1(p).items = T.fromShots([{ src: 'a', dur: 2 }, { src: 'b', dur: 2 }]);
  T.trim(v1(p), v1(p).items[0].id, 'out', 3); assert.deepStrictEqual(spans(v1(p)), [[0, 0, 3], [3, 1, 1]]);
});
check('ripple delete closes the gap; plain delete leaves it', () => {
  const p = T.newProject(); v1(p).items = T.fromShots([{ src: 'a', dur: 2 }, { src: 'b', dur: 2 }, { src: 'c', dur: 2 }]);
  const q = JSON.parse(JSON.stringify(p));
  T.remove(p, [v1(p).items[1].id], true); assert.deepStrictEqual(spans(v1(p)).map(s => s[0]), [0, 2]);
  T.remove(q, [v1(q).items[1].id], false); assert.deepStrictEqual(spans(v1(q)).map(s => s[0]), [0, 4]);
});
check('locked tracks are not edited', () => {
  const p = T.newProject(); const a = T.place(v1(p), { src: 'a', start: 0, dur: 4 }); v1(p).locked = true;
  T.split(p, 2); T.remove(p, [a.id]); assert.strictEqual(v1(p).items.length, 1);
});
check('snap prefers an edge to the beat grid, ignores far points', () => {
  const p = T.newProject(); T.place(v1(p), { src: 'a', start: 0, dur: 2.01 });
  const pts = T.snapPoints(p, { bpm: 120 });
  assert.strictEqual(T.snap(2.03, pts, 0.05).t, 2.01);
  assert.strictEqual(T.snap(1.3, pts, 0.05).t, 1.3);
  assert.strictEqual(T.snap(1.52, pts, 0.05).t, 1.5);
});
check('snapSpan catches either edge of a moving item', () => {
  const pts = [{ t: 10, kind: 'marker' }];
  assert.strictEqual(T.snapSpan(7.98, 2, pts, 0.1).start, 8);
  assert.strictEqual(T.snapSpan(9.97, 2, pts, 0.1).start, 10);
});
check('edits lists cut points', () => {
  const p = T.newProject(); v1(p).items = T.fromShots([{ src: 'a', dur: 2 }, { src: 'b', dur: 3 }]);
  assert.deepStrictEqual(T.edits(p), [0, 2, 5]);
});
check('undo and redo restore snapshots', () => {
  const h = new T.History(); let p = T.newProject(); h.push(p);
  T.place(v1(p), { src: 'a', start: 0, dur: 1 });
  p = h.undo(p); assert.strictEqual(v1(p).items.length, 0);
  p = h.redo(p); assert.strictEqual(v1(p).items.length, 1);
});
check('ruler intervals and timecode', () => {
  assert.deepStrictEqual(T.ruler(100), { label: 1, tick: 5 / 30 });
  assert.strictEqual(T.ruler(2).label, 60);
  assert.strictEqual(T.timecode(61.5), '01:01:15');
});
check('titles keep their settings through place, split and length', () => {
  const p = T.newProject(), t1 = T.track(p, 't1'); assert.strictEqual(p.tracks[0].id, 't1');
  T.place(t1, { text: 'V3XV0ID', font: 'doto', style: 'glitch', start: 2, dur: 4 });
  T.split(p, 3); const L = T.sorted(t1);
  assert.deepStrictEqual(L.map(i => [i.start, i.in, i.dur, i.text, i.font]), [[2, 0, 1, 'V3XV0ID', 'doto'], [3, 1, 3, 'V3XV0ID', 'doto']]);
  assert.strictEqual(L[0].name, 'V3XV0ID'); assert.strictEqual(T.length(p), 6); assert.deepStrictEqual(T.edits(p), [0, 2, 3, 6]);
});
check('transitions: crossfade from the cut, dips centred, split halves start clean', () => {
  const p = T.newProject(); v1(p).items = T.fromShots([{ src: 'a', dur: 4 }, { src: 'b', dur: 4 }, { src: 'c', dur: 4 }]);
  const [, b, c] = T.sorted(v1(p)); b.tr = { kind: 'cross', dur: 1 }; c.tr = { kind: 'black', dur: 1 };
  const L = T.transitions(v1(p)); assert.deepStrictEqual(L.map(x => [x.kind, x.a, x.b]), [['cross', 4, 5], ['black', 7.5, 8.5]]);
  assert.strictEqual(T.transitionAt(L, 4.25).alpha, 0.75); assert.strictEqual(T.transitionAt(L, 8).alpha, 1); assert.strictEqual(T.transitionAt(L, 6), null);
  T.split(p, 6); assert.strictEqual(T.sorted(v1(p))[2].tr, undefined);
  b.start = 4.5; assert.strictEqual(T.transitions(v1(p)).filter(x => x.kind === 'cross').length, 0); // a gap: no crossfade
});
console.log(`${n} timeline checks passed`);
