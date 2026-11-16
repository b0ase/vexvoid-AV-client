/**
 * V3XV0ID GAME: the engine behind the mixer's GAME tab. A night city (./city.ts, forked from ESCAPE FROM TERRORNODE)
 * rendered the TERRORNODE way (ACES filmic, soft shadows, GTAO, bloom) and graded black and white.
 *
 *   const g = await VXGAME.mount(host, { base: 'vx/game/', high: true, onStatus })
 *   g.stop();  g.canvas  (to record)
 *
 * Stage 2: the writer, third person (./writer.ts). WASD or arrows move relative to the camera (jog), Shift sprints,
 * C crouches (sneak), Space jumps, drag to look. Stage 3: F at any wall paints it (./spray.ts): the mouse is the can,
 * left button sprays, right button sprays lightly, Shift lays a straight line, the wheel is the can's distance, 1 2 3
 * the cap, Tab or 4 to 7 the colour, X the buff can, Z undo; A D step along the wall, W S and the arrows move the view.
 * Stage 4: the law (./cops.ts): heat, a patrol car, officers on foot; BUSTED loses a piece painted by hand (a sketch half blasted stays). P turns the patrol off.
 * The SKETCHBOOK (./sketchbook.ts): B opens a panel of sketches (tags, throw-ups, pieces); pick one, aim at a wall and
 * click (or G) and the writer puts it up stroke by stroke ("blast"), at 1x 2x 4x, sized to fit; moving stops it, Z takes
 * it back in one go. N (or SAVE WALL) keeps what is on the wall being painted as a new sketch.
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
import { makeSpray, footprint, COLOURS, COLOUR_NAMES, type Can, type Stroke, type WallStore } from './spray';
import { makeLaw, type LawState } from './cops';
import { makeBook, sketchOf, fit, drawSketch, secsOf, cleanName, type Sketch, type SketchKind, type SketchStore, type BookState } from './sketchbook';

export type MountOpts = { base: string; high?: boolean; onStatus?: (s: string) => void; onHud?: (s: string) => void; onRec?: () => void;
  /** Where the walls' paint is kept (default: this browser). */
  store?: WallStore;
  /** Where the player's own sketches are kept (default: this browser). */
  sketches?: SketchStore;
  /** What happens to the writer, for a host that keeps a player's history: seen, caught, got away. */
  onEvent?: (ev: 'alert' | 'busted' | 'escaped') => void };
export type Game = { canvas: HTMLCanvasElement; stop: () => void; snap: (width?: number) => string; inspect: (o: { yaw?: number; pitch?: number; dist?: number; heading?: number; anim?: string }) => void; where: () => { x: number; z: number; yaw: number; heading: number; anim: string }; spots: () => { id: string; w: number; h: number; x: number; y: number; z: number }[];
  /** Every wall that takes paint (the spots, shop fronts, columns, piers). near: only those within this many metres of the writer. */
  walls: (o?: { near?: number }) => { id: string; w: number; h: number; x: number; y: number; z: number; nx: number; nz: number; painted: boolean }[];
  paint: (id: string, pts: [number, number][], o?: { colour?: string; cap?: 1 | 2 | 3; dist?: number; pressure?: number; buff?: boolean }) => void; clearPaint: (id?: string) => void; piece: (id: string) => string; painting: () => string;
  /** A wall's stroke log, oldest first: what a sketchbook keeps. */
  strokes: (id: string) => Stroke[];
  /** Put strokes up: on their own walls, or all on `wall`, moved by `at` (metres from that wall's bottom left) and scaled.
   *  speed 0 or none: at once. speed 1: the writer paints them as they were made (2 twice as fast), stepping along the
   *  wall after the can. Resolves true when the last stroke is up, false if the player stopped it. */
  play: (strokes: Stroke[], o?: { wall?: string; at?: [number, number]; scale?: number; speed?: number }) => Promise<boolean>;
  /** The sketchbook: every sketch (starters and the player's own). */
  sketches: () => SketchInfo[];
  /** One sketch in full (its strokes), by id or name. */
  sketch: (idOrName: string, kind?: SketchKind) => Sketch | null;
  /** Keep a wall's strokes (none given: the wall being painted) as a new sketch. */
  saveSketch: (o?: { wall?: string; name?: string; kind?: SketchKind }) => Promise<SketchInfo>;
  /** Forget one of the player's own sketches. */
  deleteSketch: (id: string) => Promise<boolean>;
  /** Put a sketch up: on `wall` (none: the wall being painted, or the nearest), centred on `at` (metres from the wall's
   *  bottom left; none: where the can points, or in front of the writer), size x its own size (made smaller to fit),
   *  speed 1 2 4 animated (0: at once). Resolves true when it is all up, false if it was stopped (moving, busted). */
  blast: (idOrName: string, o?: { wall?: string; at?: [number, number]; size?: number; speed?: number; kind?: SketchKind }) => Promise<boolean>;
  /** The sketchbook panel: open it, pick, speed, size; returns its state and where a blast would go now. */
  sketchbook: (o?: Partial<BookState>) => BookState & { blasting: string; plan: { wall: string; at: [number, number]; scale: number; fitted: boolean } | null };
  /** Take back the last stroke on a wall (none given: the wall being painted). Returns how many strokes went. */
  undo: (id?: string) => number;
  /** The can in the writer's hand; give fields to change them. */
  can: (o?: Partial<Can>) => Can;
  /** What the paint costs in memory: walls with paint, tiles alive, MB of canvas. */
  paintStats: () => { walls: number; painted: number; tiles: number; mb: number; resting: number; undo: number; undoTiles: number; drips: number }; flush: () => Promise<void>; goto: (x: number, z: number, yaw?: number, pitch?: number) => void; law: () => LawState; cops: (on: boolean) => void; audio: () => { ctx: AudioContext; node: AudioNode } | null };

