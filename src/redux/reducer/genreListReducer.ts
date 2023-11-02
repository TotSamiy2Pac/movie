
import {actionType} from "../types/typesTS";

export enum actionTypes {
    GENRE_MOVIE_LIST_SUCCESS = 'GENRE_MOVIE_LIST_SUCCESS',
    GENRE_MOVIE_LIST_ERROR = 'GENRE_MOVIE_LIST_ERROR',
    GENRE_MOVIE_LIST_LOADING = 'GENRE_MOVIE_LIST_LOADING'
}

interface GENRE_MOVIE_LIST_LOADING {
    type: actionTypes.GENRE_MOVIE_LIST_LOADING,
}
interface GENRE_MOVIE_LIST_ERROR {
    type: actionTypes.GENRE_MOVIE_LIST_ERROR,
    payload?: string
}
interface GENRE_MOVIE_LIST_SUCCESS {
    type: actionTypes.GENRE_MOVIE_LIST_SUCCESS,
    payload: any[]
}

export type genreAction = GENRE_MOVIE_LIST_SUCCESS | GENRE_MOVIE_LIST_ERROR | GENRE_MOVIE_LIST_LOADING

interface ListState {
    listGenreMovie : any[],
    loading: boolean,
    error: null | boolean
}

const initialState: ListState = {
    listGenreMovie: [],
    loading: false,
    error: null
}

export default function  genreListReducer (state = initialState, action:actionType):ListState {
    switch (action.type) {
        case actionTypes.GENRE_MOVIE_LIST_SUCCESS:
            return {loading:false, error: null,  listGenreMovie:action.payload}
        case actionTypes.GENRE_MOVIE_LIST_LOADING:
            return {loading:true, error: null,  listGenreMovie: []}
        case actionTypes.GENRE_MOVIE_LIST_ERROR:
            return {loading:false, error: true,  listGenreMovie: []}
        default:
            return state
    }
}