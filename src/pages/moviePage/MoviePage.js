import React from 'react';
import {useParams} from "react-router-dom";

const MoviePage = () => {
    const id = useParams().id
    return (
        <div>
            this is movie page
        </div>
    );
};

export default MoviePage;