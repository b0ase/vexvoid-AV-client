/* V3XV0ID platform layer (VXP): the one place the client reaches Electron and Node.
 *
 * Desktop (Electron, nodeIntegration): VXP hands out the real modules, so the app behaves exactly as before.
 *   VXP.ipc = ipcRenderer, VXP.fs = fs, VXP.path = path, VXP.dialog = @electron/remote dialog, VXP.dir('userData')...
 *
 * Web (vexvoid.com/studio): browser stand-ins with the same shapes, so one source runs in both places.
 *   ipc     controls <-> output over a BroadcastChannel (the output is an <iframe> in the mixer, or its own window);
 *           the same channel names as main.js (control-to-output -> control-command, output-to-control -> output-message)
 *   fs      a small sync file system in memory, kept in IndexedDB under /userData (uploads, settings); /app holds the
 *           client's read-only files (vx/catalogue.json); writes under /downloads become browser downloads
 *   dialog  file pickers (the picked files are copied into /userData/uploads/...) and "save" = a download
 *   cloud   signed-in copies of PNG uploads in the player's private folder (vexvoid.com /api/studio/files)
 *   Studio 2/3 features need Node (ffmpeg, demucs, recording the output window, the local API, the claude.ai relay):
 *   elements marked data-desktop are hidden on the web and VXP.desktopOnly() explains why.
 */
