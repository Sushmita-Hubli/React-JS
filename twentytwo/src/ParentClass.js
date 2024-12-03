import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:true
      }
    }
    
    changestate=()=>{
        console.log("Button clicked!!")
        this.setState({
            active:false
        })
    }


  render() {
    console.log("Parent render called");
    return (
      <div>
        {this.state.active?<ChildClass/>:<h1>Component deleted</h1>}
        <button onClick={this.changestate}>Change State</button>
      </div>
    )
  }
}
