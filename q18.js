// use lpu26a

db.employees.find()

db.orders.find()

// employee name and product
db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empid",
            as:"orders"
        }
    },
    { $unwind: "$orders" },
    {
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            department: 1,
            product: "$orders.product",
            orderValue:"$orders.orderValue"
        }
    },
    {$out:"OrderReport"}
])

