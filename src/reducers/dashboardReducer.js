import { GET_DASHBOARD_REPORT } from "../actions/types";

const intialState = {
    availableResource: {}
}

export default function (state = intialState, action) {

    switch (action.type) {
        default:
            return state;
        case GET_DASHBOARD_REPORT:
            return {
                ...state,
                availableResource: action.payload
            }
    }
}