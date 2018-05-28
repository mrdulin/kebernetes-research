# guestbook

## 部署架构图

![](https://ws1.sinaimg.cn/large/006tNc79gy1frr56ewty6j30qe0i241u.jpg)

## 说明

使用 minikube

创建各个 RC, Service

```bash
kubectl create -f ./guestbook/<资源对象配置文件>.yaml
```

访问 frontend service

```bash
minikube service frontend
```

配置 shell，可以

```bash
eval $(minikube docker-env)
```

使用 docker ps 查看 pod 中 docker 的 container

```bash
➜  kubernetes-research git:(master) ✗ docker ps | grep frontend
b2b0f4d3608b        kubeguide/guestbook-php-frontend   "apache2-foreground"     15 minutes ago      Up 15 minutes                              k8s_frontend_frontend-nhhdc_default_d47914e3-6250-11e8-b27e-080027373ccf_0
99f68c630b3e        kubeguide/guestbook-php-frontend   "apache2-foreground"     15 minutes ago      Up 15 minutes                              k8s_frontend_frontend-mfvc4_default_d477262d-6250-11e8-b27e-080027373ccf_0
a0f197acb501        kubeguide/guestbook-php-frontend   "apache2-foreground"     15 minutes ago      Up 15 minutes                              k8s_frontend_frontend-czlc8_default_d478cc4b-6250-11e8-b27e-080027373ccf_0
4d0efa726174        k8s.gcr.io/pause-amd64:3.1         "/pause"                 18 minutes ago      Up 18 minutes                              k8s_POD_frontend-czlc8_default_d478cc4b-6250-11e8-b27e-080027373ccf_0
0eba3e8deaa7        k8s.gcr.io/pause-amd64:3.1         "/pause"                 18 minutes ago      Up 18 minutes                              k8s_POD_frontend-nhhdc_default_d47914e3-6250-11e8-b27e-080027373ccf_0
0933b2e5c337        k8s.gcr.io/pause-amd64:3.1         "/pause"                 18 minutes ago      Up 18 minutes                              k8s_POD_frontend-mfvc4_default_d477262d-6250-11e8-b27e-080027373ccf_0
```

进入 frontend docker container

```bash
➜  kubernetes-research git:(master) ✗ docker exec -it b2b /bin/bash
root@frontend-nhhdc:/var/www/html#
```

打印 pod 注入到 docker container 中的环境变量

```bash
root@frontend-nhhdc:/var/www/html# printenv
REDIS_SLAVE_PORT_6379_TCP=tcp://10.110.193.31:6379
FRONTEND_PORT_80_TCP_ADDR=10.102.20.105
REDIS_SLAVE_SERVICE_HOST=10.110.193.31
HOSTNAME=frontend-nhhdc
KUBERNETES_PORT_443_TCP_PORT=443
KUBERNETES_PORT=tcp://10.96.0.1:443
TERM=xterm
PHP_INI_DIR=/usr/local/etc/php
REDIS_SLAVE_PORT=tcp://10.110.193.31:6379
FRONTEND_PORT_80_TCP_PORT=80
KUBERNETES_SERVICE_PORT=443
KUBERNETES_SERVICE_HOST=10.96.0.1
GET_HOSTS_FROM=env
FRONTEND_PORT_80_TCP_PROTO=tcp
REDIS_MASTER_PORT_6379_TCP_ADDR=10.101.122.142
KUBERNETES_BOOTCAMP_PORT_8080_TCP_ADDR=10.100.106.232
NGINX_SERVICE_PORT_8000_TCP_ADDR=10.109.20.127
NGINX_SERVICE_SERVICE_HOST=10.109.20.127
REDIS_MASTER_PORT_6379_TCP=tcp://10.101.122.142:6379
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
REDIS_SLAVE_PORT_6379_TCP_PROTO=tcp
GPG_KEYS=0BD78B5F97500D450838F95DFE857D9A90D90EC1 6E4F6AB321FDC07F2C332E3AC2BF0BC433CFC8B3
REDIS_MASTER_SERVICE_PORT=6379
PWD=/var/www/html
KUBERNETES_BOOTCAMP_SERVICE_HOST=10.100.106.232
NGINX_SERVICE_PORT=tcp://10.109.20.127:8000
REDIS_SLAVE_SERVICE_PORT=6379
FRONTEND_PORT=tcp://10.102.20.105:80
NGINX_SERVICE_PORT_8000_TCP=tcp://10.109.20.127:8000
KUBERNETES_BOOTCAMP_PORT_8080_TCP=tcp://10.100.106.232:8080
FRONTEND_SERVICE_PORT=80
REDIS_MASTER_SERVICE_HOST=10.101.122.142
SHLVL=1
HOME=/root
NGINX_SERVICE_PORT_8000_TCP_PORT=8000
FRONTEND_SERVICE_HOST=10.102.20.105
REDIS_SLAVE_PORT_6379_TCP_ADDR=10.110.193.31
KUBERNETES_BOOTCAMP_PORT_8080_TCP_PORT=8080
KUBERNETES_BOOTCAMP_SERVICE_PORT=8080
KUBERNETES_PORT_443_TCP_PROTO=tcp
KUBERNETES_SERVICE_PORT_HTTPS=443
REDIS_MASTER_PORT_6379_TCP_PORT=6379
FRONTEND_PORT_80_TCP=tcp://10.102.20.105:80
REDIS_MASTER_PORT_6379_TCP_PROTO=tcp
REDIS_SLAVE_PORT_6379_TCP_PORT=6379
KUBERNETES_BOOTCAMP_PORT_8080_TCP_PROTO=tcp
NGINX_SERVICE_PORT_8000_TCP_PROTO=tcp
NGINX_SERVICE_SERVICE_PORT=8000
PHP_EXTRA_BUILD_DEPS=apache2-dev
REDIS_MASTER_PORT=tcp://10.101.122.142:6379
KUBERNETES_BOOTCAMP_PORT=tcp://10.100.106.232:8080
KUBERNETES_PORT_443_TCP_ADDR=10.96.0.1
KUBERNETES_PORT_443_TCP=tcp://10.96.0.1:443
PHP_VERSION=5.6.12
PHP_EXTRA_CONFIGURE_ARGS=--with-apxs2
_=/usr/bin/printenv
```
