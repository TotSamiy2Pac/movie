import {LIST_DISCOVER, REFRESH_DISCOVER_LIST} from "../types/types";
import {actionType} from "../types/typesTS";


interface resultDiscoverState {
    resultDiscover: any[]
}

const initialState:resultDiscoverState = {
    resultDiscover: [],
}

export default function  resultDiscoverReducer (state = initialState, action:actionType):resultDiscoverState {
    switch (action.type) {
        case LIST_DISCOVER:
            // console.log(action.payload)
            return {...state, resultDiscover: [...state.resultDiscover, ...action.payload]}
        case REFRESH_DISCOVER_LIST:
            return {resultDiscover: []}
        case 'CLEAR':
            return initialState
        default:
            return state
    }
}