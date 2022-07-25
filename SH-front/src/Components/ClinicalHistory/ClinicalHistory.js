import React from "react";
import ButtonBack from '../Elementos/ButtonBack';
import ButtonShareDown from "../Elementos/ButtonShareDown";
import Navbar from "../Elementos/Navbar";
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

  let prescriptions = [
    {
      id: "1",
      medication: "Roacutan x 100mg",
      periodicity: "Cada: 8 horas",
      treatment: "Durante: 2 meses",
    },
    {
      id: "2",
      medication: "Ibuprofeno 800g",
      periodicity: "Cada: 8 horas",
      treatment: "Durante: 4 dias",
    },
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
          <div className="ConsultaCard">
            <div className="consultaText">
              <h3> Consulta 23/06/22 </h3>
              <p>
                El paciente presentó acné severo, anomalías y una clara
                intencion en hacer tratamiento con la doc Sabi. Se habló de la
                importancia de utilizar protector solar.
              </p>
              <h3> Se recetó: </h3>
              {prescriptions.map((e) => (
                <p key={e.id}>
                  {e.medication} <br /> {e.periodicity} <br /> {e.treatment}
                </p>
              ))}
              <p></p>
            </div>
          </div>
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
