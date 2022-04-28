const { testMemoryUsage } = require('../common/testMemoryUsage');

const env = `Node:${process.versions.node}`;

console.log(`=== ${env} ===`);

testMemoryUsage(env);
