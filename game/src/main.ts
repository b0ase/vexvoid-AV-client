/**
 * V3XV0ID GAME: the engine behind the mixer's GAME tab. A night city (./city.ts, forked from ESCAPE FROM TERRORNODE)
 * rendered the TERRORNODE way (ACES filmic, soft shadows, GTAO, bloom) and graded black and white.
 *
 *   const g = await VXGAME.mount(host, { base: 'vx/game/', high: true, onStatus })
 *   g.stop();  g.canvas  (to record)
 *
 * Stage 2: the writer, third person (./writer.ts). WASD or arrows move relative to the camera (jog), Shift sprints,
 * C crouches (sneak), Space jumps, drag to look. Stage 3: F at a wall paints it (./spray.ts).
 * Stage 4: the law (./cops.ts): heat, a patrol car, officers on foot; BUSTED loses the piece. P turns the patrol off.
 * Built by scripts/build-game.sh into vx/game/vexvoid-game.js (window.VXGAME).
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { buildCity, EYE } from './city';
import { loadLook, makeGradePass } from './look';
import { loadWriter } from './writer';
import { makeSpray, COLOURS, COLOUR_NAMES, type Can, type WallStore } from './spray';
import { makeLaw, type LawState } from './cops';

export type MountOpts = { base: string; high?: boolean; onStatus?: (s: string) => void; onHud?: (s: string) => void; onRec?: () => void;
  /** Where the walls' paint is kept (default: this browser). */
  store?: WallStore;
  /** What happens to the writer, for a host that keeps a player's history: seen, caught, got away. */
  onEvent?: (ev: 'alert' | 'busted' | 'escaped') => void };
export type Game = { canvas: HTMLCanvasElement; stop: () => void; snap: (width?: number) => string; inspect: (o: { yaw?: number; pitch?: number; dist?: number; heading?: number; anim?: string }) => void; where: () => { x: number; z: number; yaw: number; heading: number; anim: string }; spots: () => { id: string; w: number; h: number; x: number; y: number; z: number }[]; paint: (id: string, pts: [number, number][], o?: { colour?: string; cap?: 1 | 2 | 3; dist?: number }) => void; clearPaint: (id?: string) => void; piece: (id: string) => string; painting: () => string; flush: () => Promise<void>; goto: (x: number, z: number, yaw?: number, pitch?: number) => void; law: () => LawState; cops: (on: boolean) => void; audio: () => { ctx: AudioContext; node: AudioNode } | null };

// VexVoid's grade: no colour at all, hard contrast, a heavy vignette
const MONO = { shadow: [1, 1, 1] as [number, number, number], high: [1, 1, 1] as [number, number, number], sat: 0, contrast: 1.32, vignette: 0.72 };
// where you can walk: the road and both pavements, short of the tower
const BOUNDS = { x: 25.5, z0: -79, z1: 24 };

