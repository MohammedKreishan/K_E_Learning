const mongoose = require("mongoose");

const enrollCourse = new mongoose.Schema({
  // courseId: { type: String, required: true },
  userId: { type: String, required: true },
  enrolledDate: { type: String},
  courseId: {type: mongoose.Schema.Types.ObjectId, ref: "course",required: true},
  // courseRate : {type: mongoose.Schema.Types.ObjectId, ref: "rates" },
  // courseInstructor: {type: mongoose.Schema.Types.ObjectId, ref: "user",required: true},
  // courseCategory: {type: mongoose.Schema.Types.ObjectId, ref: "category",required: true}
});

const model = mongoose.model(`enrolled`, enrollCourse);
module.exports = model;
