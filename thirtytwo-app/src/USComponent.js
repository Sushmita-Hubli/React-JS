import React, { useState } from 'react'


//way 1
function USComponent() {
    const myArray=useState("Sushmita");
  return (
    <div>
    <h1>way 1 of changing state</h1>
      <h1>First element of array is : {myArray[0]}</h1>
      <button onClick={()=>myArray[1]("Kumar")}>Click</button>
    </div>
  )
}

export default USComponent


//way 2
export function USComponent1() {
    const myArray=useState("Sushmita");

   let changeState=()=>
    {
           myArray[1]("Aayush")
    }
  return (
    <div>
      <h1>way 2 of changing state</h1>
      <h1>First element of array is : {myArray[0]}</h1>
      <button onClick={changeState}>Click</button>


    </div>
  )
}


//way 3

export function USComponent2() {
    const [name,setName]=useState("Ashwin");

   let changeState=()=>
    {
           setName("Badamikar")
    }
  return (
    <div>
      <h1>way 3 of changing state</h1>
      <h1>First element of array is : {name}</h1>
      <button onClick={changeState}>Click</button>


    </div>
  )
}
