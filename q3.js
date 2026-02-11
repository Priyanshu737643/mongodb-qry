db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

// db.employees.insertMany([{},{},{}])

db.employees.insertMany([
  {
    name: "Chastity Jim",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 3000,
    location: ["OH", "TX"],
    date: Date(),
  },
  {
    name: "Brian",
    email: "brian@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["FL", "TX"],
    date: Date(),
  },
]);



db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 3000,
    location: ["OH", "TX"],
    date: Date(),
  },
  {
    name: "Jack",
    email: "jack@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["FL", "TX"],
    date: Date(),
  },
]);

db.employees.insertMany([
  {
    name: "Mike",
    email: "mike@gmail.com",
    department: "IT",
    salary: 3000,
    location: ["OH", "TX"],
    date: Date(),
  },
  {
    name: "Smith",
    email: "smith@gmail.com",
    department: "HR",
    salary: 3456,
    location: ["FL", "TX"],
    date: Date(),
  },
]);