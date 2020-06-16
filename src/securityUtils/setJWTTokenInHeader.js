import axios from 'axios';

const setJWTTokenInHeader = jwtToken => {
    if (jwtToken) {
        axios.defaults.headers.common["Authorization"] = jwtToken;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setJWTTokenInHeader;