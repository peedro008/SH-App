import React from "react";
import "./login.css"
import Vector1 from "../../assets/Vector1.svg"
import Vector2 from "../../assets/Vector2.svg"
import LogoLogin from "../../assets/LogoLogin.svg"
import Continuar from "../../assets/Continuar.svg"
import VectorD1 from "./VectorD1.svg"
import VectorD2 from "./VectorD2.svg"
import VectorD3 from "./VectorD3.svg"
import VectorD4 from "./VectorD4.svg"
import VectorD5 from "./VectorD5.svg"
const PasswordDComponent = ({
    password,
setPassword,
onSubmit
}) => {

    return(
        <div className="DContainerDiv">
            
        <img src={LogoLogin} className="DLogoLogin"/>
   
        <p className="DBienvenide">BIENVENIDA SABINA</p>
        <p className="DDNI">PASSWORD</p>
       
        <input type={"password"} value={password} className="DInput" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <img src={Continuar} className="Dbotonn" onClick={()=>{onSubmit()}}/>
       
        <p className="Dfooter">Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6 </p>
        <img src={VectorD1} alt="vector" className="VectorD1" />
           <img src={VectorD2} alt="vector" className="VectorD2" />
            <img src={VectorD3} alt="vector" className="VectorD3" />
             <img src={VectorD4} alt="vector" className="VectorD4" />
            <img src={VectorD5} alt="vector" className="VectorD5" />
        </div>
    )
}

export default PasswordDComponent