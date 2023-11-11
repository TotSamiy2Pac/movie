import axios, {AxiosResponse} from "axios";
import {actionTypes, genreAction} from '../reducer/genreListReducer'
import {Dispatch} from "redux";

export type getListFunc = (id: number) => void


export const getListGenre: any = (id: number) => {
    return async (dispatch: Dispatch<genreAction>) => {
        try {
            dispatch({type:actionTypes.GENRE_MOVIE_LIST_LOADING})
            const response:AxiosResponse = await axios(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=1&language=ru-RU&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            dispatch({type:actionTypes.GENRE_MOVIE_LIST_SUCCESS, payload: response.data})
        }
        catch (error) {
            dispatch({
                type:actionTypes.GENRE_MOVIE_LIST_ERROR,
                payload:'Произошла ошибка при загрузке данных'
            })
        }
    }
}

export const getListGenre1 = () => {
    return (dispatch:Dispatch<genreAction>) => {
        axios(`https://api.themoviedb.org/3/genre/movie/list?language=ru-RU&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then((response:AxiosResponse) => {
                 dispatch({type: actionTypes.GENRE_MOVIE_LIST_SUCCESS, payload: response.data})
            })
    }
}


// axios(`https://api.themoviedb.org/3/genre/movie/list?language=ru-RU&api_key=8f0ae93fda5be1d049d86fba7323e224`)
//     .then(response => {
//         dispatch({type: actionTypes.GENRE_MOVIE_LIST_SUCCESS, payload: response.data})
//     })