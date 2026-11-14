#!/usr/bin/env node
/* Write vx/clip-notes.json: what is in each catalogue clip, so VexVoid (the mixer's AI) and AUTO-CUT can pick shots
 * by content and energy instead of by name. Four frames per clip go to Claude with the owner's review standard.
 *
 *   node scripts/caption-clips.js [--limit N] [--redo]
 *
 * Key: ANTHROPIC_API_KEY, or the one saved in the mixer (vx-settings.json in its user-data folder). Never printed.
 * Resumes: clips already in the notes file are skipped unless --redo. Costs roughly 1-2 cents a clip.
 */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const NOTES = path.join(ROOT, 'vx', 'clip-notes.json');
const args = process.argv.slice(2);
const LIMIT = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
const REDO = args.includes('--redo');
// the owner's own verdicts (vexvoid.com data/studio/curation.json) overrule the model; ids like r04-tracks-6
const CURATION = args.includes('--curation') ? args[args.indexOf('--curation') + 1] : path.join(ROOT, '..', 'VexVoid', 'vexvoid.com-website', 'data', 'studio', 'curation.json');
const studioId = name => name.toLowerCase().replace(/^(fast|slow) /, '').replace(/\s+/g, '-');
function owner(name) {
  let cur; try { cur = JSON.parse(fs.readFileSync(CURATION, 'utf8')); } catch (e) { return {}; }
  const id = studioId(name), o = {};
  ['exclude', 'caution', 'favourite', 'peak', 'filler'].forEach(k => { if (cur[k] && cur[k][id]) o[k] = cur[k][id]; });
  return o;
}
const MODEL = 'claude-opus-5-5';
const PRICE = { in: 4 / 1e6, out: 20 / 1e6, cacheRead: 0.2 / 1e6 };

function apiKey() {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  const base = path.join(os.homedir(), 'Library', 'Application Support');
  for (const dir of ['V3XV0ID AV Client', 'v3xv0id-av-client', 'Electron']) {
    try { const s = JSON.parse(fs.readFileSync(path.join(base, dir, 'vx-settings.json'), 'utf8')); if (s.anthropicKey) return s.anthropicKey; } catch (e) {}
  }
  return '';
}
const ff = ['/opt/homebrew/bin/ffmpeg', '/usr/local/bin/ffmpeg', '/usr/bin/ffmpeg'].find(p => fs.existsSync(p));
const fprobe = ff && ff.replace(/ffmpeg$/, 'ffprobe');

