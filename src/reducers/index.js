import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import serviceReducers from './serviceReducers';

export default combineReducers({
    errors:errorReducer,
    service:serviceReducers
});