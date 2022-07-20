import React from "react";
import Boton from "../Boton";
import Navbar from "../Navbar";
import "./Dashboard.css";
import { FiCamera } from "react-icons/fi";
import { VscNotebook } from "react-icons/vsc";
import { GiCardExchange } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import ButtonBack from "../ButtonBack";

function Dashboard() {
  return (
    <div className="containerBody">
      <Navbar />
      <div className="div1">
        <div className="div2">
          <h1>J A</h1>
        </div>
        <div className="div3">
          <h2 className="2">Jose Alfonso</h2>
          <h4 className="3">Editar informacion personal</h4>
        </div>
      </div>
      <div className="buttons">
        <Boton
          icon={<VscNotebook size="4vw" />}
          text="Historia clínica completa"
        />
        <Boton icon={<FiCamera size="4vw" />} text="Fotografias" />
        <Boton
          icon={<GiCardExchange size="4vw" />}
          text="Antes y después en fotos"
        />
        <Boton icon={<AiOutlineUser size="4vw" />} text="Tratamientos en SH" />
        <Boton icon={<TbDiscount2 size="4vw" />} text="Descuentos" />
      </div>
      <ButtonBack />
    </div>
  );
}

export default Dashboard;
