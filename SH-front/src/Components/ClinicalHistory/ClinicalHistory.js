import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import ButtonShareDown from "../Elementos/ButtonShareDown";
import Navbar from "../Elementos/Navbar";
import "./ClinicalHistory.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const ClinicalHistoryComponent = ({ consultas }) => {
  console.log({ consultas });
  const SCROLL_DIRECTION = {
    H: "horizontal",
  };
  return (
    <div className="main">
      <Navbar />
      <div className="containerHeader">
        <h2></h2>
        <h3>Historia clínica</h3>
      </div>
      <div className="Carousel">
        {consultas ? (
          <Carousel  showStatus={false} showThumbs={false} >
            {consultas.map((e) => {
              return (
                <div className="ConsultaCard" key={e.Paciente.Userid}>
                  <div className="consultaText">
                    <h3> Consulta {e.Fecha} </h3>
                    <p>{e.Detalle}</p>
                    <h3> Se recetó: </h3>
                    {e.Indicacion}
              
                    <p></p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <p> El historial clínico de este usuario no esta disponible</p>
        )}
      </div>
      <div>
        <ButtonBack />
      </div>
    </div>
  );
};

export default ClinicalHistoryComponent;
