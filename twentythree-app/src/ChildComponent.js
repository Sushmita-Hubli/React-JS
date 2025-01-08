import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
      <h1>This is child class</h1>
      <button onClick={this.props.callMethod}>Click</button>{/*here we have passed function without parameter*/}
      <button onClick={()=>this.props.callMethod1("Sushmita")}>Click</button>{/*here we have passed function with parameter*/}
      <h3>For functions without parameters, you can directly pass the function reference.
      For functions with parameters, you need to wrap the call in an arrow function to prevent it from executing immediately during render.</h3>
        
      </div>
    )
  }
}
