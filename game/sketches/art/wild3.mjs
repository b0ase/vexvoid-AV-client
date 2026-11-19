// WILDSTYLE letters, pass 3 (our own): the straight skeletons taken apart into PARTS at their own depths, then put
// back together interlocked. Rules (see the graffiti skill): one bar weight everywhere (W, arms WH); every sliced end at
// the one cutting angle; every arrow the one arrow shape (AR), grown out of a terminal or a connection and pointing
// with the word's sweep (up and out at the top, out to the right at the middle, down and out at the bottom); a couple
// of bits broken off; calm open areas left between the knots. Cap height 1, y up; z: depth within the letter.
import { W as W0, WH as WH0, AR, part, inset } from './alpha.mjs'
// wildstyle bars run heavier than the straights: the letters pack into one dense knot
const W = W0 * 1.16, WH = WH0 * 1.16
import { bar, curveBar, clipHalf, unit } from './skel.mjs'

const S = (d) => ({ cut: d })              // a slice along d
const TOP = S([1, 0.3]), BOT = S([1, 0.3]), SIDE = S([0.42, 1])
const A = (o = {}) => ({ arrow: { ...AR, ...o } })
const P = (polys, z = 0, o = {}) => part(polys, { z, ...o })
// a bit: a small sliced parallelogram, broken off the structure along `dir`
const bit = (c, dir, l, w) => { const u = unit(dir), n = [-u[1] * w / 2, u[0] * w / 2], a = [c[0] - u[0] * l / 2, c[1] - u[1] * l / 2], b = [c[0] + u[0] * l / 2, c[1] + u[1] * l / 2]; return [[a[0] + n[0] + u[0] * w * 0.4, a[1] + n[1] + u[1] * w * 0.4], [b[0] + n[0], b[1] + n[1]], [b[0] - n[0] - u[0] * w * 0.4, b[1] - n[1] - u[1] * w * 0.4], [a[0] - n[0], a[1] - n[1]]] }
const notch = (p, d, l, w) => { const u = unit(d), n = [-u[1] * w / 2, u[0] * w / 2]; return [[p[0] + n[0], p[1] + n[1]], [p[0] + u[0] * l, p[1] + u[1] * l], [p[0] - n[0], p[1] - n[1]]] }

