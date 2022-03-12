const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { v4 } = require('uuid');

const foodSchema = mongoose.Schema(
  {
    id: {
      type: String,
      default: v4,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    restaurantId: {
      type: String,
      ref: 'Restaurant',
    },
    categoryId: {
      type: String,
      ref: 'Category',
    },
    price: {
      type: Number,
    },
    preparationTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
foodSchema.plugin(toJSON);
foodSchema.plugin(paginate);

/**
 * @typedef Food
 */
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
