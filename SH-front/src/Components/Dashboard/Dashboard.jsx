import React from "react";
import Boton from "../Elementos/Boton";
import Navbar from "../Elementos/Navbar";
import "./Dashboard.css";
import AntDesp from "../../assets/AntDesp.svg"
import UserLove from "../../assets/UserLove.svg"
import { FiCamera } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import ButtonBack from "../Elementos/ButtonBack";
import Vector7 from "../../assets/Vector7.svg";
import { useSelector } from "react-redux";

function DashboardComponent() {
  const userName = useSelector((state) => state.userSession)?.userName;

  let name = userName?.split(" ");
  name = `${name[0][0].toUpperCase() }${name[name.length - 1][0].toUpperCase() }`;

  return (
    <div className="containerBody">
      <img src={Vector7} alt="vector" className="Vector7Dash" />
      <Navbar />
      <div className="div1">
        <div className="div2">
          <h1>{name}</h1>
        </div>
        <div className="div3">
          <h2 className="2">{userName}</h2>
          <h4 className="3">Editar informacion personal</h4>
        </div>
      </div>
      <div className="buttons">
        <Boton
          nav="/clinical-history"
          icon={<BsClipboard size="22px" color="#15353B" />}
          text="Historia clínica completa"
        />
        <Boton
          nav="/photographic-tracking"
          icon={<FiCamera size="22px" color="#15353B" />}
          text="Fotografias"
        />
        <Boton
          nav="/before-and-after"
          icon={<img src={AntDesp} style={{ color:"#15353B",height:"22.9px", width:"22.9px", }} />}
          text="Antes y después en fotos"
        />
        <Boton
          nav="/tratamientos"
          icon={<img src={UserLove} style={{ color:"#15353B",height:"22px", width:"22px", }} />}
          text="Tratamientos en SH"
        />
        <Boton
          nav="/discount"
          icon={<TbDiscount2 size="24px" color="#15353B" />}
          text="Descuentos"
        />
      </div>
      <ButtonBack />
    </div>
  );
}

export default DashboardComponent;
