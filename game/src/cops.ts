/**
 * The law. Painting is risky: HEAT builds while you spray (slowly from the hiss alone, fast if you are seen) and cools
 * when you stop. A patrol car (./car.ts) comes out of its depot, drives the road loop round the district (plan.ts
 * route) and goes back in, every so often, its headlamps and a searchlight sweeping the walls. The officers find their
 * way through the lanes, up and down steps and under bridges on the district's map (world.ts makeNav); corners and
 * lanes the car cannot follow are how you get away. Seen painting, or seen with the heat up, and it stops: siren, strobes, and two
 * officers get out and run you down. Break their line of sight and get far enough away for a few seconds and they lose
 * you; they search where they last saw you, then give up and walk back (ESCAPED). If one gets within a metre: BUSTED.
 *
 *   const law = await makeLaw({ scene, high, base, world, nav, route, sound })
 *   const ev = law.update(dt, t, { x, z, y, crouch, painting, spraying })   // '' | 'alert' | 'busted' | 'escaped'
 *
 * The officers are the writer's own body on the same skeleton (./writer.ts), in dark uniform with a helmet and a
 * smoked visor: like the writer, no faces, ever.
 */
import * as THREE from 'three';
import { makeCar, CAR } from './car';
import type { World, makeNav } from './world';
import { loadWriter, type Writer } from './writer';

export type Chase = 'off' | 'calm' | 'alerted' | 'chase' | 'searching' | 'busted';
export type Suspect = { x: number; z: number; y: number; gy?: number; crouch: boolean; painting: boolean; spraying: boolean; torch?: boolean; vx?: number; vz?: number };
export type LawEvent = '' | 'alert' | 'busted' | 'escaped';
export type LawState = {
  on: boolean; heat: number; chase: Chase; seen: boolean;
  car: { x: number; z: number; heading: number; onStreet: boolean; speed: number;
    /** The searchlight on the ground: from the lamp (x0 z0) to where it points (x1 z1), lit while the car is out. */
    search: { x0: number; z0: number; x1: number; z1: number; on: boolean } };
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
  /** Call the law on the writer now (a test of an escape, or an agent's): the car pulls up where its loop passes
   *  nearest them and the officers get out and give chase. */
  alarm: (me: { x: number; z: number; gy?: number }) => void;
  /** The officer nearest the writer (for the bust camera). */
  nearest: () => { x: number; z: number } | null;
  dispose: () => void;
};

/** The car's way round: the route's corners rounded (radius 5), sampled; pathAt(s) at s metres along. */
function routeOf(pts: [number, number][], rad = 5) {
  const out: { x: number; z: number }[] = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    if (i === 0 || i === pts.length - 1) { out.push({ x: p[0], z: p[1] }); continue; }
    const a = pts[i - 1], b = pts[i + 1];
    const d1x = p[0] - a[0], d1z = p[1] - a[1], l1 = Math.hypot(d1x, d1z), d2x = b[0] - p[0], d2z = b[1] - p[1], l2 = Math.hypot(d2x, d2z);
    const r = Math.min(rad, l1 / 2, l2 / 2), s = { x: p[0] - (d1x / l1) * r, z: p[1] - (d1z / l1) * r }, e = { x: p[0] + (d2x / l2) * r, z: p[1] + (d2z / l2) * r };
    for (let k = 0; k <= 8; k++) { const t = k / 8, u = 1 - t; out.push({ x: u * u * s.x + 2 * u * t * p[0] + t * t * e.x, z: u * u * s.z + 2 * u * t * p[1] + t * t * e.z }); }
  }
  const S: { x: number; z: number; s: number }[] = [{ ...out[0], s: 0 }];
  for (let i = 1; i < out.length; i++) S.push({ ...out[i], s: S[i - 1].s + Math.hypot(out[i].x - out[i - 1].x, out[i].z - out[i - 1].z) });
  const LOOP = S[S.length - 1].s;
  const pathAt = (s: number) => {
    s = Math.max(0, Math.min(LOOP - 1e-4, s));
    let lo = 0, hi = S.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (S[m].s <= s) lo = m; else hi = m; }
    const a = S[lo], b = S[hi], t = (s - a.s) / Math.max(1e-6, b.s - a.s);
    return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, h: Math.atan2(b.x - a.x, b.z - a.z) };
  };
  return { pathAt, LOOP };
}
const ang = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

