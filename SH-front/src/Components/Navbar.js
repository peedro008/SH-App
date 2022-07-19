import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoLogin from "../assets/LogoLogin.svg"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="box">
    
        <GiHamburgerMenu size="50px" />
    
     <img src={LogoLogin}/>
    </div>
  );
};

export default Navbar;
