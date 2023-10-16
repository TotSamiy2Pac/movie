import React from 'react';
import logo from '../../assets/netflix.svg'
import {Link} from "react-router-dom";
import './style.scss'
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const clearDiscover = () => {
        dispatch({type: 'CLEAR'})
    }

    return (
        <header>
            <div className="wrapper">
                <Link to={'/'} onClick={clearDiscover}>
                    <img src={logo} alt="logo-netflix-pet"/>
                </Link>
                <nav className={'__nav'}>
                    <Link to={''} className={'__link'}>СЕРИАЛЫ</Link>
                    <Link to={''} className={'__link'}>ФИЛЬМЫ</Link>
                    <Link to={''} className={'__link'}>ШОУ</Link>
                    <Link to={''} className={'__link'}>МУЛЬТФИЛЬМЫ</Link>
                    <Link to={''} className={'__link'}>ПОДБОРКИ</Link>
                    <Link to={''} className={'__link'}>ТВ</Link>
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
};

export default Header;