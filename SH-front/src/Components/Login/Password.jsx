import React from "react";
import "./login.css";
import PopUpContra from "../../assets/PopUpContra.svg";
import LogoLogin from "../../assets/LogoLogin.svg";
import Continuar from "../../assets/Continuar.svg";
const PasswordComponent = ({ password, setPassword, onSubmit, isError }) => {
  return (
    <div className="ContainerDivPassword">
      <img
        src={PopUpContra}
        alt="popUp"
        className={isError === false ? "offPop" : "onPop"}
      />

      <img src={LogoLogin} className="LogoLogin" alt="vector" />

      <p className="Bienvenide" style={{ textAlign: "center" }}>
        BIENVENIDA SABINA
      </p>
      <p className="DNI">PASSWORD</p>

      <input
        type={"password"}
        value={password}
        className={isError === false ? "Input" : "InputOff"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <img
        src={Continuar}
        alt="continue"
        className="botonn"
        onClick={() => {
          onSubmit();
        }}
      />

      <p className="footer">
        Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6
      </p>
    </div>
  );
};

export default PasswordComponent;
