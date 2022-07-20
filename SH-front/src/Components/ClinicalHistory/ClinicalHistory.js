import React from "react";
import ButtonBack from "../ButtonBack";
import ButtonShareDown from "../ButtonShareDown";
import Navbar from "../Navbar";
import "./ClinicalHistory.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const ClinicalHistory = () => {
  let data = [
    { name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd" },
    { name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd" },
    { name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd" },
    { name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd" },
    { name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd" },
  ];

  const SCROLL_DIRECTION = {
    H: "horizontal",
  };
  return (
    <div className="main">
      <Navbar />

      <div className="containerHeader">
        <h2>Jose Alfonso</h2>
        <h4>Historia clínica</h4>
      </div>
      <div className="Carousel">
        <Carousel showStatus={false} showThumbs={false} infiniteLoop={true}>
          <div className="ConsultaCard">asdas</div>
          <div className="ConsultaCard">aaa</div>
          <div className="ConsultaCard">ggg</div>
          <div className="ConsultaCard">asdas</div>
          <div className="ConsultaCard">aaa</div>
          <div className="ConsultaCard">ggg</div>
          <div className="ConsultaCard">asdas</div>
          <div className="ConsultaCard">aaa</div>
          <div className="ConsultaCard">ggg</div>
          <div className="ConsultaCard">asdas</div>
          <div className="ConsultaCard">aaa</div>
          <div className="ConsultaCard">ggg</div>
        </Carousel>
      </div>
      <div>
        <ButtonBack />
      </div>
    </div>
  );
};

export default ClinicalHistory;
