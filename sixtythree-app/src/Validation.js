import React, { useState } from 'react'

const Validation = () => {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[nameError, setNameError]=useState(false);

    const handleName=(e)=>{
        let name=e.target.value;
        if(name.length<3)
        {
            setNameError(true);

        }
        else{
            setNameError(false);
        }
        setName(name);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
         let name=e.target[0].value;
        if(name.length<3)
        {
            setNameError(true);

        }
        else{
            setNameError(false);
        }

        if(!name.length<3)
        {
            alert("Form submitted successfully")
        }


    }
  return (
    <div>
      <h1>Form Validation Demo..</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input type="text" name="name" id="" value={name} onChange={handleName}/>
        <br/>
        {nameError? <span>"Length should be greater than 3 characters"</span>:""}
        <br></br><br></br>
        
        <label>Enter Email:</label>
        <input type="text" name="email" id="" value={email} required/>
        <br></br><br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Validation
