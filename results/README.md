# Example test results

|Item          | Value                                         |
| ------------ | --------------------------------------------- |
|Edition       | Windows 10 Pro                                |
|System type   | 64-bit operating system, x64-based processor  |
|Installed RAM | 128.0 GB                                      |
|Version       | 21H1                                          |
|OS build      | 19043.2251                                    |

Runs on the git-bash

~~~
$ ./start_all.sh -a 16 -c 1
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

$ ./start_all.sh -a 16 -c 2
 :
 :
Total allocated ArrayBuffer: 16.00 GiB, chunk:  2.00 MiB @ Node:16.13.1
Total allocated Wasm Memory: 16.00 GiB, chunk:  2.00 MiB @ Node:16.13.1
Total allocated ArrayBuffer:  3.99 GiB, chunk:  2.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory:       N/A, chunk:  2.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  4.00 GiB, chunk:  2.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:  2.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  8.00 GiB, chunk:  2.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory:200.00 MiB, chunk:  2.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer:  8.00 GiB, chunk:  2.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 16.00 GiB, chunk:  2.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer:  8.00 GiB, chunk:  2.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory:200.00 MiB, chunk:  2.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer:  8.00 GiB, chunk:  2.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 16.00 GiB, chunk:  2.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62

$ ./start_all.sh -a 16 -c 8
 :
 :
Total allocated ArrayBuffer: 16.00 GiB, chunk:  8.00 MiB @ Node:16.13.1
Total allocated Wasm Memory: 16.00 GiB, chunk:  8.00 MiB @ Node:16.13.1
Total allocated ArrayBuffer:  6.38 GiB, chunk:  8.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:  8.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  6.39 GiB, chunk:  8.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:  8.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer: 12.80 GiB, chunk:  8.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory:800.00 MiB, chunk:  8.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 12.80 GiB, chunk:  8.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 16.00 GiB, chunk:  8.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 12.80 GiB, chunk:  8.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory:800.00 MiB, chunk:  8.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer: 12.80 GiB, chunk:  8.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 16.00 GiB, chunk:  8.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62

$ ./start_all.sh -a 16 -c 128
 :
 :
Total allocated ArrayBuffer: 16.00 GiB, chunk:128.00 MiB @ Node:16.13.1
Total allocated Wasm Memory: 16.00 GiB, chunk:128.00 MiB @ Node:16.13.1
Total allocated ArrayBuffer:  7.75 GiB, chunk:128.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:128.00 MiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  7.75 GiB, chunk:128.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:128.00 MiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer: 15.75 GiB, chunk:128.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 12.50 GiB, chunk:128.00 MiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.75 GiB, chunk:128.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 16.00 GiB, chunk:128.00 MiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.75 GiB, chunk:128.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 12.38 GiB, chunk:128.00 MiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer: 15.75 GiB, chunk:128.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 16.00 GiB, chunk:128.00 MiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62

$ ./start_all.sh -a 16 -c 1024
 :
 :
Total allocated ArrayBuffer: 16.00 GiB, chunk:  1.00 GiB @ Node:16.13.1
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Node:16.13.1
Total allocated ArrayBuffer:  7.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  7.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 16.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62

$ ./start_all.sh -a 20 -c 1024
 :
 :
Total allocated ArrayBuffer: 20.00 GiB, chunk:  1.00 GiB @ Node:16.13.1
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Node:16.13.1
Total allocated ArrayBuffer:  7.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  7.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 20.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62

$ ./start_all.sh -a 24 -c 1024
 :
 :
Total allocated ArrayBuffer: 24.00 GiB, chunk:  1.00 GiB @ Node:16.13.1
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Node:16.13.1
Total allocated ArrayBuffer:  7.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer:  7.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:20.3.8, Node:16.15.0, Chrome:104.0.5112.124
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:21.3.3, Node:16.16.0, Chrome:106.0.5249.199
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Browser Win , Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated ArrayBuffer: 15.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
Total allocated Wasm Memory: 24.00 GiB, chunk:  1.00 GiB @ Main Process, Electron:22.0.0, Node:16.17.1, Chrome:108.0.5359.62
~~~

## Old result

- [Electron from v8 to v18](./README_from_v8_to_v18.md), tested by 50eb03a01814c3e2fd4f855038ff03107852ffa0
