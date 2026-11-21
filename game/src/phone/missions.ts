/**
 * Vex's PHONE, the scene: the contacts, their messages and the MISSIONS they send.
 *
 * A mission is data: a contact's message (the intro), one or more objectives, a reply when it is done. Objectives:
 *   reach   get to a place (a named place, or a point) within r metres
 *   paint   new paint on a wall (any of `walls`): a tag, a throw-up or a piece by size and stroke count, optionally
 *           over a region (what a setup put up there, to go over it)
 *   buff    take paint off a wall with the buff can, covering the region a setup put up (clean-up)
 *   photo   a photo with the target in frame, near enough, nothing in the way, from in front of it
 *   escape  lose the law after they clocked you (the existing escaped event)
 *   hide    crouched, still and out of sight for a few seconds while the patrol is about (lying low)
 * There are no points and no levels (owner rule): progress is new messages, new contacts and new places on the map.
 *
 * MISSIONS is the STARTERS with the installed CONTENT PACKS after them (./packs.ts; game/content/packs/*.json, data
 * only, never engine code). A pack can only add missions; one can also be loaded into a running game (addPack).
 *
 * Progress is kept as one small JSON object (this browser's localStorage by default, which in the desktop client is the
 * app's own user data). A host can pass its own ProgressStore (the web game's account, later).
 *
 * THE PHONE CAN DIE (the canal, GAME-DESIGN.md 4): `phone.dead` in the saved state (absent in older saves: alive).
 * While it is dead nothing arrives: lines wait in the queue, missions still move on (a place reached, a wall painted)
 * and their messages wait too; a photo objective waits for a camera. A new burner (the phone kiosk) brings it all in.
 * `phone.case`: a waterproof case (a later unlock) and the canal does not kill it.
 *
 *   const ms = makeMissions(env, store, { onMessage, onChange }); ms.tick(dt); ms.event('escaped'); ms.photo(framed)
 */
import { footprint, type Stroke } from '../spray';
import type { LawState } from '../cops';
import { mergePacks, installPack, removePack, type Pack } from './packs';
import PACKS from '../../content/packs/index';

export type SketchKind = 'tag' | 'throw-up' | 'piece';
/** The people who message Vex. No faces: a mark (their initial) on a black disc. */
export const CONTACTS: Record<string, { name: string; about: string; mark: string }> = {
  dez: { name: 'DEZ', about: 'old head. painting since before you were born', mark: 'D' },
  nix: { name: 'NIX', about: 'crew. knows every wall in the district', mark: 'N' },
  mo: { name: 'MO · VOID RECORDS', about: 'runs the record shop in the arches', mark: 'M' },
  rift: { name: 'RIFT', about: 'nobody you want to know', mark: 'R' },
};
type Line = [from: string, text: string];
export type Objective = {
  type: 'reach' | 'paint' | 'buff' | 'photo' | 'escape' | 'hide';
  /** What it says on the phone and under the mini-map (short, upper case). */
  text: string;
  /** reach: a named place (or any of `places`), or a point [x, y, z]; r metres. */
  place?: string; places?: string[]; at?: [number, number, number]; r?: number;
  /** paint / buff / photo: the wall (any one of these). */
  walls?: string[];
  /** paint: at least this (a tag, a throw-up, a piece: by size and strokes). */
  kind?: SketchKind;
  /** paint over / buff: the region the mission's setup put up (metres on the wall). */
  over?: boolean;
  /** photo: no further than this (m); painted: the wall must have paint on it. */
  dist?: number; painted?: boolean;
  /** hide: how long (s). */
  secs?: number;
  /** Sent when this objective comes up (a tip, from the mentor mostly). */
  hint?: Line[];
  /** paint: a starter sketch that does it, by id (the checks blast it; the tip can name it). */
  sketch?: string;
};
export type Mission = { id: string; title: string; from: string; summary: string; after: string[]; delay: number;
  /** Something put up on a wall when the mission starts (the toys' scribbles, your tag crossed out). */
  setup?: 'toys' | 'crossed';
  intro: Line[]; objectives: Objective[]; done: Line[];
  /** Set by the pack loader (./packs.ts), never in a pack's JSON: the pack it came from, and "built by" on its card. */
  pack?: string; credit?: string };
