#!/bin/bash

# exit if a command returns a non-zero exit code and also print the commands and their args as they are executed
set -e -x

# Add the pulumi CLI to the PATH
export PATH=$PATH:$HOME/.pulumi/bin

cd infAsCode
npm install
pulumi stack select dev
pulumi import  --yes gitlab:index/projectCluster:ProjectCluster gradle-ci-cd 25815104:145188
pulumi up --yes
