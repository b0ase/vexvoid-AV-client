/* CONTENT PACKS: the rules a pack must pass before it goes in the game (Pay to Develop, phase 1: missions). Pure rules
 * only (no DOM, no files, no network): a pack and the game's references in, a list of problems out. Node runs it over
 * game/content/packs (scripts/pack-validate.mjs, references from makePlan() and the starters); the app runs it for the
 * agent's pack tool (references from the running game: g.packs().refs); node tests it (scripts/test-packs.js).
 *
 *   VXPACKS.validate(pack, refs, { file })   { ok, errors: [...], warnings: [...], missions: [ids] }
 *   VXPACKS.LIMITS                           the caps (counts, text lengths, ranges)
 *
 * refs: { contacts: [id], missions: [id] (what is already in: starters, earlier packs), places: [{ id, x, y, z }],
 *         walls: [id], sketches: [{ id, kind }], setups: { toys: wall, crossed: wall }, bounds: { x0, x1, z0, z1 },
 *         blds: [{ id, x0, x1, z0, z1, y, h, open }] }   (open: a shell with an inside, the studio, the warehouse)
 *
 * The shape is the game's Mission (game/src/phone/missions.ts) exactly, plus the pack around it. A pack only adds:
 * ids are new and start with the pack's id; everything else (contacts, places, walls, sketches, missions in `after`)
 * is referred to by id and must exist. Text is short, plain and in the house voice: objectives in capitals, no links,
 * handles, cashtags, token talk or faces. A human still reviews every pack before it ships.
 */
