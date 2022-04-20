import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductBlock from '../components/ProductBlock';
import {
  addToBasket,
  fetchProducts,
  removeFromBasket,
} from '../store/actions/shopActions';
import Basket from './../components/Basket';
import { Container, Grid } from '@mui/material';

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products);

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
    <Container>
      <Basket />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductBlock
              product={product}
              onAddToBasket={() => handleAddToBasket(product)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopPage;
