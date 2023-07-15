db = db.getSiblingDB('mydb');
db.createUser({
  user: 'myadmin',
  pwd: 'myadmin',
  roles: [
    { role: 'readWrite', db: 'mydb' }
  ]
});

