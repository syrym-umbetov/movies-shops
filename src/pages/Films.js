import React, { useState, useEffect } from 'react';
import MovieGrid from './MovieGrid';

const Films = () => {
  const [shazams, setShazams] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShazams(data.results);
        return data.results;
      })
      .then((response) => {
        console.log('response', response);
      })

      .catch((err) => console.log(err));
  }, []);

  function search(query) {
    console.log(query);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=1&include_adult=false&query=${query}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setShazams(data.results);
        return data.results;
      });
  }

  return (
    <div>
      <label htmlFor='Search'>Search</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
      />

      <button onClick={() => search(value)}>Search</button>
      <button onClick={() => search('fantasy movies')}>Search Batman</button>
      <MovieGrid shazams={shazams} />
    </div>
  );
};

export default Films;
