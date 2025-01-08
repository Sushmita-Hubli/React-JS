import React, { Component } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

export default class NewComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sushmita"
      }
    }
    
  render() {

if(this.state.name=="Sushmita")
        {
          return <Component1/>
        }
        else
        {
          return <Component2/>
        }

    // return (
    //   <div>
        
    //   </div>
    // )
  }
}
