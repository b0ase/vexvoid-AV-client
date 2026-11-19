"""The VexVoid writer, built in Blender (headless) around the skeleton the game animates.

  Blender -b --factory-startup --python game/blender/writer.py -- vx/game/anims/ual.glb vx/game/models/writer.glb [render-folder [tag]]

A graffiti writer in techwear, at night: a shell jacket with a structured hood (up, always: no faces), cargo trousers
gathered over high-top trainers, gloves, a backpack with cans. Everything is modelled here, by script, in metres:

  skeleton  read straight from the animation library (Quaternius UAL clips, CC0): joint offsets and the clips themselves.
            The library's skeleton is lopsided and wide-hipped, so it is tidied first (see TIDY); the game applies the
            same tidy-up from this file's output.
  bind      the pose the model is built in: a relaxed A-pose, feet flat as they stand in the idle clip. The game binds
            the meshes in THIS pose (the bind matrices travel in the .glb), so the clips play on it correctly.
  garments  every piece is a grid of points lofted along a limb or up the body: clean quads, real UVs, and cloth folds
            pushed into the surface where cloth folds. Pieces overlap at their seams, as sewn clothes do.
  weights   written by rule, not by heat: each ring of a sleeve or a leg knows how far along the limb it is.
  textures  one atlas (second UV set) with baked occlusion, seams, panels and wear; the first UV set is real-size for
            the game's tiling weave.
Materials are named for the game (Hoodie = the shell jacket, Cotton = the hoodie's hood, Trousers, Gloves, Shoes, Sole, Void,
Trim, Mask, Pack, Can, Cap, Reflect),
which swaps in its own. Mesh names matter to the police (game/src/cops.ts hides Hood, Pack, Can, Cap, String).
Improve the character here: change a number, rerun with a render folder, look at the pictures, rebuild the game.
"""
import bpy, sys, math, json, struct, os
import numpy as np
from mathutils import Vector, noise

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
SRC = argv[0] if argv else 'vx/game/anims/ual.glb'
OUT = argv[1] if len(argv) > 1 else 'vx/game/models/writer.glb'
RENDER = argv[2] if len(argv) > 2 else ''   # a folder: also render turnarounds, close-ups and clip poses there
TAG = argv[3] if len(argv) > 3 else 'p'     # the pictures' prefix (p1, p2 ...)
SHOTS = [x for x in os.environ.get('WRITER_SHOTS', '').split(',') if x]   # only the pictures whose names start so
K = 2.6                                     # metres per skeleton unit (pass 2: with the longer legs the hood's top comes to about 1.8 m)

# ───────────────────────────── the skeleton and its clips ─────────────────────────────
G2B = np.array([[1, 0, 0], [0, 0, -1], [0, 1, 0]], float)   # glTF (x right, y up, z front) to Blender (z up, facing -y)
def read_glb(path):
    f = open(path, 'rb'); f.read(12); n, _ = struct.unpack('<II', f.read(8)); j = json.loads(f.read(n)); n2, _ = struct.unpack('<II', f.read(8)); blob = f.read(n2)
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; w = {'SCALAR': 1, 'VEC3': 3, 'VEC4': 4}[a['type']]
        return np.frombuffer(blob, np.float32, a['count'] * w, bv.get('byteOffset', 0) + a.get('byteOffset', 0)).reshape(a['count'], w).astype(float)
    return j, acc
GL, ACC = read_glb(SRC)
short = lambda n: n.split(':')[-1].replace('mixamorig', '')
NODE = {short(n['name']): i for i, n in enumerate(GL['nodes']) if 'mixamorig' in n.get('name', '')}
FULL = {short(n['name']): n['name'] for n in GL['nodes'] if 'mixamorig' in n.get('name', '')}
PARENT = {'Hips': None}
for n in GL['nodes']:
    for c in n.get('children', []):
        if 'mixamorig' in GL['nodes'][c].get('name', ''): PARENT[short(GL['nodes'][c]['name'])] = short(n['name']) if 'mixamorig' in n.get('name', '') else None
BONES = []                                                   # parents before children
def _walk(b):
    BONES.append(b)
    for c in [c for c, p in PARENT.items() if p == b]: _walk(c)
_walk('Hips')
BI = {b: i for i, b in enumerate(BONES)}; NB = len(BONES)
MIR = np.array([BI[b.replace('Left', '@').replace('Right', 'Left').replace('@', 'Right')] for b in BONES])   # each bone's mirror twin
REST = {b: G2B @ np.array(GL['nodes'][NODE[b]].get('translation', [0, 0, 0]), float) * K for b in BONES}   # offsets from the parent, metres
CLIPS = {}
for a in GL['animations']:
    tr = {}
    for ch in a['channels']:
        s = a['samplers'][ch['sampler']]; b = short(GL['nodes'][ch['target']['node']].get('name', ''))
        if b in BI: tr[(b, ch['target']['path'])] = (ACC(s['input'])[:, 0], ACC(s['output']))
    CLIPS[a['name']] = tr

# TIDY: the library's skeleton has a shorter right forearm than left and hip joints 39 cm apart. Make the two sides
# the mean of each other and bring the hips in to a human width; the clips only rotate bones, so they play as before.
FLIP = np.array([-1.0, 1, 1])
TIDIED = set()
for b in BONES:
    if b.startswith('Left'):
        r = 'Right' + b[4:]; mean = (REST[b] + REST[r] * FLIP) / 2
        if b == 'LeftUpLeg': mean[0] = 0.092
        REST[b] = mean; REST[r] = mean * FLIP; TIDIED |= {b, r}

def quat_mat(q):
    x, y, z, w = q
    return np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]])
def sample(track, t):
    ts, v = track; t = t % ts[-1] if ts[-1] > 0 else 0.0
    i = int(np.clip(np.searchsorted(ts, t) - 1, 0, len(ts) - 2)); f = (t - ts[i]) / max(1e-9, ts[i + 1] - ts[i]); a, b = v[i], v[i + 1]
    if v.shape[1] == 4:
        if a.dot(b) < 0: b = -b
        q = a * (1 - f) + b * f; return q / np.linalg.norm(q)
    return a * (1 - f) + b * f
FPOSE = {}   # finger turns for pictures (set once the hands exist)
def pose(clip, t, rest=None):
    """Where every joint is at time t of a clip: {bone: (rotation 3x3, position)} in Blender axes, metres. As the game
    plays them: the hips keep their height track but stay over the same spot. rest: joint offsets (default REST)."""
    out = {}; REST_ = rest or REST
    for b in BONES:
        Rp, pp = out[PARENT[b]] if PARENT[b] else (np.eye(3), np.zeros(3))
        R = Rp @ (G2B @ quat_mat(sample(clip[(b, 'rotation')], t)) @ G2B.T) if (b, 'rotation') in clip else Rp
        if b in FPOSE: R = R @ FPOSE[b]
        off = REST_[b]
        if b == 'Hips' and (b, 'translation') in clip: off = np.array([off[0], off[1], sample(clip[(b, 'translation')], t)[1] * K])
        out[b] = (R, pp + Rp @ off)
    return out

# ───────────────────────────── the bind pose ─────────────────────────────
def rot_to(a, b):
    """The smallest rotation taking direction a to direction b."""
    a = a / np.linalg.norm(a); b = b / np.linalg.norm(b); v = np.cross(a, b); c = a.dot(b); s = np.linalg.norm(v)
    if s < 1e-9: return np.eye(3)
    k = v / s; Kx = np.array([[0, -k[2], k[1]], [k[2], 0, -k[0]], [-k[1], k[0], 0]])
    return np.eye(3) + Kx * s + Kx @ Kx * (1 - c)
def rot_z(a): c, s = math.cos(a), math.sin(a); return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])
# PROPORTIONS (pass 2, owner: "the character still needs a lot of work"): the library's figure is squat, hip joints at
# 40% of standing height and hands that end at the hips. A lean young writer: legs half as long again and longer arms.
# The clips only turn bones, so they play on the longer limbs as they are; only the hips' height track has to change,
# so for every key of it the standing foot (the lower ankle) stays where the clip had it (HIPSY, sent to the game).
LEG_S, UPARM_S, FOREARM_S = 1.5, 1.45, 1.3
REST0 = {b: v.copy() for b, v in REST.items()}
for _s in ('Left', 'Right'):
    REST[_s + 'Leg'] = REST[_s + 'Leg'] * LEG_S; REST[_s + 'Foot'] = REST[_s + 'Foot'] * LEG_S
    REST[_s + 'ForeArm'] = REST[_s + 'ForeArm'] * UPARM_S; REST[_s + 'Hand'] = REST[_s + 'Hand'] * FOREARM_S
# (pass 3, owner: the neck from behind looks "kinda... not right"): the library's neck joint sits 26 cm over the chest
# joint, so the head rode high over sloping shoulders. The neck is a little shorter, so the head sits down in the hood.
NECK_S = 0.92
REST['Neck'] = REST['Neck'] * NECK_S
HIPSY = {}
def _lift(clip, t):
    a, b = pose(clip, t, REST0), pose(clip, t, REST)
    side = min(('Left', 'Right'), key=lambda s_: a[s_ + 'Foot'][1][2])
    return a[side + 'Foot'][1][2] - b[side + 'Foot'][1][2]
for _name, _clip in CLIPS.items():
    if ('Hips', 'translation') not in _clip: continue
    ts, vals = _clip[('Hips', 'translation')]; vals = vals.copy()
    for i, t in enumerate(ts): vals[i, 1] += _lift(_clip, min(t, ts[-1] - 1e-4)) / K
    _clip[('Hips', 'translation')] = (ts, vals); HIPSY[_name] = [round(float(v), 5) for v in vals[:, 1]]
HIPS_LIFT = _lift({k: v for k, v in CLIPS['Idle_Loop'].items() if k != ('Hips', 'translation')}, 0.0)   # for clips with no height track
IDLE = pose(CLIPS['Idle_Loop'], 0.0)
AIM = {  # where each left limb bone points in the bind pose (x out to the left, -y forward, z up)
    'LeftArm': (math.sin(math.radians(24)), -0.04, -math.cos(math.radians(24))),
    'LeftForeArm': (math.sin(math.radians(15)), -0.2, -math.cos(math.radians(15))),
    'LeftUpLeg': (0.03, -0.07, -1.0),
    'LeftLeg': (0.02, 0.06, -1.0),
}
CHILD = {'LeftArm': 'LeftForeArm', 'LeftForeArm': 'LeftHand', 'LeftUpLeg': 'LeftLeg', 'LeftLeg': 'LeftFoot'}
BIND = {}
def build_bind():
    for b in BONES:
        if b.startswith('Right'): continue
        Rp, pp = BIND[PARENT[b]] if PARENT[b] else (np.eye(3), np.zeros(3))
        R = Rp
        if b in AIM: R = rot_to(Rp @ REST[CHILD[b]], np.array(AIM[b])) @ Rp
        if b in ('LeftFoot', 'LeftToeBase'):
            # the foot as it stands flat in the idle clip, turned to point straight ahead
            h = IDLE['LeftFoot'][0] @ TOE0; R = rot_z(-math.atan2(h[0], -h[1])) @ IDLE[b][0]
        BIND[b] = (R, pp + Rp @ REST[b])
    cx = BIND['Hips'][1][0]
    for b in BONES:
        if b.startswith('Right'):
            R, p = BIND['Left' + b[5:]]; BIND[b] = (R * np.outer(FLIP, FLIP), np.array([2 * cx - p[0], p[1], p[2]]))
TOE0 = REST['LeftToeBase'].copy()                            # the library's own foot bone: which way the foot points
HIPS0 = REST['Hips'].copy()
build_bind()
# stand it on the ground: the ankle as high as it is in the idle clip, where the feet are flat on z = 0
REST['Hips'] = HIPS0 + np.array([0, 0, IDLE['LeftFoot'][1][2] - BIND['LeftFoot'][1][2]]); BIND.clear(); build_bind()
# the library's toe joint sits far out in front of any real shoe; put it at the ball of the foot, on the sole, so the
# toe of the trainer bends where a foot does (the clips only rotate it)
ANKLE = BIND['LeftFoot'][1]; BALL = np.array([ANKLE[0], ANKLE[1] - 0.135, 0.014])
REST['LeftToeBase'] = BIND['LeftFoot'][0].T @ (BALL - ANKLE); REST['RightToeBase'] = REST['LeftToeBase'] * FLIP
BIND.clear(); build_bind(); REST['Hips'] = HIPS0            # the bind pose keeps its lowered hips; the skeleton keeps its own
J = {b: BIND[b][1] for b in BONES}                           # the joints the model is built around
CX = J['Hips'][0]                                            # the figure's centre line
print('WRITER joints (m):', {b: [round(float(v), 3) for v in J[b]] for b in ('Hips', 'Spine', 'Spine1', 'Spine2', 'Head', 'LeftArm', 'LeftForeArm', 'LeftHand', 'LeftUpLeg', 'LeftLeg', 'LeftFoot', 'LeftToeBase')})


