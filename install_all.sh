#!/usr/bin/env bash

set -eu

source ./common.sh

for ((i = 0; i < ${#version_array[@]}; i++)) {
  TARGET_VERSION=${version_array[i]}
  npm_install ${TARGET_VERSION}
}
