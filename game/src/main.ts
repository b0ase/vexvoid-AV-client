/**
 * V3XV0ID GAME: the engine behind the mixer's GAME tab. A night city (./city.ts, forked from ESCAPE FROM TERRORNODE)
 * rendered the TERRORNODE way (ACES filmic, soft shadows, GTAO, bloom) and graded black and white.
 *
 *   const g = await VXGAME.mount(host, { base: 'vx/game/', high: true, onStatus })
 *   g.stop();  g.canvas  (to record)
 *
 * Stage 2: the writer, third person (./writer.ts). WASD or arrows move relative to the camera (jog), Shift sprints,
 * C crouches (sneak), Space jumps, drag to look. city.spots are the walls to paint; the paint and the cops come next.
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

export type MountOpts = { base: string; high?: boolean; onStatus?: (s: string) => void };
export type Game = { canvas: HTMLCanvasElement; stop: () => void; inspect: (o: { yaw?: number; pitch?: number; dist?: number; heading?: number; anim?: string }) => void; where: () => { x: number; z: number; yaw: number; heading: number; anim: string }; spots: () => { id: string; w: number; h: number; x: number; y: number; z: number }[]; goto: (x: number, z: number, yaw?: number, pitch?: number) => void };

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

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(62, 16 / 9, 0.05, 900);
  const look = await loadLook(r, opts.base + 'tex/');
  const city = buildCity({ renderer: r, scene, high, look, vexvoid: true });
  scene.add(city.group);
  say('Dressing the writer…');
  const writer = await loadWriter(opts.base + 'anims/ual.glb', high, opts.base + 'models/writer.glb');
  scene.add(writer.root);
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
  const me = { x: 0, z: 8, y: 0, vy: 0, heading: Math.PI, crouch: false, airborne: false };
  const camO = { yaw: 0, pitch: 0.12, dist: 3.4 };
  const keys = new Set<string>();
  const MOVE = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift', ' ', 'c'];
  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (!MOVE.includes(k)) return;
    e.preventDefault(); e.stopPropagation();
    if (down && !e.repeat && k === 'c') me.crouch = !me.crouch;
    if (down && !e.repeat && k === ' ' && !me.airborne) { me.vy = 4.6; me.airborne = true; me.crouch = false; writer.play('Jump_Start', 0.08, true); }
    if (down) keys.add(k); else keys.delete(k);
  };
  const kd = (e: KeyboardEvent) => onKey(e, true), ku = (e: KeyboardEvent) => onKey(e, false);
  canvas.addEventListener('keydown', kd);
  canvas.addEventListener('keyup', ku);
  canvas.addEventListener('blur', () => keys.clear());
  let drag: { x: number; y: number } | null = null;
  canvas.addEventListener('pointerdown', (e) => { canvas.focus(); drag = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag) return;
    camO.yaw -= (e.clientX - drag.x) * 0.0045; camO.pitch = Math.max(-0.35, Math.min(0.75, camO.pitch + (e.clientY - drag.y) * 0.003));
    drag = { x: e.clientX, y: e.clientY };
  });
  const endDrag = () => { drag = null; canvas.style.cursor = 'grab'; };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); camO.dist = Math.max(1.2, Math.min(7, camO.dist * Math.exp(e.deltaY * 0.001))); }, { passive: false });

  const ro = new ResizeObserver(() => {
    ({ w, h } = size());
    r.setSize(w, h, false); comp.setSize(w, h); city.resize(w, h);
    cam.aspect = w / h; cam.updateProjectionMatrix();
  });
  ro.observe(host);

  const clock = new THREE.Clock();
  let raf = 0, t = 0, stopped = false;
  const fwd = new THREE.Vector3(), side = new THREE.Vector3(), camPos = new THREE.Vector3(0, 2, 12), camLook = new THREE.Vector3();
  let landT = 0, forceAnim = '';
  cam.position.copy(camPos);
  const frame = () => {
    if (stopped) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta()); t += dt;
    const ax = (keys.has('d') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('a') || keys.has('ArrowLeft') ? 1 : 0);
    const az = (keys.has('w') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('s') || keys.has('ArrowDown') ? 1 : 0);
    const sprint = keys.has('Shift') && !me.crouch, moving = !!(ax || az);
    const speed = me.crouch ? 1.35 : sprint ? 6.2 : 3.3;
    // movement is relative to where the camera looks
    fwd.set(-Math.sin(camO.yaw), 0, -Math.cos(camO.yaw)); side.set(Math.cos(camO.yaw), 0, -Math.sin(camO.yaw));
    if (moving) {
      const dx = fwd.x * az + side.x * ax, dz = fwd.z * az + side.z * ax, l = Math.hypot(dx, dz);
      me.x = Math.max(-BOUNDS.x, Math.min(BOUNDS.x, me.x + (dx / l) * speed * dt));
      me.z = Math.max(BOUNDS.z0, Math.min(BOUNDS.z1, me.z + (dz / l) * speed * dt));
      // turn toward the way you are going, quickly but not instantly
      const want = Math.atan2(dx, dz); let d = want - me.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
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
    if (me.airborne) {
      me.vy -= 13 * dt; me.y += me.vy * dt;
      if (me.y <= 0) { me.y = 0; me.vy = 0; me.airborne = false; writer.play('Jump_Land', 0.06, true); landT = 0.28; }
      else if (me.vy < 2.5) writer.play('Jump_Loop', 0.15);
    } else if (landT > 0) landT -= dt;
    else if (forceAnim) writer.play(forceAnim, 0.2);
    else writer.play(me.crouch ? (moving ? 'Crouch_Fwd_Loop' : 'Crouch_Idle_Loop') : moving ? (sprint ? 'Sprint_Loop' : 'Jog_Fwd_Loop') : 'Idle_Loop', 0.22);
    writer.root.position.set(me.x, me.y, me.z);
    writer.root.rotation.y = me.heading;
    writer.update(dt);
    rim.position.set(me.x + Math.sin(camO.yaw) * 1.8 + Math.cos(camO.yaw) * 0.9, me.y + 2.4, me.z + Math.cos(camO.yaw) * 1.8 - Math.sin(camO.yaw) * 0.9);
    back.position.set(me.x - Math.sin(camO.yaw) * 1.4, me.y + 2.1, me.z - Math.cos(camO.yaw) * 1.4);
    // the camera: behind, above, over the right shoulder, kept inside the street
    const tgtY = me.y + (me.crouch ? 1.05 : 1.45);
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
  };
  say('');
  frame();

  return {
    canvas,
    where: () => ({ x: me.x, z: me.z, yaw: camO.yaw, heading: me.heading, anim: writer.playing() }),
    // look at the writer: camera yaw/pitch/distance, which way they face, a clip to hold (for judging the model)
    inspect: (o: { yaw?: number; pitch?: number; dist?: number; heading?: number; anim?: string }) => {
      if (o.yaw != null) camO.yaw = o.yaw; if (o.pitch != null) camO.pitch = o.pitch; if (o.dist != null) camO.dist = o.dist;
      if (o.heading != null) me.heading = o.heading; forceAnim = o.anim || '';
    },
    spots: () => city.spots.map((s) => ({ id: s.id, w: s.w, h: s.h, x: s.center.x, y: s.center.y, z: s.center.z })),
    goto: (x, z, yaw, pitch) => { me.x = x; me.z = z; if (yaw != null) { camO.yaw = yaw; me.heading = yaw + Math.PI; } if (pitch != null) camO.pitch = pitch; },
    stop: () => {
      stopped = true; cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener('keydown', kd); canvas.removeEventListener('keyup', ku);
      writer.dispose(); city.dispose(); look.dispose(); comp.dispose(); r.dispose(); canvas.remove();
    },
  };
}
