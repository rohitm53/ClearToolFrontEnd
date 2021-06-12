import axios from 'axios';
import {
    GET_ERRORS, GET_ALL_EMPLOYEES, GET_ALL_COMPANY_EMPLOYEE, GET_EMPLOYEE_BY_EMPLOYEE_CODE,
    DELETE_EMPLOYEE_BY_ID
} from './types';

export const postEmployee = (employee, history) => async dispatch => {
    try {
        await axios.post("/api/company/employee", employee);
        history.push("/employees");
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

export const getEmployees = () => async dispatch => {
    try {
        const res = await axios.get('/api/company/employee/all');
        dispatch({
            type: GET_ALL_EMPLOYEES,
            payload: res.data
        });
    } 
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getAllCompanyEmployees = () => async dispatch => {
    try {
        const res = await axios.get("/api/company/employee/company-employee");
        dispatch({
            type: GET_ALL_COMPANY_EMPLOYEE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getEmployeeByEmployeeCode = (employeeCode) => async dispatch => {

    try {

        const res = await axios.get(`/api/company/employee/${employeeCode}`);
        dispatch({
            type: GET_EMPLOYEE_BY_EMPLOYEE_CODE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}

export const deleteEmployeeByCode = (employeeCode) => async dispatch => {

    try {
        if (window.confirm("Are you sure you want to delete this employee")) {
            await axios.delete(`/api/company/employee/${employeeCode}`);
            dispatch({
                type: DELETE_EMPLOYEE_BY_ID,
                payload: employeeCode
            });
        }

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}



