#!/bin/bash
cd infAsCode
set -e -x
apt update -y
apt upgrade -y
apt install curl -y
curl -fsSL https://get.pulumi.com | sh
export PATH=$PATH:$HOME/.pulumi/bin
# Login into pulumi. This will require the PULUMI_ACCESS_TOKEN environment variable


npm-install.sh

echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" |tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
apt install apt-transport-https ca-certificates gnupg -y
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg |apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
apt update -y
apt install google-cloud-sdk -y

gcloud auth activate-service-account --key-file=scripts/springboot22-0b39b2fdd02b.json
gcloud config set project springboot22
gcloud config set compute/zone europe-north1-a

apt install kubectl
