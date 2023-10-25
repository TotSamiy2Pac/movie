import React, {useEffect} from 'react';
import Layout from "../../components/layout/Layout";
import SwiperComponents from "../../components/swiper/SwiperComponents";
import './style.scss'

import SwiperMovie from "../../components/swwiperMovie/SwiperMovie";
import {useDispatch, useSelector} from "react-redux";
import {getNewMovies, getPopularMultfilms, getPopularTv, getTopRatedMovie} from "../../redux/action/moviesAction";
import ModalMovie from "../../components/modalMovie/modalMovie";

const HomePage = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.moviesReducer.popularMovies);
    const topRatedMovies = useSelector(state => state.moviesReducer.topRatedMovies);
    const popularTV = useSelector(state => state.moviesReducer.popularTV)
    const popularMultfilms = useSelector(state => state.moviesReducer.popularMultfilms)
    const newMovies = useSelector(state => state.moviesReducer.newMovies)
    const modalMovie = useSelector(state => state.moviesReducer.modalMovie)

    useEffect(() => {
        dispatch(getPopularTv())
        dispatch(getPopularMultfilms())
        dispatch(getTopRatedMovie())
        dispatch(getNewMovies())
    }, [])

    // console.log(modalMovie)
    return (
        <Layout>
            <SwiperComponents/>
            <section className={'main'}>
                <div className="wrapper">
                    <SwiperMovie list={newMovies} title={'Новинки'} id={1}/>
                    <SwiperMovie list={popularMovies} title={'Популярные фильмы'} id={1}/>
                    <SwiperMovie list={topRatedMovies} title={'Фильмы с высокми рейтингами'} id={1}/>
                    <SwiperMovie list={popularTV} title={'Популярные сериалы'} id={2}/>
                    <SwiperMovie list={popularMultfilms} title={'Популярные мультфильмы'} id={3}/>
                </div>
            </section>
            <ModalMovie modalMovie={modalMovie}/>
        </Layout>
    );
};

export default HomePage;
