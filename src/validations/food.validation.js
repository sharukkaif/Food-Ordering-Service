const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createFood = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number(),
    preparationTime: Joi.string(),
  }),
};

const getFoods = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getFood = {
  params: Joi.object().keys({
    foodId: Joi.string(),
  }),
};

const updateFood = {
  params: Joi.object().keys({
    foodId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      price: Joi.number(),
      preparationTime: Joi.string(),
    })
    .min(1),
};

const deleteFood = {
  params: Joi.object().keys({
    foodId: Joi.string(),
  }),
};

module.exports = {
  createFood,
  getFoods,
  getFood,
  updateFood,
  deleteFood,
};
