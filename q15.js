db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
    },
  },
]);

//! $cond   ternay operator --------------------------------------
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: [{}, "Grade A", "Grade B"],
      },
    },
  },
]);
//! ---------------------------------------------------------------

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: [{ $gt: ["$salary", 3000] }, "Grade A", "Grade B"],
      },
    },
  },
]);

//! $cond   if else -----------------------------------------------
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: { if: {}, then: "", else: "" },
      },
    },
  },
]);
//! ---------------------------------------------------------------

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ["$salary", 3000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

//! $switch   operator --------------------------------------------
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $switch: {
          branches: [
            { case: {}, then: "" },
            { case: {}, then: "" },
          ],
          default: "",
        },
      },
    },
  },
]);
//! ---------------------------------------------------------------

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $switch: {
          branches: [
            { case: {$gt:["$salary",3400]}, then: "Grade A" },
            { case: {$gt:["$salary",2800]}, then: "Grade B" },
          ],
          default: "",
        },
      },
    },
  },
]);
