import axios from 'axios';
import { GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE, GET_ERRORS } from './types';

export const postEmployeeService = (employeeServiceRequest, history) => async dispatch => {

    try {
        console.log("FInal Object : ", JSON.stringify(employeeServiceRequest));

        await axios.post("/api/company/employeeservice", employeeServiceRequest);
        dispatch({
            type: GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE,
            payload: []
        });
        history.push("/employeelist");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (err) {
        dispatch({
            action: GET_ERRORS,
            payload: err.response.data
        });
    }

}

export const getEmployeeServicebyCompany = (companyCode) => async dispatch => {

    try {
        const res = await axios.get(`/api/company/employeeservice/${companyCode}`);
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
