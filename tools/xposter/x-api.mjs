// X API v2 for the autopilot: OAuth 1.0a user context (the @v3xvoid app's four keys), one picture upload, one post.
// Ported from VexVoid/vexvoid-xpost scripts/x/post.mjs (Node built-ins only). Keys are passed in, never logged; an error
// carries the status and X's error body, never a header.
import crypto from 'node:crypto'

export const X_BASE = 'https://api.x.com'
const enc = (s) => encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase())

/** The OAuth 1.0a header. JSON and multipart bodies are not signed; only the oauth_* params (and none in the URL). */
export function authHeader(method, url, k, nonce = crypto.randomBytes(16).toString('hex'), ts = String(Math.floor(Date.now() / 1000))) {
  const o = { oauth_consumer_key: k.apiKey, oauth_nonce: nonce, oauth_signature_method: 'HMAC-SHA1', oauth_timestamp: ts, oauth_token: k.accessToken, oauth_version: '1.0' }
  const params = Object.keys(o).sort().map((x) => `${enc(x)}=${enc(o[x])}`).join('&')
  const base = [method, enc(url), enc(params)].join('&')
  o.oauth_signature = crypto.createHmac('sha1', `${enc(k.apiSecret)}&${enc(k.accessSecret)}`).update(base).digest('base64')
  return 'OAuth ' + Object.keys(o).sort().map((x) => `${enc(x)}="${enc(o[x])}"`).join(', ')
}
/** Check a header made by authHeader (the tests' fake X server uses it). */
export function verifyHeader(method, url, header, k) {
  const o = {}; for (const m of String(header).replace(/^OAuth /, '').matchAll(/([a-z_]+)="([^"]*)"/g)) o[m[1]] = decodeURIComponent(m[2])
  return !!o.oauth_signature && authHeader(method, url, k, o.oauth_nonce, o.oauth_timestamp) === header
}

export function xClient(keys, { base = X_BASE, timeoutMs = 60e3 } = {}) {
  async function call(method, path, body, headers = {}) {
    const url = base + path
    let r
    try { r = await fetch(url, { method, body, headers: { Authorization: authHeader(method, url, keys), ...headers }, signal: AbortSignal.timeout(timeoutMs) }) }
    catch (e) { const err = new Error(`${method} ${path}: no answer (${e.name === 'TimeoutError' ? 'timed out' : e.code || e.message})`); err.noAnswer = true; throw err }
    const j = await r.json().catch(() => ({}))
    if (!r.ok) {
      const why = r.status === 402 ? ' (out of credits: top up at console.x.com)' : r.status === 401 ? ' (the X keys were refused)' : r.status === 429 ? ' (rate limited)' : ''
      const err = new Error(`${method} ${path} -> ${r.status}${why} ${JSON.stringify(j.errors ?? j.detail ?? j.title ?? j).slice(0, 300)}`); err.status = r.status; throw err
    }
    return j
  }
  return {
    /** Upload one picture (bytes) with its alt text; returns the media id. */
    async upload(bytes, filename, alt) {
      const form = new FormData()
      form.append('media', new Blob([bytes]), filename)
      form.append('media_category', 'tweet_image')
      const up = await call('POST', '/2/media/upload', form)
      const id = up.data && up.data.id
      if (!id) throw new Error('media upload returned no id')
      if (alt) await call('POST', '/2/media/metadata', JSON.stringify({ id, metadata: { alt_text: { text: String(alt).slice(0, 1000) } } }), { 'Content-Type': 'application/json' })
      return id
    },
    /** Post; returns the tweet id. */
    async post(text, mediaId) {
      const res = await call('POST', '/2/tweets', JSON.stringify({ text, ...(mediaId ? { media: { media_ids: [mediaId] } } : {}) }), { 'Content-Type': 'application/json' })
      const id = res.data && res.data.id
      if (!id) throw new Error('the post returned no id')
      return id
    },
  }
}
