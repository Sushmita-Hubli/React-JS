import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const baseURL="https://jsonplaceholder.typicode.com/posts"
const GetAxios = () => {
    const [mydata, setData]=useState([]);
    useEffect(()=>{
        Axios.get(baseURL).then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
   <>
    {
        mydata.map((item)=>{
            const {id,title,body}=item;
            return(
                <div className='data' key={id}>
                    {id}
                    {title}
                    {body}
                </div>
            )
        })
    }
   </>
  )
}

export default GetAxios
