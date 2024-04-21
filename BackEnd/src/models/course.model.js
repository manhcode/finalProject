const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    nameCourse: { type: String, require: true },
    description: { type: String, require: true },
    imageUrl: { type: String, require: true },
    videoUrl: { type: String, require: true },
    price: { type: Number, require: true, default: 0 },
    teacherId: { type: Schema.Types.ObjectId, ref: "users", require: true },
    file: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("courses", schema);
