import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface  DeleteSnackFromCart {
  id: number
  snack: string
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  calculateTotalQuantity:() => number
  removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
  deleteSnackFromCart: ({id, snack}: DeleteSnackFromCart) => void
  confirmOrder: () => void
  payOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)





export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])
  const navigate = useNavigate();


 // Função para calcular a quantidade total de itens no carrinho
  function calculateTotalQuantity(){
    // Inicializar um contador
    let totalQuantity = 0;

    // Iterar sobre cada item no carrinho
    cart.forEach((item) => {
      // Adicionar a quantidade do item ao contador
      totalQuantity += item.quantity;
    });

    // Retornar a quantidade total
    return totalQuantity;
  };
  //função de adicionar snacks ao carrinho
  function addSnackIntoCart(snack: SnackData): void {

  const snackExistentInCart = cart.find(
    (item) => item.snack == snack.snack && item.id == snack.id
    )

    if(snackExistentInCart){
      const newCart = cart.map((item) =>{
        if(item.id == snack.id){
          const quantity = item.quantity+1;
          const subtotal =quantity*item.price;

          return {...item, quantity: quantity, subtotal: subtotal};

        }
        return item
      })

    toast.success(`Outro ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos`)
    setCart(newCart)
      return
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] // push de um array

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos`)
    setCart(newCart)
  }
// Função que remove item a item do carrinho
  function removeSnackFromCart({id, snack}:RemoveSnackFromCart){

    //encontrando o indice do item que será removido

    const snackIndex = cart.findIndex(
      (item) => item.id == id && item.snack==snack
    );
    //caso o item nao for encontrado, o findIndex retorna -1
      if(snackIndex !== -1){

        const newCart = [...cart]
        const removedSnack = newCart[snackIndex]

        if(removedSnack.quantity > 1){
          const newQuantity = removedSnack.quantity -1;
          const newSubTotal = removedSnack.price * newQuantity;

          newCart[snackIndex] = {...removedSnack, quantity: newQuantity, subtotal: newSubTotal}
        }else{
          newCart.splice(snackIndex, 1)
        }
        //caso haja apenas um item, vamos remover a linha no cart

        return setCart(newCart);

      }


  }
// Função que deleta um item totalmente do carrinho
  function deleteSnackFromCart({id, snack}: DeleteSnackFromCart){

    const newCart = cart.filter((item) => !(item.id===id && item.snack===snack))

    setCart(newCart)
  }


  function confirmOrder(){
    return navigate('/payment')
  }

  function payOrder(){
    return
  }


  return (
    <CartContext.Provider value={{ cart, addSnackIntoCart, calculateTotalQuantity, removeSnackFromCart,deleteSnackFromCart, confirmOrder, payOrder }}>
    {children}
    </CartContext.Provider>
  )
}
