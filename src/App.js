import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'movies'} element={<MoviesPage/>} />
            <Route path={'serials'} element={<MoviesPage/>} />
            <Route path={'/movies/:id'} element={<MoviePage/>}/>
            <Route path={'/films/:genre/:rating/:year'} element={<HomePage/>}/>
            <Route path={'/films/:rating'} element={<MoviePage/>}/>
            <Route path={'/films/:genre'} element={<HomePage/>}/>
        </Routes>
    );
};

export default App;