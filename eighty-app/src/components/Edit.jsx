import React from 'react'

const Edit = () => {
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
        <h1>Update Data</h1>

        </div>



        <form>
            <div className='form-group'>
            <label>Enter Name:</label>
            <input type="text" id="" className='form-control' />
            </div>

             <div className='form-group'>
            <label>Enter Age:</label>
            <input type="number"  id="" className='form-control' />
            </div>

             <div className='form-group'>
            <label>Enter Email:</label>
            <input type="email"  id="" className='form-control' />
            </div>
            <br/>
            <div className='d-grid'>
            <input type="submit" value="Update" className='btn btn-primary' />

            </div>
            </form>


        </div>

        </div>
    </>
  )
}

export default Edit
