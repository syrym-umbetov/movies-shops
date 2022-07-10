import {
  ADD_TO_BASKET,
  SET_PRODUCTS,
  REMOVE_FROM_BASKET,
  INCREASE_COUNT,
  DECREASE_COUNT,
  OPEN_MODAL,
  CLOSE_MODAL,
  DO_NOTHING,
  SET_LOADING,
} from './../actions/shopActions';

const initState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('products')) || [],
  isLoading: false,
  modalOpen: false,
};

export function shop(state = initState, action) {
  const newState = { ...state };

  switch (action.type) {
    case SET_PRODUCTS:
      newState.products = action.payload;
      break;
    case SET_LOADING:
      newState.isLoading = action.payload;
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

      newState.basket = [...newState.basket];

      break;
    case DECREASE_COUNT:
      const productDecrease = newState.basket.find(
        (product) => product.product.id === action.payload
      );
      productDecrease.count--;
      if (productDecrease.count < 0) {
        newState.basket = state.basket.filter(
          (product) => product.product.id !== action.payload
        );
      }
      console.log(productDecrease.count);
      newState.basket = [...newState.basket];
      break;
    case REMOVE_FROM_BASKET:
      newState.basket = state.basket.filter(
        (product) => product.product.id !== action.payload
      );
      break;
    case OPEN_MODAL:
      newState.modalOpen = true;
      break;
    case CLOSE_MODAL:
      newState.modalOpen = false;
      break;
    case DO_NOTHING:
      if (newState.basket === []) {
        alert('close');
      }
      break;
    default:
      return state;
  }

  localStorage.setItem('products', JSON.stringify(newState.basket));
  return newState;
}
