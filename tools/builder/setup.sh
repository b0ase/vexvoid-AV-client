#!/usr/bin/env bash
# SET UP THE VEXVOID BUILDER (Pay to Develop, Phase A) on a fresh Linux VM (Mandala "vexvoid-builder", Ubuntu-like,
# user `user`). Idempotent: run it again at any time; it only does what is missing, then runs the self-test.
#
# Needs: ~/.config/vexvoid-builder/env (mode 600) with ANTHROPIC_API_KEY and GITHUB_TOKEN (fine-grained,
# b0ase/vexvoid-AV-client only, Contents + Pull requests). The keys are read from that file when they are used and are
# never printed, exported to the agent, written into a URL, a git config or the shell history.
#
# It installs, under ~/vexvoid-builder (apt packages system-wide, with sudo):
#   - git, curl, xz, python3, ffmpeg, ImageMagick and fonts (apt);
#   - Node LTS (nodejs.org tarball, checked against SHASUMS256.txt), pnpm 12.16.1 (npm tarball, integrity checked);
#   - Claude Code, the official native installer:  curl -fsSL https://claude.ai/install.sh | bash -s stable
#   - chrome-headless-shell (Playwright 1.64.1, from tools/builder's pnpm lockfile) and the libraries it needs;
#   - three@0.182.0 and esbuild 0.27.2 for scripts/build-game.sh, checked against the npm registry integrity hashes.
# Then it clones b0ase/vexvoid-AV-client into ~/vexvoid-builder/repo (branch feat/vx-builder, through a git credential
# helper that reads the token from the env file), sets the git user to vexvoid-builder, adds a pre-push hook that only
# lets refs/heads/pack/* out, and runs the SELF-TEST: build the game, pack-validate, test-packs, the reader's mock tests,
# and pack-check on the house pack p-house-sleeve. It prints ALL OK, or what failed.
#
#   bash setup.sh                 everything
#   bash setup.sh --no-install    skip apt, Node, pnpm, Claude Code and the browser (they must be there already)
#   bash setup.sh --self-test     only the self-test (on an existing setup)
# Test knobs: VEXVOID_BUILDER_HOME (default ~/vexvoid-builder), VEXVOID_BUILDER_ENV, VEXVOID_REPO_URL, VEXVOID_BUILDER_REF
# (feat/vx-builder), VEXVOID_NO_RC=1 (leave ~/.profile and ~/.bashrc alone; they are only edited on Linux anyway).
set -euo pipefail
{ set +x; } 2>/dev/null
umask 022

B=${VEXVOID_BUILDER_HOME:-$HOME/vexvoid-builder}
ENVF=${VEXVOID_BUILDER_ENV:-$HOME/.config/vexvoid-builder/env}
URL=${VEXVOID_REPO_URL:-https://github.com/b0ase/vexvoid-AV-client.git}
REF=${VEXVOID_BUILDER_REF:-feat/vx-builder}
REPO=$B/repo; TOOLS=$B/tools; BIN=$B/bin
INSTALL=1; ONLY_TEST=0
for a in "$@"; do case "$a" in --no-install) INSTALL=0 ;; --self-test) ONLY_TEST=1; INSTALL=0 ;; *) echo "unknown option $a"; exit 2 ;; esac; done

# pins (npm registry dist.integrity; three's also in vx/lib/three.VERSION.txt)
THREE_V=0.182.0; THREE_SRI=sha512-GbHabT+Irv+ihI1/f5kIIsZ+Ef9Sl5A1Y7imvS5RQjWgtTPfPnZ43JmlYI7NtCRDK9zir20lQpfg8/9Yd02OvQ==
ESB_V=0.27.2
ESB_SRI_linux_x64=sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==
ESB_SRI_linux_arm64=sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==
ESB_SRI_darwin_arm64=sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==
PNPM_V=12.16.1
PNPM_SRI_linux_x64=sha512-RK//8ZLcXGW8A2k8bQOXZDBN1Qu92zN4dYnG1bzj1zoQ1fkZ6jNzZ1AvXtsfGVma795CJtvoaF5bLXf4l/FIUw==
PNPM_SRI_linux_arm64=sha512-JaRd5gNxwdNGBBkrZFt8bknrK4YmHVJBW0JMhUQ0fJ0dEYp6C2GT9ExaCqOO8EwYEyqM+jpKgJIK+8WFaJy3ew==
PNPM_SRI_darwin_arm64=sha512-pVbmIIbhixiLvADLu1WA3TaW8FZy/D72R1De27WbbFx8/2mxvnsTyFVm4fO9kjpjMY7RzJd48CiQ96p8fO3ebQ==
NODE_MIN=24

