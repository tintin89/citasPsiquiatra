import React from 'react'
import {Link} from 'react-router-dom'

const NavigationItems=(props)=>(
    <div className="NavigationItems">
        <div onClick={props.handleDoctor} className="Acerca">{props.informacion}</div>
        <Link to="/entrar">
        <div className="EntrarSalir">Entrar</div>
        </Link>
    </div>
)

export default NavigationItems

