import {
    GET_ALL_SERVICES, GET_SERVICE_BY_ID, DELETE_SERVICE_BY_ID,
    GET_COMPANY_SERVICE_BY_COMPANY_CODE
} from '../actions/types';

const initialState = {
    services: [],
    service: {},
    companyService: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case GET_ALL_SERVICES:
            return {
                ...state,
                services: action.payload
            }
        case GET_SERVICE_BY_ID:
            return {
                ...state,
                service: action.payload
            }
        case DELETE_SERVICE_BY_ID:
            return {
                ...state,
                services: state.services.filter(service => service.serviceCode !== action.payload)
            }
        case GET_COMPANY_SERVICE_BY_COMPANY_CODE:
            return {
                ...state,
                companyService: action.payload
            }
    }
}