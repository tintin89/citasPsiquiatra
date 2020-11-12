import React from 'react'
import Cita from './Cita'
import {verificar} from './utilityMethods/methods'


const CitasConfirmadas=(props)=>(
    <div className="Citas">
        {
            verificar(props.citas,true) ?
            props.citas.map(c=>{
                if(c.ok){
                    return <Cita
                        handleAceptarEliminar={props.handleAceptarEliminar}
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
                : <p className="SinCitas">No hay citas confirmadas</p>

        }
    </div>
)

export default CitasConfirmadas