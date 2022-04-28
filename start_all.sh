#!/usr/bin/env bash

set -u

source ./common.sh

function usage_exit() {
  echo "Usage: $0 [-a allocation total size (GiB)] [-c chunk size (MiB)] " 1>&2
  exit 1
}

ALLOC_GIB=1
CHUNK_MIB=1

while getopts a:c:h OPT
do
  case $OPT in
    a)  ALLOC_GIB=$OPTARG
      ;;
    c)  CHUNK_MIB=$OPTARG
      ;;
    h)  usage_exit
      ;;
    \?) usage_exit
      ;;
  esac
done

shift $((OPTIND - 1))

echo "ALLOC_GIB: ${ALLOC_GIB}"
echo "CHUNK_MIB: ${CHUNK_MIB}"

function run_start() {
  for ((i = 0; i < ${#version_array[@]}; i++)) {
    TARGET_VERSION=${version_array[i]}
    npm_start ${TARGET_VERSION} ${ALLOC_GIB} ${CHUNK_MIB}
  }
}

BASE_NAME=`date +%Y%m%d_%H%M%S`_alloc${ALLOC_GIB}GiB_chunk${CHUNK_MIB}MiB
LOG_FILE=start_${BASE_NAME}.log
SAMMARY_LOG_FILE=start_${BASE_NAME}_summary.log

run_start 2>&1 | tee ${LOG_FILE}

grep "Total allocated" ${LOG_FILE} 2>&1 | tee ${SAMMARY_LOG_FILE}
