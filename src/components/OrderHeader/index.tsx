 import React from 'react'
import LogoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { useCart } from '../../hooks/useCart'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';


function OrderHeader() {
  const {calculateTotalQuantity} = useCart()

  return (
    <Container>
    <Link to='/'>
    <img src={LogoImg} alt='Food Commerce'/>
    </Link>
    <div>
      <div>
        <h3>Meus Pedidos</h3>
        <span>
          <strong>
            {`${calculateTotalQuantity()}`.padStart(2, '0')}
          </strong>
        </span>
      </div>
      <CartIcon/>
    </div>
    </Container>
  )
}

export default OrderHeader
