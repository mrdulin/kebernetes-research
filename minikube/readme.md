# minikube

安装 minikube

```bash
brew install minikube
```

在本机启动 kubernetes 集群: `minikube start`

获取本地 kubernetes cluster IP: `minikube ip`

ssh 登录进入 minikube VM: `minikube ssh`

打开本地 cluster 的 kubernetes dashboard: `minikube dashboard`

列出通过 node port 暴露出来的 service: `minikube service list`

- 如何查看 pod 中运行的 docker container?

在终端窗口执行`eval $(minikube docker-env)`命令，`docker ps`就可以查看在 minikube 的 VM 中运行的 container 了；或者，使用`minikube ssh`登录到 minikube VM 中，再运行`docker ps`查看
