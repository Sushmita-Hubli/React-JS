import React, { Component } from 'react'

export default class MultipleInputs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sushmita",
         email:"hubli.s@northeastern.edu"
      }
    }

     handleChange=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const new_value=(e.target.name==="email")? e.target.value.toLowerCase():e.target.value;
        this.setState({
            [e.target.name]:new_value
        });
    }
    // handleName=(e)=>{
    //     this.setState({
    //         name:e.target.value
    //     });
    // }

    // handleEmail=(e)=>{
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
    
  render() {
    return (
      <div>
        <form>
            <label>Enter Name:</label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
            <br></br>
            <label>Enter Email:</label>
            <input type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
            <br></br>
            <input type='submit' value="submit"/>
           

        </form>
      </div>
    )
  }
}
