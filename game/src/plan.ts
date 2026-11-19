/**
 * VexVoid's district, as data: where every building, lane, gate, stair and lamp is. No graphics here (./district.ts
 * builds the meshes from this), so the same plan feeds the collisions (./world.ts), the officers' map, the paintable
 * walls and the overhead map.
 *
 * Coordinates: metres, x east, z south, y up; the street is y 0, road carriageways -0.14, the canal towpaths -3.
 *
 *            N road (z -75) runs under the brick rail viaduct (z -90..-80, deck y 7; a train runs on it); the foot
 *            tunnel goes through its wide part (x -11..-7) to the hidden yard and its hall of fame.
 *   W road   NW block: Back Lane, the raised deck (+1.6, steps), VEX'S STUDIO round its yard        NE block: back
 *   (x -62)  lane, the abandoned warehouse (inside open), the goods yard with old sidings, scaffold 1.   E road (x 62)
 *            The canal (z -4..6) in a cutting, towpaths at -3, under the road bridges, two footbridges.
 *            South block: the square, lanes, scaffold 2 on the canal, the PAINT SHOP on the E road corner.
 *            S road (z 46). The patrol car comes out of its depot at the east end of the spur road (z 22).
 *
 * PARKOUR (phase 2): every roof is a surface you can stand on (parapets round it are walls); `climbs` are the routes up
 * (drainpipes, fire-escape drop ladders, scaffold ladders, the warehouse ladder, ladders out of the canal) with the way
 * the climber faces and where they step off at the top; fire escapes are walkable (landings and flights), so are the
 * scaffold lifts and the warehouse mezzanine. `ledge` and `dock` entries mark edges you can jump at and mantle.
 * `heavens` are high walls painted from a roof or a scaffold's top lift, seen from the street (worth more).
 * WATER: the canal between the towpaths is open water you can fall, jump or walk (down the water steps) into; you get
 * out at the water steps or a canal ladder. Phase 3 the shops' `doors` (the interiors); phase 4 the hall of fame;
 * phase 5 the roads.
 */
import { makeWorld, STEP, type Box, type Surf, type Rect, type World } from './world';

export type Kind = 'brick' | 'soot' | 'block' | 'shed' | 'render';
export type Side = 'n' | 's' | 'e' | 'w';
/** A building. Solid unless `shell` (then its walls are thin and it has an inside: doors are gaps in them). */
export type Bld = { id: string; x0: number; x1: number; z0: number; z1: number; h: number; kind: Kind; y?: number;
  /** a ground floor of shutters and doors on these sides (the rest is the facade down to the ground) */
  shop?: Side[];
  fire?: Side; scaffold?: Side; tanks?: number; parapet?: boolean; seed: number;
  shell?: { t: number; doors: { side: Side; a: number; b: number; h: number; kind: 'open' | 'shutter-half' | 'door-ajar' }[]; inside: string } };
export type Gate = { id: string; x0: number; x1: number; z0: number; z1: number; kind: 'chain' | 'steel'; open: number; h: number };
export type Lamp = { x: number; y: number; z: number; kind: 'street' | 'wall' | 'tube' | 'flood' | 'bulb' | 'canal' | 'warm'; k?: number; dir?: number; steady?: boolean };
export type Place = { id: string; name: string; x: number; z: number; y: number; yaw: number; about: string };
export type Door = { id: string; name: string; x0: number; x1: number; z0: number; z1: number; face: Side; sign: string; about: string };
/** A way up. Climbable routes (drainpipe, drop-ladder, scaffold-ladder, ladder, canal-ladder) run up a line at (x, z)
 *  from y0 to y1: the climber's body is out along `n` (the side they climb on, facing back along it); `top` is where they
 *  stand after the top (null: no way over, climb back down), `stops` other heights to step off at (scaffold lifts), `grab`
 *  the lowest a hand can take it (a drop ladder hangs out of reach: jump for it). ledge / dock / fire-stairs only mark an
 *  edge or a stair for the maps. */
export type ClimbKind = 'drainpipe' | 'fire-stairs' | 'scaffold-ladder' | 'ledge' | 'dock' | 'ladder' | 'drop-ladder' | 'canal-ladder';
export type Climb = { kind: ClimbKind; x: number; z: number; y0: number; y1: number; bld?: string; id?: string; n?: [number, number];
  top?: { x: number; z: number; y: number } | null; stops?: { y: number; x: number; z: number }[]; grab?: number; name?: string };
export const CLIMBABLE: ClimbKind[] = ['drainpipe', 'drop-ladder', 'scaffold-ladder', 'ladder', 'canal-ladder'];
/** A heaven: a high wall painted from a roof or a scaffold's top lift, in view of the street. worth: how much more it
 *  counts than a wall at street level (rep, later; there are no points). */
export type Heaven = { id: string; name: string; wall: string; x: number; z: number; y: number; worth: number; about: string };
/** A fire escape's shape (shared by the plan's surfaces and the district's ironwork): along the facade `u` (x for n/s
 *  sides, z for e/w), out from it `o`; landings every 3.5 m from 3.6 up, a flight from each to the next (the last to the
 *  roof), the drop ladder hanging under the first landing. */
export function fireLayout(b: { x0: number; x1: number; z0: number; z1: number; h: number; y?: number; fire?: Side }) {
  const s = b.fire!, y = b.y ?? 0, alongX = s === 'n' || s === 's', top = y + b.h;
  const mid = alongX ? (b.x0 + b.x1) / 2 : (b.z0 + b.z1) / 2, out = s === 'e' ? b.x1 : s === 'w' ? b.x0 : s === 's' ? b.z1 : b.z0, d = s === 'e' || s === 's' ? 1 : -1;
  const lands: number[] = []; for (let yy = y + 3.6; yy < top - 1; yy += 3.5) lands.push(yy);
  const flights = lands.map((yy, k) => ({ y0: yy, y1: k < lands.length - 1 ? yy + 3.5 : top, u0: k % 2 ? 1.6 : -1.6 }));
  // world point from (u along, o out); and back
  const at = (u: number, o: number): [number, number] => (alongX ? [mid + u, out + d * o] : [out + d * o, mid + u]);
  return { s, y, top, mid, out, d, alongX, lands, flights, at, LAND: { o0: 0.05, o1: 1.65, half: 1.8 }, FLIGHT: { o0: 0.1, o1: 0.8, half: 1.6 }, ladder: { u: 1.25, o: 1.2, y0: y + 2.2 } };
}
export type WallDef = { id: string; w: number; h: number; c: [number, number, number]; n: [number, number]; arch?: { x: number; y: number; r: number } };
export type Scaffold = { id: string; bld: string; side: Side; a: number; b: number; lifts: number; base: number };
export type Plan = {
  bounds: Rect; blds: Bld[]; boxes: Box[]; surfs: Surf[]; holes: Rect[]; roads: Rect[]; gates: Gate[]; lamps: Lamp[];
  places: Place[]; doors: Door[]; climbs: Climb[]; walls: WallDef[]; scaffolds: Scaffold[]; heavens: Heaven[];
  /** Low things to vault (fences, barriers, low walls, planters, concrete blocks, pallets): their own geometry in the district. */
  lows: { x0: number; x1: number; z0: number; z1: number; h: number; kind: 'lowwall' | 'planter' | 'blocks' | 'barrier' | 'pallets' }[];
  stairs: Surf[]; railings: { x0: number; x1: number; z0: number; z1: number; y: number }[];
  containers: { x0: number; x1: number; z0: number; z1: number; y: number; h: number; seed: number }[];
  canal: { z0: number; z1: number; tow: number; water: number; bridges: Rect[]; foot: Rect[];
    /** the open water (you swim here) and the ways out of it: the water steps (stairs into the water) */
    open: Rect; steps: Surf[] };
  viaduct: { z0: number; z1: number; deck: number; wide: Rect; tunnel: Rect; bays: { x0: number; x1: number; kind: 'open' | 'shut' | 'shop' | 'tunnel' | 'solid'; id: string }[] };
  route: [number, number][];
  deck: Rect & { y: number };
  dock: Rect & { y: number };
  yard: Rect; pit: Rect;
  hall: { x: number; z: number; w: number; h: number };
  world: World;
};

export const ROAD_Y = -0.14, TOW_Y = -3, WATER_Y = -3.55, DECK_Y = 1.6, DOCK_Y = 0.72, VIA_Y = 7.2;
/** The viaduct's arches spring 1.6 m up and are round (radius half the bay). */
export const SPRING = 1.6;

