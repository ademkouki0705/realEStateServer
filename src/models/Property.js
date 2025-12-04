const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },

    price: { type: Number, required: true },

    propertyType: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "PropertyType",
      required: true,
    },

    city: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "City",
      required: true,
    },

    address: {
      street: { type: String, required: true },
      zipCode: { type: String },
      state: { type: String },
    },

    features: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feature",
      }
    ],

    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
    },

    bedrooms: Number,
    bathrooms: Number,
    area: Number,

    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
