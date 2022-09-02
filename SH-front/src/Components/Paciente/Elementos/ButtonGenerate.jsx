import React from "react";

import "./ButtonGenerate.css";

const ButtonGenerate = ({ clase, onSubmitBAF }) => {
  return (
    <div className="containerGenerateOn">
      <button
        disabled={clase ? false : true}
        className="botonGenerate"
        onClick={onSubmitBAF}
      >
        <h3 className="back">Generar</h3>
      </button>
    </div>
  );
};

export default ButtonGenerate;
