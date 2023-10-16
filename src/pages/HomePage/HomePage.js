import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/Layout";
import SwiperComponents from "../../components/swiper/SwiperComponents";
import './style.scss'
import Dropdown from "../../components/homepage/dropdown";
import {ID_PRICE} from "../../redux/types/types";
import {getListGenres} from "../../redux/action/moviesAction";
import {listDiscover} from "../../redux/action/discoverAction";


const rating = [9,8,7,6,5,4,3,2];
const ears = [];

const HomePage = () => {
    const genres = useSelector(state => state.moviesReducer.genres);
    const idPrice = useSelector(state => state.discoverReducer.idPrice);
    const dispatch = useDispatch();
    const discover = useSelector(state => state.discoverReducer)
    const resultDiscover = useSelector(state => state)

    // console.log(resultDiscover)
    // dispatch({type: 'CLEAR'})


    useEffect(() => {
        dispatch(getListGenres())
    },[genres.id])

    useEffect(() => {
        dispatch(listDiscover(discover))
    },[discover])

    const handleOptionClick = ( idPrice) => {
        dispatch({type: ID_PRICE, payload: idPrice})
    }

    useEffect(() => {
        for (let i = 2024; i > 1915; i--){
            ears.push(i)
        }
    },[ears])

    return (
        <Layout>
            <SwiperComponents/>
            <section className={'section-header'}>
                <div className="wrapper py">
                    <h2>Фильмы смотреть онлайн</h2>
                </div>
                <div className={'__selection'}>
                    <div className="wrapper">
                        <div className={'__left'}>
                            <div className={'__box'}>
                                <div
                                    onClick={event => handleOptionClick( 1)}
                                    className={idPrice === 1 || idPrice === 0 ? '__choise' : 'no_back'}
                                >
                                    Все
                                </div>
                                <div
                                    onClick={event => handleOptionClick( 2)}
                                    className={idPrice === 2 ? '__choise' : 'no_back'}
                                >
                                    Бесплатные
                                </div>
                                <div
                                    onClick={event => handleOptionClick( 3)}
                                    className={idPrice === 3 ? '__choise' : 'no_back'}
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
                    </div>
                </div>
            </section>
            <section className={''}>

            </section>
        </Layout>
    );
};

export default HomePage;