# ───────────────────────────── small tools ─────────────────────────────
def sstep(a, b, x): t = np.clip((np.asarray(x, float) - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
def bump(c, w, x): return np.exp(-((np.asarray(x, float) - c) / w) ** 2)
def curve(xs, ys):
    """A smooth curve through keys (x, y): y may be a number or a point. Returns f(x), for arrays of x."""
    xs = np.asarray(xs, float); ys = np.asarray(ys, float); one = ys.ndim == 1
    assert (np.diff(xs) > 0).all(), ('curve keys out of order', xs)
    if one: ys = ys[:, None]
    m = np.zeros_like(ys); m[1:-1] = (ys[2:] - ys[:-2]) / (xs[2:] - xs[:-2])[:, None]; m[0] = (ys[1] - ys[0]) / (xs[1] - xs[0]); m[-1] = (ys[-1] - ys[-2]) / (xs[-1] - xs[-2])
    def f(x):
        x = np.asarray(x, float); xc = np.clip(x, xs[0], xs[-1]); i = np.clip(np.searchsorted(xs, xc) - 1, 0, len(xs) - 2)
        h = (xs[i + 1] - xs[i]); t = ((xc - xs[i]) / h)[..., None]; h = h[..., None]
        y = (2 * t ** 3 - 3 * t ** 2 + 1) * ys[i] + (t ** 3 - 2 * t ** 2 + t) * h * m[i] + (-2 * t ** 3 + 3 * t ** 2) * ys[i + 1] + (t ** 3 - t ** 2) * h * m[i + 1]
        return y[..., 0] if one else y
    return f
FOLD = 0.9   # how deep the cloth's folds are cut into the mesh (pass 2: the sharp creases are in the normal map now)
def crease(x): return 1 - 2 * np.abs(np.sin(np.asarray(x) / 2)) ** 0.75   # a fold's profile: a sharp ridge, a round valley; -1..1
def unit(v): v = np.asarray(v, float); return v / np.maximum(1e-12, np.linalg.norm(v, axis=-1, keepdims=True))
def sup(c, n): return np.sign(c) * np.abs(c) ** (2.0 / n)   # a superellipse: n = 2 round, higher squarer
def fbm(P, scale, seed=0.0):
    """Soft noise at points P (..., 3), about -1..1: breaks up anything that would look ruled."""
    flat = P.reshape(-1, 3) / scale
    return np.array([noise.noise(Vector((x + seed, y - seed * 0.7, z + seed * 1.3))) for x, y, z in flat]).reshape(P.shape[:-1])
def grid_normals(P, closed, out=None):
    """Normals of a grid of points (rings, around, 3), turned to face outward (away from each ring's middle, or along `out`)."""
    du = (np.roll(P, -1, 1) - np.roll(P, 1, 1)) if closed else np.gradient(P, axis=1)
    dv = np.gradient(P, axis=0) if P.shape[0] > 1 else np.zeros_like(P)
    n = unit(np.cross(du, dv))
    ref = out if out is not None else P - P.mean(axis=1, keepdims=True)
    if (n * ref).sum() < 0: n = -n
    return n
def weights(**kw):
    """A weight row per point from named arrays, e.g. weights(Hips=a, Spine=b): normalised."""
    n = len(np.atleast_1d(next(iter(kw.values())))); W = np.zeros((n, NB))
    for b, w in kw.items(): W[:, BI[b]] += np.clip(np.asarray(w, float), 0, None)
    return W / np.maximum(1e-9, W.sum(1, keepdims=True))

# ───────────────────────────── finger bones (pass 2) ─────────────────────────────
# The library has no fingers, so the hands get their own bones: three a finger, three for the thumb. The game adds them
# under each hand (vx.extra) and turns them itself: relaxed, closed round the can, the index finger on the actuator.
# They rest in the hand's own frame (built straight), so turning them is all the pose there is.
HF = unit(J['LeftHand'] - J['LeftForeArm'])                    # along the fingers
hn = np.array([-1.0, 0, 0]); HN = unit(hn - HF * hn.dot(HF))   # out of the palm: toward the thigh
HT = np.cross(HF, HN); HT = HT if HT[1] < 0 else -HT           # the thumb's side: forward
def hand_pt(f, n, t): return J['LeftHand'] + np.outer(f, HF) + np.outer(n, HN) + np.outer(t, HT)
def rotm(axis, ang):
    k = unit(np.asarray(axis, float)); Kx = np.array([[0, -k[2], k[1]], [k[2], 0, -k[0]], [-k[1], k[0], 0]])
    return np.eye(3) + math.sin(ang) * Kx + (1 - math.cos(ang)) * Kx @ Kx
# name, knuckle (along the hand, across), phalanx lengths, half width, splay (degrees toward the thumb)
FINGERS = [('Index', 0.093, 0.0245, (0.043, 0.025, 0.021), 0.0104, 2.0), ('Middle', 0.097, 0.0075, (0.047, 0.029, 0.022), 0.0108, 0.0),
           ('Ring', 0.093, -0.0095, (0.044, 0.027, 0.021), 0.0102, -2.0), ('Pinky', 0.084, -0.0255, (0.035, 0.021, 0.019), 0.0092, -5.0)]
CHAINS = {}   # name: dict(bones, joints [3 joints + tip], dir, axis (flexion), width, pad (palm side))
for nm, f0, t0, lens, wd, spl in FINGERS:
    d = unit(math.cos(math.radians(spl)) * HF + math.sin(math.radians(spl)) * HT); j1 = hand_pt(np.array([f0]), np.array([0.0]), np.array([t0]))[0]
    js = [j1]; [js.append(js[-1] + d * L) for L in lens]
    pad = unit(HN - d * HN.dot(d))
    CHAINS[nm] = dict(bones=['LeftHand' + nm + str(i) for i in (1, 2, 3)], joints=js, dir=d, axis=unit(np.cross(d, pad)), width=wd, pad=pad, lens=lens)
_cmc = hand_pt(np.array([0.012]), np.array([0.011]), np.array([0.019]))[0]; _mcp = hand_pt(np.array([0.05]), np.array([0.021]), np.array([0.042]))[0]
_d2 = unit(0.8 * unit(_mcp - _cmc) + 0.3 * HF); _pad = unit(0.55 * HN - 0.83 * HT); _pad = unit(_pad - _d2 * _pad.dot(_d2))
CHAINS['Thumb'] = dict(bones=['LeftHandThumb1', 'LeftHandThumb2', 'LeftHandThumb3'], joints=[_cmc, _mcp, _mcp + _d2 * 0.033, _mcp + _d2 * 0.061], dir=_d2, axis=unit(np.cross(_d2, _pad)), width=0.0118, pad=_pad, lens=(float(np.linalg.norm(_mcp - _cmc)), 0.033, 0.028))
EXTRA = []
for side in ('Left', 'Right'):
    for nm, ch in CHAINS.items():
        par = side + 'Hand'
        for i, b in enumerate(ch['bones']):
            bb = side + b[4:]; jp = ch['joints'][i] if side == 'Left' else np.array([2 * CX - ch['joints'][i][0], ch['joints'][i][1], ch['joints'][i][2]])
            BONES.append(bb); PARENT[bb] = par; FULL[bb] = 'mixamorig:' + bb
            BIND[bb] = (BIND[side + 'Hand'][0], jp); J[bb] = jp; REST[bb] = BIND[par][0].T @ (jp - BIND[par][1]); EXTRA.append(bb); par = bb
BI = {b: i for i, b in enumerate(BONES)}; NB = len(BONES)
MIR = np.array([BI[b.replace('Left', '@').replace('Right', 'Left').replace('@', 'Right')] for b in BONES])

# ───────────────────────────── meshes: grids of points, collected per exported object ─────────────────────────────
MESHES = {}; PIECES = []
class Mesh:
    def __init__(s, name): s.name = name; s.V = []; s.W = []; s.F = []; s.M = []; s.UV = []; s.UP = []; s.PID = []; s.n = 0; MESHES[name] = s
MATS = ['Hoodie', 'Trousers', 'Gloves', 'Shoes', 'Sole', 'Void', 'Trim', 'Mask', 'Pack', 'Can', 'Cap', 'Reflect', 'Detail', 'Cotton', 'Lace']
def grid(mesh, P, mat, W, closed=True, cap0=False, cap1=False, out=None, mirror=False, name='', paint=None, texel=1.0):
    """Add a grid of points P (rings, around, 3) to a mesh as quads. W: weights (rings*around, bones). closed: the rings
    join up. cap0/cap1: close the first/last ring with a fan. mirror: add the right-hand twin too. paint: how the atlas
    painter treats this piece (see the textures section)."""
    R, N = P.shape[:2]; nrm = grid_normals(P, closed, out)
    # which way round the quads go, so their faces look outward
    a = np.cross(P[:-1, 1] - P[:-1, 0], P[1:, 0] - P[:-1, 0]); flip = (a * nrm[:-1, 0]).sum() < 0
    # real-size UVs: distance round each ring and along the piece, in figure heights (1.78 m), for the tiling weave
    seg = np.linalg.norm(np.diff(P, axis=1, append=P[:, :1] if closed else P[:, -1:]), axis=2)
    ua = np.concatenate([np.zeros((R, 1)), np.cumsum(seg, 1)], 1); ua = ua - ua[:, N if closed else N - 1][:, None] / 2
    va = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(P, axis=0), axis=2).mean(1))])
    piece = dict(name=name or mat, mesh=mesh.name, w=float(seg.sum(1).max()), h=float(va[-1]), R=R, N=N, closed=closed, P=P, nrm=nrm, paint=paint, texel=texel, mat=mat)
    for side in ((1, -1) if mirror else (1,)):
        Ps = P.reshape(-1, 3).copy(); Ws = W
        if side < 0: Ps[:, 0] = 2 * CX - Ps[:, 0]; Ws = W[:, MIR]
        base = mesh.n; mesh.V.append(Ps); mesh.W.append(Ws); mesh.n += R * N
        pid = len(PIECES); PIECES.append(dict(piece, side=side))
        nj = N if closed else N - 1
        for r in range(R - 1):
            for j in range(nj):
                j2 = (j + 1) % N; q = [(r, j, j), (r, j2, j + 1), (r + 1, j2, j + 1), (r + 1, j, j)]   # ring, point, column (the seam column runs past the last point)
                if flip != (side < 0): q = q[::-1]
                mesh.F.append([base + rr * N + jj for rr, jj, _ in q]); mesh.M.append(MATS.index(mat))
                for rr, jj, jc in q:
                    mesh.UV.append((ua[rr, jc] / 1.78, va[rr] / 1.78)); mesh.UP.append((jc / nj, rr / (R - 1))); mesh.PID.append(pid)
        for cap, r in ((cap0, 0), (cap1, R - 1)):
            if cap is False or cap is None: continue
            c = P[r].mean(0) + (0 if cap is True else np.asarray(cap, float))
            if side < 0: c[0] = 2 * CX - c[0]
            mesh.V.append(c[None]); mesh.W.append(Ws.reshape(R, N, NB)[r].mean(0)[None]); ci = mesh.n; mesh.n += 1
            for j in range(N):
                j2 = (j + 1) % N; tri = [(base + r * N + j, j), (base + r * N + j2, j + 1), (ci, j + 0.5)]
                if (flip != (side < 0)) != (r == 0): tri = tri[::-1]
                mesh.F.append([vi for vi, _ in tri]); mesh.M.append(MATS.index(mat))
                for vi, jc in tri:
                    mesh.UV.append((ua[r, int(jc)] / 1.78 if vi != ci else 0.0, va[r] / 1.78 + (0.01 if vi == ci else 0))); mesh.UP.append((jc / N, r / (R - 1))); mesh.PID.append(pid)
    return piece
def tube(path, s, rf, ro, th, side=1, pw=2.0, front=(0, -1, 0)):
    """Rings along a path. path(s) -> points; rf, ro: radius toward the front and out to the side, per ring or per
    point; th: the angles round a ring (0 at the front, a quarter turn at the outside). Returns points and frames."""
    C = path(s); T = unit(path(np.asarray(s) + 1e-3) - path(np.asarray(s) - 1e-3)); fr = np.asarray(front, float)
    EF = unit(fr - T * (T @ fr)[:, None]); EO = side * np.cross(EF, T)
    rf = np.asarray(rf, float); ro = np.asarray(ro, float)
    if rf.ndim == 1: rf = rf[:, None]
    if ro.ndim == 1: ro = ro[:, None]
    P = C[:, None] + EF[:, None] * (rf * sup(np.cos(th), pw)[None])[..., None] + EO[:, None] * (ro * sup(np.sin(th), pw)[None])[..., None]
    return P, C, T, EF, EO

body = Mesh('SM_Char_Writer_Body')

# ───────────────────────────── the jacket: body ─────────────────────────────
zP, zH, zS, zN = J['Hips'][2], J['LeftUpLeg'][2], J['LeftArm'][2], J['Head'][2]   # pelvis, hip joints, shoulder joints, base of the neck
def spine_w(X):
    """Weights for anything lying on the trunk, by height: hips, three spine bones, the collar bones out at the shoulders."""
    z = X[:, 2]; dx = np.abs(X[:, 0] - CX)
    a = sstep(J['Spine'][2] - 0.05, J['Spine'][2] + 0.06, z); b = sstep(J['Spine1'][2] - 0.05, J['Spine1'][2] + 0.06, z); c = sstep(J['Spine2'][2] - 0.06, J['Spine2'][2] + 0.07, z)
    sh = 0.75 * sstep(0.07, 0.2, dx) * sstep(zS - 0.12, zS + 0.0, z)
    left = X[:, 0] > CX
    return weights(Hips=1 - a, Spine=a * (1 - b), Spine1=b * (1 - c), Spine2=c * (1 - sh), LeftShoulder=c * sh * left, RightShoulder=c * sh * ~left)
HEM = zP - 0.02    # the jacket's hem: a waist-length shell, short enough that a lifted thigh clears it
# (pass 3: square shoulders. Pass 2's jacket narrowed in a dome from the armpits to the neck, so the shoulders sloped
#  away under the hood. Now the shoulder line runs out level to the deltoids and the trapezius slopes in to the neck.)
TZ = [HEM, HEM + 0.05, HEM + 0.11, zP + 0.26, zS - 0.13, zS - 0.02, zS + 0.03, zS + 0.055, zS + 0.075, zN + 0.0]
t_a = curve(TZ, [0.166, 0.167, 0.172, 0.168, 0.178, 0.188, 0.19, 0.167, 0.124, 0.074])     # half width (pass 2: lean, not puffy)
t_f = curve(TZ, [0.104, 0.105, 0.11, 0.106, 0.116, 0.112, 0.1, 0.09, 0.08, 0.068])     # depth to the front
t_b = curve(TZ, [0.096, 0.098, 0.104, 0.102, 0.11, 0.11, 0.104, 0.096, 0.086, 0.074])     # depth to the back
t_y = curve(TZ, [J['Hips'][1] - 0.005, J['Hips'][1] - 0.005, J['Hips'][1] - 0.01, J['Spine1'][1], J['Spine2'][1] + 0.02, J['Spine2'][1] + 0.035, J['LeftArm'][1] - 0.02, J['LeftArm'][1] - 0.021, J['Head'][1] - 0.015, J['Head'][1] - 0.012])
t_n = curve(TZ, [2.6, 2.6, 2.7, 2.7, 2.6, 2.6, 2.7, 2.5, 2.2, 2.0])
def torso_surface(z, th):
    """The jacket body: a point for each height z and angle th round the trunk (0 front, a quarter turn = his left)."""
    z, th = np.broadcast_arrays(np.asarray(z, float), np.asarray(th, float)); c = np.cos(th); n = t_n(z)
    x = CX + t_a(z) * sup(np.sin(th), n); y = t_y(z) - np.where(c > 0, t_f(z), t_b(z)) * sup(c, n)
    return np.stack([x, y, z], -1)
NT = 64; th_t = np.arange(NT) / NT * 2 * math.pi
z_t = np.concatenate([np.linspace(TZ[0], TZ[2], 7)[:-1], np.linspace(TZ[2], TZ[5], 22)[:-1], np.linspace(TZ[5], TZ[9], 15)])
_THF = np.linspace(0, 2 * math.pi, 361)
def surf_r(surface, cy, z, phi):
    """How far a body surface (surface(z, th) -> points) is from its middle line (CX, cy(z)) at heights z, toward polar
    angles phi (0 = straight ahead, a quarter turn = his left). For laying the hood on the jacket, and the seams."""
    z = np.atleast_1d(np.asarray(z, float)); phi = np.atleast_1d(np.asarray(phi, float))
    S = surface(z[:, None], _THF[None]); dx = S[..., 0] - CX; dy = -(S[..., 1] - cy(z)[:, None])
    ps = np.unwrap(np.arctan2(dx, dy), axis=1); rs = np.hypot(dx, dy); out = np.empty(len(z))
    for i in range(len(z)):
        p = (phi[i] - ps[i, 0]) % (2 * math.pi) + ps[i, 0]; out[i] = np.interp(p, ps[i], rs[i])
    return out
def torso_r(z, phi): return surf_r(torso_surface, t_y, z, phi)
def polar(P):
    """Each point's height, polar angle round the trunk's middle line and distance from it."""
    P = np.asarray(P, float).reshape(-1, 3); dx = P[:, 0] - CX; dy = -(P[:, 1] - t_y(P[:, 2]))
    return P[:, 2], np.arctan2(dx, dy), np.hypot(dx, dy)
Pt = torso_surface(z_t[:, None], th_t[None])
def torso_folds(P):
    n = grid_normals(P, True); z = P[..., 2]; th = np.broadcast_to(th_t[None], z.shape); front = np.cos(th); side = np.abs(np.sin(th))
    d = np.zeros(z.shape); wob = fbm(P, 0.14, 3.0)
    # the shell blouses a little over its elastic hem: a few gathers running up from the band
    g = sstep(HEM + 0.045, HEM + 0.07, z) * (1 - sstep(HEM + 0.08, HEM + 0.24, z))
    d += g * 0.0045 * crease(th * 9 + 4.0 * wob)
    d -= 0.004 * bump(HEM + 0.025, 0.02, z)                                             # the band bites in
    # where the trunk bends the cloth breaks in a couple of slanting folds across the flanks and the back
    w = bump(zP + 0.19, 0.08, z) * (0.25 + 0.75 * side) * (1 - 0.7 * sstep(0.2, 1.0, front))
    d += w * 0.006 * crease((z - zP) / 0.075 * 2 * math.pi + 2.2 * np.sin(th) + 4.0 * wob)
    # drag lines from the armpits in toward the chest and the shoulder blades
    arm = bump(zS - 0.15, 0.1, z) * sstep(0.35, 0.95, side)
    d += arm * 0.005 * crease((z - zS) / 0.085 * 2 * math.pi - side * 5 + 3.0 * wob)
    d += 0.006 * fbm(P, 0.2, 11.0) + 0.002 * fbm(P, 0.06, 5.0)                          # nothing hangs perfectly
    return P + n * (FOLD * d)[..., None]
