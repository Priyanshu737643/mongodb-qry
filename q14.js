db.employees.find(
    {},
    {name:1,department:1}
)

db.employees.find(
    {},
    {name:1,dept:"$department"}
)

db.users.insertOne(
    {
        naae: "Ravi",
        age: 24,
        address:{addr1:"50 Verdin Ct",city:"Columbus",state:"OH"}
    }
)

db.users.insertMany([
  {
    name: "Kishan",
    age: 23,
    address: { addr1: "33 Bandst Gt", city: "Delhi", state: "DL" },
  },
  {
    name: "Anjali",
    age: 21,
    address: { addr1: "46 Bds St", city: "Mumbai", state: "MH" },
  },
  {
    naae: "Ravi",
    age: 24,
    address: { addr1: "50 Verdin Ct", city: "Columbus", state: "OH" },
  },
  {
    naae: "Priyanshu",
    age: 22,
    address: { addr1: "50 ABC Ct", city: "Patna", state: "Bihar" },
  },
  {
    naae: "Ayush",
    age: 21,
    address: { addr1: "21 XYZ Ct", city: "Luckhnow", state: "UP" },
  },
]);

db.users.find(
    {},
    {_id:0,name:1, age:1, city:"$address.city"}
)

db.users.find(
    {},
    {_id:0,name:1, age:1, state:"$address.state"}
)

db.users.find(  // problem  : name field is not showing for some users
    {},
    {_id:0,name:1, age:1, city:"$address.city", state:"$address.state"}
)

// Add Skills array for all users and populate Java, Python

db.users.updateMany(
  {},
  {$push:{Skills:["Java","Python","CPP"]}}  // 2 [] brackets
);


db.users.updateMany(
  {},
  {$set:{Skills:["Java","Python","CPP"]}}  // 1 [] brackets
);

db.users.updateOne(
    { name: "Ravi" },
    {$push:{Skills:".NET"}}  // pushing that new string into the array
)


db.users.updateOne(
  { name: "Ravi" },
  { $addToset: { Skills: ".NET" } }, 
);


db.users.find(
    {},
    {_id:0,name:1,Skills:1}
)

db.users.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            Skills:1
    }}
])

