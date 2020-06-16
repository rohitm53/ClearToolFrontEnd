import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import serviceReducers from './serviceReducers';
import employeeReducer from './employeeReducer';
import assetReducer from './assetReducer';
import companyServiceReducer from './companyServiceReducer';
import employeeServiceReducer from './employeeServiceReducer';
import dashboardReducer from './dashboardReducer';
import securityReducer from './securityReducer';

export default combineReducers({
    security: securityReducer,
    errors: errorReducer,
    service: serviceReducers,
    companyService: companyServiceReducer,
    employee: employeeReducer,
    employeeService: employeeServiceReducer,
    asset: assetReducer,
    dashboardState: dashboardReducer
});