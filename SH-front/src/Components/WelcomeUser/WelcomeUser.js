import React from "react";
import "./WelcomeUser.css";
import LogoLogin from "../../assets/LogoLogin.svg";
import Vector7 from "../../assets/Vector7.svg";
import Vector8 from "../../assets/Vector8.svg";
import Vector9 from "../../assets/Vector9.svg";
import Vector10 from "../../assets/Vector10.svg";

const WelcomeUser = () => {
  return (
    <div className="containerUser">
      <img src={Vector7} alt="vector" className="Vector7" />
      <img src={Vector8} alt="vector" className="Vector8" />
      <img src={Vector9} alt="vector" className="Vector9" />
      <img src={Vector10} alt="vector" className="Vector10" />

      <div className="containerLogo">
        <img src={LogoLogin} alt="logo" className="logo" />
      </div>
      <h1>Bienvenido User</h1>
      <div>
        <h2>
          Acá podes ver la evolución de tu tratamiento en SH consultorios.
        </h2>
        <h2>Historia clínica, fotografias, indicaciones y más.</h2>
      </div>
      <div className="containerBtn">
        <button className="btnComenzar">Comenzar</button>
        <br />
        <button className="btnProx">Próximo turno</button>
      </div>
    </div>
  );
};

export default WelcomeUser;
