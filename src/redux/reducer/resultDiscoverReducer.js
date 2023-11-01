import {LIST_DISCOVER, REFRESH_DISCOVER_LIST} from "../types/types";

const initialState = {
    resultDiscover: [],
}

export default function  resultDiscoverReducer (state = initialState, action) {

    switch (action.type) {
        case LIST_DISCOVER:
            // console.log(action.payload)
            return {...state, resultDiscover: [...state.resultDiscover, ...action.payload]}
        case REFRESH_DISCOVER_LIST:
            return {resultDiscover: []}
        case 'CLEAR':
            return state = initialState
        default:
            return state
    }
}