"""The VexVoid writer, built in Blender (headless) around the skeleton the game animates.

  Blender -b --factory-startup --python game/blender/writer.py -- vx/game/anims/ual.glb vx/game/models/writer.glb

Reads the joint positions from the animation library (the Quaternius UAL clips, CC0), builds a hooded writer around them
and rigs it to bones of the same names, so the game plays every clip on it:
  body      a Skin-modifier armature of the figure (smooth, organic, one manifold mesh), subdivided, cloth noise on top;
            the hoodie down to the hips, trousers below, gloved hands
  hood      a shell over the head, open at the front, thick edge, a peak at the back, drawstrings; black inside (no faces)
  details   rib cuffs and hem, a kangaroo pocket, gloved hands with fingers, trousers stacking over the trainers and
            sleeves bunching above the cuffs, a bandana under the hood's brim, trainers with laces and a padded collar,
            a backpack with straps and three spray cans out of the top
  rig       automatic (heat) weights on the body; the hood, strings and shoes are held by their bone
Materials are named for the game (Hoodie, Trousers, Gloves, Shoes, Sole, Void, Trim, Mask, Pack, Can, Cap), which swaps in its own.
Improve the character here: change a radius, a shape, a detail, rerun, rebuild the game.
"""
import bpy, bmesh, sys, math
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
SRC = argv[0] if argv else 'vx/game/anims/ual.glb'
OUT = argv[1] if len(argv) > 1 else 'vx/game/models/writer.glb'
RENDER = argv[2] if len(argv) > 2 else ''   # a folder: also render front, side and back views there, to judge the model
SHRINK = 1.42   # the Skin modifier's subdivided hull comes out about 30% inside its radii; radii below are the final sizes

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=SRC)

# joint positions (Blender is Z up; the figure faces -Y)
def key(n): return n.split(':')[-1].replace('mixamorig', '')
J = {}
for o in bpy.data.objects:
    if 'mixamorig' in o.name: J[key(o.name)] = o.matrix_world.translation.copy()
NAMES = {key(o.name): o.name for o in bpy.data.objects if 'mixamorig' in o.name}
PARENT = {key(o.name): (key(o.parent.name) if o.parent and 'mixamorig' in o.parent.name else None) for o in bpy.data.objects if 'mixamorig' in o.name}
foot = min(J['LeftToeBase'].z, J['RightToeBase'].z)
Hs = (J['Head'].z - foot) / 0.89          # standing height in skeleton units
def m(x): return x / 1.78 * Hs            # metres to skeleton units
for o in list(bpy.data.objects): bpy.data.objects.remove(o, do_unlink=True)

def mat(name, rgb, rough=0.85, emit=0.0):
    M = bpy.data.materials.new(name); M.use_nodes = True
    b = M.node_tree.nodes.get('Principled BSDF')
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    return M
MATS = {n: mat(n, c, r) for n, c, r in [('Hoodie', (0.06, 0.06, 0.07), 0.9), ('Trousers', (0.1, 0.1, 0.11), 0.85), ('Gloves', (0.15, 0.15, 0.16), 0.7),
        ('Shoes', (0.9, 0.9, 0.9), 0.45), ('Sole', (0.35, 0.35, 0.36), 0.6), ('Void', (0, 0, 0), 1.0), ('Trim', (0.04, 0.04, 0.045), 0.9),
        ('Mask', (0.03, 0.03, 0.035), 0.95), ('Pack', (0.05, 0.05, 0.055), 0.55), ('Can', (0.7, 0.7, 0.72), 0.3), ('Cap', (0.92, 0.92, 0.92), 0.5)]}

def obj_from(bm, name):
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); bpy.context.collection.objects.link(o); return o
def apply_all(o):
    bpy.context.view_layer.objects.active = o
    for md in list(o.modifiers): bpy.ops.object.modifier_apply(modifier=md.name)
def smooth(o):
    for p in o.data.polygons: p.use_smooth = True
def add_mat(o, *names):
    for n in names: o.data.materials.append(MATS[n])

# ---- body: a Skin modifier over the figure's joints ----
up = Vector((0, 0, 1)); fwd = Vector((0, -1, 0))
pts, rad, edges = [], [], []
def P(name, at, r):
    pts.append(at.copy()); rad.append(r); return len(pts) - 1
