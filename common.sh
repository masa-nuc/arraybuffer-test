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
  "v08"
  "v09"
  "v10"
  "v11"
  "v12"
  "v13"
  "v14"
  "v15"
  "v16"
  "v17"
  "v18"
  "v21.beta.7"
  "v22.nightly.20220909"
)
