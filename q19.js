db.createView("orderView","employees",[
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
])

// View  =  runs the background code everytime
// it gives updated value
//? if we want to change anything in view , we have to first drop that view then re-run this query


//! How to delete a View
db.orderView.drop();