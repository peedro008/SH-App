import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonGenerate.css";

const ButtonGenerate = () => {
  const navigate = useNavigate();

  return (
    <div className="containerGenerate">
      <button className="botonGenerate" onClick={() => navigate("/compare")}>
        <h3 className="back">Generar</h3>
      </button>
    </div>
  );
};

export default ButtonGenerate;
