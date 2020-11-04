import React from 'react'
import '../../../styles.css'


const AceptarCitaCliente=(props)=>(
    <div className="Cuadro">
        <div>Su Solicitud de Cita ha sido creada exitosamente !</div>
        {props.admin ? null : <div>La confirmación se le hará vía telefónica !</div>}
       <div className="CuadroBotones">
        <button onClick={props.Continuar}>Continuar</button>
       </div>
    </div>
)

export default AceptarCitaCliente