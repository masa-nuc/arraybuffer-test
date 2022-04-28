const GiB = 1024 * 1024 * 1024;
const MiB = 1024 * 1024;
const map = new Map();

const formatMem = byte => {
  if (GiB <= byte) {
    const ret = (byte / GiB).toFixed(2);
    return `${ret} GiB`;
  } else if (MiB <= byte) {
    const ret = (byte / MiB).toFixed(2);
    return `${ret} MiB`;
  }
  return `${byte} Byte`;
};

const allocateMemory = (totalGiB, chunkMiB, loopCount) => {
  for (let i = 0; i < loopCount; i++) {
    try {
      const array = new Int8Array(new ArrayBuffer(chunkMiB));
      array.fill(1);
      map.set(i, array);
    } catch (e) {
      console.log(`crashed at:${i+1}/${loopCount}, ${e.stack}`);
      return;
    }
  }
};

const showMemoryUsage = usage => {
  const memoryUsage = usage || process.memoryUsage();
  console.log(`${JSON.stringify(memoryUsage, null, 2)}`);

  return memoryUsage;
};

exports.testMemoryUsage = env => {
  const totalGiB = GiB * (process.argv.length >= 3 ? parseInt(process.argv[2], 10) : 1);
  const chunkMiB = MiB * (process.argv.length >= 4 ? parseInt(process.argv[3], 10) : 1);
  const loopCount = Math.ceil(totalGiB / chunkMiB);

  console.log(`Try to allocate: ${formatMem(totalGiB)}, chunk:${formatMem(chunkMiB)}, loop:${loopCount}`);

  console.log('\nStart Memory');
  const before = showMemoryUsage();

  console.log('\nAllocate Memory');
  allocateMemory(totalGiB, chunkMiB, loopCount);

  const after = showMemoryUsage();

  const usage = {};
  Object.keys(before).forEach(key => {
    usage[key] = after[key] - before[key];
  });

  console.log('\nMemory Usage');
  showMemoryUsage(usage);

  console.log(`\nTotal allocated ArrayBuffer:${formatMem(usage.external)}, chunk:${formatMem(chunkMiB)} @ ${env}`);
}
