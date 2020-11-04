import React from 'react'


const ErrorMessage=(props)=>(
        <div className="Cuadro">
        <div>{props.errorMensaje}</div>
        <div className="CuadroBotones">
            <button onClick={props.Continuar}>Continuar</button>
        </div>
    </div>
)

export default ErrorMessage