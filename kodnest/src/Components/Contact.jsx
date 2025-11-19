// Contactclass.js
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h3>The contact saved 
        is {this.props.name}</h3>
      </div>
    )
  }
}