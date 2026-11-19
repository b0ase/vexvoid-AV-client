/**
 * PARKOUR and the WATER, for Vex (GAME-DESIGN.md 3 and 4). The game's own movement (main.ts) runs the street: this
 * module takes the body over while it does something else, and says what can be done where the writer stands.
 *
 *   VAULT   running (jog or sprint) at something low (0.4 to 1.25 m: a low wall, a barrier, a bin, a planter, the
 *           railing by the canal steps) goes over it with one hand on top and keeps the speed. Walking (crouched) at it
 *           stops you as before. Something with a drop behind it (the canal railing, a parapet) is never vaulted by
 *           itself: Space goes over it on purpose.
 *   MANTLE  Space at a ledge 0.55 to 2.25 m above your feet (or jumping at one: hands catch it at the top of the jump):
 *           low ones are a quick hands-down step up; high ones a hang, a pull-up, a knee on the edge and up. Over a
 *           parapet you drop down the far side onto the roof. Higher than 2.25 m is refused ("TOO HIGH").
 *   CLIMB   drainpipes, ladders, scaffold ladders, fire-escape drop ladders (out of reach: jump for them), ladders out of
 *           the canal (plan.ts climbs). Face one and hold W to get on; W / S climb, Shift faster; at the top W goes over
 *           (onto the roof, the landing, the lift); A / D step off at a scaffold lift; Space jumps off, away from it;
 *           C lets go. At a route's top, C climbs back down it.
 *   FALLS   up to 2.3 m: the usual landing. 2.3 to 5.5 m: a roll if you were moving, else a heavy crouched landing.
 *           More: a HARD LANDING: down on one knee and a hand for a long beat, a slow get-up, then winded for a few
 *           seconds (no sprint). Nobody dies and nothing is gory (owner: no gore; the bust is the game's only fail):
 *           a big drop costs the one thing an escape spends, time, and the patrol can catch a winded writer.
 *   SWIM    in the canal: a slow breaststroke (W, Shift harder) or treading water. Out only at the water steps or a
 *           canal ladder (W at it). The patrol does not follow anyone into the water, up a wall or onto a roof: they
 *           search below (cops.ts, Suspect.out).
 *
 * The body is posed through the writer's rig (writer.ts: a held library clip + hand and foot IK onto the edge, the
 * rungs, the water): the UAL library has no vault, climb, hang or swim clips (checked: 34 clips, none of them).
 */
import * as THREE from 'three';
import { STEP, type World, type Box } from './world';
import { CLIMBABLE, WATER_Y, type Plan, type Climb } from './plan';
import type { Writer, Rig } from './writer';

export type Body = { x: number; z: number; y: number; gy: number; vy: number; heading: number; crouch: boolean; airborne: boolean };
export type Moving = { speed: number; roll: number; pitch: number; takeoff: number; yawRate: number };
export type Input = { up: boolean; down: boolean; left: boolean; right: boolean; ax: number; az: number; sprint: boolean; camYaw: number };
export type Mode = 'none' | 'vault' | 'mantle' | 'climb' | 'swim' | 'roll' | 'heavy' | 'hard' | 'dive';
export type PkState = { mode: Mode; phase: string; route: string; routeKind: string; height: number; top: number; swimming: boolean; winded: number;
  unreachable: boolean; prompt: string; vaults: number; mantles: number; climbs: number; landings: { roll: number; heavy: number; hard: number }; lastDrop: number };

/** The tuning: how far, how high, how fast. */
export const PK = {
  vaultMin: 0.4, vaultMax: 1.25, vaultSpeed: 3.6, vaultDepth: 2.2,
  mantleMin: 0.55, mantleMax: 2.25, stepMax: 1.35, reach: 0.75,
  climbUp: 2.1, climbDown: 2.6, ladderUp: 2.8, ladderDown: 3.2, fast: 1.45,
  swim: 1.15, swimFast: 1.65, swimTurn: 3.2,
  roll: 2.3, hard: 5.5, windedSecs: 5, windedK: 0.75,
};
const BODY_R = 0.35, HANG = 2.02;   // hands above the feet hanging at full stretch (a 1.78 m figure)
const smooth = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ang = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

type Ahead = { b: Box; d: number; nx: number; nz: number; hx: number; hz: number; top: number; h: number; depth: number; behind: number };

