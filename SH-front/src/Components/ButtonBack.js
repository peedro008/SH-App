import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./ButtonBack.css";

const ButtonBack = () => {
  return (
    <div className="containerBack">
      <button className="botonBack">
        <IoIosArrowBack size="4vw" />
        <h3 className="back">Volver</h3>
      </button>
    </div>
  );
};

export default ButtonBack;
