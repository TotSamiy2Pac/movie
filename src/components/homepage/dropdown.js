import React, {useEffect, useRef, useState} from 'react';
import {getListGenres} from "../../redux/action/moviesAction";
import {useDispatch} from "react-redux";


const Dropdown = ({genres,rating,ears}) => {
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListGenres())
    },[])
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    // Обработчик клика вне блока
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Добавление слушателя события при монтировании компонента
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        console.log('add listener')
        return () => {
            // Удаление слушателя события при размонтировании компонента
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <>
            {genres &&
                <div ref={dropdownRef} className="dropdown" onClick={toggleDropdown}>
                    <div className="dropdown-toggle" >
                        {selectedOption || 'Все жанры'}
                    </div>
                    {isOpen && (
                        <div className={isOpen ? 'dropdown-content dropdown-click' : "dropdown-content"}>
                            <div
                                key={rating}
                                className="dropdown-item"
                                onClick={() => handleOptionClick('все жанры')}
                            >
                                Все жанры
                            </div>
                            {genres.map((genre, index) => (
                                <div
                                    key={index}
                                    className="dropdown-item"
                                    onClick={() => handleOptionClick(genre.name)}
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
                        {selectedOption || 'любой рейтинг'}
                    </div>
                    {isOpen && (
                        <div className={isOpen ? 'dropdown-content dropdown-click' : "dropdown-content"}>
                            <div
                                key={rating}
                                className="dropdown-item"
                                onClick={() => handleOptionClick('любой рейтинг')}
                            >
                                любой рейтинг
                            </div>
                            {rating.map((rate) => {
                                return (
                                        <div
                                            key={rate}
                                            className="dropdown-item"
                                            onClick={() => handleOptionClick(`больше ${rate}`)}
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
                        {selectedOption || 'любой год'}
                    </div>
                    {isOpen && (
                        <div className={isOpen ? 'dropdown-content dropdown-click' : "dropdown-content"}>
                            <div
                                key={ears}
                                className="dropdown-item"
                                onClick={() => handleOptionClick('любой год')}
                            >
                                любой год
                            </div>
                            {ears.map((ear) => {
                                    return (
                                        <div
                                            key={ear}
                                            className="dropdown-item"
                                            onClick={() => handleOptionClick(ear)}
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