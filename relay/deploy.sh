#!/usr/bin/env bash
# Deploy the mixer relay to Hetzner (ssh alias "hetzner", user deployer) at https://mixer.vexvoid.com.
#   bash relay/deploy.sh           code + pm2 + nginx (run again any time to update the code)
#   bash relay/deploy.sh tls       add the Let's Encrypt certificate, once DNS points at the server
# nginx and certbot steps use sudo on the server and may ask for the deployer password.
set -euo pipefail
cd "$(dirname "$0")/.."
DIR=src/vexvoid-mixer-relay

if [ "${1:-}" = "tls" ]; then
  ip=$(dig +short mixer.vexvoid.com | tail -1)
  [ "$ip" = "135.181.103.181" ] || { echo "mixer.vexvoid.com resolves to '$ip', not the Hetzner box yet. Wait for DNS."; exit 1; }
  ssh -t hetzner 'sudo certbot --nginx -d mixer.vexvoid.com --non-interactive --agree-tos --redirect && curl -s https://mixer.vexvoid.com/healthz'
  exit
fi

ssh hetzner "mkdir -p ~/$DIR/relay ~/$DIR/mcp"
rsync -a relay/server.js relay/ecosystem.config.js relay/.gitignore hetzner:$DIR/relay/
rsync -a mcp/tools.js hetzner:$DIR/mcp/
rsync -a relay/nginx-mixer.vexvoid.com.conf hetzner:$DIR/relay/
ssh hetzner "cd ~/$DIR && pm2 startOrReload relay/ecosystem.config.js && pm2 save >/dev/null && sleep 1 && curl -s http://127.0.0.1:8101/healthz && echo"

# nginx site: only installed the first time, so certbot's TLS edits are never overwritten
ssh -t hetzner "test -e /etc/nginx/sites-enabled/mixer.vexvoid.com || (sudo cp ~/$DIR/relay/nginx-mixer.vexvoid.com.conf /etc/nginx/sites-available/mixer.vexvoid.com && sudo ln -s /etc/nginx/sites-available/mixer.vexvoid.com /etc/nginx/sites-enabled/mixer.vexvoid.com && sudo nginx -t && sudo systemctl reload nginx && echo 'nginx site added')"
echo "Next: point mixer.vexvoid.com (A) at 135.181.103.181, then: bash relay/deploy.sh tls"
