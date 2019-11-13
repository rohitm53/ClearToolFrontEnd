import {GET_SERVICES,GET_SERVICE} from '../actions/types';

const initialState = {
    services:[],
    service:{}
}

export default function(state=initialState,action){
    switch (action.type) {
        default :
                return state;
        case GET_SERVICES: 
                return{
                    ...state,
                    services:action.payload
                 }
        case GET_SERVICE : 
                return {
                    ...state,
                    service:action.payload
                }
    }
}