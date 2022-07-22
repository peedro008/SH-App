import React from "react";
import "./login.css"
import Vector1 from "../../assets/Vector1.svg"
import Vector2 from "../../assets/Vector2.svg"
import LogoLogin from "../../assets/LogoLogin.svg"
import Continuar from "../../assets/Continuar.svg"
const LoginComponent = ({
    dni,
    setDni,
    onSubmit
}) => {

    return(
        <div className="ContainerDiv">
            
        <img src={Vector1} alt="vector" className="Vector1"/>
        <img src={LogoLogin} alt="vector" className="LogoLogin"/>
        <img src={Vector2} alt="vector" className="Vector2"/>
        <p className="Bienvenide">BIENVENIDA/O</p>
        <p className="DNI">D.N.I</p>
       
        <input value={dni} className="Input" onChange={(e)=>{setDni(e.target.value)}}></input>
        <img src={Continuar} alt="vector" className="botonn" onClick={onSubmit}/>
       
        <p className="footer">Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6 </p>
        </div>
    )
}

export default LoginComponent