Pt = torso_folds(Pt)
grid(body, Pt, 'Hoodie', spine_w(Pt.reshape(-1, 3)), name='jacket')

# ───────────────────────────── the jacket: sleeves ─────────────────────────────
def limb_path(names, lead=0.12):
    """A smooth path through a chain of joints; s is the distance along it from the first joint (negative before it)."""
    pts = [J[n] for n in names]; d = np.cumsum([0] + [np.linalg.norm(pts[i + 1] - pts[i]) for i in range(len(pts) - 1)])
    xs = [-lead] + list(d) + [d[-1] + lead]; ys = [pts[0] - unit(pts[1] - pts[0]) * lead] + pts + [pts[-1] + unit(pts[-1] - pts[-2]) * lead]
    return curve(xs, ys), d
arm_path, arm_d = limb_path(['LeftArm', 'LeftForeArm', 'LeftHand']); sE, sW = arm_d[1], arm_d[2]
NS = 28; th_s = np.arange(NS) / NS * 2 * math.pi
# (pass 3: the cap is a set-in sleeve's, rounding over the deltoid and gone into the body: pass 2's ran on up the line of
#  the arm toward the neck, which made one long slope from the hood down the arm)
s_s = np.concatenate([np.linspace(-0.08, 0.0, 6)[:-1], np.linspace(0.0, sW - 0.075, 38)[:-1], np.linspace(sW - 0.075, sW - 0.01, 7)])
r_sleeve = curve([-0.08, -0.055, -0.025, 0.05, sE - 0.03, sE + 0.06, sW - 0.1, sW - 0.075, sW - 0.055, sW - 0.01], [0.01, 0.036, 0.058, 0.064, 0.056, 0.054, 0.05, 0.047, 0.041, 0.039])
Ps, Cs, Ts, EFs, EOs = tube(arm_path, s_s, r_sleeve(s_s) * 0.95, r_sleeve(s_s), th_s)
def sleeve_folds(P):
    n = grid_normals(P, True); s = np.broadcast_to(s_s[:, None], P.shape[:2]); th = np.broadcast_to(th_s[None], P.shape[:2])
    front = np.cos(th); out_ = np.sin(th); d = np.zeros(s.shape); wob = fbm(P, 0.11, 2.0); amp = 0.75 + 0.5 * fbm(P, 0.07, 9.0)
    live = sstep(-0.02, 0.06, s) * (1 - sstep(sW - 0.075, sW - 0.06, s))          # none on the shoulder cap or the cuff
    # long drags that spiral down from the shoulder
    d += live * 0.002 * amp * crease(s / 0.13 * 2 * math.pi + th * 1.0 + 4.5 * wob)
    # the elbow: two or three sharp creases inside the bend, smooth and proud over the point
    e = bump(sE, 0.055, s)
    d += live * e * sstep(0.0, 0.9, front) * 0.007 * crease((s - sE) / 0.034 * 2 * math.pi + 1.2 * out_ + 3.0 * wob)
    d += live * e * 0.005 * sstep(0.2, 1.0, -front)
    # the sleeve is long: it breaks in slanting folds above the cuff
    g = sstep(sW - 0.19, sW - 0.09, s)
    d += live * g * (0.004 + 0.006 * amp * crease((s - sW) / 0.06 * 2 * math.pi + th * 1.0 + 1.5 * np.sin(th + 0.7) + 4.0 * wob))
    return P + n * (FOLD * d)[..., None]
Ps = sleeve_folds(Ps)
def sleeve_w(P):
    s = np.broadcast_to(s_s[:, None], P.shape[:2]).ravel(); inner = np.clip(-np.sin(np.broadcast_to(th_s[None], P.shape[:2])), 0, 1).ravel()
    arm = sstep(-0.07 + 0.07 * inner, 0.05 + 0.1 * inner, s); fore = sstep(sE - 0.06, sE + 0.06, s)
    return weights(LeftShoulder=(1 - arm) * 0.6, Spine2=(1 - arm) * 0.4, LeftArm=arm * (1 - fore), LeftForeArm=arm * fore)
grid(body, Ps, 'Hoodie', sleeve_w(Ps), mirror=True, cap0=True, name='sleeve')
# the cuff: an elastic band with its own thickness, turned in at the end
s_c = np.array([sW - 0.065, sW - 0.058, sW - 0.03, sW - 0.006, sW - 0.002, sW - 0.006]); r_c = np.array([0.039, 0.045, 0.045, 0.044, 0.04, 0.033])
Pc = tube(arm_path, s_c, r_c * 0.95, r_c, th_s)[0]
grid(body, Pc, 'Trim', weights(LeftForeArm=np.ones(Pc.shape[0] * Pc.shape[1])), mirror=True, name='cuff')

# ───────────────────────────── trousers ─────────────────────────────
# the seat: from the waistband (under the jacket) round the hips and closed between the legs
SZ = [zH - 0.06, zH - 0.05, zH - 0.02, zH + 0.04, zP + 0.04, zP + 0.12]
s_a = curve(SZ, [0.02, 0.055, 0.128, 0.16, 0.162, 0.158]); s_f = curve(SZ, [0.03, 0.055, 0.084, 0.094, 0.096, 0.094]); s_b = curve(SZ, [0.03, 0.065, 0.096, 0.101, 0.098, 0.094])
NP_ = 48; th_p = np.arange(NP_) / NP_ * 2 * math.pi; z_p = np.concatenate([np.linspace(SZ[0], SZ[2], 6)[:-1], np.linspace(SZ[2], SZ[5], 12)])
cp = np.cos(th_p)[None]
Pp = np.stack([CX + s_a(z_p)[:, None] * sup(np.sin(th_p), 2.3)[None], (J['Hips'][1] - 0.0) - np.where(cp > 0, s_f(z_p)[:, None], s_b(z_p)[:, None]) * sup(cp, 2.3), np.broadcast_to(z_p[:, None], (len(z_p), NP_))], -1)
Pp = Pp + grid_normals(Pp, True) * (0.004 * fbm(Pp, 0.1, 21.0))[..., None]
grid(body, Pp, 'Trousers', weights(Hips=np.ones(Pp.shape[0] * NP_)), cap0=True, name='seat')
# the legs: cargo trousers, full at the thigh, tapering to an elastic cuff that sits on the trainer
leg_path, leg_d = limb_path(['LeftUpLeg', 'LeftLeg', 'LeftFoot']); sK, sA = leg_d[1], leg_d[2]
NL = 36; th_l = np.arange(NL) / NL * 2 * math.pi
CUFF = sA - 0.075                                             # where the leg ends: just above the ankle, over the trainer's collar
s_l = np.concatenate([np.linspace(-0.1, 0.02, 6)[:-1], np.linspace(0.02, CUFF - 0.02, 50)[:-1], np.linspace(CUFF - 0.02, CUFF + 0.045, 7)])
r_leg = curve([-0.1, -0.07, 0.0, 0.1, sK - 0.06, sK + 0.04, sK + 0.1, CUFF - 0.06, CUFF - 0.02, CUFF, CUFF + 0.045], [0.02, 0.064, 0.077, 0.073, 0.06, 0.058, 0.056, 0.054, 0.052, 0.046, 0.044])
Pl, Cl, Tl, EFl, EOl = tube(leg_path, s_l, r_leg(s_l), r_leg(s_l) * 0.97, th_l)
def leg_folds(P):
    n = grid_normals(P, True); s = np.broadcast_to(s_l[:, None], P.shape[:2]); th = np.broadcast_to(th_l[None], P.shape[:2])
    front = np.cos(th); out_ = np.sin(th); d = np.zeros(s.shape); wob = fbm(P, 0.12, 31.0); amp = 0.75 + 0.5 * fbm(P, 0.08, 33.0)
    live = sstep(0.0, 0.08, s) * (1 - sstep(CUFF - 0.012, CUFF, s))
    # whiskers fanning from the crotch across the top of the thigh
    d += live * (1 - sstep(0.08, 0.26, s)) * 0.005 * crease(s / 0.06 * 2 * math.pi - out_ * 3.5 + 3.0 * wob) * (0.3 + 0.7 * sstep(-0.6, 0.4, front))
    # the knee: a shaped panel in front, sharp creases behind
    kn = bump(sK, 0.07, s)
    d += live * kn * 0.009 * sstep(0.1, 0.9, front)
    d += live * kn * sstep(0.1, 0.9, -front) * 0.007 * crease((s - sK) / 0.036 * 2 * math.pi + 1.2 * out_ + 3.0 * wob)
    # long slanting drags down the shin, then the cloth breaks over the cuff
    d += live * sstep(sK + 0.03, sK + 0.1, s) * 0.002 * amp * crease((s - sK) / 0.15 * 2 * math.pi + th * 1.0 + 4.5 * wob)
    g = sstep(CUFF - 0.17, CUFF - 0.07, s)
    d += live * g * (0.005 + 0.007 * amp * crease((s - CUFF) / 0.065 * 2 * math.pi + th * 1.0 + 1.6 * np.sin(th + 0.4) + 4.0 * wob))
    d += live * 0.004 * fbm(P, 0.16, 39.0)
    return P + n * (FOLD * d)[..., None]
Pl = leg_folds(Pl)
def leg_w(P):
    s = np.broadcast_to(s_l[:, None], P.shape[:2]).ravel(); inner = np.clip(-np.sin(np.broadcast_to(th_l[None], P.shape[:2])), 0, 1).ravel()
    up = sstep(-0.06 + 0.06 * inner, 0.07 + 0.07 * inner, s); lo = sstep(sK - 0.07, sK + 0.07, s)
    return weights(Hips=1 - up, LeftUpLeg=up * (1 - lo), LeftLeg=up * lo)
grid(body, Pl, 'Trousers', leg_w(Pl), mirror=True, cap0=True, name='leg')

# ───────────────────────────── shared makers for the smaller parts ─────────────────────────────
def sweep(pts, ra, rb, n, up, pw=2.0):
    """Rings of n points round a line of points: ra across, rb along `up` (one direction, or one per point)."""
    pts = np.asarray(pts, float); T = unit(np.gradient(pts, axis=0)); up = np.broadcast_to(np.asarray(up, float), pts.shape)
    U = unit(up - T * (T * up).sum(1, keepdims=True)); S = np.cross(T, U); th = np.arange(n) / n * 2 * math.pi
    ra = np.broadcast_to(np.asarray(ra, float), (len(pts),)); rb = np.broadcast_to(np.asarray(rb, float), (len(pts),))
    return pts[:, None] + S[:, None] * (ra[:, None] * sup(np.sin(th), pw)[None])[..., None] + U[:, None] * (rb[:, None] * sup(np.cos(th), pw)[None])[..., None]
def resample(pts, n):
    pts = np.asarray(pts, float); d = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
    return curve(d, pts)(np.linspace(0, d[-1], n)) if len(pts) > 2 else pts[0] + (pts[1] - pts[0]) * np.linspace(0, 1, n)[:, None]
def patch(mesh, P, nrm, rows, cols, off, mat, W, name='', mirror=False, edge=0.002):
    """A panel sewn on top of a garment: the piece of its grid at rows x cols (index arrays), lifted by `off` with its
    border tucked back down, so it has an edge that catches light. W: the garment's weights (rings*around, bones)."""
    N = P.shape[1]; rows = np.asarray(rows); cols = np.asarray(cols) % N
    sub = P[np.ix_(rows, cols)]; sn = nrm[np.ix_(rows, cols)]; R2, N2 = sub.shape[:2]
    lift = np.full((R2, N2), off); lift[0, :] = lift[-1, :] = -edge; lift[:, 0] = lift[:, -1] = -edge
    Wp = W.reshape(P.shape[0], N, NB)[np.ix_(rows, cols)].reshape(-1, NB)
    return grid(mesh, sub + sn * lift[..., None], mat, Wp, closed=False, out=sn, mirror=mirror, name=name or mat)
def rep(a, k): return np.repeat(np.asarray(a), k)            # each ring twice: a hard edge that still shades smooth
def box_tube(mesh, pts, ra, rb, n, up, mat, W, pw=5.0, name='', mirror=False):
    """A closed, capped bar: straps, buckles, laces, zips."""
    P = sweep(pts, ra, rb, n, up, pw); return grid(mesh, P, mat, W if W.ndim == 2 else weights(**{BONES[int(W)]: np.ones(P.shape[0] * n)}), cap0=True, cap1=True, mirror=mirror, name=name or mat)
def one(bone, P): return weights(**{bone: np.ones(P.shape[0] * P.shape[1])})

# ───────────────────────────── jacket details ─────────────────────────────
Wt = spine_w(Pt.reshape(-1, 3)); Nt = grid_normals(Pt, True)
rz = lambda a, b: np.where((z_t >= a - 1e-6) & (z_t <= b + 1e-6))[0]
ct = lambda a, b: np.arange(int(round(a / (2 * math.pi) * NT)), int(round(b / (2 * math.pi) * NT)) + 1)
patch(body, Pt, Nt, rz(HEM, HEM + 0.052), np.arange(NT + 1), 0.005, 'Trim', Wt, 'hem')                       # the elastic hem band
patch(body, Pt, Nt, rz(HEM + 0.04, zN - 0.03), ct(-0.1, 0.1), 0.006, 'Hoodie', Wt, 'placket')               # the storm flap over the zip
for sgn in (1, -1):                                                                                           # slanted chest pockets, taped
    patch(body, Pt, Nt, rz(zP + 0.3, zP + 0.42), np.sort(sgn * ct(0.42, 0.62)), 0.004, 'Detail', Wt, 'pocket-zip')
    patch(body, Pt, Nt, rz(HEM + 0.1, HEM + 0.22), np.sort(sgn * ct(0.5, 1.05)), 0.005, 'Hoodie', Wt, 'pocket')
patch(body, Pt, Nt, rz(zS - 0.06, zS + 0.0), ct(math.pi - 0.75, math.pi + 0.75), 0.004, 'Hoodie', Wt, 'yoke')  # a back yoke under the pack's top

# ───────────────────────────── the pack's straps (laid out here: the hood drapes over them) ─────────────────────────────
def on_torso(th, z, off): p = torso_surface(z, th); e = 1e-3; n = unit(np.cross(torso_surface(z, th + e) - p, torso_surface(z + e, th) - p)); return p + n * off, n
PACK_DZ = -0.11   # (pass 3: the pack rides lower, under the shoulder blades, so the hood can drape onto the upper back)
STRAPS = []
for sgn in (1, -1):
    # up from the pack's top, over the trapezius (not up the neck, as in pass 2), down the chest and back under the arm
    keys = np.array([[2.78, zS - 0.08], [2.6, zS - 0.01], [2.45, zS + 0.035], [2.15, zS + 0.056], [1.57, zS + 0.063], [1.0, zS + 0.056], [0.7, zS + 0.03], [0.55, zS - 0.04], [0.55, zS - 0.19], [0.72, zS - 0.28], [1.4, zS - 0.345], [2.3, zS - 0.365]])
    kk = resample(np.concatenate([keys, np.zeros((len(keys), 1))], 1), 40); pts, nn = on_torso(sgn * kk[:, 0], kk[:, 1], 0.009)
    STRAPS.append((pts, nn))

