/**
 * SOAKED (the canal, GAME-DESIGN.md 4): what shows when Vex has been in the water. Drops falling from him (the hem of
 * the jacket, the cuffs, the hood, his hands), more the wetter he is, and the marks he leaves: dark wet footprints
 * where his feet come down and drip spots under him when he stands, fading as they dry. The cloth itself goes darker
 * and shinier in writer.ts (wet()). A splash when he goes in, rings on the water where he swims.
 *
 *   const w = makeWet(scene); w.update(dt, { wet, from: [...points], feet: [...], moving, ground, swimming })
 */
import * as THREE from 'three';

const DROPS = 220, MARKS = 160, SPLASH = 90;

export function makeWet(scene: THREE.Scene) {
  // drops: points that fall under gravity from the body and vanish on the ground
  const dPos = new Float32Array(DROPS * 3), dVel = new Float32Array(DROPS * 3), dLife = new Float32Array(DROPS), dGround = new Float32Array(DROPS);
  const dGeo = new THREE.BufferGeometry(); dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
  const dot = (() => { const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d')!; const r = g.createRadialGradient(16, 16, 0, 16, 16, 16); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.4, 'rgba(230,236,245,0.7)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 32, 32); const t = new THREE.CanvasTexture(c); return t; })();
  const dMat = new THREE.PointsMaterial({ size: 0.034, map: dot, transparent: true, depthWrite: false, color: '#cfd6df', opacity: 0.85, sizeAttenuation: true });
  const drops = new THREE.Points(dGeo, dMat); drops.frustumCulled = false; drops.userData.noAO = true; scene.add(drops);
  for (let i = 0; i < DROPS; i++) { dLife[i] = 0; dPos[i * 3 + 1] = -999; }
  // the splash: the same, thrown up and out once
  const sPos = new Float32Array(SPLASH * 3), sVel = new Float32Array(SPLASH * 3), sLife = new Float32Array(SPLASH);
  const sGeo = new THREE.BufferGeometry(); sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const sMat = new THREE.PointsMaterial({ size: 0.05, map: dot, transparent: true, depthWrite: false, color: '#e6ebf2', opacity: 0.9 });
  const splashes = new THREE.Points(sGeo, sMat); splashes.frustumCulled = false; splashes.userData.noAO = true; scene.add(splashes);
  for (let i = 0; i < SPLASH; i++) sPos[i * 3 + 1] = -999;
  // marks on the ground: dark, glossy, flat; a print (an oval) or a spot (a disc); each fades as it dries
  const mGeo = new THREE.CircleGeometry(0.5, 14); mGeo.rotateX(-Math.PI / 2);
  const mMat = new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.08, metalness: 0, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const marks = new THREE.InstancedMesh(mGeo, mMat, MARKS); marks.frustumCulled = false; marks.userData.noAO = true; marks.count = 0;
  const mAge = new Float32Array(MARKS).fill(1e9), mLive = new Float32Array(MARKS), mInfo: { x: number; y: number; z: number; sx: number; sz: number; ry: number }[] = [];
  const opac = new THREE.InstancedBufferAttribute(new Float32Array(MARKS), 1); mGeo.setAttribute('mOp', opac);
  mMat.onBeforeCompile = (s) => {
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nattribute float mOp;\nvarying float vOp;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOp = mOp;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vOp;').replace('#include <dithering_fragment>', '#include <dithering_fragment>\ngl_FragColor.a *= vOp;');
  };
  scene.add(marks);
  // rings on the water round the swimmer
  const rGeo = new THREE.RingGeometry(0.975, 1, 56); rGeo.rotateX(-Math.PI / 2);
  const rings: THREE.Mesh[] = [];
  for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(rGeo, new THREE.MeshBasicMaterial({ color: '#d0d6de', transparent: true, opacity: 0, depthWrite: false })); m.visible = false; m.userData.noAO = true; m.userData.age = 9; scene.add(m); rings.push(m); }
  let next = 0, nextM = 0, nextR = 0, acc = 0, spotAcc = 0, ringAcc = 0, dripsLive = 0, marksLive = 0;
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), Sv = new THREE.Vector3(), Pv = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
  const LIFE = 28;   // seconds a mark stays (fades out over it)
  const mark = (x: number, y: number, z: number, sx: number, sz: number, ry: number) => {
    const i = nextM; nextM = (nextM + 1) % MARKS; mAge[i] = 0; mLive[i] = 1;
    mInfo[i] = { x, y, z, sx, sz, ry };
    M.compose(Pv.set(x, y + 0.006, z), Q.setFromAxisAngle(UP, ry), Sv.set(sx, 1, sz)); marks.setMatrixAt(i, M); marks.instanceMatrix.needsUpdate = true;
    marks.count = Math.max(marks.count, i + 1);
  };
  return {
    /** dt; wet 0..1; from: points on the body drops fall from; feet: soles that just came down (x, y, z, heading);
     *  ground(x, z): the ground under a drop; swimming: rings instead of drops. */
    update: (dt: number, o: { wet: number; from: THREE.Vector3[]; feet: { x: number; y: number; z: number; h: number }[]; standing: boolean; ground: (x: number, z: number, y: number) => number; swimming: boolean; at: THREE.Vector3; water: number }) => {
      // new drops: up to ~40 a second soaked, none dry
      if (!o.swimming && o.wet > 0.04 && o.from.length) {
        acc += dt * 46 * o.wet * o.wet;
        while (acc >= 1) {
          acc -= 1; const i = next; next = (next + 1) % DROPS;
          const p = o.from[Math.floor(Math.random() * o.from.length)];
          dPos[i * 3] = p.x + (Math.random() - 0.5) * 0.06; dPos[i * 3 + 1] = p.y; dPos[i * 3 + 2] = p.z + (Math.random() - 0.5) * 0.06;
          dVel[i * 3] = (Math.random() - 0.5) * 0.15; dVel[i * 3 + 1] = -0.3 - Math.random() * 0.5; dVel[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
          dLife[i] = 2.5; const g = o.ground(p.x, p.z, p.y); dGround[i] = Number.isNaN(g) ? p.y - 4 : g;
        }
        // standing still, the drops gather in spots under him
        if (o.standing) { spotAcc += dt * 2.2 * o.wet; while (spotAcc >= 1) { spotAcc -= 1; const p = o.from[Math.floor(Math.random() * o.from.length)], g = o.ground(p.x, p.z, p.y); if (!Number.isNaN(g)) { const s = 0.05 + Math.random() * 0.07; mark(p.x, g, p.z, s, s, 0); } } }
      }
      dripsLive = 0;
      for (let i = 0; i < DROPS; i++) {
        if (dLife[i] <= 0) continue;
        dLife[i] -= dt; dVel[i * 3 + 1] -= 9.8 * dt;
        dPos[i * 3] += dVel[i * 3] * dt; dPos[i * 3 + 1] += dVel[i * 3 + 1] * dt; dPos[i * 3 + 2] += dVel[i * 3 + 2] * dt;
        if (dPos[i * 3 + 1] <= dGround[i] || dLife[i] <= 0) { dLife[i] = 0; dPos[i * 3 + 1] = -999; } else dripsLive++;
      }
      (dGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      // footprints: a wet sole leaves an oval where it comes down (the wetter, the darker; they fade as they dry)
      if (!o.swimming && o.wet > 0.12) for (const f of o.feet) mark(f.x, f.y, f.z, 0.11, 0.27, f.h);
      marksLive = 0;
      for (let i = 0; i < marks.count; i++) {
        mAge[i] += dt; const k = Math.max(0, 1 - mAge[i] / LIFE) * mLive[i];
        (opac.array as Float32Array)[i] = k * 0.8; if (k > 0) marksLive++;
      }
      opac.needsUpdate = true;
      // the splash
      for (let i = 0; i < SPLASH; i++) {
        if (sLife[i] <= 0) continue;
        sLife[i] -= dt; sVel[i * 3 + 1] -= 9.8 * dt;
        sPos[i * 3] += sVel[i * 3] * dt; sPos[i * 3 + 1] += sVel[i * 3 + 1] * dt; sPos[i * 3 + 2] += sVel[i * 3 + 2] * dt;
        if (sPos[i * 3 + 1] < o.water || sLife[i] <= 0) { sLife[i] = 0; sPos[i * 3 + 1] = -999; }
      }
      (sGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      // rings round a swimmer
      if (o.swimming) { ringAcc += dt; if (ringAcc > 0.55) { ringAcc = 0; const r = rings[nextR]; nextR = (nextR + 1) % rings.length; r.position.set(o.at.x, o.water + 0.01, o.at.z); r.userData.age = 0; r.visible = true; } }
      for (const r of rings) { const a = (r.userData.age += dt); if (a > 2.2) { r.visible = false; continue; } const s = 0.4 + a * 0.65; r.scale.set(s, 1, s); (r.material as THREE.MeshBasicMaterial).opacity = 0.13 * Math.max(0, 1 - a / 2.2); }
    },
    /** A splash where he went in (x, z on the water at y). */
    splash: (x: number, y: number, z: number, k = 1) => {
      for (let i = 0; i < SPLASH; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * 0.5, up = 2 + Math.random() * 3.5 * k;
        sPos[i * 3] = x + Math.cos(a) * r; sPos[i * 3 + 1] = y + 0.05; sPos[i * 3 + 2] = z + Math.sin(a) * r;
        sVel[i * 3] = Math.cos(a) * (0.5 + Math.random() * 1.6); sVel[i * 3 + 1] = up; sVel[i * 3 + 2] = Math.sin(a) * (0.5 + Math.random() * 1.6); sLife[i] = 1.6;
      }
      for (let k2 = 0; k2 < 3; k2++) { const r = rings[nextR]; nextR = (nextR + 1) % rings.length; r.position.set(x, y + 0.01, z); r.userData.age = -k2 * 0.25; r.visible = true; }
    },
    /** For tests: drops in the air now, marks still visible. */
    stats: () => ({ drops: dripsLive, marks: marksLive }),
    dispose: () => { for (const o of [drops, splashes, marks, ...rings]) scene.remove(o); dGeo.dispose(); sGeo.dispose(); dMat.dispose(); sMat.dispose(); mGeo.dispose(); mMat.dispose(); rGeo.dispose(); dot.dispose(); for (const r of rings) (r.material as THREE.Material).dispose(); },
  };
}
