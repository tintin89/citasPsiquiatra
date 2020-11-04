import React from 'react'




const SlideElement=(props)=>(
       <div className="SlideElement">
     <img className="ImagenSlide" src={props.imagen} alt=""/>
     <p className="Description">{props.description}</p>
       </div>
)

export default SlideElement