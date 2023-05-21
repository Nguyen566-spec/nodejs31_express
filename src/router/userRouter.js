import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/get-user", getUser);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user", updateUser);
userRouter.delete("/delete-user", deleteUser);

export default userRouter;
