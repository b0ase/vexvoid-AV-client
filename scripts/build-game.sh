#!/bin/bash
# Builds the GAME tab's engine (game/src, TypeScript) into vx/game/vexvoid-game.js (window.VXGAME), with its own copy of
# three.js. No npm install: point THREE_DIR at an unpacked three tarball (package/ inside it) and ESBUILD at an esbuild
# binary, both checked against the npm registry's integrity hashes first (see vx/lib/three.VERSION.txt):
#
#   THREE_DIR=/path/to/three/package ESBUILD=/path/to/esbuild bash scripts/build-game.sh
set -euo pipefail
cd "$(dirname "$0")/.."
: "${THREE_DIR:?set THREE_DIR to an unpacked three@0.182.0 package folder}"
: "${ESBUILD:?set ESBUILD to an esbuild 0.27.x binary}"
tmp=$(mktemp -d)
mkdir -p "$tmp/node_modules"
ln -s "$THREE_DIR" "$tmp/node_modules/three"
NODE_PATH="$tmp/node_modules" "$ESBUILD" game/src/main.ts --bundle --format=iife --global-name=VXGAME --target=chrome120 \
  --minify --legal-comments=eof --outfile=vx/game/vexvoid-game.js --log-level=warning
rm -r "$tmp"
ls -l vx/game/vexvoid-game.js
