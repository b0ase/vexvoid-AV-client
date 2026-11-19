/* REC on the web (Studio 2 on vexvoid.com/studio): the output window recorded without a screen-share prompt. Each frame,
 * everything the output shows (the VX engine's canvases and clips, layer videos, images, PATTERNS and TITLES canvases, SVG
 * decals, lettering) is drawn onto one canvas in paint order, with its opacity, blend mode, CSS filter, object-fit and
 * on-screen box (moves and scales), then recorded with MediaRecorder together with the music. The desktop app records
 * the real window instead. What the copy cannot see: CSS pseudo-elements (the vignette over the mercury, the scan lines),
 * clip-path slices on the engine's glitch frames, and rotations; SVG decals refresh a few times a second.
 *
 *   var r = VXCAP.start(win, { width, height, fps, audio: [MediaStreamTrack], bitrate })
 *   r.stop() -> Promise<{ blob, mime, seconds, frames }>      VXCAP.compose(win, ctx, w, h) draws one frame
 */
(function (root) {
  'use strict';
  var BLEND = { normal: 'source-over', 'plus-lighter': 'lighter' };
  var svgCache = new WeakMap();
  function own(el) { var t = ''; for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3) t += n.nodeValue; return t.replace(/\s+/g, ' ').trim(); }
  // what to draw, in paint order: [{ el, kind, op, blend, filter, key, i }]
  // a picture from another host is drawable only if it came with CORS (or the canvas could no longer be recorded)
  var skipped = new Set();
  function clean(el) {
    var u = el.currentSrc || el.src || ''; if (!/^https?:/i.test(u)) return true;
    try { if (new URL(u).origin === el.ownerDocument.defaultView.location.origin) return true; } catch (e) { return false; }
    return el.crossOrigin === 'anonymous' || el.crossOrigin === 'use-credentials';
  }
  function collect(doc) {
    var win = doc.defaultView, out = [], i = 0;
    (function walk(el, op, blend, filter, key) {
      var cs = win.getComputedStyle(el);
      if (cs.display === 'none') return;
      op *= +cs.opacity; if (op < 0.004) return;
      if (cs.mixBlendMode && cs.mixBlendMode !== 'normal') blend = cs.mixBlendMode;
      if (cs.filter && cs.filter !== 'none') filter = cs.filter + (filter ? ' ' + filter : '');
      if (cs.position !== 'static' && cs.zIndex !== 'auto') key = key.concat(+cs.zIndex || 0);
      var tag = el.tagName, vis = cs.visibility !== 'hidden';
      if ((tag === 'IMG' || tag === 'VIDEO') && !clean(el)) { skipped.add(el); vis = false; } // would taint the recording
      if (vis && (tag === 'IMG' || tag === 'VIDEO' || tag === 'CANVAS')) out.push({ el: el, kind: tag, op: op, blend: blend, filter: filter, key: key, i: i++, cs: cs });
      else if (vis && tag === 'svg') { out.push({ el: el, kind: 'SVG', op: op, blend: blend, filter: filter, key: key, i: i++, cs: cs }); return; }
      else if (vis && own(el) && !/^(SCRIPT|STYLE|BUTTON|OPTION)$/.test(tag)) out.push({ el: el, kind: 'TEXT', op: op, blend: blend, filter: filter, key: key, i: i++, cs: cs });
      for (var c = el.firstElementChild; c; c = c.nextElementSibling) walk(c, op, blend, filter, key);
    })(doc.body, 1, null, '', []);
    return out.sort(function (a, b) {
      for (var k = 0; k < Math.max(a.key.length, b.key.length); k++) { var x = a.key[k] || 0, y = b.key[k] || 0; if (x !== y) return x - y; }
      return a.i - b.i;
    });
  }
  // the box the picture fills inside its element (object-fit / object-position)
  function fit(cs, r, iw, ih) {
    var f = cs.objectFit || 'fill'; if (!iw || !ih || f === 'fill') return [r.left, r.top, r.width, r.height];
    var s = f === 'cover' ? Math.max(r.width / iw, r.height / ih) : f === 'contain' ? Math.min(r.width / iw, r.height / ih) : f === 'scale-down' ? Math.min(1, r.width / iw, r.height / ih) : 1;
    var w = iw * s, h = ih * s, p = (cs.objectPosition || '50% 50%').split(' ');
    var px = /%$/.test(p[0]) ? parseFloat(p[0]) / 100 : 0.5, py = /%$/.test(p[1] || '') ? parseFloat(p[1]) / 100 : 0.5;
    return [r.left + (r.width - w) * px, r.top + (r.height - h) * py, w, h];
  }
  function svgImage(el) {
    var c = svgCache.get(el), now = Date.now();
    if (c && (c.busy || now - c.at < 300)) return c.img;
    c = c || { img: null }; c.busy = true; c.at = now; svgCache.set(el, c);
    try {
      var r = el.getBoundingClientRect(), x = el.cloneNode(true);
      x.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); if (!x.getAttribute('width')) x.setAttribute('width', Math.round(r.width)); if (!x.getAttribute('height')) x.setAttribute('height', Math.round(r.height));
      var url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(x)], { type: 'image/svg+xml' })), im = new Image();
      im.onload = function () { c.img = im; c.busy = false; URL.revokeObjectURL(url); };
      im.onerror = function () { c.busy = false; URL.revokeObjectURL(url); };
      im.src = url;
    } catch (e) { c.busy = false; }
    return c.img;
  }
  function compose(win, ctx, W, H) {
    var doc = win.document, vw = win.innerWidth || W, vh = win.innerHeight || H, sx = W / vw, sy = H / vh;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.filter = 'none';
    ctx.fillStyle = win.getComputedStyle(doc.body).backgroundColor || '#000'; if (/rgba\(0, 0, 0, 0\)|transparent/.test(ctx.fillStyle)) ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.setTransform(sx, 0, 0, sy, 0, 0);
    var list = collect(doc), n = 0;
    list.forEach(function (d) {
      var el = d.el, r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1 || r.right < 0 || r.bottom < 0 || r.left > vw || r.top > vh) return;
      ctx.save();
      ctx.globalAlpha = Math.min(1, d.op); ctx.globalCompositeOperation = BLEND[d.blend] || d.blend || 'source-over'; ctx.filter = d.filter || 'none';
      try {
        if (d.kind === 'VIDEO') { if (el.readyState >= 2 && el.videoWidth) { var b = fit(d.cs, r, el.videoWidth, el.videoHeight); ctx.beginPath(); ctx.rect(r.left, r.top, r.width, r.height); ctx.clip(); ctx.drawImage(el, b[0], b[1], b[2], b[3]); n++; } }
        else if (d.kind === 'IMG') { if (el.complete && el.naturalWidth) { var b2 = fit(d.cs, r, el.naturalWidth, el.naturalHeight); ctx.beginPath(); ctx.rect(r.left, r.top, r.width, r.height); ctx.clip(); ctx.drawImage(el, b2[0], b2[1], b2[2], b2[3]); n++; } }
        else if (d.kind === 'CANVAS') { if (el.width && el.height) { ctx.drawImage(el, r.left, r.top, r.width, r.height); n++; } }
        else if (d.kind === 'SVG') { var im = svgImage(el); if (im) { ctx.drawImage(im, r.left, r.top, r.width, r.height); n++; } }
        else if (d.kind === 'TEXT') {
          var cs = d.cs, rg = doc.createRange(); rg.selectNodeContents(el); var tr = rg.getBoundingClientRect(), text = own(el);
          if (cs.textTransform === 'uppercase') text = text.toUpperCase();
          ctx.font = [cs.fontStyle, cs.fontWeight, cs.fontSize, cs.fontFamily].join(' ');
          if ('letterSpacing' in ctx) ctx.letterSpacing = cs.letterSpacing === 'normal' ? '0px' : cs.letterSpacing;
          ctx.textBaseline = 'middle';
          var sw = parseFloat(cs.webkitTextStrokeWidth) || 0, col = cs.color;
          if (!/rgba\(.*, 0\)$/.test(col)) { ctx.fillStyle = col; ctx.fillText(text, tr.left, tr.top + tr.height / 2); }
          if (sw > 0) { ctx.lineWidth = sw; ctx.strokeStyle = cs.webkitTextStrokeColor || col; ctx.strokeText(text, tr.left, tr.top + tr.height / 2); }
          n++;
        }
      } catch (e) { /* a source that cannot be drawn this frame */ }
      ctx.restore();
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return n;
  }
  function start(win, o) {
    o = o || {};
    var W = o.width || 1920, H = o.height || 1080, fps = o.fps || 30, doc = win.document;
    var cv = doc.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d', { alpha: false }), frames = 0, live = true, t0 = Date.now(), last = 0;
    compose(win, ctx, W, H);
    var vt = cv.captureStream(fps).getVideoTracks()[0], tracks = [vt].concat(o.audio || []);
    var mime = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find(function (m) { return root.MediaRecorder.isTypeSupported(m); });
    var mr = new root.MediaRecorder(new root.MediaStream(tracks), { mimeType: mime, videoBitsPerSecond: o.bitrate || 8e6, audioBitsPerSecond: 192e3 }), chunks = [];
    mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
    var stopped = new Promise(function (res) { mr.onstop = res; });
    // drawn on the output's own frames (its requestAnimationFrame), at most fps a second; a timer keeps it going when the
    // output window is in the background
    function tick() {
      if (!live) return;
      var now = performance.now();
      if (now - last >= 1000 / fps - 2) { last = now; compose(win, ctx, W, H); frames++; }
      win.requestAnimationFrame(tick);
    }
    win.requestAnimationFrame(tick);
    var guard = setInterval(function () { if (live && performance.now() - last > 250) { last = performance.now(); compose(win, ctx, W, H); frames++; } }, 100);
    mr.start(1000);
    return {
      mime: mime, canvas: cv, frames: function () { return frames; },
      stop: function () {
        live = false; clearInterval(guard);
        if (mr.state !== 'inactive') mr.stop();
        return stopped.then(function () { vt.stop(); return { blob: new Blob(chunks, { type: 'video/webm' }), mime: mime, seconds: (Date.now() - t0) / 1000, frames: frames }; });
      }
    };
  }
  root.VXCAP = { start: start, compose: compose, collect: collect, skipped: function () { return skipped.size; } };
})(window);
