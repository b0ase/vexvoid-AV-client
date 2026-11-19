// The mixer's MCP tools, shared by the local stdio server (bin/vexvoid-mcp.js) and the claude.ai relay
// (relay/server.js). Each tool's run(args, io) uses io.cmd(name, args) -> {ok, result, error} and
// io.snapshot(width) -> Buffer (JPEG). The remote set drops local file and URL loading, so nobody can put
// a file from the performer's disk on screen and photograph it with mixer_snapshot.

const deck = { type: 'string', enum: ['A', 'B'], description: 'Deck A or B' };

function tools({ remote = false } = {}) {
  const load = remote
    ? { clip: { type: 'string', description: 'Catalogue clip name (see list_media)' }, image: { type: 'string', description: 'Catalogue image, e.g. VexVoid_Jam/JAM-05' }, deck }
    : { clip: { type: 'string' }, image: { type: 'string' }, path: { type: 'string', description: 'Local file' }, deck };

  return [
    { name: 'mixer_state', description: 'What the mixer is doing now: crossfader, layers on each deck, the running sketch and its knobs, tempo, music, VX engine settings.',
      inputSchema: { type: 'object', properties: {} }, run: (a, io) => io.cmd('state') },
    { name: 'mixer_snapshot', description: 'A picture of the output window (what the audience sees).',
      inputSchema: { type: 'object', properties: { width: { type: 'number', description: 'Pixel width, default 960' } } },
      run: async (a, io) => ({ image: await io.snapshot(a.width || 960) }) },
    { name: 'crossfade', description: 'Move the A/B crossfader: 0 is all deck A, 100 is all deck B, 50 an even mix.',
      inputSchema: { type: 'object', properties: { value: { type: 'number', minimum: 0, maximum: 100 } }, required: ['value'] }, run: (a, io) => io.cmd('fade', a) },
    { name: 'list_sketches', description: 'The generative sketch library (names, tags, what the four knobs do).',
      inputSchema: { type: 'object', properties: {} }, run: (a, io) => io.cmd('sketches') },
    { name: 'send_sketch', description: 'Run a generative p5 sketch and send it to a deck as a new layer. Give a library name, or your own p5.js code (setup()/draw(), createCanvas(windowWidth, windowHeight[, WEBGL]), monochrome white on black, may read the live vx object: vx.t, vx.beat, vx.bar, vx.bpm, vx.level, vx.bass, vx.mid, vx.high, vx.kick, vx.pulse, vx.a..vx.d knobs 0-1).',
      inputSchema: { type: 'object', properties: { name: { type: 'string' }, code: { type: 'string' }, knobs: { type: 'array', items: { type: 'string' }, description: 'Names for knobs a-d when sending code' }, deck,
        blend: { type: 'string', enum: ['normal', 'screen', 'difference', 'multiply'], description: 'screen lays the white lines over the layers below; normal covers them' } } },
      run: (a, io) => io.cmd('sketch', { ...a, send: true }) },
    { name: 'cue_sketch', description: 'Load a sketch on the deck nobody is watching (replacing its sketch layers), ready to crossfade to. Give a name, or step 1 / -1 through the library.',
      inputSchema: { type: 'object', properties: { name: { type: 'string' }, step: { type: 'number' } } }, run: (a, io) => io.cmd('cue', a) },
    { name: 'set_knobs', description: 'Turn the four knobs (0-1) of the current sketch; also moves the last sketch sent to the output.',
      inputSchema: { type: 'object', properties: { a: { type: 'number' }, b: { type: 'number' }, c: { type: 'number' }, d: { type: 'number' } } }, run: (a, io) => io.cmd('knobs', a) },
    { name: 'mutate', description: 'Give the current sketch a new random seed.', inputSchema: { type: 'object', properties: {} }, run: (a, io) => io.cmd('mutate') },
    { name: 'evolve', description: 'Turn auto-evolve on or off (new seed and drifting knobs every 4 bars).',
      inputSchema: { type: 'object', properties: { on: { type: 'boolean' } }, required: ['on'] }, run: (a, io) => io.cmd('evolve', a) },
    { name: 'list_media', description: 'Catalogue clips and images that can be loaded.',
      inputSchema: { type: 'object', properties: { kind: { type: 'string', enum: ['clips', 'images'] } }, required: ['kind'] }, run: (a, io) => io.cmd(a.kind === 'images' ? 'images' : 'clips') },
    { name: 'load_media', description: remote ? 'Open a catalogue clip or image as a new layer on a deck.' : 'Open a catalogue clip or image (or a local path) as a new layer on a deck.',
      inputSchema: { type: 'object', properties: load },
      run: (a, io) => io.cmd('load', remote ? { clip: a.clip, image: a.image, deck: a.deck } : a) },
    { name: 'layer', description: 'Change or remove a layer: opacity 0-100, visible, blend (normal, screen, multiply, difference, overlay...), or remove: true.',
      inputSchema: { type: 'object', properties: { id: { type: 'number' }, opacity: { type: 'number' }, visible: { type: 'boolean' }, blend: { type: 'string' }, remove: { type: 'boolean' } }, required: ['id'] },
      run: (a, io) => (a.remove ? io.cmd('remove', { id: a.id }) : io.cmd('layer', a)) },
    { name: 'clear_deck', description: 'Remove every layer on a deck (or both decks if none given).',
      inputSchema: { type: 'object', properties: { deck } }, run: (a, io) => io.cmd('clear', a) },
    { name: 'music', description: 'Control the music player: list tracks, play (optionally a track number or title words), pause, next, prev.',
      inputSchema: { type: 'object', properties: { action: { type: 'string', enum: ['list', 'play', 'pause', 'next', 'prev'] }, track: { type: 'string' } }, required: ['action'] },
      run: (a, io) => io.cmd(a.action === 'list' ? 'tracks' : a.action, a.track != null ? { track: a.track } : {}) },
    { name: 'store', description: 'The V3XV0ID merch range WE sell (vexvoid.com/store; not the MARKET, where players trade): each item\'s code, name, status (coming soon / concept), USD price once set, and its page. Read only: buying happens on vexvoid.com.',
      inputSchema: { type: 'object', properties: {} }, run: (a, io) => io.cmd('store') },
    { name: 'tempo', description: 'Set the BPM the sketches follow, or choose what they listen to (clock, music, input).',
      inputSchema: { type: 'object', properties: { bpm: { type: 'number' }, listen: { type: 'string', enum: ['clock', 'music', 'input'] } } },
      run: async (a, io) => {
        const out = {};
        if (a.bpm) out.bpm = (await io.cmd('bpm', { value: a.bpm })).result;
        if (a.listen) out.listen = (await io.cmd('audio', { source: a.listen })).result;
        return { ok: true, result: out };
      } },
    { name: 'vx_engine', description: 'The background VX engine: action next (clip), clean, blackout (toggle), reset, or set {key, value} for video, mercury, field, formula, flecks, grain, decals, chaos, title, voidChance, cleanChance.',
      inputSchema: { type: 'object', properties: { action: { type: 'string', enum: ['next', 'clean', 'blackout', 'reset', 'set'] }, key: { type: 'string' }, value: {} }, required: ['action'] },
      run: (a, io) => io.cmd({ next: 'vx-next', clean: 'vx-clean', blackout: 'blackout', reset: 'vx-reset', set: 'vx' }[a.action], { key: a.key, value: a.value }) }
  ];
}