# ───────────────────────────── the hood: from the face over the head, then a cowl draped on the shoulders ─────────────────────────────
hood = Mesh('SM_Char_Writer_Hood')
HY, HZ = J['Head'][1], zN                                    # the base of the neck; the skull sits forward and above it
# (owner, 16 Nov: the old hood closed round the face like Kenny's, under the chin and over the nose. A real hoodie:
#  the opening runs from the brow down to the throat, leaning back at the bottom, and the hood falls to the shoulders)
# (pass 3, owner: from behind the hood was "a periscope neck": a tall tube dropping straight into the pack. A hood that
#  is up hangs off the head and its back falls open onto the shoulders and the upper back, gathering where it lands:
#  below the back of the skull the rings widen out to the shoulders and are laid onto the jacket, with folds)
HU = [0.0, 0.15, 0.4, 0.62, 0.78, 0.9, 1.0]
h_c = curve(HU, [(HY - 0.138, HZ + 0.075), (HY - 0.106, HZ + 0.088), (HY - 0.044, HZ + 0.113), (HY - 0.006, HZ + 0.072), (HY + 0.012, HZ + 0.022), (HY + 0.016, HZ - 0.03), (HY + 0.014, HZ - 0.078)])
h_ang = curve(HU, np.radians([-14, -4, 22, 60, 80, 88, 90]))
h_a = curve(HU, [0.082, 0.104, 0.118, 0.13, 0.152, 0.176, 0.19])     # half width: the head, then out over the shoulders
h_top = curve(HU, [0.097, 0.108, 0.113, 0.112, 0.118, 0.13, 0.142])    # over the head, then down onto the upper back
h_bot = curve(HU, [0.138, 0.13, 0.104, 0.058, 0.064, 0.074, 0.082])    # down the throat (open), then onto the chest
NH = 48; psi = np.arange(NH) / NH * 2 * math.pi
u_h = np.concatenate([np.linspace(0, 0.15, 5)[:-1], np.linspace(0.15, 0.72, 18)[:-1], np.linspace(0.72, 1.0, 12)])
def hood_ring(u):
    c = h_c(u); a = h_ang(u); cu = np.cos(psi); top = cu > 0
    up = np.array([0, math.sin(a), math.cos(a)]); r = np.where(top, h_top(u), h_bot(u))
    peak = 0.006 * bump(0.5, 0.1, u) * np.clip(cu, 0, 1) ** 6                                   # the soft point at the back of the crown
    seam = -0.004 * (bump(0.55, 0.07, psi) + bump(2 * math.pi - 0.55, 0.07, psi)) * top * sstep(0.1, 0.25, u) * (1 - sstep(0.7, 0.85, u))   # the centre panel's two seams
    pw = 2.3 - 0.35 * bump(0.42, 0.16, u)                                                       # a round crown, not a box
    P = np.array([CX, c[0], c[1]]) + np.outer(h_a(u) * sup(np.sin(psi), pw), [1, 0, 0]) + np.outer((r + peak + seam) * sup(cu, 2.2), up)
    P[:, 2] += 0.045 * sstep(0.2, 1.0, -cu) * sstep(0.75, 1.0, u)                               # the neckline rises to the throat in front
    brim = sstep(0.25, 0.95, cu) * (1 - sstep(0.0, 0.14, u))                                    # the stiffened peak over the brow
    P[:, 1] -= 0.045 * brim; P[:, 2] -= 0.012 * brim
    chin = sstep(0.3, 1.0, -cu) * (1 - sstep(0.0, 0.2, u))                                      # the open bottom tucks back to the throat
    P[:, 1] += 0.012 * chin
    return P
Ph = np.array([hood_ring(u) for u in u_h])
uu = np.broadcast_to(u_h[:, None], Ph.shape[:2]); pp = np.broadcast_to(psi[None], Ph.shape[:2])
# the cowl: from below the back of the skull the cloth is laid onto the jacket (and over the straps), more and more
# toward its edge; where it lands it gathers in soft folds that run down from the neck
def drape(P, w, off):
    """Points P (n, 3) pulled toward the jacket's surface by w (0..1), to `off` outside it, and never inside it."""
    z, ph, rho = polar(P); want = torso_r(z, ph) + off; r2 = rho + (want - rho) * w; r2 = np.maximum(r2, torso_r(z, ph) + 0.004)
    Q = P.copy(); Q[:, 0] = CX + np.sin(ph) * r2; Q[:, 1] = t_y(z) - np.cos(ph) * r2
    for pts, nn in STRAPS:   # over a strap: lifted clear of it, eased off at its edges
        d = Q[:, None] - pts[None]; k = np.argmin((d ** 2).sum(-1), 1); dd = Q - pts[k]; n_ = nn[k]
        along = np.gradient(pts, axis=0)[k]; side_ = unit(np.cross(n_, unit(along))); lat = np.abs((dd * side_).sum(1)); h = (dd * n_).sum(1)
        lift = (0.02 - h) * (1 - sstep(0.02, 0.034, lat)) * (h > -0.02); Q += n_ * np.clip(lift, 0, None)[:, None]
    return Q
wd = sstep(0.66, 0.97, uu) ** 1.5                                                                       # how much each point lies on the body
gather = bump(1.0, 0.16, uu) * (0.5 + 0.5 * np.abs(np.cos(pp)))
off = 0.006 + 0.008 * gather * np.clip(crease(pp * 9 + 3.5 * fbm(Ph, 0.08, 57.0)) * 0.5 + 0.5, 0, 1)   # folds stand off the shoulders
Ph = drape(Ph.reshape(-1, 3), wd.ravel(), off.ravel()).reshape(Ph.shape)
# folds: the hood slumps behind the head, the cowl gathers, and the cloth is never drum-tight
nh = grid_normals(Ph, True)
dh = 0.004 * sstep(0.5, 0.7, uu) * (1 - sstep(0.85, 0.95, uu)) * np.clip(np.cos(pp), 0, 1) * crease(pp * 6 + 4 * fbm(Ph, 0.1, 51.0))
dh += 0.004 * fbm(Ph, 0.09, 53.0) * sstep(0.05, 0.2, uu)
Ph = Ph + nh * dh[..., None]
# the edge where it lies on the jacket: the cloth turns under, so it has a thickness and no gap shows
last = Ph[-1]; zl, pl, _ = polar(last); under = last.copy(); rr_ = torso_r(zl, pl) + 0.002
under[:, 0] = CX + np.sin(pl) * rr_; under[:, 1] = t_y(zl) - np.cos(pl) * rr_; under[:, 2] -= 0.004
roll = (last + under) / 2 + (last - Ph[-2]) * 0.2
Ph = np.concatenate([Ph, roll[None], under[None]]); u_h2 = np.concatenate([u_h, [1.0, 1.0]])
# the opening's edge: the cloth turns in over a drawcord channel, then the lining runs back inside
c0 = Ph[0].mean(0)
lip = c0 + (Ph[0] - c0) * 0.93 + np.array([0, -0.01, 0]); inner = c0 + (Ph[0] - c0) * 0.87 + np.array([0, 0.004, 0]); deep = c0 + (Ph[0] - c0) * 0.9 + np.array([0, 0.05, 0])
Ph = np.concatenate([deep[None], inner[None], lip[None], Ph]); u_hx = np.concatenate([[0, 0, 0], u_h2])
# weights: the head carries the hood round the skull, the neck the nape, the body (chest and shoulders) the cowl
_u = np.broadcast_to(u_hx[:, None], Ph.shape[:2]).ravel(); cw = sstep(0.72, 0.93, _u); hw = (1 - sstep(0.45, 0.8, _u)) * (1 - cw)
Wsp = spine_w(Ph.reshape(-1, 3)) * cw[:, None]; Wh = weights(Head=hw, Neck=(1 - hw) * (1 - cw)); Wh = Wh * (1 - cw)[:, None] + Wsp; Wh /= Wh.sum(1, keepdims=True)
grid(hood, Ph, 'Cotton', Wh, name='hood')
patch(hood, Ph, grid_normals(Ph, True), np.arange(3, 8), np.arange(NH + 1), 0.004, 'Cotton', Wh, 'hood-hem')   # the bound edge
# inside: a head with nothing on it, and a mask and gaiter over where a face would be. Only darkness.
def ellipsoid(c, r, nu=20, nv=12, v0=-1.0, v1=1.0, u0=0.0, u1=2 * math.pi):
    v = np.linspace(v0, v1, nv) * math.pi / 2; u = np.linspace(u0, u1, nu, endpoint=(u1 - u0) < 2 * math.pi - 1e-6)
    return np.array(c) + np.stack([r[0] * np.outer(np.cos(v), np.sin(u)), -r[1] * np.outer(np.cos(v), np.cos(u)), r[2] * np.outer(np.sin(v), np.ones(len(u)))], -1)
SK = (CX, HY - 0.042, HZ + 0.112)                               # the middle of the skull
Pv = ellipsoid(SK, (0.074, 0.09, 0.097), 24, 14, -0.97, 0.97)
grid(body, Pv, 'Void', one('Head', Pv), cap0=True, cap1=True, name='head')
Pm = ellipsoid((SK[0], SK[1] - 0.004, SK[2] - 0.012), (0.081, 0.098, 0.102), 25, 10, -0.85, 0.12, -1.75, 1.75)
grid(body, Pm, 'Mask', one('Head', Pm), closed=False, name='mask')
neck_pts = np.array([[CX, HY - 0.02, HZ - 0.06], [CX, HY - 0.028, HZ + 0.0], [CX, HY - 0.04, HZ + 0.045]])
Pn = sweep(resample(neck_pts, 6), 0.055, 0.058, 20, (0, -1, 0)); zz = Pn[..., 2].ravel()
grid(body, Pn, 'Mask', weights(Head=sstep(HZ - 0.02, HZ + 0.05, zz), Spine2=1 - sstep(HZ - 0.02, HZ + 0.05, zz)), name='gaiter')
# drawcords: out of the hood's edge, down the chest, with toggles
strings = Mesh('SM_Char_Writer_String')
for sgn in (1, -1):
    top_ = np.array([CX + sgn * 0.046, HY - 0.162, HZ + 0.03]); pts = [top_, top_ + np.array([sgn * 0.004, -0.012, -0.05]), top_ + np.array([sgn * 0.012, -0.004, -0.12]), top_ + np.array([sgn * 0.016, 0.0, -0.2])]
    Pd = sweep(resample(pts, 10), 0.0035, 0.0035, 6, (1, 0, 0)); grid(strings, Pd, 'Detail', spine_w(Pd.reshape(-1, 3)), cap1=True, name='cord')
    Pd = sweep(resample([pts[3] + np.array([0, 0, 0.012]), pts[3] + np.array([0, 0, -0.018])], 3), 0.007, 0.007, 8, (1, 0, 0)); grid(strings, Pd, 'Detail', spine_w(Pd.reshape(-1, 3)), cap0=True, cap1=True, name='toggle')

# ── the spray can: one shape for the cans on the pack, the can in the hand and the grip the fingers close round.
# A 400 ml can: 66 mm across, a rolled base, the body, a domed shoulder, the valve cup and the actuator on top. Measured
# along its axis from the grip socket (the middle of the fist), so the body runs below the socket and the top above.
CAN_R, CAN_B0, CAN_B1 = 0.033, -0.142, 0.018           # radius; where the body starts and ends on the axis (m)
CAN_DOME, CAN_ACT_R, CAN_TOP = 0.040, 0.0115, 0.062     # the shoulder's top; the actuator's radius; its top
CAN_NOZ_Y = 0.054                                        # the nozzle's height on the actuator
def can_radius(y):
    """The can's radius at a height on its axis (0 outside it)."""
    y = np.asarray(y, float); r = np.zeros_like(y)
    body = (y >= CAN_B0) & (y <= CAN_B1); r[body] = CAN_R * (0.88 + 0.12 * sstep(CAN_B0, CAN_B0 + 0.006, y[body]))
    dome = (y > CAN_B1) & (y <= CAN_DOME); r[dome] = 0.0135 + (CAN_R - 0.0135) * np.sqrt(np.clip(1 - ((y[dome] - CAN_B1) / (CAN_DOME - CAN_B1)) ** 2, 0, 1))
    act = (y > CAN_DOME) & (y <= CAN_TOP); r[act] = CAN_ACT_R
    return r
def can_mesh(mesh, at, ax, side, W, name='can'):
    """A can on a mesh: its socket at `at`, its axis `ax`, `side` any direction across it; W: one weight row for all."""
    ax = unit(np.asarray(ax, float)); hs = np.array([CAN_B0, CAN_B0 + 0.002, CAN_B0 + 0.006, CAN_B0 + 0.012, CAN_B1 - 0.004, CAN_B1, CAN_B1 + 0.008, CAN_B1 + 0.015, CAN_DOME - 0.003, CAN_DOME])
    rs_ = can_radius(hs); rs_[0] = 0.026; rs_[-1] = 0.0135
    P = sweep(np.asarray(at, float) + np.outer(hs, ax), rs_, rs_, 24, side); grid(mesh, P, 'Can', W.repeat(P.shape[0] * 24, 0), cap0=True, cap1=True, name=name)
    ha = np.array([CAN_DOME - 0.001, CAN_DOME + 0.001, CAN_TOP - 0.002, CAN_TOP]); ra = np.array([0.0125, CAN_ACT_R, CAN_ACT_R, CAN_ACT_R - 0.002])
    Pa = sweep(np.asarray(at, float) + np.outer(ha, ax), ra, ra, 16, side); grid(mesh, Pa, 'Cap', W.repeat(Pa.shape[0] * 16, 0), cap0=True, cap1=True, name='cap')

# ───────────────────────────── gloved hands (pass 2): a palm, knuckles, jointed fingers ─────────────────────────────
# Work gloves on a real hand: a palm that is wider than it is thick, padded at the heel and the thumb, knuckles that
# stand up on the back; fingers of three phalanges that swell at the joints, flatten into pads and end in round tips.
# Each finger rides its own bones, so it bends at its knuckles instead of curling like a noodle.
NPM = 28; ph_p = np.arange(NPM) / NPM * 2 * math.pi
f_p = np.concatenate([np.linspace(-0.035, 0.0, 5)[:-1], np.linspace(0.0, 0.088, 16)[:-1], np.linspace(0.088, 0.104, 5)])
PK = [-0.035, -0.015, 0.0, 0.03, 0.06, 0.085, 0.095, 0.104]
pw_ = curve(PK, [0.029, 0.03, 0.033, 0.039, 0.0425, 0.043, 0.04, 0.028]); pct_ = curve(PK, [0, 0, 0.001, 0.002, 0.001, -0.0005, -0.001, -0.001])
phb = curve(PK, [0.018, 0.017, 0.0155, 0.0135, 0.012, 0.012, 0.011, 0.007]); php = curve(PK, [0.018, 0.0175, 0.017, 0.016, 0.0142, 0.0128, 0.011, 0.006])
cph, sph = np.cos(ph_p)[None], np.sin(ph_p)[None]; FF = f_p[:, None]
TT = pct_(f_p)[:, None] + pw_(f_p)[:, None] * sup(cph, 2.6); NN = np.where(sph > 0, php(f_p)[:, None], phb(f_p)[:, None]) * sup(sph, 2.6)
NN = NN + (sph > 0) * (0.0065 * bump(0.022, 0.02, FF) * sstep(0.004, 0.03, TT) + 0.0035 * bump(0.045, 0.022, FF) * sstep(-0.012, -0.03, TT)) * np.clip(sph, 0, 1) ** 0.5   # thenar and heel pads
for nm, f0, t0, lens, wd, spl in FINGERS: NN = NN - (sph < 0) * 0.0035 * bump(f0 - 0.004, 0.009, FF) * bump(t0, 0.0075, TT)                      # knuckles
Pg = J['LeftHand'] + FF[..., None] * HF + NN[..., None] * HN + TT[..., None] * HT
def palm_w(P):
    q = P - J['LeftHand']; f = (q @ HF).ravel(); t = (q @ HT).ravel(); kw = {'LeftForeArm': 1 - sstep(-0.03, -0.004, f)}
    hand = sstep(-0.03, -0.004, f).copy(); thumb = 0.6 * bump(0.02, 0.022, f) * sstep(0.004, 0.028, t) * hand; kw['LeftHandThumb1'] = thumb; hand = hand - thumb
    for nm, f0, t0, lens, wd, spl in FINGERS:
        k = 0.5 * sstep(f0 - 0.016, f0 + 0.002, f) * bump(t0, 0.009, t) * hand; kw['LeftHand' + nm + '1'] = k; hand = hand - k
    kw['LeftHand'] = hand; return weights(**kw)
