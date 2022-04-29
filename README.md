# arraybuffer-test

Test the ArrayBuffer limits between:
- pure Node environment
- different versions of electron (from v8 to v18) at:
  - browser window
  - main process

## npm intall for target versions
~~~
$ ./install_all.sh
~~~

## test for target versions
~~~
$ ./start_all.sh -h
Usage: ./start_all.sh [-a allocation total size (GiB)] [-c chunk size (MiB)]

$ ./start_all.sh -a 6 -c 1
ALLOC_GIB: 6
CHUNK_MIB: 1
 :
 :
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Node:14.18.1
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:8.5.5, Node:12.13.0, Chrome:80.0.3987.163
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Main Process, Electron:8.5.5, Node:12.13.0, Chrome:80.0.3987.163
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:9.4.4, Node:12.14.1, Chrome:83.0.4103.122
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Main Process, Electron:9.4.4, Node:12.14.1, Chrome:83.0.4103.122
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:10.4.7, Node:12.16.3, Chrome:85.0.4183.121
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Main Process, Electron:10.4.7, Node:12.16.3, Chrome:85.0.4183.121
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:11.5.0, Node:12.18.3, Chrome:87.0.4280.141
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Main Process, Electron:11.5.0, Node:12.18.3, Chrome:87.0.4280.141
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:12.2.3, Node:14.16.0, Chrome:89.0.4389.128
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Main Process, Electron:12.2.3, Node:14.16.0, Chrome:89.0.4389.128
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:13.6.9, Node:14.16.0, Chrome:91.0.4472.164
Total allocated ArrayBuffer:6.00 GiB, chunk:1.00 MiB @ Main Process, Electron:13.6.9, Node:14.16.0, Chrome:91.0.4472.164
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:14.2.9, Node:14.17.0, Chrome:93.0.4577.82
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Main Process, Electron:14.2.9, Node:14.17.0, Chrome:93.0.4577.82
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Browser Win , Electron:15.5.2, Node:16.5.0, Chrome:94.0.4606.81
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Main Process, Electron:15.5.2, Node:16.5.0, Chrome:94.0.4606.81
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Browser Win , Electron:16.2.4, Node:16.9.1, Chrome:96.0.4664.174
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Main Process, Electron:16.2.4, Node:16.9.1, Chrome:96.0.4664.174
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Browser Win , Electron:17.4.1, Node:16.13.0, Chrome:98.0.4758.141
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Main Process, Electron:17.4.1, Node:16.13.0, Chrome:98.0.4758.141
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Browser Win , Electron:18.1.0, Node:16.13.2, Chrome:100.0.4896.127
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Main Process, Electron:18.1.0, Node:16.13.2, Chrome:100.0.4896.127
~~~

## Example test results
Please [see here](results/README.md)

## References:
- [process.memoryUsage() | Node.js](https://nodejs.org/api/process.html#processmemoryusage)
- [Pointer Compression in V8](https://v8.dev/blog/pointer-compression)
