const { Router } = require("express");
const { login, loginPassword } = require("./controlers/auth");
const { get } = require("./controlers/get");
const { GetPacientes, AddPaciente } = require("./controlers/Pacientes");
const { GetConsultasPaciente, AddConsulta } = require("./controlers/Consulta");
const { GetFotosPaciente, GetFotosConsulta, AddFoto } = require("./controlers/Foto");
const { GetTurnosPaciente, GetTurnos, AddTurno } = require("./controlers/Turno");
const { GetTratamientos, AddTratamientos } = require("./controlers/Tratamientos");
const { GetCupones, AddCupones, deleteCupones } = require("./controlers/Cupones");
const router = Router();

  router.get("/", get);
  router.post("/login", login);
  router.post("/loginPassword", loginPassword);
  router.get("/GetPacientes", GetPacientes);
  router.post("/AddPaciente", AddPaciente);
  router.get("/GetConsultasPaciente", GetConsultasPaciente);
  router.post("/AddConsulta", AddConsulta);
  router.get("/GetFotosPaciente", GetFotosPaciente);
  router.get("/GetFotosConsulta", GetFotosConsulta);
  router.post("/AddFoto", AddFoto);
  router.get("/GetTurnosPaciente", GetTurnosPaciente);
  router.get("/GetTurnos", GetTurnos);
  router.post("/AddTurno", AddTurno);
  router.get("/GetTratamientos", GetTratamientos);
  router.post("/AddTratamientos", AddTratamientos);
  router.get("/GetCupones", GetCupones);
  router.post("/AddCupones", AddCupones);
  router.post("/deleteCupones", deleteCupones);

  
  (module.exports = router);

  