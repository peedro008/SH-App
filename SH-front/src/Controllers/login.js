import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../Components/Login/login";
import { PacienteId, userId, userName, userRole } from "../Redux/actions";

function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [dni, setDni] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(`http://localhost:8080/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ DNI: dni }),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status == 300) {
            Navigate("/password");
          } else if (res.status == 404) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
            console.log(jsonRes);
            dispatch(userRole(jsonRes.UserRole));
            dispatch(userName(jsonRes.Nombre));
            dispatch(userId(jsonRes.userId));
            dispatch(PacienteId(jsonRes.PacienteId));
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <LoginComponent dni={dni} setDni={setDni} onSubmit={onSubmit} />;
}

export default Login;
