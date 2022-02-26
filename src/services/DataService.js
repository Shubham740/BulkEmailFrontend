

/**
 * this method is used to get the header for the request 
 * @returns : it contains the header
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"))

    if (token) {
        return { Authorization: 'Bearer ' + token };
    }
    else {
        return {};
    }
}