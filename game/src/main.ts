/**
 * V3XV0ID GAME: the engine behind the mixer's GAME tab. A night city (./city.ts, forked from ESCAPE FROM TERRORNODE)
 * rendered the TERRORNODE way (ACES filmic, soft shadows, GTAO, bloom) and graded black and white.
 *
 *   const g = await VXGAME.mount(host, { base: 'vx/game/', high: true, onStatus })
 *   g.stop();  g.canvas  (to record)
 *
 * Stage 2: the writer, third person (./writer.ts). WASD or arrows move relative to the camera (jog), Shift sprints,
 * C crouches (sneak), Space jumps, drag to look. Movement is snappy: run speed in about 0.15 s, stopped in about 0.12 s,
 * quick turns (on the spot only for a big reversal), a lean into turns; the clips blend by speed
 * (idle, walk, jog, sprint; crouch idle, crouch walk) at the cadence that matches the stride, the feet are fitted to
 * the ground (kerbs too), a jump gathers first and a landing gives; the camera keeps up. g.gait() measures it. Stage 3: F at any wall paints it (./spray.ts): the mouse is the can,
 * left button sprays, right button sprays lightly, Shift lays a straight line, the wheel is the can's distance, 1 2 3
 * the cap, Tab or 4 to 7 the colour, X the buff can, Z undo; A D step along the wall, W S and the arrows move the view.
 * While the button is held the writer stays planted (no stepping after the can, no crouching, no idle sway); the can
 * reaches 2.4 m either side, further needs A D. The painting HUD (./hud.ts) draws the can's settings with keycaps.
 * Stage 4: the law (./cops.ts): heat, a patrol car, officers on foot; BUSTED loses a piece painted by hand (a sketch half blasted stays). P turns the patrol off.
 * The SKETCHBOOK (./sketchbook.ts): B opens a panel of sketches (tags, throw-ups, pieces); pick one, aim at a wall and
 * click (or G) and the writer puts it up stroke by stroke ("blast"), at 1x 2x 4x, sized to fit; moving stops it, Z takes
 * it back in one go. N (or SAVE WALL) keeps what is on the wall being painted as a new sketch.
 * Vex's PHONE (./phone/): E (or the dock's PHONE tile) gets it out: CAMERA, PHOTOS, MESSAGES, MAP, MUSIC, WALLET
 * (phone.ts). The game runs on behind it; the writer stands still. Contacts message him and MISSIONS arrive in MESSAGES
 * (missions.ts: data, judged here from the game's own events). Q (or the PHOTO tile) takes a clean picture, no HUD, at
 * up to 3840 px wide, kept as a PNG (this browser, the desktop's VexVoid Photos folder, the player's account); L (or
 * GALLERY) opens the phone on the photos. O is photo mode: time stops, the HUD goes, WASD / the arrows / a drag orbit the
 * camera and the wheel zooms; Q shoots. The MINI-MAP (./minimap.ts) top left: local, turning with the writer; K hides it.
 * PARKOUR (./parkour.ts): running at something low vaults it; Space at a ledge up to 2.25 m grabs it and mantles up;
 * W at a drainpipe or a ladder climbs it (W S, Space jumps off, C lets go; C at the top of one climbs down); roofs, fire
 * escapes, scaffold lifts and the warehouse mezzanine are walkable; big drops roll or land hard. WATER: into the canal
 * (a jump, a fall, the water steps) and Vex swims (out at the steps or a canal ladder), comes out soaked (./wet.ts:
 * darker cloth, drips, wet footprints, slower, no painting until his hands dry) and the phone is dead until a new
 * burner from the PHONE KIOSK on the S road (missions wait; the save remembers). The patrol never follows up or in.
 * Built by scripts/build-game.sh into vx/game/vexvoid-game.js (window.VXGAME).
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { buildDistrict } from './district';
import { STEP } from './world';
import { loadLook, makeGradePass } from './look';
import { loadWriter, type GaitInfo, type GripReport } from './writer';
import type { ArmReport } from './bodyProxy';
import { makeSpray, footprint, COLOURS, COLOUR_NAMES, type Can, type Stroke, type WallStore } from './spray';
import { makeLaw, type LawState } from './cops';
import { makeHud, keyed, kc, hudScale } from './hud';
import { makeMusic, type MusicState, type Track } from './music';
import { makeLoading } from './loading';
import { localPhotos, merged, type Photo, type PhotoStore, type PhotoCloud } from './phone/photos';
import { makeGallery, type GalleryState } from './phone/gallery';
import { makeCamera, type PhotoTaken } from './phone/camera';
import { makePhone, type AppId, type PhoneState } from './phone/phone';
import { makeMissions, localProgress, MISSIONS, CONTACTS, SETUP_WALLS, type ProgressStore, type MissionInfo, type Marker, type Msg, type Framed } from './phone/missions';
import type { Pack } from './phone/packs';
import { makeMinimap, type MinimapState } from './minimap';
import { makeBook, slotsOf, sketchOf, fit, drawSketch, secsOf, cleanName, type Sketch, type SketchKind, type SketchStore, type BookState } from './sketchbook';
import { makeParkour, type PkState, type Input as PkInput } from './parkour';
import { makeWet } from './wet';
import { CLIMBABLE, WATER_Y } from './plan';

export type MountOpts = { base: string; high?: boolean; onStatus?: (s: string) => void; onHud?: (s: string) => void; onRec?: () => void;
  /** Where the walls' paint is kept (default: this browser). */
  store?: WallStore;
  /** Where the player's own sketches are kept (default: this browser). */
  sketches?: SketchStore;
  /** What happens to the writer, for a host that keeps a player's history: seen, caught, got away. */
  onEvent?: (ev: 'alert' | 'busted' | 'escaped') => void;
  /** The soundtrack: VexVoid's own tracks by default (./playlist.ts), a host's own list, or false for none. */
  music?: Track[] | false;
  /** Where the player's photos are kept (default: this browser). */
  photos?: PhotoStore;
  /** The player's account, beside this browser (the web game signed in): photos go to both, the gallery lists both. */
  photoCloud?: PhotoCloud;
  /** Where the story's progress is kept (messages, missions, places on the map; default: this browser / the app's user data). */
  progress?: ProgressStore };
export type { PhotoTaken };
export type Game = { canvas: HTMLCanvasElement; stop: () => void; snap: (width?: number) => string; inspect: (o: { yaw?: number; pitch?: number; dist?: number; heading?: number; anim?: string; at?: number | null; view?: { yaw: number; pitch: number; dist: number; bone?: string; h?: number; fov?: number } | null; fill?: number }) => void; where: () => { x: number; z: number; y: number; yaw: number; heading: number; anim: string; speed: number; tip: [number, number, number] | null };
  /** Call the law on the writer now: the patrol car pulls up nearest them and two officers give chase (testing an escape). */
  alarm: () => void;
  /** The district's named places (the studio is home; the shops; the tunnel, the rail, the warehouse, the scaffolds...). */
  places: () => { id: string; name: string; x: number; z: number; y: number; yaw: number; about: string }[];
  /** Put the writer at a named place (for testing). Returns it, or null if there is no such place. */
  teleport: (id: string) => { id: string; name: string; x: number; z: number; y: number } | null;
  /** Where the writer is in the district: the nearest place, a shop door they stand at, the ground level. */
  at: () => { place: string; dist: number; door: string; ground: number; inside: boolean };
  /** An overhead picture of the whole district, places named (PNG data URL). */
  map: (width?: number) => string;
  /** The train on the viaduct (head x, track z, running). */
  train: () => { x: number; z: number; on: boolean };
  /** The soundtrack (on by default; M toggles it; the choice is kept per viewer): on/off, next track; returns what plays. */
  music: (o?: { on?: boolean; next?: boolean }) => MusicState | null;
  /** Take a photo now (as Q does): a clean frame, no HUD, `width` px wide (default twice the view, up to 3840). Resolves
   *  once it is kept: its id, size, bytes, where it is kept (browser, account, disk) and, on disk, its file. */
  photo: (o?: { width?: number }) => Promise<PhotoTaken>;
  /** Every photo the player has, newest first. */
  photos: () => Promise<Photo[]>;
  /** A photo as a data URL (the PNG, or its thumbnail): for an agent to look at. */
  photoData: (id: string, thumb?: boolean) => Promise<string | null>;
  /** Delete one of the player's photos. */
  deletePhoto: (id: string) => Promise<boolean>;
  /** The gallery panel (L): open or close it, view one photo big (view: an id; null back to the grid). */
  gallery: (o?: { open?: boolean; view?: string | null }) => GalleryState;
  /** Vex's phone (E): out or away, an app (home camera gallery messages map music wallet), a contact's thread. */
  phone: (o?: { open?: boolean; app?: AppId; thread?: string | null }) => PhoneState;
  /** The messages: every thread (contact, unread, the last message); with contact, that thread in full (read: mark it read). */
  messages: (o?: { contact?: string; read?: boolean }) => { unread: number; contacts: { id: string; name: string; unread: number; last: Msg }[]; thread?: Msg[] };
  /** The missions: each one's state and objectives, the one in play, where the markers are, the places on the map.
   *  reset: start the story again (the paint stays on the walls). start: bring that mission in now, whatever comes
   *  before it (building and checking packs). */
  missions: (o?: { reset?: boolean; start?: string }) => { ready: boolean; list: MissionInfo[]; current: { mission: string; title: string; text: string; type: string; marker: Marker | null } | null; markers: Marker[]; known: string[] };
  /** CONTENT PACKS (./phone/packs.ts; game/content/packs): the packs in play, and what a pack may refer to (contacts,
   *  missions, places, walls, starter sketches, setups, the bounds and the buildings, for the validator). load: a pack's
   *  missions into this game now, no rebuild (until the game reloads; a pack can only add); unload: take one out again. */
  packs: (o?: { load?: Pack; unload?: string }) => PacksInfo;
  /** The mini-map (K): on or off; where it is, its radius and turn. */
  minimap: (o?: { on?: boolean }) => MinimapState;
  /** The phone's MAP as a picture: the whole district north up, painted walls filled, places known, markers, the writer. */
  phoneMap: (width?: number) => string;
  /** Photo mode (O): time stops, the HUD goes, the camera orbits and zooms for framing; Q shoots. */
  photoMode: (on?: boolean) => { on: boolean };
  /** The torch (T): on/off; a lit torch is seen from further by the law. */
  torch: (on?: boolean) => { on: boolean; intensity?: number; at?: number[]; dir?: number[] };
  /** Render knobs for tests and tuning: ambient occlusion, bloom, the real lights near the writer, the street reflection. */
  quality: (o?: { ao?: boolean; bloom?: boolean; lights?: number; refl?: boolean }) => { ao: boolean; bloom: boolean; lights: number; refl: boolean };
  spots: () => { id: string; w: number; h: number; x: number; y: number; z: number }[];
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
  /** colours: the sketch's colour slots repainted, by slot ({ 0: '#0c0c0e' }) or by its own colour ({ '#f4f4f4': '#9a9a9e' }); remembered for that sketch. */
  blast: (idOrName: string, o?: { wall?: string; at?: [number, number]; size?: number; speed?: number; kind?: SketchKind; colours?: unknown }) => Promise<boolean>;
  /** The sketchbook panel: open it, pick, speed, size; returns its state and where a blast would go now. */
  sketchbook: (o?: Partial<BookState> & { colours?: unknown }) => BookState & { colours: { slots: string[]; now: string[] }; blasting: string; armed: boolean; plan: { wall: string; at: [number, number]; scale: number; fitted: boolean } | null };
  /** How the writer moves: speed, heading, and how the soles meet the ground (stats since the last reset). */
  /** Tuning: the speed a moving clip was made for. */
  tuneGait: (clip: string, v: number) => void;
  /** The head on the body (tests): drift from its rest place on the chest (m), neck and head turn (rad), neck gap change (m). */
  head: (o?: { steady?: boolean }) => { drift: number; neck: number; head: number; gap: number; hood: number; worst: string; pts: number; wob: number };
  arms: () => ArmReport;
  grip: () => GripReport;
  /** Keep the writer's arms out of the trunk and pack (default on); off shows the clips as they are. */
  fixArms: (on: boolean) => void;
  /** A can in the writer's right hand (default on). */
  carry: (on: boolean) => void;
  far: (side: 0 | 1) => { d: number; info: string };
  ik: () => Record<string, number>;
  /** Where bones are now (world), by short name ('RightHand', 'RightHandIndex3' ...), for tests. */
  bones: (names: string[]) => Record<string, [number, number, number] | null>;
  gait: (reset?: boolean) => GaitInfo & { move: { speed: number; vx: number; vz: number; heading: number; yawRate: number; airborne: boolean; crouch: boolean; gy: number } };
  /** Take back the last stroke on a wall (none given: the wall being painted). Returns how many strokes went. */
  undo: (id?: string) => number;
  /** The can in the writer's hand; give fields to change them. */
  can: (o?: Partial<Can>) => Can;
  /** What the paint costs in memory: walls with paint, tiles alive, MB of canvas. */
  paintStats: () => { walls: number; painted: number; tiles: number; mb: number; resting: number; undo: number; undoTiles: number; drips: number }; flush: () => Promise<void>;
  /** PARKOUR: what the writer is doing (none vault mantle climb swim roll heavy hard), the route, out of the patrol's
   *  reach or not, what the prompt offers here; counts. climb: put the writer on a route (its id) at its foot or at y;
   *  swim: into the water here; reset: stop whatever it is. cam: where the camera is and whether it is inside anything. */
  parkour: (o?: { climb?: string; y?: number; swim?: boolean; reset?: boolean }) => PkState & { cam: { x: number; y: number; z: number; inside: boolean }; x: number; z: number; gy: number; heading: number; airborne: boolean; stuck: boolean };
  /** The ways up (drainpipes, fire escapes, ladders, scaffold ladders, canal ladders) and the heavens; near: within this many metres. */
  climbables: (o?: { near?: number }) => { routes: { id: string; kind: string; name: string; x: number; z: number; y0: number; y1: number; top: { x: number; z: number; y: number } | null; bld: string; dist: number }[]; heavens: { id: string; name: string; wall: string; x: number; z: number; y: number; worth: number; painted: boolean; about: string }[] };
  /** WATER: how wet (0..1), swimming, whether the hands are dry enough to paint, the drips and marks showing, and the
   *  phone (dead, the case, messages held). wet sets it; drown kills the phone as the canal would; newPhone is the kiosk's
   *  burner; case gives or takes the waterproof case. */
  water: (o?: { wet?: number; drown?: boolean; newPhone?: boolean; case?: boolean }) => { wet: number; swimming: boolean; canPaint: boolean; drying: number; drips: number; marks: number; phone: { dead: boolean; case: boolean; held: number; drowned: number; replaced: number } }; goto: (x: number, z: number, yaw?: number, pitch?: number, y?: number) => void; law: () => LawState; cops: (on: boolean) => void; audio: () => { ctx: AudioContext; node: AudioNode } | null };