/** The wall each setup puts its paint on (main.ts setupWall): an `over` objective must be on it. */
export const SETUP_WALLS: Record<NonNullable<Mission['setup']>, string> = { toys: 'arch16', crossed: 'canal-n5' };

// size and strokes that make a tag, a throw-up or a piece (the starters: tags 0.6-2.2 m and 4-15 strokes, throw-ups
// 2.4-3.2 m and 24-57, pieces 3.9-6.7 m and 179-596, made smaller to fit a wall and the writer's reach)
const KIND_MIN: Record<SketchKind | 'any', { n: number; ext: number }> = { any: { n: 2, ext: 0.3 }, tag: { n: 3, ext: 0.5 }, 'throw-up': { n: 12, ext: 1.4 }, piece: { n: 60, ext: 2.4 } };

/** The starter missions: they teach the game in order (paint, the photo, the buff can and the sketchbook, going over,
 *  the law). Short, real, no cringe; nobody's face. */
export const STARTERS: Mission[] = [
  { id: 'get-up', title: 'GET UP', from: 'dez', summary: 'Dez wants your name on the shut arch next to the record shop.', after: [], delay: 4,
    intro: [['dez', 'you up?'], ['dez', 'shut arch next to the record shop on the N road. been bare for months'], ['dez', 'go put your name on it. a tag. in and out']],
    objectives: [
      { type: 'reach', place: 'record-shop', r: 14, text: 'GET TO THE RECORD SHOP ON THE N ROAD' },
      { type: 'paint', walls: ['arch14'], kind: 'tag', text: 'TAG THE SHUT ARCH NEXT TO IT', hint: [['dez', "that's the one. F at the wall, hold the mouse to spray. keep it moving or it runs"]] },
    ],
    done: [['dez', "seen it. bit shaky. everyone's first one is"], ['dez', 'watch for the car. it does loops all night']] },
  { id: 'flick-it', title: 'FLICK IT', from: 'nix', summary: 'Nix wants a photo of the hall of fame, through the foot tunnel.', after: ['get-up'], delay: 6,
    intro: [['nix', 'yo. nix. dez gave me your number'], ['nix', "hall of fame's had a fresh lick. foot tunnel under the bridge, off the N road"], ['nix', 'get a flick of it and send it over']],
    objectives: [
      { type: 'reach', place: 'pit', r: 13, text: 'THROUGH THE FOOT TUNNEL TO THE HALL OF FAME' },
      { type: 'photo', walls: ['hall-of-fame'], dist: 26, text: 'GET A FLICK OF THE HALL OF FAME', hint: [['nix', "step back so you get most of it. Q snaps it, or the camera on your phone"]] },
    ],
    done: [['nix', "that's hard. going in the chat"], ['nix', 'mo at the record shop wants a word. expect a message']] },
  { id: 'paid-wall', title: 'PAID WALL', from: 'mo', summary: 'Mo from Void Records: buff the toys off the shutter next door, put a piece up, send him a flick.', after: ['flick-it'], delay: 5, setup: 'toys',
    intro: [['mo', 'mo here. void records, in the arches'], ['mo', 'toys keep scribbling on the shutter next door. get rid and put something proper up, they leave it alone'], ['mo', "a piece. can't pay you yet but you'll be looked after"]],
    objectives: [
      { type: 'buff', walls: ['arch16'], over: true, text: 'BUFF THE TOY TAGS OFF THE SHUTTER EAST OF VOID RECORDS', hint: [['dez', 'X is your buff can. clean wall first, always']] },
      { type: 'paint', walls: ['arch16'], kind: 'piece', text: 'PUT A PIECE ON IT', hint: [['dez', "B for your sketchbook. pick a piece, aim, click. or do it by hand if you've got the nerve"]] },
      { type: 'photo', walls: ['arch16'], painted: true, dist: 16, text: 'SEND MO A FLICK OF IT' },
    ],
    done: [['mo', "beautiful. that's staying up"], ['mo', "shop opens soon. you're on the list"]] },
  { id: 'crossed-out', title: 'CROSSED OUT', from: 'nix', summary: 'Rift crossed your tag out on the canal wall. Go over him.', after: ['paid-wall'], delay: 8, setup: 'crossed',
    intro: [['rift', 'saw your tag on the canal'], ['rift', 'fixed it for you'], ['nix', "rift's crossed you out on the canal. north towpath, by the steps"], ['nix', "can't leave that. go over him. bigger than a tag"]],
    objectives: [
      { type: 'reach', place: 'canal', r: 9, text: 'GET DOWN TO THE NORTH TOWPATH' },
      { type: 'paint', walls: ['canal-n5'], kind: 'throw-up', over: true, text: 'GO OVER IT WITH A THROW-UP', hint: [['nix', 'right over it. big and quick']] },
    ],
    done: [['nix', "now that's an answer"], ['rift', 'ok. noted']] },
  { id: 'lose-them', title: 'LOSE THEM', from: 'dez', summary: 'Dez: get clocked by the patrol, lose them, then lie low.', after: ['crossed-out'], delay: 6,
    intro: [['dez', 'patrol is doing extra loops since the canal'], ['dez', "if they clock you, don't freeze. sprint. cut corners. lanes the car can't follow"], ['dez', "lose them once and you'll know you can"]],
    objectives: [
      { type: 'escape', text: 'GET CLOCKED, THEN LOSE THEM', hint: [['dez', 'shift to sprint. break their line of sight']] },
      { type: 'hide', secs: 5, text: 'LIE LOW: CROUCH AND KEEP STILL OUT OF SIGHT', hint: [['dez', 'now get low. C to crouch. stay still till it goes quiet']] },
    ],
    done: [['dez', "that's the feeling"], ['dez', 'rest up. more walls than nights']] },
  { id: 'heaven', title: 'HEAVEN', from: 'nix', summary: 'Nix: get up high and put a throw-up on a heaven the whole street sees.', after: ['lose-them'], delay: 8,
    intro: [['nix', 'ready for a heaven?'], ['nix', "roof over the shops on the N road. the corner block's side wall is bare from there up. the whole road sees it"], ['nix', "drainpipe off the back lane gets you up. or either scaffold, top lift: the yard, the canal"]],
    objectives: [
      { type: 'reach', places: ['n-road-heaven', 'yard-heaven', 'canal-heaven'], r: 7, text: 'GET UP TO A HEAVEN: THE N ROAD ROOF, OR THE TOP OF A SCAFFOLD', hint: [['dez', 'W at a drainpipe to climb. space at a ledge to get up it. nothing over two metres']] },
      { type: 'paint', walls: ['heaven-nw1-e', 'heaven-ne8-w', 'heaven-c3-n'], kind: 'throw-up', text: 'PUT A THROW-UP ON IT', hint: [['dez', "up there you're slow getting down. paint quick, keep an eye on the street"]] },
    ],
    done: [['nix', "that's a heaven. the whole road sees it on the way to work"], ['dez', 'worth more than a wall full of tags. and they never buff up there']] },
];
/** Every mission: the starters, then the installed packs' (a pack loaded into a running game goes on the end). */
export const MISSIONS: Mission[] = mergePacks(STARTERS, PACKS as unknown as Pack[], CONTACTS).list;

