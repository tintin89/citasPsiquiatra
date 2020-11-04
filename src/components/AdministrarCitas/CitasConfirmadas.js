import React from 'react'
import Cita from './Cita'


const CitasConfirmadas=(props)=>(
    <div className="Citas">
        {
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
        }
    </div>
)

export default CitasConfirmadas