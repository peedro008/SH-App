import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import "./BeforeAndAfter.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const BeforeAndAfter = ({ consultas }) => {
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>Generar antes y después</h2>
        <h4>Seleccionar dos fotografías</h4>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          <SwiperSlide className="swiperSlide">
            <div className="containerPhotoMainBA">
            <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
              <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
              <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
          <div className="containerPhotoMainBA">
            <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
              <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
              <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
          <div className="containerPhotoMainBA">
            <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
              <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
              <div className="containerPhotoBA">
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
                <div className="Photo3">
                  <img
                    src={consultas[0]?.Fotos[0].URL}
                    alt="foto"
                    className="img3"
                  />
                  <p  className="fechaImg">{consultas[0]?.Fecha}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <ButtonBack />
    </div>
  );
};

export default BeforeAndAfter;
