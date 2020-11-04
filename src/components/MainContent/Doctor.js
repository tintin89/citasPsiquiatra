import React from 'react'
import foto from '../assets/foto.jpg'


const Doctor=(props)=>(
    <div className="Doctor" style={{
        transform:props.show ? 'translateX(0)' : 'translateX(-100vh)',
        opacity: props.show ? '1' : '0',
        filter:props.blur ? "blur(3px)" : "none"
    }}>
        <div className="DoctorContainer">
        <div className="DoctorHead"><img className="DoctorImagen" src={foto} alt=""/> Dr Nivaldo Antonio González Alvarez</div>
        <div className="DoctorInfo">
        <p>30 años de experiencia</p>
        <p>Doctor en Medicina General (Universidad de Camaguey,Cuba)</p>
        <p>Medico Cirujano (UNERG,Venezuela) </p>
        <p>Especialista de 1er grado de Medicina General Integral</p>
        <p>Especialista de 1er grado de Psiquiatria General</p>
        <p>Master en Atencion Integral al niño y al adolecente</p>
        </div>

       </div>
    </div>

)



export default Doctor