import { applyMiddleware, combineReducers, createStore } from 'redux';
import { movies } from './reducers/movies';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { shop } from './reducers/shop';

export const store = createStore(
  combineReducers({
    movies,
    shop,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
