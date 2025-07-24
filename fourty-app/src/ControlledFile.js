import React, { Component } from 'react'

export default class ControlledFile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:"Sushmita"
    }
  }
  handleform=(e)=>{
    console.log(e)
    this.setState({
        data:e.target.value.toLowerCase()
    })

  }
  handleFormSubmission=(e)=>{
    e.preventDefault();
    console.log(e.target[0].value);   //shows the value in text box

  }
    render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
            <label>Enter Name: </label>
            <input type='text' value={this.state.data} onChange={this.handleform}/><br></br>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
