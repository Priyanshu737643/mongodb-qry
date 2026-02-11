// employees:
// _id: e1,

//  orders:
// _id: o1
// empid: e1,
// product: laptop,
// orderValue:23000

// John
db.orders.insertOne({
  empid: ObjectId("6980340cea90a61d271e2623"),
  product: "laptop",
  orderValue: 23000,
});

// John
db.orders.insertOne({
  empid: ObjectId("6980340cea90a61d271e2623"),
  product: "mouse",
  orderValue: 1000,
});

// Chastity
db.orders.insertOne({
  empid: ObjectId("6981776077984146279045fa"),
  product: "desktop",
  orderValue: 21000,
});

// Mike
db.orders.insertOne({
  empid: ObjectId("6981788477984146279045fe"),
  product: "printer",
  orderValue: 7000,
});

// Mike
db.orders.insertOne({
  empid: ObjectId("6981788477984146279045fe"),
  product: "projector",
  orderValue: 18000,
});

// Amy
db.orders.insertOne({
  empid: ObjectId("6981781377984146279045fc"),
  product: "keyboard",
  orderValue: 1800,
});

//----------------------------------------------
db.orders.find();

//         {
//           _id: ObjectId('698307903c17afca223100b0'),
//           empid: ObjectId('6980340cea90a61d271e2623'),
//           product: 'laptop',
//           orderValue: 23000
//         }

//-----------------------------------------------

db.orders.aggregate([
  {
    $project: {
      _id: 0,
      empid: 1,
      orderValue: 1,
    },
  },
]);

//! join     orders <---> employees
//? employees = left collection
//? orders = right collection
//! Right outer join
db.orders.aggregate([
  {
    $lookup: {
      from: "employees",
      localField: "empid",
      foreignField: "_id",
      as: "users",
    },
  },
]);
// getting order details and then the user detail who bought that product

//! Left outer join
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
]);
// getting employees details then all the products bought by that user
// and orders array[] will be empty for the user who didn't bought anything

//! inner join
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
  {
    $unwind: "$orders",
  },
]);
// will show only thoses users who had bought anything, not others
// this is called //! inner join

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
  {
    $unwind: "$orders",
  },
  {
    $project: {
      _id: 0,
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

//         {
//           name: 'Mike',
//           product: 'projector',
//           orderValue: 18000
//         }

//! other way of joining the two collections ----- Join ------------------------
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
      ],
      as: "orders",
    },
  },
]);

//-------------------------------------------------

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
      ],
      as: "orders",
    },
  },
  {
    $unwind: "$orders",
  },
  {
    $project: {
      _id: 0,
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

//-------------------------------------------------

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
        {
          $project: {
            _id: 0,
            product: 1,
            orderValue: 1,
          },
        },
      ],
      as: "orders",
    },
  },
  {
    $unwind:"$orders"
  },
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      orders:1
  }}
]);



