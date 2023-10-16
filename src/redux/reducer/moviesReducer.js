import { GET_LIST_GENRES, GET_MOVIES, SWIPER_MOVIES} from "../types/types";


const initialState = {
    popularMovies: [],
    genres: [],
}

export default function  moviesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload}
        case SWIPER_MOVIES:
            return {...state, popularMovies: action.payload}
        case GET_LIST_GENRES:
            return {...state, genres: action.payload}
        default:
            return state
    }
}