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
import BotonTramiteComponent from "../../Admin/Elementos/BotonTramite";
import ButtonShareDown from "../Elementos/ButtonShareDown";

const Cupon = ({Cupones}) => {
  return (
    <div>
    <Navbar />
    <div className="containerHeader">
      <h2>Descuentos del mes</h2>
      <h4> ¡Descargá tu cupón!</h4>
      <p>Sólo descuento por mes</p>
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
                  <h1 style={{color:"white", marginBottom:"-5%"}}> {e.Porcentaje}% de descuento</h1>
                  <h3> {e.Titulo}</h3>
                  <div className="containerImgCupon">
                  <img src={e.URL} alt="Foto Cupon" className="imgCupon"/>
                
                  </div>
                  <p style={{marginLeft:"50%"}}>SH consultorios</p>
                  </div>
              
              </SwiperSlide>
            )
          })}
        </Swiper>
        
      </div>
     <ButtonShareDown/>
    <ButtonBack />
  </div>
  );
};

export default Cupon;
