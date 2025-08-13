import React, { useState } from 'react'

const ControlledFunction = () => {
    const [name, setName]=useState("Hubli");

    const handlesubmit=(e)=>{
        e.preventDefault();
        setName(e.target.value)
        alert(name)
    }
  return (
    <div>
    <form onSubmit={handlesubmit}>
        <label>Enter Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
        <input type='submit' value="submit"/>
    </form>
      
    </div>
  )
}

export default ControlledFunction
