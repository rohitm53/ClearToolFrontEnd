import { GET_ALL_ASSETS_BY_COMPANY_CODE, DELETE_ASSET_BY_ASSET_CODE, GET_ASSET_BY_ASSET_CODE } from "../actions/types";

const intialState = {
    assets: [],
    asset: {}
}

export default function (state = intialState, action) {
    switch (action.type) {
        default:
            return state;

        case GET_ALL_ASSETS_BY_COMPANY_CODE:
            return {
                ...state,
                assets: action.payload
            };
        case GET_ASSET_BY_ASSET_CODE:
            return {
                ...state,
                asset: action.payload
            }
        case DELETE_ASSET_BY_ASSET_CODE:
            return {
                ...state,
                assets: state.assets.filter(asset => asset.code !== action.payload)
            }

    }
}