const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  {
    key: { type: String, default: "feature" }, 
    label: { type: String, required: true },   // "Swimming Pool"
    value: { type: String, required: true },   // "pool"
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feature", featureSchema);
