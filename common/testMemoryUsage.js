const GiB = 1024 * 1024 * 1024;
const MiB = 1024 * 1024;
const map = new Map();
const logs = [];

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

const print = text => {
  console.log(text);
  logs.push(text)
};

const allocateMemory = (totalGiB, chunkMiB, loopCount) => {
  for (let i = 0; i < loopCount; i++) {
    try {
      const array = new Int8Array(new ArrayBuffer(chunkMiB));
      array.fill(1);
      map.set(i, array);
    } catch (e) {
      print(`crashed at:${i+1}/${loopCount}, ${e.stack}`);
      return;
    }
  }
};

const showMemoryUsage = usage => {
  const memoryUsage = usage || process.memoryUsage();
  print(`${JSON.stringify(memoryUsage, null, 2)}`);

  return memoryUsage;
};

exports.testMemoryUsage = (env, opt = {}) => {
  const totalFromArg = process.argv.length >= 3 ? parseInt(process.argv[2], 10) : 1;
  const chunkFromArg = process.argv.length >= 4 ? parseInt(process.argv[3], 10) : 1;
  const { total, chunk } = opt;
  const totalGiB = GiB * (total || totalFromArg);
  const chunkMiB = MiB * (chunk || chunkFromArg);
  const loopCount = Math.ceil(totalGiB / chunkMiB);

  print(`=== ${env} ===`);

  print(`Try to allocate: ${formatMem(totalGiB)}, chunk:${formatMem(chunkMiB)}, loop:${loopCount}`);

  print('\nStart Memory');
  const before = showMemoryUsage();

  print('\nAllocate Memory');
  allocateMemory(totalGiB, chunkMiB, loopCount);

  const after = showMemoryUsage();

  const usage = {};
  Object.keys(before).forEach(key => {
    usage[key] = after[key] - before[key];
  });

  print('\nMemory Usage');
  showMemoryUsage(usage);

  print(`\nTotal allocated ArrayBuffer:${formatMem(usage.external)}, chunk:${formatMem(chunkMiB)} @ ${env}`);

  map.clear();

  return logs;
};
