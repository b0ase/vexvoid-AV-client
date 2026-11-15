/* Commissions: paid music-video jobs VexVoid makes for other artists. Pure rules only (no DOM, no storage, no
 * network): the tier table, the quote, the status steps a job may take, and the texts built from them (the brief
 * VexVoid is handed, a quote for the customer, a bJobsX offer draft). controls.html keeps jobs in localStorage and
 * draws the JOBS tab; node tests this file (scripts/test-jobs.js).
 *
 * Nothing here takes money, posts or lists anything. Payment is marked by hand (mark_paid) once the owner sees it
 * arrive at the paymail. Prices, turnaround, rights and the house-style default are the owner's open decisions: they
 * live in the settings below as defaults, and pricesApproved stays false until the owner ticks it.
 *
 *   VXJOBS.defaults()                      fresh settings
 *   VXJOBS.settings(saved)                 saved settings filled out with defaults
 *   VXJOBS.create(fields, settings, now)   a new job in 'quote'
 *   VXJOBS.update(job, fields, settings)   change its details (price, tier and house style only before payment)
 *   VXJOBS.quote(job, settings)            { tier, name, usd, grok, changes, days, ... }
 *   VXJOBS.act(job, action, settings, opts, now)   one status step (quote_given, mark_paid, start, deliver, changes, cancel)
 *   VXJOBS.allowed(job, settings)          the steps open to it now
 *   VXJOBS.recordGrok(job, kind, usd)      count a Grok generation against the tier's allowance
 *   VXJOBS.startBrief / changesBrief / context / quoteText / offerText   texts
 */
