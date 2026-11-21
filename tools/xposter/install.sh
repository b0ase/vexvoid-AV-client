#!/usr/bin/env bash
# INSTALL THE X AUTOPILOT on the builder VM (as root; setup.sh runs it with sudo). Idempotent.
#
#   sudo bash install.sh STAGE     STAGE holds tools/xposter, tools/builder/pnpm-lock.yaml and vx/catalogue.json, taken by
#                                  setup.sh from the git commit it just fetched (not from the working tree, which a builder
#                                  session could have changed)
#   bash install.sh --check        read-only checks of an existing install, as any user (setup.sh --self-test)
#
# What it makes (why: README "The X autopilot"):
#   user vexvoid-x (system, no login shell, home /home/vexvoid-x mode 755: the log is readable, the keys are not)
#   /home/vexvoid-x/.config/vexvoid-x/env   the keys (700 dir, 600 file, owner vexvoid-x): written by vexvoid-x-keys
#   /home/vexvoid-x/{posts.jsonl,xposter.log,queue/}   the log and the hand-approved queue (seeded once, on first install)
#   /opt/vexvoid-x          the code, the Anthropic SDK (npm tarballs, integrity pinned) and the pictures (sha256 pinned),
#                           all owned by root and read-only for everyone else: the builder user can't change what runs
#   /usr/local/bin/vexvoid-x, vexvoid-x-keys   the owner's commands
#   a systemd timer (or, without systemd, /etc/cron.d/vexvoid-x) running `xposter.mjs tick` every 15 minutes as vexvoid-x
set -euo pipefail
umask 022
U=vexvoid-x; HX=/home/vexvoid-x; OPT=/opt/vexvoid-x; BIN=/usr/local/bin; NODE=/usr/bin/node; NODE_MIN=22
ENVF=$HX/.config/vexvoid-x/env
say() { printf '   %s\n' "$*"; }
die() { printf '\nX AUTOPILOT INSTALL FAILED: %s\n' "$*"; exit 1; }

# the Anthropic SDK and the packages it needs, pinned (the same integrity as tools/builder/pnpm-lock.yaml)
SDK_PINS='@anthropic-ai/sdk 1.6.0 sha512-XqiO/46n8S6So8jQ/6/uNCkHntyW6QHHs1gZ+hlwTx1fWDr929g4VmwIXfdMVk7SuBWNdQvAlwyi1G3t6SEIuQ==
@opentelemetry/api 1.10.0 sha512-lMkyes8iHrG+mk6WH7X70MdCLI2RS0FwNBY1PyQ8UemaijE2m5mv5A0Niy3HtbYTFrgkUEQjFMXmSAk2hQDuPQ==
json-schema-to-ts 3.1.1 sha512-+DWg8jCJG2TEnpy7kOm/7/AxaYoaRbjVB4LFZLySZlWn8exGs3A4OLJR966cVvU26N7X9TWxl+Jsw7dzAqKT6g==
@babel/runtime 7.29.14 sha512-Y5tqevQaUAZhhj82BpYMNC1ssvLQTVAfwKdm8iy8qwmhvC2/CpcAu8OC+QEtjM7pMk7knx83u1Qj8gzkicyelw==
ts-algebra 2.0.0 sha512-FPAhNPFMrkwz76P7cdjdmiShwMynZYN6SgOujD1urY4oNm80Ou9oMdmbR45LotcKOXoy7wSmHkRFE6Mxbrhefw==
standardwebhooks 1.3.0 sha512-5W9skHjqAm2dlA9wWvglTP+oX47JX4lFXVk1aJV7+TG1snvTR4QXaVgPscEzvOw9GRreeavMwbqEeL+MGhZHCg==
@stablelib/base64 1.0.1 sha512-1bnPQqSxSuc3Ii6MhBysoWCg58j97aUjuCSZrGSmDxNqtytIi0k8utUenAwTZN4V5mXXYGsVUI9zeBqy+jBOSQ==
fast-sha256 1.3.0 sha512-n11RGP/lrWEFI/bWdygLxhI+pVeo1ZYIVwvvPkW7azl/rOy+F3HYRZ2K5zeE9mmkhQppyv9sQFx0JM9UabnpPQ=='
CODE_FILES='xposter.mjs rules.mjs x-api.mjs test-xposter.mjs images.json install.sh'

