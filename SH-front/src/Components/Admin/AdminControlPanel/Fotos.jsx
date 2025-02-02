import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import { Pagination } from "swiper";
import volver from "./volver.svg";
import "./AdminControlPanel.css";
import { useState } from "react";

function Fotos({ PacienteSelected, setTramite, fotosP }) {
  const [FS, SetFS] = useState(false);
  const [IS, SetIS] = useState("");
  const [BBB, SetBBB] = useState([]);
  let name = PacienteSelected?.Nombre.split(" ");
  useEffect(() => {

    if (PacienteSelected&&PacienteSelected.Fotos?.length) {
      let temp = [];
   
      let data1 = PacienteSelected.Fotos
  
  
  
      for (let i = 0; i < data1.length; i + 4) {
        temp.push(data1.splice(i, i + 4));
      }
  
  
  
      SetBBB(temp);
    }
  }, [])
  
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }

  console.log(fotosP);
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
              Seguimiento fotográfico
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
        {BBB?.map((e, i) => {
          return (
            <SwiperSlide className="DswiperSlide" key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "20px",
                  backgroundColor: "transparent",
                }}
              >
                <div className="FotoCard1">
                  <div className="fotosGridDiv">
                    {e.map((f, i) => {
                      return (
                      
                        <div
                          onClick={() => {
                            SetIS(f.URL);
                            SetFS(true);
                          }}
                          style={{
                            backgroundImage: `url(${f.URL}`,
                            backgroundSize: "cover",
                          }}
                          className="DdivFoto1"
                        >
                       <p className="FotoDate">{f.createdAt.substring(0,10)}</p>
                        </div> 
                      );
                    })}
                  </div>
                </div>
              
                <div className="FotoCard1">
                  <div className="fotosGridDiv">
                    {BBB[i+1]&&
                    BBB[i+1].map((f, i) => {
                      return (
                      
                        <div
                          onClick={() => {
                            SetIS(f.URL);
                            SetFS(true);
                          }}
                          style={{
                            backgroundImage: `url(${f.URL}`,
                            backgroundSize: "cover",
                          }}
                          className="DdivFoto1"
                        >
                       <p className="FotoDate">{f.createdAt.substring(0,10)}</p>
                        </div> 
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img className="bback" src={volver} onClick={() => setTramite(null)} />
      {FS && (
        <div className="modalCont1">
          <img className="FullScreenImg" src={IS} />
          <div className="FullScreenClose">
            <p
              style={{ marginBottom: "3px", fontSize: "25px", color: "white" }}
              onClick={() => {
                SetIS("");
                SetFS(false);
              }}
            >
              x
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fotos;
