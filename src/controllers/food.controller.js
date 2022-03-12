const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { foodService } = require('../services');

const createFood = catchAsync(async (req, res) => {
  const food = await foodService.createFood(req.body);
  res.status(httpStatus.CREATED).send(food);
});

const getFoods = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await foodService.queryFoods(filter, options);
  res.send(result);
});

const getFood = catchAsync(async (req, res) => {
  const food = await foodService.getFoodById(req.params.foodId);
  if (!food) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Food not found');
  }
  res.send(food);
});

const getFoodByRestaurant = catchAsync(async (req, res) => {
  const food = await foodService.getFoodByRestaurantId(req.params.restaurantId);
  res.send(food);
});

const updateFood = catchAsync(async (req, res) => {
  const food = await foodService.updateFoodById(req.params.foodId, req.body);
  res.send(food);
});

const deleteFood = catchAsync(async (req, res) => {
  await foodService.deleteFoodById(req.params.foodId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createFood,
  getFoods,
  getFood,
  getFoodByRestaurant,
  updateFood,
  deleteFood,
};
