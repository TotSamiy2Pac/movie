import {GET_GENRE, GET_RATING, GET_YEARS, ID_PRICE, PAGE} from "../types/types";


const initialState = {
        idPrice: '',
        genre: {
            id: '',
            name: 'Все жанры'
        },
        rating: 'Любой рейтинг',
        year: 'Все годы',
        page: 1,
}

export default function  discoverReducer (state = initialState, action) {
    switch (action.type) {
        case GET_GENRE:
            return {...state, genre: action.payload, page: 1}
        case GET_RATING:
            return {...state, rating: action.payload, page: 1}
        case GET_YEARS:
            return {...state, year: action.payload, page: 1}
        case ID_PRICE:
            return {...state, idPrice: action.payload}
        case PAGE:
            return {...state, page: state.page + 1}
        case 'CLEAR':
            return state = initialState
        default:
            return state
    }
}