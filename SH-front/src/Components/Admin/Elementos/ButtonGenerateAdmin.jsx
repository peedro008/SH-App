import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonGenerateAdmin.css";

const ButtonGenerate = ({ clase, PacienteSelected, onSubmitBAF }) => {
  const navigate = useNavigate();

  const onSubmitAdmin = () => {
    onSubmitBAF();
    navigate("/patient", { state: [PacienteSelected] });
  };
  return (
    <div className="containerGenerateOn">
      <button
        disabled={clase ? false : true}
        className="botonGenerate"
        onClick={() => onSubmitAdmin()}
      >
        <h3 className="back">Generar</h3>
      </button>
    </div>
  );
};

export default ButtonGenerate;
