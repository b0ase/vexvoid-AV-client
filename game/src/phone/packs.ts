/**
 * CONTENT PACKS (Pay to Develop, phase 1): new missions as data, never engine code. A pack is one JSON file in
 * game/content/packs/<id>.json (scripts/pack-index.mjs writes the list the bundle takes in, as make.mjs does for the
 * sketches; scripts/pack-validate.mjs checks it):
 *
 *   { "v": 1, "id": "p-<job>", "job": "<job-id>", "credit": { "name": "...", "show": true }, "missions": [ Mission ] }
 *
 * A pack can only ADD: a mission whose id is already taken (a starter, another pack's) is left out, so nothing built in
 * is ever changed or removed. Ids start with the pack's id. A mission with no `after` comes after the last mission in
 * the list so far (the starter line ends at HEAVEN), so the packs arrive one at a time in merge order and a new player
 * is not flooded. The credit ("built by <name>") goes on each of the pack's missions and shows on its phone card.
 * The game checks only what it needs to run a mission safely (the contact, the objective types); the full rules
 * (places, walls, sketches, bounds, text) are pack-validate's.
 */
import type { Mission, Objective } from './missions';

export type PackCredit = { name: string; show?: boolean };
export type Pack = { v: 1; id: string; job?: string; credit?: PackCredit; missions: Mission[] };

const TYPES: Objective['type'][] = ['reach', 'paint', 'buff', 'photo', 'escape', 'hide'];

/** Why the game can not run this mission (null: it can). */
const unfit = (m: Mission, pack: Pack, taken: (id: string) => boolean, contacts: Record<string, unknown>) => {
  if (!m || typeof m.id !== 'string' || !m.id.startsWith(pack.id + '-')) return `${m && m.id}: a pack's mission ids start with "${pack.id}-"`;
  if (taken(m.id)) return `${m.id}: that id is taken (packs only add missions)`;
  if (typeof m.from !== 'string' || !Object.prototype.hasOwnProperty.call(contacts, m.from)) return `${m.id}: no contact "${m.from}"`;
  if (!Array.isArray(m.objectives) || !m.objectives.length || m.objectives.some((o) => !o || !TYPES.includes(o.type))) return `${m.id}: objectives`;
  if (!Array.isArray(m.intro) || !Array.isArray(m.done)) return `${m.id}: intro and done lines`;
  return null;
};

/** Put a pack's missions on the end of `list` (in place). Loading a pack again replaces the missions it added before
 *  (never anything else). Returns the ids added and the ones left out, with why. contacts: who can send a mission. */
export function installPack(list: Mission[], pack: Pack, contacts: Record<string, unknown>) {
  const added: string[] = [], skipped: string[] = [];
  if (!pack || pack.v !== 1 || typeof pack.id !== 'string' || !/^p-[a-z0-9-]+$/.test(pack.id) || !Array.isArray(pack.missions)) return { added, skipped: ['not a v1 pack with an id (p-...) and missions'] };
  for (let i = list.length - 1; i >= 0; i--) if (list[i].pack === pack.id) list.splice(i, 1);
  const credit = pack.credit && pack.credit.show !== false && typeof pack.credit.name === 'string' && pack.credit.name.trim() ? pack.credit.name.trim().toUpperCase().slice(0, 32) : undefined;
  for (const src of pack.missions) {
    const why = unfit(src, pack, (id) => list.some((x) => x.id === id), contacts);
    if (why) { skipped.push(why); continue; }
    const m: Mission = { ...JSON.parse(JSON.stringify(src)), pack: pack.id, credit };
    // no `after` (or only ids nobody has): after the last mission so far
    const after = (Array.isArray(m.after) ? m.after : []).filter((a) => list.some((x) => x.id === a));
    m.after = after.length ? after : list.length ? [list[list.length - 1].id] : [];
    m.delay = Number.isFinite(m.delay) ? Math.max(0, Math.min(60, m.delay)) : 6;
    list.push(m); added.push(m.id);
  }
  return { added, skipped };
}

/** Take a pack's missions back out of `list` (only that pack's). Returns how many went. */
export function removePack(list: Mission[], id: string) {
  let n = 0; for (let i = list.length - 1; i >= 0; i--) if (list[i].pack && list[i].pack === id) { list.splice(i, 1); n++; }
  return n;
}

/** The starters with the installed packs merged in, in order. */
export function mergePacks(base: Mission[], packs: Pack[], contacts: Record<string, unknown>) {
  const list = base.slice(), report: { pack: string; added: string[]; skipped: string[] }[] = [];
  for (const p of packs) { const r = installPack(list, p, contacts); report.push({ pack: p && p.id, ...r }); }
  return { list, report };
}