export type PacksInfo = { packs: { id: string; credit?: string; missions: string[] }[]; added?: string[]; skipped?: string[]; removed?: number;
  refs: { contacts: string[]; missions: string[]; places: { id: string; x: number; y: number; z: number }[]; walls: string[]; sketches: { id: string; kind: SketchKind }[];
    setups: Record<string, string>; bounds: { x0: number; x1: number; z0: number; z1: number }; blds: { id: string; x0: number; x1: number; z0: number; z1: number; y: number; h: number; open: boolean }[] } };
export type SketchInfo = { id: string; name: string; kind: SketchKind; w: number; h: number; strokes: number; secs: number; mine: boolean; about?: string };
const infoOf = (s: Sketch): SketchInfo => ({ id: s.id, name: s.name, kind: s.kind, w: s.w, h: s.h, strokes: s.strokes.length, secs: Math.round(secsOf(s)), mine: !!s.mine, about: s.about });

// VexVoid's grade: no colour at all, hard contrast, a heavy vignette
const MONO = { shadow: [1, 1, 1] as [number, number, number], high: [1, 1, 1] as [number, number, number], sat: 0, contrast: 1.32, vignette: 0.72 };
const FIT_FEET = true;

export async function mount(host: HTMLElement, opts: MountOpts): Promise<Game> {
  const high = opts.high !== false;
  // the loading screen: VexVoid's own clips and the progress line, until the first frame is drawn (./loading.ts)
  const loading = makeLoading(host, opts.base + 'loading/');
  const say = (s: string) => { loading.say(s); if (opts.onStatus) opts.onStatus(s); };
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
  const tip = document.createElement('div'); tip.dataset.vxPrompt = 'tip';
  tip.style.cssText = 'position:absolute;left:50%;bottom:9%;transform:translateX(-50%);display:none;align-items:center;gap:8px;padding:8px 14px;background:rgba(8,8,10,.66);border:1px solid rgba(255,255,255,.22);border-radius:10px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font:700 11.5px/1 "SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap;max-width:calc(100% - 32px);overflow:hidden;text-overflow:ellipsis;pointer-events:none;z-index:2';
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  host.appendChild(tip);
  let tipNow = '', sprayed = false, follow = 0, tipHold = 0, tipNote = '';
  // the line under the picture: square brackets are keys ("[F] PAINT THIS WALL" shows F on a keycap)
  const prompt = (s: string) => { if (s !== tipNow) { tipNow = s; tip.innerHTML = keyed(s); tip.style.display = s ? 'flex' : 'none'; } };
  // a short word on what just changed (the cap, the colour, an undo), in the prompt's place for a moment
  const note = (s: string, secs = 1.4) => { tipNote = s; tipHold = t + secs; };
  // the painting HUD: the can drawn (cap, colour, distance, buff, undo, sketchbook, help) in a dock, keys on keycaps,
  // a keycap and a verb by the reticle only when there is something to do; H opens the full list (./hud.ts)
  const hudUi = makeHud(host);

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(62, 16 / 9, 0.05, 900), camGame = cam.clone();
  const look = await loadLook(r, opts.base + 'tex/');
  const city = buildDistrict({ renderer: r, scene, high, look });
  const W0 = city.world, home = city.plan.places[0];
  say('Dressing the writer…');
  const writer = await loadWriter(opts.base + 'anims/ual.glb', high, opts.base + 'models/writer.glb');
  scene.add(writer.root, writer.can); writer.carry(true);   // a writer always has a can in hand
  // the feet fit the ground at the writer's own level (a kerb, a step; not the bridge over the towpath)
  writer.setGround((x, z) => { const g = W0.groundAt(x, z, me.gy + 0.3); return Number.isNaN(g) ? me.gy : g; }, FIT_FEET);
  const spray = makeSpray(scene, city.walls, opts.store);
  // every sound the game makes goes through one node, so a recorder can tap it (made the first time something needs it)
  let bus: { ctx: AudioContext; out: GainNode } | null = null;
  let music: ReturnType<typeof makeMusic> | null = null;   // started once the game runs (below)
  const sound = () => {
    if (!bus) try { const ctx = new AudioContext(), out = ctx.createGain(); out.connect(ctx.destination); bus = { ctx, out }; } catch { bus = null; }
    return bus;
  };
  say('Calling the law…');
  const law = await makeLaw({ scene, high, base: opts.base, world: W0, nav: city.nav, route: city.plan.route, sound });
  // a soft light that rides with the writer so the hoodie reads against the dark street
  const rim = new THREE.PointLight('#ffffff', 9, 7, 2);
  const back = new THREE.PointLight('#ffffff', 6, 5, 2); // a kicker behind, to edge the hood and shoulders
  scene.add(rim, back);
  // THE TORCH (T, or the dock): a real spotlight from the writer's chest along where they look (at the can's point while
  // painting), a soft cone with a faint beam in the haze. No shadow (the moon already casts the one shadow map). It is
  // always in the scene at zero when off, so switching it never recompiles a shader. A lit torch gets you seen (cops.ts).
  const torch = { on: false, w: 0 };
  const torchL = new THREE.SpotLight('#eef1ff', 0, 28, 0.5, 0.55, 1.4); torchL.castShadow = false; scene.add(torchL, torchL.target);
  const beam = (() => {
    const len = 9, g = new THREE.CylinderGeometry(0.04, Math.tan(0.42) * len, len, 24, 1, true); g.translate(0, -len / 2, 0);
    const m = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uW: { value: 0 } },
      vertexShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'uniform float uW; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = pow(vY, 1.5) * (0.35 + 0.65 * f * f) * 0.075 * uW; gl_FragColor = vec4(vec3(0.92, 0.94, 1.0) * a, 1.0); }' });
    const mesh = new THREE.Mesh(g, m); mesh.frustumCulled = false; mesh.userData.noAO = true; mesh.renderOrder = 5; mesh.visible = false; scene.add(mesh); return mesh;
  })();
  const torchDir = new THREE.Vector3(), torchP = new THREE.Vector3(), DOWN = new THREE.Vector3(0, -1, 0);
  // (for pictures only, off in play: a soft light at the camera, so a move can be seen in a dark corner; inspect({ fill }))
  const fillL = new THREE.PointLight('#ffffff', 0, 14, 1.6); fillL.visible = false; scene.add(fillL);
  const setTorch = (on: boolean) => { torch.on = on; note(on ? 'TORCH ON · THEY SEE YOU FROM FURTHER' : 'TORCH OFF', 1.8); hud(); };

  const size = () => { const b = host.getBoundingClientRect(); return { w: Math.max(2, Math.round(b.width)), h: Math.max(2, Math.round(b.height)) }; };
  let { w, h } = size();
  r.setSize(w, h, false);
  const comp = new EffectComposer(r);
  comp.addPass(new RenderPass(scene, cam));
  let aoPass: GTAOPass | null = null;
  if (high) {
    const ao = new GTAOPass(scene, cam, w, h); aoPass = ao;
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
  // home is VEX'S STUDIO (plan.ts places[0]); y is height above the ground, gy the ground (level) under the writer
  const me = { x: home.x, z: home.z, y: 0, gy: home.y, vy: 0, heading: home.yaw + Math.PI, crouch: false, airborne: false };
  // how the writer moves: a speed along the way they face that builds up and dies away, a heading that turns at a
  // limited rate (on the spot from standing, in an arc when running), a lean into turns and with the push of a start
  const mv = { speed: 0, yawRate: 0, side: 0, roll: 0, pitch: 0, offset: 0, takeoff: 0 };
  // snappy (owner 16 Nov: "too slow and languorous"): run speed in about 0.15 s, stopped in about 0.12 s, quick turns;
  // sprint well over the officers' run (cops.ts RUN_SPEED 5.9) so sprinting round corners loses them
  const GAIT = { jog: 4.5, sprint: 7.6, crouch: 1.5, accel: 30, sprintAccel: 42, decel: 38, decelPer: 3, turnStand: 24, turnFast: 13, air: 0.55, gather: 0.05 };
  // how far along the wall either side of the writer the can reaches; further, A D step along (no stepping by itself)
  const REACH = 2.4;
  const camO = { yaw: home.yaw, pitch: 0.12, dist: 3.4 };
  // PARKOUR and the WATER (./parkour.ts, ./wet.ts): the actions that take the body over (vault, mantle, climb, swim,
  // a hard landing), how wet Vex is (1 out of the canal, drying over about two minutes, faster by a warm lamp)
  let canWanted = true, wet = 0;
  const DRY_SECS = 110, WET_PAINT = 0.3, WET_SLOW = 0.22;
  const wetFx = makeWet(scene);
  const pk = makeParkour({ world: W0, plan: city.plan, writer, me, mv, carry: (on) => writer.carry(on && canWanted),
    onSplash: (x, z) => { wetFx.splash(x, WATER_Y, z, 1); enterWater(); },
    onLand: (kind) => { if (kind === 'hard') note('HARD LANDING · WINDED A FEW SECONDS', 2.6); } });
  // warm places dry you faster: a lamp, a bulb or a work light close by, or home (the studio)
  const warm = city.plan.lamps.filter((l) => l.kind === 'warm' || l.kind === 'bulb' || l.kind === 'tube' || l.kind === 'wall');
  const dryRate = () => { let k = 1; for (const l of warm) if (Math.hypot(l.x - me.x, l.z - me.z) < 4.5 && Math.abs(l.y - me.gy) < 5) { k = 2.5; break; } if (Math.hypot(me.x - home.x, me.z - home.z) < 9 && city.ceilingAt(me.x, me.z, me.gy + 1) < Infinity) k = 3; return k; };
  const dripFrom = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  const prints: { x: number; y: number; z: number; h: number }[] = []; let walked = 0, footSide = 0;
  const keys = new Set<string>(); let shiftNow = false;
  // what the parkour reads of the keys: W S A D (or the arrows) as up/down/left/right, the stick relative to the camera
  (globalThis as { __vxPk?: unknown }).__vxPk = pk;   // (tests: the parkour's own debug())
  const pkIn = (still = false): PkInput => {
    const L = keys.has('a') || keys.has('ArrowLeft'), R = keys.has('d') || keys.has('ArrowRight'), U = keys.has('w') || keys.has('ArrowUp'), D = keys.has('s') || keys.has('ArrowDown');
    return still ? { up: false, down: false, left: false, right: false, ax: 0, az: 0, sprint: false, camYaw: camO.yaw } : { up: U, down: D, left: L, right: R, ax: (R ? 1 : 0) - (L ? 1 : 0), az: (U ? 1 : 0) - (D ? 1 : 0), sprint: keys.has('Shift'), camYaw: camO.yaw };
  };
  const MOVE = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift', ' ', 'c', 'f', 'm', 'p', 't', 'r', '1', '2', '3', '4', '5', '6', '7', 'z', 'x', 'h', 'Tab', 'Escape', 'b', 'g', 'v', 'n', '[', ']', '-', '=', '+', 'Enter', 'q', 'l', 'o', 'e', 'k'];
  // painting: F at a wall squares up to it; the mouse aims, holding it sprays; the wheel sets the can's distance
  type W = (typeof city.walls)[number];
  const can: Can = { colour: COLOURS[0], cap: 2, dist: 0.2, pressure: 1, buff: false };
  const CAPS = ['', 'SKINNY', 'MEDIUM', 'FAT'];
  let paint: { id: string; spot: W } | null = null, colourI = 0, btn = 0, help = false, sprayingNow = false;
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
    const all = city.walls.filter((o) => o !== w && o.normal.dot(w.normal) > 0.99 && Math.abs(offOf(w, o.center.x, o.center.z)) < 0.1 && Math.abs(alongOf(w, o.center.x, o.center.z)) < (o.w + w.w) / 2 + 0.3 && Math.abs(o.center.y - o.h / 2 - (w.center.y - w.h / 2)) < 1);
    g = { ids: [w.id, ...all.map((o) => o.id)], lo: Math.min(-w.w / 2, ...all.map((o) => alongOf(w, o.center.x, o.center.z) - o.w / 2)), hi: Math.max(w.w / 2, ...all.map((o) => alongOf(w, o.center.x, o.center.z) + o.w / 2)) };
    runs.set(w.id, g); return g;
  };
  // the HUD line: the controls, then the heat (five cells) and what the law is doing; a flash message takes it over a while
  let flash = { text: '', until: 0 }, lastHud = '', t = 0;
  const say2 = (text: string, secs: number) => { flash = { text, until: t + secs }; };
  const cm = (m: number) => { const c = m * 100; return c < 10 ? c.toFixed(1) : String(Math.round(c)); };
  const hudText = () => {
    if (photoMode) return 'PHOTO MODE · Q SHOOT · DRAG OR WASD ORBIT · WHEEL ZOOM · O DONE';
    if (gallery.isOpen()) return 'PHOTOS · ARROWS PICK · ENTER VIEW · S SAVE · DEL DELETE · L CLOSE';
    if (phone.isOpen()) return 'PHONE · ARROWS PICK · ENTER OPEN · ESC BACK · 1-6 APPS · Q PHOTO · M MUSIC · E PUT IT AWAY';
    if (flash.until > t) return flash.text;
    const L = law.state(), cells = Math.min(5, Math.ceil(L.heat * 5 - 0.001));
    const cond = (wet > 0.02 ? `SOAKED ${Math.round(wet * 100)}% · ` : '') + (phoneDead() ? 'PHONE DEAD · KIOSK ON THE S ROAD · ' : '') + (pk.winded() > 0 ? 'WINDED · ' : '');
    const what = { off: 'PATROL OFF', calm: L.seen ? 'SEEN' : L.heat >= 0.6 ? 'WANTED' : 'CALM', alerted: 'ALERT', chase: 'CHASE', searching: 'SEARCHING', busted: 'BUSTED' }[L.chase];
    const lawS = L.on ? `HEAT ${'▮'.repeat(cells)}${'▯'.repeat(5 - cells)} ${what} · P PATROL OFF` : 'PATROL OFF · P PATROL ON';
    const bk = book.state.open ? (() => { const s = book.pick(); return `SKETCHBOOK · ${s ? s.name + ' ' + s.kind.toUpperCase() : 'PICK ONE'} · ${book.state.speed}× · SIZE ${Math.round(book.state.size * 100)}% · B CLOSE · `; })() : '';
    if (bk) return bk + (paint ? `PAINTING ${paint.id.toUpperCase()} · F DONE · ` : 'WASD MOVE · F AT A WALL · ') + lawS;
    return (paint
      ? `PAINTING ${paint.id.toUpperCase()} · ${can.buff ? 'BUFF' : COLOUR_NAMES[colourI]} · ${CAPS[can.cap]} CAP · ${Math.round(can.dist * 100)} CM · Q PHOTO · H HELP · F DONE`
      : cond + 'WASD MOVE · SHIFT SPRINT · C CROUCH · SPACE JUMP / GRAB · W CLIMB · DRAG LOOK · F AT ANY WALL TO PAINT · B SKETCHBOOK · T TORCH · E PHONE' + (phoneDead() ? '' : ' · Q PHOTO · L GALLERY · O PHOTO MODE · K MAP')) + ' · ' + lawS + (opts.onRec ? ' · R RECORD' : '') + (music ? (music.state().on ? ' · M MUSIC OFF' : ' · M MUSIC ON') : '');
  };
  const hud = () => { const s = hudText(); if (s !== lastHud) { lastHud = s; if (opts.onHud) opts.onHud(s); } };
  const fwd = new THREE.Vector3(0, 0, -1), side = new THREE.Vector3();
  // the wall to paint from here: one the writer stands in front of, the nearer and the more the camera faces it the better
  const nearestWall = (range = 4.5) => {
    let best: W | null = null, bs = 1e9;
    for (const sp of city.walls) {
      const off = offOf(sp, me.x, me.z); if (off <= 0 || off > range || Math.abs(alongOf(sp, me.x, me.z)) > sp.w / 2 + 0.3) continue;
      // at the writer's level: some of the wall within reach (not the canal wall below the street, not a roof edge)
      const bot = sp.center.y - sp.h / 2, top = sp.center.y + sp.h / 2; if (bot > me.gy + 2.0 || top < me.gy + 0.3) continue;
      // and nothing solid between them (a wall's other side, a gate)
      if (W0.ray(me.x, me.gy + 1.2, me.z, sp.center.x + sp.normal.x * 0.05 + (me.x - sp.center.x) * Math.abs(sp.normal.z), me.gy + 1.2, sp.center.z + sp.normal.z * 0.05 + (me.z - sp.center.z) * Math.abs(sp.normal.x)) < 0.98) continue;
      const sc = off + 1.5 * (1 - Math.max(0, -(fwd.x * sp.normal.x + fwd.z * sp.normal.z)));
      if (sc < bs) { bs = sc; best = sp; }
    }
    return best ? { id: best.id, spot: best } : null;
  };
  // how far a straight line from a to b gets (0..1) before something solid at street level is in the way. Low things
  // (a barrier, a parked car) only count under 1.2 m; own: the wall being painted is not in its own way
  const sightTo = (ax: number, az: number, ay: number, bx: number, bz: number, by: number, own?: W) => {
    // the boxes in the district have heights, so a low wall or a car only hides what is below its top
    const ix = own ? own.center.x - own.normal.x * 0.2 : 1e9, iz = own ? own.center.z - own.normal.z * 0.2 : 1e9, iy = own ? by : 0;
    return W0.ray(ax, ay, az, bx, by, bz, 0, own ? (b) => ix > b.x0 && ix < b.x1 && iz > b.z0 && iz < b.z1 && iy > (b.y0 ?? -1e9) && iy < (b.y1 ?? 1e9) : undefined);
  };
  // a finished (or stopped) blast leaves the piece clean on the wall: the ghost and its frame stay away until the player
  // arms a sketch again (picks a card, [ ], opens the book, or blasts)
  let disarmed = false;
  const stopAuto = (ok: boolean) => { const a = auto; if (!a) return; auto = null; spray.end(); if (blasting) disarmed = true; if (!ok && blasting) note(`STOPPED ${blasting} · Z TAKES IT BACK`, 2.5); blasting = ''; a.done(ok); };
  const squareUp = (w: W) => { paint = { id: w.id, spot: w }; camO.yaw = Math.atan2(w.normal.x, w.normal.z); camO.pitch = 0.1; camO.dist = 2.6; };
  const togglePaint = () => {
    if (paint) { paint = null; btn = 0; stroke = null; line = null; spray.end(); stopAuto(false); me.crouch = false; hud(); return; }
    if (pk.busy() || me.airborne) { note(pk.mode() === 'swim' ? 'NOT IN THE WATER' : 'GET YOUR FEET DOWN FIRST', 1.6); return; }
    if (wet > WET_PAINT) { say2(`HANDS TOO WET TO PAINT · DRYING ${Math.round((1 - wet) * 100)}%`, 2.5); note('HANDS TOO WET · FIND SOMEWHERE WARM OR WAIT', 2.5); return; }
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
    // picking a card (even the same one again) arms it: its ghost shows on the wall where a click would put it
    onPick: () => { disarmed = false; },
    canColour: () => can.colour,
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
    const gk = sk.id + '|' + slotsOf(sk).join(','); if (ghostOf === gk) return; ghostOf = gk;   // a recolour redraws it
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
    const sk = book.pick(); if (!sk || bust) return; disarmed = false;
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
  const setCap = (c: 1 | 2 | 3) => { can.cap = c; hud(); };
  const setColour = (i: number) => { colourI = (i + COLOURS.length) % COLOURS.length; can.colour = COLOURS[colourI]; can.buff = false; hud(); };
  const undo = (id?: string) => {
    const w = id ? wallOf.get(id) : paint ? paint.spot : null; if (!w) return 0;
    stroke = null; line = null;
    const ids = id ? [id] : runOf(w).ids, gone = spray.undo(ids);
    if (paint) note(gone ? `UNDONE · ${spray.undoable(ids)} MORE` : 'NOTHING TO UNDO');
    return gone ? gone.length : 0;
  };

  // ===== Vex's PHONE (./phone/): the phone and its apps, the missions, the camera and the gallery, each its own module;
  // here only keys, the dock, the game's events and the API. Q takes a photo, walking or painting (or busted: that is a
  // picture too); E gets the phone out; L opens it on the photos; O is photo mode
  const photoStore: PhotoStore = opts.photos || (opts.photoCloud ? merged(localPhotos, opts.photoCloud) : localPhotos);
  let photoMode = false;
  const wallInfo = (id: string) => { const w = wallOf.get(id); return w ? { x: w.center.x, y: w.center.y, z: w.center.z, w: w.w, h: w.h, nx: w.normal.x, nz: w.normal.z } : null; };
  const placeOf = (id: string) => { const p = city.plan.places.find((q) => q.id === id); return p ? { x: p.x, y: p.y, z: p.z, name: p.name } : null; };
  // what a mission puts on a wall when it starts: the toys' scribbles to buff, your tag crossed out (no undo needed:
  // they are put up at once, like a play at speed 0)
  const setupWall = async (name: 'toys' | 'crossed'): Promise<[number, number, number, number] | null> => {
    await spray.loaded;
    let seed = name === 'toys' ? 4242 : 1717; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const out: Stroke[] = [];
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const add = (wall: string, pts: [number, number, number][], c: { colour: string; cap: 1 | 2 | 3; dist?: number }) => { out.push({ wall, cap: c.cap, dist: c.dist ?? 0.2, colour: c.colour, pressure: 1, buff: false, seed: Math.floor(rnd() * 1e9), pts }); for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); } };
    if (name === 'toys') {
      // three scrawls low on the shutter east of the record shop: wobbly loops and a squiggle underline (no letters)
      for (const [cx, cy, w] of [[1.7, 1.0, 1.1], [3.3, 0.75, 0.9], [4.9, 1.1, 1.0]] as const) {
        const pts: [number, number, number][] = []; let t = 0;
        for (let i = 0; i <= 26; i++) { const u = i / 26, x = cx - w / 2 + w * u, y = cy + Math.sin(u * Math.PI * 5 + rnd()) * 0.17 + (rnd() - 0.5) * 0.05; pts.push([+x.toFixed(3), +y.toFixed(3), +(t += 0.035).toFixed(3)]); }
        add('arch16', pts, { colour: rnd() > 0.5 ? '#9a9a9e' : '#f4f4f4', cap: 2 });
        const ul: [number, number, number][] = []; t = 0; for (let i = 0; i <= 8; i++) ul.push([+(cx - w / 2 + w * 0.9 * i / 8).toFixed(3), +(cy - 0.32 + (rnd() - 0.5) * 0.04).toFixed(3), +(t += 0.04).toFixed(3)]);
        add('arch16', ul, { colour: '#c9ccd2', cap: 1 });
      }
      spray.replay(out);
      return [x0 - 0.1, y0 - 0.1, x1 + 0.1, y1 + 0.1];
    }
    // your tag on the north canal wall, then a fat black line through it
    const sk = findSketch('tag-v3x'); const w = wallOf.get('canal-n5'); if (!sk || !w) return null;
    const f = fit(sk, w, { x: 8, y: 1.55 }, 1.1, w.h);
    spray.replay(sk.strokes.map((k) => ({ ...k, wall: w.id, buff: !!k.buff })), { wall: w.id, at: f.at, scale: f.scale });
    const [ax, ay] = f.at, bw = f.w, bh = f.h;
    add(w.id, [[ax - 0.15, ay + bh * 0.2, 0], [ax + bw * 0.5, ay + bh * 0.55, 0.25], [ax + bw + 0.2, ay + bh * 0.85, 0.5]], { colour: '#0c0c0e', cap: 3, dist: 0.25 });
    add(w.id, [[ax - 0.1, ay + bh * 0.85, 0], [ax + bw + 0.15, ay + bh * 0.15, 0.45]], { colour: '#0c0c0e', cap: 3, dist: 0.25 });
    spray.replay(out);
    return [ax, ay, ax + bw, ay + bh];
  };
  const missions = makeMissions({
    me: () => ({ x: me.x, z: me.z, gy: me.gy, crouch: me.crouch, speed: mv.speed }),
    law: () => law.state(), strokes: (id) => spray.strokes(id), wall: wallInfo, place: placeOf,
    places: () => city.plan.places, painted: (id) => spray.painted(id), setup: setupWall, ready: spray.loaded,
  }, opts.progress || localProgress, {
    onMessage: (m) => { phone.notify(m); hud(); },
    onChange: () => { phone.refresh(); },
  });
  // what a photo sees of a point: in the frame, how far, nothing solid in the way, from in front of the wall
  const fv = new THREE.Vector3();
  const framed: Framed = (x, y, z, nx, nz) => {
    const c = cam.position; fv.set(x, y, z).project(cam);
    const inFrame = fv.z < 1 && Math.abs(fv.x) < 0.85 && Math.abs(fv.y) < 0.9;
    const front = (c.x - x) * nx + (c.z - z) * nz > 0.3;
    const clear = W0.ray(c.x, c.y, c.z, x + nx * 0.3, y, z + nz * 0.3) >= 0.98;
    return { inFrame, dist: Math.hypot(c.x - x, c.y - y, c.z - z), clear, front };
  };
  const nameOf = (id: string) => (id === 'hall-of-fame' ? 'THE HALL OF FAME' : id.startsWith('arch') ? 'THE SHUTTER' : id.toUpperCase().replace(/-/g, ' '));
  const phone = makePhone(host, {
    missions, plan: city.plan, walls: city.walls, painted: (id) => spray.painted(id),
    me: () => ({ x: me.x, z: me.z, gy: me.gy, heading: me.heading }), law: () => law.state(),
    music: () => (music ? music.state() : null), musicToggle: () => { if (music) music.toggle(); }, musicNext: () => { if (music) music.next(); },   // off stays off: the next track waits
    shoot: () => snapNow(), photoMode: () => setPhotoMode(true),
    lastThumb: async () => { try { const l = await photoStore.list(); return l.length ? await photoStore.src(l[0].id) : null; } catch { return null; } },
    photoSrc: async (id) => { try { return await photoStore.src(id); } catch { return null; } },
    aim: () => {
      for (const m of missions.list()) { if (m.status !== 'active') continue; const ms = MISSIONS.find((x) => x.id === m.id)!, o = ms.objectives[m.step]; if (!o || o.type !== 'photo' || !o.walls) continue;
        const w = wallInfo(o.walls[0]); if (!w) continue; const f = framed(w.x, w.y, w.z, w.nx, w.nz); return { target: nameOf(o.walls[0]), framed: f.inFrame && f.clear && f.front && f.dist <= (o.dist ?? 20) && (!o.painted || spray.painted(o.walls[0])) }; }
      return null;
    },
    sound, avoid: () => { const b = minimap.box(); return b.size ? b.x + b.size : 0; }, focus: () => canvas.focus(),
    onOpen: (on) => { if (on) { keys.clear(); btn = 0; shiftNow = false; stroke = null; line = null; if (photoMode) setPhotoMode(false); } hud(); },
  });
  // the photos live in the phone's PHOTOS app (the gallery lays itself out for the phone's screen)
  const gallery = makeGallery(phone.slot('gallery'), { store: () => photoStore, focus: () => canvas.focus(), note: (s, secs) => note(s, secs), onChange: () => { const st = gallery.state(); if (st.open && !st.loading) camera.setCount(st.count); if (!st.open) phone.galleryClosed(); hud(); } });
  phone.bindGallery(gallery);
  const minimap = makeMinimap(host, {
    plan: city.plan, walls: city.walls, painted: (id) => spray.painted(id),
    me: () => ({ x: me.x, z: me.z, heading: me.heading, speed: mv.speed, painting: !!paint }),
    law: () => law.state(), markers: () => missions.markers(), objective: () => missions.current(),
  });
  const camera = makeCamera({
    host, renderer: r, composer: comp, store: photoStore,
    render: () => { city.beforeRender(r, scene, cam); comp.render(0); },
    resize: (W, H) => city.resize(W, H), view: () => ({ w, h }),
    hide: () => [reticle, dot, preview, ghost], sound, place: () => api.at().place,
    note: (s, secs) => note(s, secs), pulse: () => hudUi.pulse('photo'),
    onSaved: () => { gallery.added(); hud(); },
  });
  // a photo: judged for the missions at the shutter (what is in frame now), sent in their thread once it is kept
  // THE PHONE DIES IN THE CANAL (GAME-DESIGN.md 4): no camera, photos, messages, map or music until a new burner from
  // the PHONE KIOSK on the S road. The missions keep going and their messages wait (missions.ts); the save remembers.
  const DEAD_SAY = "THE PHONE'S DEAD · A NEW BURNER AT THE PHONE KIOSK, S ROAD";
  const phoneDead = () => missions.phone().dead;
  const enterWater = () => {
    wet = 1;
    if (paint) togglePaint();
    if (missions.drown()) { phone.close(); syncPhone(); note("SPLASH · THE PHONE'S DEAD · NEW BURNER AT THE PHONE KIOSK, S ROAD", 4.5); }
    else note(missions.phone().case ? 'SPLASH · THE CASE KEPT THE PHONE DRY' : 'SPLASH', 2);
  };
  const syncPhone = () => { const d = phoneDead(); if (d !== phone.isDead()) { phone.setDead(d); music?.hold(d); hud(); } };
  const newBurner = () => { if (!missions.newPhone()) return false; syncPhone(); note('NEW BURNER · SAME NUMBER · YOUR MESSAGES ARE COMING IN', 3.5); return true; };
  const takePhoto = (o: { width?: number } = {}) => {
    if (phoneDead()) return Promise.reject(new Error("the phone is dead (the canal): get a new burner at the phone kiosk on the S road"));
    const job = missions.photo(framed), p = camera.take(o); p.then((x) => job.sent(x.id), () => job.sent(null)); return p;
  };
  const snapNow = () => { if (phoneDead()) { note(DEAD_SAY, 2.6); return; } void takePhoto().catch(() => { /* said on screen */ }); };
  const openGallery = (on: boolean, id?: string | null) => {
    if (on && phoneDead()) { note(DEAD_SAY, 2.6); return; }
    if (on) {
      if (photoMode) setPhotoMode(false);
      phone.open('gallery', { direct: !phone.isOpen() });
      if (id) void gallery.refresh().then(() => gallery.view(id));
    } else if (gallery.isOpen()) gallery.open(false);
    hud();
  };
  // E: the phone out (on the thread of a message just in, if its banner shows), or away
  const togglePhone = () => {
    if (phone.isOpen()) { phone.close(); return; }
    if (bust) return;
    // at the kiosk with a dead one: a new burner
    { const d = doorAt(); if (d && d.id === 'phone-shop' && phoneDead()) { newBurner(); return; } }
    const b = phone.state().banner; if (b) phone.open('messages', { thread: b, direct: true }); else phone.open('home');
  };
  const setPhotoMode = (on: boolean) => {
    if (on === photoMode) return;
    if (on && phoneDead()) { note(DEAD_SAY, 2.6); return; }
    if (on) { if (paint) togglePaint(); if (gallery.isOpen()) gallery.open(false); keys.clear(); btn = 0; }
    photoMode = on;
    for (const e of [hudUi.el, tip, book.el, phone.banner]) e.style.visibility = on ? 'hidden' : '';
    camera.modeHint(on, t);
    if (!on) { camO.dist = Math.max(1.2, Math.min(7, camO.dist)); camO.pitch = Math.max(-0.35, Math.min(0.75, camO.pitch)); note('PHOTO MODE OFF', 1.4); }
    hud();
  };
  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    // the phone has the keys while it is out: arrows pick, Enter opens, Esc goes back, E puts it away (the gallery in
    // it: arrows pick, Enter views, Delete deletes, S saves, C copies, L / Esc close); Q still shoots, M the music
    if (phone.isOpen() && !e.metaKey && !e.ctrlKey) {
      if (['Shift', 'Alt', 'Meta', 'Control', 'CapsLock'].includes(k)) return;
      e.preventDefault(); e.stopPropagation();
      if (!down) return;
      if (!e.repeat && k === 'q') { snapNow(); return; }
      if (!e.repeat && k === 'r' && opts.onRec) { opts.onRec(); return; }
      if (!e.repeat && k === 'm' && music) { const s = music.toggle(); note(s.on ? `♪ MUSIC ON · ${s.title.toUpperCase()}` : 'MUSIC OFF · [M] TURNS IT BACK ON', 2.5); phone.refresh(); return; }
      if (e.repeat && (k === 'e' || k === 'Escape' || k === 'l')) return;
      phone.key(k); hud();
      return;
    }
    if (!MOVE.includes(k)) return;
    if ((k === 'q' || k === 'l' || k === 'o') && (e.metaKey || e.ctrlKey || e.altKey)) return;   // ⌘Q quits, ⌘L ... belong to the app
    e.preventDefault(); e.stopPropagation();
    if (down && !e.repeat && k === 'r') { if (opts.onRec) opts.onRec(); return; } // recording belongs to whoever mounted the game
    if (down && !e.repeat && k === 'q') { snapNow(); return; }   // a photo: walking, painting, even being nicked
    if (down && !e.repeat && k === 'k' && !photoMode) { const on = minimap.toggle(); note(on ? 'MINI-MAP ON · [K] HIDES IT' : 'MINI-MAP OFF · [K] BRINGS IT BACK', 1.8); return; }
    if (bust) return; // nothing to do while you are being nicked
    if (down && !e.repeat && k === 'e') { togglePhone(); return; }
    if (down && !e.repeat && k === 'l') { openGallery(true); return; }
    if (down && !e.repeat && k === 'o') { setPhotoMode(!photoMode); return; }
    // photo mode: time stands still; WASD and the arrows orbit the camera (the frame reads them), Esc leaves
    if (photoMode) {
      if (down && !e.repeat && k === 'Escape') setPhotoMode(false);
      else if (['w', 'a', 's', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(k)) { if (down) keys.add(k); else keys.delete(k); }
      else if (down && !e.repeat && k === 't') setTorch(!torch.on);
      else if (down && !e.repeat && k === 'm' && music) music.toggle();
      return;
    }
    // a sketch going up stops when the writer moves (what is up stays; Z takes it back)
    if (down && !e.repeat && auto && auto.group[0] === 'p' && ['a', 'd', ' ', 'c', 'f', 'Escape'].includes(k)) stopAuto(false);
    if (down && !e.repeat && k === 't') setTorch(!torch.on);
    if (down && !e.repeat && k === 'm' && music) { const s = music.toggle(); note(s.on ? `♪ MUSIC ON · ${s.title.toUpperCase()}` : 'MUSIC OFF · [M] TURNS IT BACK ON', 2.5); }
    if (down && !e.repeat && k === 'b') { book.setOpen(!book.state.open); if (book.state.open) disarmed = false; if (book.state.open) note(paint ? 'PICK A SKETCH · CLICK THE WALL TO BLAST' : 'PICK A SKETCH · WALK UP TO A WALL'); }
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
    if (down && !e.repeat && paint && k === 'x') { can.buff = !can.buff; if (can.buff) note('BUFF CAN · TAKES PAINT OFF'); hud(); }
    if (down && paint && k === 'z' && !auto) undo();
    if (down && !e.repeat && paint && k === 'h') { help = !help; hud(); }
    // C: crouch; on a wall it lets go, at the top of a drainpipe or a ladder it climbs down
    if (down && !e.repeat && k === 'c' && !paint) { if (!pk.down()) { if (!pk.busy()) me.crouch = !me.crouch; } }
    // Space: a ledge in front is grabbed (a mantle), something low with a drop behind is gone over, a drop ladder
    // overhead is jumped for, a wall being climbed is jumped off; otherwise a jump: a moment's gather, then up
    if (down && !e.repeat && k === ' ' && !paint) {
      if (!pk.jump(pkIn())) { if (!me.airborne && !mv.takeoff && !pk.busy()) { mv.takeoff = GAIT.gather; me.crouch = false; writer.land(0.25); writer.play('Jump_Start', 0.06, true); } }
    }
    if (down) keys.add(k); else keys.delete(k);
    if (k === 'Shift') shiftNow = down;
  };
  // the dock answers the mouse too (owner: "select the spraycan controls with my mouse"): each tile does what its key does
  hudUi.bind({
    cap: (c) => { if (paint) setCap(c); },
    colour: (i) => { if (paint) { if (can.buff) { can.buff = false; } setColour(i); hud(); } },
    colourNext: () => { if (paint) { if (can.buff) can.buff = false; setColour(colourI + 1); hud(); } },
    dist: (m) => { if (paint) { can.dist = Math.max(0.05, Math.min(0.6, m)); hud(); } },
    buff: () => { if (!paint) return; can.buff = !can.buff; if (can.buff) note('BUFF CAN · TAKES PAINT OFF'); hud(); },
    undo: () => { if (paint && !auto) undo(); },
    book: () => { book.setOpen(!book.state.open); if (book.state.open) { disarmed = false; note(paint ? 'PICK A SKETCH · CLICK THE WALL TO BLAST' : 'PICK A SKETCH · WALK UP TO A WALL'); } },
    help: () => { if (paint) { help = !help; hud(); } },
    torch: () => setTorch(!torch.on),
    phone: () => togglePhone(),
    photo: () => snapNow(),
    gallery: () => openGallery(!gallery.isOpen()),
    focus: () => canvas.focus(),
  });
  const kd = (e: KeyboardEvent) => onKey(e, true), ku = (e: KeyboardEvent) => onKey(e, false);
  canvas.addEventListener('keydown', kd);
  canvas.addEventListener('keyup', ku);
  // the straight line follows Shift as the mouse sees it (every pointer event says whether Shift is down), so a keyup
  // lost to another window can never leave every stroke straight; leaving the window lets go of everything
  const letGo = () => { keys.clear(); btn = 0; shiftNow = false; };
  canvas.addEventListener('blur', letGo);
  window.addEventListener('blur', letGo);
  const onVis = () => { if (document.visibilityState !== 'visible') letGo(); };
  document.addEventListener('visibilitychange', onVis);
  let drag: { x: number; y: number } | null = null;
  const aim = (e: PointerEvent) => { shiftNow = e.shiftKey; const b = canvas.getBoundingClientRect(); mouse.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); };
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
    camO.yaw += dyaw; camO.pitch = Math.max(-0.35, Math.min(photoMode ? 1.35 : 0.75, camO.pitch + dpitch));
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
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); if (paint) { can.dist = Math.round(Math.max(0.05, Math.min(0.6, can.dist + e.deltaY * 0.0005)) * 200) / 200; hud(); return; } camO.dist = Math.max(photoMode ? 0.8 : 1.2, Math.min(photoMode ? 14 : 7, camO.dist * Math.exp(e.deltaY * 0.001))); }, { passive: false });

  const ro = new ResizeObserver(() => {
    ({ w, h } = size());
    r.setSize(w, h, false); comp.setSize(w, h); city.resize(w, h);
    cam.aspect = w / h; cam.updateProjectionMatrix(); hudUi.resize(w, h); phone.resize(w, h); minimap.resize(w, h);
  });
  ro.observe(host);
  phone.resize(w, h); minimap.resize(w, h);

  const clock = new THREE.Clock();
  let raf = 0, stopped = false, lastSpray = '';
  // BUSTED: a slow-motion beat with the camera swinging round, the wall gets buffed, the writer starts again
  // spot: the wall they buff (what was being painted by hand); kept: a wall with a half-blasted sketch, which stays
  let bust: { t: number; spot: string; kept: string } | null = null;
  const camPos = new THREE.Vector3(home.x + Math.sin(home.yaw) * 3.4, home.y + 2, home.z + Math.cos(home.yaw) * 3.4), camLook = new THREE.Vector3(), scr = new THREE.Vector3();
  let landT = 0, forceAnim = '', idleT = 0, camH = 1.45, shotView: { yaw: number; pitch: number; dist: number; bone?: string; h?: number; fov?: number } | null = null, fov0 = 0;
  const lookTo = new THREE.Vector3(), tipV = new THREE.Vector3(), focusV = new THREE.Vector3(), headV = new THREE.Vector3(), swimAt = new THREE.Vector3(), fillOff = new THREE.Vector3();
  let storyMs = 0;
  const doorAt = () => city.plan.doors.find((d) => me.x > d.x0 - 0.3 && me.x < d.x1 + 0.3 && me.z > d.z0 - 0.3 && me.z < d.z1 + 0.3 && Math.abs(me.gy) < 0.5) || null;
  cam.position.copy(camPos);
  const frame = () => {
    if (stopped) return;
    raf = requestAnimationFrame(frame);
    const rdt = Math.min(0.05, clock.getDelta()), dt = photoMode ? 0 : bust && bust.t < 1.4 ? rdt * 0.3 : rdt, cdt = photoMode ? rdt : dt; t += rdt;   // photo mode: time stands still, the camera moves
    const left = keys.has('ArrowLeft'), rightK = keys.has('ArrowRight'), upK = keys.has('ArrowUp'), downK = keys.has('ArrowDown');
    if (photoMode) {   // orbit and tilt round the writer; the wheel zooms (above)
      const oy = (keys.has('a') || left ? 1 : 0) - (keys.has('d') || rightK ? 1 : 0), op = (keys.has('w') || upK ? 1 : 0) - (keys.has('s') || downK ? 1 : 0);
      if (oy || op) lookBy(oy * 1.5 * rdt, op * 0.9 * rdt);
      camera.tick(t);
    }
    const still = !!bust || photoMode || phone.isOpen();   // the phone out: the writer stands and looks at it
    const ax = still ? 0 : (keys.has('d') || (!paint && rightK) ? 1 : 0) - (keys.has('a') || (!paint && left) ? 1 : 0);
    const az = still ? 0 : (keys.has('w') || (!paint && upK) ? 1 : 0) - (keys.has('s') || (!paint && downK) ? 1 : 0);
    const sprint = keys.has('Shift') && !me.crouch && !paint && pk.winded() <= 0;   // (winded after a hard landing: no sprint)
    // movement is relative to where the camera looks
    fwd.set(-Math.sin(camO.yaw), 0, -Math.cos(camO.yaw)); side.set(Math.cos(camO.yaw), 0, -Math.sin(camO.yaw));
    if (mv.takeoff > 0 && (mv.takeoff -= dt) <= 0) { mv.takeoff = 0; me.vy = 4.6; me.airborne = true; pk.takeoff(true); }
    // PARKOUR: an action that has the body runs it (vault, mantle, climb, swim, a landing); W into a route at its foot
    // (or at a canal ladder, swimming) gets on it
    const busy0 = pk.busy();
    if (!paint && !still && (keys.has('w') || upK) && (!me.airborne || pk.mode() === 'swim')) pk.grab();
    if (pk.busy()) pk.tick(dt, pkIn(still));
    pk.tickNote(dt);
    if (!paint && !busy0 && !pk.busy()) {
      // soaked he is slower; winded after a hard landing too
      const top = (me.crouch ? GAIT.crouch : sprint ? GAIT.sprint : GAIT.jog) * (1 - WET_SLOW * wet) * pk.speedK(), air = me.airborne ? GAIT.air : 1;
      let target = 0, step = 0;
      if (ax || az) {
        const dx = fwd.x * az + side.x * ax, dz = fwd.z * az + side.z * ax;
        let d = Math.atan2(dx, dz) - me.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
        // turning is quick standing, slower flat out; facing well away, the writer turns before going
        const rate = (GAIT.turnStand + (GAIT.turnFast - GAIT.turnStand) * Math.min(1, mv.speed / GAIT.sprint)) * air;
        step = Math.max(-rate * dt, Math.min(rate * dt, d));
        // only a big reversal (still facing well away) stops to turn first, and the turn is quick
        const a = Math.abs(d - step); target = top * (a < 1.4 ? 1 : a > 2.6 ? 0 : 1 - (a - 1.4) / 1.2);
      }
      me.heading += step; mv.yawRate += ((dt > 0 ? step / dt : 0) - mv.yawRate) * Math.min(1, dt * 20);
      const was = mv.speed, acc = target > mv.speed ? (sprint ? GAIT.sprintAccel : GAIT.accel) : GAIT.decel + GAIT.decelPer * mv.speed;
      if (!pk.launching() || target > mv.speed) mv.speed += Math.max(-acc * dt * air, Math.min(acc * dt * air, target - mv.speed));   // (pushed off a wall: the push carries)
      // running at something low: over it (the vault takes the body from here)
      if (mv.speed > 0.001 && !pk.tryVault()) {
        const x0 = me.x, z0 = me.z, feet = me.gy + me.y;
        me.x += Math.sin(me.heading) * mv.speed * dt; me.z += Math.cos(me.heading) * mv.speed * dt;
        // push out of walls, piers and props at the writer's height (a body 0.35 m round)
        W0.pushOut(me, 0.35, feet);
        // nothing to stand on here at this level (a step too high, the edge of the water): slide along, or stay
        if (Number.isNaN(W0.groundAt(me.x, me.z, feet)) && !(me.airborne && pk.waterAt(me.x, me.z))) {   // (in the air over the canal: on into it)
          if (!Number.isNaN(W0.groundAt(me.x, z0, feet))) me.z = z0; else if (!Number.isNaN(W0.groundAt(x0, me.z, feet))) me.x = x0; else { me.x = x0; me.z = z0; }
        }
        // running into something: the legs slow to what the body really does, rather than running on the spot
        if (dt > 0 && !me.airborne) { const real = Math.hypot(me.x - x0, me.z - z0) / dt; if (real < mv.speed - 0.3) mv.speed += (real - mv.speed) * Math.min(1, dt * 10); }
      }
      // lean into the turn, and forward with the push of a start (back a touch as they pull up)
      const accel = dt > 0 ? (mv.speed - was) / dt : 0;
      mv.roll += (Math.max(-0.16, Math.min(0.16, -0.02 * mv.yawRate * mv.speed)) - mv.roll) * Math.min(1, dt * 10);
      mv.pitch += (Math.max(-0.06, Math.min(0.1, accel * 0.004 + (mv.speed / GAIT.sprint) * 0.05)) - mv.pitch) * Math.min(1, dt * 9);
    } else if (paint) { mv.yawRate = 0; mv.roll *= Math.max(0, 1 - dt * 6); mv.pitch *= Math.max(0, 1 - dt * 6); }   // painting: the side step sets the speed
    const moving = mv.speed > 0.15;
    sprayingNow = false;
    if (paint) {
      // the view: W S step it in and back, the arrows look along and up the wall
      if (!bust) { camO.dist = Math.max(1.5, Math.min(7, camO.dist + ((keys.has('s') ? 1 : 0) - (keys.has('w') ? 1 : 0)) * 3 * dt)); if (left || rightK || upK || downK) lookBy(((left ? 1 : 0) - (rightK ? 1 : 0)) * 1.2 * dt, ((upK ? 1 : 0) - (downK ? 1 : 0)) * 0.8 * dt); }
      // stand square to the wall, an arm's length off it, within the ends of its run
      let sp = paint.spot, n = sp.normal, tx = n.z, tz = -n.x;
      const run = runOf(sp);
      let off = offOf(sp, me.x, me.z), along = alongOf(sp, me.x, me.z);
      const px0 = me.x, pz0 = me.z;
      // A D: a side step that gets going and stops, not a slide
      mv.side += Math.max(-9 * dt, Math.min(9 * dt, ax * 1.1 - mv.side)); along += mv.side * dt;
      // a sketch being blasted: the writer steps along the wall after the can. By hand never: the writer stays planted
      // while the button is held (owner 16 Nov) and only A D step along
      if (Math.abs(follow) > 1.1) along += Math.sign(follow) * Math.min(Math.abs(follow) - 1.1, 4 * dt);
      off = Math.max(0.55, Math.min(0.9, off)); along = run.hi - run.lo > 0.7 ? Math.max(run.lo + 0.3, Math.min(run.hi - 0.3, along)) : (run.lo + run.hi) / 2;
      // things standing at the wall (a vending machine, a bin): the writer stands to one side of them, or steps past
      for (const b of W0.near(sp.center.x + n.x * off + tx * along, sp.center.z + n.z * off + tz * along)) {
        if (!W0.stops(b, me.gy)) continue;
        const px = sp.center.x + n.x * off + tx * along, pz = sp.center.z + n.z * off + tz * along, ix = sp.center.x - n.x * 0.2, iz = sp.center.z - n.z * 0.2;
        if (px <= b.x0 - 0.35 || px >= b.x1 + 0.35 || pz <= b.z0 - 0.35 || pz >= b.z1 + 0.35 || (ix > b.x0 && ix < b.x1 && iz > b.z0 && iz < b.z1)) continue;
        const c = [alongOf(sp, b.x0 - 0.35, b.z0 - 0.35), alongOf(sp, b.x1 + 0.35, b.z1 + 0.35)], a0 = Math.min(...c), a1 = Math.max(...c);
        along = ax > 0 ? a1 : ax < 0 ? a0 : along - a0 < a1 - along ? a0 : a1;
      }
      me.x = sp.center.x + n.x * off + tx * along; me.z = sp.center.z + n.z * off + tz * along;
      // stepping along the wall: the hips turn the way they go and the chest stays to the wall (no clip walks sideways)
      const sv = dt > 0 ? ((me.x - px0) * tx + (me.z - pz0) * tz) / dt : 0;
      if (Math.abs(sv) > 8) mv.side = 0;   // moved to another wall: not a step
      mv.speed += (Math.min(4, Math.abs(sv)) - mv.speed) * Math.min(1, dt * 12);
      mv.offset += ((mv.speed > 0.12 ? Math.sign(sv) * 1.15 * Math.min(1, mv.speed / 0.7) : 0) - mv.offset) * Math.min(1, dt * 8);
      let dh = Math.atan2(-n.x, -n.z) - mv.offset - me.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); me.heading += dh * Math.min(1, dt * 10);
      // aim: where the mouse points on this wall or the next one along. Anywhere along it paints (the writer steps after
      // the can); only height is out of reach
      ray.setFromCamera(mouse, shotView ? camGame : cam);   // (a picture camera never moves the aim)
      let h = auto || bust ? null : spray.hit(ray, run.ids);
      // not through a vending machine or a pier: what is hidden behind something solid is out of the can's way
      if (h) { const c = cam.position, len = Math.hypot(h.point.x - c.x, h.point.z - c.z); if ((1 - sightTo(c.x, c.z, c.y, h.point.x, h.point.z, h.point.y, h.wall)) * len > 0.3) h = null; }
      if (h && h.wall !== sp) { paint = { id: h.id, spot: h.wall }; sp = h.wall; n = sp.normal; hud(); }
      const feet = me.gy, top = feet + me.y + (me.crouch ? 1.9 : 2.6);
      const lat = h ? (h.point.x - me.x) * n.z - (h.point.z - me.z) * n.x : 0, tooFar = !!h && Math.abs(lat) > REACH;
      const tooHigh = !!h && h.point.y >= top, reach = !!h && !tooHigh && !tooFar, pressing = btn !== 0 && !auto;
      // the sketchbook open: the sketch picked shows where a click would put it
      aimAt = h ? { id: h.id, x: h.x, y: h.y } : null;
      const armed = book.state.open && !auto && !disarmed ? book.pick() : null;
      plan = armed && h ? planFor(armed, h.wall, h, book.state.size) : null;
      ghost.visible = !!(armed && plan && h);
      if (armed && plan && h) {
        ghostPic(armed);
        spray.point(h.id, plan.at[0] + armed.w * plan.scale / 2, plan.at[1] + armed.h * plan.scale / 2, ghost.position).addScaledVector(h.wall.normal, 0.03);
        ghost.rotation.set(0, Math.atan2(h.wall.normal.x, h.wall.normal.z), 0); ghost.scale.set(armed.w * plan.scale, armed.h * plan.scale, 1);
      }
      let P: THREE.Vector3 | null = null, vol = 1, h0 = h;
      if (down && h) { ray.setFromCamera(down, shotView ? camGame : cam); const q = spray.hit(ray, [h.id]); if (q && q.point.y < top) h0 = q; }
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
        if (pressing && shiftNow && !line && h && reach) { spray.end(); stroke = null; line = { id: h.id, x: h0!.x, y: h0!.y, press: btn & 1 ? 1 : 0.5 }; }
        let end: { x: number; y: number } | null = null;
        if (line) {
          if (h && h.id === line.id && reach) { let dx = h.x - line.x, dy = h.y - line.y; if (Math.abs(dy) < Math.abs(dx) * 0.07) dy = 0; else if (Math.abs(dx) < Math.abs(dy) * 0.07) dx = 0; end = { x: line.x + dx, y: line.y + dy }; }
          if (!pressing) {
            const len = end ? Math.hypot(end.x - line.x, end.y - line.y) : 0;
            if (end && len > 0.02) { auto = { list: [{ wall: line.id, can: { ...can, pressure: line.press }, pts: [[line.x, line.y, 0], [end.x, end.y, len / 2.4]] }], i: 0, k: 0, t: 0, gap: 0, speed: 1, group: '', done: () => {} }; sprayed = true; }
            line = null;
          } else if (!shiftNow) line = null;
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
      // low on the wall the writer gets down to it, and stands again for the rest; never while the button is held
      if (P && !me.airborne && !pressing && !sprayingNow) { if (P.y < feet + 0.8) me.crouch = true; else if (P.y > feet + 1.15) me.crouch = false; }
      follow = P && auto && auto.group[0] === 'p' ? (P.x - me.x) * n.z - (P.z - me.z) * n.x : 0;
      prompt(t < tipHold ? tipNote : auto ? (blasting ? `BLASTING ${blasting} · [A] [D] TO STOP` : '') : armed && !h ? 'POINT AT THE WALL TO PLACE IT' : !h ? 'POINT AT THE WALL' : '');
      // by the reticle: a keycap and a verb, only when there is something to do
      const sep = '<span class="sep"></span>';
      const near = auto || !h ? '' : armed ? `${kc('LMB')}BLAST ${armed.name}${plan && plan.fitted ? ' · SIZED TO FIT' : ''}` : line ? `${kc('SHIFT')}STRAIGHT LINE · LET GO TO SPRAY` : tooHigh ? 'TOO HIGH · AIM LOWER' : tooFar ? `${kc('A')}${kc('D')}STEP ALONG` : !sprayed ? `${kc('LMB')}SPRAY${sep}${kc('RMB')}LIGHT${sep}${kc('F')}DONE${sep}TOOLS: CLICK THE DOCK` : shiftNow && !pressing ? `${kc('LMB')}DRAG A STRAIGHT LINE` : '';
      if (near && P) { scr.copy(P).project(cam); hudUi.near(near, (scr.x + 1) / 2 * canvas.clientWidth, (1 - scr.y) / 2 * canvas.clientHeight); } else hudUi.near('');
      reticle.visible = !!P && !armed; dot.visible = !!P;
      if (P) {
        reticle.position.copy(P).addScaledVector(n, 0.02); reticle.rotation.set(0, Math.atan2(n.x, n.z), 0); dot.position.copy(reticle.position); dot.rotation.copy(reticle.rotation);
        reticle.scale.setScalar(Math.max(0.004, footprint(auto ? auto.list[Math.min(auto.i, auto.list.length - 1)].can : can).width / 2));
        const col = auto || reach ? (can.buff && !auto ? '#9a9a9e' : '#ffffff') : '#555555';
        (reticle.material as THREE.MeshBasicMaterial).color.set(col); (dot.material as THREE.MeshBasicMaterial).color.set(col);
        // the arm goes up with the can wherever the aim is on the wall; the hand stops the can's distance off it
        // full weight hovering too, so pressing the button does not move the can
        writer.aim(aimHand.copy(P).addScaledVector(n, can.dist), P, 1, sprayingNow);   // the nozzle the can's distance off the wall
      } else writer.aim(null);
      hissOn(sprayingNow, 0.55 + 0.45 * vol);
    } else {
      reticle.visible = dot.visible = preview.visible = ghost.visible = false; hissOn(false); writer.aim(null); follow = 0; aimAt = null; plan = null; hudUi.near('');
      // PARKOUR first (a climb, a ledge, the water), then the wall; soaked hands say so
      const pkSay = bust || photoMode ? '' : pk.look(pkIn());
      const nw = !bust && !pk.busy() && !me.airborne && nearestWall(2.5), sk = book.state.open ? book.pick() : null;
      const wallSay = nw ? (wet > WET_PAINT ? `HANDS TOO WET TO PAINT · DRYING ${Math.round((1 - wet) * 100)}%` : sk ? `[F] THEN CLICK THE WALL TO BLAST ${sk.name}` : '[F] PAINT THIS WALL') : sk ? 'WALK UP TO A WALL TO BLAST ' + sk.name : '';
      prompt(t < tipHold ? tipNote : pkSay && wallSay && nw ? `${pkSay} · ${wallSay}` : pkSay || wallSay);
    }
    writer.steady(!!paint && mv.speed < 0.05);
    hudUi.dock({ walk: !paint && !bust && !photoMode && !phone.isOpen(), photos: camera.count(), gallery: gallery.isOpen(), phone: phone.isOpen(), unread: missions.unread(), on: !!paint && !bust && !phone.isOpen(), cap: can.cap, colour: colourI, colours: COLOURS, names: COLOUR_NAMES, dist: can.dist, line: cm(footprint(can).width), buff: !!can.buff, undo: paint ? spray.undoable(runOf(paint.spot).ids) : 0, book: !!book.state.open, help, torch: torch.on });
    // the line under the picture sits above the dock, and in the middle of what the sketchbook panel leaves free
    tip.style.bottom = paint ? `${Math.round(16 + 124 * hudScale(w, h))}px` : '9%';
    tip.style.left = book.state.open ? 'calc((100% - 296px) / 2)' : '50%'; tip.style.maxWidth = book.state.open ? 'calc(100% - 330px)' : 'calc(100% - 32px)';
    spray.update(dt, me, auto ? auto.speed : 1);   // a blast at 2x/4x runs the paint's wet clock at its own speed
    // WET: soaked through in the water; out of it drying (faster somewhere warm); the cloth, the drips, the prints
    if (pk.mode() === 'swim') wet = 1; else if (wet > 0) wet = Math.max(0, wet - dt * dryRate() / DRY_SECS);
    writer.wet(wet);
    prints.length = 0;
    if (wet > 0.12 && !pk.busy() && !me.airborne && mv.speed > 0.3) { walked += mv.speed * dt; if (walked > 0.72) { walked = 0; footSide ^= 1; const fp = writer.bonePos(footSide ? 'RightFoot' : 'LeftFoot', dripFrom[4]); if (fp) prints.push({ x: fp.x, y: me.gy, z: fp.z, h: me.heading }); } }
    if (wet > 0.04) { writer.bonePos('LeftHand', dripFrom[0]); writer.bonePos('RightHand', dripFrom[1]); writer.bonePos('Hips', dripFrom[2]); dripFrom[2].y -= 0.3; writer.bonePos('Head', dripFrom[3]); dripFrom[3].y += 0.06; }
    wetFx.update(dt, { wet, from: dripFrom.slice(0, 4), feet: prints, standing: mv.speed < 0.2 && !pk.busy() && !me.airborne, ground: (x, z, y) => W0.groundAt(x, z, y), swimming: pk.mode() === 'swim', at: swimAt.set(me.x, 0, me.z), water: WATER_Y });
    syncPhone();
    law.pushOut(me, 0.35);
    // (up a wall, on a roof, in the canal: out of their reach, they search below; low on a route they can still pull you off)
    const out = pk.out(), lowRoute = pk.mode() === 'climb' && !out ? pk.route() : null;
    const ev = photoMode ? '' : law.update(dt, t, { x: me.x, z: me.z, y: lowRoute ? 0 : me.y, gy: lowRoute ? lowRoute.y0 : me.gy, crouch: me.crouch, painting: !!paint, spraying: sprayingNow, torch: torch.on, vx: paint || pk.busy() ? 0 : Math.sin(me.heading) * mv.speed, vz: paint || pk.busy() ? 0 : Math.cos(me.heading) * mv.speed, out });
    if (ev && opts.onEvent) try { opts.onEvent(ev); } catch { /* the host's business */ }
    if (ev) missions.event(ev);
    if (ev === 'busted') {
      if (phone.isOpen()) phone.close();
      // a sketch half put up stays on the wall (owner, 16 Nov), undoable as one step; hand painting is still buffed
      const blastWall = auto && auto.group[0] === 'p' ? auto.list[Math.min(auto.i, auto.list.length - 1)].wall : '';
      bust = { t: 0, spot: blastWall && blastWall === lastSpray ? '' : lastSpray, kept: blastWall };
      if (paint) togglePaint();
      btn = 0; me.crouch = false; keys.clear(); mv.speed = 0; mv.yawRate = 0; pk.reset();
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
        say2(bust.spot ? `BUSTED · ${bust.spot.toUpperCase()} GOT BUFFED · BACK TO THE STUDIO` : bust.kept ? `BUSTED · THE PIECE STAYS ON ${bust.kept.toUpperCase()} · BACK TO THE STUDIO` : 'BUSTED · BACK TO THE STUDIO', 3.5);
        Object.assign(me, { x: home.x, z: home.z, y: 0, gy: home.y, vy: 0, heading: home.yaw + Math.PI, crouch: false, airborne: false });
        Object.assign(camO, { yaw: home.yaw, pitch: 0.12, dist: 3.4 });
        bust = null; lastSpray = ''; law.reset(); writer.play('Idle_Loop', 0.2);
      }
    }
    if (bust) { /* the knockback clip plays out */ }
    else if (paint && !me.airborne) writer.loco(mv.speed, me.crouch);
    else if (pk.busy()) { /* the parkour poses the body (writer.rig, or the roll clip) */ }
    else if (me.airborne && pk.air()) { /* a jump came up under a ledge: caught it */ }
    else if (me.airborne) {
      // exact under constant gravity, so a jump peaks at the same 0.81 m at 25 fps as at 60 (Euler lost ~9 cm at
      // 25 fps and the 0.72 m loading dock became unjumpable)
      me.y += me.vy * dt - 6.5 * dt * dt; me.vy -= 13 * dt;
      // over a ledge or a dock while high enough: the ground under the writer is up there now
      { const feet = me.gy + me.y, g = W0.groundAt(me.x, me.z, feet); if (!Number.isNaN(g) && Math.abs(g - me.gy) > 0.01) { me.y = feet - g; me.gy = g; } }
      // over the canal there is nothing to land on: down into the water
      if (pk.waterAt(me.x, me.z) && Number.isNaN(W0.groundAt(me.x, me.z, me.gy + me.y))) {
        const feet = me.gy + me.y; if (me.gy > WATER_Y - 3) { me.gy = WATER_Y - 3; me.y = feet - me.gy; }
        if (feet <= WATER_Y + 0.12) pk.splash();
      }
      if (pk.busy()) { /* in the water now */ }
      else if (me.y <= 0) {
        // the landing: the harder it is, the more the body gives and the more speed it costs; from high up a roll,
        // a heavy landing or a hard one (parkour.ts)
        const k = Math.min(1, Math.max(0, -me.vy / 7)); me.y = 0; me.vy = 0; me.airborne = false;
        if (!pk.land()) {
          writer.land(0.3 + 0.5 * k); mv.speed *= 1 - 0.12 * k;
          if (mv.speed > 1.5) landT = 0; else { writer.play('Jump_Land', 0.05, true); landT = 0.14; }
        }
      } else if (me.vy < 2.5) writer.play('Jump_Loop', 0.15);
    } else if (mv.takeoff > 0) { /* gathering for the jump */ }
    else if (landT > 0) landT -= dt;
    else if (forceAnim) writer.play(forceAnim, 0.2);
    else {
      // standing a while, the writer folds their arms for a bit, then lets them drop
      idleT = moving || me.crouch || Math.abs(mv.yawRate) > 0.5 ? 0 : idleT + dt;
      if (idleT % 16 > 9) writer.play('Idle_FoldArms_Loop', 0.6);
      // turning on the spot takes small steps
      else writer.loco(Math.max(mv.speed, Math.min(0.45, Math.abs(mv.yawRate) * 0.12)), me.crouch);
    }
    writer.lean(mv.roll, mv.pitch); writer.twist(paint ? mv.offset : 0);
    // the ground under the writer: up a kerb or a step is a quick step, not a pop; off an edge, they fall
    if (!pk.busy()) {
      const g = W0.groundAt(me.x, me.z, me.gy + me.y);
      if (!Number.isNaN(g)) {
        if (!me.airborne && g < me.gy - STEP) { pk.takeoff(false); me.airborne = true; me.y = me.gy - g; me.vy = 0; me.gy = g; mv.takeoff = 0; }
        else if (!me.airborne) { const sf = W0.surfAt(me.x, me.z, me.gy + me.y), ramp = !!sf && sf.y1 != null && !sf.steps; me.gy += (g - me.gy) * Math.min(1, dt * (ramp ? 45 : 16)); }   // (a ramp, a fire escape's flight: the feet keep up)
      }
      // down the water steps into deep water: swimming
      if (!me.airborne && pk.inOpen(me.x, me.z) && me.gy < WATER_Y - 0.85) pk.wade();
    }
    const py = me.gy + me.y, sr = pk.swimRoot();
    writer.grounded(!me.airborne && !pk.busy());
    if (sr) writer.root.position.set(sr.x, sr.y, sr.z); else writer.root.position.set(me.x, py, me.z);
    writer.root.rotation.y = me.heading;
    writer.update(dt);
    rim.position.set(me.x + Math.sin(camO.yaw) * 1.8 + Math.cos(camO.yaw) * 0.9, py + 2.4, me.z + Math.cos(camO.yaw) * 1.8 - Math.sin(camO.yaw) * 0.9);
    back.position.set(me.x - Math.sin(camO.yaw) * 1.4, py + 2.1, me.z - Math.cos(camO.yaw) * 1.4);
    // the torch: from the chest, along the heading tipped down a little, or at the can's point on the wall
    torch.w += ((torch.on && !bust ? 1 : 0) - torch.w) * Math.min(1, dt * 14);
    torchP.set(me.x + Math.sin(me.heading) * 0.28, py + 1.32, me.z + Math.cos(me.heading) * 0.28);
    if (paint && aimAt) spray.point(aimAt.id, aimAt.x, aimAt.y, torchDir).sub(torchP).normalize(); else torchDir.set(Math.sin(me.heading), -0.3, Math.cos(me.heading)).normalize();
    torchL.position.copy(torchP); torchL.target.position.copy(torchP).addScaledVector(torchDir, 6); torchL.target.updateMatrixWorld();
    // at a wall a metre away the full beam burns a white hole: painting, it dims to a work light
    torchL.intensity = (paint ? 14 : 650) * torch.w;
    beam.visible = torch.w > 0.02; if (beam.visible) { beam.position.copy(torchP); beam.quaternion.setFromUnitVectors(DOWN, torchDir); (beam.material as THREE.ShaderMaterial).uniforms.uW.value = torch.w * (paint ? 0.3 : 1); }
    // the camera: behind, above, over the right shoulder, kept inside the street; on a wall it swings round behind the
    // climber (unless the player is dragging it), a little higher to see up the route
    if (pk.mode() === 'climb' && !drag) { const rt = pk.route(); if (rt && rt.n) { const want = Math.atan2(rt.n[0], rt.n[1]); camO.yaw += Math.atan2(Math.sin(want - camO.yaw), Math.cos(want - camO.yaw)) * Math.min(1, dt * 2.5); camO.pitch += (0.05 - camO.pitch) * Math.min(1, dt * 2); } }
    camH += ((me.crouch && !paint ? 1.05 : pk.mode() === 'swim' ? 1.25 : 1.45) - camH) * Math.min(1, dt * 10);
    const tgtY = py + camH;
    const cx = me.x + Math.sin(camO.yaw) * Math.cos(camO.pitch) * camO.dist + Math.cos(camO.yaw) * 0.55;
    const cz = me.z + Math.cos(camO.yaw) * Math.cos(camO.pitch) * camO.dist - Math.sin(camO.yaw) * 0.55;
    let camY = Math.max(me.gy + 0.35, tgtY + Math.sin(camO.pitch) * camO.dist), camX = cx, camZ = cz;
    // in a lane, a doorway, the tunnel or the studio: the camera comes in front of the wall behind it, and stays under
    // the ceiling (the boxes are grown a little so the near plane never cuts into a wall)
    let pulled = false;
    // (PARKOUR: never past the wall, even hard against it: the floor was 0.12, which put the camera inside a wall the writer stood against)
    { const k = W0.ray(me.x, tgtY, me.z, camX, camY, camZ, 0.22); if (k < 1) { const f = Math.max(0.02, k - 0.04); camX = me.x + (camX - me.x) * f; camZ = me.z + (camZ - me.z) * f; camY = tgtY + (camY - tgtY) * f; pulled = true; } }
    { const ceil = city.ceilingAt(camX, camZ, me.gy + 1); if (camY > ceil - 0.3) camY = Math.max(tgtY - 0.2, ceil - 0.3); }
    camPos.set(camX, camY, camZ);
    // pulled in by a wall: straight there if the eased camera would be behind it, else ease as usual
    if (pulled && camPos.distanceToSquared(headV.set(me.x, tgtY, me.z)) < cam.position.distanceToSquared(headV)) cam.position.copy(camPos);
    else cam.position.lerp(camPos, 1 - Math.exp(-cdt * 24));
    // what it looks at keeps up with the writer: only the slightest give, so the camera feels quick
    lookTo.set(me.x + Math.cos(camO.yaw) * 0.55, tgtY, me.z - Math.sin(camO.yaw) * 0.55);
    camLook.lerp(lookTo, paint || bust ? 1 : 1 - Math.exp(-cdt * 40));
    cam.lookAt(camLook);
    camGame.position.copy(cam.position); camGame.quaternion.copy(cam.quaternion); camGame.aspect = cam.aspect; camGame.fov = fov0 || cam.fov; camGame.updateMatrixWorld(); camGame.updateProjectionMatrix();
    if (shotView) {
      const v = shotView, f = (v.bone && writer.bonePos(v.bone, focusV)) || focusV.set(me.x, me.gy + me.y + (v.h ?? 1.0), me.z), a = me.heading + v.yaw;
      cam.position.set(f.x + Math.sin(a) * Math.cos(v.pitch) * v.dist, f.y + Math.sin(v.pitch) * v.dist, f.z + Math.cos(a) * Math.cos(v.pitch) * v.dist); cam.lookAt(f);
      if (!fov0) fov0 = cam.fov; const fv = v.fov || fov0; if (cam.fov !== fv) { cam.fov = fv; cam.updateProjectionMatrix(); }
    } else if (fov0 && cam.fov !== fov0) { cam.fov = fov0; cam.updateProjectionMatrix(); fov0 = 0; }
    if (fillL.visible) fillL.position.copy(cam.position).add(fillOff.set(0, 0.6, 0));
    focusV.set(me.x, me.gy + me.y, me.z); city.update(dt, t, cam, focusV);
    // a shop door: the trigger is marked on the ground (phase 3 opens the shops)
    if (!paint && !bust) { const d = doorAt(); if (d && t >= tipHold) prompt(d.id === 'phone-shop' ? (phoneDead() ? '[E] A NEW BURNER · ON THE HOUSE' : 'PHONE KIOSK · YOURS STILL WORKS') : `${d.name} · OPENS SOON`); }
    city.beforeRender(r, scene, cam);
    grade.tick(t);
    comp.render(dt);
    // the phone's lens copies the frame just drawn; the story moves on (messages arrive, objectives are judged); the
    // mini-map turns with the writer, out of the way while the phone is out or in photo mode
    phone.tick(t, canvas);
    // (the story runs on real seconds, not the frame's capped step: a slow machine still gets its messages on time;
    // photo mode stands still)
    { const nowMs = performance.now(), real = Math.min(1, (nowMs - (storyMs || nowMs)) / 1000); storyMs = nowMs; missions.tick(photoMode ? 0 : bust && bust.t < 1.4 ? real * 0.3 : real); }
    // (and out of the way of the help card, and of the sketchbook panel where the view is too narrow for both)
    { const hs = hudScale(w, h), mapB = 16 + Math.round(150 * hs) + 8;
      minimap.hide(photoMode || phone.isOpen() || phoneDead() || (!!paint && (help || h - (16 + 124 * hs) - 40 < mapB)) || (book.state.open && w - 290 < mapB)); }
    minimap.update(rdt, t);
    { const b = minimap.box(); camera.toastAt(b.size ? b.x + b.size + 10 : 16, 16); }
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
      if (!paint || paint.spot !== w || Math.abs(alongOf(w, me.x, me.z) - a0) > 3) { me.x = w.center.x + w.normal.x * 0.7 + w.normal.z * a0; me.z = w.center.z + w.normal.z * 0.7 - w.normal.x * a0; me.heading = Math.atan2(-w.normal.x, -w.normal.z); const g = W0.groundAt(me.x, me.z, w.center.y - w.h / 2 + 0.3); if (!Number.isNaN(g)) me.gy = g; squareUp(w); }
      auto = { list, i: 0, k: 0, t: 0, gap: 0.4, speed: o.speed, group: 'p' + ++autoN, done: res };
    } catch (e) { rej(e); }
  });

  say(''); hud();
  frame();
  requestAnimationFrame(() => loading.done());   // the first frame is up: fade into the game
  // the soundtrack starts with the game (owner: music on by default); a held-back AudioContext starts on the first key
  if (opts.music !== false) music = makeMusic({ bus: sound, tracks: opts.music || undefined, onTrack: (tr) => note(`♪ ${tr.title.toUpperCase()} · [M] MUSIC`, 3.5) });

  const api: Game = {
    canvas,
    where: () => { const p = writer.tip(tipV); return { x: me.x, z: me.z, y: me.gy + me.y, yaw: camO.yaw, heading: me.heading, anim: writer.playing(), speed: mv.speed, tip: p ? [p.x, p.y, p.z] as [number, number, number] : null }; },
    alarm: () => law.alarm({ x: me.x, z: me.z, gy: me.gy }),
    places: () => city.plan.places.map((p) => ({ ...p })),
    teleport: (id) => { const p = city.plan.places.find((q) => q.id === id || q.name.toLowerCase() === String(id).toLowerCase()); if (!p) return null; api.goto(p.x, p.z, p.yaw, 0.12, p.y); return { id: p.id, name: p.name, x: p.x, z: p.z, y: p.y }; },
    at: () => { let best = city.plan.places[0], bd = 1e9; for (const p of city.plan.places) { const d = Math.hypot(p.x - me.x, p.z - me.z) + Math.abs(p.y - me.gy) * 3; if (d < bd) { bd = d; best = p; } } const d = doorAt(); return { place: best.id, dist: +bd.toFixed(1), door: d ? d.id : '', ground: +me.gy.toFixed(2), inside: city.ceilingAt(me.x, me.z, me.gy + 1) < Infinity }; },
    map: (width = 1600) => city.map(r, width),
    train: () => city.train(),
    // a picture of the game: render a frame and copy it in the same step (the drawing buffer is not kept)
    snap: (width = 768) => {
      city.beforeRender(r, scene, cam); comp.render(0);
      const c = document.createElement('canvas'); c.width = width; c.height = Math.round(width * canvas.height / canvas.width);
      c.getContext('2d')!.drawImage(canvas, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', 0.82);
    },
    // look at the writer: camera yaw/pitch/distance, which way they face, a clip to hold (for judging the model)
    // view: a fixed camera for pictures, round the writer (yaw from straight in front of them, pitch up, metres), aimed
    // at a bone ('RightHand') or at a height on the body; at: hold the clip at this time
    inspect: (o) => {
      if (o.yaw != null) camO.yaw = o.yaw; if (o.pitch != null) camO.pitch = o.pitch; if (o.dist != null) camO.dist = o.dist;
      if (o.heading != null) me.heading = o.heading; if (o.anim !== undefined) forceAnim = o.anim || '';
      if (o.at !== undefined) writer.freeze(o.at); if (o.view !== undefined) shotView = o.view;
      if (o.fill !== undefined) { fillL.intensity = Math.max(0, +o.fill || 0); fillL.visible = fillL.intensity > 0; }   // (pictures: a soft light from the camera)
    },
    /** Paint a stroke on a wall: points (u, v) 0..1 across and up it. */
    paint: (id, pts, o = {}) => { stroke = null; spray.path(id, pts, { colour: o.colour || COLOURS[0], cap: o.cap || 2, dist: o.dist ?? 0.2, pressure: o.pressure ?? 1, buff: !!o.buff }); },
    clearPaint: (id?: string) => { stroke = null; line = null; stopAuto(false); spray.clear(id); },
    strokes: (id) => spray.strokes(id).map((s) => ({ ...s, pts: s.pts.map((p) => [p[0], p[1], p[2]] as [number, number, number]) })),
    play,
    undo: (id) => undo(id),
    tuneGait: (clip: string, v: number) => writer.tune(clip, v),
    head: (o) => writer.head(o),
    arms: () => writer.arms(),
    fixArms: (on) => writer.fixArms(on),
    carry: (on) => { canWanted = on; writer.carry(on && !(pk.mode() === 'climb' || pk.mode() === 'swim' || (pk.mode() === 'mantle'))); },
    far: (side) => writer.far(side),
    ik: () => writer.ik(),
    bones: (names) => Object.fromEntries(names.map((n) => { const p = writer.bonePos(n, new THREE.Vector3()); return [n, p ? [p.x, p.y, p.z] as [number, number, number] : null]; })),
    grip: () => writer.grip(),
    gait: (reset) => ({ ...writer.gait(reset), move: { speed: mv.speed, vx: Math.sin(me.heading) * mv.speed, vz: Math.cos(me.heading) * mv.speed, heading: me.heading, yawRate: mv.yawRate, airborne: me.airborne, crouch: me.crouch, gy: me.gy } }),
    sketches: () => book.all().map(infoOf),
    sketch: (q, kind) => { const s = findSketch(q, kind); return s ? JSON.parse(JSON.stringify(s)) : null; },
    saveSketch: async (o = {}) => infoOf(await saveWall(o)),
    deleteSketch: (id) => book.remove(id),
    blast: async (q, o = {}) => { await book.loaded; const s = findSketch(q, o.kind); if (!s) throw new Error('no sketch ' + q); if (o.colours !== undefined) book.setColours(s.id, o.colours); book.choose(s.id); return blast(book.pick() || s, o); },
    sketchbook: (o) => {
      if (o) { if (o.kind) book.setKind(o.kind); if (o.pick) book.choose(o.pick); if (o.colours !== undefined) book.setColours(book.state.pick, o.colours); if (o.speed) book.speed(o.speed); if (o.size) book.size(o.size); if (o.open != null) { book.setOpen(o.open); if (o.open) disarmed = false; } }
      return { ...book.state, colours: book.colours(), blasting, armed: book.state.open && !auto && !disarmed && !!book.pick(), plan: disarmed ? null : plan };
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
    quality: (o = {}) => {
      if (o.ao != null && aoPass) aoPass.enabled = !!o.ao;
      if (o.bloom != null) bloom.enabled = !!o.bloom;
      const d = city.quality({ lights: o.lights, refl: o.refl });
      return { ao: !!aoPass && aoPass.enabled, bloom: bloom.enabled, ...d };
    },
    spots: () => city.spots.map((s) => ({ id: s.id, w: s.w, h: s.h, x: s.center.x, y: s.center.y, z: s.center.z })),
    /** The law: heat 0..1, chase (off, calm, alerted, chase, searching, busted), the patrol car and the officers. */
    law: () => law.state(),
    cops: (on: boolean) => law.setOn(on),
    /** The game's sound, for a recorder: connect node to a MediaStreamDestination made on ctx. */
    torch: (on) => { if (on != null && !!on !== torch.on) setTorch(!!on); return { on: torch.on, intensity: +torchL.intensity.toFixed(1), at: torchL.position.toArray().map((v) => +v.toFixed(2)), dir: torchDir.toArray().map((v) => +v.toFixed(2)) }; },
    photo: (o = {}) => takePhoto(o),
    photos: () => photoStore.list(),
    photoData: async (id, thumb) => { const b = await photoStore.blob(id, !!thumb); if (!b) return null; return new Promise<string>((res, rej) => { const f = new FileReader(); f.onload = () => res(String(f.result)); f.onerror = () => rej(f.error); f.readAsDataURL(b); }); },
    deletePhoto: async (id) => { const ok = await photoStore.remove(id); if (ok) { camera.setCount(camera.count() - 1); if (gallery.isOpen()) await gallery.refresh(); hud(); } return ok; },
    gallery: (o = {}) => {
      if (o.open === false) openGallery(false);
      else if (!gallery.isOpen() && (o.open || o.view !== undefined)) openGallery(true, o.view ?? null);
      else if (o.view !== undefined) gallery.view(o.view);
      return gallery.state();
    },
    photoMode: (on) => { if (on != null) setPhotoMode(!!on); return { on: photoMode }; },
    phone: (o = {}) => {
      if (o.open === false) phone.close();
      else if (o.open || o.app || o.thread !== undefined) {
        const app: AppId = o.app || (o.thread ? 'messages' : phone.isOpen() ? phone.app() : 'home');
        if (app === 'gallery') openGallery(true); else phone.open(app, o.thread !== undefined ? { thread: o.thread } : {});
      }
      return phone.state();
    },
    messages: (o = {}) => {
      const ts = missions.threads(), out: ReturnType<Game['messages']> = { unread: missions.unread(), contacts: ts.map((t) => ({ id: t.id, name: t.name, unread: t.unread, last: t.last })) };
      if (o.contact) { const t = ts.find((x) => x.id === o.contact); out.thread = t ? t.msgs.slice() : []; if (o.read) missions.read(o.contact); }
      return out;
    },
    missions: (o = {}) => { if (o.reset) missions.reset(); if (o.start && !missions.start(o.start)) throw new Error('no mission ' + o.start); return { ready: missions.ready(), list: missions.list(), current: missions.current(), markers: missions.markers(), known: missions.known() }; },
    packs: (o = {}) => {
      const out: Partial<PacksInfo> = {};
      if (o.unload) out.removed = missions.removePack(o.unload);
      if (o.load) { const r = missions.addPack(o.load); out.added = r.added; out.skipped = r.skipped; }
      const by = new Map<string, { id: string; credit?: string; missions: string[] }>();
      for (const m of MISSIONS) if (m.pack) { if (!by.has(m.pack)) by.set(m.pack, { id: m.pack, credit: m.credit, missions: [] }); by.get(m.pack)!.missions.push(m.id); }
      const P = city.plan;
      return { ...out, packs: [...by.values()], refs: { contacts: Object.keys(CONTACTS), missions: MISSIONS.map((m) => m.id), places: P.places.map((p) => ({ id: p.id, x: p.x, y: p.y, z: p.z })),
        walls: city.walls.map((w) => w.id), sketches: book.all().filter((k) => !k.mine).map((k) => ({ id: k.id, kind: k.kind })), setups: { ...SETUP_WALLS },
        bounds: { ...P.bounds }, blds: P.blds.map((b) => ({ id: b.id, x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y: b.y || 0, h: b.h, open: !!b.shell })) } };
    },
    minimap: (o = {}) => { if (o.on != null) minimap.set(!!o.on); return minimap.state(); },
    parkour: (o = {}) => {
      if (o.reset) pk.reset();
      if (o.climb) { if (paint) togglePaint(); if (!pk.climb(o.climb, o.y)) throw new Error('no climbable route ' + o.climb + ' (climbables lists them)'); }
      if (o.swim) { if (paint) togglePaint(); const z = Math.max(city.plan.canal.open.z0 + 1, Math.min(city.plan.canal.open.z1 - 1, me.z)); me.z = z; me.gy = WATER_Y; me.y = 0; me.airborne = false; pk.swim(); }
      const c = cam.position, inside = W0.boxes.some((b) => c.x > b.x0 && c.x < b.x1 && c.z > b.z0 && c.z < b.z1 && c.y > (b.y0 ?? -1e9) && c.y < (b.y1 ?? 1e9));
      // stuck: on foot, not in the air, and either inside something solid or over nothing to stand on
      const stuck = !pk.busy() && !me.airborne && (!W0.free(me.x, me.z, 0.2, me.gy) || Number.isNaN(W0.groundAt(me.x, me.z, me.gy + 0.05)));
      return { ...pk.state(), cam: { x: +c.x.toFixed(2), y: +c.y.toFixed(2), z: +c.z.toFixed(2), inside }, x: +me.x.toFixed(2), z: +me.z.toFixed(2), gy: +me.gy.toFixed(2), heading: +me.heading.toFixed(3), airborne: me.airborne, stuck };
    },
    climbables: (o = {}) => ({
      routes: city.plan.climbs.filter((c) => CLIMBABLE.includes(c.kind) && c.n).map((c) => ({ id: c.id || '', kind: c.kind, name: c.name || c.kind, x: +c.x.toFixed(2), z: +c.z.toFixed(2), y0: +c.y0.toFixed(2), y1: +c.y1.toFixed(2), top: c.top ? { x: +c.top.x.toFixed(2), z: +c.top.z.toFixed(2), y: +c.top.y.toFixed(2) } : null, bld: c.bld || '', dist: +Math.hypot(c.x - me.x, c.z - me.z).toFixed(1) }))
        .filter((r) => o.near == null || r.dist <= o.near).sort((a, b) => a.dist - b.dist),
      heavens: city.plan.heavens.map((h) => ({ ...h, painted: spray.painted(h.wall) })),
    }),
    water: (o = {}) => {
      if (o.wet != null) wet = Math.max(0, Math.min(1, +o.wet));
      if (o.case != null) missions.setCase(!!o.case);
      if (o.drown) { if (missions.drown()) { phone.close(); syncPhone(); } }
      if (o.newPhone) newBurner();
      const ph = missions.phone(), st = wetFx.stats();
      return { wet: +wet.toFixed(3), swimming: pk.mode() === 'swim', canPaint: wet <= WET_PAINT, drying: +(dryRate() / DRY_SECS).toFixed(4), drips: st.drops, marks: st.marks, phone: { dead: ph.dead, case: !!ph.case, held: ph.held, drowned: ph.drowned || 0, replaced: ph.replaced || 0 } };
    },
    phoneMap: (width) => phone.mapPng(width),
    music: (o = {}) => { if (!music) return null; if (o.on != null) music.set(!!o.on); if (o.next) music.next(); return music.state(); },
    audio: () => { const b = sound(); return b ? { ctx: b.ctx, node: b.out } : null; },
    goto: (x, z, yaw, pitch, y) => { if (paint) togglePaint();   // painting holds the writer at the wall: put the can down first
      pk.reset(); mv.speed = 0; mv.yawRate = 0; mv.side = 0; mv.roll = 0; mv.pitch = 0; me.crouch = false;
      // the level: the one asked for, else the highest there is here (the bridge, not the towpath under it)
      const g = W0.groundAt(x, z, y ?? 60);
      me.x = x; me.z = z; me.gy = Number.isNaN(g) ? (y ?? 0) : g; me.y = 0; me.vy = 0; me.airborne = false; mv.takeoff = 0;
      if (yaw != null) { camO.yaw = yaw; me.heading = yaw + Math.PI; } if (pitch != null) camO.pitch = pitch;
      cam.position.set(me.x + Math.sin(camO.yaw) * camO.dist, me.gy + 2, me.z + Math.cos(camO.yaw) * camO.dist); camLook.set(me.x, me.gy + 1.45, me.z); },
    stop: () => {
      stopped = true; cancelAnimationFrame(raf); ro.disconnect();
      canvas.removeEventListener('keydown', kd); canvas.removeEventListener('keyup', ku); window.removeEventListener('blur', letGo); document.removeEventListener('visibilitychange', onVis);
      scene.remove(torchL, torchL.target, beam); beam.geometry.dispose(); (beam.material as THREE.Material).dispose(); music?.stop(); hissOn(false); law.dispose(); book.dispose(); if (bus) void bus.ctx.close(); spray.dispose(); writer.dispose(); city.dispose(); look.dispose(); comp.dispose(); r.dispose(); canvas.remove(); tip.remove(); hudUi.dispose();
      gallery.dispose(); camera.dispose(); phone.dispose(); minimap.dispose(); wetFx.dispose();
      for (const o of [reticle, dot, preview, ghost, ghostFrame]) { o.geometry.dispose(); (o.material as THREE.Material).dispose(); }
      const gm = (ghost.material as THREE.MeshBasicMaterial).map; if (gm) gm.dispose();
    },
  };
  return api;
}
