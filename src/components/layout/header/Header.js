import React, {memo, useEffect, useState} from 'react';
import logo from '../../assets/netflix.svg'
import {Link} from "react-router-dom";
import './style.scss'
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useDispatch} from "react-redux";

const Header = memo(() => {
    const dispatch = useDispatch();
    // const [headerStatus, setHeaderStatus] = useState(true);
    // let scrollPositionTop = 0
    // let a = 0
    const clearDiscover = () => {
        dispatch({type: 'CLEAR'})
    }



    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         a = scrollPositionTop
    //         scrollPositionTop = document.documentElement.scrollTop
    //     })
    // })
    //
    // console.log(headerStatus)



    // useEffect(() => {
    //     // scrollPositionTop = document.documentElement.scrollTop
    //     console.log(document.documentElement.scrollTop)
    // },[document.documentElement.scrollTop])



    return (
        <header className={'header-sticky'}>
            <div className="wrapper">
                <Link to={'/'} onClick={clearDiscover}>
                    <img src={logo} alt="logo-netflix-pet"/>
                </Link>
                <nav className={'__nav'}>
                    <Link to={'/404'} className={'__link'}>СЕРИАЛЫ</Link>
                    <Link to={'/movies'} className={'__link'}>ФИЛЬМЫ</Link>
                    <Link to={'/404'} className={'__link'}>ШОУ</Link>
                    <Link to={''} className={'__link'}>МУЛЬТФИЛЬМЫ</Link>
                    <Link to={'/404'} className={'__link'}>ПОДБОРКИ</Link>
                    <Link to={'/404'} className={'__link'}>ТВ</Link>
                </nav>
                <div className="__search-box">
                    <input
                        className={'__input'}
                        type="text"
                        placeholder={'Поиск...'}
                    />
                    <button className={'__btn'}>Поиск</button>
                </div>
                <div className="__user-box">
                    <Button
                        className={'__btn-sign-in'}
                        variant={'text'}
                    >
                        Войти
                        <AccountCircleIcon className={'__icon'}/>
                    </Button>
                </div>
            </div>
        </header>
    );
});

export default Header;