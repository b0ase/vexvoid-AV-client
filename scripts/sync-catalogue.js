// Rebuild vx/catalogue.json from vexvoid.com's release data and the VX engine's clip deck.
//   node scripts/sync-catalogue.js [path/to/vexvoid.com-website]
// Everything in it is a public storage URL; nothing secret goes in this file.
const fs = require('fs');
const path = require('path');

const site = process.argv[2] || path.join(__dirname, '..', '..', 'VexVoid', 'vexvoid.com-website');
const releases = JSON.parse(fs.readFileSync(path.join(site, 'data', 'editions', 'releases.json'), 'utf8')).releases;

const tracks = releases.flatMap(r => r.takes.map(t => ({
  id: `${r.id}:${t.take}`, release: r.id, title: r.title, take: t.take, url: t.url, seconds: t.seconds
})));

// The clip deck lists live in vx/vx-engine.js; pull the URLs out of it so the two never drift.
const engine = fs.readFileSync(path.join(__dirname, '..', 'vx', 'vx-engine.js'), 'utf8');
const base = engine.match(/var BASE = '([^']+)'/)[1];
const grok = [...engine.matchAll(/'([0-9a-f]{8}-[0-9a-f-]{27})'/g)].map(m => ({ name: 'V3X IDENT ' + m[1].slice(0, 4).toUpperCase(), url: `${base}grok-video-${m[1]}.mp4`, set: 'smooth' }));
const jamIds = (engine.match(/var JAM = \[([^\]]+)\]/) || [, ''])[1].match(/'\d+'/g) || [];
const jam = jamIds.map(s => s.replace(/'/g, '')).map(n => ({ name: 'JAM ' + n, url: `${base}jam/jam-${n}.mp4`, set: 'rough' }));

// Image sets served from www.vexvoid.com/images/<set>/<file>; only files in git are deployed, so only those count
const imgRoot = path.join(site, 'public', 'images');
const tracked = new Set(require('child_process').execFileSync('git', ['-C', site, 'ls-files', 'public/images'], { encoding: 'utf8' }).split('\n'));
const images = fs.readdirSync(imgRoot, { withFileTypes: true })
  .filter(d => d.isDirectory() && /vex/i.test(d.name))
  .flatMap(d => fs.readdirSync(path.join(imgRoot, d.name))
    .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .filter(f => tracked.has(`public/images/${d.name}/${f}`))
    .sort()
    .map(f => ({ name: f.replace(/\.[^.]+$/, ''), set: d.name, url: `https://www.vexvoid.com/images/${encodeURIComponent(d.name)}/${encodeURIComponent(f)}` })));

const out = { generated: new Date().toISOString().slice(0, 10), tracks, clips: [...grok, ...jam], images };
fs.writeFileSync(path.join(__dirname, '..', 'vx', 'catalogue.json'), JSON.stringify(out, null, 1) + '\n');
console.log(`${tracks.length} tracks, ${out.clips.length} clips, ${images.length} images -> vx/catalogue.json`);
