#!/usr/bin/env bash

function npm_install() {
  pushd ${1}
  npm i
  popd
}

function npm_start() {
  pushd ${1}
  npm start ${2} ${3}
  popd
}

declare -a version_array=(
  "node-test"
  "v20"
  "v21"
  "v22"
)
