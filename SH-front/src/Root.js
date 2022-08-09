import React from "react";
import { useSelector } from "react-redux";
import { PacienteRouter, LoginRouter, AdminRouter } from "./Routes/Routes";

function Root() {
  const UserRole = useSelector((state) => state.userSession).userRole;

  if (!UserRole) {
    return <LoginRouter />;
  } else if(UserRole=="Paciente") {
    return <PacienteRouter />;
  } else return <AdminRouter/>
}

export default Root;
