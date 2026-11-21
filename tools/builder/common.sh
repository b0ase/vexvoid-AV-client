# Shared by the builder's scripts (run-job.sh; setup.sh carries its own copy of envget so it can run alone).
# Keys are read from the env file at the moment they are used, never exported, printed or put on a command line.
B=${VEXVOID_BUILDER_HOME:-$HOME/vexvoid-builder}
ENVF=${VEXVOID_BUILDER_ENV:-$HOME/.config/vexvoid-builder/env}
GH_REPO=${VEXVOID_GH_REPO:-b0ase/vexvoid-AV-client}
BASE_BRANCH=${VEXVOID_BASE_BRANCH:-feat/vx-rebuild}
SONNET=claude-sonnet-5-5
OPUS=claude-opus-5-5

# envget KEY: the value of KEY in the env file (KEY=value, export KEY=value, quoted or not)
envget() {
  { set +x; } 2>/dev/null
  [ -r "$ENVF" ] || return 1
  sed -n -E "s/^[[:space:]]*(export[[:space:]]+)?$1[[:space:]]*=[[:space:]]*[\"']?([^\"'[:space:]]*)[\"']?[[:space:]]*$/\2/p" "$ENVF" | tail -n 1
}

# gh_api METHOD PATH [JSON-FILE]: the GitHub REST API with the builder's token (sent as a header read from a file
# descriptor, so it never appears in ps, the shell history or a log)
gh_api() {
  { set +x; } 2>/dev/null
  local m=$1 p=$2 d=${3:-}
  curl -sS --fail-with-body -X "$m" \
    -H @<(printf 'Authorization: Bearer %s\nAccept: application/vnd.github+json\nX-GitHub-Api-Version: 2022-11-28\n' "$(envget GITHUB_TOKEN)") \
    ${d:+--data-binary "@$d"} "https://api.github.com$p"
}

say() { printf '%s %s\n' "$(date -u '+%H:%M:%S')" "$*"; }
