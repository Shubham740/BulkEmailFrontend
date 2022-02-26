import axios from "axios";
import ApiUrls from "../utils/ApiUrls";


class AuthService {
    login(body) {
        let url = ApiUrls.BASE_URL + ApiUrls.LOGIN;

        return axios.post(url, body).then(response => {
            if (response.token) {
                localStorage.setItem("token", response.token)
                localStorage.setItem("user", response.data)

            }
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

}



export default new AuthService();
