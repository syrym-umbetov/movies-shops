import { Button, styled } from '@mui/material';

const Box = styled('div')`
  padding: 16px 16px 12px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
  }
`;
const Image = styled('img')`
  width: 240px;
  height: 260px;
  object-fit: contain;
`;
const Title = styled('h3')`
  font-size: 16px;
  font-weight: normal;
  color: #19191d;
  margin-bottom: 12px;
`;
const Price = styled('h3')`
  font-size: 16px;
  color: #19191d;
  margin-top: 12px;
`;
export default function ProductBlock({
  product,
  onAddToBasket,
  removeFromBasket,
}) {
  return (
    <Box>
      <Image src={product.image} alt='' />
      <Title>{product.title}</Title>
      <Price>{product.price}$</Price>
      <Button onClick={onAddToBasket}>Add to Basket</Button>
    </Box>
  );
}
