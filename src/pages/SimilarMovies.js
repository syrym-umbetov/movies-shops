import React, { useState, useEffect } from 'react';
import SimilarBottom from '../components/SimilarBottom';

const SimilarMovies = () => {
  const [similars, setSimilars] = useState([]);
  useEffect(() => {
    fetch(`
   https://api.themoviedb.org/3/movie/634649/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSimilars(data.results.slice(0, 5));
        return data.results.slice(0, 5);
      })
      .then((response) => console.log('movie_response', response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='mainest__div'>
      <div className='similar__img'>
        <div className='similar_names'>
          <p>Fantasy</p>
          <h1>Zack Snyder's Justice League</h1>
          <p>
            Determined to ensure Superman's ultimate sacrifice was not in vain,
            Bruce Wayne aligns forces with Diana Prince with plans to recruit a
            team of metahumans to protect the world from an approaching threat
            of catastrophic proportions.
          </p>
        </div>
      </div>

      <SimilarBottom similars={similars} />
    </div>
  );
};

export default SimilarMovies;
