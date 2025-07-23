import React, { useState } from 'react'

const USWithArray = () => {
    let num =[11,33,44,22];
    let [numbers,setNumbers]=useState(num);
    let changeList=()=>{
       // setNumbers([55,66,77,88]);   this to change all the elements of the array

       //what if i want to add few more elements to the existing array
       setNumbers(previousState=>[
        ...previousState,Math.floor(Math.random()*50)
       ])
    }
  return (
    <div>
    <h1>Usestate hook with array</h1>
    <ul>
        {numbers.map((n,i)=><li key={i}>{n}</li>)}
    </ul>
      <button onClick={changeList}>Change Array</button>
    </div>
  )
}

export default USWithArray
