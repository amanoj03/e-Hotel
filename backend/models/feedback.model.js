const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: String },
    summary: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
