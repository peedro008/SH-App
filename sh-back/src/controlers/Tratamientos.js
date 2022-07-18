const { Tratamiento } = require("../db");

const GetTratamientos = async (req, res) => {
  let TratamientosDb = await Tratamiento.findAll();
  TratamientosDb.length
    ? res.status(200).json(TratamientosDb)
    : res.status(404).send("No Hay Tratamientos");
};

const AddTratamientos = async (req, res) => {
  let { Categoria, Titulo, Descripcion } = req.body;
  try {
    let TratamientoDb = await Tratamiento.create({
      Categoria: Categoria,
      Titulo: Titulo,
      Descripcion: Descripcion,
    });

    res.status(200).send("Agregado");
  } catch (e) {
    console.log("Error in Paciente controller" + e);
  }
};

module.exports = { GetTratamientos, AddTratamientos };
