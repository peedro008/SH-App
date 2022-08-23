import React from "react";

import shareAdmin from "../../../../assets/shareAdmin.svg";
import downloadAdmin from "../../../../assets/downloadAdmin.svg";
import Navbar from "../../../Paciente/Elementos/Navbar";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./ComparationAdmin.css";
import ButtonBack from "../../../Paciente/Elementos/ButtonBack";
import ButtonShareDown from "../../Elementos/ButtonShareDownAdmin";
import ButtonBackAdmin from "../../Elementos/ButtonBackAdmin";

const Comparation = ({ imagenes }) => {
  const userName = useSelector((state) => state.userSession).userName;
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{userName}</h2>
        <h4>Antes y después</h4>
      </div>

      <div className="mainComp">
        <div className="cuboComp">
          <p style={{ marginLeft: "10%", fontSize: "4vw" }}>
            {location.state[0].createdAt.substring(0, 10)}
          </p>
          <img
            src={location.state[0].URL}
            alt="holi"
            className="imagenGenerate"
          />
        </div>

        <div className="cuboComp">
          <p style={{ marginLeft: "10%", fontSize: "4vw" }}>
            {location.state[0].createdAt.substring(0, 10)}
          </p>
          <img
            src={location.state[1].URL}
            alt="holi"
            className="imagenGenerate"
          />
        </div>
        <div className="containerButtons">
          <img
            src={shareAdmin}
            alt="share"
            style={{ width: "10vw", height: "10vw", marginLeft: "2vw" }}
          />
          <img
            src={downloadAdmin}
            alt="download"
            style={{ width: "10vw", height: "10vw", marginLeft: "2vw" }}
          />
          <p style={{ marginLeft: "25%", fontSize: "4vw" }}>SH consultorios</p>
        </div>
      </div>

      <ButtonBackAdmin Paciente={location.state[2]} />
    </div>
  );
};

export default Comparation;
