#!/bin/bash

set -e -x
apt update -y
apt upgrade -y
apt install curl -y
npm-install.sh