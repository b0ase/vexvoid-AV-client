// Checks the commissions rules (vx/jobs.js): quotes and prices, the status steps, the Grok allowance and the texts.
const assert = require('assert');
const J = require('../vx/jobs.js');
let n = 0;
function check(name, fn) { fn(); n++; console.log('ok', name); }
const S = () => J.settings(null);
const T0 = Date.UTC(2026, 10, 15, 12);
const mk = (f, s) => J.create(Object.assign({ customer: 'Ana', brief: 'Night drive, slow build.', tier: 'studio' }, f), s || S(), T0);

check('defaults: three tiers in dollars, prices not approved, house style on, paymail', () => {
  const s = S();
  assert.deepStrictEqual(s.tiers.map(t => [t.name, t.usd, t.grok, t.changes]), [['EDIT', 10, 0, 0], ['STUDIO', 100, 12, 1], ['DIRECTOR', 300, 24, 2]]);
  assert.strictEqual(s.pricesApproved, true); assert.strictEqual(J.settings({ v: 1, pricesApproved: false }).pricesApproved, true); assert.strictEqual(J.settings({ v: 2, pricesApproved: false }).pricesApproved, false); assert.strictEqual(s.houseStyleDefault, true); assert.strictEqual(s.payTo, 'vexvoid@bwalletx.com');
  assert.strictEqual(J.tierPrice(s.tiers[2]), '$300+'); assert.strictEqual(J.usd(12.5), '$12.50'); assert.strictEqual(J.usd(10), '$10');
});
check('saved settings are filled out, not replaced', () => {
  const s = J.settings({ payTo: 'x@y.com', tiers: [{ id: 'edit', name: 'EDIT', usd: 15, grok: 0, changes: 0, days: 2, includes: 'cut' }] });
  assert.strictEqual(s.payTo, 'x@y.com'); assert.strictEqual(s.tiers.length, 1); assert.strictEqual(s.tiers[0].usd, 15); assert.ok(s.terms.text.length > 50);
});
check('create needs a brief and a customer; tier by id or name', () => {
  assert.throws(() => mk({ brief: '' }), /brief/);
  assert.throws(() => mk({ customer: '', handle: '' }), /customer/);
  assert.throws(() => mk({ tier: 'gold' }), /no tier/);
  const j = mk({ tier: 'DIRECTOR' }); assert.strictEqual(j.tier, 'director'); assert.strictEqual(j.status, 'quote'); assert.strictEqual(j.quote.usd, 300);
  assert.strictEqual(j.houseStyle, true);
});
check('house style follows the settings default unless the job says', () => {
  const s = S(); s.houseStyleDefault = false;
  assert.strictEqual(mk({}, s).houseStyle, false); assert.strictEqual(mk({ houseStyle: true }, s).houseStyle, true);
});
check('price: tier price, a custom price, never below a from-tier floor, never zero', () => {
  assert.strictEqual(mk({ tier: 'edit' }).quote.label, '$10');
  const c = mk({ tier: 'studio', priceUsd: 80 }); assert.strictEqual(c.quote.usd, 80); assert.strictEqual(c.quote.custom, true);
  assert.strictEqual(mk({ tier: 'director', priceUsd: 450 }).quote.usd, 450);
  assert.throws(() => mk({ tier: 'director', priceUsd: 250 }), /starts at \$300/);
  assert.throws(() => mk({ priceUsd: 0 }), /positive/);
  assert.throws(() => mk({ priceUsd: 'abc' }), /positive/);
});
check('the happy path: quote -> awaiting payment -> paid -> in progress -> delivered', () => {
  const s = S(), j = mk({}, s);
  assert.deepStrictEqual(J.allowed(j), ['quote_given', 'mark_paid', 'cancel']);
  J.act(j, 'quote_given', s, {}, T0); assert.strictEqual(j.status, 'awaiting_payment');
  assert.throws(() => J.act(j, 'start', s), /not possible while the job is AWAITING PAYMENT/);
  J.act(j, 'mark_paid', s, { note: 'seen at the paymail' }, T0); assert.strictEqual(j.status, 'paid');
  assert.strictEqual(j.paidAt, new Date(T0).toISOString()); assert.strictEqual(j.due, '2026-11-22'); assert.ok(j.termsText.includes('TERMS'));
  J.act(j, 'start', s); assert.strictEqual(j.status, 'in_progress');
  assert.throws(() => J.act(j, 'deliver', s), /attach the finished video/);
  J.act(j, 'deliver', s, { files: ['/v/ana.mp4'] }); assert.strictEqual(j.status, 'delivered'); assert.deepStrictEqual(j.deliverables, ['/v/ana.mp4']);
  assert.deepStrictEqual(j.history.map(h => h.status), ['quote', 'awaiting_payment', 'paid', 'in_progress', 'delivered']);
  assert.strictEqual(j.history[2].note, 'seen at the paymail');
});
check('changes: only the rounds in the tier, then deliver again', () => {
  const s = S(), j = mk({ tier: 'studio' }, s);
  ['mark_paid', 'start'].forEach(a => J.act(j, a, s)); J.act(j, 'deliver', s, { files: ['/a.mp4'] });
  J.act(j, 'changes', s, { note: 'darker intro' }); assert.strictEqual(j.status, 'changes'); assert.strictEqual(J.changesLeft(j), 0);
  J.act(j, 'deliver', s, { files: ['/b.mp4'] }); assert.deepStrictEqual(j.deliverables, ['/a.mp4', '/b.mp4']);
  assert.throws(() => J.act(j, 'changes', s), /no rounds of changes left/);
  const e = mk({ tier: 'edit' }, s); ['mark_paid', 'start'].forEach(a => J.act(e, a, s)); J.act(e, 'deliver', s, { files: ['/e.mp4'] });
  assert.throws(() => J.act(e, 'changes', s), /no rounds/);
});
check('cancel before delivery only', () => {
  const s = S(), j = mk({}, s); J.act(j, 'cancel', s); assert.strictEqual(j.status, 'cancelled'); assert.deepStrictEqual(J.allowed(j), []);
  const d = mk({ tier: 'edit' }, s); ['mark_paid', 'start'].forEach(a => J.act(d, a, s)); J.act(d, 'deliver', s, { files: ['/x.mp4'] });
  assert.throws(() => J.act(d, 'cancel', s), /not possible/);
});
check('the deal is fixed once paid; later settings changes do not touch it', () => {
  const s = S(), j = mk({ tier: 'studio' }, s);
  J.update(j, { tier: 'director', priceUsd: 350 }, s); assert.strictEqual(j.quote.usd, 350);
  J.act(j, 'mark_paid', s);
  assert.throws(() => J.update(j, { priceUsd: 10 }, s), /fixed once paid/);
  J.update(j, { notes: 'call Thursday', track: '/t.wav' }, s); assert.strictEqual(j.notes, 'call Thursday');
  s.tiers[2].usd = 900; J.setTerms(s, 'new terms');
  J.update(j, { brief: 'Night drive, faster.' }, s); assert.strictEqual(j.quote.usd, 350); assert.strictEqual(j.termsVersion, 1);
});
check('terms: editing the text makes a new version; the same text does not', () => {
  const s = S(); assert.strictEqual(J.setTerms(s, s.terms.text), 1); assert.strictEqual(J.setTerms(s, 'v2'), 2); assert.strictEqual(J.setTerms(s, 'v2'), 2);
  assert.strictEqual(mk({}, s).termsVersion, 2);
});
check('grok allowance: videos count, images are logged, over is flagged', () => {
  const s = S(), j = mk({ tier: 'studio' }, s);
  for (let i = 0; i < 12; i++) J.recordGrok(j, 'video', 0.5);
  let r = J.recordGrok(j, 'image', 0.07); assert.deepStrictEqual([r.used, r.allowance, r.over], [12, 12, false]);
  r = J.recordGrok(j, 'video', 0.5); assert.strictEqual(r.over, true); assert.strictEqual(J.grokLeft(j), -1);
  assert.strictEqual(j.grok.usd, 6.57);
});
check('start brief carries tier, allowance, house style and the no-posting rule', () => {
  const s = S(), e = mk({ tier: 'edit', track: 'catalogue 4' }, s), d = mk({ tier: 'director', houseStyle: false }, s);
  const be = J.startBrief(e), bd = J.startBrief(d);
  assert.ok(be.includes('EDIT ($10)') && be.includes('do not call generate') && be.includes('House style is ON') && be.includes('catalogue 4'));
  assert.ok(bd.includes('up to 24 new Grok video clips') && bd.includes('House style is OFF') && bd.includes('Track: not given yet'));
  assert.ok(be.includes('commissions skill') && be.includes('Never post, list, send or charge'));
  assert.ok(J.context(d).includes('PAID COMMISSION') && J.context(d).includes('0 of 2 rounds'));
});
check('quote text: dollars first, paymail, terms version', () => {
  const s = S(), t = J.quoteText(mk({ tier: 'studio', handle: '@ana' }, s), s);
  assert.ok(t.includes('STUDIO: $100 (US dollars)') && t.includes('vexvoid@bwalletx.com (NPG Ltd)') && t.includes('Terms version 1'));
});
check('offer draft: bJobsX fields, every tier priced in dollars, draft marker until approved', () => {
  const s = S(); s.pricesApproved = false; const t = J.offerText(s);
  assert.ok(/^\[DRAFT: prices not approved/.test(t)); assert.ok(!J.offerText(S()).includes('[DRAFT'));
  ['TITLE: ', 'LOCATION: Remote', 'REMOTE: yes', 'SKILLS: ', 'BUDGET: from $10', 'DESCRIPTION:', '- EDIT $10:', '- STUDIO $100:', '- DIRECTOR $300+:', 'vexvoid@bwalletx.com', 'Terms (version 1)']
    .forEach(x => assert.ok(t.includes(x), 'missing ' + x));
  assert.ok(t.split('\n').find(l => l.startsWith('TITLE: ')).length - 7 <= 120);
  s.pricesApproved = true; assert.ok(!J.offerText(s).includes('[DRAFT'));
});
check('terms: decided, no faces whatever the brief, old draft moves to the next version', () => {
  const s = S();
  assert.ok(!s.terms.text.includes('[OWNER TO DECIDE') && s.terms.text.includes('never shows faces'));
  const off = mk({ tier: 'edit', houseStyle: false }, s); J.act(off, 'mark_paid', s);
  assert.ok(J.startBrief(off).includes('No faces still stands'));
  const old = J.settings({ terms: { version: 1, text: 'VEXVOID COMMISSION TERMS (DRAFT: NOT APPROVED BY THE OWNER)\n3. [OWNER TO DECIDE: x]' }, turnaround: 'x [OWNER TO DECIDE]' });
  assert.strictEqual(old.terms.version, 2); assert.ok(!old.turnaround.includes('OWNER'));
  const mine = J.settings({ terms: { version: 4, text: 'my own terms' } }); assert.strictEqual(mine.terms.version, 4);
});
console.log(n, 'checks passed');
