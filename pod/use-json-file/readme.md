# create pod

`create.json`是 pod 描述文件

创建 pod:

```bash
kubernetes-research git:(master) ✗ kubectl create -f ./pod/podtest.json
pod "podtest" created
```

查看创建的 pod 信息:

```bash
~ kubectl get pod
NAME                                   READY     STATUS    RESTARTS   AGE
kubernetes-bootcamp-7799cbcb86-2hrlp   1/1       Running   0          22h
kubernetes-bootcamp-7799cbcb86-hkk52   1/1       Running   0          21h
kubernetes-bootcamp-7799cbcb86-zpx5f   1/1       Running   0          22h
podtest                                2/2       Running   0          15s
```

查看 pod 中容器输出的 log 信息:

```bash
➜  ~ kube-shell
kube-shell> kubectl logs podtest master1
1:C 25 May 04:27:33.315 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 25 May 04:27:33.316 # Redis version=4.0.9, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 25 May 04:27:33.316 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 25 May 04:27:33.317 * Running mode=standalone, port=6379.
1:M 25 May 04:27:33.317 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 25 May 04:27:33.317 # Server initialized
1:M 25 May 04:27:33.317 * Ready to accept connections
```

## 问题

- `The Pod "podtest" is invalid: spec.containers[1].ports[0].hostPort: Duplicate value: "TCP//6388"`

原因： 同一个 pod 的不同容器的端口不能映射到宿主机上的同一个端口，会引起端口冲突

- 怎么通过 ssh 登录到 minikube VM 中 pod 中的容器？

这里以 podtest.json 资源对象为例，要通过 ssh 的方式登录到 master2 容器

1. `minikube ssh` - 登录到 minikube VM 中

2. `ssh root@127.0.0.1 -p 8888` - 8888 端口是 minikube VM 作为宿主机的端口, 22 端口是该 VM 中运行的 master2 容器内的端口，其实就是容器端口和宿主机端口的映射。这里需要清楚的是你当前所在的环境，是 minikube VM 中，而不是本地系统

```bash
$ ssh root@127.0.0.1 -p 8888
root@127.0.0.1's password:
Welcome to Alpine!

The Alpine Wiki contains a large amount of how-to guides and general
information about administrating Alpine systems.
See <http://wiki.alpinelinux.org>.

You can setup the system with the command: setup-alpine

You may change this message by editing /etc/motd.

podtest:~#
```

root 用户的默认密码是 root
