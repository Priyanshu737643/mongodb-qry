//! Pipeline  (aggregate function)

db.employees.aggregate([
  { $match: { department: "HR" } },
  { $project: { _id: 0, name: 1, email: 1 } },
  { $sort: { name: 1 } },
  { $limit: 2 },
  { $skip: 1 },
]);

db.employees.aggregate([
  { $skip: 1 },
  { $project: { _id: 0, name: 1, email: 1 } },
  { $sort: { name: 1 } },
  { $limit: 3 },
]);

db.employees.aggregate([
  { $skip: 1 },
  { $sort: { department: 1 } },
  { $project: { _id: 0, name: 1, email: 1, department: 1 } },
  { $limit: 3 },
]);

//!-------------------------
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      total: { $sum: "$salary" },
    },
  },
]);

db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      total: { $sum: "$salary" },
    },
  },
  { $sort: { total: -1 } },
  { $limit: 2 },
]);

db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      Total: { $sum: "$salary" },
      Highest: { $max: "$salary" },
      Lowest: { $min: "$salary" },
      Average: { $avg: "$salary" },
    },
  },
]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      annualSal: { $multiply: [12, "$salary"] },  // calculated field
    },
  },
]);
