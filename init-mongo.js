print("***************** Initializing MongoDB container *****************");
#db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);
#db.createUser({
#  user: process.env.MONGO_INITDB_ROOT_USERNAME,
#  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
#  roles: [
#    { role: 'readWrite', db: process.env.MONGO_INITDB_DATABASE }
#  ]
#});
db = db.getSiblingDB(MONGODB_DATABASE);
db.createUser({
  user: MONGODB_USERNAME,
  pwd: MONGODB_PASSWORD,
  roles: [
    { role: 'readWrite', db: MONGODB_DATABASE }
  ]
});
print("***************** MongoDB container Initialization Complete *****************");
