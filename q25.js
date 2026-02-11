// courses  -  modules
db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      let: { courseId: "$_id" },
      pipeline: [{ $match: { $expr: { $eq: ["$courseId", "$$courseId"] } } }],
      as: "modules",
    },
  },
]);

// courses  -  modules  -  lessons
db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      let: { courseId: "$_id" },//field in courses that join
      pipeline: [
        { $match: { $expr: { $eq: ["$courseId", "$$courseId"] } } },
        {
          $lookup: {
            from: "lessons",
            let: { moduleId: "$_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$moduleId", "$$moduleId"] } } },//$$ -for next child field
            ],
            as: "lessons",
          },
        },
      ],
      as: "modules",
    },
  },
]);

//?-----------------------------------

let: { courseId: "$_id" } // course field _id as courseId
{
  $match: {
    $expr: {
      $eq: ["$courseId", "$$courseId"];
    }
  }
}

// 1st : variable ["$courseId"]
// 2nd : next child field ["$$courseId"]

//*--------------------------------------------------















