import express from "express";
import {
  addLike,
  deleteLike,
  getLike,
} from "../controller/likeController.js";

const likeRouter = express.Router();

likeRouter.get("/get-like", getLike);
likeRouter.post("/add-like", addLike);
likeRouter.delete("/delete-like/:like_id", deleteLike);

export default likeRouter;
