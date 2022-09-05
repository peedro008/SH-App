import React from "react";
import ButtonBack from "../../../Paciente/Elementos/ButtonBack";
import { useLocation } from "react-router-dom";
import shareAdmin from "../../../../assets/shareAdmin.svg";
import downloadAdmin from "../../../../assets/downloadAdmin.svg";
import "./ComparationAdmin.css";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import ButtonBackAdmin from "../../Elementos/ButtonBackAdmin";
import NavBarAdmin from "../../Elementos/NavBarAdmin";

const ComparationAdminComponent = ({ PhotoForm }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state[0];

  return (
    <div>
      <NavBarAdmin />
      <div className="containerHeader">
        <h2>{location.state[0].Nombre}</h2>
        <h4>Antes y después</h4>
      </div>

      <div className="containerSwiper">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {data?.AntesDespues.map((e) => {
            return (
              <SwiperSlide className="swiperSlide" key={e.id}>
                <div className="mainCompAdmin">
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
                      src={shareAdmin}
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
                      src={downloadAdmin}
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

      <ButtonBackAdmin Paciente={location.state[0]} />
      <div className="containerGenerate">
        <button
          className="btnGenerateAdmin"
          onClick={() =>
            navigate("/before-and-after-admin", {
              state: [data, location.state[1]],
            })
          }
        >
          <h3>Generar</h3>
        </button>
      </div>
    </div>
  );
};

export default ComparationAdminComponent;
