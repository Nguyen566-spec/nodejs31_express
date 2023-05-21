import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";

const models = initModels(sequelize);

const getFood = async (req, res) => {
  try {
    let data = await models.food.findAll({
      // include: ["res_id_restaurants"]
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};

const getFoodPage = async (req, res) => {
  try {
    let { page, size } = req.params;
    let index = (page - 1) * size;
    let data = await models.food.findAll({
      offset: Number(index),
      limit: Number(size),
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};

const createFood = async (req, res) => {
  try {
    let { food_name, image, price, desc, type_id } = req.body;
    let model = { food_name, image, price, desc, type_id };
    await Food.create(model);
    res.status(200).send("Add success");
  } catch (error) {
    res.status(500).send("Add failed");
  }
};

const updateFood = async (req, res) => {
  try {
    let { food_id } = req.params;
    let { food_name, image, price, desc, type_id } = req.body;
    let model = { food_name, image, price, desc, type_id };
    await Food.create(model);
    res.status(200).send("Edit success");
  } catch (error) {
    res.status(500).send("Edit failed");
  }
};

const deleteFood = async (req, res) => {
  try {
    let { food_name, image, price, desc, type_id } = req.body;
    let model = { food_name, image, price, desc, type_id };
    await Food.create(model);
    res.status(200).send("Delete success");
  } catch (error) {
    res.status(500).send("Delete failed");
  }
};

export { getFood, getFoodPage, createFood, updateFood, deleteFood };
