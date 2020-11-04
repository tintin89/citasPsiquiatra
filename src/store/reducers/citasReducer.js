import * as actionTypes from '../actions/actionTypes'


const initialState={
    citas:[]
}

const citasReducer=(state=initialState, action)=>{
       switch (action.type) {
           case actionTypes.UPDATE_CITAS:

               return {
                      ...state,
                     citas:action.citas

               }

           default:
               return state
       }

}


export default citasReducer