/**
 * Vex's PHONE, part 1: the CAMERA. (The phone becomes the game's hub later: camera, gallery, messages and calls from the
 * crew, map, music, bWalletX. Each app is its own module here with a small API; main.ts only binds keys and the dock.)
 *
 * take(): a clean picture of the game (./photos.ts writes it as a PNG and keeps it in the photo store), with a shutter:
 * a quick white flash over the view, a soft click through the game's sound bus, the photo small in a corner for a moment,
 * "PHOTO SAVED · [L] GALLERY". The picture is the 3D view only (the HUD is page, not picture); the few HUD things that
 * are in the 3D scene (reticle, aim dot, line preview, sketch ghost) are passed in as `hide` and are hidden for the shot.
 * It is rendered once at twice the view's size (at least the canvas, at most 3840 px wide) and copied out at once.
 * modeHint(on): the one line photo mode shows (photo mode itself, time standing still and the orbit, lives in the loop).
 *
 *   const cam = makeCamera({ host, renderer, composer, render, resize, view, hide, sound, place, note, pulse, store, onSaved })
 *   await cam.take({ width })   ·   cam.count()   ·   cam.modeHint(true)   ·   cam.dispose()
 */
import type * as THREE from 'three';
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { keyed } from '../hud';
import { encodePng, thumbOf, shutter, type Photo, type PhotoStore } from './photos';

export type PhotoTaken = Photo & { note?: string };
type Opts = {
  host: HTMLElement; renderer: THREE.WebGLRenderer; composer: EffectComposer;
  /** Draw the scene once as it stands (no time passes). */
  render: () => void;
  /** Anything else sized to the view (the street reflection). */
  resize: (w: number, h: number) => void;
  /** The view's size in CSS px. */
  view: () => { w: number; h: number };
  /** The HUD things that are in the 3D scene: hidden for the shot. */
  hide: () => THREE.Object3D[];
  sound: () => { ctx: AudioContext; out: AudioNode } | null;
  /** Where the writer is (a place id), kept with the photo. */
  place: () => string;
  note: (s: string, secs?: number) => void;
  pulse: () => void;
  store: PhotoStore;
  onSaved?: (p: PhotoTaken) => void;
};
const UI = '"SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif';

