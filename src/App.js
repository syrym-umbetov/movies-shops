import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './pages/Navbar';
import SimilarMovies from './pages/SimilarMovies';

import Films from './pages/Films';

import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar />

      <Routes>
        {/* <Route path='/fibonnaci' element={<Fibonnaci />} /> */}
        <Route path='/movies' element={<Films />} />
        <Route path='/movies/:id' element={<MoviePage />} />
        <Route path='/similarmovies' element={<SimilarMovies />} />
      </Routes>
    </div>
  );
}

export default App;
