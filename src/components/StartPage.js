import React, {Component} from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import Information from './MainContent/Information'
import Formulario from "./MainContent/Formulario";
import InfoSolicitar from "./MainContent/InfoSolicitar";
import Doctor from './MainContent/Doctor.js'
import LateralBar from "./NavigationBar/LateralBar";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";
import AceptarCitaCliente from "./UI/AlertMessages/AceptarCitaCliente";
import {connect} from 'react-redux'
import ErrorMessage from "./UI/AlertMessages/ErrorMessage";
import {Redirect} from "react-router";
import Loader from "./UI/Loader/Loader";



class StartPage extends Component {
    state={
        errorExist:false,
        errorMensaje:"",
        showBackdrop:false,
        mostrarForm:false,
        blur:false,
        doctor:false,
        informacion:"Acerca del Doctor",
        mostrarLateral:false
    }
    handleDoctorServicios=()=>{
        if(!this.state.doctor){
            this.setState({
                doctor:true,
                informacion:"Servicios",
                mostrarForm:false
            })
        } else{
            this.setState({
                informacion:"Acerca del Doctor",
                doctor:false,
                mostrarForm:false
            })
        }
    }


   render(){
    let isAdmin=null
    if(this.props.user){
        isAdmin=<Redirect to="/administrar"/>
    }
        return(
            <>
                {isAdmin}
                {this.props.isLoading ? <Loader/> :
                <>
                    <LateralBar
                        user={false}
                        show={this.state.mostrarLateral}
                        informacion={this.state.informacion}
                        handleInfoDoctor={()=>{
                            this.handleDoctorServicios()
                            this.setState({mostrarLateral:false})
                        }}
                    />
                    <NavigationBar
                        handleLateralBar={()=>this.setState({
                            mostrarLateral:!this.state.mostrarLateral
                        })}

                        handleDoctor={this.handleDoctorServicios}
                        informacion={this.state.informacion}
                        brilla={this.state.mostrarLateral}
                    />
                    {!this.state.mostrarForm ?
                        <div className="Main">
                            <Doctor
                                show={this.state.doctor}
                            />

                            <Information
                                show={this.state.doctor}
                            />

                            <InfoSolicitar
                                handleShow={
                                    ()=> {this.setState({mostrarForm: true})}}
                            />
                        </div>

                        :
                        <>
                            <Backdrop show={this.state.showBackdrop}/>
                            <Modal show={this.state.showBackdrop}>
                                {this.state.errorExist ?
                                    <ErrorMessage
                                        errorMensaje={this.state.errorMensaje}
                                        Continuar={()=>this.setState({showBackdrop:false,errorExist:false,errorMensaje:""})}
                                    /> :
                                    <AceptarCitaCliente
                                        Continuar={()=>this.setState({showBackdrop:false, mostrarForm:false})}/>
                                }
                            </Modal>

                            <Formulario
                                handleError={(mensaje)=>this.setState({
                                    errorExist:true,showBackdrop:true,errorMensaje:mensaje})}
                                handleCancelar={()=>this.setState({mostrarForm:false})}
                                handleFinalizar={()=>this.setState({showBackdrop:true})}
                                show={this.state.mostrarForm}
                            />
                        </>

                    }
                </>
                }

            </>
        )
    }
}


const mapStateToProps=state=>{
    return {
        user:state.stateAuth.user,
        isLoading:state.stateAuth.cargando
    }
}

export default connect(mapStateToProps,null)(StartPage);
