import React from 'react'
import { Button, Container } from './styles'
import manAndBurgerImg from '../../assets/man-and-burger.svg'

interface EmptyCartProps{
  title:string
}

function EmptyCart({title}: EmptyCartProps) {
  return (
  <Container>
    <h2>{title}</h2>
    <Button to="/">Checar cardápio</Button>
    <img src={manAndBurgerImg} alt='Homem com hamburger'/>
  </Container>
  )

}

export default EmptyCart