export type SketchInfo = { id: string; name: string; kind: SketchKind; w: number; h: number; strokes: number; secs: number; mine: boolean; about?: string };
const infoOf = (s: Sketch): SketchInfo => ({ id: s.id, name: s.name, kind: s.kind, w: s.w, h: s.h, strokes: s.strokes.length, secs: Math.round(secsOf(s)), mine: !!s.mine, about: s.about });

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
  let tipNow = '', sprayed = false, follow = 0, tipHold = 0, tipNote = '';
  const prompt = (s: string) => { if (s !== tipNow) { tipNow = s; tip.textContent = s; tip.style.display = s ? 'block' : 'none'; } };
  // a short word on what just changed (the cap, the colour, an undo), in the prompt's place for a moment
  const note = (s: string, secs = 1.4) => { tipNote = s; tipHold = t + secs; };
  // the painting controls, small in a corner while painting (H hides them)
  const helpEl = document.createElement('div');
  helpEl.style.cssText = 'position:absolute;left:12px;top:12px;padding:8px 10px;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.28);color:rgba(255,255,255,.82);font:500 10px/1.7 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;white-space:pre;pointer-events:none;display:none';
  helpEl.textContent = ['MOUSE  SPRAY · RIGHT BUTTON  LIGHT COAT', 'SHIFT  STRAIGHT LINE · WHEEL  CAN CLOSER / FURTHER', '1 2 3  CAP · TAB  COLOUR · X  BUFF CAN · Z  UNDO', 'A D  STEP ALONG · W S  VIEW IN / OUT · ARROWS  LOOK', 'B  SKETCHBOOK · H  HIDE THIS · F  DONE'].join('\n');
  host.appendChild(helpEl);

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(62, 16 / 9, 0.05, 900);
  const look = await loadLook(r, opts.base + 'tex/');
  const city = buildCity({ renderer: r, scene, high, look, vexvoid: true });
  scene.add(city.group);
  say('Dressing the writer…');
  const writer = await loadWriter(opts.base + 'anims/ual.glb', high, opts.base + 'models/writer.glb');
  scene.add(writer.root, writer.can);
  const spray = makeSpray(scene, city.walls, opts.store);
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
  const MOVE = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift', ' ', 'c', 'f', 'p', 'r', '1', '2', '3', '4', '5', '6', '7', 'z', 'x', 'h', 'Tab', 'Escape', 'b', 'g', 'v', 'n', '[', ']', '-', '=', '+', 'Enter'];
  // painting: F at a wall squares up to it; the mouse aims, holding it sprays; the wheel sets the can's distance
  type W = (typeof city.walls)[number];
  const can: Can = { colour: COLOURS[0], cap: 2, dist: 0.2, pressure: 1, buff: false };
  const CAPS = ['', 'SKINNY', 'MEDIUM', 'FAT'];
  let paint: { id: string; spot: W } | null = null, colourI = 0, btn = 0, help = true, sprayingNow = false;
  let down: THREE.Vector2 | null = null;   // where the button went down: a stroke or a line starts there, not where the mouse is a frame later
  // a stroke by hand: the can's point on the wall, eased after the mouse so the line comes out steady
  let stroke: { key: string; t0: number; x: number; y: number } | null = null;
  // a straight line being pulled out from where the button went down (Shift)
  let line: { id: string; x: number; y: number; press: number } | null = null;
  // strokes the writer is painting by themselves: a straight line, or a piece played from its log
  type Auto = { list: { wall: string; can: Can; seed?: number; pts: [number, number, number][] }[]; i: number; k: number; t: number; gap: number; speed: number; group: string; done: (ok: boolean) => void };
  let auto: Auto | null = null, autoN = 0, pressN = 0;   // pressN: one press of the button undoes as one step
  let blasting = '';   // the sketch being put up, by name
  const mouse = new THREE.Vector2(), ray = new THREE.Raycaster(), aimHand = new THREE.Vector3(), canAt = new THREE.Vector3(), lineA = new THREE.Vector3();
  const wallOf = new Map(city.walls.map((w) => [w.id, w]));
  const alongOf = (w: W, x: number, z: number) => (x - w.center.x) * w.normal.z - (z - w.center.z) * w.normal.x;
  const offOf = (w: W, x: number, z: number) => (x - w.center.x) * w.normal.x + (z - w.center.z) * w.normal.z;
  // a wall and the walls that carry on from it in the same plane (a panel on a shop front, the ends of the end wall):
  // the can and the writer go from one to the next without leaving paint mode. lo..hi: how far the run goes, along it
  const runs = new Map<string, { ids: string[]; lo: number; hi: number }>();
  const runOf = (w: W) => {
    let g = runs.get(w.id); if (g) return g;
    const all = city.walls.filter((o) => o !== w && o.normal.dot(w.normal) > 0.99 && Math.abs(offOf(w, o.center.x, o.center.z)) < 0.1 && Math.abs(alongOf(w, o.center.x, o.center.z)) < (o.w + w.w) / 2 + 0.3);
    g = { ids: [w.id, ...all.map((o) => o.id)], lo: Math.min(-w.w / 2, ...all.map((o) => alongOf(w, o.center.x, o.center.z) - o.w / 2)), hi: Math.max(w.w / 2, ...all.map((o) => alongOf(w, o.center.x, o.center.z) + o.w / 2)) };
    runs.set(w.id, g); return g;
  };
  // the HUD line: the controls, then the heat (five cells) and what the law is doing; a flash message takes it over a while
  let flash = { text: '', until: 0 }, lastHud = '', t = 0;
  const say2 = (text: string, secs: number) => { flash = { text, until: t + secs }; };
  const cm = (m: number) => { const c = m * 100; return c < 10 ? c.toFixed(1) : String(Math.round(c)); };
  const hudText = () => {
    if (flash.until > t) return flash.text;
    const L = law.state(), cells = Math.min(5, Math.ceil(L.heat * 5 - 0.001));
    const what = { off: 'PATROL OFF', calm: L.seen ? 'SEEN' : L.heat >= 0.6 ? 'WANTED' : 'CALM', alerted: 'ALERT', chase: 'CHASE', searching: 'SEARCHING', busted: 'BUSTED' }[L.chase];
    const lawS = L.on ? `HEAT ${'▮'.repeat(cells)}${'▯'.repeat(5 - cells)} ${what} · P PATROL OFF` : 'PATROL OFF · P PATROL ON';
    const bk = book.state.open ? (() => { const s = book.pick(); return `SKETCHBOOK · ${s ? s.name + ' ' + s.kind.toUpperCase() : 'PICK ONE'} · ${book.state.speed}× · SIZE ${Math.round(book.state.size * 100)}% · B CLOSE · `; })() : '';
    if (bk) return bk + (paint ? `PAINTING ${paint.id.toUpperCase()} · F DONE · ` : 'WASD MOVE · F AT A WALL · ') + lawS;
    return (paint
      ? `PAINTING ${paint.id.toUpperCase()} · ${can.buff ? 'BUFF' : COLOUR_NAMES[colourI]} · ${CAPS[can.cap]} CAP · ${Math.round(can.dist * 100)} CM OFF · LINE ${cm(footprint(can).width)} CM · ${help ? 'F DONE' : 'H HELP · F DONE'}`
      : 'WASD MOVE · SHIFT SPRINT · C CROUCH · SPACE JUMP · DRAG LOOK · F AT ANY WALL TO PAINT · B SKETCHBOOK') + ' · ' + lawS + (opts.onRec ? ' · R RECORD' : '');
  };
  const hud = () => { const s = hudText(); if (s !== lastHud) { lastHud = s; if (opts.onHud) opts.onHud(s); } };
  const fwd = new THREE.Vector3(0, 0, -1), side = new THREE.Vector3();
  // the wall to paint from here: one the writer stands in front of, the nearer and the more the camera faces it the better
  const nearestWall = (range = 4.5) => {
    let best: W | null = null, bs = 1e9;
    for (const sp of city.walls) {
      const off = offOf(sp, me.x, me.z); if (off <= 0 || off > range || Math.abs(alongOf(sp, me.x, me.z)) > sp.w / 2 + 0.3) continue;
      const sc = off + 1.5 * (1 - Math.max(0, -(fwd.x * sp.normal.x + fwd.z * sp.normal.z)));
      if (sc < bs) { bs = sc; best = sp; }
    }
    return best ? { id: best.id, spot: best } : null;
  };
  // how far a straight line from a to b gets (0..1) before something solid at street level is in the way. Low things
  // (a barrier, a parked car) only count under 1.2 m; own: the wall being painted is not in its own way
  const sightTo = (ax: number, az: number, ay: number, bx: number, bz: number, by: number, own?: W) => {
    let best = 1; const dx = bx - ax, dz = bz - az, ix = own ? own.center.x - own.normal.x * 0.2 : 1e9, iz = own ? own.center.z - own.normal.z * 0.2 : 1e9;
    for (const b of city.blockers) {
      if (ix > b.x0 && ix < b.x1 && iz > b.z0 && iz < b.z1) continue;
      let t0 = 0, t1 = best;
      if (Math.abs(dx) < 1e-6) { if (ax < b.x0 || ax > b.x1) continue; } else { const u = (b.x0 - ax) / dx, v = (b.x1 - ax) / dx; t0 = Math.max(t0, Math.min(u, v)); t1 = Math.min(t1, Math.max(u, v)); }
      if (Math.abs(dz) < 1e-6) { if (az < b.z0 || az > b.z1) continue; } else { const u = (b.z0 - az) / dz, v = (b.z1 - az) / dz; t0 = Math.max(t0, Math.min(u, v)); t1 = Math.min(t1, Math.max(u, v)); }
      if (t0 >= t1 || (b.low && ay + (by - ay) * t0 > 1.2)) continue;
      best = t0;
    }
    return best;
  };
  const stopAuto = (ok: boolean) => { const a = auto; if (!a) return; auto = null; spray.end(); if (!ok && blasting) note(`STOPPED ${blasting} · Z TAKES IT BACK`, 2.5); blasting = ''; a.done(ok); };
  const squareUp = (w: W) => { paint = { id: w.id, spot: w }; camO.yaw = Math.atan2(w.normal.x, w.normal.z); camO.pitch = 0.1; camO.dist = 2.6; };
  const togglePaint = () => {
    if (paint) { paint = null; btn = 0; stroke = null; line = null; spray.end(); stopAuto(false); me.crouch = false; hud(); return; }
    const w = nearestWall(); if (!w) { say2('NO WALL WITHIN REACH', 2.5); note('WALK UP TO A WALL · THEN F', 2.5); return; }
    me.crouch = false; squareUp(w.spot);
    hud();
  };
  // the hiss of the can (made from noise, so nothing to download)
  let hiss: { ctx: AudioContext; gain: GainNode } | null = null;
  const hissOn = (on: boolean, vol = 1) => {
    const b = !hiss && on ? sound() : null;
    if (b) {
      const ctx = b.ctx, buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3800; bp.Q.value = 0.7;
      const gain = ctx.createGain(); gain.gain.value = 0; src.connect(bp).connect(gain).connect(b.out); src.start();
      hiss = { ctx, gain };
    }
    if (hiss) hiss.gain.gain.setTargetAtTime(on ? 0.12 * vol : 0, hiss.ctx.currentTime, 0.03);
  };
  // the reticle is the size of the mark the can will make (ring: the line; dot: its middle, for when the ring is tiny)
  const reticle = new THREE.Mesh(new THREE.RingGeometry(0.86, 1, 40), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8, depthTest: false }));
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.0035, 12), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthTest: false }));
  const preview = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8, depthTest: false }));
  for (const o of [reticle, dot, preview]) { o.renderOrder = 10; o.visible = false; o.userData.noAO = true; o.frustumCulled = false; scene.add(o); }
  // the SKETCHBOOK panel, and the sketch picked shown faintly on the wall where a blast would put it
  const book = makeBook(host, {
    onBlast: () => blastNow(), onChange: () => { hud(); }, focus: () => canvas.focus(),
    onSave: (name, kind) => { saveWall({ name, kind }).catch((e) => note(String(e.message || e).toUpperCase(), 2.5)); },
    onDelete: (id) => { const s = book.byId(id); void book.remove(id).then((ok) => { if (ok && s) note(`DELETED ${s.name}`); }); },
    canSave: () => !!paint && spray.strokes(paint.id).length > 0,
  }, opts.sketches);
  const ghost = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.55, depthTest: false, depthWrite: false }));
  const ghostFrame = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-0.5, -0.5, 0), new THREE.Vector3(0.5, -0.5, 0), new THREE.Vector3(0.5, 0.5, 0), new THREE.Vector3(-0.5, 0.5, 0)]), new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.75, depthTest: false }));
  ghost.add(ghostFrame);
  for (const o of [ghost, ghostFrame]) { o.renderOrder = 11; o.visible = o === ghostFrame; o.userData.noAO = true; o.frustumCulled = false; }
  ghost.visible = false; scene.add(ghost);
  let ghostOf = '';
  const ghostPic = (sk: Sketch) => {
    if (ghostOf === sk.id) return; ghostOf = sk.id;
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = Math.max(32, Math.min(512, Math.round(512 * sk.h / sk.w)));
    drawSketch(cv, sk, { bg: null, pad: 0 });
    const m = ghost.material as THREE.MeshBasicMaterial; if (m.map) m.map.dispose();
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; m.map = tex; m.needsUpdate = true;
  };
  // where the can points on a wall right now (paint mode), and where the picked sketch would go from there
  let aimAt: { id: string; x: number; y: number } | null = null, plan: { wall: string; at: [number, number]; scale: number; fitted: boolean } | null = null;
  // how high on a wall the writer reaches (metres from its bottom)
  const reachOn = (w: W) => me.gy + 2.6 - (w.center.y - w.h / 2);
  const planFor = (sk: Sketch, w: W, aim: { x: number; y: number } | null, size: number) => {
    const a = aim || { x: alongOf(w, me.x, me.z) + w.w / 2, y: me.gy + 1.35 - (w.center.y - w.h / 2) };
    const f = fit(sk, w, a, size, reachOn(w)); return { wall: w.id, at: f.at, scale: f.scale, fitted: f.fitted };
  };
  const findSketch = (q: string, kind?: SketchKind) => {
    const all = book.all(), k = (s: Sketch) => !kind || s.kind === kind, n = cleanName(q);
    return all.find((s) => s.id === q) || all.find((s) => k(s) && s.name === n) || all.find((s) => k(s) && s.id.endsWith('-' + q.toLowerCase())) || null;
  };
  /** The writer puts a sketch up. */
  const blast = (sk: Sketch, o: { wall?: string; at?: [number, number]; size?: number; speed?: number } = {}) => {
    if (bust) return Promise.resolve(false);
    let w: W | undefined;
    if (o.wall) { w = wallOf.get(o.wall); if (!w) return Promise.reject(new Error('no wall ' + o.wall)); }
    else w = (aimAt && paint && wallOf.get(aimAt.id)) || (paint ? paint.spot : nearestWall()?.spot);
    if (!w) return Promise.reject(new Error('no wall within reach: walk up to one, or give a wall'));
    const pl = planFor(sk, w, o.at ? { x: o.at[0], y: o.at[1] } : aimAt && aimAt.id === w.id ? aimAt : null, o.size ?? book.state.size);
    const speed = o.speed ?? book.state.speed;
    const strokes: Stroke[] = sk.strokes.map((s) => ({ ...s, wall: w!.id, buff: !!s.buff }));
    const p = play(strokes, { wall: w.id, at: pl.at, scale: pl.scale, speed });
    if (speed > 0) { blasting = sk.name; note(`BLASTING ${sk.name} · ${speed}× · MOVE TO STOP`, 1.8); }
    return p;
  };
  const blastNow = () => {
    const sk = book.pick(); if (!sk || bust) return;
    if (auto) { note('ALREADY PUTTING ONE UP · MOVE TO STOP IT'); return; }
    if (!paint) { const w = nearestWall(); if (!w) { note('WALK UP TO A WALL TO BLAST', 2); return; } togglePaint(); }
    blast(sk).catch((e) => note(String(e.message || e).toUpperCase(), 2.5));
  };
  const saveWall = async (o: { wall?: string; name?: string; kind?: SketchKind } = {}) => {
    const id = o.wall || (paint ? paint.id : ''); if (!id) throw new Error('paint a wall first');
    if (!wallOf.has(id)) throw new Error('no wall ' + id);
    await book.loaded;
    const kind = o.kind || book.state.kind, name = cleanName(o.name || '') || `SKETCH ${book.all().filter((s) => s.mine).length + 1}`;
    const sk = sketchOf(spray.strokes(id), name, kind); if (!sk) throw new Error('nothing painted on ' + id + ' this time round to save');
    await book.add(sk); note(`SAVED ${sk.name} TO THE SKETCHBOOK`, 2); return sk;
  };
  const setCap = (c: 1 | 2 | 3) => { can.cap = c; note(`${CAPS[c]} CAP · ${cm(footprint(can).width)} CM LINE`); hud(); };
  const setColour = (i: number) => { colourI = (i + COLOURS.length) % COLOURS.length; can.colour = COLOURS[colourI]; can.buff = false; note(COLOUR_NAMES[colourI]); hud(); };
  const undo = (id?: string) => {
    const w = id ? wallOf.get(id) : paint ? paint.spot : null; if (!w) return 0;
    stroke = null; line = null;
    const ids = id ? [id] : runOf(w).ids, gone = spray.undo(ids);
    if (paint) note(gone ? `UNDONE · ${spray.undoable(ids)} MORE` : 'NOTHING TO UNDO');
    return gone ? gone.length : 0;
  };
  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (!MOVE.includes(k)) return;
    e.preventDefault(); e.stopPropagation();
    if (down && !e.repeat && k === 'r') { if (opts.onRec) opts.onRec(); return; } // recording belongs to whoever mounted the game
    if (bust) return; // nothing to do while you are being nicked
    // a sketch going up stops when the writer moves (what is up stays; Z takes it back)
    if (down && !e.repeat && auto && auto.group[0] === 'p' && ['a', 'd', ' ', 'c', 'f', 'Escape'].includes(k)) stopAuto(false);
    if (down && !e.repeat && k === 'b') { book.setOpen(!book.state.open); if (book.state.open) note(paint ? 'PICK A SKETCH · CLICK THE WALL TO BLAST' : 'PICK A SKETCH · WALK UP TO A WALL'); }
    if (down && (k === '[' || k === ']')) { if (!book.state.open) book.setOpen(true); book.step(k === ']' ? 1 : -1); const s = book.pick(); if (s) note(`${s.name} · ${s.kind.toUpperCase()}`); }
    if (down && !e.repeat && book.state.open && k === 'v') { book.speed(-1); note(`SPEED ${book.state.speed}×`); }
    if (down && book.state.open && (k === '-' || k === '=' || k === '+')) { book.size(book.state.size + (k === '-' ? -0.1 : 0.1)); note(`SIZE ${Math.round(book.state.size * 100)}%`); }
    if (down && !e.repeat && book.state.open && (k === 'g' || k === 'Enter')) blastNow();
    if (down && !e.repeat && k === 'n') { if (!book.state.open) book.setOpen(true); saveWall({ name: book.nameField().value }).catch((er) => note(String(er.message || er).toUpperCase(), 2.5)); }
    if (down && !e.repeat && k === 'f') togglePaint();
    if (down && !e.repeat && k === 'p') { const on = !law.state().on; law.setOn(on); say2(on ? 'PATROL ON · WATCH FOR THE CAR' : 'PATROL OFF · PAINT IN PEACE', 2); }
    if (down && !e.repeat && k === 'Escape' && paint) togglePaint();
    if (down && !e.repeat && paint && (k === '1' || k === '2' || k === '3')) setCap(Number(k) as 1 | 2 | 3);
    if (down && !e.repeat && paint && k >= '4' && k <= '7' && k.length === 1) setColour(Number(k) - 4);
    if (down && !e.repeat && paint && k === 'Tab') setColour(colourI + (e.shiftKey ? -1 : 1));
    if (down && !e.repeat && paint && k === 'x') { can.buff = !can.buff; note(can.buff ? 'BUFF CAN · TAKES PAINT OFF' : `PAINT · ${COLOUR_NAMES[colourI]}`); hud(); }
    if (down && paint && k === 'z' && !auto) undo();
    if (down && !e.repeat && paint && k === 'h') { help = !help; hud(); }
    if (down && !e.repeat && k === 'c' && !paint) me.crouch = !me.crouch;
    if (down && !e.repeat && k === ' ' && !me.airborne) { me.vy = 4.6; me.airborne = true; me.crouch = false; writer.play('Jump_Start', 0.08, true); }
    if (down) keys.add(k); else keys.delete(k);
  };
  const kd = (e: KeyboardEvent) => onKey(e, true), ku = (e: KeyboardEvent) => onKey(e, false);
  canvas.addEventListener('keydown', kd);
  canvas.addEventListener('keyup', ku);
  canvas.addEventListener('blur', () => { keys.clear(); btn = 0; });
  let drag: { x: number; y: number } | null = null;
  const aim = (e: PointerEvent) => { const b = canvas.getBoundingClientRect(); mouse.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); };
  canvas.addEventListener('pointerdown', (e) => {
    canvas.focus(); aim(e); canvas.setPointerCapture(e.pointerId);
    if (e.button === 1) e.preventDefault();
    if (paint && e.button === 0 && book.state.open && book.pick()) { blastNow(); return; }   // sketchbook open: a click on the wall blasts the sketch picked
    if (paint && (e.button === 0 || e.button === 2)) { if (!btn) pressN++; btn |= e.button === 0 ? 1 : 2; down = mouse.clone(); return; }   // in paint mode the mouse is the can: left sprays, right sprays lightly
    drag = { x: e.clientX, y: e.clientY }; canvas.style.cursor = 'grabbing';
  });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('mousedown', (e) => { if (e.button === 1) e.preventDefault(); });
  // looking round while painting stays on the wall: so far either side of square to it
  const lookBy = (dyaw: number, dpitch: number) => {
    camO.yaw += dyaw; camO.pitch = Math.max(-0.35, Math.min(0.75, camO.pitch + dpitch));
    if (paint) { const y0 = Math.atan2(paint.spot.normal.x, paint.spot.normal.z); let d = camO.yaw - y0; d = Math.atan2(Math.sin(d), Math.cos(d)); camO.yaw = y0 + Math.max(-1.1, Math.min(1.1, d)); }
  };
  canvas.addEventListener('pointermove', (e) => {
    aim(e);
    if (!drag) return;
    lookBy(-(e.clientX - drag.x) * 0.0045, (e.clientY - drag.y) * 0.003);
    drag = { x: e.clientX, y: e.clientY };
  });
  const endDrag = (e: PointerEvent) => {
    aim(e);
    if (e.type === 'pointercancel' || !e.buttons) { btn = 0; drag = null; } else { if (e.button === 0) btn &= ~1; if (e.button === 2) btn &= ~2; if (e.button === 1) drag = null; }
    canvas.style.cursor = paint ? 'crosshair' : 'grab';
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); if (paint) { can.dist = Math.round(Math.max(0.05, Math.min(0.6, can.dist + e.deltaY * 0.0005)) * 200) / 200; note(`CAN ${Math.round(can.dist * 100)} CM OFF · ${cm(footprint(can).width)} CM LINE`, 1); hud(); return; } camO.dist = Math.max(1.2, Math.min(7, camO.dist * Math.exp(e.deltaY * 0.001))); }, { passive: false });

  const ro = new ResizeObserver(() => {
    ({ w, h } = size());
    r.setSize(w, h, false); comp.setSize(w, h); city.resize(w, h);
    cam.aspect = w / h; cam.updateProjectionMatrix();
  });
  ro.observe(host);

  const clock = new THREE.Clock();
  let raf = 0, stopped = false, lastSpray = '';
  // BUSTED: a slow-motion beat with the camera swinging round, the wall gets buffed, the writer starts again
  // spot: the wall they buff (what was being painted by hand); kept: a wall with a half-blasted sketch, which stays
  let bust: { t: number; spot: string; kept: string } | null = null;
  const camPos = new THREE.Vector3(0, 2, 12), camLook = new THREE.Vector3();
  let landT = 0, forceAnim = '', idleT = 0;
  cam.position.copy(camPos);
  const frame = () => {
    if (stopped) return;
    raf = requestAnimationFrame(frame);
    const rdt = Math.min(0.05, clock.getDelta()), dt = bust && bust.t < 1.4 ? rdt * 0.3 : rdt; t += rdt;
    const left = keys.has('ArrowLeft'), rightK = keys.has('ArrowRight'), upK = keys.has('ArrowUp'), downK = keys.has('ArrowDown');
    const ax = bust ? 0 : (keys.has('d') || (!paint && rightK) ? 1 : 0) - (keys.has('a') || (!paint && left) ? 1 : 0);
    const az = bust ? 0 : (keys.has('w') || (!paint && upK) ? 1 : 0) - (keys.has('s') || (!paint && downK) ? 1 : 0);
    const sprint = keys.has('Shift') && !me.crouch && !paint, moving = !!(ax || (az && !paint));
    const speed = me.crouch ? 1.35 : sprint ? 6.2 : 3.3;
    // movement is relative to where the camera looks
    fwd.set(-Math.sin(camO.yaw), 0, -Math.cos(camO.yaw)); side.set(Math.cos(camO.yaw), 0, -Math.sin(camO.yaw));
    if (moving && !paint) {
      const dx = fwd.x * az + side.x * ax, dz = fwd.z * az + side.z * ax, l = Math.hypot(dx, dz);
      me.x = Math.max(-BOUNDS.x, Math.min(BOUNDS.x, me.x + (dx / l) * speed * dt));
      me.z = Math.max(BOUNDS.z0, Math.min(BOUNDS.z1, me.z + (dz / l) * speed * dt));
      // turn toward the way you are going, quickly but not instantly
      let d = Math.atan2(dx, dz) - me.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
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
    sprayingNow = false;
    if (paint) {
      // the view: W S step it in and back, the arrows look along and up the wall
      if (!bust) { camO.dist = Math.max(1.5, Math.min(7, camO.dist + ((keys.has('s') ? 1 : 0) - (keys.has('w') ? 1 : 0)) * 3 * dt)); if (left || rightK || upK || downK) lookBy(((left ? 1 : 0) - (rightK ? 1 : 0)) * 1.2 * dt, ((upK ? 1 : 0) - (downK ? 1 : 0)) * 0.8 * dt); }
      // stand square to the wall, an arm's length off it, within the ends of its run
      let sp = paint.spot, n = sp.normal, tx = n.z, tz = -n.x;
      const run = runOf(sp);
      let off = offOf(sp, me.x, me.z), along = alongOf(sp, me.x, me.z);
      along += ax * 1.1 * dt;
      // spraying past arm's reach: the writer steps along the wall after the can
      if (Math.abs(follow) > 1.1) along += Math.sign(follow) * Math.min(Math.abs(follow) - 1.1, (auto ? 4 : 1.6) * dt);
      off = Math.max(0.55, Math.min(0.9, off)); along = run.hi - run.lo > 0.7 ? Math.max(run.lo + 0.3, Math.min(run.hi - 0.3, along)) : (run.lo + run.hi) / 2;
      // things standing at the wall (a vending machine, a bin): the writer stands to one side of them, or steps past
      for (const b of city.blockers) {
        const px = sp.center.x + n.x * off + tx * along, pz = sp.center.z + n.z * off + tz * along, ix = sp.center.x - n.x * 0.2, iz = sp.center.z - n.z * 0.2;
        if (px <= b.x0 - 0.35 || px >= b.x1 + 0.35 || pz <= b.z0 - 0.35 || pz >= b.z1 + 0.35 || (ix > b.x0 && ix < b.x1 && iz > b.z0 && iz < b.z1)) continue;
        const c = [alongOf(sp, b.x0 - 0.35, b.z0 - 0.35), alongOf(sp, b.x1 + 0.35, b.z1 + 0.35)], a0 = Math.min(...c), a1 = Math.max(...c);
        along = ax > 0 ? a1 : ax < 0 ? a0 : along - a0 < a1 - along ? a0 : a1;
      }
      me.x = sp.center.x + n.x * off + tx * along; me.z = sp.center.z + n.z * off + tz * along;
      let dh = Math.atan2(-n.x, -n.z) - me.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); me.heading += dh * Math.min(1, dt * 10);
      // aim: where the mouse points on this wall or the next one along. Anywhere along it paints (the writer steps after
      // the can); only height is out of reach
      ray.setFromCamera(mouse, cam);
      let h = auto || bust ? null : spray.hit(ray, run.ids);
      // not through a vending machine or a pier: what is hidden behind something solid is out of the can's way
      if (h) { const c = cam.position, len = Math.hypot(h.point.x - c.x, h.point.z - c.z); if ((1 - sightTo(c.x, c.z, c.y, h.point.x, h.point.z, h.point.y, h.wall)) * len > 0.3) h = null; }
      if (h && h.wall !== sp) { paint = { id: h.id, spot: h.wall }; sp = h.wall; n = sp.normal; hud(); }
      const feet = me.gy, top = feet + me.y + (me.crouch ? 1.9 : 2.6);
      const tooHigh = !!h && h.point.y >= top, reach = !!h && !tooHigh, pressing = btn !== 0 && !auto;
      // the sketchbook open: the sketch picked shows where a click would put it
      aimAt = h ? { id: h.id, x: h.x, y: h.y } : null;
      const armed = book.state.open && !auto ? book.pick() : null;
      plan = armed && h ? planFor(armed, h.wall, h, book.state.size) : null;
      ghost.visible = !!(armed && plan && h);
      if (armed && plan && h) {
        ghostPic(armed);
        spray.point(h.id, plan.at[0] + armed.w * plan.scale / 2, plan.at[1] + armed.h * plan.scale / 2, ghost.position).addScaledVector(h.wall.normal, 0.03);
        ghost.rotation.set(0, Math.atan2(h.wall.normal.x, h.wall.normal.z), 0); ghost.scale.set(armed.w * plan.scale, armed.h * plan.scale, 1);
      }
      let P: THREE.Vector3 | null = null, vol = 1, h0 = h;
      if (down && h) { ray.setFromCamera(down, cam); const q = spray.hit(ray, [h.id]); if (q && q.point.y < top) h0 = q; }
      down = null;
      if (auto) {
        preview.visible = false;
        // the writer paints by themselves: every logged point up to now, then where the can is between two of them
        const a = auto, st = a.list[a.i];
        if (st.wall !== sp.id) { squareUp(wallOf.get(st.wall)!); sp = paint.spot; n = sp.normal; }
        if (a.gap > 0) { a.gap -= dt; P = spray.point(st.wall, st.pts[0][0], st.pts[0][1], canAt); }
        else {
          if (a.k === 0) spray.begin(st.wall, st.can, { seed: st.seed, group: a.group });
          a.t += dt * a.speed;
          let q = st.pts[Math.max(0, a.k - 1)];
          while (a.k < st.pts.length && st.pts[a.k][2] <= a.t) { q = st.pts[a.k++]; spray.to(q[0], q[1], q[2]); }
          let x = q[0], y = q[1];
          if (a.k < st.pts.length && a.k > 0) { const b = st.pts[a.k], u = (a.t - q[2]) / Math.max(1e-4, b[2] - q[2]); x += (b[0] - x) * u; y += (b[1] - y) * u; spray.to(x, y, a.t); }
          P = spray.point(st.wall, x, y, canAt); sprayingNow = true; lastSpray = st.wall; vol = st.can.pressure ?? 1;
          if (a.k >= st.pts.length) { spray.end(); a.i++; a.k = 0; a.t = 0; a.gap = 0.18 / a.speed; if (a.i >= a.list.length) stopAuto(true); }
        }
      } else {
        // Shift: a straight line from where the button went down to where it is let go (near enough level or upright
        // becomes exactly so), then sprayed in one even pass
        if (pressing && keys.has('Shift') && !line && h && reach) { spray.end(); stroke = null; line = { id: h.id, x: h0!.x, y: h0!.y, press: btn & 1 ? 1 : 0.5 }; }
        let end: { x: number; y: number } | null = null;
        if (line) {
          if (h && h.id === line.id && reach) { let dx = h.x - line.x, dy = h.y - line.y; if (Math.abs(dy) < Math.abs(dx) * 0.07) dy = 0; else if (Math.abs(dx) < Math.abs(dy) * 0.07) dx = 0; end = { x: line.x + dx, y: line.y + dy }; }
          if (!pressing) {
            const len = end ? Math.hypot(end.x - line.x, end.y - line.y) : 0;
            if (end && len > 0.02) { auto = { list: [{ wall: line.id, can: { ...can, pressure: line.press }, pts: [[line.x, line.y, 0], [end.x, end.y, len / 2.4]] }], i: 0, k: 0, t: 0, gap: 0, speed: 1, group: '', done: () => {} }; sprayed = true; }
            line = null;
          } else if (!keys.has('Shift')) line = null;
        }
        preview.visible = !!(line && end);
        if (line && end) { const g = preview.geometry.attributes.position as THREE.BufferAttribute; spray.point(line.id, line.x, line.y, lineA).addScaledVector(n, 0.02); g.setXYZ(0, lineA.x, lineA.y, lineA.z); spray.point(line.id, end.x, end.y, lineA).addScaledVector(n, 0.02); g.setXYZ(1, lineA.x, lineA.y, lineA.z); g.needsUpdate = true; }
        // by hand: the can's point eases after the mouse (a steadier line), and each frame adds a point to the stroke.
        // A change of wall, cap, colour, distance or pressure starts a new stroke where the last one stopped
        if (pressing && !line && !auto && h && reach) {
          const press = btn & 1 ? 1 : 0.5, key = [h.id, can.cap, can.dist, can.colour, press, can.buff].join('|');
          if (!stroke || stroke.key !== key || !spray.stroke()) { spray.begin(h.id, { ...can, pressure: press }, { group: 'h' + pressN }); stroke = { key, t0: t - rdt, x: h0!.x, y: h0!.y }; spray.to(stroke.x, stroke.y, 0); }
          const k = 1 - Math.exp(-rdt / 0.035); stroke.x += (h.x - stroke.x) * k; stroke.y += (h.y - stroke.y) * k;
          spray.to(stroke.x, stroke.y, t - stroke.t0); sprayingNow = sprayed = true; lastSpray = h.id; vol = press;
          P = spray.point(h.id, stroke.x, stroke.y, canAt);
        } else { if (stroke) { spray.end(); stroke = null; } if (h) P = canAt.copy(h.point); }
      }
      // low on the wall the writer gets down to it, and stands again for the rest
      if (P && !me.airborne) { if (P.y < feet + 0.8) me.crouch = true; else if (P.y > feet + 1.15) me.crouch = false; }
      follow = P && (sprayingNow || auto) ? (P.x - me.x) * n.z - (P.z - me.z) * n.x : 0;
      prompt(t < tipHold ? tipNote : auto ? (blasting ? `BLASTING ${blasting} · MOVE TO STOP` : '') : armed ? (h ? `CLICK TO BLAST ${armed.name}${plan && plan.fitted ? ' · SIZED TO FIT' : ''}` : 'POINT AT THE WALL TO PLACE IT') : line ? 'STRAIGHT LINE · LET GO TO SPRAY IT' : tooHigh ? 'TOO HIGH TO REACH · AIM LOWER' : !h ? 'POINT AT THE WALL' : !sprayed ? 'HOLD THE MOUSE BUTTON TO SPRAY · F WHEN DONE' : '');
      reticle.visible = !!P && !armed; dot.visible = !!P;
      if (P) {
        reticle.position.copy(P).addScaledVector(n, 0.02); reticle.rotation.set(0, Math.atan2(n.x, n.z), 0); dot.position.copy(reticle.position); dot.rotation.copy(reticle.rotation);
        reticle.scale.setScalar(Math.max(0.004, footprint(auto ? auto.list[Math.min(auto.i, auto.list.length - 1)].can : can).width / 2));
        const col = auto || reach ? (can.buff && !auto ? '#9a9a9e' : '#ffffff') : '#555555';
        (reticle.material as THREE.MeshBasicMaterial).color.set(col); (dot.material as THREE.MeshBasicMaterial).color.set(col);
        // the arm goes up with the can wherever the aim is on the wall; the hand stops the can's distance off it
        writer.aim(aimHand.copy(P).addScaledVector(n, can.dist + 0.03), P, sprayingNow ? 1 : 0.85);
      } else writer.aim(null);
      hissOn(sprayingNow, 0.55 + 0.45 * vol);
    } else {
      reticle.visible = dot.visible = preview.visible = ghost.visible = false; hissOn(false); writer.aim(null); follow = 0; aimAt = null; plan = null;
      const nw = !bust && nearestWall(2.5), sk = book.state.open ? book.pick() : null;
      prompt(t < tipHold ? tipNote : nw ? (sk ? `PRESS F · THEN CLICK THE WALL TO BLAST ${sk.name}` : 'PRESS F TO PAINT THIS WALL') : sk ? 'WALK UP TO A WALL TO BLAST ' + sk.name : '');
    }
    helpEl.style.display = paint && help ? 'block' : 'none';
    spray.update(dt, me);
    law.pushOut(me, 0.35);
    const ev = law.update(dt, t, { x: me.x, z: me.z, y: me.y, crouch: me.crouch, painting: !!paint, spraying: sprayingNow });
    if (ev && opts.onEvent) try { opts.onEvent(ev); } catch { /* the host's business */ }
    if (ev === 'busted') {
      // a sketch half put up stays on the wall (owner, 16 Nov), undoable as one step; hand painting is still buffed
      const blastWall = auto && auto.group[0] === 'p' ? auto.list[Math.min(auto.i, auto.list.length - 1)].wall : '';
      bust = { t: 0, spot: blastWall && blastWall === lastSpray ? '' : lastSpray, kept: blastWall };
      if (paint) togglePaint();
      btn = 0; me.crouch = false; keys.clear();
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
        say2(bust.spot ? `BUSTED · ${bust.spot.toUpperCase()} GOT BUFFED · BACK TO THE START` : bust.kept ? `BUSTED · THE PIECE STAYS ON ${bust.kept.toUpperCase()} · BACK TO THE START` : 'BUSTED · BACK TO THE START', 3.5);
        Object.assign(me, { x: 0, z: 8, y: 0, vy: 0, heading: Math.PI, crouch: false, airborne: false });
        Object.assign(camO, { yaw: 0, pitch: 0.12, dist: 3.4 });
        bust = null; lastSpray = ''; law.reset(); writer.play('Idle_Loop', 0.2);
      }
    }
    if (bust) { /* the knockback clip plays out */ }
    else if (paint && !me.airborne) writer.play(me.crouch ? (ax ? 'Crouch_Fwd_Loop' : 'Crouch_Idle_Loop') : ax ? 'Jog_Fwd_Loop' : 'Idle_Loop', 0.15);
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
let camY = Math.max(0.35, tgtY + Math.sin(camO.pitch) * camO.dist), camX = Math.max(-26.5, Math.min(26.5, cx)), camZ = Math.max(BOUNDS.z0 - 0.5, Math.min(BOUNDS.z1 + 4, cz));
    // painting behind something (a vending machine on the pavement): the camera comes in front of it
    if (paint) { const k = sightTo(me.x, me.z, tgtY, camX, camZ, camY); if (k < 1) { const f = Math.max(0.3, k - 0.1); camX = me.x + (camX - me.x) * f; camZ = me.z + (camZ - me.z) * f; camY = tgtY + (camY - tgtY) * f; } }
    camPos.set(camX, camY, camZ);
    cam.position.lerp(camPos, Math.min(1, dt * 10));
    camLook.set(me.x + Math.cos(camO.yaw) * 0.55, tgtY, me.z - Math.sin(camO.yaw) * 0.55);
    cam.lookAt(camLook);
    city.update(dt, t, cam);
    city.beforeRender(r, scene, cam);
    grade.tick(t);
    comp.render(dt);
    hud();
  };
  const play = (strokes: Stroke[], o: { wall?: string; at?: [number, number]; scale?: number; speed?: number } = {}) => new Promise<boolean>((res, rej) => {
    try {
      if (!(o.speed && o.speed > 0)) { stroke = null; spray.replay(strokes, o); return res(true); }
      const k = o.scale ?? 1, [ax, ay] = o.at || [0, 0];
      const list = strokes.filter((s) => s.pts.length).map((s) => ({ wall: o.wall || s.wall, can: { colour: s.colour, cap: s.cap, dist: s.dist, pressure: s.pressure, buff: s.buff } as Can, seed: s.seed, pts: s.pts.map(([x, y, tt]) => [ax + x * k, ay + y * k, tt] as [number, number, number]) }));
      const bad = list.find((s) => !wallOf.has(s.wall)); if (bad) throw new Error('no wall ' + bad.wall);
      if (!list.length || bust) return res(false);
      // the writer goes to the wall, in front of where the piece starts
      stopAuto(false); stroke = null; line = null; btn = 0;
      const w = wallOf.get(list[0].wall)!, a0 = list[0].pts[0][0] - w.w / 2;
      if (!paint || paint.spot !== w || Math.abs(alongOf(w, me.x, me.z) - a0) > 3) { me.x = w.center.x + w.normal.x * 0.7 + w.normal.z * a0; me.z = w.center.z + w.normal.z * 0.7 - w.normal.x * a0; me.heading = Math.atan2(-w.normal.x, -w.normal.z); squareUp(w); }
      auto = { list, i: 0, k: 0, t: 0, gap: 0.4, speed: o.speed, group: 'p' + ++autoN, done: res };
    } catch (e) { rej(e); }
  });

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
    paint: (id, pts, o = {}) => { stroke = null; spray.path(id, pts, { colour: o.colour || COLOURS[0], cap: o.cap || 2, dist: o.dist ?? 0.2, pressure: o.pressure ?? 1, buff: !!o.buff }); },
    clearPaint: (id?: string) => { stroke = null; line = null; stopAuto(false); spray.clear(id); },
    strokes: (id) => spray.strokes(id).map((s) => ({ ...s, pts: s.pts.map((p) => [p[0], p[1], p[2]] as [number, number, number]) })),
    play,
    undo: (id) => undo(id),
    sketches: () => book.all().map(infoOf),
    sketch: (q, kind) => { const s = findSketch(q, kind); return s ? JSON.parse(JSON.stringify(s)) : null; },
    saveSketch: async (o = {}) => infoOf(await saveWall(o)),
    deleteSketch: (id) => book.remove(id),
    blast: async (q, o = {}) => { await book.loaded; const s = findSketch(q, o.kind); if (!s) throw new Error('no sketch ' + q); book.choose(s.id); return blast(s, o); },
    sketchbook: (o) => {
      if (o) { if (o.kind) book.setKind(o.kind); if (o.pick) book.choose(o.pick); if (o.speed) book.speed(o.speed); if (o.size) book.size(o.size); if (o.open != null) book.setOpen(o.open); }
      return { ...book.state, blasting, plan };
    },
    can: (o) => {
      if (o) { if (o.cap) can.cap = o.cap; if (o.dist != null) can.dist = Math.max(0.05, Math.min(0.6, o.dist)); if (o.buff != null) can.buff = o.buff; if (o.colour && COLOURS.includes(o.colour)) { colourI = COLOURS.indexOf(o.colour); can.colour = o.colour; } hud(); }
      return { ...can };
    },
    paintStats: () => spray.stats(),
    walls: (o = {}) => city.walls.filter((w) => o.near == null || Math.hypot(w.center.x - me.x, w.center.z - me.z) - w.w / 2 < o.near).map((w) => ({ id: w.id, w: w.w, h: w.h, x: w.center.x, y: w.center.y, z: w.center.z, nx: w.normal.x, nz: w.normal.z, painted: spray.painted(w.id) })),
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
    goto: (x, z, yaw, pitch) => { if (paint) togglePaint();   // painting holds the writer at the wall: put the can down first
      me.x = x; me.z = z; if (yaw != null) { camO.yaw = yaw; me.heading = yaw + Math.PI; } if (pitch != null) camO.pitch = pitch; },
    stop: () => {
      stopped = true; cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener('keydown', kd); canvas.removeEventListener('keyup', ku);
      hissOn(false); law.dispose(); book.dispose(); if (bus) void bus.ctx.close(); spray.dispose(); writer.dispose(); city.dispose(); look.dispose(); comp.dispose(); r.dispose(); canvas.remove(); tip.remove(); helpEl.remove();
      for (const o of [reticle, dot, preview, ghost, ghostFrame]) { o.geometry.dispose(); (o.material as THREE.Material).dispose(); }
      const gm = (ghost.material as THREE.MeshBasicMaterial).map; if (gm) gm.dispose();
    },
  };
}
