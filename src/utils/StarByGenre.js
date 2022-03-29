import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const StarByGenre = (item) => {
  return (
    <span className='starIcon'>
      {item.vote_average < 6 ? <StarIcon fontSize='small' /> : ''}
      {item.vote_average < 6 ? <StarIcon fontSize='small' /> : ''}
      {item.vote_average < 6 ? <StarIcon fontSize='small' /> : ''}
      {(6 < item.vote_average) & (item.vote_average < 8) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(6 < item.vote_average) & (item.vote_average < 8) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(6 < item.vote_average) & (item.vote_average < 8) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(6 < item.vote_average) & (item.vote_average < 8) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(8 < item.vote_average) & (item.vote_average < 10) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(8 < item.vote_average) & (item.vote_average < 10) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(8 < item.vote_average) & (item.vote_average < 10) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(8 < item.vote_average) & (item.vote_average < 10) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
      {(8 < item.vote_average) & (item.vote_average < 10) ? (
        <StarIcon fontSize='small' />
      ) : (
        ''
      )}
    </span>
  );
};

export default StarByGenre;
