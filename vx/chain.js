/* V3XV0ID on-chain formats (1Sat Ordinals inscriptions on BSV) and reading them back through ORDFS.
 *
 *   sketch  application/vnd.v3xv0id.sketch+json   { v, type:'v3x-sketch', name, code, knobs, params, seed, p5 }
 *   set     application/vnd.v3xv0id.set+json      { v, type:'v3x-set', title, bpm, steps:[{bar,cmd,args}], assets:{id: asset} }
 *           asset = { kind:'sketch', name, code, knobs }            (inline, so a set always replays)
 *                 | { kind:'sketch', origin:'<txid>_<vout>' }       (a minted sketch)
 *                 | { kind:'clip'|'image', name, url | origin }     (catalogue URL or an inscribed file)
 *           steps that use an asset say so with args.asset = '<id>' instead of a name, path or code.
 *
 * Everything here is pure data; minting (paying for and writing the inscription) goes through bWalletX.
 */
(function (root) {
  'use strict';
  var ORDFS = 'https://ordfs.network/';
  var TYPES = { sketch: 'application/vnd.v3xv0id.sketch+json', set: 'application/vnd.v3xv0id.set+json' };
  var ORIGIN_RE = /^[0-9a-f]{64}_\d+$/;

  function isOrigin(s) { return ORIGIN_RE.test(String(s || '')); }
  function ordUrl(origin) { if (!isOrigin(origin)) throw new Error('not an inscription id: ' + origin); return ORDFS + origin; }

  async function fetchOrd(origin) {
    var res = await fetch(ordUrl(origin));
    if (!res.ok) throw new Error('ORDFS ' + res.status + ' for ' + origin);
    return { contentType: res.headers.get('content-type') || '', res: res };
  }
  async function fetchDoc(origin) {
    var r = await fetchOrd(origin);
    var doc = await r.res.json();
    if (!doc || (doc.type !== 'v3x-sketch' && doc.type !== 'v3x-set')) throw new Error('that inscription is not a V3XV0ID sketch or set');
    return doc;
  }

  function sketchDoc(s) {
    return { v: 1, type: 'v3x-sketch', name: String(s.name || 'UNTITLED').replace(/ \*$/, ''), code: s.code, knobs: s.knobs || ['A', 'B', 'C', 'D'],
      params: s.params || { a: 0.5, b: 0.5, c: 0.5, d: 0.5 }, seed: s.seed, p5: '1.11.3', by: 'V3XV0ID AV Client', created: new Date().toISOString() };
  }

  /** Turn a composer set into a self-contained set doc. lookup(name) -> library sketch or null. */
  function setDoc(opts) {
    var assets = {}, n = 0;
    function addAsset(a) {
      var key = JSON.stringify(a);
      for (var id in assets) if (JSON.stringify(assets[id]) === key) return id;
      var nid = 'a' + (++n); assets[nid] = a; return nid;
    }
    var steps = opts.steps.map(function (st) {
      var args = Object.assign({}, st.args || {});
      if (st.cmd === 'sketch' && args.name && !args.code && !args.asset) {
        var lib = opts.lookup(args.name);
        if (lib) { args.asset = addAsset({ kind: 'sketch', name: lib.name, code: lib.code, knobs: lib.knobs }); delete args.name; }
      } else if (st.cmd === 'sketch' && args.code) {
        args.asset = addAsset({ kind: 'sketch', name: args.name || 'SKETCH', code: args.code, knobs: args.knobs }); delete args.code; delete args.name; delete args.knobs;
      } else if (st.cmd === 'load' && (args.clip || args.image)) {
        var m = opts.media(args.clip ? 'clip' : 'image', args.clip || args.image);
        if (m) { args.asset = addAsset(m); delete args.clip; delete args.image; }
      }
      return { bar: st.bar, cmd: st.cmd, args: args };
    });
    return { v: 1, type: 'v3x-set', title: opts.title || 'UNTITLED SET', bpm: opts.bpm, bars: Math.ceil(steps.reduce(function (m, s) { return Math.max(m, s.bar + ((s.args && s.args.over) || 0)); }, 1)),
      steps: steps, assets: assets, by: 'V3XV0ID AV Client', created: new Date().toISOString() };
  }

  /** Resolve every on-chain asset in a set doc so it can play: minted sketches are fetched and inlined. */
  async function resolveSet(doc) {
    var out = Object.assign({}, doc, { assets: {} });
    for (var id in doc.assets || {}) {
      var a = doc.assets[id];
      if (a.kind === 'sketch' && a.origin && !a.code) {
        var s = await fetchDoc(a.origin);
        out.assets[id] = { kind: 'sketch', name: s.name, code: s.code, knobs: s.knobs, origin: a.origin };
      } else if ((a.kind === 'clip' || a.kind === 'image') && a.origin && !a.url) {
        out.assets[id] = Object.assign({}, a, { url: ordUrl(a.origin) });
      } else out.assets[id] = a;
    }
    return out;
  }

  function bytes(doc) { return new TextEncoder().encode(JSON.stringify(doc)).length; }

  root.VXCHAIN = { ORDFS: ORDFS, TYPES: TYPES, isOrigin: isOrigin, ordUrl: ordUrl, fetchOrd: fetchOrd, fetchDoc: fetchDoc, sketchDoc: sketchDoc, setDoc: setDoc, resolveSet: resolveSet, bytes: bytes };
})(typeof window !== 'undefined' ? window : this);
