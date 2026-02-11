db.products.insertMany([
  { name: "Camera", price: 25000 },
  { name: "Mobile", price: 15000 },
  { name: "Tablet", price: 20000 },
]);

db.products.updateMany({}, { $set: { rating: 4 } });

db.products.updateMany(
  {},
  { $set: { description: "This is product description" } },
);

db.products.find({ price: { $gt: 20000 } });

db.products.find({ $and: [{ price: { $lt: 20000 } }, { name: "Mobile" }] });

db.products.insertMany([
  { name: "Mouse", price: 1500 },
  { name: "Monitor", price: 10000 },
  { name: "Printer", price: 8000 },
]);

db.products.updateMany(
  { name: { $in: ["Mouse", "Monitor", "Printer"] } },
  { $set: { rating: 4 } },
);

db.products.find().limit(3).sort({ price: -1 });

db.products.insertOne({
  name: "Router",
  price: 3000,
  rating: 4.5,
  description: "This is new product",
});

db.products.find({ rating: 4 }, { _id: 0, name: 1, price: 1 });

db.products.updateMany({}, { $inc: { price: 1000 } });

db.products.insertOne({ name: "abc" });

db.products.deleteOne({ name: "abc" });

db.users.insertMany([
  { name: "Amy", email: "amy@gmail.com", password: "amy@123" },
  { name: "Jack", email: "jack@gmail.com", password: "jack@123" },
  { name: "Mike", email: "mike@gmail.com", password: "mike@123" },
  { name: "Cathy", email: "cathy@gmail.com", password: "cathy@123" },
]);

db.users.aggregate([
  { $sort: { name: 1 } },
  { $project: { _id: 0, name: 1, email: 1} },
]);


db.users.getIndexes();

db.users.createIndex({ email: 1 })

db.users.dropIndex("email_1")

