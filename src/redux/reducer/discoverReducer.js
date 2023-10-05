import {DISCOVER} from "../types/types";


const initialState = {
    discover: {
        price: '',
        genre: {
            id: 0,
            name: 'Все жанры'
        },
        rating: 'Любой рейтинг',
        year: 'Все годы',
    },
}

export default function  discoverReducer (state = initialState, action) {
    switch (action.type) {
        case DISCOVER:
            return {...state, discover: action.payload}
        default:
            return state
    }
}