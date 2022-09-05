import React from "react";
import ButtonBack from "../../../Paciente/Elementos/ButtonBack";

import "./InfoPaciente.css";
import { useLocation } from "react-router-dom";

import NavBarAdmin from "../../Elementos/NavBarAdmin";

const InfoPaciente = () => {
  const location = useLocation();
  console.log(location);
  const {
    Nombre,
    DNI,
    ObraSocial,
    NroAfiliade,
    Nacimiento,
    Edad,
    Celular,
    Email,
    CantVacunas,
  } = location.state[0];

  // Nombre
  let name = Nombre.split(" ");
  name = `${name[0][0].toUpperCase()}${name[name.length - 1][0].toUpperCase()}`;

  return (
    <div>
      <NavBarAdmin />

      <div className="containerHeaderInfo">
        <div className="circleName">
          <h2 style={{ fontSize: "20px" }}>{name}</h2>
        </div>
        <h3 style={{ fontSize: "20px" }}>{Nombre}</h3>
      </div>
      <div>
        <div className="containerInfo">
          <div className="infoPaciente">
            <p className="infoTit">DNI:</p>
            <p className="infoP"> {DNI} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">Obra Social:</p>
            <p className="infoP"> {ObraSocial} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">N° de Afiliado:</p>
            <p className="infoP"> {NroAfiliade} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">Nacimiento:</p>
            <p className="infoP"> {Nacimiento} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">Edad:</p>
            <p className="infoP"> {Edad} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">Celular:</p>
            <p className="infoP"> {Celular} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">Mail:</p>
            <p className="infoP"> {Email} </p>
          </div>

          <div className="infoPaciente">
            <p className="infoTit">Cant. Vacunas:</p>
            <p className="infoP"> {CantVacunas} </p>
          </div>
        </div>
      </div>
      <div>
        <ButtonBack admin="/" />
      </div>
    </div>
  );
};

export default InfoPaciente;
