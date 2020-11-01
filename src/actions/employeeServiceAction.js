import axios from 'axios';
import { GET_COMPANY_EMPLOYEE_SERVICE, GET_ERRORS } from './types';

export const postEmployeeService = (employeeServiceRequest, history) => async dispatch => {

    try {
        console.log("FInal Object : ", JSON.stringify(employeeServiceRequest));

        await axios.post("/api/company/employeeservice", employeeServiceRequest);
        dispatch({
            type: GET_COMPANY_EMPLOYEE_SERVICE,
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

export const getCompanyEmployeeService = () => async dispatch => {

    try {
        const res = await axios.get("/api/company/employeeservice");
        dispatch({
            type: GET_COMPANY_EMPLOYEE_SERVICE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}
