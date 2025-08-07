import React, { useState } from 'react'

function Task() {
    const [color,setColor]=useState("#FFFFFF")
  return (
    <div style={{backgroundColor:color,height:'100vh',padding:'20px'}}>
        <h3>SELECT COLOR</h3>
        <input type='color' value={color} onChange={(e)=>setColor(e.target.value)}/>
    </div>
  )
}

export default Task