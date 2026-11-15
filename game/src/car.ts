/**
 * The patrol car, modelled in code: a low modern saloon (an extruded side profile with soft bevels and real wheel
 * arches), smoked glass, black-and-white livery, a push bar, LED strips front and back, a slim light bar that strobes
 * white, and a searchlight on the driver's pillar with a visible beam in the rain. It faces +Z, wheels on y = 0.
 *
 *   const car = makeCar(high); scene.add(car.group, car.beam, car.search, car.search.target)
 *   car.update(dt, t, { speed, strobe, lights })   // per frame
 */
import * as THREE from 'three';

export type Car = {
  group: THREE.Group;
  /** The searchlight (a scene-level light: aim it with search.position / search.target). */
  search: THREE.SpotLight;
  /** The searchlight's beam volume (scene level, follows `search`). */
  beam: THREE.Mesh;
  /** Where the searchlight sits on the car, in car space. */
  searchMount: THREE.Vector3;
  update: (dt: number, t: number, o: { speed: number; strobe: boolean; lights: boolean; brake: boolean }) => void;
  dispose: () => void;
};

export const CAR = { len: 4.9, wid: 1.92 };

export function makeCar(high: boolean): Car {
  const owned: { dispose: () => void }[] = [];
  const own = <T extends { dispose: () => void }>(o: T) => (owned.push(o), o);
  const group = new THREE.Group();

  // paint: deep black lacquer and a white door panel, both clear-coated so the street lights slide over them
  const black = own(new THREE.MeshPhysicalMaterial({ color: '#08090b', roughness: 0.32, metalness: 0.55, clearcoat: 1, clearcoatRoughness: 0.08 }));
  const white = own(new THREE.MeshPhysicalMaterial({ color: '#e6e7ea', roughness: 0.35, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.1 }));
  const glass = own(new THREE.MeshPhysicalMaterial({ color: '#040405', roughness: 0.04, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6 }));
  const trim = own(new THREE.MeshStandardMaterial({ color: '#141518', roughness: 0.55, metalness: 0.4 }));
  const tyre = own(new THREE.MeshStandardMaterial({ color: '#0d0d0e', roughness: 0.85, metalness: 0 }));
  const rim = own(new THREE.MeshStandardMaterial({ color: '#9a9ca2', roughness: 0.25, metalness: 0.95 }));
  const lamp = (c: string, k: number) => own(new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), toneMapped: false }));
  const headM = lamp('#ffffff', 4), tailM = lamp('#ff2a2a', 1.6), barL = lamp('#ffffff', 1), barR = lamp('#ffffff', 1);

  // extrude a side profile (u along the car, v up) across the width w, the length along +Z
  const side = (pts: [number, number][], w: number, bevel: number, arches = false) => {
    const sh = new THREE.Shape();
    sh.moveTo(pts[0][0], pts[0][1]);
    for (const [u, v] of pts.slice(1)) sh.lineTo(u, v);
    if (arches) {
      // the sill, with a round arch over each wheel
      sh.lineTo(-1.98, 0.3); sh.absarc(-1.5, 0.36, 0.48, Math.PI + 0.12, -0.12, true);
      sh.lineTo(1.02, 0.3); sh.absarc(1.5, 0.36, 0.48, Math.PI + 0.12, -0.12, true);
    }
    sh.closePath();
    const g = new THREE.ExtrudeGeometry(sh, { depth: w - bevel * 2, bevelEnabled: bevel > 0, bevelSize: bevel * 0.8, bevelThickness: bevel, bevelSegments: 3, curveSegments: 10 });
    g.translate(0, 0, -(w - bevel * 2) / 2); g.rotateY(-Math.PI / 2);
    return own(g);
  };
  const add = (g: THREE.BufferGeometry, m: THREE.Material, shadow = true) => { const o = new THREE.Mesh(g, m); o.castShadow = shadow && high; o.receiveShadow = true; group.add(o); return o; };
  const box = (w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material, shadow = false) => { const o = add(own(new THREE.BoxGeometry(w, h, d)), m, shadow); o.position.set(x, y, z); return o; };

  // the lower body: nose low and long, a short tail, the arches cut in (front of the car is +u)
  add(side([[2.42, 0.32], [2.47, 0.56], [2.32, 0.76], [1.1, 0.9], [-1.8, 0.96], [-2.38, 0.94], [-2.47, 0.62], [-2.42, 0.32]], CAR.wid, 0.07, true), black);
  // the glasshouse: one smoked piece, raked screens front and back; a body-coloured roof over it
  add(side([[1.1, 0.88], [0.12, 1.38], [-0.98, 1.38], [-1.86, 0.94]], 1.62, 0.05), glass, false);
  add(side([[0.14, 1.37], [0.02, 1.44], [-0.9, 1.44], [-1.0, 1.37]], 1.5, 0.03), black);
  // livery: the doors white, a thin reflective line under the windows
  for (const sx of [-1, 1]) {
    box(0.02, 0.4, 2.1, sx * (CAR.wid / 2 + 0.005), 0.66, -0.05, white);
    box(0.02, 0.025, 4.2, sx * (CAR.wid / 2 + 0.008), 0.9, -0.1, lamp('#d8d8d8', 0.6));
  }
  box(1.92, 0.03, 0.9, 0, 0.91, 1.7, white); // a white bonnet stripe
  // push bar, mirrors, lamps
  box(1.3, 0.08, 0.08, 0, 0.42, 2.58, trim, true); box(1.3, 0.08, 0.08, 0, 0.66, 2.55, trim, true);
  for (const sx of [-1, 1]) {
    box(0.06, 0.32, 0.08, sx * 0.45, 0.54, 2.56, trim);
    box(0.2, 0.08, 0.12, sx * 1.02, 1.0, 0.95, black);
    box(0.5, 0.05, 0.04, sx * 0.62, 0.7, 2.43, headM);
    box(0.06, 0.12, 0.04, sx * 0.88, 0.64, 2.38, headM);
  }
  box(1.66, 0.05, 0.04, 0, 0.82, -2.43, tailM);
  const brake = box(0.5, 0.03, 0.03, 0, 1.36, -0.98, tailM);
  // the light bar: a slim smoked housing, three lamps each side and a steady centre
  box(1.36, 0.07, 0.3, 0, 1.48, -0.42, trim, true);
  for (let i = 0; i < 3; i++) for (const sx of [-1, 1]) box(0.18, 0.05, 0.26, sx * (0.22 + i * 0.2), 1.525, -0.42, sx < 0 ? barL : barR);
  // wheels: tyre, a turbine rim, a dark hub
  const wheels: THREE.Group[] = [];
  const tyreG = own(new THREE.CylinderGeometry(0.36, 0.36, 0.27, 28)); tyreG.rotateZ(Math.PI / 2);
  const rimG = own(new THREE.CylinderGeometry(0.25, 0.25, 0.275, 14)); rimG.rotateZ(Math.PI / 2);
  const hubG = own(new THREE.CylinderGeometry(0.07, 0.07, 0.29, 10)); hubG.rotateZ(Math.PI / 2);
  for (const [x, z] of [[-0.82, 1.5], [0.82, 1.5], [-0.82, -1.5], [0.82, -1.5]]) {
    const wg = new THREE.Group(); wg.position.set(x, 0.36, z);
    const t = new THREE.Mesh(tyreG, tyre); t.castShadow = high; wg.add(t, new THREE.Mesh(rimG, rim), new THREE.Mesh(hubG, trim));
    group.add(wg); wheels.push(wg);
  }

  // lights: dipped headlamps (one spot, no shadow), a white strobe for the bar, the searchlight (the one shadow)
  const head = new THREE.SpotLight('#f4f6ff', 0, 42, 0.5, 0.55, 1.3); head.position.set(0, 0.7, 2.5); head.target.position.set(0, 0, 16);
  const strobe = new THREE.PointLight('#ffffff', 0, 22, 1.6); strobe.position.set(0, 2.0, -0.4);
  group.add(head, head.target, strobe);
  const search = new THREE.SpotLight('#ffffff', 0, 70, 0.14, 0.45, 1.1);
  if (high) { search.castShadow = true; search.shadow.mapSize.set(512, 512); search.shadow.camera.near = 0.6; search.shadow.camera.far = 60; search.shadow.bias = -0.0004; search.shadow.normalBias = 0.04; }
  const searchMount = new THREE.Vector3(-0.98, 1.28, 0.9);
  box(0.1, 0.1, 0.18, searchMount.x, searchMount.y, searchMount.z, trim);

  // the beam: an open cone, apex at the lamp, fading along its length and at its edges (additive, out of the AO)
  const L = 34, beamG = own(new THREE.ConeGeometry(Math.tan(0.14) * L, L, 28, 1, true));
  beamG.translate(0, -L / 2, 0); beamG.rotateX(-Math.PI / 2);
  const beamM = own(new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uK: { value: 0 }, uL: { value: L } },
    vertexShader: 'varying float vA; varying vec3 vN, vV; void main(){ vA = position.z; vec4 mv = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform float uK, uL; varying float vA; varying vec3 vN, vV; void main(){ float a = clamp(vA / uL, 0., 1.); float f = abs(dot(normalize(vN), normalize(vV))); gl_FragColor = vec4(vec3(uK * pow(1. - a, 1.6) * pow(f, 2.2) * smoothstep(0., 0.04, a)), 1.); }',
  }));
  const beam = new THREE.Mesh(beamG, beamM); beam.userData.noAO = true; beam.frustumCulled = false;

  let spin = 0;
  return {
    group, search, beam, searchMount,
    update: (dt, t, o) => {
      spin += (o.speed * dt) / 0.36;
      for (const w of wheels) w.rotation.x = spin;
      head.intensity = o.lights ? 70 : 0;
      headM.color.setScalar(o.lights ? 4 : 0.05); tailM.color.setRGB(o.lights ? (o.brake ? 3 : 1.4) : 0.05, o.lights ? 0.25 : 0.01, o.lights ? 0.25 : 0.01);
      brake.visible = o.brake && o.lights;
      // strobe: a double flash left, a double flash right, about 2.5 times a second
      const ph = (t * 2.5) % 1, flash = (a: number) => (ph > a && ph < a + 0.07) || (ph > a + 0.14 && ph < a + 0.21);
      const l = o.strobe && flash(0), r = o.strobe && flash(0.5);
      barL.color.setScalar(l ? 9 : 0.08); barR.color.setScalar(r ? 9 : 0.08);
      strobe.intensity = l || r ? 90 : 0;
      strobe.position.x = l ? -0.5 : 0.5;
      beamM.uniforms.uK.value = search.intensity > 0 ? 0.11 : 0;
      beam.visible = search.intensity > 0;
      beam.position.copy(search.position); beam.lookAt(search.target.position);
    },
    dispose: () => owned.forEach((d) => d.dispose()),
  };
}
