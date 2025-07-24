import React, { useContext } from 'react'
import { NameContext } from './App'

const CompC = () => {
   const myName= useContext(NameContext)
  return (
    <div>
      <h1>I m Component C</h1>
      <h1>My name is {myName}</h1>
    </div>
  )
}

export default CompC
