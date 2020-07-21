import * as actionTypes from "../actions/types";

const initialState = {
    data: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PROFILE_DATA:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.SET_PROFILE_DATA:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        default: return state
    }
}