Wpalm = palm_w(Pg)
grid(body, Pg, 'Gloves', Wpalm, mirror=True, cap1=True, name='palm')
NFG = 14; ph_f = np.arange(NFG) / NFG * 2 * math.pi
def finger_tube(ch, start):
    """A gloved finger along its (straight) chain: rings from inside the palm to a round tip."""
    js = ch['joints']; d = ch['dir']; padn = ch['pad']; side_ = unit(np.cross(d, padn)); L = sum(ch['lens']); wd = ch['width']; sj = np.cumsum([0] + list(ch['lens']))
    s_ = np.concatenate([np.linspace(start, 0.0, 3)[:-1], np.linspace(0.0, L - wd, 20)[:-1], L - wd + wd * np.sin(np.linspace(0, 1, 7) * math.pi / 2)])
    w = wd * (1.0 + 0.06 * (bump(sj[1], 0.005, s_) + bump(sj[2], 0.004, s_)) - 0.035 * (bump((sj[0] + sj[1]) / 2, 0.01, s_) + bump((sj[1] + sj[2]) / 2, 0.007, s_)) + 0.04 * (s_ < 0))
    w = w * (1 - 0.12 * s_ / L)
    if ch is CHAINS['Thumb']: w = w * (1 + 0.45 * (1 - sstep(0.0, sj[1] + 0.004, s_)))   # the thumb's root is the ball of the thumb
    rnd = np.sqrt(np.clip(1 - ((s_ - (L - wd)) / wd) ** 2, 0.0, 1)) ; w = np.where(s_ > L - wd, w * np.maximum(rnd, 0.08), w)
    c, sn = np.cos(ph_f)[None], np.sin(ph_f)[None]
    h = np.where(sn > 0, 0.9, 0.84) * w[:, None] + (sn > 0) * 0.0012 * (bump((sj[0] + sj[1]) / 2, 0.009, s_) + bump((sj[1] + sj[2]) / 2, 0.006, s_) + bump(L - 0.009, 0.005, s_))[:, None]
    h = h + (sn < 0) * 0.0011 * (bump(sj[1], 0.004, s_) + bump(sj[2], 0.0035, s_))[:, None]                                          # the joints stand up behind
    P = js[0] + s_[:, None, None] * d + (w[:, None] * sup(c, 2.3))[..., None] * side_ + (h * sup(sn, 2.3))[..., None] * padn
    sr = np.repeat(s_, NFG); b1, b2, b3 = ch['bones']
    k2 = sstep(sj[1] - 0.005, sj[1] + 0.005, sr); k3 = sstep(sj[2] - 0.004, sj[2] + 0.004, sr); hb = 1 - sstep(-0.008, 0.006, sr)
    W = weights(**{'LeftHand': hb, b1: (1 - hb) * (1 - k2), b2: (1 - hb) * k2 * (1 - k3), b3: (1 - hb) * k3})
    return P, W
for nm, ch in CHAINS.items():
    P_, W_ = finger_tube(ch, -0.014 if nm != 'Thumb' else 0.0)
    grid(body, P_, 'Gloves', W_, mirror=True, cap1=True, name='finger' if nm != 'Thumb' else 'thumb')
# a padded panel over the knuckles, and a strap round the wrist
cols = [j for j in range(NPM) if math.sin(ph_p[j]) < -0.45]; patch(body, Pg, grid_normals(Pg, True), np.where((f_p > 0.05) & (f_p < 0.09))[0], np.array(cols), 0.0028, 'Detail', Wpalm, 'knuckle', mirror=True)
ws = lambda r: sweep(hand_pt(np.array([-0.016, 0.002]), np.zeros(2), np.zeros(2)), 0.0315 * r, 0.0215 * r, 20, HN, 2.6)
Pws = np.concatenate([ws(0.95)[:1], ws(1.12), ws(0.95)[1:]]); grid(body, Pws, 'Detail', one('LeftHand', Pws), mirror=True, name='wrist-strap')

# ── the grip: a can in the fist. The socket (the middle of the fist) lies across the palm under the first phalanges,
# its axis toward the thumb; each finger closes round it, joint by joint, until it meets the can; the thumb wraps the
# other way; for spraying the index finger rises onto the actuator. Solved here in the hand's own frame, sent as turns.
# (a spray grip, not a baton: the actuator comes level with the index finger, the middle finger sits round the shoulder,
#  ring and little finger round the body, and most of the can hangs below the fist)
CAN_C = hand_pt(np.array([0.066]), np.array([0.0165 + CAN_R - 0.0015]), np.array([-0.034]))[0]; CAN_U = HT
def can_pen(P, r):
    """How deep points P (n, 3) with radius r go into the can at the left hand's socket (negative: clear)."""
    q = P - CAN_C; y = q @ CAN_U; rho = np.linalg.norm(q - np.outer(y, CAN_U), axis=1); rad = can_radius(y)
    return np.where(rad > 0, rad + r - rho, -1.0)
def fk(ch, Ms):
    js = ch['joints']; out = [js[0]]; Q = np.eye(3)
    for k in range(3): Q = Q @ Ms[k]; out.append(out[-1] + Q @ (js[k + 1] - js[k]))
    return out
def seg_pts(pts, k, n=7): return pts[k] + np.outer(np.linspace(0.15 if k == 0 else 0.0, 1.0, n), pts[k + 1] - pts[k])
def wrap(ch, lim=(95, 105, 80), clear=0.0008):
    th = [0.0, 0.0, 0.0]; r = ch['width'] * 0.88
    for k in range(3):
        best = 0.0
        for ang in np.arange(0.0, lim[k] + 0.01, 0.5):
            th[k] = math.radians(ang); pts = fk(ch, [rotm(ch['axis'], a) for a in th])
            if max(can_pen(seg_pts(pts, j), r).max() for j in range(k, 3)) > -clear: break
            best = th[k]
        th[k] = best
    return th
def descend(cost, x, step=0.08, it=400):
    x = np.array(x, float); c = cost(x)
    while step > 1e-4 and it > 0:
        moved = False
        for i in range(len(x)):
            for sg in (1, -1):
                y = x.copy(); y[i] += sg * step; cy = cost(y); it -= 1
                if cy < c: x, c, moved = y, cy, True
        if not moved: step *= 0.5
    return x, c
GRIPS = {}
for nm in ('Index', 'Middle', 'Ring', 'Pinky'):
    ch = CHAINS[nm]; th = wrap(ch); GRIPS[nm] = [rotm(ch['axis'], a) for a in th]
    print('WRITER grip', nm, [round(math.degrees(a)) for a in th])
# the nozzle points away from where the index finger comes over the top (an actuator turns on its valve)
_q = CAN_C - CHAINS['Index']['joints'][0]; CAN_NOZ = unit(_q - CAN_U * _q.dot(CAN_U))
# the thumb: its metacarpal turned out of the palm along the near side of the can (and down to the body), twisted so it
# bends toward the knuckles, then its two joints close round the can the other way from the fingers
tch = CHAINS['Thumb']
def thumb_grip(beta):
    dm = unit(tch['joints'][1] - tch['joints'][0]); dm2 = unit(math.sin(beta) * HF + math.cos(beta) * HN - 0.5 * HT)
    R1 = rot_to(dm, dm2); a1 = R1 @ tch['axis']; want = unit(np.cross(dm2, HF)); want = unit(want - dm2 * want.dot(dm2))
    psi = math.atan2(np.dot(np.cross(a1, want), dm2), np.dot(a1, want)); return rotm(dm2, psi) @ R1
best = None
for beta in np.arange(-0.6, 0.9, 0.02):
    M1 = thumb_grip(beta); pts = fk(tch, [M1, np.eye(3), np.eye(3)])
    if max(can_pen(seg_pts(pts, k), 0.0112).max() for k in range(3)) > -0.0008: break
    best = beta
_tM1 = thumb_grip(best if best is not None else 0.0)
_tch2 = dict(tch); _th = [0.0, 0.0]
for k in (1, 2):
    b_ = 0.0
    for ang in np.arange(0.0, 95.01, 0.5):
        _th[k - 1] = math.radians(ang); pts = fk(tch, [_tM1, rotm(tch['axis'], _th[0]), rotm(tch['axis'], _th[1])])
        if max(can_pen(seg_pts(pts, j), 0.0112).max() for j in range(k, 3)) > -0.0008: break
        b_ = _th[k - 1]
    _th[k - 1] = b_
GRIPS['Thumb'] = [_tM1, rotm(tch['axis'], _th[0]), rotm(tch['axis'], _th[1])]
print('WRITER grip thumb beta %.2f, joints' % (best or 0), [round(math.degrees(a)) for a in _th])
# the index finger on the actuator: its last pad on the top, just behind the nozzle
ich = CHAINS['Index']; _top = CAN_C + CAN_U * (CAN_TOP + 0.0082) - CAN_NOZ * 0.003
_IL = ((-0.8, 0.8), (-0.2, 1.6), (0.0, 1.8), (0.0, 1.3))
def index_Ms(x): x = [min(hi, max(lo, v)) for v, (lo, hi) in zip(x, _IL)]; return [rotm(HN, x[0]) @ rotm(ich['axis'], x[1]), rotm(ich['axis'], x[2]), rotm(ich['axis'], x[3])]
def index_cost(x):
    pts = fk(ich, index_Ms(x)); pad = pts[2] + 0.55 * (pts[3] - pts[2]); pen = max(can_pen(seg_pts(pts, k), 0.0086).max() for k in range(3))
    lim = sum(max(0, v - hi) + max(0, lo - v) for v, (lo, hi) in zip(x, _IL))
    return np.sum((pad - _top) ** 2) + 40 * max(0.0, pen + 0.0006) ** 2 + 1e-2 * lim
_ix, _ic = min((descend(index_cost, [a0_, b0_, 0.6, 0.3]) for a0_ in (-0.4, -0.2, 0.0, 0.2, 0.4) for b0_ in (0.1, 0.5, 0.9, 1.3)), key=lambda r: r[1]); PRESS = index_Ms(_ix)
print('WRITER press index miss %.1f mm, angles' % (1000 * math.sqrt(max(0, _ic))), [round(math.degrees(v)) for v in _ix])
RELAX = {'Index': (12, 18, 10), 'Middle': (16, 22, 12), 'Ring': (20, 28, 14), 'Pinky': (24, 32, 16)}
POSES = {'relax': {nm: [rotm(CHAINS[nm]['axis'], math.radians(a)) for a in RELAX[nm]] for nm in RELAX}}
_tin = min((rotm(HN, a_) for a_ in (-0.3, 0.3)), key=lambda M: fk(tch, [M, np.eye(3), np.eye(3)])[3] @ HT)   # relaxed, the thumb lies in toward the index
POSES['relax']['Thumb'] = [_tin, rotm(tch['axis'], math.radians(14)), rotm(tch['axis'], math.radians(16))]
POSES['grip'] = GRIPS; POSES['press'] = dict(GRIPS, Index=PRESS)
FLIPM = np.diag([-1.0, 1, 1])
def local_turns(pose, side):
    """{bone: turn in its own frame (Blender axes)} for one hand: M (a turn in the bind's world) seen from the hand."""
    out = {}
    for nm, Ms in pose.items():
        for i, M in enumerate(Ms):
            Ms_ = FLIPM @ M @ FLIPM if side == 'Right' else M; H = BIND[side + 'Hand'][0]
            out[side + CHAINS[nm]['bones'][i][4:]] = H.T @ Ms_ @ H
    return out
FPOSE = {**local_turns(POSES['relax'], 'Left'), **local_turns(POSES['grip'], 'Right')}   # the renders: left relaxed, right on a can
GRIP = dict(at=CAN_C, axis=CAN_U, nozzle=CAN_NOZ)   # where a can sits in the left hand (the right hand holds its twin)

# ───────────────────────────── trouser details ─────────────────────────────
Wl = leg_w(Pl); Nl = grid_normals(Pl, True)
rs = lambda a, b: np.where((s_l >= a) & (s_l <= b))[0]
cl = lambda a, b: np.arange(int(round(a / (2 * math.pi) * NL)), int(round(b / (2 * math.pi) * NL)) + 1)
patch(body, Pl, Nl, rs(0.1, 0.25), cl(0.95, 2.2), 0.014, 'Trousers', Wl, 'cargo', mirror=True, edge=0.0)     # the cargo pocket on the outside of the thigh
patch(body, Pl, Nl, rs(0.085, 0.125), cl(0.9, 2.25), 0.019, 'Trousers', Wl, 'cargo-flap', mirror=True, edge=0.004)
patch(body, Pl, Nl, rs(sK - 0.075, sK + 0.085), cl(-0.9, 0.9), 0.005, 'Trousers', Wl, 'knee', mirror=True)   # the shaped knee panel
patch(body, Pl, Nl, rs(CUFF - 0.004, CUFF + 0.046), np.arange(NL + 1), 0.004, 'Trim', Wl, 'ankle-cuff', mirror=True)

# ── welded seams (pass 3, owner: the sleeves and legs overlapped the jacket at the seams). Where a sleeve leaves the
# jacket and a leg leaves the seat, a piped seam runs round the join, so two pieces meeting read as sewn together.
def exit_loop(P, inside, W):
    """Down each column of a grid (rings from the body end along a limb), where it first comes out of the body: a closed
    loop of points, with the limb's weights there."""
    R, N = P.shape[:2]; ins = inside(P.reshape(-1, 3)).reshape(R, N); Wg = W.reshape(R, N, NB); pts = []; ws = []
    for j in range(N):
        col = ins[:, j]; k = next((i for i in range(1, R) if col[i] < 0), R - 1); a, b = col[k - 1], col[k]
        f = float(np.clip(a / (a - b) if a != b else 0.0, 0, 1)); pts.append(P[k - 1, j] + (P[k, j] - P[k - 1, j]) * f); ws.append(Wg[k - 1, j] * (1 - f) + Wg[k, j] * f)
    pts = np.array(pts + pts[:1]); ws = np.array(ws + ws[:1]); return pts, ws
def piping(mesh, pts, ws, r, mat, name):
    up = unit(pts - pts[:-1].mean(0)); box_tube(mesh, pts, r, r, 6, up, mat, ws.repeat(6, 0), pw=2.0, name=name, mirror=True)
def in_torso(X): z, ph, rho = polar(X); return torso_r(z, ph) - rho
pts_, ws_ = exit_loop(Ps, in_torso, sleeve_w(Ps)); piping(body, pts_, ws_, 0.0042, 'Detail', 'armhole')
seat_surface = lambda z, th: np.stack(np.broadcast_arrays(CX + s_a(z) * sup(np.sin(th), 2.3), J['Hips'][1] - np.where(np.cos(th) > 0, s_f(z), s_b(z)) * sup(np.cos(th), 2.3), z), -1)
def in_seat(X):
    z = X[:, 2]; dx = X[:, 0] - CX; dy = -(X[:, 1] - J['Hips'][1]); ph = np.arctan2(dx, dy); rho = np.hypot(dx, dy)   # (round the hips' line)
    r = surf_r(seat_surface, lambda zz: np.full_like(zz, J['Hips'][1]), np.clip(z, SZ[0], SZ[-1]), ph)
    return np.where((z > SZ[0]) & (z < SZ[-1]), r - rho, -1.0)
pts_, ws_ = exit_loop(Pl, in_seat, leg_w(Pl)); piping(body, pts_, ws_, 0.004, 'Trousers', 'leg-seam')

# ───────────────────────────── trainers: high-tops with a thick midsole ─────────────────────────────
AX, AY, AZ = J['LeftFoot']                                     # the ankle; the shoe lies along -y from heel to toe
SQ = [-0.078, -0.07, -0.05, -0.02, 0.02, 0.06, 0.1, 0.14, 0.18, 0.203, 0.212]
u_w = curve(SQ, [0.012, 0.03, 0.04, 0.044, 0.046, 0.048, 0.052, 0.054, 0.047, 0.03, 0.01])           # half width of the upper
u_h = curve(SQ, [0.04, 0.085, 0.125, 0.14, 0.138, 0.105, 0.078, 0.064, 0.055, 0.04, 0.015])          # height above the midsole
m_h = curve(SQ, [0.034, 0.04, 0.042, 0.04, 0.037, 0.034, 0.031, 0.03, 0.03, 0.032, 0.03])            # the midsole's top
m_b = curve(SQ, [0.012, 0.004, 0.0, 0.0, 0.0, 0.0, 0.0, 0.002, 0.008, 0.017, 0.022])                 # its underside: flat, sprung up at the toe
q_s = np.concatenate([np.linspace(SQ[0], SQ[2], 5)[:-1], np.linspace(SQ[2], SQ[8], 24)[:-1], np.linspace(SQ[8], SQ[10], 7)]); NSH = 28; th_h = np.arange(NSH) / NSH * 2 * math.pi
def shoe_w(P):
    q = AY - P[..., 1].ravel(); z = P[..., 2].ravel(); toe = sstep(0.115, 0.165, q); leg = 0.6 * sstep(AZ - 0.01, AZ + 0.05, z)
    return weights(LeftFoot=(1 - toe) * (1 - leg), LeftToeBase=toe, LeftLeg=(1 - toe) * leg)
