import React, { useEffect, useRef } from 'react'

function HookuseRef() {
    const newRef=useRef();
    const firstRef=useRef();
    const lastRef=useRef();

    useEffect(()=>{
        console.log(newRef)
        console.log(newRef.current.innerHTML)
        firstRef.current.focus();


    },[])

    const handleclick=()=>{
        newRef.current.style.backgroundColor='Red'
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log('Full Name:',firstRef.current.value,' ',lastRef.current.value)

    }
  return (
    <div>
      <h1 ref={newRef}>Sushmita</h1>
      <button onClick={handleclick}>click</button>
      <br></br>
      <form onSubmit={handlesubmit}>
      <label>Enter First Name:</label>
      <input type="text" ref={firstRef} name="" id="" />
      <br></br>
      <label>Enter Last Name:</label>
      <input type="text" ref={lastRef} name="" id="" />
      <br></br>
      <input type="submit" value="submit" />

      </form>
    </div>
  )
}

export default HookuseRef
