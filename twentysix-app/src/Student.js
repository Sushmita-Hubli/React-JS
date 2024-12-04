import React from 'react'

function Student({std}) {
  return (
    <div>
    {<h1>name is {std.name} and age is {std.age}</h1>}
      
    </div>
  )
}

export default Student
