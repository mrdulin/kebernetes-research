# ReplicationController

创建 rc:

```bash
➜  kubernetes-research git:(master) ✗ kubectl create -f ./rc/mongo-rc.yaml
replicationcontroller "mongo" created
```

查看 rc:

```bash
➜  kubernetes-research git:(master) ✗ kubectl get rc
NAME      DESIRED   CURRENT   READY     AGE
mongo     1         1         0         8s
```

## 问题

1.  如何在本机通过 curl 访问 minikube 中的 pod?

以 webapp-rc 为例

https://stackoverflow.com/questions/50564446/minikube-how-to-access-pod-via-pod-ip-using-curl
