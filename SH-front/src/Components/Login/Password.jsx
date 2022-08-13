import React, { useEffect, useState } from "react";
import "./login.css";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/Vector2.svg";
import PopUpContra from "../../assets/PopUpContra.svg";
import LogoLogin from "../../assets/LogoLogin.svg";
import Continuar from "../../assets/Continuar.svg";
const PasswordComponent = ({ password, setPassword, onSubmit, isError }) => {

    console.log(isError)
    const [error, setError] = useState("offPop")
    
    useEffect(() => {
      if (isError === true) {setError("onPop")}
    }, [isError])
  return (
    <div className="ContainerDiv">
        <img src={PopUpContra} alt="popUp" className={error}/>
      <img src={Vector1} className="Vector1" alt="vector"/>
      <img src={LogoLogin} className="LogoLogin" alt="vector"/>
      <img src={Vector2} className="Vector2" alt="vector"/>
      <p className="Bienvenide">BIENVENIDA SABINA</p>
      <p className="DNI">PASSWORD</p>

      <input
        type={"password"}
        value={password}
        className="Input"
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
