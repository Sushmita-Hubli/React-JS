import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const[apiData, setApiData]=useState([]);

    function getData(){
        axios.get("https://68af85ddb91dfcdd62bc7c76.mockapi.io/crud")
        .then((response)=>{
            setApiData(response.data)

        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getData();
    },[])
    

    const handleDelete=(id)=>{
        axios.delete(`https://68af85ddb91dfcdd62bc7c76.mockapi.io/crud/${id}`).then((response)=>{
            getData()
        }).catch((error)=>{
            console.log(error)
        })

    }

    function setDataToStorage(id,name,age,email){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);


    }
  return (
    <>
    <div className="row">
        <div className="col-md-12">
        <div className='mb-2 mt-2'>
       <Link to={'/create'}>
         <button className='btn btn-primary'>Create New Data</button>

       </Link>
        </div>
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((item)=>{
                            return(
                                <>
                                    <tr>
                                         <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>
                            <Link to='/edit'>
                                <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id, item.e_name, item.e_age,item.e_email)}>Edit</button>
                            </Link>
                        </td>
                        <td><button className='btn btn-danger' onClick={()=>{if(window.confirm('Are you sure you want to delete data?')){handleDelete(item.id)}} }>Delete</button></td>

                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>

    </>
      
   
  )
}

export default Read
