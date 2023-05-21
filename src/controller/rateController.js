import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";

const models = initModels(sequelize);

export const getRate = async (req, res) => {
  try {
    let data = await models.rate_res.findAll({
      where: {
        user_id: 1,
        res_id: 1,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};

export const addRate = async (req, res) => {
  try {
    let { user_id, res_id, amount, date_rate } = req.body;
    if (!user_id || !res_id || !amount || !date_rate) {
      return res.status(400).send("Please input data");
    }
    let model = { user_id, res_id, amount, date_rate };
    await models.rate_res.create(model);
    res.status(200).send("Add success");
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};
