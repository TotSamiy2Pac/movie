import React from 'react';
import {Navigation, Mousewheel, Scrollbar, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

import './swiperMovie.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {MODAL_MOVIE} from "../../redux/types/types";

const SwiperMovie = ({list, title, id}) => {
    const dispatch = useDispatch();
    const handleFavorit = () => {

    }

    const handleModalMovie = (movie) => {
        // console.log(movie)
        dispatch({type: MODAL_MOVIE, payload: movie})
    }

    return (
        <>
            <Link to={id === 1 ? 'movies' : id === 2 ? 'serials' : 'multfilms'}>
                <h2 className={'title-swiper'}>{title}</h2>
            </Link>
            <Swiper
                slidesPerView={4.5}
                spaceBetween={0}
                navigation={true}
                mousewheel={{forceToAxis: true}}
                // direction={'horizontal'}
                freeMode={true}
                speed={700}
                // scrollbar={true}
                modules={[Navigation, Mousewheel, Scrollbar, FreeMode]}
                className="mySwiper miniSwiper"
            >
                {
                    list.map(movie => {
                        return(
                            <SwiperSlide key={movie.id}>
                                    <div className={'imgMovie'}>
                                        <Link key={movie.id} to={`/movie/${movie.id}`}>
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
                                            onClick={handleFavorit}
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
                                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                                        {movie.title || movie.name}
                                    </Link>
                                </div>
                                <div className={'subscription'}>Подписка</div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};

export default SwiperMovie;