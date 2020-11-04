import React,{useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import Loader from '../UI/Loader/Loader'
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";
import ErrorMessage from "../UI/AlertMessages/ErrorMessage";
import {FiKey,FiUser} from 'react-icons/fi'


const LoginPage=(props)=>{
    const [userName,SetUserName]=useState("")
    const [password,Setpassword]=useState("")

   const handleOnchangeuserName=e=>{
        SetUserName(e.target.value)
    }
  const  handleOnchangePass=e=>{
        Setpassword(e.target.value)
    }

    const submitHandler=e=>{
        e.preventDefault()
        props.onAuth(userName,password)
    }

    let redirectAdmin=null
    if(props.user){
        redirectAdmin=<Redirect to="/administrar"/>
    }
        let contenido =null
     if(props.cargando){
         contenido=<Loader/>
     }else{
         contenido=(<form className="LoginForm" onSubmit={submitHandler}>
             <div id="Campo">
                 <label className={userName!=='' ? "LabelFlotador" : ''}><i><FiUser/></i> Nombre de Usuario</label>
                 <input  onChange={handleOnchangeuserName} value={userName}/>
             </div>

             <div id="Campo">
                 <label className={password!=='' ? "LabelFlotador" : ''}><i><FiKey/></i> Contraseña</label>
                 <input onChange={handleOnchangePass} value={password} type="password"/>
             </div>

             <div className="Botones">
                 <button className="LoginButtons">ENTRAR</button>
                 <Link to="/">
                     <button className="LoginButtons">CANCELAR</button>
                 </Link>
             </div>

         </form>)
     }
    return (

     <div className="LoginContainer">
         {redirectAdmin}
         <Backdrop show={props.authFail}/>
         <Modal show={props.authFail}>
             {props.cargando ?
                 <Loader/> :
                 props.authFail ?
                 <ErrorMessage
                     errorMensaje={props.errorMensaje}
                     Continuar={()=>props.onCleanErrors()}

                 /> :
                 null
             }
         </Modal>
        <div className="InfoLogin">
            <p className="Importante"> Importante!</p>
            <p className="Acceso"> El <span>Acceso</span> al Sistema solo lo tiene el <span>Doctor</span></p>
        </div>
         {contenido}
    </div>


    )
}

const mapStateToProps=state=>{
    return{
        cargando:state.stateAuth.cargando,
        user:state.stateAuth.user,
        onAuthFail:state.stateAuth.authFail,
        errorMensaje:state.stateAuth.error,
        authFail:state.stateAuth.authFail
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        onAuth:(email,password)=> dispatch(actions.auth(email,password)),
        onCleanErrors:()=>dispatch(actions.cleanErrors())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)