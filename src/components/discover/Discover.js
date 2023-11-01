import React, {memo} from 'react';
import DropDown from "../dropdown/DropDown";
import {useDispatch, useSelector} from "react-redux";
import {ID_PRICE} from "../../redux/types/types";

import './style.scss'

const rating = [9,8,7,6,5,4,3,2];
const ears = [];
for (let i = 2023; i > 1915; i--){
    ears.push(i)
}
const Discover = memo(() => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.moviesReducer.genres);
    const idPrice = useSelector(state => state.discoverReducer.idPrice);

    const handleOptionClick = ( idPrice) => {
        dispatch({type: ID_PRICE, payload: idPrice})
    }
    return (
        <>
            <section className={'section-header'}>
                <div className="wrapper">
                    <h2 className={'title'}>Фильмы смотреть онлайн</h2>
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
                                <DropDown genres={genres}/>
                                <DropDown rating={rating}/>
                                <DropDown ears={ears}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Discover;