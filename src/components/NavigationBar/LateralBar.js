import React from 'react'
import {Link} from 'react-router-dom'
import {FiUserPlus} from 'react-icons/fi'

const LateralBar=(props)=>(
    <div className="LateralBar" style={{transform:props.show ? 'translateX(0)' : 'translateX(-100%)',}}>
            <div className="Opciones">
                {
                 props.user
                     ?  (<>
                         <div
                             style={props.solicitudes ? {boxShadow:"1px 1px 10px white"}:{boxShadow:""}}
                             onClick={props.handleSolicitudes}>SOLICITUDES</div>
                         <div
                             style={props.citasConfirmadas ? {boxShadow:"1px 1px 10px white"}:{boxShadow:""}}
                              onClick={props.handleCitasConfirmadas}>CITAS CONFIRMADAS</div>
                         <div
                             style={props.crearCita ? {boxShadow:"1px 1px 10px white"}:{boxShadow:""}}
                             onClick={props.handleCrearCita}>CREAR CITA<i><FiUserPlus/></i></div>
                         <div onClick={props.desloguear}>SALIR</div>
                         </>)
                     :
                     <>

                         <Link to="/entrar">
                             <div >ENTRAR</div>
                         </Link>

                         <div onClick={props.handleInfoDoctor}>{props.informacion}</div>
                     </>

                }
            </div>
            </div>
)



export default LateralBar