// import {GENRE_MOVIE_LIST} from "../types/types.js"


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

export interface ListAction {
    type: string;
    payload: any[]
}

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

export default function  genreListReducer (state = initialState, action:ListAction):ListState {
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