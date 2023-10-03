import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/Layout";
import SwiperComponents from "../../components/swiper/SwiperComponents";
import './style.scss'
import {getListGenres} from "../../redux/action/moviesAction";
import Dropdown from "../../components/homepage/dropdown";

const HomePage = () => {
    const genres = useSelector(state => state.moviesReducer.genres)
    const [choise, setChoise] = React.useState(1)
    const rating = [9,8,7,6,5,4,3,2]
    const ears = []

    useEffect(() => {
        for (let i = 2024; i > 1915; i--){
            ears.push(i)
        }
    },[ears])

    console.log(ears)

    return (
        <Layout>
            <SwiperComponents/>
            <section className={'section-header'}>
                <div className="wrapper">
                    <h2>Фильмы смотреть онлайн</h2>
                </div>
                <div className={'__selection'}>
                    <div className="wrapper">
                        <div className={'__left'}>
                            <div className={'__box'}>
                                <div
                                    onClick={event => setChoise(1)}
                                    className={choise === 1 ? '__choise' : 'no_back'}
                                >
                                    Все
                                </div>
                                <div
                                    onClick={event => setChoise(2)}
                                    className={choise === 2 ? '__choise2' : 'no_back'}
                                >
                                    Бесплатные
                                </div>
                                <div
                                    onClick={event => setChoise(3)}
                                    className={choise === 3 ? '__choise3' : 'no_back'}
                                >
                                    По подписке
                                </div>
                            </div>
                            <div className={'__select-option'}>
                                <Dropdown genres={genres}/>
                                <Dropdown rating={rating}/>
                                <Dropdown ears={ears}/>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;