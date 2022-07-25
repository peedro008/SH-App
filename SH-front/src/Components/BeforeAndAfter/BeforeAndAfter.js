import React from "react";
import ButtonBack from '../Elementos/ButtonBack';
import Navbar from "../Elementos/Navbar";

const BeforeAndAfter = () => {
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>Generar antes y después</h2>
        <h4>Seleccionar dos fotografias</h4>
      </div>
      <ButtonBack />
    </div>
  );
};

export default BeforeAndAfter;
