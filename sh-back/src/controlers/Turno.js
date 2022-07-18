const { Turno, Paciente } = require("../db");

const GetTurnosPaciente = async (req, res) => {
  let PacienteId = req.query.PacienteId;
  let TurnosDb = await Foto.findAll({
    where: {
      PacienteId: PacienteId,
    },
    include: [{ model: Paciente }],
  });
  TurnosDb.length
    ? res.status(200).json(TurnosDb)
    : res.status(404).send("No hay Turnos de este paciente.");
};
const GetTurnos = async (req, res) => {
  let TurnosDb = await Foto.findAll({
    include: [{ model: Paciente }],
  });
  TurnosDb.length
    ? res.status(200).json(TurnosDb)
    : res.status(404).send("No hay Turnos.");
};

const AddTurno = async (req, res) => {
  let PacienteID = req.body.PacienteID;
  let FechaHora = req.body.FechaHora;
  let Observacion = req.body.Observacion;
  try {
    let TurnoDb = await Turno.create({
      PacienteID: PacienteID,
      FechaHora: FechaHora,
      Observacion: Observacion,
    });
    res.status(200).send("Turno Agregado");
  } catch (e) {
    console.log("Error in Turno controller" + e);
  }
};

module.exports = { GetTurnosPaciente, GetTurnos, AddTurno };
