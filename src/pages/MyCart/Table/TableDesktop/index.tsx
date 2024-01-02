import React from 'react'
import { Container } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'
import {FaTrashAlt} from 'react-icons/fa'
import ConfirmOrder from '../../../../components/OrderCloseAction/ConfirmOrder'

function TableDesktop() {
  const {cart, addSnackIntoCart, removeSnackFromCart, deleteSnackFromCart} = useCart()
  return (
  <Container>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Itens</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item)=>(
          <tr key={`${item.snack} - ${item.id}`}>
            <td>
              <img src={item.image} alt={item.name}/>
            </td>
            <td>
              <h4>{item.name}</h4>
              <span>{currencyFormat(item.price)}</span>
            </td>
            <td>
              <div>
              <button type='button' onClick={()=> removeSnackFromCart(item)}>
              <img  src={minusImg} alt='Decrementar'/>
              </button>
              <span>{`${item.quantity}`.padStart(2,'0')}</span>
              <button type='button' onClick={()=>addSnackIntoCart(item)}>
                <img  src={plusImg} alt='Incrementar'/>
              </button>
              </div>
            </td>
            <td>
              <h5>
                {currencyFormat(item.subtotal )}
              </h5>
            </td>
            <td>
              <button className='deleteButton' type='button' onClick={()=> deleteSnackFromCart(item)}>
              <FaTrashAlt/>
              </button>
            </td>
          </tr>

        ))
        }
      </tbody>
    </table>
    <ConfirmOrder/>
  </Container>
  )
}

export default TableDesktop
