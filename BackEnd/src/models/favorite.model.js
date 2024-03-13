const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: "courses", require: true },
    studentId: { type: Schema.Types.ObjectId, ref: "users", require: true },
    teacherId: { type: Schema.Types.ObjectId, ref: "users", require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("favorite", schema);
