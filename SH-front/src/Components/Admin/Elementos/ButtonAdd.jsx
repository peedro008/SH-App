import React from "react";
import "./ButtonAdd.css";

const ButtonAdd = ({ onSubmitConsulta, addOn }) => {
  return (
    <div className="containerAdd">
      <button className="botonAdd" disabled={addOn} onClick={onSubmitConsulta}>
        <h3>Añadir</h3>
      </button>
    </div>
  );
};

export default ButtonAdd;
