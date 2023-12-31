import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getListFunc, getListGenre} from "../../redux/action/genreAction";
import {genreAction} from "../../redux/reducer/genreListReducer";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
interface List  {
    // genres: [],
    genre : {
        id: number,
        name: string
}
}

const ListMovieByGenres:React.FC<List> = ({genre}) => {
    const {listGenreMovie, loading, error} = useAppSelector(state => state.genreListReducer)
    // const dispatch = useAppDispatch()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListGenre(28))
    },[])

    if (loading) {
        return (
            <h2>Loading ...</h2>
        )
    }
    if (error) {
        return (
            <h2>Eroor network</h2>
        )
    }
    return (
        <>

        </>
    );
};

export default ListMovieByGenres;