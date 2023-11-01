import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/moviePage/MoviePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import Page404 from "./pages/pageNotFound/Page404";
import SerialsPage from "./pages/Serials/SerialsPage";
const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/404'} element={<Page404/>}/>
            <Route path={'/movies'} element={<MoviesPage/>} />
            <Route path={'/serials'} element={<SerialsPage/>} />
            <Route path={'/movies/:id'} element={<MoviePage/>}/>
            <Route path={'/films/:genre/:rating/:year'} element={<HomePage/>}/>
            <Route path={'/films/:rating'} element={<MoviePage/>}/>
            <Route path={'/films/:genre'} element={<HomePage/>}/>
        </Routes>
    );
};

export default App;