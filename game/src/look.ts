// PBR materials and the colour grade, slimmed from tokenblaster.lol src/lib/visuals/look.ts: only the texture sets the
// city uses ship with the game (Poly Haven, CC0), loaded from the game's own folder.
import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

export type LookTex = 'concrete_floor_02' | 'large_floor_tiles_02';
export type Look = {
  material: (id: LookTex, repeat: [number, number], tint: string, metal?: number) => THREE.MeshStandardMaterial;
  env: THREE.Texture | null;
  dispose: () => void;
};
export type Grade = { shadow: [number, number, number]; high: [number, number, number]; sat: number; contrast: number; vignette: number };

export async function loadLook(renderer: THREE.WebGLRenderer, base: string): Promise<Look> {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const tl = new THREE.TextureLoader();
  const load = (url: string, srgb: boolean) => new Promise<THREE.Texture | null>((ok) => tl.load(url, (t) => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso; if (srgb) t.colorSpace = THREE.SRGBColorSpace; ok(t); }, undefined, () => ok(null)));
  const sets = new Map<LookTex, (THREE.Texture | null)[]>();
  await Promise.all((['concrete_floor_02', 'large_floor_tiles_02'] as LookTex[]).map(async (id) => sets.set(id, await Promise.all([load(`${base}${id}/diff.webp`, true), load(`${base}${id}/nor.webp`, false), load(`${base}${id}/rough.webp`, false)]))));
  const made: THREE.Texture[] = [];
  const c = (t: THREE.Texture | null, repeat: [number, number]) => { if (!t) return null; const k = t.clone(); k.repeat.set(repeat[0], repeat[1]); k.needsUpdate = true; made.push(k); return k; };
  return {
    env: null,
    material: (id, repeat, tint, metal = 0.05) => {
      const [map, normalMap, roughnessMap] = sets.get(id) || [null, null, null];
      return new THREE.MeshStandardMaterial({ map: c(map, repeat), normalMap: c(normalMap, repeat), roughnessMap: c(roughnessMap, repeat), color: tint, metalness: metal, normalScale: new THREE.Vector2(1.6, 1.6) });
    },
    dispose: () => made.forEach((t) => t.dispose()),
  };
}

/** Colour grade + vignette + film grain, run after tone mapping (in display-referred space). */
export function makeGradePass() {
  const pass = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uShadow: { value: new THREE.Vector3(1, 1, 1) }, uHigh: { value: new THREE.Vector3(1, 1, 1) }, uSat: { value: 1 }, uContrast: { value: 1 }, uVignette: { value: 0.5 }, uTime: { value: 0 }, uAberr: { value: 0.0012 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `
      uniform sampler2D tDiffuse; uniform vec3 uShadow; uniform vec3 uHigh;
      uniform float uSat, uContrast, uVignette, uTime, uAberr;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){
        vec2 d = vUv - 0.5;
        float r2 = dot(d, d);
        vec2 off = d * r2 * uAberr * 8.0;
        vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c *= mix(uShadow, uHigh, smoothstep(0.1, 0.8, l));
        c = mix(vec3(l), c, uSat);
        c = (c - 0.5) * uContrast + 0.5;
        c *= 1.0 - uVignette * smoothstep(0.18, 0.62, r2 * 2.2);
        c += (hash(vUv * 1024.0) - 0.5) * 0.035;
        gl_FragColor = vec4(max(c, 0.0), 1.0);
      }`,
  });
  const u = pass.uniforms as Record<string, { value: unknown }>;
  return {
    pass,
    apply: (g: Grade) => { (u.uShadow.value as THREE.Vector3).set(...g.shadow); (u.uHigh.value as THREE.Vector3).set(...g.high); u.uSat.value = g.sat; u.uContrast.value = g.contrast; u.uVignette.value = g.vignette; },
    tick: (t: number) => { u.uTime.value = t % 10; },
  };
}
