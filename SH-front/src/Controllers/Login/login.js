import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../Components/Login/login";
import { userSession } from "../../Redux/actions";
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
         
          if (res.status === 300) {
            Navigate("/password");
          } else if (res.status === 404) {
            setIsError(true);
            console.log(isError);
            setMessage(res.json().message);
          } else {
            setIsError(false);
            setMessage(res.json().message);
            console.log(message);

            dispatch(
              userSession({
                userRole: res.json().UserRole,
                userId: res.json().userId,
                userName: res.json().Nombre,
                pacienteId: res.json().PacienteId,
              })
            );
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
