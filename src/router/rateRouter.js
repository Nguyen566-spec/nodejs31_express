import express from "express";
import { addRate, getRate } from "../controller/rateController.js";

const rateRouter = express.Router();

rateRouter.get("/get-rate", getRate);
rateRouter.post("/add-rate", addRate);

export default rateRouter;
