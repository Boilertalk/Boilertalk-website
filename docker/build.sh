#!/bin/bash

# Install dependencies, production build website
npm install
node_modules/@angular/cli/bin/ng build --prod

# Build nginx static website container
cp docker/Dockerfile ./
docker build -t boilertalk-website .

# Remove tmp Dockerfile
rm Dockerfile

# Push to Google Cloud registry
docker tag boilertalk-website us.gcr.io/boilertalk-main/boilertalk-website
gcloud docker -- push us.gcr.io/boilertalk-main/boilertalk-website
