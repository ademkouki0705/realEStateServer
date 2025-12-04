const mongoose = require("mongoose");

const propertyTypeSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },  // "Apartment"
    value: { type: String, required: true },  // "apartment"
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyType", propertyTypeSchema);
