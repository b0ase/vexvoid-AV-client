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
Materials are named for the game (Hoodie, Trousers, Gloves, Shoes, Sole, Void, Trim, Mask, Pack, Can, Cap, Reflect),
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
K = 2.9                                     # metres per skeleton unit: the hood's top comes to about 1.8 m

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
        if b == 'LeftUpLeg': mean[0] = 0.105
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
def pose(clip, t):
    """Where every joint is at time t of a clip: {bone: (rotation 3x3, position)} in Blender axes, metres. As the game
    plays them: the hips keep their height track but stay over the same spot."""
    out = {}
    for b in BONES:
        Rp, pp = out[PARENT[b]] if PARENT[b] else (np.eye(3), np.zeros(3))
        R = Rp @ (G2B @ quat_mat(sample(clip[(b, 'rotation')], t)) @ G2B.T) if (b, 'rotation') in clip else Rp
        off = REST[b]
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
FOLD = 1.5   # how deep the cloth's folds are cut: they must still read from the game camera, three metres back
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

# ───────────────────────────── meshes: grids of points, collected per exported object ─────────────────────────────
MESHES = {}; PIECES = []
class Mesh:
    def __init__(s, name): s.name = name; s.V = []; s.W = []; s.F = []; s.M = []; s.UV = []; s.UP = []; s.PID = []; s.n = 0; MESHES[name] = s
MATS = ['Hoodie', 'Trousers', 'Gloves', 'Shoes', 'Sole', 'Void', 'Trim', 'Mask', 'Pack', 'Can', 'Cap', 'Reflect', 'Detail']
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
HEM = zP - 0.045   # the jacket's hem: a waist-length blouson, short enough that a lifted thigh clears it
TZ = [HEM, HEM + 0.05, HEM + 0.11, zP + 0.26, zS - 0.13, zS - 0.02, zS + 0.05, zS + 0.095, zN + 0.0]
t_a = curve(TZ, [0.2, 0.202, 0.218, 0.216, 0.222, 0.224, 0.212, 0.16, 0.1])     # half width
t_f = curve(TZ, [0.125, 0.127, 0.142, 0.138, 0.146, 0.138, 0.118, 0.098, 0.085])     # depth to the front
t_b = curve(TZ, [0.112, 0.114, 0.128, 0.124, 0.134, 0.13, 0.12, 0.106, 0.095])     # depth to the back
t_y = curve(TZ, [J['Hips'][1] - 0.005, J['Hips'][1] - 0.005, J['Hips'][1] - 0.01, J['Spine1'][1], J['Spine2'][1] + 0.02, J['Spine2'][1] + 0.035, J['LeftArm'][1] - 0.02, J['Head'][1] - 0.02, J['Head'][1] - 0.012])
t_n = curve(TZ, [2.6, 2.6, 2.7, 2.7, 2.6, 2.4, 2.2, 2.1, 2.0])
def torso_surface(z, th):
    """The jacket body: a point for each height z and angle th round the trunk (0 front, a quarter turn = his left)."""
    z, th = np.broadcast_arrays(np.asarray(z, float), np.asarray(th, float)); c = np.cos(th); n = t_n(z)
    x = CX + t_a(z) * sup(np.sin(th), n); y = t_y(z) - np.where(c > 0, t_f(z), t_b(z)) * sup(c, n)
    return np.stack([x, y, z], -1)
