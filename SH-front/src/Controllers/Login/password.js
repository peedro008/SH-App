import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PasswordComponent from "../../Components/Login/Password";
import { userSession } from "../../Redux/actions";


function Password() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(`http://localhost:8080/loginPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Password: password }),
    })
  
        .then(async (res) => {
          try {
           const jsonRes = await res.json()
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
  
  return <PasswordComponent password={password} setPassword={setPassword} onSubmit={onSubmit} />;
}

export default Password;