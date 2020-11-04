import React from 'react'

const InfoSolicitar=(props)=>(
    <div className="Info" style={{filter:props.blur ? "blur(3px)" : "none"}}>
        <p>Solicite su cita con el <span>Psiquiatra</span></p>
        <p><i>...al alcanze de un click...</i></p>
        <button onClick={props.handleShow} className="MyButton">SOLICITAR</button>
        <p>obtenga una consulta de un <span>profesional con 30 años de experiencia</span> en el sector de la <span>Salud Mental</span></p>

    </div>
)

export default InfoSolicitar