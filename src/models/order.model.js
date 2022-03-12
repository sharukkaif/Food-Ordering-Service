const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { v4 } = require('uuid');

const orderSchema = mongoose.Schema(
  {
    id: {
      type: String,
      default: v4,
    },
    restaurantId: {
      type: String,
      ref: 'Restaurant',
    },
    userId: {
      type: String,
      ref: 'User',
    },
    foodId: {
      type: String,
      ref: 'Food',
    },
    totalPrice: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