# ---------------------------------------------------------------- --check: read-only, any user
if [ "${1:-}" = --check ]; then
  F=0; c() { if eval "$1"; then say "ok   $2"; else say "FAIL $2"; F=$((F + 1)); fi; }
  me=$(id -un)
  c 'id -u $U >/dev/null 2>&1' "user $U exists"
  c '[ -d $OPT ] && [ -z "$(find $OPT ! -user root -print -quit)" ]' "$OPT is all owned by root"
  c '[ -z "$(find $OPT -perm /022 -print -quit)" ]' "nothing in $OPT is writable by group or others"
  c '[ "$(stat -c %U $BIN/vexvoid-x $BIN/vexvoid-x-keys | sort -u)" = root ]' "the commands are owned by root"
  c '[ "$(stat -c %U "$(readlink -f $NODE)")" = root ] && [ -z "$(find "$(readlink -f $NODE)" -perm /022)" ]' "$NODE is root-owned and not writable by others"
  if [ "$me" != root ] && [ "$me" != $U ]; then
    c '[ ! -w $OPT ] && [ ! -w $OPT/xposter.mjs ] && [ ! -w $HX ] && [ ! -w $HX/queue ]' "$me can't change the code, the home or the queue"
    c '! cat $ENVF >/dev/null 2>&1 && ! ls $HX/.config/vexvoid-x >/dev/null 2>&1' "$me can't read the keys"
  fi
  if [ -d /run/systemd/system ]; then c 'systemctl is-enabled --quiet vexvoid-x.timer && systemctl is-active --quiet vexvoid-x.timer' "the timer is enabled and active"
  else c '[ -f /etc/cron.d/vexvoid-x ] && [ "$(stat -c %U /etc/cron.d/vexvoid-x)" = root ]' "the cron entry is in place"; fi
  c '$NODE $OPT/xposter.mjs status > /tmp/vexvoid-x-status.$$ 2>&1 && grep -q "pictures:  25 of 25" /tmp/vexvoid-x-status.$$' "all 25 pictures on disk and checked"
  c '$NODE $OPT/test-xposter.mjs > /tmp/vexvoid-x-test.$$ 2>&1' "the installed copy passes its tests (fake Claude, fake X; $(tail -n 1 /tmp/vexvoid-x-test.$$ 2>/dev/null || true))"
  grep -E '^  (state|today|next slot|queue|keys|last problem):' /tmp/vexvoid-x-status.$$ 2>/dev/null | sed 's/^/   /' || true
  rm -f /tmp/vexvoid-x-status.$$ /tmp/vexvoid-x-test.$$
  [ $F = 0 ] && exit 0 || exit 1
fi

# ---------------------------------------------------------------- install (root)
[ "$(id -u)" = 0 ] || die "run as root (setup.sh does: sudo bash install.sh STAGE)"
[ "$(uname -s)" = Linux ] || die "Linux only"
ST=${1:?usage: install.sh STAGE | --check}; SRC=$ST/tools/xposter
for f in $CODE_FILES; do [ -f "$SRC/$f" ] || die "the stage has no tools/xposter/$f"; done
[ -f "$ST/vx/catalogue.json" ] || die "the stage has no vx/catalogue.json"

# Node: the system one, owned by root and not writable by others (the builder user's own Node is not trusted here)
[ -x "$NODE" ] || die "no $NODE (install Node $NODE_MIN+ system-wide, e.g. from NodeSource)"
NR=$(readlink -f "$NODE")
[ "$(stat -c %u "$NR")" = 0 ] && [ -z "$(find "$NR" -perm /022)" ] || die "$NODE ($NR) must be owned by root and not writable by others"
[ "$("$NODE" -p 'process.versions.node.split(".")[0]')" -ge $NODE_MIN ] || die "$NODE is $("$NODE" -v); need $NODE_MIN or later"
say "node $("$NODE" -v) at $NR"

