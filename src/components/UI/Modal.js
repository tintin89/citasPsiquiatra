import React from 'react'

const Modal=(props)=> (

   props.show ? <div className="Modal">{props.children}</div>:null


)

export default Modal