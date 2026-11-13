/* The 1Sat market, read for the mixer's MARKET tab: active OrdLock listings from the 1Sat overlay
 * (api.1sat.app/1sat/market/listings), one department at a time by content type. Read only; buying goes through
 * bWalletX, and listing (selling) waits for bWalletX's replacement listing contract.
 *
 *   VXMARKET.DEPTS                                   departments and the content types each one asks for
 *   VXMARKET.search(dept, { q, more }) -> listings   newest first; more:true continues from the last page
 *   VXMARKET.isVexvoid(listing) -> Promise<bool>     MAP app=v3xv0id on the inscription (ORDFS, cached)
 *   VXMARKET.buyLink(listing, origin) -> url        bWalletX's buy link; the wallet re-checks the listing itself
 *   VXMARKET.status(outpoint) -> 'active' | 'gone'   whether the listing is still for sale (after a buy, it's gone)
 *   listing = { outpoint, origin, url, name, contentType, sats, seller, score }
 *
 * The buy link (agreed with the bWalletX session, 13 Nov 2026): https://www.bwallet.space/buy?o=<txid>_<vout>&from=<origin>.
 * The phone opens it from a QR (Camera app or the in-app scanner); "from" is display only. The wallet refuses anything
 * that isn't an active OrdLock listing at that moment and shows its own price, so the mixer never builds the purchase.
 */
(function (root) {
  'use strict';
  var API = 'https://api.1sat.app/1sat/market/listings';
  var ORDFS = 'https://ordfs.network/';
  // about 24 listings a page per department: there are no thumbnails, so every image tile is the full file
  var PAGE = 24;
  var DEPTS = [
    { id: 'video', label: 'VIDEO', types: ['video/mp4', 'video/webm', 'video/quicktime'] },
    { id: 'audio', label: 'AUDIO', types: ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/ogg', 'audio/flac', 'audio/aac', 'audio/mp4'] },
    { id: 'image', label: 'IMAGES', types: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'] },
    { id: 'v3x', label: 'V3XV0ID SETS + SKETCHES', types: ['application/vnd.v3xv0id.set+json', 'application/vnd.v3xv0id.setlog+json', 'application/vnd.v3xv0id.sketch+json'] },
    { id: 'midi', label: 'MIDI', types: ['audio/midi', 'audio/x-midi'] }
  ];
  var cursors = {}; // dept|q -> { type: nextFrom | null (done) }
  var mapCache = {};

  function underscore(op) { return String(op).replace(/\.(\d+)$/, '_$1'); }
  function shape(r) {
    var o = (r.data && r.data.ordlock) || {};
    var origin = underscore(o.origin || r.outpoint);
    return { outpoint: underscore(r.outpoint), origin: origin, url: ORDFS + origin, name: String(o.name || 'UNTITLED ' + origin.slice(0, 8)),
      contentType: String(o.content_type || ''), sats: Number(o.price) || 0, seller: String(o.seller || ''), score: Number(r.score) || 0 };
  }
  async function page(type, q, from, limit) {
    var qs = new URLSearchParams({ status: 'active', type: type, limit: String(limit), rev: 'true' });
    if (q) qs.set('q', q);
    if (from != null) qs.set('from', String(from));
    var res = await fetch(API + '?' + qs);
    if (!res.ok) throw new Error('1Sat market ' + res.status);
    var rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  }

  async function search(deptId, opts) {
    opts = opts || {};
    var dept = DEPTS.find(function (d) { return d.id === deptId; }) || DEPTS[0];
    var q = (opts.q || '').trim(), ck = dept.id + '|' + q;
    if (!opts.more || !cursors[ck]) { cursors[ck] = {}; dept.types.forEach(function (t) { cursors[ck][t] = undefined; }); }
    var cur = cursors[ck], per = Math.max(6, Math.ceil(PAGE / dept.types.length));
    var lists = await Promise.all(dept.types.map(function (t) {
      if (cur[t] === null) return [];
      return page(t, q, cur[t], per).then(function (rows) { cur[t] = rows.length === per ? rows[rows.length - 1].score : null; return rows; })
        .catch(function () { cur[t] = null; return []; });
    }));
    var out = [].concat.apply([], lists).map(shape);
    out.sort(function (a, b) { return b.score - a.score; });
    return { listings: out, more: dept.types.some(function (t) { return cur[t] != null; }) };
  }

  function isVexvoid(l) {
    if (mapCache[l.origin] !== undefined) return Promise.resolve(mapCache[l.origin]);
    if (/^application\/vnd\.v3xv0id\./.test(l.contentType)) return Promise.resolve(mapCache[l.origin] = true);
    return fetch(ORDFS + 'content/' + l.origin + '?content=false&map=true').then(function (res) {
      var m = null; try { m = JSON.parse(res.headers.get('x-map') || 'null'); } catch (e) {}
      return (mapCache[l.origin] = !!(m && m.app === 'v3xv0id'));
    }).catch(function () { return false; });
  }

  function buyLink(l, origin) {
    return 'https://www.bwallet.space/buy?' + new URLSearchParams({ o: l.outpoint, from: origin || '' }).toString();
  }
  async function status(outpoint) {
    var res = await fetch('https://api.1sat.app/1sat/market/listing/' + outpoint.replace(/_(\d+)$/, '.$1'));
    if (res.status === 404) return 'gone';
    if (!res.ok) throw new Error('1Sat market ' + res.status);
    var r = await res.json().catch(function () { return null; });
    return r && (r.spend || (r.data && r.data.ordlock && r.data.ordlock.status && r.data.ordlock.status !== 'active')) ? 'gone' : 'active';
  }

  root.VXMARKET = { DEPTS: DEPTS, search: search, isVexvoid: isVexvoid, buyLink: buyLink, status: status, API: API };
})(typeof window !== 'undefined' ? window : this);
