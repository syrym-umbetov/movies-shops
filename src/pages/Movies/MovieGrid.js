import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StarByGenre from '../../utils/StarByGenre';

const MovieGrid = ({ movies }) => {
  console.log('movies', movies);
  const navigate = useNavigate();
  return (
    <div className='main__div'>
      {movies.map((item) => (
        <div className='grid__div' key={item.id}>
          <div className='img__div'>
            <img
              className='img'
              src={
                item.backdrop_path
                  ? 'https://image.tmdb.org/t/p/original/' + item.backdrop_path
                  : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
              }
              alt='Hi'
              onClick={() => navigate('/movies/' + item.id)}
            />
            <StarByGenre />
            {StarByGenre(item)}
            <span className='span__title'>{item.original_title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
