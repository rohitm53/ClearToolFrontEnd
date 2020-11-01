import axios from 'axios';
import {GET_ALL_SERVICE_REQUEST,GET_ERRORS,
    GET_AVAILABLE_EMPLOYEE_FOR_SERVICE,POST_ASSIGN_EMPLOYEE_REQUEST} from '../actions/types';


export const getAllServiceRequest = () => async dispatch => {

    try {
        const res = await axios.get('/api/servicerequest/company');
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


export const getAvailableEmployeeForService= (serviceCode) => async dispatch => {

    try{

        const res = await axios.get(`/api/servicerequest/availableemployee/${serviceCode}`);
        dispatch({
            type:GET_AVAILABLE_EMPLOYEE_FOR_SERVICE,
            payload:res.data
        });
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }

}

export const postAssignEmployeeRequest = (assignEmployeeRequest) => async dispatch  => {

    try{
        const res = await axios.post("/api/servicerequest/assigneemployee",assignEmployeeRequest);
        dispatch({
            type:POST_ASSIGN_EMPLOYEE_REQUEST,
            payload:res.data
        });

    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }

}