# Cosign

Cosign is a tool from the CNCF (Cloud Native Computing Foundation) used for **signing, verifying, and storing signatures for container images**. It helps ensure the integrity and authenticity of images used in Kubernetes environments and CI/CD pipelines.

---

## Hands-on: Basic Cosign Usage


### Generating the key pair

Generating the key pair, using cosign:
```bash
cosign generate-key-pair
```
This will generate two files: .keys/cosign.key (private key) and .keys/cosign.pub (public key).


### Signing

Signing a container image:
```bash
cosign sign --key .keys/cosign.key josecyber/app-image-signed
```
Replace josecyber/app-image-signed with your container image name.


### Verifying

Verifying the image signature:
```bash
cosign verify --key .keys/cosign.pub josecyber/app-image-signed
```
This command verifies that the image was signed with the corresponding private key.


## Useful links
 * [Cosign Documentation](https://github.com/sigstore/cosign)
 * [CNCF Sigstore Project](https://www.sigstore.dev/)

