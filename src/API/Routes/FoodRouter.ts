import { Router } from 'express';
import FoodService from './../Controllers FoodService';

const FoodRouter = (): Router => {
  const router = Router();
  const path = '/food';
  const FoodService = new FoodService();

  router.get(`${path}`, async (req, res) => {
    // Call the getFoods method in the food controller
    const foods = await FoodService.getFoods();
    res.json(foods);
  });

  router.post(`${path}`, async (req, res) => {
    // Get the input data from the request body
    const { foodTypeName, foodTypeIsActive, foodTypeCreatedDate, foodTypeCreatedBy, foodTypeModifiedDate, modifiedBy } = req.body;
    // Call the addFoodType method in the food controller with the input data
    await FoodService.addFoodType(foodTypeName, foodTypeIsActive, foodTypeCreatedDate, foodTypeCreatedBy, foodTypeModifiedDate, modifiedBy)
      .then(() => {
        res.status(201).json({ message: "Successfully added the food type" });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  router.put(`${path}`, async (req, res) => {
    // Call the updateFood method in the food controller with the input data
    await FoodService.updateFood(req.body);
    res.json({ message: "Successfully updated the food" });
  });

  router.delete(`${path}`, async (req, res) => {
    // Call the deleteFood method in the food controller with the input data
    await FoodService.deleteFood(req.body.id);
    res.json({ message: "Successfully deleted the food" });
  });

  return router;
};

export default FoodRouter;
