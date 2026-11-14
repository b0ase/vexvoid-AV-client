/* The mixer's AI agent: a Claude tool-use loop (Messages API) that plays the mixer for the performer.
 * The page supplies the tools and runs them; this file only talks to the API and keeps the conversation.
 *
 *   const a = VXAGENT.create({ key, system, tools, run(name, input) -> Promise<content>, onEvent(e) })
 *   await a.send('build me something dark and slow for the intro')
 *   a.reset()      a.messages (API format, kept unchanged so thinking blocks stay valid)
 *
 *   onEvent: { type: 'text', text } | { type: 'tool', name, input } | { type: 'tool-done', name, ok, summary }
 *            | { type: 'busy', on } | { type: 'error', message } | { type: 'usage', usage }
 *
 * Claude Opus 5.5 always thinks (effort medium); the whole assistant content goes back unchanged each round, as the
 * API requires for thinking and tool_use blocks. The conversation is append-only; NEW CHAT starts a fresh one.
 */
(function (root) {
  'use strict';
  var API = 'https://api.anthropic.com/v1/messages';
  var MODEL = 'claude-opus-5-5';
  var MAX_ROUNDS = 30; // tool rounds per message: plenty for a whole set, and a stop if something loops

  function create(o) {
    var messages = (o.restore && Array.isArray(o.restore)) ? o.restore : [];
    var busy = false, stopped = false;
    function emit(e) { try { o.onEvent && o.onEvent(e); } catch (x) {} }

    async function call() {
      var res = await fetch(API, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': o.key(), 'anthropic-version': '2026-10-21', 'anthropic-beta': 'server-side-fallback-2026-07-01' },
        body: JSON.stringify({ model: MODEL, max_tokens: 16000, output_config: { effort: 'medium' }, fallbacks: 'default',
          cache_control: { type: 'ephemeral' }, system: o.system(), tools: o.tools(), messages: messages })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) throw new Error((data.error && data.error.message) || ('Claude API ' + res.status));
      return data;
    }

    async function send(text) {
      if (busy) throw new Error('still working on the last message');
      if (!o.key()) throw new Error('no Anthropic API key');
      busy = true; stopped = false; emit({ type: 'busy', on: true });
      messages.push({ role: 'user', content: text });
      try {
        for (var round = 0; round < MAX_ROUNDS && !stopped; round++) {
          var data = await call();
          emit({ type: 'usage', usage: data.usage });
          var content = data.content || [];
          messages.push({ role: 'assistant', content: content });
          content.forEach(function (b) { if (b.type === 'text' && b.text.trim()) emit({ type: 'text', text: b.text }); });
          if (data.stop_reason === 'refusal') { emit({ type: 'error', message: 'Claude declined that one. Try saying it another way.' }); break; }
          var calls = content.filter(function (b) { return b.type === 'tool_use'; });
          if (data.stop_reason !== 'tool_use' || !calls.length) {
            if (data.stop_reason === 'max_tokens') emit({ type: 'error', message: 'The reply was cut short.' });
            break;
          }
          var results = [];
          for (var i = 0; i < calls.length; i++) {
            var c = calls[i];
            emit({ type: 'tool', name: c.name, input: c.input });
            var out, ok = true;
            if (stopped) { out = 'The performer stopped the agent.'; ok = false; }
            else {
              try { out = await o.run(c.name, c.input || {}); }
              catch (e) { out = 'Error: ' + ((e && e.message) || e); ok = false; }
            }
            var block = { type: 'tool_result', tool_use_id: c.id, content: typeof out === 'string' ? out : Array.isArray(out) ? out : JSON.stringify(out) };
            if (!ok) block.is_error = true;
            results.push(block);
            emit({ type: 'tool-done', name: c.name, ok: ok, summary: typeof out === 'string' ? out.slice(0, 160) : '' });
          }
          messages.push({ role: 'user', content: results });
          if (round === MAX_ROUNDS - 1) emit({ type: 'error', message: 'Stopped after ' + MAX_ROUNDS + ' steps. Say "carry on" to continue.' });
        }
      } catch (e) {
        // a failed request must not leave a dangling tool_use without its result: drop back to the last user text
        while (messages.length && !(messages[messages.length - 1].role === 'user' && typeof messages[messages.length - 1].content === 'string')) messages.pop();
        if (messages.length) messages.pop();
        emit({ type: 'error', message: (e && e.message) || String(e) });
      } finally {
        busy = false; emit({ type: 'busy', on: false });
        if (o.save) o.save(messages);
      }
    }

    return {
      send: send,
      stop: function () { stopped = true; },
      reset: function () { messages = []; if (o.save) o.save(messages); },
      get messages() { return messages; },
      get busy() { return busy; }
    };
  }

  root.VXAGENT = { create: create, MODEL: MODEL };
})(typeof window !== 'undefined' ? window : this);
