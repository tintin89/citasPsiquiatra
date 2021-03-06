import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import {FiUser,FiPhone} from 'react-icons/fi'
import moment from 'moment'
import 'moment/locale/es'



const CrearCita = (props)=> {

    const [nombre,setNombre]=useState("")
    const [telefono,setTelefono]=useState("")
    const [fecha,setFecha]=useState("")


    const handleOnchangeNombre=e=>{
        setNombre(e.target.value)
    }

    const handleOnchangeTelefono=e=>{
        setTelefono(e.target.value)
    }

  const  handleSubmit= async e=>{
        e.preventDefault()
        moment.locale('es')
      if(nombre===""||telefono===""||fecha===""||fecha===null){
          props.handleError("Por favor complete todos los datos!")
      }else {

          if (!nombre.match(/^[A-Z\s]*$/i) || !telefono.match(/^[0-9]*$/)) {
              props.handleError("Por favor complete los datos correctamente!")
          }else {
              if(!props.isConnected){
                  props.handleError("No hay conexión con el servidor!")
              }else {
                  const cita = {
                      nombre: nombre,
                      telefono: telefono,
                      fecha: moment(fecha).format('DD MMMM YYYY,h:mm a'),
                      ok: true,
                      fechaT:Math.floor(fecha/1000)
                  }
                  props.addCita(cita)
                  setFecha("")
                  setTelefono("")
                  setNombre("")
              }
          }
      }

    }

          return (
             <div>
                 <form onSubmit={handleSubmit} className="FormDiv">
                     <div id="Campo">
                         <label className={nombre !== '' ? "LabelFlotador" : ''}><i><FiUser/></i> Nombre y Apellidos</label>
                         <input onChange={handleOnchangeNombre} value={nombre}/>
                     </div>
                     <label className="ErrorLabel">{!nombre.match(/^[A-Z\s]*$/i) ?
                         "El nombre solo debe contener letras" : null} </label>



                     <div id="Campo">
                         <label className={telefono !== '' ? "LabelFlotador" : ''}><i><FiPhone/></i> Número de Teléfono</label>
                         <input onChange={handleOnchangeTelefono} value={telefono}/>
                     </div>
                     <label className="ErrorLabel">{!telefono.match(/^[0-9]*$/) ?
                         "Inserte un número de teléfono válido" : null}</label>


                     <DatePicker
                         placeholderText="Fecha y Hora"
                         showTimeSelect
                         timeIntervals={60}
                         timeCaption="Hora"
                         dateFormat="dd/MM/yyyy h:mm a"
                         minDate={new Date()}
                         selected={fecha}
                         onChange={date => setFecha(date)}/>

                     <div className="Botones">
                         <button className="Solicitar">CREAR CITA</button>

                     </div>
                 </form>
             </div>
          )
      }

export default CrearCita