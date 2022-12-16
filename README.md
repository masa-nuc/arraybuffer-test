# arraybuffer-test

Test the ArrayBuffer and WebAssembly.Memory limits between:
- pure Node environment
- different versions of electron (from v20 to v22) at:
  - browser window
  - main process

## npm install for target versions
~~~
$ ./install_all.sh
~~~

## test for target versions
~~~
$ ./start_all.sh -h
Usage: ./start_all.sh [-a allocation total size (GiB)] [-c chunk size (MiB)]

$ ./start_all.sh -a 16 -c 1
ALLOC_GIB: 16
CHUNK_MIB: 1
 :
 :
Total allocated ArrayBuffer: 16.00 GiB, chunk:  1.00 MiB @ Node:16.13.1
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 MiB @ Node:16.13.1
Total allocated ArrayBuffer:  3.99 GiB, chunk:  1.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory:       N/A, chunk:  1.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  4.00 GiB, chunk:  1.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  8.00 GiB, chunk:  1.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory:100.00 MiB, chunk:  1.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer:  8.00 GiB, chunk:  1.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer:  8.00 GiB, chunk:  1.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory:100.00 MiB, chunk:  1.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer:  8.00 GiB, chunk:  1.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
~~~

## Example test results
Please [see here](results/README.md)

## References:
- [process.memoryUsage() | Node.js](https://nodejs.org/api/process.html#processmemoryusage)
- [Pointer Compression in V8](https://v8.dev/blog/pointer-compression)
