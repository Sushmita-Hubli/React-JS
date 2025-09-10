import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[email,setEmail]=useState('');

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('https://68af85ddb91dfcdd62bc7c76.mockapi.io/crud',{
            e_name:name,
            e_age:age,
            e_email:email
        }).then((response)=>{
            navigate('/');

        }).catch((error)=>{

        })
    }
  return (
    <>
     <div className='mb-2 mt-2'>
       <Link to={'/'}>
         <button className='btn btn-primary'>Read Data</button>

       </Link>
        </div>
        <div className='row'>
        <div className='col-md-4'>
        <div className='bg-primary p-4 text-center'>
        <h1>Create Data</h1>

        </div>



        <form onSubmit={handlesubmit}>
            <div className='form-group'>
            <label>Enter Name:</label>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)} id="" className='form-control' />
            </div>

             <div className='form-group'>
            <label>Enter Age:</label>
            <input type="number" name="age" onChange={(e)=>setAge(e.target.value)} id="" className='form-control' />
            </div>

             <div className='form-group'>
            <label>Enter Email:</label>
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} id="" className='form-control' />
            </div>
            <br/>
            <div className='d-grid'>
            <input type="submit" value="Submit" className='btn btn-primary' />

            </div>
            </form>


        </div>

        </div>
    </>
  )
}

export default Create
