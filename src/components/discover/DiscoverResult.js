import React, {memo, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {MODAL_MOVIE} from "../../redux/types/types";
import {listDiscover} from "../../redux/action/discoverAction";



let page = 1

const DiscoverResult = memo(({discover}) => {
    const resultDiscover = useSelector(state => state.resultDiscoverReducer.resultDiscover)
    // const discover = useSelector(state => state.discoverReducer)
    const dispatch = useDispatch();


    const handleModalMovie = (movie) => {
        // console.log(movie)
        dispatch({type: MODAL_MOVIE, payload: movie})
    }

    useEffect(() => {
        page = 1
    }, [])

    const handleMoreMovie = () => {
        // dispatch({type: PAGE})
        page += 1
        dispatch(listDiscover(discover,page))
    }

    // dispatch({type:'CLEAR'})
    // console.log(discover.page)
    return (
        <>
            <section className="discoverMovies">
                <div className="wrapper">
                    <div className="row">
                        {resultDiscover &&
                            resultDiscover.map(movie => {
                                return (
                                    <div className="col-1-5" key={movie.id} >
                                        <div className="box">
                                            <div className={'imgMovie'}>
                                                <Link to={`/movie/${movie.id}`}>
                                                    <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt=""/>
                                                </Link>
                                                <div
                                                    className={'icon ratingIcon'}
                                                    style={movie.vote_average < 6.5 ? {background: 'gray'} : null}
                                                >
                                                    {movie.vote_average}
                                                </div>
                                                <div
                                                    className={'icon-btn'}
                                                    // onClick={handleFavorit}
                                                >
                                                    <i className={'icon favoritIcon favoritIconFull'}></i>
                                                </div>
                                                <div
                                                    className={'icon-btn'}
                                                    onClick={event => handleModalMovie(movie)}
                                                >
                                                    <i className={'icon fullMovieIcon'}></i>
                                                </div>
                                            </div>
                                            <div className={'nameMovie'}>
                                                <Link to={`/movie/${movie.id}`}>
                                                    {movie.title.length > 18 ? movie.title.slice(0,18) + '...' : movie.title || movie.name}
                                                </Link>
                                            </div>
                                            <div className={'subscription'}>Подписка</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div
                        className={'more-btn'}
                        onClick={event => handleMoreMovie()}
                    >
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#fff"/>
                        </svg>
                        Показать еще
                    </div>
                </div>

            </section>
        </>
    );
});

export default DiscoverResult;