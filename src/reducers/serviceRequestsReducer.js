import {
    GET_ALL_AVAILABLE_EMPLOYEE,
    GET_ALL_SERVICE_REQUEST,
} from '../actions/types';

const initialState = {
    service_requests:[],
    availableEmployees:[]
}
export default function (state=initialState,action) {

    switch (action.type) {
        default:
            return state;

        case GET_ALL_SERVICE_REQUEST : return { 
            ...state,
            service_requests:action.payload.service_requests
        }
        case GET_ALL_AVAILABLE_EMPLOYEE : return {
            ...state,
            availableEmployees:action.payload.availableEmployees
        }
   
    }
    
}