import React from 'react'
import '../../../styles.css'

const AceptarEliminar=(props)=>(
    <div className="Cuadro">
        <div>Esta seguro de eliminar esta cita ?</div>
        <div className="CuadroBotones">
        <button onClick={props.Aceptar}>Aceptar</button>
        <button onClick={props.Cancelar}>Cancelar</button>
        </div>
    </div>
)

export default AceptarEliminar