import * as actionTypes from '../actions/actionTypes'


const initialState={
    cargando:false,
    user:null,
    userExist:false,
    authFail:false,
    error:""
}

const authReducer=(state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                cargando:false,
                user:{...action.user},
                userExist: true
            }

        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                cargando:false,
                authFail: true,
                error:action.errorM
            }

        case actionTypes.AUTH_START:
            return {
                ...state,
                cargando:true
            }

        case actionTypes.AUTH_END:
            return {
                ...state,
                cargando:false
            }


        case actionTypes.UPDATE_USER:
            return {
                ...state,
                user:{...action.userData},
                userExist: true
            }

        case actionTypes.UPDATE_USER_LOGOUT:
            return {
                ...state,
                userExist:action.areUser,
                user: null
            }

        case actionTypes.CLEAN_ERRORS:
            return {
                ...state,
                authFail: false,
                error: "",
                cargando: false
            }

        default:
            return state
    }

}


export default authReducer