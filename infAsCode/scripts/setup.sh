#!/bin/bash
set -e -x
curl -fsSL https://get.pulumi.com/ | bash
export PATH=$PATH:$HOME/.pulumi/bin
# Login into pulumi. This will require the PULUMI_ACCESS_TOKEN environment variable

pulumi login
# nodejs
apt-get install -y  nodejs
curl -qL https://www.npmjs.com/install.sh | sh
# yarn
npm install npm@latest -g
