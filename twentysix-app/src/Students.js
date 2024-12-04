import React from 'react'

function Students() {
    const students=["Sushmita","Pallavi","Sayali"];
  return (
    <div>
      {students.map(std=><h1>{std}</h1>)}
    </div>
  )
}

export default Students
