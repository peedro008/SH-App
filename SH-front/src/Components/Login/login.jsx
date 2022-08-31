import React, { useEffect, useState } from "react";
import "./login.css";

import LogoLogin from "../../assets/LogoLogin.svg";
import PopUpDNI from "../../assets/PopUpDNI.svg";
import Continuar from "../../assets/Continuar.svg";
import LogoStartNew from "../../assets/LogoStartNew.svg";

const LoginComponent = ({ dni, setDni, onSubmit, isError }) => {
  console.log(isError);
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
      <img
        src={PopUpDNI}
        alt="popUp"
        className={isError === false ? "offPop" : "onPop"}
      />
      <div className="loader"></div>
      <div className="grow"></div>
      <img src={LogoStartNew} className="logo2" alt="logo"></img>
      <div className="whi">
        <div className="ContainerDiv2">
          <div className="ContainerDiv">
            {/* <img src={Vector1} alt="vector" className="Vector1" /> */}
            <img src={LogoLogin} alt="vector" className="LogoLogin" />
            {/* <img src={Vector2} alt="vector" className="Vector2" /> */}
            <p className="Bienvenide">BIENVENIDA/O</p>
            <p className="Bienvenide">D.N.I</p>
            <input
              value={dni}
              className={isError === false ? "Input" : "InputOff"}
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
