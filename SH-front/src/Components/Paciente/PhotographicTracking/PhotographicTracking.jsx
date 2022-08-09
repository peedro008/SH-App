import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import "./PhotographicTracking.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const PhotographicTracking = ({ userName, consultas }) => {
  console.log(consultas)
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{userName}</h2>
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
              <SwiperSlide className="swiperSlide">
               <div className="containerPhotoMain"> 
                <div className="containerPhoto">
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                 </div>
                 <div className="containerPhoto">
                 <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                 </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <div className="containerPhotoMain"> 
                <div className="containerPhoto">
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                 </div>
                 <div className="containerPhoto">
                 <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                 </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <div className="containerPhotoMain"> 
                <div className="containerPhoto">
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                 </div>
                 <div className="containerPhoto">
                 <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                  <div className="Photo">
                  <img src={consultas[0]?.Fotos[0].URL} alt="foto" className="img2"/>
                  <p>{consultas[0]?.Fecha}</p>
                  </div>
                 </div>
                </div>
              </SwiperSlide>
           
        </Swiper>
      </div>
      <div>
        <ButtonBack />
      </div>
      <ButtonBack />
    </div>
  );
};

export default PhotographicTracking;
