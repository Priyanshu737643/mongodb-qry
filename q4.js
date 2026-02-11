// db.employees.find({},{})

// db.employees.find({ department: "HR" })

// db.employees.find(
//     { department: "HR" },
//     {name:1}  //? 1 = true
// )

//? Error : Cannot do exclusion on field salary in inclusion projection
// db.employees.find(
//   { department: "HR" },
//   { _id: 0, name: 1, salary:0 },
// );

db.employees.find({ department: "HR", salary: 3000 }, { _id: 0, name: 1 });

db.employees.find().limit(3); // show first three document only

db.employees.find().skip(1); // skip first document and show all other

db.employees.find().limit(3).skip(1); // skip first document and show next three documents  (2,3,4)

db.employees.find().sort({ name: 1 }); // sort in ascending order by name field

db.employees.find().sort({ name: -1 }); // sort in decending order by name field

db.employees.find().limit(3).skip(1).sort({ name: -1 }); // skip first document and show next three documents  (2,3,4) in descending order by name field

db.employees.find().count(); // total number of documents in employees collection