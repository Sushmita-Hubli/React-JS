import React, { Component } from 'react'

export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>Papa is {this.props.name}</h1>  {/*this keyword is required to retrieve the attributes of props*/}
        {this.props.children}
      </div>
    )
  }
}
