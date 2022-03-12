const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createOrder = {
  body: Joi.object().keys({
    price: Joi.number(),
    status: Joi.string(),
  }),
};

const getOrders = {
  query: Joi.object().keys({
    status: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOrder = {
  params: Joi.object().keys({
    orderId: Joi.string(),
  }),
};

const updateOrder = {
  params: Joi.object().keys({
    orderId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      price: Joi.number(),
      status: Joi.string(),
    })
    .min(1),
};

const deleteOrder = {
  params: Joi.object().keys({
    orderId: Joi.string(),
  }),
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
