# tomcat service

```bash
☁  kubernetes-labs [master] ⚡  k get svc tomcat-service -o yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: "2020-10-26T10:21:28Z"
  managedFields:
  - apiVersion: v1
    fieldsType: FieldsV1
    fieldsV1:
      f:spec:
        f:ports:
          .: {}
          k:{"port":8080,"protocol":"TCP"}:
            .: {}
            f:port: {}
            f:protocol: {}
            f:targetPort: {}
        f:selector:
          .: {}
          f:tier: {}
        f:sessionAffinity: {}
        f:type: {}
    manager: kubectl
    operation: Update
    time: "2020-10-26T10:21:28Z"
  name: tomcat-service
  namespace: default
  resourceVersion: "13771"
  selfLink: /api/v1/namespaces/default/services/tomcat-service
  uid: 021bf0f6-df31-4cb5-ab40-ded02a0e4f2f
spec:
  clusterIP: 10.109.141.133
  ports:
  - port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    tier: frontend
  sessionAffinity: None
  type: ClusterIP
status:
  loadBalancer: {}
```
