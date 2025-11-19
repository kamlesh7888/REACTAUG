// Homeclass.js
import React from 'react'
import Contact from './Contact'

export default function Homeclass(props) {
  // name = "Kamlesh"
  return (
    <div>
      <h2>Hello {props.name}</h2>
       <h2> Age : {props.age}</h2>
       <h2> Dost : {props.dost}</h2>
        
      <Contact
      name={props.name} />
    </div>
  )
}