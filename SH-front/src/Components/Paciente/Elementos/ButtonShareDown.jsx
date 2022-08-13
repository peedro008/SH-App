import React from "react";
import share from "../../../assets/share.svg"
import download from "../../../assets/download.svg"

import "./ButtonShareDown.css";

const ButtonShareDown = () => {
  return (
    <div>
      <div className="containerShareDown">
        <img src={share} alt="share" style={{width:"10vw", height:"10vw" , marginLeft:"2vw"}}/>
        <img src={download} alt="download" style={{width:"10vw", height:"10vw", marginLeft:"2vw"}}/>
      </div>
    </div>
  );
};

export default ButtonShareDown;
