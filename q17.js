db.empDetails.insertOne({
  empid: ObjectId("6980340cea90a61d271e2623"),
  city: "Hyderabad",
  state: "Telangana",
});

db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empid",
            as:"orders"
        }
    },
    {
        $lookup: {
            from: "empDetails",
            localField: "_id",
            foreignField: "empid",
            as:"empDetails"
        }
    }
])