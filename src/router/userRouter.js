import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  loginUser,
  registerUser,
  updateUser,
  uploadAvatar,
} from "../controller/userController.js";
import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination: `${process.cwd()}/public/img`,
  filename: (req, file, callback) => {
    let newName = new Date().getTime() + "_" + file.originalname;
    callback(null, newName);
  },
});
const upload = multer({ storage });

const userRouter = express.Router();
userRouter.post("/upload", upload.single("file"), uploadAvatar);
userRouter.get("/get-user", getUser);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user", updateUser);
userRouter.delete("/delete-user", deleteUser);
userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

export default userRouter;
