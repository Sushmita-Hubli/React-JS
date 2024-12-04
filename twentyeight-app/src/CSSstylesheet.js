import React, { Component } from 'react'
import './CSSstylesheet.css'

export default class CSSstylesheet extends Component {
  render() {
    let x= this.props.check?'myFont':'myFont2';
    return (
      <div>
        <h1 className='myFont myFont2'>My name is Sushmita Hubli</h1>
        <h2 className={x}>Shivani Hubli</h2>
        <h2 className={`${x} myFont3`}>Shridhar Hubli</h2>
      </div>
    )
  }
}
