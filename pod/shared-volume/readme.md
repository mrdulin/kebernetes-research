# Pod 容器共享 volume

创建 Pod 资源:

```bash
k create -f ./pod/pod-volume-applogs.yaml
```

查看创建的 Pod 资源:

```bash
☁  kubernetes-labs [master] ⚡  k get pods
NAME                        READY   STATUS    RESTARTS   AGE
frontend-797f47d685-bzj7c   1/1     Running   1          21h
volume-pod                  2/2     Running   0          7m27s
```

进入 Pod 中的`tomcat`容器：

```bash
☁  kubernetes-labs [master] ⚡  k exec -it volume-pod -c tomcat bash
kubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl kubectl exec [POD] -- [COMMAND] instead.
root@volume-pod:/usr/local/tomcat#
```

打开新的 terminal session， 查看挂载到`busybox`容器中`/logs`目录下的日志

```bash
☁  kubernetes-labs [master] ⚡  k logs -f volume-pod -c busybox
27-Oct-2020 08:40:49.012 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent Loaded Apache Tomcat Native library [1.2.25] using APR version [1.6.5].
27-Oct-2020 08:40:49.017 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent APR capabilities: IPv6 [true], sendfile [true], accept filters [false], random [true].
27-Oct-2020 08:40:49.018 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent APR/OpenSSL configuration: useAprConnector [false], useOpenSSL [true]
27-Oct-2020 08:40:49.023 INFO [main] org.apache.catalina.core.AprLifecycleListener.initializeSSL OpenSSL successfully initialized [OpenSSL 1.1.1d  10 Sep 2019]
27-Oct-2020 08:40:49.726 INFO [main] org.apache.coyote.AbstractProtocol.init Initializing ProtocolHandler ["http-nio-8080"]
27-Oct-2020 08:40:49.780 INFO [main] org.apache.catalina.startup.Catalina.load Server initialization in [1136] milliseconds
27-Oct-2020 08:40:49.879 INFO [main] org.apache.catalina.core.StandardService.startInternal Starting service [Catalina]
27-Oct-2020 08:40:49.879 INFO [main] org.apache.catalina.core.StandardEngine.startInternal Starting Servlet engine: [Apache Tomcat/9.0.39]
27-Oct-2020 08:40:49.889 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
27-Oct-2020 08:40:49.936 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in [153] milliseconds
27-Oct-2020 08:44:59.925 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/ROOT]
27-Oct-2020 08:45:00.420 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/ROOT] has finished in [491] ms
27-Oct-2020 08:45:00.420 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/examples]
27-Oct-2020 08:45:00.962 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/examples] has finished in [541] ms
27-Oct-2020 08:45:00.963 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/host-manager]
27-Oct-2020 08:45:01.024 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/host-manager] has finished in [61] ms
27-Oct-2020 08:45:01.025 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/manager]
27-Oct-2020 08:45:01.058 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/manager] has finished in [33] ms
27-Oct-2020 08:45:01.059 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/docs]
27-Oct-2020 08:45:01.079 INFO [Catalina-utility-2] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/docs] has finished in [20] ms
```

访问 tomcat 欢迎页面:

```bash
root@volume-pod:/usr/local/tomcat# curl http://localhost:8080
```

tomcat 日志写入到`/usr/local/tomcat/logs`目录, 由于同属于一个 pod，共享 pod 级别的 volume，因此在`busybox`容器的`/logs`可以读到 tomcat 写入的日志
