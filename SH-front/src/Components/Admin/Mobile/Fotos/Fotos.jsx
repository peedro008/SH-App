import React, { useEffect } from "react";
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
import NavBarAdmin from "../../Elementos/NavBarAdmin";

const Fotos = () => {
  const [photoViz, setPhotoViz] = useState(null);
  const [photoStyle, setPhotoStyle] = useState("photoHidden");

  useEffect(() => {
    photoViz === null ? setPhotoStyle("photoHidden") : setPhotoStyle("photoOn");
  }, [photoViz]);

  const location = useLocation();

  return (
    <div className="mainContainerFotos">
      <NavBarAdmin />
      <div className="containerPhoto">
        <div className="containerHeader">
          <h2>{location.state[1]}</h2>
          <h4>Seguimiento fotográfico</h4>
        </div>
        <div className="containerCarrousel">
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
                        <div className="cuboTrackFotos" key={index}>
                          <div
                            className="containerImgTrack"
                            onClick={() => setPhotoViz(i.URL)}
                          >
                            <img
                              src={i.URL}
                              alt="holi"
                              className="imagenFotos"
                            />
                          </div>
                          <p style={{ fontSize: "5vw" }}>
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
      </div>
      <ButtonBackAdmin Paciente={location.state[2]} />

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
            height: "100vh",
            width: "100vw",
          }}
        ></img>
      </div>
    </div>
  );
};

export default Fotos;
