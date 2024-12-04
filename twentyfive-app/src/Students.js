import React from 'react'

function Students() {
    const students=["sushmita","aayush","pallavi","sayali"];
    const numbers=[2,4,6,8];
    const result=numbers.map(num=><h2>{num=num*2}</h2>);
  return (
    <div>
{students.map(std=><h1>{std}</h1>)}
{/* {numbers.map(num=><h2>{num=num*2}</h2>)} */}
{result}
      
    </div>
  )
}

export default Students
