import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  getFoodPage,
  updateFood,
} from "../controller/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/get-food", getFood);
foodRouter.get("/get-food-page/:page/:size", getFoodPage);
foodRouter.post("/create-food", createFood);
foodRouter.put("/update-food/:food_id", updateFood);
foodRouter.delete("/delete-food/:food_id", deleteFood);

export default foodRouter;
