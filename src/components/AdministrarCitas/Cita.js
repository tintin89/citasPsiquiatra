import React from 'react'
import {FiUser,FiUserX,FiPhone,FiCalendar} from 'react-icons/fi'
import {FaUserCheck} from 'react-icons/fa'





const Cita=(props)=> {
 return (
    <div className="Cita">
        <div><i><FiUser/></i> {props.nombre}</div>
        <div><i><FiPhone/></i> {props.telefono}</div>
        <div><i><FiCalendar/></i> {props.fecha}</div>
        <div className="Operaciones">
            {props.ok===false ?
                <i onClick={()=>props.handleAceptarCita(props.id)} className="Aceptar"><FaUserCheck/></i>
                : null}
            <i onClick={()=>props.handleAceptarEliminar(props.id)} className="Eliminar"><FiUserX/></i>
        </div>
    </div>
 )
}


export default Cita