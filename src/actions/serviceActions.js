import axios from 'axios';
import {
    GET_ERRORS, GET_ALL_SERVICES, GET_SERVICE_BY_ID, DELETE_SERVICE_BY_ID,
    GET_COMPANY_SERVICE_BY_COMPANY_CODE
} from './types';

export const createService = (service, history) => async dispatch => {

    try {
        await axios.post("/api/services", service);
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

export const getAllServices = () => async dispatch => {
    try {
        const res = await axios.get("/api/services/all");
        dispatch({
            type: GET_ALL_SERVICES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getServiceByid = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/services/${id}`);
        dispatch({
            type: GET_SERVICE_BY_ID,
            payload: res.data
        });
    } catch (err) {
        history.push("/");
    }
}

export const deleteService = (id) => async dispatch => {

    try {
        if (window.confirm("Are you sure you want to delete this service")) {
            await axios.delete(`api/services/${id}`);
            dispatch({
                type: DELETE_SERVICE_BY_ID,
                payload: id
            });
        }
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}

export const addCompanyService = (companyService, history) => async dispatch => {

    try {
        await axios.post("/api/companyservice", companyService)
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
        const res = await axios.get(`/api/companyservice/${companyCode}`);
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