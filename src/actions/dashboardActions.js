import axios from 'axios';
import { GET_ERRORS, GET_DASHBOARD_REPORT } from './types';

export const getDashboardReportbyCompanyCode = (companyCode) => async dispatch => {

    try {

        const res = await axios.get(`/api/dashboard/${companyCode}`);
        dispatch({
            type: GET_DASHBOARD_REPORT,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }

}