# the user and its home
if ! id -u $U >/dev/null 2>&1; then
  useradd --system --user-group --create-home --home-dir $HX --shell /usr/sbin/nologin --comment "VexVoid X autopilot" $U
  say "created user $U"
else say "user $U: already there"; fi
install -d -o $U -g $U -m 755 $HX $HX/queue $HX/queue/done $HX/queue/held
install -d -o $U -g $U -m 700 $HX/.config $HX/.config/vexvoid-x
if [ -f $ENVF ]; then chown $U:$U $ENVF; chmod 600 $ENVF; say "keys: $ENVF is there (600, $U)"; else say "keys: not yet (run vexvoid-x-keys)"; fi

# the code, in a fresh tree, swapped in at the end
NEW=$OPT.new; rm -rf "$NEW"; mkdir -p "$NEW/node_modules" "$NEW/images"
for f in $CODE_FILES; do cp "$SRC/$f" "$NEW/$f"; done
cp -r "$SRC/seed" "$NEW/seed"; cp "$ST/vx/catalogue.json" "$NEW/catalogue.json"
echo "${VEXVOID_X_REV:-unknown}" > "$NEW/VERSION"
sri() { "$NODE" -e 'console.log("sha512-" + require("crypto").createHash("sha512").update(require("fs").readFileSync(process.argv[1])).digest("base64"))' "$1"; }
TMP=$(mktemp -d); trap 'rm -rf "$TMP" "$NEW"' EXIT
while read -r name v want; do
  [ -z "$name" ] && continue
  if [ -f "$ST/tools/builder/pnpm-lock.yaml" ]; then grep -qF "$want" "$ST/tools/builder/pnpm-lock.yaml" || die "$name@$v: the pin here differs from tools/builder/pnpm-lock.yaml"; fi
  d=$NEW/node_modules/$name
  if [ -f "$OPT/node_modules/$name/.integrity" ] && [ "$(cat "$OPT/node_modules/$name/.integrity")" = "$want" ]; then mkdir -p "$(dirname "$d")"; cp -r "$OPT/node_modules/$name" "$d"; continue; fi
  curl -fsSL "https://registry.npmjs.org/$name/-/${name##*/}-$v.tgz" -o "$TMP/p.tgz" || die "$name@$v: download failed"
  [ "$(sri "$TMP/p.tgz")" = "$want" ] || die "$name@$v: the download does not match the pinned integrity"
  mkdir -p "$d"; tar -xzf "$TMP/p.tgz" -C "$d" --strip-components=1 --no-same-owner; echo "$want" > "$d/.integrity"
done <<< "$SDK_PINS"
say "Anthropic SDK 1.6.0 + 7 packages (npm integrity checked)"

# the pictures: kept if already right, else fetched from the site; each checked against its sha256 in images.json
BASE=$("$NODE" -p 'require(process.argv[1]).base' "$NEW/images.json")
n=0; bad=0
while read -r set file sha; do
  mkdir -p "$NEW/images/$set"; dst=$NEW/images/$set/$file
  if [ -f "$OPT/images/$set/$file" ] && [ "$(sha256sum < "$OPT/images/$set/$file" | cut -c1-64)" = "$sha" ]; then cp "$OPT/images/$set/$file" "$dst"; n=$((n + 1)); continue; fi
  if curl -fsSL "$BASE/$set/$file" -o "$TMP/img" && [ "$(sha256sum < "$TMP/img" | cut -c1-64)" = "$sha" ]; then mv "$TMP/img" "$dst"; n=$((n + 1))
  else bad=$((bad + 1)); say "picture $set/$file: download failed or does not match images.json (left out)"; fi
done < <("$NODE" -e 'for (const i of require(process.argv[1]).images) console.log(i.set, i.file, i.sha256)' "$NEW/images.json")
[ $n -gt 0 ] || die "no pictures could be fetched from $BASE"
if [ $bad = 0 ]; then say "pictures: $n on disk (sha256 checked)"; else say "pictures: $n on disk, $bad left out"; fi

chown -R root:root "$NEW"; chmod -R u=rwX,go=rX "$NEW"
rm -rf "$OPT.old"; [ -d "$OPT" ] && mv "$OPT" "$OPT.old"; mv "$NEW" "$OPT"; rm -rf "$OPT.old"; trap 'rm -rf "$TMP"' EXIT
say "code in $OPT ($(cat $OPT/VERSION))"

