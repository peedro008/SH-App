import React, { useState } from "react";
import Calendar from "react-calendar";
import BotonMas from "./BotonMas.svg";
import "./AdminControlPanel.css";
import Añadir from "./Añadir.svg";
import volver from "./volver.svg";
function AddTurnoComponent({
  PacienteSelected,
setTramite


}) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  return (
    <div className="RightMain" style={{ height: "100vh" }}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">{name.substring(0, 2)}</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteSelected?.Nombre}</p>
            <p className="Paciente3">Ver información personal del paciente</p>
          </div>
        </div>
      </div>
      <div className="AddContain">
        <Calendar
          className={"react-calendar"}
          calendarType="US"
         
        /><div style={{flexDirection:"column"}}>
        <div className="AddForm" style={{height:"38vh"}}>
          <div className="AddFormRow" >
            <p className="AddFormTitle">Observaciones</p>
            <textarea
              className="AddFormInput"
                style={{height:"25vh"}}
              placeholder="Ingrese aquí"
            ></textarea>
          </div>
         
        </div>
         <div className="AddForm" style={{height:"18vh", marginTop:"20px"}}>
          <div className="AddFormRow" style={{ }}>
            <p className="AddFormTitle1" >Otros turnos:</p>
            <p
            className="AddFormTitle1"
              style={{ fontSize:"13px", marginTop:"10px"}}
             
            >- 14/09/2022</p>
             <p
            className="AddFormTitle1"
              style={{ fontSize:"13px",}}
             
            >- 21/09/2022</p>
          </div>
         
        </div>
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          width: "90px",
          height: "48px",
          bottom: "1%",
          right: "5%",
          zIndex: 5,
          cursor: "pointer",
        }}
        src={volver}
        onClick={() => setTramite(null)}
      />
      <img
        src={Añadir}
        style={{
          position: "absolute",
          width: "90px",
          height: "48px",
          bottom: "1%",
          right: "14%",
          zIndex: 5,
          cursor: "pointer",
        }}
       
      />
    </div>
  );
}

export default AddTurnoComponent;
