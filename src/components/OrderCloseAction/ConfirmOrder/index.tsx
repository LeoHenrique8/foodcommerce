import React from 'react'

import { Container } from '../styles'
import { useCart } from '../../../hooks/useCart'
import { currencyFormat } from '../../../helpers/currencyFormat'


function ConfirmOrder() {
  const   {cart, confirmOrder} = useCart()

  const totalAmmount = cart.reduce((acc, item)=> (acc += item.subtotal),0)

  return (
    <Container>
      <button type='button' onClick={confirmOrder}>
        Finalizar pedido
      </button>
      <span>
        Total <strong>{currencyFormat(totalAmmount)}</strong>
      </span>
    </Container>
  )
}

export default ConfirmOrder
