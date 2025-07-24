import React, { useEffect, useState } from 'react'

const FunctionEffect = () => {
    let[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("HELLO")
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update State</button>
    </div>
  )
}

export default FunctionEffect
