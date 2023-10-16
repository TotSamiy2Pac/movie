import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies} from "../../redux/action/moviesAction";

const SwiperComponents = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(state => state.moviesReducer.popularMovies)
    useEffect(() => {
        dispatch(getPopularMovies())
    },[])

    return (
        <>
            <div className="wrapper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 422500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        popularMovies.map(movie => {
                            return (
                                <SwiperSlide key={movie.id} className={''}>
                                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                                        <div className="box-slide">
                                            <div className={'title-slide d-flex flex-column align-items-start justify-content-center'}>
                                                <div className={'d-flex gap-5'}>
                                                    <p>{movie.title}</p>
                                                    <p>{movie.vote_average} ☆</p>
                                                </div>
                                                <p className={'fs-5'}>{movie.release_date}</p>
                                            </div>
                                            <img className={'img-slide'} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt=""/>
                                            <div className={'description-slide'}>
                                                <p>{movie.overview}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </>
    );
};

export default SwiperComponents;