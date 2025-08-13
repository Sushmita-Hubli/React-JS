import React, { useEffect, useRef, useState } from 'react'

const HookUseRef2 = () => {
    const[inputValue,setInputValue]=useState("");
    // const [count,setCount]=useState(0);
    const count=useRef(0);
    // useEffect(()=>{
    //     setCount(count+1);
    // },[])

    useEffect(()=>{
        count.current=count.current+1;
    })
  return (
    <div>
      <form>
        <labe>Enter Name:</labe>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} name="" id="" />
        {/* <h2>Render Count : {count}</h2> */}
        <h2>Render Count : {count.current}</h2>
      </form>
    </div>
  )
}

export default HookUseRef2
