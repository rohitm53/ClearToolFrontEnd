import axios from "axios";
import { GET_ERRORS, GET_ALL_ASSETS_BY_COMPANY_CODE, DELETE_ASSET_BY_ASSET_CODE, GET_ASSET_BY_ASSET_CODE } from "./types";

export const postAsset = (asset, history) => async dispatch => {

    try {

        await axios.post("/api/company/asset", asset);
        history.push("/assetlist");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}

export const getAllCompanyAssets = (companyCode) => async dispatch => {
    try {
        const res = await axios.get(`/api/company/asset/companyasset/${companyCode}`);
        dispatch({
            type: GET_ALL_ASSETS_BY_COMPANY_CODE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const deleteAssetByCode = (code) => async dispatch => {
    try {

        if (window.confirm("Are you sure you want to delete this asset")) {
            await axios.delete(`/api/company/asset/${code}`);
            dispatch({
                type: DELETE_ASSET_BY_ASSET_CODE,
                payload: code
            });
        }

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getAssetByAssetCode = (code) => async dispatch => {

    try {

        const res = await axios.get(`/api/company/asset/${code}`);
        dispatch({
            type: GET_ASSET_BY_ASSET_CODE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}