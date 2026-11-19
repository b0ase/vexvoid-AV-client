/* Video files made in the browser (Studio 2 on vexvoid.com/studio): frames drawn on one canvas, encoded with WebCodecs,
 * muxed to WebM (VP9 + Opus) or MP4 (H.264 + AAC, Opus if this browser has no AAC encoder). The muxers
 * (vx/lib/webm-muxer.js, vx/lib/mp4-muxer.js, MIT, ~70 KB each) load the first time an export starts, never on page load.
 * No ffmpeg.wasm: its core is ~32 MB of wasm (20.6 MB to download), GPL, and encodes H.264 on one CPU thread; WebCodecs
 * uses the browser's own (often hardware) encoders.
 *
 *   VXRENDER.check(format, w, h) -> Promise<{ ok, video, audio, why }>
 *   VXRENDER.encode({ format, width, height, fps, frames, draw, audio, bitrate, onProgress, signal })
 *       -> Promise<{ blob, mime, video, audio, frames, seconds, ms }>
 *     draw(k, t, ctx) -> Promise|void   paints frame k (time t = k / fps) on ctx (a 2D context of width x height)
 *     audio { chans: [L, R] Float32Array, rate }   laid under the picture from 0 (cut or padded to the picture's length)
 *   Frames are drawn one by one as fast as the page can seek its clips: not tied to the clock, so a render is exact and
 *   runs slower or faster than real time depending on the clips (it reports the ratio).
 */
