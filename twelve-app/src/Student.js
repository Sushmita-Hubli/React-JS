import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props)
    {
        super(props); //calling the constructor of super class . here super class is Component
        console.log("Constructor from student");
    }
  render() {
    return (
      <div>
      <h1>Hello {this.props.name}</h1>
        
      </div>
    )
  }
}
