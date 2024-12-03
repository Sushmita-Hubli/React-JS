import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>Name is  {this.props.name}</h1>  {/*this keyword is required to retrieve the attributes of props*/}
        <h1>Age is {this.props.age}</h1>
        {this.props.children}
      </div>
    )
  }
}

MyClass.protoTypes={  //used for type checking
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
    
}


//adding default values for the props attributes
MyClass.defaultProps={
    name:'HAHA',
    age:22
}