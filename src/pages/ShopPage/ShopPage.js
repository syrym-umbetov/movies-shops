import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductBlock from '../../components/ProductBlock/ProductBlock';
import './ShopPage.css';
import {
  addToBasket,
  fetchProducts,
  removeFromBasket,
} from '../../store/actions/shopActions';
import Basket from '../../components/Basket/Basket';
import OrderFormModal from '../../components/ModalShop/OrderFormModal';
import Categories from './../../components/Categories/Categories';

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products);
  const isLoading = useSelector((state) => state.shop.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToBasket = useCallback(
    (product) => {
      dispatch(addToBasket(product));
    },
    [dispatch]
  );

  if (isLoading)
    return (
      <div className='loadingio-spinner-gear-a5wk388fw2h'>
        <div className='ldio-pjn28h28ys'>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  return (
    <div style={{ position: 'relative' }}>
      <Basket />
      <OrderFormModal />
      <Categories />
      <div className='shop'>
        {products.map((product) => (
          <div key={product.id}>
            <ProductBlock
              product={product}
              onAddToBasket={() => handleAddToBasket(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
