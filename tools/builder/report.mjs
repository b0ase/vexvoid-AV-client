// The builder's bookkeeping, for run-job.sh: the cost ledger per job and the pull request body. No network, no keys.
//
//   node report.mjs cost JOBDIR N MODEL SESSION.jsonl SECS   add one agent session (Claude Code stream-json) to cost.json;
//                                                          prints "<total usd> <result subtype>"
//   node report.mjs check JOBDIR N SECS OK|FAIL            add one runner pack-check (machine minutes) to cost.json
//   node report.mjs state JOBDIR STATE                     set the job's state in cost.json
//   node report.mjs tier JOBDIR PACK.json                  the pack matches the spec (id, job, credit, mission count)
//   node report.mjs body JOBDIR IMGBASE                    the pull request body (markdown) on stdout
import fs from 'node:fs'
import path from 'node:path'

const [cmd, J, ...a] = process.argv.slice(2)
const ledgerFile = () => path.join(J, 'cost.json')
const spec = () => JSON.parse(fs.readFileSync(path.join(J, 'spec.json'), 'utf8'))
const ledger = () => fs.existsSync(ledgerFile()) ? JSON.parse(fs.readFileSync(ledgerFile(), 'utf8'))
  : { id: spec().id, tier: spec().tier, cost_stop_usd: spec().cost_stop_usd, state: 'running', started: new Date().toISOString(), sessions: [], checks: [], tokens: { input: 0, cache_write: 0, cache_read: 0, output: 0 }, models: {}, total_usd: 0, machine_minutes: 0 }
const put = (L) => { L.updated = new Date().toISOString(); fs.writeFileSync(ledgerFile(), JSON.stringify(L, null, 1) + '\n') }

