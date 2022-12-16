const { testArrayBufferUsage, testWasmMemoryUsage } = require('../common/testMemoryUsage');

const env = `Node:${process.versions.node}`;

testArrayBufferUsage(env);
testWasmMemoryUsage(env);
