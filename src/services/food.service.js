const httpStatus = require('http-status');
const { Food } = require('../models');
const { restaurantService } = require('../services/restaurant.service');
const ApiError = require('../utils/ApiError');

// Upload items into category
const createFood = async (userBody) => {
  return Food.create(userBody);
};

const queryFoods = async (filter, options) => {
  const foods = await Food.paginate(filter, options);
  return foods;
};

const getFoodById = async (id) => {
  return Food.findById(id);
};

// Items of a specific restaurant
const getFoodByRestaurantId = async (restaurantId) => {
  const restaurant = await restaurantService.getRestaurantById(restaurantId);
  if (!restaurant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant not found');
  }
  return Food.find({ restaurantId });
};

const updateFoodById = async (foodId, updateBody) => {
  const food = await getFoodById(foodId);
  if (!food) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Food not found');
  }
  Object.assign(food, updateBody);
  await food.save();
  return food;
};

const deleteFoodById = async (foodId) => {
  const food = await getFoodById(foodId);
  if (!food) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Food not found');
  }
  await food.remove();
  return food;
};

module.exports = {
  createFood,
  queryFoods,
  getFoodById,
  getFoodByRestaurantId,
  updateFoodById,
  deleteFoodById,
};
