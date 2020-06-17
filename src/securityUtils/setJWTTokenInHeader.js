import axios from 'axios';

const setJWTTokenInHeader = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}
export default setJWTTokenInHeader;