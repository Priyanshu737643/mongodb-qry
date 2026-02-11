db.users.insertOne(
    {
        name: "Priyanshu Sinha",
        age: 22
    }
);

db.users.find();

db.team.insertOne(
    {
        name: "Abhishek",
        email: "abhishek@gmail.com",
        position: "Opening",
        strike: 225,
        location: ["SRH", "DC"],
        date: Date(),
    }
);

db.team.insertMany(
    [
        {
            name: "Abhishek",
            email: "abhishek@gmail.com",
            role: "Opening",
            hander: "Left",
            strike: 225,
            location: ["SRH", "DC"],
            date: Date(),
        },
        {
            name: "Kishan",
            email: "kishan@gmail.com",
            role: "Opening",
            hander: "Left",
            strike: 200,
            location: ["MI", "SRH"],
            date: Date(),
        },
        {
            name: "Tilak",
            email: "tilak@gmail.com",
            role: "Middle Order",
            hander: "Left",
            strike: 165,
            location: ["MI", "PUN"],
            date: Date(),
        },
        {
            name: "Surya",
            email: "surya@gmail.com",
            role: "Middle Order",
            hander: "Right",
            strike: 200,
            location: ["KKR", "MI"],
            date: Date(),
        },
        {
            name: "Hardik",
            email: "hardik@gmail.com",
            role: "Allrounder",
            hander: "Right",
            strike: 230,
            location: ["MI", "GT"],
            date: Date(),
        },
        {
            name: "Shivam",
            email: "shivam@gmail.com",
            role: "Allrounder",
            hander: "Left",
            strike: 300,
            location: ["RR", "CSK"],
            date: Date(),
        },
        {
            name: "Rinku",
            email: "rinku@gmail.com",
            role: "Middle Order",
            hander: "Left",
            strike: 210,
            location: ["KKR", "LKH"],
            date: Date(),
        },
        {
            name: "Aksar",
            email: "aksar@gmail.com",
            role: "Spinner",
            hander: "Left",
            strike: 150,
            location: ["PUN", "DC"],
            date: Date(),
        },
        {
            name: "Varun",
            email: "varun@gmail.com",
            role: "Spinner",
            hander: "Right",
            strike: 7,
            location: ["KKR", "RCB"],
            date: Date(),
        },
        {
            name: "Arshdeep",
            email: "arshdeep@gmail.com",
            role: "Pace",
            hander: "Left",
            strike: 8,
            location: ["PUN", "SRH"],
            date: Date(),
        },
        {
            name: "Jaspreet",
            email: "jaspreet@gmail.com",
            role: "Pace",
            hander: "Right",
            strike: 6,
            location: ["MI", "GT"],
            date: Date(),
        }
    ]
);

db.team.find();


db.team.find(
    { role: "Allrounder", hander: "Left" },
    { _id: 0, name: 1, strike: 1 }
);

db.team.find().limit(3);

db.team.find().skip(1);

db.team.find().limit(3).skip(1);

db.team.find().sort({ name: 1 });

db.team.find().sort({ name: -1 });

db.team.find().limit(3).skip(1).sort({ name: -1 });

db.team.find().count();

db.team.find(
    {strike:{$eq:200}}
)

db.team.find(
    {strike:{$gt:200}}
)

db.team.find(
    {strike:{$lt:200}}
)

db.team.find(
    {
        $and: [{ hander: "Left" }, { strike: { $gt: 200 } }]
    }
);

db.team.find(
    {
        $or: [{ hander: "Left" }, { strike: { $gt: 200 } }]
    }
);

db.team.find(
    {
        $and: [{ hander: "Left" }, { strike: { $gt: 200 } }]
    },
    {
        _id: 0,
        name: 1,
        role: 1,
        strike: 1
    }
);

db.team.updateOne(
    { email: "arshdeep@gmail.com" },
    { $set: { strike: 7 } }
);


//?-------------------------------------------
//! Collation

db.employees.aggregate([
    { $project: { _id: 0, name: 1 } },
    { $sort: { name: 1 } },
]);

db.employees.aggregate(
    [
        { $project: { _id: 0, name: 1 } },
        { $sort: { name: 1 } }
    ],
    { collation: { locale: "en", strength: 2 } },
);

//! Validator

db.createCollection("vendors", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age"],
            properties: {
                name: { bsonType: "string" },
                age: { bsonType: ["int","null"], minimum: 18 },
            }
        }
    }
});

db.vendors.insertOne({
    name: "John",
    age: null,
});

//! $regex

db.employees.find({
    name: { $regex: "john", $options: "i" },
});

db.employees.find({
    name: { $regex: "^M", $options: "i" },
});

db.employees.find({
    name: { $regex: "h$", $options: "i" },
});

//?----------------------------------------------------

//! Server Replication

// create folder mongo-replica
// create folder - usa, uk, india - inside mongo-replica folder

//* COMMANDS

// usa
// mongod -replSet rs1 --dbpath "d:\mongo-replica\usa" --port 27018

// uk
// mongod -replSet rs1 --dbpath "d:\mongo-replica\uk" --port 27019

// india
// mongod -replSet rs1 --dbpath "d:\mongo-replica\india" --port 27020

//  I
// mongosh --port 27018

rs.initiate({
    _id: "rs1",
    members: [
        { _id: 0, host: "127.0.0.1:27018" },
        { _id: 1, host: "127.0.0.1:27019" },
        { _id: 2, host: "127.0.0.1:27020" },
    ]
});

rs.config()
rs.status()

//  II
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1" 


