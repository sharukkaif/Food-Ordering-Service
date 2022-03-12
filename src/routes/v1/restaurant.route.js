const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const restaurantValidation = require('../../validations/restaurant.validation');
const restaurantController = require('../../controllers/restaurant.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(restaurantValidation.createRestaurant), restaurantController.createRestaurant)
  .get(auth(), validate(restaurantValidation.getRestaurants), restaurantController.getRestaurants);

router
  .route('/:restaurantId')
  .get(auth(), validate(restaurantValidation.getRestaurant), restaurantController.getRestaurant)
  .put(auth(), validate(restaurantValidation.updateRestaurant), restaurantController.updateRestaurant)
  .delete(auth(), validate(restaurantValidation.deleteRestaurant), restaurantController.deleteRestaurant);

module.exports = router;
