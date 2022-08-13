import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonGenerate.css";

const ButtonGenerate = ({clase, selected1, selected2}) => {
  const navigate = useNavigate();
  return (
    <div className="containerGenerateOn">
      <button disabled={clase ? false : true} className="botonGenerate" onClick={() => navigate("/compare", {state: [selected1, selected2]})}>
        <h3 className="back">Generar</h3>
      </button>
    </div>
  );
};

export default ButtonGenerate;
