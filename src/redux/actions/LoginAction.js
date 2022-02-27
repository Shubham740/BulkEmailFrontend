import { SET_EMAIL, SET_LOGIN_DATA, SET_PASSWORD } from "../types";

export function setEmailId(emaiId){
    return{
        type:SET_EMAIL,
        payload:emaiId
    }
}
export function setPassword(password){
    return{
        type:SET_PASSWORD,
        payload:password
    }
}
export function setLoginData(data){
    return{
        type:SET_LOGIN_DATA,
        payload:data
    }

}