ct_, st_ = np.cos(th_h)[None], np.sin(th_h)[None]
def shoe_ring(q, w, top, bot, zc, pw=2.3, lean=0.0):
    """Rings across the shoe at each distance q from the ankle toward the toe: half width w, up `top` and down `bot` from zc."""
    q = np.asarray(q)[:, None]; r = np.where(ct_ > 0, np.asarray(top)[:, None], np.asarray(bot)[:, None])
    z = np.asarray(zc)[:, None] + r * sup(ct_, pw)
    return np.stack([AX + np.asarray(w)[:, None] * sup(st_, pw) * (1 + 0.06 * st_) + 0 * q, AY - q + lean * (z - np.asarray(zc)[:, None]), z], -1)
Pu = shoe_ring(q_s, u_w(q_s), u_h(q_s), np.full(len(q_s), 0.012), m_h(q_s) - 0.004, lean=0.0)
# the heel leans in toward the ankle and the collar is padded
hl = sstep(0.05, -0.05, q_s)[:, None] * sstep(0.04, 0.13, Pu[..., 2] - 0.036); Pu[..., 1] -= 0.012 * hl
Pu = Pu + grid_normals(Pu, True) * (0.006 * bump(AZ + 0.02, 0.014, Pu[..., 2]) * sstep(0.05, -0.02, q_s)[:, None])[..., None]
Wu = shoe_w(Pu); Nu = grid_normals(Pu, True)
grid(body, Pu, 'Shoes', Wu, mirror=True, cap0=True, cap1=True, name='upper')
Pms = shoe_ring(q_s, u_w(q_s) + 0.007, (m_h(q_s) - m_b(q_s)) / 2, (m_h(q_s) - m_b(q_s)) / 2, (m_h(q_s) + m_b(q_s)) / 2, pw=6.0)
grid(body, Pms, 'Sole', shoe_w(Pms), mirror=True, cap0=True, cap1=True, name='midsole')
Pos = shoe_ring(q_s, u_w(q_s) + 0.005, np.full(len(q_s), 0.007), np.full(len(q_s), 0.007), m_b(q_s) + 0.006, pw=6.0)
grid(body, Pos, 'Detail', shoe_w(Pos), mirror=True, cap0=True, cap1=True, name='outsole')
rq = lambda a, b: np.where((q_s >= a) & (q_s <= b))[0]; ch = lambda a, b: np.arange(int(round(a / (2 * math.pi) * NSH)), int(round(b / (2 * math.pi) * NSH)) + 1)
patch(body, Pu, Nu, rq(0.14, 0.213), np.arange(NSH + 1), 0.0035, 'Detail', Wu, 'toe-cap', mirror=True, edge=0.0)       # a rubber toe bumper
patch(body, Pu, Nu, rq(-0.08, -0.02), np.arange(NSH + 1), 0.003, 'Detail', Wu, 'heel-counter', mirror=True, edge=0.0)
patch(body, Pu, Nu, rq(-0.078, -0.05), ch(-0.25, 0.25) , 0.006, 'Reflect', Wu, 'heel-tab', mirror=True)
for sgn in (1, -1): patch(body, Pu, Nu, rq(0.0, 0.13), np.sort(sgn * ch(0.35, 1.0)), 0.003, 'Detail', Wu, 'eyestay', mirror=True)
patch(body, Pu, Nu, rq(-0.02, 0.12), ch(-0.3, 0.3), 0.009, 'Shoes', Wu, 'tongue', mirror=True)                          # the padded tongue
for q0 in np.linspace(0.01, 0.115, 6):                                                                                  # laces across it
    r0 = int(np.argmin(np.abs(q_s - q0))); cols = ch(-0.75, 0.75) % NSH; line = Pu[r0, cols] + Nu[r0, cols] * 0.012
    box_tube(body, line, 0.004, 0.003, 6, Nu[r0, cols], 'Lace', Wu.reshape(len(q_s), NSH, NB)[r0, cols].mean(0)[None].repeat(len(cols) * 6, 0), name='lace', mirror=True)

# ───────────────────────────── the backpack, its straps, and the cans ─────────────────────────────
pack = Mesh('SM_Char_Writer_Pack')
PKZ = [zS + PACK_DZ + d for d in (-0.37, -0.35, -0.3, -0.1, 0.0, 0.035, 0.05)]
p_a = curve(PKZ, [0.08, 0.108, 0.12, 0.118, 0.112, 0.1, 0.06]); p_d = curve(PKZ, [0.025, 0.044, 0.053, 0.05, 0.04, 0.028, 0.012])
z_k = np.concatenate([np.linspace(PKZ[0], PKZ[2], 5)[:-1], np.linspace(PKZ[2], PKZ[4], 12)[:-1], np.linspace(PKZ[4], PKZ[6], 5)]); NK = 36; th_k = np.arange(NK) / NK * 2 * math.pi
back_y = lambda z: t_y(z) + t_b(z)                              # the jacket's back
Pk = np.stack([CX + p_a(z_k)[:, None] * sup(np.sin(th_k), 4.5)[None], (back_y(z_k) + p_d(z_k) - 0.012)[:, None] - p_d(z_k)[:, None] * sup(np.cos(th_k), 3.5)[None], np.broadcast_to(z_k[:, None], (len(z_k), NK))], -1)
Pk = Pk + grid_normals(Pk, True) * (0.004 * fbm(Pk, 0.1, 71.0))[..., None]
Wk = spine_w(np.broadcast_to(np.array([CX, 0, 1.0]), (len(z_k) * NK, 3)) * 0 + np.stack([np.full(len(z_k) * NK, CX), np.zeros(len(z_k) * NK), np.repeat(np.clip(z_k, J['Spine2'][2] + 0.03, 9), NK)], -1))
grid(pack, Pk, 'Pack', Wk, cap0=True, cap1=True, name='pack'); Nk = grid_normals(Pk, True)
rk = lambda a, b: np.where((z_k >= a) & (z_k <= b))[0]; ck = lambda a, b: np.arange(int(round(a / (2 * math.pi) * NK)), int(round(b / (2 * math.pi) * NK)) + 1)
patch(pack, Pk, Nk, rk(zS + PACK_DZ - 0.33, zS + PACK_DZ - 0.17), ck(math.pi - 0.95, math.pi + 0.95), 0.022, 'Pack', Wk, 'pack-pocket', edge=0.0)       # the front pocket
patch(pack, Pk, Nk, rk(zS + PACK_DZ - 0.12, zS + PACK_DZ - 0.085), ck(math.pi - 1.2, math.pi + 1.2), 0.004, 'Reflect', Wk, 'pack-tape')                  # reflective tape: the mark you see from behind
# webbing (pass 3): rows of daisy-chain loops across the back of the pack, and a compression strap down each side
for zz in (zS + PACK_DZ - 0.06, zS + PACK_DZ - 0.15, zS + PACK_DZ - 0.24):
    r0 = int(np.argmin(np.abs(z_k - zz))); cols = ck(math.pi - 0.75, math.pi + 0.75) % NK; line = Pk[r0, cols] + Nk[r0, cols] * 0.004
    box_tube(pack, resample(line, 24), 0.0125, 0.0018, 6, Nk[r0, cols].mean(0), 'Detail', Wk.reshape(len(z_k), NK, NB)[r0, cols].mean(0)[None].repeat(24 * 6, 0), name='webbing')
    for c0 in np.linspace(cols[0] + 1, cols[-1] - 1, 6).astype(int) % NK:   # bar tacks: the loops stand off between them
        p0 = Pk[r0, c0] + Nk[r0, c0] * 0.0065; box_tube(pack, np.array([p0 + [0, 0, 0.011], p0 - [0, 0, 0.011]]), 0.004, 0.002, 6, Nk[r0, c0], 'Trim', Wk.reshape(len(z_k), NK, NB)[r0, c0][None].repeat(12, 0), name='tack')
for sgn in (1, -1):
    c0 = int(round((math.pi / 2 + (0 if sgn > 0 else math.pi)) / (2 * math.pi) * NK)) % NK; rows = rk(zS + PACK_DZ - 0.33, zS + PACK_DZ - 0.02)
    line = Pk[rows, c0] + Nk[rows, c0] * 0.004; box_tube(pack, resample(line, 12), 0.011, 0.0018, 6, Nk[rows, c0].mean(0), 'Detail', Wk.reshape(len(z_k), NK, NB)[rows, c0].mean(0)[None].repeat(12 * 6, 0), name='side-strap')
# two spare cans, each standing in an elastic mesh pocket on a side of the pack (they sit in it: the pocket wraps the
# lower half of the can and its band grips it), leaning out a touch so the caps clear the arms
Wpk = spine_w(np.array([[CX, 0, J['Spine2'][2] + 0.03]]))
for sgn in (1, -1):
    zb = zS + PACK_DZ - 0.385; zm = zb + 0.08; ax = unit(np.array([sgn * 0.08, 0.04, 1.0]))
    base = np.array([CX + sgn * (p_a(zm) + CAN_R + 0.002), back_y(zm) + p_d(zm) * 0.95 - 0.01, zb])
    sock = base - ax * CAN_B0                                   # the can's socket, from where its base stands
    can_mesh(pack, sock, ax, (0, 1, 0), Wpk, 'pack-can')
    hp = np.array([-0.006, 0.0, 0.03, 0.07, 0.098, 0.104, 0.106]); rp = np.array([0.02, CAN_R + 0.006, CAN_R + 0.008, CAN_R + 0.007, CAN_R + 0.004, CAN_R + 0.0045, CAN_R + 0.002])
    Pq = sweep(base + np.outer(hp, ax), rp * 1.02, rp, 24, (0, 1, 0)); Pq = Pq + grid_normals(Pq, True) * (0.0025 * fbm(Pq, 0.03, 81.0 + sgn))[..., None]
    grid(pack, Pq[:-2], 'Pack', Wpk.repeat((len(hp) - 2) * 24, 0), cap0=True, name='can-pocket')
    grid(pack, Pq[-3:], 'Trim', Wpk.repeat(3 * 24, 0), name='can-pocket-band')
# straps: over each shoulder from the top of the pack, down the chest, and back under the arm, lying on the jacket
for (pts, nn), sgn in zip(STRAPS, (1, -1)):
    # (pass 3: over the top of the shoulder the strap rides the collar bone, as a real strap does: it moves with the
    #  shoulder, and the sleeve's cap under it is not taken for the trunk)
    Ws_ = spine_w(pts.repeat(8, 0)); top_ = 0.85 * sstep(zS + 0.0, zS + 0.04, pts[:, 2]).repeat(8)
    Ws_ = Ws_ * (1 - top_)[:, None]; Ws_[:, BI[('Left' if sgn > 0 else 'Right') + 'Shoulder']] += top_
    box_tube(pack, pts, 0.021 * (1 - 0.35 * sstep(26, 34, np.arange(40))), 0.005, 8, nn, 'Pack', Ws_, name='strap')
    pb, nb_ = on_torso(np.array([sgn * 0.54]), np.array([zS - 0.21]), 0.016); box_tube(pack, np.array([pb[0] + [0, 0, 0.02], pb[0] - [0, 0, 0.02]]), 0.016, 0.006, 8, nb_[0], 'Detail', spine_w(np.repeat(pb, 16, 0)), name='buckle')
ths = np.linspace(-0.5, 0.5, 9); pts, nn = on_torso(ths, np.full(9, zS - 0.1), 0.012)
box_tube(pack, pts, 0.011, 0.004, 8, nn, 'Pack', spine_w(pts.repeat(8, 0)), name='chest-strap')
box_tube(pack, np.array([pts[4] + [-0.02, 0, 0], pts[4] + [0.02, 0, 0]]) + nn[4] * 0.004, 0.015, 0.006, 8, nn[4], 'Detail', spine_w(np.repeat(pts[4:5], 16, 0)), name='chest-buckle')

# ───────────────────────────── the atlas: occlusion, seams and wear, painted per piece ─────────────────────────────
# Every piece is a grid, so its patch of the atlas is a plain rectangle: no unwrapping. For each grid point, how much
# of the sky it can see (rays against the whole figure); that shading, plus sewn edges and grime, becomes one grey
# texture the game multiplies into the cloth's colour and uses as its occlusion map.
from mathutils.bvhtree import BVHTree
_V = []; _F = []; _o = 0
for mesh in MESHES.values():
    v = np.concatenate(mesh.V); _V.append(v); _F += [[i + _o for i in f] for f in mesh.F]; _o += len(v)
TREE = BVHTree.FromPolygons(np.concatenate(_V).tolist(), _F)
_rng = np.random.default_rng(7); _d = unit(_rng.normal(size=(18, 3))); _d[:, 2] = np.abs(_d[:, 2]) * 0.8 + 0.25; RAYS = unit(_d)
def occlusion(P, nrm):
    flat = P.reshape(-1, 3); fn = nrm.reshape(-1, 3); out = np.zeros(len(flat))
    for i in range(len(flat)):
        n = fn[i]; a = unit(np.cross(n, [0.3, 0.5, 0.8])); b = np.cross(n, a); o = Vector(flat[i] + n * 0.004); open_ = 0.0
        for r in RAYS:
            hit = TREE.ray_cast(o, Vector(a * r[0] + b * r[1] + n * r[2]), 0.3)
            open_ += 1.0 if hit[0] is None else min(1.0, hit[3] / 0.3) ** 1.5 * 0.6
        out[i] = open_ / len(RAYS)
    return out.reshape(P.shape[:2])
ATLAS = 2048; UNIQ = [pc for pc in PIECES if pc['side'] > 0]
def pack(density):
    x = y = 2; row = 0; rects = []
    for pc in sorted(UNIQ, key=lambda pc: -pc['h']):
        w = max(6, int(pc['w'] * density)) + 4; h = max(6, int(pc['h'] * density)) + 4
        if x + w > ATLAS - 2: x = 2; y += row; row = 0
        if y + h > ATLAS - 2: return None
        rects.append((pc, x + 2, y + 2, w - 4, h - 4)); x += w; row = max(row, h)
    return rects
lo, hi = 50.0, 4000.0
for _ in range(24):
    mid = (lo + hi) / 2
    if pack(mid): lo = mid
    else: hi = mid
RECTS = pack(lo); IMG = np.full((ATLAS, ATLAS), 0.8); RECT_OF = {}
print('WRITER atlas: %d pieces at %.0f px per metre' % (len(RECTS), lo))
def stretch(G, w, h):
    """A grid of values (rings, around) blown up to h x w pixels."""
    xs = np.linspace(0, G.shape[1] - 1, w); a = np.array([np.interp(xs, np.arange(G.shape[1]), row) for row in G])
    ys = np.linspace(0, G.shape[0] - 1, h); return np.array([np.interp(ys, np.arange(G.shape[0]), col) for col in a.T]).T
