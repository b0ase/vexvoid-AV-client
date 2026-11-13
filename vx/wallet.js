/* Connect bWalletX in the AV client (controls window). BRC-100 through @bwalletx/connect (vendored global build).
 * A desktop app has no extension and no web origin, so it pairs with the bWalletX phone app by QR (or uses a
 * local BRC-100 wallet such as `bwalletx serve` on localhost:3321), introducing itself as https://desktop.mixer.vexvoid.com
 * (the app identity main.js also sends as the relay socket's Origin; keep the two equal).
 * It is a connection, not a sign-in: the wallet holds the keys and approves every spend; the mixer only ever sees
 * public keys, signatures and transaction ids.
 *
 *   VXWALLET.connect()  -> identity key (asks; shows the QR if needed)     VXWALLET.wallet() -> WalletInterface or null
 *   VXWALLET.disconnect()                                                    events on document: bwalletx:connected / :disconnected
 */
(function (root) {
  'use strict';
  var C = root.bWalletXConnect;
  var ORIGIN = 'https://desktop.mixer.vexvoid.com'; // = APP_ORIGIN in main.js
  var STORE = 'bwx:connected';
  var st = { wallet: null, key: null, handle: null, busy: false, label: '', error: null };

  function get() { try { return localStorage.getItem(STORE); } catch (e) { return null; } }
  function set(v) { try { v ? localStorage.setItem(STORE, v) : localStorage.removeItem(STORE); } catch (e) {} }
  function short(k) { return k.slice(0, 6) + '…' + k.slice(-4); }

  function draw() {
    var b = document.getElementById('bwxChip');
    if (!b) return;
    b.classList.toggle('on', !!st.key);
    b.disabled = st.busy;
    b.classList.toggle('err', !!st.error && !st.key && !st.busy);
    b.textContent = st.key ? '● ' + (st.handle || short(st.key)) : st.busy ? st.label : st.error ? 'NOT CONNECTED · RETRY' : 'CONNECT bWALLETX';
    b.title = st.key ? 'Connected to bWalletX. Click to disconnect.' : st.error ? st.error : 'Connect your bWalletX to mint and sell';
  }
  async function lookup(k) {
    try {
      var r = await fetch('https://pay.bwallet.space/api/paymail/lookup?key=' + encodeURIComponent(k));
      var j = r.ok ? await r.json() : null;
      if (j && typeof j.paymail === 'string' && st.key === k) { st.handle = '$' + j.paymail.split('@')[0]; draw(); }
    } catch (e) {}
  }

  // A saved phone pairing is only a claim that the phone is still there: the connector waits up to 2 minutes for an
  // answer, and a closed bWalletX never answers. So on start-up the stored identity key is shown without asking the
  // phone (it is asked when something needs it), and a click gives a saved pairing PHONE_MS to answer before showing a
  // fresh QR instead.
  var PHONE_MS = 15000;
  function within(p, ms, msg) { return Promise.race([p, new Promise(function (_, rej) { setTimeout(function () { rej(new Error(msg)); }, ms); })]); }

  // interactive: the performer clicked (QR if nothing answers). Otherwise only a local wallet or a remembered pairing
  // is picked up, quietly and without a prompt, so a reload reconnects.
  async function connect(interactive) {
    if (!C) throw new Error('bWalletX connector is missing');
    if (st.key && st.wallet) return st.key;
    var modal = null;
    st.busy = !!interactive; st.label = 'OPENING YOUR WALLET…'; draw();
    var onStatus = function (s) { st.label = s === 'pairing' ? 'SCAN THE QR WITH bWALLETX…' : s === 'finding' ? 'OPENING YOUR WALLET…' : s === 'phone' ? 'OPEN bWALLETX ON YOUR PHONE…' : 'APPROVE IN bWALLETX…'; draw(); };
    try {
      var wallet = null, key = null;
      var local = await C.discoverWallets({ probeLocal: true, ms: 300 }).catch(function () { return []; });
      var found = (local || []).find(function (o) { return o && o.kind !== 'pairing' && o.wallet; });
      if (found) wallet = found.wallet;
      if (!wallet) {
        var restored = await C.restorePairing({ origin: ORIGIN }).catch(function () { return null; });
        if (restored && !interactive) {
          if (!get()) return null; // a pairing but no remembered identity: wait for a click
          wallet = restored; key = get();
        } else if (restored) {
          onStatus('phone');
          try { key = (await within(restored.getPublicKey({ identityKey: true }), PHONE_MS, 'phone did not answer')).publicKey; wallet = restored; }
          catch (e) { try { await C.clearPairing({ origin: ORIGIN }); } catch (e2) {} } // stale: pair again below
        }
        if (!wallet) {
          if (!interactive) return null;
          modal = C.pairingModal({ title: 'Connect bWalletX to V3XV0ID' });
          onStatus('pairing');
          wallet = await C.pairBwalletX(Object.assign(modal, { origin: ORIGIN }));
        }
      }
      if (!key) { onStatus('opening'); key = (await wallet.getPublicKey({ identityKey: true })).publicKey; }
      var quiet = !interactive;
      st.wallet = wallet; st.key = key; st.handle = null; set(st.key);
      lookup(st.key);
      document.dispatchEvent(new CustomEvent('bwalletx:connected', { detail: { identityKey: st.key, quiet: quiet } }));
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
        // a failed connect stays on the chip (hover for the reason) instead of the QR just vanishing
        b.addEventListener('click', function () {
          if (st.key) return disconnect();
          st.error = null;
          connect(true).catch(function (e) { st.error = 'bWalletX: ' + ((e && e.message) || e); draw(); console.warn('bWalletX', e); });
        });
        if (C && C.bindPrewarm) C.bindPrewarm(b);
      }
      draw();
      if (get()) connect(false);
    }
  };
})(typeof window !== 'undefined' ? window : this);