NT = 64; th_t = np.arange(NT) / NT * 2 * math.pi
z_t = np.concatenate([np.linspace(TZ[0], TZ[2], 7)[:-1], np.linspace(TZ[2], TZ[5], 22)[:-1], np.linspace(TZ[5], TZ[8], 12)])
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
s_s = np.concatenate([np.linspace(-0.1, 0.0, 6)[:-1], np.linspace(0.0, sW - 0.075, 38)[:-1], np.linspace(sW - 0.075, sW - 0.01, 7)])
r_sleeve = curve([-0.1, -0.07, -0.02, 0.06, sE - 0.03, sE + 0.06, sW - 0.1, sW - 0.075, sW - 0.055, sW - 0.01], [0.012, 0.055, 0.08, 0.081, 0.07, 0.067, 0.064, 0.06, 0.049, 0.047])
Ps, Cs, Ts, EFs, EOs = tube(arm_path, s_s, r_sleeve(s_s) * 0.95, r_sleeve(s_s), th_s)
def sleeve_folds(P):
    n = grid_normals(P, True); s = np.broadcast_to(s_s[:, None], P.shape[:2]); th = np.broadcast_to(th_s[None], P.shape[:2])
    front = np.cos(th); out_ = np.sin(th); d = np.zeros(s.shape); wob = fbm(P, 0.11, 2.0); amp = 0.75 + 0.5 * fbm(P, 0.07, 9.0)
    live = sstep(-0.02, 0.06, s) * (1 - sstep(sW - 0.075, sW - 0.06, s))          # none on the shoulder cap or the cuff
    # long drags that spiral down from the shoulder
    d += live * 0.004 * amp * crease(s / 0.13 * 2 * math.pi + th * 1.0 + 4.5 * wob)
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
s_c = np.array([sW - 0.065, sW - 0.058, sW - 0.03, sW - 0.006, sW - 0.002, sW - 0.006]); r_c = np.array([0.047, 0.054, 0.054, 0.053, 0.048, 0.04])
Pc = tube(arm_path, s_c, r_c * 0.95, r_c, th_s)[0]
grid(body, Pc, 'Trim', weights(LeftForeArm=np.ones(Pc.shape[0] * Pc.shape[1])), mirror=True, name='cuff')

# ───────────────────────────── trousers ─────────────────────────────
# the seat: from the waistband (under the jacket) round the hips and closed between the legs
SZ = [zH - 0.06, zH - 0.05, zH - 0.02, zH + 0.04, zP + 0.04, zP + 0.12]
s_a = curve(SZ, [0.02, 0.06, 0.14, 0.186, 0.186, 0.175]); s_f = curve(SZ, [0.03, 0.06, 0.095, 0.105, 0.105, 0.1]); s_b = curve(SZ, [0.03, 0.07, 0.106, 0.11, 0.104, 0.098])
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
r_leg = curve([-0.1, -0.07, 0.0, 0.1, sK - 0.06, sK + 0.04, sK + 0.1, CUFF - 0.06, CUFF - 0.02, CUFF, CUFF + 0.045], [0.02, 0.07, 0.09, 0.088, 0.074, 0.071, 0.068, 0.066, 0.063, 0.053, 0.051])
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
    d += live * sstep(sK + 0.03, sK + 0.1, s) * 0.0035 * amp * crease((s - sK) / 0.15 * 2 * math.pi + th * 1.0 + 4.5 * wob)
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

