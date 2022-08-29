import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import "./Cupon.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Givenchy from "../../../assets/Givenchy.jpg";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import ButtonShareDown from "../Elementos/ButtonShareDown";

const Cupon = ({ Cupones }) => {
  const Kupones = [
    {
      Porcentaje: "10%",
      Titulo: "Desodorante",
      URL: Givenchy,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="containerHeaderCupon">
        <h2>Descuentos del mes</h2>
        <h4> ¡Descargá tu cupón!</h4>
        <p>Sólo descuento por mes</p>
      </div>
      <div className="containerCuponSwiper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {Kupones?.map((e) => {
            return (
              <SwiperSlide className="swiperSlide" key={e.id}>
                <div className="containerCupon">
                  <h1 style={{ color: "white", marginBottom: "-5%" }}>
                    {e.Porcentaje}% de descuento
                  </h1>
                  <h3> {e.Titulo}</h3>
                  <div className="containerImgCupon">
                    <img src={e.URL} alt="Foto Cupon" className="imgCupon" />
                  </div>
                  <p style={{ marginLeft: "50%" }}>SH consultorios</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ButtonShareDown />
      <ButtonBack />
    </div>
  );
};

export default Cupon;
