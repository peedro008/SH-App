import React, { useState } from 'react'
import Calendar from 'react-calendar';

import './AdminControlPanel.css'

function AddConsultaComponent() {
    const [value, onChange] = useState(new Date());
  return (
    <div style={{padding:"150px"}}>      <Calendar className={"react-calendar"} calendarType='US' onChange={onChange} value={value}  /></div>
  )
}

export default AddConsultaComponent