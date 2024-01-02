import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

export function MyOrder() {
  const { cart, calculateTotalQuantity } = useCart();



  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <CartIcon />

      {cart.length !== 0 && (
        <span>{`${calculateTotalQuantity()}`.padStart(2, '0')}</span>
      )}
    </Container>
  );
}

export default MyOrder;