# ───────────────────────────── the hood: a tube that turns from the face to the neck ─────────────────────────────
hood = Mesh('SM_Char_Writer_Hood')
HY, HZ = J['Head'][1], zN                                    # the base of the neck; the skull sits forward and above it
HU = [0.0, 0.15, 0.4, 0.65, 0.85, 1.0]
h_c = curve(HU, [(HY - 0.162, HZ + 0.158), (HY - 0.125, HZ + 0.16), (HY - 0.05, HZ + 0.168), (HY - 0.0, HZ + 0.118), (HY + 0.012, HZ + 0.04), (HY + 0.012, HZ - 0.07)])
h_ang = curve(HU, np.radians([4, 8, 22, 62, 86, 90]))
h_a = curve(HU, [0.09, 0.112, 0.13, 0.134, 0.132, 0.165])     # half width
h_top = curve(HU, [0.098, 0.116, 0.128, 0.122, 0.112, 0.115])     # over the head, then down the back
h_bot = curve(HU, [0.088, 0.098, 0.1, 0.062, 0.075, 0.09])     # under the chin, then the throat
NH = 40; psi = np.arange(NH) / NH * 2 * math.pi; u_h = np.concatenate([np.linspace(0, 0.15, 5)[:-1], np.linspace(0.15, 1.0, 26)])
def hood_ring(u):
    c = h_c(u); a = h_ang(u); cu = np.cos(psi); top = cu > 0
    up = np.array([0, math.sin(a), math.cos(a)]); r = np.where(top, h_top(u), h_bot(u))
    peak = 0.01 * bump(0.5, 0.1, u) * np.clip(cu, 0, 1) ** 6                                   # the soft point at the back of the crown
    seam = -0.004 * (bump(0.55, 0.07, psi) + bump(2 * math.pi - 0.55, 0.07, psi)) * top * sstep(0.1, 0.25, u)   # the centre panel's two seams
    P = np.array([CX, c[0], c[1]]) + np.outer(h_a(u) * sup(np.sin(psi), 2.3), [1, 0, 0]) + np.outer((r + peak + seam) * sup(cu, 2.2), up)
    brim = sstep(0.25, 0.95, cu) * (1 - sstep(0.0, 0.14, u))                                    # the stiffened peak over the brow
    P[:, 1] -= 0.045 * brim; P[:, 2] -= 0.012 * brim
    chin = sstep(0.3, 1.0, -cu) * (1 - sstep(0.0, 0.2, u))                                      # the collar stands up over the mouth
    P[:, 1] -= 0.012 * chin; P[:, 2] += 0.03 * chin
    return P
Ph = np.array([hood_ring(u) for u in u_h])
# folds: the hood slumps on the shoulders behind, and the cloth is never drum-tight
uu = np.broadcast_to(u_h[:, None], Ph.shape[:2]); pp = np.broadcast_to(psi[None], Ph.shape[:2]); nh = grid_normals(Ph, True)
dh = 0.005 * sstep(0.62, 0.75, uu) * (1 - sstep(0.93, 1.0, uu)) * np.clip(np.cos(pp), 0, 1) * crease((uu - 0.7) / 0.13 * 2 * math.pi + 2.0 * np.sin(pp) + 4 * fbm(Ph, 0.1, 51.0))
dh += 0.004 * fbm(Ph, 0.09, 53.0) * sstep(0.05, 0.2, uu)
Ph = Ph + nh * dh[..., None]
# the opening's edge: the cloth turns in over a drawcord channel, then the lining runs back inside
c0 = Ph[0].mean(0)
lip = c0 + (Ph[0] - c0) * 0.93 + np.array([0, -0.01, 0]); inner = c0 + (Ph[0] - c0) * 0.87 + np.array([0, 0.004, 0]); deep = c0 + (Ph[0] - c0) * 0.9 + np.array([0, 0.05, 0])
Ph = np.concatenate([deep[None], inner[None], lip[None], Ph]); u_hx = np.concatenate([[0, 0, 0], u_h])
wh = 1 - sstep(0.5, 0.95, np.broadcast_to(u_hx[:, None], Ph.shape[:2]).ravel())
Wh = weights(Head=wh, Neck=(1 - wh) * 0.35, Spine2=(1 - wh) * 0.65)
grid(hood, Ph, 'Hoodie', Wh, name='hood')
patch(hood, Ph, grid_normals(Ph, True), np.arange(3, 8), np.arange(NH + 1), 0.004, 'Hoodie', Wh, 'hood-hem')   # the bound edge
# inside: a head with nothing on it, and a mask and gaiter over where a face would be. Only darkness.
def ellipsoid(c, r, nu=20, nv=12, v0=-1.0, v1=1.0, u0=0.0, u1=2 * math.pi):
    v = np.linspace(v0, v1, nv) * math.pi / 2; u = np.linspace(u0, u1, nu, endpoint=(u1 - u0) < 2 * math.pi - 1e-6)
    return np.array(c) + np.stack([r[0] * np.outer(np.cos(v), np.sin(u)), -r[1] * np.outer(np.cos(v), np.cos(u)), r[2] * np.outer(np.sin(v), np.ones(len(u)))], -1)
