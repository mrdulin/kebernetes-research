# namespace

create namespace

```bash
kubernetes-labs [master] ⚡  k create -f ./namespace/busybox-deployment.yaml
```

create busybox deployment in `development` namespace

```bash
☁  kubernetes-labs [master] ⚡  k create -f ./namespace/busybox-deployment.yaml
```

Check pods in `development` namespace

```bash
k get pods --namespace development
NAME      READY   STATUS    RESTARTS   AGE
busybox   1/1     Running   0          67s
```
