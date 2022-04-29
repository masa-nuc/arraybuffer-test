const { testMemoryUsage } = require('../common/testMemoryUsage');

const env = `Node:${process.versions.node}`;

testMemoryUsage(env);