hips = P('Hips', J['Hips'] + Vector((0, 0, -m(0.06))), (m(0.175), m(0.13)))
chain = [hips]
for n, r in [('Spine', (m(0.165), m(0.12))), ('Spine1', (m(0.17), m(0.125))), ('Spine2', (m(0.215), m(0.135))), ('Neck', (m(0.075), m(0.075)))]:
    chain.append(P(n, J[n], r))
head = P('Head', J['Head'] + up * m(0.06), (m(0.095), m(0.105)))
top = P('HeadTop', J['Head'] + up * m(0.17), (m(0.06), m(0.065)))
chain += [head, top]
edges += list(zip(chain[:-1], chain[1:]))
for s in ('Left', 'Right'):
    a = chain[3]
    for n, r in [('Shoulder', m(0.078)), ('Arm', m(0.066)), ('ForeArm', m(0.057)), ('Hand', m(0.042))]:
        b = P(s + n, J[s + n], (r, r)); edges.append((a, b)); a = b
    d = (J[s + 'Hand'] - J[s + 'ForeArm']).normalized()
    # the palm faces the body, so the fingers fan out front to back and the thumb points forward
    side = fwd - d * fwd.dot(d); side.normalize()
    palm = P(s + 'Palm', J[s + 'Hand'] + d * m(0.065), (m(0.038), m(0.03))); edges.append((a, palm))
    for k, off in enumerate((-1.5, -0.5, 0.5, 1.5)):
        base = J[s + 'Hand'] + d * m(0.09) + side * (off * m(0.019))
        f1 = P(s + f'F{k}a', base, (m(0.0105), m(0.0105))); edges.append((palm, f1))
        f2 = P(s + f'F{k}b', base + d * m(0.06 - abs(off) * 0.008) - side * m(0.004) * off, (m(0.009), m(0.009))); edges.append((f1, f2))
    t1 = P(s + 'Th1', J[s + 'Hand'] + d * m(0.035) + side * m(0.035), (m(0.013), m(0.013))); edges.append((a, t1))
    t2 = P(s + 'Th2', J[s + 'Hand'] + d * m(0.07) + side * m(0.06), (m(0.0105), m(0.0105))); edges.append((t1, t2))
    a = hips
    for n, r in [('UpLeg', m(0.09)), ('Leg', m(0.07)), ('Foot', m(0.042))]:
        b = P(s + n, J[s + n], (r, r)); edges.append((a, b)); a = b
    b = P(s + 'ToeBase', J[s + 'ToeBase'] + up * m(0.035), (m(0.028), m(0.022))); edges.append((a, b))  # kept inside the trainer
me = bpy.data.meshes.new('body'); me.from_pydata([tuple(p) for p in pts], edges, [])
body = bpy.data.objects.new('SM_Char_Writer_Body', me); bpy.context.collection.objects.link(body)
sk = body.modifiers.new('skin', 'SKIN'); sk.branch_smoothing = 0.6; sk.use_smooth_shade = True
for i, r in enumerate(rad): me.skin_vertices[0].data[i].radius = (r[0] * SHRINK, r[1] * SHRINK)
me.skin_vertices[0].data[hips].use_root = True
sub = body.modifiers.new('sub', 'SUBSURF'); sub.levels = 2; sub.render_levels = 2
# cloth: soft noise, so the cotton isn't a perfect surface
tx = bpy.data.textures.new('cloth', 'CLOUDS'); tx.noise_scale = m(0.06); tx.noise_depth = 2
dp = body.modifiers.new('cloth', 'DISPLACE'); dp.texture = tx; dp.strength = m(0.006); dp.mid_level = 0.5
apply_all(body); smooth(body)
add_mat(body, 'Hoodie', 'Trousers', 'Gloves')
hem = J['Hips'].z - m(0.09)
for p in body.data.polygons:
    c = p.center
    near_hand = min((c - J['LeftHand']).length, (c - J['RightHand']).length) < m(0.135) and c.z < J['Spine2'].z - m(0.1)
    p.material_index = 2 if near_hand else (0 if c.z > hem else 1)

