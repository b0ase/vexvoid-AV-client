/* Connect bWalletX in the AV client (controls window). BRC-100 through @bwalletx/connect (vendored global build).
 * A desktop app has no extension and no web origin, so it pairs with the bWalletX phone app by QR (or uses a
 * local BRC-100 wallet such as `bwalletx serve` on localhost:3321), introducing itself as https://mixer.vexvoid.com.
 * It is a connection, not a sign-in: the wallet holds the keys and approves every spend; the mixer only ever sees
 * public keys, signatures and transaction ids.
 *
 *   VXWALLET.connect()  -> identity key (asks; shows the QR if needed)     VXWALLET.wallet() -> WalletInterface or null
 *   VXWALLET.disconnect()                                                    events on document: bwalletx:connected / :disconnected
 */
(function (root) {
  'use strict';
  var C = root.bWalletXConnect;
  var ORIGIN = 'https://mixer.vexvoid.com';
  var STORE = 'bwx:connected';
  var st = { wallet: null, key: null, handle: null, busy: false, label: '' };

  function get() { try { return localStorage.getItem(STORE); } catch (e) { return null; } }
  function set(v) { try { v ? localStorage.setItem(STORE, v) : localStorage.removeItem(STORE); } catch (e) {} }
  function short(k) { return k.slice(0, 6) + '…' + k.slice(-4); }

  function draw() {
    var b = document.getElementById('bwxChip');
    if (!b) return;
    b.classList.toggle('on', !!st.key);
    b.disabled = st.busy;
    b.textContent = st.key ? '● ' + (st.handle || short(st.key)) : st.busy ? st.label : 'CONNECT bWALLETX';
    b.title = st.key ? 'Connected to bWalletX. Click to disconnect.' : 'Connect your bWalletX to mint and sell';
  }
  async function lookup(k) {
    try {
      var r = await fetch('https://pay.bwallet.space/api/paymail/lookup?key=' + encodeURIComponent(k));
      var j = r.ok ? await r.json() : null;
      if (j && typeof j.paymail === 'string' && st.key === k) { st.handle = '$' + j.paymail.split('@')[0]; draw(); }
    } catch (e) {}
  }

  // interactive: the performer clicked (QR if nothing local answers). Otherwise only a remembered pairing or a
  // local wallet is tried, quietly, so a reload reconnects without a prompt.
  async function connect(interactive) {
    if (!C) throw new Error('bWalletX connector is missing');
    if (st.key && st.wallet) return st.key;
    var modal = null;
    st.busy = !!interactive; st.label = 'OPENING YOUR WALLET…'; draw();
    var onStatus = function (s) { st.label = s === 'pairing' ? 'SCAN THE QR WITH bWALLETX…' : s === 'finding' ? 'OPENING YOUR WALLET…' : 'APPROVE IN bWALLETX…'; draw(); };
    try {
      var wallet = null;
      var local = await C.discoverWallets({ probeLocal: true, ms: 300 }).catch(function () { return []; });
      var found = (local || []).find(function (o) { return o && o.kind !== 'pairing' && o.wallet; });
      if (found) wallet = found.wallet;
      if (!wallet) {
        var pairing = { origin: ORIGIN };
        if (interactive) { modal = C.pairingModal({ title: 'Connect bWalletX to V3XV0ID' }); pairing = Object.assign(modal, { origin: ORIGIN }); }
        var restored = await C.restorePairing(pairing).catch(function () { return null; });
        if (restored) wallet = restored;
        else if (interactive) { onStatus('pairing'); wallet = await C.pairBwalletX(pairing); }
        else return null;
      }
      onStatus('opening');
      var pk = await wallet.getPublicKey({ identityKey: true });
      st.wallet = wallet; st.key = pk.publicKey; st.handle = null; set(st.key);
      lookup(st.key);
      document.dispatchEvent(new CustomEvent('bwalletx:connected', { detail: { identityKey: st.key } }));
      return st.key;
    } catch (e) {
      if (interactive && !(e && e.name === 'AbortError')) throw e;
      return null;
    } finally {
      try { modal && modal.close(); } catch (e) {}
      st.busy = false; draw();
    }
  }
  function disconnect() {
    try { C && C.clearPairing && C.clearPairing({ origin: ORIGIN }); } catch (e) {}
    st.wallet = null; st.key = null; st.handle = null; set(null); draw();
    document.dispatchEvent(new CustomEvent('bwalletx:disconnected'));
  }

  root.VXWALLET = {
    ORIGIN: ORIGIN,
    connect: function () { return connect(true); },
    disconnect: disconnect,
    wallet: function () { return st.wallet; },
    identityKey: function () { return st.key; },
    handle: function () { return st.handle; },
    init: function () {
      var b = document.getElementById('bwxChip');
      if (b) {
        b.addEventListener('click', function () { if (st.key) disconnect(); else connect(true).catch(function (e) { st.label = 'NOT CONNECTED'; draw(); console.warn('bWalletX', e); }); });
        if (C && C.bindPrewarm) C.bindPrewarm(b);
      }
      draw();
      if (get()) connect(false);
    }
  };
})(typeof window !== 'undefined' ? window : this);
