import React, { useState } from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import NavBarPaciente from "../Elementos/NavBarPaciente";
import "./Tratamientos.css";

const Tratamiento = ({ tratamientos }) => {
  const [show, setShow] = useState({ trat: false });
  const [dataShow, setDataShow] = useState({ text: "" });

  return (
    <div>
      <NavBarPaciente />
      <div className="containerHeaderCHA">
        <h2>Tratamientos en SH</h2>
        <h4>¿Qué estás buscando?</h4>
      </div>
      {tratamientos.map((e) => {
        return (
          <div key={e.id}>
            <div
              className={
                dataShow === e.Descripcion
                  ? "containerTrat"
                  : "containerTratOff"
              }
            >
              <h4 className="botonTextMob" style={{ fontWeight: "bold" }}>
                {e.Titulo}
              </h4>
              <button
                className={dataShow === e.Descripcion ? "off" : "on"}
                onClick={() => {
                  if (dataShow === e.Descripcion) {
                    setShow({ ...show, trat: !show.trat });
                  } else {
                    setShow({ ...show, trat: true });
                    setDataShow(e.Descripcion);
                  }
                }}
              >
                ver
              </button>
            </div>
            <div className="containerText">
              {show.trat && dataShow === e.Descripcion && <p>{dataShow}</p>}
            </div>
          </div>
        );
      })}

      <ButtonBack />
    </div>
  );
};

export default Tratamiento;