export async function mount(host: HTMLElement, opts: MountOpts): Promise<Game> {
  const high = opts.high !== false;
  const say = (s: string) => opts.onStatus && opts.onStatus(s);
  say('Building the city…');
  const r = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false });
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, high ? 1.5 : 1));
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.05;
  r.shadowMap.enabled = high;
  r.shadowMap.type = THREE.PCFShadowMap;
  const canvas = r.domElement;
  canvas.style.cssText = 'width:100%;height:100%;display:block;outline:none;cursor:grab';
  canvas.tabIndex = 0;
  host.appendChild(canvas);
  // one line over the picture for what to do next (press F here, hold the mouse, too high): the HUD line is easy to miss
  const tip = document.createElement('div');
  tip.style.cssText = 'position:absolute;left:50%;bottom:9%;transform:translateX(-50%);padding:9px 16px;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.55);color:#fff;font:600 13px/1 ui-monospace,Menlo,monospace;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;pointer-events:none;display:none';
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  host.appendChild(tip);
  let tipNow = '', sprayed = false, follow = 0;
  const prompt = (s: string) => { if (s !== tipNow) { tipNow = s; tip.textContent = s; tip.style.display = s ? 'block' : 'none'; } };

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(62, 16 / 9, 0.05, 900);
  const look = await loadLook(r, opts.base + 'tex/');
  const city = buildCity({ renderer: r, scene, high, look, vexvoid: true });
  scene.add(city.group);
  say('Dressing the writer…');
  const writer = await loadWriter(opts.base + 'anims/ual.glb', high, opts.base + 'models/writer.glb');
  scene.add(writer.root, writer.can);
  const spray = makeSpray(scene, city.spots, opts.store);
  // every sound the game makes goes through one node, so a recorder can tap it (made the first time something needs it)
  let bus: { ctx: AudioContext; out: GainNode } | null = null;
  const sound = () => {
    if (!bus) try { const ctx = new AudioContext(), out = ctx.createGain(); out.connect(ctx.destination); bus = { ctx, out }; } catch { bus = null; }
    return bus;
  };
  say('Calling the law…');
  const law = await makeLaw({ scene, high, base: opts.base, blockers: city.blockers, groundY: city.groundY, bounds: BOUNDS, sound });
  // a soft light that rides with the writer so the hoodie reads against the dark street
  const rim = new THREE.PointLight('#ffffff', 9, 7, 2);
  const back = new THREE.PointLight('#ffffff', 6, 5, 2); // a kicker behind, to edge the hood and shoulders
  scene.add(rim, back);

  const size = () => { const b = host.getBoundingClientRect(); return { w: Math.max(2, Math.round(b.width)), h: Math.max(2, Math.round(b.height)) }; };
  let { w, h } = size();
  r.setSize(w, h, false);
  const comp = new EffectComposer(r);
  comp.addPass(new RenderPass(scene, cam));
  if (high) {
    const ao = new GTAOPass(scene, cam, w, h);
    ao.updateGtaoMaterial({ radius: 1.4, distanceExponent: 1.4, thickness: 1.5, scale: 1.1, samples: 8 });
    // sprites, rain and particles stay out of the occlusion (as in TERRORNODE)
    const aoRender = ao.render.bind(ao);
    const hid: THREE.Object3D[] = [];
    ao.render = (...args: Parameters<GTAOPass['render']>) => {
      scene.traverse((o) => { if (((o as THREE.Sprite).isSprite || (o as THREE.Points).isPoints || (o as THREE.LineSegments).isLineSegments || o.userData.noAO) && o.visible) { o.visible = false; hid.push(o); } });
      aoRender(...args);
      for (const o of hid.splice(0)) o.visible = true;
    };
    comp.addPass(ao);
  }
  const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.42, 0.45, 1.5);
  comp.addPass(bloom);
  comp.addPass(new OutputPass());
  const grade = makeGradePass();
  grade.apply(MONO);
  comp.addPass(grade.pass);

  // the writer on the ground; the camera orbits behind and over the right shoulder
  const me = { x: 0, z: 8, y: 0, gy: 0, vy: 0, heading: Math.PI, crouch: false, airborne: false };
  const camO = { yaw: 0, pitch: 0.12, dist: 3.4 };
  const keys = new Set<string>();
  const MOVE = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift', ' ', 'c', 'f', 'p', 'r', '1', '2', '3', 'Tab', 'Escape'];
  // painting: F at a wall squares up to it; the mouse aims, holding it sprays; the wheel sets the can's distance
  const can: Can = { colour: COLOURS[0], cap: 2, dist: 0.22 };
  let paint: { id: string; spot: (typeof city.spots)[number] } | null = null, spraying = false, colourI = 0;
  const mouse = new THREE.Vector2(), ray = new THREE.Raycaster(), aimHand = new THREE.Vector3();
  // the HUD line: the controls, then the heat (five cells) and what the law is doing; a flash message takes it over a while
  let flash = { text: '', until: 0 }, lastHud = '', t = 0;
  const say2 = (text: string, secs: number) => { flash = { text, until: t + secs }; };
  const hudText = () => {
    if (flash.until > t) return flash.text;
    const L = law.state(), cells = Math.min(5, Math.ceil(L.heat * 5 - 0.001));
    const what = { off: 'PATROL OFF', calm: L.seen ? 'SEEN' : L.heat >= 0.6 ? 'WANTED' : 'CALM', alerted: 'ALERT', chase: 'CHASE', searching: 'SEARCHING', busted: 'BUSTED' }[L.chase];
    const lawS = L.on ? `HEAT ${'▮'.repeat(cells)}${'▯'.repeat(5 - cells)} ${what} · P PATROL OFF` : 'PATROL OFF · P PATROL ON';
    return (paint
      ? `PAINTING ${paint.id.toUpperCase()} · HOLD MOUSE TO SPRAY · WHEEL ${Math.round(can.dist * 100)} CM · 1 2 3 CAP ${['', 'SKINNY', 'MEDIUM', 'FAT'][can.cap]} · TAB ${COLOUR_NAMES[colourI]} · A D MOVE · F DONE`
      : 'WASD MOVE · SHIFT SPRINT · C CROUCH · SPACE JUMP · DRAG LOOK · F AT A WALL TO PAINT') + ' · ' + lawS + (opts.onRec ? ' · R RECORD' : '');
  };
  const hud = () => { const s = hudText(); if (s !== lastHud) { lastHud = s; if (opts.onHud) opts.onHud(s); } };
  const nearestWall = () => {
    let best: { id: string; spot: (typeof city.spots)[number] } | null = null, bd = 4.5;
    for (const sp of city.spots) {
      const dx = me.x - sp.center.x, dz = me.z - sp.center.z, off = dx * sp.normal.x + dz * sp.normal.z;
      const along = Math.abs(dx * sp.normal.z - dz * sp.normal.x);
      if (off > 0 && off < bd && along < sp.w / 2 + 0.4) { bd = off; best = { id: sp.id, spot: sp }; }
    }
    return best;
  };
  const togglePaint = () => {
    if (paint) { paint = null; spraying = false; spray.lift(); hud(); return; }
    const w = nearestWall(); if (!w) { say2('GET CLOSER TO A WALL TO PAINT (F)', 1.6); return; }
    paint = w; me.crouch = false;
    camO.yaw = Math.atan2(w.spot.normal.x, w.spot.normal.z); camO.pitch = 0.1; camO.dist = 2.6;
    hud();
  };
  // the hiss of the can (made from noise, so nothing to download)
  let hiss: { ctx: AudioContext; gain: GainNode } | null = null;
  const hissOn = (on: boolean) => {
    const b = !hiss && on ? sound() : null;
    if (b) {
      const ctx = b.ctx, buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3800; bp.Q.value = 0.7;
      const gain = ctx.createGain(); gain.gain.value = 0; src.connect(bp).connect(gain).connect(b.out); src.start();
      hiss = { ctx, gain };
    }
    if (hiss) hiss.gain.gain.setTargetAtTime(on ? 0.12 : 0, hiss.ctx.currentTime, 0.03);
  };
  const reticle = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 32), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8, depthTest: false }));
  reticle.renderOrder = 10; reticle.visible = false; scene.add(reticle);
  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (!MOVE.includes(k)) return;
    e.preventDefault(); e.stopPropagation();
    if (down && !e.repeat && k === 'r') { if (opts.onRec) opts.onRec(); return; } // recording belongs to whoever mounted the game
    if (bust) return; // nothing to do while you are being nicked
    if (down && !e.repeat && k === 'f') togglePaint();
    if (down && !e.repeat && k === 'p') { const on = !law.state().on; law.setOn(on); say2(on ? 'PATROL ON · WATCH FOR THE CAR' : 'PATROL OFF · PAINT IN PEACE', 2); }
    if (down && !e.repeat && k === 'Escape' && paint) togglePaint();
    if (down && paint && (k === '1' || k === '2' || k === '3')) { can.cap = Number(k) as 1 | 2 | 3; hud(); }
    if (down && paint && k === 'Tab') { colourI = (colourI + 1) % COLOURS.length; can.colour = COLOURS[colourI]; hud(); }
    if (down && !e.repeat && k === 'c' && !paint) me.crouch = !me.crouch;
    if (down && !e.repeat && k === ' ' && !me.airborne) { me.vy = 4.6; me.airborne = true; me.crouch = false; writer.play('Jump_Start', 0.08, true); }
    if (down) keys.add(k); else keys.delete(k);
  };
  const kd = (e: KeyboardEvent) => onKey(e, true), ku = (e: KeyboardEvent) => onKey(e, false);
  canvas.addEventListener('keydown', kd);
  canvas.addEventListener('keyup', ku);
  canvas.addEventListener('blur', () => keys.clear());
  let drag: { x: number; y: number } | null = null;
  const aim = (e: PointerEvent) => { const b = canvas.getBoundingClientRect(); mouse.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); };
  canvas.addEventListener('pointerdown', (e) => {
    canvas.focus(); aim(e); canvas.setPointerCapture(e.pointerId);
    if (paint && e.button === 0) { spraying = true; return; }   // in paint mode the mouse is the can
    drag = { x: e.clientX, y: e.clientY }; canvas.style.cursor = 'grabbing';
  });
  canvas.addEventListener('pointermove', (e) => {
    aim(e);
    if (!drag) return;
    camO.yaw -= (e.clientX - drag.x) * 0.0045; camO.pitch = Math.max(-0.35, Math.min(0.75, camO.pitch + (e.clientY - drag.y) * 0.003));
    drag = { x: e.clientX, y: e.clientY };
  });
  const endDrag = () => { drag = null; spraying = false; spray.lift(); canvas.style.cursor = paint ? 'crosshair' : 'grab'; };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); if (paint) { can.dist = Math.max(0.05, Math.min(0.6, can.dist + e.deltaY * 0.0005)); hud(); return; } camO.dist = Math.max(1.2, Math.min(7, camO.dist * Math.exp(e.deltaY * 0.001))); }, { passive: false });

  const ro = new ResizeObserver(() => {
    ({ w, h } = size());
    r.setSize(w, h, false); comp.setSize(w, h); city.resize(w, h);
    cam.aspect = w / h; cam.updateProjectionMatrix();
  });
  ro.observe(host);

  const clock = new THREE.Clock();
  let raf = 0, stopped = false, lastSpray = '';
  // BUSTED: a slow-motion beat with the camera swinging round, the wall gets buffed, the writer starts again
  let bust: { t: number; spot: string } | null = null;
  const fwd = new THREE.Vector3(), side = new THREE.Vector3(), camPos = new THREE.Vector3(0, 2, 12), camLook = new THREE.Vector3();
  let landT = 0, forceAnim = '', idleT = 0;
  cam.position.copy(camPos);
  const frame = () => {
    if (stopped) return;
    raf = requestAnimationFrame(frame);
    const rdt = Math.min(0.05, clock.getDelta()), dt = bust && bust.t < 1.4 ? rdt * 0.3 : rdt; t += rdt;
    const ax = bust ? 0 : (keys.has('d') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('a') || keys.has('ArrowLeft') ? 1 : 0);
    const az = bust ? 0 : (keys.has('w') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('s') || keys.has('ArrowDown') ? 1 : 0);
    const sprint = keys.has('Shift') && !me.crouch && !paint, moving = !!(ax || (az && !paint));
    const speed = paint ? 1.1 : me.crouch ? 1.35 : sprint ? 6.2 : 3.3;
    // movement is relative to where the camera looks
    fwd.set(-Math.sin(camO.yaw), 0, -Math.cos(camO.yaw)); side.set(Math.cos(camO.yaw), 0, -Math.sin(camO.yaw));
    if (moving) {
      const azz = paint ? 0 : az;
      const dx = fwd.x * azz + side.x * ax, dz = fwd.z * azz + side.z * ax, l = Math.hypot(dx, dz);
      me.x = Math.max(-BOUNDS.x, Math.min(BOUNDS.x, me.x + (dx / l) * speed * dt));
      me.z = Math.max(BOUNDS.z0, Math.min(BOUNDS.z1, me.z + (dz / l) * speed * dt));
      // turn toward the way you are going, quickly but not instantly
      const want = paint ? Math.atan2(-paint.spot.normal.x, -paint.spot.normal.z) : Math.atan2(dx, dz); let d = want - me.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
      me.heading += d * Math.min(1, dt * 12);
      // push out of piers and walls (a body 0.35 m round)
      for (const b of city.blockers) {
        const x0 = b.x0 - 0.35, x1 = b.x1 + 0.35, z0 = b.z0 - 0.35, z1 = b.z1 + 0.35;
        if (me.x > x0 && me.x < x1 && me.z > z0 && me.z < z1) {
          const dd = [me.x - x0, x1 - me.x, me.z - z0, z1 - me.z], m = Math.min(...dd);
          if (m === dd[0]) me.x = x0; else if (m === dd[1]) me.x = x1; else if (m === dd[2]) me.z = z0; else me.z = z1;
        }
      }
    }
    if (paint) {
      // stand square to the wall, an arm's length off it, within its ends
      const sp = paint.spot, n = sp.normal, tx = n.z, tz = -n.x;
      let off = (me.x - sp.center.x) * n.x + (me.z - sp.center.z) * n.z, along = (me.x - sp.center.x) * tx + (me.z - sp.center.z) * tz;
      // spraying past arm's reach: the writer steps along the wall after the can
      if (Math.abs(follow) > 1.1) along += Math.sign(follow) * Math.min(Math.abs(follow) - 1.1, 1.6 * dt);
      off = Math.max(0.55, Math.min(0.9, off)); along = Math.max(-sp.w / 2 + 0.3, Math.min(sp.w / 2 - 0.3, along));
      me.x = sp.center.x + n.x * off + tx * along; me.z = sp.center.z + n.z * off + tz * along;
      let dh = Math.atan2(-n.x, -n.z) - me.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); me.heading += dh * Math.min(1, dt * 10);
      // aim: where the mouse points on this wall. Anywhere along it paints (the writer steps after the can); only height is out of reach
      ray.setFromCamera(mouse, cam);
      const h = spray.hit(ray);
      const reach = h && h.id === sp.id && h.point.y < me.gy + me.y + 2.6 && h.point.y > me.gy + 0.08;
      reticle.visible = !!(h && h.id === sp.id);
      const onWall = !!(h && h.id === sp.id), tooHigh = onWall && h!.point.y >= me.gy + me.y + 2.6;
      follow = spraying && onWall && !tooHigh ? (h!.point.x - me.x) * tx + (h!.point.z - me.z) * tz : 0;
      if (spraying && reach) sprayed = true;
      prompt(tooHigh ? 'TOO HIGH TO REACH · AIM LOWER' : !onWall ? 'POINT AT THE WALL' : !sprayed ? 'HOLD THE MOUSE BUTTON TO SPRAY · F WHEN DONE' : '');
      if (h && h.id === sp.id) {
        reticle.position.copy(h.point).addScaledVector(n, 0.02); reticle.lookAt(h.point.clone().add(n));
        reticle.scale.setScalar(0.012 + can.dist * 0.45 * 0.6 + can.cap * 0.006);
        (reticle.material as THREE.MeshBasicMaterial).color.set(reach ? '#ffffff' : '#555555');
      }
      if (spraying && reach && h) { spray.spray(h.id, h.u, h.v, dt, can); lastSpray = h.id; } else spray.lift();
      // the arm goes up with the can wherever the aim is on the wall; the hand stops the can's distance off it
      if (h && h.id === sp.id) writer.aim(aimHand.copy(h.point).addScaledVector(n, can.dist + 0.03), h.point, spraying ? 1 : 0.85);
      else writer.aim(null);
      hissOn(!!(spraying && reach));
    } else { reticle.visible = false; hissOn(false); writer.aim(null); follow = 0; prompt(!bust && nearestWall() ? 'PRESS F TO PAINT THIS WALL' : ''); }
    spray.update(dt);
    law.pushOut(me, 0.35);
    const ev = law.update(dt, t, { x: me.x, z: me.z, y: me.y, crouch: me.crouch, painting: !!paint, spraying: !!(paint && spraying && reticle.visible) });
    if (ev && opts.onEvent) try { opts.onEvent(ev); } catch { /* the host's business */ }
    if (ev === 'busted') {
      bust = { t: 0, spot: lastSpray };
      if (paint) togglePaint();
      spraying = false; me.crouch = false; keys.clear();
      writer.play('Hit_Knockback', 0.08, true);
      const c = law.nearest(); if (c) camO.yaw = Math.atan2(me.x - c.x, me.z - c.z) + 1.1;
    }
    if (ev === 'escaped') { say2('ESCAPED · THEY LOST YOU', 3); lastSpray = ''; }
    if (ev === 'alert') say2('ALERT · THEY SAW YOU · RUN', 1.4);
    if (bust) {
      bust.t += rdt;
      camO.yaw += rdt * 0.45; camO.dist += (5.2 - camO.dist) * Math.min(1, rdt * 2); camO.pitch += (0.32 - camO.pitch) * Math.min(1, rdt * 2);
      flash = { text: bust.spot ? `BUSTED · THEY ARE BUFFING ${bust.spot.toUpperCase()}` : 'BUSTED', until: t + 0.1 };
      if (bust.t > 2.8) {
        if (bust.spot) spray.clear(bust.spot);
        say2(bust.spot ? `BUSTED · ${bust.spot.toUpperCase()} GOT BUFFED · BACK TO THE START` : 'BUSTED · BACK TO THE START', 3.5);
        Object.assign(me, { x: 0, z: 8, y: 0, vy: 0, heading: Math.PI, crouch: false, airborne: false });
        Object.assign(camO, { yaw: 0, pitch: 0.12, dist: 3.4 });
        bust = null; lastSpray = ''; law.reset(); writer.play('Idle_Loop', 0.2);
      }
    }
    if (bust) { /* the knockback clip plays out */ }
    else if (paint && !moving) writer.play('Idle_Loop', 0.15);
    else if (me.airborne) {
      me.vy -= 13 * dt; me.y += me.vy * dt;
      if (me.y <= 0) { me.y = 0; me.vy = 0; me.airborne = false; writer.play('Jump_Land', 0.06, true); landT = 0.28; }
      else if (me.vy < 2.5) writer.play('Jump_Loop', 0.15);
    } else if (landT > 0) landT -= dt;
    else if (forceAnim) writer.play(forceAnim, 0.2);
    else {
      // standing a while, the writer folds their arms for a bit, then lets them drop
      idleT = moving || me.crouch ? 0 : idleT + dt;
      const idle = idleT % 16 > 9 ? 'Idle_FoldArms_Loop' : 'Idle_Loop';
      writer.play(me.crouch ? (moving ? 'Crouch_Fwd_Loop' : 'Crouch_Idle_Loop') : moving ? (sprint ? 'Sprint_Loop' : 'Jog_Fwd_Loop') : idle, idle === 'Idle_FoldArms_Loop' ? 0.6 : 0.22);
    }
    // the ground under the writer: up a kerb is a quick step, not a pop
    me.gy += (city.groundY(me.x, me.z) - me.gy) * Math.min(1, dt * 16);
    const py = me.gy + me.y;
    writer.root.position.set(me.x, py, me.z);
    writer.root.rotation.y = me.heading;
    writer.update(dt);
    rim.position.set(me.x + Math.sin(camO.yaw) * 1.8 + Math.cos(camO.yaw) * 0.9, py + 2.4, me.z + Math.cos(camO.yaw) * 1.8 - Math.sin(camO.yaw) * 0.9);
    back.position.set(me.x - Math.sin(camO.yaw) * 1.4, py + 2.1, me.z - Math.cos(camO.yaw) * 1.4);
    // the camera: behind, above, over the right shoulder, kept inside the street
    const tgtY = py + (me.crouch ? 1.05 : 1.45);
    const cx = me.x + Math.sin(camO.yaw) * Math.cos(camO.pitch) * camO.dist + Math.cos(camO.yaw) * 0.55;
    const cz = me.z + Math.cos(camO.yaw) * Math.cos(camO.pitch) * camO.dist - Math.sin(camO.yaw) * 0.55;
    camPos.set(Math.max(-26.5, Math.min(26.5, cx)), Math.max(0.35, tgtY + Math.sin(camO.pitch) * camO.dist), Math.max(BOUNDS.z0 - 0.5, Math.min(BOUNDS.z1 + 4, cz)));
    cam.position.lerp(camPos, Math.min(1, dt * 10));
    camLook.set(me.x + Math.cos(camO.yaw) * 0.55, tgtY, me.z - Math.sin(camO.yaw) * 0.55);
    cam.lookAt(camLook);
    city.update(dt, t, cam);
    city.beforeRender(r, scene, cam);
    grade.tick(t);
    comp.render(dt);
    hud();
  };
  say(''); hud();
  frame();

  return {
    canvas,
    where: () => ({ x: me.x, z: me.z, yaw: camO.yaw, heading: me.heading, anim: writer.playing() }),
    // a picture of the game: render a frame and copy it in the same step (the drawing buffer is not kept)
    snap: (width = 768) => {
      city.beforeRender(r, scene, cam); comp.render(0);
      const c = document.createElement('canvas'); c.width = width; c.height = Math.round(width * canvas.height / canvas.width);
      c.getContext('2d')!.drawImage(canvas, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', 0.82);
    },
    // look at the writer: camera yaw/pitch/distance, which way they face, a clip to hold (for judging the model)
    inspect: (o: { yaw?: number; pitch?: number; dist?: number; heading?: number; anim?: string }) => {
      if (o.yaw != null) camO.yaw = o.yaw; if (o.pitch != null) camO.pitch = o.pitch; if (o.dist != null) camO.dist = o.dist;
      if (o.heading != null) me.heading = o.heading; forceAnim = o.anim || '';
    },
    /** Paint a stroke on a wall: points (u, v) 0..1 across and up it. */
    paint: (id: string, pts: [number, number][], o: { colour?: string; cap?: 1 | 2 | 3; dist?: number } = {}) => spray.path(id, pts, { colour: o.colour || COLOURS[0], cap: o.cap || 2, dist: o.dist ?? 0.2 }),
    clearPaint: (id?: string) => spray.clear(id),
    piece: (id: string) => spray.png(id),
    painting: () => (paint ? paint.id : ''),
    /** Save the walls' paint now (it saves itself a moment after each stroke settles). */
    flush: async () => { await spray.loaded; await spray.flush(); },
    spots: () => city.spots.map((s) => ({ id: s.id, w: s.w, h: s.h, x: s.center.x, y: s.center.y, z: s.center.z })),
    /** The law: heat 0..1, chase (off, calm, alerted, chase, searching, busted), the patrol car and the officers. */
    law: () => law.state(),
    cops: (on: boolean) => law.setOn(on),
    /** The game's sound, for a recorder: connect node to a MediaStreamDestination made on ctx. */
    audio: () => { const b = sound(); return b ? { ctx: b.ctx, node: b.out } : null; },
    goto: (x, z, yaw, pitch) => { me.x = x; me.z = z; if (yaw != null) { camO.yaw = yaw; me.heading = yaw + Math.PI; } if (pitch != null) camO.pitch = pitch; },
    stop: () => {
      stopped = true; cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener('keydown', kd); canvas.removeEventListener('keyup', ku);
      hissOn(false); law.dispose(); if (bus) void bus.ctx.close(); spray.dispose(); writer.dispose(); city.dispose(); look.dispose(); comp.dispose(); r.dispose(); canvas.remove(); tip.remove();
    },
  };
}
