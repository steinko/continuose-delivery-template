#!/bin/bash
# nodejs
chmod +x ./scripts/curl-install.sh
./scripts/curl-install.sh
apt install  nodejs -y
curl -qL https://www.npmjs.com/install.sh | sh
# yarn
npm install npm@latest -g
npm install
