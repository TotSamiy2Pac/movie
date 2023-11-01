import React, {memo, useEffect} from 'react';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {MODAL_MOVIE_CLOSE} from "../../redux/types/types";
import {getMovie} from "../../redux/action/moviesAction";
import {Link} from "react-router-dom";
const ModalMovie = memo(({modalMovie}) => {
    const dispatch = useDispatch()
    const isClose = useSelector(state => state.moviesReducer.isClose)
    const movie = useSelector(state => state.moviesReducer.movie)

    useEffect(() => {
        if (modalMovie.id) {
            dispatch(getMovie(modalMovie.id))
        }
    },[modalMovie])
    const handleCloseModalMovie = () => {
        dispatch({type:MODAL_MOVIE_CLOSE})
    }
    // console.log(movie)
    return (
        <>
            {movie.id &&
                <div
                    className={'modalMovie'}
                    style={{
                        display: isClose ? 'none' : 'block' ,
                        backgroundImage: `linear-gradient(rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.9) 100%),
                                  url(https://image.tmdb.org/t/p/w1280/${modalMovie.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }}
                >
                    <div
                        className={'modalMovie-btn__close'}
                        onClick={handleCloseModalMovie}
                    >
                        <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M13.015 13.308a.98.98 0 01-1.385 0L6.707 8.385 1.671 13.42a.98.98 0 01-1.384-1.384L5.322 7 .287 1.964A.98.98 0 011.67.58l5.036 5.035L11.63.692a.98.98 0 111.385 1.385L8.092 7l4.923 4.923a.98.98 0 010 1.385z"
                                  fill="#fff"
                            >
                            </path>
                        </svg>
                    </div>
                    <div className={'modalMovie-main'}>
                        <h2 className={'modalMovie-main__title'}>{modalMovie.title || modalMovie.name}</h2>
                        <p className={'modalMovie-main__description'}>
                            {modalMovie.overview &&
                            modalMovie.overview.length > 320 ? modalMovie.overview.slice(0, 290) + '...' : modalMovie.overview
                            }
                        </p>
                    </div>
                    <div className={'modalMovie-preview'}>
                        <div className={'modalMovie-preview__info'}>
                            <div
                                className={'modalMovie-preview__rating-icon'}
                                style={modalMovie.vote_average < 6.5 ? {backgroundColor: '#646464'} : null}
                            >
                                {modalMovie.vote_average}
                            </div>
                            <div className={''}>
                                <div className={'modalMovie-preview__info-span'}>
                                    <span>{movie.release_date.slice(0,4)}</span>
                                    <span>{movie.genres[0].name}</span>
                                </div>
                                <div className={'modalMovie-preview__info-span'}>
                                    <span>{movie.production_countries[0].name}</span>
                                </div>
                            </div>
                        </div>
                        <div className={'modalMovie-preview__info modalMovie-preview__info-btn'}>
                            <div className={'modalMovie-preview__info-favorit-icon'}>
                                <i className={'icon'}></i>
                            </div>
                            <Link to={`/movies/${movie.id}`}>
                                <button className={'modalMovie-preview__info-play-btn'}>
                                    <svg width="12" height="12" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.154 11.793a1 1 0 010 1.614L2.071 24.43a1 1 0 01-1.59-.808V1.58A1 1 0 012.072.77l15.083 11.022z" fill="#fff"/>
                                    </svg>
                                    начать просмотр
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    );
});

export default ModalMovie;