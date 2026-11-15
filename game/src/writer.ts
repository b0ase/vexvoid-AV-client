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
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export type Writer = {
  root: THREE.Group;
  height: number;
  play: (name: string, fade?: number, once?: boolean) => void;
  playing: () => string;
  update: (dt: number) => void;
  dispose: () => void;
};

const HEIGHT = 1.78;

// the game's own materials for the model's named slots
const LOOK: Record<string, () => THREE.Material> = {
  Hoodie: () => new THREE.MeshStandardMaterial({ color: '#45464c', roughness: 0.86, metalness: 0 }),
  Trousers: () => new THREE.MeshStandardMaterial({ color: '#5a5b61', roughness: 0.8, metalness: 0 }),
  Gloves: () => new THREE.MeshStandardMaterial({ color: '#6a6a6e', roughness: 0.65, metalness: 0 }),
  Trim: () => new THREE.MeshStandardMaterial({ color: '#2e2f34', roughness: 0.9, metalness: 0 }),
  Shoes: () => new THREE.MeshStandardMaterial({ color: '#f4f4f4', roughness: 0.4, metalness: 0, emissive: '#202020' }),
  Sole: () => new THREE.MeshStandardMaterial({ color: '#8c8c8e', roughness: 0.6, metalness: 0 }),
  Void: () => new THREE.MeshBasicMaterial({ color: '#000000' }),
  Mask: () => new THREE.MeshStandardMaterial({ color: '#232326', roughness: 0.95, metalness: 0 }),
  Pack: () => new THREE.MeshStandardMaterial({ color: '#36373c', roughness: 0.5, metalness: 0.05 }), // nylon, a little sheen
  Can: () => new THREE.MeshStandardMaterial({ color: '#d6d6da', roughness: 0.28, metalness: 0.85 }),
  Cap: () => new THREE.MeshStandardMaterial({ color: '#f2f2f2', roughness: 0.5, metalness: 0 }),
};

export async function loadWriter(url: string, shadow: boolean, modelUrl?: string): Promise<Writer> {
  const gltf = await new GLTFLoader().loadAsync(url);
  const armSrc = gltf.scene.getObjectByName('Armature') || gltf.scene.children[0];
  const hipsSrc = armSrc.children[0];

  // the skeleton, rebuilt as bones from the clip file's own rest pose (rest rotations are identity)
  const bones: THREE.Bone[] = [];
  const mk = (n: THREE.Object3D): THREE.Bone => {
    const b = new THREE.Bone();
    b.name = n.name; b.position.copy(n.position); b.quaternion.copy(n.quaternion); b.scale.copy(n.scale);
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
  if (modelUrl) try {
    const model = await new GLTFLoader().loadAsync(modelUrl);
    model.scene.updateMatrixWorld(true);
    model.scene.traverse((o) => {
      const sm = o as THREE.SkinnedMesh; if (!sm.isSkinnedMesh) return;
      const geo = sm.geometry.clone(); geo.applyMatrix4(sm.matrixWorld);
      const map = sm.skeleton.bones.map((b) => bones.findIndex((x) => x.name === b.name));
      const si = geo.attributes.skinIndex as THREE.BufferAttribute;
      for (let i = 0; i < si.array.length; i++) (si.array as Uint16Array)[i] = Math.max(0, map[si.array[i]]);
      si.needsUpdate = true;
      const src = sm.material as THREE.Material, mat = (LOOK[src.name] || (() => src))();
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
  const skeleton = new THREE.Skeleton(bones);
  for (const m of meshes) m.bind(skeleton);

  // stand on the ground at 1.78 m, feet at y = 0
  const k = HEIGHT / Hs;
  const root = new THREE.Group();
  char.scale.setScalar(k);
  char.position.y = -foot * k;
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
  return {
    root, height: HEIGHT, play, playing: () => curName,
    update: (dt) => mixer.update(dt),
    dispose: () => { mixer.stopAllAction(); owned.forEach((d) => d.dispose()); },
  };
}
