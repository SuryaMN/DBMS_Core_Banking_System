import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_FAILED,LOGIN_SUCCESS,SIGNUP_FAILED,SIGNUP_SUCCESS} from './authActionTypes'

const initialState = {
    token:localStorage.getItem('jwtToken'),
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null
}


export default function authReducer(state = initialState,action){
    switch(action.type){

        case USER_LOADING:
            return{
                ...state,
                loading:true,
                isAuthenticated:false,
                user:null,
                error:null
            }

        case SIGNUP_FAILED:
        case LOGIN_FAILED:
        // case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            localStorage.removeItem('jwtToken')
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                loading:false,
                error:action.payload
            };

        case USER_LOADED:
            return{
                ...state,
                user:action.payload,
                loading:false,
                isAuthenticated:true,
                error:null
            }
        
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('jwtToken',action.payload.jwtToken)
            return{
                ...state,
                token:action.payload.jwtToken,
                user:action.payload.user,
                loading:false,
                isAuthenticated:true,
                error:null
            }
        default:
            return state
    }
}