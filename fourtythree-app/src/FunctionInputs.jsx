import React, { useState } from 'react'

const FunctionInputs = () => {
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
const [data,setData]=useState({
    name:"",
    email:""
});

const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData((prev)=>{
        return{
            ...prev,[name]:value
        }
    })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    alert(data);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input type='text' name='name' value={data.name} onChange={handleChange}/>
        <br></br>
        <label>Enter Email:</label>
        <input type='text' name='email' value={data.email} onChange={handleChange}/>
        <br></br>
        <input type='submit' value="submit"/>
      </form>
    </div>
  )
}

export default FunctionInputs
