import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './pages/Navbar';
import SimilarMovies from './pages/Movies/SimilarMovies';
import Films from './pages/Movies/Films';
import MoviePage from './pages/Movies/MoviePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ReduxToolkit from './pages/ReduxToolkit';

function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar />

      <Routes>
        {/* <Route path='/fibonnaci' element={<Fibonnaci />} /> */}
        <Route path='/movies' element={<Films />} />
        <Route path='/movies/:id' element={<MoviePage />} />
        <Route path='/similarmovies' element={<SimilarMovies />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/phoneshop' element={<ReduxToolkit />} />
      </Routes>
    </div>
  );
}

export default App;
