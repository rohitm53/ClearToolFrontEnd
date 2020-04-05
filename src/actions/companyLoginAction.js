import axios from 'axios';
import { GET_ERRORS, GET_LOGIN_ERROR, SAVE_COMPANY_CODE } from './types';

export const authenticateCompany = (companyLoginRequest, history) => async dispatch => {

    try {

        const res = await axios.post("/api/company/authenticate", companyLoginRequest);
        const { error, company } = res.data;
        if (error !== null) {
            //Clearing Error State
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
            ////////////////////////
            dispatch({
                type: GET_LOGIN_ERROR,
                payload: error
            });
        } else {
            //Clearing Error State
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
            ////////////////////////
            const { companyCode } = company;
            dispatch({
                type: SAVE_COMPANY_CODE,
                payload: companyCode
            });
            history.push("/dashboard");
        }

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: SAVE_COMPANY_CODE,
        payload: null
    });
    window.location.href = "/";
}