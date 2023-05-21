import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";

const models = initModels(sequelize);

export const getLike = async (req, res) => {
  try {
    let data = await models.like_res.findAll({
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

export const addLike = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;
    if (!user_id || !res_id || !date_like) {
      return res.status(400).send("Please input data");
    }
    let model = { user_id, res_id, date_like };
    await models.like_res.create(model);
    res.status(200).send("Add success");
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};

export const deleteLike = async (req, res) => {
  try {
    let { like_id } = req.params;
    let data = await models.like_res.destroy({
      where: {
        like_id,
      },
    });
    if (data) {
      res.status(200).send("Delete success");
    } else {
      res.status(400).send(`Like with id = ${like_id} does not exist`);
    }
  } catch (error) {
    res.status(500).send("Error Backend");
  }
};
