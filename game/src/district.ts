/**
 * VexVoid's district, built from ./plan.ts: brick and concrete blocks with lit, broken and boarded windows over
 * shuttered ground floors, narrow lanes, a canal in its cutting with towpaths, bridges and steps, a brick rail viaduct
 * with arches (a train runs on it), a foot tunnel to a hidden yard, an abandoned warehouse (open inside), the goods
 * yard with old sidings and containers, scaffolding on two blocks, fire stairs, gates and fences, rooftops with
 * parapets, tanks and vents, and VEX'S STUDIO. Everything is grimed (./districtTex.ts): soot, water stains, rust runs,
 * damp, old tags and throw-ups, buffed patches, posters and stickers, litter and puddles. Black and white, night, rain.
 *
 * Performance: one merged mesh per material per 48 m chunk (frustum culled), every repeated thing instanced, the decals
 * one draw, lamps are glow sprites + light pools on the ground, and a pool of real point lights follows the writer to
 * the nearest lamps. High adds the planar street reflection, the moon's shadows (following the writer) and more rain.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import type { Look } from './look';
import { makePlan, ROAD_Y, SPRING, TOW_Y, WATER_Y, type Plan, type Bld, type Side } from './plan';
import { makeNav, type Box } from './world';
import { skylineTex, softGlow, ringTex } from './cityAssets';
import { beamMaterial, glowMaterial, makeShared, mistMaterial, rainMaterial, rippleMaterial, steamMaterial } from './cityShaders';
import { brickTex, chainTex, cobbleTex, concreteTex, containerTex, facadeTex, graffitiAtlas, grime, paperTex, plateTex, plinthTex, rngOf, roofTex, signTex, texOf, wetGround, type Mat4, type WetU } from './districtTex';
import type { Wall, Spot } from './city';
import starters from '../sketches/index';
import { drawSketch, type Sketch } from './sketchbook';

export type District = {
  group: THREE.Group; plan: Plan; world: Plan['world'];
  spots: Spot[]; walls: Wall[]; blockers: Box[];
  /** The officers' map, made the first time it is asked for. */
  nav: () => ReturnType<typeof makeNav>;
  groundAt: (x: number, z: number, feet: number) => number;
  /** Is there a ceiling over this point under `y` (inside the studio, the warehouse, the tunnel, under a bridge)? */
  ceilingAt: (x: number, z: number, y: number) => number;
  /** Where the train is now (for sound or a test): head x, track z, moving. */
  train: () => { x: number; z: number; on: boolean };
  /** An overhead picture of the whole district with the places named (PNG data URL). */
  map: (renderer: THREE.WebGLRenderer, width?: number) => string;
  beforeRender: (renderer: THREE.WebGLRenderer, scene: THREE.Scene, cam: THREE.PerspectiveCamera) => void;
  resize: (w: number, h: number) => void;
  /** Test/tuning knobs: how many real lights follow the writer, the street reflection on or off. */
  quality: (o?: { lights?: number; refl?: boolean }) => { lights: number; refl: boolean };
  update: (dt: number, t: number, cam: THREE.Camera, focus: THREE.Vector3) => void;
  dispose: () => void;
};

const CH = 96; // chunk size for merged meshes (frustum culled; bigger = fewer draws)

