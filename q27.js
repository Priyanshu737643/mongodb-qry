//! User Management
// use admin
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [{ role: "root", db:"admin" }],
});

// go to Program Files -> MongoDb -> server -> bin -> mongod.cfg
// open in vs code edit security

//security:
// authorization: enabled

// go to services
// restart mongoDb server

//? now u can't access dbs without authentication
// mongosh --username admin -authenticationDatabase admin
//* mongosh --username username -authenticationDatabase db


//! creating user1  ---------------------------------------
//? mongosh --username admin -authenticationDatabase admin
//? use lpu26a
db.createUser({
  user: "user1",
  pwd: "user1",
  roles: [{ role: "read", db: "lpu26a" }],
});
//? exit
//? mongosh --username user1 -authenticationDatabase lpu26a
//? show dbs
//* only lpu26a will show

//! creating user2  ---------------------------------------
//? mongosh --username admin -authenticationDatabase admin
//? use lpu26a
db.createUser({
  user: "user2",
  pwd: "user2",
  roles: [{ role: "read", db: "lpu26a" }],
});
//? exit
//? mongosh --username user2 -authenticationDatabase lpu26a
//? show dbs
//* only lpu26a will show

//? mongosh --username admin -authenticationDatabase admin
// use lpu26a
// db.getUsers();
// use admin
// db.getUsers();
 
//! connection string to connect in mongoDb compass
//* mongodb://user1:user1@localhost:27017/lpu26a

//! actual way of connecting to a server in shell
//* mongosh "mongodb://user1:user1@localhost:27017/lpu26a"