SK = (CX, HY - 0.048, HZ + 0.172)                               # the middle of the skull
Pv = ellipsoid(SK, (0.08, 0.097, 0.112), 24, 14, -0.97, 0.97)
grid(body, Pv, 'Void', one('Head', Pv), cap0=True, cap1=True, name='head')
Pm = ellipsoid((SK[0], SK[1] - 0.004, SK[2] - 0.012), (0.086, 0.103, 0.11), 25, 10, -0.85, 0.12, -1.75, 1.75)
grid(body, Pm, 'Mask', one('Head', Pm), closed=False, name='mask')
neck_pts = np.array([[CX, HY - 0.02, HZ - 0.06], [CX, HY - 0.03, HZ + 0.03], [CX, HY - 0.045, HZ + 0.09]])
Pn = sweep(resample(neck_pts, 6), 0.062, 0.066, 20, (0, -1, 0)); zz = Pn[..., 2].ravel()
grid(body, Pn, 'Mask', weights(Head=sstep(HZ - 0.02, HZ + 0.05, zz), Spine2=1 - sstep(HZ - 0.02, HZ + 0.05, zz)), name='gaiter')
# drawcords: out of the hood's edge, down the chest, with toggles
strings = Mesh('SM_Char_Writer_String')
for sgn in (1, -1):
    top_ = np.array([CX + sgn * 0.05, HY - 0.185, HZ + 0.075]); pts = [top_, top_ + np.array([sgn * 0.004, -0.012, -0.05]), top_ + np.array([sgn * 0.012, -0.004, -0.12]), top_ + np.array([sgn * 0.016, 0.0, -0.2])]
    Pd = sweep(resample(pts, 10), 0.0035, 0.0035, 6, (1, 0, 0)); grid(strings, Pd, 'Detail', spine_w(Pd.reshape(-1, 3)), cap1=True, name='cord')
    Pd = sweep(resample([pts[3] + np.array([0, 0, 0.012]), pts[3] + np.array([0, 0, -0.018])], 3), 0.007, 0.007, 8, (1, 0, 0)); grid(strings, Pd, 'Detail', spine_w(Pd.reshape(-1, 3)), cap0=True, cap1=True, name='toggle')

# ───────────────────────────── gloved hands: fingers curled round a can ─────────────────────────────
HF = unit(J['LeftHand'] - J['LeftForeArm'])                    # along the fingers
hn = np.array([-1.0, 0, 0]); HN = unit(hn - HF * hn.dot(HF))   # out of the palm: toward the thigh
HT = np.cross(HF, HN); HT = HT if HT[1] < 0 else -HT           # the thumb's side: forward
def hand_pt(f, n, t): return J['LeftHand'] + np.outer(f, HF) + np.outer(n, HN) + np.outer(t, HT)
fq = np.array([-0.055, -0.03, 0.0, 0.018, 0.04, 0.062, 0.08, 0.09, 0.094])
Pg = sweep(hand_pt(fq, 0.01 * sstep(0.02, 0.1, fq), 0 * fq), [0.03, 0.03, 0.029, 0.034, 0.04, 0.043, 0.043, 0.038, 0.025], [0.027, 0.027, 0.023, 0.021, 0.02, 0.019, 0.018, 0.014, 0.008], 20, HN, 2.6)
grid(body, Pg, 'Gloves', weights(LeftHand=sstep(-0.035, 0.0, np.repeat(fq, 20)), LeftForeArm=1 - sstep(-0.035, 0.0, np.repeat(fq, 20))), mirror=True, cap1=True, name='palm')
FINGERS = [(0.0315, (0.04, 0.026, 0.022), (22, 38, 24), 0.0098, 0.1), (0.0105, (0.044, 0.029, 0.023), (28, 44, 28), 0.0102, 0.03), (-0.0105, (0.041, 0.027, 0.022), (34, 48, 30), 0.0098, -0.04), (-0.0305, (0.032, 0.02, 0.019), (40, 50, 32), 0.0088, -0.12)]
for ti, lens, flex, rad, splay in FINGERS:
    f, n, a = 0.086 - abs(ti) * 0.14, 0.008, 0.0; pts = [(f - 0.014, n - 0.002)]
    for L, fx in zip(lens, flex):
        a += math.radians(fx); pts.append((f, n)); f += L * math.cos(a); n += L * math.sin(a)
    pts.append((f, n)); pts = np.array(pts); line = resample(hand_pt(pts[:, 0], pts[:, 1], ti + splay * (pts[:, 0] - 0.08)), 11)
    Pf = sweep(line, rad * np.array([1, 1.04, 1, 1, 1.04, 0.97, 0.95, 0.99, 0.93, 0.85, 0.55]), rad * np.array([1, 1, 0.97, 0.95, 0.98, 0.92, 0.9, 0.93, 0.88, 0.8, 0.5]), 8, HT)
    grid(body, Pf, 'Gloves', one('LeftHand', Pf), mirror=True, cap1=True, name='finger')
