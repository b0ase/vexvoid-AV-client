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

export type Writer = {
  root: THREE.Group;
  height: number;
  play: (name: string, fade?: number, once?: boolean) => void;
  playing: () => string;
  /** Raise the right arm with a can to spray: the hand goes to `hand`, the nozzle points at `at` (null lowers it). */
  aim: (hand: THREE.Vector3 | null, at?: THREE.Vector3, weight?: number) => void;
  /** The can in the hand (a scene-level object: add it to the scene once). */
  can: THREE.Object3D;
  update: (dt: number) => void;
  dispose: () => void;
};

const HEIGHT = 1.78;

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
  // cotton and canvas: a soft sheen at grazing angles, the thing that makes cloth read as cloth
  // the jacket is a technical shell: a tight ripstop with a sheen, so the street's rim lights draw its folds
  Hoodie: () => new THREE.MeshPhysicalMaterial({ color: '#4a4b51', roughness: 0.6, metalness: 0, sheen: 0.9, sheenRoughness: 0.45, sheenColor: new THREE.Color('#a4a5ad'), normalScale: new THREE.Vector2(0.45, 0.45), ...weave('ripstop', 44) }),
  Trousers: () => new THREE.MeshPhysicalMaterial({ color: '#5d5e64', roughness: 0.84, metalness: 0, sheen: 0.5, sheenRoughness: 0.65, sheenColor: new THREE.Color('#84848a'), normalScale: new THREE.Vector2(0.5, 0.5), ...weave('twill', 30) }),
  Gloves: () => new THREE.MeshStandardMaterial({ color: '#34353a', roughness: 0.55, metalness: 0, normalScale: new THREE.Vector2(0.4, 0.4), ...weave('knit', 70) }),
  Trim: () => new THREE.MeshStandardMaterial({ color: '#2a2b30', roughness: 0.9, metalness: 0, normalScale: new THREE.Vector2(0.8, 0.8), ...weave('knit', 60) }),
  Shoes: () => new THREE.MeshStandardMaterial({ color: '#dcdcdf', roughness: 0.5, metalness: 0, emissive: '#141414' }),
  Sole: () => new THREE.MeshStandardMaterial({ color: '#f1f1f1', roughness: 0.55, metalness: 0, emissive: '#1c1c1c' }),
  Void: () => new THREE.MeshBasicMaterial({ color: '#000000' }),
  // the bandana is near-black: inside the hood there is only darkness (no faces, not even the suggestion of one)
  Mask: () => new THREE.MeshPhysicalMaterial({ color: '#0b0b0d', roughness: 0.95, metalness: 0, sheen: 0.25, sheenRoughness: 0.8, sheenColor: new THREE.Color('#2a2a2e') }),
  Pack: () => new THREE.MeshStandardMaterial({ color: '#36373c', roughness: 0.5, metalness: 0.05, normalScale: new THREE.Vector2(0.45, 0.45), ...weave('ripstop', 24) }), // nylon, a little sheen
  Can: () => new THREE.MeshStandardMaterial({ color: '#b8b8bc', roughness: 0.35, metalness: 0.8 }),
  Cap: () => new THREE.MeshStandardMaterial({ color: '#f2f2f2', roughness: 0.5, metalness: 0 }),
  // reflective tape (the pack, the heels): it throws back whatever light finds it; and the dark hardware: zips, buckles, rubber
  Reflect: () => new THREE.MeshStandardMaterial({ color: '#e6e7ea', roughness: 0.32, metalness: 0.35, emissive: '#2c2c2e' }),
  Detail: () => new THREE.MeshStandardMaterial({ color: '#17181b', roughness: 0.42, metalness: 0.15 }),
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
  let vx: { scale?: number; rest?: Record<string, number[]>; bind?: Record<string, number[]>; grip?: number[] } = {};
  model?.scene.traverse((o) => { if (typeof o.userData.vx === 'string') try { vx = JSON.parse(o.userData.vx); } catch { /* an older model: none */ } });
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
      const m = new THREE.SkinnedMesh(geo, mat); m.name = sm.name;
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
  for (const m of meshes) m.bind(skeleton);

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
    for (const tr of c.tracks) if (/Hips\.position$/.test(tr.name)) for (let i = 0; i < tr.values.length; i += 3) { tr.values[i] = rest.x; tr.values[i + 2] = rest.z; }
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
  const spine1 = B('Spine1'), neckB = B('Neck'), headB = B('Head');
  let life = 0, lt = 0;
  // spraying: the right arm reaches for the wall (two-bone IK over whatever clip plays) with a can in the hand
  const rArm = B('RightArm'), rFore = B('RightForeArm'), rHand = B('RightHand'), spine2 = B('Spine2');
  const can = new THREE.Group();
  {
    const metal = new THREE.MeshPhysicalMaterial({ color: '#c4c6cc', roughness: 0.28, metalness: 0.9, clearcoat: 0.6, clearcoatRoughness: 0.25 });
    const white = new THREE.MeshStandardMaterial({ color: '#f2f2f2', roughness: 0.5 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.033, 0.033, 0.19, 20), metal);
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.033, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), metal); shoulder.position.y = 0.095;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.01, 0.02, 12), white); cap.position.y = 0.135;
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.012, 8), white); nozzle.rotation.x = Math.PI / 2; nozzle.position.set(0, 0.138, 0.01);
    for (const m of [body, shoulder, cap, nozzle]) { m.castShadow = shadow; can.add(m); }
    // the can is drawn upright with its nozzle facing +Z: lookAt points the nozzle at the wall; the grip sits low on the body
    for (const m of can.children) m.position.y -= 0.07;
    owned.push(body.geometry, shoulder.geometry, cap.geometry, nozzle.geometry, metal, white);
  }
  can.visible = false;
  const iA = new THREE.Vector3(), iB = new THREE.Vector3(), iC = new THREE.Vector3(), iT = new THREE.Vector3(), iE = new THREE.Vector3(), iP = new THREE.Vector3();
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qp = new THREE.Quaternion();
  // turn a bone in world space so its direction `from` becomes `to`, by weight w
  const turn = (bone: THREE.Bone, from: THREE.Vector3, to: THREE.Vector3, w: number) => {
    qa.setFromUnitVectors(from, to); bone.getWorldQuaternion(qb); bone.parent!.getWorldQuaternion(qp);
    bone.quaternion.slerp(qp.invert().multiply(qa.multiply(qb)), w); bone.updateMatrixWorld(true);
  };
  // the can sits in the hand's grip: the hand turns so the nozzle (along the fingers) points at the wall
  let gripPos: THREE.Vector3 | null = null; const gripRot = new THREE.Quaternion(), gripInv = new THREE.Quaternion();
  if (vx.grip && vx.bind?.[rHand.name]) {
    const g = new THREE.Matrix4().fromArray(vx.bind[rHand.name]).invert().multiply(new THREE.Matrix4().fromArray(vx.grip));
    gripPos = new THREE.Vector3(); g.decompose(gripPos, gripRot, new THREE.Vector3()); gripInv.copy(gripRot).invert();
  }
  const gM = new THREE.Matrix4(), gQ = new THREE.Quaternion(), gH = new THREE.Quaternion(), UP = new THREE.Vector3(0, 1, 0);
  const aimHand = new THREE.Vector3(), aimAt = new THREE.Vector3();
  let aimOn = false, aimTo = 1, aimW = 0;
  const ik = (w: number) => {
    root.updateMatrixWorld(true);
    rArm.getWorldPosition(iA); rFore.getWorldPosition(iB); rHand.getWorldPosition(iC);
    const l1 = iA.distanceTo(iB), l2 = iB.distanceTo(iC);
    iT.copy(aimHand).sub(iA); const d = Math.max(0.05, Math.min(iT.length(), (l1 + l2) * 0.995)); iT.normalize();
    const cosA = Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))), sinA = Math.sqrt(1 - cosA * cosA);
    // the elbow drops down and out to the right of the body
    spine2.getWorldPosition(iP); iP.subVectors(iA, iP).setY(0).normalize().multiplyScalar(0.7); iP.y = -1;
    iP.addScaledVector(iT, -iP.dot(iT)).normalize();
    iE.copy(iA).addScaledVector(iT, l1 * cosA).addScaledVector(iP, l1 * sinA);
    turn(rArm, iB.clone().sub(iA).normalize(), iE.sub(iA).normalize(), w);
    rFore.getWorldPosition(iB); rHand.getWorldPosition(iC);
    iE.copy(iA).addScaledVector(iT, d);
    turn(rFore, iC.clone().sub(iB).normalize(), iE.sub(iB).normalize(), w);
    rHand.getWorldPosition(iC);
  };
  return {
    root, height: HEIGHT, play, playing: () => curName, can,
    aim: (hand, at, weight = 1) => {
      aimOn = !!hand; if (hand) { aimHand.copy(hand); aimAt.copy(at || hand); aimTo = weight; }
    },
    update: (dt) => {
      mixer.update(dt);
      lt += dt; life += ((/Idle/.test(curName) && !aimOn ? 1 : 0) - life) * Math.min(1, dt * 2);
      if (life > 0.01) {
        spine1.rotateX(Math.sin(lt * 1.6) * 0.018 * life);
        const look = Math.sin(lt * 0.23) * 0.5 + Math.sin(lt * 0.61 + 1.3) * 0.2;
        neckB.rotateY(look * 0.18 * life); headB.rotateY(look * 0.22 * life); headB.rotateX((Math.sin(lt * 0.37) * 0.06 + 0.03) * life);
      }
      aimW += ((aimOn ? aimTo : 0) - aimW) * Math.min(1, dt * 9);
      if (aimW > 0.01) {
        ik(aimW);
        can.visible = aimW > 0.3;
        if (gripPos) {
          gQ.setFromRotationMatrix(gM.lookAt(aimAt, iC, UP)); // the can upright, its nozzle at the wall
          rHand.parent!.getWorldQuaternion(qp); gH.copy(qp).invert().multiply(gQ).multiply(gripInv);
          rHand.quaternion.slerp(gH, aimW); rHand.updateMatrixWorld(true);
          rHand.getWorldQuaternion(gQ).multiply(gripRot); can.quaternion.copy(gQ);
          can.position.copy(gripPos); rHand.localToWorld(can.position); can.position.add(iP.set(0, 0.075, 0).applyQuaternion(gQ));
        } else { can.position.copy(iC).lerp(iB, -0.15); can.lookAt(aimAt); }
      } else can.visible = false;
    },
    dispose: () => { mixer.stopAllAction(); owned.forEach((d) => d.dispose()); },
  };
}
