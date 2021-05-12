#!/bin/bash

# exit if a command returns a non-zero exit code and also print the commands and their args as they are executed
set -e -x

# Add the pulumi CLI to the PATH
export PATH=$PATH:$HOME/.pulumi/bin
pwd
chmod +x ./infAsCode/scripts/curl-install.sh
./infAsCode/scripts/curl-install.sh

cd infAsCode
npm install

gcloud auth activate-service-account --key-file=scripts/springboot22-0b39b2fdd02b.json
pulumi login
pulumi stack select dev
pulumi config set gcp:project springboot22
pulumi config set gcp:zone europe-north1-a
pulumi up --yes
cd ..
