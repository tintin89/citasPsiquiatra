import React from "react";
import '../../styles.css'
import Logo from '../NavigationBar/Logo'
import DoctorNavBarOperations from "./DoctorNavBarOperations";
import LateralBarOnOff from "../NavigationBar/LateralBarOnOff";





const DoctorPageNav=(props)=>{

    return (
        <>
          <div className="NavigationBar">
            <Logo/>
            <LateralBarOnOff
            brilla={props.brilla}
            handleLateralBar={props.handleLateralBar}
            />
            <DoctorNavBarOperations

                desloguear={props.desloguear}
                handleSolicitudes={props.handleSolicitudes}
                handleCitasConfirmadas={props.handleCitasConfirmadas}
                handleCrearCita={props.handleCrearCita}
                solicitudes={props.solicitudes}
                citasConfirmadas={props.citasConfirmadas}
                crearCita={props.crearCita}
            />
          </div>


       </>
    )
}

export default DoctorPageNav