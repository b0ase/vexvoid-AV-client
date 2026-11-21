# VexVoid builder (Pay to Develop, Phase A)

A Linux VM (Mandala `vexvoid-builder`) turns paid mission requests into **content packs**. A pack is JSON under `game/content/packs/` and nothing else. The builder opens one pull request per job into `feat/vx-rebuild`. A person reviews and merges it. The builder writes data, never code, and never merges (spec §9 and §10: `business/PAY-TO-DEVELOP-SPEC.md`).

```
buyer's brief ─► reader.mjs (one Claude call, no tools) ─► job spec (inbox/<id>.json)
             ─► run-job.sh: worktree on pack/<id> ─► Claude Code (Sonnet 5.5; Opus 5.5 after 2 failed checks)
                writes game/content/packs/<id>.json only ─► pack-validate + pack-check ALL OK
             ─► commit, push pack/<id>, PR into feat/vx-rebuild with pictures + check report ─► RB reviews, merges
```

## 1. Start the VM: one command

The VM needs `~/.config/vexvoid-builder/env` (mode 600) with `ANTHROPIC_API_KEY=...` and `GITHUB_TOKEN=...` (both are already there). Paste this into the VM's terminal:

```bash
bash -c '. ~/.config/vexvoid-builder/env && f=$(mktemp) && curl -fsSL -H @<(printf "Authorization: Bearer %s\nAccept: application/vnd.github.raw\n" "$GITHUB_TOKEN") -o "$f" "https://api.github.com/repos/b0ase/vexvoid-AV-client/contents/tools/builder/setup.sh?ref=feat/vx-builder" && env -u GITHUB_TOKEN -u ANTHROPIC_API_KEY bash "$f"'
```

- It fetches `setup.sh` from branch `feat/vx-builder` through the GitHub API, using the token from the env file.
- The token goes in a header that `printf` (a shell builtin) writes to a file descriptor. It never appears in the command text, the shell history, `ps` or a URL.
- `setup.sh` then runs without the keys in its environment. It reads them from the file only when it needs them.
- It asks for the sudo password once, for the apt packages.
- It is idempotent. Run the same line again to update or repair the setup.
- It ends `ALL OK` or names what failed. The first run takes roughly 10 to 20 minutes, and most of that is the play-check.

`setup.sh` does the following:

