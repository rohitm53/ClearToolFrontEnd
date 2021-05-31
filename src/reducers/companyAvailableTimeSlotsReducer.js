import {
    GET_COMPANY_AVAILABLE_TIME_SLOTS_BY_DATE
} from '../actions/types';

const initialState = {
    available_time_slots:[]
}

export default (state=initialState,action) => {
    
    switch(action.type){
       
        default:
            return state;
        
        case GET_COMPANY_AVAILABLE_TIME_SLOTS_BY_DATE : return{
            ...state,
            available_time_slots: action.payload
        }
    }

}