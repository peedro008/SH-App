import React, { useEffect, useState } from "react";
import selected from "../../../../assets/selected.svg";
import Navbar from "../../../Paciente/Elementos/Navbar";
import "./BeforeAndAfterAdmin.css";
import { useLocation } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import ButtonGenerateAdmin from "../../Elementos/ButtonGenerateAdmin";
import ButtonBackAdmin from "../../Elementos/ButtonBackAdmin";

const BeforeAndAfterAdmin = ({
  fotosP,
  setFormBAF,
  formBAF,
  onSubmitBAF,
  PacienteSelected,
}) => {
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [claseSelected, setClaseSelected] = useState(false);

  const location = useLocation();
  console.log(PacienteSelected);

  useEffect(() => {
    if (selected1 !== null && selected2 !== null) {
      setClaseSelected(true);

      setFormBAF({
        ...formBAF,
        FotoAntes: selected1.URL,
        FechaAntes: selected1.createdAt.substring(0, 10),
        FotoDespues: selected2.URL,
        FechaDespues: selected2.createdAt.substring(0, 10),
      });
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
          {fotosP.map((e, index) => {
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

      <ButtonGenerateAdmin
        clase={claseSelected}
        PacienteSelected={PacienteSelected}
        onSubmitBAF={onSubmitBAF}
        // Paciente={location.state[1]}
      />
      <ButtonBackAdmin Paciente={location.state[0]} />
    </div>
  );
};

export default BeforeAndAfterAdmin;
