import { HIDE_LOADER, SHOW_LOADER ,GET_ERRORS } from "./types";

export const showLoader = () => dispatch =>  {
    dispatch({
        type:SHOW_LOADER,
    });
}

export const hideLoader = () => dispatch =>  {
    dispatch({
        type:HIDE_LOADER,
    });
}

export const resetErrorAction = () => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: {}
    });
}