import React, { useCallback, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Button, styled } from '@mui/material';
import {
  DO_NOTHING,
  OPEN_MODAL,
  removeFromBasket,
} from '../../store/actions/shopActions';
import './Basket.css';
import { BasketItem } from './BasketItem';
import { CLOSE_MODAL } from './../../store/actions/shopActions';

const Wrapper = styled('div')`
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 100px;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  @media screen and (max-width: 650px) {
    width: 50px;
    height: 50px;
    ${({ expanded }) =>
      expanded && {
        width: '100%',
        height: '100vh',
        left: '1px',
      }}
  }
  ${({ expanded }) =>
    expanded && {
      display: 'flex',
      width: '400px',
      height: '100vh',
      background: 'rgb(206, 234, 230);',
      borderRadius: '0',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '16px',
      fontSize: '12px',
      right: '0',
      top: '0',
      border: 'none',
      opacity: '1',
      overflowY: 'scroll',
      scrollBehavior: 'smooth',
    }}
`;

const BasketIcon = styled('span')`
  font-size: 250%;
  &:hover {
    cursor: pointer;
  }
`;

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
  const handleModalOpen = useCallback(() => {
    dispatch({ type: OPEN_MODAL });
  }, [dispatch]);
  const handleModalClose = useCallback(() => {
    dispatch({ type: CLOSE_MODAL });
  }, [dispatch]);

  const doNothing = useCallback(() => {
    dispatch({ type: DO_NOTHING });
  }, [dispatch]);
  return (
    <div>
      {expanded && <div className='basket__overlay'></div>}

      <Wrapper
        onClick={(e) => {
          if (expanded == false) setExpanded(true);
        }}
        expanded={expanded}
      >
        {expanded && (
          <Button
            style={{
              color: 'rgb(253, 213, 44)',
              border: '1px solid rgb(226, 226, 233)',
              margin: '5px',
              backgroundColor: 'rgba(41, 27, 79)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
          >
            Return to Menu
          </Button>
        )}
        {expanded === false ? (
          <BasketIcon>🪣</BasketIcon>
        ) : (
          <section className='section__total'>
            <div className='total'>
              Total items of $
              {basket
                .reduce((acc, item) => {
                  return (acc += item.product.price * item.count);
                }, 0)
                .toFixed(2)}
            </div>
          </section>
        )}

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
            style={{ marginTop: 'auto' }}
            onClick={basket.length > 0 ? handleModalOpen : doNothing}
          >
            Submit Request
          </Button>
        )}
      </Wrapper>
    </div>
  );
};

export default Basket;
