#!/bin/bash
chmod +x curl-install.sh
curl-install.sh
cd infAsCode
set -e -x
apt update -y
apt upgrade -y
apt install curl -y
npm-install.sh