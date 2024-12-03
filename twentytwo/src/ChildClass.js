import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount()
    {
        console.log("componentWillUnmount method called...")
    }
  render() {
    return (
      <div>
        <h1>Child Class Component</h1>
      </div>
    )
  }
}
