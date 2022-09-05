import React from "react";
import "./AdminControlPanel";
import LogoLogin from "../../../assets/LogoLogin.svg";
import Lupa from "../../../assets/Lupa.svg";
import { HiMenu } from "react-icons/hi";
function NavBarCP({ search, set, searchPaciente, SearchOpen, setSearchOpen }) {
  return (
    <div className="CPNcontainer">
      <img src={LogoLogin} alt="logo" className="CPNlogo" />
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div className="CPNiconCont">
          <HiMenu className="CPNburg" color="#15353B" />
          {search ? (
            <img
              src={Lupa}
              alt="logo"
              className="CPNLupa"
              onClick={() => setSearchOpen(!SearchOpen)}
            />
          ) : (
            <div></div>
          )}
        </div>
        {SearchOpen && (
          <input
            className="CPNsearchInput"
            onChange={(e) => {
              set(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default NavBarCP;
