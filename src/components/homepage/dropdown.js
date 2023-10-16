import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GET_GENRE, GET_RATING, GET_YEARS} from "../../redux/types/types";
import {listDiscover} from "../../redux/action/discoverAction";


const Dropdown = ({genres,rating,ears}) => {
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const discover = useSelector(state => state.discoverReducer)

    // Обработчик клика вне блока
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Добавление слушателя события при монтировании компонента
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Удаление слушателя события при размонтировании компонента
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // useEffect(() => {
    //     dispatch(listDiscover(discover))
    // },[discover])

    const handleOptionClick = (option, id) => {
        if (id === 1) {
            dispatch({type: GET_GENRE, payload: option})
        } else if (id===2) {
            dispatch({type: GET_RATING, payload: typeof option === "number" ? option : 'Любой рейтинг'})
        } else if (id===3) {
            dispatch({type: GET_YEARS, payload: typeof option === "number" ? option : 'Все годы'})
        }
        setIsOpen(false);
    };

    return (
        <>
            {genres &&
                <div ref={dropdownRef} className="dropdown" onClick={toggleDropdown}>
                    <div className="dropdown-toggle" >
                        {discover.genre.name}
                    </div>
                    {isOpen && (
                        <div className={isOpen ? 'dropdown-content dropdown-click' : "dropdown-content"}>
                            <div
                                key={rating}
                                className="dropdown-item"
                                onClick={() => handleOptionClick({id:0, name:'все жанры'}, 1)}
                            >
                                Все жанры
                            </div>
                            {genres.map((genre, index) => (
                                <div
                                    key={index}
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        handleOptionClick(genre, 1)
                                    }}
                                >
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    )}
                    <svg width="18px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="0.768"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#fffCCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#fff">
                        </path> </g>
                    </svg>
                </div>
            }
            {rating &&
                <div ref={dropdownRef} className="dropdown" onClick={toggleDropdown}>
                    <div className="dropdown-toggle" >
                        {typeof discover.rating === "number" ?
                            `больше ${discover.rating}` :
                            discover.rating
                        }
                    </div>
                    {isOpen && (
                        <div className={isOpen ? 'dropdown-content dropdown-click' : "dropdown-content"}>
                            <div
                                key={rating}
                                className="dropdown-item"
                                onClick={() => handleOptionClick('любой рейтинг', 2)}
                            >
                                любой рейтинг
                            </div>
                            {rating.map((rate) => {
                                return (
                                        <div
                                            key={rate}
                                            className="dropdown-item"
                                            onClick={() => handleOptionClick(rate, 2)}
                                        >
                                            больше {rate}
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    )}
                    <svg width="18px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="0.768"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#fffCCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#fff">
                        </path> </g>
                    </svg>
                </div>
            }
            {ears &&
                <div ref={dropdownRef} className="dropdown" onClick={toggleDropdown}>
                    <div className="dropdown-toggle" >
                        {discover.year}
                    </div>
                    {isOpen && (
                        <div className={isOpen ? 'dropdown-content dropdown-click' : "dropdown-content"}>
                            <div
                                key={ears}
                                className="dropdown-item"
                                onClick={() => handleOptionClick('Все годы', 3)}
                            >
                                любой год
                            </div>
                            {ears.map((ear) => {
                                    return (
                                        <div
                                            key={ear}
                                            className="dropdown-item"
                                            onClick={() => handleOptionClick(ear, 3)}
                                        >
                                            {ear}
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    )}
                    <svg width="18px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="0.768"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#fffCCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#fff">
                        </path> </g>
                    </svg>
                </div>
            }
        </>
    );
};

export default Dropdown;