export function makePlan(): Plan {
  const bounds: Rect = { x0: -96, x1: 96, z0: -112, z1: 64 };
  const blds: Bld[] = [], boxes: Box[] = [], surfs: Surf[] = [], holes: Rect[] = [], gates: Gate[] = [], lamps: Lamp[] = [];
  const places: Place[] = [], doors: Door[] = [], climbs: Climb[] = [], scaffolds: Scaffold[] = [], stairs: Surf[] = [];
  const railings: Plan['railings'] = [];
  let seed = 11;
  const B = (id: string, x0: number, z0: number, x1: number, z1: number, h: number, kind: Kind, o: Partial<Bld> = {}) => { const b: Bld = { id, x0, x1, z0, z1, h, kind, seed: seed++ * 7919, tanks: 0, parapet: true, ...o }; blds.push(b); return b; };
  const solid = (x0: number, z0: number, x1: number, z1: number, y0 = -1, y1 = 40, tag = '', low = false) => { const b: Box = { x0, x1, z0, z1, y0, y1, tag, low }; boxes.push(b); return b; };

  // ── roads: carriageways sunk 14 cm below the pavements (the car's loop and the spur to its depot) ──
  const roads: Rect[] = [
    { x0: -65, x1: 65, z0: -78, z1: -72 },   // N road
    { x0: -65, x1: 65, z0: 43, z1: 49 },     // S road
    { x0: -65, x1: -59, z0: -78, z1: 49 },   // W road
    { x0: 59, x1: 65, z0: -78, z1: 49 },     // E road
    { x0: 65, x1: 90, z0: 19, z1: 25 },      // spur to the depot
  ];
  for (const r of roads) { holes.push(r); surfs.push({ ...r, y: ROAD_Y, tag: 'road' }); }
  // the car's loop, on the left of the road: out of the depot, north up the E road, round, back in
  const route: [number, number][] = [[92, 20.5], [60.5, 20.5], [60.5, -76.5], [-60.5, -76.5], [-60.5, 47.5], [63.5, 47.5], [63.5, 23.5], [92, 23.5]];

  // ── the canal in its cutting: towpaths at -3, water below, railings along the top, two road bridges, two footbridges ──
  const CZ0 = -4, CZ1 = 6;
  holes.push({ x0: bounds.x0, x1: bounds.x1, z0: CZ0, z1: CZ1 });
  surfs.push({ x0: bounds.x0, x1: bounds.x1, z0: CZ0, z1: CZ0 + 2, y: TOW_Y, tag: 'towpath' }, { x0: bounds.x0, x1: bounds.x1, z0: CZ1 - 2, z1: CZ1, y: TOW_Y, tag: 'towpath' });
  // (the water itself is no box any more: a walker on the towpath is stopped at the edge by there being nothing to stand
  // on, and a body that falls, jumps or walks down the water steps into it swims)
  const open: Rect = { x0: bounds.x0, x1: bounds.x1, z0: CZ0 + 2, z1: CZ1 - 2 };
  const bridges: Rect[] = [{ x0: -67, x1: -57, z0: CZ0, z1: CZ1 }, { x0: 57, x1: 67, z0: CZ0, z1: CZ1 }];
  const foot: Rect[] = [{ x0: -24, x1: -21.4, z0: CZ0, z1: CZ1 }, { x0: 24, x1: 26.6, z0: CZ0, z1: CZ1 }];
  for (const b of bridges) {
    // pavements over the bridge (the carriageway is a road surface already), the deck under them, parapets each side
    for (const [a, c] of [[b.x0, b.x0 + 2], [b.x1 - 2, b.x1]]) surfs.push({ x0: a, x1: c, z0: CZ0, z1: CZ1, y: 0, tag: 'bridge' });
    solid(b.x0, CZ0, b.x1, CZ1, -0.62, -0.14, 'deck');
    solid(b.x0 - 0.35, CZ0, b.x0, CZ1, 0, 1.15, 'parapet'); solid(b.x1, CZ0, b.x1 + 0.35, CZ1, 0, 1.15, 'parapet');
  }
  for (const f of foot) {
    surfs.push({ ...f, y: 0, tag: 'footbridge' });
    solid(f.x0, CZ0, f.x1, CZ1, -0.4, 0, 'deck');
    solid(f.x0 - 0.12, CZ0, f.x0, CZ1, 0, 1.1, 'rail'); solid(f.x1, CZ0, f.x1 + 0.12, CZ1, 0, 1.1, 'rail');
  }
  // steps down to the towpaths: a flight along the canal, cut into the wharf lane beside the railing, then a landing
  const flights: { x0: number; x1: number; side: -1 | 1; down: 'x' | '-x' }[] = [
    { x0: -44, x1: -38.7, side: -1, down: 'x' }, { x0: 36, x1: 41.3, side: -1, down: '-x' },
    { x0: -6, x1: -0.7, side: 1, down: 'x' }, { x0: 46, x1: 51.3, side: 1, down: 'x' },
  ];
  const stairGaps: { x0: number; x1: number; side: -1 | 1 }[] = [];
  for (const f of flights) {
    const zA = f.side < 0 ? CZ0 - 1.5 : CZ1, zB = f.side < 0 ? CZ0 : CZ1 + 1.5;
    const s: Surf = { x0: f.x0, x1: f.x1, z0: zA, z1: zB, y: 0, y1: TOW_Y, axis: f.down, steps: 18, tag: 'stairs' };
    holes.push({ x0: f.x0, x1: f.x1, z0: zA, z1: zB }); surfs.push(s); stairs.push(s);
    // the landing at the bottom, level with the towpath, and the way through onto it
    const lx0 = f.down === 'x' ? f.x1 : f.x0 - 1.6, lx1 = f.down === 'x' ? f.x1 + 1.6 : f.x0;
    holes.push({ x0: lx0, x1: lx1, z0: zA, z1: zB }); surfs.push({ x0: lx0, x1: lx1, z0: zA, z1: zB, y: TOW_Y, tag: 'landing' });
    // walls round the well (a street walker cannot step in from the side or the end), railings on them
    const outer = f.side < 0 ? zA : zB;
    solid(Math.min(f.x0, lx0) - 0.25, outer - (f.side < 0 ? 0.25 : 0), Math.max(f.x1, lx1) + 0.25, outer + (f.side < 0 ? 0 : 0.25), TOW_Y - 0.5, 1.05, 'well');
    const endX = f.down === 'x' ? lx1 : lx0;
    solid(endX - (f.down === 'x' ? 0 : 0.25), Math.min(zA, zB), endX + (f.down === 'x' ? 0.25 : 0), Math.max(zA, zB), TOW_Y - 0.5, 1.05, 'well');
    railings.push({ x0: Math.min(f.x0, lx0), x1: Math.max(f.x1, lx1), z0: outer - 0.05, z1: outer + 0.05, y: 0 });
    stairGaps.push({ x0: lx0, x1: lx1, side: f.side });
    climbs.push({ kind: 'ledge', x: (f.x0 + f.x1) / 2, z: outer, y0: TOW_Y, y1: 0 });
  }
  // retaining walls (stop the towpath walker; under them the street walker stands on top) and railings, with gaps for
  // the bridges, the footbridges and the stair landings
  const landings = (side: -1 | 1) => stairGaps.filter((s) => s.side === side).map((s) => [s.x0, s.x1]);
  const gaps = (side: -1 | 1) => [...bridges.map((b) => [b.x0 - 0.35, b.x1 + 0.35]), ...foot.map((f) => [f.x0 - 0.12, f.x1 + 0.12]), ...landings(side)].sort((a, b) => a[0] - b[0]);
  const runsOf = (list: number[][], f: (a: number, b: number) => void) => { let x = bounds.x0; for (const [g0, g1] of [...list.sort((a, b) => a[0] - b[0]), [bounds.x1, bounds.x1]]) { if (g0 - x > 0.2) f(x, g0); x = Math.max(x, g1); } };
  for (const side of [-1, 1] as const) {
    const z = side < 0 ? CZ0 : CZ1;
    runsOf(landings(side), (a, c) => solid(a, z - (side < 0 ? 0.3 : 0), c, z + (side < 0 ? 0 : 0.3), TOW_Y - 0.6, 0, 'retaining'));
    runsOf(gaps(side), (a, c) => { railings.push({ x0: a, x1: c, z0: z - 0.05, z1: z + 0.05, y: 0 }); solid(a, z - 0.05, c, z + 0.05, -0.2, 1.1, 'railing'); });
  }
  // the footbridges' ends meet the street through the railing gap; the stair landings through the retaining wall gap:
  // under a landing gap the retaining wall still stops a street walker from dropping in (the well wall does)

  // ways out of the water: iron ladders up the towpath kerb (a canal has one every so often) and two flights of water
  // steps down into it (by the canal place on the north towpath, and by the square on the south one)
  const steps: Surf[] = [];
  {
    const STEP_Y = WATER_Y - 1.2;
    const n: Surf = { x0: 10, x1: 12.4, z0: open.z0, z1: open.z0 + 1.4, y: TOW_Y, y1: STEP_Y, axis: 'z', steps: 7, tag: 'water-steps' };
    const so: Surf = { x0: -30.4, x1: -28, z0: open.z1 - 1.4, z1: open.z1, y: TOW_Y, y1: STEP_Y, axis: '-z', steps: 7, tag: 'water-steps' };
    for (const st of [n, so]) { surfs.push(st); stairs.push(st); steps.push(st); }
    let li = 0;
    for (const [side, xs] of [[-1, [-82, -48, -10, 18, 44, 78]], [1, [-76, -40, 5, 32, 52, 84]]] as [number, number[]][]) for (const x of xs) {
      const kz = side < 0 ? open.z0 : open.z1, nz = side < 0 ? 1 : -1;   // the climber is in the water, facing the kerb
      climbs.push({ kind: 'canal-ladder', id: `canal-ladder-${++li}`, name: 'CANAL LADDER', x, z: kz, n: [0, nz], y0: WATER_Y - 1.15, y1: TOW_Y, top: { x, z: kz - nz * 0.75, y: TOW_Y } });
    }
  }

  // ── the rail viaduct: brick arches, a deck at 7.2 m; a wide part over the foot tunnel ──
  const VZ0 = -90, VZ1 = -80;
  const wide: Rect = { x0: -24, x1: 6, z0: -100, z1: VZ1 }, tunnel: Rect = { x0: -11, x1: -7, z0: -100, z1: VZ1 };
  const bays: Plan['viaduct']['bays'] = [];
  for (let x = bounds.x0; x < bounds.x1 - 1; x += 9) {
    const x0 = x + 0.9, x1 = Math.min(bounds.x1, x + 8.1), cx = (x0 + x1) / 2;
    const id = `arch${bays.length + 1}`;
    let kind: Plan['viaduct']['bays'][number]['kind'] = ['shut', 'open', 'shut', 'shut', 'open'][bays.length % 5] as 'open' | 'shut';
    if (cx > wide.x0 && cx < wide.x1) kind = cx > tunnel.x0 - 2 && cx < tunnel.x1 + 2 ? 'tunnel' : 'solid';
    if (Math.abs(cx - 34.5) < 1) kind = 'shop';
    bays.push({ x0, x1, kind, id });
  }
  // piers between the bays, solid under the deck; an open arch is a deep recess, a shut one a brick front with a shutter
  for (let x = bounds.x0; x <= bounds.x1; x += 9) solid(x - 0.9, VZ0, x + 0.9, VZ1, -1, VIA_Y + 1.2, 'pier');
  for (const b of bays) {
    if (b.kind === 'open') { solid(b.x0, VZ0, b.x1, VZ0 + 1.2, -1, VIA_Y, 'archback'); solid(b.x0, VZ0, b.x1, VZ1, 5.2, VIA_Y + 1.2, 'archroof'); }
    else if (b.kind === 'tunnel') { solid(b.x0, VZ0, tunnel.x0, VZ1, -1, VIA_Y + 1.2, 'archfill'); solid(tunnel.x1, VZ0, b.x1, VZ1, -1, VIA_Y + 1.2, 'archfill'); }
    else solid(b.x0, VZ0, b.x1, VZ1 - 0.6, -1, VIA_Y + 1.2, 'archfill');
  }
  solid(bounds.x0, VZ0, bounds.x1, VZ1, 5.6, VIA_Y + 1.2, 'viaduct');
  // the wide part: solid either side of the tunnel, a deck over it
  solid(wide.x0, wide.z0, tunnel.x0, VZ0, -1, VIA_Y + 1.2, 'wide');
  solid(tunnel.x1, wide.z0, wide.x1, VZ0, -1, VIA_Y + 1.2, 'wide');
  solid(tunnel.x0 - 0.5, VZ0, tunnel.x0, VZ1, -1, VIA_Y + 1.2, 'tunnelwall');
  solid(tunnel.x1, VZ0, tunnel.x1 + 0.5, VZ1, -1, VIA_Y + 1.2, 'tunnelwall');
  solid(tunnel.x0, wide.z0, tunnel.x1, VZ1, 3.4, VIA_Y + 1.2, 'tunnelroof');
  doors.push({ id: 'record-shop', name: 'RECORD SHOP', x0: 31.5, x1: 37.5, z0: VZ1 - 0.6, z1: VZ1 + 1.6, face: 's', sign: 'RECORDS', about: 'VOID RECORDS, in a railway arch on the N road: sells VexVoid\'s own tracks (inside in phase 3)' });

  // the hidden yard beyond the tunnel, walled, its back wall the hall of fame
  const pit: Rect = { x0: -40, x1: 22, z0: -112, z1: -100 };
  const hall = { x: -9, z: -111.6, w: 30, h: 9 };

  // ── buildings (outer strips first, then the blocks inside the loop) ──
  // north backdrop beyond the viaduct
  B('nb1', -96, -112, -40, -90, 22, 'block', { parapet: true });
  B('nb2', 22, -112, 96, -90, 20, 'soot');
  B('nb3', -40, -100, -24, -90, 15, 'brick');
  B('nb4', 6, -100, 22, -90, 14, 'brick');
  // west strip
  B('ow1', -96, -80, -67, -48, 18, 'soot', { tanks: 2, fire: 'e' });
  B('ow2', -96, -44, -67, -8, 14, 'brick', { shop: ['e'], tanks: 1 });
  B('ow3', -96, 10, -67, 30, 12, 'block');
  B('ow4', -96, 34, -82, 51, 9, 'brick');
  B('ow5', -96, 51, -67, 64, 13, 'soot');
  // east strip
  B('oe1', 67, -80, 96, -48, 16, 'brick', { tanks: 2 });
  B('oe2', 67, -44, 96, -8, 12, 'soot', { fire: 'w', shop: ['w'] });
  B('oe3', 67, 9, 96, 17, 10, 'block');
  B('oe4', 67, 27, 96, 64, 14, 'brick', { tanks: 1 });
  // south strip
  B('ss1', -67, 51, -30, 64, 11, 'brick', { shop: ['n'] });
  B('ss2', -26.5, 51, 10, 64, 15, 'block');
  B('ss3', 14, 51, 67, 64, 12, 'soot', { shop: ['n'], tanks: 2 });
  // NW block, along the N road
  B('nw1', -57, -70, -44, -62, 15, 'brick', { shop: ['n', 'w'], tanks: 1 });
  B('nw2', -44, -70, -33.4, -62, 10, 'soot', { shop: ['n'] });
  B('nw3', -30.6, -70, -16, -62, 13, 'block', { shop: ['n'] });
  B('nw4', -16, -70, -3, -62, 9, 'brick', { shop: ['n'], fire: 'e' });
  B('nw5', -57, -62, -46, -27, 12, 'soot', { shop: ['w'], tanks: 1 });
  B('nw6', -46, -62, -33.4, -46, 8, 'brick', { tanks: 1 });
  B('nw7', -30.6, -59, -24.2, -48.5, 7, 'render', { fire: 'e' });
  B('nw8', -21.4, -59, -3, -48.5, 10, 'soot', { tanks: 1 });
  // VEX'S STUDIO: a unit off its own yard, a steel door ajar and a shutter half up
  B('studio', -22, -46, -8, -36, 6.4, 'soot', { parapet: false, shell: { t: 0.3, doors: [{ side: 's', a: -19.6, b: -18, h: 2.2, kind: 'door-ajar' }, { side: 's', a: -15.5, b: -11, h: 1.3, kind: 'shutter-half' }], inside: 'studio' } });
  B('nw9', -7.6, -46, -3, -34, 8, 'render');
  B('nw15', -30, -46, -24.8, -39, 4.6, 'render', { parapet: false });   // a lean-to beside the studio
  B('nw10', -57, -23, -40, -8, 10, 'brick', { shop: ['w'] });
  B('nw11', -36, -22, -26, -9.5, 7, 'render', { fire: 'n' });
  B('nw12', -46, -44, -34, -40.5, 4, 'render', { parapet: false });   // a low shed under the deck's north side
  B('nw13', -22, -24, -10, -9.5, 11, 'soot');
  B('nw14', -7.4, -22, -3, -9.5, 6, 'brick');
  B('nw16', -16, -31, -6, -27.4, 3.4, 'render', { parapet: false });  // lock-up garages in the studio yard
  // NE block
  B('ne1', 3, -70, 12, -63, 14, 'brick', { shop: ['n', 'w'] });
  B('ne2', 12, -70, 26, -63, 10, 'soot', { shop: ['n'] });
  B('ne3', 28.6, -70, 44, -63, 12, 'block', { shop: ['n'] });
  B('ne4', 44, -70, 57, -63, 16, 'brick', { shop: ['n', 'e'], tanks: 2 });
  B('warehouse', 14, -60.5, 48, -36, 9.5, 'shed', { parapet: false, shell: { t: 0.35, doors: [{ side: 's', a: 28, b: 34, h: 4.2, kind: 'open' }, { side: 'e', a: -46, b: -44.2, h: 2.2, kind: 'door-ajar' }, { side: 'w', a: -41, b: -39.2, h: 2.2, kind: 'open' }], inside: 'warehouse' } });
  B('ne5', 50, -60.5, 57, -36, 11, 'soot', { shop: ['e'], fire: 'w' });
  B('ne6', 3, -60.5, 10, -48, 7, 'render', { fire: 'e' });
  B('ne9', 3, -45, 8.4, -38.6, 4, 'render', { parapet: false });
  B('ne7', 3, -34, 9, -14, 13, 'brick', { tanks: 1 });
  B('ne8', 50, -30, 57, -8, 9, 'brick', { shop: ['e'], scaffold: 'w' });
  // south block, along the canal
  B('c1', -57, 10, -44, 20, 10, 'soot');
  B('c2', -41, 10, -27, 20, 8, 'brick', { fire: 's' });
  B('c3', -18, 10, 0, 20, 12, 'block', { scaffold: 'n' });
  B('c4', 3, 10, 21, 20, 9, 'brick', { tanks: 1 });
  B('c5', 24, 10, 44, 20, 11, 'soot');
  B('s8', 47, 10, 57, 22, 10, 'brick', { shop: ['e'] });
  // south block, the middle row (lanes 2.5 m either side)
  B('s9', -57, 22.5, -49, 28.5, 7, 'render');
  B('s13', -46.5, 22.5, -37, 28.5, 9, 'soot', { fire: 'n' });
  B('s12', -34, 22.5, -28.6, 31, 6, 'brick');
  B('s14', -3.5, 22.5, 5, 28.5, 7, 'render');
  B('s10', 8, 22.5, 21, 28.5, 6, 'brick');
  B('s11', 24, 22.5, 36, 28.5, 8, 'soot', { fire: 'n' });
  B('s15', 39, 22.5, 46, 28.5, 5, 'render', { parapet: false });
  // south block, along the S road
  B('s1', -57, 31, -40, 41, 12, 'brick', { shop: ['s', 'w'], tanks: 1 });
  B('s2', -40, 31, -28.6, 41, 9, 'soot', { shop: ['s'] });
  B('s3', -25.4, 31, -6, 41, 14, 'block', { shop: ['s'] });
  B('s4', -6, 31, 8, 41, 8, 'brick', { shop: ['s'], fire: 'n' });
  B('s5', 8, 31, 26, 41, 11, 'soot', { shop: ['s'], tanks: 1 });
  B('s6', 28.6, 31, 46, 41, 13, 'brick', { shop: ['s'] });
  B('s7', 46, 25, 57, 41, 9, 'render', { shop: ['s'] });   // the PAINT SHOP: its front on the E road
  B('depot', 90, 17, 96, 27, 8, 'block', { shop: ['w'] });
  doors.push({ id: 'paint-shop', name: 'PAINT SHOP', x0: 57, x1: 58.8, z0: 30.6, z1: 33.4, face: 'e', sign: 'PAINT', about: 'DEAD STOCK PAINT, the corner shop on the E road: cans, caps, markers (inside in phase 3)' });

  // ── raised places: the deck (+1.6) over the NW yard with steps down to the studio yard; the warehouse loading dock ──
  const deck = { x0: -46, x1: -32.5, z0: -40.5, z1: -27, y: DECK_Y };
  surfs.push({ ...deck, tag: 'deck' }); solid(deck.x0, deck.z0, deck.x1, deck.z1, -1, DECK_Y, 'deck');
  const deckStairs: Surf = { x0: -32.5, x1: -29.1, z0: -34, z1: -31.6, y: DECK_Y, y1: 0, axis: 'x', steps: 9, tag: 'stairs' };
  surfs.push(deckStairs); stairs.push(deckStairs); holes.push({ x0: deckStairs.x0, x1: deckStairs.x1, z0: deckStairs.z0, z1: deckStairs.z1 });
  solid(deckStairs.x0, deckStairs.z0 - 0.2, deckStairs.x1, deckStairs.z0, -1, DECK_Y + 1, 'stairwall');
  solid(deckStairs.x0, deckStairs.z1, deckStairs.x1, deckStairs.z1 + 0.2, -1, DECK_Y + 1, 'stairwall');
  // a parapet round the deck's east edge either side of the steps; its south edge is open: a drop into the alley
  solid(deck.x1 - 0.25, deck.z0, deck.x1, deckStairs.z0 - 0.2, DECK_Y - 1, DECK_Y + 1.05, 'parapet');
  solid(deck.x1 - 0.25, deckStairs.z1 + 0.2, deck.x1, deck.z1, DECK_Y - 1, DECK_Y + 1.05, 'parapet');
  climbs.push({ kind: 'ledge', x: (deck.x0 + deck.x1) / 2, z: deck.z1, y0: 0, y1: DECK_Y });
  const dock = { x0: 16, x1: 46, z0: -36, z1: -33.2, y: DOCK_Y };
  surfs.push({ ...dock, tag: 'dock' }); solid(dock.x0, dock.z0, dock.x1, dock.z1, -1, DOCK_Y, 'dock');
  climbs.push({ kind: 'dock', x: 31, z: dock.z1, y0: 0, y1: DOCK_Y });

  // shipping containers in the goods yard (2.44 x 2.6 m, 6 or 12 m long), some two high: cover now, climbs later
  const containers: { x0: number; x1: number; z0: number; z1: number; y: number; h: number; seed: number }[] = [];
  const CT = (x0: number, z0: number, len: number, alongX: boolean, stack = 1) => {
    for (let k = 0; k < stack; k++) { const c = { x0, z0, x1: x0 + (alongX ? len : 2.44), z1: z0 + (alongX ? 2.44 : len), y: k * 2.6, h: 2.6, seed: containers.length * 97 + 13 }; containers.push(c); }
    solid(x0, z0, x0 + (alongX ? len : 2.44), z0 + (alongX ? 2.44 : len), -1, stack * 2.6, 'container');
    climbs.push({ kind: 'ledge', x: x0 + (alongX ? len / 2 : 1.22), z: z0 + (alongX ? 2.44 : len / 2), y0: 0, y1: stack * 2.6 });
  };
  CT(12, -29, 12.2, true, 2); CT(12, -22.6, 6.1, true); CT(38, -29.5, 12.2, false, 1); CT(41.2, -27, 6.1, false, 2); CT(19.5, -18, 12.2, true); CT(44, -17, 6.1, true);
  // ── gates and fences ──
  const G = (id: string, x0: number, z0: number, x1: number, z1: number, kind: Gate['kind'], open = 0, h = kind === 'chain' ? 2.6 : 2.4) => {
    gates.push({ id, x0, x1, z0, z1, kind, open, h });
    // closed: solid; open (a fraction): the opening is left free at the near end
    const alongX = x1 - x0 > z1 - z0, len = alongX ? x1 - x0 : z1 - z0, shut = len * (1 - open);
    if (shut > 0.05) { if (alongX) solid(x0 + (len - shut), z0, x1, z1, -1, h, 'gate'); else solid(x0, z0 + (len - shut), x1, z1, -1, h, 'gate'); }
  };
  G('yard-gate', 56.9, -36, 57.1, -30, 'steel', 0.3);           // E road into the goods yard: a steel gate, one leaf ajar
  G('yard-fence-w', 9, -12.1, 27, -11.9, 'chain', 0);        // the goods yard's chain-link fence on the wharf
  G('yard-chain', 27, -12.1, 33, -11.9, 'chain', 0.6);        // its gate, open
  G('yard-fence-e', 33, -12.1, 50, -11.9, 'chain', 0);
  G('lane-gate', -3, -62.1, 3, -61.9, 'steel', 0);            // Void Street's top end: locked
  G('arch-fence-1', -60, -88.8, -50, -88.6, 'chain', 0);
  G('wharf-chain', -44, 9.9, -41, 10.1, 'chain', 0.5);     // the south wharf into the west lanes, chain-link, open       // into the square from the west lane
  G('carpark', -67.1, 30, -66.9, 51, 'chain', 0.25);
  G('pit-gate', -11, -100.1, -7, -99.9, 'steel', 0.55);        // the tunnel's north end: a steel gate forced open
  G('svc-gate', 21, 9.9, 24, 10.1, 'steel', 0);              // a service slot off the south wharf, locked

  // ── walls closing the hidden yard; the bounds ──
  solid(pit.x0 - 1, pit.z0 - 1, pit.x0, pit.z1, -1, 9, 'pitwall'); solid(pit.x1, pit.z0 - 1, pit.x1 + 1, pit.z1, -1, 9, 'pitwall');
  solid(pit.x0, pit.z0 - 1, pit.x1, pit.z0 + 0.4, -1, 12, 'pitwall');

  // ── buildings become boxes (solid) or walls (shells) ──
  // a solid building: its box to the roof, the roof a surface to stand on, a parapet round it (a wall to the walker on
  // the roof; none along a side that abuts a taller building: that is the neighbour's wall going on up)
  const PARA = 0.98;
  const tallerAt = (b: Bld, x: number, z: number) => blds.some((o) => o !== b && !o.shell && x > o.x0 && x < o.x1 && z > o.z0 && z < o.z1 && (o.y ?? 0) + o.h > (b.y ?? 0) + b.h + 0.3);
  for (const b of blds) {
    const y = b.y ?? 0;
    if (!b.shell) {
      const top = y + b.h;
      solid(b.x0, b.z0, b.x1, b.z1, y - 4, top, 'bld:' + b.id);
      surfs.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y: top, tag: 'roof:' + b.id });
      if (b.parapet !== false) {
        const t = 0.25, cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
        if (!tallerAt(b, cx, b.z0 - 0.3)) solid(b.x0, b.z0, b.x1, b.z0 + t, top - 0.2, top + PARA, 'roofpar:' + b.id);
        if (!tallerAt(b, cx, b.z1 + 0.3)) solid(b.x0, b.z1 - t, b.x1, b.z1, top - 0.2, top + PARA, 'roofpar:' + b.id);
        if (!tallerAt(b, b.x0 - 0.3, cz)) solid(b.x0, b.z0, b.x0 + t, b.z1, top - 0.2, top + PARA, 'roofpar:' + b.id);
        if (!tallerAt(b, b.x1 + 0.3, cz)) solid(b.x1 - t, b.z0, b.x1, b.z1, top - 0.2, top + PARA, 'roofpar:' + b.id);
      }
      continue;
    }
    const t = b.shell.t, top = y + b.h;
    const side = (s: Side, a0: number, a1: number) => {
      // a wall along one side with door gaps (a: along x for n/s, along z for e/w); above a door the wall goes on
      const ds = b.shell!.doors.filter((d) => d.side === s).sort((p, q) => p.a - q.a);
      let a = a0;
      const seg = (u0: number, u1: number, yy0: number, yy1: number) => {
        if (u1 - u0 < 0.01) return;
        if (s === 'n') solid(u0, b.z0, u1, b.z0 + t, yy0, yy1, 'shell:' + b.id); else if (s === 's') solid(u0, b.z1 - t, u1, b.z1, yy0, yy1, 'shell:' + b.id);
        else if (s === 'w') solid(b.x0, u0, b.x0 + t, u1, yy0, yy1, 'shell:' + b.id); else solid(b.x1 - t, u0, b.x1, u1, yy0, yy1, 'shell:' + b.id);
      };
      for (const d of ds) { seg(a, d.a, y - 1, top); seg(d.a, d.b, y + d.h, top); a = d.b; }
      seg(a, a1, y - 1, top);
    };
    side('n', b.x0, b.x1); side('s', b.x0, b.x1); side('w', b.z0, b.z1); side('e', b.z0, b.z1);
    solid(b.x0, b.z0, b.x1, b.z1, top - 0.45, top + 0.6, 'roof:' + b.id);
  }
  // inside the studio and the warehouse: what stands there (beds, decks, crates; pallets, drums, columns)
  const st = blds.find((b) => b.id === 'studio')!, wh = blds.find((b) => b.id === 'warehouse')!;
  solid(-21.4, -45.4, -18.6, -43.2, -1, 0.45, 'studio:mattress', true);
  solid(-14.2, -45.6, -10.6, -44.6, -1, 1.0, 'studio:decks', true);
  solid(-9.6, -45.5, -8.4, -44.5, -1, 1.2, 'studio:speaker', true); solid(-16.4, -45.5, -15.2, -44.5, -1, 1.2, 'studio:speaker', true);
  solid(-8.6, -41.5, -8.3, -38, -1, 0.9, 'studio:crates', true);
  solid(-21.7, -40, -20.9, -37.5, -1, 0.7, 'studio:cans', true);
  for (let x = wh.x0 + 6; x < wh.x1 - 3; x += 7) for (const z of [-54, -42.5]) solid(x - 0.2, z - 0.2, x + 0.2, z + 0.2, -1, wh.h, 'wh:column');
  solid(17, -59.5, 21, -57.5, -1, 1.3, 'wh:pallets', true); solid(40, -59.6, 44, -56.4, -1, 2.2, 'wh:crates', true);
  solid(36.5, -45.5, 39.5, -43.5, -1, 1.4, 'wh:van', true); solid(23, -48.5, 24.5, -47, -1, 1.0, 'wh:drums', true);
  // the steel mezzanine along the warehouse's north wall: a deck at 3.62, a rail along its open edge, a ladder at its end
  {
    const MZ = 3.62;
    surfs.push({ x0: wh.x0 + 0.4, x1: wh.x0 + 14, z0: wh.z0 + 0.4, z1: wh.z0 + 3.4, y: MZ, tag: 'mezz' });
    solid(wh.x0 + 0.4, wh.z0 + 3.33, wh.x0 + 14, wh.z0 + 3.43, MZ - 0.1, MZ + 0.95, 'mezzrail');
    climbs.push({ kind: 'ladder', id: 'warehouse-ladder', name: 'MEZZANINE LADDER', x: wh.x0 + 14.25, z: wh.z0 + 2.0, n: [1, 0], y0: 0, y1: MZ, top: { x: wh.x0 + 13.3, z: wh.z0 + 2.0, y: MZ } });
  }
  void st;

  // ── scaffolds (phase 2 climbs them; for now you walk under the first lift and paint the wall behind) ──
  scaffolds.push({ id: 'scaffold-1', bld: 'ne8', side: 'w', a: -28, b: -12, lifts: 4, base: 0 });
  scaffolds.push({ id: 'scaffold-2', bld: 'c3', side: 'n', a: -16.5, b: -1.5, lifts: 5, base: 0 });
  for (const s of scaffolds) {
    const b = blds.find((q) => q.id === s.bld)!;
    // the standards (uprights) are thin solids every 2.4 m, 0.25 and 1.3 m out from the wall
    for (let u = s.a; u <= s.b + 0.01; u += 2.4) for (const off of [0.25, 1.3]) {
      const [x, z] = s.side === 'w' ? [b.x0 - off, u] : s.side === 'e' ? [b.x1 + off, u] : s.side === 'n' ? [u, b.z0 - off] : [u, b.z1 + off];
      solid(x - 0.04, z - 0.04, x + 0.04, z + 0.04, -1, s.lifts * 2 + 1, 'scaffold');
    }
    // the lifts are boards to walk on (2 m apart), a guard rail along the outside and across both ends
    const pos = (u: number, off: number): [number, number] => s.side === 'w' ? [b.x0 - off, u] : s.side === 'e' ? [b.x1 + off, u] : s.side === 'n' ? [u, b.z0 - off] : [u, b.z1 + off];
    const rect = (u0: number, u1: number, o0: number, o1: number) => { const [ax, az] = pos(u0, o0), [bx, bz] = pos(u1, o1); return { x0: Math.min(ax, bx), x1: Math.max(ax, bx), z0: Math.min(az, bz), z1: Math.max(az, bz) }; };
    const stops: { y: number; x: number; z: number }[] = [];
    const [lx, lz] = pos(s.a + 1.2, 0.78), [nx, nz] = s.side === 'w' ? [-1, 0] : s.side === 'e' ? [1, 0] : s.side === 'n' ? [0, -1] : [0, 1];
    for (let k = 1; k <= s.lifts; k++) {
      const by = s.base + k * 2 + 0.09;
      surfs.push({ ...rect(s.a, s.b, 0.2, 1.35), y: by, tag: 'scaffold' });
      const rail = (r: Rect) => solid(r.x0, r.z0, r.x1, r.z1, by - 0.1, by + 1.0, 'scafrail');
      rail(rect(s.a, s.b, 1.33, 1.4)); rail(rect(s.a - 0.06, s.a, 0.2, 1.4)); rail(rect(s.b, s.b + 0.06, 0.2, 1.4));
      const [sx, sz] = pos(s.a + 2.1, 0.75); stops.push({ y: by, x: sx, z: sz });
    }
    const topL = stops.pop()!;
    climbs.push({ kind: 'scaffold-ladder', id: s.id + '-ladder', name: 'SCAFFOLD LADDER', x: lx, z: lz, n: [nx, nz], y0: s.base, y1: topL.y, bld: b.id, top: topL, stops });
  }
  // fire escapes: a drop ladder hanging out of reach (jump for it) up to the first landing; landings and flights are
  // walkable to the roof, where you go over the parapet. Under each flight its own steps keep a walker on the landing
  // out from under it (stepped boxes, each just under the flight above)
  for (const b of blds) {
    if (b.shell || b.h < 6 || !b.fire) continue;
    const F = fireLayout(b), o = (u0: number, u1: number, o0: number, o1: number) => { const [ax, az] = F.at(u0, o0), [bx, bz] = F.at(u1, o1); return { x0: Math.min(ax, bx), x1: Math.max(ax, bx), z0: Math.min(az, bz), z1: Math.max(az, bz) }; };
    const axis = (sgn: number): Surf['axis'] => (F.alongX ? (sgn > 0 ? 'x' : '-x') : (sgn > 0 ? 'z' : '-z'));
    for (const yy of F.lands) {
      const ly = yy + 0.06;
      surfs.push({ ...o(-F.LAND.half, F.LAND.half, F.LAND.o0, F.LAND.o1), y: ly, tag: 'fire' });
      const rail = (r: Rect) => solid(r.x0, r.z0, r.x1, r.z1, ly - 0.1, ly + 1.0, 'firerail');
      rail(o(-F.LAND.half, F.LAND.half, F.LAND.o1 - 0.05, F.LAND.o1)); rail(o(-F.LAND.half - 0.05, -F.LAND.half, F.LAND.o0, F.LAND.o1)); rail(o(F.LAND.half, F.LAND.half + 0.05, F.LAND.o0, F.LAND.o1));
    }
    for (const f of F.flights) {
      const u0 = f.u0, u1 = -f.u0, y0 = f.y0 + 0.06, y1 = f.y1 + 0.06, r = o(Math.min(u0, u1), Math.max(u0, u1), F.FLIGHT.o0, F.FLIGHT.o1);
      // a ramp from u0 (low) to u1 (high): surfY runs along +axis from y at the start to y1 at the end
      surfs.push({ ...r, y: y0, y1, axis: axis(u1 > u0 ? 1 : -1), steps: 0, tag: 'fire' });
      for (let k = 0; k < 8; k++) {
        const a = u0 + (u1 - u0) * k / 8, c = u0 + (u1 - u0) * (k + 1) / 8, fy = y0 + (y1 - y0) * k / 8;
        if (fy < y0 + 0.4) continue;
        const q = o(Math.min(a, c), Math.max(a, c), F.FLIGHT.o0, F.FLIGHT.o1); solid(q.x0, q.z0, q.x1, q.z1, f.y0 - 1, fy - 0.05, 'fireunder');
      }
    }
    const [lx, lz] = F.at(F.ladder.u, F.ladder.o), [tx, tz] = F.at(F.ladder.u, 1.22), n: [number, number] = F.alongX ? [0, F.d] : [F.d, 0];
    climbs.push({ kind: 'drop-ladder', id: b.id + '-fire', name: 'FIRE ESCAPE', x: lx, z: lz, n, y0: F.y, y1: F.lands[0] + 0.06, grab: F.ladder.y0, bld: b.id, top: { x: tx, z: tz, y: F.lands[0] + 0.06 } });
  }

  // ── street furniture that stops you (skips, bins, parked vans, bollards) ──
  const prop = (x: number, z: number, hx: number, hz: number, h: number, tag: string) => solid(x - hx, z - hz, x + hx, z + hz, -1, h, tag, h < 1.5);
  prop(-28.3, -24.6, 0.9, 1.8, 1.3, 'skip'); prop(-50, -24.5, 1.8, 0.9, 1.3, 'skip'); prop(46, -47.2, 0.85, 1.7, 1.3, 'skip');
  prop(-36.2, 26.5, 0.9, 1.7, 1.3, 'skip'); prop(4, -40, 0.9, 1.8, 1.3, 'skip'); prop(78, -45.3, 1.8, 0.9, 1.3, 'skip');
  prop(-25, -61.2, 0.4, 0.4, 1.1, 'bin'); prop(-28, -50.5, 0.4, 0.4, 1.1, 'bin'); prop(27.3, -61.5, 0.4, 0.4, 1.1, 'bin'); prop(48.9, -49, 0.4, 0.4, 1.1, 'bin');
  prop(-1.5, 20, 0.4, 0.4, 1.1, 'bin'); prop(27.4, 31, 0.4, 0.4, 1.1, 'bin'); prop(-4.5, -36, 0.4, 0.4, 1.1, 'bin');
  for (const x of [-2, 0, 2]) { prop(x, -8.7, 0.12, 0.12, 0.95, 'bollard'); }
  // parked vans and cars along the kerbs (the car's lane stays free)
  prop(-54.2, -66.5, 1.0, 2.6, 2.2, 'van'); prop(54.2, -20, 1.0, 2.6, 2.2, 'van'); prop(-20, 52.8, 2.4, 1.0, 1.45, 'car');
  prop(20, -68.4, 2.3, 0.95, 1.45, 'car'); prop(-40, 39.6, 2.3, 0.95, 1.45, 'car'); prop(-77, 45, 2.3, 0.95, 1.4, 'carpark-wreck');
  // low things to vault at a run (under 1.2 m): a low wall with a bench in the square and two planters, concrete
  // blocks in the goods yard, a crash barrier on the north wharf, a pallet stack against a container (a step up onto it)
  const lows: Plan['lows'] = [];
  const low = (x0: number, z0: number, x1: number, z1: number, h: number, kind: Plan['lows'][number]['kind']) => { lows.push({ x0, x1, z0, z1, h, kind }); solid(x0, z0, x1, z1, -1, h, kind, true); };
  low(-22, 26.2, -15, 26.6, 0.95, 'lowwall'); low(-12.6, 24.0, -11.2, 25.4, 0.6, 'planter'); low(-8.4, 24.0, -7.0, 25.4, 0.6, 'planter');
  low(26, -24.4, 29.2, -23.6, 0.8, 'blocks'); low(5, -9.05, 9, -8.75, 1.0, 'barrier'); low(24.6, -15.4, 25.8, -14.4, 0.9, 'pallets');

  // ── tops you can stand on once you are up (PARKOUR: mantle onto a skip, a parked car, a container, a pallet stack,
  // the concrete blocks, a planter, the low wall) ──
  for (const b of boxes) if (['skip', 'bin', 'car', 'van', 'carpark-wreck', 'container', 'pallets', 'blocks', 'planter', 'lowwall', 'barrier'].includes(b.tag || '') && (b.y1 ?? 0) > STEP) surfs.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y: b.y1!, tag: 'top:' + b.tag });

  // ── lamps ──
  for (let x = -54; x <= 54; x += 18) { lamps.push({ x, y: 6.5, z: -70.8, kind: 'street', dir: -1 }); lamps.push({ x: x + 9, y: 6.5, z: 41.8, kind: 'street', dir: 1 }); }
  for (let z = -60; z <= 36; z += 16) { lamps.push({ x: -57.8, y: 6.5, z, kind: 'street', dir: 0 }); lamps.push({ x: 57.8, y: 6.5, z: z + 8, kind: 'street', dir: 0 }); }
  for (let x = -84; x <= 84; x += 24) { lamps.push({ x, y: 1.6, z: -4.6, kind: 'canal' }); lamps.push({ x: x + 12, y: 1.6, z: 6.6, kind: 'canal' }); }
  lamps.push({ x: -32.3, y: 4.2, z: -60, kind: 'wall' }, { x: -24.8, y: 4, z: -40, kind: 'wall' }, { x: -19, y: 3.2, z: -35.7, kind: 'wall', k: 1.4 });
  lamps.push({ x: -9, y: 3.2, z: -84, kind: 'tube' }, { x: -9, y: 3.2, z: -91, kind: 'tube' }, { x: -9, y: 3.2, z: -97, kind: 'tube' });
  lamps.push({ x: -9, y: 9.5, z: -102.5, kind: 'flood' });
  lamps.push({ x: -17.6, y: 2.6, z: -45.1, kind: 'warm', k: 1.0 });   // the standard lamp by the mattress
  // (owner, 16 Nov: the start looked better dark; the torch, T, is the answer to darkness: no extra lamps here)
  // work lights hung from the warehouse trusses (squatters' tubes), so the floor reads at night
  lamps.push({ x: 24, y: 4.4, z: -55, kind: 'tube' }, { x: 38, y: 4.4, z: -52, kind: 'tube' }, { x: 29, y: 4.4, z: -42, kind: 'tube' });
  lamps.push({ x: 31, y: 7.5, z: -48, kind: 'bulb', k: 1.2 }, { x: 22, y: 7.5, z: -52, kind: 'bulb', k: 0.6 });
  lamps.push({ x: 31, y: 5, z: -35.6, kind: 'wall' }, { x: 30, y: 4.5, z: -12.6, kind: 'wall' }, { x: 49, y: 3.6, z: -48, kind: 'wall' });
  lamps.push({ x: 34.5, y: 4.6, z: -79.4, kind: 'wall', k: 1.3 }, { x: 58.4, y: 3.4, z: 32, kind: 'wall', k: 1.3 });
  lamps.push({ x: -16, y: 4.5, z: 20.2, kind: 'wall' }, { x: -27, y: 4, z: 32.6, kind: 'wall' }, { x: 27.3, y: 4, z: 18, kind: 'wall' }, { x: -2, y: 4, z: -30, kind: 'wall' });
  lamps.push({ x: -0.5, y: 4.2, z: -55, kind: 'wall' }, { x: 13, y: 4, z: -62.6, kind: 'wall' }, { x: -66.6, y: 4, z: -44, kind: 'wall' }, { x: 74, y: 4, z: -43.6, kind: 'wall' });

  // ── the phone kiosk on the S road (a new burner when the canal has killed yours) ──
  doors.push({ id: 'phone-shop', name: 'PHONE KIOSK', x0: 0.2, x1: 2.6, z0: 41, z1: 42.6, face: 's', sign: 'PHONES', about: 'BURNERS · UNLOCKING · REPAIRS: a new burner on the spot when the canal has had yours' });

  // ── named places (spawn, teleports for testing; the shops' doors) ──
  const P = (id: string, name: string, x: number, z: number, y: number, yaw: number, about: string) => places.push({ id, name, x, z, y, yaw, about });
  P('studio', "VEX'S STUDIO", -15, -41, 0, Math.PI, 'home: a squatted unit off the studio yard; mattress, decks, crates of records, paint, sketches on the wall');
  P('paint-shop', 'PAINT SHOP', 58.4, 32, 0, Math.PI / 2, 'the paint shop door on the E road (closed until phase 3)');
  P('record-shop', 'RECORD SHOP', 34.5, -78.6, 0, 0, 'the record shop in a railway arch on the N road (closed until phase 3)');
  P('tunnel', 'FOOT TUNNEL', -9, -90, 0, 0, 'the foot tunnel under the wide viaduct, to the hidden yard');
  P('rail', 'RAIL VIADUCT', 44, -78.9, 0, 0.45, 'under the rail viaduct on the N road, the arches and the train overhead');
  P('warehouse', 'WAREHOUSE', 31, -40, 0, Math.PI, 'inside the abandoned warehouse');
  P('scaffold-1', 'SCAFFOLD 1', 45.5, -20, 0, -Math.PI / 2, 'the scaffolded block on the goods yard');
  P('scaffold-2', 'SCAFFOLD 2', -9, 7.6, 0, Math.PI, 'the scaffolded block over the south wharf');
  P('canal', 'CANAL', 8, -3, TOW_Y, -Math.PI / 2, 'the north towpath, down in the canal cutting');
  P('yard', 'GOODS YARD', 30, -22, 0, 0, 'the goods yard: old sidings, the loading dock, the warehouse door');
  P('deck', 'THE DECK', -39, -34, DECK_Y, -Math.PI / 2, 'the raised deck over the studio yard (steps down to it, a drop into the alley)');
  P('pit', 'HALL OF FAME', -9, -105, 0, 0, 'the hidden yard beyond the tunnel and its hall of fame wall');
  P('back-lane', 'BACK LANE', -32, -56, 0, 0, 'the narrow lane from the N road down to the studio yard');
  P('square', 'THE SQUARE', -16, 25, 0, 0, 'the little square in the south block');
  P('void-street', 'VOID STREET', 0, -30, 0, 0, 'the lane through the middle of the north block, bollards at the wharf');
  P('n-road', 'N ROAD', -20, -71, 0, -Math.PI / 2, 'the N road, the car\'s loop');
  P('phone-shop', 'PHONE KIOSK', 1.4, 42.3, 0, 0, 'the phone kiosk on the S road: a new burner when the canal has killed yours');
  P('n-road-heaven', 'N ROAD HEAVEN', -42.6, -66, 10, Math.PI / 2, 'up on the roof over the N road shops (nw2), under the tall side wall of the corner block: a heaven');
  P('canal-heaven', 'CANAL HEAVEN', -9, 9.2, 10.09, Math.PI, 'the top lift of scaffold 2, over the south wharf: the top of the block, seen across the canal');
  const heavens: Heaven[] = [
    { id: 'n-road-heaven', name: 'N ROAD HEAVEN', wall: 'heaven-nw1-e', x: -42.6, z: -66, y: 10, worth: 3, about: 'the corner block\'s tall side wall, over the roof of the N road shops (nw2); up a drainpipe from the back lane' },
    { id: 'canal-heaven', name: 'CANAL HEAVEN', wall: 'heaven-c3-n', x: -9, z: 9.2, y: 10.09, worth: 3, about: 'the top of the block over the south wharf, from scaffold 2\'s top lift; seen right across the canal' },
  ];

  const world = makeWorld({ boxes, surfs, holes, bounds });

  // ── paintable walls: every face of a building, the viaduct, the canal's walls, the tunnel, that you can walk up to.
  // A face is sampled every metre half a metre out from it; open runs become walls (ids from the building and side) ──
  const walls: WallDef[] = [];
  const faceRuns = (id: string, x0: number, z0: number, x1: number, z1: number, n: [number, number], y0: number, h: number, standY = y0, skip?: (x: number, z: number) => boolean) => {
    const len = Math.hypot(x1 - x0, z1 - z0), tx = (x1 - x0) / len, tz = (z1 - z0) / len;
    const open: boolean[] = [];
    for (let u = 0.5; u < len; u += 1) {
      // somewhere to stand in front of it: half a metre out, or past something low at its foot (a mattress, the decks)
      const ok = (d: number) => { const px = x0 + tx * u + n[0] * d, pz = z0 + tz * u + n[1] * d, g = world.groundAt(px, pz, standY + 0.2); return !Number.isNaN(g) && Math.abs(g - standY) < 0.7 && world.free(px, pz, 0.12, g); };
      open.push((ok(0.6) || (ok(1.6) && world.free(x0 + tx * u + n[0] * 0.6, z0 + tz * u + n[1] * 0.6, 0.05, standY + 1.3))) && !(skip && skip(x0 + tx * u, z0 + tz * u)));
    }
    const runs: [number, number][] = [];
    let s = -1;
    open.forEach((o, i) => { if (o && s < 0) s = i; if ((!o || i === open.length - 1) && s >= 0) { const e = o ? i + 1 : i; if (e - s >= 2) runs.push([s, Math.min(len, e)]); s = -1; } });
    // long runs are cut into panels of 24 m at most (the can carries on from one to the next in the same plane)
    const parts: [number, number][] = [];
    for (const [a, b] of runs) { const k = Math.ceil((b - a) / 24); for (let i = 0; i < k; i++) parts.push([a + (b - a) * i / k, a + (b - a) * (i + 1) / k]); }
    parts.forEach(([a, b], k) => {
      const u = (a + b) / 2, w = b - a;
      walls.push({ id: parts.length > 1 ? `${id}${k + 1}` : id, w, h, c: [x0 + tx * u, y0 + h / 2, z0 + tz * u], n });
    });
  };
  for (const b of blds) {
    const y = b.y ?? 0, h = Math.min(b.h, 10);
    if (b.shell) {
      // outside and inside of each side (the inside faces the other way)
      const t = b.shell.t, ds = b.shell.doors;
      // no paint across a doorway
      const door = (s: Side) => (x: number, z: number) => ds.some((d) => d.side === s && ((s === 'n' || s === 's') ? x > d.a - 0.2 && x < d.b + 0.2 : z > d.a - 0.2 && z < d.b + 0.2));
      faceRuns(`${b.id}-n`, b.x1, b.z0, b.x0, b.z0, [0, -1], y, h, y, door('n')); faceRuns(`${b.id}-s`, b.x0, b.z1, b.x1, b.z1, [0, 1], y, h, y, door('s'));
      faceRuns(`${b.id}-w`, b.x0, b.z0, b.x0, b.z1, [-1, 0], y, h, y, door('w')); faceRuns(`${b.id}-e`, b.x1, b.z1, b.x1, b.z0, [1, 0], y, h, y, door('e'));
      const hi = Math.min(b.h - 0.5, 6);
      faceRuns(`${b.id}-in-n`, b.x0 + t, b.z0 + t, b.x1 - t, b.z0 + t, [0, 1], y, hi, y, door('n')); faceRuns(`${b.id}-in-s`, b.x1 - t, b.z1 - t, b.x0 + t, b.z1 - t, [0, -1], y, hi, y, door('s'));
      faceRuns(`${b.id}-in-w`, b.x0 + t, b.z1 - t, b.x0 + t, b.z0 + t, [1, 0], y, hi, y, door('w')); faceRuns(`${b.id}-in-e`, b.x1 - t, b.z0 + t, b.x1 - t, b.z1 - t, [-1, 0], y, hi, y, door('e'));
      continue;
    }
    faceRuns(`${b.id}-n`, b.x1, b.z0, b.x0, b.z0, [0, -1], y, h); faceRuns(`${b.id}-s`, b.x0, b.z1, b.x1, b.z1, [0, 1], y, h);
    faceRuns(`${b.id}-w`, b.x0, b.z0, b.x0, b.z1, [-1, 0], y, h); faceRuns(`${b.id}-e`, b.x1, b.z1, b.x1, b.z0, [1, 0], y, h);
  }
  // the viaduct's arches: the bricked fronts, the inside of the open arches, the piers' faces
  for (const b of bays) {
    if (b.kind === 'shut' || b.kind === 'shop' || b.kind === 'solid') faceRuns(`${b.id}`, b.x0, VZ1 - 0.6, b.x1, VZ1 - 0.6, [0, 1], 0, 5);
    if (b.kind === 'tunnel') { faceRuns(`${b.id}-l`, b.x0, VZ1, tunnel.x0, VZ1, [0, 1], 0, 5); faceRuns(`${b.id}-r`, tunnel.x1, VZ1, b.x1, VZ1, [0, 1], 0, 5); }
    // an open arch's sides are pier only up to the spring (the vault curves away above)
    if (b.kind === 'open') { faceRuns(`${b.id}-back`, b.x0, VZ0 + 1.2, b.x1, VZ0 + 1.2, [0, 1], 0, 5); faceRuns(`${b.id}-l`, b.x0, VZ0 + 1.2, b.x0, VZ1, [1, 0], 0, SPRING); faceRuns(`${b.id}-r`, b.x1, VZ1, b.x1, VZ0 + 1.2, [-1, 0], 0, SPRING); }
    // the fronts and the open arches' backs are solid only inside the arch (the rest is behind the spandrel or the vault)
    if (b.kind !== 'tunnel') {
      const cx = (b.x0 + b.x1) / 2, rad = (b.x1 - b.x0) / 2;
      // (these panels face along z: the panel's x axis, as spray.ts measures it, is world x times n.z)
      for (const w of walls) if ((w.id === b.id || w.id === `${b.id}-back`) && Math.abs(w.n[1]) > 0.5) w.arch = { x: (cx - w.c[0]) * w.n[1] + w.w / 2, y: SPRING - (w.c[1] - w.h / 2), r: rad };
    }
  }
  for (let x = bounds.x0 + 9; x < bounds.x1; x += 9) faceRuns(`pier${Math.round((x - bounds.x0) / 9)}`, x - 0.9, VZ1, x + 0.9, VZ1, [0, 1], 0, 6);
  faceRuns('tunnel-w', tunnel.x0, VZ1, tunnel.x0, wide.z0, [1, 0], 0, 3.4); faceRuns('tunnel-e', tunnel.x1, wide.z0, tunnel.x1, VZ1, [-1, 0], 0, 3.4);
  // the canal's walls, from the towpath to the street
  faceRuns('canal-n', bounds.x0, CZ0, bounds.x1, CZ0, [0, 1], TOW_Y, 3, TOW_Y);
  faceRuns('canal-s', bounds.x1, CZ1, bounds.x0, CZ1, [0, -1], TOW_Y, 3, TOW_Y);
  // the hidden yard: its side walls; the back wall is the hall of fame (a prepared panel) and either side of it
  faceRuns('pit-w', pit.x0, pit.z0 + 0.4, pit.x0, pit.z1, [1, 0], 0, 6); faceRuns('pit-e', pit.x1, pit.z1, pit.x1, pit.z0 + 0.4, [-1, 0], 0, 6);
  faceRuns('pit-l', pit.x0, pit.z0 + 0.4, hall.x - hall.w / 2, pit.z0 + 0.4, [0, 1], 0, 6); faceRuns('pit-r', hall.x + hall.w / 2, pit.z0 + 0.4, pit.x1, pit.z0 + 0.4, [0, 1], 0, 6);
  walls.unshift({ id: 'hall-of-fame', w: hall.w, h: hall.h, c: [hall.x, hall.h / 2, pit.z0 + 0.4 + 0.03], n: [0, 1] });
  // the heavens: the corner block's side wall above the N road shops' roof, and the top of c3 above scaffold 2's top lift
  walls.push({ id: 'heaven-nw1-e', w: 7.6, h: 4.6, c: [-44, 10 + 2.3, -66], n: [1, 0] });
  walls.push({ id: 'heaven-c3-n', w: 15, h: 2.85, c: [-9, 10.09 + 1.425, 10], n: [0, -1] });
  // gates take paint too (the steel ones)
  for (const g of gates) if (g.kind === 'steel') {
    // only the shut part (an open leaf is swung back out of the way)
    const alongX = g.x1 - g.x0 > g.z1 - g.z0, len = alongX ? g.x1 - g.x0 : g.z1 - g.z0, a0 = (alongX ? g.x0 : g.z0) + len * g.open;
    if (len * (1 - g.open) < 1.2) continue;
    if (alongX) { faceRuns(`${g.id}-s`, a0, g.z1, g.x1, g.z1, [0, 1], 0, g.h); faceRuns(`${g.id}-n`, g.x1, g.z0, a0, g.z0, [0, -1], 0, g.h); }
    else { faceRuns(`${g.id}-e`, g.x1, g.z1, g.x1, a0, [1, 0], 0, g.h); faceRuns(`${g.id}-w`, g.x0, a0, g.x0, g.z1, [-1, 0], 0, g.h); }
  }

  return { bounds, blds, boxes, surfs, holes, roads, gates, lamps, places, doors, climbs, walls, scaffolds, stairs, railings, containers, heavens, lows,
    canal: { z0: CZ0, z1: CZ1, tow: TOW_Y, water: WATER_Y, bridges, foot, open, steps }, viaduct: { z0: VZ0, z1: VZ1, deck: VIA_Y, wide, tunnel, bays },
    route, deck, dock, yard: { x0: 10, x1: 50, z0: -33.2, z1: -12 }, pit, hall, world };
}
