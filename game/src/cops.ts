/**
 * The law. Painting is risky: HEAT builds while you spray (slowly from the hiss alone, fast if you are seen) and cools
 * when you stop. A patrol car (./car.ts) drives down the street and back on a loop, every so often, its headlamps and a
 * searchlight sweeping the walls. Seen painting, or seen with the heat up, and it stops: siren, strobes, and two
 * officers get out and run you down. Break their line of sight and get far enough away for a few seconds and they lose
 * you; they search where they last saw you, then give up and walk back (ESCAPED). If one gets within a metre: BUSTED.
 *
 *   const law = await makeLaw({ scene, high, base, blockers, bounds, sound })
 *   const ev = law.update(dt, t, { x, z, y, crouch, painting, spraying })   // '' | 'alert' | 'busted' | 'escaped'
 *
 * The officers are the writer's own body on the same skeleton (./writer.ts), in dark uniform with a helmet and a
 * smoked visor: like the writer, no faces, ever.
 */
import * as THREE from 'three';
import type { Blocker } from './city';
import { makeCar, CAR } from './car';
import { loadWriter, type Writer } from './writer';

export type Chase = 'off' | 'calm' | 'alerted' | 'chase' | 'searching' | 'busted';
export type Suspect = { x: number; z: number; y: number; crouch: boolean; painting: boolean; spraying: boolean };
export type LawEvent = '' | 'alert' | 'busted' | 'escaped';
export type LawState = {
  on: boolean; heat: number; chase: Chase; seen: boolean;
  car: { x: number; z: number; heading: number; onStreet: boolean; speed: number };
  cops: { x: number; z: number; anim: string; out: boolean; doing: string }[];
};
export type Law = {
  update: (dt: number, t: number, me: Suspect) => LawEvent;
  state: () => LawState;
  /** Patrol on or off (off: the car leaves, the heat goes, nobody comes). */
  setOn: (on: boolean) => void;
  /** After a bust: everyone back in the car, the car drives on, the heat is gone. */
  reset: () => void;
  /** Push a body (radius r) out of the car. */
  pushOut: (p: { x: number; z: number }, r: number) => void;
  /** The officer nearest the writer (for the bust camera). */
  nearest: () => { x: number; z: number } | null;
  dispose: () => void;
};

// the loop: down the right lane, a U-turn short of the hall of fame, back up the left lane and away
const LANE = 4.2, ZN = 46, ZS = -66, ARC = Math.PI * LANE, RUN = ZN - ZS, LOOP = RUN * 2 + ARC;
const pathAt = (s: number) => {
  if (s < RUN) return { x: LANE, z: ZN - s, h: Math.PI };
  if (s < RUN + ARC) { const a = (s - RUN) / LANE; return { x: LANE * Math.cos(a), z: ZS - LANE * Math.sin(a), h: Math.atan2(-Math.sin(a), -Math.cos(a)) }; }
  return { x: -LANE, z: ZS + (s - RUN - ARC), h: 0 };
};
const ang = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

// officers: a little slower than the writer's sprint, and they tire
const RUN_SPEED = 5.5, JOG_SPEED = 3.4, WALK_SPEED = 1.6, BUST_R = 1.0, SIGHT = 22;

type Cop = { w: Writer; helmet: THREE.Group; head: THREE.Object3D; x: number; z: number; h: number; out: boolean; doing: 'in' | 'run' | 'search' | 'return' | 'bust';
  wind: number; tired: number; side: number; goal: THREE.Vector2; look: number; door: number };

