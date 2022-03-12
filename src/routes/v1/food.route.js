const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const foodValidation = require('../../validations/food.validation');
const foodController = require('../../controllers/food.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(foodValidation.createFood), foodController.createFood)
  .get(auth(), validate(foodValidation.getFoods), foodController.getFoods);

router
  .route('/:foodId')
  .get(auth(), validate(foodValidation.getFood), foodController.getFood)
  .put(auth(), validate(foodValidation.updateFood), foodController.updateFood)
  .delete(auth(), validate(foodValidation.deleteFood), foodController.deleteFood);

router.route('/:restaurantId').get(auth(), foodController.getFoodByRestaurant);

module.exports = router;
