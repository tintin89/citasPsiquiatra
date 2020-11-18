import * as actionTypes from '../actions/actionTypes'


const initialState={
    citas:[],
    error:"",
    onNet:true,
    loading:false
}

const citasReducer=(state=initialState, action)=>{
       switch (action.type) {
           case actionTypes.UPDATE_CITAS:

               return {
                      ...state,
                     citas:action.citas

               }

           case actionTypes.UPDATE_NETWORK:
               return {
                   ...state,
                   onNet: action.isConnected
               }

           case actionTypes.LOADING_CITAS:
               return {
                   ...state,
                   loading:action.isLoading
               }

           default:
               return state
       }

}


export default citasReducer