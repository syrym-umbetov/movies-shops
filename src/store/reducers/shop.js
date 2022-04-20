import {
  ADD_TO_BASKET,
  SET_PRODUCTS,
  REMOVE_FROM_BASKET,
} from './../actions/shopActions';
const initState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('products')) || [],
};
export function shop(state = initState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_PRODUCTS:
      newState.products = action.payload;
      break;
    case ADD_TO_BASKET:
      const existedProduct = newState.basket.find(
        (product) => product.product.id === action.payload.id
      );
      if (existedProduct) {
        existedProduct.count++;
        newState.basket = [...newState.basket];
      } else {
        newState.basket = [
          ...newState.basket,
          { product: action.payload, count: 1 },
        ];
      }
      break;
    case REMOVE_FROM_BASKET:
      console.log('payload', action.payload);
      newState.basket = state.basket.filter(
        (product) => product.product.id !== action.payload
      );
      break;
    default:
      return state;
  }
  console.log('basket', newState.basket);
  localStorage.setItem('products', JSON.stringify(newState.basket));
  return newState;
}
