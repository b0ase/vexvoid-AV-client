/**
 * MUSIC: VexVoid's own tracks playing under the game, ON by default (owner, 16 Nov: "we want the music on by default
 * when the game starts"). The tracks stream through the game's sound bus, so REC records them with the siren and the
 * can. Browsers may hold sound back until the player does something: then it starts on the first key, click or
 * pointer lock. M (or the API) turns it off and on; the choice is kept per viewer (localStorage), so a player who
 * turned it off is not blasted next time.
 */
import { MUSIC_BASE, PLAYLIST } from './playlist';

export type Track = { title: string; url: string };
export type MusicState = { on: boolean; playing: boolean; title: string; index: number; tracks: number; waiting: boolean; held?: boolean };
type Bus = { ctx: AudioContext; out: GainNode };

const KEY = 'vx-game-music';
const pref = (): boolean => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
const keep = (on: boolean) => { try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private window: this session only */ } };

export function makeMusic(o: { bus: () => Bus | null; tracks?: Track[]; onTrack?: (t: Track) => void }) {
  const list: Track[] = o.tracks && o.tracks.length ? o.tracks : PLAYLIST.map(([title, f]) => ({ title, url: MUSIC_BASE + f }));
  // shuffled once, then in order round the list (no repeat until every track has played)
  const order = list.map((_, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  let on = pref(), pos = 0, el: HTMLAudioElement | null = null, gain: GainNode | null = null, waiting = false, dead = false, fails = 0, held = false;
  const cur = () => list[order[pos % order.length]];

  const wire = () => {
    if (el) return el;
    const b = o.bus(); el = new Audio(); el.crossOrigin = 'anonymous'; el.preload = 'auto';
    if (b) { gain = b.ctx.createGain(); gain.gain.value = 0.6; b.ctx.createMediaElementSource(el).connect(gain); gain.connect(b.out); } else el.volume = 0.6;
    el.addEventListener('ended', () => next());
    el.addEventListener('error', () => { if (++fails < order.length) next(); });   // a missing file: the next one
    el.addEventListener('playing', () => { fails = 0; waiting = false; });
    return el;
  };
  // the first thing the player does lets sound start where the browser held it back
  const kick = () => { if (dead || !on || held) return; const b = o.bus(); if (b && b.ctx.state !== 'running') void b.ctx.resume(); if (el && el.paused) void el.play().catch(() => {}); };
  const evs = ['keydown', 'pointerdown', 'mousedown', 'touchstart'];
  for (const e of evs) window.addEventListener(e, kick, true);
  document.addEventListener('pointerlockchange', kick);

  const start = () => {
    if (dead || !on || held) return;
    const a = wire(), t = cur();
    if (a.src !== t.url) { a.src = t.url; o.onTrack?.(t); }
    const b = o.bus(); if (b && b.ctx.state !== 'running') void b.ctx.resume().catch(() => {});
    a.play().then(() => { waiting = false; }).catch(() => { waiting = true; });   // held back: kick() starts it
    if (b && b.ctx.state !== 'running') waiting = true;
  };
  const next = () => { pos++; if (el) el.src = ''; if (on) start(); };
  const set = (v: boolean) => {
    on = v; keep(v);
    if (v) start(); else if (el) el.pause();
  };
  start();
  const state = (): MusicState => ({ on, playing: !!el && !el.paused && !waiting && !held, title: cur().title, index: order[pos % order.length], tracks: list.length, waiting, held });
  return {
    state,
    toggle: () => { set(!on); return state(); },
    set: (v: boolean) => { set(v); return state(); },
    /** The phone plays the soundtrack: while it is dead (the canal) the music holds, without changing the player's choice. */
    hold: (v: boolean) => { if (held === v) return state(); held = v; if (v) { if (el) el.pause(); } else start(); return state(); },
    next: () => { next(); return state(); },
    stop: () => {
      dead = true;
      for (const e of evs) window.removeEventListener(e, kick, true);
      document.removeEventListener('pointerlockchange', kick);
      if (el) { el.pause(); el.removeAttribute('src'); el.load(); }
      try { gain?.disconnect(); } catch { /* gone */ }
    },
  };
}
