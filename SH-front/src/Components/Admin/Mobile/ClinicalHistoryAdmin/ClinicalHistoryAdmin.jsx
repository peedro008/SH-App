import React from "react";
import ButtonBackAdmin from "../../Elementos/ButtonBackAdmin";

import Navbar from "../../../Paciente/Elementos/Navbar";
import "./ClinicalHistoryAdmin.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useLocation } from "react-router-dom";
import ButtonShareDown from "../../Elementos/ButtonShareDownAdmin";

const ClinicalHistoryAdmin = ({ userName }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />
      <div className="containerHeaderCHA">
        <h2>{location.state[1]}</h2>
        <h4>Historia clínica</h4>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiperAdmin"
        >
          {location.state[0]?.map((e) => {
            return (
              <SwiperSlide className="swiperSlide" key={e.id}>
                <div className="containerConsultaAdmin">
                  <h2 className="consulta">Consulta: {e.Fecha}</h2>
                  <p className="consulta"> {e.Detalle} </p>
                  <br />
                  <h2 className="consulta">Se Recetó:</h2>
                  <p className="consulta">{e.Indicacion}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <ButtonShareDown />
        <ButtonBackAdmin Paciente={location.state[2]} />
      </div>
    </div>
  );
};

export default ClinicalHistoryAdmin;
