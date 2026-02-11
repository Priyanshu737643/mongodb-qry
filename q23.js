//! Server Replication
// Create folder mongo-replica
// Create folders - usa, uk, india  -  inside mongo-replica folder
//? these folders are the data folders that we have seen in our local server folder "data"
// these folder creation is only for learning , in real we don't create any folder

//? COMMANDS
// given common replSet rs1 = (cluster = all the server are part of 1 group)

//! usa
//  mongod -replSet rs1 --dbpath "d:\mongo-replica\usa" --port 27018

//! uk
//  mongod -replSet rs1 --dbpath "d:\mongo-replica\uk" --port 27019

//! india
//  mongod -replSet rs1 --dbpath "d:\mongo-replica\india" --port 27020


//! new tab  - I st
// mongosh --port 27018

rs.initiate({
    _id: "rs1",
    members: [
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})

rs.config()

rs.status()

//! new tab  -  II nd
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"  //? it will directly connect us to PRIMARY server

// use mydatabase
// db.users.insertOne({name:"Sumanth",age:21})


//! III rd onwards
//! new tab (usa server - PRIMARY)
// mongosh --port 27018
// show dbs
// use mydatabase
// show collections
// db.users.find()


//! new tab  (uk server - SECONDARY)
// mongosh --port 27019
// show dbs
// use mydatabase
// show collections
//? db.getMongo().setReadPref("secondary")
// db.users.find()  //! in some cases it will not work


//! new tab  (india server - SECONDARY)
// mongosh --port 27020
// show dbs
// use mydatabase
// show collections
//? db.getMongo().setReadPref("secondary")
// db.users.find()  //! in some cases it will not work

//* manually down a server
db.shutdownServer();   

for (let i = 0; i < 100; i++)
{
    db.users.insertOne({ name: "User" + i, age: 21 });
}
// it
db.users.countDocuments();