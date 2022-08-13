import React, { useEffect, useState } from "react";
import ButtonBack from "../Elementos/ButtonBack";
import selected from "../../../assets/selected.svg";
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

const BeforeAndAfter = ({ fotosP }) => {
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [claseSelected, setClaseSelected] = useState(false);

  useEffect(() => {
    if (selected1 !== null && selected2 !== null) {
      setClaseSelected(true);
    } else {
      setClaseSelected(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected2]);

  return (
    <div>
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
          {fotosP?.map((e, index) => {
            return (
              <SwiperSlide className="swiperSlide" key={index}>
                <div className="main">
                  {e.map((i, index) => {
                    return (
                      <div className="cubo" key={index}>
                        <div
                          className={
                            selected1?.id === i.id || selected2?.id === i.id
                              ? "containerImgSelected"
                              : "containerImg"
                          }
                          onClick={() => {
                            if (selected1 === null) {
                              setSelected1(i);
                            } else if (selected2 === null) {
                              setSelected2(i);
                            } else {
                              setSelected1(i);
                              setSelected2(null);
                            }
                          }}
                        >
                          <img src={i.URL} alt="holi" className="imagen" />
                          <img
                            src={selected}
                            alt="holi"
                            className={
                              selected1?.id === i.id || selected2?.id === i.id
                                ? "selected"
                                : "selectedHidden"
                            }
                          />
                        </div>
                        <p style={{ fontSize: "4vw" }}>
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

      <ButtonGenerate
        clase={claseSelected}
        selected1={selected1}
        selected2={selected2}
      />
      <ButtonBack />
    </div>
  );
};

export default BeforeAndAfter;
