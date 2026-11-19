// Checks the web studio's music engine (vx/webmix.js: WSOLA stretch, the mix, WAV) and the EDIT project store
// (vx/edit-store.js). When ffmpeg is on this computer, the browser mix of a plan is compared sample by sample with
// ffmpeg's render of the same plan (VXTL.mixArgs), which is what the desktop exports.
const assert = require('assert');
const fs = require('fs'), path = require('path'), os = require('os'), cp = require('child_process');
const T = require('../vx/timeline.js');
const M = require('../vx/webmix.js');
const S = require('../vx/edit-store.js');
let n = 0;
function check(name, fn) { fn(); n++; console.log('ok', name); }
const RATE = 48000;
const tone = (sec, hz, amp = 0.5, rate = RATE) => { const a = new Float32Array(Math.round(sec * rate)); for (let i = 0; i < a.length; i++) a[i] = amp * Math.sin(2 * Math.PI * hz * i / rate); return a; };
const rms = (a, i0 = 0, i1 = a.length) => { let s = 0; for (let i = i0; i < i1; i++) s += a[i] * a[i]; return Math.sqrt(s / Math.max(1, i1 - i0)); };
// zero crossings per second: the pitch of a sine
const zc = (a, rate = RATE, i0 = 0, i1 = a.length) => { let z = 0; for (let i = i0 + 1; i < i1; i++) if ((a[i - 1] < 0) !== (a[i] < 0)) z++; return z / 2 / ((i1 - i0) / rate); };

check('WSOLA stretch: length follows the speed, pitch stays, level stays', () => {
  const src = [tone(4, 440), tone(4, 440)];
  for (const sp of [0.75, 0.9, 1.1, 1.333, 1.6]) {
    const out = M.stretch(src, sp);
    assert.strictEqual(out[0].length, Math.round(src[0].length / sp), 'length at ' + sp);
    const mid0 = Math.round(out[0].length * 0.25), mid1 = Math.round(out[0].length * 0.75);
    const f = zc(out[0], RATE, mid0, mid1); assert.ok(Math.abs(f - 440) < 6, `pitch at ${sp}x: ${f.toFixed(1)} Hz`);
    const r = rms(out[0], mid0, mid1); assert.ok(Math.abs(r / rms(src[0]) - 1) < 0.08, `level at ${sp}x: ${(r / rms(src[0])).toFixed(3)}`);
  }
  assert.strictEqual(M.stretch(src, 1), src);
});
check('WSOLA keeps a beat on time: clicks every 0.5 s land every 0.5/speed s', () => {
  const a = new Float32Array(RATE * 6); for (let b = 0; b < 12; b++) for (let i = 0; i < 400; i++) a[b * RATE / 2 + i] = 0.9 * Math.sin(i / 3) * Math.exp(-i / 120);
  const sp = 1.25, out = M.stretch([a], sp)[0], hop = Math.round(RATE * 0.5 / sp);
  // the energy in a window round each expected click is far above the gaps
  for (let b = 1; b < 10; b++) { const c = b * hop, on = rms(out, c - 1200, c + 1200), off = rms(out, c + hop / 2 - 1200, c + hop / 2 + 1200); assert.ok(on > 4 * off, `click ${b}: ${on.toFixed(4)} vs ${off.toFixed(4)}`); }
});
check('render: segments land at `at`, from `from`, with gain, padded to the total', () => {
  const src = { chans: [tone(10, 220, 0.4), tone(10, 220, 0.4)], rate: RATE };
  const segs = [{ id: 'x', src: 's', at: 2, len: 3, from: 1, speed: 1, gain: 0.5, fadeIn: 0, fadeOut: 0, curveIn: 'tri', curveOut: 'tri' }];
  const [L, R] = M.render(segs, { s: src }, { rate: RATE, total: 8 });
  assert.strictEqual(L.length, 8 * RATE);
  assert.ok(rms(L, 0, 2 * RATE - 10) < 1e-6 && rms(L, 5 * RATE + 10) < 1e-6, 'silence before and after');
  assert.ok(Math.abs(rms(L, 2 * RATE, 5 * RATE) - 0.4 * 0.5 / Math.SQRT2) < 1e-3, 'gain 0.5');
  // sample-exact: the first sample of the segment is the source at `from`
  assert.ok(Math.abs(L[2 * RATE + 100] - 0.5 * src.chans[0][RATE + 100]) < 1e-6);
});
check('render: fades are linear, crossfades equal power (qsin), as ffmpeg afade', () => {
  const src = { chans: [new Float32Array(RATE * 10).fill(0.5)], rate: RATE };
  const fi = { id: 'a', src: 's', at: 0, len: 4, from: 0, speed: 1, gain: 1, fadeIn: 2, fadeOut: 0, curveIn: 'tri', curveOut: 'tri' };
  let [L] = M.render([fi], { s: src }, { rate: RATE, total: 4 });
  assert.ok(Math.abs(L[RATE] - 0.25) < 1e-3, 'half way through a linear fade in = half level');
  const xf = Object.assign({}, fi, { curveIn: 'qsin' });
  [L] = M.render([xf], { s: src }, { rate: RATE, total: 4 });
  assert.ok(Math.abs(L[RATE] - 0.5 * Math.sin(Math.PI / 4)) < 1e-3, 'half way through a qsin fade = 0.707 of the level');
});
check('the mix of an edited plan: crossfade window from VXTL, both sides sum to equal power', () => {
  const p = T.newProject(), a1 = T.track(p, 'a1');
  T.place(a1, { src: 'A', name: 'A', start: 0, in: 0, dur: 4, srcDur: 10 });
  T.place(a1, { src: 'B', name: 'B', start: 4, in: 2, dur: 4, srcDur: 10 });
  T.crossfade(p, T.sorted(a1)[1].id, 1);
  const plan = T.audioPlan(p), srcs = { A: { chans: [tone(10, 300, 0.5)], rate: RATE }, B: { chans: [tone(10, 300, 0.5)], rate: RATE } };
  const [L] = M.render(plan, srcs, { rate: RATE, total: 8 });
  const x = T.audioXfades(a1)[0]; assert.ok(x && x.b - x.a > 0.9);
  const each = rms(L, 1 * RATE, 3 * RATE), mid = rms(L, Math.round(x.a * RATE) + 4000, Math.round(x.b * RATE) - 4000);
  assert.ok(mid > each * 0.6, `crossfade middle ${mid.toFixed(3)} vs ${each.toFixed(3)}`);
});
check('render: a stretched segment fills its length; a missing source is reported', () => {
  const src = { chans: [tone(10, 440)], rate: RATE };
  const s = { id: 's', src: 's', at: 0, len: 4, from: 0, speed: 1.25, gain: 1, fadeIn: 0, fadeOut: 0, curveIn: 'tri', curveOut: 'tri' };
  const out = M.render([s, Object.assign({}, s, { src: 'gone', at: 5 })], { s: src }, { rate: RATE, total: 6 });
  assert.ok(rms(out[0], RATE / 2, 3.9 * RATE) > 0.3, 'sound through the whole stretched length');
  assert.deepStrictEqual(out.missing, ['gone']);
  assert.ok(Math.abs(zc(out[0], RATE, RATE, 3 * RATE) - 440) < 6, 'pitch kept');
});
check('resample: 44.1 kHz sources are brought to 48 kHz', () => {
  const r = M.resample(tone(1, 1000, 0.5, 44100), 44100, 48000); assert.strictEqual(r.length, 48000); assert.ok(Math.abs(zc(r) - 1000) < 5);
});
check('WAV: a valid 16-bit stereo header and the right length', () => {
  const w = M.wav([new Float32Array(48000), new Float32Array(48000).fill(2)], 48000), dv = new DataView(w.buffer);
  assert.strictEqual(String.fromCharCode(...w.slice(0, 4)), 'RIFF'); assert.strictEqual(String.fromCharCode(...w.slice(8, 12)), 'WAVE');
  assert.strictEqual(dv.getUint16(22, true), 2); assert.strictEqual(dv.getUint32(24, true), 48000); assert.strictEqual(dv.getUint16(34, true), 16);
  assert.strictEqual(dv.getUint32(40, true), 48000 * 4); assert.strictEqual(w.length, 44 + 48000 * 4);
  assert.strictEqual(dv.getInt16(44 + 2, true), 32767, 'clipped, not wrapped');
});

