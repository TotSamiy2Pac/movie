import {GET_GENRE, GET_RATING, GET_YEARS, ID_PRICE} from "../types/types";


const initialState = {
        idPrice: 0,
        genre: {
            id: '',
            name: 'Все жанры'
        },
        rating: 'Любой рейтинг',
        year: 'Все годы',
}

export default function  discoverReducer (state = initialState, action) {
    switch (action.type) {
        case GET_GENRE:
            return {...state, genre: action.payload}
        case GET_RATING:
            return {...state, rating: action.payload}
        case GET_YEARS:
            return {...state, year: action.payload}
        case ID_PRICE:
            return {...state, idPrice: action.payload}
        case 'CLEAR':
            return state = initialState
        default:
            return state
    }
}