if (cmd === 'cost') {
  const [n, model, file, secs] = a, L = ledger()
  let res = null
  for (const line of fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split('\n') : []) { try { const m = JSON.parse(line); if (m.type === 'result') res = m } catch { /* not JSON */ } }
  const u = (res && res.usage) || {}
  const s = { n: +n, model, subtype: res ? res.subtype : 'no-result', is_error: res ? !!res.is_error : true, cost_usd: res ? +(res.total_cost_usd || 0) : 0, turns: res ? res.num_turns : 0, duration_ms: res ? res.duration_ms : 0, wall_secs: +secs, session_id: res ? res.session_id : null,
    usage: { input: u.input_tokens || 0, cache_write: u.cache_creation_input_tokens || 0, cache_read: u.cache_read_input_tokens || 0, output: u.output_tokens || 0 } }
  L.sessions.push(s)
  for (const k of Object.keys(L.tokens)) L.tokens[k] += s.usage[k]
  for (const [m, mu] of Object.entries((res && res.modelUsage) || {})) {
    const t = L.models[m] || (L.models[m] = { input: 0, cache_write: 0, cache_read: 0, output: 0, usd: 0 })
    t.input += mu.inputTokens || 0; t.cache_write += mu.cacheCreationInputTokens || 0; t.cache_read += mu.cacheReadInputTokens || 0; t.output += mu.outputTokens || 0; t.usd = +(t.usd + (mu.costUSD || 0)).toFixed(6)
  }
  L.total_usd = +L.sessions.reduce((k, x) => k + x.cost_usd, 0).toFixed(6)
  L.machine_minutes = +(L.machine_minutes + (+secs) / 60).toFixed(2)
  put(L); console.log(L.total_usd.toFixed(4) + ' ' + s.subtype)
} else if (cmd === 'check') {
  const [n, secs, verdict] = a, L = ledger()
  L.checks.push({ n: +n, secs: +secs, ok: verdict === 'OK' }); L.machine_minutes = +(L.machine_minutes + (+secs) / 60).toFixed(2); put(L)
} else if (cmd === 'state') {
  const L = ledger(); L.state = a[0]; if (/^(done|paused|failed|rejected)/.test(a[0])) L.finished = new Date().toISOString(); put(L)
} else if (cmd === 'tier') {
  const S = spec(); let P
  try { P = JSON.parse(fs.readFileSync(a[0], 'utf8')) } catch (e) { console.log('the pack is not JSON: ' + e.message); process.exit(1) }
  const p = [], want = S.tier === 'MISSION_SET' ? 3 : 1, ms = Array.isArray(P.missions) ? P.missions : []
  if (P.id !== S.id) p.push(`the pack id must be ${S.id} (is ${JSON.stringify(P.id)})`)
  if (P.job !== S.id.replace(/^p-/, '')) p.push(`job must be "${S.id.replace(/^p-/, '')}"`)
  if (!P.credit || P.credit.name !== S.credit.name || (P.credit.show !== false) !== S.credit.show) p.push(`credit must be ${JSON.stringify(S.credit)}`)
  if (ms.length !== want) p.push(`${S.tier} means exactly ${want} mission${want > 1 ? 's' : ''} (the pack has ${ms.length})`)
  ms.forEach((m) => { const n = (m && m.objectives || []).length; if (n < 3 || n > 5) p.push(`${m && m.id}: 3 to 5 objectives (has ${n})`); if (m && !S.contacts.includes(m.from)) p.push(`${m.id}: from must be one of the spec's contacts (${S.contacts.join(', ')})`) })
  if (p.length) { console.log(p.join('\n')); process.exit(1) }
  console.log('ok')
} else if (cmd === 'body') {
  const [img] = a, S = spec(), L = ledger(), id = S.id
  const prev = path.join(J, 'previews', id)
  const checkLog = fs.existsSync(path.join(prev, 'check.log')) ? fs.readFileSync(path.join(prev, 'check.log'), 'utf8') : ''
  const lines = checkLog.split('\n').filter((l) => /^(ok|FAIL) |^ALL OK|FAILED/.test(l))
  const pack = JSON.parse(fs.readFileSync(path.join(J, 'work', 'game', 'content', 'packs', id + '.json'), 'utf8'))
  const pics = fs.existsSync(path.join(J, 'pr-pictures.txt')) ? fs.readFileSync(path.join(J, 'pr-pictures.txt'), 'utf8').split('\n').filter(Boolean) : []
  const md = (s) => String(s).replace(/[<>&`|]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '`': "'", '|': '/' })[c])
  const out = []
  out.push(`**Builder job \`${id}\`** (${S.tier}): ${md(S.title)}. Built by the VexVoid builder (data only: \`game/content/packs/\`). **Review before merging; the builder never merges.**`, '')
  out.push(`> ${md(S.brief)}`, '', `Credit: ${md(S.credit.name)}${S.credit.show ? '' : ' (hidden)'} · contacts: ${S.contacts.join(', ')} · places: ${S.places.join(', ') || 'builder\'s choice'}`, '')
  out.push('### Missions', '')
  for (const m of pack.missions || []) {
    out.push(`- **${md(m.title)}** (\`${m.id}\`, from ${md(m.from)}): ${md(m.summary)}`)
    for (const o of m.objectives || []) out.push(`  - ${o.type}: ${md(o.text)}`)
  }
  out.push('', '### Play-check (headless, software WebGL; the fps gate runs at review on a real GPU)', '', '```', ...lines.map((l) => l.replace(/`/g, "'")), '```', '')
  if (pics.length) {
    out.push('### Previews', '')
    for (const p of pics) { const n = path.basename(p); out.push(/\.mp4$/.test(n) ? `- clip: [${n}](${img}/${n})` : `![${n}](${img}/${n}?raw=true)`) }
    out.push('')
  }
  const models = Object.entries(L.models).map(([m, t]) => `${m} $${t.usd.toFixed(2)}`).join(', ') || 'none'
  out.push('### Cost', '', `AI $${L.total_usd.toFixed(2)} of the $${S.cost_stop_usd} stop (${models}); ${L.sessions.length} session(s), ${L.tokens.input + L.tokens.cache_write + L.tokens.cache_read} in / ${L.tokens.output} out tokens (${L.tokens.cache_read} cached); ${L.checks.length} runner check(s); ${L.machine_minutes} machine minutes.`, '')
  out.push(`<sub>spec reader: ${md((S.reader && S.reader.model) || 'hand-written')} · job folder on the builder: ~/vexvoid-builder/jobs/${id}/</sub>`)
  console.log(out.join('\n'))
} else { console.log('usage: see the top of report.mjs'); process.exit(2) }
