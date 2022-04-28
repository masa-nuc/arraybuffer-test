# Example test results

|Item          | Value                                         |
| ------------ | --------------------------------------------- |
|Edition       | Windows 10 Pro                                |
|System type   | 64-bit operating system, x64-based processor  |
|Installed RAM | 64.0 GB (63.7 GB usable)                      |
|Version       | 20H2                                          |
|OS build      | 19042.1645                                    |

Runs on the git-bash

~~~
$ ./start_all.sh 16 1
 :
 :
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 MiB @ Electron:8.5.5, Node:12.13.0, Chrome:80.0.3987.163
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 MiB @ Electron:9.4.4, Node:12.14.1, Chrome:83.0.4103.122
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 MiB @ Electron:10.4.7, Node:12.16.3, Chrome:85.0.4183.121
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 MiB @ Electron:11.5.0, Node:12.18.3, Chrome:87.0.4280.141
Total allocated ArrayBuffer:8.00 GiB, chunk:1.00 MiB @ Electron:13.6.9, Node:14.16.0, Chrome:91.0.4472.164
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Electron:14.2.9, Node:14.17.0, Chrome:93.0.4577.82
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Electron:15.5.2, Node:16.5.0, Chrome:94.0.4606.81
Total allocated ArrayBuffer:4.00 GiB, chunk:1.00 MiB @ Electron:16.2.3, Node:16.9.1, Chrome:96.0.4664.174
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Electron:17.4.1, Node:16.13.0, Chrome:98.0.4758.141
Total allocated ArrayBuffer:3.99 GiB, chunk:1.00 MiB @ Electron:18.1.0, Node:16.13.2, Chrome:100.0.4896.127

$ ./start_all.sh 16 8
 :
 :
Total allocated ArrayBuffer:16.00 GiB, chunk:8.00 MiB @ Electron:8.5.5, Node:12.13.0, Chrome:80.0.3987.163
Total allocated ArrayBuffer:16.00 GiB, chunk:8.00 MiB @ Electron:9.4.4, Node:12.14.1, Chrome:83.0.4103.122
Total allocated ArrayBuffer:16.00 GiB, chunk:8.00 MiB @ Electron:10.4.7, Node:12.16.3, Chrome:85.0.4183.121
Total allocated ArrayBuffer:16.00 GiB, chunk:8.00 MiB @ Electron:11.5.0, Node:12.18.3, Chrome:87.0.4280.141
Total allocated ArrayBuffer:12.80 GiB, chunk:8.00 MiB @ Electron:13.6.9, Node:14.16.0, Chrome:91.0.4472.164
Total allocated ArrayBuffer:6.40 GiB, chunk:8.00 MiB @ Electron:14.2.9, Node:14.17.0, Chrome:93.0.4577.82
Total allocated ArrayBuffer:6.40 GiB, chunk:8.00 MiB @ Electron:15.5.2, Node:16.5.0, Chrome:94.0.4606.81
Total allocated ArrayBuffer:6.39 GiB, chunk:8.00 MiB @ Electron:16.2.3, Node:16.9.1, Chrome:96.0.4664.174
Total allocated ArrayBuffer:6.39 GiB, chunk:8.00 MiB @ Electron:17.4.1, Node:16.13.0, Chrome:98.0.4758.141
Total allocated ArrayBuffer:6.39 GiB, chunk:8.00 MiB @ Electron:18.1.0, Node:16.13.2, Chrome:100.0.4896.127

$ ./start_all.sh 16 128
 :
 :
Total allocated ArrayBuffer:16.00 GiB, chunk:128.00 MiB @ Electron:8.5.5, Node:12.13.0, Chrome:80.0.3987.163
Total allocated ArrayBuffer:16.00 GiB, chunk:128.00 MiB @ Electron:9.4.4, Node:12.14.1, Chrome:83.0.4103.122
Total allocated ArrayBuffer:16.00 GiB, chunk:128.00 MiB @ Electron:10.4.7, Node:12.16.3, Chrome:85.0.4183.121
Total allocated ArrayBuffer:16.00 GiB, chunk:128.00 MiB @ Electron:11.5.0, Node:12.18.3, Chrome:87.0.4280.141
Total allocated ArrayBuffer:15.75 GiB, chunk:128.00 MiB @ Electron:13.6.9, Node:14.16.0, Chrome:91.0.4472.164
Total allocated ArrayBuffer:7.87 GiB, chunk:128.00 MiB @ Electron:14.2.9, Node:14.17.0, Chrome:93.0.4577.82
Total allocated ArrayBuffer:7.87 GiB, chunk:128.00 MiB @ Electron:15.5.2, Node:16.5.0, Chrome:94.0.4606.81
Total allocated ArrayBuffer:7.75 GiB, chunk:128.00 MiB @ Electron:16.2.3, Node:16.9.1, Chrome:96.0.4664.174
Total allocated ArrayBuffer:7.75 GiB, chunk:128.00 MiB @ Electron:17.4.1, Node:16.13.0, Chrome:98.0.4758.141
Total allocated ArrayBuffer:7.75 GiB, chunk:128.00 MiB @ Electron:18.1.0, Node:16.13.2, Chrome:100.0.4896.127

$ ./start_all.sh 16 1024
 :
 :
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 GiB @ Electron:8.5.5, Node:12.13.0, Chrome:80.0.3987.163
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 GiB @ Electron:9.4.4, Node:12.14.1, Chrome:83.0.4103.122
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 GiB @ Electron:10.4.7, Node:12.16.3, Chrome:85.0.4183.121
Total allocated ArrayBuffer:16.00 GiB, chunk:1.00 GiB @ Electron:11.5.0, Node:12.18.3, Chrome:87.0.4280.141
Total allocated ArrayBuffer:15.00 GiB, chunk:1.00 GiB @ Electron:13.6.9, Node:14.16.0, Chrome:91.0.4472.164
Total allocated ArrayBuffer:7.00 GiB, chunk:1.00 GiB @ Electron:14.2.9, Node:14.17.0, Chrome:93.0.4577.82
Total allocated ArrayBuffer:7.00 GiB, chunk:1.00 GiB @ Electron:15.5.2, Node:16.5.0, Chrome:94.0.4606.81
Total allocated ArrayBuffer:7.00 GiB, chunk:1.00 GiB @ Electron:16.2.3, Node:16.9.1, Chrome:96.0.4664.174
Total allocated ArrayBuffer:7.00 GiB, chunk:1.00 GiB @ Electron:17.4.1, Node:16.13.0, Chrome:98.0.4758.141
Total allocated ArrayBuffer:7.00 GiB, chunk:1.00 GiB @ Electron:18.1.0, Node:16.13.2, Chrome:100.0.4896.127
~~~