parts = []
# ---- rib bands and the pocket, fitted onto the body (shrinkwrap), so they sit on it instead of floating ----
def fit(o, offset):
    sw = o.modifiers.new('fit', 'SHRINKWRAP'); sw.target = body; sw.wrap_method = 'NEAREST_SURFACEPOINT'; sw.offset = offset
    return o
def band(center, normal, r, depth, name, bone, squash=1.0):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=False, segments=40, radius1=r, radius2=r, depth=depth)
    for v in bm.verts: v.co.y *= squash
    bmesh.ops.subdivide_edges(bm, edges=[e for e in bm.edges if abs(e.verts[0].co.z - e.verts[1].co.z) > 1e-6], cuts=3)
    rot = Vector((0, 0, 1)).rotation_difference(normal).to_matrix().to_4x4()
    bmesh.ops.transform(bm, matrix=Matrix.Translation(center) @ rot, verts=bm.verts)
    o = fit(obj_from(bm, name), m(0.007)); sol = o.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = m(0.01); sol.offset = 1
    s2 = o.modifiers.new('sub', 'SUBSURF'); s2.levels = 1; apply_all(o); smooth(o); add_mat(o, 'Trim'); parts.append((o, bone)); return o
band(Vector((J['Hips'].x, J['Hips'].y, hem + m(0.03))), up, m(0.2), m(0.055), 'SM_Char_Writer_Hem', 'Hips', 0.75)
for s in ('Left', 'Right'):
    d = (J[s + 'Hand'] - J[s + 'ForeArm']).normalized()
    band(J[s + 'Hand'] - d * m(0.04), d, m(0.06), m(0.05), 'SM_Char_Writer_Cuff' + s, s + 'ForeArm')
# the kangaroo pocket: a panel laid onto the belly, its top edge open
bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=16, y_segments=10, size=0.5)
bmesh.ops.scale(bm, vec=(m(0.3), m(0.15), 1), verts=bm.verts)
bmesh.ops.rotate(bm, verts=bm.verts, cent=Vector(), matrix=Matrix.Rotation(math.radians(90), 3, 'X'))
bmesh.ops.translate(bm, vec=(J['Spine'] + J['Spine1']) / 2 + Vector((0, -m(0.3), -m(0.02))), verts=bm.verts)
pk = fit(obj_from(bm, 'SM_Char_Writer_Pocket'), m(0.006))
sol = pk.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = m(0.01); sol.offset = 1
s3 = pk.modifiers.new('sub', 'SUBSURF'); s3.levels = 1; apply_all(pk); smooth(pk); add_mat(pk, 'Hoodie'); parts.append((pk, 'Spine'))

# ---- the hood: a shell over the head, open at the front, a peak at the back, resting on the shoulders ----
hc = J['Head'] + up * m(0.085) + Vector((0, m(0.018), 0))
bm = bmesh.new(); bmesh.ops.create_uvsphere(bm, u_segments=40, v_segments=28, radius=1.0)
for v in bm.verts:
    x, y, z = v.co
    sx, sy, sz = m(0.138), m(0.158), m(0.15)
    if y > 0.15 and z > 0.1: z += 0.22 * (y - 0.15) * (z - 0.1) * 4; y += 0.08 * (z - 0.1)   # the peak, up and back
    if y < -0.1 and z > 0.15: y -= 0.22 * z * (-y - 0.1); z -= 0.05 * (-y)                     # the brim overhangs the face
    if z < -0.2: z -= (0.55 if y > 0 else 0.2) * (-z - 0.2)                                  # falls onto the upper back
    if z < -0.35: sx *= 1.3; sy *= 1.2                                                       # flares onto the shoulders
    v.co = Vector((x * sx, y * sy, z * sz))
