import React from "react";
import '../../styles.css'
import Logo from './Logo'
import NavigationItems from "./NavigationItems";
import LateralBarOnOff from './LateralBarOnOff'




const NavigationBar=(props)=>{

    return (
        <div className="NavigationBar" style={{filter:props.blur ? "blur(3px)" : "none"}}>
                <Logo/>
                <LateralBarOnOff
                 handleLateralBar={props.handleLateralBar}
                 brilla={props.brilla}
                />
                <NavigationItems
                handleDoctor={props.handleDoctor}
                informacion={props.informacion}
                />
        </div>
    )
}

export default NavigationBar