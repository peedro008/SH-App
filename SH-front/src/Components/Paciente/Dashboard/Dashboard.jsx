import React from "react";
import Boton from "../Elementos/Boton";
import Navbar from "../Elementos/Navbar";
import "./Dashboard.css";
import AntDesp from "../../../assets/AntDesp.svg";
import UserLove from "../../../assets/UserLove.svg";
import { FiCamera } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";

// import Vector7 from "../../../assets/Vector7.svg";
import { useSelector } from "react-redux";
import NavBarCP from "../../Admin/AdminControlPanel/NavBarCP";
import { useState } from "react";
import NavBarPaciente from "../Elementos/NavBarPaciente";

function DashboardComponent() {
  const userName = useSelector((state) => state.userSession)?.userName;

  let name = userName?.split(" ");
  if (name[name.length - 1] ? name = `${name[0][0].toUpperCase()}${name[name.length - 1][0]?.toUpperCase()}` :  name = `${name[0][0].toUpperCase()}`)

  return (
    <div className="containerBody">
      <NavBarPaciente />

      <div className="div1">
        <div className="div2">
          <h1>{name}</h1>
        </div>
        <div className="div3">
          <h2 className="2">{userName}</h2>
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
          nav="/comparation"
          icon={
            <img
              src={AntDesp}
              alt="imgSH"
              style={{ color: "#15353B", height: "22.9px", width: "22.9px" }}
            />
          }
          text="Antes y después en fotos"
        />
        <Boton
          nav="/tratamientos"
          icon={
            <img
              src={UserLove}
              alt="imgSH"
              style={{ color: "#15353B", height: "22px", width: "22px" }}
            />
          }
          text="Tratamientos en SH"
        />
        {/* <Boton
          nav="/cupon"
          icon={<TbDiscount2 size="24px" color="#15353B" />}
          text="Descuentos"
        /> */}
      </div>
    </div>
  );
}

export default DashboardComponent;
