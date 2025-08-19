import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  // const userId=useParams();
  // const id=userId.id;   we can iuse either this or following one line of code

  const {id} =useParams();
  return (
    <div>
      <h2>User Details Page of User {id}</h2>

      
    </div>
  )
}

export default UserDetails
