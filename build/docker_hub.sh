#!/bin/bash

set -ex
set -o pipefail

# DockerHub
USERNAME=kameri
PASSWORD=kameri4thewin!
docker login -u $USERNAME -p $PASSWORD

# echo "Building image front-proxy:v21 ..."
# cd ../envoy/production
# docker build -t envoy -f Dockerfile .
# docker tag envoy kameri/envoy:v21
# docker push kameri/envoy:v21

# echo "Building image appone:v20 ..."
# cd ../backend/service1
# docker build -t appone -f Dockerfile .
# docker tag appone kameri/appone:v20
# docker push kameri/appone:v20

# echo "Building image apptwo:v10 ..."
# cd ../backend/service2
# docker build -t apptwo -f Dockerfile .
# docker tag apptwo kameri/apptwo:v10
# docker push kameri/apptwo:v10

# echo "Building image authservice:v1.1 ..."
# cd ../backend/authservice
# docker build -t authservice -f Dockerfile .
# docker tag authservice kameri/authservice:v1.1
# docker push kameri/authservice:v1.1

# echo "Building image authdb:v1.0 ..."
# cd ../authdb
# docker build -t authdb -f Dockerfile .
# docker tag authdb kameri/authdb:v1.1
# docker push kameri/authdb:v1.1

# echo "Building image robotdb:v1.0 ..."
# cd ../robotdb
# docker build -t robotdb -f Dockerfile .
# docker tag robotdb kameri/robotdb:v1.1
# docker push kameri/robotdb:v1.1

echo "Building image devicedb:v1.0 ..."
cd ../databases/devicedb
docker build -t devicedb -f Dockerfile .
docker tag devicedb kameri/devicedb:v1.0
docker push kameri/devicedb:v1.0

# echo "Building image frontend:v41 ..."
# cd ../frontend
# docker build -t frontend -f Dockerfile.prod .
# docker tag frontend kameri/frontend:v41
# docker push kameri/frontend:v41

# echo "Building image hivemq:v10 ..."
# cd ../hivemq
# docker build -t hivemq -f Dockerfile .
# docker tag hivemq kameri/hivemq:v10
# docker push kameri/hivemq:v10