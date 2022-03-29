import React from 'react';

const SimilarBottom = ({ similars }) => {
  console.log('similars', similars);
  return (
    <div>
      <h1>Similar Movies</h1>
      <div className='similar__main'>
        {similars.map((item) => (
          <div className='similar__bottom' key={item.id}>
            <p>{item.title}</p>
            <img
              className='similar__images'
              src={`https://image.tmdb.org/t/p/original` + item.backdrop_path}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarBottom;
