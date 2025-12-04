const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    label: { type: String, required: true },   // "Tunis"
    value: { type: String, required: true },   // "tunis"
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("City", citySchema);
