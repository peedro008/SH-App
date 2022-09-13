import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PasswordComponent from "../../Components/Login/Password";
import PasswordDComponent from "../../Components/Login/PasswordD";
import { userSession } from "../../Redux/actions";

function Password() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/loginPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Password: password }),
      }
    )
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 404) {
            setIsError(true);
            console.log(isError);
            setMessage(jsonRes.message);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
            console.log(jsonRes, "aaaaaaaaaaaaaaaaa");

            dispatch(
              userSession({
                userRole: jsonRes.UserRole,
                userId: jsonRes.userId,
                userName: "Sabina",
              })
            );
            Navigate("/");
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
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/loginPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Password: password }),
      }
    )
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 404) {
            setIsError(true);
            console.log(isError);
            setMessage(jsonRes.message);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
            console.log(jsonRes, "aaaaaaaaaaaaaaaaa");

            dispatch(
              userSession({
                userRole: jsonRes.UserRole,
                userId: jsonRes.userId,
                userName: "Sabina",
              })
            );
            Navigate("/");
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return window.innerWidth < 750 ? (
    <PasswordComponent
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      isError={isError}
    />
  ) : (
    <PasswordDComponent
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmitD}
      isError={isError}
    />
  );
}

export default Password;
