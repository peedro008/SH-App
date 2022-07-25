import React from "react";
import "./Navbar.css";
import LogoLogin from "../../assets/LogoLogin.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="box">
      <GiHamburgerMenu size="5vh" />

      <img src={LogoLogin} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
