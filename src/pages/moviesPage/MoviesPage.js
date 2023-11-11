import React, {memo, useEffect, useMemo, useState} from 'react';
import Layout from "../../components/layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getListGenres} from "../../redux/action/moviesAction";
import {listDiscover} from "../../redux/action/discoverAction";
import SwiperComponents from "../../components/swiper/SwiperComponents";

import '../../components/swiperMovie/swiperMovie.scss'
import './style.scss'
import ModalMovie from "../../components/modalMovie/ModalMovie";
import Discover from "../../components/discover/Discover";
import DiscoverResult from "../../components/discover/DiscoverResult";

const MoviesPage = memo(() => {
    const genres = useSelector(state => state.moviesReducer.genres);
    const dispatch = useDispatch();
    const discover = useSelector(state => state.discoverReducer)
    const modalMovie = useSelector(state => state.moviesReducer.modalMovie)

    useEffect(() => {
        dispatch(getListGenres())
        console.log('id render')
    },[genres.id])


    useEffect(() => {
        dispatch(listDiscover(discover))
        // console.log('render')
    },[discover])


    // console.log('aaa')

    // useEffect(() => {
    //     console.log('render')
    // },[discover])

    console.log(discover)

    return (
        <Layout>
            <ModalMovie modalMovie={modalMovie}/>
            <SwiperComponents/>
            <Discover/>
            <DiscoverResult discover={discover}/>
            {/*<ListMovieByGenres/>*/}
            {
                // genres.map(genre => {
                //     return (
                //         <ListMovieByGenres genre={genre} key={genre.id} />
                //     )
                // })
            }
        </Layout>
    );
});

export default MoviesPage;