import React, { useEffect, useCallback } from 'react';
import MovieGrid from './MovieGrid';
import { Pagination, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovies,
  SET_MOVIES_QUERY,
  SET_MOVIES_SORT_BY,
} from '../store/actions/fetchMovies';

const Films = () => {
  const movies = useSelector((state) => state.movies.movies);
  const sortBy = useSelector((state) => state.movies.sortBy);
  const query = useSelector((state) => state.movies.query);
  const pageInfo = useSelector((state) => state.movies.pageInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const setSortBy = useCallback(
    (payload) => {
      dispatch({ type: SET_MOVIES_SORT_BY, payload });
    },
    [dispatch]
  );
  const setQuery = useCallback(
    (payload) => {
      dispatch({ type: SET_MOVIES_QUERY, payload });
    },
    [dispatch]
  );
  const searchMovies = useCallback(
    ({ page = 1, sort = sortBy } = {}) => {
      dispatch(fetchMovies({ page, sort, query }));
    },
    [dispatch, query, sortBy]
  );

  return (
    <div>
      <label htmlFor='Search'>Search</label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type='text'
      />

      <button onClick={() => searchMovies()}>Search</button>
      <Pagination
        count={pageInfo.total_pages}
        page={pageInfo.page}
        onChange={(e, v) => {
          searchMovies({ page: v });
        }}
      />
      <Select
        value={sortBy}
        label='Sort By'
        onChange={(e) => {
          setSortBy(e.target.value);
          searchMovies({ sort: e.target.value });
        }}
      >
        <MenuItem value={'popularity.desc'}>Poularity</MenuItem>
        <MenuItem value={'release_date.desc'}>Release Date</MenuItem>
        <MenuItem value={'vote_average.desc'}>Rating</MenuItem>
      </Select>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Films;
