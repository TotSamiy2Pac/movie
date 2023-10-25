import {
    GET_LIST_GENRES, GET_MOVIE,
    GET_MOVIES, LIST_NEW_MOVIES,
    LIST_POPULAR_ANIMATION,
    LIST_POPULAR_TV,
    LIST_TOP_RATED_MOVIE, MODAL_MOVIE, MODAL_MOVIE_CLOSE,
    SWIPER_MOVIES
} from "../types/types";


const initialState = {
    popularMovies: [],
    topRatedMovies: [],
    newMovies: [],
    genres: [],
    popularTV: [],
    popularMultfilms: [],
    modalMovie: [],
    movie: [],
    isClose: true,
}

export default function  moviesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload}
        case SWIPER_MOVIES:
            return {...state, popularMovies: action.payload}
        case GET_LIST_GENRES:
            return {...state, genres: action.payload}
        case LIST_POPULAR_TV:
            return {...state, popularTV: action.payload}
        case LIST_POPULAR_ANIMATION:
            return {...state, popularMultfilms: action.payload}
        case LIST_TOP_RATED_MOVIE:
            return {...state, topRatedMovies: action.payload}
        case LIST_NEW_MOVIES:
            return {...state, newMovies: action.payload}
        case MODAL_MOVIE:
            return {...state, isClose: false, modalMovie: action.payload}
        case MODAL_MOVIE_CLOSE:
            return {...state, modalMovie: [], isClose: true, movie: []}
        case GET_MOVIE:
            return {...state, movie: action.payload}
        default:
            return state
    }
}