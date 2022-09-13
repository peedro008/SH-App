import React from "react";
import volver from "./volver.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import generar from "./generar.svg"
import share from "../../../assets/share.svg";
import download from "../../../assets/download.svg";
import "swiper/css/pagination";
function BeforeAndAfterCarComponent({ PacienteSelected, setTramite }) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  return (
    <div className="RightMain" style={{ height: "100vh" }}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">{name.substring(0, 2)}</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteSelected?.Nombre}</p>
            <p className="Paciente3" onClick={() => setTramite(7)}>
              Antes y después
            </p>
          </div>
        </div>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiperD"
        style={{ backgroundColor: "transparent" }}
      >
        {PacienteSelected.AntesDespues.length ? (
          PacienteSelected.AntesDespues.map((e) => {
            return (
              <SwiperSlide className="DswiperSlide" key={e.id}>
                {" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "10px",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="ADCard1">
                 
                    <p style={{ marginLeft: "10%",   marginTop: "2%",  }} className="ADdate">
                      {e.FechaAntes}
                    </p>
                    <img
                      src={e.FotoAntes}
                      alt="holi"
                      className="ADImage"
                    />
              

               
                    <p style={{ marginLeft: "10%",  marginTop: "2%", }} className="ADdate">
                      {e.FechaDespues}
                    </p>
                    <img
                      src={e.FotoDespues}
                      alt="holi"
                      className="ADImage"
                    />
              
                  <div className="ADcontainerButtons">
                    <div>
                    <img
                      src={share}
                      alt="share"
                      style={{
                        width: "5vh",
                        minWidth: "20px",
                        height: "5vh",
                        minHeight: "20px",
                        
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
                 
                      }}
                    /></div>
                    <div >
                    <p
                     className="ADsh"
                    >
                      SH consultorios
                    </p></div>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <></>
        )}
      </Swiper>

      <img
        className="bback"
        src={volver}
        onClick={() => setTramite(null)}
      />

          <img
          className="bgenerar"
          src={generar}
          onClick={() => setTramite(8)}
        />
      </div>
  );
}

export default BeforeAndAfterCarComponent;