export function buildDistrict({ renderer, scene, high, look }: { renderer: THREE.WebGLRenderer; scene: THREE.Scene; high: boolean; look: Look }): District {
  const P = makePlan(), W = P.world;
  const S = high ? 1 : 0.6;
  const group = new THREE.Group();
  const disp: { dispose: () => void }[] = [];
  const track = <T extends { dispose: () => void }>(o: T) => (disp.push(o), o);
  const R = rngOf(1977), rr = (a: number, b: number) => a + (b - a) * R(), ri = (n: number) => Math.floor(R() * n);
  const up = new THREE.Vector3(0, 1, 0);
  const M = (x: number, y: number, z: number, sx = 1, sy = 1, sz = 1, ry = 0, rx = 0, rz = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  void up;

  // ── sky, fog, light ──
  const fog = new THREE.FogExp2('#0c1016', high ? 0.021 : 0.026);
  scene.fog = fog; scene.background = new THREE.Color('#05070a');
  const sh = makeShared(fog);
  {
    // an environment for wet and metal things to reflect: a dark dome with a few pale strips (sodium-free, it is B&W)
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.SphereGeometry(50, 24, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, vertexShader: 'varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }', fragmentShader: 'varying vec3 p; void main(){ float h = normalize(p).y; gl_FragColor = vec4(mix(vec3(0.06,0.07,0.08), vec3(0.01,0.012,0.016), smoothstep(-0.1,0.6,h)),1.); }' })));
    for (const [x, y, z, w, h, k] of [[0, 14, -40, 30, 3, 4], [-30, 8, -10, 26, 2, 3], [30, 10, 6, 24, 2, 3], [10, 22, 30, 16, 3, 2.5], [-20, 6, 30, 10, 2, 2]]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffffff').multiplyScalar(k), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m);
    }
    const pm = new THREE.PMREMGenerator(renderer); const e = pm.fromScene(env, 0.03).texture; pm.dispose(); track(e);
    env.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.geometry.dispose(); (m.material as THREE.Material).dispose(); } });
    scene.environment = e; scene.environmentIntensity = 0.7;
  }
  const skyMat = track(new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { uT: sh.uT },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: /* glsl */ `varying vec3 vP; uniform float uT;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ s+=a*vn(p); p*=2.03; a*=0.5; } return s; }
      void main(){ vec3 d = normalize(vP); float y = d.y;
        vec3 c = mix(vec3(0.085,0.09,0.1), vec3(0.02,0.022,0.028), smoothstep(0.0,0.5,y));
        float cl = fbm(vec2(atan(d.x,d.z)*2.0 + uT*0.004, y*4.0) * 2.0);
        c += vec3(0.06) * cl * smoothstep(0.02,0.3,y) * (1.0 - smoothstep(0.3,0.9,y));
        gl_FragColor = vec4(c, 1.0); }` }));
  const sky = new THREE.Mesh(track(new THREE.SphereGeometry(420, 32, 16)), skyMat); sky.renderOrder = -10; sky.userData.noAO = true; group.add(sky);
  // the city beyond: skyline cards on every side
  for (const [ang, dist, seed, k] of [[0, 190, 1, 1], [Math.PI / 2, 180, 2, 0.9], [Math.PI, 200, 3, 1.1], [-Math.PI / 2, 180, 4, 0.95], [0.6, 260, 5, 1.4], [-2.4, 260, 6, 1.4]]) {
    const t = track(skylineTex(seed * 17, '#0b0c0f', 'rgba(60,64,70,0.5)', 0.12, S));
    const m = new THREE.Mesh(track(new THREE.PlaneGeometry(700 * k, 180 * k)), track(new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, fog: false })));
    m.position.set(Math.sin(ang) * -dist, 180 * k * 0.5 - 8, Math.cos(ang) * -dist - 20); m.rotation.y = ang; m.renderOrder = -5; m.userData.noAO = true; group.add(m);
  }
  group.add(new THREE.HemisphereLight('#8a96a8', '#101012', 0.32));
  const moon = new THREE.DirectionalLight('#c8d4e6', 0.75);
  moon.position.set(-30, 60, 25); moon.target.position.set(0, 0, 0);
  if (high) { moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048); const c = moon.shadow.camera; c.left = -45; c.right = 45; c.top = 45; c.bottom = -45; c.near = 5; c.far = 160; moon.shadow.bias = -0.0006; moon.shadow.normalBias = 0.06; }
  group.add(moon, moon.target);

  // ── materials ──
  const std = (o: THREE.MeshStandardMaterialParameters) => track(new THREE.MeshStandardMaterial(o));
  const fromTex = (t: Mat4, o: THREE.MeshStandardMaterialParameters = {}) => { for (const k of [t.map, t.normal, t.em, t.rough]) if (k) track(k); return std({ map: t.map, normalMap: t.normal, normalScale: new THREE.Vector2(1.2, 1.2), roughness: 0.82, metalness: 0.02, ...(t.em ? { emissiveMap: t.em, emissive: '#ffffff', emissiveIntensity: 1.1 } : {}), ...o }); };
  const KINDS = ['brick', 'soot', 'block', 'render', 'shed'] as const;
  const fac = Object.fromEntries(KINDS.map((k, i) => { const t = facadeTex(k, 101 + i * 37, S); return [k, { mat: grime(fromTex(t, k === 'shed' ? { metalness: 0.45, roughness: 0.6 } : {}), { rust: k === 'shed' ? 1 : 0, floor: k === 'shed' ? 7 : 3.5 }), tw: t.tw, th: t.th }]; })) as Record<(typeof KINDS)[number], { mat: THREE.MeshStandardMaterial; tw: number; th: number }>;
  const plT = plinthTex(77, S), plinth = { mat: grime(fromTex(plT)), tw: plT.tw, th: plT.th };
  const brT = brickTex(5, 96, S), brick = { mat: grime(fromTex(brT), { floor: 2.5 }), tw: brT.tw, th: brT.th };
  const coT = concreteTex(9, 118, S), conc = { mat: grime(fromTex(coT), { floor: 2 }), tw: coT.tw, th: coT.th };
  const roT = roofTex(3, S), roof = { mat: grime(fromTex(roT, { roughness: 0.92 }), { soot: 0, streak: 0 }), tw: roT.tw, th: roT.th };
  const ctT = containerTex(21, S), cont = { mat: grime(fromTex(ctT, { metalness: 0.55, roughness: 0.55 }), { rust: 1, floor: 2.6 }), tw: ctT.tw, th: ctT.th };
  const iron = grime(std({ color: '#2a2b2e', roughness: 0.5, metalness: 0.85 }), { rust: 0.8, soot: 0.3 });
  const steel = grime(std({ color: '#4a4c50', roughness: 0.42, metalness: 0.8 }), { rust: 0.6 });
  const wood = grime(std({ color: '#5a5550', roughness: 0.85, metalness: 0 }), { soot: 0.4 });
  const dark = std({ color: '#0e0e10', roughness: 0.7, metalness: 0.1 });
  const pale = std({ color: '#b8b8b8', roughness: 0.7, metalness: 0 });
  const rubber = std({ color: '#0b0b0c', roughness: 0.9, metalness: 0 });
  const glowM = (k: number) => track(new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffffff').multiplyScalar(k), toneMapped: false }));

  // ── geometry buckets: merged per material and chunk ──
  type Bk = { mat: THREE.Material; geos: THREE.BufferGeometry[]; cast: boolean };
  const buckets = new Map<string, Bk>();
  const add = (key0: string, mat: THREE.Material, g: THREE.BufferGeometry, cast = true) => {
    let key = key0;
    key = key + '#' + mat.uuid;
    let b = buckets.get(key); if (!b) buckets.set(key, (b = { mat, geos: [], cast })); b.geos.push(g.index ? g.toNonIndexed() : g); if (g.index) g.dispose();
  };
  /** World-scaled UVs by face direction (tw x th metres per tile), so textures keep real size on any box. */
  const worldUV = (g: THREE.BufferGeometry, tw: number, th: number, ou = 0, ov = 0) => {
    const p = g.attributes.position as THREE.BufferAttribute, n = g.attributes.normal as THREE.BufferAttribute;
    let uv = g.attributes.uv as THREE.BufferAttribute | undefined; if (!uv) { uv = new THREE.BufferAttribute(new Float32Array(p.count * 2), 2); g.setAttribute('uv', uv); }
    for (let i = 0; i < p.count; i++) {
      const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i), x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      if (Math.abs(ny) > Math.max(Math.abs(nx), Math.abs(nz))) uv.setXY(i, x / tw, z / tw);
      else if (Math.abs(nx) > Math.abs(nz)) uv.setXY(i, (nx > 0 ? -z : z) / tw + ou, y / th + ov);
      else uv.setXY(i, (nz > 0 ? x : -x) / tw + ou, y / th + ov);
    }
    return g;
  };
  const chunk = (x: number, z: number) => `${Math.floor(x / CH)},${Math.floor(z / CH)}`;
  type TM = { mat: THREE.Material; tw: number; th: number };
  const boxG = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number) => { const g = new THREE.BoxGeometry(Math.max(0.001, x1 - x0), Math.max(0.001, y1 - y0), Math.max(0.001, z1 - z0)); g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); return g; };
  const box = (m: TM | THREE.Material, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, name = '', cast = true, ou = 0) => {
    const g = boxG(x0, x1, y0, y1, z0, z1);
    const tm = (m as TM).mat ? (m as TM) : { mat: m as THREE.Material, tw: 2, th: 2 };
    worldUV(g, tm.tw, tm.th, ou);
    add((name || tm.mat.uuid) + '@' + chunk((x0 + x1) / 2, (z0 + z1) / 2), tm.mat, g, cast);
  };
  /** One face of a building: a quad facing `s`, from a0 to a1 along it and y0 to y1. */
  const face = (m: TM, s: Side, b: { x0: number; x1: number; z0: number; z1: number }, a0: number, a1: number, y0: number, y1: number, ou = 0) => {
    const g = new THREE.PlaneGeometry(1, 1), w = a1 - a0, h = y1 - y0, c = (a0 + a1) / 2;
    g.scale(w, h, 1);
    if (s === 's') g.translate(c, (y0 + y1) / 2, b.z1);
    else if (s === 'n') { g.rotateY(Math.PI); g.translate(c, (y0 + y1) / 2, b.z0); }
    else if (s === 'e') { g.rotateY(Math.PI / 2); g.translate(b.x1, (y0 + y1) / 2, c); }
    else { g.rotateY(-Math.PI / 2); g.translate(b.x0, (y0 + y1) / 2, c); }
    worldUV(g, m.tw, m.th, ou);
    const cx = s === 'e' ? b.x1 : s === 'w' ? b.x0 : c, cz = s === 's' ? b.z1 : s === 'n' ? b.z0 : c;
    add(m.mat.uuid + '@' + chunk(cx, cz), m.mat, g, true);
  };
  const flat = (m: TM | THREE.Material, x0: number, x1: number, z0: number, z1: number, y: number, name = '') => {
    const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0); g.rotateX(-Math.PI / 2); g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
    const tm = (m as TM).mat ? (m as TM) : { mat: m as THREE.Material, tw: 4, th: 4 };
    worldUV(g, tm.tw, tm.th); add((name || tm.mat.uuid) + '@' + chunk((x0 + x1) / 2, (z0 + z1) / 2), tm.mat, g, false);
  };
  // instancing helper
  const instanced = (geo: THREE.BufferGeometry, mat: THREE.Material, ms: THREE.Matrix4[], cast = false) => {
    if (!ms.length) { geo.dispose(); return null; }
    const im = new THREE.InstancedMesh(track(geo), mat, ms.length); ms.forEach((m, i) => im.setMatrixAt(i, m)); im.instanceMatrix.needsUpdate = true;
    im.castShadow = cast && high; im.receiveShadow = true; im.computeBoundingSphere(); group.add(im); return im;
  };

  // glow sprites and light pools, filled as things are placed
  const glows: { p: THREE.Vector3; c: THREE.Color; s: number; ph: number; mode: number }[] = [];
  const addGlow = (x: number, y: number, z: number, size: number, k = 1, mode = 0) => glows.push({ p: new THREE.Vector3(x, y, z), c: new THREE.Color(1, 1, 1).multiplyScalar(k), s: size, ph: R(), mode });
  const pools: { x: number; y: number; z: number; s: number; k: number }[] = [];
  const addPool = (x: number, y: number, z: number, s: number, k = 1) => pools.push({ x, y, z, s, k });
  // light sources for the pool of real lights
  type Src = { p: THREE.Vector3; k: number; d: number; flick: number };
  const srcs: Src[] = [];

  // ── the ground: the street level with holes (roads, canal, stair wells), roads, pavements, yard, towpaths ──
  const asphalt = track(look.material('concrete_floor_02', [1, 1], '#5a5c60', 0.05)); asphalt.roughness = 0.4; asphalt.envMapIntensity = 1.2;
  const roadMat = track(look.material('concrete_floor_02', [1, 1], '#3c3e42', 0.05)); roadMat.roughness = 0.32; roadMat.envMapIntensity = 1.4;
  const paveMat = track(look.material('large_floor_tiles_02', [1, 1], '#76787c', 0.05)); paveMat.roughness = 0.5;
  const cobT = cobbleTex(31, S); const cobMat = fromTex(cobT, { roughness: 0.6 });
  const towMat = track(look.material('large_floor_tiles_02', [1, 1], '#5e6064', 0.05)); towMat.roughness = 0.45;
  const wu: WetU = { tReflect: { value: null }, uReflMat: { value: new THREE.Matrix4() }, uReflOn: { value: 0 }, uT: sh.uT };
  wetGround(asphalt, wu, 1, true); wetGround(roadMat, wu, 1.2, true); wetGround(paveMat, wu, 0.6, true); wetGround(cobMat, wu, 1.1, true); wetGround(towMat, wu, 0.8, false);
  for (const m of [asphalt, roadMat, paveMat, towMat]) { const k = m as THREE.MeshStandardMaterial; for (const t of [k.map, k.normalMap, k.roughnessMap]) if (t) t.repeat.set(1, 1); }
  {
    // street level minus the holes: compress coordinates into cells, keep the cells outside every hole
    const B = P.bounds, xs = new Set([B.x0, B.x1]), zs = new Set([B.z0, B.z1]);
    for (const h of P.holes) { xs.add(Math.max(B.x0, Math.min(B.x1, h.x0))); xs.add(Math.max(B.x0, Math.min(B.x1, h.x1))); zs.add(Math.max(B.z0, Math.min(B.z1, h.z0))); zs.add(Math.max(B.z0, Math.min(B.z1, h.z1))); }
    const X = [...xs].sort((a, b) => a - b), Z = [...zs].sort((a, b) => a - b);
    for (let k = 0; k < Z.length - 1; k++) {
      let run = -1;
      for (let i = 0; i <= X.length - 1; i++) {
        const ok = i < X.length - 1 && !W.inHole((X[i] + X[i + 1]) / 2, (Z[k] + Z[k + 1]) / 2);
        if (ok && run < 0) run = i;
        if (!ok && run >= 0) {
          // split long strips at chunk lines so they cull
          for (let x0 = X[run]; x0 < X[i] - 1e-6; ) { const x1 = Math.min(X[i], (Math.floor(x0 / CH) + 1) * CH); flat({ mat: asphalt, tw: 4, th: 4 }, x0, x1, Z[k], Z[k + 1], 0, 'street'); x0 = x1; }
          run = -1;
        }
      }
    }
  }
  for (const r of P.roads) {
    for (let x0 = r.x0; x0 < r.x1 - 1e-6; ) { const x1 = Math.min(r.x1, (Math.floor(x0 / CH) + 1) * CH); for (let z0 = r.z0; z0 < r.z1 - 1e-6; ) { const z1 = Math.min(r.z1, (Math.floor(z0 / CH) + 1) * CH); flat({ mat: roadMat, tw: 5, th: 5 }, x0, x1, z0, z1, ROAD_Y, 'road'); z0 = z1; } x0 = x1; }
    // kerbs along the long sides, pavement slabs beside them
    const alongX = r.x1 - r.x0 > r.z1 - r.z0;
    if (alongX) for (const z of [r.z0, r.z1]) { box(conc, r.x0, r.x1, ROAD_Y - 0.05, 0.01, z - 0.1, z + 0.1, 'kerb', false); const zz = z === r.z0 ? z - 2 : z; flat({ mat: paveMat, tw: 3, th: 3 }, r.x0, r.x1, zz, zz + 2, 0.004, 'pave'); }
    else for (const x of [r.x0, r.x1]) { box(conc, x - 0.1, x + 0.1, ROAD_Y - 0.05, 0.01, r.z0, r.z1, 'kerb', false); const xx = x === r.x0 ? x - 2 : x; flat({ mat: paveMat, tw: 3, th: 3 }, xx, xx + 2, r.z0, r.z1, 0.004, 'pave'); }
  }
  // road markings: dashed centre lines, a give-way at the spur
  {
    const lineMat = std({ color: '#d8d8d8', roughness: 0.45, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const parts: THREE.BufferGeometry[] = [];
    const dash = (x: number, z: number, w: number, d: number) => { const g = new THREE.PlaneGeometry(w, d); g.rotateX(-Math.PI / 2); g.translate(x, ROAD_Y + 0.005, z); parts.push(g); };
    for (let x = -56; x < 56; x += 6) { dash(x, -75, 3, 0.14); dash(x, 46, 3, 0.14); }
    for (let z = -68; z < 40; z += 6) { if (z > -6 && z < 8) continue; dash(-62, z, 0.14, 3); dash(62, z, 0.14, 3); }
    for (let x = 68; x < 88; x += 6) dash(x, 22, 3, 0.14);
    for (let z = 19.3; z < 25; z += 0.9) dash(65.4, z, 0.3, 0.5);
    group.add(new THREE.Mesh(track(mergeGeometries(parts)!), lineMat)); parts.forEach((g) => g.dispose());
  }
  flat({ mat: cobMat, tw: 4, th: 4 }, P.yard.x0, P.yard.x1, P.yard.z0, P.yard.z1, 0.003, 'cobble');
  // the old sidings: two lines of rail in the setts, from the warehouse door down to the wharf
  for (const x of [31, 21.5]) for (const dx of [-0.72, 0.72]) box(steel, x + dx - 0.035, x + dx + 0.035, 0.0, 0.03, x === 31 ? -36 : -33.2, -12.2, 'siding', false);
  // the canal: towpaths, the water, coping
  for (const z0 of [P.canal.z0, P.canal.z1 - 2]) for (let x0 = P.bounds.x0; x0 < P.bounds.x1; x0 += CH) flat({ mat: towMat, tw: 3, th: 3 }, x0, Math.min(P.bounds.x1, x0 + CH), z0, z0 + 2, TOW_Y, 'tow');
  // (the moon's glint through slow waves made a cow print on near-mirror water: a softer sheen, finer ripples)
  const waterMat = track(new THREE.MeshStandardMaterial({ color: '#0a0b0d', roughness: 0.3, metalness: 0.1, envMapIntensity: 0.7 }));
  waterMat.onBeforeCompile = (s) => {
    s.uniforms.uT = sh.uT;
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWw;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWw = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWw; uniform float uT;').replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      { vec2 p = vWw.xz; float a = sin(p.x * 1.7 + uT * 1.3) * 0.5 + sin(p.y * 2.3 - uT * 1.1 + p.x * 0.4) * 0.5 + sin((p.x + p.y) * 4.1 + uT * 2.2) * 0.25;
        float b = cos(p.y * 1.9 + uT * 0.9) * 0.5 + cos((p.x - p.y) * 3.3 - uT * 1.7) * 0.3;
        float c = sin(p.x * 9.7 + p.y * 3.1 + uT * 3.1) * sin(p.y * 11.3 - p.x * 2.3 - uT * 2.6);
        normal = normalize(normal + (viewMatrix * vec4(a * 0.018 + c * 0.014, 0.0, b * 0.018 - c * 0.011, 0.0)).xyz); }`);
  };
  for (let x0 = P.bounds.x0; x0 < P.bounds.x1; x0 += CH) { const g = new THREE.PlaneGeometry(CH, P.canal.z1 - P.canal.z0 - 4); g.rotateX(-Math.PI / 2); g.translate(x0 + CH / 2, WATER_Y, (P.canal.z0 + P.canal.z1) / 2); const m = new THREE.Mesh(track(g), waterMat); m.receiveShadow = true; group.add(m); }
  // the towpath edges (stone kerbs at the water), and the walls down to the water
  for (const z of [P.canal.z0 + 2, P.canal.z1 - 2]) box(conc, P.bounds.x0, P.bounds.x1, WATER_Y - 0.4, TOW_Y + 0.02, z - 0.15, z + 0.15, 'towkerb', false);

  // ── every solid box from the plan, by what it is ──
  const kindOf = (id: string) => P.blds.find((b) => b.id === id)!;
  for (const b of P.boxes) {
    const tag = b.tag || '', y0 = b.y0 ?? -1, y1 = b.y1 ?? 10;
    if (tag.startsWith('shell:')) { const k = kindOf(tag.slice(6)); box(fac[k.kind], b.x0, b.x1, Math.max(-0.05, y0), y1, b.z0, b.z1, 'shell'); }
    else if (tag.startsWith('roof:')) { const k = kindOf(tag.slice(5)); if (k.id === 'warehouse') continue; box(conc, b.x0, b.x1, y0, y0 + 0.4, b.z0, b.z1, 'shellroof'); flat(roof, b.x0, b.x1, b.z0, b.z1, y0 + 0.41, 'roof'); }
    else if (tag === 'pier' || tag === 'archback' || tag === 'wide' || tag === 'tunnelwall' || tag === 'pitwall') box(brick, b.x0, b.x1, Math.max(-0.05, y0), y1, b.z0, b.z1, 'brick');
    else if (tag === 'archfill') {
      // the bricked-up arch: the shutter and door front low down, brick above
      box(brick, b.x0, b.x1, -0.05, y1, b.z0, b.z1 - 0.02, 'brick');
      if (b.z1 > P.viaduct.z1 - 1) { const g = new THREE.PlaneGeometry(b.x1 - b.x0, 4); g.translate((b.x0 + b.x1) / 2, 2, b.z1 + 0.005); worldUV(g, plinth.tw, plinth.th, R()); add('plinth@' + chunk(b.x0, b.z1), plinth.mat, g); }
    }
    else if (tag === 'viaduct') { box(brick, b.x0, b.x1, 5.6, P.viaduct.deck, b.z0, b.z1, 'brick'); box(brick, b.x0, b.x1, P.viaduct.deck, P.viaduct.deck + 1.2, b.z0, b.z0 + 0.35, 'brick'); box(brick, b.x0, b.x1, P.viaduct.deck, P.viaduct.deck + 1.2, b.z1 - 0.35, b.z1, 'brick'); box(conc, b.x0, b.x1, P.viaduct.deck + 1.2, P.viaduct.deck + 1.32, b.z1 - 0.45, b.z1 + 0.08, 'coping'); }
    else if (tag === 'tunnelroof') box(conc, b.x0, b.x1, y0, y0 + 0.5, b.z0, b.z1, 'conc');
    else if (tag === 'retaining' || tag === 'well' || tag === 'stairwall') { box(tag === 'retaining' ? brick : conc, b.x0, b.x1, y0, y1, b.z0, b.z1, tag === 'retaining' ? 'brick' : 'conc', false); box(conc, b.x0 - 0.02, b.x1 + 0.02, y1, y1 + 0.08, b.z0 - 0.05, b.z1 + 0.05, 'coping', false); }
    else if (tag === 'deck') box(b.y0! < -0.5 ? conc : steel, b.x0, b.x1, y0, y1, b.z0, b.z1, 'deck');
    else if (tag === 'parapet') box(brick, b.x0, b.x1, Math.max(y0, b.y1! - 1.3), y1, b.z0, b.z1, 'brick');
    else if (tag === 'rail') { box(iron, b.x0, b.x1, y1 - 0.06, y1, b.z0, b.z1, 'iron', false); box(iron, b.x0, b.x1, 0.05, 0.12, b.z0, b.z1, 'iron', false); }
    else if (tag === 'dock') { box(conc, b.x0, b.x1, 0, P.dock.y, b.z0, b.z1, 'conc'); box(steel, b.x0, b.x1, P.dock.y - 0.12, P.dock.y, b.z1, b.z1 + 0.04, 'iron', false); }
    else if (tag === 'deck' + '') { /* handled */ }
  }
  // the raised deck: concrete sides and top
  box(conc, P.deck.x0, P.deck.x1, 0, P.deck.y, P.deck.z0, P.deck.z1, 'conc');
  // stairs: a box per step
  for (const s of P.stairs) {
    const n = s.steps || 10, along = s.axis === 'x' || s.axis === '-x', len = along ? s.x1 - s.x0 : s.z1 - s.z0;
    for (let i = 0; i < n; i++) {
      const y = s.y + (s.y1! - s.y) * (i / (n - 1)), lo = Math.min(s.y, s.y1!) - 0.3;
      const u0 = (i / n) * len, u1 = ((i + 1) / n) * len;
      const forward = s.axis === 'x' || s.axis === 'z';
      const a0 = forward ? u0 : len - u1, a1 = forward ? u1 : len - u0;
      if (along) box(conc, s.x0 + a0, s.x0 + a1, lo, y, s.z0, s.z1, 'conc', false); else box(conc, s.x0, s.x1, lo, y, s.z0 + a0, s.z0 + a1, 'conc', false);
    }
  }
  // railings: posts and two rails
  {
    const posts: THREE.Matrix4[] = [];
    for (const r of P.railings) {
      const alongX = r.x1 - r.x0 > r.z1 - r.z0, len = alongX ? r.x1 - r.x0 : r.z1 - r.z0, cz = (r.z0 + r.z1) / 2, cx = (r.x0 + r.x1) / 2;
      for (let u = 0.1; u <= len; u += 1.6) posts.push(alongX ? M(r.x0 + u, r.y + 0.55, cz) : M(cx, r.y + 0.55, r.z0 + u));
      for (const y of [r.y + 1.05, r.y + 0.55]) if (alongX) box(iron, r.x0, r.x1, y - 0.03, y + 0.03, cz - 0.03, cz + 0.03, 'iron', false); else box(iron, cx - 0.03, cx + 0.03, y - 0.03, y + 0.03, r.z0, r.z1, 'iron', false);
    }
    instanced(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 6), iron, posts);
  }

  // ── buildings ──
  const climbsDrain: THREE.Matrix4[] = [], tanks: THREE.Matrix4[] = [], acs: THREE.Matrix4[] = [], vents: THREE.Matrix4[] = [], stacks: THREE.Matrix4[] = [], hatches: THREE.Matrix4[] = [];
  for (const b of P.blds) {
    if (b.shell) continue;
    const r = rngOf(b.seed), y = b.y ?? 0, top = y + b.h, f = fac[b.kind], ou = r() * 4;
    const sides: [Side, number, number][] = [['n', b.x0, b.x1], ['s', b.x0, b.x1], ['w', b.z0, b.z1], ['e', b.z0, b.z1]];
    for (const [s, a0, a1] of sides) {
      const sp = b.shop && b.shop.includes(s);
      if (sp) { face(plinth, s, b, a0, a1, y, y + 3.8, ou); face(f, s, b, a0, a1, y + 3.8, top, ou); }
      else face(f, s, b, a0, a1, y, top, ou);
      // fascia over a shop floor; a gutter at the top
      if (sp) { if (s === 'n' || s === 's') { const z = s === 'n' ? b.z0 : b.z1, d = s === 'n' ? -1 : 1; box(dark, a0, a1, y + 3.8, y + 4.05, Math.min(z, z + d * 0.18), Math.max(z, z + d * 0.18), 'dark'); } else { const x = s === 'w' ? b.x0 : b.x1, d = s === 'w' ? -1 : 1; box(dark, Math.min(x, x + d * 0.18), Math.max(x, x + d * 0.18), y + 3.8, y + 4.05, a0, a1, 'dark'); } }
      // drainpipes every 9-12 m (phase 2 climbs them)
      for (let a = a0 + 1.2 + r() * 3; a < a1 - 1; a += 9 + r() * 4) {
        const [px, pz] = s === 'n' ? [a, b.z0 - 0.12] : s === 's' ? [a, b.z1 + 0.12] : s === 'w' ? [b.x0 - 0.12, a] : [b.x1 + 0.12, a];
        if (W.free(px, pz, 0.2, y)) { climbsDrain.push(M(px, y + b.h / 2, pz, 1, b.h, 1)); P.climbs.push({ kind: 'drainpipe', x: px, z: pz, y0: y, y1: top, bld: b.id }); }
      }
    }
    // the roof: felt, a parapet with coping, or a gutter
    flat(roof, b.x0, b.x1, b.z0, b.z1, top + 0.01, 'roof');
    if (b.parapet !== false) {
      const t = 0.25, h = 0.9;
      box(f, b.x0, b.x1, top, top + h, b.z0, b.z0 + t, 'par'); box(f, b.x0, b.x1, top, top + h, b.z1 - t, b.z1, 'par');
      box(f, b.x0, b.x0 + t, top, top + h, b.z0, b.z1, 'par'); box(f, b.x1 - t, b.x1, top, top + h, b.z0, b.z1, 'par');
      box(conc, b.x0 - 0.04, b.x1 + 0.04, top + h, top + h + 0.08, b.z0 - 0.04, b.z0 + t + 0.04, 'coping', false); box(conc, b.x0 - 0.04, b.x1 + 0.04, top + h, top + h + 0.08, b.z1 - t - 0.04, b.z1 + 0.04, 'coping', false);
      box(conc, b.x0 - 0.04, b.x0 + t + 0.04, top + h, top + h + 0.08, b.z0, b.z1, 'coping', false); box(conc, b.x1 - t - 0.04, b.x1 + 0.04, top + h, top + h + 0.08, b.z0, b.z1, 'coping', false);
    } else { box(iron, b.x0 - 0.15, b.x1 + 0.15, top - 0.15, top, b.z1, b.z1 + 0.18, 'iron', false); }
    // rooftop clutter: water tanks, AC units, vents, chimney stacks, a hatch
    const px = () => rr(b.x0 + 1.5, b.x1 - 1.5), pz = () => rr(b.z0 + 1.5, b.z1 - 1.5);
    if (b.x1 - b.x0 > 4 && b.z1 - b.z0 > 4) {
      for (let i = 0; i < (b.tanks || 0); i++) tanks.push(M(px(), top, pz(), 1, 0.9 + r() * 0.3, 1, r() * 6));
      for (let i = 0; i < 1 + Math.floor(r() * 4); i++) acs.push(M(px(), top, pz(), 0.8 + r() * 1.2, 0.7 + r() * 0.6, 0.8 + r(), r() * 3));
      for (let i = 0; i < 2 + Math.floor(r() * 4); i++) vents.push(M(px(), top, pz(), 1, 0.5 + r() * 1.2, 1));
      if (b.kind === 'brick' || b.kind === 'soot') for (let i = 0; i < 1 + Math.floor(r() * 2); i++) stacks.push(M(rr(b.x0 + 0.8, b.x1 - 0.8), top, r() < 0.5 ? b.z0 + 0.7 : b.z1 - 0.7, 1, 1.2 + r() * 1.6, 1));
      hatches.push(M(px(), top, pz()));
    }
    // fire stairs zig-zagging up one side (landings every floor, a drop ladder at the bottom)
    if (b.fire) fireStairs(b);
  }
  function fireStairs(b: Bld) {
    const s = b.fire!, y = b.y ?? 0, alongX = s === 'n' || s === 's';
    const mid = alongX ? (b.x0 + b.x1) / 2 : (b.z0 + b.z1) / 2, out = s === 'e' ? b.x1 : s === 'w' ? b.x0 : s === 's' ? b.z1 : b.z0, d = s === 'e' || s === 's' ? 1 : -1;
    const at = (u: number, o: number, yy0: number, yy1: number, l: number, depth: number) => { if (alongX) box(iron, mid + u - l, mid + u + l, yy0, yy1, Math.min(out + d * o, out + d * (o + depth)), Math.max(out + d * o, out + d * (o + depth)), 'iron', false); else box(iron, Math.min(out + d * o, out + d * (o + depth)), Math.max(out + d * o, out + d * (o + depth)), yy0, yy1, mid + u - l, mid + u + l, 'iron', false); };
    for (let yy = y + 3.6, k = 0; yy < y + b.h - 1; yy += 3.5, k++) {
      at(0, 0.05, yy, yy + 0.06, 1.8, 1.2);                  // landing
      at(0, 1.2, yy, yy + 1.0, 1.8, 0.04);                   // its rail
      at(0, 1.2, yy + 0.95, yy + 1.0, 1.8, 0.06);
      // the flight up to the next landing
      const g = new THREE.BoxGeometry(alongX ? 3.4 : 0.75, 0.06, alongX ? 0.75 : 3.4);
      const ang = Math.atan2(3.5, 3.2) * (k % 2 ? 1 : -1);
      if (alongX) g.rotateZ(ang); else g.rotateX(-ang);
      if (alongX) g.translate(mid, yy + 1.8, out + d * 0.5); else g.translate(out + d * 0.5, yy + 1.8, mid);
      worldUV(g, 2, 2); add('iron@' + chunk(alongX ? mid : out, alongX ? out : mid), iron, g, false);
    }
    at(1.4, 0.4, y + 2.2, y + 3.6, 0.03, 0.03); at(1.8, 0.4, y + 2.2, y + 3.6, 0.03, 0.03); // the drop ladder's rails
  }
  instanced(new THREE.CylinderGeometry(0.06, 0.06, 1, 8), steel, climbsDrain);
  const tankGeo = (() => { const a = new THREE.CylinderGeometry(1.1, 1.1, 2.2, 14); a.translate(0, 2.5, 0); const c = new THREE.ConeGeometry(1.2, 0.6, 14); c.translate(0, 3.9, 0); const ps: THREE.BufferGeometry[] = [a, c]; for (const [lx, lz] of [[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]]) { const l = new THREE.BoxGeometry(0.1, 1.4, 0.1); l.translate(lx, 0.7, lz); ps.push(l); } const m = mergeGeometries(ps.map((g) => (g.index ? g.toNonIndexed() : g)))!; ps.forEach((g) => g.dispose()); return m; })();
  instanced(tankGeo, grime(std({ color: '#3c3c3c', roughness: 0.8, metalness: 0.3 }), { rust: 1, floor: 1.5 }), tanks, true);
  instanced(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), grime(std({ color: '#6a6c70', roughness: 0.6, metalness: 0.5 }), { rust: 0.7, floor: 1 }), acs, true);
  instanced(new THREE.CylinderGeometry(0.18, 0.22, 1, 8).translate(0, 0.5, 0), steel, vents);
  instanced(new THREE.BoxGeometry(0.7, 1, 0.7).translate(0, 0.5, 0), brick.mat, stacks, true);
  instanced(new THREE.BoxGeometry(0.9, 0.35, 0.9).translate(0, 0.17, 0), steel, hatches);

  // ── the viaduct's arches: a ring in front of each bay, a vault over the open ones; tracks on the deck ──
  {
    const V = P.viaduct, spring = SPRING;
    for (const b of V.bays) {
      const w = b.x1 - b.x0, rad = w / 2, cx = (b.x0 + b.x1) / 2;
      // the spandrels and crown: the outline runs up one side, across the top, down the other and back over the arch
      const shp = new THREE.Shape(); shp.moveTo(-rad, 0); shp.lineTo(-rad, 5.6 - spring); shp.lineTo(rad, 5.6 - spring); shp.lineTo(rad, 0); shp.absarc(0, 0, rad, 0, Math.PI, false); shp.closePath();
      const g = new THREE.ExtrudeGeometry(shp, { depth: 0.6, bevelEnabled: false, curveSegments: 18 });
      g.translate(cx, spring, V.z1 - 0.6); worldUV(g, brick.tw, brick.th); add('brick@' + chunk(cx, V.z1), brick.mat, g);
      // a voussoir ring of headers round the arch
      const ring = new THREE.RingGeometry(rad - 0.001, rad + 0.32, 24, 1, 0, Math.PI); ring.translate(cx, spring, V.z1 + 0.01); worldUV(ring, 1.5, 1.5); add('conc@' + chunk(cx, V.z1), conc.mat, ring, false);
      if (b.kind === 'open') {
        // the vault: half a tube, facing in
        const len = V.z1 - 0.6 - (V.z0 + 1.2), vg = new THREE.CylinderGeometry(rad, rad, len, 18, 1, true, -Math.PI / 2, Math.PI);
        vg.rotateX(-Math.PI / 2); vg.translate(cx, spring, (V.z1 - 0.6 + V.z0 + 1.2) / 2);
        const idx = vg.index!; for (let i = 0; i < idx.count; i += 3) { const a = idx.getX(i); idx.setX(i, idx.getX(i + 2)); idx.setX(i + 2, a); }
        const n = vg.attributes.normal as THREE.BufferAttribute; for (let i = 0; i < n.count; i++) n.setXYZ(i, -n.getX(i), -n.getY(i), -n.getZ(i));
        worldUV(vg, brick.tw, brick.th); add('brick@' + chunk(cx, V.z0), brick.mat, vg, false);
        // the side walls up to the spring are the piers; fill between the vault and the pier tops
        addPool(cx, 0.01, V.z0 + 5, 7, 0.5);
        if (R() < 0.7) { srcs.push({ p: new THREE.Vector3(cx, 4.4, V.z0 + 4), k: 14, d: 10, flick: R() < 0.4 ? 1 : 0 }); addGlow(cx, 4.4, V.z0 + 4, 0.5, 1.6, R() < 0.4 ? 2 : 0); }
      }
    }
    // the tunnel mouths: arched rings; tube lights inside
    for (const z of [V.z1, V.wide.z0]) box(conc, V.tunnel.x0 - 0.3, V.tunnel.x1 + 0.3, 3.4, 3.95, z - 0.25, z + 0.25, 'lintel');
    // deck: ballast, sleepers, rails on two tracks
    for (const tz of [-86.6, -83.4]) {
      box(dark, P.bounds.x0, P.bounds.x1, V.deck, V.deck + 0.18, tz - 1.3, tz + 1.3, 'ballast', false);
      for (const dz of [-0.72, 0.72]) box(steel, P.bounds.x0, P.bounds.x1, V.deck + 0.3, V.deck + 0.42, tz + dz - 0.04, tz + dz + 0.04, 'rail', false);
    }
    const sl: THREE.Matrix4[] = []; for (let x = P.bounds.x0; x < P.bounds.x1; x += 0.7) for (const tz of [-86.6, -83.4]) sl.push(M(x, V.deck + 0.24, tz));
    instanced(new THREE.BoxGeometry(0.22, 0.12, 2.5), wood, sl);
    // signal posts and cable troughs on the parapet
    for (let x = -80; x < 90; x += 40) { box(iron, x - 0.08, x + 0.08, V.deck, V.deck + 4.5, -88.9, -88.7, 'iron', false); box(dark, x - 0.3, x + 0.3, V.deck + 3.6, V.deck + 4.4, -88.95, -88.6, 'dark', false); addGlow(x, V.deck + 4.1, -88.5, 0.35, 2.2, 0); }
  }

  // ── shells: the studio and the warehouse (their walls are boxes above); the warehouse roof has holes ──
  const wh = P.blds.find((b) => b.id === 'warehouse')!, st = P.blds.find((b) => b.id === 'studio')!;
  {
    const top = wh.h, holes = [[22, 26, -52, -46], [34, 38, -46, -40]];
    // the roof as strips round two skylight holes (light comes in, rain too)
    const xs = [wh.x0, 22, 26, 34, 38, wh.x1], zs = [wh.z0, -52, -46, -40, wh.z1];
    for (let i = 0; i < xs.length - 1; i++) for (let k = 0; k < zs.length - 1; k++) {
      const cx = (xs[i] + xs[i + 1]) / 2, cz = (zs[k] + zs[k + 1]) / 2;
      if (holes.some(([a, b, c, d]) => cx > a && cx < b && cz > c && cz < d)) continue;
      box(fac.shed, xs[i], xs[i + 1], top - 0.45, top - 0.05, zs[k], zs[k + 1], 'whroof'); flat(roof, xs[i], xs[i + 1], zs[k], zs[k + 1], top - 0.04, 'roof');
    }
    // trusses under the roof, the light through the holes
    for (let x = wh.x0 + 3.5; x < wh.x1; x += 3.5) { box(steel, x - 0.08, x + 0.08, top - 1.4, top - 0.45, wh.z0, wh.z1, 'iron', false); box(steel, x - 0.05, x + 0.05, top - 1.4, top - 1.3, wh.z0, wh.z1, 'iron', false); }
    for (const [a, b, c, d] of holes) {
      const cone = new THREE.Mesh(track(new THREE.CylinderGeometry(2.2, 3.4, top, 4, 1, true)), track(beamMaterial('#e8eef5', 0.12, 1.1, true, sh)));
      cone.rotation.y = Math.PI / 4; cone.position.set((a + b) / 2 + 0.6, top / 2, (c + d) / 2 + 0.4); cone.userData.noAO = true; group.add(cone);
      addPool((a + b) / 2 + 1, 0.01, (c + d) / 2 + 0.6, 6, 0.9);
    }
    // a steel mezzanine along the north wall (phase 2: up the ladder)
    box(steel, wh.x0 + 0.4, wh.x0 + 14, 3.5, 3.62, wh.z0 + 0.4, wh.z0 + 3.4, 'iron', false);
    for (let x = wh.x0 + 1; x < wh.x0 + 14; x += 3.2) box(steel, x - 0.07, x + 0.07, 0, 3.5, wh.z0 + 3.3, wh.z0 + 3.4, 'iron', false);
    box(iron, wh.x0 + 0.4, wh.x0 + 14, 4.5, 4.55, wh.z0 + 3.35, wh.z0 + 3.42, 'iron', false);
    P.climbs.push({ kind: 'scaffold-ladder', x: wh.x0 + 14.4, z: wh.z0 + 3.0, y0: 0, y1: 3.5, bld: 'warehouse' });
    // the big door: a roller door jammed half up over the opening
    box(steel, 28, 34, 4.2, 4.6, wh.z1 - 0.2, wh.z1 - 0.05, 'iron');
    // the ajar side door (east) and the studio's door
    const door = (x: number, z: number, rot: number) => { const g = new THREE.BoxGeometry(0.06, 2.1, 1.0); g.translate(0, 1.05, 0.5); g.rotateY(rot); g.translate(x, 0, z); worldUV(g, 2, 2); add('steel@' + chunk(x, z), steel, g); };
    door(wh.x1, -46, -0.9); door(-19.6, st.z1, Math.PI / 2 + 1.0);
    // the studio's half-up shutter (slats from 1.3 to 2.9) and its roof
    {
      const g = new THREE.PlaneGeometry(4.5, 1.6); g.translate(-13.25, 2.1, st.z1 + 0.02);
      const c = document.createElement('canvas'); c.width = 256; c.height = 96; const x = c.getContext('2d')!; for (let y = 0; y < 96; y += 6) { x.fillStyle = '#7a7a7a'; x.fillRect(0, y, 256, 4); x.fillStyle = '#3a3a3a'; x.fillRect(0, y + 4, 256, 2); }
      const m = grime(std({ map: track(texOf(c, true, false)), roughness: 0.55, metalness: 0.6 }), { rust: 1, floor: 1.6 });
      const mesh = new THREE.Mesh(track(g), m); group.add(mesh);
    }
  }
  // what is in the studio: a mattress, the decks on crates, speakers, crates of records, paint cans, sketches on the wall
  {
    const wallC = '#ffffff';
    void wallC;
    box(pale, -21.4, -18.6, 0, 0.32, -45.4, -43.2, 'pale');                         // mattress
    box(std({ color: '#3a3a3a', roughness: 0.95 }), -21.3, -18.7, 0.32, 0.42, -44.6, -43.25, 'duvet');
    box(pale, -21.2, -20.2, 0.32, 0.46, -45.3, -44.8, 'pale');                     // pillow
    flat(std({ color: '#2a2a2a', roughness: 1 }), -18.2, -12.6, -44.4, -40.2, 0.006, 'rug');
    // the decks: two crates and a board, two turntables and a mixer
    for (const x of [-14.0, -11.0]) box(wood, x - 0.2, x + 0.2, 0, 0.75, -45.5, -44.7, 'wood');
    box(wood, -14.3, -10.5, 0.75, 0.8, -45.6, -44.6, 'wood');
    const tt: THREE.Matrix4[] = [], plat: THREE.Matrix4[] = [];
    for (const x of [-13.5, -11.3]) { box(dark, x - 0.45, x + 0.45, 0.8, 0.92, -45.5, -44.75, 'dark'); tt.push(M(x - 0.05, 0.93, -45.1)); plat.push(M(x - 0.05, 0.95, -45.1)); }
    box(dark, -12.65, -12.15, 0.8, 0.95, -45.45, -44.8, 'dark');
    instanced(new THREE.CylinderGeometry(0.16, 0.16, 0.02, 24), std({ color: '#1a1a1a', roughness: 0.3, metalness: 0.6 }), tt);
    instanced(new THREE.CylinderGeometry(0.15, 0.15, 0.01, 24), std({ color: '#050505', roughness: 0.15, metalness: 0.2 }), plat);
    // speakers
    for (const x of [-15.8, -9.0]) { box(dark, x - 0.55, x + 0.55, 0, 1.2, -45.5, -44.5, 'dark'); }
    const cones: THREE.Matrix4[] = []; for (const x of [-15.8, -9.0]) for (const y of [0.35, 0.85]) cones.push(M(x, y, -44.49, 1, 1, 1, 0, Math.PI / 2)); instanced(new THREE.CylinderGeometry(0.22, 0.25, 0.04, 20), std({ color: '#2c2c2c', roughness: 0.6 }), cones);
    // crates of records along the east wall
    const sleeves: THREE.Matrix4[] = [];
    for (let i = 0; i < 6; i++) { const z = -41.4 + i * 0.6, h = i % 2 ? 0.34 : 0.68; box(wood, -9.0, -8.5, 0, h, z - 0.27, z + 0.27, 'wood'); for (let k = 0; k < 12; k++) sleeves.push(M(-8.75, h + 0.12, z - 0.22 + k * 0.04, 1, 1, 1, 0, 0, (R() - 0.5) * 0.2)); }
    instanced(new THREE.BoxGeometry(0.32, 0.32, 0.01), std({ color: '#d0d0d0', roughness: 0.8 }), sleeves);
    // paint cans by the door and on a shelf
    const cans: THREE.Matrix4[] = [];
    for (let i = 0; i < 26; i++) cans.push(M(-21.5 + R() * 0.8, 0.12 + (i > 18 ? 0.25 : 0), -40 + R() * 2.4, 1, 1, 1, R() * 3));
    box(wood, -21.85, -21.4, 1.3, 1.34, -41, -37.5, 'wood'); for (let i = 0; i < 12; i++) cans.push(M(-21.62, 1.46, -40.8 + i * 0.28, 1, 1, 1, R() * 3));
    instanced(new THREE.CylinderGeometry(0.033, 0.033, 0.21, 12), std({ color: '#c4c6ca', roughness: 0.3, metalness: 0.8 }), cans);
    // sketches pinned on the north wall, drawn from the starter sketches (pencil on paper)
    (starters as unknown as Sketch[]).forEach((sk, i) => {
      const t = track(paperTex((c) => drawSketch(c, sk, { bg: null, pad: 4, fog: 0.12 }), i * 13 + 5));
      const g = new THREE.PlaneGeometry(0.62, 0.44); g.rotateZ((R() - 0.5) * 0.12); g.translate(-20.6 + (i % 5) * 0.85 + (R() - 0.5) * 0.1, 1.55 + Math.floor(i / 5) * 0.62 + (R() - 0.5) * 0.08, st.z0 + 0.31);
      const m = new THREE.Mesh(track(g), track(new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }))); group.add(m);
    });
    // a standard lamp and a string of bulbs
    box(dark, -17.65, -17.55, 0, 1.6, -45.15, -45.05, 'dark');
    const shade = new THREE.Mesh(track(new THREE.CylinderGeometry(0.16, 0.26, 0.3, 16, 1, true)), track(new THREE.MeshBasicMaterial({ color: '#d2ccc2', side: THREE.DoubleSide }))); shade.position.set(-17.6, 1.7, -45.1); group.add(shade);
    for (let i = 0; i < 14; i++) addGlow(-21.5 + i * 0.95, 2.7 + Math.sin(i * 0.9) * 0.12, st.z0 + 0.5, 0.12, 1.2, 3);
    // a laptop on a crate, its screen the only cold light
    box(wood, -17.6, -17.0, 0, 0.45, -39.5, -38.9, 'wood'); box(dark, -17.5, -17.1, 0.45, 0.47, -39.4, -39.0, 'dark');
    const scr = new THREE.Mesh(track(new THREE.PlaneGeometry(0.38, 0.24)), glowM(0.8)); scr.position.set(-17.3, 0.6, -39.05); scr.rotation.x = -0.25; group.add(scr);
  }
  // what is in the warehouse: columns, pallets, crates, a dead van, drums, rubble
  {
    const cols: THREE.Matrix4[] = [];
    for (const b of P.boxes) if (b.tag === 'wh:column') cols.push(M((b.x0 + b.x1) / 2, wh.h / 2, (b.z0 + b.z1) / 2, 1, wh.h, 1));
    instanced(new THREE.BoxGeometry(0.36, 1, 0.36), steel, cols, true);
    box(wood, 17, 21, 0, 1.3, -59.5, -57.5, 'wood'); box(wood, 40, 44, 0, 2.2, -59.6, -56.4, 'wood');
    box(grime(std({ color: '#5c5e62', roughness: 0.55, metalness: 0.6 }), { rust: 1, floor: 1 }), 36.5, 39.5, 0, 1.4, -45.5, -43.5, 'van'); box(dark, 36.7, 39.3, 1.4, 1.9, -45.3, -44.2, 'dark');
    const drums: THREE.Matrix4[] = []; for (let i = 0; i < 5; i++) drums.push(M(23.4 + (i % 3) * 0.6, 0.45, -48.1 + Math.floor(i / 3) * 0.6)); for (let i = 0; i < 8; i++) drums.push(M(rr(16, 46), 0.45, rr(-58, -38), 1, 1, 1, 0, R() < 0.3 ? Math.PI / 2 : 0));
    instanced(new THREE.CylinderGeometry(0.29, 0.29, 0.9, 14), grime(std({ color: '#4a4a4a', roughness: 0.6, metalness: 0.5 }), { rust: 1, floor: 1 }), drums);
  }

  // ── scaffolds: tubes, boards, ladders, netting ──
  {
    const tubes: THREE.Matrix4[] = [];
    const netT = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d')!; g.fillStyle = 'rgba(30,30,30,0.55)'; g.fillRect(0, 0, 128, 128); g.strokeStyle = 'rgba(120,120,120,0.6)'; for (let i = 0; i < 128; i += 8) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 128); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(128, i); g.stroke(); } return track(texOf(c)); })();
    const netMat = track(new THREE.MeshStandardMaterial({ map: netT, transparent: true, side: THREE.DoubleSide, roughness: 0.9, depthWrite: false }));
    for (const s of P.scaffolds) {
      const b = P.blds.find((q) => q.id === s.bld)!, alongX = s.side === 'n' || s.side === 's', top = s.lifts * 2 + 1;
      const pos = (u: number, off: number): [number, number] => s.side === 'w' ? [b.x0 - off, u] : s.side === 'e' ? [b.x1 + off, u] : s.side === 'n' ? [u, b.z0 - off] : [u, b.z1 + off];
      for (let u = s.a; u <= s.b + 0.01; u += 2.4) for (const off of [0.25, 1.3]) { const [x, z] = pos(u, off); tubes.push(M(x, top / 2, z, 1, top, 1)); }
      for (let k = 1; k <= s.lifts; k++) {
        const y = k * 2;
        // ledgers along, transoms across, boards on the transoms, a guard rail
        for (const off of [0.25, 1.3]) { const [x0, z0] = pos(s.a, off), [x1, z1] = pos(s.b, off); const g = new THREE.CylinderGeometry(0.024, 0.024, 1, 6); g.rotateZ(Math.PI / 2); if (!alongX) g.rotateY(Math.PI / 2); tubes.push(M((x0 + x1) / 2, y, (z0 + z1) / 2, alongX ? s.b - s.a : 1, 1, alongX ? 1 : s.b - s.a, alongX ? 0 : Math.PI / 2, 0, Math.PI / 2)); g.dispose(); tubes.push(M((x0 + x1) / 2, y + 1.0, (z0 + z1) / 2, alongX ? s.b - s.a : 1, 1, alongX ? 1 : s.b - s.a, alongX ? 0 : Math.PI / 2, 0, Math.PI / 2)); }
        const [bx0, bz0] = pos(s.a, 0.2), [bx1, bz1] = pos(s.b, 1.35);
        box(wood, Math.min(bx0, bx1), Math.max(bx0, bx1), y + 0.03, y + 0.09, Math.min(bz0, bz1), Math.max(bz0, bz1), 'wood', true);
        if (k >= 2) { const [nx0, nz0] = pos(s.a, 1.35), [nx1, nz1] = pos(s.b, 1.35); const g = new THREE.PlaneGeometry(s.b - s.a, 2); if (!alongX) g.rotateY(Math.PI / 2); g.translate((nx0 + nx1) / 2, y + 1, (nz0 + nz1) / 2); const m = new THREE.Mesh(track(g), netMat); m.userData.noAO = true; group.add(m); }
      }
      // braces on the face, a ladder up through the lifts
      for (let u = s.a; u < s.b - 2; u += 4.8) { const [x0, z0] = pos(u, 1.35), [x1, z1] = pos(u + 2.4, 1.35); const len = Math.hypot(2.4, 2), m = M((x0 + x1) / 2, 1, (z0 + z1) / 2, 1, len, 1, alongX ? 0 : Math.PI / 2, 0, (alongX ? -1 : 1) * Math.atan2(2.4, 2)); tubes.push(m); }
      const [lx, lz] = pos(s.a + 1.2, 0.78);
      for (const d of [-0.22, 0.22]) tubes.push(alongX ? M(lx + d, s.lifts, lz, 1, s.lifts * 2, 1) : M(lx, s.lifts, lz + d, 1, s.lifts * 2, 1));
      for (let y = 0.3; y < s.lifts * 2; y += 0.3) box(steel, alongX ? lx - 0.22 : lx - 0.015, alongX ? lx + 0.22 : lx + 0.015, y, y + 0.03, alongX ? lz - 0.015 : lz - 0.22, alongX ? lz + 0.015 : lz + 0.22, 'iron', false);
    }
    instanced(new THREE.CylinderGeometry(0.024, 0.024, 1, 6), steel, tubes);
  }

  // ── containers ──
  for (const c of P.containers) {
    const g = boxG(c.x0, c.x1, c.y, c.y + c.h, c.z0, c.z1); worldUV(g, cont.tw, cont.th, (c.seed % 7) / 7); add('cont@' + chunk(c.x0, c.z0), cont.mat, g);
  }

  // ── gates: chain-link panels on posts, sheet steel gates in frames ──
  {
    const chain = track(new THREE.MeshStandardMaterial({ map: chainTex(S), alphaTest: 0.35, side: THREE.DoubleSide, metalness: 0.7, roughness: 0.45, color: '#bbbbbb' }));
    const posts: THREE.Matrix4[] = [];
    for (const gt of P.gates) {
      const alongX = gt.x1 - gt.x0 > gt.z1 - gt.z0, len = alongX ? gt.x1 - gt.x0 : gt.z1 - gt.z0, c = alongX ? (gt.z0 + gt.z1) / 2 : (gt.x0 + gt.x1) / 2, a0 = alongX ? gt.x0 : gt.z0;
      const shut = len * (1 - gt.open), s0 = a0 + (len - shut);
      for (let u = 0; u <= len + 0.01; u += Math.min(2.5, len)) posts.push(alongX ? M(a0 + u, gt.h / 2, c, 1, gt.h, 1) : M(c, gt.h / 2, a0 + u, 1, gt.h, 1));
      const panel = (u0: number, u1: number, rot = 0, hinge = u0) => {
        if (u1 - u0 < 0.05) return;
        if (gt.kind === 'chain') {
          const g = new THREE.PlaneGeometry(u1 - u0, gt.h - 0.1); g.translate((u1 - u0) / 2, gt.h / 2, 0); g.rotateY((alongX ? 0 : -Math.PI / 2) + rot);
          const uv = g.attributes.uv as THREE.BufferAttribute; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (u1 - u0) / 2, uv.getY(i) * gt.h / 2);
          g.translate(alongX ? hinge : c, 0, alongX ? c : hinge); const m = new THREE.Mesh(track(g), chain); m.userData.noAO = true; group.add(m);
        } else {
          const g = new THREE.BoxGeometry(u1 - u0, gt.h, 0.06); g.translate((u1 - u0) / 2, gt.h / 2, 0); g.rotateY((alongX ? 0 : -Math.PI / 2) + rot); g.translate(alongX ? hinge : c, 0, alongX ? c : hinge); worldUV(g, 2, 2); add('steelgate@' + chunk(gt.x0, gt.z0), steel, g);
        }
      };
      panel(s0, a0 + len);
      if (gt.open > 0.05) panel(a0, a0 + len * gt.open * 0.95, gt.kind === 'chain' ? 1.2 : 1.35, a0);   // the open leaf, swung back
      if (alongX) box(iron, gt.x0, gt.x1, gt.h - 0.05, gt.h, c - 0.03, c + 0.03, 'iron', false); else box(iron, c - 0.03, c + 0.03, gt.h - 0.05, gt.h, gt.z0, gt.z1, 'iron', false);
    }
    instanced(new THREE.CylinderGeometry(0.045, 0.045, 1, 8), iron, posts);
  }

  // ── street furniture and litter ──
  {
    const skipG = (() => { const a = new THREE.BoxGeometry(1.7, 1.2, 3.4); a.translate(0, 0.6, 0); const p = a.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) if (p.getY(i) > 0.6) p.setZ(i, p.getZ(i) * 1.18); a.computeVertexNormals(); return a; })();
    const skips: THREE.Matrix4[] = [], bins: THREE.Matrix4[] = [], bolls: THREE.Matrix4[] = [], vans: THREE.Matrix4[] = [], cars: THREE.Matrix4[] = [];
    for (const b of P.boxes) {
      const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2, alongX = b.x1 - b.x0 > b.z1 - b.z0;
      if (b.tag === 'skip') skips.push(M(cx, 0, cz, 1, 1, 1, alongX ? Math.PI / 2 : 0));
      else if (b.tag === 'bin') bins.push(M(cx, 0, cz, 1, 1, 1, R() * 0.4));
      else if (b.tag === 'bollard') bolls.push(M(cx, 0.48, cz));
      else if (b.tag === 'van') vans.push(M(cx, 0, cz, 1, 1, 1, alongX ? Math.PI / 2 : 0));
      else if (b.tag === 'car' || b.tag === 'carpark-wreck') cars.push(M(cx, 0, cz, 1, 1, 1, alongX ? Math.PI / 2 : 0));
    }
    instanced(skipG, grime(std({ color: '#5a5a5a', roughness: 0.7, metalness: 0.4 }), { rust: 1, floor: 1.2 }), skips, true);
    instanced(new THREE.BoxGeometry(0.7, 1.05, 0.75).translate(0, 0.53, 0), std({ color: '#2a2a2a', roughness: 0.6 }), bins, true);
    instanced(new THREE.CylinderGeometry(0.1, 0.12, 0.96, 10), iron, bolls);
    const vanG = (() => { const a = new THREE.BoxGeometry(1.9, 1.7, 5.0); a.translate(0, 1.2, -0.3); const c = new THREE.BoxGeometry(1.9, 1.0, 1.1); c.translate(0, 0.85, 2.6); const m = mergeGeometries([a.toNonIndexed(), c.toNonIndexed()])!; a.dispose(); c.dispose(); return m; })();
    instanced(vanG, grime(std({ color: '#d0d0d0', roughness: 0.4, metalness: 0.3 }), { floor: 1.3 }), vans, true);
    const carG = (() => { const a = new THREE.BoxGeometry(1.8, 0.7, 4.4); a.translate(0, 0.65, 0); const c = new THREE.BoxGeometry(1.6, 0.55, 2.2); c.translate(0, 1.27, -0.2); const m = mergeGeometries([a.toNonIndexed(), c.toNonIndexed()])!; a.dispose(); c.dispose(); return m; })();
    instanced(carG, std({ color: '#3a3a3a', roughness: 0.35, metalness: 0.6 }), cars, true);
    const wheels: THREE.Matrix4[] = []; for (const m of [...vans, ...cars]) for (const wx of [-0.86, 0.86]) for (const wz of [1.5, -1.4]) wheels.push(m.clone().multiply(M(wx, 0.33, wz, 1, 1, 1, 0, 0, Math.PI / 2)));
    instanced(new THREE.CylinderGeometry(0.33, 0.33, 0.24, 14), rubber, wheels);
    // litter: paper, cans, bags, cardboard, pallets, tyres, cones, on every walkable street (more in the lanes)
    const papers: THREE.Matrix4[] = [], tins: THREE.Matrix4[] = [], bags: THREE.Matrix4[] = [], cards: THREE.Matrix4[] = [], pallets: THREE.Matrix4[] = [], tyres: THREE.Matrix4[] = [], cones: THREE.Matrix4[] = [];
    const B = P.bounds;
    for (let i = 0; i < (high ? 1600 : 800); i++) {
      const x = rr(B.x0 + 1, B.x1 - 1), z = rr(B.z0 + 1, B.z1 - 1), g = W.groundAt(x, z, 2);
      if (Number.isNaN(g) || g > 1.8 || !W.free(x, z, 0.15, g)) continue;
      // hug the walls: litter collects at the edges
      const wallNear = !W.free(x, z, 1.2, g); if (!wallNear && R() < 0.65) continue;
      const k = R(), y = g + 0.01;
      if (k < 0.4) papers.push(M(x, y, z, 0.2 + R() * 0.2, 1, 0.15 + R() * 0.2, R() * 6));
      else if (k < 0.6) tins.push(M(x, y + 0.033, z, 1, 1, 1, R() * 6, 0, Math.PI / 2));
      else if (k < 0.78) bags.push(M(x, y, z, 0.8 + R() * 0.5, 0.6 + R() * 0.4, 0.8 + R() * 0.5, R() * 6));   // (pass 3: the bag's own base is at 0)
      else if (k < 0.9) cards.push(M(x, y + 0.2, z, 0.6 + R() * 0.6, 0.4 + R() * 0.3, 0.5 + R() * 0.4, R() * 6, (R() - 0.5) * 0.3));
      else if (k < 0.95) pallets.push(R() < 0.5 ? M(x, y + 0.07, z, 1, 1, 1, R() * 6) : M(x, y + 0.6, z, 1, 1, 1, R() * 0.4, Math.PI / 2 - 0.25));
      else if (k < 0.985) tyres.push(M(x, y + 0.11, z, 1, 1, 1, 0, Math.PI / 2));
      else cones.push(M(x, y, z, 1, 1, 1, 0, R() < 0.3 ? Math.PI / 2 : 0));
    }
    instanced(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), std({ color: '#cfcfcf', roughness: 0.9, side: THREE.DoubleSide }), papers);
    instanced(new THREE.CylinderGeometry(0.033, 0.033, 0.12, 8), std({ color: '#9c9ea2', roughness: 0.3, metalness: 0.9 }), tins);
    // bin bags (pass 3, owner: they read as glossy black balls): a full bag slumps on its flat bottom, lumpy with what
    // is inside and creased all over, gathered at the neck and tied off in two ears; matte black plastic. Three shapes.
    const bagGeo = (seed: number) => {
      const g = new THREE.SphereGeometry(0.3, 30, 22), p = g.attributes.position, v = new THREE.Vector3();
      const nz = (x: number, y: number, z: number, f: number) => Math.sin(x * f + seed * 1.3) * Math.sin(y * f * 0.9 + seed * 2.1) * Math.sin(z * f * 1.1 + seed * 0.7) + 0.5 * Math.sin((x + z) * f * 2.3 + seed) * Math.sin(y * f * 1.9 - seed);
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i); const h = v.y / 0.3, neck = THREE.MathUtils.smoothstep(h, 0.6, 0.97), sag = THREE.MathUtils.smoothstep(-h, -0.2, 0.9);
        const ridge = 1 - 2 * Math.abs(nz(v.x, v.y, v.z, 17));   // sharp creases in the plastic
        let r = (1 + 0.17 * nz(v.x, v.y, v.z, 6) + 0.045 * ridge + 0.012 * nz(v.x, v.y, v.z, 60)) * (1 + 0.1 * sag) * (1 - 0.86 * neck);
        let y = v.y * (h > 0 ? 0.78 + 0.42 * neck : 0.75);   // (pass 4: a short gathered neck, so the knot and its ears sit on top)
        if (y < -0.18) { r *= 1 + (-0.18 - y) * 0.9; y = -0.18 - (-0.18 - y) * 0.1; }   // the bottom squashed flat on the ground
        p.setXYZ(i, v.x * r, y + 0.2, v.z * r);
      }
      g.deleteAttribute('uv'); g.computeVertexNormals();   // smooth: the creases are in the shape
      // the knot on top of the neck, and its two ears: the bag's tie flaps, flat, crumpled, splayed out like a rabbit's
      // (pass 4, owner: pass 3's were too small to see; they sat down inside the neck)
      const top = 0.3 * (0.78 + 0.42) + 0.2, ears: THREE.BufferGeometry[] = [];
      for (const s of [-1, 1]) {
        const tilt = s * (0.62 + 0.18 * Math.sin(seed * 1.7 + s)), len = 0.085 + 0.012 * Math.cos(seed + s), e = new THREE.SphereGeometry(0.05, 14, 10);
        const q = e.attributes.position;
        for (let i = 0; i < q.count; i++) {   // a flap: wide at its tip, pinched where it leaves the knot, creased
          v.fromBufferAttribute(q, i); const t = (v.y / 0.05 + 1) / 2, w = 0.45 + 0.75 * Math.sin(Math.PI * Math.min(1, t * 0.85 + 0.12));
          const cr = Math.sin(v.x * 140 + seed * 3 + s) * Math.sin(v.y * 90 - seed) * 0.006;
          q.setXYZ(i, v.x * 0.9 * w, v.y * (len / 0.05), v.z * 0.22 + cr + 0.012 * Math.sin(t * 3.1) * s);
        }
        e.rotateY(s * 0.35 + 0.2 * Math.sin(seed)); e.rotateZ(-tilt); e.translate(Math.sin(tilt) * len * 0.92, top + 0.02 + Math.cos(tilt) * len * 0.92, 0); e.deleteAttribute('uv'); e.computeVertexNormals(); ears.push(e);
      }
      const knot = new THREE.SphereGeometry(0.042, 12, 9); knot.scale(1.05, 0.8, 1); knot.translate(0, top + 0.015, 0); knot.deleteAttribute('uv');
      const m = mergeGeometries([g.toNonIndexed(), ...ears.map((e) => e.toNonIndexed()), knot.toNonIndexed()])!; [g, knot, ...ears].forEach((x) => x.dispose());
      return m;
    };
    const bagMat = std({ color: '#19191b', roughness: 0.62, metalness: 0.02, envMapIntensity: 0.45 });
    for (let k = 0; k < 3; k++) instanced(bagGeo(k * 2.7 + 1), bagMat, bags.filter((_, i) => i % 3 === k));
    // (for tests and pictures: where the bags lie)
    (globalThis as { __vxBags?: number[][] }).__vxBags = bags.map((m) => { const e = m.elements; return [+e[12].toFixed(2), +e[13].toFixed(2), +e[14].toFixed(2)]; });
    instanced(new THREE.BoxGeometry(1, 1, 1), std({ color: '#7a756e', roughness: 0.95 }), cards);
    instanced(new THREE.BoxGeometry(1.2, 0.14, 1.0), wood, pallets);
    instanced(new THREE.TorusGeometry(0.3, 0.11, 8, 16), rubber, tyres);
    instanced(new THREE.ConeGeometry(0.16, 0.5, 10).translate(0, 0.25, 0), std({ color: '#d8d8d8', roughness: 0.5 }), cones);
  }

  // ── signs: the shops, street names ──
  const signs: { tex: THREE.Texture; w: number; h: number; x: number; y: number; z: number; ry: number; lit: number }[] = [];
  const recDoor = P.doors.find((d) => d.id === 'record-shop')!, paintDoor = P.doors.find((d) => d.id === 'paint-shop')!;
  signs.push({ tex: signTex('RECORDS', 'VOID RECORDS · NEW · USED · VEXVOID', { dark: true }), w: 4.4, h: 1.1, x: (recDoor.x0 + recDoor.x1) / 2, y: 4.35, z: P.viaduct.z1 - 0.55, ry: 0, lit: 1.6 });
  signs.push({ tex: signTex('PAINT', 'DEAD STOCK · CANS · CAPS · MARKERS'), w: 4.4, h: 1.1, x: 57.06, y: 4.5, z: 32, ry: Math.PI / 2, lit: 1.4 });
  for (const [t, x, y, z, ry] of [['ARCHES ROAD', -40, 2.8, -69.9, 0], ['ARCHES ROAD', 30, 2.8, -69.9, 0], ['CANAL STREET', -56.9, 2.8, -40, Math.PI / 2], ['WHARF LANE', -30, 2.8, -8.1, Math.PI], ['VOID STREET', -3.1, 2.6, -38, Math.PI / 2], ['BACK LANE', -33.5, 2.6, -66, -Math.PI / 2], ['DEPOT ROAD', 66.9, 2.8, 17.1, Math.PI], ['SOUTH ROAD', -20, 2.8, 41.1, 0]] as [string, number, number, number, number][])
    signs.push({ tex: plateTex(t), w: 1.4, h: 0.35, x, y, z, ry, lit: 0 });
  for (const s of signs) {
    const m = new THREE.Mesh(track(new THREE.PlaneGeometry(s.w, s.h)), track(new THREE.MeshStandardMaterial({ map: track(s.tex), roughness: 0.6, emissive: '#ffffff', emissiveMap: s.lit ? s.tex : null, emissiveIntensity: s.lit })));
    m.position.set(s.x, s.y, s.z); m.rotation.y = s.ry; group.add(m);
    if (s.lit) { box(dark, s.x - (Math.abs(Math.sin(s.ry)) > 0.5 ? 0.1 : s.w / 2 + 0.06), s.x + (Math.abs(Math.sin(s.ry)) > 0.5 ? 0.02 : s.w / 2 + 0.06), s.y - s.h / 2 - 0.06, s.y + s.h / 2 + 0.06, s.z - (Math.abs(Math.sin(s.ry)) > 0.5 ? s.w / 2 + 0.06 : 0.1), s.z + (Math.abs(Math.sin(s.ry)) > 0.5 ? s.w / 2 + 0.06 : -0.02), 'dark', false); addGlow(s.x + Math.sin(s.ry) * 0.4, s.y, s.z + Math.cos(s.ry) * 0.4, 1.4, 0.5); }
  }
  // the shop fronts: a lit window (records in racks; cans in a pyramid), a glass door, the trigger marked on the ground
  {
    const front = (draw: (g: CanvasRenderingContext2D, W: number, H: number) => void) => { const c = document.createElement('canvas'); c.width = 512; c.height = 256; const g = c.getContext('2d')!; draw(g, 512, 256); return track(texOf(c, true, false)); };
    const recT = front((g, Wd, H) => { g.fillStyle = '#d8d0c4'; g.fillRect(0, 0, Wd, H); for (let s = 0; s < 3; s++) { g.fillStyle = '#2a2a2a'; g.fillRect(0, 70 + s * 70, Wd, 6); for (let i = 0; i < 26; i++) { g.fillStyle = `rgb(${40 + (i * 37) % 160},${40 + (i * 37) % 160},${40 + (i * 37) % 160})`; g.fillRect(8 + i * 19, 20 + s * 70, 16, 50); } } g.fillStyle = 'rgba(0,0,0,0.6)'; g.fillRect(Wd * 0.62, 0, Wd * 0.2, H); g.fillStyle = '#111'; g.font = '900 30px Impact, sans-serif'; g.fillText('VEXVOID · OUT NOW', 20, H - 14); });
    const paintT = front((g, Wd, H) => { g.fillStyle = '#e0e0e0'; g.fillRect(0, 0, Wd, H); for (let row = 0; row < 6; row++) for (let i = 0; i <= row; i++) { const x = Wd * 0.3 + (i - row / 2) * 34, y = 40 + row * 34; g.fillStyle = `rgb(${60 + (row * 31 + i * 53) % 180},${60 + (row * 31 + i * 53) % 180},${60 + (row * 31 + i * 53) % 180})`; g.fillRect(x - 13, y, 26, 32); g.fillStyle = '#fff'; g.fillRect(x - 6, y - 5, 12, 6); } g.fillStyle = 'rgba(0,0,0,0.7)'; g.fillRect(Wd * 0.66, 0, Wd * 0.18, H); g.fillStyle = '#111'; g.font = '900 28px Impact, sans-serif'; g.fillText('CAPS · CANS · INK', Wd * 0.05, H - 14); });
    // the window glows by itself and takes no light: lit, a lamp or the writer's own rim light standing at it burnt it white
    const win = (t: THREE.Texture, w: number, h: number, x: number, y: number, z: number, ry: number) => { const m = new THREE.Mesh(track(new THREE.PlaneGeometry(w, h)), track(new THREE.MeshBasicMaterial({ map: t, color: new THREE.Color('#ffffff').multiplyScalar(0.62) }))); m.position.set(x, y, z); m.rotation.y = ry; group.add(m); };
    win(recT, 5.6, 2.8, (recDoor.x0 + recDoor.x1) / 2, 1.6, P.viaduct.z1 - 0.58, 0);
    win(paintT, 5.2, 2.6, 57.03, 1.5, 32, Math.PI / 2);
    srcs.push({ p: new THREE.Vector3((recDoor.x0 + recDoor.x1) / 2, 2.4, P.viaduct.z1 + 2.4), k: 22, d: 9, flick: 0 }, { p: new THREE.Vector3(59.6, 2.4, 32), k: 22, d: 9, flick: 0 });
    addPool((recDoor.x0 + recDoor.x1) / 2, 0.01, P.viaduct.z1 + 2, 6, 0.9); addPool(59, ROAD_Y + 0.02, 32, 6, 0.8);
    // the entry: a doormat outlined in white (phase 3 opens the door)
    const mk = std({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.6, roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    for (const d of P.doors) {
      const t = 0.05, y = 0.012;
      const pts = [[d.x0, d.x1, d.z0, d.z0 + t], [d.x0, d.x1, d.z1 - t, d.z1], [d.x0, d.x0 + t, d.z0, d.z1], [d.x1 - t, d.x1, d.z0, d.z1]];
      for (const [a, b, c, e] of pts) flat(mk, a, b, c, e, y, 'mark');
    }
  }

  // ── the hall of fame (a prepared panel, kept clean for pieces) and the flood on it ──
  const spots: Spot[] = [];
  {
    const h = P.hall, z = P.pit.z0 + 0.4;
    const m = look.material('concrete_floor_02', [h.w / 5, h.h / 5], '#8d9097', 0.02); track(m); m.roughness = 0.92; m.envMapIntensity = 0.5;
    const mesh = new THREE.Mesh(track(new THREE.PlaneGeometry(h.w, h.h)), m); mesh.position.set(h.x, h.h / 2, z + 0.02); mesh.receiveShadow = true; group.add(mesh);
    const wd = P.walls.find((w) => w.id === 'hall-of-fame')!;
    spots.push({ id: 'hall-of-fame', mesh, w: h.w, h: h.h, center: new THREE.Vector3(...wd.c), normal: new THREE.Vector3(wd.n[0], 0, wd.n[1]) });
    // the flood's mast stands by the tunnel gate, off the line from the tunnel to the wall (it used to block the view)
    const fx = h.x + 6, fz = z + 10.9;
    box(iron, fx - 0.1, fx + 0.1, 0, 9.6, fz - 0.1, fz + 0.1, 'iron', false);
    // White paint under it must stay under the bloom threshold (it blew out at 260 cd: paint ~3x the threshold), so the
    // flood is softer and thrown a little high: its hot spot sits above the band where pieces go, the paint in the
    // falloff below it, the wall still lit and the yard still dark.
    const fl = new THREE.SpotLight('#ffffff', high ? 105 : 70, 34, 0.95, 1.0, 1.2); fl.position.set(fx, 9.5, fz - 0.2); fl.target.position.set(h.x, 5.2, z); group.add(fl, fl.target);
    addGlow(fx, 9.5, fz - 0.3, 1.6, 1.8);
  }

  // ── lamps: geometry, glow, pools; their positions feed the pool of real lights ──
  // 0.9 m out along the normal of the wall a lamp is fixed to (none near: no offset)
  const offWall = (x: number, z: number): [number, number] => {
    let best: (typeof P.walls)[number] | null = null, bd = 0.8;
    for (const w of P.walls) { const dx = x - w.c[0], dz = z - w.c[2], d = dx * w.n[0] + dz * w.n[1], a = Math.abs(-dx * w.n[1] + dz * w.n[0]); if (d > -0.2 && d < bd && a < w.w / 2 + 0.5) { bd = d; best = w; } }
    return best ? [best.n[0] * 1.2, best.n[1] * 1.2] : [0, 0];
  };
  {
    const polesM: THREE.Matrix4[] = [], heads: THREE.Matrix4[] = [], cones: THREE.Matrix4[] = [], brackets: THREE.Matrix4[] = [], tubes: THREE.Matrix4[] = [], lanterns: THREE.Matrix4[] = [];
    for (const l of P.lamps) {
      if (l.kind === 'street') {
        // a pole at the kerb, an arm over the road
        const ax = l.dir === 0 ? (l.x < 0 ? 1 : -1) : 0, az = l.dir === -1 ? -1 : l.dir === 1 ? 1 : 0;
        polesM.push(M(l.x, l.y / 2, l.z, 1, l.y, 1));
        const hx = l.x + ax * 1.6, hz = l.z + az * 1.6;
        brackets.push(M((l.x + hx) / 2, l.y, (l.z + hz) / 2, ax ? 1.7 : 0.08, 0.08, az ? 1.7 : 0.08));
        heads.push(M(hx, l.y - 0.08, hz));
        cones.push(M(hx, 0.02, hz, 0.8, l.y / 7.4, 0.8));
        addGlow(hx, l.y - 0.2, hz, 1.0, 1.4, R() < 0.15 ? 2 : 0); addPool(hx, -0.1, hz, 10, 1.0);
        srcs.push({ p: new THREE.Vector3(hx, l.y - 0.4, hz), k: 55, d: 22, flick: 0 });
      } else if (l.kind === 'canal') {
        polesM.push(M(l.x, 1.75, l.z, 0.7, 3.5, 0.7)); lanterns.push(M(l.x, 3.6, l.z));
        addGlow(l.x, 3.6, l.z, 0.7, 1.4); addPool(l.x, 0.01, l.z, 7, 0.7); addPool(l.x, WATER_Y + 0.02, l.z < 0 ? l.z + 3 : l.z - 3, 5, 0.5);
        srcs.push({ p: new THREE.Vector3(l.x, 3.4, l.z), k: 24, d: 14, flick: 0 });
      } else if (l.kind === 'wall' || l.kind === 'bulb') {
        heads.push(M(l.x, l.y, l.z, 0.5, 0.6, 0.5)); addGlow(l.x, l.y - 0.1, l.z, 0.6, 1.6 * (l.k || 1), l.steady ? 0 : R() < 0.2 ? 2 : 0);   // (steady lamps draw no dice: the rest of the district keeps its random layout)
        const g = W.groundAt(l.x, l.z, l.y); addPool(l.x, (Number.isNaN(g) ? 0 : g) + 0.01, l.z, 6, 0.8 * (l.k || 1));
        // the real light sits out from the wall it hangs on: right at the wall it burns a white hole in the bricks
        const o = l.kind === 'wall' ? offWall(l.x, l.z) : [0, 0];
        srcs.push({ p: new THREE.Vector3(l.x + o[0], l.y - 0.3, l.z + o[1]), k: 18 * (l.k || 1), d: 11, flick: l.steady ? 0 : R() < 0.15 ? 1 : 0 });
      } else if (l.kind === 'tube') {
        tubes.push(M(l.x, l.y, l.z)); addGlow(l.x, l.y - 0.05, l.z, 0.9, 1.6, l.z < -95 ? 2 : 0); addPool(l.x, 0.01, l.z, 5, 0.8);
        srcs.push({ p: new THREE.Vector3(l.x, l.y - 0.2, l.z), k: 16, d: 9, flick: l.z < -95 ? 1 : 0 });
      } else if (l.kind === 'warm') {
        addGlow(l.x, l.y - 0.85, l.z, 0.6, 1.1); addPool(l.x, 0.01, l.z, 5, 0.9);
        srcs.push({ p: new THREE.Vector3(l.x, 1.4, l.z + 1.1), k: 9, d: 10, flick: 0 });
        if (l.x < -15 && l.z < -44) srcs.push({ p: new THREE.Vector3(-14, 2.4, -44.2), k: 8, d: 9, flick: 0 });   // the studio's string of bulbs
      } else if (l.kind === 'flood') { /* the hall's spotlight, above */ }
    }
    instanced(new THREE.CylinderGeometry(0.08, 0.12, 1, 8), iron, polesM);
    instanced(new THREE.BoxGeometry(1, 1, 1), iron, brackets);
    instanced(new THREE.BoxGeometry(0.6, 0.16, 0.32), glowM(2.6), heads);
    instanced(new THREE.BoxGeometry(0.12, 0.05, 1.5), glowM(2.4), tubes);
    instanced(new THREE.SphereGeometry(0.2, 10, 8).scale(1, 1.3, 1), glowM(2.0), lanterns);
    const coneGeo = new THREE.CylinderGeometry(0.25, 4.4, 7.4, 16, 1, true).translate(0, 3.7, 0);
    const lc = instanced(coneGeo, track(beamMaterial('#ffffff', 0.08, 1.2, false, sh)), cones); if (lc) { lc.userData.noAO = true; lc.receiveShadow = false; }
  }

  // ── the pool of real lights: follow the writer to the nearest lamps ──
  const NL = high ? 7 : 4;   // (+1: the writer's torch, always in the scene)   // every real light costs every lit pixel; far lamps are glows and pools on the ground
  const pool = Array.from({ length: NL }, () => { const l = new THREE.PointLight('#fff6ea', 0, 12, 1.8); group.add(l); return { l, src: null as Src | null }; });
  let poolT = 0;

  // ── OLD GRAFFITI, posters, stickers, stains: one instanced draw ──
  {
    const at = graffitiAtlas(S);
    const geo = new THREE.PlaneGeometry(1, 1);
    const ms: THREE.Matrix4[] = [], rects: number[] = [];
    const byKind = (k: string) => at.cells.map((c, i) => (c.kind === k ? i : -1)).filter((i) => i >= 0);
    const K = { tag: byKind('tag'), throw: byKind('throw'), scratch: byKind('scratch'), buff: byKind('buff'), poster: byKind('poster'), sticker: byKind('sticker'), stain: byKind('stain'), piece: byKind('piece'), stencil: byKind('stencil') };
    // old work stays on its wall: shrunk to fit the panel, kept inside it, and only where the wall is solid (an arch's
    // infill, not the air over the opening; a piece once hung off a pier into the open arch like a sign)
    const solidAt = (wl: (typeof P.walls)[number], x: number, y: number) => x >= 0 && x <= wl.w && y >= 0 && y <= wl.h && (!wl.arch || y <= wl.arch.y || Math.hypot(x - wl.arch.x, y - wl.arch.y) <= wl.arch.r);
    const put = (wl: (typeof P.walls)[number], kind: keyof typeof K, along: number, y: number, s = 1, off = 0.006) => {
      const i = K[kind][ri(K[kind].length)], c = at.cells[i], tx = -wl.n[1], tz = wl.n[0];
      s = Math.min(s, (wl.w - 0.2) / c.mw, (wl.h - 0.1) / c.mh); if (s <= 0.05) return;
      const hw = (c.mw * s) / 2 + 0.05, hh = (c.mh * s) / 2 + 0.03, lo = wl.c[1] - wl.h / 2;
      along = Math.max(-wl.w / 2 + hw, Math.min(wl.w / 2 - hw, along)); y = Math.max(lo + hh, Math.min(lo + wl.h - hh, y));
      // the decal's corners in the panel's own x (spray.ts: along the tangent (n.z, -n.x), from its left end)
      const px = -along + wl.w / 2, py = y - lo;
      if (wl.arch && ![[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 1]].every(([a, b]) => solidAt(wl, px + a * hw, py + b * hh))) return;
      const x = wl.c[0] + tx * along + wl.n[0] * off, z = wl.c[2] + tz * along + wl.n[1] * off;
      ms.push(M(x, y, z, c.mw * s, c.mh * s, 1, Math.atan2(wl.n[0], wl.n[1]), 0, kind === 'poster' || kind === 'sticker' ? (R() - 0.5) * 0.08 : (R() - 0.5) * 0.04));
      rects.push(...at.rect(i));
    };
    for (const wl of P.walls) {
      if (wl.id === 'hall-of-fame') continue;
      const lo = wl.c[1] - wl.h / 2, half = wl.w / 2 - 0.4; if (half < 0.3) continue;
      const busy = /canal|pier|arch|tunnel|pit|gate|lane|nw7|nw15|studio|warehouse/.test(wl.id) ? 1.6 : 1;
      const n = Math.round(wl.w * 0.32 * busy * (0.6 + R() * 0.8));
      for (let k = 0; k < n; k++) {
        const a = rr(-half, half), q = R();
        if (q < 0.34) put(wl, 'tag', a, lo + rr(0.6, 2.4), 0.6 + R() * 0.7, 0.006 + R() * 0.002);
        else if (q < 0.48) put(wl, 'throw', a, lo + rr(0.9, 1.8), 0.6 + R() * 0.5, 0.004);
        else if (q < 0.58) put(wl, 'scratch', a, lo + rr(0.9, 1.7), 1, 0.008);
        else if (q < 0.67) put(wl, 'buff', a, lo + rr(0.9, 1.9), 0.7 + R() * 0.8, 0.003);
        else if (q < 0.77) { const s = 0.9 + R() * 0.3; for (let j = 0; j < 1 + ri(4); j++) put(wl, 'poster', a + j * 0.62 * s, lo + 1.5 + (R() - 0.5) * 0.1, s, 0.007 + j * 0.0005); }
        else if (q < 0.85) put(wl, 'sticker', a, lo + rr(1.0, 1.7), 1.5 + R(), 0.009);
        else if (q < 0.93) put(wl, 'stain', a, lo + rr(0.8, 3), 0.6 + R(), 0.002);
        else if (q < 0.97 && wl.w > 8) put(wl, 'piece', a * 0.6, lo + rr(1.0, 1.6), 0.6 + R() * 0.4, 0.004);
        else put(wl, 'stencil', a, lo + rr(0.8, 1.8), 0.7, 0.008);
      }
      // heaven spots: a tag high up where nobody should reach (phase 2 gets you there)
      if (wl.h > 6 && R() < 0.25) put(wl, R() < 0.5 ? 'throw' : 'tag', rr(-half, half), lo + rr(5, wl.h - 1), 1.4, 0.004);
    }
    geo.setAttribute('aRect', new THREE.InstancedBufferAttribute(new Float32Array(rects), 4));
    const mat = track(new THREE.MeshStandardMaterial({ map: at.tex, transparent: true, depthWrite: false, roughness: 0.7, metalness: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
    track(at.tex);
    mat.onBeforeCompile = (s) => { s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nattribute vec4 aRect;').replace('#include <uv_vertex>', '#include <uv_vertex>\nvMapUv = aRect.xy + uv * aRect.zw;'); };
    mat.customProgramCacheKey = () => 'vxdecal';
    const im = instanced(geo, mat, ms); if (im) { im.userData.noAO = true; im.receiveShadow = true; im.renderOrder = 1; }
  }

  // ── merge the buckets ──
  for (const [, b] of buckets) {
    const geos = b.geos.map((g) => { for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k); return g; });
    const m = mergeGeometries(geos, false); geos.forEach((g) => g.dispose()); if (!m) continue;
    m.computeBoundingSphere(); track(m);
    const mesh = new THREE.Mesh(m, b.mat); mesh.castShadow = high && b.cast; mesh.receiveShadow = true; group.add(mesh);
  }

  // ── light pools and glow sprites ──
  {
    const g = new THREE.PlaneGeometry(1, 1); g.rotateX(-Math.PI / 2);
    const im = new THREE.InstancedMesh(track(g), track(new THREE.MeshBasicMaterial({ map: softGlow(), color: '#ffffff', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: true, opacity: 0.16, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })), pools.length);
    pools.forEach((p, i) => im.setMatrixAt(i, M(p.x, p.y + 0.012, p.z, p.s * p.k, 1, p.s * p.k * (high ? 1 : 1.5))));
    im.userData.noAO = true; im.computeBoundingSphere(); group.add(im);
  }
  // the train: four cars on the viaduct, the headlights, lit windows
  const TRAIN = { n: 4, len: 19.5, speed: 17, period: 34 };
  const trainBody = (() => {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128; const g = c.getContext('2d')!;
    g.fillStyle = '#c8c8c8'; g.fillRect(0, 0, 512, 128); g.fillStyle = '#1a1a1a'; g.fillRect(0, 96, 512, 32); g.fillStyle = '#0a0a0a'; g.fillRect(0, 70, 512, 6);
    for (let i = 0; i < 10; i++) { g.fillStyle = '#e8e8e8'; g.fillRect(12 + i * 50, 26, 40, 34); } for (const x of [120, 370]) { g.fillStyle = '#222'; g.fillRect(x, 18, 30, 78); }
    const e = document.createElement('canvas'); e.width = 512; e.height = 128; const eg = e.getContext('2d')!; eg.fillStyle = '#000'; eg.fillRect(0, 0, 512, 128); for (let i = 0; i < 10; i++) { eg.fillStyle = '#bbbbbb'; eg.fillRect(12 + i * 50, 26, 40, 34); }
    const m = std({ map: track(texOf(c, true, false)), emissive: '#ffffff', emissiveMap: track(texOf(e, true, false)), emissiveIntensity: 1.3, roughness: 0.35, metalness: 0.6 });
    const geo = new THREE.BoxGeometry(TRAIN.len - 0.6, 3.4, 2.8); geo.translate(0, 1.9, 0);
    const im = new THREE.InstancedMesh(track(geo), m, TRAIN.n); im.instanceMatrix.setUsage(THREE.DynamicDrawUsage); im.frustumCulled = false; im.castShadow = high; group.add(im);
    return im;
  })();
  const trainLight = new THREE.Mesh(track(new THREE.BoxGeometry(0.1, 0.25, 2.0)), glowM(3)); group.add(trainLight);
  let trainNow = { x: 0, z: -86.6, on: false };

  // ── rain (follows the camera), ripples near the writer, steam from a few vents, mist in the lanes ──
  const rainGroup = new THREE.Group(); group.add(rainGroup);
  {
    const RN = high ? 4200 : 1500, pos = new Float32Array(RN * 6), seed = new Float32Array(RN * 8), end = new Float32Array(RN * 2);
    for (let i = 0; i < RN; i++) { const x = (Math.random() - 0.5) * 50, y = Math.random() * 38, z = (Math.random() - 0.5) * 50, w = Math.random(); pos.set([x, y, z, x, y, z], i * 6); seed.set([0, 0, 0, w, 0, 0, 0, w], i * 8); end.set([0, 1], i * 2); }
    const g = track(new THREE.BufferGeometry()); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4)); g.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
    const rain = new THREE.LineSegments(g, track(rainMaterial(sh, '#b8c0c8'))); rain.frustumCulled = false; rain.userData.noAO = true; rain.layers.set(1); rainGroup.add(rain);
  }
  const ripples = (() => {
    const n = high ? 260 : 100, g = new THREE.PlaneGeometry(1, 1); g.rotateX(-Math.PI / 2);
    const ph = new Float32Array(n * 2); for (let i = 0; i < n; i++) ph.set([Math.random(), 0.7 + Math.random() * 0.9], i * 2);
    g.setAttribute('aPh', new THREE.InstancedBufferAttribute(ph, 2));
    const im = new THREE.InstancedMesh(track(g), track(rippleMaterial(ringTex(), sh)), n);
    for (let i = 0; i < n; i++) im.setMatrixAt(i, M((Math.random() - 0.5) * 24, 0.03, (Math.random() - 0.5) * 24));
    im.frustumCulled = false; im.userData.noAO = true; im.layers.set(1); group.add(im); return im;
  })();
  {
    const vents = [new THREE.Vector3(-28, 0, -56), new THREE.Vector3(6, 0, -42), new THREE.Vector3(-14, 0, 22), new THREE.Vector3(26, 0, -62), new THREE.Vector3(-9, 0, -94), new THREE.Vector3(44, 0, 30)];
    const per = high ? 22 : 12, n = vents.length * per, pos = new Float32Array(n * 3), vent = new Float32Array(n * 3), seed = new Float32Array(n * 2);
    vents.forEach((v, vi) => { for (let i = 0; i < per; i++) { const k = vi * per + i; vent.set([v.x, 0.1, v.z], k * 3); seed.set([i / per, Math.random()], k * 2); } });
    const g = track(new THREE.BufferGeometry()); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aVent', new THREE.BufferAttribute(vent, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 2));
    const stm = track(steamMaterial(softGlow(), sh)); (stm.uniforms.uC.value as THREE.Color).set('#8a8e94');
    const steam = new THREE.Points(g, stm); steam.frustumCulled = false; steam.userData.noAO = true; group.add(steam);
    const grates: THREE.Matrix4[] = vents.map((v) => M(v.x, 0.012, v.z)); instanced(new THREE.BoxGeometry(0.9, 0.02, 0.6), iron, grates);
    for (const [x, z, w, ry] of [[-31.8, -55, 26, Math.PI / 2], [0, -40, 40, Math.PI / 2], [10, 1, 60, 0], [-30, 1, 60, 0], [-9, -90, 18, Math.PI / 2], [40, -66, 30, 0]] as [number, number, number, number][]) {
      const m = new THREE.Mesh(track(new THREE.PlaneGeometry(w, 4)), track(mistMaterial(sh, '#7a8088', 0.14))); m.position.set(x, x === 10 || x === -30 ? -1.5 : 1.6, z); m.rotation.y = ry; m.userData.noAO = true; group.add(m);
    }
  }
  // glow points: one draw
  {
    const n = glows.length, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n), ph = new Float32Array(n * 2);
    glows.forEach((gl, i) => { pos.set([gl.p.x, gl.p.y, gl.p.z], i * 3); col.set([gl.c.r, gl.c.g, gl.c.b], i * 3); size[i] = gl.s; ph.set([gl.ph, gl.mode], i * 2); });
    const g = track(new THREE.BufferGeometry()); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aColor', new THREE.BufferAttribute(col, 3)); g.setAttribute('aSize', new THREE.BufferAttribute(size, 1)); g.setAttribute('aPh', new THREE.BufferAttribute(ph, 2));
    const pts = new THREE.Points(g, track(glowMaterial(softGlow(), sh))); pts.frustumCulled = false; pts.userData.noAO = true; group.add(pts);
  }

  // ── the planar reflection of the street (High) ──
  let refl: Reflector | null = null;
  const reflInv = new THREE.Matrix4(), buf = new THREE.Vector2();
  if (high) {
    renderer.getDrawingBufferSize(buf);
    refl = new Reflector(new THREE.PlaneGeometry(2, 2), { textureWidth: Math.max(64, Math.round(buf.x * 0.42)), textureHeight: Math.max(64, Math.round(buf.y * 0.42)), clipBias: 0.003, multisample: 0 });
    refl.rotation.x = -Math.PI / 2; refl.updateMatrixWorld(true); reflInv.copy(refl.matrixWorld).invert();
    wu.tReflect.value = refl.getRenderTarget().texture; wu.uReflOn.value = 1;
  }
  scene.add(group);

  // ── walls for the can ──
  const walls: Wall[] = P.walls.map((w) => ({ id: w.id, w: w.w, h: w.h, center: new THREE.Vector3(...w.c), normal: new THREE.Vector3(w.n[0], 0, w.n[1]), ...(w.arch ? { arch: w.arch } : {}) }));

  // ceilings: the studio, the warehouse, the tunnel, the bridges, the open arches
  const ceilings: { x0: number; x1: number; z0: number; z1: number; y: number }[] = [];
  for (const b of P.boxes) if ((b.tag || '').startsWith('roof:') || b.tag === 'tunnelroof' || b.tag === 'deck' || b.tag === 'archroof') ceilings.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y: b.y0 ?? 0 });
  const ceilingAt = (x: number, z: number, y: number) => { let c = Infinity; for (const k of ceilings) if (x > k.x0 && x < k.x1 && z > k.z0 && z < k.z1 && k.y > y && k.y < c) c = k.y; return c; };

  let navC: ReturnType<typeof makeNav> | null = null;
  const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpV = new THREE.Vector3(), tmpS = new THREE.Vector3(1, 1, 1);
  let frames = 0;

  const update = (dt: number, t: number, cam: THREE.Camera, focus: THREE.Vector3) => {
    sh.uT.value = t; skyMat.uniforms.uT.value = t;
    if (cam instanceof THREE.PerspectiveCamera) { renderer.getDrawingBufferSize(buf); sh.uPx.value = buf.y / (2 * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2)); }
    // the moon's shadow box follows the writer (snapped to its texels so it does not shimmer)
    if (high) { const snap = 90 / 2048; const fx = Math.round(focus.x / snap) * snap, fz = Math.round(focus.z / snap) * snap; moon.position.set(fx - 30, 60, fz + 25); moon.target.position.set(fx, 0, fz); moon.target.updateMatrixWorld(); }
    // the real lights go to the nearest lamps (the far ones are glows and pools on the ground)
    poolT -= dt;
    if (poolT <= 0) {
      poolT = 0.25;
      const near = srcs.map((s) => ({ s, d: s.p.distanceToSquared(focus) })).sort((a, b) => a.d - b.d).slice(0, NL).map((q) => q.s);
      const keep = new Set(near); const free = pool.filter((p) => !p.src || !keep.has(p.src)); const have = new Set(pool.map((p) => p.src));
      for (const s of near) if (!have.has(s)) { const p = free.shift(); if (p) { p.src = s; p.l.position.copy(s.p); p.l.distance = s.d; p.l.intensity = 0; } }
      for (const p of free) p.src = null;
    }
    for (const p of pool) {
      const target = p.src ? p.src.k * (p.src.flick ? (Math.sin(t * 31 + p.src.p.x) > 0.6 || Math.random() < 0.04 ? 0.15 : 1) : 1) : 0;
      p.l.intensity += (target - p.l.intensity) * Math.min(1, dt * (p.src && p.src.flick ? 30 : 6));
    }
    // rain and ripples follow
    rainGroup.position.set(Math.round(cam.position.x), 0, Math.round(cam.position.z));
    const gy = W.groundAt(focus.x, focus.z, focus.y + 0.3); ripples.position.set(Math.round(focus.x), Number.isNaN(gy) ? 0 : gy, Math.round(focus.z));
    ripples.visible = ceilingAt(focus.x, focus.z, focus.y + 0.5) === Infinity;
    // the train: across on the far track, a pause, back on the near one
    const ph = (t % (TRAIN.period * 2)) / TRAIN.period, leg = Math.floor(ph), u = ph - leg, run = (P.bounds.x1 - P.bounds.x0 + 80) / TRAIN.speed / TRAIN.period;
    const on = u < run, dir = leg ? -1 : 1, tz = leg ? -83.4 : -86.6, head = dir > 0 ? P.bounds.x0 - 40 + (u / run) * (P.bounds.x1 - P.bounds.x0 + 80) : P.bounds.x1 + 40 - (u / run) * (P.bounds.x1 - P.bounds.x0 + 80);
    for (let i = 0; i < TRAIN.n; i++) { tmpM.compose(tmpV.set(head - dir * (i + 0.5) * TRAIN.len, P.viaduct.deck + 0.3, tz), tmpQ.identity(), tmpS.setScalar(on ? 1 : 0)); trainBody.setMatrixAt(i, tmpM); }
    trainBody.instanceMatrix.needsUpdate = true;
    trainLight.visible = on; trainLight.position.set(head + dir * 0.05, P.viaduct.deck + 1.3, tz);
    trainNow = { x: head, z: tz, on };
  };
  let reflOn = true, lightsOn = NL;
  const noRefl = track(new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1)); noRefl.needsUpdate = true;
  const quality = (o: { lights?: number; refl?: boolean } = {}) => {
    if (o.lights != null) { lightsOn = Math.max(0, Math.min(NL, Math.round(o.lights))); pool.forEach((p, i) => { p.l.visible = i < lightsOn; }); }
    if (o.refl != null) { reflOn = !!o.refl && !!refl; wu.uReflOn.value = reflOn ? 1 : 0; }
    return { lights: lightsOn, refl: reflOn && !!refl };
  };
  const beforeRender = (r: THREE.WebGLRenderer, sc: THREE.Scene, cam: THREE.PerspectiveCamera) => {
    if (!refl || !reflOn || frames++ < 3) return;
    const rc = refl as unknown as { getReflectionCamera?: (c: THREE.Camera) => THREE.Camera; camera: THREE.Camera };
    (rc.getReflectionCamera ? rc.getReflectionCamera(cam) : rc.camera).layers.set(0);
    // only worth it near the street level: under the canal or high up the street is not in view
    // while the reflection is drawn the wet ground must not sample the reflection's own target (a GL feedback loop):
    // it reads a black texel instead, then gets the fresh reflection back
    const rt = refl.getRenderTarget().texture; wu.tReflect.value = noRefl; wu.uReflOn.value = 0;
    (refl.onBeforeRender as unknown as (r: THREE.WebGLRenderer, s: THREE.Scene, c: THREE.Camera) => void).call(refl, r, sc, cam);
    wu.tReflect.value = rt; wu.uReflOn.value = 1;
    wu.uReflMat.value.copy((refl.material as THREE.ShaderMaterial).uniforms.textureMatrix.value as THREE.Matrix4).multiply(reflInv);
  };
  const resize = (w: number, h: number) => { refl?.getRenderTarget().setSize(Math.max(64, Math.round(w * 0.42)), Math.max(64, Math.round(h * 0.42))); };

  /** An overhead picture of the district with the places named. */
  const map = (r: THREE.WebGLRenderer, width = 1600) => {
    const B = P.bounds, aspect = (B.x1 - B.x0) / (B.z1 - B.z0), height = Math.round(width / aspect);
    const cam = new THREE.OrthographicCamera(B.x0, B.x1, -B.z0, -B.z1, 1, 400); cam.position.set(0, 200, 0); cam.up.set(0, 0, -1); cam.lookAt(0, 0, 0);
    cam.left = B.x0; cam.right = B.x1; cam.top = -B.z0; cam.bottom = -B.z1; cam.updateProjectionMatrix();
    const rt = new THREE.WebGLRenderTarget(width, height, { samples: 4 });
    const f = scene.fog, bg = scene.background; scene.fog = null; scene.background = new THREE.Color('#202020'); sky.visible = false; rainGroup.visible = false;
    const hemi = new THREE.AmbientLight('#ffffff', 1.4); scene.add(hemi);
    const was = r.getRenderTarget(); r.setRenderTarget(rt); r.render(scene, cam); r.setRenderTarget(was);
    scene.remove(hemi); scene.fog = f; scene.background = bg; sky.visible = true; rainGroup.visible = true;
    const px = new Uint8Array(width * height * 4); r.readRenderTargetPixels(rt, 0, 0, width, height, px); rt.dispose();
    const c = document.createElement('canvas'); c.width = width; c.height = height; const g = c.getContext('2d')!; const im = g.createImageData(width, height);
    for (let y = 0; y < height; y++) im.data.set(px.subarray((height - 1 - y) * width * 4, (height - y) * width * 4), y * width * 4);
    g.putImageData(im, 0, 0);
    const X = (x: number) => ((x - B.x0) / (B.x1 - B.x0)) * width, Z = (z: number) => ((z - B.z0) / (B.z1 - B.z0)) * height;
    // the car's loop, then the places
    g.strokeStyle = 'rgba(255,255,255,0.55)'; g.setLineDash([10, 8]); g.lineWidth = 2; g.beginPath(); P.route.forEach(([x, z], i) => (i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z)))); g.stroke(); g.setLineDash([]);
    g.font = `700 ${Math.round(width / 95)}px "Helvetica Neue", Arial, sans-serif`; g.textAlign = 'center';
    for (const p of P.places) {
      g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 3; g.beginPath(); g.arc(X(p.x), Z(p.z), width / 220, 0, 6.3); g.fill(); g.stroke();
      g.lineWidth = 4; g.strokeText(p.name, X(p.x), Z(p.z) - width / 120); g.fillText(p.name, X(p.x), Z(p.z) - width / 120);
    }
    g.textAlign = 'left'; g.fillStyle = '#fff'; g.font = `700 ${Math.round(width / 70)}px "Helvetica Neue", Arial, sans-serif`; g.fillText('VEXVOID · THE DISTRICT (phase 1) · 192 x 176 m · north up', 16, height - 18);
    return c.toDataURL('image/png');
  };

  return {
    group, plan: P, world: W, spots, walls, blockers: W.boxes,
    nav: () => navC || (navC = makeNav(W)),
    groundAt: (x, z, feet) => W.groundAt(x, z, feet),
    ceilingAt, train: () => trainNow, map, beforeRender, resize, update, quality,
    dispose: () => { scene.remove(group); disp.forEach((d) => d.dispose()); refl?.dispose(); scene.environment = null; },
  };
}