tp = hand_pt(np.array([0.012, 0.036, 0.062, 0.084, 0.098]), np.array([0.006, 0.02, 0.038, 0.058, 0.074]), np.array([0.026, 0.047, 0.056, 0.054, 0.046]))
Pth = sweep(resample(tp, 10), 0.0118 * np.array([1.3, 1.2, 1.08, 1, 1.03, 0.97, 0.95, 0.9, 0.82, 0.55]), 0.0118 * np.array([1.25, 1.12, 1, 0.97, 1, 0.93, 0.9, 0.86, 0.78, 0.5]), 8, HF)
grid(body, Pth, 'Gloves', one('LeftHand', Pth), mirror=True, cap1=True, name='thumb')
# a padded panel on the back of the hand and a strap round the wrist
patch(body, Pg, grid_normals(Pg, True), np.arange(4, 8), np.arange(6, 15), 0.004, 'Detail', weights(LeftHand=sstep(-0.035, 0.0, np.repeat(fq, 20)), LeftForeArm=1 - sstep(-0.035, 0.0, np.repeat(fq, 20))), 'knuckle', mirror=True)
ws = lambda r: sweep(hand_pt(np.array([-0.014, 0.004]), np.zeros(2), np.zeros(2)), 0.03 * r, 0.024 * r, 20, HN, 2.6)
Pws = np.concatenate([ws(0.95)[:1], ws(1.13), ws(0.95)[1:]]); grid(body, Pws, 'Detail', one('LeftHand', Pws), mirror=True, name='wrist-strap')
GRIP = dict(at=hand_pt(np.array([0.066]), np.array([0.058]), np.array([0.0]))[0], axis=HT, nozzle=HF)   # where a can sits in the right hand's twin

# ───────────────────────────── trouser details ─────────────────────────────
Wl = leg_w(Pl); Nl = grid_normals(Pl, True)
rs = lambda a, b: np.where((s_l >= a) & (s_l <= b))[0]
cl = lambda a, b: np.arange(int(round(a / (2 * math.pi) * NL)), int(round(b / (2 * math.pi) * NL)) + 1)
patch(body, Pl, Nl, rs(0.1, 0.25), cl(0.95, 2.2), 0.014, 'Trousers', Wl, 'cargo', mirror=True, edge=0.0)     # the cargo pocket on the outside of the thigh
patch(body, Pl, Nl, rs(0.085, 0.125), cl(0.9, 2.25), 0.019, 'Trousers', Wl, 'cargo-flap', mirror=True, edge=0.004)
patch(body, Pl, Nl, rs(sK - 0.075, sK + 0.085), cl(-0.9, 0.9), 0.005, 'Trousers', Wl, 'knee', mirror=True)   # the shaped knee panel
patch(body, Pl, Nl, rs(CUFF - 0.004, CUFF + 0.046), np.arange(NL + 1), 0.004, 'Trim', Wl, 'ankle-cuff', mirror=True)

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
    box_tube(body, line, 0.004, 0.003, 6, Nu[r0, cols], 'Detail', Wu.reshape(len(q_s), NSH, NB)[r0, cols].mean(0)[None].repeat(len(cols) * 6, 0), name='lace', mirror=True)

