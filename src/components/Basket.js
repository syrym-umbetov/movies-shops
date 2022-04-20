import React, { useCallback, useState } from 'react';

import { styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { removeFromBasket } from '../store/actions/shopActions';

const Wrapper = styled('div')`
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  ${({ expanded }) =>
    expanded && {
      width: '400px',
      height: '400px',
      background: 'white',
      border: '1px solid red',
      borderRadius: '10px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '16px',
      fontSize: '12px',
    }}
`;

const BasketIcon = styled('span')`
  font-size: 40px;
`;

export function BasketItem({ product, onRemove, count }) {
  return (
    <div>
      {product.title}
      <Button onClick={(e) => onRemove(e, product.id)}>X </Button>
      <p>{count}</p>
    </div>
  );
}

const Basket = () => {
  const [expanded, setExpanded] = useState(false);
  const basket = useSelector((state) => state.shop.basket);
  const dispatch = useDispatch();

  const handleRemoveFromBasket = useCallback(
    (e, id) => {
      e.stopPropagation();
      dispatch(removeFromBasket(id));
    },
    [dispatch]
  );

  return (
    <Wrapper
      onClick={(e) => {
        if (expanded == false) setExpanded(true);
      }}
      expanded={expanded}
    >
      <BasketIcon>🪣</BasketIcon>
      {expanded &&
        basket.map((product) => (
          <BasketItem
            product={product.product}
            onRemove={handleRemoveFromBasket}
            key={product.product.id}
            count={product.count}
          />
        ))}
      {expanded && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
        >
          Close
        </Button>
      )}
    </Wrapper>
  );
};

export default Basket;
