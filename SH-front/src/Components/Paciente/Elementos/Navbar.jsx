import React from "react";
import "./Navbar.css";
import LogoLogin from "../../../assets/LogoLogin.svg";
import { HiMenu } from "react-icons/hi";
import { userSession } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");
    dispatch(
      userSession({
        userRole: null,
        userId: null,
        userName: null,
        pacienteId: null,
      })
    );
  };

  return (
    <div className="box">
      <HiMenu
        size={"7vh"}
        color="white"
        className="hamburgerBtn"
        onClick={() => logOut()}
      />

      <img src={LogoLogin} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
