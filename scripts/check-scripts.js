// Syntax-check every inline <script> in the given HTML files (a syntax error kills the whole window's script)
const fs = require('fs'); let bad = 0
for (const f of process.argv.slice(2)) {
  const html = fs.readFileSync(f, 'utf8'), re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g; let m, n = 0
  while ((m = re.exec(html))) { n++; try { new Function(m[1]) } catch (e) { bad++; console.log(f, 'inline script', n, 'line', html.slice(0, m.index).split('\n').length, e.message) } }
  console.log(f, n, 'inline scripts checked')
}
process.exit(bad ? 1 : 0)
