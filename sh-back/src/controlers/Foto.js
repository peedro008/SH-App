const { Foto } = require("../db");

const GetFotosPaciente = async (req, res) => {
  let PacienteId = req.query.PacienteId;
  let FotosDb = await Foto.findAll({
    where: {
      PacienteId: PacienteId,
      deleted: false,
    },
  });
  FotosDb.length
    ? res.status(200).json(FotosDb)
    : res.status(404).send("No hay fotos de este paciente.");
};
const GetFotosConsulta = async (req, res) => {
  let ConsultaId = req.query.ConsultaId;
  let FotosDb = await Foto.findAll({
    where: {
      ConsultaId: ConsultaId,
      deleted: false,
    },
  });
  FotosDb.length
    ? res.status(200).json(FotosDb)
    : res.status(404).send("No hay fotos de este paciente.");
};

const AddFoto = async (req, res) => {
  let PacienteId = req.body.PacienteId;
  let ConsultaId = req.body.ConsultaId;
  let URL = req.body.URL;
  try {
    let FotoDb = await Foto.create({
      PacienteId: PacienteId,
      ConsultaId: ConsultaId,
      URL: URL,
    });
    res.status(200).send("AddFoto Agregada");
  } catch (e) {
    console.log("Error in Foto controller" + e);
  }
};

module.exports = { GetFotosPaciente, GetFotosConsulta, AddFoto };
