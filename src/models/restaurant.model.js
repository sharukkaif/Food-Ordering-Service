const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { v4 } = require('uuid');

const restaurantSchema = mongoose.Schema(
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
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
restaurantSchema.plugin(toJSON);
restaurantSchema.plugin(paginate);

/**
 * @typedef Restaurant
 */
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
