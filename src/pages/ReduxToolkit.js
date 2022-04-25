import React, { useEffect } from 'react';
import { CartIcon } from '../icons';
import '../style/redux.css';
import { useSelector, useDispatch } from 'react-redux';
import CartContainer from './../components/PhoneShop/CartContainer';
import { calculateTotals } from '../store/reducers/cart/cartSlice';
import Modal from '../components/PhoneShop/Modal';
import { getCartItems } from './../store/reducers/cart/cartSlice';

const ReduxToolkit = () => {
  const { amount } = useSelector((store) => store.cart);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div className='nav-center'>
        {isOpen && <Modal />}
        <h3>Phone Shop</h3>

        <div className='nav-container'>
          <CartIcon />

          <p>{amount}</p>
        </div>
      </div>
      <CartContainer />
    </div>
  );
};

export default ReduxToolkit;
