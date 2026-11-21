# The X autopilot (@v3xvoid)

RB, 21 Nov 2026: "give the vexvoid-builder the job of making new tweets too, so all I have to do is keep its API key topped up and the mandala computer going".

The builder VM posts to @v3xvoid twice a day, at **12:00 and 18:00 London time**. Each post has one picture.

- **First it uses up the hand-written queue from the Mac** (x-03 to x-10, then x-L2). Those posts are already approved, so they don't call Claude.
- **After that, Claude writes each post.** It's one call to Claude Sonnet 5.5, with the brand voice and rules, the release titles, the picture list and the last 30 posts.
- **The code checks every post before it goes out.** The prompt asks for the rules, but only the code decides. If Claude's post fails a check, Claude rewrites it, up to 3 times. If all 3 fail, that slot is skipped.

Routine posts no longer wait for RB's word. Anything else still needs it: new kinds of link, replies, DMs, paid promotion, or anything about money or tokens.

## What it checks (code: `rules.mjs`)

- **No cashtag** (a `$` followed by a letter), no money amounts, no prices.
- **At most 280 characters**, counted the way X counts them (a link counts as 23).
- **These words never go out**, in the post or the picture's alt text: NPG, Ninja Punk, Ltd, limited company, corporation, invest, token, price, profit, returns, dividend, crypto, bitcoin, BSV, airdrop, free money, giveaway, face, coming soon.
- **Links only to these pages**, at most one per post: `https://www.vexvoid.com/` game, music, album, store or feed, and the three YouTube teasers (`youtu.be/xUGDRq5l4FQ`, `RanrtZji4QU`, `NJdCFoTs2e0`). Bare web addresses like "vexvoid.com" are not allowed.
- **At most 1 link post in any 7 posts.** A link post costs about 20¢ on X; a plain one about 1.5¢.
- **No @mentions** and at most 2 hashtags.
- **Not a near-copy of any of the last 30 posts.**
- **The picture must be on the allowlist** (`images.json`), and its file must match its sha256. Claude's posts can't reuse a picture from the last 4 posts.
- **Never twice in one slot, and never more than 2 posts a day.**

## The pictures (`images.json`): 25

These are faceless record art, all in black and white. I looked at each one by eye on 21 Nov 2026.

- **VexVoid_Jam (13):** jam-02, 04, 06, 08, 09, 12, 13, 14, 15, 19, 20, 21, 22. jam-04, 19 and 22 show a hooded figure from behind or far away, with no face visible.
- **VexVoid_Landscape (12):** download, download-2, -4, -5, -6, -8, -10, -12, -13, -15, -17, -18.
- **Banned, because they show a face, a masked face or a figure facing the camera:** jam-01, 03, 05, 10, 11, 16, 17, 18.
  - jam-05 shows a hooded face in profile. Queue post **x-09 used jam-05, so it now uses jam-13**, which is the picture its alt text already described ("VEX in cracked white letters").
- **Also left out:**
  - jam-07: a painted face in the wall piece, and a figure in the train window.
  - download-1: it looks like a coin.
  - download-3, -7, -9, -11 and -16: the letters are garbled or misspelt.
  - download-14: it shows "V3X", the token's name.
- **No in-game graffiti** (the house rule: marketing uses record art only).
- **"Twins":** jam-02/12, 06/14 and 08/21 are near-identical takes. Each pair counts as one picture for the no-repeat rule.

## How it is locked down, and why

The builder user `user` runs Claude Code on customers' briefs. A brief is untrusted text, so a session might be talked into doing something it shouldn't. The X keys must stay out of that session's reach, and so must the code that uses them.

