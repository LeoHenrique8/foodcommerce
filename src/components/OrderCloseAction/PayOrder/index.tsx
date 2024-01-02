import React from 'react'

import { Container } from '../styles'
import { useCart } from '../../../hooks/useCart'
import { currencyFormat } from '../../../helpers/currencyFormat'


function PayOrder() {
  const   {cart, payOrder} = useCart()

  const totalAmmount = cart.reduce((acc, item)=> (acc += item.subtotal),0)

  return (
    <Container>
      <button type='submit' onClick={payOrder}>
        Pagar
      </button>
      <span>
        Total <strong>{currencyFormat(totalAmmount)}</strong>
      </span>
    </Container>
  )
}

export default PayOrder
