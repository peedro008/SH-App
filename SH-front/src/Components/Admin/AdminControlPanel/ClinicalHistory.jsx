import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import volver from "./volver.svg"
function AdminClinicalHistoryComponent({ PacienteSelected,Consultas, setTramite }) {
  const [FS, SetFS]= useState(false)
  const [IS, SetIS]= useState("")
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }

  return (
    <div className="RightMain" style={{ height:"100vh"}}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">{name.substring(0, 2)}</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteSelected?.Nombre}</p>
            <p className="Paciente3" onClick={()=>setTramite(7)}>Ver información personal del paciente</p>
          </div>
        </div>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,

        }}
        modules={[Pagination]}
        className="swiperD"
        style={{ backgroundColor: "transparent"}}
      >
        {Consultas.length?
        Consultas?.map((e,i) => {
       
          return (
            <SwiperSlide className="DswiperSlide"  key={e.id}>
              <div  style={{display:"flex", flexDirection:"row",  paddingTop:"10px", backgroundColor: "transparent"}}>
                <div className="CliniCard" >
                  <div className="W370razor"style={ {maxHeight:"95%",maxWidth:"95%", backgroundColor:"transparent", overflowY:"scroll"} }>
                  <p className="DCHTitle">Consulta: {e.updatedAt.substring(0,10)}</p>
                  <p className="DCHText">
                  {e.Detalle}
                  </p>
                  <br />
                  <p className="DCHTitle">Se Recetó:</p>
                  <p className="DCHText" style={{ paddingRight: "55%",}}>
                   {e.Indicacion}
                  </p></div>
                </div>
                <div className="FotoCard">
                  <div className="FotosContainerr">
                  {
                              e.Fotos.map((f,i)=>{ if(i<9)return(<img  src={f.URL}className="DdivFoto" onClick={()=>{SetIS(f.URL); SetFS(true)}}></img>)})

                  }

                </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      : <></>}
      </Swiper>
      <img style={{position:"absolute", width:"115px", height:"48px", bottom:"5%", right:"5%", zIndex:5, cursor: "pointer"}}src={volver} onClick={()=>setTramite(null)}/>
      {FS&&
       <div className="modalCont1">
          <img className="FullScreenImg" src={IS} />
          <div className="FullScreenClose">
          <p style={{ fontSize:"25px", color:"white"}} onClick={()=>{SetIS(""); SetFS(false)}}>x</p></div>
       </div>}
   </div>
  );
}

export default AdminClinicalHistoryComponent;