| what | where | who can do what |
|---|---|---|
| the keys | `/home/vexvoid-x/.config/vexvoid-x/env` | only `vexvoid-x` can read them (folder mode 700, file mode 600). `user` can't read them or even list the folder |
| the code, the Anthropic SDK, the pictures | `/opt/vexvoid-x` | owned by root, read-only for everyone else. `user` can't change what `vexvoid-x` runs |
| the schedule | the systemd timer `vexvoid-x.timer` (or `/etc/cron.d/vexvoid-x`) | root's files; the job runs as `vexvoid-x` |
| the log, the queue | `/home/vexvoid-x` (mode 755) | anyone can read them (no secrets are ever written); only `vexvoid-x` can write |

- **A separate Linux user, `vexvoid-x`.** It has no login shell and no sudo. The keys live in its own home, where `user` can't read them.
- **Root-owned code.** If the code lived in `user`'s repo, a hijacked builder session could edit it, and the next run would hand the keys to that edit. So `setup.sh` fetches the branch from GitHub and runs `git archive` on that exact commit. It never copies the working tree, because a session can write to the working tree. Root unpacks the archive, and `install.sh` copies it into `/opt/vexvoid-x`. Claude is called through the same Anthropic SDK the builder pins (1.6.0). It isn't copied from `user`'s `node_modules`: root downloads it from npm, and each tarball is checked against the integrity in `tools/builder/pnpm-lock.yaml`. Each picture is checked against its sha256. The job runs on the system Node, `/usr/bin/node`, and the installer checks that it's root-owned.
- **`setup.sh` ends with `sudo -k`.** That clears sudo's remembered password, so nothing started later from the same terminal can borrow it.
- **What this does not cover:**
  - Anyone who has `user`'s sudo password is root. So never type it into a shell you think a session has tampered with. Sessions can't write to your shell files anyway: the builder agent has no shell of its own (see `../builder/README.md`).
  - The Anthropic key is the builder's own key (Keychain item `VEXVOID_BUILDER_ANTHROPIC_KEY`), so `user` already has it. The separation protects the **X keys**. If you want the autopilot's Claude spend shown separately, make it its own key in the Anthropic console and put that one in the line below instead.

## Set it up (in this order)

**On the Mac**

1. Stop the Mac's own queue job, so the two don't both post:
   ```bash
   launchctl bootout gui/$(id -u)/com.vexvoid.xqueue; cat /Volumes/2026/Projects/VexVoid/business/x-queue/posted.txt
   ```
   The list shows what the Mac has already posted. Step 5 needs it.
2. Put the keys on the clipboard as one line. Nothing is shown, and they never touch a file:
   ```bash
   bash -c 'set -e; o=; add(){ local v; v=$(security find-generic-password ${3:+-a "$3"} -s "$2" -w 2>/dev/null) && [ -n "$v" ] || { echo "not in the Keychain: $2" >&2; exit 1; }; printf -v o "%s%s=%s\n" "$o" "$1" "$v"; }; for s in VEXVOID_X_API_KEY VEXVOID_X_API_SECRET VEXVOID_X_ACCESS_TOKEN VEXVOID_X_ACCESS_SECRET; do add $s $s V3xv0id; done; add ANTHROPIC_API_KEY VEXVOID_BUILDER_ANTHROPIC_KEY; printf "%s" "$o" | base64 | tr -d "\n" | pbcopy; echo "On the clipboard (not shown): the 5 keys as one line. Paste it into vexvoid-x-keys on the VM."'
   ```
   It reads the four X keys (Keychain account `V3xv0id`) and `VEXVOID_BUILDER_ANTHROPIC_KEY`. If any one is missing, it stops and copies nothing.

**On the VM**

3. Run the builder's usual setup one-liner (`../builder/README.md` §1). It installs the autopilot too. It asks for the sudo password and ends `ALL OK`.
4. Install the keys:
   ```bash
   vexvoid-x-keys
   ```
   It asks for the sudo password first. Then paste the line with **Ctrl+Shift+V** and press Enter. Nothing shows. It prints only the five key names and their lengths.
