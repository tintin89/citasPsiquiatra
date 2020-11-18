import * as actionTypes from './actionTypes'
import firebase from '../../Firebase'

export const updateCitas = (citasList)=>{
    return {
        type:actionTypes.UPDATE_CITAS,
        citas:citasList
    }
}

export const LoadingCitas = (valor)=>{
    return {
        type:actionTypes.LOADING_CITAS,
        isLoading:valor
    }
}



export const updateNetwork = (valor)=>{
    return {
        type:actionTypes.UPDATE_NETWORK,
        isConnected:valor
    }
}

export const getCitas= () => {
    return dispatch => {
        dispatch(LoadingCitas(true))
        const citasRef = firebase.database().ref('Citas')

        citasRef.on('value', (snapshot) => {
                const citasDb = snapshot.val()
                const citas = []
                for (let id in citasDb) {
                    citas.push({id, ...citasDb[id]})
                }


                dispatch(updateCitas(citas))
                dispatch(LoadingCitas(false))

            }
            ,error=>{
            console.log(error)
            dispatch(LoadingCitas(false))
        })
    }
}

export const onNetwork = ()=>{
    return dispatch => {
       const connectedRef = firebase.database().ref(".info/connected");
        connectedRef.on("value", function (snap) {
            if (snap.val() === true) {
                dispatch(updateNetwork(true))
            } else {
                dispatch(updateNetwork(false))
            }
        });
    }
}