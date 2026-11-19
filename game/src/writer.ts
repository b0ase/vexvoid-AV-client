/**
 * The writer: VexVoid's hooded figure. The modelled body comes from Blender (game/blender/writer.py ->
 * vx/game/models/writer.glb), rigged to bones of the same names; without it, a stand-in is built in code around the skeleton of the Quaternius Universal Animation Library
 * clips (vx/game/anims/ual.glb, CC0), so every clip (idle, walk, jog, sprint, crouch, jump, roll ...) plays on it as is.
 * The body is lofted and capsule shapes skinned to those bones with blended weights at the joints: a hoodie with the
 * hood up and nothing but black inside it (no faces), baggy trousers, white trainers. A modelled character on the same
 * skeleton can replace the body later without touching the game.
 *
 *   const w = await loadWriter(animsUrl, castShadow, modelUrl?); scene.add(w.root); w.play('Walk_Loop'); w.update(dt)
 */
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { bodyProxy, type ArmReport } from './bodyProxy';

export type Writer = {
  root: THREE.Group;
  height: number;
  play: (name: string, fade?: number, once?: boolean) => void;
  playing: () => string;
  /** Moving under the game's control: blends idle, walk, jog, sprint (or crouch idle, crouch walk) by speed (m/s), each
   *  clip played at the cadence that makes its stride match that speed, so the feet do not skate. play() takes over again. */
  loco: (speed: number, crouch: boolean) => void;
  /** The ground under the writer (y at x, z): turns on fitting the feet to it (the body drops or rises so the standing
   *  foot is on it, a foot over higher ground bends up to it) and the foot measurements in gait(). */
  setGround: (f: (x: number, z: number) => number, fit?: boolean) => void;
  /** Lean the body: roll into a turn, pitch with acceleration (radians, pivot at the feet). */
  lean: (roll: number, pitch: number) => void;
  /** Turn the upper body by this much against the hips (radians): the hips go one way, the chest stays. */
  twist: (a: number) => void;
  /** The head on the body, for tests: drift (m) of the head bone from its rest place in the chest's frame, the neck's
   *  and head's turn from rest (rad), and how much the head-to-neck distance has changed (m). */
  head: (o?: { steady?: boolean; silhouette?: boolean; square?: boolean; pass2?: boolean }) => { drift: number; neck: number; head: number; gap: number; hood: number; worst: string; pts: number; wob: number; sil?: Silhouette };
  /** A landing: the body gives a little (k 0..1, how hard). */
  land: (k: number) => void;
  /** Hold still (painting): the standing clips stop breathing and swaying, so a raised can stays where it is aimed. */
  steady: (on: boolean) => void;
  /** Whether the writer is on the ground (not in a jump): foot contact only counts then. */
  grounded: (on: boolean) => void;
  /** Where the soles are and how well they meet the ground; stats since the last reset (sink: sole below the ground,
   *  slip: how fast a planted foot moves over it). */
  gait: (reset?: boolean) => GaitInfo;
  /** Set the speed a moving clip was made for (m/s), for tuning. */
  tune: (clip: string, v: number) => void;
  /** Raise the right arm with the can to spray: the nozzle goes to `nozzle` and points at `at` (null lowers it);
   *  pressing: the index finger presses the actuator. */
  aim: (nozzle: THREE.Vector3 | null, at?: THREE.Vector3, weight?: number, pressing?: boolean) => void;
  /** Carry a can in the right hand (fingers closed round it, on the hand's grip socket in every clip). */
  carry: (on: boolean) => void;
  /** Keep the arms out of the trunk and pack (on by default; off to see the clips as they are). */
  fixArms: (on: boolean) => void;
  /** Where the can's nozzle is now (world), or null when the can is down. */
  tip: (out: THREE.Vector3) => THREE.Vector3 | null;
  /** The arms against the trunk and pack, as skinned now: how deep (m) the arm's own vertices go in, per side and part. */
  arms: () => ArmReport;
  /** The can against the hand holding it, as skinned now: fingers into the can (pen, m), the nearest the hand comes to
   *  its surface (gap, m), how much of the way round the hand touches it (wrap 0..1). */
  grip: () => GripReport;
  far: (side: 0 | 1) => { d: number; info: string };
  ik: () => Record<string, number>;
  /** For pictures: hold the clip being played at this time (seconds), or null to let it run. */
  freeze: (t: number | null) => void;
  /** Where a bone is now (world), e.g. 'RightHand'. */
  bonePos: (name: string, out: THREE.Vector3) => THREE.Vector3 | null;
  /** The can in the hand (a scene-level object: add it to the scene once). */
  can: THREE.Object3D;
  update: (dt: number) => void;
  dispose: () => void;
};

const HEIGHT = 1.78;
/** The figure as seen from behind (pass 3): per 2 cm band of height above the soles, the widest the body reaches either
 *  side of the hips' middle (half width, m) and how far back it reaches behind it (m); and from those the head's width
 *  (the hood round the skull), the shoulders' width, the neck (the narrowest band between them) and the column (how far
 *  down from the crown the figure stays no wider than 1.2 x the head: a "periscope" neck is a long column). Arms out. */
export type Silhouette = { bands: [number, number, number][]; top: number; headW: number; shoulderW: number; neckW: number; ratio: number; column: number; shoulderDrop: number[] };
export type GripReport = { shown: boolean; pen: number; gap: number; wrap: number; n: number; tilt?: number; fore?: number; palm?: number };
// the spray can's body in its own frame (metres): radius and where the cylinder runs along its axis
const CAN = { r: 0.033, y0: -0.165, y1: 0.025 };
export type GaitInfo = { on: boolean; rest: number[]; clips: Record<string, { v: number; stride: number; lift?: number[]; zr?: number[] }>; speed: number; mix: string; bodyOff: number;
  feet: { err: number; contact: boolean; slip: number; pen?: number }[];
  stats: { frames: number; sinkMean: number; sinkMax: number; sinkP95: number; floatMean: number; slipMean: number; slipP90: number; slipMax: number; contacts: number } };

// fabric detail, drawn once: a height pattern turned into a normal map and a roughness map, tiling. One UV unit is the
// figure's height (1.78 m) on every piece of the model, so `per` = how many tiles across that height.
type Weave = 'knit' | 'twill' | 'ripstop';
const weaves = new Map<Weave, { normal: THREE.Texture; rough: THREE.Texture }>();
function weave(kind: Weave, per: number) {
  let w = weaves.get(kind);
  if (!w) {
    const N = 256, h = new Float32Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const u = x / N, v = y / N; let k = 0;
      if (kind === 'knit') { // rows of V stitches, 8 x 8 a tile
        const sx = (u * 8) % 1, sy = (v * 8) % 1, ch = Math.abs(sx - 0.5) * 2;
        k = Math.pow(Math.sin(Math.PI * ((ch * 0.55 + sy) % 1)), 2) * (0.75 + 0.25 * Math.sin(Math.PI * sx));
      } else if (kind === 'twill') k = 0.5 + 0.5 * Math.sin(2 * Math.PI * (u + v) * 12) * (0.85 + 0.15 * Math.sin(2 * Math.PI * v * 48));
      else k = Math.max(Math.pow(Math.abs(Math.sin(Math.PI * u * 6)), 30), Math.pow(Math.abs(Math.sin(Math.PI * v * 6)), 30)) * 0.8 + 0.2 * Math.sin(2 * Math.PI * u * 40) * Math.sin(2 * Math.PI * v * 40);
      h[y * N + x] = k + (Math.random() - 0.5) * 0.08;
    }
    const nc = document.createElement('canvas'), rc = document.createElement('canvas'); nc.width = nc.height = rc.width = rc.height = N;
    const nd = nc.getContext('2d')!.createImageData(N, N), rd = rc.getContext('2d')!.createImageData(N, N);
    const H = (x: number, y: number) => h[((y + N) % N) * N + ((x + N) % N)];
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const dx = (H(x + 1, y) - H(x - 1, y)) * 2, dy = (H(x, y + 1) - H(x, y - 1)) * 2, l = Math.hypot(dx, dy, 1), i = (y * N + x) * 4;
      nd.data[i] = 128 - (dx / l) * 127; nd.data[i + 1] = 128 - (dy / l) * 127; nd.data[i + 2] = 128 + (1 / l) * 127; nd.data[i + 3] = 255;
      const r = 200 + (0.5 - H(x, y)) * 90; rd.data[i] = rd.data[i + 1] = rd.data[i + 2] = Math.max(0, Math.min(255, r)); rd.data[i + 3] = 255;
    }
    nc.getContext('2d')!.putImageData(nd, 0, 0); rc.getContext('2d')!.putImageData(rd, 0, 0);
    const mk = (c: HTMLCanvasElement) => { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return t; };
    w = { normal: mk(nc), rough: mk(rc) }; weaves.set(kind, w);
  }
  const n = w.normal.clone(), r = w.rough.clone(); n.repeat.set(per, per); r.repeat.set(per, per);
  return { normalMap: n, roughnessMap: r };
}

// the game's own materials for the model's named slots
const LOOK: Record<string, () => THREE.Material> = {
  // (pass 3, owner: "a real modern-AAA graffiti writer, not a grey clay figure"): each garment its own fabric and its
  // own value in the black and white, so they separate: a black nylon shell with a slight sheen, the grey cotton hood of
  // the hoodie under it, charcoal cargo twill, worn white trainers on grey rubber, a black pack with webbing.
  // the jacket is a technical shell: a tight ripstop with a sheen, so the street's rim lights draw its folds and seams
  Hoodie: () => new THREE.MeshPhysicalMaterial({ color: '#2a2b30', roughness: 0.46, metalness: 0, sheen: 0.7, sheenRoughness: 0.35, sheenColor: new THREE.Color('#8e9098'), normalScale: new THREE.Vector2(0.45, 0.45), ...weave('ripstop', 44) }),
  // the hoodie under the shell: its hood is up and out over the jacket. Matte heather cotton, a lighter grey than the
  // shell, so the hood reads as its own garment and the shoulders as the jacket's
  Cotton: () => new THREE.MeshPhysicalMaterial({ color: '#7c7d82', roughness: 0.95, metalness: 0, sheen: 0.5, sheenRoughness: 0.85, sheenColor: new THREE.Color('#6c6d72'), normalScale: new THREE.Vector2(0.6, 0.6), ...weave('knit', 80) }),
  // cargo twill: dead matte, darker than the hood, lighter than the shell
  Trousers: () => new THREE.MeshPhysicalMaterial({ color: '#45464b', roughness: 0.88, metalness: 0, sheen: 0.4, sheenRoughness: 0.7, sheenColor: new THREE.Color('#77787e'), normalScale: new THREE.Vector2(0.5, 0.5), ...weave('twill', 30) }),
  Gloves: () => new THREE.MeshStandardMaterial({ color: '#2d2e32', roughness: 0.6, metalness: 0, normalScale: new THREE.Vector2(0.4, 0.4), ...weave('knit', 70) }),
  Trim: () => new THREE.MeshStandardMaterial({ color: '#202125', roughness: 0.92, metalness: 0, normalScale: new THREE.Vector2(0.8, 0.8), ...weave('knit', 60) }),
  // worn trainers: an off-white upper gone matte with wear, grey rubber under it, white laces
  Shoes: () => new THREE.MeshStandardMaterial({ color: '#cfcfd1', roughness: 0.66, metalness: 0, emissive: '#0d0d0d', normalScale: new THREE.Vector2(0.5, 0.5) }),
  Sole: () => new THREE.MeshStandardMaterial({ color: '#b9b9bb', roughness: 0.82, metalness: 0, emissive: '#101010' }),
  Lace: () => new THREE.MeshStandardMaterial({ color: '#e6e6e6', roughness: 0.85, metalness: 0, ...weave('twill', 400) }),
  Void: () => new THREE.MeshBasicMaterial({ color: '#000000' }),
  // the bandana is near-black: inside the hood there is only darkness (no faces, not even the suggestion of one)
  Mask: () => new THREE.MeshPhysicalMaterial({ color: '#0b0b0d', roughness: 0.95, metalness: 0, sheen: 0.25, sheenRoughness: 0.8, sheenColor: new THREE.Color('#2a2a2e') }),
  Pack: () => new THREE.MeshStandardMaterial({ color: '#1d1e22', roughness: 0.55, metalness: 0.05, normalScale: new THREE.Vector2(0.45, 0.45), ...weave('ripstop', 24) }), // nylon, a little sheen
  Can: () => new THREE.MeshStandardMaterial({ color: '#b8b8bc', roughness: 0.35, metalness: 0.8 }),
  Cap: () => new THREE.MeshStandardMaterial({ color: '#f2f2f2', roughness: 0.5, metalness: 0 }),
  // reflective tape (the pack, the heels): it throws back whatever light finds it; and the dark hardware: zips, buckles,
  // webbing, rubber
  Reflect: () => new THREE.MeshStandardMaterial({ color: '#e6e7ea', roughness: 0.32, metalness: 0.35, emissive: '#2c2c2e' }),
  Detail: () => new THREE.MeshStandardMaterial({ color: '#141518', roughness: 0.5, metalness: 0.12 }),
};

