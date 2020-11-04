import React from 'react'


const LateralBarOnOff=(props)=>(
    <div onClick={props.handleLateralBar} className="LateralBarOnOff" >
        <div style={{boxShadow:props.brilla ? "1px 1px 5px white" : "none"}}></div>
        <div style={{boxShadow:props.brilla ? "1px 1px 5px white" : "none"}}></div>
        <div style={{boxShadow:props.brilla ? "1px 1px 5px white" : "none"}}></div>
    </div>
)

export default LateralBarOnOff