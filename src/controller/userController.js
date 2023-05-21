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

export { getUser, createUser, updateUser, deleteUser };
