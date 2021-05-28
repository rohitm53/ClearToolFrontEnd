import axios from 'axios';
import { GET_COMPANY_SERVICE_BY_COMPANY_CODE, GET_ERRORS } from './types';


export const addCompanyService = (companyService, history) => async dispatch => {

    try {
        await axios.post("/api/company/company-service", companyService)
        history.push("/");
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

export const getServiceByCompanyCode = (companyCode) => async dispatch => {

    try {
        const res = await axios.get(`/api/company/company-service/${companyCode}`);
        dispatch({
            type: GET_COMPANY_SERVICE_BY_COMPANY_CODE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}