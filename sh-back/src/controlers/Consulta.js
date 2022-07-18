const { Consulta, Foto, Paciente } = require("../db");

const GetConsultasPaciente = async (req, res) => {
  let PacienteId = req.query.PacienteId;
  let FotosDb = await Consulta.findAll({
    where: {
      PacienteId: PacienteId,
        },
    include: [{ model: Foto }, { model: Paciente }],
  });
  FotosDb.length
    ? res.status(200).json(FotosDb)
    : res.status(404).send("No hay fotos de este paciente.");
};

const AddConsulta = async (req, res) => {

  let PacienteId = req.body.PacienteId;
  let Indicacion = req.body.Indicacion;
  let Observacion = req.body.Observacion;
  let Fecha = req.body.Fecha;
  let Fotos = req.body.Fotos;
  try {
    let ConsultaDb = await Consulta.create({
      PacienteId: PacienteId,
      Indicacion: Indicacion,
      Observacion: Observacion,
      Fecha: Fecha,
    })
    .then(ConsultaDb=>{
        Fotos.length&&
        Fotos.map(e=>{
            Foto.create({
                PacienteId: PacienteId,
                ConsultaId: ConsultaDb.id,
                URL: URL,
              });
        })
    })
    
    res.status(200).send("Consulta Agregada");
    }
    
   catch (e) {
    console.log("Error in Consulta controller" + e);
  }
};

module.exports = { GetConsultasPaciente, AddConsulta };
