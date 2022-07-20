import React from "react";
import ButtonBack from "../ButtonBack";
import ButtonShareDown from "../ButtonShareDown";
import Navbar from "../Navbar";
import "./ClinicalHistory.css";

const ClinicalHistory = () => {
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>Jose Alfonso</h2>
        <h4>Historia clínica</h4>
      </div>
      <div className="history">Lorem Impum</div>
      <div>
        <ButtonShareDown />
        <ButtonBack />
      </div>
    </div>
  );
};

export default ClinicalHistory;
