//! How to Backup and Restore

//! 1
// have to download a tool 
// https://www.mongodb.com/try/download/database-tools

//! 2
// mongodump -d lms -o d:\dbbackup

//! 3
// use lms
// db.dropDatabase()

//! 4
// mongorestore -d lms d:\dbbackup\lms

//?------------------------------------------------

//! Collation
// collation: { locale: "en", strength: 2 }

db.employees.aggregate([
  { $project: { _id: 0, name: 1 } },
  { $sort: { name: 1 } },
]);

db.employees.aggregate(
    [
        { $project: { _id: 0, name: 1 } },
        { $sort: { name: 1 } }
    ],
    { collation: { locale: "en", strength: 2 } },
);