// ---- the project store
check('projects: save, list newest first, load, remove; no cap', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vxed-')), st = S.open({ fs, path, dir: path.join(dir, 'edit', 'local') });
  const mk = (title, dur) => { const p = T.newProject(); T.place(T.track(p, 'v1'), { src: '/v/a.mp4', name: 'A', start: 0, dur }); return { title, proj: p, t: 0 }; };
  const ids = []; for (let i = 0; i < 60; i++) ids.push(st.save(mk('EDIT ' + i, 10 + i)));
  const big = mk('LONG', 3 * 3600); ids.push(st.save(big));
  const L = st.list(); assert.strictEqual(L.length, 61); assert.strictEqual(L[0].title, 'LONG'); assert.strictEqual(L[0].seconds, 3 * 3600);
  assert.strictEqual(st.load(ids[3]).title, 'EDIT 3');
  big.title = 'LONG CUT'; assert.strictEqual(st.save(big), ids[60]); assert.strictEqual(st.list().length, 61);
  st.remove(ids[0]); assert.strictEqual(st.list().length, 60); assert.strictEqual(st.load(ids[0]), null);
  assert.strictEqual(st.load('../../etc/passwd'), null);
  fs.rmSync(dir, { recursive: true });
});
check('project file: export and import round trip with a new id; junk is refused', () => {
  const p = T.newProject(); T.place(T.track(p, 'a1'), { src: 'https://x/song.mp3', name: 'SONG', start: 0, dur: 30, bpm: 120 }); T.addSection(p, 0, 8, 'intro');
  const s = { id: 'pabc123', title: 'MY CUT', proj: p, look: 'house', t: 3 };
  const back = S.fromFile(S.toFile(s));
  assert.notStrictEqual(back.id, s.id); assert.strictEqual(back.title, 'MY CUT'); assert.deepStrictEqual(back.proj, JSON.parse(JSON.stringify(p)));
  assert.throws(() => S.fromFile('{"format":"x"}')); assert.throws(() => S.fromFile('not json'));
  assert.throws(() => S.fromFile(JSON.stringify({ format: S.FORMAT, version: 1, project: { proj: { tracks: [{ kind: 'evil', items: [] }] } } })));
});

