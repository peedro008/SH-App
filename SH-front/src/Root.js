import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Controllers/login';
import {PacienteRouter, LoginRouter} from './Routes/Routes'

function Root() {
    const UserRole = useSelector((state) => state.UserRole);

 if(!UserRole){
 
    return (

    <LoginRouter/>
  )}
  else {
    return <PacienteRouter/>
  }
}

export default Root