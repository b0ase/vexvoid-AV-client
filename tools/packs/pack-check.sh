#!/usr/bin/env bash
# PACK-CHECK, the repo copy: content packs (Pay to Develop) checked end to end, headless and muted, on this checkout.
# Runs on the Mandala builder VM (Linux, chrome-headless-shell, software WebGL) and on a Mac. For each pack (default:
# every pack in game/content/packs):
#   1. static    scripts/pack-validate.mjs (schema, ids, places, walls, sketches, bounds, text) and the index
#   2. play      tools/packs/pack-check.mjs: the web game bundle in headless Chromium, the pack checked against the
#                running game and loaded without a rebuild, every mission played to the end, messages, credit, reload,
#                fps (PACK_FPS=off skips it; off by default under software WebGL)
#   3. pictures  street + wide views at its places, every objective, the phone card and map, the overhead map, a clip,
#                and a contact sheet of them all: $PACK_OUT/<pack id>/ and $PACK_OUT/<pack id>-contact-sheet.jpg
# ALL OK (exit 0), or the failures listed (exit 1).
#
#   bash tools/packs/pack-check.sh [PACK.json ...]
#   PACKS_REPO=<checkout>  the checkout to check (default: the one this script is in)
#   PACK_OUT=<dir>   where the pictures and logs go (default: $TMPDIR/vexvoid-pack-check; never inside the repo)
#   PACK_LOG=<file>  one line appended per run (date, packs, ALL OK or FAILED): the builder counts failed checks here
#   PACK_FPS=off     skip the fps gate; PACK_GL=swiftshader|gpu; CHROME=<browser>; PACK_VIEW=640x400
#
# The devkit copy (vexvoid-devkit/pack-check.sh) drives the hidden desktop client instead and adds the MCP pack-tool
# round trip (pack-mcp.mjs); both print the same ok / FAIL lines and end ALL OK.
set -u
R=${PACKS_REPO:-$(cd "$(dirname "$0")/../.." && pwd)}; export PACKS_REPO=$R
T=$(cd "$(dirname "$0")" && pwd)   # this script's own folder (the play-check beside it may be a newer copy than the checkout's)
P=${PACK_OUT:-${TMPDIR:-/tmp}/vexvoid-pack-check}; P=${P%/}; mkdir -p "$P"
cd "$R"
FAILS=(); fail() { FAILS+=("$1"); echo "FAIL $1"; }
PACKS=("$@"); [ ${#PACKS[@]} -eq 0 ] && PACKS=("$R"/game/content/packs/*.json)
[ -e "${PACKS[0]}" ] || { echo "no packs in $R/game/content/packs"; exit 1; }
# the contact sheet's tools: ImageMagick 7 (magick montage) or 6 (montage); a font that is there
MONTAGE=(); command -v magick >/dev/null 2>&1 && MONTAGE=(magick montage) || { command -v montage >/dev/null 2>&1 && MONTAGE=(montage); }
F=""; for f in /usr/share/fonts/truetype/dejavu/DejaVuSans.ttf /usr/share/fonts/dejavu/DejaVuSans.ttf /System/Library/Fonts/Supplemental/Arial.ttf /Library/Fonts/Arial.ttf; do [ -f "$f" ] && { F=$f; break; }; done

echo "== static: pack-validate"
node scripts/pack-validate.mjs "${PACKS[@]}" > "$P/validate.log" 2>&1 || fail "pack-validate (see $P/validate.log)"
sed 's/^/   /' "$P/validate.log"

IDS=()
for f in "${PACKS[@]}"; do
  id=$(node -e 'try { const p = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")); console.log(/^p-[a-z0-9-]+$/.test(p.id || "") ? p.id : "") } catch { console.log("") }' "$f")
  [ -n "$id" ] || { fail "$(basename "$f"): no pack id (p-...)"; continue; }
  IDS+=("$id")
  O=$P/$id; rm -rf "$O"; mkdir -p "$O"
  echo "== play: $id"
  node "$T/pack-check.mjs" "$f" "$O" > "$O/check.log" 2>&1 || fail "$id: play (see $O/check.log)"
  grep -E '^(ok|FAIL) |^     \(' "$O/check.log" | sed 's/^/   /'
  # the contact sheet: the places (street, wide), each objective where it was played, the phone, the maps, the clip
  L=()
  for p in $(cat "$O/places.txt" 2>/dev/null); do for v in street wide; do [ -f "$O/district-$p-$v.jpg" ] && L+=(-label "$p $v" "$O/district-$p-$v.jpg"); done; done
  for x in $(ls "$O" | grep -E '^[0-9]+-[0-9]+-[a-z]+\.(jpg|png)$' | sort -V); do L+=(-label "${x%.*}" "$O/$x"); done
  for x in $(ls "$O" | grep -E '^[0-9]+-phone-(map|card)\.png$' | sort -V); do L+=(-label "${x%.png}" "$O/$x"); done
  [ -f "$O/map-overhead.png" ] && L+=(-label "overhead map" "$O/map-overhead.png")
  [ -f "$O/clip-frame.jpg" ] && L+=(-label "clip ($id/clip.mp4)" "$O/clip-frame.jpg")
  if [ ${#L[@]} -eq 0 ]; then fail "$id: no pictures"
  elif [ ${#MONTAGE[@]} -eq 0 ]; then fail "$id: no ImageMagick for the contact sheet"
  else
    "${MONTAGE[@]}" "${L[@]}" -tile 4x -geometry 560x350+6+6 -background '#111' -fill '#ddd' ${F:+-font "$F"} -pointsize 15 -title "$id  $(date '+%d %b %Y %H:%M')" "$O/contact-sheet.jpg" \
      && cp "$O/contact-sheet.jpg" "$P/$id-contact-sheet.jpg" && echo "   contact sheet: $P/$id-contact-sheet.jpg" || fail "$id: contact sheet"
  fi
done

if [ ${#FAILS[@]} -eq 0 ]; then VERDICT="ALL OK"; else VERDICT="FAILED ${#FAILS[@]}"; fi
[ -n "${PACK_LOG:-}" ] && echo "$(date -u '+%Y-%m-%dT%H:%M:%SZ') ${IDS[*]:-none} $VERDICT" >> "$PACK_LOG"
if [ ${#FAILS[@]} -eq 0 ]; then echo; echo "ALL OK"; exit 0; fi
echo; echo "${#FAILS[@]} FAILED:"; printf '%s\n' "${FAILS[@]}"; exit 1
