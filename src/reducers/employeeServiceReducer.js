import { GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE } from '../actions/types';

const intialstate = {
    employeeService: []
};

export default function (state = intialstate, action) {

    switch (action.type) {
        default:
            return state;
        case GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE:
            return {
                ...state,
                employeeService: action.payload
            }
    }

}