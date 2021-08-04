#!/bin/bash

set -e -x
apt update -y
apt upgrade -y
apt install curl -y
#!/bin/bash
# nodejs
apt install  nodejs -y
curl -qL https://www.npmjs.com/install.sh | sh
# yarn
npm install npm@latest -g
npm install
