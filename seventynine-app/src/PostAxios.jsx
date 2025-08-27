import Axios  from 'axios';
import React, { useState } from 'react'

const PostAxios = () => {
    const[mytitle,setTitle]=useState('');
    const[mybody,setBody]=useState('');

    const handlesubmit=(e)=>{
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:mytitle,
            body:mybody
        }).then((response)=>{
            console.log(response);

        }).catch((error)=>{
            console.log(error)

        })
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <label>Enter Title:</label>
        <input type="text" name="title" id="" value={mytitle} onChange={(e)=>setTitle(e.target.value)} />
        <br></br>
         <label>Enter Body:</label>
        <input type="text" name="body" id="" value={mybody} onChange={(e)=>setBody(e.target.value)}/>
        <br></br>
        <input type="submit" value="Post" />
 
      </form>
    </div>
  )
}

export default PostAxios
