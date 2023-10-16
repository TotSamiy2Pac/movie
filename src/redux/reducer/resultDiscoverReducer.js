import {LIST_DISCOVER} from "../types/types";

const initialState = {
    resultDiscover: [],
}

export default function  resultDiscoverReducer (state = initialState, action) {

    switch (action.type) {
        case LIST_DISCOVER:
            // console.log(action.payload)
            return {...state, resultDiscover: action.payload}
        // case 'CLEAR':
        //     return state = initialState
        default:
            return state
    }
}