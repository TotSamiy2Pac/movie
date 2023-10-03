import axios from "axios";
import {GET_LIST_GENRES, SWIPER_MOVIES} from "../types/types";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjBhZTkzZmRhNWJlMWQwNDlkODZmYmE3MzIzZTIyNCIsInN1YiI6IjY0ZTZlZjVmZTg5NGE2MDBlNGU1OTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eThVDIYIb3Rxt4EFmv0CHbSk3DU0bTd0x1wkcEhcmtk'
    }
};


export const getPopularMovies = () => {
    // console.log('getMovies')
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => {
                // console.log(data.results)
                dispatch({type: SWIPER_MOVIES, payload: data.results})
            })
    }
}
export const getListGenres = () => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/genre/movie/list?language=ru`, options)
            .then(({data}) => dispatch({type: GET_LIST_GENRES, payload: data.genres}))
    }
}