# the first install only: the hand-written queue from the Mac, and the posts the Mac already sent (for the repeat checks)
if [ ! -f $HX/.seeded ]; then
  for f in $OPT/seed/[0-9]*.json; do install -o $U -g $U -m 644 "$f" "$HX/queue/$(basename "$f")"; done
  cat $OPT/seed/history.jsonl >> $HX/posts.jsonl; chown $U:$U $HX/posts.jsonl; chmod 644 $HX/posts.jsonl
  touch $HX/.seeded; chown $U:$U $HX/.seeded
  say "queue seeded: $(ls $HX/queue/*.json | wc -l) hand-written posts; history: the 3 posts the Mac sent"
fi

# ---------------------------------------------------------------- the commands
cat > $BIN/vexvoid-x <<'EOF'
#!/bin/sh
# The VexVoid X autopilot (@v3xvoid). Code: /opt/vexvoid-x (README: tools/xposter/README.md in the repo).
#   vexvoid-x status            what it did and what's next (no password; `sudo vexvoid-x status` also checks the keys)
#   vexvoid-x dry               write one post with Claude and check it; nothing is posted (about 1 cent)
#   vexvoid-x check FILE        run the house checks on a post file {"text", "image", "alt"}
#   vexvoid-x add FILE          check a hand-written post and queue it (it goes before any written one)
#   vexvoid-x seed-done ID...   mark queued posts as already posted elsewhere (e.g. x-03 x-04)
#   vexvoid-x test              the tests (fake Claude, fake X; nothing is sent)
# Stop it:  sudo touch /home/vexvoid-x/STOP      Start again:  sudo rm /home/vexvoid-x/STOP
N=/usr/bin/node; X=/opt/vexvoid-x/xposter.mjs
cmd=${1:-status}
as_x() { if [ "$(id -un)" = vexvoid-x ]; then exec "$N" "$X" "$@"; else exec sudo -u vexvoid-x -- "$N" "$X" "$@"; fi; }
case "$cmd" in
  status) if [ "$(id -u)" = 0 ]; then as_x status; else exec "$N" "$X" status; fi ;;
  check)  exec "$N" "$X" "$@" ;;
  test)   exec "$N" /opt/vexvoid-x/test-xposter.mjs ;;
  add)    [ -r "${2:-}" ] || { echo "usage: vexvoid-x add FILE.json"; exit 2; }
          if [ "$(id -un)" = vexvoid-x ]; then exec "$N" "$X" add "$2"; else sudo -u vexvoid-x -- "$N" "$X" add - < "$2"; fi ;;
  dry|seed-done|tick) as_x "$@" ;;
  *) sed -n '2,10p' "$0" | sed 's/^# \{0,1\}//'; exit 2 ;;