(function (root) {
  'use strict';
  var here = (function () { var s = document.currentScript; return s ? s.src.replace(/vx\/render\.js.*$/, '') : './'; })();
  var loaded = {};
  function lib(name, global) {
    if (root[global]) return Promise.resolve(root[global]);
    return loaded[name] || (loaded[name] = new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = here + 'vx/lib/' + name + '.js';
      s.onload = function () { root[global] ? res(root[global]) : rej(new Error(name + ' did not load')); };
      s.onerror = function () { loaded[name] = null; rej(new Error(name + ' did not load')); };
      document.head.appendChild(s);
    }));
  }
  var VIDEO = { webm: ['vp09.00.40.08', 'vp8'], mp4: ['avc1.640028', 'avc1.4d0028', 'avc1.42e028'] };
  var AUDIO = { webm: ['opus'], mp4: ['mp4a.40.2', 'opus'] };
  function check(format, w, h, bitrate) {
    if (typeof root.VideoEncoder !== 'function') return Promise.resolve({ ok: false, why: 'this browser cannot encode video (no WebCodecs): use REC, or the desktop app' });
    var vids = VIDEO[format] || VIDEO.webm, auds = AUDIO[format] || AUDIO.webm, out = { ok: false };
    return vids.reduce(function (p, codec) {
      return p.then(function () { if (out.video) return; return VideoEncoder.isConfigSupported({ codec: codec, width: w, height: h, bitrate: bitrate || 8e6, framerate: 30 }).then(function (r) { if (r.supported) out.video = codec; }, function () {}); });
    }, Promise.resolve()).then(function () {
      if (typeof root.AudioEncoder !== 'function') return;
      return auds.reduce(function (p, codec) {
        return p.then(function () { if (out.audio) return; return AudioEncoder.isConfigSupported({ codec: codec, sampleRate: 48000, numberOfChannels: 2, bitrate: 192000 }).then(function (r) { if (r.supported) out.audio = codec; }, function () {}); });
      }, Promise.resolve());
    }).then(function () {
      out.ok = !!out.video; if (!out.ok) out.why = 'this browser cannot encode ' + (format === 'mp4' ? 'H.264' : 'VP9/VP8') + ' at ' + w + 'x' + h;
      return out;
    });
  }

  // a muxer target that keeps the file as Blob pieces (Chrome pages big blobs to disk), with the few writes back into the
  // header (sizes, cues, moov offsets) applied when it is finished
  function BlobSink() { this.parts = []; this.end = 0; }
  BlobSink.prototype.write = function (data, pos) {
    var copy = new Uint8Array(data); // the muxer reuses its buffers
    if (pos >= this.end) { if (pos > this.end) this.parts.push({ pos: this.end, blob: new Blob([new Uint8Array(pos - this.end)]) }); this.parts.push({ pos: pos, blob: new Blob([copy]) }); this.end = pos + copy.length; return; }
    // a patch inside what was written: split the pieces it covers
    var a = pos, b = pos + copy.length, next = [];
    this.parts.forEach(function (p) {
      var pe = p.pos + p.blob.size;
      if (pe <= a || p.pos >= b) return next.push(p);
      if (p.pos < a) next.push({ pos: p.pos, blob: p.blob.slice(0, a - p.pos) });
      if (pe > b) next.push({ pos: b, blob: p.blob.slice(b - p.pos) });
    });
    next.push({ pos: a, blob: new Blob([copy]) });
    next.sort(function (x, y) { return x.pos - y.pos; });
    this.parts = next; this.end = Math.max(this.end, b);
  };
  BlobSink.prototype.blob = function (type) { return new Blob(this.parts.map(function (p) { return p.blob; }), { type: type }); };

  function encode(o) {
    var fmt = o.format === 'mp4' ? 'mp4' : 'webm', W = o.width || 1920, H = o.height || 1080, fps = o.fps || 30, frames = Math.max(1, o.frames | 0);
    var bitrate = o.bitrate || (H >= 1080 ? 8e6 : 5e6), t0 = Date.now(), sink = new BlobSink();
    var hasAudio = !!(o.audio && o.audio.chans && o.audio.chans.length), rate = hasAudio ? o.audio.rate : 48000;
    var mime = fmt === 'mp4' ? 'video/mp4' : 'video/webm';
    return Promise.all([check(fmt, W, H, bitrate), lib(fmt === 'mp4' ? 'mp4-muxer' : 'webm-muxer', fmt === 'mp4' ? 'Mp4Muxer' : 'WebMMuxer')]).then(function (r) {
      var cap = r[0], M = r[1];
      if (!cap.ok) throw new Error(cap.why);
      if (hasAudio && !cap.audio) throw new Error('this browser cannot encode the sound for ' + fmt.toUpperCase());
      var vcodec = cap.video, acodec = hasAudio ? cap.audio : null;
      var target = new M.StreamTarget({ onData: function (d, p) { sink.write(d, p); }, chunked: true, chunkSize: 8 * 1024 * 1024 });
      var muxer = fmt === 'mp4'
        ? new M.Muxer({ target: target, fastStart: false, firstTimestampBehavior: 'offset', video: { codec: 'avc', width: W, height: H, frameRate: fps }, audio: acodec ? { codec: acodec === 'opus' ? 'opus' : 'aac', numberOfChannels: 2, sampleRate: rate } : undefined })
        : new M.Muxer({ target: target, firstTimestampBehavior: 'offset', video: { codec: vcodec === 'vp8' ? 'V_VP8' : 'V_VP9', width: W, height: H, frameRate: fps }, audio: acodec ? { codec: 'A_OPUS', numberOfChannels: 2, sampleRate: rate } : undefined });
      var failed = null, fail = function (e) { failed = failed || e; };
      var venc = new VideoEncoder({ output: function (c, m) { try { muxer.addVideoChunk(c, m); } catch (e) { fail(e); } }, error: fail });
      venc.configure(Object.assign({ codec: vcodec, width: W, height: H, bitrate: bitrate, framerate: fps, latencyMode: 'quality' }, /^avc/.test(vcodec) ? { avc: { format: 'avc' } } : {}));
      var aenc = null, aAt = 0, total = frames / fps, L = hasAudio ? o.audio.chans[0] : null, R = hasAudio ? (o.audio.chans[1] || o.audio.chans[0]) : null, aEnd = Math.round(total * rate);
      if (acodec) {
        aenc = new AudioEncoder({ output: function (c, m) { try { muxer.addAudioChunk(c, m); } catch (e) { fail(e); } }, error: fail });
        aenc.configure({ codec: acodec, sampleRate: rate, numberOfChannels: 2, bitrate: 192000 });
      }
      // the sound goes in step with the pictures, so the file interleaves the two
      function audioUntil(sec) {
        if (!aenc) return;
        var to = Math.min(aEnd, Math.round(sec * rate)), BL = Math.round(rate / 10);
        while (aAt < to) {
          var n = Math.min(BL, to - aAt), buf = new Float32Array(n * 2);
          for (var i = 0; i < n; i++) { var k = aAt + i; buf[i] = k < L.length ? L[k] : 0; buf[n + i] = k < R.length ? R[k] : 0; }
          var ad = new AudioData({ format: 'f32-planar', sampleRate: rate, numberOfFrames: n, numberOfChannels: 2, timestamp: Math.round(aAt / rate * 1e6), data: buf });
          aenc.encode(ad); ad.close(); aAt += n;
        }
      }
      var cv = typeof OffscreenCanvas === 'function' && !o.domCanvas ? new OffscreenCanvas(W, H) : Object.assign(document.createElement('canvas'), { width: W, height: H });
      var ctx = cv.getContext('2d', { alpha: false }), k = 0, kf = Math.round(fps * 2);
      function step() {
        if (failed) return Promise.reject(failed);
        if (o.signal && o.signal.aborted) return Promise.reject(new Error('stopped'));
        if (k >= frames) return Promise.resolve();
        var t = k / fps;
        return Promise.resolve(o.draw(k, t, ctx)).then(function () {
          var vf = new VideoFrame(cv, { timestamp: Math.round(k * 1e6 / fps), duration: Math.round(1e6 / fps) });
          venc.encode(vf, { keyFrame: k % kf === 0 }); vf.close();
          audioUntil((k + 1) / fps);
          k++;
          if (o.onProgress && (k % 5 === 0 || k === frames)) o.onProgress(k, frames, (Date.now() - t0) / 1000);
          // backpressure: let the encoder catch up
          return venc.encodeQueueSize > 6 ? new Promise(function (r) { (function wait() { venc.encodeQueueSize > 2 ? setTimeout(wait, 4) : r(); })(); }) : null;
        }).then(step);
      }
      return step().then(function () {
        audioUntil(total);
        return Promise.all([venc.flush(), aenc ? aenc.flush() : null]);
      }).then(function () {
        if (failed) throw failed;
        venc.close(); if (aenc) aenc.close();
        muxer.finalize();
        var blob = sink.blob(mime), ms = Date.now() - t0;
        return { blob: blob, mime: mime, video: vcodec, audio: acodec, frames: frames, seconds: total, ms: ms, speed: Math.round(total * 1000 / ms * 100) / 100, width: W, height: H };
      }, function (e) { try { venc.close(); } catch (x) {} try { if (aenc) aenc.close(); } catch (x) {} throw e; });
    });
  }

  root.VXRENDER = { check: check, encode: encode, lib: lib, BlobSink: BlobSink };
})(window);