export function makeCamera(o: Opts) {
  const { host, renderer: r, composer: comp } = o;
  let n = 0, last = 0, developing: Promise<unknown> = Promise.resolve(), toastT = 0;
  void o.store.list().then((l) => { n = l.length; }).catch(() => {});
  // the shutter: a quick white flash over the view (never in the picture: the picture is taken first)
  const flash = document.createElement('div'); flash.dataset.vxHud = 'flash';
  flash.style.cssText = 'position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none;z-index:6';
  // the photo just kept, small, top left for a moment
  const toast = document.createElement('div'); toast.dataset.vxHud = 'photo-toast';
  toast.style.cssText = `position:absolute;left:16px;top:16px;width:clamp(120px,15vw,184px);padding:5px 5px 7px;background:rgba(8,8,10,.72);border:1px solid rgba(255,255,255,.28);border-radius:8px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font:700 9.5px/1.2 ${UI};letter-spacing:.2em;pointer-events:none;z-index:3;opacity:0;transform:translateY(-6px);transition:opacity .25s ease,transform .25s ease;box-shadow:0 10px 30px rgba(0,0,0,.45);box-sizing:border-box;overflow:hidden`;
  toast.innerHTML = '<img alt="" style="display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:4px;background:#000"><div style="margin-top:7px;display:flex;justify-content:space-between;gap:6px;white-space:nowrap"><span style="overflow:hidden;text-overflow:ellipsis">PHOTO SAVED</span><span style="opacity:.6;flex:none">L GALLERY</span></div>';
  // photo mode's one line (faded after a moment)
  const hint = document.createElement('div'); hint.dataset.vxHud = 'photo-mode';
  hint.style.cssText = `position:absolute;left:50%;top:14px;transform:translateX(-50%);display:none;align-items:center;gap:7px;padding:7px 12px;background:rgba(8,8,10,.55);border:1px solid rgba(255,255,255,.2);border-radius:9px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font:700 10.5px/1 ${UI};letter-spacing:.18em;white-space:nowrap;pointer-events:none;z-index:5;transition:opacity .6s ease;max-width:calc(100% - 24px);overflow:hidden`;
  hint.innerHTML = keyed('PHOTO MODE · [Q] SHOOT · DRAG OR [W][A][S][D] ORBIT · WHEEL ZOOM · [O] DONE');
  host.append(flash, toast, hint);
  const showToast = (b: Blob, sub?: string) => {
    const im = toast.querySelector('img')!, u = URL.createObjectURL(b); im.onload = () => URL.revokeObjectURL(u); im.src = u;
    (toast.querySelector('span') as HTMLElement).textContent = sub ? 'SAVED · ' + sub.replace(/^IN /, '').split(' · ')[0] : 'PHOTO SAVED';   // the reason is in the note line
    toast.style.opacity = '1'; toast.style.transform = 'none'; clearTimeout(toastT);
    toastT = window.setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(-6px)'; }, 2600);
  };
  /** The picture, clean, `want` px wide (default twice the view, at least the canvas, at most 3840). */
  const capture = (want?: number) => {
    const canvas = r.domElement, { w, h } = o.view(), pr = r.getPixelRatio(), cw = canvas.width, ch = canvas.height;
    const most = Math.min(3840, r.capabilities.maxTextureSize || 4096);
    const W = Math.round(Math.max(64, Math.min(most, want || Math.max(cw, w * 2)))), H = Math.max(36, Math.round(W * h / w));
    const hid = o.hide().filter((x) => x.visible); for (const x of hid) x.visible = false;
    const big = W !== cw || H !== ch;
    try {
      if (big) { r.setPixelRatio(1); r.setSize(W, H, false); comp.setPixelRatio(1); comp.setSize(W, H); o.resize(W, H); }
      o.render();
      const out = document.createElement('canvas'); out.width = W; out.height = H;
      out.getContext('2d', { willReadFrequently: true })!.drawImage(canvas, 0, 0, W, H);
      return out;
    } finally {
      if (big) { r.setPixelRatio(pr); r.setSize(w, h, false); comp.setPixelRatio(pr); comp.setSize(w, h); o.resize(w, h); }
      for (const x of hid) x.visible = true;
      o.render();   // the view again at once (a resized canvas is blank until drawn)
    }
  };
  /** Take a photo now. The moment is caught at once; developing (PNG) and keeping it follow, one photo after another. */
  const take = (opt: { width?: number } = {}): Promise<PhotoTaken> => {
    const t0 = Math.max(Date.now(), last + 1); last = t0;
    const shot = capture(opt.width), place = o.place();
    flash.style.transition = 'none'; flash.style.opacity = '.8'; void flash.offsetWidth; flash.style.transition = 'opacity .4s cubic-bezier(.2,.7,.3,1)'; flash.style.opacity = '0';
    shutter(o.sound()); o.pulse();
    o.note('PHOTO · DEVELOPING…', 6);
    const job = developing.then(async () => {
      const [png, small] = await Promise.all([encodePng(shot, { Software: 'VexVoid the Game', 'Creation Time': new Date(t0).toISOString() }), encodePng(thumbOf(shot))]);
      const meta = { id: String(t0), t: t0, w: shot.width, h: shot.height, bytes: png.size, place };
      const kept = await o.store.save(meta, png, small);
      if (kept.id) meta.id = kept.id;
      n++;
      const p: PhotoTaken = { ...meta, where: kept.where, path: kept.path, note: kept.note };
      o.note(`PHOTO SAVED${kept.note ? ' · ' + kept.note : ''} · [L] GALLERY`, 2.8); showToast(small, kept.note);
      o.onSaved?.(p);
      return p;
    });
    developing = job.catch((e) => { o.note('PHOTO NOT SAVED: ' + String((e as Error).message || e).toUpperCase(), 3.5); });
    return job;
  };
  let hintT = 0;
  return {
    take,
    store: o.store,
    /** How many photos the player has (for the dock's badge). */
    count: () => n,
    setCount: (v: number) => { n = Math.max(0, v); },
    /** Photo mode's line on or off; tick(t) fades it after a moment. */
    modeHint: (on: boolean, t = 0) => { hint.style.display = on ? 'flex' : 'none'; hint.style.opacity = '1'; hintT = t + 3.5; },
    tick: (t: number) => { if (hint.style.display !== 'none' && t > hintT && hint.style.opacity !== '0.35') hint.style.opacity = '0.35'; },
    dispose: () => { clearTimeout(toastT); flash.remove(); toast.remove(); hint.remove(); },
  };
}
