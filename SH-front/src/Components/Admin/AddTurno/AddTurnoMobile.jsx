import React from "react";
import ButtonBack from "../../Paciente/Elementos/ButtonBack";

import "./AddTurnoMobile.css";
import Navbar from "../../Paciente/Elementos/Navbar";
import ButtonAdd from "../Elementos/ButtonAdd";
function AddTurnoMobile({
  form,
  setForm,
  onSubmitConsulta,
  ImageHandleChange,
  setTramite,
  imagen,
}) {
  return (
    <div className="containerAddConsultaMob">
      <Navbar />
      <div className="containerHeader">
        <h2>Denis Peralta</h2>
        <h4>Historia clínica</h4>
      </div>
      <div className="containerTurno">
        <div className="AddFormMob">
          <div className="containerAddTurno">
            <p className="AddFormTitleMob">Observaciones </p>
            <textarea
              onChange={(e) => setForm({ ...form, Indicacion: e.target.value })}
              className="textareaForm"
              placeholder="Ingrese aquí"
            ></textarea>
          </div>
        </div>
      </div>
      <ButtonBack />
      <ButtonAdd onSubmitConsulta={onSubmitConsulta} />
      {/* <div className="containerBack">
        <img
          alt="btnAdd"
          src={Añadir}
          style={{
            position: "absolute",
            width: "95px",
            height: "48px",
            bottom: "5vh",
            right: "1vw",
            zIndex: 5,
            cursor: "pointer",
          }}
          onClick={onSubmitConsulta}
        />
      </div> */}
    </div>
  );
}

export default AddTurnoMobile;
