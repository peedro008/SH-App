import React from "react";
import Boton from "../Elementos/Boton";
import Navbar from "../Elementos/Navbar";
import "./Dashboard.css";
import { FiCamera } from "react-icons/fi";
import { VscNotebook } from "react-icons/vsc";
import { GiCardExchange } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import ButtonBack from "../Elementos/ButtonBack";
import Vector7 from "../../assets/Vector7.svg";
import { useSelector } from "react-redux";

function Dashboard() {
  const userSession = useSelector((state) => state.userSession);
  return (
    <div className="containerBody">
      <img src={Vector7} alt="vector" className="Vector7Dash" />
      <Navbar />
      <div className="div1">
        <div className="div2">
          <h1>J A</h1>
        </div>
        <div className="div3">
          <h2 className="2">{userSession?.userRole}</h2>
          <h4 className="3">Editar informacion personal</h4>
        </div>
      </div>
      <div className="buttons">
        <Boton
          nav="/clinical-history"
          icon={<VscNotebook size="4vw" />}
          text="Historia clínica completa"
        />
        <Boton
          nav="/photographic-tracking"
          icon={<FiCamera size="4vw" />}
          text="Fotografias"
        />
        <Boton
          nav="/before-and-after"
          icon={<GiCardExchange size="4vw" />}
          text="Antes y después en fotos"
        />
        <Boton
          nav="/tratamientos"
          icon={<AiOutlineUser size="4vw" />}
          text="Tratamientos en SH"
        />
        <Boton
          nav="/discount"
          icon={<TbDiscount2 size="4vw" />}
          text="Descuentos"
        />
      </div>
      <ButtonBack />
    </div>
  );
}

export default Dashboard;
