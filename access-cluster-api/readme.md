# access cluster api

查看当前 k8s cluster context 的配置(已 kubernetes for docker desktop 为例)

```bash
☁  kubernetes-labs [master] kubectl config view --minify=true
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://kubernetes.docker.internal:6443
  name: docker-desktop
contexts:
- context:
    cluster: docker-desktop
    user: docker-desktop
  name: docker-desktop
current-context: docker-desktop
kind: Config
preferences: {}
users:
- name: docker-desktop
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
```

使用 kubectl 代理

```bash
☁  kubernetes-labs [master] ⚡  kubectl proxy --port=8080 &
[1] 38834
☁  kubernetes-labs [master] ⚡  Starting to serve on 127.0.0.1:8080
curl http://localhost:8080/api/
{
  "kind": "APIVersions",
  "versions": [
    "v1"
  ],
  "serverAddressByClientCIDRs": [
    {
      "clientCIDR": "0.0.0.0/0",
      "serverAddress": "192.168.65.3:6443"
    }
  ]
}%
```

查看支持的资源对象的种类：

```bash
curl http://localhost:8080/api/v1
```

查看集群内 pods, services 等资源对象

```bash
curl http://localhost:8080/api/v1/pods
curl http://localhost:8080/api/v1/services
```

健康检查 api:

```bash
☁  kubernetes-labs [master] ⚡  curl http://localhost:8080/healthz
ok%
```

性能指标 api:

```bash
curl http://localhost:8080/metrics
```
