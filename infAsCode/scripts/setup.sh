#!/bin/bash
set -e -x
curl -fsSL https://get.pulumi.com/ | bash
export PATH=$PATH:$HOME/.pulumi/bin
# Login into pulumi. This will require the PULUMI_ACCESS_TOKEN environment variable

pulumi login
# nodejs
apk add  nodejs
curl -qL https://www.npmjs.com/install.sh | sh
# yarn
npm install npm@latest -g

mkdir gcloud-build && cd gcloud-build;
wget https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-189.0.0-linux-x86_64.tar.gz;
tar -xzf google-cloud-sdk-189.0.0-linux-x86_64.tar.gz
./google-cloud-sdk/install.sh
source google-cloud-sdk/path.bash.inc && echo "source google-cloud-sdk/path.bash.inc" >> $HOME/.profile
gcloud config set project springboot22
gcloud auth activate-service-account --key-file= /springboot22-032a69ee7f66.json
cd ..
