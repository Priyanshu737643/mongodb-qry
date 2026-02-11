//! Pipeline

// structure
db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)

// db.employees.find({department:"HR"})
db.employees.aggregate(
    [
        {$match:{department:"HR"}}
    ]
)

// db.employees.find({},{_id:0,name:1})  //! error
// db.employees.find({},{_id:0,name:0,email:0})  //! No error
db.employees.aggregate(
    [
        {$project:{_id:0,name:1}}
    ]
)


db.employees.aggregate(
    [
        {$project:{_id:0,department:0, salary:0}} // it will show all details except these
    ]
)


db.employees.aggregate(
    [
        {$sort:{name:1}}
    ]
)

db.employees.aggregate(
    [
        {$skip:1}
    ]
)


db.employees.aggregate(
    [
        {$limit:3}
    ]
)


db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)



