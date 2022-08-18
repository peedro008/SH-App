import React, { useState } from "react";
import Calendar from "react-calendar";
import BotonMas from "./BotonMas.svg"
import "./AdminControlPanel.css";

function AddConsultaComponent({ PacienteSelected, Consultas, setTramite , setImagen}) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  const [value, onChange] = useState(new Date());
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
          onChange={onChange}
          value={value}
        />
        <div className="AddForm">
          <div className="AddFormRow"  style={{marginTop:"30px"}}>
          <p className="AddFormTitle">Consulta</p>
          <textarea className="AddFormInput" placeholder="Ingrese aquí"></textarea></div>
          <div className="AddFormRow">
          <p className="AddFormTitle">Se Indicó</p>
          <textarea className="AddFormInput" placeholder="Ingrese aquí"></textarea></div>
          <div className="AddFormFotoRow"  style={{marginBottom:"30px"}}>
          <p className="AddFormTitle"  >Añadir Fotos</p>
          <div>
          <input
              type={"file"}
              multiple
             style={{display:"none", backgroundSize:"cover"}}
              id="archivo"
              onChange={(e) => setImagen(e.target.files[0])}
            /><label for="archivo"><img style={{cursor:"pointer"}}  src={BotonMas}/></label></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddConsultaComponent;
