/* The performer's own media, read from the connected bWalletX: every 1Sat inscription they hold, sorted into what the
 * mixer can use. Video and images go to the VIDEOS / IMAGES tabs, audio to MUSIC, V3XV0ID sketches and sets (and set
 * logs) to COMPOSER's YOUR WALLET list, MIDI files there too.
 *
 * The wallet only says which outputs are held (BRC-100 listOutputs; the wallet may ask the performer to allow it). What
 * each one is comes from ORDFS (/content/<outpoint>:0?content=false&map=true: type, size, origin and MAP), so nothing big
 * crosses the phone pairing. Results are kept per identity key so the tabs fill at once on the next run.
 *
 *   VXLIB.scan(wallet, identityKey, onProgress) -> items      VXLIB.items(kind?) -> cached items     VXLIB.clear()
 *   item = { outpoint, origin, url, contentType, bytes, name, kind, app, map }
 *   kind = clip | image | audio | midi | sketch | set | setlog | other
 */
(function (root) {
  'use strict';
  var ORDFS = 'https://ordfs.network/';
  var BASKETS = ['1sat']; // where bWalletX keeps 1-sat inscriptions (see vx/mint.js)
  var STORE = 'vx.walletLib';
  var PAGE = 200, MAX = 2000, PARALLEL = 6;

  function kindOf(ct) {
    ct = String(ct || '').split(';')[0].trim().toLowerCase();
    if (/^application\/vnd\.v3xv0id\.(sketch|set|setlog)\+json$/.test(ct)) return ct.match(/\.(sketch|set|setlog)\+/)[1];
    if (ct === 'audio/midi' || ct === 'audio/x-midi' || ct === 'audio/mid') return 'midi';
    if (/^video\//.test(ct)) return 'clip';
    if (/^image\//.test(ct)) return 'image';
    if (/^audio\//.test(ct)) return 'audio';
    return 'other';
  }
  // BRC-100 outpoints are "txid.vout"; ORDFS and our inscription ids use "txid_vout"
  function underscore(op) { return String(op).replace(/\.(\d+)$/, '_$1'); }

  async function describe(outpoint) {
    var op = underscore(outpoint);
    var res = await fetch(ORDFS + 'content/' + op + ':0?content=false&map=true');
    if (!res.ok) return null;
    var ct = res.headers.get('content-type') || '';
    var origin = res.headers.get('x-origin') || op;
    var map = null;
    try { map = JSON.parse(res.headers.get('x-map') || 'null'); } catch (e) {}
    var sub = map && map.subTypeData && typeof map.subTypeData === 'object' ? map.subTypeData : {};
    var name = (map && (map.name || sub.name)) || null;
    var kind = (map && map.app === 'v3xv0id' && map.kind) || kindOf(ct);
    if (map && map.app === 'v3xv0id' && /^(clip|still)$/.test(map.kind)) kind = map.kind === 'still' ? 'image' : 'clip';
    return { outpoint: op, origin: origin, url: ORDFS + origin, contentType: ct.split(';')[0].trim(), bytes: Number(res.headers.get('content-length')) || 0,
      name: String(name || (kindOf(ct).toUpperCase() + ' ' + origin.slice(0, 8))), kind: kindOf(ct) === 'other' ? 'other' : kind, app: (map && map.app) || null, map: map };
  }

  async function held(wallet) {
    var out = [];
    for (var b = 0; b < BASKETS.length; b++) {
      for (var offset = 0; out.length < MAX; offset += PAGE) {
        var r = await wallet.listOutputs({ basket: BASKETS[b], includeTags: true, limit: PAGE, offset: offset });
        var page = (r && r.outputs) || [];
        page.forEach(function (o) { if (o && o.outpoint && o.spendable !== false) out.push(o.outpoint); });
        if (page.length < PAGE) break;
      }
    }
    return Array.from(new Set(out));
  }

  function load() { try { return JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (e) {} }

  async function scan(wallet, identityKey, onProgress) {
    if (!wallet) throw new Error('Connect bWalletX first');
    var prev = load(), known = {};
    if (prev && prev.key === identityKey) prev.items.forEach(function (it) { known[it.outpoint] = it; });
    var ops = await held(wallet);
    var items = [], todo = ops.slice(), done = 0;
    async function worker() {
      while (todo.length) {
        var op = underscore(todo.shift());
        var it = known[op];
        if (!it) { try { it = await describe(op); } catch (e) { it = null; } }
        if (it) items.push(it);
        done++; if (onProgress) onProgress(done, ops.length);
      }
    }
    await Promise.all(Array.from({ length: PARALLEL }, worker));
    items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    save({ key: identityKey, at: new Date().toISOString(), items: items });
    return items;
  }
  function items(kind, identityKey) {
    var c = load();
    if (!c || (identityKey && c.key !== identityKey)) return [];
    return kind ? c.items.filter(function (i) { return i.kind === kind; }) : c.items;
  }
  function clear() { try { localStorage.removeItem(STORE); } catch (e) {} }

  root.VXLIB = { scan: scan, items: items, clear: clear, kindOf: kindOf, describe: describe, _underscore: underscore };
})(typeof window !== 'undefined' ? window : this);
