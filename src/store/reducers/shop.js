import {
  ADD_TO_BASKET,
  SET_PRODUCTS,
  REMOVE_FROM_BASKET,
  INCREASE_COUNT,
  DECREASE_COUNT,
  CALCULATE_TOTALS,
} from './../actions/shopActions';

const initState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('products')) || [],
  isLoading: true,
};

export function shop(state = initState, action) {
  const newState = { ...state };

  console.log(action.type);

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
    case INCREASE_COUNT:
      const product = newState.basket.find(
        (product) => product.product.id === action.payload
      );
      product.count++;
      console.log('product count', product.count);

      newState.basket = [...newState.basket];

      break;
    case DECREASE_COUNT:
      const productDecrease = newState.basket.find(
        (product) => product.product.id === action.payload
      );
      productDecrease.count--;
      newState.basket = [...newState.basket];
      break;
    case REMOVE_FROM_BASKET:
      newState.basket = state.basket.filter(
        (product) => product.product.id !== action.payload
      );
      break;
    default:
      return state;
  }

  localStorage.setItem('products', JSON.stringify(newState.basket));
  return newState;
}
