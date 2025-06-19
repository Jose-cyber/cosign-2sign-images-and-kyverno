# Cosign and Kyverno


Required:
 * [cosign](https://docs.sigstore.dev/system_config/installation/)
 * [kind](https://kind.sigs.k8s.io/)

## Cosign 
Generating the key pair, using cosign:
'''
cosign generate-key-pair
'''

sign image
'''
cosign sign --key .keys/cosign.key josecyber/app-image-signed
'''

verify
'''
cosign verify --key .keys/cosign.pub josecyber/app-image-signed
'''

## Create a kind cluster:
Apply the code below to create a kind cluster:

'''
kind create cluster --config=k8s/cluster.yaml
'''

## Install nginx in cluster:

'''
kubectl --namespace ingress-nginx apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
'''

## Deploy the app

Deploy the app:
'''
kubectl apply -f k8s/app/
'''


## Install Kyverno

'''
helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo update
helm install kyverno kyverno/kyverno -n kyverno --create-namespace
'''



