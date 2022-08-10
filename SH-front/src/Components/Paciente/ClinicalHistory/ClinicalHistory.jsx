import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import ButtonShareDown from "../Elementos/ButtonShareDown";
import Navbar from "../Elementos/Navbar";
import "./ClinicalHistory.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const ClinicalHistoryComponent = ({ consultas, userName }) => {
  console.log(consultas)
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{userName}</h2>
        <h3>Historia clínica</h3>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {consultas?.map((e) => {
            return (
              <SwiperSlide className="swiperSlide" key={e.id}>
                <div className="containerConsulta">
                  <h2 className="consulta">Consulta: {e.Fecha}</h2>
                  <p className="consulta"> {e.Detalle} </p>
                  <br />
                  <h2 className="consulta">Se Recetó:</h2>
                  <p className="consulta">{e.Indicacion}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div>
        <ButtonShareDown/>
        <ButtonBack />
      </div>
    </div>
  );
};

export default ClinicalHistoryComponent;