// officers: faster than the writer's jog (4.5) so jogging off gets you caught, a good deal slower than the sprint (7.6,
// about 29% faster) so sprinting and turning corners gets away; they take a moment to get going, and they tire.
// The second one runs at where the writer is going (cuts the corner), the first straight at them.
const RUN_SPEED = 5.9, JOG_SPEED = 3.4, WALK_SPEED = 1.6, BUST_R = 1.0, SIGHT = 22, COP_ACCEL = 14, WIND = 6, REST = 2.2, LOSE = 2.5, SEARCH = 9;

type Cop = { w: Writer; helmet: THREE.Group; head: THREE.Object3D; x: number; z: number; y: number; h: number; out: boolean; doing: 'in' | 'run' | 'search' | 'return' | 'bust';
  wind: number; tired: number; side: number; goal: THREE.Vector2; look: number; door: number; v: number;
  /** the way there on the district's map: points, which goal it was made for, when to make it again */
  path: { x: number; z: number; y: number }[]; pi: number; pathFor: THREE.Vector3; replan: number };

export async function makeLaw(o: { scene: THREE.Scene; high: boolean; base: string; world: World; nav: () => ReturnType<typeof makeNav>; route: [number, number][]; sound: () => { ctx: AudioContext; out: AudioNode } | null }): Promise<Law> {
  const { scene, high, world } = o;
  const { pathAt, LOOP } = routeOf(o.route);
  const start = pathAt(0);
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
    cops.push({ w, helmet, head, x: 0, z: 0, y: 0, h: 0, out: false, doing: 'in', wind: 0, tired: 0, side: i ? 1 : -1, goal: new THREE.Vector2(), look: 0, door: i ? 1 : -1, v: 0, path: [], pi: 0, pathFor: new THREE.Vector3(1e9, 0, 0), replan: 0 });
  }

  let on = true, heat = 0, chase: Chase = 'calm', seen = false, seenT = 0, lostT = 0, searchT = 0, alertT = 0;
  const lastSeen = new THREE.Vector2();
  const carS = { s: 0, speed: 0, onStreet: false, gap: 6, x: start.x, z: start.z, h: start.h };
  let meY = 0;   // the writer's ground level, for the officers' map
  let sweep = 0;
  const aimS = new THREE.Vector3();
  const beamAt = { x0: 0, z0: 0, x1: 0, z1: 0 };   // the searchlight's lamp and aim, flat (for the mini-map)

  // ── geometry helpers ──
  const free = (x: number, z: number, r: number, y = 0) => world.free(x, z, r, y) && !Number.isNaN(world.groundAt(x, z, y)) && !inCar(x, z, r);
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
  const pushBlockers = (p: { x: number; z: number }, r: number, y = 0) => { world.pushOut(p, r, y); pushOut(p, r); };
  // line of sight in 3D: eye to the writer's chest (lower when crouched: a car or a low wall hides them then)
  const clear = (ax: number, ay: number, az: number, me: Suspect) => world.clear(ax, ay, az, me.x, (me.gy ?? 0) + me.y + (me.crouch ? 0.7 : 1.25), me.z);
  const sees = (ox: number, oy: number, oz: number, h: number, half: number, range: number, me: Suspect) => {
    const dx = me.x - ox, dz = me.z - oz, d = Math.hypot(dx, dz);
    if (d > range || d < 0.01) return d < 0.01;
    if (Math.abs(ang(Math.atan2(dx, dz) - h)) > half) return false;
    return clear(ox, oy, oz, me);
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
      cp.h = carS.h + cp.door * Math.PI / 2; cp.out = true; cp.doing = 'run'; cp.wind = 0; cp.tired = 0; cp.v = 0; cp.y = 0; cp.path = []; cp.replan = 0;
      const p = { x: cp.x, z: cp.z }; world.pushOut(p, 0.35, 0); cp.x = p.x; cp.z = p.z;
      cp.w.root.visible = cp.helmet.visible = true; cp.w.play('Idle_Loop', 0);
    }
  };
  const stow = () => { for (const cp of cops) { cp.out = false; cp.doing = 'in'; cp.w.root.visible = cp.helmet.visible = false; } };
  const tmp = { x: 0, z: 0 };
  // walk toward a goal: along a way found on the district's map (made again every half second or when the goal moves),
  // steering at a point a couple of metres along it, turning round the car and anyone in the way
  const goalV = new THREE.Vector3();
  const steer = (cp: Cop, gx0: number, gz0: number, speed: number, dt: number, gy = meY) => {
    let gx = gx0, gz = gz0;
    if (Math.hypot(gx0 - cp.x, gz0 - cp.z) < 0.15 && Math.abs(gy - cp.y) < 0.6) return false;
    cp.replan -= dt;
    if (cp.replan <= 0 || cp.pathFor.distanceTo(goalV.set(gx0, gy, gz0)) > 2.5) {
      cp.replan = 0.5 + Math.random() * 0.15; cp.pathFor.set(gx0, gy, gz0);
      const r = o.nav().path(cp.x, cp.z, cp.y, gx0, gz0, gy, 40000);
      cp.path = r ? r.pts : []; cp.pi = 0;
    }
    if (cp.path.length > 1) {
      while (cp.pi < cp.path.length - 1 && Math.hypot(cp.path[cp.pi].x - cp.x, cp.path[cp.pi].z - cp.z) < 1.2) cp.pi++;
      const k = Math.min(cp.path.length - 1, cp.pi + 4);
      gx = cp.path[k].x; gz = cp.path[k].z;
      if (k === cp.path.length - 1) { gx = gx0; gz = gz0; }
    }
    const dx = gx - cp.x, dz = gz - cp.z, d = Math.hypot(dx, dz);
    if (d < 0.15) return false;
    let a = Math.atan2(dx, dz), ok = false;
    const probe = Math.min(1.3, d);
    for (const off of [0, 0.35, 0.7, 1.05, 1.4, 1.75, 2.1]) {
      for (const sgn of off ? [cp.side, -cp.side] : [1]) {
        const aa = a + off * sgn;
        if (free(cp.x + Math.sin(aa) * probe, cp.z + Math.cos(aa) * probe, 0.35, cp.y)) { a = aa; ok = true; if (off) cp.side = sgn; break; }
      }
      if (ok) break;
    }
    const step = Math.min(d, speed * dt);
    tmp.x = cp.x + Math.sin(a) * step; tmp.z = cp.z + Math.cos(a) * step;
    pushBlockers(tmp, 0.35, cp.y);
    const g = world.groundAt(tmp.x, tmp.z, cp.y);
    if (!Number.isNaN(g)) { cp.x = tmp.x; cp.z = tmp.z; cp.y = g; }
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
    let ev: LawEvent = ''; meY = me.gy ?? 0;
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
    car.group.visible = carS.onStreet && carS.x < 88.5;   // inside the depot's door it is out of sight
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
    beamAt.x0 = mount.x; beamAt.z0 = mount.z; beamAt.x1 = aimS.x; beamAt.z1 = aimS.z;
    car.search.intensity = carS.onStreet ? 650 : 0; // bright enough to pick the writer out, not so bright that fresh white paint whites out the screen

    // ── who sees the writer ──
    const lit = carS.onStreet && (() => {
      const dx = me.x - mount.x, dz = me.z - mount.z, dy = me.y + 1 - mount.y, d = Math.hypot(dx, dy, dz);
      const bx = aimS.x - mount.x, by = aimS.y - mount.y, bz = aimS.z - mount.z, bl = Math.hypot(bx, by, bz);
      return d < 48 && (dx * bx + dy * by + dz * bz) / (d * bl) > Math.cos(0.17) && clear(mount.x, mount.y, mount.z, me);
    })();
    const fromCar = carS.onStreet && carS.x < 88.5 && (lit || sees(carS.x + Math.sin(carS.h) * 2.4, 1.2, carS.z + Math.cos(carS.h) * 2.4, carS.h, 0.62, me.torch ? 40 : me.crouch ? 14 : 26, me));
    let fromCops = false;
    for (const cp of cops) if (cp.out && sees(cp.x, cp.y + 1.65, cp.z, cp.h, cp.doing === 'search' ? 1.6 : 1.3, me.torch ? SIGHT * 1.7 : me.crouch ? SIGHT * 0.55 : SIGHT, me)) fromCops = true;   // a lit torch is seen from far, crouched or not
    seen = !!(fromCar || fromCops);

    // ── heat: the hiss alone warms it, being seen at it makes it boil; it cools when you stop and nobody looks ──
    const paintSeen = seen && (me.spraying || me.painting);
    if (!on) heat = 0;
    else if (pursuing) heat = Math.min(1, heat + dt);
    else if (me.spraying) heat = Math.min(1, heat + dt * (seen ? 0.8 : 0.03));
    else if (paintSeen) heat = Math.min(1, heat + dt * 0.3);
    else if (seen && me.torch) heat = Math.min(1, heat + dt * 0.12);   // a torch in the lanes at night draws a look
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
      if (chase === 'chase' && lostT > LOSE && near > 9) {
        chase = 'searching'; searchT = 0;
        cops.forEach((cp, i) => { cp.doing = 'search'; cp.goal.set(lastSeen.x + (i ? 1.6 : -1.6), lastSeen.y + (i ? -1 : 1)); cp.look = 0; });
      }
      if (chase === 'searching' && (searchT += dt) > SEARCH) { chase = 'calm'; heat = 0.3; ev = 'escaped'; for (const cp of cops) cp.doing = 'return'; }
    }
    // officers: run at the writer, search, or walk back to the car and get in
    for (const cp of cops) {
      if (!cp.out) continue;
      if (cp.doing === 'run') {
        // they can't sprint for ever: a few seconds at a jog to get their wind back
        cp.wind += dt; if (cp.tired > 0) cp.tired -= dt; else if (cp.wind > WIND) { cp.tired = REST; cp.wind = 0; }
        let tx = seen ? me.x : lastSeen.x, tz = seen ? me.z : lastSeen.y;
        // the second officer heads where the writer is going (up to 0.7 s ahead), to cut them off at a corner
        if (seen && cp === cops[1]) { const lead = Math.min(0.7, Math.hypot(me.x - cp.x, me.z - cp.z) / RUN_SPEED * 0.5); tx += (me.vx || 0) * lead; tz += (me.vz || 0) * lead; }
        const want = cp.tired > 0 ? JOG_SPEED : RUN_SPEED; cp.v += Math.max(-COP_ACCEL * dt, Math.min(COP_ACCEL * dt, want - cp.v));
        const moved = steer(cp, tx, tz, cp.v, dt);
        cp.w.play(moved ? (cp.tired > 0 ? 'Jog_Fwd_Loop' : 'Sprint_Loop') : 'Idle_Loop', 0.2);
        if (Math.hypot(cp.x - me.x, cp.z - me.z) < BUST_R && me.y < 0.6 && Math.abs(cp.y - meY) < 0.6 && chase === 'chase') {
          chase = 'busted'; ev = 'busted'; cp.doing = 'bust';
          cp.h = Math.atan2(me.x - cp.x, me.z - cp.z); cp.w.play('Punch_Jab', 0.1, true);
          for (const o2 of cops) if (o2 !== cp) { o2.doing = 'bust'; o2.w.play('Idle_Loop', 0.3); }
        }
      } else if (cp.doing === 'search') {
        if (!steer(cp, cp.goal.x, cp.goal.y, JOG_SPEED, dt, cp.y)) {
          // at the spot: stand and look round, then try somewhere close by
          cp.look += dt; cp.h += Math.sin(t * 1.3 + cp.door) * dt * 1.4; cp.w.play('Idle_Loop', 0.3);
          if (cp.look > 3) { cp.look = 0; for (let k = 0; k < 8; k++) { const gx = lastSeen.x + (Math.random() - 0.5) * 12, gz = lastSeen.y + (Math.random() - 0.5) * 12; if (free(gx, gz, 0.35, cp.y)) { cp.goal.set(gx, gz); break; } } }
        } else cp.w.play('Jog_Fwd_Loop', 0.25);
      } else if (cp.doing === 'return') {
        // the nearer door: walking round the car to their own side, they could get stuck against it
        const s = Math.sin(carS.h), c = Math.cos(carS.h), side = Math.sign((cp.x - carS.x) * c - (cp.z - carS.z) * s) || cp.door;
        const dx = carS.x + c * side * 1.4, dz = carS.z - s * side * 1.4;
        if (!steer(cp, dx, dz, WALK_SPEED * 1.4, dt, 0) || Math.hypot(cp.x - dx, cp.z - dz) < 0.9) { cp.out = false; cp.doing = 'in'; cp.w.root.visible = cp.helmet.visible = false; }
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
      cp.w.root.position.set(cp.x, cp.y, cp.z); cp.w.root.rotation.y = cp.h;
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
      car: { x: +carS.x.toFixed(2), z: +carS.z.toFixed(2), heading: +carS.h.toFixed(2), onStreet: carS.onStreet, speed: +carS.speed.toFixed(2),
        search: { x0: +beamAt.x0.toFixed(2), z0: +beamAt.z0.toFixed(2), x1: +beamAt.x1.toFixed(2), z1: +beamAt.z1.toFixed(2), on: carS.onStreet && carS.x < 88.5 } },
      cops: cops.map((cp) => ({ x: +cp.x.toFixed(2), z: +cp.z.toFixed(2), anim: cp.out ? cp.w.playing() : '', out: cp.out, doing: cp.doing })),
    }),
    setOn: (v) => {
      on = v; stow(); chase = 'calm'; heat = 0; seenT = 0; wail(0);
      carS.onStreet = false; carS.gap = v ? 1.5 : 0;
    },
    reset: () => { stow(); chase = 'calm'; heat = 0; seenT = 0; wail(0); },
    pushOut,
    alarm: (me) => {
      if (!on) return;
      let best = 0, bd = 1e9;
      for (let s = 0; s < LOOP; s += 0.5) { const p = pathAt(s), d = Math.hypot(p.x - me.x, p.z - me.z); if (d < bd) { bd = d; best = s; } }
      const p = pathAt(best); Object.assign(carS, { onStreet: true, s: best, speed: 0, x: p.x, z: p.z, h: p.h });
      stow(); chase = 'alerted'; alertT = 0; heat = 1; seenT = 0; lastSeen.set(me.x, me.z); meY = me.gy ?? 0; whoop();
    },
    nearest: () => { const c = cops.filter((cp) => cp.out); return c.length ? { x: c[0].x, z: c[0].z } : null; },
    dispose: () => {
      for (const cp of cops) { scene.remove(cp.w.root, cp.helmet); cp.w.dispose(); }
      scene.remove(car.group, car.search, car.search.target, car.beam);
      car.dispose(); shellG.dispose(); visorG.dispose(); shellM.dispose(); visorM.dispose();
      Object.values(mats).forEach((m) => m.dispose()); // the sound goes when main.ts closes its AudioContext
    },
  };
}
