import React from "react";
import "./Boton.css";
import { IoPersonOutline } from "react-icons/io5";
const BotonComponent = ({ Titulo, Paciente, submit,PacienteSelected }) => {
  let temp = PacienteSelected&&PacienteSelected.Nombre==Paciente.Nombre?1:0
  return (
    <div className="botonContainer"style={{backgroundColor:temp?"rgba(43, 108, 120, 1)":"white"}} onClick={() => submit(Paciente)}>
      <IoPersonOutline size={"25px"} color={temp?"white":"#15353B"} />
      <p className="botonText" style={{color:temp?"white":"black"}}>{Titulo}</p>
      <div className="subButon">
        <p className="subButonText">ver</p>
      </div>
    </div>
  );
};

export default BotonComponent;
