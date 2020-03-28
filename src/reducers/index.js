import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import serviceReducers from './serviceReducers';
import employeeReducer from './employeeReducer';
import assetReducer from './assetReducer';
import companyServiceReducer from './companyServiceReducer';

export default combineReducers({
    errors: errorReducer,
    service: serviceReducers,
    companyService: companyServiceReducer,
    employee: employeeReducer,
    asset: assetReducer
});