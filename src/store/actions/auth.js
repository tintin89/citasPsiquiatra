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


export const authFail=(errorMensaje)=>{
    return {
         type:actionTypes.AUTH_FAIL,
         errorM:errorMensaje
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

                dispatch(authFail(error.message))
            })
            }
}

export const ifUserChange=()=>{
    return dispatch=>{
        firebaseAuth.onAuthStateChanged(user=>{
            if(user){
            dispatch(updateUsuario(user))
            }
            else{
                dispatch(desloguear(false))
            }
        })
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