# the opening: everything facing forward and around the face goes
gone = [f for f in bm.faces if f.calc_center_median().y < -m(0.055) and -m(0.13) < f.calc_center_median().z < m(0.105)]
bmesh.ops.delete(bm, geom=gone, context='FACES')
bmesh.ops.translate(bm, vec=hc, verts=bm.verts)
hood = obj_from(bm, 'SM_Char_Writer_Hood')
sol = hood.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = m(0.016); sol.offset = 1
s4 = hood.modifiers.new('sub', 'SUBSURF'); s4.levels = 2
dp2 = hood.modifiers.new('cloth', 'DISPLACE'); dp2.texture = tx; dp2.strength = m(0.005)
apply_all(hood); smooth(hood); add_mat(hood, 'Hoodie'); parts.append((hood, 'Head'))
# darkness inside the hood
bm = bmesh.new(); bmesh.ops.create_uvsphere(bm, u_segments=24, v_segments=16, radius=1.0)
bmesh.ops.scale(bm, vec=(m(0.1), m(0.11), m(0.115)), verts=bm.verts)
bmesh.ops.translate(bm, vec=hc + Vector((0, m(0.005), -m(0.01))), verts=bm.verts)
void = obj_from(bm, 'SM_Char_Writer_Void'); smooth(void); add_mat(void, 'Void'); parts.append((void, 'Head'))
# drawstrings, from the hood opening down the chest
for s in (-1, 1):
    a = hc + Vector((s * m(0.045), -m(0.12), -m(0.12))); b = a + Vector((s * m(0.008), -m(0.03), -m(0.17)))
    bm = bmesh.new(); bmesh.ops.create_cone(bm, cap_ends=True, segments=8, radius1=m(0.006), radius2=m(0.006), depth=(b - a).length)
    rot = Vector((0, 0, 1)).rotation_difference((b - a).normalized()).to_matrix().to_4x4()
    bmesh.ops.transform(bm, matrix=Matrix.Translation((a + b) / 2) @ rot, verts=bm.verts)
    st = obj_from(bm, 'SM_Char_Writer_String'); smooth(st); add_mat(st, 'Trim'); parts.append((st, 'Spine2'))

# a bandana over the lower face, a point at the chin
bm = bmesh.new(); bmesh.ops.create_uvsphere(bm, u_segments=28, v_segments=18, radius=1.0)
bmesh.ops.delete(bm, geom=[v for v in bm.verts if not (v.co.y < -0.25 and v.co.z < 0.08)], context='VERTS')
for v in bm.verts:
    if v.co.z < -0.3: v.co.z -= 0.35 * (1 - min(1.0, abs(v.co.x) * 2.2)) * (-v.co.z - 0.3) * 2
    v.co = Vector((v.co.x * m(0.108), v.co.y * m(0.122), v.co.z * m(0.12)))
bmesh.ops.translate(bm, vec=hc + Vector((0, -m(0.004), -m(0.02))), verts=bm.verts)
mk = obj_from(bm, 'SM_Char_Writer_Mask'); sol = mk.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = m(0.006)
s6 = mk.modifiers.new('sub', 'SUBSURF'); s6.levels = 1; apply_all(mk); smooth(mk); add_mat(mk, 'Mask'); parts.append((mk, 'Head'))

# baggy fit: trousers stack over the trainers, sleeves bunch above the cuffs
def fold(center, normal, r, name, bone, material, depth=0.045, puff=0.014):
    # a soft roll of cloth: a short sleeve fitted to the body, fattest in its middle
    bm = bmesh.new(); bmesh.ops.create_cone(bm, cap_ends=False, segments=32, radius1=r, radius2=r, depth=m(depth))
    bmesh.ops.subdivide_edges(bm, edges=[e for e in bm.edges if abs(e.verts[0].co.z - e.verts[1].co.z) > 1e-6], cuts=4)
    rot = Vector((0, 0, 1)).rotation_difference(normal).to_matrix().to_4x4()
    bmesh.ops.transform(bm, matrix=Matrix.Translation(center) @ rot, verts=bm.verts)
    o = obj_from(bm, name)
    sw = o.modifiers.new('fit', 'SHRINKWRAP'); sw.target = body; sw.wrap_method = 'NEAREST_SURFACEPOINT'; sw.offset = m(0.002)
    apply_all(o)
    # push each ring out by a bump across its height, so it rolls instead of standing proud like a hoop
    me2 = o.data; zs = [normal.dot(v.co - center) for v in me2.vertices]; lo, hi = min(zs), max(zs)
    for v, z in zip(me2.vertices, zs):
        k = math.sin(math.pi * (z - lo) / max(1e-9, hi - lo)); out = (v.co - center); out -= normal * normal.dot(out)
        if out.length > 1e-9: v.co += out.normalized() * m(puff) * k
    sol = o.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = m(0.006); sol.offset = -1
    s7 = o.modifiers.new('sub', 'SUBSURF'); s7.levels = 1; apply_all(o); smooth(o); add_mat(o, material); parts.append((o, bone))
