// Writes game/content/packs/index.ts: the content packs the game bundle takes in (esbuild inlines the JSON), in merge
// order (by file name), as game/sketches/make.mjs does for the sketches. Run it after adding or removing a pack, then
// node scripts/pack-validate.mjs, then the game build (scripts/build-game.sh).
//
//   node scripts/pack-index.mjs            writes the index
//   node scripts/pack-index.mjs --check    exit 1 if the index is not the one this folder would give
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const PACKS_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'game', 'content', 'packs')
export const packFiles = (dir = PACKS_DIR) => readdirSync(dir).filter((f) => f.endsWith('.json')).sort()
export function indexText(files) {
  return '// written by scripts/pack-index.mjs: the installed content packs, in merge order (game/src/phone/packs.ts)\n' +
    files.map((f, i) => `import p${i} from './${f}';`).join('\n') + (files.length ? '\n' : '') + `export default [${files.map((_, i) => 'p' + i).join(', ')}];\n`
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const want = indexText(packFiles()), file = join(PACKS_DIR, 'index.ts')
  const have = existsSync(file) ? readFileSync(file, 'utf8') : ''
  if (process.argv.includes('--check')) {
    if (have !== want) { console.error('game/content/packs/index.ts is out of date: run node scripts/pack-index.mjs'); process.exit(1) }
    console.log('index up to date: ' + packFiles().length + ' pack(s)')
  } else {
    if (have !== want) writeFileSync(file, want)
    console.log('game/content/packs/index.ts: ' + (packFiles().join(', ') || 'no packs'))
  }
}