(function (root) {
  'use strict';

  var STATUSES = ['quote', 'awaiting_payment', 'paid', 'in_progress', 'delivered', 'changes', 'cancelled'];
  var LABELS = { quote: 'QUOTE', awaiting_payment: 'AWAITING PAYMENT', paid: 'PAID', in_progress: 'IN PROGRESS', delivered: 'DELIVERED', changes: 'CHANGES', cancelled: 'CANCELLED' };
  // which status each step needs, and where it leads
  var STEPS = {
    quote_given: { from: ['quote'], to: 'awaiting_payment' },
    mark_paid: { from: ['quote', 'awaiting_payment'], to: 'paid' },
    start: { from: ['paid'], to: 'in_progress' },
    deliver: { from: ['in_progress', 'changes'], to: 'delivered' },
    changes: { from: ['delivered'], to: 'changes' },
    cancel: { from: ['quote', 'awaiting_payment', 'paid', 'in_progress', 'changes'], to: 'cancelled' }
  };
  // before payment the deal can still move; after it the quote is frozen
  var OPEN = ['quote', 'awaiting_payment'];

  var TERMS = 'VEXVOID COMMISSION TERMS (DRAFT: NOT APPROVED BY THE OWNER)\n' +
    '1. Price. In US dollars, paid in full before work starts, to the paymail on your quote (NPG Ltd).\n' +
    '2. Your track. You confirm you own it or have the right to have a video made for it.\n' +
    '3. The finished video. [OWNER TO DECIDE: you own it outright / NPG Ltd owns it and licenses it to you / shared.]\n' +
    '4. Catalogue footage. VexVoid catalogue clips used in your video stay NPG Ltd\'s and [OWNER TO DECIDE: may / may not] appear in other artists\' videos. New clips made for your video [OWNER TO DECIDE: are used in your video only / may be reused].\n' +
    '5. House style. VexVoid works in its house look (no faces, never retro, monochrome) unless your quote says your brief overrides it.\n' +
    '6. Changes. The rounds of changes in your tier are included; more are quoted separately.\n' +
    '7. Turnaround. Days on the quote count from payment and are estimates. [OWNER TO DECIDE]\n' +
    '8. Portfolio. VexVoid [OWNER TO DECIDE: may / may not] show the finished video in its own portfolio.';

  function defaults() {
    return {
      v: 1,
      payTo: 'vexvoid@bwalletx.com',
      payee: 'NPG Ltd',
      // the owner has not approved these prices yet (VexVoid suggested them, 15 Nov 2026)
      pricesApproved: false,
      houseStyleDefault: true,
      tiers: [
        { id: 'edit', name: 'EDIT', usd: 10, from: false, grok: 0, changes: 0, days: 3,
          includes: 'Your track cut from the VexVoid catalogue footage and shaders, one world, finished with idents. No new footage.' },
        { id: 'studio', name: 'STUDIO', usd: 100, from: false, grok: 12, changes: 1, days: 7,
          includes: 'Everything in EDIT, plus 8-12 new Grok clips made for your world, a title card and one round of changes.' },
        { id: 'director', name: 'DIRECTOR', usd: 300, from: true, grok: 24, changes: 2, days: 14,
          includes: 'A world built from scratch, 20+ new clips, a new GPU shader for your track, alternate cuts (square and teaser) and two rounds of changes.' }
      ],
      terms: { version: 1, text: TERMS },
      turnaround: 'Days per tier count from payment. Estimates, not promises. [OWNER TO DECIDE]'
    };
  }

  var clone = function (o) { return JSON.parse(JSON.stringify(o)); };
  function settings(saved) {
    var d = defaults(), s = saved && typeof saved === 'object' ? clone(saved) : {};
    Object.keys(d).forEach(function (k) { if (s[k] == null) s[k] = d[k]; });
    if (!Array.isArray(s.tiers) || !s.tiers.length) s.tiers = d.tiers;
    if (!s.terms || typeof s.terms.text !== 'string') s.terms = d.terms;
    return s;
  }
  // editing the terms text makes a new version, so a job always knows which terms it was sold under
  function setTerms(s, text) {
    text = String(text == null ? '' : text);
    if (text === s.terms.text) return s.terms.version;
    s.terms = { version: (Number(s.terms.version) || 0) + 1, text: text };
    return s.terms.version;
  }

  function tierOf(s, id) {
    var q = String(id || '').toLowerCase();
    var t = s.tiers.filter(function (x) { return x.id === q || x.name.toLowerCase() === q; })[0];
    if (!t) throw new Error('no tier ' + id + ' (tiers: ' + s.tiers.map(function (x) { return x.id; }).join(', ') + ')');
    return t;
  }
  function usd(n) { n = Number(n) || 0; return '$' + (Math.round(n * 100) % 100 ? n.toFixed(2) : String(Math.round(n))); }
  function tierPrice(t) { return usd(t.usd) + (t.from ? '+' : ''); }

  // the price of a job: the tier's price, or the job's own price when set. A "from" tier (DIRECTOR) never goes
  // below its floor; a fixed tier may be priced lower or higher by hand (a favour, a bigger job).
  function quote(job, s) {
    var t = tierOf(s, job.tier), p = job.priceUsd;
    var price = p == null || p === '' ? t.usd : Number(p);
    if (!isFinite(price) || price <= 0) throw new Error('price must be a positive number of dollars');
    if (t.from && price < t.usd) throw new Error(t.name + ' starts at ' + usd(t.usd));
    price = Math.round(price * 100) / 100;
    return { tier: t.id, name: t.name, usd: price, label: usd(price), custom: price !== t.usd, grok: Number(t.grok) || 0, changes: Number(t.changes) || 0,
      days: Number(t.days) || 0, includes: t.includes, houseStyle: job.houseStyle !== false, payTo: s.payTo, payee: s.payee, termsVersion: s.terms.version };
  }

  var str = function (v, n) { return String(v == null ? '' : v).trim().slice(0, n || 400); };
  function id(now) { return 'j' + (now || Date.now()).toString(36) + Math.random().toString(36).slice(2, 5); }

  function create(f, s, now) {
    f = f || {}; now = now || Date.now();
    var brief = str(f.brief, 6000);
    if (!brief) throw new Error('a job needs a brief');
    if (!str(f.customer) && !str(f.handle)) throw new Error('a job needs a customer name or handle');
    var job = { id: id(now), created: new Date(now).toISOString(), customer: str(f.customer, 120), handle: str(f.handle, 120), contact: str(f.contact, 300),
      track: str(f.track, 600), brief: brief, tier: tierOf(s, f.tier || 'edit').id, priceUsd: f.priceUsd == null || f.priceUsd === '' ? null : Number(f.priceUsd),
      houseStyle: f.houseStyle == null ? s.houseStyleDefault !== false : !!f.houseStyle, status: 'quote', termsVersion: s.terms.version,
      quote: null, paidAt: null, due: null, termsText: null, gigId: null, deliverables: [], changesUsed: 0, grok: { video: 0, image: 0, usd: 0 }, notes: str(f.notes, 4000),
      history: [{ at: new Date(now).toISOString(), status: 'quote' }] };
    job.quote = quote(job, s);
    return job;
  }

  function update(job, f, s) {
    f = f || {};
    var deal = ['tier', 'priceUsd', 'houseStyle'].filter(function (k) { return f[k] !== undefined; });
    if (deal.length && OPEN.indexOf(job.status) < 0) throw new Error('the deal is fixed once paid (' + deal.join(', ') + ' cannot change now)');
    var next = Object.assign({}, job);
    ['customer', 'handle', 'contact'].forEach(function (k) { if (f[k] !== undefined) next[k] = str(f[k], k === 'contact' ? 300 : 120); });
    if (f.track !== undefined) next.track = str(f.track, 600);
    if (f.brief !== undefined) { next.brief = str(f.brief, 6000); if (!next.brief) throw new Error('a job needs a brief'); }
    if (f.notes !== undefined) next.notes = str(f.notes, 4000);
    if (f.tier !== undefined) next.tier = tierOf(s, f.tier).id;
    if (f.priceUsd !== undefined) next.priceUsd = f.priceUsd == null || f.priceUsd === '' ? null : Number(f.priceUsd);
    if (f.houseStyle !== undefined) next.houseStyle = !!f.houseStyle;
    if (OPEN.indexOf(job.status) >= 0) { next.quote = quote(next, s); next.termsVersion = s.terms.version; }
    Object.assign(job, next);
    return job;
  }

  function changesLeft(job) { return Math.max(0, ((job.quote && job.quote.changes) || 0) - (job.changesUsed || 0)); }
  function grokLeft(job) { return ((job.quote && job.quote.grok) || 0) - ((job.grok && job.grok.video) || 0); }

  function check(job, action) {
    var st = STEPS[action];
    if (!st) return 'no step called ' + action;
    if (st.from.indexOf(job.status) < 0) return action.replace('_', ' ') + ' is not possible while the job is ' + LABELS[job.status];
    if (action === 'changes' && !changesLeft(job)) return 'no rounds of changes left in ' + job.quote.name + ' (quote more separately)';
    return '';
  }
  function allowed(job) { return Object.keys(STEPS).filter(function (a) { return !check(job, a); }); }

  function act(job, action, s, opts, now) {
    opts = opts || {}; now = now || Date.now();
    var why = check(job, action);
    if (why) throw new Error(why);
    var at = new Date(now).toISOString(), note = str(opts.note, 2000);
    if (action === 'mark_paid') {
      // the deal freezes here: price, allowance and the terms text as they stood
      job.quote = quote(job, s); job.paidAt = at; job.termsVersion = s.terms.version; job.termsText = s.terms.text;
      job.due = job.quote.days ? new Date(now + job.quote.days * 864e5).toISOString().slice(0, 10) : null;
    }
    if (action === 'deliver') {
      var files = (opts.files || []).map(function (f) { return str(f, 1000); }).filter(Boolean);
      files.forEach(function (f) { if (job.deliverables.indexOf(f) < 0) job.deliverables.push(f); });
      if (!job.deliverables.length) throw new Error('attach the finished video (an export path) before delivering');
    }
    if (action === 'changes') job.changesUsed = (job.changesUsed || 0) + 1;
    job.status = STEPS[action].to;
    job.history.push(note ? { at: at, status: job.status, note: note } : { at: at, status: job.status });
    return job;
  }

  // a Grok generation made for this job; video clips count against the tier's allowance, images are logged
  function recordGrok(job, kind, cost) {
    job.grok = job.grok || { video: 0, image: 0, usd: 0 };
    job.grok[kind === 'video' ? 'video' : 'image']++;
    job.grok.usd = Math.round((job.grok.usd + (Number(cost) || 0)) * 1000) / 1000;
    return { used: job.grok.video, allowance: (job.quote && job.quote.grok) || 0, over: grokLeft(job) < 0 };
  }

  function who(job) { return job.customer || job.handle || 'customer'; }
  function houseLine(job) {
    return job.houseStyle !== false
      ? 'House style is ON: the VexVoid house rules stand (no faces, never retro, monochrome) even where the brief asks otherwise. If the brief conflicts, say so in one line and keep the house look.'
      : 'House style is OFF: the customer\'s brief comes first, over the house look (colour, other styles). Load the styles skill and match their brief.';
  }
  function grokLine(q) {
    return q.grok ? 'Grok allowance: up to ' + q.grok + ' new Grok video clips for this job (stills to animate them are fine). Ask the fewest that do the job; each one still needs the person\'s approval.'
      : 'Grok allowance: none. This tier uses catalogue footage and shaders only: do not call generate.';
  }

  // the first message VexVoid gets when the job starts
  function startBrief(job) {
    var q = job.quote;
    return 'New paid commission: a music video for ' + who(job) + (job.handle && job.customer ? ' (' + job.handle + ')' : '') + '.\n' +
      'Tier: ' + q.name + ' (' + q.label + '). Included: ' + q.includes + '\n' +
      'Track: ' + (job.track || 'not given yet: ask for it') + '\n' +
      'Brief: ' + job.brief + '\n' +
      grokLine(q) + '\n' + houseLine(job) + '\n' +
      'Rounds of changes included: ' + q.changes + '.' + (job.due ? ' Due ' + job.due + '.' : '') + '\n' +
      'Load the commissions skill and the music-video skill, then make it. Export it in the EDIT tab and tell me the file when it is done. Never post, list, send or charge anything yourself.';
  }
  function changesBrief(job, note) {
    return 'Changes round ' + job.changesUsed + ' of ' + job.quote.changes + ' on ' + who(job) + '\'s ' + job.quote.name + ' video: ' + (str(note, 2000) || 'see the notes') +
      '\nThe last delivery: ' + (job.deliverables[job.deliverables.length - 1] || 'none') + '. Make the changes, export again and tell me the file. ' + grokLine(job.quote).replace('for this job', 'for this job in all') + ' Used so far: ' + ((job.grok && job.grok.video) || 0) + '.';
  }
  // standing context on every turn of a job's conversation
  function context(job) {
    var q = job.quote;
    return '\n\nThis conversation is a PAID COMMISSION (job ' + job.id + ', ' + LABELS[job.status] + '): ' + q.name + ' ' + q.label + ' for ' + who(job) + '.\n- ' +
      grokLine(q) + ' Used so far: ' + ((job.grok && job.grok.video) || 0) + ' video, ' + ((job.grok && job.grok.image) || 0) + ' image.\n- ' + houseLine(job) +
      '\n- Changes: ' + (job.changesUsed || 0) + ' of ' + q.changes + ' rounds used.\n- You never list, charge, send or post anything for a job; the person does that by hand.';
  }

  // a quote the owner can copy to the customer (nothing is sent from here)
  function quoteText(job, s) {
    var q = job.quote;
    return 'VEXVOID MUSIC VIDEO: QUOTE ' + job.id.toUpperCase() + '\n' +
      'For: ' + who(job) + (job.handle && job.customer ? ' (' + job.handle + ')' : '') + '\n' +
      'Track: ' + (job.track || 'to be sent') + '\n' +
      q.name + ': ' + q.label + ' (US dollars)\n' + q.includes + '\n' +
      'House style: ' + (q.houseStyle ? 'VexVoid house look' : 'your brief comes first') + '\n' +
      'Rounds of changes: ' + q.changes + (q.days ? '\nTurnaround: about ' + q.days + ' days from payment' : '') + '\n' +
      'Pay ' + q.label + ' to ' + q.payTo + ' (' + q.payee + '). Work starts when payment arrives.\n' +
      'Terms version ' + q.termsVersion + ':\n' + s.terms.text;
  }

  // a draft for a bJobsX listing (title, description, location, remote, skills, budget), to copy by hand.
  // bJobsX's budget field is in pounds (budget_gbp); the draft leaves it for the owner and gives the dollar prices.
  function offerText(s) {
    var tiers = s.tiers.map(function (t) {
      return '- ' + t.name + ' ' + tierPrice(t) + ': ' + t.includes + (t.days ? ' About ' + t.days + ' days.' : '');
    }).join('\n');
    var floor = Math.min.apply(null, s.tiers.map(function (t) { return t.usd; }));
    return (s.pricesApproved ? '' : '[DRAFT: prices not approved by the owner yet. Delete this line once they are.]\n') +
      'TITLE: VexVoid music videos: your track, cut in the VexVoid look\n' +
      'LOCATION: Remote\nREMOTE: yes\n' +
      'SKILLS: music video, video editing, VJ, motion graphics, GPU shaders, AI video\n' +
      'BUDGET: from ' + usd(floor) + ' (US dollars; bJobsX\'s budget field is in GBP, set it or leave it empty)\n' +
      'DESCRIPTION:\n' +
      'VexVoid makes music videos: night city, monochrome, hard light, cut on your track\'s bars. Send the track and a line about it; VexVoid builds one world for it and cuts the video.\n\n' +
      tiers + '\n\n' +
      'Prices in US dollars, paid up front to ' + s.payTo + ' (' + s.payee + '). ' + s.turnaround + '\n' +
      (s.houseStyleDefault !== false ? 'The house look is the product: no faces, never retro, monochrome.' : 'Your brief comes first; the house look is the default.') + '\n\n' +
      'Terms (version ' + s.terms.version + '):\n' + s.terms.text;
  }

  function summary(job) {
    var q = job.quote;
    return job.id + '  ' + who(job) + '  ' + q.name + ' ' + q.label + '  ' + LABELS[job.status] + (job.due ? '  due ' + job.due : '') +
      (q.grok ? '  grok ' + ((job.grok && job.grok.video) || 0) + '/' + q.grok : '') + (job.deliverables.length ? '  ' + job.deliverables.length + ' file(s)' : '');
  }

  root.VXJOBS = { STATUSES: STATUSES, LABELS: LABELS, STEPS: STEPS, defaults: defaults, settings: settings, setTerms: setTerms, tierOf: tierOf, usd: usd, tierPrice: tierPrice,
    quote: quote, create: create, update: update, act: act, allowed: allowed, check: check, changesLeft: changesLeft, grokLeft: grokLeft, recordGrok: recordGrok,
    startBrief: startBrief, changesBrief: changesBrief, context: context, quoteText: quoteText, offerText: offerText, summary: summary };
  if (typeof module !== 'undefined') module.exports = root.VXJOBS;
})(typeof window !== 'undefined' ? window : this);
