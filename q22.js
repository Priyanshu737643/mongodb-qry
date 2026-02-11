//! $regex  = Regular Expression

//? exact name should be given
db.employees.find({
  name: "John Smith",
});

// work even if exact name not given
// $options:"i"  made it case insensitive
db.employees.find({
  name: { $regex: "john", $options: "i" },
});

// give all name starting with "M" or "m"
db.employees.find({
  name: { $regex: "^M", $options: "i" },
});

// give all name ending with "H" or "h"
db.employees.find({
  name: { $regex: "h$", $options: "i" },
});


