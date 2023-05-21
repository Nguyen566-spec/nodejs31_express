import fs from "fs";
import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";

const models = initModels(sequelize);

const getUser = (req, res) => {
  res.send("get user");
};

const createUser = (req, res) => {
  res.send("create user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

const deleteUser = (req, res) => {
  res.send("delete user");
};

const loginUser = async (req, res) => {
  let { email, pass_word } = req.body;
  let checkLogin = await models.user.findOne({
    where: {
      email,
      pass_word,
    },
  });
  if (checkLogin) {
    res.send("Login success");
  } else {
    res.send("Login failed");
  }
};

const registerUser = async (req, res) => {
  let { full_name, email, pass_word } = req.body;
  let checkEmail = await models.user.findOne({
    where: {
      email,
    },
  });
  if (checkEmail) {
    return res.send("Email is existed");
  }
  const model = { full_name, email, pass_word };
  await models.user.create(model);
};

const uploadAvatar = (req, res) => {
  let file = req.file;
  let { user_name } = req.body;
  fs.readFile(`${process.cwd()}/public/img/${file.filename}`, (err, data) => {
    let fileName = `data:${file.mimetype};base64,${Buffer.from(data).toString(
      "base64"
    )}`;
    res.send(fileName);
  });
};

export {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  uploadAvatar,
  loginUser,
  registerUser,
};
