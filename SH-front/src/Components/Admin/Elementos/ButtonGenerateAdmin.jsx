import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonGenerateAdmin.css";

const ButtonGenerate = ({ clase, selected1, selected2, Paciente }) => {
  const navigate = useNavigate();
  return (
    <div className="containerGenerateOn">
      <button
        disabled={clase ? false : true}
        className="botonGenerate"
        onClick={() =>
          navigate("/compareAdmin", { state: [selected1, selected2, Paciente] })
        }
      >
        <h3 className="back">Generar</h3>
      </button>
    </div>
  );
};

export default ButtonGenerate;
