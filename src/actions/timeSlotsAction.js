import axios from "axios";
import {
    GET_COMPANY_AVAILABLE_TIME_SLOTS_BY_DATE,
    GET_ERRORS
} from './types';


export const getCompanyAvailableTimeSlotsByDate = (date) => async dispatch => {

    try{
        const res = await axios.get(`/api/company/time-slots/${date}`);
        dispatch({
            type:GET_COMPANY_AVAILABLE_TIME_SLOTS_BY_DATE,
            payload:res.data
        });

    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }

}

export const generateCompanyTimeSlotsForDate=(request)=> async dispatch => {

    try{
        const res = await axios.post(`/api/company/time-slots`,request);
        dispatch({
            type:GET_COMPANY_AVAILABLE_TIME_SLOTS_BY_DATE,
            payload:res.data.response
        });
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }

}