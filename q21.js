//! Validator
// both name and age are required fields
// name should be string and age should be integer

db.createCollection("vendors", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age"],
            properties: {
                name: { bsonType: "string" },
                age:{bsonType:"int", minimum:18},
            }
        }
    }
});

db.vendors.insertOne({
  name: "John",
  age: 21,
});

// MongoServerError: Document failed validation
// missingProperties: [ 'name' ]
// specifiedAs: { minimum: 18 }
//? Solution = Validator
db.vendors.insertOne({
  age: 17,
});

// MongoServerError: Document failed validation
// reason: 'type did not match'
//? Solution = Validator
db.vendors.insertOne({
  name: 12345,
  age: "abcde",
});

//?-------------------------------------------

db.createCollection("vendors", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: ["int","null"] },
      },
    },
  },
});

db.vendors.insertOne({
  name: "abhi",
  age: null,
});