export const WILD = {
  // V: the left arm a heavy blade to a point below; the right arm laid over it, grown into the first arrow; a flag
  // swept back off the top; a barb into the notch
  V: () => ({ w: 0.86, parts: [
    P(curveBar([[0.14, 0.84], [0.0, 1.04], [-0.26, 1.16]], [W * 0.82, W * 0.6, 0.02], { b: { point: 0.06 } }), -1),
    P(bar([[0.14, 1.02], [0.44, 0.02]], W * 1.08, { a: TOP, b: { point: 0.16 } }), 0, { cuts: [notch([0.0, 0.58], [1, -0.3], 0.16, 0.05)] }),
    P(bar([[0.4, 0.1], [0.8, 1.08]], W * 0.92, { a: { point: 0.1 }, b: A({ len: 0.36, wide: 0.6 }) }), 1),
    P(bar([[0.3, 0.56], [0.52, 0.6]], W * 0.55, { b: { point: 0.14 } }), 0.5),
  ] }),
  // E: a leaning stem; the top arm swept up into a long blade; the middle arm a short arrow; the bottom arm runs on
  // under the X as the connection and kicks down
  E: () => ({ w: 0.62, parts: [
    P(bar([[0.02, -0.02], [0.08, 1.02]], W, { a: BOT, b: TOP }), 0),
    P(curveBar([[0.04, 1 - WH / 2], [0.46, 0.98], [0.8, 1.12], [1.02, 1.36]], [WH, WH, WH * 0.7, 0.02], { b: { point: 0.06 } }), 1),
    P(bar([[0.06, 0.52], [0.32, 0.54]], WH * 0.95, { b: A({ len: 0.28, wide: 0.48 }) }), 1),
    P(bar([[0.02, WH / 2], [0.7, WH / 2], [1.16, -0.02], [1.32, -0.16]], WH, { b: S([1, 0.2]) }), -12),
  ] }),
  // X: the heavy bar falls left to right and kicks on; the light one crosses over it and grows into an arrow up and out
  X: () => ({ w: 0.82, parts: [
    P(bar([[0.02, 1.02], [0.8, -0.04], [0.98, -0.14]], W * 1.04, { a: TOP, b: S([1, 0.2]) }), 0, { cuts: [notch([0.68, 0.32], [-1, 0.3], 0.14, 0.05)] }),
    P(curveBar([[0.06, -0.04], [0.5, 0.42], [0.62, 0.86], [0.86, 1.12]], W * 0.88, { a: BOT, b: A({ len: 0.36, wide: 0.6 }) }), 1),
  ] }),
  // the second V: the right arm the heavy one, laid over; a bit broken off the left arm's top
  V2: () => ({ w: 0.82, parts: [
    P(bar([[0.08, 0.92], [0.4, 0.04]], W * 0.86, { a: TOP, b: { point: 0.12 } }), 0),
    P([bit([0.0, 1.08], [-0.34, 1], 0.14, W * 0.8)], 0.5, { kind: 'bit' }),
    P(bar([[0.36, 0.0], [0.76, 1.02]], W * 1.08, { a: BOT, b: TOP }), 1, { cuts: [notch([0.82, 0.56], [-1, -0.3], 0.16, 0.05)] }),
  ] }),
  // O: a cut ring, split at the top left, its lower right corner run out as a short kick
  O: () => { const o = [[0.2, 0], [0.62, 0], [0.76, 0.14], [0.76, 0.8], [0.56, 1], [0.12, 1], [0, 0.88], [0, 0.2]]; return { w: 0.76, parts: [
    P([o], 0, { cuts: [inset(o, W), notch([-0.04, 0.68], [1, -0.4], 0.3, 0.05)] }),
    P(bar([[0.6, 0.86], [0.7, 1.14]], W * 0.8, { b: S([1, 0.15]) }), -0.5),
    P(curveBar([[0.24, 0.08], [0.02, -0.06], [-0.3, -0.12]], [W * 0.75, W * 0.55, 0.02], { b: { point: 0.06 } }), -12),
  ] } },
  // I: a stem, its top broken off as a bit; a blade swept back off its foot (under the O)
  I: () => ({ w: W * 1.1, parts: [
    P(bar([[0.12, -0.02], [0.14, 0.78]], W * 1.06, { a: BOT, b: TOP }), 0),
    P([bit([0.18, 0.98], [0.3, 1], 0.17, W * 1.06)], 0.5, { kind: 'bit' }),
    P(curveBar([[0.1, 0.12], [-0.14, -0.02], [-0.46, -0.14]], [W * 0.7, W * 0.5, 0.02], { b: { point: 0.06 } }), -12),
  ] }),
  // D: the stem and bowl as one cut shape; the bowl's point grown into the closing arrow, the biggest one
  D: () => { const o = [[0, 0], [0.48, 0], [0.8, 0.34], [0.8, 0.66], [0.5, 1], [0, 1]]; return { w: 0.82, parts: [
    P([o], 0, { cuts: [inset(o, W), notch([-0.04, 0.3], [1, -0.3], 0.16, 0.05)] }),
    P(bar([[0.62, 0.5], [1.0, 0.5]], WH, { b: A({ len: 0.44, wide: 0.68 }) }), 1),
    P(curveBar([[0.5, 0.1], [0.82, 0.02], [1.12, -0.2]], [W * 0.8, W * 0.6, 0.02], { b: { point: 0.06 } }), -1),
  ] } },
  3: () => ({ w: 0.76, parts: [
    P(bar([[0.0, 1 - W / 2], [0.54, 1 - W / 2], [0.7, 0.86]], WH, { a: SIDE }), 1),
    P(bar([[0.62, 0.92], [0.62, 0.62], [0.3, 0.5]], W, { b: SIDE }), 0),
    P(bar([[0.3, 0.52], [0.6, 0.44], [0.64, 0.14], [0.46, W / 2], [-0.04, W / 2], [-0.24, 0.12]], W, { b: { point: 0.1 } }), 2),
    P(bar([[0.5, 0.56], [0.92, 0.6]], WH, { b: A({ len: 0.3, wide: 0.5 }) }), 3),
  ] }),
}
