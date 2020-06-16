import { SET_CURRENT_COMPANY } from '../actions/types';

const initialState = {
    companyCode: '',
    validToken: false
}

const booleanActionPayload = (payload) => {

    if (payload) {
        return true;
    } else {
        return false;
    }
}

export default function (state = initialState, action) {

    switch (action.type) {

        case SET_CURRENT_COMPANY:
            return {
                ...state,
                companyCode: action.payload,
                validToken: booleanActionPayload(action.payload)
            }

        default: return state
    }

}