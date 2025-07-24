import React, { useEffect, useState } from 'react'

const FunctionEffect = () => {
    let[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("HELLO "+count)
    },[])

    useEffect(()=>{
      console.log("useEffcet called when state is updated")
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update State</button>

      <p>We see that the useEffcet hook is executed every time the page is rendered, we dont want this. we want ot to be execyted only once when the component is mounted on the DOM. So we pass
      the second argument of the useEffectEffect hook here which is "[]"  empty square bracket.This is called as conditional rendering.
      </p>
      <br></br>

      <p>Now what if i want to run useEffect when our count variable is updated so we will create another useEffect for that where we will pass count as the dependency in square bracket</p>
      <br></br>

      <h1>Also you can see in the code above that we can create multiple useEffect hooks</h1>
    </div>
  )
}

export default FunctionEffect
