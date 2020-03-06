import axios from 'axios';
import { GET_ERRORS, GET_ALL_EMPLOYEES, GET_ALL_COMPANY_EMPLOYEE, DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE } from './types';

export const postEmployee = (employee, history) => async dispatch => {
    try {
        await axios.post("/api/employee", employee);
        history.push("/employeelist");
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
        const res = await axios.get('/api/employee/all');
        dispatch({
            type: GET_ALL_EMPLOYEES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getAllCompanyEmployees = (companyCode) => async dispatch => {
    try {
        const res = await axios.get(`/api/employee/companyemployee/${companyCode}`);
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

export const deleteEmployeeByCode = (employeeCode) => async dispatch => {

    try {
        if (window.confirm("Are you sure you want to delete this employee")) {
            await axios.delete(`/api/employee/${employeeCode}`);
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

export const getEmployeeServicebyCompany = (companyCode) => async dispatch => {

    try {
        const res = await axios.get(`/api/employeeservice/${companyCode}`);
        dispatch({
            type: GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}
