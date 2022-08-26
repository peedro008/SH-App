import React from "react";
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
  const [FS, SetFS]= useState(false)
  const [IS, SetIS]= useState("")
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  let consultas = [1, 2, 3, 4];
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
            <p className="Paciente3">Ver información personal del paciente</p>
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
        {fotosP?.map((e, i) => {
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
                
                  {
                              e.map((f,i)=>{ return(<div onClick={()=>{SetIS(f.URL); SetFS(true)}} style={{backgroundImage:`url(${f.URL}`, backgroundSize:"100%"}} className="DdivFoto1"></div>)})

                  }</div>
             
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img
        style={{
          position: "absolute",
          width: "115px",
          height: "48px",
          bottom: "5%",
          right: "5%",
          zIndex: 5,
          cursor: "pointer",
        }}
        src={volver}
        onClick={() => setTramite(null)}
      />
      {FS&&
       <div className="modalCont1">
          <img className="FullScreenImg" src={IS} />
          <div style={{backgroundColor:"#7aafb9",position:"absolute", top:"5%", right:"5%", width:"25px", height:"25px", display:"flex", alignItems:"center", borderRadius:"50%", cursor:"pointer"}}>
          <p style={{ fontSize:"25px", color:"white"}} onClick={()=>{SetIS(""); SetFS(false)}}>x</p></div>
       </div>}
    </div>
  );
}

export default Fotos;
