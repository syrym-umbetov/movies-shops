import axios from 'axios';

export const SET_PRODUCTS = 'shop/setProducts';

export const ADD_TO_BASKET = 'shop/addToBasket';

export const REMOVE_FROM_BASKET = 'shop/removeFromBasket';

export const INCREASE_COUNT = 'shop/increaseCount';
export const DECREASE_COUNT = 'shop/decreaseCount';

export const fetchProducts = () => (dispatch) => {
  axios.get('https://fakestoreapi.com/products').then((res) => {
    dispatch({
      type: SET_PRODUCTS,
      payload: res.data,
    });
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
