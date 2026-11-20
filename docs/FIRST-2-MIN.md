# The first two minutes (vexvoid.com/game, a stranger from an X post)

Branch `feat/vx-first2min` (off `feat/vx-rebuild` 6eca93c). Worktree `vexvoid-AV-client-first2min`. Never pushed.

## How it was played
A brand-new web player, scripted, headless and muted: the client's game bundle in a page laid out like
vexvoid.com/game (the picture, REC top right, the HUD line along the bottom), every `/api/` call answering 503 (a stranger
with no account store), a fresh browser profile every run, Chrome headless on the Metal GPU at 1440x900, 60 fps.
Devkit: `vexvoid-devkit/f2m-web/` (`serve.mjs`, `f2m-run.mjs`, `f2m-lib.mjs`; `before-game/` is the bundle as it was).

- **idle**: hands off for 120 s (what does the game say on its own?).
- **play**: a newcomer who does what the screen says the moment it says it: reads a text when one comes in, presses F when
  told, sprays a three-stroke tag with the mouse, follows the objective. The route is either the line the game shows
  (after) or one I gave it from the map (before), so the times are a best case. A real stranger is slower.
- **marker** (before only): the same newcomer following the mini-map's marker in a straight line, the only guidance the
  game gave.

Every half second, each run logs what is on screen to `log.jsonl`. Pictures are taken at 0, 10, 30, 60 and 120 s after the
first game frame. Everything is in `vexvoid-devkit/pictures/first2min/{before,after}/`.

## What happened before (6eca93c)
| moment | idle | play (route known) | marker (straight line) |
|---|---|---|---|
| first game frame after PLAY | 2.5 s | 2.8 s | 2.5 s |
| first objective on screen | 2.8 s | 2.9 s | 2.9 s |
| first phone message (banner) | 3.1 s | 3.1 s | 3.1 s |
| first spray | never | 29.1 s | 87.6 s, on the wrong wall |
| GET UP done | never | 31.7 s | never (in 120 s) |

## The problems, worst first
1. **The marker leads into a dead end.** The objective, "GET TO THE RECORD SHOP · 62 M", is north-east. The mini-map
   marker points straight at it, and the straight way runs up Void Street into `lane-gate`, which is locked. A newcomer
   following the arrow was stuck there from 20 s to 77 s and never got up. Nothing on screen shows the real way, which is
   the back lane to the west, then 66 m along the N road.
2. **No spray in the first half minute.** The first wall that counts is about 100 m away. Even a player who knows the
   way sprays at 29 s. A stranger following the arrow first sprays at 88 s, on a gate.
3. **A wall of text.** The bottom bar is two lines of 20 controls: WASD, SHIFT, C, SPACE, W CLIMB, DRAG LOOK, F, B, T,
   E, Q, L, O, K, HEAT, P, R, M... Nothing is taught in context, and at second 0 the only prompt in the middle of the
   screen is the music ("♪ WHISPERS IN THE WIND · M MUSIC").
4. **The opening frame.** The game starts inside the dark studio, facing a half-shut shutter. The way out, the door
   ajar, is off to the right, and the writer's back fills the middle of the frame. Moody, but with no goal in the
   picture.
5. **Steering needs a mouse drag.** The camera never follows the writer. With only the keys, A and D strafe in a
   straight line, so turning a street corner means dragging the view each time.
6. **No feedback moment.** Finishing a job gives only a text in the phone. The first tag gives nothing at all.
7. Confusing prompt: at the locked gate the line reads "TOO HIGH TO REACH · [F] PAINT THIS WALL". Not fixed: it only
   showed because of problem 1.

Not a problem: loading. Locally the first frame is up in 2.5 s and the first text arrives about 0.5 s after the loading
screen fades. On the site the 8 MB warm-up comes first, behind the "Loading N%" line.

