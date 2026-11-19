#!/bin/bash
# Packages the web studio for vexvoid.com/studio (Studio 1: mixer, PATTERNS, TITLES, LAYERS, VIDEOS, IMAGES, MUSIC, STORE;
# Studio 2: EDIT with the music editor, EXPORT in the browser, REC)
# from this checkout: the same controls.html / index.html / vx/*.js the app runs, through vx/platform.js. Nothing is
# compiled; the music catalogue loses the releases the owner rejected (chadCN-2, shadCN-1). Writes DEST/VERSION.txt with
# a sha256 over every file (the website serves the folder under /studio/v/<sha>/ and checks it).
#   bash scripts/build-studio-web.sh DEST
set -euo pipefail
cd "$(dirname "$0")/.."
DEST="${1:?usage: build-studio-web.sh DEST}"
REJECTED='chadcn-2 shadcn-1'
rm -rf "$DEST"; mkdir -p "$DEST/vx/lib" "$DEST/vx/fonts"
cp controls.html index.html vexvoid-icon.png "$DEST/"
cp vx/*.js vx/clip-notes.json "$DEST/vx/"
cp vx/lib/p5.min.js vx/lib/p5.LICENSE.txt vx/lib/three.global.js vx/lib/three.LICENSE.txt vx/lib/three.VERSION.txt \
   vx/lib/bwalletx-connect.global.js vx/lib/bwalletx-connect.VERSION.txt \
   vx/lib/webm-muxer.js vx/lib/webm-muxer.LICENSE.txt vx/lib/webm-muxer.VERSION.txt \
   vx/lib/mp4-muxer.js vx/lib/mp4-muxer.LICENSE.txt vx/lib/mp4-muxer.VERSION.txt "$DEST/vx/lib/"
rsync -a --exclude '.DS_Store' vx/fonts/ "$DEST/vx/fonts/"
REJECTED="$REJECTED" node -e '
  const fs = require("fs"), drop = new Set(process.env.REJECTED.split(" "));
  const c = JSON.parse(fs.readFileSync("vx/catalogue.json", "utf8"));
  const before = c.tracks.length;
  c.tracks = c.tracks.filter(t => !drop.has(t.release));
  fs.writeFileSync(process.argv[1] + "/vx/catalogue.json", JSON.stringify(c));
  console.log("catalogue: " + c.tracks.length + " tracks (" + (before - c.tracks.length) + " rejected left out), " + c.clips.length + " clips, " + c.images.length + " images");
' "$DEST"
COMMIT="$(git rev-parse --short=12 HEAD)$(git diff --quiet HEAD -- controls.html index.html vx || echo '+dirty')"
node -e '
  const fs = require("fs"), path = require("path"), crypto = require("crypto"), root = process.argv[1];
  const files = []; (function walk(d) { for (const f of fs.readdirSync(d).sort()) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : files.push(p); } })(root);
  const lines = files.filter(f => path.basename(f) !== "VERSION.txt").map(f => crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex") + "  " + path.relative(root, f));
  const sha = crypto.createHash("sha256").update(lines.join("\n") + "\n").digest("hex");
  const bytes = files.reduce((n, f) => n + fs.statSync(f).size, 0);
  fs.writeFileSync(path.join(root, "VERSION.txt"), [
    "V3XV0ID web studio (Studio 1 + 2), packaged by scripts/build-studio-web.sh from the V3XV0ID AV Client",
    "client " + process.argv[2], "built " + new Date().toISOString(), "files " + lines.length, "bytes " + bytes,
    "sha256 " + sha, "", "# sha256 is over the lines below (sha256  path), one per file, sorted by path", ...lines, ""].join("\n"));
  console.log("web studio: " + lines.length + " files, " + (bytes / 1048576).toFixed(1) + " MB, sha256 " + sha.slice(0, 12));
' "$DEST" "$COMMIT"