(function (root) {
  'use strict';
  var desktop = typeof root.require === 'function' && typeof root.process === 'object' && !!(root.process && root.process.versions && root.process.versions.electron);
  var script = document.currentScript;
  var role = (script && script.dataset.role) || 'controls';
  var VXP = root.VXP = { desktop: desktop, web: !desktop, role: role };
  // network reads (the STORE catalogue): plain fetch in both places; the site is vexvoid.com in the app, this origin on the web
  VXP.site = desktop || !/^https?:$/.test(location.protocol) ? 'https://www.vexvoid.com' : location.origin;
  VXP.getJSON = function (url) { return fetch(url, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }); };

  if (desktop) {
    var electron = root.require('electron'), remote = root.require('@electron/remote');
    VXP.ipc = electron.ipcRenderer;
    VXP.fs = root.require('fs');
    VXP.path = root.require('path');
    VXP.dialog = remote.dialog;
    VXP.appDir = root.__dirname;
    VXP.dir = function (name) { return remote.app.getPath(name); };
    VXP.fileUrl = function (p) { return 'file://' + encodeURI(p); };
    VXP.openExternal = function (url) { return electron.shell.openExternal(url); };
    VXP.env = function (k) { return root.process.env[k] || ''; };
    VXP.uploads = function () { return []; };
    VXP.cloud = null;
    VXP.ready = Promise.resolve();
    VXP.desktopOnly = function () { return null; };
    return;
  }

  // ===================================================================== web =====================================
  document.documentElement.classList.add('vx-web');
  var DESKTOP_NOTE = 'in the desktop app (coming to the web)';
  VXP.desktopOnly = function (what) { var e = new Error((what || 'This') + ' is ' + DESKTOP_NOTE + '.'); e.code = 'EDESKTOP'; return e; };
  VXP.appDir = '/app';
  VXP.dir = function (name) { return { userData: '/userData', downloads: '/downloads', temp: '/tmp', home: '/home' }[name] || '/userData'; };
  VXP.env = function () { return ''; };
  VXP.openExternal = function (url) { root.open(String(url), '_blank', 'noopener'); return Promise.resolve(); };

  // ---------------------------------------------------------------- path (posix, enough for the client) --------------
  var isUrl = function (p) { return /^(https?:|blob:|data:)/i.test(String(p)); };
  function norm(p) {
    p = String(p || '');
    var abs = p.charAt(0) === '/', out = [];
    p.split('/').forEach(function (s) { if (!s || s === '.') return; if (s === '..') out.pop(); else out.push(s); });
    return (abs ? '/' : '') + out.join('/') || (abs ? '/' : '.');
  }
  function base(p) {
    p = String(p);
    if (isUrl(p)) { p = p.split(/[?#]/)[0]; try { p = decodeURIComponent(p); } catch (e) {} }
    return p.replace(/\/+$/, '').split('/').pop();
  }
  var path = VXP.path = {
    sep: '/',
    join: function () { return norm([].slice.call(arguments).filter(function (s) { return s !== ''; }).join('/')); },
    resolve: function () { return path.join.apply(null, arguments); },
    normalize: norm,
    dirname: function (p) { p = String(p).replace(/\/+$/, ''); var i = p.lastIndexOf('/'); return i > 0 ? p.slice(0, i) : (i === 0 ? '/' : '.'); },
    basename: function (p, ext) { var b = base(p); return ext && b.slice(-ext.length) === ext ? b.slice(0, -ext.length) : b; },
    extname: function (p) { var b = base(p), i = b.lastIndexOf('.'); return i > 0 ? b.slice(i) : ''; },
    isAbsolute: function (p) { return String(p).charAt(0) === '/'; }
  };

  // ---------------------------------------------------------------- the bus (controls <-> output) ------------------
  var hash = new URLSearchParams(location.hash.slice(1));
  var busId = hash.get('bus') || (function () { try { var k = sessionStorage.getItem('vx-bus'); if (k) return k; } catch (e) {} var k2 = Math.random().toString(36).slice(2, 10); try { sessionStorage.setItem('vx-bus', k2); } catch (e) {} return k2; })();
  var me = role === 'controls' ? 'controls' : (hash.get('out') || 'o' + Math.random().toString(36).slice(2, 7));
  var bus = new BroadcastChannel('vx-studio:' + busId);
  VXP.busId = busId; VXP.outputId = me;
  var listeners = {};
  function emit(ch, msg) { (listeners[ch] || []).slice().forEach(function (fn) { try { fn({ sender: null }, msg); } catch (e) { console.error(e); } }); }
  var ROUTE = { 'control-to-output': 'control-command', 'output-to-control': 'output-message' };
  // controls side: one output at a time gets the commands; messages wait until it says hello
  var out = { id: null, live: false, queue: [] };
  function post(m) { bus.postMessage(m); }
  function toOutput(m) { if (out.live) { m.to = out.id; post(m); } else out.queue.push(m); }
  VXP.ipc = {
    send: function (ch, msg) {
      var to = ROUTE[ch]; if (!to) return;
      if (role === 'controls') toOutput({ t: 'ipc', ch: to, msg: msg, from: me });
      else post({ t: 'ipc', ch: to, msg: msg, from: me, to: 'controls' });
    },
    on: function (ch, fn) { (listeners[ch] = listeners[ch] || []).push(fn); },
    removeAllListeners: function (ch) { delete listeners[ch]; },
    invoke: function (ch, arg) {
      if (ch === 'show-save-dialog') return VXP.dialog.showSaveDialog(arg);
      if (ch === 'output-frame' || ch === 'get-output-source-id') return Promise.resolve(null); // the mixer shows the live output itself
      return Promise.reject(VXP.desktopOnly(ch === 'relay-status' || /^relay-/.test(ch) ? 'The claude.ai link' : ch));
    }
  };
  bus.onmessage = function (e) {
    var m = e.data || {};
    if (m.t === 'vfs') return applyRemote(m);
    if (role === 'controls') {
      if (m.t === 'hello') return outputHello(m.from, m);
      if (m.t === 'bye') return outputBye(m.from);
      if (m.t === 'ipc' && m.to === 'controls' && m.from === out.id) emit(m.ch, m.msg);
    } else {
      if (m.t === 'ipc' && m.to === me) emit(m.ch, m.msg);
      if (m.t === 'ping' && m.to === me) post({ t: 'hello', from: me, again: true });
    }
  };

  // ---------------------------------------------------------------- file system ---------------------------------------
  // entries: path -> { data: Uint8Array | Blob, mtime }. Small files are bytes (sync reads work); media is a Blob (read it
  // with VXP.readBlob; its address is VXP.fileUrl(path)).
  var mem = new Map(), dirs = new Set(['/', '/app', '/userData', '/downloads', '/tmp']), urls = new Map();
  var enc = new TextEncoder(), dec = new TextDecoder();
  var persisted = function (p) { return p.indexOf('/userData/') === 0; };
  function fsErr(code, p, what) { var e = new Error(code + ': ' + (what || 'no such file or directory') + ', ' + p); e.code = code; e.path = p; return e; }
  function addDirs(p) { for (var d = path.dirname(p); d && !dirs.has(d); d = path.dirname(d)) { dirs.add(d); if (d === '/') break; } }
  function toData(x) {
    if (typeof x === 'string') return enc.encode(x);
    if (x instanceof Blob) return x;
    if (x instanceof ArrayBuffer) return new Uint8Array(x.slice(0));
    if (ArrayBuffer.isView(x)) return new Uint8Array(x.buffer.slice(x.byteOffset, x.byteOffset + x.byteLength));
    return enc.encode(String(x));
  }
  function sizeOf(d) { return d instanceof Blob ? d.size : d.byteLength; }
  function dropUrl(p) { var u = urls.get(p); if (u) { URL.revokeObjectURL(u); urls.delete(p); } }
  function put(p, data, mtime, quiet) {
    p = norm(p); addDirs(p); dropUrl(p);
    var ent = { data: data, mtime: mtime || Date.now() };
    mem.set(p, ent);
    if (!quiet && persisted(p)) { idb('put', { path: p, data: data, mtime: ent.mtime }); post({ t: 'vfs', op: 'put', path: p, data: data, mtime: ent.mtime }); }
  }
  function del(p, quiet) {
    p = norm(p); dropUrl(p);
    var had = mem.delete(p);
    if (had && !quiet && persisted(p)) { idb('delete', p); post({ t: 'vfs', op: 'del', path: p }); }
    return had;
  }
  function applyRemote(m) { if (m.op === 'put') put(m.path, m.data, m.mtime, true); else if (m.op === 'del') del(m.path, true); }
  function download(name, data, type) {
    var blob = data instanceof Blob ? data : new Blob([data], { type: type || 'application/octet-stream' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);
    VXP.lastDownload = { name: name, bytes: blob.size, at: Date.now() };
  }
  function entry(p) { var e = mem.get(norm(p)); if (!e) throw fsErr('ENOENT', p); return e; }
  function stat(p) {
    if (isUrl(p)) return { size: 0, mtimeMs: 0, isDirectory: function () { return false; }, isFile: function () { return true; } };
    p = norm(p);
    var e = mem.get(p), d = !e && dirs.has(p);
    if (!e && !d) throw fsErr('ENOENT', p);
    return { size: e ? sizeOf(e.data) : 0, mtimeMs: e ? e.mtime : 0, mtime: new Date(e ? e.mtime : 0), isDirectory: function () { return d; }, isFile: function () { return !d; } };
  }
  var fs = VXP.fs = {
    existsSync: function (p) { if (isUrl(p)) return true; p = norm(p); return mem.has(p) || dirs.has(p); },
    statSync: stat,
    readFileSync: function (p, o) {
      var e = entry(p), encName = typeof o === 'string' ? o : o && o.encoding;
      if (e.data instanceof Blob) throw fsErr('EASYNC', p, 'a media file is read with VXP.readBlob');
      return encName ? dec.decode(e.data) : e.data;
    },
    writeFileSync: function (p, data) {
      p = norm(p);
      if (p.indexOf('/downloads/') === 0) return download(path.basename(p), data instanceof Blob ? data : toData(data));
      put(p, toData(data));
    },
    mkdirSync: function (p) { p = norm(p); dirs.add(p); addDirs(p); },
    readdirSync: function (d) {
      d = norm(d); if (!dirs.has(d)) throw fsErr('ENOENT', d);
      var pre = d === '/' ? '/' : d + '/', seen = new Set();
      mem.forEach(function (v, k) { if (k.indexOf(pre) === 0) seen.add(k.slice(pre.length).split('/')[0]); });
      dirs.forEach(function (k) { if (k !== d && k.indexOf(pre) === 0) seen.add(k.slice(pre.length).split('/')[0]); });
      return Array.from(seen).sort();
    },
    unlinkSync: function (p) { if (!del(p)) throw fsErr('ENOENT', p); },
    rmSync: function (p) { p = norm(p); del(p); var pre = p + '/'; Array.from(mem.keys()).forEach(function (k) { if (k.indexOf(pre) === 0) del(k); }); dirs.delete(p); },
    renameSync: function (a, b) { var e = entry(a); put(b, e.data, e.mtime); del(a); },
    copyFileSync: function (a, b) { var e = entry(a); fs.writeFileSync(b, e.data); },
    openSync: function (p) { throw fsErr('EDESKTOP', p, 'not on the web'); }
  };
  fs.promises = {
    writeFile: function (p, d) { return Promise.resolve(fs.writeFileSync(p, d)); },
    readFile: function (p, o) { return Promise.resolve().then(function () { var e = entry(p); return e.data instanceof Blob && !o ? e.data.arrayBuffer().then(function (b) { return new Uint8Array(b); }) : fs.readFileSync(p, o); }); },
    copyFile: function (a, b) { return Promise.resolve(fs.copyFileSync(a, b)); },
    unlink: function (p) { return Promise.resolve(fs.unlinkSync(p)); },
    mkdir: function (p) { return Promise.resolve(fs.mkdirSync(p)); }
  };
  VXP.readBlob = function (p) { var e = entry(p); return Promise.resolve(e.data instanceof Blob ? e.data : new Blob([e.data])); };
  // the address a <img>/<video>/<audio> uses for a path (a blob: URL for our own files; web addresses stay as they are)
  VXP.fileUrl = function (p) {
    p = String(p || ''); if (isUrl(p)) return p;
    p = norm(p.replace(/^file:\/\//, '')); var u = urls.get(p); if (u) return u;
    var e = mem.get(p); if (!e) return '';
    u = URL.createObjectURL(e.data instanceof Blob ? e.data : new Blob([e.data], { type: mimeOf(p) }));
    urls.set(p, u); return u;
  };
  var MIME = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp', bmp: 'image/bmp', mp4: 'video/mp4', m4v: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', mp3: 'audio/mpeg', wav: 'audio/wav', m4a: 'audio/mp4', aac: 'audio/aac', flac: 'audio/flac', ogg: 'audio/ogg', json: 'application/json', comp: 'application/json' };
  function mimeOf(p) { return MIME[path.extname(p).slice(1).toLowerCase()] || 'application/octet-stream'; }

  // ---------------------------------------------------------------- IndexedDB (only /userData) ------------------------
  var dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      var r = indexedDB.open('vx-studio-fs', 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('files', { keyPath: 'path' }); };
      r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
    });
    return dbp;
  }
  var writes = Promise.resolve();
  function idb(op, v) {
    writes = writes.then(function () { return db(); }).then(function (d) {
      return new Promise(function (res) { var tx = d.transaction('files', 'readwrite'); tx.objectStore('files')[op](v); tx.oncomplete = res; tx.onerror = tx.onabort = function () { console.warn('studio storage', tx.error); res(); }; });
    }).catch(function (e) { console.warn('studio storage unavailable', e); });
    return writes;
  }
  VXP.flush = function () { return writes; };
  function loadAll() {
    return db().then(function (d) {
      return new Promise(function (res) { var r = d.transaction('files').objectStore('files').getAll(); r.onsuccess = function () { (r.result || []).forEach(function (x) { put(x.path, x.data, x.mtime, true); }); res(); }; r.onerror = function () { res(); }; });
    }).catch(function (e) { console.warn('studio storage unavailable', e); });
  }

  // ---------------------------------------------------------------- dialogs ------------------------------------------
  var KIND = function (f) { var t = f.type || mimeOf(f.name); return /^image\//.test(t) ? 'images' : /^video\//.test(t) ? 'videos' : /^audio\//.test(t) ? 'music' : 'files'; };
  var TEXTY = /\.(json|comp|js|txt|csv|md)$/i;
  var safe = function (n) { return String(n).replace(/[\/\\]+/g, '_').replace(/[^\w .()+-]+/g, '_').slice(0, 120) || 'file'; };
  var CLOUD_MAX = 16 * 1024 * 1024;
  function keep(file, dir) {
    var p = path.join(dir, safe(file.webkitRelativePath ? file.webkitRelativePath.split('/').pop() : file.name));
    if (TEXTY.test(file.name) && file.size < 4 * 1024 * 1024) return file.arrayBuffer().then(function (b) { put(p, new Uint8Array(b), file.lastModified); return p; });
    put(p, file, file.lastModified);
    if (file.type === 'image/png' && file.size <= CLOUD_MAX && VXP.cloud) VXP.cloud.save(p, file).catch(function () {});
    return Promise.resolve(p);
  }
  VXP.dialog = {
    showOpenDialog: function (a, b) {
      var o = (b || a || {}), props = o.properties || [];
      var folder = props.indexOf('openDirectory') >= 0 && props.indexOf('openFile') < 0;
      var exts = []; (o.filters || []).forEach(function (f) { (f.extensions || []).forEach(function (x) { if (x !== '*') exts.push('.' + x); }); });
      var any = (o.filters || []).some(function (f) { return (f.extensions || []).indexOf('*') >= 0; });
      return new Promise(function (res) {
        var inp = document.createElement('input'); inp.type = 'file'; inp.style.display = 'none';
        if (props.indexOf('multiSelections') >= 0) inp.multiple = true;
        if (folder) inp.webkitdirectory = true; else if (exts.length && !any) inp.accept = exts.join(',');
        var done = false, finish = function (r) { if (done) return; done = true; inp.remove(); res(r); };
        inp.addEventListener('cancel', function () { finish({ canceled: true, filePaths: [] }); });
        inp.addEventListener('change', function () {
          var files = Array.from(inp.files || []); if (!files.length) return finish({ canceled: true, filePaths: [] });
          var stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
          if (folder) {
            var name = safe((files[0].webkitRelativePath || '').split('/')[0] || 'folder'), dir = '/userData/uploads/folders/' + stamp + '-' + name;
            Promise.all(files.map(function (f) { return keep(f, dir); })).then(function () { finish({ canceled: false, filePaths: [dir] }); });
          } else Promise.all(files.map(function (f) { return keep(f, '/userData/uploads/' + KIND(f)); })).then(function (ps) { finish({ canceled: false, filePaths: ps }); });
        });
        document.body.appendChild(inp); inp.click();
        VXP._lastPicker = inp; // tests hand files to the picker
      });
    },
    // a save on the web is a download: the client then writes the file to this path, which downloads it
    showSaveDialog: function (a, b) {
      var o = (b || a || {});
      return Promise.resolve({ canceled: false, filePath: '/downloads/' + path.basename(o.defaultPath || 'v3xv0id-file') });
    }
  };

  // the player's own uploads, kept in this browser: kind = images | videos | music | files
  VXP.uploads = function (kind) {
    var dir = '/userData/uploads/' + kind;
    if (!dirs.has(dir)) return [];
    return fs.readdirSync(dir).map(function (f) { return path.join(dir, f); }).filter(function (p) { return mem.has(p); })
      .sort(function (x, y) { return mem.get(y).mtime - mem.get(x).mtime; })
      .map(function (p) { var n = path.basename(p); return { name: n, url: p, source: 'local', format: (path.extname(n).slice(1) || 'FILE').toUpperCase() }; });
  };
  VXP.removeUpload = function (p) { p = norm(p); if (p.indexOf('/userData/uploads/') !== 0) return false; var ok = del(p); if (VXP.cloud) VXP.cloud.remove(p).catch(function () {}); return ok; };

  // ---------------------------------------------------------------- cloud copies (signed in on vexvoid.com) -----------
  // PNG uploads up to 16 MB also go to the player's private folder (<identity key>/studio/...), so they follow the wallet
  // to other browsers. Everything else stays in this browser for now (the bucket takes image/png only).
  var API = '/api/studio/files';
  var cloudId = function (p) { return (path.basename(p).replace(/\.png$/i, '').replace(/[^\w.-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'image').toLowerCase(); };
  VXP.cloud = {
    status: 'unknown', calls: [], idOf: cloudId,
    list: function () {
      VXP.cloud.calls.push('GET');
      return fetch(API, { credentials: 'same-origin' }).then(function (r) {
        VXP.cloud.status = r.ok ? 'on' : r.status === 401 ? 'signed-out' : 'unavailable';
        return r.ok ? r.json().then(function (j) { return j.files || []; }) : [];
      }).catch(function () { VXP.cloud.status = 'unavailable'; return []; });
    },
    save: function (p, blob) {
      if (!blob || blob.type !== 'image/png' || blob.size > CLOUD_MAX) return Promise.resolve({ skipped: true });
      VXP.cloud.calls.push('POST');
      return fetch(API, { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: cloudId(p), bytes: blob.size }) })
        .then(function (r) { VXP.cloud.status = r.ok ? 'on' : r.status === 401 ? 'signed-out' : 'unavailable'; if (!r.ok) return { ok: false, status: r.status }; return r.json(); })
        .then(function (j) { if (!j || !j.signedUrl) return j; return fetch(j.signedUrl, { method: 'PUT', headers: { 'content-type': 'image/png' }, body: blob }).then(function (r) { return { ok: r.ok, id: j.id }; }); });
    },
    remove: function (p) { VXP.cloud.calls.push('DELETE'); return fetch(API + '?id=' + encodeURIComponent(cloudId(p)), { method: 'DELETE', credentials: 'same-origin' }); }
  };

  // ---------------------------------------------------------------- the output (controls side) -----------------------
  // The output runs in an <iframe> inside the mixer (the live monitor; FULLSCREEN puts it on the whole screen) or in its own
  // window for a second screen. One output at a time; the layers move with it (export-layers -> import-layers).
  var frame = null, frameBox = null, pop = null, pending = null;
  function outputHello(id, m) {
    if (id !== out.id) return; // a stale output (an old window) is ignored
    out.live = true;
    var q = out.queue; out.queue = [];
    if (pending && !m.again) { post({ t: 'ipc', ch: 'control-command', msg: { command: 'import-layers', data: pending }, from: me, to: id }); pending = null; }
    q.forEach(function (x) { x.to = id; post(x); });
    if (VXP.onOutput) VXP.onOutput(VXP.outputState());
  }
  function outputBye(id) {
    if (id !== out.id || !pop) return;
    // the output window was closed: bring the output back into the mixer, with what we last knew of its layers
    pop = null; mountFrame(lastSnap);
  }
  var lastSnap = null;
  VXP.ipc.on('output-message', function (e, m) { if (m && m.command === 'layers-snapshot') { lastSnap = m.data; if (snapWait) { var f = snapWait; snapWait = null; f(m.data); } } });
  var snapWait = null;
  function snapshot() {
    return new Promise(function (res) {
      if (!out.live) return res(lastSnap);
      snapWait = res; VXP.ipc.send('control-to-output', { command: 'export-layers' });
      setTimeout(function () { if (snapWait === res) { snapWait = null; res(lastSnap); } }, 800);
    });
  }
  var outputUrl = function (id) { return 'index.html#bus=' + encodeURIComponent(busId) + '&out=' + encodeURIComponent(id); };
  function newOutput(snap) { out.id = 'o' + Math.random().toString(36).slice(2, 8); out.live = false; pending = snap || null; return out.id; }
  function mountFrame(snap) {
    if (!frameBox) return;
    var id = newOutput(snap);
    frame = document.createElement('iframe');
    frame.id = 'vxOutputFrame'; frame.title = 'Output'; frame.allow = 'autoplay; fullscreen; midi';
    frame.src = outputUrl(id);
    frameBox.innerHTML = ''; frameBox.appendChild(frame); fit();
    if (VXP.onOutput) VXP.onOutput(VXP.outputState());
  }
  function fit() {
    if (!frame || !frameBox) return;
    var w = frameBox.clientWidth || 1; frame.style.transform = 'scale(' + (w / 1920) + ')';
  }
  VXP.mountOutput = function (box) {
    frameBox = box; mountFrame(null);
    if (root.ResizeObserver) new ResizeObserver(fit).observe(box);
    root.addEventListener('beforeunload', function () { if (pop && !pop.closed) pop.close(); });
  };
  VXP.outputState = function () { return { where: pop ? 'window' : 'mixer', live: out.live, id: out.id }; };
  VXP.outputFrame = function () { return frame; };
  VXP.fullscreenOutput = function () {
    if (pop && !pop.closed) { pop.focus(); return Promise.resolve('window'); }
    if (!frame) return Promise.reject(new Error('no output'));
    return frame.requestFullscreen().then(function () { return 'fullscreen'; });
  };
  // OUTPUT WINDOW: the output moves to its own window (drag it to the projector); closing it brings it back
  VXP.popOutput = function () {
    if (pop && !pop.closed) { pop.focus(); return Promise.resolve('window'); }
    var w = root.open('about:blank', 'vx-output-' + busId, 'popup,width=1280,height=720');
    if (!w) return Promise.reject(new Error('the browser blocked the output window: allow pop-ups for vexvoid.com'));
    return snapshot().then(function (snap) {
      var id = newOutput(snap);
      pop = w; w.location.href = new URL(outputUrl(id), location.href).href;
      if (frame) { frame.remove(); frame = null; }
      if (frameBox) frameBox.innerHTML = '<div class="vx-out-away"><b>OUTPUT IS IN ITS OWN WINDOW</b><span>Drag that window to the projector and press F11 there, or bring it back.</span><button type="button">BRING IT BACK</button></div>';
      var btn = frameBox && frameBox.querySelector('button'); if (btn) btn.onclick = function () { VXP.dockOutput(); };
      var watch = setInterval(function () { if (!pop || pop.closed) { clearInterval(watch); if (pop) outputBye(out.id); } }, 1000);
      if (VXP.onOutput) VXP.onOutput(VXP.outputState());
      return 'window';
    });
  };
  VXP.dockOutput = function () {
    if (!pop) return Promise.resolve('mixer');
    return snapshot().then(function (snap) { var w = pop; pop = null; try { w.close(); } catch (e) {} mountFrame(snap); return 'mixer'; });
  };

  // ---------------------------------------------------------------- start-up -----------------------------------------
  // The page's DOMContentLoaded handlers wait until the files are loaded (they read them synchronously) and p5 is in.
  function loadScript(src) { return new Promise(function (res) { var s = document.createElement('script'); s.src = src; s.onload = s.onerror = function () { res(); }; document.head.appendChild(s); }); }
  var here = script ? script.src.replace(/vx\/platform\.js.*$/, '') : './';
  var catalogue = role === 'controls' ? fetch(here + 'vx/catalogue.json').then(function (r) { return r.ok ? r.arrayBuffer() : null; }).then(function (b) { if (b) put('/app/vx/catalogue.json', new Uint8Array(b), Date.now(), true); }).catch(function () {}) : null;
  VXP.ready = Promise.all([loadAll(), catalogue, root.p5 ? null : loadScript(here + 'vx/lib/p5.min.js')]);
  var addEL = root.addEventListener.bind(root), queue = Promise.resolve();
  root.addEventListener = function (type, fn, opts) {
    if (type !== 'DOMContentLoaded' || typeof fn !== 'function') return addEL(type, fn, opts);
    return addEL(type, function (ev) { queue = queue.then(function () { return VXP.ready; }).then(function () { fn.call(root, ev); }).catch(function (e) { console.error(e); }); }, opts);
  };
  if (role === 'output') {
    // hello once the page's own handlers are listening (they run after VXP.ready, in order)
    addEL('DOMContentLoaded', function () { setTimeout(function () { queue = queue.then(function () { post({ t: 'hello', from: me }); }); }, 0); });
    addEL('pagehide', function () { try { if (VXP.beforeBye) VXP.beforeBye(); } catch (e) {} post({ t: 'bye', from: me }); });
  }
})(window);
