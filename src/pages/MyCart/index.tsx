  import React from 'react'
  import { Container } from './styles'
import OrderHeader from '../../components/OrderHeader'
import Table from './Table'
import { Head } from '../../components/Head'


  function MyCartPage() {
    return (
      <Container>
        <Head title='Carrinho'/>
        <OrderHeader/>
        <Table/>
      </Container>
    )
  }

  export default MyCartPage
