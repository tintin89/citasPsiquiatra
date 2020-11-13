import React,{useState} from "react"
import "../../styles.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import firebase from '../../Firebase'
import {FiUser,FiPhone} from 'react-icons/fi'
import {connect} from 'react-redux'
import moment from 'moment'
import 'moment/locale/es'





const Formulario =  (props) =>{
       const [nombre,setNombre]=useState("")
       const [telefono,setTelefono]=useState("")
       const [fecha,setFecha]=useState("")


    const isWeekday = date => {
           const day = date.getDay();
           return day !==0 && day!==6
    }

    const addDays=(date,days)=>{
           const resultado=new Date(date)
           resultado.setDate(resultado.getDate() + days)
           return resultado
    }



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
                if(!props.onConnected){
                    props.handleError('No hay conexión con el servidor')
                }else {

                    const cita = {
                        nombre: nombre,
                        telefono: telefono,
                        fecha: moment(fecha).format('DD MMMM YYYY,h:mm a'),
                        ok: false,
                        fechaT:Math.floor(fecha/1000)
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
                    showTimeSelect
                    timeIntervals={60}
                    timeCaption="Hora"
                    selected={fecha}
                    dateFormat="dd/MM/yyyy h:mm a"
                    minDate={addDays(new Date(),1)}
                    filterDate={isWeekday}
                    includeTimes={[
                        new Date().setHours(8,0,0),
                        new Date().setHours(9,0,0),
                        new Date().setHours(10,0,0),
                        new Date().setHours(11,0,0),
                        new Date().setHours(14,0,0),
                        new Date().setHours(15,0,0),
                        new Date().setHours(16,0,0),

                    ]}
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






