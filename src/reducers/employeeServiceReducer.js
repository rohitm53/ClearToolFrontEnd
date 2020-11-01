import { GET_COMPANY_EMPLOYEE_SERVICE } from '../actions/types';

const intialstate = {
    employeeService: []
};

export default function (state = intialstate, action) {

    switch (action.type) {
        default:
            return state;
        case GET_COMPANY_EMPLOYEE_SERVICE:
            return {
                ...state,
                employeeService: action.payload
            }
    }

}