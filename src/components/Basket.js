import React, { useCallback, useState } from 'react';

import { styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { removeFromBasket } from '../store/actions/shopActions';
import './Basket.css';
import {
  increaseCount,
  decreaseCount,
  calculateTotals,
} from './../store/actions/shopActions';

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
      background: 'rgb(243, 243, 130);',
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

export function BasketItem({ product, onRemove, count }) {
  const dispatch = useDispatch();
  return (
    <div className='basketItem'>
      <section className='basketItem__section-title'>
        <h1 className='section-title'>
          {count === 1 ? count + ' item' : count + ' items'}
        </h1>
      </section>
      <section className='basketItem__section-image'>
        <article className='basketItem__section-article'>
          <div className='basketItem__section-article-first-div'></div>
          <div className='article__image__title'>
            <div className='div__image'>
              <img src={product.image} alt=''></img>
            </div>
            <div className='article-h3'>
              <h3>{product.title}</h3>
            </div>
          </div>
          <div className='basketItem__section-article-third-div'>
            <div className='article-price'>
              ${(product.price * count).toFixed(2)}
            </div>
            <div className='article-count-container'>
              <button
                className='article-count article-count-button'
                onClick={() => {
                  dispatch(decreaseCount(product.id));
                }}
              >
                -
              </button>
              <div className='article-count'>{count}</div>
              <button
                className='article-count article-count-button'
                onClick={() => {
                  dispatch(increaseCount(product.id));
                }}
              >
                +
              </button>
            </div>
          </div>
        </article>
      </section>

      <Button
        className='basketItem__button'
        onClick={(e) => onRemove(e, product.id)}
      >
        Delete item
      </Button>
    </div>
  );
}

const Basket = () => {
  const [expanded, setExpanded] = useState(false);
  const basket = useSelector((state) => state.shop.basket);
  const dispatch = useDispatch();

  // {
  //   expanded
  //     ? (window.document.body.style.opacity = '0.2')
  //     : (window.document.body.style.opacity = '1');
  // }

  const handleRemoveFromBasket = useCallback(
    (e, id) => {
      e.stopPropagation();
      dispatch(removeFromBasket(id));
    },
    [dispatch]
  );

  return (
    <div>
      {expanded && <div className='basket__overlay'></div>}

      <Wrapper
        onClick={(e) => {
          if (expanded == false) setExpanded(true);
        }}
        expanded={expanded}
      >
        {expanded === false ? <BasketIcon>🪣</BasketIcon> : ''}
        {expanded && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
          >
            Return to Menu
          </Button>
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
        <p>
          {basket
            .reduce((acc, item) => {
              console.log('item.price', item.product.price);
              console.log('item.count', item.count);
              return (acc += item.product.price * item.count);
            }, 0)
            .toFixed(2)}
        </p>
      </Wrapper>
    </div>
  );
};

export default Basket;
