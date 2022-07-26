import React from "react";
import "./Navbar.css";
import LogoLogin from "../../assets/LogoLogin.svg";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="box">
      <HiMenu size="5vh" />

      <img src={LogoLogin} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
