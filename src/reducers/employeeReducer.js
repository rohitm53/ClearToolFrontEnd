import { GET_ALL_COMPANY_EMPLOYEE, GET_EMPLOYEE_BY_ID, DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE } from '../actions/types';

const initialState = {
    employees: [],
    employee: {},
    employeeService: []
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
        case GET_EMPLOYEE_BY_ID:
            return {
                ...state,
                employee: action.payload
            }
        case DELETE_EMPLOYEE_BY_ID:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.employeeCode !== action.payload)
            }
        case GET_EMPLOYEE_SERVICE_BY_COMPANY_CODE:
            return {
                ...state,
                employeeService: action.payload
            }
    }
}