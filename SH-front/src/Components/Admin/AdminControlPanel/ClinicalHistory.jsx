import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import volver from "./volver.svg"
function AdminClinicalHistoryComponent({ PacienteSelected,Consultas, setTramite }) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  let consultas = [1, 2, 3, 4];
  return (
    <div className="RightMain" style={{ height:"100vh"}}>
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
        style={{ backgroundColor: "transparent"}}
      >
        {Consultas?.map((e) => {
          return (
            <SwiperSlide className="DswiperSlide"  key={e.id}>
              <div  style={{display:"flex", flexDirection:"row",  paddingTop:"20px", backgroundColor: "transparent"}}>
                <div className="CliniCard"><div className="W370razor"style={ {maxHeight:"95%",maxWidth:"95%", backgroundColor:"transparent", overflowY:"scroll"} }>
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
                    e.Fotos.map(f=>{return(<img  src={f.URL}className="DdivFoto"></img>)})

                  }

                </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img style={{position:"absolute", width:"115px", height:"48px", bottom:"5%", right:"5%", zIndex:5, cursor: "pointer"}}src={volver} onClick={()=>setTramite(null)}/>
    </div>
  );
}

export default AdminClinicalHistoryComponent;