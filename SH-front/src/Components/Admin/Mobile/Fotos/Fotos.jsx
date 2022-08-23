import React, { useEffect } from "react";
import ButtonBack from "../../../Paciente/Elementos/ButtonBack";
import Navbar from "../../../Paciente/Elementos/Navbar";

import btnQuit from "../../../../assets/btnQuit.svg";
import "./Fotos.css";
import { useLocation } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useState } from "react";
import ButtonBackAdmin from "../../Elementos/ButtonBackAdmin";

const Fotos = () => {
  const [photoViz, setPhotoViz] = useState(null);
  const [photoStyle, setPhotoStyle] = useState("photoHidden");

  useEffect(() => {
    photoViz === null ? setPhotoStyle("photoHidden") : setPhotoStyle("photoOn");
  }, [photoViz]);

  const location = useLocation();

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
                        <div
                          className="containerImgTrack"
                          onClick={() => setPhotoViz(i.URL)}
                        >
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

      <ButtonBackAdmin Paciente={location.state[2]} />

      <div className={photoStyle}>
        <img
          src={btnQuit}
          alt="Viz"
          onClick={() => setPhotoViz(null)}
          style={{
            position: "absolute",
            right: "9%",
            top: "16%",
            height: "5%",
          }}
        ></img>
        <img
          src={photoViz}
          alt="Viz"
          style={{
            height: "80vh",
            width: "90vw",
            borderRadius: "8%",
            margin: "0 auto",
            marginTop: "25%",
          }}
        ></img>
      </div>
    </div>
  );
};

export default Fotos;
