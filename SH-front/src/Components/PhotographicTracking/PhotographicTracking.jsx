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
          {consultas?.map((e) => {
            return (
              <SwiperSlide className="swiperSlide">
                <div className="containerPhoto">
                 <div>
               
                 </div>
                </div>
              </SwiperSlide>
            )
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