# ── cloth folds as a normal map (pass 2: "it stops reading as clay"): the creases a shell jacket and cargo trousers
# really have, too sharp and too many for the mesh: drag lines that spiral down the sleeves, the elbow's and knee's
# stacked creases, cloth breaking over the cuffs and the hem, gathers at the waist, the drape of the hood, and a fine
# crinkle over the nylon; panels get a raised edge. Heights per pixel of each piece's patch of the atlas (same layout,
# second UV set), turned into tangent-space normals.
_pm = np.random.default_rng(3).permutation(256); _pm = np.concatenate([_pm, _pm]); _pv = np.random.default_rng(4).random(512) * 2 - 1
def vnoise(Q, scale, seed=0):
    """Smooth value noise, -1..1, at points Q (..., 3) (vectorised: the bake runs per pixel)."""
    q = Q / scale + seed; i = np.floor(q).astype(np.int64); f = q - i; u = f * f * (3 - 2 * f); out = 0.0
    for dx in (0, 1):
        for dy in (0, 1):
            for dz in (0, 1):
                hsh = _pv[_pm[_pm[_pm[(i[..., 0] + dx) & 255] + ((i[..., 1] + dy) & 255)] + ((i[..., 2] + dz) & 255)]]
                out = out + hsh * np.where(dx, u[..., 0], 1 - u[..., 0]) * np.where(dy, u[..., 1], 1 - u[..., 1]) * np.where(dz, u[..., 2], 1 - u[..., 2])
    return out
def crinkle(Q, amp):
    """Many small sharp creases (nylon that has been worn): valleys along the zero lines of two noises."""
    return -amp * ((1 - np.abs(vnoise(Q, 0.035, 1.7))) ** 6 + 0.6 * (1 - np.abs(vnoise(Q, 0.014, 5.3))) ** 6)
# seams (pass 3): where the panels of each garment are sewn, a flat-felled seam (a raised fold of cloth) with a double
# row of stitches beside it: (columns round the piece as a fraction, rows along it as heights for the jacket)
SEAMS = {'jacket': dict(u=(0.25, 0.75), z=(zS + 0.045,)), 'sleeve': dict(u=(0.75, 0.5)), 'leg': dict(u=(0.25, 0.75)), 'seat': dict(u=(0.0, 0.5))}
def seam_marks(pc, w, h):
    """For a piece's patch of the atlas (h x w px): (darkening in the seam's crease, stitch dots, raised seam height)."""
    sd = SEAMS.get(pc['name']); U, Vv = np.meshgrid(np.linspace(0, 1, w), np.linspace(0, 1, h)); crease_ = np.zeros((h, w)); dots = np.zeros((h, w)); ridge = np.zeros((h, w))
    if not sd or not pc['closed']: return crease_, dots, ridge
    def add(d, along):   # d: distance from the seam line in px; along: px along it (for the dashes)
        nonlocal crease_, dots, ridge
        crease_ = np.maximum(crease_, np.exp(-(d / 1.1) ** 2)); ridge = np.maximum(ridge, np.exp(-((d - 2.5) / 2.2) ** 2))
        dash = (np.floor(along / 2.6) % 2 == 0).astype(float); dots = np.maximum(dots, dash * (np.exp(-((d - 4.5) / 0.7) ** 2) + np.exp(-((d - 7.0) / 0.7) ** 2)))
    for u0 in sd.get('u', ()): add(np.abs(((U - u0 + 0.5) % 1) - 0.5) * w, Vv * h)
    for z0 in sd.get('z', ()):
        v0 = np.interp(z0, z_t, np.linspace(0, 1, len(z_t))); add(np.abs(Vv - v0) * h, U * w)
    return crease_, dots, ridge
FOLDP = {'sleeve': s_s, 'leg': s_l, 'jacket': z_t, 'seat': z_p, 'hood': u_hx}
NIMG = np.zeros((ATLAS, ATLAS, 3)); NIMG[..., 2] = 1.0
def fold_height(pc, w, h):
    """The fold relief (m) over a piece's patch of the atlas, h x w pixels; and metres per pixel across and along."""
    R, N = pc['R'], pc['N']; P = pc['P']; Pc = np.concatenate([P, P[:, :1]], 1) if pc['closed'] else P
    cu = np.linspace(0, Pc.shape[1] - 1, w); rv = np.linspace(0, R - 1, h)
    c0 = np.clip(np.floor(cu).astype(int), 0, Pc.shape[1] - 2); fc = (cu - c0)[None, :, None]; r0 = np.clip(np.floor(rv).astype(int), 0, max(0, R - 2)); fr = (rv - r0)[:, None, None]
    r1 = np.minimum(r0 + 1, R - 1)
    Q = (Pc[r0][:, c0] * (1 - fc) + Pc[r0][:, c0 + 1] * fc) * (1 - fr) + (Pc[r1][:, c0] * (1 - fc) + Pc[r1][:, c0 + 1] * fc) * fr
    th = (cu / max(1, Pc.shape[1] - 1) * 2 * math.pi)[None, :] if pc['closed'] else None
    seg = np.linalg.norm(np.diff(Pc, axis=1), axis=2).sum(1); circ = np.interp(rv, np.arange(R), seg)[:, None]
    mx = circ / max(1, w - 1) * np.ones((1, w)); my = pc['h'] / max(1, h - 1)
    nm = pc['name']; H = np.zeros((h, w))
    if nm in FOLDP and pc['closed']:
        sp = np.interp(rv, np.arange(R), FOLDP[nm])[:, None]; front = np.cos(th); out_ = np.sin(th); wob = 1.6 * vnoise(Q, 0.12, 2.0) + 0.6 * vnoise(Q, 0.05, 9.0)
        patch_ = 0.25 + 0.75 * sstep(-0.35, 0.45, vnoise(Q, 0.09, 4.4))   # cloth folds in places, not in rings all the way round
        if nm == 'sleeve':
            live = sstep(-0.02, 0.06, sp) * (1 - sstep(sW - 0.075, sW - 0.06, sp))
            H += live * patch_ * 0.0009 * crease(sp / 0.13 * 2 * math.pi + th + 4.5 * wob)
            H += live * patch_ * bump(sE, 0.06, sp) * sstep(-0.1, 0.9, front) * 0.003 * crease((sp - sE) / 0.022 * 2 * math.pi + 1.4 * out_ + 3 * wob)
            H += live * (0.4 + 0.6 * patch_) * sstep(sW - 0.2, sW - 0.09, sp) * 0.0026 * crease((sp - sW) / 0.04 * 2 * math.pi + th + 1.5 * np.sin(th + 0.7) + 4 * wob)
            H += live * patch_ * bump(0.02, 0.04, sp) * sstep(0.55, 0.98, -out_) * 0.0013 * crease(sp / 0.03 * 2 * math.pi - 5 * front + 3 * wob)   # drag lines out of the armpit
            H += crinkle(Q, 0.0006)
        elif nm == 'leg':
            live = sstep(0.0, 0.08, sp) * (1 - sstep(CUFF - 0.012, CUFF, sp))
            H += live * patch_ * (1 - sstep(0.04, 0.24, sp)) * 0.0016 * crease(sp / 0.06 * 2 * math.pi - out_ * 7 + 3 * wob) * sstep(0.0, 0.8, front)   # whiskers fanning from the crotch
            H += live * patch_ * bump(sK, 0.07, sp) * sstep(0.0, 0.9, -front) * 0.003 * crease((sp - sK) / 0.026 * 2 * math.pi + 1.2 * out_ + 3 * wob)
            H += live * bump(sK, 0.08, sp) * sstep(0.2, 1.0, front) * 0.0012 * crease((sp - sK) / 0.05 * 2 * math.pi + 2 * wob)
            H += live * patch_ * sstep(sK + 0.03, sK + 0.12, sp) * 0.0008 * crease((sp - sK) / 0.14 * 2 * math.pi + th + 4.5 * wob)
            H += live * (0.4 + 0.6 * patch_) * sstep(CUFF - 0.2, CUFF - 0.08, sp) * 0.0026 * crease((sp - CUFF) / 0.045 * 2 * math.pi + th + 1.6 * np.sin(th + 0.4) + 4 * wob)
            H += crinkle(Q, 0.0003)
        elif nm == 'jacket':
            g = sstep(HEM + 0.045, HEM + 0.06, sp) * (1 - sstep(HEM + 0.08, HEM + 0.2, sp)); H += g * patch_ * 0.0022 * crease(th * 14 + 4 * wob)
            side = np.abs(out_); H += patch_ * bump(zP + 0.17, 0.09, sp) * (0.3 + 0.7 * side) * 0.0024 * crease((sp - zP) / 0.05 * 2 * math.pi + 2.2 * out_ + 4 * wob)
            H += patch_ * bump(zS - 0.14, 0.1, sp) * sstep(0.3, 0.95, side) * 0.0022 * crease((sp - zS) / 0.05 * 2 * math.pi - side * 5 + 3 * wob)
            H += crinkle(Q, 0.0006)
        elif nm == 'hood':
            # a hood hangs: soft folds fall from the crown down the back and pile where it meets the shoulders
            H += patch_ * sstep(0.45, 0.7, sp) * (1 - sstep(0.95, 1.0, sp)) * np.clip(np.cos(th), 0, 1) * 0.0022 * crease(th * 7 + 3 * wob)
            H += sstep(0.82, 0.95, sp) * 0.0018 * crease(th * 11 + 2 * wob)
            H += crinkle(Q, 0.0005)
        elif nm == 'seat':
            H += 0.0018 * bump(zH - 0.03, 0.05, sp) * crease(th * 9 + 3 * wob) + crinkle(Q, 0.0003)
    elif pc['mat'] in ('Hoodie', 'Pack', 'Trousers', 'Cotton'): H += crinkle(Q, 0.0004)
    elif pc['mat'] == 'Gloves': H += crinkle(Q, 0.00025)
    cr_, dt_, rg_ = seam_marks(pc, w, h); H += 0.0007 * rg_ - 0.0004 * cr_ - 0.00025 * dt_
    if not pc['closed']:   # a sewn panel: its edge stands up
        U, Vv = np.meshgrid(np.linspace(0, 1, w), np.linspace(0, 1, h)); e = np.minimum(np.minimum(U, 1 - U) * w, np.minimum(Vv, 1 - Vv) * h)
        H += 0.0009 * sstep(0.0, 3.5, e)
    return H, mx, my
for pc, x, y, w, h in RECTS:
    Hh, mx, my = fold_height(pc, w, h)
    gx = np.gradient(Hh, axis=1) / np.maximum(1e-5, mx); gy = np.gradient(Hh, axis=0) / max(1e-5, my)
    Nn = np.stack([-gx, -gy, np.ones_like(Hh)], -1); Nn /= np.linalg.norm(Nn, axis=-1, keepdims=True)
    NIMG[y - 2:y + h + 2, x - 2:x + w + 2] = np.pad(Nn, ((2, 2), (2, 2), (0, 0)), mode='edge')
