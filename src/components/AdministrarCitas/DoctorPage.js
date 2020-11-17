import React, {Component} from 'react'
import Citas from './Citas'
import DoctorPageNav from "./DoctorPageNav";
import LateralBar from "../NavigationBar/LateralBar";
import firebase from  "../../Firebase";
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";
import AceptarSolicitud from "../UI/AlertMessages/AceptarSolicitud";
import AceptarEliminar from "../UI/AlertMessages/AceptarEliminar";
import AceptarCitaCliente from "../UI/AlertMessages/AceptarCitaCliente";
import {connect} from 'react-redux'
import * as actions from "../../store/actions/index";
import {Redirect} from "react-router";
import {withRouter} from "react-router";
import ErrorMessage from "../UI/AlertMessages/ErrorMessage";
import Loader from "../UI/Loader/Loader";


class DoctorPage extends Component {
    state = {
        errorMensaje: "",
        errorExist: false,
        aceptandoCrear: false,
        admin: true,
        aceptandoEliminar: false,
        idSeleccionado: null,
        aceptandoSolicitud: false,
        showBackdrop: false,
        solicitudes: true,
        citasConfirmadas: false,
        crearCita: false,
        lateralbar: false,
    }


    componentDidMount() {
        this.props.onGetCitas();

    }


    handleSolicitudes = () => {
        if (this.state.lateralbar) {
            this.setState({lateralbar: false})
        }
        this.setState({
            solicitudes: true,
            citasConfirmadas: false,
            crearCita: false
        })
    }
    handleCitasConfirmadas = () => {
        if (this.state.lateralbar) {
            this.setState({lateralbar: false})
        }
        this.setState({
            solicitudes: false,
            citasConfirmadas: true,
            crearCita: false
        })
    }
    handleCrearCita = () => {
        if (this.state.lateralbar) {
            this.setState({lateralbar: false})
        }
        this.setState({
            solicitudes: false,
            citasConfirmadas: false,
            crearCita: true
        })
    }
    AceptarCita =  (id) => {
        const citaRef =  firebase.database().ref('Citas').child(id)
         citaRef.update({
            ok: true
        },(error)=>{
             if(!error){
                 this.setState({aceptandoSolicitud: false, showBackdrop: false})
             }

             else{
                 this.setState({errorExist:true,showBackdrop:true,errorMensaje:error.message})
             }

         }

         )
}

     handleEliminar= (id)=>{

        const citaRef=firebase.database().ref('Citas').child(id)
        citaRef.remove().then(()=>this.setState({aceptandoEliminar:false,showBackdrop:false}))
            .catch(error=>this.setState({errorExist:true,showBackdrop:true,errorMensaje:error.message}))


    }


    CrearCita= cita=>{

        const dataRef= firebase.database().ref('Citas/' + firebase.database().ref().child('Citas').push().key);
        dataRef.set(cita,err=>{
            if(err){
                this.setState({errorExist:true,showBackdrop:true,errorMensaje:err.message})
            }else{
                this.setState({
                    aceptandoCrear:true,
                    showBackdrop:true,
                })
            }
        })

    }
    desloguear=()=>{
        this.props.onLogout()
        this.props.history.push('/')
    }
    render() {
        let logout=null
        if(this.props.user === null){
            logout=<Redirect to="/"/>
        }
        return(
            <>
                {logout}
                <Backdrop show={this.state.showBackdrop}/>
                <Modal show={this.state.showBackdrop}>
                    {this.state.aceptandoSolicitud ?
                        <AceptarSolicitud
                            Cancelar={()=>{this.setState({aceptandoSolicitud:false,showBackdrop:false})}}
                            Aceptar={()=>this.AceptarCita(this.state.idSeleccionado)}
                        />
                            : this.state.aceptandoEliminar ?
                            <AceptarEliminar
                              Cancelar={()=>{this.setState({aceptandoEliminar:false,showBackdrop:false})}}
                              Aceptar={()=>this.handleEliminar(this.state.idSeleccionado)}
                            /> :  this.state.aceptandoCrear ?
                                <AceptarCitaCliente
                                    admin={this.state.admin}
                                    Continuar={()=>this.setState({aceptandoCrear:false,showBackdrop:false})}

                                />
                                : this.state.errorExist ?
                                    <ErrorMessage
                                        errorMensaje={this.state.errorMensaje}
                                        Continuar={()=>this.setState({showBackdrop:false,errorExist:false,errorMensaje:""})}
                                    />
                                    : null
                    }
                </Modal>
                <LateralBar
                desloguear={this.desloguear}
                user={this.props.user}
                show={this.state.lateralbar}
                handleSolicitudes={this.handleSolicitudes}
                handleCitasConfirmadas={this.handleCitasConfirmadas}
                handleCrearCita={this.handleCrearCita}
                solicitudes={this.state.solicitudes}
                citasConfirmadas={this.state.citasConfirmadas}
                crearCita={this.state.crearCita}
                />
                <DoctorPageNav
                desloguear={this.desloguear}
                brilla={this.state.lateralbar}
                handleLateralBar={()=>this.setState({lateralbar:!this.state.lateralbar})}
                handleSolicitudes={this.handleSolicitudes}
                handleCitasConfirmadas={this.handleCitasConfirmadas}
                handleCrearCita={this.handleCrearCita}
                solicitudes={this.state.solicitudes}
                citasConfirmadas={this.state.citasConfirmadas}
                crearCita={this.state.crearCita}
                />
                {
                    this.props.cargandoCitas ? <Loader/>
                    :
                        <Citas
                            isConnected={this.props.isConnected}
                            handleError={mensaje=>this.setState({errorExist:true,showBackdrop:true,errorMensaje:mensaje})}
                            addCita={this.CrearCita}
                            citas={this.props.listaCitas.sort((a,b)=>{return a.fechaT-b.fechaT})}
                            solicitudes={this.state.solicitudes}
                            citasConfirmadas={this.state.citasConfirmadas}
                            crearCita={this.state.crearCita}
                            handleCitasConfirmadas={this.handleCitasConfirmadas}
                            handleAceptarEliminar={(id)=>{
                                if(!this.props.isConnected){
                                    this.setState({errorExist:true,showBackdrop:true,errorMensaje:"No hay conexión con el servidor"})
                                }else{
                                    this.setState({
                                        idSeleccionado:id,
                                        aceptandoEliminar:true,
                                        showBackdrop:true
                                    })
                                }
                            }}
                            handleAceptarCita={
                                (id)=>{
                                    if(!this.props.isConnected){
                                        this.setState({errorExist:true,showBackdrop:true,errorMensaje:"No hay conexión con el servidor"})
                                    }else{
                                        this.setState({
                                            aceptandoSolicitud:true,
                                            showBackdrop:true,
                                            idSeleccionado:id
                                        })
                                    }

                                }
                            }
                            handleCrearCita={(cita)=>this.CrearCita(cita)}
                        />
                }

            </>
        )
    }


}
const mapStateToProps=state=>{
    return {
        listaCitas:state.stateCitas.citas,
        user:state.stateAuth.user,
        isConnected:state.stateCitas.onNet,
        cargandoCitas:state.stateCitas.loading
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onGetCitas:()=>dispatch(actions.getCitas()),
        onLogout:()=>dispatch(actions.userlogout())

    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DoctorPage))