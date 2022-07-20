import React from "react";
import ButtonBack from "../ButtonBack";
import Navbar from "../Navbar";
import "./ClinicalHistory.css";
import { BsShare } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

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
        <div className="containerFooter">
          <button className="buttonPink">
            <BsShare size="5vw" />
          </button>
          <button className="buttonPink">
            <FiDownload size="5vw" />
          </button>
        </div>
        <ButtonBack />
      </div>
    </div>
  );
};

export default ClinicalHistory;
