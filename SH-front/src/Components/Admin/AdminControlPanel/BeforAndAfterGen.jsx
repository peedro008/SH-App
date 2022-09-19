import React from "react";
import volver from "./volver.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import generar from "./generar.svg";
import share from "../../../assets/share.svg";
import download from "../../../assets/download.svg";
import "swiper/css/pagination";
import { useState } from "react";
function BeforeAndAfterGenComponent({ PacienteSelected, setTramite, fotosP }) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  const [foto1, setFoto1]= useState(null)
  const [foto2, setFoto2]= useState(null)
  const onSubmitBAF = () => {
    if(foto1&&foto2){
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddAntesDespues`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({FotoAntes:foto1.URL,
          FotoDespues: foto2.URL,
          FechaAntes:foto1.createdAt.substring(0,10),
          FechaDespues:foto2.createdAt.substring(0,10),
        PacienteId:PacienteSelected.id}),

      }
    )
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 404) {
      
            console.log(`Hubo un error?`);
          } else {
            console.log(`Hubo un error?`);
            //window.location.reload();
         
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });}
  };
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
      <div style={{ display: "flex", flexDirection: "row",  width:"60vw", }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiperD2"
          style={{
            backgroundColor: "transparent",
            maxWidth: "45%",
            display: "flex",
          }}
        >
          {fotosP?.map((e, i) => {
            return (
              <SwiperSlide className="DswiperSlide" key={i}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    backgroundColor: "transparent",
                  }}
                >
                  <div className="FotoCard2">
                    <div className="fotosGridDiv2">
                      {e.map((f, i) => {
                        return (
                          <div
                          onClick={foto1?()=>setFoto2(f):()=>setFoto1(f)}
                            style={{
                              backgroundImage: `url(${f.URL}`,
                              backgroundSize: "cover",
                            }}
                            className="DdivFoto2"
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="ADCard">
          <p></p>
          <p style={{ marginLeft: "10%", marginTop: "2%" }} className="ADdate">
            {foto1?foto1.createdAt.substring(0,10):"-"}
          </p>
          <img
            src={foto1?foto1.URL:null}
            alt="holi"
            className="ADImage"
          />

          <p style={{ marginLeft: "10%", marginTop: "2%" }} className="ADdate">
          {foto2?foto2.createdAt.substring(0,10):"-"}
          </p>
          <img
              src={foto2?foto2.URL:null}
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
              />
            </div>
            <div>
              <p className="ADsh">SH consultorios</p>
            </div>
          </div>
        </div>
      </div>

      <img className="bback" src={volver} onClick={() => setTramite(null)} />

      <img
        className="bgenerar"
        src={generar}
        onClick={onSubmitBAF}
      />
    </div>
  );
}

export default BeforeAndAfterGenComponent;
