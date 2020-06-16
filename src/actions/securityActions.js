import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_COMPANY } from './types';
import setJWTTokenInHeader from '../securityUtils/setJWTTokenInHeader';
import jwt_decode from "jwt-decode";

export const createNewCompany = (newCompany, history) => async dispatch => {

    try {

        await axios.post("/api/users/company", newCompany);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}

export const loginCompany = (loginRequest) => async dispatch => {

    try {
        // Post => Login Request
        const res = await axios.post("api/users/authenticate", loginRequest)

        // extract token from res.data
        const { jwt } = res.data;

        // store the token in local storage
        localStorage.setItem("jwtToken", jwt);
        localStorage.setItem("companyCode", loginRequest.username);

        // set our token in header ***
        setJWTTokenInHeader(jwt)

        // decode token on React
        // const decoded = jwt_decode(jwtToken);  //Not decoding


        //dispacch to securityReducer
        dispatch({
            type: SET_CURRENT_COMPANY,
            payload: loginRequest.username
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}