export type Msg = { id: number; from: string; text?: string; photo?: string; t: number; mission?: string };
export type MissionInfo = { id: string; title: string; from: string; summary: string; status: 'locked' | 'waiting' | 'active' | 'done'; step: number;
  objectives: { type: Objective['type']; text: string; done: boolean; current: boolean }[];
  /** A pack's mission: the pack, and who built it (shown on the card). region: what its setup put up (metres on the wall). */
  pack?: string; credit?: string; region?: [number, number, number, number] | null };
export type Marker = { x: number; y: number; z: number; mission: string; title: string; text: string; type: Objective['type'] };
type MState = { status: MissionInfo['status']; step: number; wait: number; region?: [number, number, number, number] | null };
export type Saved = { v: 1; missions: Record<string, MState>; msgs: Msg[]; unread: Record<string, number>; known: string[]; queue: { from: string; text: string; mission: string; wait: number }[]; seq: number;
  /** The phone itself (absent: a working phone, as every save before the canal could kill it). */
  phone?: PhoneSave };
export type PhoneSave = { dead: boolean; case?: boolean; since?: number; drowned?: number; replaced?: number };
export type ProgressStore = { load: () => Promise<Saved | null>; save: (s: Saved) => Promise<void> };

const KEY = 'vx-game-phone';
/** Progress in this browser (localStorage; in the desktop client that is the app's user data). */
export const localProgress: ProgressStore = {
  load: async () => { try { const s = localStorage.getItem(KEY); return s ? JSON.parse(s) as Saved : null; } catch { return null; } },
  save: async (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* a private window: this session only */ } },
};