# never wait on a hidden prompt: a system Node's corepack pnpm shim asks "download pnpm? [Y/n]" on stderr, and
# `pnpm -v 2>/dev/null` then hangs silently (seen on the Mandala VM, 21 Nov 2026). Version checks also time out.
export COREPACK_ENABLE_DOWNLOAD_PROMPT=0 COREPACK_ENABLE_STRICT=0
say() { printf '\n== %s\n' "$*"; }
die() { printf '\nSETUP FAILED: %s\n' "$*"; exit 1; }
case "$(uname -s)-$(uname -m)" in
  Linux-x86_64) PLAT=linux_x64; NPLAT=linux-x64 ;;
  Linux-aarch64|Linux-arm64) PLAT=linux_arm64; NPLAT=linux-arm64 ;;
  Darwin-arm64) PLAT=darwin_arm64; NPLAT=darwin-arm64 ;;
  *) die "unsupported machine $(uname -s) $(uname -m)" ;;
esac
[ "$(id -u)" != 0 ] || die "run this as the builder's user (user), not root; it asks sudo for the apt packages"
mkdir -p "$B" "$TOOLS" "$BIN" "$B/inbox" "$B/jobs" "$B/rejected"
export PATH="$BIN:$TOOLS/node/bin:$HOME/.local/bin:$PATH"

# envget KEY: a value from the env file (KEY=value, export KEY=value, quoted or not); never echoed by this script
envget() { { set +x; } 2>/dev/null; sed -n -E "s/^[[:space:]]*(export[[:space:]]+)?$1[[:space:]]*=[[:space:]]*[\"']?([^\"'[:space:]]*)[\"']?[[:space:]]*$/\2/p" "$ENVF" | tail -n 1; }

# sri FILE: the file's sha512 in npm's integrity form
sri() { if command -v node >/dev/null 2>&1; then node -e 'console.log("sha512-" + require("crypto").createHash("sha512").update(require("fs").readFileSync(process.argv[1])).digest("base64"))' "$1"; else printf 'sha512-%s\n' "$(openssl dgst -sha512 -binary "$1" | base64 | tr -d '\n')"; fi; }
# npm_fetch NAME VERSION INTEGRITY DEST: the registry tarball, checked against the pinned integrity, unpacked in DEST
npm_fetch() {
  local name=$1 v=$2 want=$3 dest=$4 tmp; [ -n "$want" ] || die "no pinned integrity for $name on $PLAT"
  if [ -f "$dest/.integrity" ] && [ "$(cat "$dest/.integrity")" = "$want" ]; then echo "   $name@$v: already here ($dest)"; return; fi
  tmp=$(mktemp -d); curl -fsSL "https://registry.npmjs.org/$name/-/${name##*/}-$v.tgz" -o "$tmp/p.tgz"
  [ "$(sri "$tmp/p.tgz")" = "$want" ] || { rm -rf "$tmp"; die "$name@$v: the download does not match the pinned integrity"; }
  rm -rf "$dest"; mkdir -p "$dest"; tar -xzf "$tmp/p.tgz" -C "$dest"; echo "$want" > "$dest/.integrity"; rm -rf "$tmp"
  echo "   $name@$v: integrity ok ($dest)"
}

