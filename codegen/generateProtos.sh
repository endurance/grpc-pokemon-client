#! /bin/bash
#cd $(dirname $0)/../

SRC_DIR=./src/protos
DEST_DIR=./src/generated

mkdir ./src/generated

node_modules/.bin/pbjs \
--target static-module \
--wrap commonjs \
--keep-case \
--path ${SRC_DIR} \
--out ${DEST_DIR}/rpc.js \
${SRC_DIR}/**/*.proto

node_modules/.bin/pbts \
--out ${DEST_DIR}/rpc.d.ts \
${DEST_DIR}/rpc.js
