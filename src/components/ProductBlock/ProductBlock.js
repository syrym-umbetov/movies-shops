import './ProductBlock.css';

export default function ProductBlock({
  product,
  onAddToBasket,
  removeFromBasket,
}) {
  return (
    <div className='productblock'>
      <img src={product.image} alt='' />
      <h3 className='productblock__title'>{product.title}</h3>
      <h3 className='productblock__price'>{product.price}$</h3>
      <button className='productblock__button' onClick={onAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
}
