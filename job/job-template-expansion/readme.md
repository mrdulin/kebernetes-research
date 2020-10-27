# job template expansion

生成三个 job:

```bash
./genJob.sh
```

创建 job:

```bash
☁  job-template-expansion [master] ⚡  k create -f ./jobs
```

查看 job:

```bash
☁  job-template-expansion [master] ⚡  k get jobs -l jobgroup=jobexample
NAME                  COMPLETIONS   DURATION   AGE
process-item-apple    1/1           17s        2m11s
process-item-banana   1/1           12s        2m11s
process-item-cherry   1/1           24s        2m11s
```

查看 job 运行日志：

```bash
☁  job-template-expansion [master] ⚡  k logs -l jobgroup=jobexample
Processing item apple
Processing item banana
Processing item cherry
```
