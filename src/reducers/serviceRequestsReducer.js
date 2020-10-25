import {GET_ALL_SERVICE_REQUEST} from '../actions/types'

const initialState = {
    serviceRequests:[]
}
export default function (state=initialState,action) {

    switch (action.type) {
        default:
            return state;

        case GET_ALL_SERVICE_REQUEST : return { 
            ...state,
            serviceRequests:action.payload.serviceRequests
        }
    }
    
}