export function makeParkour(o: { world: World; plan: Plan; writer: Writer; me: Body; mv: Moving; carry: (on: boolean) => void; onSplash?: (x: number, z: number) => void; onLand?: (kind: 'roll' | 'heavy' | 'hard', drop: number) => void }) {
  const W = o.world, P = o.plan, me = o.me, mv = o.mv, wr = o.writer;
  const routes = () => P.climbs.filter((c) => CLIMBABLE.includes(c.kind) && c.n);
  const open = P.canal.open;
  const V = () => new THREE.Vector3();
  const hands = [V(), V()], feet = [V(), V()], elbows = [V(), V()], knees = [V(), V()];
  const counts = { vaults: 0, mantles: 0, climbs: 0, landings: { roll: 0, heavy: 0, hard: 0 }, lastDrop: 0 };
  let mode: Mode = 'none', phase = '', t = 0, winded = 0, prompt = '';
  // ── geometry ──
  /** The first thing ahead (along heading h) that stops a body at `feet`, within `range` of its surface. */
  const probe = (x: number, z: number, feet: number, h: number, range: number): Ahead | null => {
    const dx = Math.sin(h), dz = Math.cos(h), far = BODY_R + range;
    let best: Ahead | null = null;
    const seen = new Set<Box>();
    for (const s of [0, far * 0.5, far]) for (const b of W.near(x + dx * s, z + dz * s)) {
      if (seen.has(b)) continue; seen.add(b);
      if (!W.stops(b, feet)) continue;
      if (x > b.x0 && x < b.x1 && z > b.z0 && z < b.z1) continue;   // inside it (never: pushOut keeps us out)
      let t0 = 0, t1 = far, nx = 0, nz = 0;
      const sl = (p: number, d: number, lo: number, hi: number, ax: 'x' | 'z') => {
        if (Math.abs(d) < 1e-9) return p >= lo && p <= hi;
        let u = (lo - p) / d, v = (hi - p) / d, nn = -1; if (u > v) { [u, v] = [v, u]; nn = 1; }
        if (u > t0) { t0 = u; if (ax === 'x') { nx = nn; nz = 0; } else { nz = nn; nx = 0; } }
        t1 = Math.min(t1, v); return t0 <= t1;
      };
      if (!sl(x, dx, b.x0, b.x1, 'x') || !sl(z, dz, b.z0, b.z1, 'z')) continue;
      if (t0 <= 0 || (best && t0 >= best.d)) continue;
      const hx = x + dx * t0, hz = z + dz * t0;
      const top = W.topAt(hx + dx * 0.06, hz + dz * 0.06, feet);
      // how deep it is along the way we go (until the column drops back near our level), and what is behind it
      let depth = 0, behind = NaN;
      for (let u = 0.1; u <= 3.2; u += 0.1) {
        const px = hx + dx * u, pz = hz + dz * u, c = W.topAt(px, pz, feet);
        if (c > top + 0.05) { depth = Infinity; break; }          // taller stuff behind: nothing to vault
        if (c <= feet + STEP && W.free(px, pz, 0.05, feet)) { depth = u; behind = W.groundAt(px + dx * 0.5, pz + dz * 0.5, top); break; }
        depth = u;
      }
      best = { b, d: t0, nx, nz, hx, hz, top, h: top - feet, depth, behind };
    }
    return best;
  };
  const inOpen = (x: number, z: number) => x > open.x0 && x < open.x1 && z > open.z0 && z < open.z1;
  /** Over the open water with nothing to stand on near the surface (the water steps are not water). */
  const waterAt = (x: number, z: number) => { if (!inOpen(x, z)) return false; const g = W.groundAt(x, z, WATER_Y + 0.4); return Number.isNaN(g) || g < WATER_Y - 0.9; };

  // ── the vault ──
  let V0 = { x: 0, z: 0, y: 0 }, V1 = { x: 0, z: 0, y: 0 }, vTop = 0, vD = 0.4, vUp = 0.5, vHand = V(), vSpeed = 0, vDrop = false, vLeft = V();
  const canVault = (a: Ahead | null, feet: number, onPurpose: boolean) => {
    if (!a || a.h < PK.vaultMin || a.h > PK.vaultMax || a.depth === Infinity || a.depth > PK.vaultDepth) return null;
    const dx = Math.sin(me.heading), dz = Math.cos(me.heading);
    if (a.nx * -dx + a.nz * -dz < 0.57) return null;                // square enough to it (within ~55 degrees)
    // nothing above the top in the way, all along
    for (let u = 0.05; u < a.depth; u += 0.3) if (!W.free(a.hx + dx * u, a.hz + dz * u, 0.28, a.top)) return null;
    const ex = a.hx + dx * (a.depth + 0.6), ez = a.hz + dz * (a.depth + 0.6);
    if (waterAt(ex, ez)) return onPurpose ? { x: ex, z: ez, y: a.top, drop: true } : null;
    const g = W.groundAt(ex, ez, feet + 0.6);
    if (Number.isNaN(g)) return null;
    if (Math.abs(g - feet) <= 0.6 && W.free(ex, ez, BODY_R, g)) return { x: ex, z: ez, y: g, drop: false };
    if (onPurpose && g < feet && W.free(ex, ez, BODY_R, g)) return { x: ex, z: ez, y: a.top, drop: true };   // a drop behind: on purpose only
    return null;
  };
  const startVault = (a: Ahead, e: { x: number; z: number; y: number; drop: boolean }) => {
    mode = 'vault'; phase = 'over'; t = 0; counts.vaults++;
    const dx = Math.sin(me.heading), dz = Math.cos(me.heading);
    V0 = { x: me.x, z: me.z, y: me.gy }; V1 = { x: e.x, z: e.z, y: e.drop ? a.top + 0.05 : e.y }; vTop = a.top; vDrop = e.drop;
    const dist = Math.hypot(V1.x - V0.x, V1.z - V0.z); vSpeed = Math.max(mv.speed, 4.2);
    vD = Math.max(0.3, Math.min(0.62, dist / vSpeed)); vUp = Math.max(0.25, Math.min(0.75, (a.d + a.depth / 2) / Math.max(0.5, dist)));
    vLeft.set(Math.cos(me.heading), 0, -Math.sin(me.heading));   // the writer's left (the right hand has the can)
    vHand.set(a.hx + dx * Math.min(a.depth, 0.6) / 2, a.top + 0.03, a.hz + dz * Math.min(a.depth, 0.6) / 2).addScaledVector(vLeft, 0.16);
    me.airborne = false; me.vy = 0; mv.takeoff = 0; me.crouch = false; vHead = me.heading;
  };
  let vHead = 0;
  const tickVault = (dt: number) => {
    t += dt; const u = Math.min(1, t / vD);
    me.x = lerp(V0.x, V1.x, u); me.z = lerp(V0.z, V1.z, u);
    const peak = vTop + 0.14;   // (the tucked pose carries the soles ~0.3 m above the root: they clear the top)
    const y = u < vUp ? lerp(V0.y, peak, Math.sin(Math.PI / 2 * u / vUp)) : lerp(peak, V1.y, 1 - Math.cos(Math.PI / 2 * (u - vUp) / (1 - vUp)));
    me.gy = y; me.y = 0; mv.speed = vSpeed * 0.97;
    const hw = smooth(0.08, 0.28, u) * (1 - smooth(0.6, 0.82, u));
    hands[0].copy(vHand); elbows[0].copy(vLeft).multiplyScalar(0.7).addScaledVector(new THREE.Vector3(Math.sin(me.heading), 0, Math.cos(me.heading)), -0.4).add(new THREE.Vector3(0, -0.3, 0));
    // a speed vault: the body turns side-on over the planted hand, the legs swing through past it, then square again
    const sw = Math.sin(Math.PI * Math.min(1, u * 1.15));
    me.heading = vHead - 0.75 * sw; mv.roll = 0.36 * sw; mv.pitch = 0.12 * sw;
    rig({ clip: 'NinjaJump_Idle_Loop', at: 0.35, fade: 0.07, free: true, hands: [hands[0], null], handW: [hw, 0], elbows: [elbows[0], null] });
    if (u >= 1) {
      mode = 'none'; phase = ''; mv.roll = 0; mv.pitch = 0; me.heading = vHead; wr.rig(null);
      if (vDrop) { me.gy = vTop + 0.05; me.y = 0; me.airborne = true; me.vy = -0.5; jumped = false; fallTop = me.gy; }
      else { me.gy = V1.y; me.y = 0; wr.land(0.12); }
    }
  };

  // ── the mantle ──
  let M0 = { x: 0, z: 0, y: 0 }, M1 = { x: 0, z: 0, y: 0 }, mTop = 0, mWall = { x: 0, z: 0 }, mDir = { x: 0, z: 0 }, mOver = false, mHang = false;
  const mantleTarget = (a: Ahead | null, ground: number) => {
    if (!a || a.depth === Infinity) return null;
    const dx = Math.sin(me.heading), dz = Math.cos(me.heading);
    if (a.nx * -dx + a.nz * -dz < 0.6) return null;
    const h = a.top - ground; if (h < PK.mantleMin || h > PK.mantleMax) return null;
    if (a.depth >= 0.5) {
      const sx = a.hx + dx * 0.55, sz = a.hz + dz * 0.55, g = W.groundAt(sx, sz, a.top + 0.05);
      if (!Number.isNaN(g) && Math.abs(g - a.top) < 0.1 && W.free(sx, sz, 0.33, g)) return { x: sx, z: sz, y: g, over: false, h };
    }
    // a thin top (a parapet, a railing, a wall): over it and down the far side, if that side is near enough below
    const bx = a.hx + dx * (Math.min(a.depth, 1.2) + 0.55), bz = a.hz + dz * (Math.min(a.depth, 1.2) + 0.55);
    if (waterAt(bx, bz)) return null;
    const g = W.groundAt(bx, bz, a.top + 0.05);
    if (!Number.isNaN(g) && g >= a.top - 1.3 && W.free(bx, bz, BODY_R, g)) return { x: bx, z: bz, y: g, over: true, h };
    return null;
  };
  const startMantle = (a: Ahead, tg: { x: number; z: number; y: number; over: boolean; h: number }) => {
    mode = 'mantle'; t = 0; counts.mantles++;
    mHang = tg.h > PK.stepMax; phase = mHang ? 'catch' : 'step';
    const dx = Math.sin(me.heading), dz = Math.cos(me.heading);
    // square up to the face
    me.heading = Math.atan2(-a.nx, -a.nz);
    mDir = { x: -a.nx, z: -a.nz }; mWall = { x: a.hx, z: a.hz }; void dx; void dz;
    M0 = { x: me.x, z: me.z, y: me.gy + me.y }; M1 = { x: tg.x, z: tg.z, y: tg.y }; mTop = a.top; mOver = tg.over;
    me.airborne = false; me.vy = 0; mv.takeoff = 0; mv.speed = 0; me.crouch = false;
    if (mHang) o.carry(false);
  };
  const edgeHands = (spread: number, inset: number) => {
    const lx = mDir.z, lz = -mDir.x;   // the writer's left, facing the wall
    for (const [i, s] of [[0, 1], [1, -1]] as const) hands[i].set(mWall.x + mDir.x * inset + lx * spread * s, mTop + 0.03, mWall.z + mDir.z * inset + lz * spread * s);
    for (const [i, s] of [[0, 1], [1, -1]] as const) elbows[i].set(lx * s * 0.6 - mDir.x * 0.5, -0.6, lz * s * 0.6 - mDir.z * 0.5);
  };
  const tickMantle = (dt: number, inp: Input) => {
    t += dt;
    const wallX = mWall.x - mDir.x * 0.36, wallZ = mWall.z - mDir.z * 0.36;   // the body against the face
    if (phase === 'step') {
      // hands down on the top, up and on in one go (0.42 s)
      const D = 0.42, u = Math.min(1, t / D);
      const k = smooth(0, 0.55, u), f = smooth(0.35, 1, u);
      me.x = lerp(lerp(M0.x, wallX, smooth(0, 0.4, u)), M1.x, f); me.z = lerp(lerp(M0.z, wallZ, smooth(0, 0.4, u)), M1.z, f);
      me.gy = lerp(M0.y, mOver ? mTop + 0.05 : M1.y, k); if (mOver && u > 0.7) me.gy = lerp(mTop + 0.05, M1.y, smooth(0.7, 1, u)); me.y = 0;
      edgeHands(0.22, 0.12);
      const hw = smooth(0.05, 0.2, u) * (1 - smooth(0.7, 0.95, u));
      mv.pitch = 0.3 * Math.sin(Math.PI * u);
      rig({ clip: 'Crouch_Idle_Loop', at: 0.2, fade: 0.08, free: true, hands: [hands[0], hands[1]], handW: [hw, hw * 0.85], elbows: [elbows[0], elbows[1]] });
      if (u >= 1) finishMantle();
      return;
    }
    // the hang: catch the edge, hang a beat (S: drop), pull up, a knee on the edge, stand
    const hangY = mTop - HANG;
    edgeHands(0.24, 0.05);
    if (phase === 'catch') {
      const u = Math.min(1, t / 0.1);
      me.x = lerp(M0.x, wallX, u); me.z = lerp(M0.z, wallZ, u); me.gy = lerp(M0.y, hangY, u); me.y = 0;
      rig({ clip: 'Jump_Loop', at: 0.25, fade: 0.06, free: true, hands: [hands[0], hands[1]], handW: [smooth(0, 1, u), smooth(0, 1, u)], elbows: [elbows[0], elbows[1]] });
      if (u >= 1) { phase = 'hang'; t = 0; }
      return;
    }
    if (phase === 'hang') {
      me.x = wallX; me.z = wallZ; me.gy = hangY; me.y = 0; mv.pitch = 0.04 * Math.sin(t * 9);
      rig({ clip: 'Jump_Loop', at: 0.25, free: true, hands: [hands[0], hands[1]], handW: [1, 1], elbows: [elbows[0], elbows[1]] });
      if (inp.down) { letGo(0); return; }                     // S: drop back down
      if (t > 0.14) { phase = 'pull'; t = 0; }
      return;
    }
    if (phase === 'pull') {
      const u = Math.min(1, t / 0.34), k = smooth(0, 1, u);
      me.x = wallX; me.z = wallZ; me.gy = lerp(hangY, mTop - 1.12, k); me.y = 0; mv.pitch = 0.32 * k;
      rig({ clip: 'Jump_Loop', at: 0.25, free: true, hands: [hands[0], hands[1]], handW: [1, 1], elbows: [elbows[0], elbows[1]] });
      if (u >= 1) { phase = 'knee'; t = 0; }
      return;
    }
    if (phase === 'knee') {
      const u = Math.min(1, t / 0.28), k = smooth(0, 1, u);
      me.x = lerp(wallX, M1.x, k); me.z = lerp(wallZ, M1.z, k);
      me.gy = mOver ? (u < 0.6 ? lerp(mTop - 1.12, mTop + 0.05, smooth(0, 0.6, u)) : lerp(mTop + 0.05, M1.y, smooth(0.6, 1, u))) : lerp(mTop - 1.12, M1.y, smooth(0, 0.75, u)); me.y = 0;
      mv.pitch = 0.32 * (1 - k);
      const hw = 1 - smooth(0.55, 0.9, u);
      rig({ clip: 'Crouch_Idle_Loop', at: 0.2, fade: 0.1, free: true, hands: [hands[0], hands[1]], handW: [hw, hw], elbows: [elbows[0], elbows[1]] });
      if (u >= 1) finishMantle();
    }
  };
  const finishMantle = () => { mode = 'none'; phase = ''; me.x = M1.x; me.z = M1.z; me.gy = M1.y; me.y = 0; mv.pitch = 0; mv.roll = 0; wr.rig(null); o.carry(true); wr.land(0.12); };
  /** Let go of whatever the hands hold: fall from here, pushed off by `push` m/s. */
  const letGo = (push: number, n?: [number, number]) => {
    mode = 'none'; phase = ''; wr.rig(null); o.carry(true);
    const g = W.groundAt(me.x, me.z, me.gy);
    me.airborne = true; me.vy = 0; me.y = 0; fallTop = me.gy; jumped = false;
    if (n) { me.heading = Math.atan2(n[0], n[1]); mv.speed = push; } else mv.speed = 0;
    void g;
  };

  // ── climbing ──
  let C: Climb | null = null, cy = 0, cv = 0, cIn = 0, cExit = { x: 0, z: 0, y: 0 }, c0 = { x: 0, z: 0, y: 0 };
  const ladder = (c: Climb) => c.kind !== 'drainpipe';
  const offOf = (c: Climb) => (ladder(c) ? 0.42 : 0.4);
  const bodyAt = (c: Climb) => ({ x: c.x + c.n![0] * offOf(c), z: c.z + c.n![1] * offOf(c) });
  const minY = (c: Climb) => (c.kind === 'drop-ladder' ? (c.grab ?? c.y0) - 1.75 : c.y0);
  const maxY = (c: Climb) => (c.kind === 'drainpipe' ? c.y1 - 1.05 : c.y1 - 0.95);
  /** A route the writer could get on from where they stand: at its foot (or a lift), facing it. */
  const routeHere = (fromTop = false) => {
    let best: { c: Climb; d: number; y: number } | null = null;
    const fx = Math.sin(me.heading), fz = Math.cos(me.heading);
    for (const c of routes()) {
      if (fromTop) {
        if (!c.top || Math.abs(me.gy - c.top.y) > 0.3) continue;
        const d = Math.hypot(me.x - c.top.x, me.z - c.top.z); if (d > 1.15) continue;
        if (fx * c.n![0] + fz * c.n![1] < 0.25) continue;   // facing out over the edge
        if (!best || d < best.d) best = { c, d, y: maxY(c) };
        continue;
      }
      const b = bodyAt(c), d = Math.hypot(me.x - b.x, me.z - b.z); if (d > 0.9) continue;
      if (-(fx * c.n![0] + fz * c.n![1]) < 0.45) continue;
      // at its foot, or a scaffold lift on the way up
      let y = NaN;
      if (Math.abs(me.gy - c.y0) < 0.9 || (c.kind === 'drop-ladder' && Math.abs(me.gy - c.y0) < 0.9)) y = Math.max(minY(c), me.gy);
      for (const s of c.stops || []) if (Math.abs(me.gy - s.y) < 0.3) y = s.y;
      if (c.kind === 'canal-ladder' && mode === 'swim') y = minY(c);
      if (Number.isNaN(y)) continue;
      if (!best || d < best.d) best = { c, d, y };
    }
    return best;
  };
  const startClimb = (c: Climb, y: number, from: 'foot' | 'top' | 'jump' | 'water') => {
    mode = 'climb'; C = c; cy = y; cv = 0; t = 0; counts.climbs++; me.airborne = false; me.vy = 0; mv.speed = 0; mv.takeoff = 0; me.crouch = false; o.carry(false);
    phase = from === 'top' ? 'enter-top' : 'on'; cIn = 0; c0 = { x: me.x, z: me.z, y: me.gy + me.y };
    me.heading = Math.atan2(-c.n![0], -c.n![1]);
    if (from === 'top') cExit = { x: me.x, z: me.z, y: me.gy };
  };
  const tickClimb = (dt: number, inp: Input) => {
    const c = C!, b = bodyAt(c), [nx, nz] = c.n!, tx = -nz, tz = nx;
    me.heading = Math.atan2(-nx, -nz);
    if (phase === 'enter-top' || phase === 'exit-top') {
      // over the top (or back over it, getting on from above): from the route's top to the stand point
      const D = 0.55; t += dt; const u = Math.min(1, t / D), up = phase === 'exit-top', k = up ? u : 1 - u;
      const hi = c.kind === 'drainpipe' ? c.y1 + (W.topAt(c.x - nx * 0.24, c.z - nz * 0.24, c.y1) > c.y1 + 0.5 ? 1.0 : 0.05) : c.top!.y + 0.05;   // over a parapet, or straight onto the edge
      const sx = b.x, sz = b.z, sy = maxY(c);
      me.x = lerp(sx, c.top!.x, smooth(0.35, 1, k)); me.z = lerp(sz, c.top!.z, smooth(0.35, 1, k));
      me.gy = k < 0.6 ? lerp(sy, hi, smooth(0, 0.6, k)) : lerp(hi, c.top!.y, smooth(0.6, 1, k)); me.y = 0;
      mv.pitch = 0.3 * Math.sin(Math.PI * k);
      edgeOf(c); const hw = 1 - smooth(0.7, 0.95, k);
      rig({ clip: k > 0.5 ? 'Crouch_Idle_Loop' : 'Jump_Loop', at: 0.25, fade: 0.1, free: true, hands: [hands[0], hands[1]], handW: [hw, hw], elbows: [elbows[0], elbows[1]] });
      if (u >= 1) { if (up) { mode = 'none'; phase = ''; C = null; me.x = c.top!.x; me.z = c.top!.z; me.gy = c.top!.y; mv.pitch = 0; wr.rig(null); o.carry(true); wr.land(0.1); } else { phase = 'on'; cy = sy; cIn = 1; } }
      return;
    }
    if (phase === 'step-off') {
      t += dt; const u = Math.min(1, t / 0.3);
      me.x = lerp(c0.x, cExit.x, smooth(0, 1, u)); me.z = lerp(c0.z, cExit.z, smooth(0, 1, u)); me.gy = lerp(c0.y, cExit.y, smooth(0, 1, u)); me.y = 0;
      rig({ clip: 'Idle_Loop', at: 0.2, fade: 0.15, free: true });
      if (u >= 1) { mode = 'none'; phase = ''; C = null; wr.rig(null); o.carry(true); }
      return;
    }
    // on the route: get onto it (from where you stood or jumped), then W / S
    cIn = Math.min(1, cIn + dt / 0.16);
    const fast = inp.sprint ? PK.fast : 1, lad = ladder(c);
    const want = inp.up ? (lad ? PK.ladderUp : PK.climbUp) * fast : inp.down ? -(lad ? PK.ladderDown : PK.climbDown) * (inp.sprint ? 1.8 : 1) : 0;
    cv += Math.max(-14 * dt, Math.min(14 * dt, want - cv));
    cy += cv * dt;
    const lo = minY(c), hi = maxY(c);
    if (cy >= hi) { cy = hi; cv = Math.min(0, cv); if (inp.up && c.top) { phase = 'exit-top'; t = 0; return; } }
    if (cy <= lo) {
      cy = lo; cv = Math.max(0, cv);
      if (inp.down) {
        if (c.kind === 'canal-ladder') { C = null; startSwim(true); me.x = b.x + nx * 0.2; me.z = b.z + nz * 0.2; return; }
        const g = W.groundAt(b.x, b.z, cy + 0.3);
        if (!Number.isNaN(g) && cy - g < 0.6) { phase = 'step-off'; t = 0; c0 = { x: b.x, z: b.z, y: cy }; cExit = { x: b.x + nx * 0.2, z: b.z + nz * 0.2, y: g }; return; }
        letGo(0); return;   // a drop ladder's bottom rung: let go
      }
    }
    // a scaffold lift beside the ladder: A / D step off onto it
    for (const s of c.stops || []) if (Math.abs(cy - s.y) < 0.22 && (inp.left || inp.right)) { phase = 'step-off'; t = 0; c0 = { x: b.x, z: b.z, y: cy }; cExit = { x: s.x, z: s.z, y: s.y }; return; }
    // the body on the route: from where you were onto it
    me.x = lerp(c0.x, b.x, smooth(0, 1, cIn)); me.z = lerp(c0.z, b.z, smooth(0, 1, cIn)); me.gy = lerp(c0.y, cy, smooth(0, 1, cIn)); me.y = 0;
    // hands and feet on the rungs (or round the pipe), one side reaching while the other holds: a cycle per 0.56 m
    const ph = (cy / 0.56) * Math.PI * 2, sw = lad ? 0.2 : 0.05, fw = lad ? 0.17 : 0.16;
    const shoulder = cy + 1.42;
    for (const [i, s] of [[0, 1], [1, -1]] as const) {
      const lift = Math.sin(ph + (i ? Math.PI : 0));
      hands[i].set(c.x + tx * sw * s + nx * 0.06, shoulder + 0.45 + 0.13 * lift, c.z + tz * sw * s + nz * 0.06);
      feet[i].set(c.x + tx * fw * s + nx * (lad ? 0.1 : 0.14), cy + 0.32 + 0.14 * -lift, c.z + tz * fw * s + nz * (lad ? 0.1 : 0.14));
      elbows[i].set(tx * s * 0.7 + nx * 0.4, -0.8, tz * s * 0.7 + nz * 0.4);
      knees[i].set(nx * 1 + tx * s * 0.25, 0.4, nz * 1 + tz * s * 0.25);
    }
    mv.pitch = 0.06; mv.roll = 0;
    const w = smooth(0, 1, cIn);
    rig({ clip: 'Jump_Loop', at: 0.3, fade: 0.1, free: true, hands: [hands[0], hands[1]], handW: [w, w], elbows: [elbows[0], elbows[1]], feet: [feet[0], feet[1]], footW: [w, w], knees: [knees[0], knees[1]] });
  };
  const edgeOf = (c: Climb) => {
    const [nx, nz] = c.n!, tx = -nz, tz = nx, top = c.kind === 'drainpipe' ? W.topAt(c.x - nx * 0.24, c.z - nz * 0.24, c.y1) : c.top!.y;
    for (const [i, s] of [[0, 1], [1, -1]] as const) { hands[i].set(c.x - nx * 0.24 + tx * 0.24 * s, top + 0.03, c.z - nz * 0.24 + tz * 0.24 * s); elbows[i].set(tx * s * 0.6 + nx * 0.5, -0.6, tz * s * 0.6 + nz * 0.5); }
  };

  // ── swimming ──
  let sv = 0, stroke = 0, splashT = 0;
  const startSwim = (fromLadder = false) => {
    mode = 'swim'; phase = 'tread'; t = 0; me.airborne = false; me.vy = 0; me.y = 0; me.gy = WATER_Y; mv.takeoff = 0; me.crouch = false; o.carry(false);
    sv = fromLadder ? 0 : Math.min(mv.speed, 1.2); mv.speed = 0;
    if (!fromLadder) { o.onSplash?.(me.x, me.z); splashT = 0.6; }
  };
  const tickSwim = (dt: number, inp: Input) => {
    t += dt; splashT = Math.max(0, splashT - dt);
    let target = 0;
    if (inp.ax || inp.az) {
      const fx = -Math.sin(inp.camYaw), fz = -Math.cos(inp.camYaw), sx = Math.cos(inp.camYaw), sz = -Math.sin(inp.camYaw);
      const dx = fx * inp.az + sx * inp.ax, dz = fz * inp.az + sz * inp.ax;
      const d = ang(Math.atan2(dx, dz) - me.heading), step = Math.max(-PK.swimTurn * dt, Math.min(PK.swimTurn * dt, d));
      me.heading += step; target = (inp.sprint ? PK.swimFast : PK.swim) * (Math.abs(d) > 1.6 ? 0.3 : 1);
    }
    sv += Math.max(-2 * dt, Math.min(2.6 * dt, target - sv));
    const x0 = me.x, z0 = me.z;
    me.x += Math.sin(me.heading) * sv * dt; me.z += Math.cos(me.heading) * sv * dt;
    // the canal's sides: the kerbs (the water steps let you up onto them)
    const onSteps = (x: number, z: number) => { const s = W.surfAt(x, z, WATER_Y + 0.6); return !!s && s.tag === 'water-steps'; };
    if (!inOpen(me.x, me.z) || (me.z < open.z0 + BODY_R && !onSteps(me.x, me.z)) || (me.z > open.z1 - BODY_R && !onSteps(me.x, me.z))) {
      me.z = Math.max(open.z0 + BODY_R, Math.min(open.z1 - BODY_R, me.z));
      if (onSteps(x0, z0)) { me.x = x0; me.z = z0; }
      me.x = Math.max(open.x0 + 1, Math.min(open.x1 - 1, me.x));
    }
    me.gy = WATER_Y; me.y = 0; mv.speed = 0;
    // the water steps: standing depth, you walk out
    const s = W.surfAt(me.x, me.z, WATER_Y + 0.6);
    if (s && s.tag === 'water-steps') { const g = W.groundAt(me.x, me.z, WATER_Y + 0.6); if (g >= WATER_Y - 0.95) { mode = 'none'; phase = ''; me.gy = g; me.y = 0; wr.rig(null); o.carry(true); mv.speed = 0.6; return; } }
    // the pose: treading water upright, or a breaststroke leaning into it
    const moving = sv > 0.3; phase = moving ? 'stroke' : 'tread';
    const lean = moving ? 0.95 : 0.22;
    mv.pitch += (lean - mv.pitch) * Math.min(1, dt * 4); mv.roll = 0;
    stroke += dt * (moving ? 1.05 + sv * 0.4 : 0.8);
    const fx = Math.sin(me.heading), fz = Math.cos(me.heading), lx = Math.cos(me.heading), lz = -Math.sin(me.heading);
    const P0 = 1.42, cp = Math.cos(mv.pitch), spn = Math.sin(mv.pitch);
    // the root sits so the shoulders are at the surface; with the lean (about the feet) the body moves forward
    const shoulderUp = P0 * cp, shoulderFwd = P0 * spn;
    const rx = me.x - fx * shoulderFwd * 0.55, rz = me.z - fz * shoulderFwd * 0.55, ry = WATER_Y + 0.05 - shoulderUp;
    const sh = { x: rx + fx * shoulderFwd, y: ry + shoulderUp, z: rz + fz * shoulderFwd };
    for (const [i, s] of [[0, 1], [1, -1]] as const) {
      let f = 0, l = 0, y = 0;
      if (moving) {
        const p = (stroke % 1);   // together in front, out wide, back to the chest
        f = p < 0.4 ? lerp(0.2, 0.62, smooth(0, 0.4, p)) : p < 0.75 ? lerp(0.62, 0.3, smooth(0.4, 0.75, p)) : lerp(0.3, 0.2, smooth(0.75, 1, p));
        l = p < 0.4 ? 0.12 : p < 0.75 ? lerp(0.12, 0.5, smooth(0.4, 0.62, p)) : lerp(0.5, 0.12, smooth(0.75, 1, p));
        y = -0.12;
      } else { const a = stroke * Math.PI * 2 + (i ? Math.PI : 0); f = 0.32 + 0.12 * Math.cos(a); l = 0.36 + 0.12 * Math.sin(a); y = -0.2; }
      hands[i].set(sh.x + fx * f + lx * l * s, WATER_Y + y, sh.z + fz * f + lz * l * s);
      elbows[i].set(lx * s * 0.8, -0.5, lz * s * 0.8);
      const kick = Math.sin(stroke * Math.PI * 2 + (i ? Math.PI : 0));
      feet[i].set(rx + lx * 0.16 * s - fx * (moving ? 0.25 : 0), ry + 0.15 + (moving ? 0.12 * kick : 0.08 * kick), rz + lz * 0.16 * s - fz * (moving ? 0.25 : 0));
      knees[i].set(fx + lx * s * 0.3, -0.2, fz + lz * s * 0.3);
    }
    swimRoot = { x: rx, y: ry, z: rz };
    rig({ clip: 'Jump_Loop', at: 0.4, fade: 0.2, free: true, hands: [hands[0], hands[1]], handW: [1, 1], elbows: [elbows[0], elbows[1]], feet: [feet[0], feet[1]], footW: [0.6, 0.6], knees: [knees[0], knees[1]] });
  };
  let swimRoot: { x: number; y: number; z: number } | null = null;

  // ── into the canal off the towpath: up and out over the water, down into it ──
  let D0 = { x: 0, z: 0, y: 0 }, D1 = { x: 0, z: 0 };
  const tickDive = (dt: number) => {
    t += dt; const D = 0.62, u = Math.min(1, t / D);
    me.x = lerp(D0.x, D1.x, u); me.z = lerp(D0.z, D1.z, u);
    me.gy = u < 0.35 ? D0.y + 0.5 * Math.sin(Math.PI / 2 * u / 0.35) : lerp(D0.y + 0.5, WATER_Y - 0.1, ((u - 0.35) / 0.65) ** 2); me.y = 0;
    mv.pitch = 0.15 * Math.sin(Math.PI * u);
    if (phase === 'in') { wr.play('Jump_Loop', 0.1); phase = 'air'; }
    if (u >= 1 || me.gy <= WATER_Y + 0.05) { me.gy = WATER_Y; mode = 'none'; phase = ''; startSwim(false); }
  };

  // ── landings ──
  let lD = 0, lSpeed = 0;
  const landFrom = (drop: number) => {
    counts.lastDrop = +drop.toFixed(2);
    if (drop < PK.roll) return false;
    if (drop >= PK.hard) {
      mode = 'hard'; phase = 'down'; t = 0; counts.landings.hard++; mv.speed = 0; me.crouch = false;
      wr.land(1); o.onLand?.('hard', drop); return true;
    }
    if (mv.speed > 2.2) { mode = 'roll'; phase = 'roll'; t = 0; lD = 0.66; lSpeed = Math.max(3.4, Math.min(6, mv.speed)); counts.landings.roll++; o.onLand?.('roll', drop); return true; }
    mode = 'heavy'; phase = 'land'; t = 0; counts.landings.heavy++; mv.speed = 0; wr.land(0.8); o.onLand?.('heavy', drop); return true;
  };
  const tickLand = (dt: number) => {
    t += dt;
    if (mode === 'roll') {
      // the roll carries you on: the speed you came in with, easing to a jog
      // (the library's Roll is a dive roll: its dive is skipped, the roll starts where the shoulder meets the ground, 0.4 s
      // in, and runs to where he is back on his feet, 1.05 s)
      const u = Math.min(1, t / lD); mv.speed = lerp(lSpeed, 3.4, u);
      rig({ clip: 'Roll', at: 0.4 + 0.65 * u, fade: 0.06, free: true });
      const x0 = me.x, z0 = me.z; me.x += Math.sin(me.heading) * mv.speed * dt; me.z += Math.cos(me.heading) * mv.speed * dt;
      W.pushOut(me, BODY_R, me.gy); if (Number.isNaN(W.groundAt(me.x, me.z, me.gy))) { me.x = x0; me.z = z0; }
      if (u >= 1) { mode = 'none'; phase = ''; wr.rig(null); }
      return;
    }
    if (mode === 'heavy') {
      rig({ clip: 'NinjaJump_Land', at: Math.min(0.5, 0.05 + t * 0.9), fade: 0.05, free: false });
      if (t > 0.42) { mode = 'none'; phase = ''; wr.rig(null); }
      return;
    }
    // hard: down a long beat, a slow get-up, then winded
    if (phase === 'down') { rig({ clip: 'NinjaJump_Land', at: 0.04, fade: 0.04, free: false }); mv.pitch = 0.12; if (t > 1.3) { phase = 'up'; t = 0; } return; }
    rig({ clip: 'NinjaJump_Land', at: 0.04 + t * 0.62, free: false }); mv.pitch = 0.12 * (1 - t);
    if (t > 1.0) { mode = 'none'; phase = ''; wr.rig(null); winded = PK.windedSecs; mv.pitch = 0; }
  };

  // ── the jump: held for a mantle mid-air, the highest point of a fall ──
  let jumped = false, fallTop = 0;
  const rig = (r: Rig) => wr.rig(r);

  const api = {
    mode: () => mode,
    /** An action owns the body this frame: the game's own walking stays out of it. */
    busy: () => mode !== 'none',
    /** Over open water with nothing to stand on. */
    waterAt,
    inOpen,
    /** Top speed now (winded after a hard landing). */
    speedK: () => (winded > 0 ? PK.windedK : 1),
    winded: () => winded,
    /** Out of the patrol's reach: up a route, swimming, or standing somewhere only a climb gets to (a roof, a fire
     *  escape, a scaffold lift, the mezzanine). Where they would search for you from below. */
    out: (): { x: number; z: number; y: number } | null => {
      if (mode === 'swim') return { x: me.x, z: me.z + (me.z < (open.z0 + open.z1) / 2 ? -2.2 : 2.2), y: P.canal.tow };
      if (mode === 'climb' && C) { if (me.gy - C.y0 < 1.6 && C.kind !== 'canal-ladder') return null; const b = bodyAt(C); return { x: b.x + C.n![0] * 0.8, z: b.z + C.n![1] * 0.8, y: C.kind === 'canal-ladder' ? P.canal.tow : C.y0 }; }
      if (mode === 'mantle' && me.gy > 1.4) return { x: me.x, z: me.z, y: 0 };
      const s = W.surfAt(me.x, me.z, me.gy + 0.05);
      if (s && s.tag && (/^(roof|fire|scaffold|mezz)/.test(s.tag) || (s.tag.startsWith('top:') && me.gy >= 2))) return { x: me.x, z: me.z, y: 0 };
      return null;
    },
    /** Every frame while busy: the action moves the body and poses it. */
    tick: (dt: number, inp: Input) => {
      if (winded > 0) winded = Math.max(0, winded - dt);
      if (mode === 'vault') tickVault(dt);
      else if (mode === 'mantle') tickMantle(dt, inp);
      else if (mode === 'climb') tickClimb(dt, inp);
      else if (mode === 'swim') tickSwim(dt, inp);
      else if (mode === 'roll' || mode === 'heavy' || mode === 'hard') tickLand(dt);
      else if (mode === 'dive') tickDive(dt);
    },
    /** Where the swimmer's body (the root) goes: shoulders at the surface. */
    swimRoot: () => (mode === 'swim' ? swimRoot : null),
    /** Running at something low: vault it (called before the game moves the writer). */
    tryVault: () => {
      if (mode !== 'none' || me.airborne || me.crouch || mv.speed < PK.vaultSpeed) return false;
      const feet = me.gy + me.y, a = probe(me.x, me.z, feet, me.heading, 0.2 + mv.speed * 0.06);
      const e = canVault(a, feet, false); if (!a || !e) return false;
      startVault(a, e); return true;
    },
    /** Space: a mantle or a vault on purpose at what is in front; a drop ladder overhead; off a route. True: taken. */
    jump: (inp: Input) => {
      if (mode === 'climb' && C && phase === 'on') {
        // off the wall: a push away from it, up a little
        const n = C.n!; letGo(2.8, n); me.vy = 3.4; jumped = false; return true;
      }
      if (mode === 'swim') return true;   // (no jumping out of the water)
      if (mode !== 'none' || me.airborne) return false;
      const feet = me.gy + me.y;
      // at the edge of the towpath facing the water: in you go (a jump out over it, feet first)
      { const fx = me.x + Math.sin(me.heading) * 0.8, fz = me.z + Math.cos(me.heading) * 0.8;
        if (waterAt(fx, fz) && Math.abs(me.gy - P.canal.tow) < 0.3) { mode = 'dive'; phase = 'in'; t = 0; D0 = { x: me.x, z: me.z, y: me.gy }; D1 = { x: me.x + Math.sin(me.heading) * 1.9, z: me.z + Math.cos(me.heading) * 1.9 }; fallTop = me.gy + 0.55; mv.speed = 0; return true; } }
      // a drop ladder hanging over you: jump for its bottom rung
      for (const c of routes()) if (c.kind === 'drop-ladder' && Math.abs(me.gy - c.y0) < 0.6) {
        const b = bodyAt(c); if (Math.hypot(me.x - b.x, me.z - b.z) > 1.0) continue;
        startClimb(c, minY(c), 'jump'); return true;
      }
      const a = probe(me.x, me.z, feet, me.heading, PK.reach);
      const tg = mantleTarget(a, feet), e = canVault(a, feet, true);
      // something low and narrow (a wall, a bin, a railing): over it; deeper or higher: up onto it
      if (a && e && a.depth <= 1.0) { startVault(a, e); return true; }
      if (a && tg) { startMantle(a, tg); return true; }
      if (a && e) { startVault(a, e); return true; }
      if (a && a.h > PK.mantleMax && a.h < PK.mantleMax + 1.2 && a.d < 0.5) { prompt = 'TOO HIGH TO REACH'; tooHighT = 1.2; }
      jumped = true; fallTop = feet; void inp;
      return false;
    },
    /** In the air: a jump that comes up under a ledge catches it (only a jump the player made, never a fall). */
    air: () => {
      if (mode !== 'none' || !me.airborne) return false;
      fallTop = Math.max(fallTop, me.gy + me.y);
      if (!jumped) return false;
      const feet = me.gy + me.y, a = probe(me.x, me.z, feet, me.heading, 0.45);
      if (!a) return false;
      const top = a.top, ground = me.gy;   // me.gy: where they took off
      if (top - feet > PK.mantleMax - 0.05 || top - feet < 0.6) return false;
      const tg = mantleTarget(a, Math.min(ground, feet)); if (!tg) return false;
      startMantle(a, tg); jumped = false; return true;
    },
    /** C: let go of a route; at a route's top, climb down it. True: taken. */
    down: () => {
      if (mode === 'climb' && C && phase === 'on') { letGo(0); return true; }
      if (mode !== 'none' || me.airborne) return false;
      const r = routeHere(true); if (!r) return false;
      startClimb(r.c, maxY(r.c), 'top'); return true;
    },
    /** W into a route at its foot (or a lift, or from the water at a canal ladder): get on. */
    grab: () => {
      if ((mode !== 'none' && mode !== 'swim') || me.airborne) return false;
      if (mode === 'none' && mv.speed > 2.4) return false;   // running at it bumps: stop, then climb (no grabs at a sprint)
      const r = routeHere(false); if (!r) return false;
      if (r.c.kind === 'drop-ladder') return false;          // out of reach: jump for it
      if (r.c.kind === 'canal-ladder' && mode !== 'swim') return false;
      startClimb(r.c, r.y, mode === 'swim' ? 'water' : 'foot'); return true;
    },
    /** A landing from a fall: roll, heavy or hard (true: the landing is taken over). */
    land: () => { const drop = fallTop - (me.gy + me.y); jumped = false; const r = landFrom(drop); fallTop = me.gy; return r; },
    /** The airborne writer just reached the water: swim. */
    splash: () => { counts.lastDrop = +(fallTop - WATER_Y).toFixed(2); jumped = false; startSwim(false); },
    /** Walking down the water steps into deep water. */
    wade: () => { if (mode === 'none') startSwim(true); },
    /** Taking off from the ground (a jump or walking off an edge). */
    takeoff: (byJump: boolean) => { jumped = byJump; fallTop = me.gy + me.y; },
    /** What the writer could do here now, as the prompt line (keycaps in [ ]). */
    look: (inp: Input) => {
      if (tooHighT > 0) return prompt;
      if (mode === 'climb' && C) {
        const c = C, s = (c.stops || []).find((q) => Math.abs(cy - q.y) < 0.22);
        if (s) return '[A] [D] STEP OFF · [W] [S] CLIMB';
        if (cy >= maxY(c) - 0.01) return c.top ? '[W] OVER THE TOP · [S] DOWN' : 'NO WAY OVER · [S] DOWN';
        if (cy <= minY(c) + 0.01) return c.kind === 'drop-ladder' ? '[W] UP · [S] DROP' : c.kind === 'canal-ladder' ? '[W] OUT OF THE WATER · [S] BACK IN' : '[W] UP · [S] OFF';
        return '[W] [S] CLIMB · [SHIFT] FASTER · [SPACE] JUMP OFF · [C] LET GO';
      }
      if (mode === 'swim') { const r = routeHere(false); return r && r.c.kind === 'canal-ladder' ? '[W] UP THE LADDER' : 'SWIMMING · OUT AT THE WATER STEPS OR A LADDER'; }
      if (mode !== 'none' || me.airborne) return '';
      const feet = me.gy + me.y;
      const top = routeHere(true); if (top) return `[C] CLIMB DOWN THE ${(top.c.name || top.c.kind).toUpperCase()}`;
      const r = routeHere(false);
      if (r) return r.c.kind === 'drop-ladder' ? '[SPACE] JUMP FOR THE FIRE ESCAPE LADDER' : `[W] CLIMB THE ${(r.c.name || r.c.kind).toUpperCase()}`;
      const a = probe(me.x, me.z, feet, me.heading, PK.reach);
      if (a && a.d < 0.6) {
        const tg = mantleTarget(a, feet);
        if (tg) return tg.over ? '[SPACE] OVER IT' : tg.h > PK.stepMax ? '[SPACE] GRAB THE LEDGE' : '[SPACE] UP ONTO IT';
        if (canVault(a, feet, true)) return '[SPACE] OVER (A DROP BEHIND)';
        if (a.h > PK.mantleMax && a.h < PK.mantleMax + 1.0) return 'TOO HIGH TO REACH';
      }
      if (inOpen(me.x + Math.sin(me.heading) * 0.8, me.z + Math.cos(me.heading) * 0.8) && waterAt(me.x + Math.sin(me.heading) * 0.8, me.z + Math.cos(me.heading) * 0.8) && Math.abs(me.gy - P.canal.tow) < 0.2) return '[SPACE] JUMP IN (THE PHONE WILL NOT SURVIVE)';
      void inp; return '';
    },
    /** Stop whatever is going on (busted, put somewhere, the game stopped). */
    reset: () => { if (mode !== 'none') { mode = 'none'; phase = ''; C = null; wr.rig(null); o.carry(true); mv.pitch = 0; mv.roll = 0; } winded = 0; jumped = false; fallTop = me.gy; },
    /** Put the writer on a route (tests and agents): at its foot, or at a height up it. */
    climb: (id: string, y?: number) => {
      const c = routes().find((q) => q.id === id); if (!c) return false;
      api.reset(); const b = bodyAt(c); me.x = b.x; me.z = b.z; me.gy = y ?? minY(c); me.y = 0; me.airborne = false; mv.speed = 0;
      startClimb(c, Math.max(minY(c), Math.min(maxY(c), y ?? minY(c))), 'foot'); cIn = 1; return true;
    },
    /** Into the water here (tests and agents). */
    swim: () => { api.reset(); startSwim(false); },
    /** Everything for the API. */
    state: (): PkState => ({ mode, phase, route: C ? C.id || '' : '', routeKind: C ? C.kind : '', height: +(me.gy + me.y).toFixed(2), top: C ? +maxY(C).toFixed(2) : 0, swimming: mode === 'swim', winded: +winded.toFixed(2),
      unreachable: !!api.out(), prompt: api.look({ up: false, down: false, left: false, right: false, ax: 0, az: 0, sprint: false, camYaw: 0 }), vaults: counts.vaults, mantles: counts.mantles, climbs: counts.climbs, landings: { ...counts.landings }, lastDrop: counts.lastDrop }),
    /** The climbable routes and the heavens, for the maps and the API. */
    routes: () => routes(),
    /** Tick the "too high" note down. */
    tickNote: (dt: number) => { if (tooHighT > 0) tooHighT -= dt; },
    route: () => C,
    climbY: () => cy,
    /** (tests) what is ahead now, and whether a vault or a mantle would go */
    debug: () => { const feet = me.gy + me.y, a = probe(me.x, me.z, feet, me.heading, 0.9); return a ? { d: +a.d.toFixed(2), h: +a.h.toFixed(2), top: +a.top.toFixed(2), depth: a.depth, n: [a.nx, a.nz], tag: a.b.tag, vault: canVault(a, feet, false), vaultOnPurpose: canVault(a, feet, true), mantle: mantleTarget(a, feet), speed: mv.speed } : null; },
  };
  let tooHighT = 0;
  return api;
}
export type Parkour = ReturnType<typeof makeParkour>;