for s in ('Left', 'Right'):
    lg = (J[s + 'Foot'] - J[s + 'Leg']).normalized()
    for k, h in enumerate((0.085, 0.15)):
        tilt = (lg + Vector((0.14 * (1 if k else -1), 0.12 * (1 if k else -1), 0))).normalized()
        fold(J[s + 'Foot'] - lg * m(h), tilt, m(0.08), f'SM_Char_Writer_Stack{s}{k}', s + 'Leg', 'Trousers', 0.05, 0.016)
    d = (J[s + 'Hand'] - J[s + 'ForeArm']).normalized()
    fold(J[s + 'Hand'] - d * m(0.12), (d + Vector((0.12, 0.1, 0))).normalized(), m(0.066), f'SM_Char_Writer_Bunch{s}', s + 'ForeArm', 'Hoodie', 0.05, 0.012)

# the writer's backpack: a rounded pack on the back, straps over the shoulders, cans out of the top
back = Vector((0, 1, 0))
pcen = (J['Spine1'] + J['Spine2']) / 2 + back * m(0.2) + up * m(0.0)
bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0)
bmesh.ops.scale(bm, vec=(m(0.3), m(0.13), m(0.4)), verts=bm.verts)
for v in bm.verts:
    if v.co.y > 0: v.co.x *= 0.9; v.co.z *= 0.93      # the outer face a little smaller: a soft, full pack
bmesh.ops.translate(bm, vec=pcen, verts=bm.verts)
pk2 = obj_from(bm, 'SM_Char_Writer_Pack'); bv = pk2.modifiers.new('bev', 'BEVEL'); bv.width = m(0.05); bv.segments = 4
s8 = pk2.modifiers.new('sub', 'SUBSURF'); s8.levels = 2; apply_all(pk2); smooth(pk2); add_mat(pk2, 'Pack'); parts.append((pk2, 'Spine2'))
# a front pocket on the pack
bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0); bmesh.ops.scale(bm, vec=(m(0.22), m(0.05), m(0.16)), verts=bm.verts)
bmesh.ops.translate(bm, vec=pcen + back * m(0.08) - up * m(0.08), verts=bm.verts)
pp = obj_from(bm, 'SM_Char_Writer_PackPocket'); bv = pp.modifiers.new('bev', 'BEVEL'); bv.width = m(0.02); bv.segments = 3
s9 = pp.modifiers.new('sub', 'SUBSURF'); s9.levels = 1; apply_all(pp); smooth(pp); add_mat(pp, 'Pack'); parts.append((pp, 'Spine2'))
# straps: over each shoulder from the top of the pack, down the chest, back under the arm
for sx in (-1, 1):
    sh = J['LeftArm' if sx > 0 else 'RightArm']
    # a flat strap from the top of the pack, over the shoulder, down the chest to under the arm
    pts3 = [pcen + Vector((sx * m(0.08), -m(0.06), m(0.18))), Vector((sx * m(0.1), J['Spine2'].y + m(0.05), sh.z + m(0.055))),
            Vector((sx * m(0.11), J['Spine2'].y - m(0.12), sh.z - m(0.03))), Vector((sx * m(0.13), J['Spine2'].y - m(0.13), J['Spine2'].z - m(0.12))),
            Vector((sx * m(0.17), J['Spine1'].y - m(0.06), J['Spine1'].z))]
    cu = bpy.data.curves.new('strap', 'CURVE'); cu.dimensions = '3D'; cu.extrude = m(0.022); cu.bevel_depth = m(0.004); cu.bevel_resolution = 1; cu.resolution_u = 10
    cu.twist_mode = 'MINIMUM'
    sp = cu.splines.new('NURBS'); sp.points.add(len(pts3) - 1); sp.use_endpoint_u = True; sp.order_u = 3
    for i2, q in enumerate(pts3): sp.points[i2].co = (q.x, q.y, q.z, 1)
    co = bpy.data.objects.new('strap', cu); bpy.context.collection.objects.link(co)
    bpy.context.view_layer.objects.active = co; co.select_set(True); bpy.ops.object.convert(target='MESH'); co.select_set(False)
    co.scale = (1.0, 1.0, 1.0); co.data.transform(Matrix.Scale(1, 4))
    co = fit(co, m(0.012)); apply_all(co); smooth(co); add_mat(co, 'Pack'); co.name = 'SM_Char_Writer_Strap'; parts.append((co, 'Spine2'))
