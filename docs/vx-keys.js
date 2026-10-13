/* VX engine keyboard map, shared by the output window, the controls window and the Pages preview.
 * vxHandleKey(event, target) -> true if handled. target exposes get/set/blackout/cleanNow/nextClip/toggleAudio
 * (the live engine, or the controls-window proxy that forwards over IPC). */
(function (root) {
  var FORMULAS = ['auto', 'eye', 'bloom', 'vortex', 'hybrid', 'ribbon'];
  var KEYS = [
    ['B', 'Blackout on/off'], ['C', 'Clean now (clip plays clean)'], ['N', 'Next clip (glitch cut)'],
    ['V', 'Video deck on/off'], ['M', 'Mercury pool on/off'], ['P', 'Point field on/off'], ['F', 'Next point-field formula'],
    ['K', 'Fleck chains on/off'], ['G', 'Grain on/off'], ['D', 'Decals on/off'], ['T', 'Title on/off'],
    ['[ ]', 'Decal chaos down / up'], ['S', 'Sound on/off'], ['- =', 'BPM down / up'], [', .', 'Volume down / up'], ['0', 'Reset all layers']
  ];
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function handle(e, t) {
    if (!t || e.metaKey || e.ctrlKey || e.altKey) return false;
    var tag = (e.target && e.target.tagName) || '';
    if (/INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable)) return false;
    var k = e.key;
    var flip = function (key) { t.set(key, !t.get(key)); return true; };
    switch (k) {
      case 'b': case 'B': t.blackout(); return true;
      case 'c': case 'C': t.cleanNow(); return true;
      case 'n': case 'N': t.nextClip(); return true;
      case 'v': case 'V': return flip('video');
      case 'm': case 'M': return flip('mercury');
      case 'p': case 'P': return flip('field');
      case 'f': case 'F': { var i = FORMULAS.indexOf(String(t.get('formula'))); t.set('formula', FORMULAS[(i + 1) % FORMULAS.length]); return true; }
      case 'k': case 'K': return flip('flecks');
      case 'g': case 'G': return flip('grain');
      case 'd': case 'D': return flip('decals');
      case 't': case 'T': return flip('title');
      case '[': t.set('chaos', +clamp(t.get('chaos') - 0.1, 0, 1).toFixed(2)); return true;
      case ']': t.set('chaos', +clamp(t.get('chaos') + 0.1, 0, 1).toFixed(2)); return true;
      case 's': case 'S': t.toggleAudio(); return true;
      case '-': t.set('bpm', clamp(t.get('bpm') - 2, 40, 200)); return true;
      case '=': case '+': t.set('bpm', clamp(t.get('bpm') + 2, 40, 200)); return true;
      case ',': t.set('volume', +clamp(t.get('volume') - 0.05, 0, 1).toFixed(2)); return true;
      case '.': t.set('volume', +clamp(t.get('volume') + 0.05, 0, 1).toFixed(2)); return true;
      case '0': if (root.VX) { var d = {}; for (var q in root.VX.defaults) d[q] = root.VX.defaults[q]; t.set(d); } else if (t.reset) t.reset(); return true;
    }
    return false;
  }
  root.vxHandleKey = handle; root.vxKeyMap = KEYS; root.vxFormulaCycle = FORMULAS;
})(window);
