import axios from "axios";
import {
    GET_LIST_GENRES, GET_MOVIE, LIST_NEW_MOVIES,
    LIST_POPULAR_ANIMATION,
    LIST_POPULAR_TV,
    LIST_TOP_RATED_MOVIE,
    SWIPER_MOVIES
} from "../types/types";

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
export const getNewMovies = () => {
    // console.log('getMovies')
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/discover/movie?release_date.lte=2023&language=ru-RU&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => {
                // console.log(data.results)
                dispatch({type: LIST_NEW_MOVIES, payload: data.results})
            })
    }
}
export const getTopRatedMovie = () => {
    // console.log('getMovies')
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => {
                // console.log(data.results)
                dispatch({type: LIST_TOP_RATED_MOVIE, payload: data.results})
            })
    }
}

export const getPopularTv = () => {
    // console.log('getMovies')
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/tv/popular?language=ru-RU&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => {
                // console.log(data.results)
                dispatch({type: LIST_POPULAR_TV, payload: data.results})
            })
    }
}

export const getPopularMultfilms = () => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/discover/movie?with_genres=16&language=ru-RU&page=1&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => {
                // console.log(data)
                dispatch({type: LIST_POPULAR_ANIMATION, payload: data.results})
            })
    }
}

export const getMovie = (idMovie) => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/${idMovie}?language=ru-RU&api_key=8f0ae93fda5be1d049d86fba7323e224`)
            .then(({data}) => {
                dispatch({type: GET_MOVIE, payload: data})
            })
    }
}

export const getListGenres = () => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/genre/movie/list?language=ru`, options)
            .then(({data}) => dispatch({type: GET_LIST_GENRES, payload: data.genres}))
    }
}
