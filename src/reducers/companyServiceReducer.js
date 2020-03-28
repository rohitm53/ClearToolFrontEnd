import { GET_COMPANY_SERVICE_BY_COMPANY_CODE } from "../actions/types";

const initialState = {
    companyService: []
};

export default function (state = initialState, action) {


    switch (action.type) {
        default:
            return state;
        case GET_COMPANY_SERVICE_BY_COMPANY_CODE:
            return {
                ...state,
                companyService: action.payload
            }
    }

}