import React, { Component, createRef } from 'react'

export default class UnControlled extends Component {
    constructor(props) {
      super(props)
    
    this.nameRef=createRef();
    this.ageRef=createRef();
    }
    
    componentDidCatch()
    {
        console.log(this.nameRef)
        console.log(this.ageRef)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.ageRef.current.value)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Enter Name:</label>
            <input ref={this.nameRef}  type='text'/>
            <br></br>
             <label>Enter Age:</label>
            <input ref={this.ageRef}  type='number'/>
            <br></br>
            <input type='submit'/>
        </form>
      </div>
    )
  }
}
