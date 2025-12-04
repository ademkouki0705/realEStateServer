const mongoose = require("mongoose");

const priceRanges = {
  1: { $gte: 0, $lte: 100 },
  2: { $gte: 101, $lte: 200 },
  3: { $gte: 201, $lte: 300 },
  4: { $gte: 301, $lte: 400 },
};

const roomsNumber = {
  0: { $eq: 0 },
  1: { $eq: 1 },
  2: { $eq: 2 },
  3: { $eq: 3 },
  4: { $gte: 4 },
};

const queryBuilder = (filters) => {
  const query = {};

  if (!filters || typeof filters !== "object") return query;

  Object.keys(filters).forEach((key) => {
    const value = filters[key];

    // Validate array for refs
    if (["city", "feature", "propertyType"].includes(key)) {
      if (Array.isArray(value) && value.length > 0) {
        const validIds = value.filter((id) =>
          mongoose.Types.ObjectId.isValid(id)
        );
        if (validIds.length > 0) query[key] = { $in: validIds };
      }
    }

    // Price range filter
    if (key === "price" && value && priceRanges[value]) {
      query.price = priceRanges[value];
    }

    // Search filter
    if (key === "search" && typeof value === "string" && value.trim() !== "") {
      query.title = { $regex: value, $options: "i" };
    }

    // bedrooms and bathrooms filter
    if (
      (key === "bedrooms" || key === "bathrooms") &&
      typeof value.id === "number" &&
      roomsNumber[value.id]
    ) {
      query[key] = roomsNumber[value.id];
    }
  });

  return query;
};

module.exports = queryBuilder;
