import {
    GET_ALL_COMPANY_EMPLOYEE, GET_EMPLOYEE_BY_EMPLOYEE_CODE, DELETE_EMPLOYEE_BY_ID

} from '../actions/types';

const initialState = {
    employees: [],
    employee: {}

}
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case GET_ALL_COMPANY_EMPLOYEE:
            return {
                ...state,
                employees: action.payload
            }
        case GET_EMPLOYEE_BY_EMPLOYEE_CODE:
            return {
                ...state,
                employee: action.payload
            }
        case DELETE_EMPLOYEE_BY_ID:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.employeeCode !== action.payload)
            }

    }
}