/* Minting V3XV0ID sketches and sets as 1Sat Ordinals inscriptions through bWalletX (BRC-100 createAction).
 *
 * The output is what bWalletX expects of a 1-sat inscription (confirmed with the bWalletX session, 13 Nov 2026):
 * exactly 1 sat; the ord envelope then P2PKH, locked to a key the wallet derives itself (protocolID/keyID recorded in
 * customInstructions so it can spend it later); basket '1sat'; never noSend. A MAP SET after the lock names the app.
 *   OP_0 OP_IF "ord" OP_1 <content-type> OP_0 <data> OP_ENDIF  OP_DUP OP_HASH160 <pkh> OP_EQUALVERIFY OP_CHECKSIG
 *   OP_RETURN "1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5" "SET" app v3xv0id type ord kind <kind> name <name>
 * The wallet shows the cost and asks the performer to approve; nothing is spent without that. Not exposed to the
 * API, CLI or MCP: only someone at the mixer can mint.
 */
(function (root) {
  'use strict';
  var PROTOCOL = [1, 'v3xv0id mint'];
  var MAP_PREFIX = '1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5';
  var STORE = 'vx.minted';
  var enc = new TextEncoder();

  function hex(bytes) { return Array.from(bytes, function (b) { return b.toString(16).padStart(2, '0'); }).join(''); }
  function fromHex(h) { var out = new Uint8Array(h.length / 2); for (var i = 0; i < out.length; i++) out[i] = parseInt(h.substr(i * 2, 2), 16); return out; }
  function push(data) {
    var n = data.length, head;
    if (n === 0) return [0x00];
    if (n < 0x4c) head = [n];
    else if (n <= 0xff) head = [0x4c, n];
    else if (n <= 0xffff) head = [0x4d, n & 0xff, n >> 8];
    else head = [0x4e, n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >>> 24) & 0xff];
    return head.concat(Array.from(data));
  }
  function hash160(pubkeyHex) {
    var c = require('crypto');
    return new Uint8Array(c.createHash('ripemd160').update(c.createHash('sha256').update(Buffer.from(pubkeyHex, 'hex')).digest()).digest());
  }

  /** The locking script, as hex. */
  function inscriptionScript(o) {
    var s = [0x00, 0x63].concat(push(enc.encode('ord')), [0x51], push(enc.encode(o.contentType)), [0x00], push(o.data), [0x68]);
    s = s.concat([0x76, 0xa9], push(hash160(o.pubkeyHex)), [0x88, 0xac]);
    if (o.map) {
      s = s.concat([0x6a], push(enc.encode(MAP_PREFIX)), push(enc.encode('SET')));
      Object.keys(o.map).forEach(function (k) { s = s.concat(push(enc.encode(k)), push(enc.encode(String(o.map[k])))); });
    }
    return hex(s);
  }

  function clip(s, n) { s = String(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  // BRC-100: descriptions 5-50 characters
  function desc(s) { s = clip(s, 50); return s.length < 5 ? (s + '     ').slice(0, 5) : s; }

  /** Mint one document. kind: 'sketch' | 'set'. Returns {txid, origin}. Throws with a plain message. */
  async function mint(wallet, o) {
    if (!wallet) throw new Error('Connect bWalletX first');
    var data = typeof o.data === 'string' ? enc.encode(o.data) : o.data;
    var keyID = o.kind + ' ' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    var pk = await wallet.getPublicKey({ protocolID: PROTOCOL, keyID: keyID, counterparty: 'self' });
    var lockingScript = inscriptionScript({ contentType: o.contentType, data: data, pubkeyHex: pk.publicKey,
      map: { app: 'v3xv0id', type: 'ord', kind: o.kind, name: clip(o.name, 60) } });
    var r = await wallet.createAction({
      description: desc('Mint V3XV0ID ' + o.kind + ': ' + o.name),
      outputs: [{
        lockingScript: lockingScript, satoshis: 1, basket: '1sat',
        outputDescription: desc(o.kind + ' ' + o.name),
        tags: ['v3xv0id', 'kind:' + o.kind, 'type:' + o.contentType],
        customInstructions: JSON.stringify({ protocolID: PROTOCOL, keyID: keyID, counterparty: 'self' })
      }],
      labels: ['v3xv0id', 'mint'],
      options: { randomizeOutputs: false }
    });
    var txid = r && (r.txid || null);
    if (!txid) throw new Error('bWalletX did not return a transaction id');
    var rec = { origin: txid + '_0', txid: txid, kind: o.kind, name: o.name, bytes: data.length, src: o.src || null, at: new Date().toISOString() };
    try { var list = JSON.parse(localStorage.getItem(STORE) || '[]'); list.unshift(rec); localStorage.setItem(STORE, JSON.stringify(list.slice(0, 500))); } catch (e) {}
    return rec;
  }

  // Largest single inscription over phone pairing: the relay carries frames up to 4 MiB, and a request is the file
  // base64'd, sealed and base64'd again, so 2 MB of raw file leaves headroom (bWalletX session, 13 Nov 2026).
  // Bigger files need a chunked upload the wallet only offers CLI pairings today.
  var MAX_MEDIA_BYTES = 2 * 1024 * 1024;
  function originFor(src) { var m = minted().find(function (r) { return r.src && r.src === src; }); return m ? m.origin : null; }

  function minted() { try { return JSON.parse(localStorage.getItem(STORE) || '[]'); } catch (e) { return []; } }

  root.VXMINT = { PROTOCOL: PROTOCOL, MAX_MEDIA_BYTES: MAX_MEDIA_BYTES, originFor: originFor, inscriptionScript: inscriptionScript, mint: mint, minted: minted, _push: push, _hex: hex, _fromHex: fromHex };
})(typeof window !== 'undefined' ? window : this);
