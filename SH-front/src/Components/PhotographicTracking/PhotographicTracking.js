import React from "react";
import ButtonBack from "../ButtonBack";
import Navbar from "../Navbar";
import "./PhotographicTracking.css";

const PhotographicTracking = () => {
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>Jose Alfonso</h2>
        <h4>Seguimiento fotográfico</h4>
      </div>
      <ButtonBack />
    </div>
  );
};

export default PhotographicTracking;
