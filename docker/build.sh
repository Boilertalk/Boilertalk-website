#!/bin/bash

# Install dependencies, production build website
npm install
node_modules/@angular/cli/bin/ng build --prod

# Move tmp files up
cp docker/Dockerfile ./
cp docker/nginx-default.conf ./

# Build nginx static website container
docker build -t boilertalk-website .

# Remove tmp Dockerfile
rm Dockerfile
rm nginx-default.conf 

# Push to Google Cloud registry
docker tag boilertalk-website us.gcr.io/boilertalk-main/boilertalk-website
gcloud docker -- push us.gcr.io/boilertalk-main/boilertalk-website
