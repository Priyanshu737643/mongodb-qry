// Create folder dbshards
// create sub folders - conf, confr, s1, s1r, s2, s2r
// Note: these 6 folders represent servers located in 6 different locations or countries

//! Config Server -----------------------------------------
//! 1st tab
//? mongod --configsvr -replSet cf --dbpath "d:\dbshards\conf" --port 27018

//! 2nd tab
//? mongod --configsvr -replSet cf --dbpath "d:\dbshards\confr" --port 27019

//! 3rd tab
//? mongosh --port 27018
rs.initiate({
  _id: "cf",
  members: [
    { _id: 0, host: "127.0.0.1:27018" },
    { _id: 1, host: "127.0.0.1:27019" },
  ],
});
rs.config();
rs.status();
//* 27018 : PRIMARY
//* 27019 : SECONDARY

//! Shard 1 Server ----------------------------------------
//! 4th tab
//? mongod --shardsvr -replSet s1 --dbpath "d:\dbshards\s1" --port 27020

//! 5th tab
//? mongod --shardsvr -replSet s1 --dbpath "d:\dbshards\s1r" --port 27021

//! 6th tab
//? mongosh --port 27020
rs.initiate({
  _id: "s1",
  members: [
    { _id: 0, host: "127.0.0.1:27020" },
    { _id: 1, host: "127.0.0.1:27021" },
  ],
});
rs.config();
rs.status();
//* 27020 : PRIMARY
//* 27021 : SECONDARY

//! Shard 2 Server ----------------------------------------
//! 7th tab
//? mongod --shardsvr -replSet s2 --dbpath "d:\dbshards\s2" --port 27022

//! 8th tab
//? mongod --shardsvr -replSet s2 --dbpath "d:\dbshards\s2r" --port 27023

//! 9th tab
//? mongosh --port 27022
rs.initiate({
  _id: "s2",
  members: [
    { _id: 0, host: "127.0.0.1:27022" },
    { _id: 1, host: "127.0.0.1:27023" },
  ],
});
rs.config();
rs.status();
//* 27022 : PRIMARY
//* 27023 : SECONDARY

//! Routing Server ----------------------------------------
//! 10th tab
// (Routing Service starts)
//? mongos --configdb cf/127.0.0.1:27018,127.0.0.1:27019 --port 27050

//! Client Server -----------------------------------------
//! 11th tab
//? mongosh --port 27050
sh.addShard("s1/127.0.0.1:27020,127.0.0.1:27021"); //shard 1
sh.addShard("s2/127.0.0.1:27022,127.0.0.1:27023"); //shard 2
sh.status();
//? use icici
sh.enableSharding("icici");
sh.shardCollection("icici.customers", { _id: 1 });
sh.getShardedDataDistribution();
//? show collections
db.customers.find();
db.customers.insertOne({ _id: 1, name: "customer1" });
db.customers.find();
sh.getShardedDataDistribution();

// changing size
//? use config
db.settings.updateOne(
  { _id: "chunksize" },
  { $set: { value: 1 } },
  { upsert: true },
);
//? use icici
for (let i = 2; i <= 100000; i++) {
  db.customers.insertOne({
    _id: i,
    name: "customers" + i,
  });
}

//* find on other servers
db.customers.find();
db.customers.countDocuments();
sh.getShardedDataDistribution(); // this will show in which shard how many documents had inserted

//----------------------------------------------------------

//! 12th tab
//? mongosh --port 27020 // primary
//? show dbs  // no icici db

//! 12th tab
//? mongosh --port 27022 // primary
//? show dbs  // icici db present
//? use icici
db.customers.find();

//! 13th tab
//? mongosh --port 27023 // secondary
//? show dbs  // icici db present
//? use icici
db.customers.find();
