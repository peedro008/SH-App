import React from "react";
import "./ButtonAdd.css";

const ButtonAdd = ({ onSubmitConsulta }) => {
  return (
    <div className="containerAdd">
      <button className="botonAdd" onClick={onSubmitConsulta}>
        <h3>Añadir</h3>
      </button>
    </div>
  );
};

export default ButtonAdd;
