import React, { useState } from 'react'

function Task() {
    const [color,setColor]=useState("#FFFFFF")
    const handleColor = ()=>{
        setColor(prevColor=>prevColor==="#FFFFFF"?"#2e2a20":"#FFFFFF" )
    }
    
  return (
    <div style={{backgroundColor:color,height:'100vh',padding:'20px'}}>
        <h3>SELECT COLOR</h3>
  
        <button onClick={handleColor}>TOGGLE BUTTON</button>
    </div>
  )
}

export default Task
