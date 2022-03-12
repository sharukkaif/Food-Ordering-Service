const httpStatus = require('http-status');
const { Restaurant } = require('../models');
const ApiError = require('../utils/ApiError');

const createRestaurant = async (userBody) => {
  return Restaurant.create(userBody);
};

// List of Restaurants
const queryRestaurants = async (filter, options) => {
  const restaurants = await Restaurant.paginate(filter, options);
  return restaurants;
};

const getRestaurantById = async (id) => {
  return Restaurant.findById(id);
};

const updateRestaurantById = async (restaurantId, updateBody) => {
  const restaurant = await getRestaurantById(restaurantId);
  if (!restaurant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant not found');
  }
  Object.assign(restaurant, updateBody);
  await restaurant.save();
  return restaurant;
};

const deleteRestaurantById = async (restaurantId) => {
  const restaurant = await getRestaurantById(restaurantId);
  if (!restaurant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant not found');
  }
  await restaurant.remove();
  return restaurant;
};

module.exports = {
  createRestaurant,
  queryRestaurants,
  getRestaurantById,
  updateRestaurantById,
  deleteRestaurantById,
};
