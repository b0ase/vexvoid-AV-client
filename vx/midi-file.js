/* Standard MIDI files (.mid, format 0 or 1) as mixer programs: the file's channel messages are played in time through
 * the same handler as a hardware controller, so whatever MIDI LEARN maps (crossfader, sketches, knobs, blackout…)
 * runs the set. Meta events only set the tempo; sysex is skipped.
 *
 *   VXMIDIFILE.parse(bytes) -> { events:[{ t: ms, data:[status, d1, d2] }], ms, tracks, format }
 *   VXMIDIFILE.play(parsed, send(data), onEnd) -> { stop() }
 */
(function (root) {
  'use strict';

  function parse(bytes) {
    var b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes), p = 0;
    function u32() { var v = (b[p] << 24 | b[p + 1] << 16 | b[p + 2] << 8 | b[p + 3]) >>> 0; p += 4; return v; }
    function u16() { var v = b[p] << 8 | b[p + 1]; p += 2; return v; }
    function tag() { var s = String.fromCharCode(b[p], b[p + 1], b[p + 2], b[p + 3]); p += 4; return s; }
    function vlq() { var v = 0, c; do { if (p >= b.length) throw new Error('MIDI file is cut short'); c = b[p++]; v = (v << 7) | (c & 0x7f); } while (c & 0x80); return v; }

    if (b.length < 14 || tag() !== 'MThd') throw new Error('not a MIDI file');
    var hlen = u32(), format = u16(), ntracks = u16(), division = u16();
    p = 8 + hlen;
    if (division & 0x8000) throw new Error('SMPTE-timed MIDI files are not supported');

    var raw = [], tempos = [{ tick: 0, us: 500000 }]; // 120 BPM until told otherwise
    for (var tr = 0; tr < ntracks && p < b.length; tr++) {
      if (tag() !== 'MTrk') throw new Error('bad MIDI track ' + tr);
      var end = p + u32(); end = Math.min(end, b.length);
      var tick = 0, running = 0;
      while (p < end) {
        tick += vlq();
        var st = b[p];
        if (st === 0xff) { // meta
          p++; var type = b[p++], len = vlq();
          if (type === 0x51 && len === 3) tempos.push({ tick: tick, us: b[p] << 16 | b[p + 1] << 8 | b[p + 2] });
          p += len; if (type === 0x2f) break;
        } else if (st === 0xf0 || st === 0xf7) { p++; p += vlq(); } // sysex
        else {
          if (st & 0x80) { running = st; p++; } else st = running; // running status
          if (!running) throw new Error('bad MIDI data');
          var hi = st & 0xf0, d1 = b[p++], d2 = (hi === 0xc0 || hi === 0xd0) ? 0 : b[p++];
          raw.push({ tick: tick, order: raw.length, data: [st, d1, d2] });
        }
      }
      p = end;
    }
    // ticks -> ms through the tempo map (tempo changes from any track apply to all, as in format 1)
    tempos.sort(function (x, y) { return x.tick - y.tick; });
    function ms(t) {
      var out = 0, last = 0, us = 500000;
      for (var i = 0; i < tempos.length && tempos[i].tick <= t; i++) { out += (tempos[i].tick - last) * us / division; last = tempos[i].tick; us = tempos[i].us; }
      return (out + (t - last) * us / division) / 1000;
    }
    raw.sort(function (x, y) { return x.tick - y.tick || x.order - y.order; });
    var events = raw.map(function (e) { return { t: ms(e.tick), data: e.data }; });
    return { events: events, ms: events.length ? events[events.length - 1].t : 0, tracks: ntracks, format: format };
  }

  function play(parsed, send, onEnd) {
    var start = performance.now(), i = 0, stopped = false, timer = null;
    function tick() {
      if (stopped) return;
      var now = performance.now() - start;
      while (i < parsed.events.length && parsed.events[i].t <= now) { try { send(parsed.events[i].data); } catch (e) {} i++; }
      if (i >= parsed.events.length) { stopped = true; if (onEnd) onEnd(); return; }
      timer = setTimeout(tick, Math.max(1, Math.min(20, parsed.events[i].t - now)));
    }
    tick();
    return { stop: function () { stopped = true; clearTimeout(timer); }, position: function () { return performance.now() - start; } };
  }

  root.VXMIDIFILE = { parse: parse, play: play };
})(typeof window !== 'undefined' ? window : this);
