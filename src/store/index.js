import { applyMiddleware, combineReducers, createStore } from 'redux';
import { movies } from './reducers/movies';
// import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart/cartSlice';
import modalReducer from './reducers/modal/modalSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { shop } from './reducers/shop';

export const store = createStore(
  combineReducers({
    movies,
    shop,
    cart: cartReducer,
    modal: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
