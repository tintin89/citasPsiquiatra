import React,{useState} from "react"
import "../../styles.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import es from 'date-fns/locale/es'
import {registerLocale} from "react-datepicker"
import firebase from '../../Firebase'
import {FiUser,FiPhone} from 'react-icons/fi'
import {connect} from 'react-redux'
registerLocale('es',es)



const Formulario =  (props) =>{

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

            if(nombre===""||telefono===""||fecha===""||fecha===null){
             props.handleError("Por favor complete todos los datos!")
            }else {

            if (!nombre.match(/^[A-Z\s]*$/i) || !telefono.match(/^[0-9]*$/)) {
                props.handleError("Por favor complete los datos correctamente!")
               }else {
                if(!props.onConnected){
                    props.handleError('No hay conexión con el servidor')
                }else {

                    const cita = {
                        nombre: nombre,
                        telefono: telefono,
                        fecha: fecha.toLocaleString(),
                        ok: false
                    }
                    const dataRef = await firebase.database().ref('Citas/' + firebase.database().ref().child('Citas').push().key);
                    dataRef.set(cita, err => {
                        if (err) {
                            console.log(err)
                        } else {
                            props.handleFinalizar()
                        }
                    })
                }

                }
            }
               }

        return(
            <form onSubmit={handleSubmit} className="FormDiv">
                <div id="Campo">
                <label className={nombre!=='' ? "LabelFlotador" : ''}><i><FiUser/></i> Nombre y Apellidos</label>
                <input  onChange={handleOnchangeNombre} value={nombre}/>
                </div>
                <label className="ErrorLabel">{!nombre.match(/^[A-Z\s]*$/i) ?
                    "El nombre solo debe contener letras" : null} </label>



                <div id="Campo">
                <label  className={telefono!=='' ? "LabelFlotador" : ''}><i><FiPhone/></i> Número de Teléfono</label>
                <input onChange={handleOnchangeTelefono} value={telefono}/>
                </div>
                <label className="ErrorLabel">{!telefono.match(/^[0-9]*$/) ?
                    "Inserte un número de teléfono válido" : null}</label>

                <DatePicker
                    placeholderText="Fecha y Hora"
                    locale="es"
                    showTimeSelect
                    timeIntervals={60}
                    timeCaption="Hora"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    selected={fecha}
                    minDate={new Date()}
                    onChange={date=>setFecha(date)}/>



                <div className="Botones">
                <button className="Solicitar">ENVIAR SOLICITUD</button>
                <button type="Button" className="Cancelar"  onClick={props.handleCancelar}>CANCELAR</button>
                </div>
            </form>




        )
    }

    const mapStateToProps=state=>{
    return{
        onConnected:state.stateCitas.onNet
    }
    }

export default connect(mapStateToProps)(Formulario)