# ───────────────────────────── the backpack, its straps, and the cans ─────────────────────────────
pack = Mesh('SM_Char_Writer_Pack')
PKZ = [zS - 0.37, zS - 0.35, zS - 0.3, zS - 0.1, zS + 0.0, zS + 0.035, zS + 0.05]
p_a = curve(PKZ, [0.09, 0.125, 0.14, 0.138, 0.13, 0.115, 0.07]); p_d = curve(PKZ, [0.03, 0.055, 0.068, 0.064, 0.056, 0.045, 0.02])
z_k = np.concatenate([np.linspace(PKZ[0], PKZ[2], 5)[:-1], np.linspace(PKZ[2], PKZ[4], 12)[:-1], np.linspace(PKZ[4], PKZ[6], 5)]); NK = 36; th_k = np.arange(NK) / NK * 2 * math.pi
back_y = lambda z: t_y(z) + t_b(z)                              # the jacket's back
Pk = np.stack([CX + p_a(z_k)[:, None] * sup(np.sin(th_k), 4.5)[None], (back_y(z_k) + p_d(z_k) - 0.012)[:, None] - p_d(z_k)[:, None] * sup(np.cos(th_k), 3.5)[None], np.broadcast_to(z_k[:, None], (len(z_k), NK))], -1)
Pk = Pk + grid_normals(Pk, True) * (0.004 * fbm(Pk, 0.1, 71.0))[..., None]
Wk = spine_w(np.broadcast_to(np.array([CX, 0, 1.0]), (len(z_k) * NK, 3)) * 0 + np.stack([np.full(len(z_k) * NK, CX), np.zeros(len(z_k) * NK), np.repeat(np.clip(z_k, J['Spine2'][2] + 0.03, 9), NK)], -1))
grid(pack, Pk, 'Pack', Wk, cap0=True, cap1=True, name='pack'); Nk = grid_normals(Pk, True)
rk = lambda a, b: np.where((z_k >= a) & (z_k <= b))[0]; ck = lambda a, b: np.arange(int(round(a / (2 * math.pi) * NK)), int(round(b / (2 * math.pi) * NK)) + 1)
patch(pack, Pk, Nk, rk(zS - 0.33, zS - 0.17), ck(math.pi - 0.95, math.pi + 0.95), 0.022, 'Pack', Wk, 'pack-pocket', edge=0.0)       # the front pocket
patch(pack, Pk, Nk, rk(zS - 0.12, zS - 0.085), ck(math.pi - 1.2, math.pi + 1.2), 0.004, 'Reflect', Wk, 'pack-tape')                  # reflective tape: the mark you see from behind
patch(pack, Pk, Nk, rk(zS - 0.37, zS - 0.2), ck(math.pi / 2 - 0.5, math.pi / 2 + 0.5), 0.02, 'Pack', Wk, 'side-pocket', edge=0.0)   # a mesh pocket each side, a can in each
patch(pack, Pk, Nk, rk(zS - 0.37, zS - 0.2), ck(1.5 * math.pi - 0.5, 1.5 * math.pi + 0.5), 0.02, 'Pack', Wk, 'side-pocket', edge=0.0)
top_roll = np.array([[CX - 0.125, back_y(zS) + 0.05, zS + 0.045], [CX, back_y(zS) + 0.052, zS + 0.05], [CX + 0.125, back_y(zS) + 0.05, zS + 0.045]])
box_tube(pack, resample(top_roll, 7), 0.03, 0.026, 12, (0, 0, 1), 'Pack', Wk[-NK:].mean(0)[None].repeat(7 * 12, 0), pw=2.6, name='roll-top')
box_tube(pack, resample([[CX, back_y(zS) + 0.05, zS + 0.08], [CX, back_y(zS) + 0.105, zS + 0.03], [CX, back_y(zS) + 0.125, zS - 0.08]], 8), 0.014, 0.003, 6, (0, 1, 0.3), 'Detail', Wk[-NK:].mean(0)[None].repeat(48, 0), name='roll-strap')
def can(base, tilt_x, tilt_y, k):
    ax = unit(np.array([math.sin(math.radians(tilt_y)), math.sin(math.radians(tilt_x)), 1.0])); hs = np.array([0.0, 0.004, 0.012, 0.15, 0.172, 0.182, 0.186]); rs_ = np.array([0.026, 0.032, 0.033, 0.033, 0.03, 0.016, 0.014])
    Pcn = sweep(base + np.outer(hs, ax), rs_, rs_, 16, (0, 1, 0)); grid(pack, Pcn, 'Can', one('Spine2', Pcn), cap0=True, cap1=True, name='can')
    hs2 = np.array([0.184, 0.186, 0.214, 0.218]); r2 = np.array([0.012, 0.0165, 0.0165, 0.012])
    Pcp = sweep(base + np.outer(hs2, ax), r2, r2, 12, (0, 1, 0)); grid(pack, Pcp, 'Cap', one('Spine2', Pcp), cap0=True, cap1=True, name='cap')
