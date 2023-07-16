#!/bin/bash

echo  "************* GOING INSIDE MONGODB *************"

mongosh <<EOF
use $MONGODB_DATABASE
db.createUser({
  user: "$MONGODB_USERNAME",
  pwd: "$MONGODB_PASSWORD",
  roles: [{ role: "readWrite", db: "$MONGODB_DATABASE" }]
})
EOF
echo  "************ DONE **************"

