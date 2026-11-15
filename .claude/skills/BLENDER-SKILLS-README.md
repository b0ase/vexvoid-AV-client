# Blender skills pack (curated)

12 of the 94 skills from https://github.com/arjun988/blender-skills (MIT, commit 904f095), reviewed 14 Nov 2026:
plain markdown only, no hooks/commands/scripts, no hidden Unicode, no AI-directed instructions, no network or
credential access in any snippet. Chosen for NPG character work (modelling, rigging, materials, export to .glb)
and the mixer 3D tab (lighting, camera, procedural, noir and brutalist looks).

Skills: blender-director blender-modeler rigging character-artist materials lighting camera-cinematography export-pipeline geometry-nodes procedural-modeling noir-style brutalist-mood, plus the shared references/ folder they cite.

## Install
Copy .claude/skills/* into the project .claude/skills/ (project level only, never user level: 94 global skills is noise).

## Blender MCP (set up on this Mac 15 Nov 2026)
- Blender 5.1.1 lives on the external drive: /Volumes/2026/Apps/Blender.app (copy on Seagate/sandisk-2026/Apps). uv via Homebrew.
- Server: the project was renamed. PyPI blender-mcp stopped at 2.0.0 (Sept), which lacks the 4 Nov fix stopping
  generation image inputs reading arbitrary files or the local network. Pinned instead: mcp-for-blender==2.2.9
  (github.com/ahujasid/mcp-for-blender, commit f2f75abd6a). Bump only on purpose, after reading the release.
- Add-on: addon/mcp_for_blender.py from that same commit (sha256 in addon/SHA256-f2f75abd6a.txt), installed and
  enabled in Blender's user preferences. In Blender: sidebar (N) > BlenderMCP > Connect to start the listener on :9876.
- Telemetry is OFF via DISABLE_TELEMETRY / BLENDER_MCP_DISABLE_TELEMETRY / MCP_DISABLE_TELEMETRY (left on, it uploads
  prompts and executed code). Paid generators in the add-on (Rodin, Tripo, Meshy, World Labs, fal) stay unconfigured.
- The add-on lets the agent run arbitrary Python in Blender with your user permissions. Connect only while working,
  save the .blend first, never open untrusted .blend files or assets while it is connected.
- blender.mcp.json is the project .mcp.json to use.
