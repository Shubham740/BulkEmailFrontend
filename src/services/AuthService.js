import axios from "axios";
import ApiUrls from "../utils/ApiUrls";
import authHeader from "./DataService";


class AuthService {
    login(body) {
        let url = ApiUrls.BASE_URL + ApiUrls.LOGIN;

        return axios.post(url, body).then(response => {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", response.data.token)

            }
            return response.data;
        })
    }


    logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    post(body, url){
        let header = authHeader();
        let finalUrl = ApiUrls.BASE_URL + url;
        return axios.post(finalUrl, body,{
            headers:header
        }).then(response => {
            
            return response.data;
        })
    }

    get(url){
        let header = authHeader();
        let finalUrl = ApiUrls.BASE_URL + url;
            return axios.get(finalUrl,{
                headers:header
            }).then(response=>{
                return response.data;
            })
    }


    
}



export default new AuthService();
