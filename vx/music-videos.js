/* The V3XV0ID music-video teasers on YouTube (@V3xv0id), shown in the MUSIC tab's VIDEOS shelf. The same list as
 * vexvoid.com/music (the website's src/app/lib/musicVideos.ts): change both together. Art is faceless record art
 * from the catalogue images, shown black and white.
 *
 *   VXVIDEOS.list                       [{ id, title, kind: 'teaser' | 'full', art }]
 *   VXVIDEOS.find(n | words) -> video   by index or title words
 *   VXVIDEOS.embedUrl(id)               the youtube-nocookie player, autoplaying (loaded only on a click)
 *   VXVIDEOS.watchUrl(id)               the youtu.be page, for the browser
 *   VXVIDEOS.withReferer(details)       main process: request headers for a youtube-nocookie request
 *
 * Why withReferer: the controls window is a file:// page, so its iframes send no Referer, and YouTube refuses an
 * embed without one ("Error 153, video player configuration error"). main.js adds this site's address as the Referer
 * on requests to youtube-nocookie.com that carry none. With it the embed plays inside the tab (checked headless in
 * Electron 36, 21 Nov 2026: a plain file:// iframe shows Error 153; the same iframe with the Referer plays). The web
 * studio is a real https page and needs nothing. YOUTUBE opens youtu.be in the browser, if all else fails.
 */
(function (root) {
  'use strict';
  var IMG = 'https://www.vexvoid.com/images/VexVoid_Jam/';
  var list = [
    { id: 'xUGDRq5l4FQ', title: 'Four Ton Shadow', kind: 'teaser', art: IMG + 'jam-08.jpg' },
    { id: 'RanrtZji4QU', title: 'Echoes in the Dust', kind: 'teaser', art: IMG + 'jam-22.jpg' },
    { id: 'NJdCFoTs2e0', title: 'Shadow Steps', kind: 'teaser', art: IMG + 'jam-07.jpg' }
  ];
  var EMBED_HOST = 'www.youtube-nocookie.com';
  var REFERER = 'https://www.vexvoid.com/';

  function embedUrl(id) { return 'https://' + EMBED_HOST + '/embed/' + id + '?autoplay=1&rel=0'; }
  function watchUrl(id) { return 'https://youtu.be/' + id; }
  function find(q) {
    if (q == null || q === '') return null;
    var n = Number(q);
    if (Number.isInteger(n)) return list[n] || null;
    var w = String(q).toLowerCase();
    return list.find(function (v) { return v.id === q || v.title.toLowerCase().indexOf(w) >= 0; }) || null;
  }
  /** Main process (session.webRequest.onBeforeSendHeaders): the headers to send, with a Referer added to a
   *  youtube-nocookie request that has none. Anything else passes through untouched. */
  function withReferer(details) {
    var h = details.requestHeaders;
    var host = ''; try { host = new URL(details.url).hostname; } catch (e) { return h; }
    if (host !== EMBED_HOST) return h;
    if (!Object.keys(h).some(function (k) { return k.toLowerCase() === 'referer'; })) h.Referer = REFERER;
    return h;
  }

  var api = { list: list, find: find, embedUrl: embedUrl, watchUrl: watchUrl, withReferer: withReferer, EMBED_HOST: EMBED_HOST, EMBED_URLS: ['https://' + EMBED_HOST + '/*'] };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.VXVIDEOS = api;
})(typeof window !== 'undefined' ? window : this);
