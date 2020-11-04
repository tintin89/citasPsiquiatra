import React from 'react'
import '../../../styles.css'

const AceptarSolicitud=(props)=>(
    <div className="Cuadro">
        <div>Esta seguro de aceptar esta solicitud de cita ?</div>
        <div className="CuadroBotones">
        <button onClick={props.Aceptar}>Aceptar</button>
        <button onClick={props.Cancelar}>Cancelar</button>
        </div>
    </div>
)

export default AceptarSolicitud