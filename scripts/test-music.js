// Checks the EDIT tab's music edits (vx/timeline.js, MUSIC): split, trim, cut and ripple, loop, fades, crossfades, gain,
// stretch, the bar grid, sections (from the energy map, by hand, moved and duplicated with the pictures), stem import,
// the mix plan, and (when ffmpeg is here) a real render of the mix checked with ffprobe.
const assert = require('assert');
const T = require('../vx/timeline.js');
const E = require('../vx/editor.js').VXEDIT;
let n = 0;
function check(name, fn) { fn(); n++; console.log('ok', name); }
const a1 = p => T.track(p, 'a1');
const spans = t => T.sorted(t).map(i => [i.start, i.in, i.dur].map(x => +x.toFixed(3)));
// a 120 BPM song, 32 s (16 bars), downbeat at 0
const song = (o = {}) => Object.assign({ src: '/m/song.wav', name: 'SONG', start: 0, in: 0, dur: 32, srcDur: 32, bpm: 120, bar0: 0 }, o);
const withSong = o => { const p = T.newProject(); T.place(a1(p), song(o)); return p; };

check('A1 is editable and split leaves the music alone unless asked', () => {
  const p = withSong(); assert.strictEqual(a1(p).locked, false);
  assert.strictEqual(T.split(p, 8).length, 0); assert.strictEqual(a1(p).items.length, 1);
  assert.strictEqual(T.split(p, 8, null, { audio: true }).length, 1); assert.deepStrictEqual(spans(a1(p)), [[0, 0, 8], [8, 8, 24]]);
});
check('split a selected music item at the playhead; fades stay on their own ends', () => {
  const p = withSong({ fadeIn: 2, fadeOut: 4 }); const id = a1(p).items[0].id;
  T.split(p, 10, [id]); const [l, r] = T.sorted(a1(p));
  assert.deepStrictEqual([l.fadeIn, l.fadeOut, r.fadeIn, r.fadeOut], [2, undefined, undefined, 4]);
});
check('trim the music: in moves the source in-point; out stops at the end of the file', () => {
  const p = withSong(); const id = a1(p).items[0].id;
  T.trim(a1(p), id, 'in', 4); assert.deepStrictEqual(spans(a1(p)), [[4, 4, 28]]);
  T.trim(a1(p), id, 'out', 60); assert.deepStrictEqual(spans(a1(p)), [[4, 4, 28]]);
});
check('delete with and without ripple', () => {
  const p = withSong(); T.split(p, 8, null, { audio: true }); T.split(p, 16, null, { audio: true });
  const mid = T.sorted(a1(p))[1].id, q = JSON.parse(JSON.stringify(p));
  T.remove(p, [mid], true); assert.deepStrictEqual(spans(a1(p)), [[0, 0, 8], [8, 16, 16]]);
  T.remove(q, [mid], false); assert.deepStrictEqual(spans(a1(q)), [[0, 0, 8], [16, 16, 16]]);
});
check('loop an item 4 times: copies follow it and push the rest of the song later', () => {
  const p = withSong(); T.split(p, 8, null, { audio: true }); T.split(p, 4, null, { audio: true });
  const [x] = T.sorted(a1(p)); x.fadeOut = 0.5;
  const made = T.loop(p, x.id, 4); assert.strictEqual(made.length, 3);
  assert.deepStrictEqual(spans(a1(p)), [[0, 0, 4], [4, 0, 4], [8, 0, 4], [12, 0, 4], [16, 4, 4], [20, 8, 24]]);
  const L = T.sorted(a1(p)); assert.strictEqual(L[0].fadeOut, undefined); assert.strictEqual(L[3].fadeOut, 0.5);
  const q = withSong(); T.split(q, 8, null, { audio: true }); T.loop(q, T.sorted(a1(q))[0].id, 2, { insert: false });
  assert.deepStrictEqual(spans(a1(q)), [[0, 0, 8], [8, 0, 8], [16, 16, 16]]); // overwrite
});
check('fades clamp to the item; gain in dB', () => {
  const p = withSong({ dur: 4 }); const id = a1(p).items[0].id;
  T.fade(p, id, 3, 3); const it = a1(p).items[0]; assert.strictEqual(it.fadeIn + it.fadeOut, 4);
  T.fade(p, id, 0, null); assert.strictEqual(it.fadeIn, undefined);
  T.gain(p, id, T.fromDb(-6)); assert.ok(Math.abs(T.toDb(it.gain) + 6) < 0.05);
  T.gain(p, id, 1); assert.strictEqual(it.gain, undefined);
});
check('crossfade between butting items: centred when both have material, leaning otherwise', () => {
  const p = withSong(); T.split(p, 16, null, { audio: true }); const [l, r] = T.sorted(a1(p));
  T.crossfade(p, r.id, 1); assert.deepStrictEqual(T.audioXfades(a1(p)).map(x => [x.a, x.b]), [[15.5, 16.5]]);
  const plan = T.audioPlan(p); assert.deepStrictEqual(plan.map(s => [s.at, s.len, s.from, s.fadeIn, s.fadeOut]), [[0, 16.5, 0, 0, 1], [15.5, 16.5, 15.5, 1, 0]]);
  assert.ok(Math.abs(T.segGain(plan[0], 16) - Math.SQRT1_2) < 1e-3 && Math.abs(T.segGain(plan[1], 16) - Math.SQRT1_2) < 1e-3); // equal power
  const q = T.newProject(); T.place(a1(q), song({ dur: 8 })); const b = T.place(a1(q), song({ start: 8, in: 0, dur: 8 })); T.crossfade(q, b.id, 1);
  assert.deepStrictEqual(T.audioXfades(a1(q)).map(x => [x.a, x.b]), [[8, 9]]); // the incoming item starts at its file's start: all after the cut
  b.start = 8.5; assert.strictEqual(T.audioXfades(a1(q)).length, 0); // a gap: no crossfade
});
check('stretch to a tempo keeps the music, changes its length, ripples the rest, moves the grid', () => {
  const p = withSong({ bar0: 0.5 }); T.split(p, 16, null, { audio: true }); const [l] = T.sorted(a1(p));
  T.stretch(p, l.id, 128); const L = T.sorted(a1(p));
  assert.ok(Math.abs(L[0].speed - 128 / 120) < 1e-5); assert.strictEqual(L[0].dur, 15); assert.strictEqual(L[1].start, 15);
  const g = T.itemGrid(L[0]); assert.strictEqual(g.bpm, 128); assert.ok(Math.abs(g.bar0 - 0.469) < 0.002);
  assert.strictEqual(T.grid(p).bpm, 128);
  T.split(p, 5, [L[0].id]); assert.deepStrictEqual(spans(a1(p)).slice(0, 2), [[0, 0, 5], [5, 5.333, 10]]); // in moves by time x stretch
  assert.strictEqual(T.stretch(p, L[0].id, 400).speed, 2); // clamped
});
check('bar grid inside an item, and grid snapping by bar or beat or off', () => {
  const p = withSong({ in: 1, start: 2, dur: 4 }); const B = T.beatsIn(a1(p).items[0]);
  assert.deepStrictEqual(B.map(b => [b.t, b.bar]), [[2, false], [2.5, false], [3, true], [3.5, false], [4, false], [4.5, false], [5, true], [5.5, false]]);
  const g = T.grid(p); assert.deepStrictEqual([g.bpm, g.bar0], [120, 1]); // source bar 1 at 0 s, played from 1 s at 2 s
  const bars = T.snapPoints(p, { bpm: 120, bar0: 0, grid: 'bar', until: 8 }).filter(x => x.kind === 'bar' || x.kind === 'beat');
  assert.ok(bars.every(x => x.kind === 'bar') && bars.length === 4);
  assert.strictEqual(T.snapPoints(p, { bpm: 120, grid: 'off' }).filter(x => x.kind === 'beat' || x.kind === 'bar').length, 0);
  assert.strictEqual(T.snap(2.13, T.snapPoints(T.newProject(), { bpm: 120, grid: 'beat', until: 8 }), 0.2).t, 2);
});
check('sections from the energy map', () => {
  // 32 bars: 8 quiet, 4 rising, 8 loud, 4 quiet, 4 rising, 4 loud
  const map = '11111111' + '4545' + '99999999' + '2222' + '5656' + '9999', S = T.sectionsFromEnergy(map, 120, 0);
  assert.deepStrictEqual(S.map(s => [s.kind, s.a, s.b]), [['intro', 0, 16], ['build', 16, 24], ['drop', 24, 40], ['break', 40, 48], ['build', 48, 56], ['drop', 56, 64]]);
  const S2 = T.sectionsFromEnergy('9999' + '1111', 120, 0.5, { seconds: 16 });
  assert.deepStrictEqual(S2.map(s => [s.kind, s.a, s.b]), [['drop', 0, 8.5], ['outro', 8.5, 16]]);
});
check('mark sections by hand: no overlaps', () => {
  const p = T.newProject(); T.addSection(p, 0, 8, 'intro'); T.addSection(p, 8, 16, 'drop'); T.addSection(p, 6, 10, 'build');
  assert.deepStrictEqual(p.sections.map(s => [s.kind, s.a, s.b]), [['intro', 0, 6], ['build', 6, 10], ['drop', 10, 16]]);
});
check('move a section: music, pictures, titles and markers in its range all move; the song keeps its length', () => {
  const p = withSong(); const v1 = T.track(p, 'v1');
  v1.items = T.fromShots([{ src: 'a', dur: 8 }, { src: 'b', dur: 8 }, { src: 'c', dur: 8 }, { src: 'd', dur: 8 }]);
  p.markers.push({ id: 'm1', t: 9, label: 'HIT' });
  T.setSections(p, [{ kind: 'intro', a: 0, b: 8 }, { kind: 'build', a: 8, b: 16 }, { kind: 'drop', a: 16, b: 24 }, { kind: 'outro', a: 24, b: 32 }]);
  const build = p.sections[1].id; assert.strictEqual(T.moveSection(p, build, 24), 16); // after the drop
  assert.deepStrictEqual(T.sorted(v1).map(i => [i.src, i.start]), [['a', 0], ['c', 8], ['b', 16], ['d', 24]]);
  assert.deepStrictEqual(spans(a1(p)), [[0, 0, 8], [8, 16, 8], [16, 8, 8], [24, 24, 8]]);
  assert.deepStrictEqual(p.sections.map(s => [s.kind, s.a, s.b]), [['intro', 0, 8], ['drop', 8, 16], ['build', 16, 24], ['outro', 24, 32]]);
  assert.deepStrictEqual(p.markers.map(m => [m.label, m.t]), [['HIT', 17]]);
  assert.strictEqual(T.span(p), 32);
  assert.strictEqual(T.moveSection(p, p.sections[1].id, 12), null); // inside itself: nothing
});
check('duplicate a section: it plays again right after itself and everything later moves on', () => {
  const p = withSong(); const v1 = T.track(p, 'v1'); v1.items = T.fromShots([{ src: 'a', dur: 16 }, { src: 'b', dur: 16 }]);
  T.addSection(p, 8, 16, 'drop'); T.duplicateSection(p, p.sections[0].id);
  assert.deepStrictEqual(spans(a1(p)), [[0, 0, 16], [16, 8, 8], [24, 16, 16]]);
  assert.deepStrictEqual(spans(v1), [[0, 0, 16], [16, 8, 8], [24, 0, 16]]);
  assert.deepStrictEqual(p.sections.map(s => [s.a, s.b]), [[8, 16], [16, 24]]); assert.strictEqual(T.span(p), 40);
});
check('cut a range with ripple across every track; locked tracks stay', () => {
  const p = withSong(); T.place(T.track(p, 'v1'), { src: 'a', start: 0, dur: 32 }); T.track(p, 't1').locked = true; T.place(T.track(p, 't1'), { text: 'X', start: 20, dur: 2 });
  T.cutRange(p, 8, 16, true);
  assert.deepStrictEqual(spans(a1(p)), [[0, 0, 8], [8, 16, 16]]); assert.deepStrictEqual(spans(T.track(p, 'v1')), [[0, 0, 8], [8, 16, 16]]);
  assert.strictEqual(T.track(p, 't1').items[0].start, 20);
});
check('import: one file onto a track, several files as a stem group on parallel tracks aligned at the drop point', () => {
  const p = T.newProject();
  T.importAudio(p, [{ src: '/s/My Song.mp3', dur: 30, bpm: 90, bar0: 0.2 }], 0);
  assert.strictEqual(a1(p).items[0].bpm, 90);
  const made = T.importAudio(p, ['Vocals', 'Drums', 'Bass', 'Other'].map(s => ({ src: `/s/My Song (${s}).wav`, dur: 30 })), 0);
  assert.deepStrictEqual(made.map(m => m.track), ['a2', 'a3', 'a4', 'a5']);
  assert.deepStrictEqual(T.audioTracks(p).map(t => t.name), ['A1', 'VOCALS', 'DRUMS', 'BASS', 'OTHER']);
  const g = T.track(p, 'a2').items[0].group; assert.ok(g && T.audioTracks(p).slice(1).every(t => t.items[0].group === g && t.items[0].start === 0));
  assert.strictEqual(T.stemName('/x/Track_drums.wav'), 'drums'); assert.strictEqual(T.stemName('/x/Track.wav'), null);
  T.track(p, 'a3').items = []; T.pruneAudio(p); assert.strictEqual(T.audioTracks(p).length, 4); assert.ok(T.track(p, 'a1'));
});
check('split into stems: each stem takes the item\'s timing on its own track, as one group', () => {
  const p = withSong({ start: 4, in: 2, dur: 20, gain: 0.5, fadeIn: 1 }); T.stretch(p, a1(p).items[0].id, 126); T.place(T.track(p, 'v1'), { src: 'v', start: 0, dur: 8 });
  const it = a1(p).items[0], made = T.replaceWithStems(p, it.id, ['drums', 'bass', 'vocals', 'other'].map(s => ({ src: `/st/${s}.wav`, stem: s })));
  assert.deepStrictEqual(made.map(m => m.track), ['a1', 'a2', 'a3', 'a4']);
  const all = T.audioTracks(p).map(t => t.items[0]);
  assert.ok(all.every(x => x.start === it.start && x.in === 2 && x.dur === it.dur && x.speed === it.speed && x.gain === 0.5 && x.fadeIn === 1 && x.group === all[0].group));
  assert.deepStrictEqual(all.map(x => x.name), ['SONG · DRUMS', 'SONG · BASS', 'SONG · VOCALS', 'SONG · OTHER']);
  assert.strictEqual(T.audioPlan(p).length, 4);
});
check('the mix plan skips muted tracks and its envelope follows the edit', () => {
  const p = withSong({ dur: 8 }); T.loop(p, a1(p).items[0].id, 2); T.addAudioTrack(p, 'X').muted = true; T.place(T.track(p, 'a2'), song());
  const plan = T.audioPlan(p); assert.deepStrictEqual(plan.map(s => [s.at, s.from, s.len]), [[0, 0, 8], [8, 0, 8]]);
  const rms = new Float32Array(128).map((_, i) => i < 4 ? 1 : 0.1); // the first second of the source is loud
  const env = T.mixEnvelope(plan, { '/m/song.wav': { rms, step: 0.25 } }, 0.25);
  assert.strictEqual(env.seconds, 16); assert.ok(env.rms[1] > 0.9 && env.rms[33] > 0.9 && env.rms[20] < 0.2); // loud at 0 and again at 8
});
check('ffmpeg mix arguments: atempo, volume, fades, delays, one exact length', () => {
  assert.deepStrictEqual(T.atempoChain(1), []); assert.deepStrictEqual(T.atempoChain(3), [2, 1.5]); assert.deepStrictEqual(T.atempoChain(0.25), [0.5, 0.5]);
  const p = withSong(); T.split(p, 16, null, { audio: true }); const [l, r] = T.sorted(a1(p)); T.crossfade(p, r.id, 1); T.gain(p, l.id, 0.5); T.stretch(p, r.id, 132);
  const segs = T.audioPlan(p).map(s => Object.assign(s, { file: s.src }));
  const a = T.mixArgs({ segs, total: 40, out: '/tmp/x.wav' }), fc = a[a.indexOf('-filter_complex') + 1];
  assert.ok(/volume=0\.5/.test(fc) && /atempo=1\.1/.test(fc) && /curve=qsin/.test(fc) && /adelay=744000S/.test(fc) && /amix=inputs=2:normalize=0/.test(fc) && /atrim=0:40\[out\]/.test(fc), fc);
  assert.ok(/anullsrc/.test(T.mixArgs({ segs: [], total: 3, out: '/tmp/y.wav' }).join(' ')));
});
check('waveform peaks: loudest sample per bucket', () => {
  const sr = 1000, x = new Float32Array(2000); x[150] = -0.5; x[1999] = 1;
  const { peaks, perSec } = E.peaks([x], sr, 10); assert.strictEqual(perSec, 10); assert.strictEqual(peaks.length, 20);
  assert.strictEqual(peaks[1], 128); assert.strictEqual(peaks[19], 255); assert.strictEqual(peaks[0], 0);
});

