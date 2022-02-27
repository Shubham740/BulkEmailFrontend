import {SET_EMAIL,SET_PASSWORD,SET_LOGIN_DATA} from '../types';

const initialState = {
   email:'',
   password:''
}
export default function(state = initialState, action){

    switch(action.type){

        case SET_EMAIL:
        return {
            ...state,
            email:action.payload,
        }
        case SET_PASSWORD:
            return{
                ...state,
                password: action.payload 
            }

            case SET_LOGIN_DATA:
                return{
                    ...state,
                    email:action.payload.email,
                    password:action.payload.password
                }
        default: return state
    }

}
