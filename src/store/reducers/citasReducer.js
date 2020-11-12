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

           default:
               return state
       }

}


export default citasReducer