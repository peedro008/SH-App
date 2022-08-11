import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import imagen from "../../../assets/vichy.webp";
import "./PhotographicTracking.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const PhotographicTracking = ({ userName, consultas }) => {

  const arrayFoto = [[ {imagen, fecha: "16/07/2005", id: 1}, {imagen, fecha: "16/07/2005", id: 9}, {imagen, fecha: "16/07/2005", id: 10}, {imagen, fecha: "16/07/2005", id: 11}],[{imagen, fecha: "16/07/2005", id: 5},{imagen, fecha: "16/07/2005", id: 8}]]

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
          {arrayFoto.map(e => {
            return <>
            <SwiperSlide className="swiperSlide">
              <div className="mainTrack">
            {e.map(i => {
              return<>
                <div className="cuboTrack">
                  <div className="containerImgTrack">
                    <img src={i.imagen} alt="holi" className="imagen"/>
                  </div>
                  <p style={{ fontSize:"4vw"}}>{i.fecha}</p>
                </div>
              </>
            })} 
            </div>
            </SwiperSlide>
            </>
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

export default PhotographicTracking;
