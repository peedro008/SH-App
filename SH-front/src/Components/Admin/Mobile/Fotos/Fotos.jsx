import React, { useEffect } from "react";
import ButtonBack from "../../../Paciente/Elementos/ButtonBack";
import Navbar from "../../../Paciente/Elementos/Navbar";
import imagen from "../../../../assets/vichy.webp";
import "./Fotos.css";
import { useLocation } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Fotos = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{location.state[1]}</h2>
        <h4>Seguimiento fotográfico</h4>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {location.state[0].map((e, index) => {
            return (
              <SwiperSlide className="swiperSlide" key={index}>
                <div className="mainTrack">
                  {e.map((i, index) => {
                    return (
                      <div className="cuboTrack" key={index}>
                        <div className="containerImgTrack">
                          <img src={i.URL} alt="holi" className="imagen" />
                        </div>
                        <p style={{ fontSize: "4vw" }}>
                          {i.createdAt.substring(0, 10)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <ButtonBack />
      </div>
      <ButtonBack />
    </div>
  );
};

export default Fotos;
