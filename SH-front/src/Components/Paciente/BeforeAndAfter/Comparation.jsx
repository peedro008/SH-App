import React from "react";
import ButtonBack from "../Elementos/ButtonBack";

import share from "../../../assets/share.svg"
import download from "../../../assets/download.svg"
import Navbar from "../Elementos/Navbar";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Comparation.css";


const Comparation = ({ imagenes }) => {
  const userName = useSelector((state) => state.userSession).userName;
  const location = useLocation();


  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{userName}</h2>
        <h4>Antes y después</h4>
      </div>
     
      <div className="mainComp">
        <div className="cuboComp">
          <p style={{ marginLeft: "10%", fontSize:"4vw" }}>
            {location.state[0].createdAt.substring(0, 10)}
          </p>
          <img
            src={location.state[0].URL}
            alt="holi"
            className="imagenGenerate"
          />
        </div>

        <div className="cuboComp">
          <p style={{ marginLeft: "10%", fontSize:"4vw" }}>
            {location.state[0].createdAt.substring(0, 10)}
          </p>
          <img
            src={location.state[1].URL}
            alt="holi"
            className="imagenGenerate"
          />
        </div>
        <div className="containerButtons">
        <img src={share} alt="share" style={{width:"10vw", height:"10vw" , marginLeft:"2vw"}}/>
        <img src={download} alt="download" style={{width:"10vw", height:"10vw", marginLeft:"2vw"}}/>
          <p style={{ marginLeft: "25%", fontSize:"4vw" }}>SH consultorios</p>
        </div>
      </div>
      <div>
        <ButtonBack />
      </div>
      <ButtonBack />
    </div>
  );
};

export default Comparation;
