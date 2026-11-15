# Blender skills pack (curated)

12 of the 94 skills from https://github.com/arjun988/blender-skills (MIT, commit 904f095), reviewed 14 Nov 2026:
plain markdown only, no hooks/commands/scripts, no hidden Unicode, no AI-directed instructions, no network or
credential access in any snippet. Chosen for NPG character work (modelling, rigging, materials, export to .glb)
and the mixer 3D tab (lighting, camera, procedural, noir and brutalist looks).

Skills: blender-director blender-modeler rigging character-artist materials lighting camera-cinematography export-pipeline geometry-nodes procedural-modeling noir-style brutalist-mood, plus the shared references/ folder they cite.

## Install
Copy .claude/skills/* into the project .claude/skills/ (project level only, never user level: 94 global skills is noise).

## Blender MCP (enable only on the machine that has Blender)
- Needs uv (brew install uv) and Blender with the BlenderMCP add-on (addon.py from github.com/ahujasid/blender-mcp;
  take the file from the tag matching the pinned server version).
- Use blender.mcp.json as the project .mcp.json. It is the upstream config fixed for macOS (upstream uses Windows
  cmd /c) and PINNED to blender-mcp==2.0.0: upstream runs an unpinned latest, which would run any future release
  unseen. Bump the pin deliberately after reading the release.
- The add-on lets the agent run arbitrary Python in Blender with your user permissions. Connect it only while
  working in Blender, save the .blend first, and never open untrusted .blend files or assets while it is connected.
