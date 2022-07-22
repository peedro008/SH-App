import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Controllers/login';
import {PacienteRouter, LoginRouter} from './Routes/Routes'

function Root() {
    const userSession = useSelector((state) => state.userSession);

 if(!userSession){
 
    return (

    <LoginRouter/>
  )}
  else {
    return <PacienteRouter/>
  }
}

export default Root