# three cans out of the top of the pack, caps on
for k, (ox, tl) in enumerate(((-0.08, -12), (0.0, 4), (0.075, 15))):
    base = pcen + Vector((m(ox), m(0.01), m(0.17)))
    rot = Matrix.Rotation(math.radians(tl), 4, 'Y') @ Matrix.Rotation(math.radians(8), 4, 'X')
    for kind, r, h, z0 in (('Can', m(0.034), m(0.17), 0.0), ('Cap', m(0.024), m(0.035), m(0.17))):
        bm = bmesh.new(); bmesh.ops.create_cone(bm, cap_ends=True, segments=20, radius1=r, radius2=r * (0.85 if kind == 'Cap' else 1.0), depth=h)
        bmesh.ops.translate(bm, vec=Vector((0, 0, z0 + h / 2)), verts=bm.verts)
        bmesh.ops.transform(bm, matrix=Matrix.Translation(base) @ rot, verts=bm.verts)
        cn = obj_from(bm, f'SM_Char_Writer_{kind}{k}'); bv = cn.modifiers.new('bev', 'BEVEL'); bv.width = m(0.006); bv.segments = 2
        apply_all(cn); smooth(cn); add_mat(cn, kind); parts.append((cn, 'Spine2'))

# ---- trainers: a chunky white upper on a darker sole, along each foot ----
for s in ('Left', 'Right'):
    f, t = J[s + 'Foot'], J[s + 'ToeBase']
    d = (t - f); d.z = 0; flat = d.length; d.normalize()
    L, W = flat + m(0.17), m(0.115)
    c = Vector(((f.x + t.x) / 2, (f.y + t.y) / 2, foot)) + d * m(0.035)
    yaw = math.atan2(d.x, -d.y)
    ankle = max(m(0.1), f.z - foot + m(0.02))
    for kind, h, z0, wk in [('Shoes', min(ankle - m(0.02), m(0.095)), m(0.03), 1.0), ('Sole', m(0.035), 0.0, 1.07)]:
        bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0)
        bmesh.ops.scale(bm, vec=(W * wk, L * wk, h), verts=bm.verts)
        for v in bm.verts:   # a rounder, narrower toe; the toe box lower than the heel collar
            f2 = -v.co.y / (L * 0.5 * wk)            # 1 at the toe, -1 at the heel
            if f2 > 0: v.co.x *= 1 - 0.18 * f2
            if v.co.z > 0 and kind == 'Shoes': v.co.z -= h * 0.42 * max(0.0, f2 + 0.1)
        bmesh.ops.translate(bm, vec=Vector((0, 0, z0 + h / 2)), verts=bm.verts)
        bmesh.ops.rotate(bm, verts=bm.verts, cent=Vector((0, 0, 0)), matrix=Matrix.Rotation(yaw, 3, 'Z'))  # local -Y (the toe) along the foot
        bmesh.ops.translate(bm, vec=c, verts=bm.verts)
        sh = obj_from(bm, 'SM_Char_Writer_' + kind + s)
        bv = sh.modifiers.new('bev', 'BEVEL'); bv.width = m(0.02 if kind == 'Shoes' else 0.008); bv.segments = 3
        s5 = sh.modifiers.new('sub', 'SUBSURF'); s5.levels = 2
        apply_all(sh); smooth(sh); add_mat(sh, kind); parts.append((sh, s + 'Foot'))
    # laces across the instep, a padded collar round the ankle
    top = c + Vector((0, 0, m(0.03) + min(ankle - m(0.02), m(0.095))))
    for k in range(4):
        q = top + d * m(0.02 + k * 0.03) - Vector((0, 0, m(0.012) + k * m(0.009)))
        bm = bmesh.new(); bmesh.ops.create_cone(bm, cap_ends=True, segments=8, radius1=m(0.005), radius2=m(0.005), depth=m(0.06))
        rt = Matrix.Rotation(math.radians(90), 4, 'Y'); bmesh.ops.transform(bm, matrix=Matrix.Translation(q) @ Matrix.Rotation(yaw, 4, 'Z') @ rt, verts=bm.verts)
        la = obj_from(bm, f'SM_Char_Writer_Lace{s}{k}'); smooth(la); add_mat(la, 'Trim'); parts.append((la, s + 'Foot'))
    bm = bmesh.new(); bmesh.ops.create_cone(bm, cap_ends=False, segments=24, radius1=m(0.058), radius2=m(0.052), depth=m(0.03))
    bmesh.ops.transform(bm, matrix=Matrix.Translation(Vector((f.x, f.y, top.z - m(0.005))) - d * m(0.025)), verts=bm.verts)
    cl = obj_from(bm, f'SM_Char_Writer_Collar{s}'); sol = cl.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = m(0.014)
    s10 = cl.modifiers.new('sub', 'SUBSURF'); s10.levels = 1; apply_all(cl); smooth(cl); add_mat(cl, 'Shoes'); parts.append((cl, s + 'Foot'))