can(np.array([CX + 0.168, back_y(zS - 0.3) + 0.058, zS - 0.345]), 3, 5, 0); can(np.array([CX - 0.168, back_y(zS - 0.3) + 0.058, zS - 0.345]), 3, -5, 1)
can(np.array([CX + 0.045, back_y(zS) + 0.06, zS - 0.09]), 8, 10, 2)
# straps: over each shoulder from the top of the pack, down the chest, and back under the arm, lying on the jacket
def on_torso(th, z, off): p = torso_surface(z, th); e = 1e-3; n = unit(np.cross(torso_surface(z, th + e) - p, torso_surface(z + e, th) - p)); return p + n * off, n
for sgn in (1, -1):
    keys = np.array([[2.72, zS - 0.02], [2.6, zS + 0.07], [2.2, zS + 0.108], [1.57, zS + 0.118], [0.95, zS + 0.108], [0.6, zS + 0.07], [0.52, zS - 0.05], [0.56, zS - 0.19], [0.75, zS - 0.27], [1.4, zS - 0.32], [2.3, zS - 0.33]])
    kk = resample(np.concatenate([keys, np.zeros((len(keys), 1))], 1), 40); pts, nn = on_torso(sgn * kk[:, 0], kk[:, 1], 0.009)
    box_tube(pack, pts, 0.021 * (1 - 0.35 * sstep(26, 34, np.arange(40))), 0.005, 8, nn, 'Pack', spine_w(pts.repeat(8, 0)), name='strap')
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
         'Mask': (0.01, 0.9), 'Pack': (0.03, 0.5), 'Can': (0.6, 0.3), 'Cap': (0.85, 0.5), 'Reflect': (0.8, 0.3), 'Detail': (0.012, 0.45)}