# ---------------------------------------------------------------- the keys
say "the keys ($ENVF)"
[ -f "$ENVF" ] || die "no $ENVF: put ANTHROPIC_API_KEY=... and GITHUB_TOKEN=... in it (mode 600)"
chmod 600 "$ENVF"; chmod 700 "$(dirname "$ENVF")"
for k in ANTHROPIC_API_KEY GITHUB_TOKEN; do [ -n "$(envget "$k")" ] && echo "   $k: found (not shown)" || die "$k is missing from $ENVF"; done

if [ "$ONLY_TEST" = 0 ]; then
# ---------------------------------------------------------------- system packages
if [ "$INSTALL" = 1 ] && [ "${PLAT%%_*}" = linux ]; then
  say "system packages (apt)"
  PKGS=(git curl ca-certificates xz-utils python3 ffmpeg imagemagick fonts-dejavu-core fonts-liberation fonts-noto-core)
  MISSING=(); for p in "${PKGS[@]}"; do dpkg -s "$p" >/dev/null 2>&1 || MISSING+=("$p"); done
  if [ ${#MISSING[@]} -gt 0 ]; then
    echo "   installing: ${MISSING[*]}"
    sudo apt-get update -qq && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -qq "${MISSING[@]}" >/dev/null
  else echo "   all there"; fi
fi

# ---------------------------------------------------------------- Node LTS
say "Node (LTS, at least $NODE_MIN)"
have_node() { command -v node >/dev/null 2>&1 && [ "$(node -p 'process.versions.node.split(".")[0]')" -ge "$NODE_MIN" ]; }
if have_node; then echo "   $(node -v) at $(command -v node)"
elif [ "$INSTALL" = 1 ]; then
  NV=$(curl -fsSL https://nodejs.org/dist/index.json | python3 -c 'import json,sys; print(next(r["version"] for r in json.load(sys.stdin) if r["lts"] and int(r["version"][1:].split(".")[0]) >= '"$NODE_MIN"'))')
  F=node-$NV-$NPLAT.tar.xz; tmp=$(mktemp -d)
  curl -fsSL "https://nodejs.org/dist/$NV/$F" -o "$tmp/$F"; curl -fsSL "https://nodejs.org/dist/$NV/SHASUMS256.txt" -o "$tmp/SHASUMS256.txt"
  (cd "$tmp" && grep " $F\$" SHASUMS256.txt | sha256sum -c --status) || die "node $NV: the download does not match SHASUMS256.txt"
  rm -rf "$TOOLS/node-$NV"; mkdir -p "$TOOLS/node-$NV"; tar -xJf "$tmp/$F" -C "$TOOLS/node-$NV" --strip-components=1; rm -rf "$tmp"
  ln -sfn "$TOOLS/node-$NV" "$TOOLS/node"; hash -r; echo "   installed $(node -v) (checked against SHASUMS256.txt)"
else die "no Node $NODE_MIN+ (run without --no-install)"; fi

# ---------------------------------------------------------------- pnpm
say "pnpm $PNPM_V"
if command -v pnpm >/dev/null 2>&1 && [ "$(timeout 60 pnpm -v </dev/null 2>/dev/null)" = "$PNPM_V" ]; then echo "   pnpm $(pnpm -v) at $(command -v pnpm)"
elif [ "$INSTALL" = 1 ]; then
  SRIV=PNPM_SRI_$PLAT; npm_fetch "@pnpm/exe.${NPLAT}" "$PNPM_V" "${!SRIV:-}" "$TOOLS/pnpm-$PNPM_V"
  ln -sfn "$TOOLS/pnpm-$PNPM_V/package/pnpm" "$BIN/pnpm"; chmod +x "$TOOLS/pnpm-$PNPM_V/package/pnpm"; hash -r; echo "   pnpm $(pnpm -v)"
else command -v pnpm >/dev/null 2>&1 && echo "   pnpm $(pnpm -v) (not $PNPM_V; --no-install leaves it)" || die "no pnpm"; fi

# ---------------------------------------------------------------- Claude Code
say "Claude Code"
if command -v claude >/dev/null 2>&1; then echo "   $(claude --version 2>/dev/null | head -n 1) at $(command -v claude)"
elif [ "$INSTALL" = 1 ]; then
  # the official native installer (https://code.claude.com/docs: "curl -fsSL https://claude.ai/install.sh | bash")
  curl -fsSL https://claude.ai/install.sh | bash -s stable
  hash -r; command -v claude >/dev/null 2>&1 || die "Claude Code did not install"; echo "   $(claude --version | head -n 1)"
else die "no claude (run without --no-install)"; fi

# ---------------------------------------------------------------- git: the helper, the clone, the user, the hook
say "the repo ($URL, $REF) in $REPO"
cat > "$BIN/git-credential-vexvoid" <<'EOF'
#!/bin/sh
# git credential helper for the VexVoid builder: the GitHub token from the env file, for github.com only, never stored.
[ "$1" = get ] || exit 0
host=""
while IFS='=' read -r k v; do [ -z "$k" ] && break; [ "$k" = host ] && host=$v; done
[ "$host" = github.com ] || exit 0
t=$(sed -n -E "s/^[[:space:]]*(export[[:space:]]+)?GITHUB_TOKEN[[:space:]]*=[[:space:]]*[\"']?([^\"'[:space:]]*)[\"']?[[:space:]]*$/\2/p" "${VEXVOID_BUILDER_ENV:-$HOME/.config/vexvoid-builder/env}" | tail -n 1)
[ -n "$t" ] || exit 0
printf 'username=x-access-token\npassword=%s\n' "$t"
EOF
chmod 755 "$BIN/git-credential-vexvoid"
GITC=(-c credential.helper= -c "credential.helper=$BIN/git-credential-vexvoid")
if [ ! -d "$REPO/.git" ]; then
  git "${GITC[@]}" clone --quiet --branch "$REF" "$URL" "$REPO"
  echo "   cloned"
fi
git -C "$REPO" config --local --unset-all credential.helper 2>/dev/null || true
git -C "$REPO" config --local --add credential.helper ""          # drop any helper from the system or global config
git -C "$REPO" config --local --add credential.helper "$BIN/git-credential-vexvoid"
git -C "$REPO" config --local user.name v3xv0id-builder
git -C "$REPO" config --local user.email 359593724+v3xv0id-builder@users.noreply.github.com
git -C "$REPO" config --local core.hooksPath "$REPO/.git/hooks"
git -C "$REPO" config --local push.default nothing
git -C "$REPO" fetch --quiet --prune origin
if [ -z "$(git -C "$REPO" status --porcelain)" ]; then git -C "$REPO" checkout --quiet -B builder-tools "origin/$REF"; echo "   at origin/$REF $(git -C "$REPO" rev-parse --short HEAD)"
else echo "   (local changes in $REPO: left as they are, not updated to origin/$REF)"; fi
cat > "$REPO/.git/hooks/pre-push" <<'EOF'
#!/bin/sh
# VexVoid builder: only pack/* branches leave this machine. No feat/*, main, tags, and no deleting.
while read -r lref lsha rref rsha; do
  case "$rref" in refs/heads/pack/*) ;; *) echo "pre-push: the builder may only push refs/heads/pack/* (not $rref)" >&2; exit 1 ;; esac
  case "$lsha" in *[!0]*) ;; *) echo "pre-push: the builder does not delete branches ($rref)" >&2; exit 1 ;; esac
done
exit 0
EOF
chmod 755 "$REPO/.git/hooks/pre-push"; echo "   git user vexvoid-builder; pre-push hook: refs/heads/pack/* only"

# ---------------------------------------------------------------- the builder's own deps and the browser
say "the builder's packages (tools/builder: Anthropic SDK, Playwright) and chrome-headless-shell"
(cd "$REPO/tools/builder" && pnpm install --ignore-workspace --frozen-lockfile --reporter=silent)
[ "$INSTALL" = 1 ] || [ -d "$TOOLS/ms-playwright" ] && export PLAYWRIGHT_BROWSERS_PATH=$TOOLS/ms-playwright
if [ "$INSTALL" = 1 ]; then
  (cd "$REPO/tools/builder" && ./node_modules/.bin/playwright install chromium-headless-shell)
  if [ "${PLAT%%_*}" = linux ]; then (cd "$REPO/tools/builder" && sudo env "PATH=$PATH" ./node_modules/.bin/playwright install-deps chromium-headless-shell >/dev/null); fi
fi
CH=$(ls -d "$TOOLS"/ms-playwright/chromium_headless_shell-*/*/chrome-headless-shell "$TOOLS"/ms-playwright/chromium_headless_shell-*/*/headless_shell 2>/dev/null | sort | tail -n 1 || true)
[ -n "$CH" ] && echo "   $CH" || { [ "$INSTALL" = 1 ] && die "chrome-headless-shell did not install"; echo "   (no browser under $TOOLS/ms-playwright: pack-check looks in the Playwright cache)"; }

# ---------------------------------------------------------------- three and esbuild for build-game.sh
say "three@$THREE_V and esbuild $ESB_V (npm integrity)"
grep -q "$THREE_SRI" "$REPO/vx/lib/three.VERSION.txt" || die "the three pin here differs from vx/lib/three.VERSION.txt"
npm_fetch three "$THREE_V" "$THREE_SRI" "$TOOLS/three-$THREE_V"
SRIV=ESB_SRI_$PLAT; npm_fetch "@esbuild/$NPLAT" "$ESB_V" "${!SRIV:-}" "$TOOLS/esbuild-$ESB_V"
chmod +x "$TOOLS/esbuild-$ESB_V/package/bin/esbuild"; "$TOOLS/esbuild-$ESB_V/package/bin/esbuild" --version | sed 's/^/   esbuild /'

# ---------------------------------------------------------------- the builder's commands
say "commands in $BIN"
cat > "$BIN/anthropic-key" <<'EOF'
#!/bin/sh
# Claude Code's apiKeyHelper for the builder: the key from the env file, to Claude Code only (never in the agent's env)
sed -n -E "s/^[[:space:]]*(export[[:space:]]+)?ANTHROPIC_API_KEY[[:space:]]*=[[:space:]]*[\"']?([^\"'[:space:]]*)[\"']?[[:space:]]*$/\2/p" "${VEXVOID_BUILDER_ENV:-$HOME/.config/vexvoid-builder/env}" | tail -n 1
EOF
cat > "$BIN/vexvoid-job" <<EOF
#!/bin/sh
# run the next builder job from ~/vexvoid-builder/inbox (or the spec given)
export PATH="$BIN:$TOOLS/node/bin:\$HOME/.local/bin:\$PATH" PLAYWRIGHT_BROWSERS_PATH="$TOOLS/ms-playwright"
exec bash "$REPO/tools/builder/run-job.sh" "\$@"
EOF
cat > "$BIN/vexvoid-read" <<EOF
#!/bin/sh
# a buyer's brief -> a job spec in the inbox: vexvoid-read --brief brief.txt --id p-<job> --tier MISSION --credit NAME --out ~/vexvoid-builder/inbox/p-<job>.json
export PATH="$BIN:$TOOLS/node/bin:\$PATH"
exec node "$REPO/tools/builder/reader.mjs" "\$@"
EOF
chmod 755 "$BIN/anthropic-key" "$BIN/vexvoid-job" "$BIN/vexvoid-read"
LINE="export PATH=\"$BIN:$TOOLS/node/bin:\$HOME/.local/bin:\$PATH\" PLAYWRIGHT_BROWSERS_PATH=\"$TOOLS/ms-playwright\"   # vexvoid-builder"
if [ "${PLAT%%_*}" = linux ] && [ -z "${VEXVOID_NO_RC:-}" ]; then   # the VM only: a Mac running the tests keeps its shell files
  for rc in "$HOME/.profile" "$HOME/.bashrc"; do [ -f "$rc" ] && grep -q '# vexvoid-builder$' "$rc" || echo "$LINE" >> "$rc"; done
  echo "   vexvoid-job, vexvoid-read, anthropic-key, git-credential-vexvoid (PATH added to ~/.profile and ~/.bashrc)"
else echo "   vexvoid-job, vexvoid-read, anthropic-key, git-credential-vexvoid (shell files not touched)"; fi
fi

# ---------------------------------------------------------------- the self-test
[ -d "$TOOLS/ms-playwright" ] && export PLAYWRIGHT_BROWSERS_PATH=$TOOLS/ms-playwright
say "SELF-TEST in $REPO"
cd "$REPO"; FAILS=()
T=$B/selftest; rm -rf "$T"; mkdir -p "$T"
echo "-- build the game (scripts/build-game.sh)"
if THREE_DIR=$TOOLS/three-$THREE_V/package ESBUILD=$TOOLS/esbuild-$ESB_V/package/bin/esbuild bash scripts/build-game.sh > "$T/build.log" 2>&1 && [ -s vx/game/vexvoid-game.js ]; then
  NEW=$(sri vx/game/vexvoid-game.js); OLD=$(git show HEAD:vx/game/vexvoid-game.js > "$T/committed.js" && sri "$T/committed.js")
  if [ "$NEW" = "$OLD" ]; then echo "   ok   built; identical to the committed bundle"
  else echo "   ok   built (note: differs from the committed bundle; the committed one is kept for the checks)"; fi
  git checkout --quiet -- vx/game/vexvoid-game.js
else FAILS+=("build-game.sh (see $T/build.log)"); echo "   FAIL build-game.sh"; sed 's/^/        /' "$T/build.log" | tail -n 15; git checkout --quiet -- vx/game/vexvoid-game.js 2>/dev/null || true; fi
echo "-- pack-validate"
node scripts/pack-validate.mjs > "$T/validate.log" 2>&1 && echo "   ok   $(tail -n 1 "$T/validate.log")" || { FAILS+=("pack-validate (see $T/validate.log)"); echo "   FAIL pack-validate"; cat "$T/validate.log"; }
echo "-- test-packs"
node scripts/test-packs.mjs > "$T/test-packs.log" 2>&1 && echo "   ok   $(tail -n 1 "$T/test-packs.log")" || { FAILS+=("test-packs (see $T/test-packs.log)"); echo "   FAIL test-packs"; tail -n 20 "$T/test-packs.log"; }
echo "-- the reader, with a mock client (no API call)"
node tools/builder/test-reader.mjs > "$T/test-reader.log" 2>&1 && echo "   ok   $(tail -n 1 "$T/test-reader.log")" || { FAILS+=("test-reader (see $T/test-reader.log)"); echo "   FAIL test-reader"; grep FAIL "$T/test-reader.log" | head; }
echo "-- pack-check on the house pack p-house-sleeve (headless, software WebGL, PACK_FPS=off; a few minutes)"
if PACK_FPS=off PACK_OUT=$T/pack-check bash tools/packs/pack-check.sh game/content/packs/p-house-sleeve.json > "$T/pack-check.log" 2>&1; then
  echo "   ok   pack-check ALL OK (pictures: $T/pack-check/p-house-sleeve-contact-sheet.jpg)"
else FAILS+=("pack-check (see $T/pack-check.log)"); echo "   FAIL pack-check"; grep -E 'FAIL|timed out|did not' "$T/pack-check.log" | head -n 20; fi
[ -z "$(git status --porcelain)" ] || echo "   (note: the checkout has local changes: $(git status --porcelain | head -n 3 | tr '\n' ' '))"

if [ ${#FAILS[@]} -eq 0 ]; then
  printf '\nALL OK\nThe builder is ready. Next: put a job spec in %s/inbox (vexvoid-read makes one from a brief), then run: vexvoid-job\n' "$B"
  exit 0
fi
printf '\nSELF-TEST FAILED (%s):\n' "${#FAILS[@]}"; printf '  %s\n' "${FAILS[@]}"; exit 1