esac
EOF
cat > $BIN/vexvoid-x-keys <<'EOF'
#!/bin/bash
# Install the X autopilot's keys. Paste ONE line: the base64 of the key block, made on the Mac by the one-liner in
# tools/xposter/README.md (it copies the line to the Mac clipboard without showing it). Nothing pasted is shown, kept
# in the shell history, put on a command line or written anywhere but /home/vexvoid-x/.config/vexvoid-x/env (600).
set -euo pipefail
F=/home/vexvoid-x/.config/vexvoid-x/env
NEED="VEXVOID_X_API_KEY VEXVOID_X_API_SECRET VEXVOID_X_ACCESS_TOKEN VEXVOID_X_ACCESS_SECRET ANTHROPIC_API_KEY"
id -u vexvoid-x >/dev/null 2>&1 || { echo "no vexvoid-x user: run the builder setup first"; exit 1; }
[ "$(id -u)" = 0 ] || [ "$(id -un)" = vexvoid-x ] || sudo -v   # the password first, so the paste goes to the right prompt
printf 'Paste the key line (Ctrl+Shift+V), then press Enter. Nothing will show: '
IFS= read -rs line; echo
blk=$(printf '%s' "$line" | tr -d ' \r\n\t' | base64 -d 2>/dev/null) || { echo "That line is not base64. Nothing was written."; exit 1; }
unset line
# every line must be NAME=value for one of the five names, each value one word; never print a value
check() {
  local seen=" " l k v
  while IFS= read -r l; do
    [ -z "$l" ] && continue
    k=${l%%=*}; v=${l#*=}
    case " $NEED " in *" $k "*) ;; *) echo "The block has a line that is not one of the five keys. Nothing was written."; return 1 ;; esac
    [ "$l" != "$k" ] && [ -n "$v" ] && [[ "$v" != *[[:space:]\"\']* ]] || { echo "$k is empty or has spaces or quotes. Nothing was written."; return 1; }
    seen="$seen$k "
  done
  for k in $NEED; do case "$seen" in *" $k "*) ;; *) echo "$k is missing. Nothing was written."; return 1 ;; esac; done
}
printf '%s\n' "$blk" | check
if [ "$(id -un)" = vexvoid-x ]; then w() { sh -c 'umask 077; cat > "$1.new" && mv -f "$1.new" "$1"' sh "$F"; }
else w() { sudo -u vexvoid-x -- sh -c 'umask 077; cat > "$1.new" && mv -f "$1.new" "$1"' sh "$F"; }; fi
printf '%s\n' "$blk" | w
printf '%s\n' "$blk" | while IFS= read -r l; do [ -n "$l" ] && printf '   %-24s %s characters\n' "${l%%=*}" "$(printf '%s' "${l#*=}" | wc -c | tr -d ' ')"; done
unset blk
echo "Written to $F (mode 600, owner vexvoid-x). Next: sudo vexvoid-x dry   (one Claude call, about 1 cent; nothing is posted)"
EOF
chmod 755 $BIN/vexvoid-x $BIN/vexvoid-x-keys; chown root:root $BIN/vexvoid-x $BIN/vexvoid-x-keys
say "commands: vexvoid-x, vexvoid-x-keys"

# ---------------------------------------------------------------- the schedule: a tick every 15 minutes (the slots are decided in code)
if [ -d /run/systemd/system ]; then
  cat > /etc/systemd/system/vexvoid-x.service <<EOF
[Unit]
Description=VexVoid X autopilot tick (posts only when a 12:00 or 18:00 London slot is due)
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
User=$U
Group=$U
ExecStart=$NODE $OPT/xposter.mjs tick
NoNewPrivileges=yes
TimeoutStartSec=15min
EOF
  cat > /etc/systemd/system/vexvoid-x.timer <<'EOF'
[Unit]
Description=VexVoid X autopilot: a tick every 15 minutes

[Timer]
OnCalendar=*:0/15
Persistent=true
AccuracySec=1min

[Install]
WantedBy=timers.target
EOF
  rm -f /etc/cron.d/vexvoid-x
  systemctl daemon-reload; systemctl enable --now vexvoid-x.timer >/dev/null 2>&1
  say "schedule: systemd timer vexvoid-x.timer (every 15 min; next $(systemctl show vexvoid-x.timer -p NextElapseUSecRealtime --value 2>/dev/null || echo '?'))"
else
  command -v cron >/dev/null 2>&1 || { apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get install -y -qq cron >/dev/null; }
  cat > /etc/cron.d/vexvoid-x <<EOF
# VexVoid X autopilot: a tick every 15 minutes as $U (it posts only when a 12:00 or 18:00 London slot is due)
SHELL=/bin/sh
*/15 * * * * $U $NODE $OPT/xposter.mjs tick >/dev/null 2>&1
@reboot $U sleep 90 && $NODE $OPT/xposter.mjs tick >/dev/null 2>&1
EOF
  chmod 644 /etc/cron.d/vexvoid-x
  (service cron start || /usr/sbin/cron) >/dev/null 2>&1 || true
  say "schedule: /etc/cron.d/vexvoid-x (no systemd here; every 15 min)$(pgrep -x cron >/dev/null || echo ' WARNING: cron is not running')"
fi
echo "   X autopilot installed. Keys: vexvoid-x-keys. Check: vexvoid-x status"
