import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getListGenre} from "../../redux/action/genreAction";
interface List  {
    // genres: [],
    genre : {
        id: number,
        name: string
}
}

const ListMovieByGenres:React.FC<List> = (props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getListGenre())
    },[])

    return (
        <>
        </>
    );
};

export default ListMovieByGenres;