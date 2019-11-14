import axios from 'axios';
import {GET_ERRORS,GET_SERVICES,GET_SERVICE, DELETE_SERVICE} from './types';

export const createService = (service,history) => async dispatch => {

    try{
        await axios.post("/api/services",service);
        history.push("/dashboard");
        dispatch({
            type:GET_ERRORS, 
            payload:{}
        });
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }
}

export const getServices=()  => async dispatch => {
    try{
        const res = await axios.get("/api/services/all");
        dispatch({
            type:GET_SERVICES,
            payload:res.data
        });
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }
}

export const getService=(id,history) => async dispatch => {
    try{
        const res = await axios.get(`/api/services/${id}`);
        dispatch({
            type:GET_SERVICE,
            payload:res.data
        });
    }catch(err){
        history.push("/dashboard");
    }
}

export const deleteService = (id) => async dispatch => {

    try{
        if(window.confirm("Are you sure you want to delete this service")){
            await axios.delete(`api/services/${id}`);
            dispatch({
                type:DELETE_SERVICE,
                payload:id
            });
        }
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }
   
}