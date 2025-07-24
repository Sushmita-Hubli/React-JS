import React, { useState } from 'react'

const FunctionState = () => {
let [count,setCount]=  useState(0)

let changestate=()=>{
  setCount(count+1)
}
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changestate}>Increasecount</button>

    </div>
  )
}

export default FunctionState
