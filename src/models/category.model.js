const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { v4 } = require('uuid');

const categorySchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
