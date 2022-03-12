const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createRestaurant = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string(),
  }),
};

const getRestaurants = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getRestaurant = {
  params: Joi.object().keys({
    restaurantId: Joi.string(),
  }),
};

const updateRestaurant = {
  params: Joi.object().keys({
    restaurantId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      address: Joi.string(),
    })
    .min(1),
};

const deleteRestaurant = {
  params: Joi.object().keys({
    restaurantId: Joi.string(),
  }),
};

module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
