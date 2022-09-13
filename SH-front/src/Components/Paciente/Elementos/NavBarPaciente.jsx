import React, { useState } from "react";

import LogoLogin from "../../../assets/LogoLogin.svg";
import btnQuit2 from "../../../assets/btnQuit2.svg";
import { HiMenu } from "react-icons/hi";
import "./../../Admin/Elementos/NavBarCPMobile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSession } from "../../../Redux/actions";
function NavBarPaciente({
  search,
  setSearch,
  searchPaciente,
  SearchOpen,
  setSearchOpen,
}) {
  const navigate = useNavigate();
  const [hambOn, setHambOn] = useState("containerHambStart");
  const dispatch = useDispatch();

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
    <div className="SearchContainer">
      <HiMenu
        className="LogoHambOff"
        size={30}
        color="#15353B"
        onClick={() => setHambOn("containerHambOn")}
      />

      <img src={LogoLogin} alt="logo" className="logoLogin" />
      <div className={hambOn}>
        <img
          src={btnQuit2}
          alt="Quit"
          className="btnQuit"
          onClick={() => setHambOn("containerHambOff")}
        />
        <img src={LogoLogin} alt="logo" className="logoLoginHamb" />
        <p className="titleHamb">SH Consultorios</p>

        <div
          style={{ margin: " auto" }}
          className="botonContainerLogOut"
          onClick={() => logOut()}
        >
          <p className="botonTextAdd">Cerrar Sesión</p>
        </div>
      </div>
    </div>
  );
}

export default NavBarPaciente;
