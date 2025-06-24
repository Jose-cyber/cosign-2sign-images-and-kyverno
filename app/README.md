## App Test

It's an example of Node.js application using express.

## Run local

Install dependencies:
```bash
npm install
```

Run:
```bash
npm run dev
```
or
```bash
node src/index.js
```

## Tests
run:
```bash
npm run test
```

## Build docker image

Build:
```bash
docker build -t josecyber/app-image-signed -f Dockerfile .
```

## Run docker image

```bash
docker run -d -p8080:8080 josecyber/app-image-signed
```
