import {GET_ALL_EMPLOYEES,GET_EMPLOYEE_BY_ID,DELETE_EMPLOYEE_BY_ID} from '../actions/types';

const initialState = {
    employees:[],
    employee:{}
}
export default function (state=initialState,action) {
    switch (action.type) {
        default:
                return state;
        case GET_ALL_EMPLOYEES:
                return{
                    ...state,
                    employees:action.payload
                }
        case GET_EMPLOYEE_BY_ID:
                return{
                    ...state,
                    employee:action.payload
                }
        case DELETE_EMPLOYEE_BY_ID : 
                return{
                    ...state,
                    employees:state.employees.filter(employee => employee.employeeCode!==action.payload)
            }    
    }    
}