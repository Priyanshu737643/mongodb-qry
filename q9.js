db.employees.find(
    {location:"FL"}
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$push:{location:"TX"}}
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$pop:{location:1}}
)

//!-----
db.employees.updateOne(
  { email: "mike@gmail.com" },
  { $pop: { location: 1 }, $pop: { location: 1 } },
);


db.employees.updateMany(
    {},
    {$push:{skills:"Python"}}  // skills field was not there
)

db.employees.updateMany(
    {},
    {$push:{skills:"Java"}}
)

db.employees.updateOne(
    {email:"smith@gmail.com"}, // filter
    {$push:{skills:".NET"}}  // action
)

db.employees.updateOne(
  { email: "smith@gmail.com" },
  { $push: { skills: "Python" } },
);

db.employees.updateOne(
  { email: "smith@gmail.com" },
  { $pop: { skills: 1 } },
);

db.employees.updateOne(
  { email: "smith@gmail.com" },
  { $addToSet: { skills: "Java" } },  // it will add if the element is not there
);

db.employees.updateOne(
  { email: "smith@gmail.com" },
  { $pull: { skills: "Java" } },  // it will remove the matching element
);

db.employees.updateOne(
  { email: "john@gmail.com" },
  { $pull: { skills: "Python" } }, 
);

db.employees.updateOne(
  { email: "john@gmail.com" },
  { $push: { skills: "Python" } },
);