# ---- the rig: bones of the game's names at the same joints ----
arm_d = bpy.data.armatures.new('ARM_Writer'); arm = bpy.data.objects.new('ARM_Writer', arm_d)
bpy.context.collection.objects.link(arm); bpy.context.view_layer.objects.active = arm
bpy.ops.object.mode_set(mode='EDIT')
eb = {}
kids = {k: [c for c, p in PARENT.items() if p == k] for k in J}
for k in J:
    b = arm_d.edit_bones.new(NAMES[k]); b.head = J[k]
    ch = kids[k]
    if ch: b.tail = sum((J[c] for c in ch), Vector()) / len(ch)
    else: b.tail = J[k] + ((J[k] - J[PARENT[k]]).normalized() * m(0.08) if PARENT[k] else up * m(0.1))
    if (b.tail - b.head).length < m(0.01): b.tail = b.head + up * m(0.03)
    eb[k] = b
for k, p in PARENT.items():
    if p: eb[k].parent = eb[p]
bpy.ops.object.mode_set(mode='OBJECT')

# body: automatic heat weights
bpy.ops.object.select_all(action='DESELECT')
body.select_set(True); arm.select_set(True); bpy.context.view_layer.objects.active = arm
bpy.ops.object.parent_set(type='ARMATURE_AUTO')
# everything else rides one bone, all of it
for o, bone in parts:
    o.parent = arm
    md = o.modifiers.new('arm', 'ARMATURE'); md.object = arm
    g = o.vertex_groups.new(name=NAMES[bone]); g.add(list(range(len(o.data.vertices))), 1.0, 'REPLACE')

bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', use_selection=True, export_animations=False, export_skins=True,
                          export_yup=True, export_materials='EXPORT', export_apply=False)
tris = sum(len(o.data.polygons) for o in bpy.data.objects if o.type == 'MESH')
if RENDER:
    import os
    os.makedirs(RENDER, exist_ok=True)
    sc = bpy.context.scene
    sc.render.engine = 'BLENDER_WORKBENCH'; sc.display.shading.light = 'STUDIO'; sc.display.shading.color_type = 'MATERIAL'
    sc.display.shading.show_cavity = True; sc.display.shading.show_shadows = True
    sc.render.resolution_x, sc.render.resolution_y = 520, 860; sc.render.film_transparent = False
    sc.world = bpy.data.worlds.new('w'); sc.world.color = (0.5, 0.5, 0.52)
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); bpy.context.collection.objects.link(cam); sc.camera = cam
    cam.data.type = 'ORTHO'; cam.data.ortho_scale = Hs * 1.2
    mid = Vector((0, 0, foot + Hs * 0.5))
    for name, ang in [('front', 0), ('side', 90), ('back', 180), ('three-quarter', 35)]:
        a = math.radians(ang); d = Vector((math.sin(a), -math.cos(a), 0))
        cam.location = mid + d * Hs * 3; cam.rotation_euler = (math.radians(90), 0, a)
        sc.render.filepath = os.path.join(RENDER, f'writer-{name}.png'); bpy.ops.render.render(write_still=True)
print(f'WRITER OK {OUT} meshes={sum(1 for o in bpy.data.objects if o.type == "MESH")} faces={tris} height_units={Hs:.4f}')
