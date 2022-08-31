import React from "react";
import "./Navbar.css";
import LogoLogin from "../../../assets/LogoLogin.svg";
import { HiMenu } from "react-icons/hi";
import { userSession } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="box">
      <HiMenu
        size={"7vh"}
        color="white"
        className="hamburgerBtn"
        onClick={() =>
          dispatch(
            userSession({
              userRole: null,
              userId: null,
              userName: null,
              pacienteId: null,
            })
          )
        }
      />

      <img src={LogoLogin} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
