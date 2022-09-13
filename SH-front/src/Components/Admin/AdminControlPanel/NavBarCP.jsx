import React from "react";
import "./AdminControlPanel";
import LogoLogin from "../../../assets/LogoLogin.svg";
import Lupa from "../../../assets/Lupa.svg";
import { HiMenu } from "react-icons/hi";
function NavBarCP({ search, set, searchPaciente, SearchOpen, setSearchOpen, onBurger,
  setOnBurger }) {
    
  return (
    <div className="CPNcontainer">
     
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div className="CPNiconCont">
          <HiMenu className="CPNburg" color="#15353B" onClick={()=>setOnBurger(!onBurger)} />
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
      <img src={LogoLogin} alt="logo" className="CPNlogo" />
    </div>
  );
}

export default NavBarCP;
