import React from 'react'
import Student2 from './Student2'

function Student1() {

    //following is the list of objects
    const students=[
        {
            name:"Sushmita",
            age:22
        },
        {
            name:"Sayali",
            age:21
        },
        {
            name:"Pallavi",
            age:23
        }

    ]
  return (
    <div>
      {students.map(std=><Student2 std={std}/>)}
    </div>
  )
}

export default Student1
