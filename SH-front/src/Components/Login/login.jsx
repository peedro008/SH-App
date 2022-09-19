import React, { useEffect, useState } from "react";
import "./login.css";

import LogoLogin from "../../assets/LogoLogin.svg";
import PopUpDNI from "../../assets/PopUpDNI.svg";
import Continuar from "../../assets/Continuar.svg";
import LogoStartNew from "../../assets/LogoStartNew.svg";

const LoginComponent = ({ dni, setDni, onSubmit, isError }) => {

  const [error, setError] = useState("offPop");
  const [errorInput, setErrorInput] = useState("Input");

  useEffect(() => {
    if (isError === true) {
      setError("onPop");
    }
  }, [isError]);

  useEffect(() => {
    if (isError === true) {
      setErrorInput("InputOff");
    }
  }, [isError]);

  return (
    <div className="container">
      <img src={PopUpDNI} alt="popUp" className={error} />
      <div className="loader"></div>
      <div className="grow"></div>
      <img src={LogoStartNew} className="logo2" alt="logo"></img>
      <div className="containerLogin">
        <div className="ContainerDiv2">
          <div className="ContainerDivLogin">
            <img src={LogoLogin} alt="vector" className="LogoLogin" />

            <p className="BienvenideLogin">BIENVENIDA/O</p>
            <p className="BienvenideLogin2" style={{ fontSize: "25px" }}>
              Ingrese su DNI
            </p>
            <input
              value={dni}
              className={errorInput}
              onChange={(e) => {
                setDni(e.target.value);
              }}
            ></input>
            <img
              src={Continuar}
              alt="vector"
              className="botonn"
              onClick={onSubmit}
            />
          </div>

          <p className="footer">
            Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
