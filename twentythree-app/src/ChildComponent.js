import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
      <h1>This is child class</h1>
      <button onClick={this.props.callMethod}>Click</button>{/*here we have passed function without parameter*/}
      <button onClick={()=>this.props.callMethod1("Sushmita")}>Click</button>{/*here we have passed function with parameter*/}
      
        
      </div>
    )
  }
}
