import React from 'react'
import '../../styles.css'

import Solicitudes from "./Solicitudes";
import CitasConfirmadas from "./CitasConfirmadas";
import CrearCita from "./CrearCita";

const Citas=(props)=>{

    return(
        <div>
        {
                 props.solicitudes ? <Solicitudes
                         citas={props.citas}
                         handleAceptarCita={props.handleAceptarCita}
                         handleAceptarEliminar={props.handleAceptarEliminar}
                     /> :
                (props.citasConfirmadas ?
                    <CitasConfirmadas
                        citas={props.citas}
                        handleAceptarEliminar={props.handleAceptarEliminar}
                    /> :
                    <CrearCita
                        handleError={props.handleError}
                        addCita={props.addCita}
                        handleCrearCita={props.handleCrearCita}
                        handleCitasConfirmadas={props.handleCitasConfirmadas}
                        citas={props.citas}/>)
        }
        </div>
    )
}

export default Citas