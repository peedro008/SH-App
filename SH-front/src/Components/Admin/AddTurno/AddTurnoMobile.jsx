import React from "react";
import ButtonBack from "../../Paciente/Elementos/ButtonBack";

import "./AddTurnoMobile.css";
import Navbar from "../../Paciente/Elementos/Navbar";
import ButtonAdd from "../Elementos/ButtonAdd";
import ButtonBackAdmin from "../Elementos/ButtonBackAdmin";
function AddTurnoMobileComponent({ form, setForm, onSubmitTurno, Paciente }) {
  return (
    <>
      <Navbar />
      <div className="containerAddTurnoMob">
        <div className="containerHeader">
          <h2>{Paciente.Nombre}</h2>
          <h4>Historia clínica</h4>
        </div>
        <div className="contForm">
          <div className="AddFormMobT">
            <div className="containerAddTurnoInput">
              <p className="AddFormTitleMobInput">Fecha: </p>
              <input
                type="date"
                className="inputDate"
                onChange={(e) => setForm({ ...form, Fecha: e.target.value })}
              />
            </div>
            <div className="containerAddTurnoInput">
              <p className="AddFormTitleMobInput">Hora: </p>
              <input
                type="time"
                className="inputTime"
                onChange={(e) => setForm({ ...form, Hora: e.target.value })}
              />
            </div>
            <div className="containerAddTurno" style={{ marginBottom: "10%" }}>
              <p className="AddFormTitleMob">Observaciones </p>
              <textarea
                onChange={(e) =>
                  setForm({ ...form, Indicacion: e.target.value })
                }
                className="textareaForm"
                placeholder="Ingrese aquí"
              ></textarea>
            </div>
          </div>
        </div>
        <ButtonBackAdmin Paciente={Paciente} />
        <ButtonAdd onSubmitConsulta={onSubmitTurno} />
      </div>
    </>
  );
}

export default AddTurnoMobileComponent;