// four frames across the clip, side by side in one JPEG
function strip(url) {
  const dur = parseFloat(execFileSync(fprobe, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', url], { encoding: 'utf8' })) || 6;
  const out = path.join(os.tmpdir(), `vx-cap-${process.pid}-${Math.random().toString(36).slice(2)}.jpg`);
  execFileSync(ff, ['-v', 'error', '-y', '-i', url, '-vf', `fps=4/${dur.toFixed(2)},scale=448:-2,tile=4x1:padding=4`, '-frames:v', '1', '-q:v', '4', out]);
  const b64 = fs.readFileSync(out).toString('base64'); fs.unlinkSync(out);
  return { b64, dur };
}

const SYSTEM = `You log footage for VexVoid, a black-and-white VJ and music-video brand (night city, hard single light, haze, figures seen from behind). Each image is four frames from one short clip, left to right in time. Describe what the clip shows so an editor can pick it without watching it.
- desc: what is in the shot and how it moves, in at most 14 plain words.
- subject: figure (a person is the subject), nobody, glyph (a logo, emblem or ident on black), crowd.
- energy 0..1: how much moves and how fast (0 a still glide, 1 frantic handheld or explosive action).
- phase: rough (raw handheld, harsh flash, gritty), bridge (concrete or darkness opening onto one hard light), smooth (calm, pristine, razor-sharp).
- face: visible if the face of a person in the shot can be seen in any frame (features, a profile, or a lit cheek edge under the hood): the brand's one hard reject, so look closely. masked if the face is fully covered (mask, balaclava, respirator) with no skin showing. crowd if the only faces are small, in a background crowd. none if no face shows: figures from behind, hoods in shadow, silhouettes, people too far away to make out.
- colour: true if the clip is not black and white (any tint or colour), since the house look is monochrome.
- landmark: true if a recognisable real landmark or skyline appears.
- caution: true only for a person in danger from a train or on rail tracks with a train coming, or imagery suggesting self-harm. Heights, climbing, ledges, rooftops, docks, machinery and demolition are the brand's normal world, not caution.
- use: the best place for it: opener, build, drop, breakdown, outro or ident.`;

const SCHEMA = { type: 'object', additionalProperties: false, required: ['desc', 'subject', 'energy', 'phase', 'face', 'colour', 'landmark', 'caution', 'use'], properties: {
  desc: { type: 'string' }, subject: { type: 'string', enum: ['figure', 'nobody', 'glyph', 'crowd'] }, energy: { type: 'number' },
  phase: { type: 'string', enum: ['rough', 'bridge', 'smooth'] }, face: { type: 'string', enum: ['none', 'masked', 'crowd', 'visible'] }, colour: { type: 'boolean' }, landmark: { type: 'boolean' }, caution: { type: 'boolean' },
  use: { type: 'string', enum: ['opener', 'build', 'drop', 'breakdown', 'outro', 'ident'] } } };

async function caption(key, clip) {
  const { b64 } = strip(clip.url);
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2026-10-21', 'anthropic-beta': 'server-side-fallback-2026-07-01' },
    body: JSON.stringify({ model: MODEL, max_tokens: 4000, fallbacks: 'default',
      output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: [
        { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: b64 } },
        { type: 'text', text: `Clip "${clip.name}" (catalogue set: ${clip.set}).` }] }] })
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data.error && data.error.message) || 'HTTP ' + res.status);
  if (data.stop_reason === 'refusal') throw new Error('declined');
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  const n = JSON.parse(text);
  n.energy = Math.max(0, Math.min(1, Number(n.energy) || 0));
  const u = data.usage || {};
  return { note: n, cost: (u.input_tokens || 0) * PRICE.in + (u.output_tokens || 0) * PRICE.out + (u.cache_read_input_tokens || 0) * PRICE.cacheRead + (u.cache_creation_input_tokens || 0) * PRICE.in * 1.25 };
}

(async () => {
  if (!ff || !fs.existsSync(fprobe)) { console.error('ffmpeg/ffprobe not found'); process.exit(1); }
  const key = apiKey();
  if (!key) { console.error('No Anthropic key: set ANTHROPIC_API_KEY or save one in the mixer (AI tab).'); process.exit(1); }
  const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'vx', 'catalogue.json'), 'utf8'));
  const notes = fs.existsSync(NOTES) ? JSON.parse(fs.readFileSync(NOTES, 'utf8')) : {};
  const todo = cat.clips.filter(c => REDO || !notes[c.url]).slice(0, LIMIT);
  console.log(`${todo.length} clips to caption (${Object.keys(notes).length} already done)`);
  let spent = 0, done = 0, failed = 0;
  const q = todo.slice();
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (q.length) {
      const c = q.shift();
      try {
        const r = await caption(key, c);
        const ov = owner(c.name), n = { name: c.name, ...r.note };
        // face: a visible face is a reject; faces in a background crowd count as caution (owner on r02-speakers-4)
        n.face = r.note.face === 'visible'; n.faceKind = r.note.face; if (r.note.face === 'crowd') n.caution = true;
        if (ov.exclude) { n.face = true; n.owner = 'exclude: ' + ov.exclude; }
        if (ov.caution) { n.caution = true; n.owner = 'caution: ' + ov.caution; }
        ['favourite', 'peak', 'filler'].forEach(k => { if (ov[k]) { n[k] = true; n.owner = k + ': ' + ov[k]; } });
        notes[c.url] = n;
        spent += r.cost; done++;
        fs.writeFileSync(NOTES, JSON.stringify(notes, null, 1));
        console.log(`${done}/${todo.length} ${c.name}: [${n.phase} ${n.energy.toFixed(2)} face:${n.faceKind}${n.face ? ' REJECT' : ''}${n.caution ? ' CAUTION' : ''}${n.owner ? ' OWNER ' + n.owner.split(':')[0] : ''}] ${n.desc}`);
      } catch (e) { failed++; console.log(`FAILED ${c.name}: ${e.message}`); }
    }
  }));
  console.log(`done ${done}, failed ${failed}, about $${spent.toFixed(2)}`);
})();
