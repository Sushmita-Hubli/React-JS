import React from 'react'
import Student from './Student'

function Student1() {
    const students=[
    {
        id:1,
        name:"Sushmita Chandrashekhar",
        age:22
    },
    {
        id:2,
        name:"Shivani Hubli",
        age:25
    },
    {
        id:3,
        name:"Shridhar Hubli",
        age:30
    }

]
  return (
    <div>
    {students.map(std=> <Student key={std.id} std={std}/>)}
      
    </div>
  )
}

export default Student1


