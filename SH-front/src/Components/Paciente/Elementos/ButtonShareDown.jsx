import React from "react";
import { BsShare } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import "./ButtonShareDown.css";

const ButtonShareDown = () => {
  return (
    <div>
      <div className="containerShareDown">
        <button className="buttonPink">
          <BsShare size="5vw" />
        </button>
        <button className="buttonPink">
          <FiDownload size="5vw" />
        </button>
      </div>
    </div>
  );
};

export default ButtonShareDown;
