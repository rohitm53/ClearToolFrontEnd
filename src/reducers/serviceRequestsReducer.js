import {GET_ALL_SERVICE_REQUEST,GET_AVAILABLE_EMPLOYEE_FOR_SERVICE,
    POST_ASSIGN_EMPLOYEE_REQUEST} from '../actions/types';

const initialState = {
    serviceRequests:[],
    availableEmployeeCode:[],
    assignEmployeeResponse:{}
}
export default function (state=initialState,action) {

    switch (action.type) {
        default:
            return state;

        case GET_ALL_SERVICE_REQUEST : return { 
            ...state,
            serviceRequests:action.payload.serviceRequests
        }
        
        case GET_AVAILABLE_EMPLOYEE_FOR_SERVICE : return {
            ...state,
            availableEmployeeCode:action.payload
        }
        case POST_ASSIGN_EMPLOYEE_REQUEST : return {
            ...state,
            assignEmployeeResponse:action.payload
        }
    }
    
}