import axios from 'axios';
import {GET_ALL_SERVICE_REQUEST,GET_ERRORS,POST_ASSIGN_EMPLOYEE_REQUEST} from '../actions/types';


export const getAllServiceRequest = () => async dispatch => {

    try {
        const res = await axios.get('/api/company/service-request/all');
        dispatch({
            type:GET_ALL_SERVICE_REQUEST,
            payload:res.data
        });
    } 
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const postAssignEmployeeRequest = (assignEmployeeRequest) => async dispatch  => {

    try{
        const res = await axios.post("/api/company/service-request/assignee-employee",assignEmployeeRequest);
        // dispatch({
        //     type:POST_ASSIGN_EMPLOYEE_REQUEST,
        //     payload:res.data
        // });

    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        });
    }

}