db.employees.find(
    {email:"brian@gmail.com"}
).explain("executionStats")   // it will show all stats

//* here totalDocsExamined = 7

//? Indexing

db.employees.createIndex({email:1})  // created the index
//* here totalDocsExamined = 1

db.employees.getIndexes()

db.employees.dropIndex("email_1")

db.employees.find({}, { _id: 0, name: 1 })

db.employees.insertMany([
    { name: "abc" },
    { name: "cathy" },
    {name:"mike"}
]
)

// it will show CAPITAL names first then Lowercase (Cathy -> cathy)
db.employees.find({}, { _id: 0, name: 1 }).sort({ name: 1 });

// it will show lowercase first then Capital names (abc -> Amy)
//? .collation({locale:'en', strength:2})   ---  write before sort()
db.employees.find({}, { _id: 0, name: 1 }).collation({locale:'en', strength:2}).sort({ name: 1 })


