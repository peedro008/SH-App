const { Cupon } = require("../db");

const GetCupones = async (req, res) => {
  let CuponesDb = await Cupon.findAll();
  CuponesDb.length
    ? res.status(200).json(CuponesDb)
    : res.status(404).send("No Hay Cupones");
};

const AddCupones = async (req, res) => {
  let { Porcentaje, Titulo, URL } = req.body;
  try {
    let CuponesDb = await Cupon.create({
      Porcentaje: Porcentaje,
      Titulo: Titulo,
      URL: URL,
    });

    res.status(200).send("Agregado");
  } catch (e) {
    console.log("Error in Cupon controller" + e);
  }
};

const deleteCupones = async (req, res) => {
  let { id } = req.body;
  try {
    let CuponesDb = await Cupon.destroy({
      where: { id: id },
    });

    res.status(200).send("Agregado");
  } catch (e) {
    console.log("Error in Cupon controller" + e);
  }
};

module.exports = { GetCupones, AddCupones, deleteCupones };
