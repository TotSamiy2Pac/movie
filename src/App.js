import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage";
import {useSelector} from "react-redux";
import {getMovies} from "./redux/action/moviesAction";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/movies/:id'} element={<MoviePage/>}/>
        </Routes>
    );
};

export default App;