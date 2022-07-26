import React, { useState } from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import "./Tratamientos.css";

const Tratamiento = ({ tratamientos }) => {
  const [show, setShow] = useState({ pri: false, sec: false, thr: false });

  console.log({ tratamientos });

  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>Tratamientos en SH</h2>
        <h4>¿Qué estás buscando?</h4>
      </div>
      <div>
        <div className="containerTrat">
          <h4>Tratamientos Faciales</h4>
          <button
            className="SeeBtn"
            onClick={() => {
              setShow({ ...show, pri: !show.pri });
            }}
          >
            ver
          </button>
        </div>

        <div className="containerText">
          {show.pri && (
            <p>
              {tratamientos[1].Categoria}
            </p>
          )}
        </div>

        <div className="containerTrat">
          <h4>Tratamientos Capilares</h4>
          <button
            className="SeeBtn"
            onClick={() => {
              setShow({ ...show, sec: !show.sec });
            }}
          >
            ver
          </button>
        </div>

        <div className="containerText">
          {show.sec && (
            <p>
              N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2 N°2
              N°2 N°2
            </p>
          )}
        </div>

        <div className="containerTrat">
          <h4>Tratamientos Corporales</h4>
          <button className="SeeBtn">ver</button>
        </div>
      </div>

      <ButtonBack />
    </div>
  );
};

export default Tratamiento;