(function (root) {
  'use strict';

  var LIMITS = {
    missions: 5, objectives: 6, lines: 6, hint: 3,
    title: 24, objective: 64, summary: 140, line: 160, credit: 32, id: 48, packId: 40,
    delay: [0, 60], r: [2, 30], dist: [4, 40], secs: [2, 30]
  };
  var TYPES = ['reach', 'paint', 'buff', 'photo', 'escape', 'hide'];
  var KINDS = ['tag', 'throw-up', 'piece'];
  var SETUPS = ['toys', 'crossed'];
  var PACK_KEYS = ['v', 'id', 'job', 'credit', 'missions'];
  // later phases (plan packs, new contacts): named so the message says so
  var LATER = ['contacts', 'blds', 'lows', 'props', 'lamps', 'heavens', 'places'];
  var MISSION_KEYS = ['id', 'title', 'from', 'summary', 'after', 'delay', 'setup', 'intro', 'objectives', 'done'];
  var MISSION_NEED = ['id', 'title', 'from', 'summary', 'after', 'delay', 'intro', 'objectives', 'done'];
  // which fields each objective type reads (text and hint always)
  var FIELDS = {
    reach: ['place', 'places', 'at', 'r'],
    paint: ['walls', 'kind', 'over', 'sketch'],
    buff: ['walls', 'over'],
    photo: ['walls', 'dist', 'painted'],
    escape: [],
    hide: ['secs']
  };
  // the house rules on words: no links, @handles, $TICKERS or token talk (the CEO ruling: nothing about $V3X, units or
  // returns in the game), no faces (VexVoid art never shows one), plain text only
  var BANNED = [
    [/https?:|www\.|\.com\b|\.io\b/i, 'no links'],
    [/(^|\s)@\w/, 'no @handles'],
    [/\$[A-Za-z]/, 'no $TICKERS'],
    [/\b(token|tokens|nft|nfts|crypto|bitcoin|bsv|v3x coin|shares?|dividends?|invest\w*|profit\w*|airdrop\w*)\b/i, 'no token or money talk'],
    [/\b(selfie|selfies|portrait|portraits|headshot|mugshot|face ?reveal)\b/i, 'no faces'],
    [/[<>]/, 'no markup'],
    [/[^\x20-\x7E]/, 'plain text only (letters, numbers, punctuation; no emoji)']
  ];

  var isObj = function (v) { return !!v && typeof v === 'object' && !Array.isArray(v); };
  var num = function (v) { return typeof v === 'number' && isFinite(v); };
  var has = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };

  function validate(pack, refs, opts) {
    opts = opts || {}; refs = refs || {};
    var errors = [], warnings = [], ids = [];
    var where = opts.file ? opts.file + ': ' : '';
    var bad = function (at, msg) { errors.push(where + (at ? at + ': ' : '') + msg); };
    var contacts = refs.contacts || [], places = refs.places || [], walls = refs.walls || [], sketches = refs.sketches || [];
    var known = (refs.missions || []).slice();
    var placeIds = places.map(function (p) { return p.id; });
    var text = function (at, s, max, opt) {
      opt = opt || {};
      if (typeof s !== 'string' || !s.trim()) return bad(at, 'missing text');
      if (s.length > max) bad(at, 'too long (' + s.length + ' characters, at most ' + max + ')');
      if (opt.upper && s !== s.toUpperCase()) bad(at, 'must be in capitals: "' + s + '"');
      BANNED.forEach(function (b) { if (b[0].test(s)) bad(at, b[1] + ': "' + s.slice(0, 80) + '"'); });
    };
    var lines = function (at, ls, min, max) {
      if (!Array.isArray(ls)) return bad(at, 'must be a list of [contact, text] lines');
      if (ls.length < min) bad(at, 'needs at least ' + min + ' line' + (min > 1 ? 's' : ''));
      if (ls.length > max) bad(at, 'at most ' + max + ' lines (has ' + ls.length + ')');
      ls.forEach(function (l, i) {
        var a = at + '[' + i + ']';
        if (!Array.isArray(l) || l.length !== 2) return bad(a, 'a line is [contact, text]');
        if (contacts.indexOf(l[0]) < 0) bad(a, 'unknown contact "' + l[0] + '" (contacts: ' + contacts.join(', ') + ')');
        text(a, l[1], LIMITS.line);
      });
    };
    var range = function (at, v, r, what) { if (!num(v) || v < r[0] || v > r[1]) bad(at, what + ' must be a number from ' + r[0] + ' to ' + r[1] + ' (got ' + JSON.stringify(v) + ')'); };
    var wallList = function (at, ws) {
      if (!Array.isArray(ws) || !ws.length) return bad(at, 'walls: a list of wall ids');
      ws.forEach(function (w) { if (walls.indexOf(w) < 0) bad(at, 'unknown wall "' + w + '"'); });
    };

    if (!isObj(pack)) { bad('', 'a pack is a JSON object'); return { ok: false, errors: errors, warnings: warnings, missions: ids }; }
    Object.keys(pack).forEach(function (k) {
      if (LATER.indexOf(k) >= 0) { if (Array.isArray(pack[k]) ? pack[k].length : isObj(pack[k]) ? Object.keys(pack[k]).length : pack[k] != null) bad(k, 'not in packs yet (a later phase): only missions for now'); }
      else if (PACK_KEYS.indexOf(k) < 0) bad(k, 'unknown field');
    });
    if (pack.v !== 1) bad('v', 'must be 1');
    var pid = pack.id;
    if (typeof pid !== 'string' || !/^p-[a-z0-9]+(-[a-z0-9]+)*$/.test(pid) || pid.length > LIMITS.packId) bad('id', 'a pack id is p-<job> in lower case, letters, numbers and dashes, at most ' + LIMITS.packId + ' (got ' + JSON.stringify(pid) + ')');
    if (opts.file && typeof pid === 'string' && opts.file.replace(/^.*\//, '') !== pid + '.json') bad('id', 'the file must be named ' + pid + '.json');
    if (pack.job != null && (typeof pack.job !== 'string' || !/^[a-z0-9-]{1,40}$/.test(pack.job))) bad('job', 'a job id: lower case letters, numbers and dashes');
    if (pack.credit != null) {
      if (!isObj(pack.credit)) bad('credit', '{ "name": "...", "show": true }');
      else {
        Object.keys(pack.credit).forEach(function (k) { if (k !== 'name' && k !== 'show') bad('credit.' + k, 'unknown field'); });
        text('credit.name', pack.credit.name, LIMITS.credit);
        if (typeof pack.credit.name === 'string' && !/^[A-Za-z0-9 ._'-]+$/.test(pack.credit.name)) bad('credit.name', 'letters, numbers, spaces and . _ \' - only');
        if (pack.credit.show != null && typeof pack.credit.show !== 'boolean') bad('credit.show', 'true or false');
      }
    }
    if (!Array.isArray(pack.missions) || !pack.missions.length) bad('missions', 'a pack adds at least one mission');
    else if (pack.missions.length > LIMITS.missions) bad('missions', 'at most ' + LIMITS.missions + ' missions in a pack (has ' + pack.missions.length + ')');

    (Array.isArray(pack.missions) ? pack.missions : []).forEach(function (m, mi) {
      var at = 'missions[' + mi + ']';
      if (!isObj(m)) return bad(at, 'a mission is an object');
      if (typeof m.id === 'string') at = m.id;
      Object.keys(m).forEach(function (k) {
        if (k === 'pack' || k === 'credit') bad(at + '.' + k, 'set by the loader, not in the pack (the credit goes on the pack)');
        else if (MISSION_KEYS.indexOf(k) < 0) bad(at + '.' + k, 'unknown field (a mission has ' + MISSION_KEYS.join(', ') + ')');
      });
      MISSION_NEED.forEach(function (k) { if (!has(m, k)) bad(at, 'missing ' + k); });
      if (typeof m.id !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.id) || m.id.length > LIMITS.id) bad(at, 'id: lower case letters, numbers and dashes, at most ' + LIMITS.id);
      else {
        if (typeof pid === 'string' && m.id.indexOf(pid + '-') !== 0) bad(at, 'id must start with the pack id: ' + pid + '-');
        if (known.indexOf(m.id) >= 0 || ids.indexOf(m.id) >= 0) bad(at, 'duplicate id (packs only add missions; this one is taken)');
      }
      if (has(m, 'title')) text(at + '.title', m.title, LIMITS.title, { upper: true });
      if (has(m, 'from') && contacts.indexOf(m.from) < 0) bad(at + '.from', 'unknown contact "' + m.from + '" (contacts: ' + contacts.join(', ') + ')');
      if (has(m, 'summary')) text(at + '.summary', m.summary, LIMITS.summary);
      if (has(m, 'after')) {
        if (!Array.isArray(m.after)) bad(at + '.after', 'a list of mission ids ([] comes after the last mission so far)');
        else m.after.forEach(function (a) {
          if (a === m.id) bad(at + '.after', 'a mission can not come after itself');
          else if (known.indexOf(a) < 0 && ids.indexOf(a) < 0) bad(at + '.after', 'unknown mission "' + a + '" (a starter, an earlier pack\'s, or earlier in this pack)');
        });
      }
      if (has(m, 'delay')) range(at + '.delay', m.delay, LIMITS.delay, 'delay (seconds)');
      if (m.setup != null && SETUPS.indexOf(m.setup) < 0) bad(at + '.setup', 'one of ' + SETUPS.join(', '));
      else if (m.setup != null && refs.setups) warnings.push(where + at + ': the ' + m.setup + ' setup paints ' + refs.setups[m.setup] + ' again when the mission starts');
      if (has(m, 'intro')) lines(at + '.intro', m.intro, 1, LIMITS.lines);
      if (has(m, 'done')) lines(at + '.done', m.done, 1, LIMITS.lines);
      if (has(m, 'objectives')) {
        if (!Array.isArray(m.objectives) || !m.objectives.length) bad(at + '.objectives', 'at least one objective');
        else if (m.objectives.length > LIMITS.objectives) bad(at + '.objectives', 'at most ' + LIMITS.objectives + ' (has ' + m.objectives.length + ')');
        (Array.isArray(m.objectives) ? m.objectives : []).forEach(function (o, oi) { objective(at + '.objectives[' + oi + ']', o, m); });
      }
      if (typeof m.id === 'string') ids.push(m.id);
    });

    function objective(at, o, m) {
      if (!isObj(o)) return bad(at, 'an objective is an object');
      if (TYPES.indexOf(o.type) < 0) return bad(at + '.type', 'one of ' + TYPES.join(', ') + ' (got ' + JSON.stringify(o.type) + ')');
      at += ' (' + o.type + ')';
      Object.keys(o).forEach(function (k) {
        if (k === 'type' || k === 'text' || k === 'hint') return;
        if (FIELDS[o.type].indexOf(k) < 0) bad(at + '.' + k, Object.keys(FIELDS).some(function (t) { return FIELDS[t].indexOf(k) >= 0; }) ? 'does nothing on a ' + o.type + ' objective' : 'unknown field');
      });
      text(at + '.text', o.text, LIMITS.objective, { upper: true });
      if (o.hint != null) lines(at + '.hint', o.hint, 1, LIMITS.hint);
      if (o.type === 'reach') {
        var n = (o.place != null ? 1 : 0) + (o.places != null ? 1 : 0) + (o.at != null ? 1 : 0);
        if (!n) bad(at, 'needs place, places or at');
        if (o.place != null && placeIds.indexOf(o.place) < 0) bad(at + '.place', 'unknown place "' + o.place + '" (places: ' + placeIds.join(', ') + ')');
        if (o.places != null) {
          if (!Array.isArray(o.places) || !o.places.length) bad(at + '.places', 'a list of place ids');
          else o.places.forEach(function (p) { if (placeIds.indexOf(p) < 0) bad(at + '.places', 'unknown place "' + p + '"'); });
        }
        if (o.at != null) point(at + '.at', o.at);
        if (o.r != null) range(at + '.r', o.r, LIMITS.r, 'r (metres)');
      }
      if (o.type === 'paint' || o.type === 'buff' || o.type === 'photo') wallList(at + '.walls', o.walls);
      if (o.type === 'paint') {
        if (o.sketch == null) warnings.push(where + at + ': no sketch named: the checks blast a starter ' + (o.kind || 'tag') + ' to prove it');
        if (o.kind != null && KINDS.indexOf(o.kind) < 0) bad(at + '.kind', 'one of ' + KINDS.join(', '));
        if (o.sketch != null) {
          var sk = sketches.filter(function (s) { return s.id === o.sketch; })[0];
          if (!sk) bad(at + '.sketch', 'unknown sketch "' + o.sketch + '" (a starter: ' + sketches.map(function (s) { return s.id; }).join(', ') + ')');
          else if (o.kind && sk.kind !== o.kind) bad(at + '.sketch', o.sketch + ' is a ' + sk.kind + ', the objective wants a ' + o.kind);
        }
      }
      if ((o.type === 'paint' || o.type === 'buff') && o.over != null) {
        if (typeof o.over !== 'boolean') bad(at + '.over', 'true or false');
        else if (o.over) {
          var sw = m.setup && refs.setups ? refs.setups[m.setup] : null;
          if (!sw) bad(at + '.over', 'over needs the mission to have a setup (' + SETUPS.join(', ') + ')');
          else if (Array.isArray(o.walls) && o.walls.indexOf(sw) < 0) bad(at + '.over', 'the ' + m.setup + ' setup is on ' + sw + ': over objectives must be on that wall');
        }
      }
      if (o.type === 'photo') {
        if (o.dist != null) range(at + '.dist', o.dist, LIMITS.dist, 'dist (metres)');
        if (o.painted != null && typeof o.painted !== 'boolean') bad(at + '.painted', 'true or false');
      }
      if (o.type === 'hide' && o.secs != null) range(at + '.secs', o.secs, LIMITS.secs, 'secs');
    }
    function point(at, p) {
      if (!Array.isArray(p) || p.length !== 3 || !p.every(num)) return bad(at, '[x, y, z] in metres');
      var B = refs.bounds;
      if (B && (p[0] < B.x0 || p[0] > B.x1 || p[2] < B.z0 || p[2] > B.z1)) return bad(at, 'outside the map (x ' + B.x0 + '..' + B.x1 + ', z ' + B.z0 + '..' + B.z1 + '): ' + JSON.stringify(p));
      if (p[1] < -4 || p[1] > 30) bad(at, 'y ' + p[1] + ' is not a level anyone stands on (-4..30)');
      (refs.blds || []).forEach(function (b) {
        if (b.open) return;   // a shell (the studio, the warehouse): it has an inside to stand in
        var top = (b.y || 0) + b.h;
        if (p[0] > b.x0 + 0.3 && p[0] < b.x1 - 0.3 && p[2] > b.z0 + 0.3 && p[2] < b.z1 - 0.3 && p[1] < top - 0.5) bad(at, 'inside building ' + b.id + ' (stand on its roof at y ' + top + ', or outside it)');
      });
    }

    return { ok: !errors.length, errors: errors, warnings: warnings, missions: ids };
  }

  var api = { validate: validate, LIMITS: LIMITS, TYPES: TYPES, KINDS: KINDS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.VXPACKS = api;
})(typeof window !== 'undefined' ? window : this);