| step | what |
|---|---|
| keys | checks both are in the env file (never shown), sets it to mode 600 |
| apt | git, curl, xz, python3, ffmpeg, ImageMagick, DejaVu/Liberation/Noto fonts |
| Node | the newest LTS (24 or later) from nodejs.org, checked against `SHASUMS256.txt`, in `~/vexvoid-builder/tools/node` |
| pnpm | 12.16.1, the npm tarball checked against its pinned integrity |
| Claude Code | the official native installer: `curl -fsSL https://claude.ai/install.sh \| bash -s stable` |
| repo | clones `b0ase/vexvoid-AV-client` (`feat/vx-builder`) into `~/vexvoid-builder/repo`, through a credential helper (`~/vexvoid-builder/bin/git-credential-vexvoid`) that reads the token from the env file for github.com only. It sets git user `vexvoid-builder` and adds a **pre-push hook that lets only `refs/heads/pack/*` out** (no feat/*, main, tags or deletes) |
| browser | `pnpm install --frozen-lockfile` in `tools/builder` (Anthropic SDK 1.6.0, Playwright 1.64.1), then `playwright install chromium-headless-shell` plus its system libraries |
| build tools | three@0.182.0 and @esbuild/linux-x64 (or arm64) 0.27.2 for `scripts/build-game.sh`, each checked against its npm registry integrity hash (three's is also in `vx/lib/three.VERSION.txt`) |
| commands | `vexvoid-read` (brief to spec), `vexvoid-job` (run the next job), `anthropic-key` (Claude Code's `apiKeyHelper`), added to `PATH` in `~/.profile` |

**The self-test** (`bash ~/vexvoid-builder/repo/tools/builder/setup.sh --self-test` runs it alone):

1. builds the game with the pinned three and esbuild, and says whether the bundle is identical to the committed one (it keeps the committed one);
2. runs `scripts/pack-validate.mjs`;
3. runs `scripts/test-packs.mjs`;
4. runs `tools/builder/test-reader.mjs` (the reader with a mock client, no API call);
5. runs `tools/packs/pack-check.sh` on the house pack `p-house-sleeve`: headless, software WebGL, `PACK_FPS=off`. It plays the mission to the end, checks the messages and the credit, checks that progress survives a reload, and saves pictures and a clip.

## 2. Run a job

```bash
# a buyer's brief (text) -> a job spec in the inbox (one Claude call, no tools; off-rule briefs are refused)
vexvoid-read --brief brief.txt --id p-ana-canal --tier MISSION --credit "ANA B" --out ~/vexvoid-builder/inbox/p-ana-canal.json
# build it: branch pack/p-ana-canal, agent, checks, PR (never a merge)
vexvoid-job
```

- **The job spec** (`job-spec.schema.json`) has: `id` (= pack id, file and branch; `p-...`, at most 28 characters), `tier` (MISSION or MISSION_SET), `title`, `brief` (written by the reader, never the buyer's own words), `contacts`, `places`, `credit`, `revisions` and `cost_stop_usd` (default $6 for MISSION, $15 for MISSION_SET). `node tools/builder/spec.mjs FILE` checks a spec written by hand.
- **The reader** (`reader.mjs`) makes one call to `claude-opus-5-5` at effort low, with structured output (contacts and places limited to the game's own lists) and no tools.
  - Links, handles, emails and $TICKERS are refused before the call.
  - It refuses faces, real people, brands, sexual content, hate, money or token talk, and anything a pack can't do.
  - The spec it returns is checked again: the schema, the house word rules and no long quotes from the buyer.
  - A model refusal counts as a refused brief.
- **The agent** (`run-job.sh`) runs Claude Code headless, with `PLAYBOOK.md` appended to its system prompt.
  - Settings: `--bare --restricted`, `--permission-mode dontAsk`, effort `medium`, `--max-budget-usd` = what is left of the cost stop.
  - File tools are confined to the job's worktree and its previews folder.
  - It may write only `game/content/packs/<id>.json`.
  - Bash is limited to `node scripts/pack-validate.mjs`, `node scripts/pack-index.mjs` and `pack-check`. No web, no git.
  - Its environment holds no keys. Claude Code gets the API key from `apiKeyHelper`, and the GitHub token is never there.
  - It starts on `claude-sonnet-5-5`. After two failed pack-checks (the agent's own or the runner's, counted in `jobs/<id>/checks.log`), the session is resumed on `claude-opus-5-5`.
- **After each session** the runner:
  - throws the job away if anything outside the pack file changed;
  - rebuilds the index;
  - checks the pack against the spec (id, credit, mission count, contacts);
  - runs its own pack-check.
- **On ALL OK** the runner:
  - commits and pushes `pack/<id>`;
  - pushes the pictures to an orphan branch `pack/<id>-previews`, never in the PR diff;
  - opens the PR with the previews, the check report and the cost.
- **Per job** (`~/vexvoid-builder/jobs/<id>/`): `spec.json`, `cost.json` (tokens per session and model, $ from Claude Code's own accounting, machine minutes, state), `logs/session-N.jsonl` (the full agent transcript), `logs/check-N.log`, `previews/`, `pr-body.md`.
- **At the cost stop**, the job pauses (state `paused-cost-stop`, exit 5). Spec §7 says what happens next: finish it at our cost, or refund. It is never a cap on buyers.

## 3. Repo guards (set once by RB)

**CI:** `.github/workflows/pack-guard.yml` runs on every pull request.

- On a PR from a `pack/*` branch:
  - it fails if any changed file is not directly in `game/content/packs/`;
  - it fails if any file is not a `p-*.json` pack or `index.ts`, if a file is deleted, or if a file is a symlink;
  - it then runs `pack-index --check`, `pack-validate` and `test-packs`. No install, no browser.
- On any other PR it passes at once, so making it required blocks nothing else.

**The GitHub ruleset.** Go to github.com/b0ase/vexvoid-AV-client → Settings → Rules → Rulesets → New ruleset → New branch ruleset.

1. Ruleset name: `protect rebuild and main`. Enforcement status: **Active**.
2. Bypass list → Add bypass → **Repository admin** only (that is you). Leave nothing else on the list.
3. Target branches → Add target → Include by pattern: `feat/vx-rebuild`. Then add a second pattern: `main`.
4. Turn on these rules:
   - **Restrict deletions**.
   - **Require a pull request before merging**: Required approvals **1**. Also tick "Dismiss stale pull request approvals when new commits are pushed" and "Require approval of the most recent reviewable push".
   - **Require status checks to pass**: Add checks → type `pack-guard` → pick the one from GitHub Actions. (It appears after the workflow has run once on any PR. Until then, type the name and add it.)
   - **Block force pushes**.
5. Create.

Notes:

- Your own pushes to `feat/vx-rebuild` and `main` keep working through the bypass.
- **The builder's token is your own fine-grained token, so GitHub treats the builder as you.** Its PRs are authored by you, and you cannot approve your own PR. Merge them with the bypass ("Merge without waiting for requirements to be met").
- For the same reason, the ruleset alone cannot stop that token from merging or from pushing to other branches. What stops it is that:
  - the runner never calls merge;
  - the pre-push hook only lets `pack/*` out;
  - the agent never sees the token, and has no git and no network tools.
- Before Phase B (§10), give the builder its own identity: a GitHub App or a separate account, with Write access and no bypass. Then the ruleset binds it too, and your one-tap approval is a real second key.

## 4. Files

| file | what |
|---|---|
| `setup.sh` | one-command setup and the self-test |
| `run-job.sh`, `common.sh`, `report.mjs` | the job runner, its shared helpers, its cost ledger and PR body |
| `PLAYBOOK.md` | the builder agent's standing instruction (its CLAUDE.md) |
| `reader.mjs`, `job-spec.schema.json`, `spec.mjs` | brief to spec, the spec format, the spec check |
| `test-reader.mjs`, `sample-job.json` | reader and spec tests with a mock client |
| `package.json`, `pnpm-lock.yaml` | the builder's own deps (not the app's) |
| `../packs/pack-check.sh`, `pack-check.mjs`, `lib.mjs` | the headless play-check, from the devkit, made to run on the VM |

**pack-check here vs the devkit.** `vexvoid-devkit/pack-check.sh` drives the hidden desktop client (Electron) on the Mac. It adds the MCP pack-tool round trip and a real-GPU fps gate. The repo copy drives the web game bundle in headless Chromium with SwiftShader:

- it checks the pack with the same rules against the running game, and loads it without a rebuild;
- it plays every objective the same way;
- it records the clip from the game canvas;
- it adds the "starters untouched / a pack can't replace a starter" checks from `pack-web.mjs`.

Under software WebGL the view is small (640x400, pictures at 1280 wide), the render extras are off and waits stretch with the frame rate. The fps gate is skipped there, and it still runs at review on the Mac.