// a real render, when ffmpeg is on this computer: a 120 BPM click, looped, stretched, faded and crossfaded
const { execFileSync } = require('child_process'), fs = require('fs'), os = require('os'), path = require('path');
const ff = ['/opt/homebrew/bin/ffmpeg', '/usr/local/bin/ffmpeg', '/usr/bin/ffmpeg'].find(f => fs.existsSync(f));
if (ff) check('render the edited mix with ffmpeg and measure it', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vx-music-')), src = path.join(dir, 'click.wav'), out = path.join(dir, 'mix.wav');
  execFileSync(ff, ['-v', 'error', '-y', '-f', 'lavfi', '-i', "aevalsrc='0.6*sin(2*PI*1000*t)*lt(mod(t,0.5),0.03)+0.2*sin(2*PI*220*t)':s=48000:d=16", '-ac', '2', src]);
  const p = T.newProject(); T.place(a1(p), song({ src, dur: 16, srcDur: 16 }));
  T.split(p, 4, null, { audio: true }); const [first, rest] = T.sorted(a1(p));
  T.loop(p, first.id, 3); T.fade(p, first.id, 0.5, null);              // 3 x 4 s, then the rest (12 s): 24 s
  T.crossfade(p, rest.id, 0.5); T.stretch(p, rest.id, 144);              // the rest at 1.2x: 10 s -> 22 s in all
  assert.strictEqual(+T.span(p).toFixed(3), 22);
  const segs = T.audioPlan(p).map(s => Object.assign(s, { file: s.src }));
  execFileSync(ff, T.mixArgs({ segs, total: T.span(p), out }));
  const probe = execFileSync(ff.replace(/ffmpeg$/, 'ffprobe'), ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out], { encoding: 'utf8' });
  assert.ok(Math.abs(parseFloat(probe) - 22) < 0.02, 'duration ' + probe);
  const vol = require('child_process').spawnSync(ff, ['-hide_banner', '-i', out, '-af', 'volumedetect', '-f', 'null', '-'], { encoding: 'utf8' }).stderr;
  const mean = parseFloat((vol.match(/mean_volume: (-?[\d.]+) dB/) || [])[1]); assert.ok(mean > -30 && mean < 0, 'mean volume ' + mean); // sound, not silence
  fs.rmSync(dir, { recursive: true, force: true });
});
console.log(`${n} music checks passed`);