5. Any queued posts the Mac sent after x-02 (from step 1's list) must not go out again. Mark them done, for example:
   ```bash
   sudo vexvoid-x seed-done x-03 x-04
   ```
6. Make one test post without sending it:
   ```bash
   sudo vexvoid-x dry
   ```
   This is one Claude call, about 1¢. It shows the post it wrote and the result of the checks. Nothing is posted.
7. Check it's running:
   ```bash
   vexvoid-x status
   ```
   It shows the next slot. The first post at that slot is the next queued post.

## Every day

| | |
|---|---|
| what it did, what's next | `vexvoid-x status` (no password). `sudo vexvoid-x status` also checks that the keys are there |
| **stop it** | `sudo touch /home/vexvoid-x/STOP`. Each slot then logs "STOP file present" and posts nothing |
| start again | `sudo rm /home/vexvoid-x/STOP` |
| the log, plain | `tail -n 20 /home/vexvoid-x/xposter.log`. One line per slot: what was posted (with its link), skipped, stopped or failed, and the estimated cost |
| the log, full | `/home/vexvoid-x/posts.jsonl`. One JSON line per event: time, slot, text, picture, tweet id and link, Claude tokens and estimated cost, estimated X cost |
| queue a post you wrote | write `{"text": "...", "image": "jam-09", "alt": "..."}` to a file, then `vexvoid-x add post.json`. It's checked first, and it posts before any Claude-written post |
| check a post without queueing it | `vexvoid-x check post.json` |
| the tests | `vexvoid-x test`. Uses a fake Claude and a fake X, so nothing is sent |

**If something goes wrong**

- **"out of credits"**: top up X at console.x.com.
- **Claude errors**: top up Anthropic credit.
- **The machine was asleep at 12:00 or 18:00**: it posts when it wakes, as long as that's within 3 hours. Otherwise the slot is skipped. It never makes up a skipped slot later.
- **"unknown"**: X didn't answer, so the post may or may not have gone out. Look at the account. It never retries that slot.

## What it costs (estimate)

Two slots a day is about **60 posts a month**.

- **X: about $0.90 to $2.50 a month.** That's 60 posts at about 1.5¢, plus up to about 8 link posts at about 20¢. These are the owner's figures; console.x.com has the live rates.
- **Claude: about $0.75 a month.** Each written post is about 3,000 tokens in and 300 out on Sonnet 5.5 ($2 / $10 per million tokens), which is about 1¢, plus the odd rewrite. The 9 queued posts cost nothing.
- **Total: about $2 to $3.50 a month.** `vexvoid-x status` shows the month so far.

## Files

| file | what |
|---|---|
| `xposter.mjs` | the runner: `tick` (the timer's entry), `dry`, `status`, `check`, `add`, `seed-done` |
| `rules.mjs` | the checks, the slots (London time, summer time handled), the prompt |
| `x-api.mjs` | X API v2: OAuth 1.0a signing, picture upload, alt text, post. Ported from `vexvoid-xpost/scripts/x/post.mjs`, Node built-ins only |
| `images.json` | the picture allowlist (sha256 and a description of each) |
| `seed/` | the Mac queue (x-03 to x-10, x-L2), plus `history.jsonl`: x-L1, x-01 and x-02, already posted by the Mac, kept so the repeat and link checks know about them |
| `install.sh` | the root-side install (run by `setup.sh`) and `--check` (run by `setup.sh --self-test`) |
| `test-xposter.mjs` | 127 checks against a fake Anthropic API and a fake X API on 127.0.0.1 (the real SDK, the real OAuth signing) |

**Why a timer every 15 minutes instead of cron at 12:00 and 18:00:**

- The slots are worked out in code, in Europe/London time with summer time handled. The 3-hour catch-up after sleep and the once-per-slot rule are worked out there too, and the tests cover them.
- Many crons ignore `CRON_TZ`.
- A run with nothing due exits straight away, with no network call and no log line.
- It uses systemd where it's there, and `/etc/cron.d` where it isn't.
