import express from "express";
import userRouter from "./userRouter.js";
import foodRouter from "./foodRouter.js";
import likeRouter from "./likeRouter.js";
import rateRouter from "./rateRouter.js";
import orderRouter from "./orderRouter.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/food", foodRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/rate", rateRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;
