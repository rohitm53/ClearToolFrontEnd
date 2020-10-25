import axios from 'axios';
import {GET_ALL_SERVICE_REQUEST,GET_ERRORS} from '../actions/types';


export const getAllServiceRequest = () => async dispatch => {

    try {
        const res = await axios.get('/api/servicerequest/company');
        console.log(res);
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