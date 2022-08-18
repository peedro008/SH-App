import React from "react";
import shareAdmin from "../../../assets/shareAdmin.svg";
import downloadAdmin from "../../../assets/downloadAdmin.svg";

const ButtonShareDown = () => {
  return (
    <div>
      <div className="containerShareDown">
        <img
          src={shareAdmin}
          alt="share"
          style={{ width: "10vw", height: "10vw", marginLeft: "2vw" }}
        />
        <img
          src={downloadAdmin}
          alt="download"
          style={{ width: "10vw", height: "10vw", marginLeft: "2vw" }}
        />
      </div>
    </div>
  );
};

export default ButtonShareDown;
