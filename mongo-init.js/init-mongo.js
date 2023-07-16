print("***************** Initializing MongoDB container *****************");
#db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);
#db.createUser({
#  user: process.env.MONGO_INITDB_ROOT_USERNAME,
#  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
#  roles: [
#    { role: 'readWrite', db: process.env.MONGO_INITDB_DATABASE }
#  ]
#});
#############
############
#db = db.getSiblingDB(MONGODB_DATABASE);
#db.createUser({
#  user: env.MONGODB_USERNAME,
#  pwd: env.MONGODB_PASSWORD,
#  roles: [
#    { role: 'readWrite', db: MONGODB_DATABASE }
#  ]
#});
#############
############
const myusername = process.env.MONGODB_USERNAME;
const mypassword = process.env.MONGODB_PASSWORD;
const mydatabase = process.env.MONGODB_DATABASE;

db.getSiblingDB(databaseName).createUser({
  user: myusername,
  pwd: mypassword,
  roles: [
    { role: "readWrite", db: mydatabase }
  ]
});

print("***************** MongoDB container Initialization Complete *****************");
