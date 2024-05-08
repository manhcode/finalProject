const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    orderBy: { type: Schema.Types.ObjectId, ref: "users", require: true },
    user: { type: Object },
    price: { type: Number, require: true },
    status: {
      type: String,
      enum: ["No Process", "Processing", "Paid", "Canceled"],
    },
    course: { type: Schema.Types.ObjectId, ref: "courses", require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", schema);
