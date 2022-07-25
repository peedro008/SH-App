import React from "react";
import ButtonBack from '../Elementos/ButtonBack';
import ButtonShareDown from "../Elementos/ButtonShareDown";
import Navbar from "../Elementos/Navbar";
import "./ClinicalHistory.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const ClinicalHistoryComponent = ({
  consultas
}) => {
 

  const SCROLL_DIRECTION = {
    H: "horizontal",
  };
  return (
    <div className="main">
      <Navbar />

      <div className="containerHeader">
        <h2></h2>
        <h4>Historia clínica</h4>
      </div>
      <div className="Carousel">
         <Carousel showStatus={false} showThumbs={false} infiniteLoop={true}>
        {    consultas?
          consultas.map(e=>{return(
          <div className="ConsultaCard">
            
            <div className="consultaText">
              <h3> Consulta {e.Fecha} </h3>
              <p>
               {e.Detalle}
              </p>
              <h3> Se recetó: </h3>
             {e.Indicacion}
             <img src={e.Fotos[0]?.URL}/>
              <p></p>
            </div>
          </div>)})
          :<p> LACONCHADETUMADRE</p>
          }
        </Carousel>
      </div>
      <div>
        <ButtonBack />
      </div>
    </div>
  );
};

export default ClinicalHistoryComponent;