## What changed (game/src)
- **FIRST NIGHT** (`main.ts` `intro`/`coach()`, `plan.ts` `FIRST_NIGHT`, `missions.ts` `fresh()`). If the story has not
  begun, the game starts just outside the studio door, facing the studio's own wall under the door lamp. A coach line
  then teaches one thing at a time, in the prompt's place:
  - `[F] PUT YOUR NAME ON THE WALL`;
  - then in paint mode: `HOLD [LMB] AND MOVE THE MOUSE TO SPRAY`, then `KEEP GOING · A TAG IS A FEW STROKES`, then
    `THAT'S YOUR NAME UP · [F] WHEN YOU'RE DONE`;
  - then `[E] READ YOUR MESSAGES`;
  - then `FOLLOW THE LINE ON THE MAP · HOLD [SHIFT] TO SPRINT`.

  The coach steps aside for any other prompt, and it ends once GET UP's first step is done or after a minute. If you
  walk off without painting, it moves on to the street. Returning players start at home as before. The first track's
  music note waits so the coach has the line. The opening is still dark (the owner's call), only framed on a wall.
- **THE ROUTE** (`main.ts` `updRoute`, `minimap.ts`). The way to the objective along the streets, from the officers'
  A* over the walkable grid (2-5 ms a call, about once a second), is drawn on the mini-map as a white line with a dark
  edge. The objective line now gives the walking distance ("83 M"), not the straight-line one. The grid is built under
  the loading screen. There is no line when the way is not on foot (a heaven, up a pipe); then the marker shows alone.
- **The camera follows** a writer on the move after 1.2 s without a drag (about 1.7 rad/s at a jog, less when slower).
  A and D now curve the run, and a big reversal is left alone.
- **A moment card** (`main.ts` `moment()`): a title across the upper third for about 3 s. GET UP / DONE · DEZ IS
  TEXTING when a job is done. "UP" / NOW THE STREET · <objective> after the first tag. Words only, no numbers (no XP).
- **The HUD line** while walking is one line of the keys that matter now: `WASD MOVE · DRAG LOOK · SHIFT SPRINT · SPACE
  JUMP · C CROUCH · F PAINT A WALL · B SKETCHBOOK · E PHONE · HEAT … · P PATROL`, plus `M MUSIC ON` when the music is
  off. The phone, the dock and the help card still show the rest.
- **API/MCP:** `g.route()`, `g.firstNight({ start, stop })`; MCP game actions `route` and `first_night` (controls.html).

## After
| moment | play (follows the screen) |
|---|---|
| first game frame after PLAY | 3.0 s (+0.5 s: the story's progress and the walking grid, under the loading screen) |
| first prompt, "[F] PUT YOUR NAME ON THE WALL" | 0 s |
| first spray | 2.8 s |
| first tag done, card "UP" | 5.2 s |
| first message read | 5.2 s |
| at the record shop (by the line) | 23.6 s |
| GET UP done, card "GET UP · DONE" | 31 s |
| FLICK IT under way, at the hall of fame | 36 s, then 60 s |

## Character pass 5
Close-ups (`f2m-char.mjs`, `f2m-face.mjs`; before in `pictures/first2min/char-before`, after in `char-after`):
- **Hood under the floodlight:** it was a near-white blob over the black jacket. The cause was the sheen, the specular
  and the sky's reflection on the cotton, not its colour: a black hood measured the same grey. Now the cotton is dead
  matte and a step darker (`writer.ts` Cotton). It reads as cloth under the record shop's light and charcoal elsewhere.
- **Hood edge:** the turn at the opening was a hard step, and its lining was the hood's own grey, so the bottom corners
  of the opening caught the light as two pale points, like teeth. The bound edge also carried on under the chin and stood
  out of the collar as two pale hooks. A look into the hood from the side saw out through it, because the cloth was
  one-sided. Now (`writer.py`):
  - a rounder roll at the edge;
  - the lining in near-black (`Mask`, two-sided, no glint);
  - the binding round the brow and the sides only, and thinner;
  - the hood two-sided;
  - matte drawcords (in `Detail` a floodlight drew them as white hooks).

  No face, nothing like an eye: checked front, three-quarter, bloom on and off.
- **Sleeves:** they read as inflated tubes with quilted squares, and a rim light burnt a white patch on the shoulder. Now
  they are about 10% slimmer down the arm, with the cap unchanged, and the cuff band, weld and tab follow. The ripstop is a
  real fine grid under a softer clear coat, and the pack's grid is finer too.
- glb 3.46 MB, 64.9k tris (was 3.48 MB / 65.1k).

## Not done / next
- The first tag is on a narrow wall (studio-s2, 2 m). A wider bare wall in the studio yard would frame better. The
  garage wall opposite already carries old tags.
- Real strangers: watch a few people play (or record sessions), because the bot is a best case.
- A route line on the phone's MAP too, and a faint in-world guide (a lamp lit ahead, a tag pointing the way) for players
  who never look at the mini-map.
- The "TOO HIGH TO REACH · [F] PAINT" combination at gates.
- Close up, the pack strap's reflective tape still shows as a pale crescent at the collar.
- On the site, the 8 MB warm-up before the loading screen is the only dead time. A smaller first chunk (start the
  loading clip sooner) would help.
