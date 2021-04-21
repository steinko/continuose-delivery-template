#!/bin/bash
cd infAsCode
# exit if a command returns a non-zero exit code and also print the commands and their args as they are executed
set -e -x

# Add the pulumi CLI to the PATH
export PATH=$PATH:$HOME/.pulumi/bin


npm install
pulumi login
pulumi stack select dev
pulumi config set gcp:project springboot22
pulumi config set gcp:credentials $(cat scripts/springboot22-0b39b2fdd02b.json)
pulumi config set gcp:zone europe-north1-a
pulumi up --yes
