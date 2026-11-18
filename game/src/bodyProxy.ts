/**
 * The writer's trunk as a shape the arms can be checked against (owner, 18 Nov: "VEX'S ARMS shouldn't travel through
 * his body"). Built once from the model itself, in the pose it was bound in: every vertex that rides on the hips or a
 * spine bone (jacket, seat, pack, straps, the cans on the pack) goes into a table per bone of how far the surface is
 * from that bone's axis, at each height and each angle round it. The same table serves the measurement (how deep do
 * the arm's own vertices go into the trunk) and the fix (keep the arm's bones outside it).
 *
 *   const body = bodyProxy(meshes, bones, scale); body.prep(); body.depth(worldPoint) -> metres inside (and the way out)
 */
import * as THREE from 'three';

export type ArmPart = 'upper' | 'fore' | 'hand';
export type ArmReport = { max: number; worst: string; parts: Record<string, { max: number; n1: number; n: number }>; at?: string; tabs?: string };
const TORSO = new Set(['Hips', 'Spine', 'Spine1', 'Spine2']);
const short = (n: string) => n.replace(/^mixamorig:?/, '');
const NA = 48, DY = 0.012;   // angle bins round the trunk; height bins (m)

export function bodyProxy(meshes: THREE.SkinnedMesh[], bones: THREE.Bone[], k: number) {
  // a table per bone of the surface's distance from a centre line (cx, cz in the bone's frame), by height and angle
  type Tab = { bone: THREE.Bone; cx: number; cz: number; y0: number; ny: number; r: Float32Array; inv: THREE.Matrix4; kind: string };
  const skel = meshes[0]?.skeleton;
  const bindAt = (b: THREE.Bone) => new THREE.Vector3().setFromMatrixPosition(skel.boneInverses[bones.indexOf(b)].clone().invert());
  const per = new Map<THREE.Bone, number[]>(), packPts = new Map<THREE.Bone, number[]>();
  const arms: { m: THREE.SkinnedMesh; i: number; side: 0 | 1; part: ArmPart; bone: string }[] = [];
  const v = new THREE.Vector3(), q = new THREE.Vector3();
  const B = (s: string) => bones.find((b) => short(b.name) === s)!;
  const seg = (['Left', 'Right'] as const).map((s) => ({ a: bindAt(B(s + 'Arm')), b: bindAt(B(s + 'ForeArm')) }));
  for (const m of meshes) {
    if (/Hood|String/.test(m.name)) continue;
    const isPack = /Pack/.test(m.name);
    const si = m.geometry.attributes.skinIndex, sw = m.geometry.attributes.skinWeight, pos = m.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let bi = si.getX(i), bw = sw.getX(i);
      for (let c = 1; c < 4; c++) { const w = sw.getComponent(i, c); if (w > bw) { bw = w; bi = si.getComponent(i, c); } }
      const bone = bones[bi]; if (!bone) continue;
      const n = short(bone.name);
      v.fromBufferAttribute(pos, i);
      if (TORSO.has(n)) {
        q.copy(v).applyMatrix4(skel.boneInverses[bi]).multiplyScalar(k);
        const to = isPack ? packPts : per;
        (to.get(bone) || to.set(bone, []).get(bone)!).push(q.x, q.y, q.z);
        continue;
      }
      if (isPack) continue;
      const am = /^(Left|Right)(Arm|ForeArm|Hand)/.exec(n); if (!am) continue;
      const side = am[1] === 'Left' ? 0 : 1, part: ArmPart = am[2] === 'Arm' ? 'upper' : am[2] === 'ForeArm' ? 'fore' : 'hand';
      // the top of the sleeve is sewn to the jacket and the shoulder joint sits in the trunk: the arm from halfway down counts
      if (part === 'upper') { const s = seg[side], ab = s.b.clone().sub(s.a); if (v.clone().sub(s.a).dot(ab) / ab.lengthSq() < 0.5) continue; }
      arms.push({ m, i, side, part, bone: n });
    }
  }
  const build = (bone: THREE.Bone, p: number[], cx: number, cz: number, kind: string): Tab => {
    let lo = Infinity, hi = -Infinity; for (let j = 1; j < p.length; j += 3) { lo = Math.min(lo, p[j]); hi = Math.max(hi, p[j]); }
    const ny = Math.max(1, Math.ceil((hi - lo) / DY) + 1), r = new Float32Array(ny * NA).fill(-1);
    for (let j = 0; j < p.length; j += 3) {
      const x = p[j] - cx, z = p[j + 2] - cz, yi = Math.round((p[j + 1] - lo) / DY), ai = Math.floor(((Math.atan2(x, z) + Math.PI) / (2 * Math.PI)) * NA) % NA;
      r[yi * NA + ai] = Math.max(r[yi * NA + ai], Math.hypot(x, z));
    }
    // fill the bins no vertex fell in: round each ring, then from the rings above and below
    for (let y = 0; y < ny; y++) {
      const row = r.subarray(y * NA, y * NA + NA), known = [...row.keys()].filter((a) => row[a] >= 0);
      if (!known.length) continue;
      for (let a = 0; a < NA; a++) if (row[a] < 0) {
        let p0 = known[0], p1 = known[0], d0 = 1e9, d1 = 1e9;
        for (const kk of known) { const db = (a - kk + NA) % NA, df = (kk - a + NA) % NA; if (db < d0) { d0 = db; p0 = kk; } if (df < d1) { d1 = df; p1 = kk; } }
        row[a] = row[p0] + (row[p1] - row[p0]) * (d0 / Math.max(1, d0 + d1));
      }
    }
    for (let y = 0; y < ny; y++) if (r[y * NA] < 0) { let s = 1; while (s < ny && (y - s < 0 || r[(y - s) * NA] < 0) && (y + s >= ny || r[(y + s) * NA] < 0)) s++; const src = y - s >= 0 && r[(y - s) * NA] >= 0 ? y - s : y + s; if (src >= 0 && src < ny) r.copyWithin(y * NA, src * NA, src * NA + NA); }
    return { bone, cx, cz, y0: lo, ny, r, inv: new THREE.Matrix4(), kind };
  };
  // the trunk round the spine first; then the pack: what lies on the jacket (straps, buckles) joins the trunk, the bag
  // itself gets a table of its own round its own middle (seen from the spine its side walls run almost straight out)
  const first = new Map<THREE.Bone, Tab>(); for (const [bone, p] of per) first.set(bone, build(bone, p, 0, 0, 'trunk'));
  const tabs: Tab[] = [];
  for (const [bone, p] of packPts) {
    const t = first.get(bone), bag: number[] = [], on: number[] = [];
    for (let j = 0; j < p.length; j += 3) {
      let inside = false;
      if (t) { const yf = (p[j + 1] - t.y0) / DY; if (yf >= -0.5 && yf <= t.ny - 0.5) inside = Math.hypot(p[j], p[j + 2]) < look(t, yf, ((Math.atan2(p[j], p[j + 2]) + Math.PI) / (2 * Math.PI)) * NA - 0.5) + 0.035; }
      // on the jacket: part of the trunk; behind the back: the bag; anything else (a strap over the shoulder top, where
      // the trunk table stops) is left out, or the bag's table would swell up round the shoulder and the arm's root
      if (inside) on.push(p[j], p[j + 1], p[j + 2]); else if (p[j + 2] < -0.07) bag.push(p[j], p[j + 1], p[j + 2]);
    }
    if (on.length) per.set(bone, [...(per.get(bone) || []), ...on]);
    if (bag.length > 30) { let cx = 0, cz = 0; for (let j = 0; j < bag.length; j += 3) { cx += bag[j]; cz += bag[j + 2]; } cx /= bag.length / 3; cz /= bag.length / 3; tabs.push(build(bone, bag, cx, cz, 'pack')); }
  }
  for (const [bone, p] of per) tabs.push(build(bone, p, 0, 0, 'trunk'));
  const loc = new THREE.Vector3();
  function look(t: Tab, yf: number, af: number) {
    const y0 = Math.max(0, Math.min(t.ny - 1, Math.floor(yf))), y1 = Math.min(t.ny - 1, y0 + 1), fy = Math.max(0, Math.min(1, yf - y0));
    const a0 = ((Math.floor(af) % NA) + NA) % NA, a1 = (a0 + 1) % NA, fa = af - Math.floor(af);
    const r0 = t.r[y0 * NA + a0] + (t.r[y0 * NA + a1] - t.r[y0 * NA + a0]) * fa, r1 = t.r[y1 * NA + a0] + (t.r[y1 * NA + a1] - t.r[y1 * NA + a0]) * fa;
    return r0 + (r1 - r0) * fy;
  }
  const out = { pen: 0, dir: new THREE.Vector3(), bone: '', loc: [0, 0, 0], r: 0 };
  const api = {
    arms, tabs,
    /** Call once a frame (after the pose is final) before depth(). */
    prep: () => { for (const t of tabs) { t.bone.updateMatrixWorld(true); t.inv.copy(t.bone.matrixWorld).invert(); } },
    /** How far (m) a world point is inside the trunk (negative: outside by that much), and the way out (world). */
    depth: (p: THREE.Vector3) => {
      out.pen = -Infinity;
      for (const t of tabs) {
        loc.copy(p).applyMatrix4(t.inv).multiplyScalar(k);
        const yf = (loc.y - t.y0) / DY; if (yf < -0.5 || yf > t.ny - 0.5) continue;
        const x = loc.x - t.cx, z = loc.z - t.cz, rho = Math.hypot(x, z), af = ((Math.atan2(x, z) + Math.PI) / (2 * Math.PI)) * NA - 0.5;
        const pen = look(t, yf, af) - rho;
        if (pen > out.pen) { out.pen = pen; out.bone = short(t.bone.name) + (t.kind === 'pack' ? ' pack' : ''); out.loc = [+loc.x.toFixed(3), +loc.y.toFixed(3), +loc.z.toFixed(3)]; out.r = +look(t, yf, af).toFixed(3); out.dir.set(x, 0, z).transformDirection(t.bone.matrixWorld); if (rho < 1e-4) out.dir.set(0, 0, 1).transformDirection(t.bone.matrixWorld); }
      }
      return out;
    },
    /** For tests: the arm vertices furthest from their hand bone (m), with their bind place and weights. */
    far: (side: 0 | 1) => {
      const hb = B(side ? 'RightHand' : 'LeftHand').getWorldPosition(new THREE.Vector3()); let best = 0, info = '';
      for (const a of arms) {
        if (a.side !== side || a.part !== 'hand') continue;
        a.m.getVertexPosition(a.i, v); v.applyMatrix4(a.m.matrixWorld); const d = v.distanceTo(hb);
        if (d > best) { best = d; const si = a.m.geometry.attributes.skinIndex, sw = a.m.geometry.attributes.skinWeight; info = `${a.m.name}#${a.i} bind ${q.fromBufferAttribute(a.m.geometry.attributes.position, a.i).multiplyScalar(k).toArray().map((x) => x.toFixed(3))} ` + [0, 1, 2, 3].map((c) => `${short(bones[si.getComponent(a.i, c)]?.name || '?')}:${sw.getComponent(a.i, c).toFixed(2)}`).join(' '); }
      }
      const hbI = skel.boneInverses[bones.indexOf(B(side ? 'RightHand' : 'LeftHand'))].clone().invert(), hp = new THREE.Vector3().setFromMatrixPosition(hbI).multiplyScalar(k);
      return { d: best, info: info + ` | hand bind at ${hp.toArray().map((x) => x.toFixed(3))} scale ${k}` };
    },
    /** The arm's own vertices (as skinned now) against the trunk: deepest per side and part, and how many are > 1 cm in. */
    measure: (): ArmReport => {
      api.prep();
      const parts: ArmReport['parts'] = {}; let max = 0, worst = '', at = '';
      for (const a of arms) {
        a.m.getVertexPosition(a.i, v); v.applyMatrix4(a.m.matrixWorld);
        const d = api.depth(v).pen, key = (a.side ? 'R.' : 'L.') + a.part, P = parts[key] || (parts[key] = { max: 0, n1: 0, n: 0 });
        P.n++; if (d > P.max) P.max = d; if (d > 0.01) P.n1++;
        if (d > max) { max = d; worst = key + ' ' + a.bone; at = `${a.m.name}#${a.i} bind ${new THREE.Vector3().fromBufferAttribute(a.m.geometry.attributes.position, a.i).multiplyScalar(k).toArray().map((x) => x.toFixed(3))} ${out.bone} local ${out.loc} r ${out.r} world ${v.toArray().map((x) => x.toFixed(2))}`; }
      }
      const bp = (n: string) => B(n).getWorldPosition(new THREE.Vector3()).toArray().map((x) => +x.toFixed(2)).join(',');
      at += ` | Hips ${bp('Hips')} Spine ${bp('Spine')} RHand ${bp('RightHand')} LHand ${bp('LeftHand')} RArm ${bp('RightArm')} LFoot ${bp('LeftFoot')} RFoot ${bp('RightFoot')} LLeg ${bp('LeftLeg')} Head ${bp('Head')}`;
      return { max, worst, parts, at, tabs: tabs.map((t) => `${short(t.bone.name)}${t.kind === 'pack' ? ' pack' : ''} y ${t.y0.toFixed(2)}..${(t.y0 + t.ny * DY).toFixed(2)} rmax ${Math.max(...t.r).toFixed(2)}`).join('; ') };
    },
  };
  return api;
}
