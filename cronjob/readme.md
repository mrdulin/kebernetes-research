# cronjob

查看 cronjob 定期触发任务执行的历史和现状

```bash
☁  kubernetes-labs [master] ⚡  k get cronjob --watch
NAME    SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
hello   */1 * * * *   False     0        48s             2m42s
hello   */1 * * * *   False     1        4s              2m58s
hello   */1 * * * *   False     0        14s             3m8s
hello   */1 * * * *   False     1        4s              3m58s
hello   */1 * * * *   False     0        14s             4m8s
hello   */1 * * * *   False     1        4s              4m58s
hello   */1 * * * *   False     0        14s             5m8s
hello   */1 * * * *   False     1        4s              5m58s
hello   */1 * * * *   False     0        14s             6m8s
hello   */1 * * * *   False     1        4s              6m58s
hello   */1 * * * *   False     0        14s             7m8s
hello   */1 * * * *   False     1        5s              7m59s
hello   */1 * * * *   False     0        15s             8m9s
hello   */1 * * * *   False     1        5s              8m59s
hello   */1 * * * *   False     0        15s             9m9s
```