export async function makeLaw(o: { scene: THREE.Scene; high: boolean; base: string; blockers: Blocker[]; groundY: (x: number, z: number) => number; bounds: { x: number; z0: number; z1: number }; sound: () => { ctx: AudioContext; out: AudioNode } | null }): Promise<Law> {
  const { scene, high, blockers, bounds } = o;
  const car = makeCar(high);
  scene.add(car.group, car.search, car.search.target, car.beam);

  // uniforms: one set of materials shared by both officers (dark, technical; reflective bands where the writer has trim)
  const mats = {
    Hoodie: new THREE.MeshPhysicalMaterial({ color: '#1a1b1f', roughness: 0.62, metalness: 0.05, sheen: 0.35, sheenRoughness: 0.5, sheenColor: new THREE.Color('#5a5b62') }),
    Trousers: new THREE.MeshStandardMaterial({ color: '#16171a', roughness: 0.78, metalness: 0 }),
    Gloves: new THREE.MeshStandardMaterial({ color: '#0b0b0c', roughness: 0.5, metalness: 0 }),
    Trim: new THREE.MeshStandardMaterial({ color: '#d4d5d8', roughness: 0.3, metalness: 0.2, emissive: '#3a3a3a' }),
    Shoes: new THREE.MeshStandardMaterial({ color: '#0e0e10', roughness: 0.35, metalness: 0.1 }),
    Sole: new THREE.MeshStandardMaterial({ color: '#1c1c1f', roughness: 0.7, metalness: 0 }),
    Mask: new THREE.MeshBasicMaterial({ color: '#000000' }),
  };
  const look = Object.fromEntries(Object.entries(mats).map(([k, m]) => [k, () => m])) as Record<string, () => THREE.Material>;
  // the helmet: a gloss shell and a smoked visor that wraps the front (nothing of a face shows)
  const shellG = new THREE.SphereGeometry(0.155, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.56);
  const visorG = new THREE.SphereGeometry(0.162, 28, 10, -Math.PI * 0.42, Math.PI * 0.84, Math.PI * 0.3, Math.PI * 0.36);
  const shellM = new THREE.MeshPhysicalMaterial({ color: '#0c0c0e', roughness: 0.22, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 });
  const visorM = new THREE.MeshPhysicalMaterial({ color: '#020203', roughness: 0.03, metalness: 0.85, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 2 });

  const cops: Cop[] = [];
  for (let i = 0; i < 2; i++) {
    const w = await loadWriter(o.base + 'anims/ual.glb', high, o.base + 'models/writer.glb', look);
    let head: THREE.Object3D = w.root;
    // no cans, no backpack, no hood (the helmet sits where it was): just the uniform
    w.root.traverse((m) => { if (/Can\d|Cap\d|Pack|strap|String|Hood/i.test(m.name)) m.visible = false; if (/(^|:)Head$/.test(m.name)) head = m; });
    const helmet = new THREE.Group();
    const shell = new THREE.Mesh(shellG, shellM), visor = new THREE.Mesh(visorG, visorM);
    shell.castShadow = high;
    helmet.add(shell, visor);
    w.root.visible = false; helmet.visible = false;
    scene.add(w.root, helmet);
    cops.push({ w, helmet, head, x: 0, z: 0, h: 0, out: false, doing: 'in', wind: 0, tired: 0, side: i ? 1 : -1, goal: new THREE.Vector2(), look: 0, door: i ? 1 : -1 });
  }

  let on = true, heat = 0, chase: Chase = 'calm', seen = false, seenT = 0, lostT = 0, searchT = 0, alertT = 0;
  const lastSeen = new THREE.Vector2();
  const carS = { s: 0, speed: 0, onStreet: false, gap: 6, x: LANE, z: ZN, h: Math.PI };
  let sweep = 0;
  const aimS = new THREE.Vector3();

  // ── geometry helpers ──
  const free = (x: number, z: number, r: number) => {
    if (Math.abs(x) > bounds.x || z < bounds.z0 || z > bounds.z1) return false;
    for (const b of blockers) if (x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r) return false;
    return !inCar(x, z, r);
  };
  const inCar = (x: number, z: number, r: number) => {
    if (!carS.onStreet) return false;
    const dx = x - carS.x, dz = z - carS.z, s = Math.sin(carS.h), c = Math.cos(carS.h);
    const along = dx * s + dz * c, across = dx * c - dz * s;
    return Math.abs(along) < CAR.len / 2 + r && Math.abs(across) < CAR.wid / 2 + r;
  };
  const pushOut = (p: { x: number; z: number }, r: number) => {
    if (!inCar(p.x, p.z, r)) return;
    const s = Math.sin(carS.h), c = Math.cos(carS.h), dx = p.x - carS.x, dz = p.z - carS.z;
    let along = dx * s + dz * c, across = dx * c - dz * s;
    const ea = CAR.len / 2 + r - Math.abs(along), ec = CAR.wid / 2 + r - Math.abs(across);
    if (ea < ec) along = Math.sign(along || 1) * (CAR.len / 2 + r); else across = Math.sign(across || 1) * (CAR.wid / 2 + r);
    p.x = carS.x + along * s + across * c; p.z = carS.z + along * c - across * s;
  };
  const pushBlockers = (p: { x: number; z: number }, r: number) => {
    for (const b of blockers) {
      const x0 = b.x0 - r, x1 = b.x1 + r, z0 = b.z0 - r, z1 = b.z1 + r;
      if (p.x > x0 && p.x < x1 && p.z > z0 && p.z < z1) {
        const d = [p.x - x0, x1 - p.x, p.z - z0, z1 - p.z], m = Math.min(...d);
        if (m === d[0]) p.x = x0; else if (m === d[1]) p.x = x1; else if (m === d[2]) p.z = z0; else p.z = z1;
      }
    }
    p.x = Math.max(-bounds.x, Math.min(bounds.x, p.x)); p.z = Math.max(bounds.z0, Math.min(bounds.z1, p.z));
    pushOut(p, r);
  };
  // line of sight at street level: does the segment cross a pier or the wall?
  const clear = (ax: number, az: number, bx: number, bz: number, crouch = false) => {
    const dx = bx - ax, dz = bz - az;
    for (const b of blockers) {
      if (b.low && !crouch) continue; // you can be seen over a car or a barrier, unless you get down behind it
      let t0 = 0, t1 = 1;
      for (const [p, d, lo, hi] of [[ax, dx, b.x0, b.x1], [az, dz, b.z0, b.z1]]) {
        if (Math.abs(d) < 1e-6) { if (p < lo || p > hi) { t0 = 2; break; } continue; }
        let ta = (lo - p) / d, tb = (hi - p) / d; if (ta > tb) [ta, tb] = [tb, ta];
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb); if (t0 > t1) break;
      }
      if (t0 <= t1) return false;
    }
    return true;
  };
  const sees = (ox: number, oz: number, h: number, half: number, range: number, me: Suspect) => {
    const dx = me.x - ox, dz = me.z - oz, d = Math.hypot(dx, dz);
    if (d > range || d < 0.01) return d < 0.01;
    if (Math.abs(ang(Math.atan2(dx, dz) - h)) > half) return false;
    return clear(ox, oz, me.x, me.z, me.crouch);
  };

  // ── sound: a siren made from oscillators (nothing to download); a whoop on alert, a wail while they hunt ──
  let snd: { ctx: AudioContext; f: AudioParam[]; depth: GainNode; gain: GainNode } | null = null, level = 0;
  const audio = () => {
    if (snd) return snd;
    const bus = o.sound(); if (!bus) return null;
    try {
      const ctx = bus.ctx, a = ctx.createOscillator(), b = ctx.createOscillator(), lp = ctx.createBiquadFilter(), gain = ctx.createGain(), lfo = ctx.createOscillator(), depth = ctx.createGain(), mix = ctx.createGain();
      a.type = 'sawtooth'; b.type = 'square'; b.detune.value = 12; mix.gain.value = 0.5;
      lp.type = 'lowpass'; lp.frequency.value = 2400; lp.Q.value = 0.8;
      // the wail: a slow triangle swinging both oscillators' pitch (depth 0 holds it still for the whoop)
      lfo.type = 'triangle'; lfo.frequency.value = 0.32; depth.gain.value = 0; lfo.connect(depth); depth.connect(a.frequency); depth.connect(b.frequency);
      a.connect(lp); b.connect(mix).connect(lp); gain.gain.value = 0; lp.connect(gain).connect(bus.out);
      a.start(); b.start(); lfo.start();
      snd = { ctx, f: [a.frequency, b.frequency], depth, gain };
    } catch { snd = null; }
    return snd;
  };
  const whoop = () => {
    const a = audio(); if (!a) return; void a.ctx.resume();
    const t0 = a.ctx.currentTime;
    a.depth.gain.cancelScheduledValues(t0); a.depth.gain.setValueAtTime(0, t0); a.depth.gain.setValueAtTime(380, t0 + 1.3);
    for (const p of a.f) { p.cancelScheduledValues(t0); p.setValueAtTime(380, t0); p.linearRampToValueAtTime(1350, t0 + 0.42); p.linearRampToValueAtTime(420, t0 + 0.62); p.linearRampToValueAtTime(1350, t0 + 1.02); p.linearRampToValueAtTime(900, t0 + 1.3); }
    a.gain.gain.cancelScheduledValues(t0); a.gain.gain.setValueAtTime(0, t0); a.gain.gain.linearRampToValueAtTime(0.09, t0 + 0.05); level = 0.09;
  };
  const wail = (v: number) => { if (snd && Math.abs(v - level) > 0.004) { level = v; snd.gain.gain.setTargetAtTime(v, snd.ctx.currentTime, 0.25); } };

  // ── officers ──
  const spawn = () => {
    const s = Math.sin(carS.h), c = Math.cos(carS.h);
    for (const cp of cops) {
      cp.x = carS.x + c * cp.door * 1.35 + s * (cp.door < 0 ? 0.6 : -0.2); cp.z = carS.z - s * cp.door * 1.35 + c * (cp.door < 0 ? 0.6 : -0.2);
      cp.h = carS.h + cp.door * Math.PI / 2; cp.out = true; cp.doing = 'run'; cp.wind = 0; cp.tired = 0;
      cp.w.root.visible = cp.helmet.visible = true; cp.w.play('Idle_Loop', 0);
    }
  };
  const stow = () => { for (const cp of cops) { cp.out = false; cp.doing = 'in'; cp.w.root.visible = cp.helmet.visible = false; } };
  const tmp = { x: 0, z: 0 };
  // walk toward a goal, turning round piers and the car: try the straight line, then fan out to the side that worked last
  const steer = (cp: Cop, gx: number, gz: number, speed: number, dt: number) => {
    const dx = gx - cp.x, dz = gz - cp.z, d = Math.hypot(dx, dz);
    if (d < 0.15) return false;
    let a = Math.atan2(dx, dz), ok = false;
    const probe = Math.min(1.3, d);
    for (const off of [0, 0.35, 0.7, 1.05, 1.4, 1.75, 2.1]) {
      for (const sgn of off ? [cp.side, -cp.side] : [1]) {
        const aa = a + off * sgn;
        if (free(cp.x + Math.sin(aa) * probe, cp.z + Math.cos(aa) * probe, 0.35)) { a = aa; ok = true; if (off) cp.side = sgn; break; }
      }
      if (ok) break;
    }
    const step = Math.min(d, speed * dt);
    tmp.x = cp.x + Math.sin(a) * step; tmp.z = cp.z + Math.cos(a) * step;
    pushBlockers(tmp, 0.35);
    cp.x = tmp.x; cp.z = tmp.z;
    cp.h += ang(a - cp.h) * Math.min(1, dt * 10);
    return true;
  };
  const helmetAt = (cp: Cop) => {
    cp.w.root.updateMatrixWorld(true);
    const m = cp.head.matrixWorld, p = new THREE.Vector3().setFromMatrixPosition(m), q = new THREE.Quaternion();
    m.decompose(new THREE.Vector3(), q, new THREE.Vector3());
    cp.helmet.position.copy(p).add(new THREE.Vector3(0, 0.175, 0.045).applyQuaternion(q));
    cp.helmet.quaternion.copy(q);
  };

  const update = (dt: number, t: number, me: Suspect): LawEvent => {
    let ev: LawEvent = '';
    // ── the car: drive the loop, brake for anyone in the lane, stop when alerted ──
    if (!on) { carS.onStreet = false; }
    else if (!carS.onStreet && chase === 'calm') {
      carS.gap -= dt;
      if (carS.gap <= 0 || heat >= 1) { carS.onStreet = true; carS.s = 0; carS.speed = 7; }
    }
    const pursuing = chase === 'alerted' || chase === 'chase' || chase === 'searching' || chase === 'busted';
    if (carS.onStreet) {
      let want = pursuing ? 0 : heat > 0.5 ? 5 : 7.5;
      const p = pathAt(carS.s), fx = Math.sin(p.h), fz = Math.cos(p.h);
      // a body in front of the bumper: stop for it
      const ax = me.x - p.x, az = me.z - p.z, ahead = ax * fx + az * fz, across = Math.abs(ax * fz - az * fx);
      if (ahead > 0 && ahead < 8 && across < 1.7) want = 0;
      if (cops.some((cp) => cp.out)) want = 0; // wait for the officers to get back in
      carS.speed += Math.max(-9 * dt, Math.min(4 * dt, want - carS.speed));
      carS.s += carS.speed * dt;
      if (carS.s >= LOOP) { carS.onStreet = false; carS.gap = 9 + Math.random() * 10; }
      const q = pathAt(Math.min(carS.s, LOOP - 0.01));
      carS.x = q.x; carS.z = q.z; carS.h = q.h;
    }
    car.group.visible = carS.onStreet;
    car.group.position.set(carS.x, 0, carS.z); car.group.rotation.y = carS.h;
    car.group.updateMatrixWorld(true);

    // the searchlight: sweeps the walls while it patrols, holds on the last place it saw you while they hunt
    const mount = car.searchMount.clone().applyMatrix4(car.group.matrixWorld);
    car.search.position.copy(mount);
    if (pursuing) aimS.lerp(new THREE.Vector3(lastSeen.x, 0.9, lastSeen.y), Math.min(1, dt * 3));
    else {
      sweep += dt * 0.5;
      const rel = Math.sin(sweep) * 1.45, a = carS.h + rel;
      aimS.set(mount.x + Math.sin(a) * 24, 1.2, mount.z + Math.cos(a) * 24);
    }
    car.search.target.position.copy(aimS); car.search.target.updateMatrixWorld();
    car.search.intensity = carS.onStreet ? 650 : 0; // bright enough to pick the writer out, not so bright that fresh white paint whites out the screen

    // ── who sees the writer ──
    const lit = carS.onStreet && (() => {
      const dx = me.x - mount.x, dz = me.z - mount.z, dy = me.y + 1 - mount.y, d = Math.hypot(dx, dy, dz);
      const bx = aimS.x - mount.x, by = aimS.y - mount.y, bz = aimS.z - mount.z, bl = Math.hypot(bx, by, bz);
      return d < 48 && (dx * bx + dy * by + dz * bz) / (d * bl) > Math.cos(0.17) && clear(mount.x, mount.z, me.x, me.z, me.crouch);
    })();
    const fromCar = carS.onStreet && (lit || sees(carS.x + Math.sin(carS.h) * 2.4, carS.z + Math.cos(carS.h) * 2.4, carS.h, 0.62, me.crouch ? 14 : 26, me));
    let fromCops = false;
    for (const cp of cops) if (cp.out && sees(cp.x, cp.z, cp.h, cp.doing === 'search' ? 1.6 : 1.3, me.crouch ? SIGHT * 0.55 : SIGHT, me)) fromCops = true;
    seen = !!(fromCar || fromCops);

    // ── heat: the hiss alone warms it, being seen at it makes it boil; it cools when you stop and nobody looks ──
    const paintSeen = seen && (me.spraying || me.painting);
    if (!on) heat = 0;
    else if (pursuing) heat = Math.min(1, heat + dt);
    else if (me.spraying) heat = Math.min(1, heat + dt * (seen ? 0.8 : 0.03));
    else if (paintSeen) heat = Math.min(1, heat + dt * 0.3);
    else heat = Math.max(0, heat - dt * 0.05);

    // ── the chase ──
    if (on && chase === 'calm' && carS.onStreet) {
      const guilty = me.spraying || me.painting || heat >= 0.6;
      seenT = seen && guilty ? seenT + dt : 0;
      const heard = heat >= 1 && Math.hypot(me.x - carS.x, me.z - carS.z) < 45;
      if (seenT > 0.3 || heard) { chase = 'alerted'; alertT = 0; lastSeen.set(me.x, me.z); ev = 'alert'; whoop(); }
    }
    if (chase === 'alerted') {
      alertT += dt; if (seen) lastSeen.set(me.x, me.z);
      if (alertT > 0.9 && carS.speed < 0.5) { spawn(); chase = 'chase'; lostT = 0; }
    }
    if (chase === 'chase' || chase === 'searching') {
      if (seen) { lastSeen.set(me.x, me.z); lostT = 0; if (chase === 'searching') { chase = 'chase'; for (const cp of cops) cp.doing = 'run'; } }
      else lostT += dt;
      const near = Math.min(...cops.map((cp) => Math.hypot(cp.x - me.x, cp.z - me.z)));
      if (chase === 'chase' && lostT > 3 && near > 9) {
        chase = 'searching'; searchT = 0;
        cops.forEach((cp, i) => { cp.doing = 'search'; cp.goal.set(lastSeen.x + (i ? 1.6 : -1.6), lastSeen.y + (i ? -1 : 1)); cp.look = 0; });
      }
      if (chase === 'searching' && (searchT += dt) > 13) { chase = 'calm'; heat = 0.3; ev = 'escaped'; for (const cp of cops) cp.doing = 'return'; }
    }
    // officers: run at the writer, search, or walk back to the car and get in
    for (const cp of cops) {
      if (!cp.out) continue;
      if (cp.doing === 'run') {
        // they can't sprint for ever: a few seconds at a jog to get their wind back
        cp.wind += dt; if (cp.tired > 0) cp.tired -= dt; else if (cp.wind > 8) { cp.tired = 2.6; cp.wind = 0; }
        const tx = seen ? me.x : lastSeen.x, tz = seen ? me.z : lastSeen.y;
        const moved = steer(cp, tx, tz, cp.tired > 0 ? JOG_SPEED : RUN_SPEED, dt);
        cp.w.play(moved ? (cp.tired > 0 ? 'Jog_Fwd_Loop' : 'Sprint_Loop') : 'Idle_Loop', 0.2);
        if (Math.hypot(cp.x - me.x, cp.z - me.z) < BUST_R && me.y < 0.6 && chase === 'chase') {
          chase = 'busted'; ev = 'busted'; cp.doing = 'bust';
          cp.h = Math.atan2(me.x - cp.x, me.z - cp.z); cp.w.play('Punch_Jab', 0.1, true);
          for (const o2 of cops) if (o2 !== cp) { o2.doing = 'bust'; o2.w.play('Idle_Loop', 0.3); }
        }
      } else if (cp.doing === 'search') {
        if (!steer(cp, cp.goal.x, cp.goal.y, JOG_SPEED, dt)) {
          // at the spot: stand and look round, then try somewhere close by
          cp.look += dt; cp.h += Math.sin(t * 1.3 + cp.door) * dt * 1.4; cp.w.play('Idle_Loop', 0.3);
          if (cp.look > 3) { cp.look = 0; cp.goal.set(lastSeen.x + (Math.random() - 0.5) * 12, lastSeen.y + (Math.random() - 0.5) * 12); }
        } else cp.w.play('Jog_Fwd_Loop', 0.25);
      } else if (cp.doing === 'return') {
        // the nearer door: walking round the car to their own side, they could get stuck against it
        const s = Math.sin(carS.h), c = Math.cos(carS.h), side = Math.sign((cp.x - carS.x) * c - (cp.z - carS.z) * s) || cp.door;
        const dx = carS.x + c * side * 1.4, dz = carS.z - s * side * 1.4;
        if (!steer(cp, dx, dz, WALK_SPEED * 1.4, dt) || Math.hypot(cp.x - dx, cp.z - dz) < 0.5) { cp.out = false; cp.doing = 'in'; cp.w.root.visible = cp.helmet.visible = false; }
        else cp.w.play('Walk_Loop', 0.3);
        // seen at it again on the way back: back on
        if (seen && heat >= 0.6 && chase === 'calm') { chase = 'chase'; lostT = 0; lastSeen.set(me.x, me.z); for (const o2 of cops) if (o2.out) o2.doing = 'run'; ev = 'alert'; whoop(); }
      }
    }
    // keep them apart, out of the piers and the car
    if (cops[0].out && cops[1].out) {
      const dx = cops[1].x - cops[0].x, dz = cops[1].z - cops[0].z, d = Math.hypot(dx, dz);
      if (d < 0.8 && d > 1e-4) { const k = (0.8 - d) / 2 / d; cops[0].x -= dx * k; cops[0].z -= dz * k; cops[1].x += dx * k; cops[1].z += dz * k; }
    }
    for (const cp of cops) {
      if (!cp.out) continue;
      cp.w.root.position.set(cp.x, o.groundY(cp.x, cp.z), cp.z); cp.w.root.rotation.y = cp.h;
      cp.w.update(dt); helmetAt(cp);
    }

    // lights and siren: strobes from the alert until they are back in the car
    const hunting = chase === 'alerted' || chase === 'chase' || chase === 'searching' || chase === 'busted' || cops.some((cp) => cp.out);
    car.update(dt, t, { speed: carS.speed, strobe: hunting && carS.onStreet, lights: carS.onStreet, brake: carS.onStreet && carS.speed < 1.5 });
    const dCar = Math.hypot(me.x - carS.x, me.z - carS.z);
    wail(chase === 'alerted' ? 0.09 : chase === 'chase' || chase === 'searching' ? 0.08 / (1 + dCar / 25) : 0);
    return ev;
  };

  return {
    update,
    state: () => ({
      on, heat: +heat.toFixed(3), chase: on ? chase : 'off', seen,
      car: { x: +carS.x.toFixed(2), z: +carS.z.toFixed(2), heading: +carS.h.toFixed(2), onStreet: carS.onStreet, speed: +carS.speed.toFixed(2) },
      cops: cops.map((cp) => ({ x: +cp.x.toFixed(2), z: +cp.z.toFixed(2), anim: cp.out ? cp.w.playing() : '', out: cp.out, doing: cp.doing })),
    }),
    setOn: (v) => {
      on = v; stow(); chase = 'calm'; heat = 0; seenT = 0; wail(0);
      carS.onStreet = false; carS.gap = v ? 1.5 : 0;
    },
    reset: () => { stow(); chase = 'calm'; heat = 0; seenT = 0; wail(0); },
    pushOut,
    nearest: () => { const c = cops.filter((cp) => cp.out); return c.length ? { x: c[0].x, z: c[0].z } : null; },
    dispose: () => {
      for (const cp of cops) { scene.remove(cp.w.root, cp.helmet); cp.w.dispose(); }
      scene.remove(car.group, car.search, car.search.target, car.beam);
      car.dispose(); shellG.dispose(); visorG.dispose(); shellM.dispose(); visorM.dispose();
      Object.values(mats).forEach((m) => m.dispose()); // the sound goes when main.ts closes its AudioContext
    },
  };
}