BM = {n: mat(n, (LOOKS[n][0],) * 3, LOOKS[n][1]) for n in MATS}
# the atlas goes out inside the .glb as each material's base colour texture, on the second UV set
ATLAS_IMG = bpy.data.images.new('writer-atlas', ATLAS, ATLAS); _px = np.ones((ATLAS * ATLAS, 4), np.float32); _px[:, :3] = IMG.ravel()[:, None]; ATLAS_IMG.pixels.foreach_set(_px.ravel())
ATLAS_IMG.filepath_raw = os.path.join(bpy.app.tempdir, 'writer-atlas.jpg'); ATLAS_IMG.file_format = 'JPEG'; bpy.context.scene.render.image_settings.quality = 88; ATLAS_IMG.save()
ATLAS_IMG = bpy.data.images.load(ATLAS_IMG.filepath_raw); ATLAS_IMG.pack()
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
_gr = gl_frame(HN * FLIP, HT * FLIP, HF * FLIP, GRIP['at'] * FLIP + np.array([2 * CX, 0, 0]))
print('WRITER grip handedness', round(float(np.linalg.det(np.array(_gr).reshape(4, 4).T[:3, :3])), 3))
arm['vx'] = json.dumps({'scale': K, 'grip': _gr, 'rest': {FULL[b]: [round(float(x), 6) for x in G2B.T @ REST[b] / K] for b in sorted(TIDIED | {'LeftToeBase', 'RightToeBase'})}, 'bind': {FULL[b]: to_gl(*BIND[b]) for b in BONES}})
bpy.ops.object.select_all(action='DESELECT')
for o in OBJS + [arm]: o.select_set(True)
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', use_selection=True, export_animations=False, export_skins=True, export_yup=True,
                          export_materials='EXPORT', export_apply=False, export_extras=True, export_image_format='JPEG', export_image_quality=85)
tris = sum(len(p.vertices) - 2 for o in OBJS for p in o.data.polygons)
print(f'WRITER OK {OUT} meshes={len(OBJS)} tris={tris} verts={sum(len(o.data.vertices) for o in OBJS)} size={os.path.getsize(OUT) / 1e6:.2f}MB')

# ───────────────────────────── pictures, to judge it by ─────────────────────────────
if RENDER:
    os.makedirs(RENDER, exist_ok=True)
    for n in MATS:
        if n != 'Void': with_atlas(BM[n], True)
    ATLAS_IMG.save_render(os.path.join(RENDER, TAG + '-atlas.jpg'))
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
    for name, ang in (('front', 0), ('side', 90), ('back', 180), ('three-quarter', 35), ('back-quarter', 145)): shoot(name, ang)
    shoot('hood', 25, (CX, -0.06, zN + 0.12), 1.6, 70, (640, 640), 5); shoot('hood-back', 160, (CX, -0.0, zN + 0.05), 1.9, 70, (640, 640), 10)
    shoot('hand', 115, tuple(J['LeftHand'] + np.array([0, 0, -0.06])), 0.6, 70, (640, 640), 10); shoot('hand-palm', -60, tuple(J['LeftHand'] + np.array([0, 0, -0.06])), 0.6, 70, (640, 640), 0); shoot('shoes', 40, (CX, -0.05, 0.1), 1.5, 70, (760, 520), 18)
    for clip, t in (('Idle_Loop', 0.0), ('Jog_Fwd_Loop', 0.2), ('Jog_Fwd_Loop', 0.55), ('Sprint_Loop', 0.15), ('Sprint_Loop', 0.45), ('Crouch_Idle_Loop', 0.0), ('Crouch_Fwd_Loop', 0.6), ('Jump_Loop', 0.3), ('Walk_Loop', 0.4), ('Spell_Simple_Idle_Loop', 0.5)):
        Pz = pose(CLIPS[clip], t); set_pose(Pz); hz = Pz['Spine1'][1][2]; nm = clip.replace('_Loop', '').replace('_', '') + str(int(t * 100))
        print('WRITER pose', nm, 'lowest point %.3f m' % min(m_.low for m_ in MESHES.values()))
        shoot('pose-' + nm + '-a', 150, (CX, 0, hz - 0.15), 5.0, 70, (620, 760), 8); shoot('pose-' + nm + '-b', 80, (CX, 0, hz - 0.15), 5.0, 70, (620, 760), 4)
    set_pose(None)
