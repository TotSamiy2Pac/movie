import React from 'react';
import {Navigation, Mousewheel, Scrollbar, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

import './swiperMovie.scss'

const SwiperMovie = () => {

    const handleFavorit = () => {

    }

    return (
        <>
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
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div
                            className={'icon ratingIcon'}
                        >
                            7.8
                        </div>
                        <div
                            className={'icon-btn'}
                            onClick={handleFavorit}
                        >
                            <i className={'icon favoritIcon favoritIconFull'}></i>
                        </div>
                        <div
                            className={'icon-btn'}
                        >
                            <i className={'icon fullMovieIcon'}></i>
                        </div>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'imgMovie'}>
                        <img src={'https://picsum.photos/1920'} />
                        <div className={'icon ratingIcon'}>
                            7.8
                        </div>
                        <a href="#">
                            <i className={'icon favoritIcon'}></i>
                        </a>
                        <a href="#">
                            <i className={'icon fullMovieIcon'}></i>
                        </a>
                    </div>
                    <div className={'nameMovie'}>
                        <a className="">
                            Film
                        </a>
                    </div>
                    <div className={'subscription'}>Подписка</div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default SwiperMovie;