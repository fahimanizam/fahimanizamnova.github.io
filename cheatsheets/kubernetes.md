# 🧠 Kubernetes Cheatsheet

## 🔹 Basic Commands

| Command                      | Description                      |
|-----------------------------|----------------------------------|
| `kubectl version`           | Show client and server version   |
| `kubectl cluster-info`      | Display cluster info             |
| `kubectl config view`       | Show kubeconfig details          |
| `kubectl get nodes`         | List all nodes                   |
| `kubectl get all`           | Get all resources in current ns  |

---

## 🔹 Context & Namespace

| Command                                                    | Description                    |
|------------------------------------------------------------|--------------------------------|
| `kubectl config get-contexts`                              | List all contexts              |
| `kubectl config use-context <name>`                        | Switch context                 |
| `kubectl get ns`                                           | List namespaces                |
| `kubectl config set-context --current --namespace=<ns>`    | Set default namespace          |

---

## 🔹 Pods

| Command                                      | Description                |
|---------------------------------------------|----------------------------|
| `kubectl get pods`                          | List all pods              |
| `kubectl describe pod <name>`              | Show pod details           |
| `kubectl logs <pod>`                        | Show logs                  |
| `kubectl exec -it <pod> -- bash`           | Access pod terminal        |
| `kubectl delete pod <pod>`                  | Delete a pod               |

---

## 🔹 Deployments

| Command                                                 | Description                     |
|----------------------------------------------------------|---------------------------------|
| `kubectl get deployments`                               | List deployments                |
| `kubectl create deployment <name> --image=<image>`      | Create a deployment             |
| `kubectl scale deployment <name> --replicas=<n>`        | Scale deployment                |
| `kubectl rollout status deployment/<name>`              | Watch rollout status            |
| `kubectl rollout undo deployment/<name>`                | Rollback to previous version    |
| `kubectl delete deployment <name>`                      | Delete deployment               |

---

## 🔹 Services

| Command                                                       | Description              |
|----------------------------------------------------------------|--------------------------|
| `kubectl get svc`                                              | List services            |
| `kubectl expose deployment <name> --type=NodePort --port=80`  | Create service           |
| `kubectl describe svc <name>`                                 | Service details          |

---

## 🔹 ConfigMaps & Secrets

| Command                                                              | Description           |
|---------------------------------------------------------------------|-----------------------|
| `kubectl create configmap <name> --from-literal=key=value`          | Create ConfigMap      |
| `kubectl get configmap`                                             | List ConfigMaps       |
| `kubectl create secret generic <name> --from-literal=key=value`     | Create Secret         |
| `kubectl get secret`                                                | List Secrets          |
| `kubectl describe secret <name>`                                    | Describe Secret       |

---

## 🔹 Apply, Delete, Explain

| Command                                           | Description             |
|--------------------------------------------------|-------------------------|
| `kubectl apply -f <file>.yaml`                   | Apply config            |
| `kubectl delete -f <file>.yaml`                  | Delete config           |
| `kubectl explain <resource>`                     | Explain resource        |
| `kubectl explain pod.spec.containers`            | Deep dive explain       |

---

## 🔹 Useful One-liners

| Task                                 | Command                                 |
|--------------------------------------|-----------------------------------------|
| Get all pods in all namespaces       | `kubectl get pods --all-namespaces`     |
| Get pods with wide output            | `kubectl get pods -o wide`              |
| Port forward                         | `kubectl port-forward <pod> 8080:80`    |
| Dry run                              | `kubectl apply -f file.yaml --dry-run=client -o yaml` |

---

## 🔹 Resources

- [Kubernetes Docs](https://kubernetes.io/docs/)
- [k8s YAML Generator](https://k8syaml.com/)
- [Katacoda Playground](https://katacoda.com/courses/kubernetes)

---

> 💡 Tip: Use `kubectl get <resource> -o yaml` to inspect live resource definitions.

