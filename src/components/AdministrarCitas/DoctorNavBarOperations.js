import React from 'react'
import {FiUserPlus} from 'react-icons/fi'


const DoctorNavBarOperations=(props)=> {

    return (
        <div className="DoctorNavBarOperations">

            <div style={props.solicitudes ? {textShadow: "1px 1px 7px green", color: "green"} : {textShadow: ""}}
                 onClick={props.handleSolicitudes}>SOLICITUDES
            </div>
            <div style={props.citasConfirmadas ? {textShadow: "1px 1px 7px green", color: "green"} : {textShadow: ""}}
                 onClick={props.handleCitasConfirmadas}>CITAS CONFIRMADAS
            </div>
            <div style={props.crearCita ? {textShadow: "1px 1px 7px green", color: "green"} : {textShadow: ""}}
                 onClick={props.handleCrearCita}>CREAR CITA <i><FiUserPlus/></i></div>


            <div onClick={props.desloguear}>SALIR</div>
        </div>
    )
}
export default DoctorNavBarOperations