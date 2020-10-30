# delete user from kubeconfig

当删除`projectslate.io` cluster 和 `projectslate.io` context 后，使用`kubectl config view`查看:

```bash
//...
current-context: kubernetes-labs-dev
kind: Config
preferences: {}
users:
- name: projectslate.io
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
    password: KxLR1VLHvSx9Mx2SNbdd1pKHjgLJky1A
    username: admin
- name: projectslate.io-basic-auth
  user:
    password: KxLR1VLHvSx9Mx2SNbdd1pKHjgLJky1A
    username: admin
```

发现这个 cluster 的 user 还存在，删除它

```bash
☁  jest-codelab [master] ⚡  kubectl config unset users.projectslate.io
Property "users.projectslate.io" unset.
☁  jest-codelab [master] ⚡  kubectl config unset users.projectslate.io-basic-auth
Property "users.projectslate.io-basic-auth" unset.
☁  jest-codelab [master] ⚡  k config unset users.gke_shadowsocks-218808_us-west1-a_nodejs-gcp
Property "users.gke_shadowsocks-218808_us-west1-a_nodejs-gcp" unset.
```

### Reference

- https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/#define-clusters-users-and-contexts
