import React, { useEffect, useState } from "react";
import ButtonBack from "../Elementos/ButtonBack";
import Navbar from "../Elementos/Navbar";
import "./PhotographicTracking.css";
import btnQuit from "../../../assets/btnQuit.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const PhotographicTracking = ({ userName, fotosP }) => {
  const [photoViz, setPhotoViz] = useState(null);
  const [photoStyle, setPhotoStyle] = useState("photoHidden");

  useEffect(() => {
    photoViz === null ? setPhotoStyle("photoHidden") : setPhotoStyle("photoOn");
  }, [photoViz]);
  return (
    <div>
      <Navbar />
      <div className="containerHeader">
        <h2>{userName}</h2>
        <h4>Seguimiento fotográfico</h4>
      </div>
      <div className="containerSwiper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {fotosP.map((e, index) => {
            return (
              <SwiperSlide className="swiperSlide" key={index}>
                <div className="mainTrack">
                  {e.map((i, index) => {
                    return (
                      <div className="cuboTracking" key={index}>
                        <div
                          className="containerImgTrack"
                          onClick={() => setPhotoViz(i.URL)}
                        >
                          <img src={i.URL} alt="holi" className="imagenTrack" />
                        </div>
                        <p style={{ fontSize: "25px" }}>
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
      <div>
        <ButtonBack />
      </div>
      <div className={photoStyle}>
        <img
          src={btnQuit}
          alt="Viz"
          onClick={() => setPhotoViz(null)}
          style={{
            position: "absolute",
            right: "5%",
            top: "5%",
            height: "5%",
            minHeight: "30px",
            opacity: 0.7,
          }}
        ></img>
        <img
          src={photoViz}
          alt="Viz"
          style={{
            height: "65vh",
            width: "95vw",
            maxHeight: "400px",
            borderRadius: "8%",
            margin: "0 auto",
            marginTop: "20vh",
          }}
        ></img>
      </div>
    </div>
  );
};

export default PhotographicTracking;
