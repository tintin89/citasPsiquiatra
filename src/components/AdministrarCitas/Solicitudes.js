import React from 'react'
import Cita from './Cita'
import {verificar} from "./utilityMethods/methods";



const Solicitudes=(props)=>{




   return(
       <div className="Citas">
        {
            verificar(props.citas,false)?
            props.citas.map(c=>{
                if(!c.ok){
                    return <Cita
                        handleAceptarEliminar={props.handleAceptarEliminar}
                        handleAceptarCita={props.handleAceptarCita}
                        key={c.id}
                        id={c.id}
                        ok={c.ok}
                        nombre={c.nombre}
                        telefono={c.telefono}
                        fecha={c.fecha}
                    />
                }else{
                    return null
                }
            })
                : <p className="SinCitas">No hay  solicitudes de cita</p>
        }
    </div>
   )
}

export default Solicitudes