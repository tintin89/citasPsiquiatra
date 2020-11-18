import * as actionTypes from './actionTypes'
import {firebaseAuth} from '../../Firebase'



export const authSuccess=(userData)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        user:userData
    }
}

export const authStart=()=>{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authEnd=()=>{
    return {
        type:actionTypes.AUTH_END
    }
}




export const authFail=(errorMensaje)=>{
    return {
         type:actionTypes.AUTH_FAIL,
         errorM:errorMensaje
    }
}

export const handleSpanishError=(codigo)=>{
    return dispatch=>{
        switch (codigo) {
            case "auth/invalid-email":
                return dispatch(authFail('El usuario debe ser un correo electrónico!'))
            case "auth/user-not-found":
                return dispatch(authFail('El usuario no fue encontrado en el sistema!'))
            case "auth/wrong-password":
                return dispatch(authFail('Contraseña incorrecta!'))
            case "auth/network-request-failed":
                return dispatch(authFail('Error de conexión!'))
            default:
                return null
        }
    }
}

export const cleanErrors=()=>{
    return {
        type:actionTypes.CLEAN_ERRORS
    }
}

export const updateUsuario=usuario=>{
    return {
        type:actionTypes.UPDATE_USER,
        userData:usuario
    }
}


export const auth=(email,password)=>{
    return  dispatch=>{
          dispatch(authStart())
        firebaseAuth.signInWithEmailAndPassword(email,password)
            .then(result=>{
               dispatch(authSuccess(result.user))
            })
            .catch(error=>{
                dispatch(handleSpanishError(error.code))
            })
            }
}

export const ifUserChange=()=>{
    return dispatch=>{
        dispatch(authStart())
        firebaseAuth.onAuthStateChanged(user=>{
            if(user){
            dispatch(updateUsuario(user))
            }
            dispatch(authEnd())
             },error=>dispatch(authEnd()))
    }
}

export const userlogout=()=>{
    return dispatch=>{
        firebaseAuth.signOut()
            .then(()=>dispatch(desloguear(false)))
    }
}

export const desloguear=(valor)=>{
    return {
        type:actionTypes.UPDATE_USER_LOGOUT,
        areUser:valor
    }
}