// each file is fetched and parsed once (the cops are the same model on the same skeleton)
const files = new Map<string, Promise<GLTF>>();
const load = (url: string) => files.get(url) || files.set(url, new GLTFLoader().loadAsync(url).catch((e) => { files.delete(url); throw e; })).get(url)!;

/** `look` swaps the materials of named slots (Hoodie, Trousers, Shoes ...), e.g. to dress a cop in the writer's body. */
export async function loadWriter(url: string, shadow: boolean, modelUrl?: string, look: Record<string, () => THREE.Material> = {}): Promise<Writer> {
  const gltf = await load(url);
  // the modelled body, and what its builder says about the skeleton: tidied joint offsets (`rest`), the pose the meshes
  // were built in (`bind`, a matrix per bone), metres per skeleton unit (`scale`) and where a can sits in the hand (`grip`)
  let model: GLTF | null = null;
  if (modelUrl) try { model = await load(modelUrl); } catch (e) { console.warn('writer model', e); }
  // pass 2 adds: finger bones (`extra`: parent + offset), their turns for each hand pose (`fingers`), the can's shape
  // (`can`) and the clips' hip heights for the longer legs (`hipsY`, per clip, one value a key)
  let vx: { scale?: number; rest?: Record<string, number[]>; bind?: Record<string, number[]>; grip?: number[]; extra?: Record<string, { parent: string; t: number[] }>;
    fingers?: Record<string, Record<string, number[]>>; can?: { r: number; b0: number; b1: number; dome: number; actR: number; top: number; nozY: number }; hipsY?: Record<string, number[]> } = {};
  model?.scene.traverse((o) => { if (typeof o.userData.vx === 'string') try { vx = JSON.parse(o.userData.vx); } catch { /* an older model: none */ } });
  // the loader strips ':' and other reserved characters from node names ('mixamorig:LeftHand' -> 'mixamorigLeftHand'),
  // but the model's own data names bones as Blender wrote them. Until 18 Nov nothing matched, so the bind pose, the
  // tidied joints and the grip were never used in the game: the A-posed meshes were bound as if in the clips' T-pose
  // (every clip turned the arms on into the body) and the can floated off the hand. Key everything by the loaded names.
  {
    const nm = (n: string) => THREE.PropertyBinding.sanitizeNodeName(n);
    const re = <T>(o?: Record<string, T>) => (o ? Object.fromEntries(Object.entries(o).map(([k, v]) => [nm(k), v])) : o);
    vx.rest = re(vx.rest); vx.bind = re(vx.bind); vx.hipsY = vx.hipsY;
    vx.extra = vx.extra ? Object.fromEntries(Object.entries(vx.extra).map(([k, v]) => [nm(k), { ...v, parent: nm(v.parent) }])) : vx.extra;
    vx.fingers = vx.fingers ? Object.fromEntries(Object.entries(vx.fingers).map(([k, v]) => [k, re(v)!])) : vx.fingers;
  }
  const armSrc = gltf.scene.getObjectByName('Armature') || gltf.scene.children[0];
  const hipsSrc = armSrc.children[0];

  // the skeleton, rebuilt as bones from the clip file's own rest pose (rest rotations are identity)
  const bones: THREE.Bone[] = [];
  const mk = (n: THREE.Object3D): THREE.Bone => {
    const b = new THREE.Bone();
    b.name = n.name; b.position.copy(n.position); b.quaternion.copy(n.quaternion); b.scale.copy(n.scale);
    if (vx.rest?.[n.name]) b.position.fromArray(vx.rest[n.name]);
    bones.push(b);
    n.children.forEach((c) => b.add(mk(c)));
    return b;
  };
  const hips = mk(hipsSrc);
  // the finger bones the model brings (the clip library has none): under each hand, turned by the game itself
  for (const [name, e] of Object.entries(vx.extra || {})) {
    const par = bones.find((b) => b.name === e.parent); if (!par) continue;
    const b = new THREE.Bone(); b.name = name; b.position.fromArray(e.t); par.add(b); bones.push(b);
  }
  const arm = new THREE.Object3D();
  arm.position.copy(armSrc.position); arm.quaternion.copy(armSrc.quaternion); arm.scale.copy(armSrc.scale);
  arm.add(hips);
  const char = new THREE.Group();
  char.add(arm);
  char.updateMatrixWorld(true);
  const B = (s: string) => { const b = bones.find((x) => x.name.replace(/^mixamorig:?/, '') === s); if (!b) throw new Error('writer: no bone ' + s); return b; };
  const P = (s: string) => B(s).getWorldPosition(new THREE.Vector3());
  const idx = (b: THREE.Bone) => bones.indexOf(b);

  // sizes in skeleton units: the figure is built at the skeleton's scale, then the whole character is scaled to 1.78 m
  const foot = Math.min(P('LeftToeBase').y, P('RightToeBase').y);
  const headY = P('Head').y;
  const Hs = (headY - foot) / 0.89; // the head bone sits at about 89% of standing height
  const u = (m: number) => (m / HEIGHT) * Hs; // metres to skeleton units

  const meshes: THREE.SkinnedMesh[] = [];
  const owned: { dispose: () => void }[] = [];
  // the modelled body: each skinned mesh, its weights moved onto this skeleton by bone name, in the same rest pose
  if (model) try {
    model.scene.updateMatrixWorld(true);
    model.scene.traverse((o) => {
      const sm = o as THREE.SkinnedMesh; if (!sm.isSkinnedMesh) return;
      const geo = sm.geometry.clone(); geo.applyMatrix4(sm.matrixWorld);
      const map = sm.skeleton.bones.map((b) => bones.findIndex((x) => x.name === b.name));
      const si = geo.attributes.skinIndex as THREE.BufferAttribute;
      for (let i = 0; i < si.array.length; i++) (si.array as Uint16Array)[i] = Math.max(0, map[si.array[i]]);
      si.needsUpdate = true;
      const src = sm.material as THREE.MeshStandardMaterial, mat = (look[src.name] || LOOK[src.name] || (() => src))();
      // the model's atlas (second UV set): baked occlusion, seams and wear, multiplied into the cloth and used as its occlusion
      const std = mat as THREE.MeshStandardMaterial;
      if (src.map && std.isMeshStandardMaterial && !std.map) { std.map = src.map; std.aoMap = src.map; std.aoMapIntensity = 1; std.needsUpdate = true; }
      // the model's cloth folds (a normal map on the atlas's UV set, pass 2) take the place of the tiling weave; the shell
      // keeps its ripstop in a thin clear coat, so the street's lights still catch the weave
      if (src.normalMap && std.isMeshStandardMaterial) {
        const weave = std.normalMap; std.normalMap = src.normalMap; std.normalScale.copy(src.normalScale);
        const ph = mat as THREE.MeshPhysicalMaterial;
        if (weave && ph.isMeshPhysicalMaterial && src.name === 'Hoodie') { ph.clearcoat = 0.3; ph.clearcoatRoughness = 0.42; ph.clearcoatNormalMap = weave; ph.clearcoatNormalScale.set(0.7, 0.7); }
        std.needsUpdate = true;
      }
      const m = new THREE.SkinnedMesh(geo, mat); m.name = sm.name; m.userData.slot = src.name;
      meshes.push(m); owned.push(geo, mat);
    });
  } catch (e) { console.warn('writer model', e); }

  const parts: { geo: THREE.BufferGeometry; mat: number }[] = [];
  if (!meshes.length) {
  const MAT = { hoodie: 0, trousers: 1, shoes: 2, skin: 3, void: 4, trim: 5 };

  // weights: a vertex at fraction t along bone A->B belongs to A, blending into A's parent near the start and into B
  // near the end, so elbows, knees and the spine bend smoothly
  const weigh = (g: THREE.BufferGeometry, a: THREE.Vector3, b: THREE.Vector3, bA: THREE.Bone, bB: THREE.Bone | null, blend = 0.18) => {
    const p = g.attributes.position as THREE.BufferAttribute, n = p.count;
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    const ab = b.clone().sub(a), L2 = Math.max(1e-9, ab.lengthSq()), v = new THREE.Vector3();
    const par = bA.parent instanceof THREE.Bone ? bA.parent : bA;
    for (let i = 0; i < n; i++) {
      v.fromBufferAttribute(p, i);
      const t = THREE.MathUtils.clamp(v.clone().sub(a).dot(ab) / L2, 0, 1);
      let i0 = idx(bA), i1 = idx(bA), w1 = 0;
      if (t < blend && par !== bA) { i1 = idx(par as THREE.Bone); w1 = 0.5 - (t / blend) * 0.5; }
      else if (bB && t > 1 - blend) { i1 = idx(bB); w1 = ((t - (1 - blend)) / blend) * 0.5; }
      si[i * 4] = i0; si[i * 4 + 1] = i1; sw[i * 4] = 1 - w1; sw[i * 4 + 1] = w1;
    }
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
    return g;
  };
  // a tapered capsule from a to b
  const limb = (from: string, to: string, r0: number, r1: number, mat: number, child: string | null, opts: { radial?: number; squash?: number; extend?: number } = {}) => {
    const a = P(from), b0 = P(to), dir = b0.clone().sub(a), len0 = dir.length();
    const ext = (opts.extend || 0) * len0, b = a.clone().addScaledVector(dir.normalize(), len0 + ext), len = len0 + ext;
    const R = opts.radial || 14;
    const cyl = new THREE.CylinderGeometry(u(r1), u(r0), len, R, 8, true);
    cyl.translate(0, len / 2, 0);
    const c0 = new THREE.SphereGeometry(u(r0), R, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2); // bottom cap
    const c1 = new THREE.SphereGeometry(u(r1), R, 8, 0, Math.PI * 2, 0, Math.PI / 2); c1.translate(0, len, 0);
    const g = mergeGeometries([cyl.toNonIndexed(), c0.toNonIndexed(), c1.toNonIndexed()])!;
    if (opts.squash) g.scale(1, 1, opts.squash);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir));
    g.translate(a.x, a.y, a.z);
    parts.push({ geo: weigh(g, a, b, B(from), child ? B(child) : null), mat });
  };
  // the hoodie body: rings along the spine, each skinned to its own bone, so the torso twists and bends
  const loft = (rings: { at: THREE.Vector3; rx: number; rz: number; bone: THREE.Bone; dz?: number }[], mat: number) => {
    const R = 22, pos: number[] = [], si: number[] = [], sw: number[] = [], index: number[] = [];
    // in-between rings blend the bones either side
    const all: { at: THREE.Vector3; rx: number; rz: number; b0: THREE.Bone; b1: THREE.Bone; w: number; dz: number }[] = [];
    for (let k = 0; k < rings.length - 1; k++) for (let s = 0; s < 4; s++) {
      const f = s / 4, A = rings[k], C = rings[k + 1], e = f * f * (3 - 2 * f);
      all.push({ at: A.at.clone().lerp(C.at, f), rx: A.rx + (C.rx - A.rx) * e, rz: A.rz + (C.rz - A.rz) * e, b0: A.bone, b1: C.bone, w: f, dz: (A.dz || 0) + ((C.dz || 0) - (A.dz || 0)) * e });
    }
    const L = rings[rings.length - 1]; all.push({ at: L.at.clone(), rx: L.rx, rz: L.rz, b0: L.bone, b1: L.bone, w: 0, dz: L.dz || 0 });
    all.forEach((r) => {
      for (let j = 0; j < R; j++) {
        const th = (j / R) * Math.PI * 2;
        pos.push(r.at.x + Math.sin(th) * u(r.rx), r.at.y, r.at.z + u(r.dz) + Math.cos(th) * u(r.rz));
        si.push(idx(r.b0), idx(r.b1), 0, 0); sw.push(1 - r.w, r.w, 0, 0);
      }
    });
    for (let k = 0; k < all.length - 1; k++) for (let j = 0; j < R; j++) {
      const a = k * R + j, b = k * R + ((j + 1) % R), c = a + R, d = b + R;
      index.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
    g.setIndex(index);
    const ng = g.toNonIndexed(); ng.computeVertexNormals();
    parts.push({ geo: ng, mat });
  };
  // a rounded blob rigidly on one bone (hands, hood, trainers)
  const blob = (bone: string, at: THREE.Vector3, sx: number, sy: number, sz: number, mat: number, phiStart = 0, phiLen = Math.PI * 2, thetaStart = 0, thetaLen = Math.PI) => {
    const g = new THREE.SphereGeometry(1, 20, 14, phiStart, phiLen, thetaStart, thetaLen).toNonIndexed();
    g.scale(u(sx), u(sy), u(sz)); g.translate(at.x, at.y, at.z);
    const n = g.attributes.position.count, b = idx(B(bone));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(new Uint16Array(n * 4).map((_, i) => (i % 4 === 0 ? b : 0)), 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(new Float32Array(n * 4).map((_, i) => (i % 4 === 0 ? 1 : 0)), 4));
    parts.push({ geo: g, mat });
    return g;
  };

  const hipsP = P('Hips'), sp = P('Spine'), sp1 = P('Spine1'), sp2 = P('Spine2'), neck = P('Neck'), head = P('Head');
  // the hoodie: loose at the hem, broad at the shoulders, with a kangaroo-pocket bulge at the front
  loft([
    { at: hipsP.clone().add(new THREE.Vector3(0, -u(0.1), 0)), rx: 0.19, rz: 0.13, bone: B('Hips'), dz: 0.01 },
    { at: sp, rx: 0.175, rz: 0.125, bone: B('Spine'), dz: 0.015 },
    { at: sp1, rx: 0.18, rz: 0.13, bone: B('Spine1'), dz: 0.01 },
    { at: sp2, rx: 0.2, rz: 0.13, bone: B('Spine2') },
    { at: neck.clone().add(new THREE.Vector3(0, -u(0.02), 0)), rx: 0.19, rz: 0.12, bone: B('Spine2') },
    { at: neck.clone().add(new THREE.Vector3(0, u(0.03), -u(0.01))), rx: 0.085, rz: 0.08, bone: B('Neck') },
  ], MAT.hoodie);
  // sleeves (baggy), cuffs, hands
  for (const s of ['Left', 'Right']) {
    limb(`${s}Shoulder`, `${s}Arm`, 0.07, 0.065, MAT.hoodie, `${s}Arm`, { extend: 0.1 });
    limb(`${s}Arm`, `${s}ForeArm`, 0.062, 0.052, MAT.hoodie, `${s}ForeArm`);
    limb(`${s}ForeArm`, `${s}Hand`, 0.052, 0.045, MAT.hoodie, `${s}Hand`);
    const h = P(`${s}Hand`), f = P(`${s}ForeArm`), d = h.clone().sub(f).normalize();
    blob(`${s}Hand`, h.clone().addScaledVector(d, u(0.06)), 0.045, 0.045, 0.045, MAT.skin);
    // legs: baggy trousers stacking over the trainers
    limb(`${s}UpLeg`, `${s}Leg`, 0.085, 0.068, MAT.trousers, `${s}Leg`, { extend: 0.04 });
    limb(`${s}Leg`, `${s}Foot`, 0.066, 0.06, MAT.trousers, `${s}Foot`);
    // trainers: a chunky white sole and upper along the foot
    const fp = P(`${s}Foot`), tp = P(`${s}ToeBase`), mid = fp.clone().lerp(tp, 0.55);
    mid.y = Math.min(fp.y, tp.y) + u(0.03);
    const shoe = blob(`${s}Foot`, mid, 0.055, 0.05, 0.14, MAT.shoes);
    const yaw = Math.atan2(tp.x - fp.x, tp.z - fp.z);
    shoe.translate(-mid.x, -mid.y, -mid.z); shoe.rotateY(yaw); shoe.translate(mid.x, mid.y, mid.z);
  }
  // the hood: a shell over the head, open at the front, with only darkness inside
  const hc = head.clone().add(new THREE.Vector3(0, u(0.09), -u(0.015)));
  blob('Head', hc, 0.125, 0.14, 0.135, MAT.hoodie, Math.PI * 0.18, Math.PI * 1.64);
  blob('Head', hc.clone().add(new THREE.Vector3(0, -u(0.005), u(0.02))), 0.1, 0.115, 0.1, MAT.void);
  const rim = new THREE.TorusGeometry(1, 0.11, 8, 24).toNonIndexed();
  rim.scale(u(0.088), u(0.112), u(0.088)); rim.translate(hc.x, hc.y - u(0.005), hc.z + u(0.11));
  {
    const n = rim.attributes.position.count, b = idx(B('Head'));
    rim.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(new Uint16Array(n * 4).map((_, i) => (i % 4 === 0 ? b : 0)), 4));
    rim.setAttribute('skinWeight', new THREE.Float32BufferAttribute(new Float32Array(n * 4).map((_, i) => (i % 4 === 0 ? 1 : 0)), 4));
    parts.push({ geo: rim, mat: MAT.hoodie });
  }

  // one skinned mesh, one draw per material
  const byMat = new Map<number, THREE.BufferGeometry[]>();
  for (const p of parts) {
    const g = p.geo.index ? p.geo.toNonIndexed() : p.geo;
    if (!g.attributes.normal) g.computeVertexNormals();
    ['uv', 'uv1'].forEach((a) => g.deleteAttribute(a));
    (byMat.get(p.mat) || byMat.set(p.mat, []).get(p.mat)!).push(g);
  }
  const order = [...byMat.keys()].sort((a, b) => a - b);
  const geo = mergeGeometries(order.map((m) => mergeGeometries(byMat.get(m)!)!), true)!;
  const mats = [
    new THREE.MeshStandardMaterial({ color: '#45464c', roughness: 0.86, metalness: 0 }), // hoodie: washed-black cotton
    new THREE.MeshStandardMaterial({ color: '#5a5b61', roughness: 0.8, metalness: 0 }), // trousers
    new THREE.MeshStandardMaterial({ color: '#f4f4f4', roughness: 0.4, metalness: 0, emissive: '#202020' }), // trainers
    new THREE.MeshStandardMaterial({ color: '#6a6a6e', roughness: 0.65, metalness: 0 }), // gloved hands
    new THREE.MeshBasicMaterial({ color: '#000000' }), // inside the hood
  ];
  const usedMats = order.map((m) => mats[m]);
  meshes.push(new THREE.SkinnedMesh(geo, usedMats)); owned.push(geo, ...mats);
  }
  for (const m of meshes) { m.castShadow = shadow; m.receiveShadow = true; m.frustumCulled = false; char.add(m); }
  char.updateMatrixWorld(true);
  // bound in the pose the model was built in (its own bind matrices), not the clip file's rest pose
  const inv = vx.bind ? bones.map((b) => (vx.bind![b.name] ? new THREE.Matrix4().fromArray(vx.bind![b.name]).invert() : b.matrixWorld.clone().invert())) : undefined;
  const skeleton = new THREE.Skeleton(bones, inv);
  // (bind with the mesh's own matrix: bind(skeleton) alone makes three recompute the inverses from the skeleton's rest
  // pose and throws the model's bind pose away, which until 18 Nov bound the A-posed body as if it were in the clips'
  // rest pose: every clip then turned the arms on through the trunk)
  for (const m of meshes) { m.updateMatrixWorld(true); m.bind(skeleton, m.matrixWorld); }
  const body = bodyProxy(meshes, bones, vx.scale || 1);

  // stand on the ground at 1.78 m, feet at y = 0
  const k = vx.scale || HEIGHT / Hs;
  const root = new THREE.Group();
  char.scale.setScalar(k);
  char.position.y = vx.scale ? 0 : -foot * k; // the model stands on the clips' own ground
  root.add(char);

  // the clips: in place (the game moves the body), hips keep their bob
  const clips = new Map<string, THREE.AnimationClip>();
  const rest = hips.position.clone();
  for (const c of gltf.animations) {
    const hy = vx.hipsY?.[c.name];   // the longer legs: the hips ride higher, so the standing foot stays where the clip had it
    for (const tr of c.tracks) if (/Hips\.position$/.test(tr.name)) for (let i = 0; i < tr.values.length; i += 3) { tr.values[i] = rest.x; tr.values[i + 2] = rest.z; if (hy && hy.length === tr.values.length / 3) tr.values[i + 1] = hy[i / 3]; }
    clips.set(c.name, c);
  }
  const mixer = new THREE.AnimationMixer(char);
  let cur: THREE.AnimationAction | null = null, curName = '';
  const play = (name: string, fade = 0.2, once = false) => {
    if (name === curName) return;
    const clip = clips.get(name); if (!clip) return;
    const a = mixer.clipAction(clip);
    a.reset(); a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity); a.clampWhenFinished = once; a.enabled = true; a.setEffectiveWeight(1);
    if (cur) a.crossFadeFrom(cur, fade, true);
    a.play(); cur = a; curName = name;
  };
  play('Idle_Loop', 0);
  // standing still is never quite still: a breath through the chest and a slow look round, over whatever idle plays
  const spine0 = B('Spine'), spine1 = B('Spine1'), neckB = B('Neck'), headB = B('Head');
  // where the head sits on the chest at rest (Spine2's frame) and how far it is from the neck: head() measures against it
  const headRest = (() => { root.updateMatrixWorld(true); const s2 = B('Spine2'); return { inChest: s2.worldToLocal(headB.getWorldPosition(new THREE.Vector3())), gap: headB.getWorldPosition(new THREE.Vector3()).distanceTo(neckB.getWorldPosition(new THREE.Vector3())) }; })();   // (the body's scale never changes)
  const hdV = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]; let lastHR: THREE.Quaternion | null = null;
  // sample points on the head and hood (vertices above the neck), kept in the Head bone's frame at rest: head() checks
  // the skinned mesh still sits where the head bone says (a hood that slides or stretches off the head shows here)
  const hoodPts: { m: THREE.SkinnedMesh; i: number; rest: THREE.Vector3; w: string }[] = [];
  {
    root.updateMatrixWorld(true); for (const m of meshes) m.skeleton?.update();
    const ny = neckB.getWorldPosition(new THREE.Vector3()).y, hb = bones.indexOf(headB), nb = bones.indexOf(neckB), v = new THREE.Vector3();
    for (const m of meshes) {
      const pos = m.geometry.attributes.position, si = m.geometry.attributes.skinIndex, sw = m.geometry.attributes.skinWeight; if (!si) continue;
      const cand: number[] = [];
      for (let i = 0; i < pos.count; i++) { m.getVertexPosition(i, v); v.applyMatrix4(m.matrixWorld); let hw = 0; for (let c = 0; c < 4; c++) if (si.getComponent(i, c) === hb || si.getComponent(i, c) === nb) hw += sw.getComponent(i, c); if (v.y > ny && hw > 0.05) cand.push(i); }
      for (let k = 0; k < cand.length; k += Math.max(1, Math.floor(cand.length / 40))) {
        const i = cand[k]; m.getVertexPosition(i, v); v.applyMatrix4(m.matrixWorld);
        const ws = [0, 1, 2, 3].map((c) => [si.getComponent(i, c), sw.getComponent(i, c)]).filter(([, w]) => w > 0.01).map(([b, w]) => `${b === hb ? 'Head' : b === nb ? 'Neck' : bones[b]?.name || b}:${w.toFixed(2)}`).join(' ');
        hoodPts.push({ m, i, rest: headB.worldToLocal(v.clone()), w: `${m.name || m.userData.slot}#${i} ${ws}` });
      }
    }
  }
  // the silhouette from behind (for tests: see Silhouette). Every skinned vertex but the forearms, hands and fingers.
  const armIdx = new Set(bones.map((b, i) => (/(ForeArm|Hand)/.test(b.name) ? i : -1)).filter((i) => i >= 0));
  const silhouette = (): Silhouette => {
    root.updateMatrixWorld(true); for (const m of meshes) m.skeleton?.update();
    const inv = root.matrixWorld.clone().invert(), v = new THREE.Vector3(), hipsW = hips.getWorldPosition(new THREE.Vector3()).applyMatrix4(inv);
    const N = 100, half = new Array(N).fill(0), back = new Array(N).fill(0); let top = 0;
    for (const m of meshes) {
      const si = m.geometry.attributes.skinIndex, sw = m.geometry.attributes.skinWeight, n = m.geometry.attributes.position.count;
      for (let i = 0; i < n; i++) {
        let bi = si.getX(i), bw = sw.getX(i); for (let c = 1; c < 4; c++) if (sw.getComponent(i, c) > bw) { bw = sw.getComponent(i, c); bi = si.getComponent(i, c); }
        if (armIdx.has(bi)) continue;
        m.getVertexPosition(i, v); v.applyMatrix4(m.matrixWorld).applyMatrix4(inv);
        const k = Math.floor(v.y / 0.02); if (k < 0 || k >= N) continue; top = Math.max(top, v.y);
        half[k] = Math.max(half[k], Math.abs(v.x - hipsW.x)); back[k] = Math.max(back[k], -(v.z - hipsW.z));
      }
    }
    const at = (z0: number, z1: number, f: (a: number[]) => number) => f(half.slice(Math.max(0, Math.floor(z0 / 0.02)), Math.floor(z1 / 0.02) + 1).filter((x) => x > 0));
    const headW = at(top - 0.16, top - 0.04, (a) => Math.max(...a)), shoulderW = at(top - 0.42, top - 0.28, (a) => Math.max(...a)), neckW = at(top - 0.28, top - 0.16, (a) => Math.min(...a));
    let column = 0; for (let k = Math.floor(top / 0.02); k >= 0; k--) { if (half[k] > headW * 1.2) { column = top - (k + 1) * 0.02; break; } }
    const r = (x: number) => Math.round(x * 1000) / 1000;
    return { bands: half.map((h, k) => [r(k * 0.02), r(h), r(back[k])] as [number, number, number]).filter((b) => b[0] > top - 0.6 && b[1] > 0), top: r(top), headW: r(headW), shoulderW: r(shoulderW), neckW: r(neckW), ratio: r(shoulderW / headW), column: r(column), shoulderDrop: shoulderDrop.map(r) };
  };
  let life = 0, lt = 0, frozen: number | null = null;
  // spraying: the right arm reaches for the wall (two-bone IK over whatever clip plays) with a can in the hand
  const rArm = B('RightArm'), rFore = B('RightForeArm'), rHand = B('RightHand'), spine2 = B('Spine2');
  // THE CAN IN THE HAND (owner, 18 Nov: "Vex needs to HOLD the spraycans"): the can sits on the right hand's grip
  // socket (from the model: the middle of the fist), carried by the hand bone every frame through every clip, and the
  // fingers close round it (their turns come from the model, solved round this same can); the index finger rises onto
  // the actuator while the can is up, and presses while spraying
  const C = vx.can || { r: 0.033, b0: -0.142, b1: 0.018, dome: 0.04, actR: 0.0115, top: 0.062, nozY: 0.054 };
  CAN.r = C.r; CAN.y0 = C.b0; CAN.y1 = C.b1;
  const can = new THREE.Group();
  const nozLocal = new THREE.Vector3(0, C.nozY, C.actR + 0.004);
  {
    // (brushed, not chrome: a polished can under a street lamp bloomed into a white bar)
    const metal = new THREE.MeshPhysicalMaterial({ color: '#a8aab0', roughness: 0.42, metalness: 0.85, clearcoat: 0.25, clearcoatRoughness: 0.35 });
    const white = new THREE.MeshStandardMaterial({ color: '#e6e6e6', roughness: 0.55 });
    const dark = new THREE.MeshStandardMaterial({ color: '#2a2a2e', roughness: 0.4 });
    // the body by its outline, turned round its axis: rolled base, body, domed shoulder, valve cup
    const prof: THREE.Vector2[] = [new THREE.Vector2(0, C.b0 + 0.004), new THREE.Vector2(C.r * 0.8, C.b0), new THREE.Vector2(C.r * 0.95, C.b0 + 0.002), new THREE.Vector2(C.r, C.b0 + 0.007)];
    for (let i = 0; i <= 8; i++) { const a = (i / 8) * Math.PI / 2; prof.push(new THREE.Vector2(0.0135 + (C.r - 0.0135) * Math.cos(a), C.b1 + (C.dome - C.b1) * Math.sin(a))); }
    prof.push(new THREE.Vector2(0.0135, C.dome + 0.002), new THREE.Vector2(0, C.dome + 0.002));
    const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 28), metal);
    const act = new THREE.Mesh(new THREE.CylinderGeometry(C.actR - 0.0015, C.actR, C.top - C.dome, 18), white); act.position.y = (C.top + C.dome) / 2;
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.0022, 0.0022, 0.004, 8), dark); nozzle.rotation.x = Math.PI / 2; nozzle.position.set(0, C.nozY, C.actR + 0.001);
    for (const m of [body, act, nozzle]) { m.castShadow = shadow; can.add(m); }
    owned.push(body.geometry, act.geometry, nozzle.geometry, metal, white, dark);
  }
  can.visible = false;
  const iA = new THREE.Vector3(), iB = new THREE.Vector3(), iC = new THREE.Vector3(), iT = new THREE.Vector3(), iE = new THREE.Vector3(), iP = new THREE.Vector3();
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qp = new THREE.Quaternion();
  // turn a bone in world space so its direction `from` becomes `to`, by weight w
  const turn = (bone: THREE.Bone, from: THREE.Vector3, to: THREE.Vector3, w: number) => {
    qa.setFromUnitVectors(from, to); bone.getWorldQuaternion(qb); bone.parent!.getWorldQuaternion(qp);
    bone.quaternion.slerp(qp.invert().multiply(qa.multiply(qb)), w); bone.updateMatrixWorld(true);
  };
  // turn a bone by a world rotation about its own joint
  const spin = (bone: THREE.Bone, q: THREE.Quaternion) => { bone.getWorldQuaternion(qb); bone.parent!.getWorldQuaternion(qp); bone.quaternion.copy(qp.invert().multiply(qa.copy(q).multiply(qb))); bone.updateMatrixWorld(true); };
  // the grip socket in the right hand's frame (skeleton units), and its turn: the can's +Y is up its axis, +Z its nozzle
  let gripPos: THREE.Vector3 | null = null; const gripRot = new THREE.Quaternion(), gripInv = new THREE.Quaternion();
  if (vx.grip && vx.bind?.[rHand.name]) {
    const g = new THREE.Matrix4().fromArray(vx.bind[rHand.name]).invert().multiply(new THREE.Matrix4().fromArray(vx.grip));
    gripPos = new THREE.Vector3(); g.decompose(gripPos, gripRot, new THREE.Vector3()); gripInv.copy(gripRot).invert();
  }
  // which way the forearm runs in the hand's own frame (a straight wrist), for choosing an elbow that keeps it straight
  const foreInHand = (() => { if (!vx.bind?.[rHand.name] || !vx.bind?.[rFore.name]) return new THREE.Vector3(0, 1, 0); const h = new THREE.Matrix4().fromArray(vx.bind[rHand.name]), f = new THREE.Matrix4().fromArray(vx.bind[rFore.name]); const d = new THREE.Vector3().setFromMatrixPosition(h).sub(new THREE.Vector3().setFromMatrixPosition(f)); return d.applyQuaternion(new THREE.Quaternion().setFromRotationMatrix(h).invert()).normalize(); })();
  // the fingers: their turns per pose and hand, from the model
  const fq = (pose: string, b: THREE.Bone) => { const a = vx.fingers?.[pose]?.[b.name]; return a ? new THREE.Quaternion(a[0], a[1], a[2], a[3]) : null; };
  const fingers = bones.filter((b) => vx.fingers?.relax?.[b.name]).map((b) => ({ b, right: /Right/.test(b.name), index: /Index/.test(b.name), relax: fq('relax', b)!, grip: fq('grip', b) || fq('relax', b)!, press: fq('press', b) || fq('grip', b) || fq('relax', b)! }));
  let carryOn = false, carryW = 0, pressOn = false, pressW = 0, armsFix = true;
  const gM = new THREE.Matrix4(), gQ = new THREE.Quaternion(), gH = new THREE.Quaternion(), UP = new THREE.Vector3(0, 1, 0);
  const aimHand = new THREE.Vector3(), aimAt = new THREE.Vector3(), wristT = new THREE.Vector3(), tv2 = new THREE.Vector3(), tv3 = new THREE.Vector3();
  let aimOn = false, aimTo = 1, aimW = 0, swivel = NaN;
  // ARMS OUTSIDE THE BODY (owner, 18 Nov: "VEX'S ARMS shouldn't travel through his body"). The trunk and pack as a
  // shape (bodyProxy) and the arm as capsules round its bones (radii from the sleeve, the cuff, the fist and the can)
  const R_UP = 0.064, R_FORE = 0.056, R_HAND = 0.046, R_CAN = 0.036, CLEAR = 0.006;
  const kS = vx.scale || 1;
  const armPen = (a: THREE.Vector3, b: THREE.Vector3, r: number, t0: number, n: number, worst: { pen: number; p: THREE.Vector3; dir: THREE.Vector3 }) => {
    for (let i = 0; i < n; i++) { const t = t0 + (1 - t0) * (n === 1 ? 1 : i / (n - 1)); tv2.copy(a).lerp(b, t); const d = body.depth(tv2); const pen = d.pen + r + CLEAR; if (pen > worst.pen) { worst.pen = pen; worst.p.copy(tv2); worst.dir.copy(d.dir); } }
  };
  const W1 = { pen: 0, p: new THREE.Vector3(), dir: new THREE.Vector3() };
  const canAxis = (out0: THREE.Vector3, out1: THREE.Vector3) => { if (!gripPos) return false; rHand.getWorldQuaternion(gQ).multiply(gripRot); out0.copy(gripPos); rHand.localToWorld(out0); out1.set(0, 1, 0).applyQuaternion(gQ); return true; };
  // a clip's arm through the trunk: the upper arm turns out about the shoulder until the elbow side clears, then the
  // forearm about the elbow until the forearm, the fist and the can clear (a few small passes)
  const sideArms = (['Left', 'Right'] as const).map((s) => ({ s, arm: B(s + 'Arm'), fore: B(s + 'ForeArm'), hand: B(s + 'Hand') }));
  const ax = new THREE.Vector3(), qr = new THREE.Quaternion(), cA = new THREE.Vector3(), cU = new THREE.Vector3(), hTip = new THREE.Vector3();
  const pushOut = (sa: (typeof sideArms)[number], fixUpper = true, passes = 3) => {
    for (let pass = 0; pass < passes; pass++) {
      root.updateMatrixWorld(true); body.prep();
      sa.arm.getWorldPosition(iA); sa.fore.getWorldPosition(iB); sa.hand.getWorldPosition(iC);
      hTip.copy(iC).sub(iB).normalize().multiplyScalar(0.085).add(iC);
      const carrying = sa.s === 'Right' && carryW > 0.5 && canAxis(cA, cU);
      W1.pen = 0; if (fixUpper) armPen(iA, iB, R_UP, 0.5, 4, W1);
      if (W1.pen > 0.001) { ax.subVectors(W1.p, iA); const L = ax.length(); tv3.copy(ax); ax.cross(W1.dir); if (ax.lengthSq() < 1e-8) ax.crossVectors(tv3, UP); ax.normalize(); if (ax.lengthSq() > 0.5) { spin(sa.arm, qr.setFromAxisAngle(ax, Math.atan2(W1.pen, L) * 1.12)); continue; } }
      W1.pen = 0; armPen(iB, iC, R_FORE, 0.15, 4, W1); armPen(iC, hTip, R_HAND, 0, 3, W1);
      if (carrying) { tv3.copy(cA).addScaledVector(cU, CAN.y0 * 0.9); armPen(cA, tv3, R_CAN, 0, 3, W1); }
      if (W1.pen > 0.001) { ax.subVectors(W1.p, iB); const L = ax.length(); tv3.copy(ax); ax.cross(W1.dir); if (ax.lengthSq() < 1e-8) ax.crossVectors(tv3, UP); ax.normalize(); if (ax.lengthSq() > 0.5) { spin(sa.fore, qr.setFromAxisAngle(ax, Math.atan2(W1.pen, L) * 1.12)); continue; } }
      break;
    }
  };
  // ---- pass 3: arms placed against the chest (carrying the can at the ready; folded arms that rest on the chest) ----
  // a point in the chest's frame, given in metres from the Spine2 joint as the model was built: left, up, forward
  const bS2 = vx.bind?.[spine2.name] ? new THREE.Matrix4().fromArray(vx.bind[spine2.name]) : null, bS2i = bS2 ? bS2.clone().invert() : null;
  const cP0 = new THREE.Vector3();
  const chestPt = (left: number, up: number, fwd: number, out: THREE.Vector3) => {
    if (!bS2 || !bS2i) return spine2.getWorldPosition(out);
    out.setFromMatrixPosition(bS2).add(cP0.set(left, up, fwd).divideScalar(kS)).applyMatrix4(bS2i); return spine2.localToWorld(out);
  };
  const chestDir = (left: number, up: number, fwd: number, out: THREE.Vector3) => { const o = chestPt(0, 0, 0, new THREE.Vector3()); return chestPt(left, up, fwd, out).sub(o).normalize(); };
  const aD = new THREE.Vector3(), aT = new THREE.Vector3();
  /** Two-bone IK for an arm: the wrist toward `target`, the elbow bent toward `pole` (a direction), by weight w. */
  const armTo = (sa: (typeof sideArms)[number], target: THREE.Vector3, pole: THREE.Vector3, w: number) => {
    root.updateMatrixWorld(true);
    sa.arm.getWorldPosition(iA); sa.fore.getWorldPosition(iB); sa.hand.getWorldPosition(iC);
    const l1 = iA.distanceTo(iB), l2 = iB.distanceTo(iC);
    aD.copy(target).sub(iA); const d = Math.max(0.05, Math.min(aD.length(), (l1 + l2) * 0.995)); aD.normalize();
    const cosA = Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))), sinA = Math.sqrt(1 - cosA * cosA);
    iP.copy(pole).addScaledVector(aD, -pole.dot(aD)).normalize();
    iE.copy(iA).addScaledVector(aD, l1 * cosA).addScaledVector(iP, l1 * sinA);
    turn(sa.arm, aT.subVectors(iB, iA).normalize(), iE.sub(iA).normalize(), w);
    sa.fore.getWorldPosition(iB); sa.hand.getWorldPosition(iC);
    iE.copy(iA).addScaledVector(aD, d);
    turn(sa.fore, aT.subVectors(iC, iB).normalize(), iE.sub(iB).normalize(), w);
  };
  // the can upright: the hand turns so the can's axis comes to the world's up, at most `max` (a wrist's range), by w
  const qU = new THREE.Quaternion(), qI = new THREE.Quaternion();
  const canUp = (w: number, max: number) => {
    root.updateMatrixWorld(true); if (w < 1e-3 || !canAxis(cA, cU)) return;
    qU.setFromUnitVectors(cU, UP); const a = 2 * Math.acos(Math.min(1, Math.abs(qU.w))); if (a < 1e-3) return;
    qI.identity().slerp(qU, Math.min(1, max / a) * w); spin(rHand, qI);
  };
  let readyW = 0, foldW = 0, pass2 = false, sinceAim = 1;
  const fT = new THREE.Vector3(), fP = new THREE.Vector3();
  // the spray arm: the hand turns so the can is upright with its nozzle at the wall, the wrist goes where that puts the
  // nozzle at the can's distance (kept outside the trunk), and of all the elbows that reach it the one that keeps the
  // arm out of the body and the wrist straightest (eased, so it never jumps)
  // reaching across the body the shoulder has to come round: the chest turns toward the can (the smallest turn that
  // lets the arm clear the trunk), eased from frame to frame
  let reachTw = 0;
  const qS1 = new THREE.Quaternion(), qS2 = new THREE.Quaternion(), qTw = new THREE.Quaternion(), Y1 = new THREE.Vector3(0, 1, 0), hand0 = new THREE.Vector3();
  const setTw = (tw: number) => { spine1.quaternion.copy(qS1).multiply(qTw.setFromAxisAngle(Y1, tw * 0.45)); spine2.quaternion.copy(qS2).multiply(qTw.setFromAxisAngle(Y1, tw * 0.55)); root.updateMatrixWorld(true); body.prep(); };
  // the circle of elbows that reach the wrist target from where the shoulder is now: the best one, its cost and how
  // deep the arm goes into the trunk there
  const elbows = () => {
    rArm.getWorldPosition(iA); rFore.getWorldPosition(iB); rHand.getWorldPosition(iC);
    const l1 = iA.distanceTo(iB), l2 = iB.distanceTo(iC);
    iT.copy(wristT).sub(iA); const d = Math.max(0.05, Math.min(iT.length(), (l1 + l2) * 0.995)); iT.normalize();
    const cosA = Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))), sinA = Math.sqrt(1 - cosA * cosA);
    spine2.getWorldPosition(iP); iP.subVectors(iA, iP).setY(0).normalize().multiplyScalar(0.7); iP.y = -1;
    iP.addScaledVector(iT, -iP.dot(iT)).normalize(); ax.crossVectors(iT, iP).normalize();
    const want = tv3.copy(foreInHand).applyQuaternion(gH);
    hand0.copy(iA).addScaledVector(iT, d);
    let best = 0, bestC = Infinity, bestPen = Infinity;
    for (let k = 0; k < 18; k++) {
      const ph = (k / 18) * Math.PI * 2, e = iE.copy(iA).addScaledVector(iT, l1 * cosA).addScaledVector(iP, l1 * sinA * Math.cos(ph)).addScaledVector(ax, l1 * sinA * Math.sin(ph));
      W1.pen = 0; armPen(iA, e, R_UP, 0.4, 5, W1); armPen(e, hand0, R_FORE, 0.1, 5, W1);
      const bend = 1 - tv2.subVectors(hand0, e).normalize().dot(want);
      const c = W1.pen * 40 + bend * 0.35 + (1 - Math.cos(ph)) * 0.25;               // out of the body, then a straight wrist, then down and out
      if (c < bestC) { bestC = c; best = ph; bestPen = W1.pen; }
    }
    return { best, pen: bestPen, l1, d, cosA, sinA };   // (iA, iT, iP, ax stay set for the chosen target)
  };
  // the spray arm: the hand turns so the can is upright with its nozzle at the wall, the wrist goes where that puts the
  // nozzle at the can's distance (kept outside the trunk), and of all the elbows that reach it the one that keeps the
  // arm out of the body and the wrist straightest (eased, so it never jumps)
  // where the wrist goes for a nozzle at N pointing at the wall point: the hand upright, the can its distance off
  // the can upright while it points at the spot (pass 3, owner: held upright like a writer holds it): out of reach the
  // nozzle sits back from the wall and pointing straight at the spot tipped the can 25-50 degrees; it tips at most
  // MAX_PITCH (the paint goes where the reticle is either way)
  const MAX_PITCH = 0.31, lkT = new THREE.Vector3();
  const lookCan = (from: THREE.Vector3) => {
    lkT.subVectors(aimAt, from); const hz = Math.hypot(lkT.x, lkT.z), lim = Math.tan(MAX_PITCH) * hz;
    if (Math.abs(lkT.y) > lim) lkT.y = Math.sign(lkT.y) * lim;
    return gQ.setFromRotationMatrix(gM.lookAt(lkT.add(from), from, UP));
  };
  const wristFor = (N: THREE.Vector3) => {
    gQ.setFromRotationMatrix(gM.lookAt(aimAt, N, UP));   // (the reach is planned with the can pointing right at the spot, as in pass 2; the hand's last turn tips it less) gH.copy(gQ).multiply(gripInv);
    wristT.copy(N).sub(tv2.copy(nozLocal).applyQuaternion(gQ));
    if (gripPos) wristT.sub(tv2.copy(gripPos).multiplyScalar(kS).applyQuaternion(gH));
    for (let i = 0; i < 2; i++) { const d = body.depth(wristT); const pen = d.pen + R_HAND + CLEAR; if (pen > 0) wristT.addScaledVector(d.dir, pen); }   // the fist never in the trunk
  };
  let ikN = 0, ikBest: { tw: number; pull: number; sw: number; c: number } | null = null;
  let reachPull = 0, reachSw = 0, ikInfo: Record<string, number> = {}; const nozT = new THREE.Vector3(), shA = new THREE.Vector3();
  const ik = (w: number, dt: number) => {
    root.updateMatrixWorld(true); body.prep();
    qS1.copy(spine1.quaternion); qS2.copy(spine2.quaternion);
    // across the body and out of reach, no elbow keeps a straight arm out of the chest: the chest turns toward the can
    // and the can comes back toward the shoulder (it still points at the spot: the paint goes where the aim is); the
    // least of both that clears the trunk
    let bestTw = 0, bestPull = 0, bestSw = 0, bestC = Infinity;
    const place = (pull: number, sw: number) => {
      rArm.getWorldPosition(shA); nozT.copy(aimHand).lerp(shA, pull * 0.7); wristFor(nozT);
      if (sw > 0) {   // out of reach across the chest: the reach swings toward the chest's front and falls short
        spine2.getWorldDirection(tv3); tv2.subVectors(wristT, shA); const L = tv2.length(), a = tv2.angleTo(tv3);
        if (a > 1e-3) { ax.crossVectors(tv2, tv3).normalize(); tv2.applyAxisAngle(ax, Math.min(sw, a)); wristT.copy(shA).add(tv2.setLength(L)); }
      }
    };
    if (ikN++ % 3 === 0 || !ikBest) {   // (searched every third frame; between, the last answer)
      search: for (const pull of [0, 0.3, 0.55, 0.8, 1.0]) for (const tw of [0, 0.35, 0.7, 1.0]) {
        setTw(tw);
        for (const sw of [0, 0.4, 0.8, 1.2, 1.6]) {
          place(pull, sw);
          const c = elbows().pen * 40 + tw * 0.08 + pull * 0.1 + sw * 0.12;
          if (c < bestC) { bestC = c; bestTw = tw; bestPull = pull; bestSw = sw; }
          if (c < 0.05) break search;
        }
      }
      ikBest = { tw: bestTw, pull: bestPull, sw: bestSw, c: bestC };
    } else { bestTw = ikBest.tw; bestPull = ikBest.pull; bestSw = ikBest.sw; bestC = ikBest.c; }
    const k = Math.min(1, dt * 8); reachTw += (bestTw * w - reachTw) * k; reachPull += (bestPull - reachPull) * k; reachSw += (bestSw - reachSw) * k;
    setTw(reachTw); place(reachPull, reachSw);
    const E = elbows(); ikInfo = { tw: +reachTw.toFixed(2), pull: +reachPull.toFixed(2), sw: +reachSw.toFixed(2), pen: +E.pen.toFixed(3), cost: +bestC.toFixed(3), d: +E.d.toFixed(3), reach: +(E.l1 + iB.distanceTo(iC)).toFixed(3) };
    if (Number.isNaN(swivel)) swivel = E.best; else { let dd = E.best - swivel; dd = Math.atan2(Math.sin(dd), Math.cos(dd)); swivel += Math.max(-0.25, Math.min(0.25, dd)); }
    iE.copy(iA).addScaledVector(iT, E.l1 * E.cosA).addScaledVector(iP, E.l1 * E.sinA * Math.cos(swivel)).addScaledVector(ax, E.l1 * E.sinA * Math.sin(swivel));
    rFore.getWorldPosition(iB);
    turn(rArm, iB.clone().sub(iA).normalize(), iE.sub(iA).normalize(), w);
    rFore.getWorldPosition(iB); rHand.getWorldPosition(iC);
    iE.copy(iA).addScaledVector(iT, E.d);
    turn(rFore, iC.clone().sub(iB).normalize(), iE.sub(iB).normalize(), w);
    rHand.getWorldPosition(iC);
    // the hand: holding the can upright, pointing at the spot
    rHand.parent!.getWorldQuaternion(qp); qb.copy(qp).invert().multiply(gH); rHand.quaternion.slerp(qb, w); rHand.updateMatrixWorld(true);
  };
  // ---- the feet: points on each sole, carried by the foot and toe bones, so the game knows where the soles are ----
  type SP = { bone: THREE.Bone; p: THREE.Vector3; w: THREE.Vector3; last: THREE.Vector3 };
  const soles: SP[][] = [[], []], soleRest = [0, 0];
  const legs = ['Left', 'Right'].map((s) => ({ up: B(`${s}UpLeg`), knee: B(`${s}Leg`), foot: B(`${s}Foot`) }));
  let ground: ((x: number, z: number) => number) | null = null, inited = false, onGround = true;
  const clipInfo: Record<string, { v: number; stride: number; dur: number; ph: number; lift?: number[]; zr?: number[] }> = {};
  const MOVING = ['Walk_Loop', 'Jog_Fwd_Loop', 'Sprint_Loop', 'Crouch_Fwd_Loop'], STAND = ['Idle_Loop', 'Walk_Loop', 'Jog_Fwd_Loop', 'Sprint_Loop'], CROUCH = ['Crouch_Idle_Loop', 'Crouch_Fwd_Loop'];
  const FALLBACK: Record<string, number> = { Walk_Loop: 1.4, Jog_Fwd_Loop: 3.2, Sprint_Loop: 6, Crouch_Fwd_Loop: 1.1 };
  const tv = new THREE.Vector3();
  const soleNow = () => { root.updateMatrixWorld(true); for (const side of soles) for (const q of side) q.w.copy(q.p).applyMatrix4(q.bone.matrixWorld); };
  // the clips measured once, posed by a mixer of their own: where the soles are standing still, and for each moving
  // clip how fast a planted foot travels back under the body (the speed the clip was made for) and where its cycle starts
  const init = () => {
    if (inited) return; inited = true;
    const keepP = root.position.clone(), keepQ = root.quaternion.clone(), keepC = char.quaternion.clone(), keepY = char.position.y;
    root.position.set(0, 0, 0); root.quaternion.identity(); char.quaternion.identity();
    const tmp = new THREE.AnimationMixer(char), pose = (name: string, t: number) => { tmp.stopAllAction(); const c = clips.get(name); if (!c) return null; const a = tmp.clipAction(c); a.reset(); a.play(); a.time = t; tmp.update(0); root.updateMatrixWorld(true); return c; };
    try {
      if (pose('Idle_Loop', 0)) {
        const v = new THREE.Vector3(), cand: { side: number; bone: THREE.Bone; w: THREE.Vector3 }[] = [];
        for (const m of meshes) {
          if (!/^(Sole|Shoes)$/.test(String(m.userData.slot || ''))) continue;
          m.skeleton.update();
          const si = m.geometry.attributes.skinIndex as THREE.BufferAttribute, sw = m.geometry.attributes.skinWeight as THREE.BufferAttribute, n = si.count, step = Math.max(1, Math.floor(n / 3000));
          for (let i = 0; i < n; i += step) {
            let bi = si.getX(i), bw = sw.getX(i);
            for (let c = 1; c < 4; c++) { const w = sw.getComponent(i, c); if (w > bw) { bw = w; bi = si.getComponent(i, c); } }
            const bone = bones[bi]; if (!bone) continue;
            const side = /Left(Foot|Toe)/.test(bone.name) ? 0 : /Right(Foot|Toe)/.test(bone.name) ? 1 : -1; if (side < 0) continue;
            m.getVertexPosition(i, v); v.applyMatrix4(m.matrixWorld); cand.push({ side, bone, w: v.clone() });
          }
        }
        for (const side of [0, 1]) {
          const c = cand.filter((x) => x.side === side); if (!c.length) continue;
          const lo = Math.min(...c.map((x) => x.w.y)), pick = c.filter((x) => x.w.y < lo + 0.012), every = Math.max(1, Math.ceil(pick.length / 28));
          soleRest[side] = lo;
          for (let i = 0; i < pick.length; i += every) { const x = pick[i]; soles[side].push({ bone: x.bone, p: x.bone.worldToLocal(x.w.clone()), w: x.w.clone(), last: x.w.clone() }); }
        }
      }
      for (const name of MOVING) {
        const c = clips.get(name); if (!c) continue;
        const K = 60, dur = c.duration, ys: number[][] = [[], []], zs: number[][] = [[], []];
        for (let k = 0; k < K; k++) {
          pose(name, (k / K) * dur); soleNow();
          // height: the lowest point; travel: the middle of the sole (the lowest point hops from heel to toe as it rolls)
          for (const side of [0, 1]) { let lo = Infinity, z = 0; for (const q of soles[side]) { lo = Math.min(lo, q.w.y); z += q.w.z; } ys[side].push(lo); zs[side].push(z / soles[side].length); }
        }
        const sp: number[] = []; let ph = -1;
        for (const side of [0, 1]) {
          const lo = Math.min(...ys[side]), on = ys[side].map((y) => y < lo + 0.025);
          for (let k = 0; k < K; k++) { const k1 = (k + 1) % K; if (on[k] && on[k1]) { const d = -(zs[side][k1] - zs[side][k]) / (dur / K); if (d > 0.05) sp.push(d); } if (side === 0 && ph < 0 && on[k] && !on[(k + K - 1) % K]) ph = k / K; }
        }
        sp.sort((a, b) => a - b);
        const v = sp.length > 4 ? sp[Math.floor(sp.length / 2)] : FALLBACK[name];
        clipInfo[name] = { v, stride: v * dur, dur, ph: Math.max(0, ph), lift: ys.map((y) => Math.max(...y) - Math.min(...y)), zr: zs.map((z) => Math.max(...z) - Math.min(...z)) };
      }
    } catch (e) { console.warn('writer gait', e); }
    tmp.stopAllAction(); tmp.uncacheRoot(char);
    root.position.copy(keepP); root.quaternion.copy(keepQ); char.quaternion.copy(keepC); char.position.y = keepY;
    // the model's soles stand this far below the clips' ground: it stands on them instead
    if (soles[0].length && soles[1].length) baseY = keepY - (soleRest[0] + soleRest[1]) / 2;
    if (cur) { mixer.update(0); }
  };

  // ---- locomotion: weights by speed, one shared cycle so the clips' steps line up, cadence from the stride ----
  let locoOn = false, locoW = 0, locoS = 0, crouchT = false, crouchW = 0, cycle = 0, mixName = '', steadyOn = false, steadyK = 1;
  const locoA = new Map<string, THREE.AnimationAction>();
  const locoStart = () => {
    if (locoA.size) return;
    for (const n of new Set([...STAND, ...CROUCH])) { const c = clips.get(n); if (!c) continue; const a = mixer.clipAction(c.clone()); a.reset(); a.setLoop(THREE.LoopRepeat, Infinity); a.enabled = true; a.setEffectiveWeight(0); a.play(); if (MOVING.includes(n)) a.timeScale = 0; locoA.set(n, a); }
  };
  const vOf = (n: string) => (clipInfo[n] ? clipInfo[n].v : FALLBACK[n] || 1);
  const strideOf = (n: string) => (clipInfo[n] ? clipInfo[n].stride : vOf(n) * (clips.get(n)?.duration || 1));
  // the two clips either side of a speed in a set, and how far between them
  const span = (set: string[], s: number) => {
    const vs = set.map((n, i) => (i === 0 ? 0 : vOf(n)));
    for (let i = 0; i < set.length - 1; i++) if (s < vs[i + 1]) return { a: i, b: i + 1, f: Math.max(0, (s - vs[i]) / (vs[i + 1] - vs[i])) };
    return { a: set.length - 1, b: set.length - 1, f: 0 };
  };
  const locoTick = (dt: number) => {
    if (!locoA.size) return;
    locoW = Math.max(0, Math.min(1, locoW + (locoOn ? 1 : -1) * dt / 0.18));
    crouchW = Math.max(0, Math.min(1, crouchW + (crouchT ? 1 : -1) * dt / 0.28));
    const s = Math.max(0, locoS), st = span(STAND, s), cr = span(CROUCH, s);
    const Ls = st.a === 0 ? strideOf(STAND[1]) : strideOf(STAND[st.a]) + (strideOf(STAND[st.b]) - strideOf(STAND[st.a])) * st.f;
    const L = Ls + (strideOf(CROUCH[1]) - Ls) * crouchW;
    cycle = (cycle + (s * dt) / Math.max(0.2, L)) % 1;
    const w = new Map<string, number>(); const add = (n: string, k: number) => w.set(n, (w.get(n) || 0) + k);
    add(STAND[st.a], (1 - st.f) * (1 - crouchW)); add(STAND[st.b], st.f * (1 - crouchW)); add(CROUCH[cr.a], (1 - cr.f) * crouchW); add(CROUCH[cr.b], cr.f * crouchW);
    // holding still: the standing clips slow to a stop where they are (no breath, no sway), and start again after
    steadyK += ((steadyOn ? 0 : 1) - steadyK) * Math.min(1, dt * 10); if (steadyK < 0.02 && steadyOn) steadyK = 0;
    let best = 0;
    for (const [n, a] of locoA) {
      if (!MOVING.includes(n)) a.timeScale = steadyK;
      const k = (w.get(n) || 0) * locoW; a.setEffectiveWeight(k);
      if (MOVING.includes(n)) { const ci = clipInfo[n], d = a.getClip().duration; a.time = (((cycle + (ci ? ci.ph : 0)) % 1) + 1) % 1 * d; }
      if (k > best) { best = k; mixName = n; }
    }
  };

  // ---- fitting the feet to the ground ----
  let bodyOff = 0, dip = 0, leanR = 0, leanP = 0, twistA = 0, twistS = 0, feetOn = false;
  const poseQ = bones.map((b) => b.quaternion.clone()); let poseOk = false;
  // THE STEADY HEAD (owner: "his head sort of wobbles about and falls off"): measured in play, the clips (blended by
  // speed at stride cadence) swung the neck and head up to 0.2-0.27 rad in a single frame, reversing every few frames,
  // and the big hood magnified it (its crown is on Head, its lower edge on Neck and Spine2, so it shears off the
  // shoulders as the head nods). Runners keep their head level: the head is pulled halfway back to looking level along
  // the body's heading, its turn from the chest is capped, and it follows its target smoothly (about 60 ms).
  const restHeadInRoot = (() => { root.updateMatrixWorld(true); const q = new THREE.Quaternion(); headB.getWorldQuaternion(q); return root.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(q); })();
  const headRestLocal = headB.quaternion.clone();
  const shQ = new THREE.Quaternion(), shT = new THREE.Quaternion(), shP = new THREE.Quaternion(), shPrev = new THREE.Quaternion(), shR = new THREE.Quaternion(); let shOn = false;
  const STEADY = { on: true, level: 0.5, cap: 0.8, rate: 16 };
  const steadyHead = (dt: number) => {
    if (!STEADY.on) { shOn = false; return; }
    root.updateMatrixWorld(true); root.getWorldQuaternion(shT);
    // the head as the clip (and the idle look) has it, in the body's frame (so turning the whole body is no wobble)
    headB.getWorldQuaternion(shQ); shQ.premultiply(shR.copy(shT).invert());
    shQ.slerp(restHeadInRoot, STEADY.level);                                         // halfway back to level
    if (shOn) shQ.copy(shPrev.slerp(shQ, 1 - Math.exp(-dt * STEADY.rate)));         // and smooth
    shPrev.copy(shQ); shOn = true;
    shQ.premultiply(shT);                                                            // back to the world
    // never further than `cap` from where the chest carries it (a neck has a range)
    headB.parent!.getWorldQuaternion(shP); shR.copy(shP).multiply(headRestLocal);
    const a = shR.angleTo(shQ); if (a > STEADY.cap) { shR.slerp(shQ, STEADY.cap / a); shQ.copy(shR); }
    headB.quaternion.copy(shP.invert().multiply(shQ)); headB.updateMatrixWorld(true);
  };
  // SQUARE SHOULDERS (pass 3, owner: from behind the neck looked "kinda... not right"): the library's clips shrug both
  // collar bones, the arm joints riding 3-4 cm higher against the chest than the model was built, so the jacket's
  // shoulders pushed up round the hood and sloped away. Each frame the collar bone turns back down until its arm joint
  // is where the model has it (lowered only, never raised; the clip's own forward/back roll is kept).
  const shoulderFix = (['Left', 'Right'] as const).map((s) => {
    const sh = B(s + 'Shoulder'), armB = B(s + 'Arm'), b = vx.bind;
    if (!b?.[spine2.name] || !b[armB.name] || !b[neckB.name]) return null;
    const inv = new THREE.Matrix4().fromArray(b[spine2.name]).invert();
    const arm = new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(b[armB.name])).applyMatrix4(inv);
    const up = new THREE.Vector3().setFromMatrixPosition(new THREE.Matrix4().fromArray(b[neckB.name])).applyMatrix4(inv).normalize();
    return { sh, armB, arm, up, h: arm.dot(up) };
  });
  const sqA = new THREE.Vector3(), sqS = new THREE.Vector3(), sqU = new THREE.Vector3(), sqT = new THREE.Vector3();
  let shoulderDrop = [0, 0], squareOn = true;
  const squareShoulders = () => {
    if (!squareOn) return;
    root.updateMatrixWorld(true);
    shoulderFix.forEach((f, i) => {
      if (!f) return;
      f.armB.getWorldPosition(sqA); const loc = spine2.worldToLocal(sqT.copy(sqA)); const ex = loc.dot(f.up) - f.h;
      shoulderDrop[i] = ex; if (ex < 0.002) return;
      // the chest's up in the world, and the arm joint lowered along it by the excess (skeleton units to world: kS)
      spine2.getWorldQuaternion(qb); sqU.copy(f.up).applyQuaternion(qb);
      f.sh.getWorldPosition(sqS); sqT.copy(sqA).addScaledVector(sqU, -ex * kS * 0.75 * (1 - aimW));   // (not while the arm reaches for a wall: painting keeps pass 2's reach)
      turn(f.sh, sqA.sub(sqS).normalize(), sqT.sub(sqS).normalize(), 1);
    });
  };
  let baseY = char.position.y;
  const iU = new THREE.Vector3(), qF = new THREE.Quaternion();
  const legIK = (lg: { up: THREE.Bone; knee: THREE.Bone; foot: THREE.Bone }, lift: number, dx = 0, dz = 0) => {
    lg.foot.getWorldQuaternion(qF);
    lg.up.getWorldPosition(iA); lg.knee.getWorldPosition(iB); lg.foot.getWorldPosition(iC);
    iT.copy(iC); iT.y += lift; iT.x += dx; iT.z += dz;
    const l1 = iA.distanceTo(iB), l2 = iB.distanceTo(iC);
    iU.copy(iT).sub(iA); const d = Math.max(0.05, Math.min(iU.length(), (l1 + l2) * 0.999)); iU.normalize();
    const cosA = Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))), sinA = Math.sqrt(1 - cosA * cosA);
    // the knee stays in the plane it bends in now (forward)
    iP.copy(iB).sub(iA); iP.addScaledVector(iU, -iP.dot(iU)); if (iP.lengthSq() < 1e-8) iP.set(0, 0, 1).applyQuaternion(root.quaternion); iP.normalize();
    iE.copy(iA).addScaledVector(iU, l1 * cosA).addScaledVector(iP, l1 * sinA);
    turn(lg.up, iB.clone().sub(iA).normalize(), iE.sub(iA).normalize(), 1);
    lg.knee.getWorldPosition(iB); lg.foot.getWorldPosition(iC);
    turn(lg.knee, iC.clone().sub(iB).normalize(), iE.copy(iT).sub(iB).normalize(), 1);
    // the foot keeps the way it was pointing
    lg.foot.parent!.getWorldQuaternion(qp); lg.foot.quaternion.copy(qp.invert().multiply(qF)); lg.foot.updateMatrixWorld(true);
  };
  // FOOT LOCK (pass 3: the planted foot slid 1.4-1.7 m/s at a sprint). A sole point that touches the ground is pinned
  // there; while any pinned point is still down, the leg reaches (IK) so they stay where they landed. Points that lift
  // (the heel as the foot rolls) let go and points that come down (the ball, the toe) pin where they land, so the lock
  // follows the heel-to-toe roll. Off the ground the correction eases away through the swing.
  const LOCK = { on: true, max: 0.22, down: 0.03 };   // (down: a point is pinned from 3 cm above the ground, so it comes straight down onto its spot)
  const locks = [0, 1].map(() => ({ on: false, anc: [] as (THREE.Vector3 | null)[], off: new THREE.Vector3(), d: new THREE.Vector3() }));
  const footLock = (dt: number) => {
    const live = LOCK.on && !!ground && onGround && locoOn && locoS > 0.25;
    for (const side of [0, 1]) {
      const L = locks[side], S = soles[side]; let n = 0, down = 0; L.d.set(0, 0, 0);
      const isDown = (q: SP) => q.w.y - ground!(q.w.x, q.w.z) <= LOCK.down;
      // first the correction that keeps the points already pinned where they are, then the points just come down are
      // pinned where that correction puts them (pinning them with last frame's correction dragged the foot next frame)
      if (live) for (let i = 0; i < S.length; i++) {
        const q = S[i]; if (!isDown(q)) { L.anc[i] = null; continue; }
        down++; if (!L.on || !L.anc[i]) continue;
        L.d.x += L.anc[i]!.x - q.w.x; L.d.z += L.anc[i]!.z - q.w.z; n++;
      }
      if (!live || !down) { L.on = false; L.anc.length = 0; L.off.multiplyScalar(Math.exp(-dt * 18)); }
      else {
        if (n) L.off.set(L.d.x / n, 0, L.d.z / n);
        for (let i = 0; i < S.length; i++) if (isDown(S[i]) && (!L.on || !L.anc[i])) { L.anc[i] = S[i].w.clone().add(L.off); L.anc[i]!.y = 0; }
        L.on = true;
        if (L.off.length() > LOCK.max) { L.on = false; L.anc.length = 0; L.off.setLength(LOCK.max); }   // too far to hold: let go
      }
      if (L.off.lengthSq() > 1e-8) { legIK(legs[side], 0, L.off.x, L.off.z); soleNow(); }
      lockInfo[side] = [L.on ? 1 : 0, +L.off.length().toFixed(3), down, n];
    }
  };
  const lockInfo: number[][] = [[], []];
  const lowest = (side: number) => { let lo = Infinity, x = 0, z = 0; for (const q of soles[side]) if (q.w.y < lo) { lo = q.w.y; x = q.w.x; z = q.w.z; } return { y: lo, x, z }; };
  const fitFeet = (dt: number) => {
    char.position.y = baseY;   // measured from the pose as animated, so the offset is absolute
    soleNow();
    if (!ground || !soles[0].length || !soles[1].length) return;
    const f = [lowest(0), lowest(1)], g = f.map((p) => ground!(p.x, p.z)), e = [g[0] - f[0].y, g[1] - f[1].y]; pen[0] = e[0]; pen[1] = e[1];
    // the foot over the lower ground carries the body; standing or walking a floating foot pulls the body down to it
    const ref = g[0] < g[1] - 0.01 ? 0 : g[1] < g[0] - 0.01 ? 1 : (e[0] > e[1] ? 0 : 1);
    const target = onGround ? Math.max(locoOn && locoS < 2.2 && crouchW < 0.5 ? -0.06 : 0, Math.min(0.16, e[ref])) : Math.max(0, Math.min(0.16, Math.max(e[0], e[1])));
    bodyOff += (target - bodyOff) * Math.min(1, dt * (target > bodyOff ? 30 : 14));
    dip *= Math.exp(-dt * 7);
    char.position.y = baseY + bodyOff + dip;
    soleNow();
    for (const side of [0, 1]) {
      const p = lowest(side), lift = ground(p.x, p.z) - p.y;
      if (lift > 0.004) { legIK(legs[side], Math.min(0.3, lift)); soleNow(); }
    }
  };

  // ---- measuring ----
  const S = { frames: 0, sink: [] as number[], sinkSum: 0, sinkMax: 0, floatSum: 0, floatN: 0, slips: [] as number[], slipSum: 0, slipMax: 0, contacts: 0 };
  const feetNow = [0, 1].map(() => ({ err: 0, contact: false, slip: 0 })), pen = [0, 0];
  const wasOn = [false, false]; let lastRoot = new THREE.Vector3(), hv: number[] = [];
  const measure = (dt: number) => {
    if (!ground || !soles[0].length) return;
    const jumpRoot = root.position.distanceTo(lastRoot) > 0.6; lastRoot.copy(root.position);
    let lowErr = Infinity;
    for (const side of [0, 1]) {
      const p = lowest(side), gy = ground(p.x, p.z), err = p.y - gy, F = feetNow[side];
      F.err = err; lowErr = Math.min(lowErr, err);
      F.contact = onGround && err < 0.012; F.slip = 0;
      if (F.contact && wasOn[side] && !jumpRoot && dt > 0) {
        hv = [];
        for (const q of soles[side]) if (q.w.y - ground(q.w.x, q.w.z) < 0.01) hv.push(Math.hypot(q.w.x - q.last.x, q.w.z - q.last.z) / dt);
        if (hv.length) { hv.sort((a, b) => a - b); F.slip = hv[Math.floor(hv.length / 2)]; S.slips.length < 40000 && S.slips.push(F.slip); S.slipSum += F.slip; S.slipMax = Math.max(S.slipMax, F.slip); S.contacts++; }
      }
      wasOn[side] = F.contact;
      const sink = Math.max(0, -err); S.sinkSum += sink; S.sinkMax = Math.max(S.sinkMax, sink); S.sink.length < 40000 && S.sink.push(sink); S.frames++;
    }
    if (onGround && lowErr > 0) { S.floatSum += lowErr; S.floatN++; }
    for (const side of soles) for (const q of side) q.last.copy(q.w);
  };
  const pct = (a: number[], k: number) => { if (!a.length) return 0; const b = [...a].sort((x, y) => x - y); return b[Math.min(b.length - 1, Math.floor(b.length * k))]; };
  const r3 = (n: number) => Math.round(n * 1000) / 1000;

  return {
    root, height: HEIGHT, play: (name: string, fade = 0.2, once = false) => {
      if (locoOn) { locoOn = false; const clip = clips.get(name); if (!clip) return; const a = mixer.clipAction(clip); a.reset(); a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity); a.clampWhenFinished = once; a.enabled = true; a.setEffectiveWeight(1); a.fadeIn(fade); a.play(); cur = a; curName = name; return; }
      play(name, fade, once);
    },
    playing: () => (locoOn ? mixName : curName), can,
    tip: (out) => (can.visible ? can.localToWorld(out.copy(nozLocal)) : null),
    loco: (speed, crouch) => {
      locoStart(); locoS = speed; crouchT = crouch;
      if (!locoOn) { locoOn = true; if (cur) cur.fadeOut(0.18); cur = null; curName = ''; }
    },
    setGround: (f, fit = true) => { ground = f; feetOn = fit; init(); },
    lean: (r, p) => { leanR = r; leanP = p; },
    twist: (a) => { twistA = a; },
    head: (o) => {
      if (o && o.steady != null) STEADY.on = !!o.steady;
      if (o && o.square != null) squareOn = !!o.square;   // (tests: the clips' shrug as it was, for a before/after)
      if (o && o.pass2 != null) { pass2 = !!o.pass2; squareOn = !pass2; LOCK.on = !pass2; }   // (tests: every pass 3 layer off: shrug, carry, upright can, folded arms, foot lock)
      root.updateMatrixWorld(true);
      const hp = headB.getWorldPosition(hdV[0]), np = neckB.getWorldPosition(hdV[1]), rest = spine2.localToWorld(hdV[2].copy(headRest.inChest));
      const ang = (q: THREE.Quaternion) => 2 * Math.acos(Math.min(1, Math.abs(q.w)));
      const drift = hp.distanceTo(rest), gap = Math.abs(hp.distanceTo(np) - headRest.gap);
      // the skinned head and hood against the head bone: the worst sample point's distance from where the bone puts it
      let hood = 0, worst = ''; for (const m of meshes) m.skeleton.update();
      for (const p of hoodPts) { p.m.getVertexPosition(p.i, hdV[2]); hdV[2].applyMatrix4(p.m.matrixWorld); const d = hdV[2].distanceTo(headB.localToWorld(hdV[1].copy(p.rest))); if (d > hood) { hood = d; worst = p.w; } }
      // the head's turn against the body since the last call (a wobble shows as big changes, frame to frame)
      const hr = root.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(headB.getWorldQuaternion(new THREE.Quaternion()));
      const wob = lastHR ? lastHR.angleTo(hr) : 0; lastHR = hr;
      const out: ReturnType<Writer['head']> = { drift, neck: ang(neckB.quaternion), head: ang(headB.quaternion), gap, hood, worst, pts: hoodPts.length, wob };
      if (o?.silhouette) out.sil = silhouette();
      return out;
    },
    land: (k) => { dip = Math.min(dip, -0.09 * Math.max(0, Math.min(1, k))); },
    grounded: (on) => { onGround = on; },
    steady: (on) => { steadyOn = on; },
    tune: (n, v) => { const c = clips.get(n); if (c && v > 0) clipInfo[n] = { ...(clipInfo[n] || { ph: 0 }), v, stride: v * c.duration, dur: c.duration }; },
    gait: (reset) => {
      const n = Math.max(1, S.frames), out: GaitInfo = { on: feetOn, rest: soleRest.map(r3), clips: Object.fromEntries(Object.entries(clipInfo).map(([k, v]) => [k, { v: r3(v.v), stride: r3(v.stride), lift: (v.lift || []).map(r3), zr: (v.zr || []).map(r3) }])), speed: r3(locoS), mix: locoOn ? mixName : curName, bodyOff: r3(bodyOff),
        feet: feetNow.map((f, i) => ({ err: r3(f.err), contact: f.contact, slip: r3(f.slip), pen: r3(pen[i]) })),
        stats: { frames: S.frames, sinkMean: r3(S.sinkSum / n), sinkMax: r3(S.sinkMax), sinkP95: r3(pct(S.sink, 0.95)), floatMean: r3(S.floatN ? S.floatSum / S.floatN : 0), slipMean: r3(S.contacts ? S.slipSum / S.contacts : 0), slipP90: r3(pct(S.slips, 0.9)), slipMax: r3(S.slipMax), contacts: S.contacts } };
      if (reset) Object.assign(S, { frames: 0, sink: [], sinkSum: 0, sinkMax: 0, floatSum: 0, floatN: 0, slips: [], slipSum: 0, slipMax: 0, contacts: 0 });
      return out;
    },
    arms: () => { root.updateMatrixWorld(true); return body.measure(); },
    ik: () => ({ ...ikInfo, lock: lockInfo as unknown as number }),
    far: (side) => { root.updateMatrixWorld(true); const r = body.far(side); r.info += ` | bind hits ${bones.filter((b) => vx.bind?.[b.name]).length}/${bones.length} e.g. ${bones[9]?.name} keys ${Object.keys(vx.bind || {}).slice(8, 10)}`; return r; },
    freeze: (t) => { frozen = t; },
    bonePos: (name, out) => { const b = bones.find((x) => x.name.replace(/^mixamorig:?/, '') === name); return b ? b.getWorldPosition(out) : null; },
    grip: () => {
      const o: GripReport = { shown: can.visible, pen: 0, gap: 0, wrap: 0, n: 0 }; if (!can.visible) return o;
      can.updateMatrixWorld(true); const inv = can.matrixWorld.clone().invert(), v = new THREE.Vector3(), bins = new Set<number>(); let gap = Infinity;
      for (const a of body.arms) {
        if (a.side !== 1 || a.part !== 'hand') continue;
        a.m.getVertexPosition(a.i, v); v.applyMatrix4(a.m.matrixWorld).applyMatrix4(inv); o.n++;
        const rho = Math.hypot(v.x, v.z), inY = v.y >= CAN.y0 && v.y <= CAN.y1;
        if (inY) o.pen = Math.max(o.pen, CAN.r - rho);
        gap = Math.min(gap, inY ? Math.max(0, rho - CAN.r) : Math.hypot(Math.max(0, rho - CAN.r), v.y < CAN.y0 ? CAN.y0 - v.y : v.y - CAN.y1));
        if (inY && Math.abs(rho - CAN.r) < 0.008) bins.add(Math.floor(((Math.atan2(v.x, v.z) + Math.PI) / (2 * Math.PI)) * 24) % 24);
      }
      o.gap = gap === Infinity ? 0 : gap; o.wrap = bins.size / 24;
      // (pass 3) how upright the can stands: its axis from the world's up (degrees), and from the forearm (a spray grip
      // holds it across the forearm, about 90)
      const ax = new THREE.Vector3(0, 1, 0).applyQuaternion(can.quaternion), fa = rHand.getWorldPosition(new THREE.Vector3()).sub(rFore.getWorldPosition(new THREE.Vector3())).normalize();
      o.tilt = Math.round(THREE.MathUtils.radToDeg(ax.angleTo(UP)) * 10) / 10; o.fore = Math.round(THREE.MathUtils.radToDeg(ax.angleTo(fa)) * 10) / 10;
      return o;
    },
    aim: (nozzle, at, weight = 1, pressing = false) => {
      aimOn = !!nozzle; pressOn = !!pressing; if (nozzle) { aimHand.copy(nozzle); aimAt.copy(at || nozzle); aimTo = weight; }
    },
    carry: (on) => { carryOn = on; },
    fixArms: (on) => { armsFix = on; },
    update: (dt) => {
      locoTick(dt);
      // the procedural layers below (twist, the idle look, the steady head, foot and arm IK) are deltas on the clips'
      // pose: put the pose the mixer made last frame back first (the mixer writes a bone only when its value changed),
      // so nothing can pile up from frame to frame
      if (poseOk) for (let i = 0; i < bones.length; i++) bones[i].quaternion.copy(poseQ[i]);
      if (frozen != null && cur && !locoOn) { cur.time = Math.min(frozen, cur.getClip().duration); cur.setEffectiveWeight(1); mixer.update(0); } else mixer.update(dt);
      for (let i = 0; i < bones.length; i++) poseQ[i].copy(bones[i].quaternion); poseOk = true;
      twistS += (Math.max(-1.3, Math.min(1.3, twistA)) - twistS) * Math.min(1, dt * 12);   // eased: no snap of the neck
      if (Math.abs(twistS) > 1e-3) { const ch: [THREE.Bone, number][] = [[spine0, 0.3], [spine1, 0.3], [spine2, 0.25], [neckB, 0.15]]; for (const [b, k] of ch) b.rotateY(twistS * k); }
      char.rotation.set(leanP, 0, leanR);
      lt += dt; life += ((/Idle/.test(locoOn ? mixName : curName) && !aimOn ? 1 : 0) - life) * Math.min(1, dt * 2);
      if (life > 0.01) {
        spine1.rotateX(Math.sin(lt * 1.6) * 0.018 * life);
        const look = Math.sin(lt * 0.23) * 0.5 + Math.sin(lt * 0.61 + 1.3) * 0.2;
        neckB.rotateY(look * 0.18 * life); headB.rotateY(look * 0.22 * life); headB.rotateX((Math.sin(lt * 0.37) * 0.06 + 0.03) * life);
      }
      steadyHead(dt);
      squareShoulders();
      if (ground) { if (feetOn) { fitFeet(dt); footLock(dt); } else soleNow(); measure(dt); }
      aimW += ((aimOn ? aimTo : 0) - aimW) * Math.min(1, dt * 9);
      carryW += ((carryOn ? 1 : 0) - carryW) * Math.min(1, dt * 10);
      // the arms out of the trunk as the clip has them (both), then the spray arm reaches for the wall over that
      if (armsFix) { if (!(aimW > 0.99)) pushOut(sideArms[1]); pushOut(sideArms[0]); }
      // CARRYING THE CAN LIKE A WRITER (pass 3, owner: "upright in the palm, index finger on the actuator", not a baton).
      // The can lies across the fist (pinky to index), so with the arm hanging as the clips have it, it pointed forward
      // flat. Standing, the forearm comes up and forward (the can at the ready, the index finger resting on its top);
      // moving, the wrist turns the can toward upright as far as a wrist goes.
      sinceAim = aimOn || steadyOn ? 0 : sinceAim + dt;   // (the can just off a wall is not yet carried: the reach blends out first)
      const idleNow = !pass2 && sinceAim > 0.6 && (locoOn ? locoS < 0.7 : /^(Idle_Loop|Crouch_Idle_Loop)$/.test(curName));
      readyW += ((carryOn && idleNow ? 1 : 0) - readyW) * Math.min(1, dt * 5);
      // FOLDED ARMS (pass 3, owner: they hovered in front of the chest; the longer arms reach past where the clip folds
      // them): each forearm laid across the chest, the right one tucked under the left, the elbows by the sides
      foldW += ((!pass2 && !aimOn && !locoOn && curName === 'Idle_FoldArms_Loop' ? 1 : 0) - foldW) * Math.min(1, dt * 4);
      if (readyW * (1 - foldW) > 0.01) {   // the wrist below the shoulder and in front of it: the elbow bent about 100 degrees, by the side
        const ck = locoOn ? crouchW : /Crouch/.test(curName) ? 1 : 0;   // crouched, the can comes forward of the knee
        // (in a level frame: the chest's heading and the world's up, so a crouch's forward lean doesn't point the forearm down)
        rArm.getWorldPosition(fT); fT.addScaledVector(chestDir(1, 0, 0, fP).setY(0).normalize(), -0.14 - 0.02 * ck).addScaledVector(UP, -0.37 + 0.09 * ck).addScaledVector(chestDir(0, 0, 1, fP).setY(0).normalize(), 0.31 + 0.08 * ck);
        const lvL = chestDir(1, 0, 0, aT).setY(0).normalize(), lvF = chestDir(0, 0, 1, fP).setY(0).normalize();   // (the elbow back, down and out, level too)
        fP.multiplyScalar(-0.8).addScaledVector(lvL, -0.45).addScaledVector(UP, -0.35).normalize();
        armTo(sideArms[1], fT, fP, readyW * (1 - foldW) * (1 - aimW));
        if (armsFix) pushOut(sideArms[1], false, 4);   // the fist and the can clear of the hip
      }
      if (foldW > 0.01) {
        // (left, up, forward from the chest joint, metres): the elbow by the ribs, the wrist across at the other side
        for (const [sa, e, w] of [[sideArms[0], [0.285, -0.05, 0.18], [-0.06, 0.0, 0.29]], [sideArms[1], [-0.285, -0.08, 0.16], [0.0, -0.04, 0.24]]] as const) {
          chestPt(e[0], e[1], e[2], fP); chestPt(w[0], w[1], w[2], fT); sa.arm.getWorldPosition(aT);
          armTo(sa, fT, fP.sub(aT.add(fT).multiplyScalar(0.5)).normalize(), foldW);
          // the upper arm out of the ribs, then the forearm laid back across to its wrist (pushing the whole arm out
          // would unfold it), then the forearm out of the chest
          if (armsFix) { pushOut(sa, true, 3); sa.fore.getWorldPosition(iB); sa.hand.getWorldPosition(iC); turn(sa.fore, aT.subVectors(iC, iB).normalize(), fP.subVectors(fT, iB).normalize(), foldW); pushOut(sa, false, 3); }
        }
      }
      if (!pass2 && carryW > 0.5 && aimW < 0.99) canUp((1 - aimW) * carryW, 0.5 + 0.3 * Math.max(readyW, foldW));
      if (aimW > 0.01) {
        ik(aimW, dt);
        // whatever the reach could not avoid, the arm is pushed out of the trunk like a clip's arm; then the hand turns
        // back so the can points at the spot from where it is
        if (armsFix) {
          pushOut(sideArms[1], true, 10);
          if (gripPos) { rHand.getWorldPosition(tv2); rHand.getWorldQuaternion(qb); tv3.copy(gripPos).multiplyScalar(kS).applyQuaternion(qb).add(tv2); lookCan(tv3); gH.copy(gQ).multiply(gripInv); rHand.parent!.getWorldQuaternion(qp); qb.copy(qp).invert().multiply(gH); rHand.quaternion.slerp(qb, aimW); rHand.updateMatrixWorld(true); }
        }
      } else { swivel = NaN; reachTw = 0; reachPull = 0; reachSw = 0; ikBest = null; }
      // the fingers: relaxed; the right hand closed round its can; the index finger up on the actuator while the can is
      // up at a wall, pressing while it sprays
      pressW += ((aimW > 0.3 && carryW > 0.5 ? (pressOn ? 1 : 0.88) : carryW > 0.5 ? 0.82 * readyW : 0) - pressW) * Math.min(1, dt * 14);
      for (const f of fingers) { f.b.quaternion.copy(f.relax); if (f.right) { f.b.quaternion.slerp(f.grip, carryW); if (f.index && pressW > 0.001) f.b.quaternion.slerp(f.press, pressW); } }
      // the can rides the hand's grip socket: wherever the hand goes, it goes
      can.visible = carryOn ? carryW > 0.5 : aimW > 0.3;
      if (can.visible && gripPos) {
        root.updateMatrixWorld(true);
        rHand.getWorldQuaternion(gQ).multiply(gripRot); can.quaternion.copy(gQ);
        can.position.copy(gripPos); rHand.localToWorld(can.position);
      }
    },
    dispose: () => { mixer.stopAllAction(); owned.forEach((d) => d.dispose()); },
  };
}
