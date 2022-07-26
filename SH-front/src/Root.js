import React from "react";
import { useSelector } from "react-redux";
import { PacienteRouter, LoginRouter } from "./Routes/Routes";

function Root() {
  const UserRole = useSelector((state) => state.userSession).userRole
  console.log(UserRole);
  if (!UserRole) {
    return <LoginRouter />;
  } else {
    return <PacienteRouter />;
  }
}

export default Root;
