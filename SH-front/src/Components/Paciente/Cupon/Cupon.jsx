import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import "./Cupon.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Cupon = ({Cupones}) => {
  return (
    <div>
    <Navbar />
    <div className="containerHeader">
      <h2>Tratamientos en SH</h2>
      <h4>¿Qué estás buscando?</h4>
    </div>
    <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {Cupones?.map((e) => {
            return (
              <SwiperSlide className="swiperSlide" key={e.id}>
                <div className="containerCupon">
                  <h1> {e.Porcentaje} de descuento</h1>
                  <p> {e.Titulo}</p>
                  <div className="imgCupon">
                  <img src={e.URL} alt="Foto Cupon"/>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    <ButtonBack />
  </div>
  );
};

export default Cupon;
