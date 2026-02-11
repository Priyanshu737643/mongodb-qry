db.employees.find({ department: "HR" });

db.employees.find({ department: "HR", salary: { $gt: 3000 } });

db.employees.find(
  { $and: [{ department: "HR" }, { salary: { $gt: 3000 } }] }, // only one key = and operator
);

db.employees.find({ $or: [{ department: "HR" }, { salary: { $gt: 3000 } }] });

db.employees.find(
  { $or: [{ department: "HR" }, { salary: { $gt: 3000 } }] },
  { name: 1, email: 1, department: 1 },
);

db.employees.updateOne(
  { email: "cathy@gmail.com" },
  { $set: { salary: 2500 } },
);

db.employees.updateOne(
  { email: "amy@gmail.com" },
  { $inc: { salary: 3500 } }, // 2500 + 3500 = 6000
);

db.employees.updateMany(
  {},
  { $inc: { salary: 500 } }, // increment 500 salary to all employees
);

db.employees.updateMany({}, { $inc: { salary: 500 } });

db.employees.updateOne(
  { email: "chastity@gmail.com" },
  { $set: { points: 10 } },
);

db.employees.updateOne(
  { email: "abc@gmail.com" },
  { $set: { points: 10 } },
  { upsert: true },
);

db.employees.find({}, { name: 1 });

db.employees.deleteOne({ email: "abc@gmail.com" });

db.employees.find({
  name: { $exists: false },  // find documents where name field does not exist
});
