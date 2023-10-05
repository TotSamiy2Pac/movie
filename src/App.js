import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage";
const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/movies/:id'} element={<MoviePage/>}/>
            <Route path={'/films/:genre/:rating/:year'} element={<HomePage/>}/>
            <Route path={'/films/:rating'} element={<MoviePage/>}/>
            <Route path={'/films/:genre'} element={<HomePage/>}/>
        </Routes>
    );
};

export default App;