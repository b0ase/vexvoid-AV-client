/* The EDIT tab's projects: every edit kept as its own file, so there can be as many as you like, of any length.
 *
 * Desktop: <userData>/edit/local/projects/<id>.json on disk. Web (vexvoid.com/studio): the same paths in the platform's
 * file system (vx/platform.js), which keeps /userData in this browser's IndexedDB, under the signed-in wallet's tag
 * (/userData/edit/<tag>/...), so two wallets on one browser keep their edits apart. index.json lists them (title, when
 * saved, length) so the list opens without reading every project.
 *
 *   var S = VXEDSTORE.open({ fs, path, dir })     dir = <userData>/edit/<tag>
 *   S.list() -> [{ id, title, saved, seconds }] newest first        S.load(id) -> state | null
 *   S.save(state) -> id (state.id is set if missing)                S.remove(id)
 *   VXEDSTORE.toFile(state) -> text (a .vxedit file to download)    VXEDSTORE.fromFile(text) -> state (a new id)
 *
 * state = { id, title, track, proj, pps, snap, look, lookOver, t, grid } (what the EDIT tab keeps).
 * A project file names its media by address: catalogue clips and music play anywhere; your own uploads live in the
 * browser (or on the computer) they were added on, so a project opened elsewhere shows them as missing.
 */
(function (root) {
  'use strict';
  var FORMAT = 'v3xv0id-edit', VERSION = 1;
  var newId = function () { return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); };
  var okId = function (id) { return typeof id === 'string' && /^[a-z0-9]{4,40}$/.test(id); };
  function span(state) {
    var e = 0; ((state.proj && state.proj.tracks) || []).forEach(function (t) { (t.items || []).forEach(function (it) { e = Math.max(e, (+it.start || 0) + (+it.dur || 0)); }); });
    return Math.round(e * 100) / 100;
  }
  function open(o) {
    var fs = o.fs, path = o.path, dir = o.dir, pdir = path.join(dir, 'projects'), idx = path.join(dir, 'index.json');
    function readIndex() { try { var j = JSON.parse(fs.readFileSync(idx, 'utf8')); return j && typeof j === 'object' && !Array.isArray(j) ? j : {}; } catch (e) { return {}; } }
    function writeIndex(j) { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(idx, JSON.stringify(j)); }
    var file = function (id) { return path.join(pdir, id + '.json'); }, last = 0; // saves in the same millisecond keep their order
    return {
      dir: dir,
      list: function () {
        var j = readIndex();
        return Object.keys(j).filter(okId).map(function (id) { return Object.assign({ id: id }, j[id]); })
          .filter(function (x) { return fs.existsSync(file(x.id)); }).sort(function (a, b) { return (b.saved || 0) - (a.saved || 0); });
      },
      load: function (id) {
        if (!okId(id)) return null;
        try { var s = JSON.parse(fs.readFileSync(file(id), 'utf8')); s.id = id; return s; } catch (e) { return null; }
      },
      save: function (state) {
        if (!okId(state.id)) state.id = newId();
        var saved = last = Math.max(Date.now(), last + 1), body = Object.assign({}, state, { saved: saved });
        fs.mkdirSync(pdir, { recursive: true });
        fs.writeFileSync(file(state.id), JSON.stringify(body));
        var j = readIndex(); j[state.id] = { title: String(state.title || 'UNTITLED VIDEO').slice(0, 60), saved: saved, seconds: span(state) }; writeIndex(j);
        return state.id;
      },
      remove: function (id) {
        if (!okId(id)) return false;
        try { fs.unlinkSync(file(id)); } catch (e) {}
        var j = readIndex(); delete j[id]; writeIndex(j); return true;
      }
    };
  }
  function toFile(state) {
    var s = Object.assign({}, state); delete s.saved;
    return JSON.stringify({ format: FORMAT, version: VERSION, exported: new Date().toISOString(), project: s }, null, 1);
  }
  function fromFile(text) {
    var j; try { j = JSON.parse(String(text)); } catch (e) { throw new Error('that is not a V3XV0ID edit file'); }
    var s = j && j.format === FORMAT ? j.project : j && j.proj ? j : null;
    if (!s || !s.proj || !Array.isArray(s.proj.tracks)) throw new Error('that is not a V3XV0ID edit file');
    if (j.version > VERSION) throw new Error('this edit file is from a newer studio');
    s.proj.tracks.forEach(function (t) { if (!t || !Array.isArray(t.items) || !/^(text|video|audio)$/.test(t.kind)) throw new Error('the edit file has a broken track'); });
    s.proj.markers = Array.isArray(s.proj.markers) ? s.proj.markers : [];
    s.proj.sections = Array.isArray(s.proj.sections) ? s.proj.sections : [];
    return Object.assign({}, s, { id: newId(), title: String(s.title || 'IMPORTED EDIT').toUpperCase().slice(0, 60) });
  }
  root.VXEDSTORE = { open: open, toFile: toFile, fromFile: fromFile, newId: newId, span: span, FORMAT: FORMAT };
  if (typeof module !== 'undefined') module.exports = root.VXEDSTORE;
})(typeof window !== 'undefined' ? window : this);
