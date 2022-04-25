import { increaseCount, decreaseCount } from '../../store/actions/shopActions';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
export function BasketItem({ product, onRemove, count }) {
  const dispatch = useDispatch();
  return (
    <div className='basketItem'>
      <section className='basketItem__section-image'>
        <article className='basketItem__section-article'>
          <div className='basketItem__section-article-first-div'></div>
          <div className='article__image__title'>
            <div className='div__image'>
              <img src={product.image} alt=''></img>
            </div>
            <div className='article-h3'>
              <h3>{product.title}</h3>
              <div className='article-h3__count'>
                <h1 className='section-title'>
                  {count === 1 ? count + ' item' : count + ' items'}
                </h1>
              </div>
            </div>
          </div>
          <div className='basketItem__section-article-third-div'>
            <div className='article-price'>
              ${(product.price * count).toFixed(2)}
            </div>
            <Button
              className='basketItem__button'
              onClick={(e) => onRemove(e, product.id)}
              style={{
                color: 'rgb(253, 213, 44)',
                border: '1px solid rgb(226, 226, 233)',
                margin: '5px',
              }}
            >
              Delete item
            </Button>
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
    </div>
  );
}
