# Namespace: 集群环境隔离与共享

创建 namespaces:

```bash
☁  kubernetes-labs [master] ⚡  k create -f ./namespace/work-with-context/
```

查看 namespaces:

```bash
☁  kubernetes-labs [master] ⚡  k get namespace
NAME              STATUS   AGE
default           Active   3d22h
development       Active   2d23h
kube-node-lease   Active   3d23h
kube-public       Active   3d23h
kube-system       Active   3d23h
production        Active   5m1s
```

设置集群:

```bash
☁  kubernetes-labs [master] ⚡  k config set-cluster kubernetes-labs --server=https://kubernetes.docker.internal:6443
Cluster "kubernetes-labs" set.
```

`--server`指定的地址是 kubernetes for docker desktop 的 server 地址，可以通过如下命令查看：

```bash
☁  kubernetes-labs [master] ⚡  kubectl cluster-info
Kubernetes master is running at https://kubernetes.docker.internal:6443
KubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

查看集群：

```bash
☁  kubernetes-labs [master] ⚡  k config get-clusters
NAME
docker-desktop
projectslate.io
gke_pg-gx-e-app-700458_us-east1-c_cedar-cluster
gke_pg-gx-e-app-700458_us-central1-a_cedar-test
gke_pg-us-p-app-126019_us-east1_slate-cluster
gke_pg-gx-e-app-700458_us-east1-c_developer-test
gke_pg-us-p-app-319619_us-east1_fransuite-cluster
gke_pg-us-p-app-695770_us-east1-c_cedar-cluster
gke_shadowsocks-218808_us-west1-a_nodejs-gcp
kubernetes-labs
gke_pg-us-n-app-525483_us-east1-c_slate-cluster
gke_pg-us-n-app-123394_us-east1-c_slate-cluster
gke_pg-us-n-app-991483_us-east1-c_cedar-cluster
```

定义 context:

```bash
☁  kubernetes-labs [master] ⚡  kubectl config set-context kubernetes-labs-dev --cluster=kubernetes-labs --namespace=development --user=dev
Context "kubernetes-labs-dev" modified.
☁  kubernetes-labs [master] ⚡  kubectl config set-context kubernetes-labs-prod --cluster=kubernetes-labs --namespace=production --user=prod
Context "kubernetes-labs-prod" created.
```

查看 context:

```bash
☁  kubernetes-labs [master] ⚡  k config get-contexts
CURRENT   NAME                                                CLUSTER                                             AUTHINFO                                            NAMESPACE
*         docker-desktop                                      docker-desktop                                      docker-desktop
          gke_pg-gx-e-app-700458_us-central1-a_cedar-test     gke_pg-gx-e-app-700458_us-central1-a_cedar-test     gke_pg-gx-e-app-700458_us-central1-a_cedar-test
          gke_pg-gx-e-app-700458_us-east1-c_cedar-cluster     gke_pg-gx-e-app-700458_us-east1-c_cedar-cluster     gke_pg-gx-e-app-700458_us-east1-c_cedar-cluster
          gke_pg-gx-e-app-700458_us-east1-c_developer-test    gke_pg-gx-e-app-700458_us-east1-c_developer-test    gke_pg-gx-e-app-700458_us-east1-c_developer-test
          gke_pg-us-n-app-123394_us-east1-c_slate-cluster     gke_pg-us-n-app-123394_us-east1-c_slate-cluster     gke_pg-us-n-app-123394_us-east1-c_slate-cluster
          gke_pg-us-n-app-525483_us-east1-c_slate-cluster     gke_pg-us-n-app-525483_us-east1-c_slate-cluster     gke_pg-us-n-app-525483_us-east1-c_slate-cluster
          gke_pg-us-n-app-991483_us-east1-c_cedar-cluster     gke_pg-us-n-app-991483_us-east1-c_cedar-cluster     gke_pg-us-n-app-991483_us-east1-c_cedar-cluster
          gke_pg-us-p-app-126019_us-east1_slate-cluster       gke_pg-us-p-app-126019_us-east1_slate-cluster       gke_pg-us-p-app-126019_us-east1_slate-cluster
          gke_pg-us-p-app-319619_us-east1_fransuite-cluster   gke_pg-us-p-app-319619_us-east1_fransuite-cluster   gke_pg-us-p-app-319619_us-east1_fransuite-cluster
          gke_pg-us-p-app-695770_us-east1-c_cedar-cluster     gke_pg-us-p-app-695770_us-east1-c_cedar-cluster     gke_pg-us-p-app-695770_us-east1-c_cedar-cluster
          gke_shadowsocks-218808_us-west1-a_nodejs-gcp        gke_shadowsocks-218808_us-west1-a_nodejs-gcp        gke_shadowsocks-218808_us-west1-a_nodejs-gcp
          kubernetes-labs-dev                                 kubernetes-labs                                     dev                                                 development
          kubernetes-labs-prod                                kubernetes-labs                                     prod                                                production
          projectslate.io                                     projectslate.io                                     projectslate.io
```

设置工作组在特定的 context 环境下工作:

```bash
☁  kubernetes-labs [master] ⚡  k config use-context kubernetes-labs-dev
Switched to context "kubernetes-labs-dev".
```

Next, https://stackoverflow.com/questions/64604255/how-to-do-authentication-when-create-new-context-for-the-cluster-of-standalone-k
