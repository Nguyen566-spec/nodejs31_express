import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";

const models = initModels(sequelize);

export const addOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    if (!user_id || !food_id || !amount) {
      return res.status(400).send("Please input data");
    }
    let model = { user_id, food_id, amount, code, arr_sub_id };
    await models.order.create(model);
    res.status(200).send("Add success");
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};