import React from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import imagen from "../../../assets/vichy.webp";
import "./Comparation.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Comparation = ({ userName, imagenes }) => {

  const arrayFoto = [[ {imagen, fecha: "16/07/2005", id: 1}, {imagen, fecha: "16/07/2005", id: 9}],[{imagen, fecha: "16/07/2005", id: 5},{imagen, fecha: "16/07/2005", id: 8}]]

  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{userName}</h2>
        <h4>Antes y después</h4>
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
              <div className="mainComp">
            {e.map(i => {
              return<>
                <div className="cuboComp">
                    <img src={i.imagen} alt="holi" className="imagenComp"/>
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

export default Comparation;
