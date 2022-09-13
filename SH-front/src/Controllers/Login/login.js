import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../Components/Login/login";
import LoginDComponent from "../../Components/Login/loginD";
import { userSession } from "../../Redux/actions";
function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [dni, setDni] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/Login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ DNI: dni }),
      }
    )
      .then(async (res) => {
        const jsonRes = await res.json();
        try {
          if (res.status === 300) {
            Navigate("/password");
          } else if (res.status === 404) {
            setIsError(true);
            console.log(isError);
            setMessage(jsonRes.message);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
            console.log(message);

            dispatch(
              userSession({
                userRole: jsonRes.UserRole,
                userId: jsonRes.userId,
                userName: jsonRes.Nombre,
                pacienteId: jsonRes.PacienteId,
              })
            );
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitD = (e) => {
    e.preventDefault();
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/Login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ DNI: dni }),
      }
    )
      .then(async (res) => {
        const jsonRes = await res.json();
        try {
          if (res.status === 300) {
            Navigate("/password");
          } else if (res.status === 404) {
            setIsError(true);
            console.log(isError);
            setMessage(jsonRes.message);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
            console.log(message);

            dispatch(
              userSession({
                userRole: jsonRes.UserRole,
                userId: jsonRes.userId,
                userName: jsonRes.Nombre,
                pacienteId: jsonRes.PacienteId,
              })
            );
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return window.innerWidth < 750 ? (
    <LoginComponent
      dni={dni}
      setDni={setDni}
      onSubmit={onSubmit}
      isError={isError}
    />
  ) : (
    <LoginDComponent
      dni={dni}
      setDni={setDni}
      onSubmit={onSubmitD}
      isError={isError}
    />
  );
}

export default Login;
