#!/bin/bash

# Find the container name containing "mongodb"
container_name=$(docker ps --format '{{.Names}}' | grep 'mongodb')
echo  "************* GOING INSIDE CONTAINER *************"
# Execute the command within the MongoDB container
docker exec -it "$container_name" mongo <<EOF
use $MONGODB_DATABASE
db.createUser({
  user: "$MONGODB_USERNAME",
  pwd: "$MONGODB_PASSWORD",
  roles: [{ role: "root", db: "$MONGODB_DATABASE" }]
})
EOF
echo  "**************************"