// ---- the browser mix against ffmpeg's (the desktop export) on the same plan
const ff = ['/opt/homebrew/bin/ffmpeg', '/usr/local/bin/ffmpeg', '/usr/bin/ffmpeg'].find(f => fs.existsSync(f));
if (ff) check('browser mix = ffmpeg mix of the same plan (cuts, gain, fades, crossfade); stretch within tolerance', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vxmix-'));
  // a rich source: chord + clicks, written as a WAV both mixers read
  const len = RATE * 12, a = new Float32Array(len);
  for (let i = 0; i < len; i++) a[i] = 0.25 * Math.sin(2 * Math.PI * 220 * i / RATE) + 0.15 * Math.sin(2 * Math.PI * 331 * i / RATE) + (i % 24000 < 300 ? 0.4 * Math.sin(i / 2) : 0);
  const file = path.join(dir, 'src.wav'); fs.writeFileSync(file, M.wav([a, a], RATE));
  const p = T.newProject(), a1 = T.track(p, 'a1');
  T.place(a1, { src: file, name: 'S', start: 0, in: 0, dur: 4, srcDur: 12, gain: 0.8, fadeIn: 0.5 });
  T.place(a1, { src: file, name: 'S', start: 4, in: 6, dur: 3, srcDur: 12, fadeOut: 1 });
  T.crossfade(p, T.sorted(a1)[1].id, 0.5);
  const plan = T.audioPlan(p), total = 8;
  const [L] = M.render(plan, { [file]: { chans: [a, a], rate: RATE } }, { rate: RATE, total });
  const out = path.join(dir, 'ff.wav');
  cp.execFileSync(ff, T.mixArgs({ segs: plan.map(s => Object.assign({ file }, s)), total, out }));
  const fb = fs.readFileSync(out), dv = new DataView(fb.buffer, fb.byteOffset), dataAt = fb.indexOf('data') + 8, nfr = (fb.length - dataAt) / 4;
  assert.ok(Math.abs(nfr - total * RATE) < 4, 'ffmpeg length ' + nfr);
  let err = 0, ref = 0; for (let i = 0; i < Math.min(nfr, L.length); i++) { const v = dv.getInt16(dataAt + i * 4, true) / 32768; err += (v - L[i]) ** 2; ref += v * v; }
  const snr = 10 * Math.log10(ref / Math.max(err, 1e-12));
  assert.ok(snr > 30, 'browser vs ffmpeg SNR ' + snr.toFixed(1) + ' dB');
  console.log('   browser mix vs ffmpeg: SNR ' + snr.toFixed(1) + ' dB over ' + total + ' s');
  // stretched: same length, same level (the two WSOLAs differ in detail)
  const q = T.newProject(), b1 = T.track(q, 'a1'); T.place(b1, { src: file, name: 'S', start: 0, in: 0, dur: 8, srcDur: 12, bpm: 120 }); T.stretch(q, T.sorted(b1)[0].id, 135);
  const plan2 = T.audioPlan(q), tot2 = T.audioLength(q), [L2] = M.render(plan2, { [file]: { chans: [a, a], rate: RATE } }, { rate: RATE, total: tot2 });
  const out2 = path.join(dir, 'ff2.wav'); cp.execFileSync(ff, T.mixArgs({ segs: plan2.map(s => Object.assign({ file }, s)), total: tot2, out: out2 }));
  const f2 = fs.readFileSync(out2), d2 = new DataView(f2.buffer, f2.byteOffset), at2 = f2.indexOf('data') + 8, n2 = (f2.length - at2) / 4;
  let r2 = 0; for (let i = 0; i < n2; i++) { const v = d2.getInt16(at2 + i * 4, true) / 32768; r2 += v * v; }
  const lv = rms(L2) / Math.sqrt(r2 / n2);
  assert.ok(Math.abs(n2 - L2.length) < 4 && Math.abs(lv - 1) < 0.1, `stretch 120 -> 135: ${L2.length} vs ${n2} samples, level ratio ${lv.toFixed(3)}`);
  console.log(`   stretch 120 -> 135 BPM: ${(L2.length / RATE).toFixed(3)} s (ffmpeg ${(n2 / RATE).toFixed(3)} s), level ratio ${lv.toFixed(3)}`);
  fs.rmSync(dir, { recursive: true });
});
console.log(n + ' checks passed');
