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
