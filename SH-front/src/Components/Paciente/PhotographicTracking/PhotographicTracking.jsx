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

const PhotographicTracking = ({ userName, fotosP }) => {

  
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
          {fotosP.map((e, index) => {
            return <SwiperSlide className="swiperSlide" key={index}>
              <div className="mainTrack">
           {e.map((i, index) => {
            return <div className="cuboTrack" key={index}>
                  <div className="containerImgTrack">
                    <img src={i.URL} alt="holi" className="imagen"/>
                  </div>
                  <p style={{ fontSize:"4vw"}}>{i.createdAt.substring(0,10)}</p>
                </div>
            
           })}
           </div>
            </SwiperSlide>
              
           
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