export type Env = {
  me: () => { x: number; z: number; gy: number; crouch: boolean; speed: number };
  law: () => LawState;
  strokes: (wall: string) => Stroke[];
  wall: (id: string) => { x: number; y: number; z: number; w: number; h: number; nx: number; nz: number } | null;
  place: (id: string) => { x: number; y: number; z: number; name: string } | null;
  places: () => { id: string; x: number; y: number; z: number }[];
  painted: (wall: string) => boolean;
  /** Put a mission's setup up on its wall; resolves the region it covers (metres on the wall) for `over`. */
  setup: (name: NonNullable<Mission['setup']>) => Promise<[number, number, number, number] | null>;
  /** The walls' paint has loaded (stroke logs too): nothing is judged before then. */
  ready: Promise<unknown>;
};
/** What a photo saw of a point: in frame, how far, nothing in the way, from in front of the wall. */
export type Framed = (x: number, y: number, z: number, nx: number, nz: number) => { inFrame: boolean; dist: number; clear: boolean; front: boolean };

const fresh = (): Saved => ({ v: 1, missions: {}, msgs: [], unread: {}, known: ['studio'], queue: [], seq: 0 });
const GAP = 1.3;   // seconds between lines arriving (they type)

export function makeMissions(env: Env, store: ProgressStore = localProgress, cb: { onMessage?: (m: Msg) => void; onChange?: () => void; onDone?: (m: Mission) => void } = {}) {
  let S: Saved = fresh(), ready = false, saving = false, again = false;
  let byId = new Map(MISSIONS.map((m) => [m.id, m]));
  const st = (id: string) => (S.missions[id] ||= { status: 'locked', step: 0, wait: 0 });
  // what is judged now (not kept: a paint objective starts again from what is on the wall when the game opens)
  const run = new Map<string, { base: WeakSet<Stroke>; hid: number; since: number; dirty0: number }>();
  let clock = 0, acc = 0;
  const save = () => {
    if (saving) { again = true; return; }
    saving = true;
    void store.save(JSON.parse(JSON.stringify(S))).catch(() => {}).finally(() => { saving = false; if (again) { again = false; save(); } });
  };
  const changed = () => { save(); cb.onChange?.(); };
  const say = (lines: Line[], mission: string, first = 0) => { lines.forEach(([from, text], i) => S.queue.push({ from, text, mission, wait: i === 0 ? first : GAP })); };
  const deliver = (m: Omit<Msg, 'id' | 't'>) => {
    const msg: Msg = { ...m, id: ++S.seq, t: Date.now() }; S.msgs.push(msg);
    if (m.from !== 'me') S.unread[m.from] = (S.unread[m.from] || 0) + 1;
    cb.onMessage?.(msg); return msg;
  };
  const know = (id: string) => { if (id && !S.known.includes(id)) S.known.push(id); };
  const baseline = (m: Mission) => {
    const s = st(m.id), o = m.objectives[s.step]; if (!o) return;
    // (dirtyNow is defined below; baseline only runs once the game is going)
    const base = new WeakSet<Stroke>(); for (const w of o.walls || []) for (const k of env.strokes(w)) base.add(k);
    run.set(m.id, { base, hid: 0, since: clock, dirty0: o.type === 'buff' && o.over && s.region ? dirtyNow(o, s.region) : 0 });
  };
  // the objective now in play: its tip arrives, its places go on the map, what is on the wall now is the baseline
  const begin = (m: Mission, quiet = false) => {
    const s = st(m.id), o = m.objectives[s.step]; if (!o) return;
    if (o.place) know(o.place); for (const id of o.places || []) know(id);
    for (const w of o.walls || []) { const p = nearestPlace(w); if (p) know(p); }
    baseline(m);
    if (!quiet && o.hint) say(o.hint, m.id, s.step === 0 ? GAP : 1.2);
  };
  const nearestPlace = (wall: string) => { const w = env.wall(wall); if (!w) return ''; let best = '', bd = 40; for (const p of env.places()) { const d = Math.hypot(p.x - w.x, p.z - w.z); if (d < bd) { bd = d; best = p.id; } } return best; };
  const activate = async (m: Mission) => {
    const s = st(m.id); s.status = 'active'; s.step = 0;
    if (m.setup) { try { s.region = await env.setup(m.setup); } catch { s.region = null; } }
    say(m.intro, m.id, 0.2);
    begin(m, true); if (m.objectives[0].hint) say(m.objectives[0].hint, m.id, GAP);
    changed();
  };
  const advance = (m: Mission, photo?: string) => {
    const s = st(m.id);
    if (photo) deliver({ from: 'me', photo, mission: m.id });
    s.step++;
    if (s.step >= m.objectives.length) { s.status = 'done'; run.delete(m.id); say(m.done, m.id, 1.0); cb.onDone?.(m); }
    else begin(m);
    changed();
  };
  // ---- judging ----
  const freshStrokes = (m: Mission, o: Objective) => { const r = run.get(m.id); if (!r) return []; const out: Stroke[] = []; for (const w of o.walls || []) for (const k of env.strokes(w)) if (!r.base.has(k)) out.push(k); return out; };
  const boxOf = (ss: Stroke[]) => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of ss) { const r = footprint(s).width / 2; for (const [x, y] of s.pts) { x0 = Math.min(x0, x - r); x1 = Math.max(x1, x + r); y0 = Math.min(y0, y - r); y1 = Math.max(y1, y + r); } }
    return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
  };
  /** How many 10 cm cells of a region of a wall have paint on them now: each cell is as the last stroke over it left it
   *  (paint makes it dirty, the buff can cleans it). A wall's log, oldest first, so undoing the toys' scribbles cleans too. */
  const dirtyOf = (ss: Stroke[], R: [number, number, number, number]) => {
    const [rx0, ry0, rx1, ry1] = R, c = 0.1, nx = Math.max(1, Math.round((rx1 - rx0) / c)), ny = Math.max(1, Math.round((ry1 - ry0) / c)), dirty = new Uint8Array(nx * ny);
    for (const s of ss) {
      const r = footprint(s).width / 2 * (s.buff ? 1 : 0.8), r2 = r * r, v = s.buff ? 0 : 1; let px = NaN, py = NaN;
      for (const [x, y] of s.pts) {
        // the points along the stroke, a grid cell apart at most
        const steps = Number.isNaN(px) ? 1 : Math.max(1, Math.ceil(Math.hypot(x - px, y - py) / c));
        for (let k = 1; k <= steps; k++) {
          const qx = Number.isNaN(px) ? x : px + (x - px) * k / steps, qy = Number.isNaN(py) ? y : py + (y - py) * k / steps;
          if (qx + r < rx0 || qx - r > rx1 || qy + r < ry0 || qy - r > ry1) continue;
          const i0 = Math.max(0, Math.floor((qx - r - rx0) / c)), i1 = Math.min(nx - 1, Math.floor((qx + r - rx0) / c)), j0 = Math.max(0, Math.floor((qy - r - ry0) / c)), j1 = Math.min(ny - 1, Math.floor((qy + r - ry0) / c));
          for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const cx = rx0 + (i + 0.5) * c - qx, cy = ry0 + (j + 0.5) * c - qy; if (cx * cx + cy * cy <= r2) dirty[j * nx + i] = v; }
        }
        px = x; py = y;
      }
    }
    let n = 0; for (const v of dirty) n += v; return n;
  };
  const dirtyNow = (o: Objective, R: [number, number, number, number]) => (o.walls || []).reduce((n, w) => n + dirtyOf(env.strokes(w), R), 0);
  const judge = (m: Mission): boolean => {
    const s = st(m.id), o = m.objectives[s.step]; if (!o) return false;
    if (o.type === 'reach') {
      const me = env.me();
      const pts = [...(o.places || []).map((id) => env.place(id)), o.place ? env.place(o.place) : o.at ? { x: o.at[0], y: o.at[1], z: o.at[2] } : null].filter(Boolean) as { x: number; y: number; z: number }[];
      return pts.some((p) => Math.hypot(me.x - p.x, me.z - p.z) < (o.r ?? 8) && Math.abs(me.gy - p.y) < 2.2);
    }
    if (o.type === 'paint') {
      const ss = freshStrokes(m, o).filter((k) => !k.buff && k.pts.length); const need = KIND_MIN[o.kind || 'any'];
      if (ss.length < need.n) return false;
      const b = boxOf(ss); if (Math.max(b.w, b.h) < need.ext) return false;
      if (o.over && s.region) { const [x0, y0, x1, y1] = s.region, ix = Math.max(0, Math.min(x1, b.x1) - Math.max(x0, b.x0)), iy = Math.max(0, Math.min(y1, b.y1) - Math.max(y0, b.y0)); if (ix * iy < 0.4 * (x1 - x0) * (y1 - y0)) return false; }
      return true;
    }
    if (o.type === 'buff') {
      // most of what was on it when the job came in has gone
      if (o.over && s.region) { const r = run.get(m.id); return !!r && dirtyNow(o, s.region) <= Math.floor(r.dirty0 * 0.12); }
      const ss = freshStrokes(m, o).filter((k) => k.buff && k.pts.length); return !!ss.length && boxOf(ss).w > 0.5;
    }
    if (o.type === 'hide') {
      const r = run.get(m.id); if (!r) return false;
      const me = env.me(), L = env.law();
      const lowNow = me.crouch && me.speed < 0.3 && !L.seen && L.chase !== 'chase' && L.chase !== 'alerted' && L.chase !== 'busted';
      r.hid = lowNow ? r.hid + 0.25 : 0;
      return r.hid >= (o.secs ?? 5);
    }
    return false;   // photo and escape are events
  };

  void (async () => {
    try { const s = await store.load(); if (s && s.v === 1) S = { ...fresh(), ...s }; } catch { /* a fresh start */ }
    await env.ready.catch(() => {});
    ready = true;
    for (const m of MISSIONS) if (st(m.id).status === 'active') begin(m, true);   // judged again from what is up now
    cb.onChange?.();
  })();

  const api = {
    /** Call every frame (real seconds). */
    tick: (dt: number) => {
      if (!ready) return;
      clock += dt;
      // lines arriving, one after another (none while the phone is dead: they wait for a new one)
      if (S.queue.length && !(S.phone && S.phone.dead)) { S.queue[0].wait -= dt; if (S.queue[0].wait <= 0) { const q = S.queue.shift()!; deliver({ from: q.from, text: q.text, mission: q.mission }); changed(); } }
      for (const m of MISSIONS) {
        const s = st(m.id);
        if (s.status === 'locked' && m.after.every((a) => st(a).status === 'done')) { s.status = 'waiting'; s.wait = m.delay; changed(); }
        if (s.status === 'waiting') { s.wait -= dt; if (s.wait <= 0) { s.status = 'active'; void activate(m); } }
      }
      acc += dt; if (acc < 0.25) return; acc = 0;
      for (const m of MISSIONS) if (st(m.id).status === 'active' && run.has(m.id) && judge(m)) advance(m);
      // places walked to go on the map
      const me = env.me(); for (const p of env.places()) if (!S.known.includes(p.id) && Math.hypot(p.x - me.x, p.z - me.z) < 10 && Math.abs(p.y - me.gy) < 2) { know(p.id); changed(); }
    },
    /** The law's events ('escaped' clears an escape objective). */
    event: (ev: string) => {
      if (!ready || ev !== 'escaped') return;
      for (const m of MISSIONS) { const s = st(m.id), o = m.objectives[s.step]; if (s.status === 'active' && o && o.type === 'escape') advance(m); }
    },
    /** A photo is being taken: which photo objectives it meets (judged now, at the shutter). Call sent() with the
     *  photo's id once it is kept (it goes into the thread), or with null if it was not kept. */
    photo: (framed: Framed) => {
      const hits: Mission[] = [];
      if (ready) for (const m of MISSIONS) {
        const s = st(m.id), o = m.objectives[s.step]; if (s.status !== 'active' || !o || o.type !== 'photo') continue;
        const ok = (o.walls || []).some((id) => {
          const w = env.wall(id); if (!w || (o.painted && !env.painted(id))) return false;
          const f = framed(w.x, w.y, w.z, w.nx, w.nz); return f.inFrame && f.clear && f.front && f.dist <= (o.dist ?? 20);
        });
        if (ok) hits.push(m);
      }
      return { hits: hits.map((m) => m.id), sent: (id: string | null) => { for (const m of hits) if (st(m.id).status === 'active') advance(m, id || undefined); } };
    },
    /** Threads, newest activity first. */
    threads: () => {
      const by = new Map<string, Msg[]>();
      for (const m of S.msgs) { const c = m.from === 'me' ? (m.mission ? byId.get(m.mission)?.from || 'dez' : 'dez') : m.from; if (!by.has(c)) by.set(c, []); by.get(c)!.push(m); }
      return [...by.entries()].map(([id, msgs]) => ({ id, name: CONTACTS[id]?.name || id.toUpperCase(), mark: CONTACTS[id]?.mark || id[0].toUpperCase(), about: CONTACTS[id]?.about || '', msgs, unread: S.unread[id] || 0, last: msgs[msgs.length - 1] }))
        .sort((a, b) => b.last.id - a.last.id);
    },
    read: (contact: string) => { if (S.unread[contact]) { S.unread[contact] = 0; changed(); } },
    unread: () => Object.values(S.unread).reduce((a, b) => a + b, 0),
    list: (): MissionInfo[] => MISSIONS.map((m) => { const s = st(m.id); return { id: m.id, title: m.title, from: m.from, summary: m.summary, status: s.status, step: s.step,
      objectives: m.objectives.map((o, i) => ({ type: o.type, text: o.text, done: s.status === 'done' || i < s.step, current: s.status === 'active' && i === s.step })),
      ...(m.pack ? { pack: m.pack, credit: m.credit } : {}), ...(s.region ? { region: s.region } : {}) }; }),
    /** Where the objectives in play are (a wall's foot, a place). */
    markers: (): Marker[] => {
      const out: Marker[] = [];
      for (const m of MISSIONS) {
        const s = st(m.id), o = m.objectives[s.step]; if (s.status !== 'active' || !o) continue;
        let p: { x: number; y: number; z: number } | null = null;
        if (o.type === 'reach') { const id = o.place || (o.places && o.places[0]); p = id ? env.place(id) : o.at ? { x: o.at[0], y: o.at[1], z: o.at[2] } : null; }
        else if (o.walls && o.walls.length) { const w = env.wall(o.walls[0]); if (w) p = { x: w.x + w.nx * 1.2, y: w.y - w.h / 2, z: w.z + w.nz * 1.2 }; }
        if (p) out.push({ x: p.x, y: p.y, z: p.z, mission: m.id, title: m.title, text: o.text, type: o.type });
      }
      return out;
    },
    /** The objective to show under the mini-map: the newest mission in play. */
    current: () => {
      let best: { m: Mission; o: Objective } | null = null;
      for (const m of MISSIONS) { const s = st(m.id), o = m.objectives[s.step]; if (s.status === 'active' && o) best = { m, o }; }
      if (!best) return null;
      const mk = api.markers().find((k) => k.mission === best!.m.id) || null;
      return { mission: best.m.id, title: best.m.title, text: best.o.text, type: best.o.type, marker: mk };
    },
    /** Places that are on the phone's map (home, places a mission sent you to, places you have been). */
    known: () => S.known.slice(),
    /** Start the story again (messages, missions, places); the paint stays on the walls. */
    reset: () => { S = fresh(); run.clear(); clock = 0; changed(); },
    ready: () => ready,
    /** A story not begun: no message yet and nothing done (a stranger's first visit; main.ts starts the first night). */
    fresh: () => ready && S.msgs.length === 0 && S.queue.length === 0 && Object.values(S.missions).every((m) => m.status !== 'done' && m.status !== 'active'),
    /** The phone: dead (the canal), the waterproof case, how many have drowned. */
    phone: (): PhoneSave & { held: number } => ({ dead: !!S.phone?.dead, case: !!S.phone?.case, since: S.phone?.since, drowned: S.phone?.drowned || 0, replaced: S.phone?.replaced || 0, held: S.queue.length }),
    /** In the canal: the phone dies (false: the case saved it, or it was dead already). */
    drown: () => {
      if (S.phone?.case) return false; if (S.phone?.dead) return false;
      S.phone = { ...(S.phone || {}), dead: true, since: Date.now(), drowned: (S.phone?.drowned || 0) + 1 }; changed(); return true;
    },
    /** A new burner: the phone works again, and what waited arrives (the first line straight away). */
    newPhone: () => {
      if (!S.phone?.dead) return false;
      S.phone = { ...S.phone, dead: false, since: undefined, replaced: (S.phone.replaced || 0) + 1 };
      if (S.queue.length) S.queue[0].wait = Math.min(S.queue[0].wait, 0.8);
      changed(); return true;
    },
    /** The waterproof case (a later unlock; for now an agent or a test can give it). */
    setCase: (on: boolean) => { S.phone = { ...(S.phone || { dead: false }), case: !!on }; changed(); },
    mission: (id: string) => byId.get(id) || null,
    state: () => S,
    /** A content pack's missions into the game now, until it reloads (./packs.ts: it can only add; loading it again
     *  replaces what it added before). Its missions wait their turn in the story, or start(id) brings one in now. */
    addPack: (pack: Pack) => { const r = installPack(MISSIONS, pack, CONTACTS); byId = new Map(MISSIONS.map((m) => [m.id, m])); if (ready) for (const id of r.added) if (st(id).status === 'active') begin(byId.get(id)!, true); changed(); return r; },
    /** Take a pack's missions out of this game (never a starter). Their progress stays in the save. */
    removePack: (id: string) => { const n = removePack(MISSIONS, id); for (const k of [...run.keys()]) if (MISSIONS.every((m) => m.id !== k)) run.delete(k); byId = new Map(MISSIONS.map((m) => [m.id, m])); S.queue = S.queue.filter((q) => !q.mission || byId.has(q.mission)); changed(); return n; },
    /** Bring a mission in now, whatever comes before it (for building and checking packs): it arrives as it would. */
    start: (id: string) => { const m = byId.get(id); if (!m) return false; const s = st(id); s.status = 'waiting'; s.wait = 0.2; s.step = 0; run.delete(id); changed(); return true; },
  };
  return api;
}
export type Missions = ReturnType<typeof makeMissions>;
