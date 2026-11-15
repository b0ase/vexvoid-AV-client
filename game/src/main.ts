/**
 * V3XV0ID GAME: the engine behind the mixer's GAME tab. A night city (./city.ts, forked from ESCAPE FROM TERRORNODE)
 * rendered the TERRORNODE way (ACES filmic, soft shadows, GTAO, bloom) and graded black and white.
 *
 *   const g = await VXGAME.mount(host, { base: 'vx/game/', high: true, onStatus })
 *   g.stop();  g.canvas  (to record)
 *
 * Stage 1: walk the street (WASD or arrows, Shift runs, drag to look). The writer, the paint and the cops come next.
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

export type MountOpts = { base: string; high?: boolean; onStatus?: (s: string) => void };
export type Game = { canvas: HTMLCanvasElement; stop: () => void; where: () => { x: number; z: number; yaw: number } };

// VexVoid's grade: no colour at all, hard contrast, a heavy vignette
const MONO = { shadow: [1, 1, 1] as [number, number, number], high: [1, 1, 1] as [number, number, number], sat: 0, contrast: 1.32, vignette: 0.72 };
// where you can walk: the road and both pavements, short of the tower
const BOUNDS = { x: 25.5, z0: -58, z1: 24 };

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
  const city = buildCity({ renderer: r, scene, high, look });
  scene.add(city.group);

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

  // walking: position on the ground, yaw/pitch from dragging
  const me = { x: 0, z: 8, yaw: 0, pitch: 0.04, bob: 0 };
  const keys = new Set<string>();
  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (!['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift'].includes(k)) return;
    e.preventDefault(); e.stopPropagation();
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
    me.yaw -= (e.clientX - drag.x) * 0.0035; me.pitch = Math.max(-0.9, Math.min(0.9, me.pitch - (e.clientY - drag.y) * 0.0035));
    drag = { x: e.clientX, y: e.clientY };
  });
  const endDrag = () => { drag = null; canvas.style.cursor = 'grab'; };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  const ro = new ResizeObserver(() => {
    ({ w, h } = size());
    r.setSize(w, h, false); comp.setSize(w, h); city.resize(w, h);
    cam.aspect = w / h; cam.updateProjectionMatrix();
  });
  ro.observe(host);

  const clock = new THREE.Clock();
  let raf = 0, t = 0, stopped = false;
  const fwd = new THREE.Vector3(), side = new THREE.Vector3();
  const frame = () => {
    if (stopped) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta()); t += dt;
    const run = keys.has('Shift') ? 7.5 : 3.2;
    const ax = (keys.has('d') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('a') || keys.has('ArrowLeft') ? 1 : 0);
    const az = (keys.has('w') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('s') || keys.has('ArrowDown') ? 1 : 0);
    fwd.set(-Math.sin(me.yaw), 0, -Math.cos(me.yaw)); side.set(Math.cos(me.yaw), 0, -Math.sin(me.yaw));
    if (ax || az) {
      const k = run * dt / Math.hypot(ax, az);
      me.x = Math.max(-BOUNDS.x, Math.min(BOUNDS.x, me.x + (fwd.x * az + side.x * ax) * k));
      me.z = Math.max(BOUNDS.z0, Math.min(BOUNDS.z1, me.z + (fwd.z * az + side.z * ax) * k));
      me.bob += dt * (run > 4 ? 13 : 8.5);
    }
    cam.position.set(me.x, EYE + Math.sin(me.bob) * (ax || az ? 0.035 : 0), me.z);
    cam.rotation.set(0, 0, 0); cam.rotateY(me.yaw); cam.rotateX(me.pitch);
    city.update(dt, t, cam);
    city.beforeRender(r, scene, cam);
    grade.tick(t);
    comp.render(dt);
  };
  say('');
  frame();

  return {
    canvas,
    where: () => ({ x: me.x, z: me.z, yaw: me.yaw }),
    stop: () => {
      stopped = true; cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener('keydown', kd); canvas.removeEventListener('keyup', ku);
      city.dispose(); look.dispose(); comp.dispose(); r.dispose(); canvas.remove();
    },
  };
}