// Commands a remote (claude.ai) session may run in the app; the app checks this list too.
const REMOTE_COMMANDS = ['state', 'fade', 'cut', 'sketches', 'sketch', 'cue', 'knobs', 'mutate', 'evolve', 'clips', 'images', 'load', 'layers', 'layer',
  'remove', 'clear', 'tracks', 'play', 'pause', 'next', 'prev', 'bpm', 'tap', 'audio', 'vx', 'vx-next', 'vx-clean', 'blackout', 'vx-reset', 'snapshot'];

const INSTRUCTIONS = 'Controls the V3XV0ID VJ mixer live. Check mixer_state first; use mixer_snapshot to see the output. The look is strictly monochrome (white on black). Prefer cueing on the hidden deck and crossfading over changing what is on air abruptly. Locally you also have the VexVoid agent\'s own tools (editor for music videos on the EDIT timeline, text_layer, write_sketch, compose_set, record, skill and more): load the relevant skill first (skill music-video before cutting a video), as VexVoid does.';

// The in-app agent's tools (editor, text_layer, write_sketch, compose_set, load_track, record, skill, library, look,
// project, generate), read from the running app so MCP always has exactly what VexVoid has. Local only: they can read
// and write files on this computer, so the claude.ai relay does not offer them.
async function agentTools(io) {
  const r = await io.cmd('agent-tools');
  if (!r || !r.ok || !Array.isArray(r.result)) return [];
  return r.result.map(t => ({ name: t.name, description: '[VexVoid agent tool] ' + t.description, inputSchema: t.input_schema,
    run: (a, io2) => io2.cmd('agent', { tool: t.name, input: a }) }));
}

/** Answer one MCP JSON-RPC message. Returns the response object, or null for notifications.
 *  toolList is an array, or an async function returning one (the local server adds the agent's tools that way). */
async function handleRpc(msg, toolListOrFn, io, serverInfo) {
  const toolList = typeof toolListOrFn === 'function' ? await toolListOrFn() : toolListOrFn;
  const { id, method, params } = msg || {};
  const ok = result => ({ jsonrpc: '2.0', id, result });
  const err = (code, message) => ({ jsonrpc: '2.0', id: id === undefined ? null : id, error: { code, message } });
  if (method === 'initialize') {
    return ok({ protocolVersion: (params && params.protocolVersion) || '2025-06-18', capabilities: { tools: {} }, serverInfo, instructions: INSTRUCTIONS });
  }
  if (method === 'ping') return ok({});
  if (method === 'tools/list') return ok({ tools: toolList.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) });
  if (method === 'tools/call') {
    const tool = toolList.find(t => t.name === (params && params.name));
    if (!tool) return err(-32602, 'unknown tool ' + (params && params.name));
    try {
      const r = await tool.run((params && params.arguments) || {}, io);
      if (r && r.image) return ok({ content: [{ type: 'image', data: r.image.toString('base64'), mimeType: 'image/jpeg' }] });
      if (r && r.ok && r.result && Array.isArray(r.result.content)) return ok({ content: r.result.content });
      if (r && r.ok && typeof r.result === 'string') return ok({ content: [{ type: 'text', text: r.result }] });
      return ok({ content: [{ type: 'text', text: r.ok ? JSON.stringify(r.result, null, 2) : 'Error: ' + r.error }], isError: !r.ok });
    } catch (e) {
      return ok({ content: [{ type: 'text', text: 'Error: ' + e.message }], isError: true });
    }
  }
  if (id === undefined) return null; // notification
  return err(-32601, 'method not found: ' + method);
}

module.exports = { tools, agentTools, handleRpc, REMOTE_COMMANDS, INSTRUCTIONS };
