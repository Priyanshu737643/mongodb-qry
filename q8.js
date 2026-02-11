db.employees.find({ department: { $in: ["HR", "IT"] } });

db.employees.updateOne(
    { email: "mike@gmail.com" },
    {$set:{department:"Admin"}}
)

db.employees.find({ department: { $nin: ["HR", "IT"] } });

// use lpu26b


db.createCollection("students");

db.students.renameCollection("mystudents");

db.mystudents.drop();

db.dropDatabase("lpu26a");  // it will drop the current database

// show dbs 