for pc, x, y, w, h in RECTS:
    ao = occlusion(pc['P'], pc['nrm'])
    if pc['closed']: ao = np.concatenate([ao, ao[:, :1]], 1)
    A = 0.42 + 0.58 * stretch(ao, w, h) ** 1.3
    U, Vv = np.meshgrid(np.linspace(0, 1, w), np.linspace(0, 1, h)); px = np.minimum(U, 1 - U) * w; py = np.minimum(Vv, 1 - Vv) * h
    if not pc['closed']:
        # a sewn-on panel: a dark edge, then a line of stitches just inside it
        e = np.minimum(px, py); A *= 0.72 + 0.28 * sstep(0.5, 3.0, e)
        if min(w, h) > 24: A *= 1 + 0.22 * ((e > 4) & (e < 6)) * ((np.floor((U * w + Vv * h) / 4) % 2) == 0)
    elif pc['name'] in ('jacket', 'sleeve', 'leg', 'hood'):
        A *= 0.8 + 0.2 * sstep(0.5, 2.5, px)                                    # the seam the tube closes on
    if pc['closed']: cr_, dt_, rg_ = seam_marks(pc, w, h); A *= (1 - 0.35 * cr_) * (1 + 0.3 * dt_)   # sewn seams: a dark crease, light stitches
    if pc['name'] == 'midsole': A *= 0.86 + 0.14 * (np.cos(Vv * h * 0.9) > 0.3)                       # the rubber's moulded ribs
    if pc['name'] in ('pack', 'pack-pocket'): A *= 0.9 + 0.1 * stretch(_rng.random((max(2, h // 3), max(2, w // 3))), w, h)   # nylon scuffed in places
    if pc['name'] == 'leg': A *= 1 - 0.3 * sstep(0.72, 1.0, Vv) * (0.6 + 0.4 * np.sin(U * 40) ** 2)   # street grime up from the cuffs
    if pc['name'] in ('midsole', 'upper'): A *= 0.82 + 0.18 * stretch(_rng.random((12, 24)), w, h)   # scuffs
    A *= 0.94 + 0.06 * stretch(_rng.random((max(2, h // 6), max(2, w // 6))), w, h)                   # nothing is one flat value
    IMG[y - 2:y + h + 2, x - 2:x + w + 2] = np.pad(np.clip(A, 0, 1), 2, mode='edge'); RECT_OF[id(pc['P'])] = (x, y, w, h)
for mesh in MESHES.values():
    uv1 = []
    for (pu, pv), pid in zip(mesh.UP, mesh.PID):
        x, y, w, h = RECT_OF[id(PIECES[pid]['P'])]; uv1.append(((x + 0.5 + min(1.0, pu) * (w - 1)) / ATLAS, (y + 0.5 + pv * (h - 1)) / ATLAS))
    mesh.UV1 = uv1

# ───────────────────────────── out to Blender ─────────────────────────────
bpy.ops.wm.read_factory_settings(use_empty=True)
def mat(name, rgb, rough):
    M = bpy.data.materials.new(name); M.use_nodes = True; b = M.node_tree.nodes.get('Principled BSDF')
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough; return M
LOOKS = {'Hoodie': (0.035, 0.6), 'Trousers': (0.07, 0.8), 'Gloves': (0.03, 0.6), 'Shoes': (0.7, 0.5), 'Sole': (0.8, 0.6), 'Void': (0.0, 1.0), 'Trim': (0.02, 0.8),
         'Mask': (0.01, 0.9), 'Pack': (0.03, 0.5), 'Can': (0.6, 0.3), 'Cap': (0.85, 0.5), 'Reflect': (0.8, 0.3), 'Detail': (0.012, 0.45), 'Cotton': (0.16, 0.95), 'Lace': (0.75, 0.8)}
BM = {n: mat(n, (LOOKS[n][0],) * 3, LOOKS[n][1]) for n in MATS}
# the atlas goes out inside the .glb as each material's base colour texture, on the second UV set
ATLAS_IMG = bpy.data.images.new('writer-atlas', ATLAS, ATLAS); _px = np.ones((ATLAS * ATLAS, 4), np.float32); _px[:, :3] = IMG.ravel()[:, None]; ATLAS_IMG.pixels.foreach_set(_px.ravel())
ATLAS_IMG.filepath_raw = os.path.join(bpy.app.tempdir, 'writer-atlas.jpg'); ATLAS_IMG.file_format = 'JPEG'; bpy.context.scene.render.image_settings.quality = 88; ATLAS_IMG.save()
ATLAS_IMG = bpy.data.images.load(ATLAS_IMG.filepath_raw); ATLAS_IMG.pack()
NORM_IMG = bpy.data.images.new('writer-normal', ATLAS, ATLAS); _px = np.ones((ATLAS * ATLAS, 4), np.float32); _px[:, :3] = (NIMG.reshape(-1, 3) * 0.5 + 0.5)
NORM_IMG.pixels.foreach_set(_px.ravel()); NORM_IMG.filepath_raw = os.path.join(bpy.app.tempdir, 'writer-normal.jpg'); NORM_IMG.file_format = 'JPEG'; NORM_IMG.save()
NORM_IMG = bpy.data.images.load(NORM_IMG.filepath_raw); NORM_IMG.colorspace_settings.name = 'Non-Color'; NORM_IMG.pack()
def with_normal(M):
    nt = M.node_tree; b = nt.nodes['Principled BSDF']; tex = nt.nodes.new('ShaderNodeTexImage'); tex.image = NORM_IMG; tex.name = 'folds'
    uvn = nt.nodes.new('ShaderNodeUVMap'); uvn.uv_map = 'Atlas'; nt.links.new(uvn.outputs['UV'], tex.inputs['Vector'])
    nm_ = nt.nodes.new('ShaderNodeNormalMap'); nm_.uv_map = 'Atlas'; nm_.inputs['Strength'].default_value = 1.0
    nt.links.new(tex.outputs['Color'], nm_.inputs['Color']); nt.links.new(nm_.outputs['Normal'], b.inputs['Normal'])
def with_atlas(M, multiply):
    """Wire the atlas into a material: straight into the base colour (for the export), or multiplied (for our pictures)."""
    nt = M.node_tree; b = nt.nodes['Principled BSDF']; tex = nt.nodes.get('atlas')
    if not tex:
        tex = nt.nodes.new('ShaderNodeTexImage'); tex.name = 'atlas'; tex.image = ATLAS_IMG; uvn = nt.nodes.new('ShaderNodeUVMap'); uvn.uv_map = 'Atlas'; nt.links.new(uvn.outputs['UV'], tex.inputs['Vector'])
    for l in list(b.inputs['Base Color'].links): nt.links.remove(l)
    if multiply:
        mix = nt.nodes.new('ShaderNodeMix'); mix.data_type = 'RGBA'; mix.blend_type = 'MULTIPLY'; mix.inputs['Factor'].default_value = 1.0
        mix.inputs['A'].default_value = b.inputs['Base Color'].default_value; nt.links.new(tex.outputs['Color'], mix.inputs['B']); nt.links.new(mix.outputs['Result'], b.inputs['Base Color'])
    else: nt.links.new(tex.outputs['Color'], b.inputs['Base Color'])
for n in MATS:
    if n != 'Void': with_atlas(BM[n], False)
    if n in ('Hoodie', 'Trousers', 'Gloves', 'Trim', 'Pack', 'Detail', 'Shoes', 'Cotton'): with_normal(BM[n])
OBJS = []
for mesh in MESHES.values():
    V = np.concatenate(mesh.V); W = np.concatenate(mesh.W)
    assert not np.isnan(V).any() and (W.sum(1) > 0.5).all(), mesh.name
    me = bpy.data.meshes.new(mesh.name); me.from_pydata((V / K).tolist(), [], mesh.F); me.update()
    used = sorted(set(mesh.M))
    for mi in used: me.materials.append(BM[MATS[mi]])
    me.polygons.foreach_set('material_index', [used.index(mi) for mi in mesh.M]); me.polygons.foreach_set('use_smooth', [True] * len(mesh.F))
    uv = me.uv_layers.new(name='UVMap'); uv.data.foreach_set('uv', np.array(mesh.UV).ravel())
    uv1 = me.uv_layers.new(name='Atlas'); uv1.data.foreach_set('uv', np.array(mesh.UV1).ravel())
    o = bpy.data.objects.new(mesh.name, me); bpy.context.collection.objects.link(o)
    # at most four bones a point, as the game's skinning wants
    top = np.argsort(-W, 1)[:, :4]; rows = np.arange(len(W))[:, None]; w4 = W[rows, top]; w4 /= w4.sum(1, keepdims=True)
    groups = [o.vertex_groups.new(name=FULL[b]) for b in BONES]
    for vi in range(len(W)):
        for k in range(4):
            if w4[vi, k] > 0.004: groups[top[vi, k]].add([vi], float(w4[vi, k]), 'REPLACE')
    mesh.V_all = V; mesh.W4 = (top, w4); OBJS.append(o)

# the rig: bones of the game's names at the bind joints (their directions don't matter: the bind matrices travel as data)
arm_d = bpy.data.armatures.new('ARM_Writer'); arm = bpy.data.objects.new('ARM_Writer', arm_d)
bpy.context.collection.objects.link(arm); bpy.context.view_layer.objects.active = arm
bpy.ops.object.mode_set(mode='EDIT'); eb = {}
for b in BONES:
    e = arm_d.edit_bones.new(FULL[b]); e.head = Vector(J[b] / K); e.tail = Vector((J[b] + np.array([0, 0, 0.05])) / K); eb[b] = e
for b in BONES:
    if PARENT[b]: eb[b].parent = eb[PARENT[b]]
bpy.ops.object.mode_set(mode='OBJECT')
for o in OBJS:
    o.parent = arm; md = o.modifiers.new('arm', 'ARMATURE'); md.object = arm
# what the game needs besides the meshes: the scale, the tidied joint offsets, and the bind pose (glTF axes, skeleton units)
def to_gl(R, p): M = np.eye(4); M[:3, :3] = G2B.T @ R @ G2B; M[:3, 3] = G2B.T @ p / K; return [round(float(x), 6) for x in M.T.ravel()]
# where a spray can sits in the right hand: its middle, its axis (up the thumb side), its nozzle (along the fingers)
def gl_frame(x, y, z, at): M = np.eye(4); M[:3, 0], M[:3, 1], M[:3, 2], M[:3, 3] = G2B.T @ x, G2B.T @ y, G2B.T @ z, G2B.T @ at / K; return [round(float(v), 6) for v in M.T.ravel()]
# the right hand's socket: y up the can, z out of the nozzle, x across (right-handed after the mirror)
_y, _z = CAN_U * FLIP, CAN_NOZ * FLIP; _gr = gl_frame(np.cross(_y, _z), _y, _z, GRIP['at'] * FLIP + np.array([2 * CX, 0, 0]))
print('WRITER grip handedness', round(float(np.linalg.det(np.array(_gr).reshape(4, 4).T[:3, :3])), 3))
_rest = {FULL[b]: [round(float(x), 6) for x in G2B.T @ REST[b] / K] for b in sorted(TIDIED | {'LeftToeBase', 'RightToeBase', 'Neck'})}
_rest[FULL['Hips']] = [round(float(x), 6) for x in G2B.T @ (REST['Hips'] + np.array([0, 0, HIPS_LIFT])) / K]
def gl_quat(L):
    M = G2B.T @ L @ G2B; w = math.sqrt(max(0.0, 1 + M[0, 0] + M[1, 1] + M[2, 2])) / 2; x = math.sqrt(max(0.0, 1 + M[0, 0] - M[1, 1] - M[2, 2])) / 2
    y = math.sqrt(max(0.0, 1 - M[0, 0] + M[1, 1] - M[2, 2])) / 2; z = math.sqrt(max(0.0, 1 - M[0, 0] - M[1, 1] + M[2, 2])) / 2
    x = math.copysign(x, M[2, 1] - M[1, 2]); y = math.copysign(y, M[0, 2] - M[2, 0]); z = math.copysign(z, M[1, 0] - M[0, 1]); n = math.sqrt(x * x + y * y + z * z + w * w)
    return [round(v / n, 6) for v in (x, y, z, w)]
_fingers = {k: {FULL[b]: gl_quat(L) for side in ('Left', 'Right') for b, L in local_turns(P, side).items()} for k, P in POSES.items()}
_extra = {FULL[b]: {'parent': FULL[PARENT[b]], 't': [round(float(x), 6) for x in G2B.T @ REST[b] / K]} for b in EXTRA}
_can = dict(r=CAN_R, b0=CAN_B0, b1=CAN_B1, dome=CAN_DOME, actR=CAN_ACT_R, top=CAN_TOP, nozY=CAN_NOZ_Y)
arm['vx'] = json.dumps({'scale': K, 'grip': _gr, 'rest': _rest, 'hipsY': HIPSY, 'extra': _extra, 'fingers': _fingers, 'can': _can, 'bind': {FULL[b]: to_gl(*BIND[b]) for b in BONES}})
bpy.ops.object.select_all(action='DESELECT')
for o in OBJS + [arm]: o.select_set(True)
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', use_selection=True, export_animations=False, export_skins=True, export_yup=True,
                          export_materials='EXPORT', export_apply=False, export_extras=True, export_image_format='JPEG', export_image_quality=85)
tris = sum(len(p.vertices) - 2 for o in OBJS for p in o.data.polygons)
print(f'WRITER OK {OUT} meshes={len(OBJS)} tris={tris} verts={sum(len(o.data.vertices) for o in OBJS)} size={os.path.getsize(OUT) / 1e6:.2f}MB')

# ───────────────────────────── pictures, to judge it by ─────────────────────────────
if RENDER:
    os.makedirs(RENDER, exist_ok=True)
    # for the pictures only (the game draws its own): a can in the right hand's socket, on the hand bone
    rc = Mesh('SM_RenderCan'); can_mesh(rc, GRIP['at'] * FLIP + np.array([2 * CX, 0, 0]), CAN_U * FLIP, (0, 1, 0), weights(RightHand=np.ones(1)), 'hand-can')
    V = np.concatenate(rc.V); W = np.concatenate(rc.W); me = bpy.data.meshes.new(rc.name); me.from_pydata((V / K).tolist(), [], rc.F); used = sorted(set(rc.M))
    for mi in used: me.materials.append(BM[MATS[mi]])
    me.polygons.foreach_set('material_index', [used.index(mi) for mi in rc.M]); me.polygons.foreach_set('use_smooth', [True] * len(rc.F))
    o = bpy.data.objects.new(rc.name, me); bpy.context.collection.objects.link(o); top = np.argsort(-W, 1)[:, :4]; w4 = W[np.arange(len(W))[:, None], top]; w4 /= w4.sum(1, keepdims=True)
    rc.V_all = V; rc.W4 = (top, w4); OBJS.append(o)
    for n in MATS:
        if n != 'Void': with_atlas(BM[n], True)
    ATLAS_IMG.save_render(os.path.join(RENDER, TAG + '-atlas.jpg')); NORM_IMG.save_render(os.path.join(RENDER, TAG + '-normal.jpg'))
    sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE'; sc.render.film_transparent = False
    try: sc.eevee.taa_render_samples = 24; sc.eevee.use_shadows = True; sc.eevee.use_raytracing = True
    except Exception as e: print('eevee', e)
    sc.world = bpy.data.worlds.new('w'); sc.world.use_nodes = True; sc.world.node_tree.nodes['Background'].inputs[0].default_value = (0.045, 0.045, 0.05, 1)
    sc.view_settings.view_transform = 'Standard'
    def light(at, energy, size=1.0, to=(CX, -0.05, 1.0)):
        L = bpy.data.lights.new('l', 'AREA'); L.energy = energy / K ** 2; L.size = size / K   # the scene is in skeleton units
        o = bpy.data.objects.new('l', L); bpy.context.collection.objects.link(o); o.location = Vector(at) / K
        o.rotation_euler = (Vector(to) - Vector(at)).to_track_quat('-Z', 'Y').to_euler(); return o
    # a soft key from the front, and the game's light: hard rims from behind on both sides
    light((1.6, -3.0, 2.6), 260, 2.5); light((-2.5, -1.5, 1.2), 60, 3.0)
    light((2.2, 2.6, 2.4), 420, 1.0); light((-2.4, 2.2, 1.8), 300, 1.0); light((0, 0.5, 4.0), 120, 3.0)
    fl = bpy.data.meshes.new('floor'); fl.from_pydata([(-6 / K, -6 / K, 0), (6 / K, -6 / K, 0), (6 / K, 6 / K, 0), (-6 / K, 6 / K, 0)], [], [[0, 1, 2, 3]])
    flo = bpy.data.objects.new('floor', fl); bpy.context.collection.objects.link(flo); fl.materials.append(mat('floor', (0.09, 0.09, 0.1), 0.35))
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); bpy.context.collection.objects.link(cam); sc.camera = cam
    cam.data.clip_start = 0.01; cam.data.clip_end = 100
    def shoot(name, ang, target=(CX, -0.03, 0.92), dist=5.0, lens=70, res=(560, 900), elev=0.0):
        a = math.radians(ang); e = math.radians(elev); d = Vector((math.sin(a) * math.cos(e), -math.cos(a) * math.cos(e), math.sin(e)))
        cam.data.lens = lens; cam.location = (Vector(target) + d * dist) / K; cam.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
        if SHOTS and not any(name.startswith(x) for x in SHOTS): return
        sc.render.resolution_x, sc.render.resolution_y = res; sc.render.filepath = os.path.join(RENDER, f'{TAG}-{name}.png'); bpy.ops.render.render(write_still=True)
    def set_pose(P):
        """Skin every mesh to a pose (or back to the bind pose with None), exactly as the game does."""
        for o, mesh in zip(OBJS, MESHES.values()):
            V = mesh.V_all
            if P is not None:
                S = [(P[b][0] @ BIND[b][0].T, P[b][1] - P[b][0] @ BIND[b][0].T @ BIND[b][1]) for b in BONES]
                top, w4 = mesh.W4; out = np.zeros_like(V)
                for k in range(4):
                    Rk = np.array([S[i][0] for i in top[:, k]]); tk = np.array([S[i][1] for i in top[:, k]])
                    out += w4[:, k:k + 1] * (np.einsum('nij,nj->ni', Rk, V) + tk)
                V = out
            o.data.vertices.foreach_set('co', (V / K).ravel()); o.data.update()
            mesh.low = float(V[:, 2].min())
    def bind_fingers():
        """The bind pose, with the fingers as posed now (relaxed left; the right round its can)."""
        P = {b: BIND[b] for b in BONES}
        for b in BONES:
            if b in EXTRA:
                Rp, pp = P[PARENT[b]]; Rp0 = BIND[PARENT[b]][0]
                P[b] = (Rp @ Rp0.T @ BIND[b][0] @ FPOSE[b] if b in FPOSE else Rp @ Rp0.T @ BIND[b][0], pp + Rp @ REST[b])
        return P
    IDLE0 = bind_fingers(); set_pose(IDLE0)
    for name, ang in (('front', 0), ('side', 90), ('back', 180), ('three-quarter', 35), ('back-quarter', 145)): shoot(name, ang)
    shoot('hood', 25, (CX, -0.06, zN + 0.12), 1.6, 70, (640, 640), 5); shoot('hood-back', 160, (CX, -0.0, zN + 0.05), 1.9, 70, (640, 640), 10)
    set_pose(IDLE0)
    shoot('hand', 115, tuple(J['LeftHand'] + np.array([0, 0, -0.06])), 0.6, 70, (640, 640), 10); shoot('hand-palm', -60, tuple(J['LeftHand'] + np.array([0, 0, -0.06])), 0.6, 70, (640, 640), 0); shoot('shoes', 40, (CX, -0.05, 0.1), 1.5, 70, (760, 520), 18)
    _rh = tuple(J['RightHand'] + np.array([0, 0, -0.07]))
    for nm_, a_, e_ in (('grip-out', -115, 10), ('grip-front', -20, 15), ('grip-in', 160, 5), ('grip-palm', -70, -30)): shoot(nm_, a_, _rh, 0.55, 70, (640, 640), e_)
    FPOSE.update(local_turns(POSES['press'], 'Right')); set_pose(bind_fingers())
    for nm_, a_, e_ in (('press-out', -115, 20), ('press-front', -20, 25)): shoot(nm_, a_, _rh, 0.55, 70, (640, 640), e_)
    FPOSE.update(local_turns(POSES['grip'], 'Right')); set_pose(None)
    for clip, t in (('Idle_Loop', 0.0), ('Jog_Fwd_Loop', 0.2), ('Jog_Fwd_Loop', 0.55), ('Sprint_Loop', 0.15), ('Sprint_Loop', 0.45), ('Crouch_Idle_Loop', 0.0), ('Crouch_Fwd_Loop', 0.6), ('Jump_Loop', 0.3), ('Walk_Loop', 0.4), ('Spell_Simple_Idle_Loop', 0.5)):
        Pz = pose(CLIPS[clip], t); set_pose(Pz); hz = Pz['Spine1'][1][2]; nm = clip.replace('_Loop', '').replace('_', '') + str(int(t * 100))
        print('WRITER pose', nm, 'lowest point %.3f m' % min(m_.low for m_ in MESHES.values()))
        shoot('pose-' + nm + '-a', 150, (CX, 0, hz - 0.15), 5.0, 70, (620, 760), 8); shoot('pose-' + nm + '-b', 80, (CX, 0, hz - 0.15), 5.0, 70, (620, 760), 4)
    set_pose(None)
