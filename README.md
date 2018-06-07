# kubernetes-research

A nodejs application for kubernetes research

## 说明

安装 minikube

```bash
brew cask install minikube
```

在本机启动 kubernetes 集群: `minikube start`

获取本地 kubernetes cluster IP: `minikube ip`

ssh 登录进入 minikube VM: `minikube ssh`

打开本地 cluster 的 kubernetes dashboard: `minikube dashboard`

列出通过 node port 暴露出来的 service: `minikube service list`

## 问题

1. 如何查看pod中运行的docker container?

* 在终端窗口执行`eval $(minikube docker-env)`命令，`docker ps`就可以查看在 minikube 的 VM 中运行的 container 了

* 或者，使用`minikube ssh`登录到minikube VM中，再运行`docker ps`查看

2. pod中的两个容器中的应用通信?



## 参考链接

minikube 访问 Node port 暴露的服务 - https://github.com/kubernetes/minikube/blob/master/README.md#services

https://kubernetes.io/docs/getting-started-guides/minikube/

https://kubernetes.io/cn/

http://kubernetes.kansea.com/

https://github.com/kubernetes/minikube

https://yeasy.gitbooks.io/docker_practice/kubernetes/

打造高效的 Kubernetes 命令行终端 - https://juejin.im/entry/5aa5faa86fb9a028bf04f56b

利用 Minikube 来部署一个 nodejs 应用 - https://juejin.im/entry/59841c2e51882525d22c8227

Manage Kubernetes Clusters on AWS Using Kops - https://aws.amazon.com/cn/blogs/compute/kubernetes-clusters-aws-kops/

Deploy a Kubernetes Cluster in AWS with Kops - https://kumorilabs.com/blog/k8s-1-deploy-kubernetes-cluster-aws-kops/