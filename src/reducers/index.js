import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import serviceReducers from './serviceReducers';
import employeeReducer from './employeeReducer';
import assetReducer from './assetReducer';
import companyServiceReducer from './companyServiceReducer';
import employeeServiceReducer from './employeeServiceReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    errors: errorReducer,
    loginState: loginReducer,
    service: serviceReducers,
    companyService: companyServiceReducer,
    employee: employeeReducer,
    employeeService: employeeServiceReducer,
    asset: assetReducer
});