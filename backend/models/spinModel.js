const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spinSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    totalWheelSpin: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Spin", spinSchema);
