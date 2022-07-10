import { ActionTypes } from '@mui/base';
import axios from 'axios';

export const SET_PRODUCTS = 'shop/setProducts';

export const ADD_TO_BASKET = 'shop/addToBasket';

export const REMOVE_FROM_BASKET = 'shop/removeFromBasket';

export const INCREASE_COUNT = 'shop/increaseCount';
export const DECREASE_COUNT = 'shop/decreaseCount';
export const OPEN_MODAL = 'shop/openModal';
export const CLOSE_MODAL = 'shop/closeModal';
export const DO_NOTHING = 'shop/doNothing';
export const SET_LOADING = 'shop/loading';

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  axios.get('https://fakestoreapi.com/products').then((res) => {
    dispatch({
      type: SET_PRODUCTS,
      payload: res.data,
    });
    setTimeout(() => {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }, 1500);
  });
};
export const loading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};

export const addToBasket = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: product,
  });
};

export const increaseCount = (id) => {
  return {
    type: INCREASE_COUNT,
    payload: id,
  };
};
export const decreaseCount = (id) => {
  return {
    type: DECREASE_COUNT,
    payload: id,
  };
};

export const removeFromBasket = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BASKET,
    payload: id,
  });
};
