import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import serviceReducers from './serviceReducers';
import employeeReducer from './employeeReducer';

export default combineReducers({
    errors:errorReducer,
    service:serviceReducers,
    employee:employeeReducer
});