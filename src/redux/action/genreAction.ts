import axios from "axios";
import {actionTypes, genreAction} from '../reducer/genreListReducer'
import {Dispatch} from "redux";

export const getListGenre = () => {
    return async (dispatch: Dispatch<genreAction>) => {
        try {
            dispatch({type:actionTypes.GENRE_MOVIE_LIST_LOADING})
            const response = await axios(`https://api.themoviedb.org/3/genre/movie/list?language=ru-RU&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            dispatch({type:actionTypes.GENRE_MOVIE_LIST_SUCCESS, payload: response.data})
        }
        catch (error) {
            dispatch({type:actionTypes.GENRE_MOVIE_LIST_ERROR, payload:'Произошла ошибка при загрузке данных'})
        }
    }
}

// axios(`https://api.themoviedb.org/3/genre/movie/list?language=ru-RU&api_key=8f0ae93fda5be1d049d86fba7323e224`)
//     .then(response => {
//         dispatch({type: actionTypes.GENRE_MOVIE_LIST_SUCCESS, payload: response.data})
//     })