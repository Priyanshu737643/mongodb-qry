//! TRANSACTION

// login into replicaset
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"

// use hdfcbank

db.customer.insertOne({ _id: "c1", name: "John", balance: 1000 });
db.customer.insertOne({ _id: "c2", name: "Mike", balance: 2000 });

const session = db.getMongo().startSession()

session.startTransaction()

var custCollection = session.getDatabase("hdfcbank").customer

custCollection.updateOne({ _id: "c1" }, { $inc: { balance: -100 } })

//? session.abortTransaction()

custCollection.updateOne({ _id: "c2" }, { $inc: { balance: +100 } });

session.commitTransaction() // now the actual transaction happens and balance changes

session.endSession()

