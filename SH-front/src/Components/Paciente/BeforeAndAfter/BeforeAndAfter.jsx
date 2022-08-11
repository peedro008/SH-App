import React, { useState } from "react";
import ButtonBack from "../Elementos/ButtonBack";
import imagen from "../../../assets/vichy.webp";
import selected from "../../../assets/selected.svg"
import Navbar from "../Elementos/Navbar";
import "./BeforeAndAfter.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import ButtonGenerate from "../Elementos/ButtonGenerate";


const BeforeAndAfter = ({ consultas }) => {
  
  const [selected1, setSelected1] = useState("")
  const [selected2, setSelected2] = useState("")

  const arrayFoto = [[ {imagen, fecha: "16/07/2005", id: 1}, {imagen, fecha: "16/07/2005", id: 9}, {imagen, fecha: "16/07/2005", id: 10}, {imagen, fecha: "16/07/2005", id: 11}, {imagen, fecha: "16/07/2005", id: 2}, {imagen, fecha: "16/07/2005", id: 3},{imagen, fecha: "16/07/2005", id: 4}],[{imagen, fecha: "16/07/2005", id: 5}, {imagen, fecha: "16/07/2005", id: 6}, {imagen, fecha: "16/07/2005", id: 7},{imagen, fecha: "16/07/2005", id: 8}]]

  return (
    <div>
      {console.log(consultas)}
      <Navbar />
      <div className="containerHeader">
        <h2>Generar antes y después</h2>
        <h4>Seleccionar dos fotografías</h4>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {arrayFoto.map(e => {
            return <>
            <SwiperSlide className="swiperSlide">
              <div className="main">
            {e.map(i => {
              return<>
                <div className="cubo">
                  <div className={selected1 === i.id || selected2 === i.id ? "containerImgSelected" : "containerImg"}
                    onClick={() => {
                      if (selected1 === "") {setSelected1(i.id)}
                      else if (selected2 === "") {setSelected2(i.id)}
                      else{ setSelected1(i.id); setSelected2("")}
                    }}
                  >
                    <img src={i.imagen} alt="holi" className="imagen"/>
                    <img src={selected} alt="holi" className={selected1 === i.id || selected2 === i.id ? "selected" : "selectedHidden"}/>
                  </div>
                  <p style={{ fontSize:"4vw"}}>{i.fecha}</p>
                </div>
              </>
            })} 
            </div>
            </SwiperSlide>
            </>
          })}

        </Swiper>
      </div>
      <ButtonGenerate/>
      <ButtonBack />
    </div>
  );
};

export default BeforeAndAfter;
