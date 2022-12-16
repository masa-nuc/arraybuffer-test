const GiB = 1024 * 1024 * 1024;
const MiB = 1024 * 1024;
const map = new Map();
const logs = [];

const sleep = (ms = 3000) => new Promise(resolve => setTimeout(resolve, ms));

const formatMem = byte => {
  if (GiB <= byte) {
    const ret = (byte / GiB).toFixed(2);
    return `${ret.padStart(6, ' ')} GiB`;
  } else if (MiB <= byte) {
    const ret = (byte / MiB).toFixed(2);
    return `${ret.padStart(6, ' ')} MiB`;
  }
  return `${byte.padStart(4, ' ')} Byte`;
};

const print = text => {
  console.log(text);
  logs.push(text)
};

const allocateArrayBuffer = (chunkMiB, loopCount) => {
  for (let i = 0; i < loopCount; i++) {
    try {
      const array = new Int8Array(new ArrayBuffer(chunkMiB));
      array.fill(1);
      map.set(`AB${i}`, array);
    } catch (e) {
      print(`ArrayBuffer: crashed at:${i+1}/${loopCount}, ${e.stack}`);
      return;
    }
  }
};

const allocateWasmMemory = (chunkMiB, loopCount) => {
  const pageByte = 65536;
  const pagesToAlloc = chunkMiB/pageByte;

  for (let i = 0; i < loopCount; i++) {
    try {
      const mem = new WebAssembly.Memory({initial: pagesToAlloc, maximum: pagesToAlloc, shared: true});
      const array = new Int8Array(mem.buffer, 0, chunkMiB);
      array.fill(1);
      map.set(`WM${i}`, array);
    } catch (e) {
      print(`WasmMemory: crashed at:${i+1}/${loopCount}, ${e.stack}`);
      return chunkMiB * i;
    }
  }

  return chunkMiB * loopCount;
};

const showMemoryUsage = usage => {
  const memoryUsage = usage || process.memoryUsage();
  print(`${JSON.stringify(memoryUsage, null, 2)}`);

  return memoryUsage;
};

exports.testArrayBufferUsage = (env, opt = {}) => {
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

  print('\nAllocate ArrayBuffer');
  allocateArrayBuffer(chunkMiB, loopCount);

  const after = showMemoryUsage();

  const usage = {};
  Object.keys(before).forEach(key => {
    usage[key] = after[key] - before[key];
  });

  print('\nMemory Usage');
  showMemoryUsage(usage);

  print(`\nTotal allocated ArrayBuffer:${formatMem(usage.external)}, chunk:${formatMem(chunkMiB)} @ ${env}`);

  return logs;
};

exports.testWasmMemoryUsage = (env, opt = {}) => {
  const totalFromArg = process.argv.length >= 3 ? parseInt(process.argv[2], 10) : 1;
  const chunkFromArg = process.argv.length >= 4 ? parseInt(process.argv[3], 10) : 1;
  const { total, chunk } = opt;
  const totalGiB = GiB * (total || totalFromArg);
  const chunkMiB = MiB * (chunk || chunkFromArg);
  const loopCount = Math.ceil(totalGiB / chunkMiB);

  print(`=== ${env} ===`);

  // The Electron v20 with chunk size less than 4MiB, it causes hang at WASM memory allocation.
  // So, ignore this condition.
  if (env.includes('Electron:20') && env.includes('Browser Win') && chunkMiB < 4 * MiB) {
    print(`\nTotal allocated Wasm Memory:       N/A, chunk:${formatMem(chunkMiB)} @ ${env}`);
    return logs;
  }

  print(`Try to allocate: ${formatMem(totalGiB)}, chunk:${formatMem(chunkMiB)}, loop:${loopCount}`);

  print('\nStart Memory');
  const before = showMemoryUsage();

  print('\nAllocate WasmMemory');
  const totalAllocMiB = allocateWasmMemory(chunkMiB, loopCount);

  const after = showMemoryUsage();

  const usage = {};
  Object.keys(before).forEach(key => {
    usage[key] = after[key] - before[key];
  });

  print('\nMemory Usage');
  showMemoryUsage(usage);

  print(`\nTotal allocated Wasm Memory:${formatMem(totalAllocMiB)}, chunk:${formatMem(chunkMiB)} @ ${env}`);

  return logs;
};

exports.clean = () => {
  map.clear();
  logs.length = 0;
};
