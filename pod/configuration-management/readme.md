# pod 配置管理

创建 configmap

```bash
☁  kubernetes-labs [master] ⚡  k create -f ./pod/configuration-management/cm-appvars.yaml
configmap/cm-appvars created
```

查看所有 configmap

```bash
☁  kubernetes-labs [master] ⚡  k get configmap
NAME         DATA   AGE
cm-appvars   2      8s
☁  kubernetes-labs [master] ⚡  k describe configmap cm-appvars
Name:         cm-appvars
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
appdatadir:
----
/var/data
appLogLevel:
----
info
Events:  <none>
☁  kubernetes-labs [master] ⚡  k get configmap cm-appvars -o yaml
apiVersion: v1
data:
  appLogLevel: info
  appdatadir: /var/data
kind: ConfigMap
metadata:
  creationTimestamp: "2020-10-27T09:31:20Z"
  managedFields:
  - apiVersion: v1
    fieldsType: FieldsV1
    fieldsV1:
      f:data:
        .: {}
        f:appLogLevel: {}
        f:appdatadir: {}
    manager: kubectl
    operation: Update
    time: "2020-10-27T09:31:20Z"
  name: cm-appvars
  namespace: default
  resourceVersion: "38030"
  selfLink: /api/v1/namespaces/default/configmaps/cm-appvars
  uid: 4f04f657-499a-47e5-b297-b4769ddcf3a1
```
