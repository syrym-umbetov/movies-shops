import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductBlock from '../../components/ProductBlock';
import './ShopPage.css';
import {
  addToBasket,
  fetchProducts,
  removeFromBasket,
} from '../../store/actions/shopActions';
import Basket from '../../components/Basket';

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToBasket = useCallback(
    (product) => {
      dispatch(addToBasket(product));
    },
    [dispatch]
  );

  return (
    <div>
      <Basket />
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
