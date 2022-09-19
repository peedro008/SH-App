import React from "react";
import ButtonBack from "../Elementos/ButtonBack";

import share from "../../../assets/share.svg";
import download from "../../../assets/download.svg";
import Navbar from "../Elementos/Navbar";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Comparation.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import NavBarPaciente from "../Elementos/NavBarPaciente";

const Comparation = ({ PhotoForm, noInfo }) => {
  const userName = useSelector((state) => state.userSession).userName;
  const navigate = useNavigate();

  return (
    <div className="containerComp">
      <NavBarPaciente />
      <div className="containerHeaderCHA">
        <h2>{userName}</h2>
        <h4>Antes y después</h4>
        <p>{noInfo.mensaje}</p>
      </div>
      <div className="containerSwiper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {PhotoForm?.map((e) => {
            return (
              <SwiperSlide className="swiperSlide" key={e.id}>
                <div className="mainCompPaciente">
                  <div className="cuboComp">
                    <p style={{ marginLeft: "10%", fontSize: "4vw" }}>
                      {e.FechaAntes}
                    </p>
                    <img
                      src={e.FotoAntes}
                      alt="holi"
                      className="imagenGenerate"
                    />
                  </div>

                  <div className="cuboComp">
                    <p style={{ marginLeft: "10%", fontSize: "4vw" }}>
                      {e.FechaDespues}
                    </p>
                    <img
                      src={e.FotoDespues}
                      alt="holi"
                      className="imagenGenerate"
                    />
                  </div>
                  <div className="containerButtons">
                    <img
                      src={share}
                      alt="share"
                      style={{
                        width: "5vh",
                        minWidth: "20px",
                        height: "5vh",
                        minHeight: "20px",
                        marginLeft: "2vw",
                      }}
                    />
                    <img
                      src={download}
                      alt="download"
                      style={{
                        width: "5vh",
                        minWidth: "20px",
                        height: "5vh",
                        minHeight: "20px",
                        marginLeft: "2vw",
                      }}
                    />
                    <p
                      style={{
                        marginLeft: "25%",
                        marginTop: "1vh",
                        fontSize: "4vw",
                      }}
                    >
                      SH consultorios
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ButtonBack />
      <div className="containerGenerate">
        <button
          className="btnGenerate"
          onClick={() => navigate("/before-and-after")}
        >
          <h3>Generar</h3>
        </button>
      </div>
    </div>
  );
};

export default Comparation;
