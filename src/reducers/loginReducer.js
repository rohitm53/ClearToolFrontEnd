import { GET_LOGIN_ERROR, SAVE_COMPANY_CODE } from '../actions/types';

const intitialState = {
    errorMessage: '',
    companyCode: ''
}

export default function (state = intitialState, action) {

    switch (action.type) {
        default:
            return state;
        case GET_LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case SAVE_COMPANY_CODE:
            return {
                ...state,
                companyCode: action.payload
            }
    }
}