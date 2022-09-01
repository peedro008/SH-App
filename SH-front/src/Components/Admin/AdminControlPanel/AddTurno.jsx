import React, { useState } from "react";
import Calendar from "react-calendar";
import BotonMas from "./BotonMas.svg";
import "./AdminControlPanel.css";
import Añadir from "./Añadir.svg";
import volver from "./volver.svg";

import "./AdminControlPanel.css";
import { useEffect } from "react";
function AddTurnoComponent({
  PacienteSelected,
  Turnos,
  setTurnoForm,
  turnoForm,
  onSubmitTurno,
  openT,
  messageMT,
  setOpenT,
  setTramite,
}) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }

  useEffect(() => {
    setTurnoForm({});
    setOpenT(false);
  }, []);
  return (
    <div className="RightMain" style={{ height: "100vh" }}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">{name.substring(0, 2)}</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteSelected?.Nombre}</p>
            <p className="Paciente3" onClick={()=>setTramite(7)}>Ver información personal del paciente</p>
          </div>
        </div>
      </div>
      <div className="AddContain">
        <Calendar
          className={"react-calendar"}
          calendarType="US"
          onChange={(e) => {
            setTurnoForm({
              ...turnoForm,
              Fecha: e.toISOString().split("T")[0],
            });
          }}
        />

        <div style={{ flexDirection: "column" }}>
          <div className="AddForm" style={{ height: "38vh" }}>
            <div className="AddFormRow">
              <p className="AddFormTitle">Hora</p>
              <input
                type="time"
                className="ATinputTime"
                onChange={(e) => {
                  setTurnoForm({ ...turnoForm, Hora: e.target.value });
                }}
              />
            </div>
            <div className="AddFormRow">
              <p className="AddFormTitle">Observaciones</p>
              <textarea
                className="AddFormInput"
                style={{ height: "15svh" }}
                placeholder="Ingrese aquí"
                onChange={(e) => {
                  setTurnoForm({ ...turnoForm, Observacion: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div
            className="AddForm"
            style={{ height: "18vh", marginTop: "20px" }}
          >
            <div className="AddFormRow" style={{overflow:"scroll", padding:"40px"}}>
              <p className="AddFormTitle1" style={{marginBottom:"8px"}}>Otros turnos:</p>
              {Turnos.map((e) => {
               
                return (
                  <p
                    className="AddFormTitle1"
                    style={{ fontSize: "13px", marginTop: "10px" }}
                  >
                    {e.Fecha}
                  </p>
                );
              })}
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
        onClick={onSubmitTurno}
      />
      {openT && (
        <div className="modalCont">
          <div className="modal">
            <p className="modalText">{messageMT}</p>

            <button
              className="modalButton"
              onClick={() => {
                messageMT.substring(0, 3) == "Deb"
                  ? setOpenT(false)
                  : setOpenT(false);
                setTramite(null);
              }}
            >
              {" "}
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTurnoComponent;
